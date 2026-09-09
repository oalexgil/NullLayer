import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const readme = read('README.md');
const prompt = read('PROMPT_SYSTEM.md');
const license = read('LICENSE');
const review = read('REVIEW_CHECKLIST.md');
const schema = JSON.parse(read('schema/policy-input.schema.json'));
const example = JSON.parse(read('schema/example-input.json'));
const workflow = JSON.parse(read('workflow/privacy-generator.json'));

test('project does not present generated drafts as automatic compliance certification', () => {
  assert.match(readme, /not to certify GDPR, LGPD/i);
  assert.match(readme, /requires? appropriate privacy\/legal review/i);
  assert.match(prompt, /must \*\*not\*\* claim that the output is legally compliant/i);
  assert.match(prompt, /\[REVIEW REQUIRED:/);
});

test('structured schema defines the core verified-fact contract', () => {
  assert.equal(schema.type, 'object');
  assert.equal(schema.additionalProperties, false);
  for (const field of [
    'company_name',
    'website_url',
    'country',
    'business_type',
    'privacy_contact',
    'target_regions',
    'personal_data_categories',
    'processing_purposes',
  ]) {
    assert.ok(schema.required.includes(field), `${field} should be required`);
    assert.ok(schema.properties[field], `${field} should be defined`);
  }
});

test('example input satisfies the schema-required top-level fields', () => {
  for (const field of schema.required) {
    assert.ok(Object.hasOwn(example, field), `missing example field: ${field}`);
    const value = example[field];
    if (typeof value === 'string') assert.ok(value.length > 0, `${field} should not be empty`);
    if (Array.isArray(value)) assert.ok(value.length > 0, `${field} should not be empty`);
  }
  assert.equal(example.processing_purposes[0].legal_basis, null);
});

test('workflow is explicitly illustrative and contains a human review step', () => {
  assert.equal(workflow.status, 'illustrative-skeleton');
  assert.match(workflow.description, /not an import-ready or production automation/i);
  assert.ok(workflow.nodes.some((node) => /human privacy\/legal review/i.test(node.name)));
});

test('review checklist protects against unresolved placeholders and fabricated facts', () => {
  assert.match(review, /No `\[REVIEW REQUIRED: \.\.\.\]` placeholder remains unresolved/i);
  assert.match(review, /No invented article number, law, vendor or retention period appears/i);
});

test('MIT license contains preservation and liability clauses', () => {
  assert.match(license, /included in all copies or substantial portions/i);
  assert.match(license, /IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE/i);
});
