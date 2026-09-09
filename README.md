![NullLayer privacy drafting toolkit](assets/cover.png)

# NullLayer

A structured **privacy-policy drafting toolkit** for AI-assisted workflows.

NullLayer helps collect business/privacy inputs, turn them into a consistent drafting brief, generate a first-pass policy with an LLM, and review the output against a repeatable checklist.

It is designed to improve drafting quality and workflow consistency — **not to certify GDPR, LGPD or any other legal compliance**.

> **Legal notice**
> Generated documents are drafts. Privacy obligations depend on the actual product, data flows, contracts, jurisdiction, role allocation and current law. A qualified privacy/legal professional should review material before it is relied on in production.

## What is included

- `PROMPT_SYSTEM.md` — guarded system prompt for policy drafting;
- `INPUT_GUIDE.md` — human-readable input guide;
- `schema/policy-input.schema.json` — machine-readable input contract;
- `schema/example-input.json` — example structured brief;
- `templates/` — starter drafting templates;
- `examples/` — sample inputs/outputs for demonstration;
- `workflow/privacy-generator.json` — illustrative workflow skeleton;
- `REVIEW_CHECKLIST.md` — human review checklist before publication.

## Intended workflow

```text
business facts
   ↓
structured privacy input
   ↓
validation / missing-information check
   ↓
LLM drafting prompt
   ↓
policy draft
   ↓
human legal/privacy review
   ↓
publication / product integration
```

The review step is part of the workflow, not an optional disclaimer at the end.

## Why structured input matters

Privacy policies are only as accurate as the underlying facts. A model cannot safely infer:

- what personal data is actually collected;
- which processors receive it;
- retention periods;
- international transfers;
- controller/processor roles;
- lawful bases;
- consent flows;
- children/minor handling;
- security practices;
- contact and rights-request channels.

NullLayer therefore treats missing information as a first-class state. The prompt is instructed to flag unknowns instead of inventing operational or legal facts.

## Quick start

1. Copy `schema/example-input.json` and replace the example values with verified facts.
2. Validate that required fields are present.
3. Use the structured facts together with `PROMPT_SYSTEM.md` in your preferred LLM workflow.
4. Review the output with `REVIEW_CHECKLIST.md`.
5. Obtain appropriate legal/privacy review before production use.

For manual workflows, `INPUT_GUIDE.md` provides the same concepts in checklist form.

## Supported drafting contexts

The current prompt contains drafting guidance for:

- Brazil / LGPD-oriented notices;
- EU / GDPR-oriented notices;
- SaaS;
- ecommerce;
- agencies;
- marketplaces;
- AI-enabled products.

"Support" means the toolkit can organize relevant drafting questions and sections. It does **not** mean that a generated document is legally compliant by default.

## Current maturity

NullLayer is currently a **prompt + schema + template toolkit**. It is not yet a full policy engine with jurisdiction rule modules, evidence-backed legal updates, automated processor inventories or formal compliance validation.

The next architectural step is to separate:

```text
input schema
   ↓
fact validation
   ↓
jurisdiction rules
   ↓
drafting plan
   ↓
LLM adapter
   ↓
output validator
```

See `ARCHITECTURE.md` for the target design.

## Safety and quality principles

1. Never invent a processor, retention period, legal basis or transfer mechanism.
2. Distinguish verified facts from assumptions and open questions.
3. Prefer placeholders such as `[REVIEW REQUIRED]` over fabricated certainty.
4. Avoid claims such as "fully compliant" or "production-ready" without independent review.
5. Keep model/provider credentials outside prompts, examples and repository files.
6. Treat generated legal text as a draft requiring human review.

## Development

The repository includes zero-dependency Node.js regression checks for documentation, schema and workflow contracts.

```bash
npm test
```

## Roadmap

- [x] guarded drafting prompt
- [x] structured input schema
- [x] human review checklist
- [x] full MIT license
- [x] CI/regression checks
- [ ] schema validator CLI
- [ ] jurisdiction rule modules
- [ ] processor/subprocessor inventory model
- [ ] output-section validator
- [ ] versioned legal-source references
- [ ] provider-neutral LLM adapters
- [ ] cookie/data-map generation from the same source facts

## License

MIT. See `LICENSE`.
