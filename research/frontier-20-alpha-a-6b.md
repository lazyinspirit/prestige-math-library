# Frontier 20 — Alpha group a step-6b adjudication

**Dispatch:** `6b-a`

## Scope and method

- Reopened `CLAUDE.md`, `README.md`, `research/frontier-20-alpha-6b-routed.task.md`, `tools/step6-scope.mjs`, and the routed Step-6 scope files for batches `1` and `2`.
- Verified the reader reports, reader findings JSON, refuter reports, current carriers, and cited dependencies against current disk before deciding any routed obligation.
- Worked only inside group `a` scope: touched carriers and refuter findings for batches `1` and `2`.
- Kept the non-routed support repairs local to the same group scope: the Stieltjes convention/algebra layer, its direct consumers, the Cantor-measure definition display, and the four batch-2 witness files needed to keep the full batch-2 proof-contract file consistent after regeneration.

## Batch 1 obligations

| obligation | verdict | evidence |
|---|---|---|
| `touched:1:ex-a-step-function-generates-a-finite-atomic-measure` | `accepted_repair` | The current proof no longer jumps from matching singleton masses to full equality; it now compares half-open interval values and closes equality through interval uniqueness. |
| `touched:1:ex-dyadic-simple-approximations-to-x-squared-on-zero-two` | `accepted_repair` | The k=2 dyadic table and its display blocks are corrected on current disk, so the simple-function values now match x^2 on each dyadic strip. |
| `touched:1:thm-ae-equality-preserves-measurability-on-complete-spaces` | `accepted_repair` | The statement and Given block are now well formed, with the measurable-function notation restored so the theorem reads as a coherent measurable-equality result. |
| `touched:1:thm-lebesgue-stieltjes-measures-are-regular-on-r` | `amended_repair` | The reader reopened the theorem, and 6b then replaced the atom-dropping compact approximation with K=[a+delta,b] and replaced the false traced-single-interval algebra claim by traces of the full h-interval algebra. |
| `touched:1:thm-stieltjes-interval-set-function-is-a-premeasure` | `amended_repair` | The reader's rendering/tag repair is still present, and 6b rebuilt the theorem on the corrected h-interval algebra, proving bounded intervals first and recovering the ray and whole-line cases by truncation. |
| `touched:1:thm-threshold-characterisations-of-real-and-extended-real-measurability` | `accepted_repair` | The rational-threshold reduction now matches the actual equivalence argument on current disk; the numbered steps no longer drift away from the proof they cite. |
| `refuter:1:1` | `confirmed_fatal` | The live definition now uses h-intervals with extended endpoints, so complements and finite unions stay inside H and the algebra claim is true. |
| `refuter:1:2` | `confirmed_fatal` | After repairing the source algebra and h-interval definition, the theorem now states and proves a genuine premeasure on that algebra. |
| `refuter:1:3` | `confirmed_fatal` | The title, Statement, and Given block now explicitly assume the Axiom of Countable Choice, matching the cited Caratheodory extension theorem used at step 1.1. |
| `refuter:1:4` | `confirmed_fatal` | The witness is now stated as nondecreasing rather than strictly increasing, so the counterexample actually satisfies the antecedent it refutes. |
| `refuter:1:5` | `confirmed_fatal` | Step 2.1 no longer cites the Euclidean-space corollary; it now uses the general theorem that continuous maps have Borel preimages, which applies to c:[0,1]->R with the subspace topology. |
| `refuter:1:6` | `confirmed_fatal` | Clause 1 now says F_mu is nondecreasing, not strictly increasing, and the theorem's measure-to-function comparison is aligned with the Dirac-mass witness. |
| `refuter:1:7` | `confirmed_fatal` | The inner-regularity step no longer drops the endpoint atom: it now takes K=[a+delta,b], so I\K=(a,a+delta) and the smallness estimate is valid. |
| `refuter:1:8` | `confirmed_fatal` | The bounded monotone-class argument now uses traces of the full h-interval algebra on I_m, not the false family of single traced half-open intervals. |

