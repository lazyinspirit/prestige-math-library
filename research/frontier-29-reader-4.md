# frontier-29 reader-4 report

Run: `frontier-29`  
Batch: `4`  
Role: independent Step-6 reader

## Scope opened

Control and batch artifacts opened:

- `AGENTS.md`, `CLAUDE.md`, `README.md`, `WORKFLOW.md`
- `research/frontier-29-reader.task.md`
- `research/frontier-29-beta-4.task.md`
- `research/frontier-29-batch-4.pages.json`
- `research/frontier-29-batch-4.proof-contracts.json`
- `research/frontier-29-batch-4.coverage.json`
- `research/frontier-29-batch-4.notes.md`
- `research/plan-measure-theory-track.md` (MT-17 block)
- `research/plan-spec.json`
- `library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`
- `library/measure-theory/the-maximal-function-and-lebesgue-differentiation-examples.md`

Repository state check required by `AGENTS.md`:

- `node --import tsx bin/autopilot.mts status --repo ../..` from `tools/autopilot/`
- `.autopilot/` currently tracks `frontier-23`, not `frontier-29`; I treated that as context only and continued the historical batch read from the named `frontier-29` artifacts.

Assigned A-page items opened:

- `def-locally-integrable-function-on-r-n`
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure`
- `def-ball-average-operator-on-r-n`
- `def-centered-and-uncentered-hardy-littlewood-maximal-functions`
- `def-sublinear-operator-weak-and-strong-type-p-q`
- `def-lebesgue-point-and-lebesgue-set`
- `def-density-of-a-measurable-set-at-a-point`
- `def-family-shrinking-nicely-to-a-point`
- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates`
- `prop-ball-average-is-continuous-in-centre-and-radius`
- `thm-centered-hardy-littlewood-maximal-function-is-borel-measurable`
- `prop-centered-and-uncentered-maximal-functions-are-comparable`
- `thm-hardy-littlewood-maximal-inequality-for-balls`
- `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded`
- `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`
- `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded`
- `thm-riesz-thorin-interpolation`
- `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages`
- `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`
- `thm-almost-every-point-is-a-lebesgue-point`
- `thm-lebesgue-density-theorem`
- `thm-differentiation-along-families-shrinking-nicely`
- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
- `thm-first-fundamental-theorem-of-calculus-for-l-one`
- `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one`

Assigned B-page items opened:

- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r`
- `cex-the-unit-interval-indicator-has-nonintegrable-maximal-function`
- `ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set`
- `ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r`
- `ex-an-interval-endpoint-is-not-a-density-point`
- `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval`
- `ex-steinhaus-follows-from-the-density-theorem`
- `fs-there-is-a-measurable-set-with-density-one-half-in-every-interval`
- `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set`

Published dependency items opened to verify the current claims:

- `def-metric-ball`
- `thm-lebesgue-measure-of-a-box-of-every-kind`
- `thm-lebesgue-measure-under-dilations-and-reflections`
- `thm-lebesgue-inner-regularity-by-closed-and-compact-sets`
- `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`
- `prop-countable-subsets-of-rn-are-lebesgue-null`
- `thm-c-c-rn-is-dense-in-l-p-of-rn`
- `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`
- `cor-l-p-norm-recovery-by-unit-l-q-pairings`
- `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`
- `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`
- `def-radon-nikodym-derivative`

## Confirmed defects and edits

### Repaired owned A-page defects

1. Countable-choice propagation repaired across the owned A-page route.
   - The current proofs for the Euclidean ball-measure lemma, ball-average continuity, maximal-function comparability, weak `(1,1)`, `L^p` boundedness, Lebesgue differentiation, Lebesgue points, density, nicely shrinking families, measure differentiation, the `L^1` FTC, and the `L^1` strong-type counterexample all cited already-published results whose on-disk Statements explicitly assume `[[def-countable-choice]]`.
   - Repair made: added explicit `Assume the Axiom of Countable Choice` statements, matching `Given` lines, and the missing `def-countable-choice` deps on the owned A-page items and definitions that currently inherit that hypothesis.

2. `items/thm-differentiation-along-families-shrinking-nicely.md`
   - Confirmed defect on current bytes: the Statement fixed one point `x` and one family `(E_r)`, then concluded the limits hold “for almost every `x`”, which is a quantifier clash.
   - Repair made: rewrote the item to quantify over a set `A` and families `(E_r(x))_{r>0}` indexed by the evaluation point, with the proof correspondingly rewritten at fixed `x in A`.

3. `items/thm-first-fundamental-theorem-of-calculus-for-l-one.md`
   - Confirmed defect on current bytes: step `1.1` used the closed one-sided intervals `[x,x+r]` and `[x-r,x]` as families “shrinking nicely”, but `[[def-family-shrinking-nicely-to-a-point]]` requires containment in the open ball `B(x,r)=(x-r,x+r)`.
   - Repair made: replaced those by `[x,x+r)` and `(x-r,x]`, then rewrote step `2.1` to apply the shrinking-family theorem separately to the right and left families before intersecting the resulting full-measure sets.

4. `items/prop-hardy-littlewood-maximal-function-is-l-infinity-bounded.md` and `items/lem-continuous-compactly-supported-functions-differentiate-by-ball-averages.md`
   - Confirmed downstream choice-gap defect after the A-page repairs above: both files cite now-choice-qualified A items but had remained unqualified themselves.
   - Repair made: propagated the same explicit choice hypothesis into both files and regenerated the affected downstream contract entries.

5. `library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`
   - Added one sentence to the A-page summary recording that the current library route inherits `AC_omega` from the published Lebesgue-measure regularity and density inputs it cites.

6. `research/frontier-29-batch-4.proof-contracts.json`
   - Regenerated the 16 changed proof-bearing entries after the A-item repairs.
   - Manually tightened four citation quotes after regeneration so `proof-contract --strict` matched the rewritten source Statements exactly.

No changed owned item carried a `verification.judge` block, so there was no stale judge stamp to remove.

## Remaining defects and blockers

### Editable A-item blockers left in place

1. `items/thm-riesz-thorin-interpolation.md`
   - `items/thm-riesz-thorin-interpolation.md:32-38` states the interpolated bound for every `f in L^{p_theta}(mu)` from endpoint estimates “whenever the displayed norms are defined”.
   - But `items/thm-riesz-thorin-interpolation.md:111-120` only constructs an `L^{q_theta}` limit of `Tf_n` along a dense simple subclass and then identifies that limit with `Tf` “by linearity of T on the dense simple subclass”. That identification does not follow from the written hypotheses.
   - The same proof also cites `cor-l-p-norm-recovery-by-unit-l-q-pairings` at `items/thm-riesz-thorin-interpolation.md:48-49`, which covers only finite target exponents, while the Statement still allows `q_theta = infty`.

2. `items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md`
   - `items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md:75-91` invokes “a sigma-finite Borel measure finite on compact sets is regular on `R^n`” with no cited library dependency and no local derivation.
   - `items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md:93-98` then concludes `lambda(F_k)=0` from the vanishing of compact subsets without first establishing the needed measurability/inner-regularity facts for `F_k`.
   - I left this item as a recorded blocker rather than patching it on insufficiently justified mathematics.

### Uneditable B-page defects

1. `items/ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r.md:22`
   - Step `1.1` uses `[[prop-countable-subsets-of-rn-are-lebesgue-null]]`, whose current Statement begins with `Assume the Axiom of Countable Choice`, but the example’s Statement and `Given` line do not inherit that hypothesis.

2. `items/ex-an-interval-endpoint-is-not-a-density-point.md:22`
   - Step `1.1` uses `[[thm-lebesgue-measure-of-a-box-of-every-kind]]`, whose current Statement begins with `Assume the Axiom of Countable Choice`, but the example is stated without that hypothesis.

3. `items/ex-a-positive-measure-compact-set-can-miss-part-of-every-interval.md:22`
   - Step `2.1` uses `[[thm-lebesgue-measure-of-a-box-of-every-kind]]` through `[L5]`, and the file already carries `def-countable-choice` in `deps`, but the Statement never states the needed choice hypothesis.

4. `items/ex-steinhaus-follows-from-the-density-theorem.md:24`
   - `[L1]` cites the repaired `[[thm-lebesgue-density-theorem]]`, whose current Statement now explicitly assumes `[[def-countable-choice]]`, but the example Statement still omits it.

5. `items/ex-steinhaus-follows-from-the-density-theorem.md:39-49`
   - `[L3]` cites `[[thm-lebesgue-measure-under-dilations-and-reflections]]`, which proves scaling under dilations and reflection, but step `1.1` uses small-translation continuity of `lambda(B(x+h,r) triangle B(x,r))`. The current citation does not license that step.

6. `items/fs-there-is-a-measurable-set-with-density-one-half-in-every-interval.md:22`
   - The refutation uses both the repaired `[[thm-lebesgue-density-theorem]]` and `[[thm-lebesgue-measure-of-a-box-of-every-kind]]`, each now explicitly choice-qualified on disk, but the false statement item is still written without that hypothesis.

## Page verdicts

- `the-maximal-function-and-lebesgue-differentiation`: insufficient on current disk after repair. The A-page choice propagation, shrinking-family quantifier repair, and FTC interval repair are in place, but `thm-riesz-thorin-interpolation` and `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` remain open blockers.
- `the-maximal-function-and-lebesgue-differentiation-examples`: insufficient on current disk. The six uneditable B-page item defects above remain, and the page summary inherits the same choice-sensitive carrier.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md items/def-ball-average-operator-on-r-n.md items/def-centered-and-uncentered-hardy-littlewood-maximal-functions.md items/def-lebesgue-point-and-lebesgue-set.md items/def-density-of-a-measurable-set-at-a-point.md items/def-family-shrinking-nicely-to-a-point.md items/thm-vitali-covering-lemma-for-balls-with-fivefold-dilates.md items/prop-ball-average-is-continuous-in-centre-and-radius.md items/thm-centered-hardy-littlewood-maximal-function-is-borel-measurable.md items/prop-centered-and-uncentered-maximal-functions-are-comparable.md items/thm-hardy-littlewood-maximal-inequality-for-balls.md items/prop-hardy-littlewood-maximal-function-is-l-infinity-bounded.md items/cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded.md items/lem-continuous-compactly-supported-functions-differentiate-by-ball-averages.md items/thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n.md items/thm-almost-every-point-is-a-lebesgue-point.md items/thm-lebesgue-density-theorem.md items/thm-differentiation-along-families-shrinking-nicely.md items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md items/thm-first-fundamental-theorem-of-calculus-for-l-one.md items/cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one.md library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`
  - pass
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md items/thm-vitali-covering-lemma-for-balls-with-fivefold-dilates.md items/prop-ball-average-is-continuous-in-centre-and-radius.md items/thm-centered-hardy-littlewood-maximal-function-is-borel-measurable.md items/prop-centered-and-uncentered-maximal-functions-are-comparable.md items/thm-hardy-littlewood-maximal-inequality-for-balls.md items/prop-hardy-littlewood-maximal-function-is-l-infinity-bounded.md items/cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded.md items/lem-continuous-compactly-supported-functions-differentiate-by-ball-averages.md items/thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n.md items/thm-almost-every-point-is-a-lebesgue-point.md items/thm-lebesgue-density-theorem.md items/thm-differentiation-along-families-shrinking-nicely.md items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md items/thm-first-fundamental-theorem-of-calculus-for-l-one.md items/cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one.md`
  - pass
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-4.proof-contracts.json lem-euclidean-balls-have-positive-finite-lebesgue-measure thm-vitali-covering-lemma-for-balls-with-fivefold-dilates prop-ball-average-is-continuous-in-centre-and-radius thm-centered-hardy-littlewood-maximal-function-is-borel-measurable prop-centered-and-uncentered-maximal-functions-are-comparable thm-hardy-littlewood-maximal-inequality-for-balls cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n thm-almost-every-point-is-a-lebesgue-point thm-lebesgue-density-theorem thm-differentiation-along-families-shrinking-nicely thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n thm-first-fundamental-theorem-of-calculus-for-l-one cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one`
  - regenerated 14 entries
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-4.proof-contracts.json prop-hardy-littlewood-maximal-function-is-l-infinity-bounded lem-continuous-compactly-supported-functions-differentiate-by-ball-averages cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`
  - regenerated 4 entries
- `node tools/proof-contract.mjs research/frontier-29-batch-4.proof-contracts.json --strict --items lem-euclidean-balls-have-positive-finite-lebesgue-measure,thm-vitali-covering-lemma-for-balls-with-fivefold-dilates,prop-ball-average-is-continuous-in-centre-and-radius,thm-centered-hardy-littlewood-maximal-function-is-borel-measurable,prop-centered-and-uncentered-maximal-functions-are-comparable,thm-hardy-littlewood-maximal-inequality-for-balls,prop-hardy-littlewood-maximal-function-is-l-infinity-bounded,cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded,lem-continuous-compactly-supported-functions-differentiate-by-ball-averages,thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n,thm-almost-every-point-is-a-lebesgue-point,thm-lebesgue-density-theorem,thm-differentiation-along-families-shrinking-nicely,thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n,thm-first-fundamental-theorem-of-calculus-for-l-one,cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one`
  - pass: `16/16`, zero errors, zero warnings
- `node tools/citation-fidelity.mjs research/frontier-29-batch-4.proof-contracts.json --items-dir items --fail-on-missing-quote`
  - pass: `78` citations, no missing quote, no widening candidate
- `node tools/content-policy.mjs research/frontier-29-batch-4.pages.json`
  - pass: `34 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/prosecheck.mjs library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`
  - pass with one heuristic warning: `count-in-prose`
- `git diff --check -- items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md items/def-ball-average-operator-on-r-n.md items/def-centered-and-uncentered-hardy-littlewood-maximal-functions.md items/def-lebesgue-point-and-lebesgue-set.md items/def-density-of-a-measurable-set-at-a-point.md items/def-family-shrinking-nicely-to-a-point.md items/thm-vitali-covering-lemma-for-balls-with-fivefold-dilates.md items/prop-ball-average-is-continuous-in-centre-and-radius.md items/thm-centered-hardy-littlewood-maximal-function-is-borel-measurable.md items/prop-centered-and-uncentered-maximal-functions-are-comparable.md items/thm-hardy-littlewood-maximal-inequality-for-balls.md items/prop-hardy-littlewood-maximal-function-is-l-infinity-bounded.md items/cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded.md items/lem-continuous-compactly-supported-functions-differentiate-by-ball-averages.md items/thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n.md items/thm-almost-every-point-is-a-lebesgue-point.md items/thm-lebesgue-density-theorem.md items/thm-differentiation-along-families-shrinking-nicely.md items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md items/thm-first-fundamental-theorem-of-calculus-for-l-one.md items/cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one.md library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md research/frontier-29-batch-4.proof-contracts.json`
  - pass

## Blockers

- Mathematical blocker left on current disk: `thm-riesz-thorin-interpolation`
- Mathematical blocker left on current disk: `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
- Uneditable B-page defects remain as listed above
