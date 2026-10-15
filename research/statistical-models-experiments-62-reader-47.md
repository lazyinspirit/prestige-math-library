# Step 3a reader report — batch 47

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `47`

## Opened inventory

- Batch manifest: `research/statistical-models-experiments-62-batch-47.pages.json`.
- Assigned pages: `library/statistical-models-and-experiments/kriging-as-best-linear-prediction.md` (A) and `library/statistical-models-and-experiments/kriging-as-best-linear-prediction-examples.md` (B).
- Assigned items, in supplier order: `def-simple-ordinary-and-universal-kriging`; `thm-kriging-systems-and-l2-optimality`; `thm-gaussian-simple-kriging-equals-conditional-mean`; `ex-singular-covariance-simple-kriging`; `ex-rank-deficient-universal-kriging-design`; `ex-ordinary-kriging-larger-error-than-simple`.
- Direct proof suppliers reviewed: `def-random-field-stationarity-covariance-and-variogram`; `def-moments-variance-and-covariance`; `thm-order-two-field-variogram-is-conditionally-negative-definite`; `lem-variance-and-covariance-identities-for-random-variables`; `thm-normal-equations-for-best-affine-l2-prediction`; `def-gaussian-process`; `lem-uncorrelated-jointly-gaussian-blocks-are-independent`; `def-axiom-of-choice`; `def-independent-random-elements`; `def-independent-sigma-algebras-and-events`; `def-conditional-expectation-as-an-ae-class`; `def-conditional-expectation-given-a-sigma-algebra`; `lem-conditioning-a-known-variable-and-an-independent-variable`; `lem-conditional-expectation-is-unique-almost-surely`; `def-finite-probability-space-and-event`; `def-finite-real-random-variable-and-distribution`; `def-expectation-on-a-finite-probability-space`; and `def-variance-and-covariance`.
- Additional proof interfaces opened for the cited normal-equations and Gaussian-independence results: `cor-cauchy-schwarz-for-random-variables`; `def-l-p-space-as-a-quotient-by-null-functions`; `def-linear-combination-and-span`; `lem-span-is-the-set-of-linear-combinations`; `thm-orthogonal-projection-is-the-unique-nearest-point`; `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`; `def-multivariate-normal-law`; `lem-characteristic-function-of-a-multivariate-normal-law`; `thm-non-negative-square-root-exists-and-is-unique`; `thm-independent-random-elements-have-product-joint-law`; `lem-measurable-functions-preserve-independence`; and `thm-rectangle-criterion-for-independent-random-elements`.
- Batch proof contracts: `research/statistical-models-experiments-62-batch-47.proof-contracts.json`; checked the cited facts, derivation rows, boundary cases, and finite checks against the current carriers.
- Cited kriging sources opened: Spodarev, *Spatial Statistics: Lecture Notes* (2024), §§3.2.1–3.2.3, including Theorems 3.15–3.16 and the ordinary/universal systems (3.20)–(3.29), <https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf>; Sun, *Stats 253 Lecture 5: Prediction and Kriging*, pp. 16–17, <https://web.stanford.edu/class/stats253/lectures/lect5.pdf>.

## Review and edit

- `def-simple-ordinary-and-universal-kriging`: the finite-moment definitions preserve the distinct simple, constant-mean ordinary, and finite-trend universal models. The universal unbiasedness constraint is exactly `P^T lambda = p0`; the singular-covariance caveat is explicit.
- `thm-kriging-systems-and-l2-optimality`: the centered quadratic objective, universal unbiasedness equivalence, block-matrix injectivity argument, constrained minimization, and multiplier error formula are correct under the stated positive-definite covariance and full-column-rank hypotheses. The simple-kriging formula follows from the normal equations.
- `thm-gaussian-simple-kriging-equals-conditional-mean`: the residual has zero cross-covariance with the observations, Gaussian block independence applies (including singular residual variance), and the conditional-expectation event identities and uniqueness yield the claimed almost-sure equality. AC, finite second moments, and positive-definite observation covariance are retained.
- `ex-singular-covariance-simple-kriging`: the covariance determinant and risk calculation are correct; all weights summing to one give the same exact predictor.
- `ex-rank-deficient-universal-kriging-design`: the covariance is `I_2`, the design has rank two, and `P^T lambda = (lambda1+lambda2, lambda2, lambda2)^T` cannot equal `(1,2,4)^T`.
- `ex-ordinary-kriging-larger-error-than-simple`: the independent sign coordinates give `Sigma=I_2`, simple risk `1`, and ordinary risk `1+lambda1^2+lambda2^2` subject to the sum-to-one constraint, whose minimum is `3/2`.
- Titles, caveats, and remarks match the claims: the items distinguish covariance-based results from variogram systems and plug-in procedures, and the examples state their finite-model scope. The opened sources support the terminology and classical kriging systems; the assigned proofs establish the stronger finite-covariance/rank-qualified claims locally.
- **Edit to the assigned A page:** in `kriging-as-best-linear-prediction.md`, replaced the summary's claim that without Gaussianity the predictor is “only” the best affine predictor. The Gaussian theorem proves conditional-mean equality under AC and its other stated hypotheses; the covariance theorem proves best-affine optimality for finite-second-moment fields. Neither proves that a non-Gaussian predictor cannot also be a conditional mean. The new wording states the guaranteed result and leaves conditional-mean equality to a separate argument.

## Defects not edited

None confirmed in the assigned items, pages, or the supplier interfaces used to verify their claims. No proposed withdrawal was identified.

## Page verdicts

- `kriging-as-best-linear-prediction` (A): pass after the summary wording repair. The remaining summary accurately tracks the finite covariance results and their rank/invertibility qualifications.
- `kriging-as-best-linear-prediction-examples` (B): pass. The finite examples support each summary claim, including independence of the sign coordinates by direct counting on the eight equally weighted outcomes.

## Blocker and checks

No workflow blocker. Only A-page prose changed; no item carrier changed, so item reflow, precheck, and proof-layout commands were not applicable. The run status reported batch 47 awaiting its reader artifact when checked.

Coverage was limited to the assigned pages and items, their cited suppliers/interfaces, the batch contracts, and the cited kriging source sections. I did not re-audit the complete remote transitive closures of general published probability, measure-theory, and linear-algebra results.