## Batch 2 obligations

| obligation | verdict | evidence |
|---|---|---|
| `touched:2:cex-fatou-can-be-strict-and-domination-can-fail-simultaneously` | `accepted_repair` | The counterexample text is unchanged mathematically, but the proof-step tags are now in canonical positions and the contract derivation matches the live witness. |
| `touched:2:cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired upstream convergence theorems on current disk. |
| `touched:2:cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space` | `accepted_repair` | The counterexample text is unchanged mathematically, but the proof-step tags are now in canonical positions and the contract derivation matches the live witness. |
| `touched:2:cor-bounded-convergence-on-a-finite-measure-space` | `accepted_repair` | The corollary now names the limit function's measurability before invoking dominated convergence, so the application is licensed on current disk. |
| `touched:2:cor-reverse-fatou-lemma-under-an-integrable-majorant` | `accepted_repair` | The proof no longer subtracts +infty from +infty; it now runs through the truncation argument recorded in the reader repair. |
| `touched:2:def-integrable-real-and-complex-functions-and-their-integrals` | `accepted_repair` | The malformed wikilink in the positive/negative-parts definition is repaired on current disk, so the definition is well formed. |
| `touched:2:ex-differentiating-the-laplace-sine-integral-under-the-integral-sign` | `amended_repair` | The reader's example-tag repair is still present, and 6b additionally regenerated the downstream contract after strengthening the differentiation theorem's null-set hypothesis. |
| `touched:2:ex-dirac-integral-is-evaluation-at-a-point` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired integration statements it cites. |
| `touched:2:fs-dominated-convergence-without-a-dominating-function` | `accepted_repair` | The false statement's proof-step tags are now canonical, so the contract derivation matches the live refutation. |
| `touched:2:fs-pointwise-limits-of-integrable-functions-are-integrable` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired upstream convergence theorems on current disk. |
| `touched:2:prop-indefinite-integral-of-an-integrable-function-is-countably-additive` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired signed-integral statements on current disk. |
| `touched:2:thm-absolute-continuity-of-the-integral` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired convergence and integrability inputs on current disk. |
| `touched:2:thm-continuity-under-the-integral-sign` | `accepted_repair` | The theorem now makes the dominating function explicit as a nonnegative measurable L^1 majorant, matching the dominated-convergence dependency it uses. |
| `touched:2:thm-differentiation-under-the-integral-sign` | `amended_repair` | The reader's measurability/majorant repair is still present, and 6b strengthened the derivative bound to a single null set and excluded h_n=0 before applying dominated convergence. |
| `touched:2:thm-dominated-convergence` | `accepted_repair` | The theorem now makes the limit function measurable and the majorant a nonnegative measurable L^1 function, and the proof runs on the complement of the exceptional null set. |
| `touched:2:thm-integrable-simple-functions-are-dense-in-l-one` | `accepted_repair` | The repaired proof now completes the complex-valued approximation step and records the missing nonnegative-integral inputs. |
| `touched:2:thm-integral-triangle-inequality` | `accepted_repair` | The current proof derives the real case from positivity and linearity and then reduces the complex case correctly. |
| `touched:2:thm-linearity-of-the-lebesgue-integral-on-l-one` | `accepted_repair` | The current proof now supplies the real additivity, real homogeneity, and complex linearity arguments with the needed measurable-closure inputs. |
| `touched:2:thm-the-lebesgue-integral-respects-almost-everywhere-equality` | `accepted_repair` | The carrier change is contract-only: the regenerated contract row now matches the repaired linearity and zero-integral inputs on current disk. |
| `refuter:2:1` | `confirmed_fatal` | The Statement now names f as measurable, so the integral on the right-hand side and the auxiliary function g=f chi_{X\setminus N} are defined. |
| `refuter:2:2` | `confirmed_fatal` | Hypothesis 4 now uses a single measurable null set N on which the derivative bound holds for all t, and step 1.1 excludes h_n=0 before forming difference quotients. |
| `refuter:2:3` | `confirmed_nonfatal` | Step 2.1 now uses union_{k<n} I_k = (2^{-n},1] and the conclusion is unchanged; the defect was a local set-identity slip, not a broken example. |

## Focused checks

Ran on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-almost-everywhere-monotone-convergence.md items/thm-differentiation-under-the-integral-sign.md items/ex-x-to-the-minus-one-half-is-unbounded-but-integrable.md items/fs-monotone-convergence-without-monotonicity.md items/fs-fatou-lemma-is-always-an-equality.md items/fs-linearity-without-the-integrability-hypothesis.md items/cex-mass-escapes-to-infinity-under-pointwise-convergence.md items/prop-stieltjes-interval-set-function-is-finitely-additive.md items/thm-stieltjes-interval-set-function-is-a-premeasure.md items/thm-existence-of-the-lebesgue-stieltjes-measure.md items/cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures.md items/ex-cantor-function-is-borel-measurable.md items/thm-lebesgue-stieltjes-correspondence-with-distribution-functions.md items/thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures.md items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md items/cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity.md items/fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure.md items/fs-lebesgue-stieltjes-measures-have-zero-point-masses.md items/fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization.md items/ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure.md` -> all edited proof-bearing batch-1 and routed batch-2 items reflowed, then rerun cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-almost-everywhere-monotone-convergence.md items/thm-differentiation-under-the-integral-sign.md items/ex-x-to-the-minus-one-half-is-unbounded-but-integrable.md items/fs-monotone-convergence-without-monotonicity.md items/fs-fatou-lemma-is-always-an-equality.md items/fs-linearity-without-the-integrability-hypothesis.md items/cex-mass-escapes-to-infinity-under-pointwise-convergence.md items/prop-stieltjes-interval-set-function-is-finitely-additive.md items/thm-stieltjes-interval-set-function-is-a-premeasure.md items/thm-existence-of-the-lebesgue-stieltjes-measure.md items/cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures.md items/ex-cantor-function-is-borel-measurable.md items/thm-lebesgue-stieltjes-correspondence-with-distribution-functions.md items/thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures.md items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md items/cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity.md items/fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure.md items/fs-lebesgue-stieltjes-measures-have-zero-point-masses.md items/fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization.md items/ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure.md` -> `20 checked, 0 failing — all clean`.
- `node tools/tsx-run.mjs tools/precheck.mts items/fs-monotone-convergence-without-monotonicity.md items/fs-fatou-lemma-is-always-an-equality.md items/fs-linearity-without-the-integrability-hypothesis.md items/cex-mass-escapes-to-infinity-under-pointwise-convergence.md` -> `4 checked, 0 failing — all clean` after the full-batch contract refresh exposed their step-header parser drift.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-1.proof-contracts.json <all batch-1 ids>` -> regenerated `56`, skipped `15`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-2.proof-contracts.json <all batch-2 ids>` -> regenerated `51`, skipped `8`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-2.proof-contracts.json thm-differentiation-under-the-integral-sign ex-differentiating-the-laplace-sine-integral-under-the-integral-sign fs-monotone-convergence-without-monotonicity fs-fatou-lemma-is-always-an-equality fs-linearity-without-the-integrability-hypothesis cex-mass-escapes-to-infinity-under-pointwise-convergence` -> resynchronized the post-6b batch-2 contract entries touched by the strengthened differentiation theorem and the parser-cleanup witnesses.
- `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 56/56 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-20-batch-2.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 51/51 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-1.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-2.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- `node tools/rendercheck.mjs` on the 24 edited carriers listed above -> clean on all `24` files.

## Blockers

- None on the routed Step-6 obligations for batches `1` and `2`.

## Files changed in this Alpha pass

- `items/cor-almost-everywhere-monotone-convergence.md`
- `items/thm-differentiation-under-the-integral-sign.md`
- `items/ex-x-to-the-minus-one-half-is-unbounded-but-integrable.md`
- `items/fs-monotone-convergence-without-monotonicity.md`
- `items/fs-fatou-lemma-is-always-an-equality.md`
- `items/fs-linearity-without-the-integrability-hypothesis.md`
- `items/cex-mass-escapes-to-infinity-under-pointwise-convergence.md`
- `items/rem-lebesgue-stieltjes-convention-ledger.md`
- `items/def-half-open-interval-algebra-on-r.md`
- `items/def-lebesgue-stieltjes-interval-set-function.md`
- `items/prop-stieltjes-interval-set-function-is-finitely-additive.md`
- `items/thm-stieltjes-interval-set-function-is-a-premeasure.md`
- `items/thm-existence-of-the-lebesgue-stieltjes-measure.md`
- `items/cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures.md`
- `items/ex-cantor-function-is-borel-measurable.md`
- `items/thm-lebesgue-stieltjes-correspondence-with-distribution-functions.md`
- `items/thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures.md`
- `items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`
- `items/def-cantor-measure.md`
- `items/cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity.md`
- `items/fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure.md`
- `items/fs-lebesgue-stieltjes-measures-have-zero-point-masses.md`
- `items/fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization.md`
- `items/ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure.md`
- `research/frontier-20-batch-1.pages.json`
- `research/frontier-20-batch-1.proof-contracts.json`
- `research/frontier-20-batch-2.proof-contracts.json`
- `research/frontier-20-alpha-a-6b-ledger-rows.json`
- `research/frontier-20-alpha-a-6b-decisions.json`
- `research/frontier-20-alpha-a-6b.md`

## Next action

- Stamp the current carrier hashes for group `a`, validate the Step-6 adjudication scope on the stamped decisions, and hand the run back to the level-wide Step-6 progression.

## Gate repair — `risk-report` (Thursday, August 27, 2026)

- Reopened `thm-stieltjes-interval-set-function-is-a-premeasure` against the
  current batch-1 carrier, its repaired h-interval algebra, the current
  interval-set-function definition, `research/frontier-20-reader-1.md`, and
  `research/frontier-20-refute-1.json`. The old refuter objection was no longer
  live: the theorem now really proves a premeasure on the repaired algebra.
- Wrote the missing Alpha `risk_review` block directly into
  `research/frontier-20-batch-1.proof-contracts.json` through
  `tools/apply-risk-reviews.mjs`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict --items thm-stieltjes-interval-set-function-is-a-premeasure`
    - `0 error(s), 0 warning(s), 1/1 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-batch-1.proof-contracts.json --items thm-stieltjes-interval-set-function-is-a-premeasure --require-reviewed`
    - `0 error(s), 1 item(s) routed`.
