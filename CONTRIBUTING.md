# Contributing

## Principles

NullLayer should optimize for factual discipline, reviewability and reproducibility — not for legal-sounding confidence.

When contributing:

1. do not add claims that generated policies are automatically compliant;
2. do not invent or hard-code legal conclusions without clear scope and review;
3. keep structured inputs aligned with prompt fields;
4. add tests when changing schema or required prompt safeguards;
5. use synthetic example organizations/data;
6. never commit credentials or confidential client facts;
7. keep provider-specific logic out of core domain rules where possible.

## Local checks

```bash
npm test
```

No runtime package install is required for the current regression suite.

## Commit examples

- `docs: clarify legal review boundary`
- `feat: add policy input schema`
- `test: guard against unsupported compliance claims`
- `refactor: separate jurisdiction rules from LLM adapter`

Avoid generic commit messages such as `update files`.
