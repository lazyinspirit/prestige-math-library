# Step 3a reader report — batch 63

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `63`

## Opened inventory

Assigned pages opened:

- `library/machine-learning/integral-probability-metrics-and-wasserstein-gans.md`
- `library/machine-learning/integral-probability-metrics-and-wasserstein-gans-examples.md`

All six assigned items were opened in dependency order:

- `def-integral-probability-metric`
- `thm-wgan-ideal-critic-generator-gradient`
- `cor-wgan-loss-differentiable-almost-everywhere-under-choice`
- `ex-weight-clipping-is-not-exact-lipschitz-enforcement`
- `fs-pointwise-integrable-generator-constants-imply-locally-lipschitz-wgan-loss`
- `fs-pointwise-integrable-generator-constants-justify-critic-gradient-exchange`

Direct suppliers opened for those claims included the probability, measurable-map, law, integrability, simple-function, simple-integral, increasing-simple-approximation, dominated-convergence, monotone-convergence, rational-density, sequential-measurability, extended-real, and Dirac-measure items. The refutation witnesses' additional suppliers opened were the geometric-series and Lebesgue-box results, countable choice, the density-measure definition, and the theorem that integrates against a density.

The corresponding direct supplier IDs opened were `def-probability-measure`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-extended-reals`, `lem-extended-reals-complete`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`, `lem-rat-embeds-dense`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `def-axiom-of-choice`, `thm-na-rademacher-euclidean`, `def-finite-metric-wasserstein-one`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `lem-dirac-integral-evaluation`, `def-measure`, `thm-geometric-series`, `def-countable-choice`, `def-measure-with-density`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-change-of-variables-for-expectation`, `thm-integration-against-a-density`, and `def-nonnegative-extended-series`.

Foundational suppliers opened while checking those proofs included `def-metric-space`, `lem-metric-nonnegativity`, `def-metric-compactness`, `def-metric-topology`, `def-borel-sigma-algebra`, `def-product-topology`, `def-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `cor-integral-over-a-null-set-vanishes`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `cor-reverse-fatou-lemma-under-an-integrable-majorant`, `thm-fatou-lemma`, and `prop-closure-properties-of-measurable-functions-used-by-the-integral`.

The compact Wasserstein dependency chain was also opened: `def-compact-metric-wasserstein-one`, `thm-kantorovich-rubinstein-duality-on-compact-metric-spaces`, `lem-compact-metric-space-has-finite-borel-net-quantization`, `lem-finite-metric-plan-lifts-to-a-borel-coupling`, `lem-borel-section-product-on-compact-metric-spaces`, `lem-mcshane-extension-from-a-finite-subset`, `thm-finite-metric-transport-duality`, `def-finite-metric-wasserstein-one`, `def-finite-probability-vector`, `def-finite-metric-coupling`, `lem-finite-metric-transport-optima-attained`, and `lem-finite-set-has-max`.

Other direct suppliers opened included `def-axiom-of-choice`, `def-countable-choice`, `thm-na-rademacher-euclidean`, `thm-change-of-variables-for-expectation`, and `thm-integration-against-a-density`. Foundational measure, metric, Borel, and product-topology definitions used by these proofs were also inspected. No TikZ or tikzcd diagram occurs in an assigned item. The coordinate-projection tikzcd in the compact coupling supplier commutes as stated.

For source comparison, I read Arjovsky, Chintala, and Bottou, *Wasserstein GAN*, §3 equation (2) and Theorems 1 and 3, Assumption 1, and the relevant Appendix C arguments (PDF pp. 5–7, 20–24). I also read Santambrogio, *Introduction to Optimal Transport Theory*, §1.3 (PDF pp. 5–6), which states the 1-Lipschitz dual formula for the distance cost.

## Repairs

1. `fs-pointwise-integrable-generator-constants-imply-locally-lipschitz-wgan-loss`: Refutation step 4.1 had inferred the Wasserstein cost from a coupling's second marginal without establishing the integration identity. It now proves that every coupling of the two laws is the pushforward under `y ↦ (0,y)`, applies `thm-change-of-variables-for-expectation` to compute its cost, and derives the atomic integral formula from simple functions, increasing approximation, and monotone convergence. Step 5.1 now explains that every integer atom belongs to a full-measure envelope set because each atom has mass `p_n > 0`; the envelope would force `K(n) ≥ 4^n` and hence an infinite integral. Added the used law, integration, simple-function, and series dependencies; removed the unused Dirac-integration dependency.

2. `fs-pointwise-integrable-generator-constants-justify-critic-gradient-exchange`: Refutation steps 3.2–5.1 had used a density integral and a marginal integration identity without proving them. Step 3.2 now applies `thm-integration-against-a-density`, computes the finite simple truncations of `g_θq`, and takes their increasing limit. Step 4.1 proves uniqueness of the coupling with first marginal `δ_0` and computes its cost by change of variables. Step 5.1 then evaluates the signed objective of `f(x)=-x` by the same law formula and invokes the compact KR duality to show that this critic attains the supremum. The phase numbers and step references were updated to `4.1`, `5.1`, and `6.1` to satisfy canonical precheck order. Added the law, density-integration, simple-function, and change-of-variables dependencies; removed the unused Dirac-integration dependency.

The affected contracts in `research/machine-learning-all-101-2026-10-19-batch-63.proof-contracts.json` were updated with the new citations and derivations. Neither repaired item had a `verification.judge` record to remove. No other carrier was edited.

## Page verdicts

- `integral-probability-metrics-and-wasserstein-gans`: **Pass.** The A-page inventory matches the assigned definition, theorem, and corollary. Its body is empty and `page_layout: compact-v1` is preserved.
- `integral-probability-metrics-and-wasserstein-gans-examples`: **Pass.** The B-page examples inventory matches the assigned example and two false statements. Its body is empty and `page_layout: compact-v1` is preserved.

The assigned IPM definition, main theorem, corollary, and point-mass example require no repair. Their statement links are already moved to immediately following references sections, and the page presentations contain no summaries.

## Unedited defects

None. No confirmed defect remained outside the assigned write scope.

## Validation and blocker

Reflow reported both repaired items unchanged. Precheck passed for both items after the canonical phase renumbering. The required final proof-layout command checked both paths together: 2 items, 13 steps, 0 defects.

There was no batch-63 mathematical or reader blocker. At review start the live autopilot status showed unrelated failures for 3a-split batch 51 and 3a-collect batch 36; the batch-63 dependency-input record also contained `scheduling_hash_conflict: true`. Those run-control records were not changed by this reader.