- No new group-`a` Step-6 decision or defect-ledger row was needed: this repair
  found no surviving batch-1 content defect on the current bytes, only the
  mechanically missing review record.

## Gate repair — `risk-report` cycle 3 (Thursday, August 27, 2026)

- Reopened `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`
  against the current batch-1 carrier, the repaired
  `thm-lebesgue-stieltjes-correspondence-with-distribution-functions`, the
  continuity-from-above/below theorems, and the countability-of-BV-jumps
  source. No surviving batch-1 content defect remained on current bytes.
- Wrote the missing Alpha `risk_review` block for that live item directly into
  `research/frontier-20-batch-1.proof-contracts.json` through
  `tools/apply-risk-reviews.mjs`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict --items thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`
    - `0 error(s), 0 warning(s), 1/1 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-batch-1.proof-contracts.json --items thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures --require-reviewed`
    - `0 error(s), 1 item(s) routed`.
- No new group-`a` supplemental decision or defect-ledger row was needed in
  cycle 3: this live scope required only the missing review record.

## Gate repair — `risk-report` cycle 4 (Thursday, August 27, 2026)

- Reopened `thm-lebesgue-stieltjes-measures-are-regular-on-r` against the
  current batch-1 carrier, the repaired interval-formula and h-interval-algebra
  chain, `research/frontier-20-reader-1.md`, and
  `research/frontier-20-refute-1.json`.
- No surviving batch-1 content defect remained on current bytes. The live proof
  now keeps endpoint atoms in step `1.1`, uses traces of the full h-interval
  algebra in step `2.1`, and carries the truncation and finite/infinite outer
  regularity split coherently.
- Wrote the missing Alpha `risk_review` block into
  `research/frontier-20-batch-1.proof-contracts.json`, re-merged
  `research/frontier-20-proof-contracts.json`, and appended the matching
  nonfatal gate record `gate:f20-a-g1-1` in
  `research/frontier-20-alpha-a-6b-decisions.json`,
  `research/frontier-20-alpha-a-6b-ledger-rows.json`, and
  `research/defect-ledger.jsonl`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict --items thm-lebesgue-stieltjes-measures-are-regular-on-r`
    - `0 error(s), 0 warning(s), 1/1 item(s) checked`.
  - `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed --items thm-lebesgue-stieltjes-measures-are-regular-on-r,prop-unique-abelian-minimal-normal-subgroup-gives-affine-type,thm-onan-scott-classification-of-finite-primitive-groups,fs-every-primitive-group-has-a-unique-minimal-normal-subgroup,ex-socle-of-a-finite-solvable-primitive-group,thm-morse-stability-of-quasi-geodesics,prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic,thm-linear-isoperimetric-characterisation-of-hyperbolic-groups,thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup,thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant,fs-the-boundary-definition-needs-no-properness-or-equivalence-check,lem-continued-fraction-convergent-recurrence,lem-continued-fraction-determinant-identity,lem-continued-fraction-complete-quotient-formula,thm-convergence-of-infinite-regular-continued-fractions,thm-continued-fraction-algorithm-for-real-numbers,thm-rational-continued-fraction-termination,thm-normalized-finite-continued-fraction-uniqueness,lem-continued-fraction-error-bound,thm-continued-fraction-convergents-are-best-approximations,thm-legendre-continued-fraction-criterion,lem-periodic-continued-fraction-is-quadratic`
    - `0 error(s), 22 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 1`
    - `0 error(s)`.

