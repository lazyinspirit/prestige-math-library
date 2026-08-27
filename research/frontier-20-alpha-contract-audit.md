# Frontier 20 contract audit

Date: Thursday, August 27, 2026.
Dispatch: `contract-audit-1`
Run: `frontier-20`

## Reproduced detector state before repair

- `boundary-audit` on the batch contracts reported `30` template clusters and `16` contradicted dispositions.
- `citation-fidelity` on `research/frontier-20-proof-contracts.json` reported no missing quotes and no widening candidates.
- `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

## Template-cluster repairs

- Batch `1`: rewrote the clustered `checked` boundary evidence so each row cites the actual numbered step text rather than a reused generic sentence. Pre-fix: `8` clusters / `223` clustered rows. Post-fix: none.
- Batch `2`: rewrote the clustered `checked` boundary evidence the same way. Pre-fix: `1` cluster / `113` clustered rows. Post-fix: none.
- Batch `3`: rewrote the clustered `checked` nonempty-choice evidence to cite the actual step text. Pre-fix: `1` cluster / `11` clustered rows. Post-fix: none.
- Batch `5`: rewrote the repeated `not_applicable` iff rationales to item-specific reasons. Pre-fix: `1` cluster / `4` clustered rows. Post-fix: none.
- Batch `7`: rewrote the repeated `not_applicable` boundary rationales to item-specific reasons across the algebra batch. Pre-fix: `7` clusters / `142` clustered rows. Post-fix: none.
- Batch `8`: rewrote the repeated false-statement/counterexample `not_applicable` rationales to item-specific reasons. Pre-fix: `4` clusters / `16` clustered rows. Post-fix: none.
- Batch `10`: rewrote the repeated category-theory `not_applicable` rationales to item-specific reasons. Pre-fix: `8` clusters / `392` clustered rows. Post-fix: none.

Changed records for this part:

- `research/frontier-20-batch-1.proof-contracts.json`
- `research/frontier-20-batch-2.proof-contracts.json`
- `research/frontier-20-batch-3.proof-contracts.json`
- `research/frontier-20-batch-5.proof-contracts.json`
- `research/frontier-20-batch-7.proof-contracts.json`
- `research/frontier-20-batch-8.proof-contracts.json`
- `research/frontier-20-batch-10.proof-contracts.json`

## Contradicted-candidate adjudications

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations [empty]` | repaired | The detector was right that the old `not_applicable` row missed the real `k=0` empty-sum base case. The Statement makes the dyadic sum empty at `k=0`, and step `1.2` then proves `s_0(x)=0\le s_1(x)\le f(x)`. | Batch 1 `empty` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable [empty]` | upheld | This refutation uses one explicit uncountable witness family `{\mathbf 1_{\{t\}} : t\in V}`. The empty family would not rescue the universal false claim, so the detector's family regex is inapplicable here. | Batch 1 `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld` by `contract-audit-1`. |
| `cor-beppo-levi-theorem [empty]` | upheld | The item studies one fixed sequence indexed by `\mathbb N`. The only empty partial sum is `S_0=0`, and step `1.1` absorbs that inside the same monotone partial-sum argument. | Batch 2 `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-differentiation-under-the-integral-sign [zero]` | repaired | The detector was right that zero-denominator handling is explicit. Step `1.1` chooses `h_n\to0` with `h_n\ne0` before defining `q_n(x)`. | Batch 2 `zero` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `thm-convergence-of-infinite-regular-continued-fractions [zero]` | upheld | Step `1.1` proves `q_0=1` and `q_n>0` for later convergent denominators before any reciprocal is formed. The zero-denominator regex is inapplicable to the current proof. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `lem-continued-fraction-error-bound [zero]` | upheld | Steps `2.1` and `3.1` use `q_{n+1}>q_n>0`, so the denominators the detector saw are already excluded from vanishing by the current hypotheses. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-continued-fraction-convergents-are-best-approximations [zero]` | upheld | This detector hit is about denominators, not the separate `n=0` boundary that group `d` repaired on Wednesday, August 26, 2026. The current Statement assumes `n\ge1` and `s>0`, and `q_n,q_{n+1}` stay positive by the cited continued-fraction facts. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-legendre-continued-fraction-criterion [zero]` | upheld | The Given already fixes a reduced rational `r/s` with `s>0`, and fact `F1` makes the convergent denominators strictly increasing from `q_0=1`. No zero denominator remains. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `ex-two-finite-continued-fractions-for-a-rational [zero]` | upheld | The detector is reacting to the concrete denominators `1+1/2`, `1+2/3`, and `1+1/1` in the explicit `8/5` computation. They are fixed positive numbers, not a free zero branch. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `ex-continued-fraction-and-extended-euclid [zero]` | upheld | The displayed denominators `2+1/1` and `1+1/3` are fixed positive values in the explicit `37/11` computation. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `ex-continued-fraction-of-square-root-two [zero]` | upheld | The flagged denominator `2+1/2` is a fixed positive value in the concrete periodic expansion of `\sqrt2`. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `ex-best-rational-approximations-to-pi [zero]` | upheld | The flagged denominator `2\cdot113^2` is a fixed positive integer in the explicit `355/113` error computation. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `cex-an-excellent-approximation-at-the-legendre-boundary [zero]` | upheld | The denominators `7(10+7\sqrt2)` and `4\cdot7^2` are fixed positive numbers in the explicit `3/4` witness. | Batch 5 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-vertical-egfs-for-the-stirling-triangles [zero]` | repaired | The detector was right that the `k=0` column is a real boundary. Steps `1.1` and `1.2` already cover it through the empty labelled set, contributing `1/0! = 1`. | Batch 8 `zero` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `lem-maximal-pattern-pure-blockades-force-many-blocks [empty]` | upheld | The contradiction starts from a maximal pure blockade whose total `a`-mass is at least `|G|^{1/a}`; that witness is already nonempty on any consistent instance, and if `G=\varnothing` the antecedent fails before the lemma applies. | Batch 8 `empty` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `lem-maximal-pattern-pure-blockades-force-many-blocks [zero]` | upheld | The only flagged denominator is `k^a`, and step `1.1` chooses `k\in[2,\epsilon^{-1}]` while the Statement assumes `a\ge1` and `\epsilon\in(0,1/2)`, so the denominator is strictly positive throughout. | Batch 8 `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |

No item-text repair was licensed or needed in this dispatch, so no new `research/defect-ledger.jsonl` row was written.

## Finite-smoke repair

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Disposition: repaired by adding three applicable `matrix-ring-laws-mod-n` obligations to the batch-10 contract.

Evidence:

- `thm-the-matrix-category-over-a-ring-is-additive` explicitly states that morphisms are matrices with composition by matrix multiplication and identities `I_n`.
- `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules` explicitly uses that matrix multiplication is associative and unital to prove functoriality.
- `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication` explicitly states the matrix-product formula for composition.

Changed record:

- `research/frontier-20-batch-10.proof-contracts.json`

Post-fix `finite-smoke` result:

- `3` checks over `3/393` items carrying obligations, all passing.

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-20 research/frontier-20-proof-contracts.json research/frontier-20-batch-*.proof-contracts.json`
  - pass; wrote the merged run contract with `393` scoped items.
