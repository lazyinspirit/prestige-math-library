# Native quote-history bridge proposal

Install the proposed helper as `tools/step5-quote-history.mjs`. Import `supportingQuoteHistory` into `tools/step5-workflow.mjs`. At the very start of existing `supportingMetadataHistory(history,path,expected)`, before its run44-only condition, add:

```js
const quotes = supportingQuoteHistory(history, path, expected);
if (quotes) return quotes;
```

No change to `verifyEvidence`, `collect`, original pack/reports, `loadOperationalSupplement` or `frozenSupportingEvidence` is required. The latter already validates history then freezes the original archived bytes into a content-addressed supporting-metadata carrier and includes the registry marker binding. Its existing `verifyEvidence(supporting,{root,run})` supplies the necessary context. All no-history verification remains strict.

The registry path is `research/R-step5-v2/initial-1-owner-quote-history.json`. The generic helper exposes `recordSupportingQuoteHistory(root,run,payload)`. Root copies each current corrected contract into the payload's immutable `current_archive`, fills the exact raw-byte hashes for it and each original pack/report/successful native dispatch, then invokes this native recorder against the genuine held/drained5.1boundary. The recorder validates before writing a new immutable self-sealed registry. The supplied JSON is a proposal template: null hash values must never be accepted or treated as a receipt. Existing original archives and worker reports remain untouched.

The loader checks exact historical raw expected hash, exact archived/current successor bytes and equality of the whole contract after substituting only citation.quote leaves. It verifies every new quote against its current cited source section. Any change to source/section/uses/derivations/boundaries/risk/reviews/envelope/inventory fails. Original report.input_sha256 must match the original pack's native object digest, while registry origin references bind the raw pack/report/dispatch bytes separately. Each exact successful native dispatch must have the expected run/unit/role/label and genuine task completion.

This grants historical metadata byte continuity only. It neither reviews a current proof nor adopts new native execution coverage, changes source currency, rewrites a review/verdict, or refreshes original evidence hashes. The existing collection can preserve original supporting observations while current corrected contracts remain live. Root owns final implementation, receipt binding/recertification and the complete native battery; no optional test or partial gate is proposed.
