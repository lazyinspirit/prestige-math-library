# Step 3a reader report — batch 27

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `27`

## Review basis

I checked the live run with the autopilot status command on 2026-10-19. The run remains active; its status reports an unrelated `3a-split` blocker for batch 8 after three failed attempts. Nothing was in flight. The current Git HEAD was `603500781c` on `main`.

I reviewed the current authored mathematics independently of author decisions and earlier reports. I made no item or page edits. The assigned items' statements and definitions are link-free; proof steps are separated and tagged as required. The TikZ diagrams in the assigned scope agree with their graph and factorization descriptions. No missing diagram was needed.

## Opened inventory

### Assigned pages

- `library/machine-learning/ml02-causal-anm.md`
- `library/machine-learning/ml02-causal-anm-examples.md`

### Required pages of the A page

- `library/probability/independence-borel-cantelli-and-zero-one-laws.md`
- `library/measure-theory/measurable-functions-and-simple-approximation.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/statistical-models-and-experiments/structural-causal-models-dags-and-adjustment.md`
- `library/numerical-linear-algebra-and-approximation/outward-rounded-interval-and-ball-arithmetic.md`

### Assigned items, read in supplier order

- `items/def-additive-noise-model.md`
- `items/lem-probability-measure-has-no-nonzero-period.md`
- `items/lem-smooth-residual-independence-has-pointwise-density-factorization.md`
- `items/alg-resit.md`
- `items/lem-anm-joint-density.md`
- `items/lem-anm-noise-independent-of-nondescendants.md`
- `items/def-restricted-additive-noise-model.md`
- `items/lem-anm-density-factorization-implies-dsep-conditional-independence.md`
- `items/lem-anm-parent-dependence-persists-under-conditioning.md`
- `items/lem-youngest-child-descendants-conditionally-independent.md`
- `items/lem-positive-minimal-dags-have-a-conditioned-reversal.md`
- `items/thm-bivariate-additive-noise-identifiability.md`
- `items/thm-restricted-anm-population-identification.md`
- `items/ex-latent-confounding-mimics-anm-direction.md`
- `items/ex-linear-gaussian-reversible-additive-noise-model.md`
- `items/ex-identifiable-nonlinear-additive-noise-model.md`

### Direct item dependencies opened

