# Security

## Scope

NullLayer is currently a prompt/schema/template toolkit. It does not require storing API credentials in the repository.

## Secrets

Never commit:

- LLM API keys;
- OAuth tokens;
- customer datasets;
- production privacy exports containing confidential business information;
- private contracts/DPAs;
- environment files with credentials.

Use environment variables or the secret-management mechanism of the workflow platform you run NullLayer with.

## Prompt/data handling

Privacy-policy generation can involve sensitive operational details about vendors, systems and data flows. Before sending inputs to an external model provider:

1. understand the provider's data-use and retention terms;
2. minimize the submitted data;
3. avoid unnecessary personal data;
4. do not include credentials;
5. use appropriate enterprise/API settings where required by your organization.

## Generated output

Generated legal/privacy text can be wrong, stale or incomplete even when it sounds confident. Treat unsupported certainty as a quality/security risk because it can cause incorrect product disclosures.

The prompt therefore requires unresolved facts to be flagged instead of invented.

## Reporting a security issue

If you discover a repository issue that could expose secrets or confidential data, do not place real credentials or personal data in a public issue. Reproduce with synthetic values and describe the impact without publishing sensitive material.
