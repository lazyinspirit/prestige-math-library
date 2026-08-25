# frontier-18 reader-7 report

Batch: `7`
Run: `frontier-18`
Role: independent reader, step `6a`
Date: 2026-08-24

## Scope

- Pages opened: `lebesgue-measure-on-euclidean-space`, `lebesgue-measure-on-euclidean-space-examples`
- Structural checks completed so far:
  - The A page has exactly two prose summary paragraphs, each under 150 words.
  - The B page is a clean stub with no authored body.
  - Every scoped mathematical-content item carries `provenance.statement` and `provenance.proof`.
  - No scoped item depends on a `deps` target whose `provenance.statement` is `ai-generated`.
  - No scoped item currently carries a `verification.judge` block.
  - `node tools/proof-contract.mjs research/frontier-18-batch-7.proof-contracts.json --strict` passes on the current contract.
  - `node tools/citation-fidelity.mjs research/frontier-18-batch-7.proof-contracts.json` reports 11 widening candidates for human review.
  - `node tools/boundary-audit.mjs research/frontier-18-batch-7.proof-contracts.json` reports 1 contradicted-disposition candidate for human review.

## Findings

### R7-1

- Item: `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure`
- Location: Example statement and verification step `2.1`
- Severity: `fatal`
- Defect: the item claimed `\lambda_1(U) < \varepsilon`, but the written construction only gave the upper bound `\lambda_1(U) \le \varepsilon`.
- Evidence: [items/ex-a-dense-open-subset-of-the-unit-interval-of-small-measure.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-a-dense-open-subset-of-the-unit-interval-of-small-measure.md) originally used intervals of radius `\varepsilon 2^{-k-2}`, so the displayed length bound summed to exactly `\varepsilon`. That proves at most `\le \varepsilon`, not the strict inequality asserted in the Example text.
- Repair: shrank the radii to `\varepsilon 2^{-k-3}`, updated step `2.1`, and updated the batch contract row and boundary evidence. The revised proof now gives `\lambda_1(U) \le \varepsilon/2 < \varepsilon`.

### R7-2

- Item: `ex-a-dense-null-g-delta-set-containing-the-rationals`
- Location: verification step `3.1`
- Severity: `fatal`
- Defect: the item concluded that `\mathbb{R}\setminus G` has full measure on every bounded interval, but the written proof only computed `\lambda_1([-N,N]\setminus G)=2N` for centered intervals.
- Evidence: [items/ex-a-dense-null-g-delta-set-containing-the-rationals.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-a-dense-null-g-delta-set-containing-the-rationals.md) did not justify the passage from the special family `[-N,N]` to an arbitrary bounded interval, so the final sentence asserted more than step `3.1` proved.
- Repair: added the missing measure dependency, rewrote step `3.1` to take an arbitrary bounded interval `I`, and used the measurable decomposition `I=(I\cap G)\sqcup(I\setminus G)` with `\lambda_1(I\cap G)=0`. The batch contract was updated to match.

### R7-3

- Item: `ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane`
- Location: verification step `1.1`
- Severity: `fatal`
- Defect: the proof used continuity plus compactness on `[m,m+1]` to produce a partition with uniformly small vertical oscillation, but it cited no result that licenses the required uniform continuity step.
- Evidence: [items/ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane.md) originally cited only `def-continuity-real`, `thm-heine-borel-rn`, and `def-oscillation`. None of those states that a continuous real function on a compact interval is uniformly continuous, so the partition construction was an unlicensed inference.
- Repair: replaced the oscillation-based step with an explicit Heine-Cantor/Archimedean partition argument, updated the deps and batch manifest entry, and rewrote the contract citations/derivations/boundaries accordingly.

## Coverage notes

- Opened page files:
  - [lebesgue-measure-on-euclidean-space.md](/home/lazyinspirit/Projects/prestige-math-library/library/measure-theory/lebesgue-measure-on-euclidean-space.md)
  - [lebesgue-measure-on-euclidean-space-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/measure-theory/lebesgue-measure-on-euclidean-space-examples.md)
- Opened scoped example/counterexample/false-statement items on the B page directly.
- Opened the following higher-risk scoped A-page items directly:
  - `prop-elementary-volume-is-finitely-additive-and-monotone`
  - `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations`
  - `thm-elementary-volume-is-well-defined`
  - `thm-box-volume-is-a-premeasure-on-the-elementary-algebra`
  - `thm-lebesgue-outer-regularity-for-arbitrary-subsets`
  - `lem-lebesgue-measurable-sets-have-small-open-excess`
  - `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`
  - `thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line`
  - `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
  - `thm-lebesgue-measure-under-dilations-and-reflections`
  - `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant`
- Opened cited dependency items before escalating weaknesses, including `lem-finite-sum-laws`, `def-measure-zero-and-content-zero`, `def-integer-power`, `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`, `thm-heine-cantor-r`, `cor-archimedean-reciprocal`, and `thm-extreme-value-metric`.
- Local validation after repairs:
  - `node tools/tsx-run.mjs tools/reflow.mts items/ex-a-dense-open-subset-of-the-unit-interval-of-small-measure.md items/ex-a-dense-null-g-delta-set-containing-the-rationals.md items/ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane.md`
  - `node tools/tsx-run.mjs tools/precheck.mts items/ex-a-dense-open-subset-of-the-unit-interval-of-small-measure.md items/ex-a-dense-null-g-delta-set-containing-the-rationals.md items/ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane.md`
  - `node tools/proof-contract.mjs research/frontier-18-batch-7.proof-contracts.json --strict`
  - `node tools/citation-fidelity.mjs research/frontier-18-batch-7.proof-contracts.json`
  - `node tools/boundary-audit.mjs research/frontier-18-batch-7.proof-contracts.json`
- Current gate state:
  - `precheck` passes on all three changed items.
  - `proof-contract --strict` passes on the whole batch contract.
  - `citation-fidelity` now reports no missing quotes and leaves 11 widening candidates elsewhere in the batch; I did not confirm a concrete defect from those candidates in the items I opened.
  - `boundary-audit` still reports one candidate on `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant` `[empty]`; I read that item and did not confirm a defect, because the statement has no empty-instance branch and the flagged aggregate comes from an internal determinant/product computation rather than a boundary case of the claim.

## Verdict

- Page `lebesgue-measure-on-euclidean-space`: no confirmed defect in the scoped A-page items I directly opened; the remaining machine-generated widening candidates were not escalated in this pass.
- Page `lebesgue-measure-on-euclidean-space-examples`: three confirmed fatal defects, all repaired in place.
- Scoped items directly opened in this pass: `24`.
