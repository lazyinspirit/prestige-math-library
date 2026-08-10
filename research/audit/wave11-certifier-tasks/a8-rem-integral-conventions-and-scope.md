## Assigned exact-final A8 repair — `rem-integral-conventions-and-scope`

Item path: `items/rem-integral-conventions-and-scope.md`

Normalized verification-stripped SHA-256 at dispatch: `fd9044e5ea139cd04abbe1434c61227f0b99d3588d8a57c74cd8d2b5c06e8f28`

Target type: `item-confirmed-fatal-scope-repair`

Audit-Alpha changed exactly one sentence in section 6 after an exact-current A7 rejection. The prior sentence described `rem-ftc-absolutely-continuous` as identifying exactly the class of functions satisfying only the endpoint equation `integral_a^b G' = G(b)-G(a)`. The cited item expressly says that the endpoint identity alone does not characterize absolute continuity.

Read the complete exact-current target and the complete cited `items/rem-ftc-absolutely-continuous.md` from disk. Check especially that the replacement now preserves all three conditions in the cited equivalence:

- derivative exists almost everywhere;
- derivative belongs to `L^1`;
- the integral representation holds for every `x` in the interval, not merely at the endpoint.

Also read every surrounding section and Remark in the target, confirm the repaired sentence introduces no conflict with the two companion counterexamples, and verify that the stale pre-repair `verification.verified`, `verification.judge`, and `verification.audited` evidence is absent. The current provenance remains `statement: ai-generated`, `proof: not-applicable`; this is a repository-specific scope ledger whose corrected mathematical statement is sourced through the external reference.

Return the certifier brief's exact response schema. Do not edit or stamp anything.