## Gate repair — `risk-report` cycle 5 (Thursday, August 27, 2026)

- Reproduced the live `risk-report` queue on the current merged contract for the
  47 Alpha-group-`a` ids named in
  `research/frontier-20-6b-adjudicate-risk-report-repair-5-a.task.md`, then
  reread every live item against its current carrier, the current batch-1 or
  batch-2 proof-contract row, the batch reader and refuter evidence, and the
  cited dependency statements on disk.
- Confirmed and repaired four surviving content defects on the live bytes:
  `thm-finite-borel-measure-on-r-is-atomic-plus-atomless` had not covered the
  empty-atom boundary and had implicitly treated finite atom sets as an
  `\mathbb N`-indexed disjoint family; `thm-integration-against-a-density`
  under-cited the simple-case computation and now names the simple-integral
  agreement plus nonnegative homogeneity/additivity it uses;
  `thm-differentiation-under-the-integral-sign` still had an invalid complex
  domination step and now rotates the quotient by
  `\alpha=\overline{q_n(x)}/|q_n(x)|` before applying the real mean value
  theorem; and
  `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral` had
  falsely called `\mathbb Q\cap[0,1]` the support rather than the positivity
  set.
- Wrote complete, item-specific Alpha `risk_review` records for all 47 live ids
  into the owning batch contracts with
  `node tools/apply-risk-reviews.mjs --run frontier-20 --file /tmp/frontier-20-alpha-a-risk-reviews.json`,
  with `47` applied rows across batches `1` and `2` and no orphans.
