# frontier-22 reader-5 report

Date: Friday, August 28, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-dispatch/reader-reader-5.prompt.md`, and live run state via `(cd tools/autopilot && node --import ./node_modules/tsx/dist/esm/index.mjs bin/autopilot.mts status --repo ../..)`.
- Batch artifacts: `research/frontier-22-batch-5.pages.json`, `research/frontier-22-batch-5.coverage.json`, `research/frontier-22-batch-5.notes.md`, and `research/frontier-22-batch-5.proof-contracts.json`.
- Assigned pages: `library/measure-theory/modes-of-convergence-egorov-and-lusin.md` and `library/measure-theory/modes-of-convergence-egorov-and-lusin-examples.md`.
- Assigned items: all 41 batch-5 manifest items under `items/`, namely the 33 A-page items and 8 B-page items named in `research/frontier-22-batch-5.pages.json`.
- Required page dependencies opened: `library/measure-theory/the-lebesgue-and-riemann-integrals-compared-examples.md` and `library/topology/urysohn-lemma-and-tietze.md`.
- Direct dependency items opened for verification: `cor-measurable-functions-admit-dominated-simple-approximations`, `def-finite-sigma-finite-and-semifinite-measures`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-over-a-measurable-set`, `def-l-one-of-a-measure`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-measurable-function-between-measurable-spaces`, `def-measure-null-set-and-almost-everywhere`, `def-measure-space`, `def-open-and-closed-in-r`, `def-pointwise-uniform-and-uniformly-cauchy-convergence`, `def-simple-function-and-canonical-representation`, `lem-metrics-on-rn`, `lem-q-and-irrationals-dense-r`, `prop-indicator-function-is-measurable-iff-its-set-is-measurable`, `prop-measure-monotonicity`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-absolute-continuity-of-the-integral`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `thm-fatou-lemma`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-heine-borel-rn`, `thm-lebesgue-inner-regularity-by-closed-and-compact-sets`, `thm-metric-spaces-are-completely-normal`, `thm-monotone-convergence-for-the-integral`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-rationals-countable`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-tietze-extension-theorem`, `thm-uniform-cauchy-criterion-real-functions`, and `thm-uniform-limit-theorem`.
- Supplemental dependency read during repair design: `cor-additivity-of-the-nonnegative-lebesgue-integral`.

## Edits kept

- `items/def-cauchy-in-measure.md`
  Repaired the broken equivalent-quantifier display so the definition renders correctly.
- `items/def-almost-uniform-convergence.md`
  Repaired the broken quantified display in the expanded definition.
- `items/def-uniformly-integrable-family.md`
  Repaired the tail-integral display and the equivalent criterion formatting.
- `items/fs-l-one-convergence-implies-almost-everywhere-convergence.md`
  Restored canonical proof phasing and reflow.
- `items/fs-convergence-in-measure-implies-almost-everywhere-convergence.md`
  Restored facts/step separation and fixed the missing inline `[L1]` citation in the convergence-in-measure step.
- `items/prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces.md`
  Added the missing well-definedness step for the quotient metric and restored canonical phase order.
- `items/thm-riesz-subsequence-theorem-for-convergence-in-measure.md`
  Restored canonical step separation and reflow.
- `items/thm-cauchy-in-measure-converges-in-measure.md`
  Rebuilt the proof into valid phase format without changing the mathematical route.
- `items/thm-egorovs-theorem.md`
  Restored canonical proof formatting.
- `items/fs-egorovs-theorem-holds-on-every-measure-space.md`
  Removed the unused dependency/fact on `thm-egorovs-theorem`, kept the refutation anchored only in the almost-uniform definition, and restored proof formatting.
- `items/lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set.md`
  Restored proof phasing and citation placement.
- `items/lem-simple-approximants-converge-uniformly-on-a-large-closed-set.md`
  Restored proof phasing and contract-parsable facts.
- `items/thm-lusins-theorem.md`
  Restored statement/proof formatting and canonical phasing.
- `items/cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function.md`
  Added the missing normality justification for `R^n` via `lem-metrics-on-rn` and `thm-metric-spaces-are-completely-normal`, then rewrote the proof accordingly.
- `items/thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces.md`
  Removed an unused absolute-continuity fact/dependency from the proof block and restored canonical phase order.
- `items/prop-dominated-families-are-uniformly-integrable.md`
  Made the dominating function explicitly nonnegative and repaired the proof to respect almost-everywhere domination using `thm-the-lebesgue-integral-respects-almost-everywhere-equality`.
- `items/thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces.md`
  Restored the manifest title, canonical phase order, and proof formatting while keeping the finite/sigma-finite theorem content intact.
- `items/cor-dominated-convergence-is-a-vitali-corollary.md`
  Made the dominating function explicitly nonnegative, introduced the common null-set reduction, and repaired the tightness/convergence-in-measure steps via a.e.-equality and monotonicity.
- `items/ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise.md`
  Restored statement/proof formatting.
- `items/ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence.md`
  Restored statement/proof formatting.
- `items/ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval.md`
  Restored statement/proof formatting.
- `items/ex-a-uniformly-integrable-family-with-no-integrable-majorant.md`
  Repaired the statement and proof display math formatting.
- `research/frontier-22-batch-5.proof-contracts.json`
  Regenerated all 33 scoped proof-contract entries after the item repairs and final formatting pass.

No A-page prose change was needed. The B-page body was left untouched.

## Confirmed defects repaired

1. The in-flight convergence/Lusin/Vitali slice carried widespread proof-format and display corruption: malformed `$$...$$` blocks, collapsed phase headings, and mis-phased step numbering were leaving `precheck`, `rendercheck`, and the contract parser red.
2. `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function` used Tietze extension on `R^n` without citing that `R^n` is normal.
3. `prop-dominated-families-are-uniformly-integrable` treated almost-everywhere domination as though it were pointwise domination and left the sign of the majorant implicit.
4. `cor-dominated-convergence-is-a-vitali-corollary` had the same a.e.-versus-pointwise gap in its tightness and convergence-in-measure reductions.
5. `prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces` identified zero-distance classes but omitted the load-bearing well-definedness argument for the induced quotient metric.
6. `fs-egorovs-theorem-holds-on-every-measure-space` carried an unused dependency/fact on the finite-measure Egorov theorem; the refutation only needs the almost-uniform definition.
7. `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces` carried an unused absolute-continuity fact/dependency in its current proof presentation.

No uneditable page, in-flight-item, or published-dependency defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on every changed proof-bearing item
  Result: the repaired proof-bearing items match canonical one-line step reflow.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-5.proof-contracts.json <all 33 scoped proof ids>`
  Result: regenerated all 33 batch-5 proof-contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-5 item scope>`
  Result: pass, `33 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-22-batch-5.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 33/33 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-5.proof-contracts.json --fail-on-missing-quote`
  Result: pass, `113 citation(s) over 33 authored item(s)` with no quote-not-found lines and no widening candidates.
- `node tools/rendercheck.mjs` on the two assigned page files plus the full 41-item batch scope
  Result: pass, `OK — 43 file(s)`.
- `node tools/content-policy.mjs research/frontier-22-batch-5.pages.json`
  Result: pass, `41 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- <changed batch-5 item files> research/frontier-22-batch-5.proof-contracts.json research/frontier-22-reader-5.md research/frontier-22-reader-findings-5.json`
  Result: pass.

## Page verdicts

- `modes-of-convergence-egorov-and-lusin`
  Sufficient after repair on the opened scope. The convergence-in-measure, Egorov, Lusin, and Vitali blocks now have clean phase proofs, the Tietze corollary cites normality of `R^n` honestly, and the domination-based arguments no longer treat almost-everywhere bounds as pointwise bounds.
- `modes-of-convergence-egorov-and-lusin-examples`
  Clean on the opened scope. The companion witnesses remain compatible with the repaired A-page statements.

## Blockers

- None in the opened batch-5 scope.
- No uneditable published-dependency defect remains.
