# Step 3a reader report — batch 14

Run: `bayesian-computational-statistics-62`  
Role: independent reader  
Review date: 2026-10-15

## Opened inventory

Assigned pages reviewed:

- `gaussian-process-priors-and-posterior-laws` — draft A page.
- `gaussian-process-priors-and-posterior-laws-examples` — draft B page.

Assigned items reviewed by logical dependency level:

- `lem-real-line-is-standard-borel`.
- `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`.
- `thm-finite-gaussian-process-posterior-and-predictive-laws`.
- `ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise`.
- `ex-singular-gaussian-process-prior-and-predictive-covariances`.
- `ex-gaussian-process-extrapolation-retains-independent-index-uncertainty`.

Dependencies inspected for the real-line lemma included `def-polish-space`,
`def-separable-space`, `def-standard-borel-space`, `def-dense-top`,
`def-countable`, `def-measurable-space`, `lem-rat-embeds-dense`,
`thm-euclidean-space-complete`, and `thm-rationals-countable`.

The Gaussian-process construction was checked against `def-axiom-of-choice`,
`def-choice-function`, `def-countable-choice`,
`def-consistent-family-of-finite-dimensional-distributions`,
`def-coordinate-maps-and-cylinder-sigma-algebra`,
`def-stochastic-process-and-finite-dimensional-distributions`,
`def-gaussian-process`, `def-multivariate-normal-law`,
`lem-characteristic-function-of-a-multivariate-normal-law`,
`thm-non-negative-square-root-exists-and-is-unique`, and
`thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`. The extension
proof's relevant suppliers were also inspected: the finite-cylinder pi-system,
algebra, and premeasure lemmas; `lem-finite-products-of-standard-borel-spaces-are-standard-borel`;
`thm-borel-probability-measures-on-polish-spaces-are-inner-regular`;
`thm-compact-implies-the-other-compactness-forms`;
`thm-caratheodory-extension-theorem`; and `thm-dynkin-pi-lambda`.
The characteristic-function chain was checked against the scalar normal
characteristic-function lemma, characteristic-function uniqueness,
Cramér–Wold, and the characteristic-function definition.

Sequencing note: the `lem-real-line-is-standard-borel` carrier was initially
opened before its direct suppliers. I deferred its verdict until after reading
those supplier statements and proofs; the remaining assigned consumers were
assessed after their relevant suppliers.

