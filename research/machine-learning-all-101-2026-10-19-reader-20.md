# Step 3a reader report — batch 20

Run: machine-learning-all-101-2026-10-19  
Role: reader-20  
Scope: batch 20 only

## Active run and evidence reviewed

The autopilot status command reports the run as active at 3a-read. I read the batch-20 pages manifest, coverage record, cross-batch dependency record, proof contracts, and reader brief. The cross-batch dependency record is empty.

## Page verdicts

| Page | Review |
| --- | --- |
| ml02-clustering-mixtures | Pass. The A-page YAML frontmatter has the manifest’s title, draft status, prerequisite list, and all ten assigned items in the same order. Its body is empty and page_layout is compact-v1. |
| ml02-clustering-mixtures-examples | Pass. The B-page YAML frontmatter has the companion prerequisite, draft status, and all three assigned examples. Its body is empty and page_layout is compact-v1. |

## Assigned item inventory and verdicts

All thirteen assigned item files were opened and checked in dependency order. The statements and definitions are complete and uninterrupted by hyperlinks; references remain after their complete sections. No item contains a TikZ diagram except the Lloyd fixed-point example, whose diagram was checked against the computed labels and centers and is correct.

| Item | Verdict |
| --- | --- |
| def-k-means-objective | Pass. The finite labeling objective and empty-cluster convention are consistent. |
| def-finite-gaussian-mixture | Pass. The component formula, positive-weight mixture domain, likelihood, and responsibilities are stated consistently; references follow the complete definition. |
| lem-log-determinant-strictly-concave-on-positive-definite-matrices | Repaired. The strict-concavity argument is valid after closing the determinant-positivity prerequisite in step 1.1. |
| thm-equal-spherical-mixture-low-variance-kmeans-limit | Pass. The finite-sum limit, weighted tie case, and finite labeling minimum follow from the stated hypotheses. |
| alg-lloyd-k-means | Pass. Inputs, initialization ties, later tie retention, mean updates, empty-cluster behavior, and the stop rule are explicit. |
| thm-finite-gaussian-component-density-normalized | Repaired. The proof now uses the same square root as the statement and justifies its determinant factor. The change-of-variables and product-law argument is sound. |
| thm-lloyd-objective-monotonicity-and-termination | Pass. Assignment and center updates are nonincreasing, nonterminal iterations strictly lower the objective, and the finite labeling argument proves termination. |
| alg-gaussian-mixture-em | Pass. The finite procedure, affine-span condition, updates, output, and scope caveat are specified. |
| thm-gaussian-mixture-exact-m-step-maximizes-q | Pass. Full affine span makes every weighted scatter positive definite; the KL weight argument, mean update, and strict log-determinant covariance optimization establish the unique attained maximizer. |
| thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing | Pass. The finite latent density, posterior support and integrability conditions, Q factorization, exact update, and likelihood identity are checked. |
| ex-lloyd-tie-sensitive-local-minima | Pass. All three initial assignments, updated centers, terminal ties, costs, and the diagram agree. |
| ex-fractional-gaussian-mixture-responsibilities | Pass. Equal positive component densities cancel, leaving the stated fixed fractional vector. |
| ex-gaussian-mixture-likelihood-unbounded | Pass. The two density lower bounds multiply to a positive constant times 1/epsilon, proving both likelihood and log likelihood unbounded above. |

## Repairs and checks

I added the required blank-line separation after the proof heading and between numbered steps in the nine proof-bearing assigned items:

- lem-log-determinant-strictly-concave-on-positive-definite-matrices
- thm-equal-spherical-mixture-low-variance-kmeans-limit
- thm-finite-gaussian-component-density-normalized
- thm-lloyd-objective-monotonicity-and-termination
- thm-gaussian-mixture-exact-m-step-maximizes-q
- thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing
- ex-lloyd-tie-sensitive-local-minima
- ex-fractional-gaussian-mixture-responsibilities
- ex-gaussian-mixture-likelihood-unbounded

Two mathematical proof repairs were also made in assigned A-page items:

