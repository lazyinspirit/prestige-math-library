# Step 3a reader report — batch 36

Run: `statistical-models-experiments-62`  
Role: reader  
Result: one proof repair; no uneditable findings; no blocker.

## Opened inventory

### Assigned pages

- `measurement-calibration-and-uncertainty` — [`library/statistical-models-and-experiments/measurement-calibration-and-uncertainty.md`](../library/statistical-models-and-experiments/measurement-calibration-and-uncertainty.md). Verdict: **pass**. Its summary accurately states that the combined standard uncertainty is the standard deviation of the first-order linearization and makes no interval or physical-model adequacy claim.
- `measurement-calibration-and-uncertainty-examples` — [`library/statistical-models-and-experiments/measurement-calibration-and-uncertainty-examples.md`](../library/statistical-models-and-experiments/measurement-calibration-and-uncertainty-examples.md). Verdict: **pass**. Its summary matches the example and correctly limits the batch comparison to stipulated, illustrative curves.
- Prerequisite page `scientific-statistical-model-contracts` — [`library/statistical-models-and-experiments/scientific-statistical-model-contracts.md`](../library/statistical-models-and-experiments/scientific-statistical-model-contracts.md). Its summary matches the current draft supplier definition.

### Assigned items

- `def-measurand-calibration-and-measurement-uncertainty` — reviewed; no remaining defect.
- `thm-first-order-measurement-uncertainty-propagation` — reviewed and repaired at proof step 1.2; no remaining defect.
- `ex-calibration-curve-reference-uncertainty-and-batch-drift` — reviewed; no remaining defect.

### Dependencies and supporting definitions opened

- In-run draft supplier: `def-scientific-statistical-model-contract` (batch 1). Its observation-law, unit/index, target, observation-mechanism, support, conditioning, and adequacy clauses support the assigned definition's use of the contract. No defect found.
- Statistical-contract sources: `def-statistical-experiment`, `def-parametric-statistical-model`, `def-estimand-on-a-statistical-model`, `def-observational-equivalence`, `def-identifiability-of-an-estimand`, and `def-statistic-and-estimator`.
- Random-element and measurable-space sources: `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `def-probability-measure`, `def-measurable-function-between-measurable-spaces`, `def-borel-sigma-algebra`, `def-generated-sigma-algebra`, `thm-generated-sigma-algebra-exists-and-is-minimal`, `def-topological-space`, `def-measurable-space`, `def-sigma-algebra`, `def-algebra-of-subsets`, `def-measure`, and `def-measure-space`.
- Moment and integral sources: `def-moments-variance-and-covariance`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-nonnegative-lebesgue-integral`, `def-extended-real-valued-measurable-function`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, and `def-complex-conjugate-real-imaginary-part-and-modulus`.
- Covariance and expectation proofs: `thm-covariance-bilinearity-and-symmetry`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, and `thm-integral-triangle-inequality`.
- Derivative and norm sources: `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`, `def-frobenius-matrix-norm`, `def-inner-product-norm`, and `prop-standard-coordinate-inner-products`.
- To check the meaning and well-definedness of square-integrability/covariance, also opened `def-mean-zero-square-integrable-space` and `def-l-p-space-as-a-quotient-by-null-functions`, and the cited Le Gall source noted below.

## Review findings and edit

The proof of the propagation theorem's step 1.2 bounded only the nonconstant sum in $Q_{\mathrm{lin}}$, while then asserting that the full output, which also contains a constant, was square-integrable. I replaced that with the bounds

\[
\left(\sum_i g_iX_i\right)^2\le d\sum_i g_i^2X_i^2,
\qquad
Q_{\mathrm{lin}}^2\le 2c^2+2d\sum_i g_i^2X_i^2,
\quad c=f(\hat x)-g^T\hat x.
\]

The right side has finite expectation because $d$ is finite and each $X_i$ is square-integrable. This establishes that $\operatorname{Var}(Q_{\mathrm{lin}})$ and the covariances used next are defined. I updated the matching `step-1-2` derivation in `research/statistical-models-experiments-62-batch-36.proof-contracts.json`. The item had no `verification.judge` record to remove.

The calculation in the example was checked directly: the input covariance matrix is

\[
\begin{pmatrix}0.01&0.01&0\\0.01&0.04&0\\0&0&0.04\end{pmatrix},
\]

the gradient at $(10,20,13)$ is $(0.4,0.6,0.5)$, and $u_c^2=0.0308$. The second-batch mismatch is $0.6$; the four-point equal-weight pooled least-squares line has slope $2.1$, intercept $-20$, and yields $114/7$, a $2/7$ difference from the second-batch estimate $16$. These values agree with the displayed derivations.

## Source evidence

- The official [JCGM 100:2008 GUM](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) defines standard uncertainty as a standard deviation and Type A/Type B by evaluation method (§§2.3.1–2.3.3); gives the measurand specification and correction caveats (§§3.1.3, 3.2.3–3.2.4); separates Type A/B from random/systematic effects (§3.3.3); and derives the first-order Taylor propagation formula and its covariance terms (§§5.1.2, 5.2.2). These clauses support the assigned definition, theorem's caveats, and page summaries.
- Official [JCGM 100:2008/Amd.1:2026](https://www.bipm.org/documents/20126/2071204/JCGM_100_Amd1_2026.pdf), p. 1, §4.1.4, says that when model nonlinearity is significant, a Monte Carlo method can be applied or higher-order Taylor terms must be included. The theorem's remark accurately limits its first-order formula.
- Le Gall, *Intégration, Probabilités et Processus Aléatoires*, §4.1, PDF p. 43, defines $L^p$ by measurability and finite $\int |f|^p$; §§8.2.1–8.2.2, PDF pp. 100–101, use $L^2$ for square-integrable variables and define variance/covariance. §4.1 gives Cauchy–Schwarz, which ensures the centered product is integrable. This resolves the terminology and product-integrability needed for the covariance definition. Source: [PDF](https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf).

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-first-order-measurement-uncertainty-propagation.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-first-order-measurement-uncertainty-propagation.md` — passed.
- `node tools/proof-layout.mjs items/thm-first-order-measurement-uncertainty-propagation.md` — 1 item, 4 steps, 0 defects.

## Uneditable defects and blockers

No uneditable defect was confirmed in a published dependency, the in-run draft supplier, or either assigned page. No blocker remains. The findings JSON therefore has an empty `findings` array.

Coverage is limited to the assigned pages/items and dependency statements or proof clauses needed for their claims; I did not recursively audit every remote foundation dependency in the library.
