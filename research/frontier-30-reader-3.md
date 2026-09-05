# frontier-30 reader-3 report

Date: Saturday, September 5, 2026.
Run: `frontier-30`
Batch: `3`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-beta-3.task.md`, `research/frontier-30-batch-3.pages.json`, `research/frontier-30-batch-3.coverage.json`, `research/frontier-30-batch-3.notes.md`, `research/frontier-30-batch-3.proof-contracts.json`, `research/frontier-30-step6-hash-3-pre.json`, `research/plan-measure-theory-track.md` at `MT-18`, and the published dependency note `items/rem-mini-vitali-covering-theorem.md`.
- Live controller check: `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .` showed the repository controller still running `frontier-23` at stage `5-author`; I used that only as live-run context and did not edit workflow state.
- Assigned pages: `library/measure-theory/differentiation-of-monotone-functions-and-the-vitali-covering-theorem.md` and `library/measure-theory/differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples.md`.
- Assigned item inventory from `research/frontier-30-batch-3.pages.json`: all 26 A-page items and all 7 B-page items, namely `def-four-dini-derivatives-at-a-point`, `thm-dini-derivatives-exist-are-ordered-and-detect-differentiability`, `rem-dini-derivatives-specialise-the-published-derivative`, `def-vitali-cover-and-fine-cover-on-the-line`, `thm-riesz-rising-sun-lemma`, `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions`, `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`, `def-jump-function-of-an-increasing-function`, `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`, `thm-jump-functions-have-derivative-zero-almost-everywhere`, `thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`, `thm-vitali-covering-theorem-for-fine-covers-on-the-line`, `thm-mini-vitali-fine-cover-characterisation-of-null-sets`, `thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures`, `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase`, `def-singular-function`, `thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous`, `thm-bv-functions-are-differentiable-almost-everywhere`, `thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions`, `rem-roydens-vitali-route-is-a-third-proof`, `fs-every-continuous-function-is-differentiable-almost-everywhere`, `fs-every-increasing-function-satisfies-newton-leibniz`, `fs-vitali-covering-theorem-holds-for-arbitrary-covers`, `fs-zero-derivative-almost-everywhere-implies-constancy`, `fs-bounded-variation-implies-absolute-continuity`, `fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points`, `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one`, `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere`, `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series`, `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`, `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`, `cex-vitali-covering-theorem-needs-a-fine-cover`, and `ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere`.
- Published dependency items opened for verification: `def-derivative`, `def-one-sided-limits`, `def-extended-reals`, `thm-two-sided-limit-iff-both-one-sided`, `def-monotone-function`, `def-countable-choice`, `def-dependent-choice`, `def-measure-zero-and-content-zero`, `def-lebesgue-outer-measure`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-open-subsets-of-r-structure`, `thm-countable-union-of-null-is-null`, `thm-lebesgue-density-theorem`, `thm-monotone-one-sided-limits-exist`, `thm-monotone-discontinuities-are-jumps`, `thm-froda`, `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`, `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`, `thm-lebesgue-stieltjes-correspondence-with-distribution-functions`, `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition`, `thm-absolute-continuity-of-the-integral`, `thm-first-fundamental-theorem-of-calculus-for-l-one`, `thm-jordan-decomposition-for-bv-functions`, `thm-cantor-function-properties`, `thm-cantor-set-ternary-description`, and `cor-cantor-set-is-an-uncountable-lebesgue-null-set`.

## Confirmed defects and edits

1. Repaired the rising-sun endpoint statement and the downstream one-sided maximal-inequality use of it.
   `items/thm-riesz-rising-sun-lemma.md:32-61` no longer falsely treats the shadow set as open in `R`; it now states the correct subspace-open form with a possible initial component `[a,d)`. `items/thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions.md:45-48` now sums over those corrected component shapes instead of over nonexistent all-open components.
2. Repaired the false uniqueness claim for the jump/continuous split.
   `items/thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md:33-61` no longer claims that arbitrary increasing `J` and continuous `C` with the same jump data are forced; that statement is false already for `F(x)=x`. The item now records the honest pointwise series formula for `J_F` and the corresponding uniqueness of the jump function determined by the jump data.
3. Repaired the right-continuous AC/jump/singular decomposition at the basepoint.
   `items/thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous.md:49-55` now puts the constant term `F(a)` into `A`. The old proof normalized both `J` and `S` to vanish at `a` and also set `A(a)=0`, so it could not recover a general `F(a)`.
4. Repaired the B-page jump examples at the left endpoint and the downstream decomposition example.
   `items/ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere.md:26-50` and `items/ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md:26-47` now enumerate `Q ∩ (0,1]` rather than `Q ∩ [0,1]`, so the endpoint normalization matches the published jump-function convention. The pure-jump example now justifies that its jump function is itself before invoking the derivative-zero theorem.
5. Repaired the Cantor-set secant-slope witnesses so they do not divide by zero at ternary endpoints.
   `items/ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one.md:40-44` and `items/fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points.md:39-40` now argue with a half-increment lower bound and a positive denominator bounded by `3^{-n}`, avoiding the old undefined endpoint quotients.
6. Updated `research/frontier-30-batch-3.proof-contracts.json`.
   I regenerated all 27 batch-3 contract entries after the item repairs, then manually tightened the flagged boundary rows for `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions`, `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`, `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`, and `thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions` so the boundary audit no longer reports contradicted dispositions.

## Remaining editable defect

- `items/thm-mini-vitali-fine-cover-characterisation-of-null-sets.md:49` is still mathematically defective.
  In the forward direction, the proof covers the null remainder by arbitrary intervals `(K_n)` after using the fine cover, but condition 2 requires a subfamily of the given fine cover `V`. I did not repair this item because the gap is not a local wording issue; it needs a new exact-cover argument for null sets from an arbitrary fine cover.

## Per-page verdicts

- `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`: fail pending repair of `thm-mini-vitali-fine-cover-characterisation-of-null-sets`. The other opened A-page items, including the two monotone-a.e.-differentiability routes and the decomposition block, are coherent after the repairs above.
- `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`: pass after the example repairs above.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-riesz-rising-sun-lemma.md items/thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions.md items/thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md items/thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous.md items/ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere.md items/ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md items/ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one.md items/fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points.md`
  Result: the four proof-bearing A-page items were reflowed; the four example/false-statement files were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts` on the eight repaired item files.
  Result: `8 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-3.proof-contracts.json ...`
  Result: first pass `27` regenerated, second pass refreshed the two Cantor-related entries after the secant-slope repair, and a final pass refreshed the jump/continuous split entry after the empty-jump-set boundary fix.
- `node tools/tsx-run.mjs tools/precheck.mts` on all 27 proof-bearing batch-3 items from the contract file.
  Result: `27 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-3.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 27/27 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted dispositions; the remaining output is template-reuse advice only.
- `node tools/content-policy.mjs research/frontier-30-batch-3.pages.json`
  Result: `33 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/... research/frontier-30-batch-3.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None found in the opened published dependencies or page prose.

## Blockers

- No external blocker remains.
- One editable in-flight theorem remains open: `thm-mini-vitali-fine-cover-characterisation-of-null-sets`.
