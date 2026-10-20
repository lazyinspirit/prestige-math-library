# Step 3a reader report — batch 16

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Status checked: `.autopilot/machine-learning-all-101-2026-10-19` reports the run active at `3a-read`; batch 16 had no prior reader result.

## Opened inventory

Assigned pages:

- `library/machine-learning/ml02-gaussian-process-regression.md` — seven A-page items; YAML frontmatter only, with `page_layout: compact-v1`.
- `library/machine-learning/ml02-gaussian-process-regression-examples.md` — two examples; YAML frontmatter only, with `page_layout: compact-v1`.

Assigned items were read in dependency order:

1. `def-gaussian-process-regression-observation-model`
2. `lem-finite-span-orthogonal-projection-in-inner-product-space`
3. `lem-gp-regression-observed-covariance-invertibility`
4. `thm-gp-regression-log-marginal-likelihood`
5. `cor-gp-regression-posterior-predictive-law`
6. `rem-gp-regression-computation-and-scope-caveats`
7. `thm-gp-regression-kernel-ridge-posterior-mean-equivalence`
8. `ex-gp-regression-noisy-finite-interpolation`
9. `ex-gp-regression-rank-one-prior-positive-noise-singular-prediction`

The direct published dependency statements used by these items were opened before their consumers: `def-axiom-of-choice`, `def-independent-random-elements`, `thm-continuity-from-above-for-measures`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `def-multivariate-normal-law`, `def-gaussian-process`, `def-singular-values-of-an-endomorphism`, `thm-singular-value-decomposition`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-nondegenerate-multivariate-normal-law-has-density`, `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`, `thm-multivariate-normal-conditional-law`, `thm-finite-gaussian-process-posterior-and-predictive-laws`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, and `thm-least-squares-solutions-and-normal-equation`.

The current batch proof contracts were checked against each assigned proof. The definition item has no phase-proof contract, as expected. The assigned items contain no TikZ diagrams except the model diagram in the observation-model definition.

## Review and item verdicts

- `def-gaussian-process-regression-observation-model`: The finite-list notation, repeated-index convention, PSD assumptions, noise independence, and latent/noisy test definitions are consistent. The diagram shows a shared prior feeding training and test values, with separate noises feeding the two sums; it makes no false independence claim. Statement references follow the complete definition. No assigned-item defect.
- `lem-finite-span-orthogonal-projection-in-inner-product-space`: The finite orthonormal-basis construction handles the zero-dimensional case. Orthogonality gives the Pythagorean identity, and the intersection of a subspace with its orthogonal complement proves uniqueness. No proof gap found.
- `lem-gp-regression-observed-covariance-invertibility`: The Gram and noise terms make the observed matrix symmetric PSD. The eigenvalue argument proves the ordinary inverse iff positive definite, and the square-root/SVD argument identifies its singular values, including zero eigenvalues. No proof gap found.
- `thm-gp-regression-log-marginal-likelihood`: Independence gives the Gaussian stack and its block-diagonal covariance; the linear observation map gives covariance `A_X`. Positive definiteness supplies the nondegenerate density, and taking its logarithm yields the displayed formula. The nonsingular scope and AC assumption are stated. No proof gap found.
- `cor-gp-regression-posterior-predictive-law`: The canonical cylinder-space prior, repeated lists, PSD noise, positive-definite observed block, potentially singular predictive covariance, test-noise addition, and all-`y` version caveat match the finite conditioning supplier. No mathematical gap found. Its published supplier `thm-finite-gaussian-process-posterior-and-predictive-laws` has a separate statement-format defect listed below.
- `rem-gp-regression-computation-and-scope-caveats`: The Cholesky and triangular-solve counts give the asserted post-factorization cost. The condition-number perturbation, negative second derivative, logistic/probit third derivatives, and equality-kernel no-continuous-modification witness check out. In the last argument, finite-coordinate independence and continuity from above show that, on a positive-probability event, values arbitrarily near zero exceed 2 in magnitude while the value at zero has magnitude below 1. No proof gap found.
- `thm-gp-regression-kernel-ridge-posterior-mean-equivalence`: The evaluation map is bounded by the reproducing identities; the finite span reduction is valid; the PSD square root and least-squares normal equation yield the stated coefficients; the final expansion proves strict uniqueness on all of `H`. The posterior comparison is at the training evaluation vector and its positive-definite condition follows from `sigma > 0`. No proof gap found.
- `ex-gp-regression-noisy-finite-interpolation`: The equality-kernel Gram form, `2I_2` observed covariance, latent mean `(1,-1/2)`, latent covariance `I_2/2`, and noisy covariance `3I_2/2` are correct. No computation defect found.
- `ex-gp-regression-rank-one-prior-positive-noise-singular-prediction`: The Gram matrix is `vv^T`, the observed matrix is positive definite, `A_X^{-1}v=v/6`, the posterior mean is `v/6`, and the posterior covariance is `vv^T/6`, which is nonzero and singular. No computation defect found.

All assigned complete statements and example descriptions are uninterrupted by hyperlinks; their references are in the immediately following, correctly named references sections. Existing numbered proof steps are blank-line separated, one paragraph per step, and have valid terminal tags. No assigned item or page prose was edited, so no contract update, judge-record removal, reflow, precheck, or proof-layout run was required.

## Uneditable dependency defects

The five subjects below are published dependencies, so they were not edited. Each complete definition or statement contains inline wikilinks and lacks the immediately following `<heading> references` section required by the current statement-first rule. The report locations are source line numbers at review time; the final findings identify the exact subject and a direct assigned consumer.

1. `items/def-axiom-of-choice.md:43`, `## Definition`: `[[def-choice-function]]` interrupts the choice-function formulation. The assigned consumer used in the finding is `cor-gp-regression-posterior-predictive-law`.
2. `items/def-independent-random-elements.md:36,39`, `## Definition`: links to `def-independent-sigma-algebras-and-events` and `def-sigma-algebra-generated-by-a-function` interrupt the definition. Assigned consumer: `def-gaussian-process-regression-observation-model`.
3. `items/def-gaussian-process.md:24-25,38`, `## Definition`: links to the axiom of choice, stochastic-process definition, and multivariate-normal definition interrupt the definition. Assigned consumer: `def-gaussian-process-regression-observation-model`.
4. `items/def-singular-values-of-an-endomorphism.md:31,37`, `## Definition`: links to `prop-adjoint-algebra` and the nonnegative square-root theorem interrupt the definition. Assigned consumer: `lem-gp-regression-observed-covariance-invertibility`.
5. `items/thm-finite-gaussian-process-posterior-and-predictive-laws.md:45`, `## Statement`: the link to the canonical Gaussian-process existence theorem interrupts the statement. Assigned consumer: `cor-gp-regression-posterior-predictive-law`.

