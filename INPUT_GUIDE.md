# Input Guide

NullLayer drafts from **verified operational facts**. If a field is unknown, write `unknown` or leave it empty and let the review workflow flag it. Do not guess.

For automation, prefer `schema/policy-input.schema.json`. This guide is the human-readable equivalent.

## Organization

### company_name
Legal or trading name used in the notice.

### website_url
Primary website/application URL.

### country
Country where the organization is established or primarily operates.

### business_type
Examples: SaaS, ecommerce, agency, marketplace, AI product.

### privacy_contact
Email or other channel used for privacy/data-subject requests.

## Jurisdictions

### target_regions
Examples: `Brazil`, `EU/EEA`, `UK`, `Global`.

List only regions that are actually relevant to the product/users. Jurisdiction scope may require legal review.

## Data inventory

### personal_data_categories
Examples:

- account identity;
- email/contact data;
- billing data;
- support messages;
- IP/device data;
- usage analytics;
- user-generated content.

### processing_purposes
For each category, state why it is processed. Examples: account operation, billing, security, support, analytics.

### legal_bases
Only provide legal bases that have actually been determined for the relevant jurisdiction. If not determined, leave as `unknown` and request legal review.

## Cookies and tracking

### uses_cookies
`true` / `false`.

### analytics_services
Examples: Google Analytics, Plausible, none.

### advertising_services
Examples: Meta Pixel, Google Ads, none.

Do not list a service merely because it is common for the business type.

## Third parties and processors

### third_party_services
List the actual vendors that receive or process personal data.

For each vendor, record where possible:

- service name;
- purpose;
- data categories shared;
- processing location/transfer information;
- contract/DPA status if known.

### payment_processors
Examples: Stripe, PayPal, Mercado Pago, none.

### ai_services
Examples: OpenAI API, Anthropic API, Gemini API, self-hosted model, none.

Specify whether user/customer personal data is sent to the provider.

## Retention

### retention_rules
Provide real retention periods or deletion criteria by category where known.

Examples:

- account data: while account is active + verified legal retention period;
- support tickets: 24 months;
- analytics events: 14 months.

Do not invent a period to make the policy look complete.

## International transfers

### international_transfers
State whether personal data is transferred outside the relevant jurisdiction and, if known, the mechanism or vendor arrangement. If unknown, flag for review.

## Children / minors

### children_or_minors
State whether the service is directed to or knowingly processes data from minors and any relevant age thresholds/policies that have actually been adopted.

## Automated decisions / profiling

### automated_decision_making
Describe any automated decision-making or profiling with legal/significant effects if applicable. If the product merely uses AI features without such decisions, do not imply that this category applies.

## Security statements

### security_measures
Only list controls the organization can substantiate, such as encryption in transit, access controls, backups or MFA requirements.

Never state that data is "100% secure".

## Final review questions

Before generation, confirm:

- Are all listed vendors actually in use?
- Are retention periods factual?
- Are legal bases reviewed for the relevant jurisdiction?
- Are international transfers understood?
- Is the privacy contact correct?
- Does the policy match the product's real telemetry and integrations?
- Are any placeholders or unknowns still unresolved?
