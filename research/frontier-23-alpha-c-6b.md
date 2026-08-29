# frontier-23 alpha group c step 6b adjudication

Date: Saturday, August 29, 2026.
Run: frontier-23
Group: c
Scope: batches 6 and 7

## Batch 6

- Touched obligations: 46 total.
  Accepted as exact reader-result carriers: 8.
  Amended beyond the raw reader result: 38. Most amendments were the required Step-6 follow-up repairs after reader 6's failed batch-wide display normalization; the high-risk touched items also now carry the required `risk_review` contract rows.

- Refuter obligations: 16 total, all confirmed.
  Confirmed fatal and repaired: 15.
  Confirmed nonfatal and repaired: 1.
  The fatal set comprised the malformed carrier repairs across the Fubini/Tonelli/product-measure chain, the Cavalieri citation defect, and the layer-cake hypothesis defect. The lone nonfatal repair was the null-set lemma's restricted-domain Lipschitz gap.

- Risk review:
  Ran `node tools/risk-report.mjs research/frontier-23-batch-6.proof-contracts.json --json`.
  Reread every required HIGH or CRITICAL carrier against its current proof, the reader/refuter evidence, and the cited dependencies.
  Wrote 18 complete `risk_review` rows into `research/frontier-23-batch-6.proof-contracts.json`.

## Batch 7

- Touched obligations: 6 total.
  Accepted as exact reader-result carriers: 1.
  Amended beyond the raw reader result: 5.
  The amended touched carriers are the five high-risk Weierstrass/Hadamard items, whose current carriers differ from the raw reader result because the batch contract now also carries the required Step-6 `risk_review` rows and, for Hadamard, the additional 6b proof repair.

- Refuter obligations: 8 total, all confirmed.
  Confirmed fatal and repaired: 5.
  Confirmed nonfatal and repaired: 3.
  The fatal set comprised the `a = 0` Blaschke-definition defect, the zero-free page-summary claim, the missing nonzero-factor hypothesis in normal convergence, the Hadamard quotient-growth gap, and the false parity step in the sine product. The nonfatal set comprised the Poincare diagonal case, the principal-log injectivity shortcut, and the slit-plane root-branch inverse step.

- Risk review:
  Ran `node tools/risk-report.mjs research/frontier-23-batch-7.proof-contracts.json --json`.
  Reread every required HIGH or CRITICAL carrier against its current proof, the reader/refuter evidence, and the cited dependencies.
  Wrote 19 complete `risk_review` rows into `research/frontier-23-batch-7.proof-contracts.json`.

## Checks

- `node tools/tsx-run.mjs tools/precheck.mts <all 38 proof-bearing batch-6 items>`
  Result: pass, `38 checked, 0 failing`.

- `node tools/rendercheck.mjs <all 38 batch-6 item files>`
  Result: pass, `OK — 38 file(s)`.

- `node tools/proof-contract.mjs research/frontier-23-batch-6.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 38/38 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-23-batch-6.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass, `96 citation(s) over 38 authored item(s)`, no quote mismatches and no widening candidates.

- `node tools/risk-report.mjs research/frontier-23-batch-6.proof-contracts.json --require-reviewed --json`
  Result: pass, all 18 required batch-6 HIGH and CRITICAL items now carry complete Alpha `risk_review` rows.

- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 6`
  Result: pass, `62 adjudication obligation(s), 0 error(s)`.

- `node tools/tsx-run.mjs tools/precheck.mts items/def-unit-disc-upper-half-plane-and-blaschke-factor.md items/thm-normal-convergence-of-holomorphic-products.md items/thm-poincare-distance-formula-and-disc-automorphism-invariance.md items/thm-principal-logarithm-biholomorphism-to-the-principal-strip.md items/thm-sine-has-its-weierstrass-product.md items/thm-slit-plane-root-branch-biholomorphism-to-a-sector.md items/thm-hadamard-factorization-for-finite-order-entire-functions.md`
  Result: pass, `7 checked, 0 failing`.

- `node tools/proof-contract.mjs research/frontier-23-batch-7.proof-contracts.json --strict --items thm-normal-convergence-of-holomorphic-products,thm-poincare-distance-formula-and-disc-automorphism-invariance,thm-principal-logarithm-biholomorphism-to-the-principal-strip,thm-sine-has-its-weierstrass-product,thm-slit-plane-root-branch-biholomorphism-to-a-sector,thm-hadamard-factorization-for-finite-order-entire-functions`
  Result: pass, `0 error(s), 0 warning(s), 6/6 item(s) checked`.

- `node tools/rendercheck.mjs library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma.md library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma-examples.md library/complex-analysis/infinite-products-and-weierstrass-factorisation.md library/complex-analysis/infinite-products-and-weierstrass-factorisation-examples.md items/def-unit-disc-upper-half-plane-and-blaschke-factor.md items/thm-normal-convergence-of-holomorphic-products.md items/thm-poincare-distance-formula-and-disc-automorphism-invariance.md items/thm-principal-logarithm-biholomorphism-to-the-principal-strip.md items/thm-sine-has-its-weierstrass-product.md items/thm-slit-plane-root-branch-biholomorphism-to-a-sector.md items/thm-hadamard-factorization-for-finite-order-entire-functions.md`
  Result: pass, `OK — 11 file(s)`.

- `node tools/risk-report.mjs research/frontier-23-batch-7.proof-contracts.json --require-reviewed --json`
  Result: pass, all 19 required batch-7 HIGH and CRITICAL items now carry complete Alpha `risk_review` rows.

- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 7`
  Result: pass, `14 adjudication obligation(s), 0 error(s)`.

## Blockers

- None in the live scope for group c.

## Gate repair - `step6-routing-adjudicate` (Saturday, August 29, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed seven stale touched decisions across batches `6` and `7`.
- Reread the current batch-6 definitions/remarks against
  `research/frontier-23-reader-6.md` and the current batch-7 example against
  `research/frontier-23-reader-7.md`. No new mathematical defect was found.
- Synced the live batch-6 item-manifest rows in
  `research/frontier-23-batch-6.pages.json` for
  `def-distribution-function-of-absolute-value`,
  `def-sections-of-sets-and-functions-on-products`, and
  `rem-borel-product-equality-needs-second-countability`.
- Retagged four touched decisions from `accepted_repair` to `amended_repair`:
  `def-distribution-function-of-absolute-value`,
  `def-sections-of-sets-and-functions-on-products`,
  `rem-borel-product-equality-needs-second-countability`, and
  `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley`.
- Retagged three touched decisions from `accepted_repair` to
  `reverted_change`:
  `def-completed-product-measure`, `def-measurable-rectangle`, and
  `rem-caratheodory-also-constructs-the-product-measure`.
- Appended the supplemental gate rows
  `frontier-23-S6-c-gate-6-1` through `frontier-23-S6-c-gate-6-6` and
  `frontier-23-S6-c-gate-7-1` via
  `research/frontier-23-alpha-c-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 6`
  -> `50 item(s) routed, 62 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate`
  -> `504 item(s) routed, 227 adjudication obligation(s), 0 error(s)`.