Each needs its complete definition or statement retained as continuous text, with its links moved to an immediately following `## Definition references` or `## Statement references` section. The affected published suppliers occur in the dependency closure of both batch pages, including the two examples through the posterior corollary.

## External source checks

- Rasmussen and Williams, *Gaussian Processes for Machine Learning*, Ch. 2 §§2.2–2.3, equations (2.19)–(2.24) and (2.28)–(2.30), printed pp. 15–20: the conditional mean/covariance and log-evidence formulas agree in the text's standard zero-mean, scalar-noise case. The assigned local proof supplies the stated extension to general mean and PSD noise covariance. [Chapter 2 PDF](https://gaussianprocess.org/gpml/chapters/RW2.pdf)
- Rasmussen and Williams, Ch. 3 §§3.3–3.4.1, printed pp. 39–43: logistic and probit likelihoods are the cited non-Gaussian classification models; the particular third-derivative witnesses are independently calculated in the remark. [Chapter 3 PDF](https://gaussianprocess.org/gpml/chapters/RW3.pdf)
- Rasmussen and Williams, Ch. 4 §4.1, printed pp. 79–80: the text distinguishes mean-square continuity from sample-function continuity, consistent with the remark's scope caveat. The no-continuous-modification claim is proved locally. [Chapter 4 PDF](https://gaussianprocess.org/gpml/chapters/RW4.pdf)
- Rasmussen and Williams, Ch. 6 §6.2.2, printed pp. 135–136: the squared-error regularization solution has the kernel-ridge form and matches the GP predictive mean under its stated standard assumptions. The assigned theorem proves the more general shifted-mean formulation. [Chapter 6 PDF](https://gaussianprocess.org/gpml/chapters/RW6.pdf)
- Treil, *Linear Algebra Done Wrong*, Ch. 5 §§5.3.2 and 5.4.1: the cited projection/Pythagorean and least-squares normal-equation material matches the references. [Chapter 5](https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html)
- Driscoll and Braun, *Fundamentals of Numerical Computation*, §2.5.3 and §2.9.3: triangular solves are asymptotically quadratic, and the Cholesky factorization has leading cost `n^3/3` flops. [Efficiency](https://fncbook.com/efficiency/) and [matrix structure](https://fncbook.com/structure/)

## Page verdicts and blocker

- `ml02-gaussian-process-regression`: No page-carrier, inventory, layout, or assigned-mathematics defect found. The page is held for owner routing of the published dependency defects above.
- `ml02-gaussian-process-regression-examples`: No page-carrier, inventory, layout, or example-computation defect found. Its examples reach the same published defects through the finite posterior dependency chain, so owner routing is also required here.

There was no procedural blocker and no authorized edit to make. The unresolved findings concern published content outside this reader's write scope. The Bishop PDF was not independently opened because the web fetch rejected its 18 MB size; I did not classify that citation as defective. The proof review used the local exact supplier statements and assigned proofs, and did not re-audit the full transitive proof chains of published foundation items.
