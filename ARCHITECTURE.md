# Architecture

## Current state

NullLayer is currently a prompt/template toolkit. It has useful building blocks, but the legal/privacy logic is still concentrated in prose and therefore difficult to validate mechanically.

Current flow:

```text
manual variables
   ↓
system prompt
   ↓
LLM
   ↓
Markdown policy draft
```

This is appropriate for experimentation, but not enough for a reliable policy-generation engine.

## Target architecture

```text
schema/
  policy-input.schema.json
        ↓
validation/
  facts.js
  missing-fields.js
        ↓
rules/
  common.js
  brazil-lgpd.js
  eu-gdpr.js
        ↓
planner/
  sections.js
  review-questions.js
        ↓
adapters/
  anthropic.js
  openai-compatible.js
  manual.js
        ↓
validation/
  output-sections.js
  unresolved-placeholders.js
        ↓
policy draft + review report
```

## Boundary rules

### Facts are not law

The input layer describes what the organization actually does. Jurisdiction modules may organize legal questions, but they should not fabricate missing operational facts.

### Rules are not model prose

Material jurisdiction rules should eventually be represented as versioned, testable configuration/code rather than only prompt wording.

### The LLM is a drafting adapter

The model should receive a drafting plan and verified facts. It should not be the only layer deciding what facts exist, which jurisdiction applies or whether a document is compliant.

### Review output is first-class

Every run should ideally produce two artifacts:

1. the policy draft;
2. a structured review report listing unknowns, assumptions and legal-review questions.

## Proposed domain objects

### PolicyInput

Structured organization/product facts matching `schema/policy-input.schema.json`.

### DraftingPlan

A deterministic list of sections, applicable fact references and review flags.

### ReviewIssue

Suggested fields:

```json
{
  "code": "RETENTION_MISSING",
  "severity": "review",
  "field": "retention_rules",
  "message": "Retention period has not been verified."
}
```

### PolicyDraft

Suggested fields:

```json
{
  "schemaVersion": 1,
  "jurisdictions": ["Brazil"],
  "markdown": "...",
  "reviewIssues": []
}
```

## Main engineering risks

- prompt text drifting away from schema fields;
- unsupported compliance claims;
- hidden assumptions about lawful bases or transfers;
- stale legal references;
- examples being mistaken for legal templates suitable for direct publication;
- provider-specific prompting becoming the architecture.

## Migration order

1. Establish input schema and review checklist.
2. Add regression tests for claims and schema consistency.
3. Build a schema validator CLI.
4. Create deterministic missing-fact detection.
5. Add jurisdiction rule modules with source/version metadata.
6. Generate a drafting plan before invoking an LLM.
7. Add output validation and unresolved-placeholder checks.
8. Add provider-neutral adapters.