- Appended the matching supplemental gate decisions
  `gate:f20-a-g1-2`, `gate:f20-a-g2-1`, `gate:f20-a-g2-2`, and
  `gate:f20-a-g2-3` to
  `research/frontier-20-alpha-a-6b-decisions.json`,
  `research/frontier-20-alpha-a-6b-ledger-rows.json`, and
  `research/defect-ledger.jsonl`.
- Updated the stale boundary evidence that those repairs changed in
  `research/frontier-20-batch-1.proof-contracts.json` and
  `research/frontier-20-batch-2.proof-contracts.json`, then re-merged
  `research/frontier-20-proof-contracts.json`.
- Focused reruns on Thursday, August 27, 2026:
  - `node tools/tsx-run.mjs tools/reflow.mts items/thm-finite-borel-measure-on-r-is-atomic-plus-atomless.md items/thm-integration-against-a-density.md items/thm-differentiation-under-the-integral-sign.md items/cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral.md`
    - reflowed all four edited carriers cleanly.
  - `node tools/tsx-run.mjs tools/precheck.mts items/thm-finite-borel-measure-on-r-is-atomic-plus-atomless.md items/thm-integration-against-a-density.md items/thm-differentiation-under-the-integral-sign.md items/cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral.md`
    - `4 checked, 0 failing — all clean`.
  - `node tools/regen-contract-entries.mjs research/frontier-20-batch-1.proof-contracts.json thm-finite-borel-measure-on-r-is-atomic-plus-atomless`
    - regenerated `1`, skipped `0`.
  - `node tools/regen-contract-entries.mjs research/frontier-20-batch-2.proof-contracts.json thm-integration-against-a-density thm-differentiation-under-the-integral-sign cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral`
    - regenerated `3`, skipped `0`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict --items prop-cantor-measure-is-a-singular-atomless-probability-measure,thm-finite-borel-measure-on-r-is-atomic-plus-atomless,fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization,ex-a-step-function-generates-a-finite-atomic-measure,prop-indicator-function-is-measurable-iff-its-set-is-measurable,thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable,thm-completion-measurable-functions-have-base-measurable-representatives,thm-doob-dynkin-lemma,fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable,fs-ae-equality-with-a-measurable-function-does-not-imply-measurability,fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae,ex-a-lebesgue-measurable-function-that-is-not-borel,cex-an-uncountable-supremum-of-indicators-need-not-be-measurable,cex-ae-equality-can-fail-on-an-incomplete-space`
    - `0 error(s), 0 warning(s), 14/14 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-2.proof-contracts.json --strict --items thm-increasing-simple-approximation-of-a-nonnegative-measurable-function,lem-well-definedness-of-the-simple-integral,prop-basic-properties-of-the-nonnegative-simple-integral,prop-the-nonnegative-integral-agrees-with-the-simple-integral,thm-simple-indefinite-integral-is-a-measure,thm-monotone-convergence-for-the-integral,cor-additivity-of-the-nonnegative-lebesgue-integral,thm-indefinite-integral-of-a-nonnegative-function-is-a-measure,thm-integration-against-a-density,thm-fatou-lemma,cor-reverse-fatou-lemma-under-an-integrable-majorant,thm-nonnegative-integral-zero-iff-zero-almost-everywhere,cor-finite-nonnegative-integral-implies-finite-almost-everywhere,cor-integral-over-a-null-set-vanishes,cor-almost-everywhere-monotone-convergence,thm-linearity-of-the-lebesgue-integral-on-l-one,thm-the-lebesgue-integral-respects-almost-everywhere-equality,thm-integral-triangle-inequality,thm-dominated-convergence,thm-integrable-simple-functions-are-dense-in-l-one,thm-absolute-continuity-of-the-integral,prop-indefinite-integral-of-an-integrable-function-is-countably-additive,thm-differentiation-under-the-integral-sign,thm-jensens-integral-inequality,fs-zero-integral-forces-everywhere-zero,fs-jensens-inequality-on-an-infinite-measure-space,ex-counting-measure-integral-is-a-series,cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral,ex-exponential-integral-by-monotone-truncation,ex-x-to-the-minus-one-half-is-unbounded-but-integrable,ex-dirac-integral-is-evaluation-at-a-point,cex-fatou-can-be-strict-and-domination-can-fail-simultaneously,cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable`
    - `0 error(s), 0 warning(s), 33/33 item(s) checked`.
  - `node tools/merge-proof-contracts.mjs --level frontier-20 research/frontier-20-proof-contracts.json research/frontier-20-batch-*.proof-contracts.json`
    - wrote the merged run contract with `393` scoped items from all `10` batch contracts.
  - `node tools/risk-report.mjs research/frontier-20-proof-contracts.json --require-reviewed --items <47 live ids>`
    - `0 error(s), 47 item(s) routed`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 1`
    - `step6-scope: 71 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.
  - `node tools/step6-scope.mjs check --run frontier-20 --phase final --batch 2`
    - `step6-scope: 59 item(s) routed, 22 adjudication obligation(s), 0 error(s)`.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for group `a` on the current tree and confirmed that the touched obligations below no longer equal the exact post-reader carriers recorded in `research/frontier-20-step6-hash-*-post.json`.
- The earlier batch-1/batch-2 touched-table evidence remains the mathematical closure record for the original reader defects; the supersession below updates only the exact carrier-state verdict after later risk_review and current-byte repairs.
- Reclassified these contract-only touched obligations from `accepted_repair` to `amended_repair` because the live carriers now also include the later Alpha `risk_review` contract state:
  - `touched:1:ex-a-step-function-generates-a-finite-atomic-measure`
  - `touched:1:ex-dyadic-simple-approximations-to-x-squared-on-zero-two`
  - `touched:1:thm-ae-equality-preserves-measurability-on-complete-spaces`
  - `touched:1:thm-threshold-characterisations-of-real-and-extended-real-measurability`
  - `touched:2:cex-fatou-can-be-strict-and-domination-can-fail-simultaneously`
  - `touched:2:cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable`
  - `touched:2:cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space`
  - `touched:2:cor-bounded-convergence-on-a-finite-measure-space`
  - `touched:2:cor-reverse-fatou-lemma-under-an-integrable-majorant`
  - `touched:2:fs-dominated-convergence-without-a-dominating-function`
  - `touched:2:fs-pointwise-limits-of-integrable-functions-are-integrable`
  - `touched:2:prop-indefinite-integral-of-an-integrable-function-is-countably-additive`
  - `touched:2:thm-continuity-under-the-integral-sign`
  - `touched:2:thm-dominated-convergence`
  - `touched:2:thm-integrable-simple-functions-are-dense-in-l-one`
  - `touched:2:thm-the-lebesgue-integral-respects-almost-everywhere-equality`
- Reclassified these touched obligations from `accepted_repair` to `amended_repair` because the live item bytes also changed after the post-reader snapshot through later in-scope repairs already recorded elsewhere in this run:
  - `touched:2:ex-dirac-integral-is-evaluation-at-a-point`
  - `touched:2:thm-absolute-continuity-of-the-integral`
  - `touched:2:thm-integral-triangle-inequality`
  - `touched:2:thm-linearity-of-the-lebesgue-integral-on-l-one`
- No new mathematical defect or new defect-ledger row was introduced by this repair; it is a stale adjudication-state correction on current disk.
- Focused reruns on Thursday, August 27, 2026: `node tools/step6-scope.mjs check --run frontier-20 --phase adjudicate` and `node tools/step6-scope.mjs check --run frontier-20 --phase final` each returned `step6-scope: 522 item(s) routed, 146 adjudication obligation(s), 0 error(s)`.
