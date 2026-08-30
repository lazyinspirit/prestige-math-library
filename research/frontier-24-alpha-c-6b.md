# frontier-24 alpha group c step 6b adjudication

Date: 2026-08-29
Run: frontier-24
Group: c
Scope: batches 4, 5, and 6

## Batch 4

- Touched obligations: 10 total.
  Accepted as exact reader-result carriers: none after the current gate repair.
  Amended beyond the raw reader result: `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation`, `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions`, `fs-finite-values-and-finite-additivity-force-finite-total-variation`, `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass`, `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures`, `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data`, `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`, `thm-continuity-from-below-and-above-for-signed-measures`, `thm-finite-total-variation-signed-measures-are-complete`, and `thm-total-variation-of-a-complex-measure-is-finite`.

- Refuter obligations: 5 total, all confirmed.
  Confirmed fatal and repaired: `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure`, `def-total-variation-of-a-signed-or-complex-measure`, `def-simple-integral-against-a-signed-or-complex-measure`, and `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition`.
  Confirmed nonfatal and repaired: `thm-total-variation-of-a-complex-measure-is-finite`.

- Gate repairs from the required high-risk review: 2 total, both confirmed fatal and repaired.
  `prop-simple-integrals-are-bounded-by-total-variation` and `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` were still ill-typed on current disk until Alpha narrowed their statements to the finite-total-variation cases where the written simple integrals are actually defined.

- Risk review: reran `risk-report` on `research/frontier-24-batch-4.proof-contracts.json` and wrote 18 complete `alpha-6b-c` `risk_review` records into the current contract.

## Batch 5

- Touched obligations: none.

- Refuter obligations: 5 total, all confirmed.
  Confirmed fatal and repaired on the live carriers: `lem-riemann-map-extremal-derivative-is-attained`, `thm-area-theorem-for-exterior-univalent-functions`, and `thm-montel-caratheodory-theorem`.
  Confirmed nonfatal and repaired on the live carriers: `ex-exp-one-over-z-shows-great-picard-is-sharp` and `ex-koebe-function-realizes-the-quarter-disc-bound`.

- Risk review: reran `risk-report` on `research/frontier-24-batch-5.proof-contracts.json` and wrote 15 complete `alpha-6b-c` `risk_review` records into the current contract.

## Batch 6

- Touched obligations: 14 total.
  Accepted as exact reader-result carriers: `ex-pole-pushing-along-three-discs`, `ex-residue-of-gamma-at-minus-two`, `ex-stirling-approximation-to-ten-factorial`, `fs-gamma-is-entire`, and `thm-gamma-meromorphic-continuation`.
  Amended beyond the raw reader result: `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared`, `ex-beta-one-half-one-half-equals-pi`, `thm-beta-gamma-identity`, `thm-euler-gamma-function-is-holomorphic`, `thm-euler-limit-formula-for-gamma`, `thm-euler-reflection-formula`, `thm-gamma-weierstrass-product`, `thm-hankel-representation-for-reciprocal-gamma`, and `thm-zero-divisor-theorem-on-plane-domains`.

- Refuter obligations: 7 total, all confirmed fatal and repaired.
  `def-principal-part-at-an-isolated-point`, `lem-runge-pole-pushing-lemma`, `thm-mittag-leffler-theorem-on-the-plane`, `thm-mittag-leffler-theorem-on-plane-domains`, `thm-mittag-leffler-expansion-of-pi-cotangent`, `thm-hankel-representation-for-reciprocal-gamma`, and `thm-stirling-formula-gamma`.

- Risk review: reran `risk-report` on `research/frontier-24-batch-6.proof-contracts.json` and wrote 10 complete `alpha-6b-c` `risk_review` records into the current contract.

## Outputs

- Decisions file: `research/frontier-24-alpha-c-6b-decisions.json`
  47 stamped decisions total: 5 `accepted_repair`, 19 `amended_repair`, 16 `confirmed_fatal`, and 7 `confirmed_nonfatal`.

- Ledger rows: `research/frontier-24-alpha-c-6b-ledger-rows.json`
  Appended 43 Step-6 defect rows to `research/defect-ledger.jsonl` and re-rendered `research/DEFECT-LEDGER.md`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <14 edited items>`
  Result: pass; the final rerun left the edited items stable on disk.

- `node tools/tsx-run.mjs tools/precheck.mts <14 edited items>`
  Result: pass, `11 checked, 0 failing` for the proof-bearing edited items plus the rebuilt `thm-stirling-formula-gamma`.

- `node tools/tsx-run.mjs tools/precheck.mts <full batch-4 proof-bearing scope>`
  Result: pass, `34 checked, 0 failing`.

- `node tools/tsx-run.mjs tools/precheck.mts <full batch-6 proof-bearing scope>`
  Result: pass, `44 checked, 0 failing`.

- `node tools/regen-contract-entries.mjs research/frontier-24-batch-4.proof-contracts.json <all 34 proof-bearing batch-4 ids>`
  Result: regenerated `34`, skipped `0`.

- `node tools/regen-contract-entries.mjs research/frontier-24-batch-6.proof-contracts.json <all 44 proof-bearing batch-6 ids>`, then `... thm-stirling-formula-gamma`
  Result: regenerated `44`, then regenerated the Stirling entry once more after the KaTeX notation fix.

- `node tools/proof-contract.mjs research/frontier-24-batch-{4,5,6}.proof-contracts.json --strict`
  Result: pass, `34/34`, `42/42`, and `44/44` with `0` errors and `0` warnings.

- `node tools/citation-fidelity.mjs research/frontier-24-batch-{4,5,6}.proof-contracts.json --fail-on-missing-quote`
  Result: pass; `88`, `96`, and `97` citations respectively, with no missing quotes and no widening candidates.

- `node tools/content-policy.mjs research/frontier-24-batch-4.pages.json research/frontier-24-batch-5.pages.json research/frontier-24-batch-6.pages.json`
  Result: pass, `145 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/rendercheck.mjs <20 changed item/page files>`
  Result: pass, `OK — 20 file(s)`.

- `node tools/risk-report.mjs research/frontier-24-batch-{4,5,6}.proof-contracts.json --require-reviewed --json`
  Result: pass; every required HIGH or CRITICAL item in the three owned batches now carries a complete `alpha-6b-c` `risk_review` record.

- `node tools/step6-scope.mjs stamp --run frontier-24 --group c`
  Result: pass; stamped 43 current carrier hashes for the group-c decision file.

- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 4`
  Result: pass, `43 item(s) routed, 15 adjudication obligation(s), 0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 5`
  Result: pass, `50 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 6`
  Result: pass, `52 item(s) routed, 21 adjudication obligation(s), 0 error(s)`.

- `node tools/defect-ledger.mjs validate --run frontier-24`
  Result: pass, `124 defect row(s) checked, 0 error(s)`.

- `git diff --check -- <group-c item, manifest, contract, and Step-6 artifact scope>`
  Result: pass.

## Blockers

- None in the live scope for group c.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed four stale batch-4 touched decisions: `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation`, `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions`, `fs-finite-values-and-finite-additivity-force-finite-total-variation`, and `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures`.
- Reread the current items against `research/frontier-24-reader-4.md` and found no new mathematical defect. I retagged the four touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-24-S6-c-gate-4-3` through `frontier-24-S6-c-gate-4-6` via `research/frontier-24-alpha-c-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 4`
  -> `43 item(s) routed, 15 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate`
  -> `493 item(s) routed, 122 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-24`
  -> `131 defect row(s) checked, 0 error(s)`.