- `items/def-recursive-structural-causal-model-and-dag.md`
- `items/def-d-separation-in-a-dag.md`
- `items/def-law-or-distribution-of-a-random-element.md`
- `items/def-measurable-function-between-measurable-spaces.md`
- `items/def-independent-random-elements.md`
- `items/def-probability-measure.md`
- `items/def-translation-of-a-set-in-rn.md`
- `items/def-complete-ordered-real-field.md`
- `items/thm-of-archimedean.md`
- `items/thm-independent-random-elements-have-product-joint-law.md`
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md`
- `items/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.md`
- `items/def-measure-with-density.md`
- `items/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique.md`
- `items/thm-arithmetic-and-lattice-operations-preserve-measurability.md`
- `items/thm-composition-with-borel-functions-preserves-measurability.md`
- `items/lem-measurable-functions-preserve-independence.md`
- `items/def-ancestral-moral-graph-of-a-dag.md`
- `items/lem-d-separation-ancestral-moral-separation.md`
- `items/lem-active-routes-in-a-finite-dag-have-active-paths.md`
- `items/def-axiom-of-choice.md`
- `items/def-countable-choice.md`
- `items/thm-choice-implies-dependent-implies-countable-choice.md`
- `items/def-standard-normal-and-normal-laws.md`
- `items/lem-normal-density-has-total-mass-one.md`
- `items/thm-gaussian-integral.md`
- `items/thm-linear-change-of-variables-for-lebesgue-measure.md`

## Source checked

I checked the primary JMLR source, [Peters et al., “Causal Discovery with Continuous Additive Noise Models”](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf), at the relevant passages:

- Definition 16 and Proposition 17 (PDF pp. 12–13): continuous ANM and edgewise causal minimality.
- Condition 19, equation (7) (PDF p. 13): the differential equation, derivatives, and nonzero domain. The formula in `def-restricted-additive-noise-model` agrees.
- Definition 27 and Theorem 28 (PDF p. 16): the restricted-model quantifiers and graph identifiability.
- Theorem 20 and Appendix A.5 (PDF pp. 13, 31–32): bivariate identifiability and the log-density derivative argument.
- Proposition 29(i) and Appendix A.12 (PDF pp. 16, 36–38): the conditioned reversible edge and parent/nondescendant set inclusions.
- Algorithm 1, Theorem 34, and Appendix A.15 (PDF pp. 19–20, 40): the two RESIT phases and its population correctness result.

The assigned items provide local proofs for their claims; the cited JMLR results corroborate the relevant source claims. I did not open the other secondary references listed in the items.

## Edits

None. No item or page carrier changed, so no proof contract, judge record, reflow, precheck, or proof-layout run was needed.

## Defects not editable in this assignment

The following published dependencies contain hyperlinks inside complete Definition or Statement sections, or inside prose Remarks. The math remains readable; the required statement-first layout is not followed. They are outside batch 27's write scope. Each issue is also in the returned findings JSON.

| Published dependency | Exact location | Assigned consumer |
| --- | --- | --- |
| `def-measurable-function-between-measurable-spaces` | Definition, first paragraph: inline `def-measurable-space` link | `def-additive-noise-model` |
| `def-independent-random-elements` | Definition, first and second paragraphs: inline links to `def-independent-sigma-algebras-and-events` and `def-sigma-algebra-generated-by-a-function` | `def-additive-noise-model` |
| `def-probability-measure` | Definition, first sentence: inline links to `def-measure` and `def-measure-space` | `lem-probability-measure-has-no-nonzero-period` |
| `def-translation-of-a-set-in-rn` | Definition, opening sentence: inline `def-euclidean-inner-product` link | `lem-probability-measure-has-no-nonzero-period` |
| `thm-of-archimedean` | Statement, opening sentence: inline links to `def-complete-ordered-field` and `def-ordered-field` | `lem-probability-measure-has-no-nonzero-period` |
| `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` | Statement, opening sentence: inline `def-translation-of-a-set-in-rn` link | `lem-smooth-residual-independence-has-pointwise-density-factorization` |
| `def-measure-with-density` | Definition, final clause: inline `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` link | `lem-anm-joint-density` |
| `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | Statement, clause 1: inline `def-product-measure-on-sigma-finite-spaces` link | `lem-anm-joint-density` |
| `thm-arithmetic-and-lattice-operations-preserve-measurability` | Statement, opening paragraph: inline links to `def-measurable-pointwise-extended-real-product` and `def-positive-and-negative-parts-of-a-function` | `lem-anm-joint-density` |
| `def-axiom-of-choice` | Definition and Remarks: inline `def-choice-function` link and links within the prose remarks | `ex-latent-confounding-mimics-anm-direction` |
| `def-countable-choice` | Definition and Remarks: inline links in the formulation and prose remarks | `ex-latent-confounding-mimics-anm-direction` |
| `def-standard-normal-and-normal-laws` | Definition: inline links to `lem-normal-density-has-total-mass-one`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `lem-law-of-a-random-element-is-a-probability-measure`, and `def-dirac-measure` | `ex-latent-confounding-mimics-anm-direction` |
| `thm-linear-change-of-variables-for-lebesgue-measure` | Statement: inline links to `def-countable-choice`, `def-linear-map`, `lem-euclidean-linear-maps-and-are-bounded`, and `def-extended-reals` | `ex-latent-confounding-mimics-anm-direction` |

These links should be moved after the complete relevant section into its immediately following `Definition references`, `Statement references`, or `Remarks references` section. I did not alter published content.

## Page verdicts

- `ml02-causal-anm`: pass. It is a draft compact-v1 A page with an empty body, and its 13-item inventory and five page prerequisites match the batch manifest.
- `ml02-causal-anm-examples`: pass. It is a draft compact-v1 B page with an empty body, and its three-example inventory and A-page requirement match the batch manifest.

## Blocker

No batch-27 review blocker. The live run status has an unrelated batch-8 blocker at `3a-split` (`split-8` failed three times).
