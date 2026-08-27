# frontier-20 reader-1 report

Date: Wednesday, August 26, 2026.

## Opened scope

- Task/control files: `CLAUDE.md`, `README.md`, `research/frontier-20-reader.task.md`, `research/frontier-20-covers.json`, `.autopilot/state.json`, `.autopilot/status.md`, `research/frontier-20-step6-hash-1-pre.json`.
- Batch artifacts: `research/frontier-20-batch-1.pages.json`, `research/frontier-20-batch-1.proof-contracts.json`, `research/frontier-20-batch-1.coverage.json`, `research/frontier-20-batch-1.notes.md`.
- Assigned pages: `library/measure-theory/lebesgue-stieltjes-measures-and-distribution-functions.md`, `library/measure-theory/lebesgue-stieltjes-measures-and-distribution-functions-examples.md`, `library/measure-theory/measurable-functions-and-simple-approximation.md`, `library/measure-theory/measurable-functions-and-simple-approximation-examples.md`.
- Assigned items: every batch-1 manifest item under `items/`, namely all 71 assigned A/B-page items from the two page pairs.
- Dependency closure opened for verification: `def-algebra-of-subsets`, `def-interval`, `def-premeasure-on-an-algebra`, `thm-caratheodory-extension-theorem`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `def-extended-reals`, `def-limsup-liminf`, `thm-convergence-iff-limsup-equals-liminf`, `def-complete-measure-space`, `prop-null-sets-form-a-sigma-ideal-in-a-complete-space`, `def-completion-of-a-measure-space`, `thm-completion-of-a-measure-space`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `thm-monotone-class`, `thm-heine-borel-r`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `lem-compact-implies-closed-and-bounded-r`, `lem-rat-embeds-dense`, `def-cantor-function`, `thm-cantor-function-properties`, `cor-cantor-function-is-continuous`, `cor-cantor-set-is-an-uncountable-lebesgue-null-set`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `thm-nonnegative-weighted-sums-of-measures`, `def-counting-measure`, `prop-counting-measure-is-a-measure`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`, `thm-fat-cantor-set-has-positive-measure`, `thm-metric-spaces-are-tychonoff-and-perfectly-normal`, `thm-a-vitali-set-is-not-lebesgue-measurable`, `thm-vitali-sets-exist-under-choice-on-r-over-q`, `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel`, `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable`, `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset`, `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one`, `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two`, `thm-lebesgue-measure-is-a-complete-measure`, and the published monotonicity definition `def-monotone-function`.

## Edits kept

- `items/thm-threshold-characterisations-of-real-and-extended-real-measurability.md`
  Repaired the rational-threshold reduction proof so the numbered steps line up with the actual equivalence argument.
- `items/thm-ae-equality-preserves-measurability-on-complete-spaces.md`
  Repaired malformed math in the Statement and Given block (`g : X -> Rbar` was missing opening `$` delimiters).
- `items/ex-dyadic-simple-approximations-to-x-squared-on-zero-two.md`
  Corrected the `k=2` interval table and normalized the display blocks so the renderer accepts the item.
- `items/ex-a-step-function-generates-a-finite-atomic-measure.md`
  Replaced the invalid “same singleton masses and no other atoms” shortcut with a uniqueness-on-half-open-intervals argument.
- `items/thm-stieltjes-interval-set-function-is-a-premeasure.md`
  Repaired multiline displays for rendering and retagged two step openers so the focused precheck/proof-contract passes on current bytes.
- `research/frontier-20-batch-1.proof-contracts.json`
  Regenerated the changed contract rows and every batch-1 row citing the repaired threshold theorem or premeasure item.

## Confirmed defects not repaired

- `items/def-half-open-interval-algebra-on-r.md`
  The family as written contains only bounded finite unions of `(a,b]`, so it omits `\mathbb{R}` and is not complement-closed. It is not an algebra in the sense of the cited published dependency.
- `items/def-lebesgue-stieltjes-interval-set-function.md`
  The item imports the library’s strict notion of “increasing”, but the page’s examples and intended correspondence need the weak nondecreasing notion.
- `items/thm-existence-of-the-lebesgue-stieltjes-measure.md`
  The Statement omits countable choice even though the cited extension theorem explicitly assumes it.
- `items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`
  The proof is mathematically defective at atoms and also claims an algebra structure for traced intervals that does not hold. The current proof body additionally still fails focused `precheck` with `untagged-steps`.

These are all editable batch-1 draft-item defects, so they are recorded here rather than in the findings JSON.

## Checks

- `node tools/rendercheck.mjs items/thm-threshold-characterisations-of-real-and-extended-real-measurability.md items/thm-ae-equality-preserves-measurability-on-complete-spaces.md items/ex-dyadic-simple-approximations-to-x-squared-on-zero-two.md items/ex-a-step-function-generates-a-finite-atomic-measure.md items/thm-stieltjes-interval-set-function-is-a-premeasure.md items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`
  Result: pass. The six focused files now render cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-threshold-characterisations-of-real-and-extended-real-measurability.md items/thm-ae-equality-preserves-measurability-on-complete-spaces.md items/ex-dyadic-simple-approximations-to-x-squared-on-zero-two.md items/ex-a-step-function-generates-a-finite-atomic-measure.md items/thm-stieltjes-interval-set-function-is-a-premeasure.md items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`
  Result: five pass; `items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md` still fails with `untagged-steps`.
- `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict --items ex-a-step-function-generates-a-finite-atomic-measure,ex-dyadic-simple-approximations-to-x-squared-on-zero-two,thm-ae-equality-preserves-measurability-on-complete-spaces,thm-arithmetic-and-lattice-operations-preserve-measurability,thm-coordinatewise-measurability-into-r-n,thm-doob-dynkin-lemma,thm-existence-of-the-lebesgue-stieltjes-measure,thm-lebesgue-stieltjes-measures-are-regular-on-r,thm-monotone-real-functions-are-borel-measurable,thm-nonnegative-measurable-functions-admit-increasing-simple-approximations,thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable,thm-stieltjes-interval-set-function-is-a-premeasure,thm-threshold-characterisations-of-real-and-extended-real-measurability`
  Result: pass; `0 error(s), 0 warning(s), 13/13 item(s) checked`.

## Page verdicts

- `lebesgue-stieltjes-measures-and-distribution-functions`
  Blocked. The half-open-family definition is ill-typed as an algebra, the Stieltjes construction currently uses the wrong monotonicity notion, the existence theorem omits its countable-choice hypothesis, and the regularity theorem remains defective.
- `lebesgue-stieltjes-measures-and-distribution-functions-examples`
  Mixed. `ex-a-step-function-generates-a-finite-atomic-measure` was repaired, but the page still depends on the blocked A-page construction.
- `measurable-functions-and-simple-approximation`
  Sufficient after repair on the opened scope. The threshold-characterization and a.e.-equality items now read correctly and pass focused checks.
- `measurable-functions-and-simple-approximation-examples`
  Sufficient after repair on the opened scope. The dyadic-approximation example now has the correct `k=2` table and renders cleanly.

## Blockers

- The remaining confirmed defects are concentrated in editable batch-1 draft items on the Lebesgue-Stieltjes A page. I did not complete a safe end-to-end reconstruction of that page’s algebra choice / nondecreasing convention / choice hypothesis / regularity proof within this reader pass.
- Focused `precheck` still fails on the current bytes of `items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`.
- No uneditable published-dependency defect was confirmed on the opened dependency closure.