The posterior theorem was checked against `def-forward-and-back-substitution-for-triangular-systems`,
`def-triangular-and-diagonal-matrices-over-a-commutative-ring`,
`def-matrix-product-and-identity-matrix`, `def-independent-random-elements`,
`lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`,
`thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`,
`thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`,
and the current-run draft `thm-multivariate-normal-conditional-law`.
The conditional-law proof's key suppliers were inspected, including
`lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`,
`def-measure-kernel-and-probability-kernel`,
`def-law-or-distribution-of-a-random-element`,
`thm-measurability-of-integration-against-a-kernel`,
`thm-independent-random-elements-have-product-joint-law`, and
`thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The examples' probability-space constructions were checked against
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`thm-rectangle-criterion-for-independent-random-elements`, and
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.

Review context read as evidence, not verdict: the batch-14 page manifest,
proof-contract file, authoring notes, source-coverage record, beta author result,
and batch-14 cross-batch-dependency record. The latter identifies
`thm-multivariate-normal-conditional-law` as a draft supplier in batch 6; its
current item text and proof were inspected independently. No readiness record,
contract check, prior author conclusion, or prior validation result was treated
as mathematical acceptance.

## Source evidence

- O. Biskup, *MATH 275D Notes*, Chapter 2, Definition 2.3 and the examples on
  p. 7 identify Euclidean real space with its Borel sigma-algebra as standard
  Borel. The local lemma supplies the argument from local definitions and
  completeness/density suppliers.
- Biskup, Theorem 2.4 and §2.2, pp. 7–11, give the arbitrary-index Kolmogorov
  extension statement and its compact-approximation/diagonal-subsequence
  proof of continuity at the empty set, followed by measure extension and
  uniqueness. The local proof's coordinate-specific Polish presentations and
  explicit AC accounting were checked directly; the source supports the
  extension argument but does not replace that local proof.
- A. W. van der Vaart and J. H. van Zanten, “Reproducing kernel Hilbert spaces
  of Gaussian priors,” §2.1, printed p. 202, defines a Gaussian process for an
  arbitrary index set through finite-dimensional normal laws and identifies
  its covariance function.
- Rasmussen and Williams, *Gaussian Processes for Machine Learning*, Chapter 2
  §2.2, printed pp. 13 and 16–18, equations 2.13–2.24, supports the
  mean/covariance and finite regression formulas; Algorithm 2.1, printed p. 19,
  describes Cholesky-based triangular solves. Its displayed regression case
  uses zero mean and iid homoscedastic noise. The local proof establishes the
  broader stated mean and noise-covariance assumptions and handles singular
  prior and predictive covariance blocks.
- S. Särkkä, *Bayesian Filtering and Smoothing*, Appendix A.1, Lemma A.2,
  printed pp. 209–210, states the conditional multivariate-normal formula when
  the observed covariance is invertible. The current-run local conditional-law
  proof supplies the kernel argument and singular-block cases.

The referenced Gelman et al. *Bayesian Data Analysis*, 3rd ed., §3.5 PDF URL
returned an internal retrieval error during this review. The conditional-law
claim was independently supported by Särkkä's accessible Appendix A.1 and the
complete local proof; no unresolved mathematical claim depends on the
unretrieved PDF.

## Review and verdicts

### A page: `gaussian-process-priors-and-posterior-laws`

Verdict: **pass; no defect found.** The summary accurately separates the
cylinder-space existence result from continuity, joint measurability, and
Banach-valued tightness claims. It states the positive-definite observed
covariance condition, permits singular prior and conditional covariances, and
describes the all-observation-values conditional-kernel version and
almost-sure uniqueness of regular conditional versions. The Cholesky-solve
summary matches the proved item. The Brownian prerequisite is explicitly not
used to infer regularity for general kernels.

### B page: `gaussian-process-priors-and-posterior-laws-examples`

Verdict: **pass; no defect found.** The summary accurately describes the three
examples and correctly warns that values of a selected kernel on
observation-null sets are not fixed by the regular conditional law.

### Item findings

- `lem-real-line-is-standard-borel`: countability and density of the rationals
  give separability; completeness of the usual metric gives Polishness; the
  identity Borel presentation gives standard Borelness. The hypotheses and
  cited definitions match each step.
- `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel`:
  each finite Gram matrix is positive semidefinite; the finite Gaussian laws
  are independent of the chosen enumeration by their characteristic
  functions; restriction consistency follows from the same transform; and the
  standard-Borel Kolmogorov extension gives the unique cylinder-space law.
  The process and its finite means/covariances follow from coordinate
  measurability and the finite marginals. The proof makes no unsupported path
  regularity claim. For a finite list with repeated indices, grouping
  coefficients by distinct sites gives the stated Gaussian-process condition
  immediately; this is a short closure, not a defect.
- `thm-finite-gaussian-process-posterior-and-predictive-laws`: the stacked
  evaluation/noise vectors have the stated joint Gaussian block covariance;
  the conditional-normal theorem applies because the observed block `C` is
  assumed positive definite; the Schur complement is positive semidefinite;
  independent prediction noise adds its covariance; and the triangular-solve
  calculation evaluates the displayed systems without forming an inverse.
  Repeated training/test indices and singular prior/test covariance blocks are
  preserved by the finite Gaussian and conditional-law interfaces.
- `ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise`:
  the constant kernel is PSD and the stated noise matrix is positive definite.
  `C=[[2,3/2],[3/2,2]]`, `C^{-1}=[[8/7,-6/7],[-6/7,8/7]]`; multiplication
  gives posterior mean `16/7` and variance `3/7` at the stated observation.
- `ex-singular-gaussian-process-prior-and-predictive-covariances`: the prior
  blocks are `J_2`, the observed block is `J_2+I_2` and positive definite, and
  the repeated-test conditional covariance is `J_2/3`, of rank one. The mean
  is `(1/3,1/3)` at the stated observation.
- `ex-gaussian-process-extrapolation-retains-independent-index-uncertainty`:
  the equality kernel is positive semidefinite by grouping repeated sites;
  the observed block is `2`, the cross-covariance is zero, and the conditional
  law at the unobserved index is `N(0,1)` for every observation value.

No title, definition, statement, fact, proof, witness, computation, remark,
page summary, citation, or proof-contract defect was confirmed. The displayed
contract citations and derivation inputs agree with the item facts and proof
steps.

## Edits, unresolved defects, and blockers

- Edits: none. No assigned item or A-page prose required repair. No proof
  contract or judge metadata was changed.
- Uneditable defects: none. Findings JSON is empty.
- Blocker: none for batch 14. The read-only autopilot status showed the run
  active in `3a-read` with no worker in flight. No controller transition or
  gate was attempted.
- Since no item was changed, reflow, precheck, and proof-layout were not run.
