# Riesz-potential Step-5 owner repair

Run: `frontier-37-owner-30`; recorded UTC: 2026-10-01T11:22:57.497020+00:00

## Authority and engine state

Exact owner scope: the three findings in `research/frontier-37-owner-30-refute-12.json`, their batch-12 contracts, and necessary direct-consumer consequences. Read CLAUDE.md and README.md fully, plus the relevant schema and workflow controls. The refuter's successful attempt-2 dispatch receipt ended at 2026-10-01T11:18:15.439Z (process/dispatch exit 0). Engine PID 1706 was live; no live Alpha adjudicator dispatch was present at the process checks before editing or after verification. Group c's other readers were still in flight. Reader/refuter findings and receipts are preserved. No decision, risk_review, audit, hash certification, gate or stage control was written by this repair.

## Mathematical repairs

- `def-riesz-potential-of-order-alpha`: the Scope paragraph now ends after the strict-range almost-everywhere existence observation. Removed the assertion that both endpoint counterexamples rule out adding endpoints to that existence statement. Its p=1 denial was false: for any bounded ball B and L1 datum, the integral of K(x-y) over x in B is uniformly bounded in y by the integral of K over the unit ball plus lambda(B), because K<=1 outside the unit ball. Tonelli therefore gives a finite integral over B of the absolute potential. Exhaustion by bounded balls yields almost-everywhere finiteness. The upper-endpoint local counterexample also proves divergence only at the origin and essential unboundedness, so it does not itself refute almost-everywhere existence. No new endpoint theorem was added to the definition. Kernel, convergence criterion, unit normalization and choice assumption remain as before.
- `thm-hardy-littlewood-sobolev-fractional-integration`, proof 1.1: replaced `theta q=alpha q/n` by `theta q=alpha p q/n=q-p`. Since q=p/(1-theta), the latter identity is exact and justifies the existing use theta q+p=q in proof 4.1. Statement unchanged.
- `ex-riesz-potential-scaling-determines-the-target-exponent`, proof 2.2: the positive kernel lower bound now applies to y in B(0,r) excluding x, with 0<|x-y|. Explicitly records that the omitted singleton is null and does not alter the integral, using the definition's diagonal convention; F1 now includes that supplied convention. The resulting integral lower bound and strict positivity at every fixed x remain valid. Example unchanged.

## Supplier interfaces and direct consumers

Read the exact local definition and the affected proof steps and their mathematical supplier interfaces, including Hedberg, near/far splitting, the nonnegative integral order rules, the polar formula and complex integration conventions. The repairs are elementary local arguments; no fresh authoritative external full-text retrieval is claimed.

The Definition changed only by deletion of the false endpoint observation, so its direct item consumers were inspected: near/far splitting, Hedberg, HLS, the scaling example, both endpoint counterexamples, and the recorded endpoint remark. Each consumes the kernel, absolute convergence criterion or normalization; none relies on the removed observation. The A-page summary likewise describes strict-range existence and the strong theorem and requires no change. No further Statement/Definition change occurred, hence there is no additional downstream hop.

Batch-12 contract changes: corrected HLS derivation 1.1, scaling derivation 2.2 and its degenerate-case diagonal evidence, and the definition's endpoint evidence. Refreshed the six full-Definition citation quotes in near/far, Hedberg, HLS, scaling and both counterexamples so they remain verbatim after the scope correction. This is citation-carrier refresh, not new mathematical approval. No dependency was added or removed.

## Scoped verification