- `node tools/proof-contract.mjs research/frontier-20-proof-contracts.json --strict`
  - pass; `0 error(s), 0 warning(s), 393/393 item(s) checked`.
- `node tools/finite-smoke.mjs research/frontier-20-proof-contracts.json`
  - pass; `0 error(s), 3 check(s) over 3/393 item(s) carrying obligations`.
- `node tools/boundary-audit.mjs research/frontier-20-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted dispositions, `13` upheld rows reported.
- `node tools/citation-fidelity.mjs research/frontier-20-proof-contracts.json --fail-on-missing-quote`
  - pass; `869` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-20 --contracts research/frontier-20-proof-contracts.json --checklists research/frontier-20-batch-1.coverage.json,...,research/frontier-20-batch-10.coverage.json --min-checks 1`
  - pass; `finite-smoke 3 checks`, `proof-contract 393 items checked`, `coverage-checklist 435 harvested results`, `precheck 6366 items checked`.
- Diagnostic only: `node tools/risk-report.mjs research/frontier-20-proof-contracts.json`
  - pass; `0 error(s), 393 item(s) routed`.
- Diagnostic only: `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed`
  - still red; `148 error(s), 393 item(s) routed`.

## Remaining blocker

- `risk-report --require-reviewed` still reports `148` missing Alpha `risk_review` dispositions as of Thursday, August 27, 2026. That backlog is real, but it is distinct from the dispatched step-5 detector failures repaired here. Closing it honestly would require separate Alpha proof reads across the remaining high/critical items, not another contract-detector pass.