1. In lem-log-determinant-strictly-concave-on-positive-definite-matrices, step 1.1 used positivity of the eigenvalues to assert det(A_s)>0 without stating the determinant-law step. I added published dependencies for multiplicativity, transpose invariance, and the triangular determinant formula, then derived det(A_s) as the product of its positive eigenvalues. The proof contract now records the F9 citations and updated step derivation.
2. In thm-finite-gaussian-component-density-normalized, step 1.1 constructed a spectral square root but did not explicitly identify it with the square root used in the statement and in the multivariate-normal supplier. It now sets A=Sigma^(1/2) from the statement, diagonalizes that matrix, and derives det(A)=sqrt(det(Sigma)) and A^T Sigma^(-1) A=I using the existing determinant suppliers. The proof contract derivation and citation use were updated.

Neither mathematically repaired item contained a verification.judge record. I ran reflow and precheck for all nine changed items; reflow completed successfully and every precheck passed. The strict proof-contract check passed for all thirteen assigned items. The final proof-layout run reported 9 items, 43 steps, and 0 defects.

## Dependency and source inventory

I opened the relevant Definition or Statement section of each of the 43 unique external direct dependencies below; each is published. The local batch dependencies were reviewed before their consumers.

alg-expectation-maximization; cor-additivity-of-the-nonnegative-lebesgue-integral; cor-continuous-functions-are-borel-measurable; cor-mean-value-theorem; cor-real-spectral-theorem-for-self-adjoint-endomorphisms; def-axiom-of-choice; def-countable-choice; def-determinant-of-a-square-matrix; def-finite-sigma-finite-and-semifinite-measures; def-invertible-matrix-and-general-linear-group; def-kullback-leibler-divergence; def-latent-variable-joint-and-observed-data-factorization; def-measure-with-density; def-moments-variance-and-covariance; def-multivariate-normal-law; def-natural-logarithm; def-probability-measure; def-product-sigma-algebra-and-finite-product-sigma-algebras; def-standard-normal-and-normal-laws; def-trace-of-a-square-matrix; lem-ac-supplies-sequential-choices-for-probability-constructions; thm-borel-products-of-euclidean-spaces-are-euclidean-borel; thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions; thm-cauchy-schwarz-finite; thm-chain-rule-for-total-derivatives; thm-derivative-of-matrix-inversion; thm-determinant-differential-and-jacobis-formula; thm-determinant-multiplicative; thm-determinant-of-a-triangular-matrix; thm-determinant-of-transpose; thm-em-observed-log-likelihood-is-nondecreasing; thm-exponential-limits-and-range; thm-independent-random-elements-have-product-joint-law; thm-kullback-leibler-is-nonnegative; thm-least-squares-solutions-and-normal-equation; thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets; thm-linear-change-of-variables-for-lebesgue-measure; thm-logarithm-derivative-and-integral; thm-measure-uniqueness-on-a-sigma-finite-pi-system; thm-natural-logarithm-laws; thm-observed-density-is-latent-marginal-under-tonelli; thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique; thm-tonelli-theorem-for-sigma-finite-product-spaces.

The batch coverage record lists Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, corrected second edition, §§8.5.1–8.5.3, §§13.2.1–13.2.3, Exercise 13.1, and §§14.3.4–14.3.7; Bishop, Pattern Recognition and Machine Learning, §2.3 equation (2.43), Chapter 9 §§9.1–9.4, and Exercises 9.1 and 9.11; and Boyd and Vandenberghe, Convex Optimization, §3.1.5. The official ESL contents table confirms the listed clustering-section locations. I read Boyd §3.1.5 (printed pp. 74–75); its line-restriction calculation gives a nonpositive second derivative for log det, and the assigned proof establishes the strict case directly.

## Uneditable findings and blocker

No defect remained outside the authorized repair scope, and no blocker remains for this batch. The full Hastie PDF endpoint returned 403 in the web reader and the full Bishop PDF exceeded its fetch limit, so I did not independently inspect those complete source passages; I rely on the local proofs and opened library suppliers for the mathematical verdicts and do not claim a complete external source-text audit.