- `node tools/tsx-run.mjs tools/precheck.mts` on the three edited items: two proof-bearing items passed, definition not applicable; zero failures.
- `node tools/rendercheck.mjs` on the three edited items: passed real renderer YAML and KaTeX checks.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-12.proof-contracts.json --strict --items` with the exact three repaired IDs: 0 errors, 0 warnings, 3/3 checked.
- Same strict command with the four additional citation-refreshed consumers: 29 errors, 0 warnings, 7/7 checked. These concern unchanged source quotations/mappings and stale counterexample boundary-step references rather than the repaired claims; no extra repair or acceptance is asserted. Exact diagnostic rows follow.

```text
proof-contract: 29 error(s), 0 warning(s), 7/7 item(s) checked
ERROR citation-quote-mismatch [lem-riesz-potential-near-far-splitting]: F5 quote does not occur in thm-lebesgue-measure-of-a-box-of-every-kind's Statement
ERROR citation-quote-mismatch [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F5 quote does not occur in thm-lebesgue-measure-of-a-box-of-every-kind's Statement
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F5 is cited by 4.1 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F5 is cited by 4.1 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F5 is cited by 4.1 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F6 is cited by 1.1 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F6 is cited by 1.2 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F6 is cited by 2.1 but the contract omits it
ERROR citation-use-unmapped [cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint]: F6 is cited by 2.2 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 1.2 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 1.2 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 1.2 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F4 is cited by 5.1 but the contract omits it
ERROR citation-quote-mismatch [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 quote does not occur in thm-lebesgue-measure-of-a-box-of-every-kind's Statement
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 is cited by 5.1 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F9 is cited by 1.3 but the contract omits it
ERROR citation-quote-mismatch [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F9 quote does not occur in thm-logarithm-derivative-and-integral's Statement
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F9 is cited by 1.3 but the contract omits it
ERROR citation-use-unmapped [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F9 is cited by 1.3 but the contract omits it
ERROR citation-fact-uncontracted [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 -> def-integral-over-a-measurable-set needs an exact citation contract
ERROR citation-fact-uncontracted [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: F10 -> prop-order-and-scalar-rules-for-the-nonnegative-integral needs an exact citation contract
ERROR boundary-evidence-step-missing [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: one names missing step 2.3
ERROR boundary-evidence-step-missing [cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint]: degenerate names missing step 2.3
```

## Remaining work and limitations

Engine Alpha owns subsequent adjudication and unresolved pre-existing batch obligations. This note records a local mathematical repair and mechanical checks, not an independent audit or a fresh proof of every supplier. The exact three repaired items have no unresolved local mathematical uncertainty identified; broader batch-12 certification remains blocked by the diagnostics above until the engine/owner resolves them. Preserve this distinction when refreshing stable evidence.

## Authorized contract follow-up — 2026-10-01T11:25:08.308468+00:00

The owner extended scope to resolve the 29 concrete contract diagnostics above. No native Alpha adjudicator process was present before mutation or at the final process check; group-c readers remained active. This follow-up edits only the three authorized entries in the existing batch-12 proof-contract carrier. No item/source, risk_review, decision, finding, gate, or certification carrier was modified.

Repairs:

- Near/far F5 now quotes the current full Statement of `thm-lebesgue-measure-of-a-box-of-every-kind`; it directly includes the half-open box case and Countable Choice assumption.
- Lower-endpoint counterexample: all three F5 citations now map to 1.3 and 4.1. Its F6 additivity citation now maps to 1.1, 1.2, 1.3, 2.1 and 2.2. The F5 box quote is current and verbatim.
- Upper-endpoint counterexample: all four F4 citations map to 1.2, 2.1 and 5.1; existing F10 citations map to 1.4 and 5.1; F9 logarithm definition, logarithm derivative and exponential derivative citations map to 1.3 and 1.4. Replaced the stale box and logarithm-derivative quotes with the suppliers' current full Statements. Added the two missing F10 citation rows for `def-integral-over-a-measurable-set` (Definition) and `prop-order-and-scalar-rules-for-the-nonnegative-integral` (Statement), both used in 1.4 and 5.1. Boundary evidence now accurately names 1.3 for convergence away from zero, 1.4 for origin divergence and 2.2 for the punctured-annulus bound.

Checked the corresponding local supplier text and exact current proof uses. These discrepancies were stale quotations and bookkeeping; no additional mathematical failure or need for a source edit was identified in resolving them. The use lists record every explicit citation of each fact bundle, including conclusion/choice-accounting steps, as the contract schema requires.

Verification: strict proof-contract check of the three follow-up entries passed with 0 errors and 0 warnings (3/3 checked). A final strict check of all seven entries altered or citation-refreshed by this repair also passed with 0 errors and 0 warnings (7/7 checked). Item text did not change in this follow-up, so the earlier exact-three proof-format and renderer results remain applicable. The historical 29-error diagnostic block above is preserved as evidence and has now been resolved locally. Engine Alpha still owns independent adjudication; these mechanical checks do not grant mathematical acceptance or refresh risk evidence.
