# Step 3a reader report — batch 29

Run `mathematical-statistics-foundations-37` was live at `3a-read` when reviewed. The assignment covered batch 29 only.

## Opened inventory

### Assigned pages

- `library/mathematical-statistics/pathwise-differentiability-influence-functions-and-efficient-scores.md` — opened and reviewed; verdict below.
- `library/mathematical-statistics/pathwise-differentiability-influence-functions-and-efficient-scores-examples.md` — opened and reviewed; verdict below.

### Assigned items

Opened in manifest dependency order, with the A-page suppliers before the companion examples:

1. `thm-influence-curve-representers`
2. `def-asymptotically-linear-estimator-and-influence-function`
3. `def-pathwise-differentiable-functional`
4. `def-efficient-score`
5. `thm-efficient-score-canonical-gradient`
6. `ex-pathwise-derivative-not-continuous-in-tangent-norm`
7. `ex-mean-functional-and-sample-mean-influence-curve`
8. `ex-efficient-score-nuisance-projection`

### Dependency items opened

The direct suppliers of the assigned items, plus supporting targets cited in their proofs, were opened:

- Choice, Hilbert geometry, and projection: `def-axiom-of-choice`, `def-countable-choice`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-orthogonality-and-orthogonal-complement`, `def-linear-subspace`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-projection-onto-a-nonempty-closed-convex-set`, `thm-hilbert-projection-variational-characterization`, and `thm-riesz-representation-for-hilbert-space`.
- In-run semiparametric suppliers: `def-mean-zero-square-integrable-space`, `def-dqm-submodel-through-a-law`, `thm-dqm-score-mean-zero`, `def-tangent-set`, `def-tangent-space`, `thm-mean-zero-square-integrable-space-is-hilbert`, `thm-tangent-space-is-closed-linear-subspace`, `def-nuisance-tangent-space`, and `def-score-and-fisher-information`.
- Probability, integration, and (L^p): `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-measure-with-density`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `lem-expectation-is-independent-of-the-ae-representative`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-integral-triangle-inequality`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-holder-inequality-for-integrals`, `thm-equality-case-in-holder-inequality`, `thm-dominated-convergence`, `thm-integration-against-a-density`, and `thm-linearity-of-the-lebesgue-integral-on-l-one`.
- Density setup for the in-run DQM supplier: `def-dominated-statistical-experiment`, `def-likelihood-density`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, and `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`.

The three manifest-required context pages were also opened: `semiparametric-models-and-tangent-spaces`, `fisher-information-and-finite-sample-information-bounds`, and `local-asymptotic-normality-contiguity-and-efficiency`.

## Repairs made

- In `items/thm-influence-curve-representers.md`, Facts & Assumptions [A1] said Countable Choice was the axiom assumed by [F3], which is the orthogonality definition. The decomposition theorem [F2] is the dependency that assumes Countable Choice, and proof step 1.2 invokes it. [A1] now points to [F2]. The batch-29 proof contract now records the Countable Choice use at step 1.2.
- In `items/ex-pathwise-derivative-not-continuous-in-tangent-norm.md` and `items/ex-mean-functional-and-sample-mean-influence-curve.md`, Fact [F5] cited abstract inner-product Cauchy–Schwarz as though it alone identified the (L^2(P)) pairing and its integrability. The fact now cites the exact (L^2) Cauchy–Schwarz inequality and the integral triangle inequality; both items list those direct dependencies. Their proof-contract citations were updated to match.
- No changed item had a `verification.judge` record, so there was no stale judge record to remove. No manifest, other-batch item, or page prose was edited.

The DQM and tangent-space conventions were checked against A. W. van der Vaart, *Semiparametric Statistics*, Lecture 1 §1.2, Definition 1.6 and Lemma 1.8 (PDF pp. 9–10), and Edward H. Kennedy, “Semiparametric theory,” §4 (PDF pp. 4–6). Van der Vaart gives the one-sided square-root DQM expansion and the score mean-zero/(L^2) result; Kennedy gives the tangent-space and efficient influence-curve formulation. These references corroborated the local conventions; the assigned conclusions were checked against their local suppliers and proofs. [van der Vaart](https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf), [Kennedy](https://arxiv.org/pdf/1709.06418).

Required item checks after the final edits:

- `reflow.mts` — all three changed items unchanged by reflow.
- `precheck.mts` — all three changed items passed.
- `node tools/proof-layout.mjs items/thm-influence-curve-representers.md items/ex-pathwise-derivative-not-continuous-in-tangent-norm.md items/ex-mean-functional-and-sample-mean-influence-curve.md` — 3 items, 14 steps, 0 defects.

## Uneditable defect

The published dependency `cor-cauchy-schwarz-inequality-for-l-two` has malformed prose in proof steps 1.1 and 2.1 (lines 51 and 53): fact tags are embedded into the sentences (`so [L1] ... gives [L1]` and `specialization of [L2] to [L2, step 1.1]`). Its cited Holder and equality-case theorems provide the intended (p=q=2) arguments, so this is nonfatal, but the proof should be rewritten with complete sentences and trailing citations. It remains unedited and is reported as a published dependency for consumer `def-asymptotically-linear-estimator-and-influence-function`.

## Page verdicts

- **Influence Functions and Efficient Scores (A page): pass.** Its summary matches the repaired definitions and results, including the separate Axiom-of-Choice and Countable-Choice roles and the stated limits on the canonical-gradient theorem. No page prose edit was needed.
- **Influence Functions and Efficient Scores — Examples (B page): pass.** Its summary matches the bounded-score mean examples and the finite nuisance-projection example. The exact (L^2(P)) inequality citations in the examples were repaired; no page prose edit was needed.

## Blocker

None. The one remaining nonfatal published proof-format defect is routed in `research/mathematical-statistics-foundations-37-reader-findings-29.json`.
