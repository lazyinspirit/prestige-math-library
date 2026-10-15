# Step 3a reader report — batch 61

Run: `bayesian-computational-statistics-62`  
Batch: `61`  
Assignment: `reader-61`

## Opened inventory

Assigned pages:

- A page `synthetic-likelihood-and-indirect-inference` at `library/bayesian-computational-statistics/synthetic-likelihood-and-indirect-inference.md`.
- B page `synthetic-likelihood-and-indirect-inference-examples` at `library/bayesian-computational-statistics/synthetic-likelihood-and-indirect-inference-examples.md`.

Assigned items, read in local dependency order:

- Level 0: `def-synthetic-likelihood`, `def-binding-function-and-indirect-inference-target`, `lem-two-simulation-summary-covariance-is-singular-in-two-dimensions`.
- Level 1: `thm-indirect-inference-target-exists-with-lexicographic-tie-break`, `alg-synthetic-likelihood-monte-carlo-estimation`, `ex-gaussian-synthetic-likelihood-for-bernoulli-summary-law`.
- Level 2: `rem-finite-simulation-synthetic-likelihood-is-a-random-approximation`, `ex-nonunique-binding-function-target`, `ex-two-simulation-covariance-is-random-and-singular`.

Opened the relevant definition, statement, facts, and proof sections of the 21 direct item suppliers: `def-axiom-of-choice`, `def-cholesky-factorisation-with-positive-diagonal`, `def-dominated-statistical-experiment`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-identically-distributed-and-iid-random-variables`, `def-identifiability-of-an-estimand`, `def-law-or-distribution-of-a-random-element`, `def-likelihood-density`, `def-metric-compactness`, `def-metric-continuity`, `def-metric-space`, `def-moments-variance-and-covariance`, `def-multivariate-normal-law`, `def-parametric-statistical-model`, `def-statistic-and-estimator`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-determinant-differential-and-jacobis-formula`, `thm-extreme-value-metric`, `thm-identifiability-iff-constant-on-equivalence-classes`, and `thm-nondegenerate-multivariate-normal-law-has-density`.

Opened the page-level prerequisites `numerical-optimization-for-statistical-computation`, `iid-monte-carlo-integration-and-error`, and `mixed-effects-and-longitudinal-models`. For the claims used as context, also opened `alg-gradient-descent`, `alg-damped-newton`, and `def-iid-monte-carlo-estimators`. The two optimization procedures state no global convergence guarantee; the assigned target is an exact compact-domain argmin. The IID page's estimator definition supplies context, while the assigned algorithm gives its vector simulation and covariance formulas locally.

## Source checks

Opened the cited literature sections relevant to the assigned claims:

- [Ong et al., “Variational Bayes with Synthetic Likelihood”](https://arxiv.org/pdf/1608.03069), §1, PDF pp. 1–2, equation (1): Gaussian summary approximation and finite-simulation mean/covariance plug-in.
- [Drovandi et al., “Approximating the Likelihood in Approximate Bayesian Computation”](https://arxiv.org/pdf/1803.06645), §2, PDF pp. 2–3, and §2.1, PDF pp. 3–4: the Gaussian summary assumption, simulation estimates, and the auxiliary-model binding-function context.
- [Frazier et al., “Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments”](https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf), §§1–2, PDF pp. 1–3, equations (1)–(2): the ideal Gaussian summary target, simulated mean/covariance estimates, and the distinction between ideal and finite-simulation BSL targets.
- [Gouriéroux, Monfort, and Renault, “Indirect Inference”](https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf), §2.2, printed pp. S88–S89, and §7, printed pp. S103–S104: auxiliary-model binding and a non-injective binding example.
- [Sargent and Stachurski, “Which Moments to Match?”](https://python.quantecon.org/gallant_tauchen.html), §§38.1 and 38.7: the simulation setting and minimum-distance matching of auxiliary parameters.

For the published Cholesky dependency finding below, also opened the cited sources. [Driscoll and Braun, *Fundamentals of Numerical Computation*, §2.9.3, Theorem 2.9.3](https://fncbook.com/structure/) states the existence factorization for a symmetric positive-definite matrix. [Bindel, “Blocked LU and Cholesky”](https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html), “Cholesky factorization,” gives the block recurrence. Neither cited location states uniqueness or the converse direction in the assigned dependency's full theorem statement.

## Review and page verdicts

`def-synthetic-likelihood` correctly requires finite second moments, defines the pointwise mean and covariance, uses the Gaussian density only on the positive-definite branch, and keeps the finite-simulation plug-in random and unavailable outside that branch. Its qualifications do not assert Gaussianity of the true summary law, exact-likelihood equivalence, consistency, or posterior calibration.

`def-binding-function-and-indirect-inference-target` explicitly distinguishes this page's moment binding map from auxiliary-model bindings, requires nonempty compactness and continuity for its target, and makes identification a declared condition. `thm-indirect-inference-target-exists-with-lexicographic-tie-break` proves nonempty compactness of the minimizer set and constructs the lexicographic selector by finitely many attained coordinate minima; its hypotheses and conclusion match.

`lem-two-simulation-summary-covariance-is-singular-in-two-dimensions` correctly reduces the covariance to (2vv^T) and gives a nonzero null vector in both cases (v=0) and (v\ne0). `alg-synthetic-likelihood-monte-carlo-estimation` specifies the IID simulation, sample mean and Bessel-corrected covariance, failure branch, and Gaussian-density branch. It asserts no convergence or estimator property. The algorithm's unique-Cholesky instruction reaches the published dependency noted below.

The Bernoulli example's Gaussian density is positive on an interval where the true summary law has probability zero. The non-injective binding example correctly separates identification in the raw experiment from loss of identification under the squared summary and computes the lexicographic tie. The four-corner example correctly computes population covariance (I_2), two distinct sample covariance outcomes of positive probability, and unavailability for every two-simulation outcome. The remark and both page summaries preserve these limits.

- **A page:** no defect found in the assigned page prose or its mathematical summary. Its item dependency closure reaches the nonfatal published Cholesky proof and citation findings below.
- **B page:** no defect found in the assigned page prose, summaries, or examples. The two-simulation example reaches the same published dependency through the algorithm; the example itself uses the algorithm's unavailable-covariance branch.

## Edits and uneditable findings

No assigned item or page prose was edited. No assigned-carrier defect was confirmed, so no proof contract, judge record, reflow, precheck, or proof-layout pass was changed or required.

The following confirmed nonfatal findings are outside reader edit scope. The defective subject is the published item `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, reached by assigned consumer `alg-synthetic-likelihood-monte-carlo-estimation`:

1. **Proof, step 1.1 — unlicensed inference.** The proof uses nonzero determinant to infer invertibility. Its listed dependencies establish the determinant formula for triangular matrices and determinant multiplicativity, but neither the dependency set nor this step supplies the determinant/invertibility criterion or a triangular solve. A concise closure is to solve (Lx=y) by forward substitution, using each positive diagonal entry to determine the coordinates successively; this proves invertibility directly.
2. **Proof, step 3.1 — unlicensed inference.** It declares (M=L_2^{-1}L_1) lower triangular and asserts that a lower-triangular unitary matrix is diagonal, without establishing either fact. The listed matrix-product and determinant dependencies do not supply these facts. Forward substitution gives that the inverse of an invertible lower-triangular matrix is lower triangular. Then (M^{-1}=M^*), where (M^{-1}) is lower triangular and (M^*) is upper triangular, so (M) is diagonal; its positive real diagonal entries and unitarity force them all to equal (1).
3. **Sources, references supporting the full Statement — citation-inaccurate.** The cited Driscoll–Braun Theorem 2.9.3 gives the positive-definite existence direction only, and the cited Bindel lecture gives a Cholesky recurrence without the converse or uniqueness. The statement includes both directions and uniqueness. Add a source that explicitly supports those clauses or revise the source locators to identify what each reference supports.

## Blockers and coverage limits

There is no mathematical blocker for this reader assignment. The live autopilot status recomputation failed because `tools/step6-finalize.mjs` is missing; the persisted run status lists `reader-61` in flight, consistent with the dispatch, so this did not prevent the review.

I reviewed the direct item suppliers and the relevant page-level prerequisite sections. I did not audit every item in the much larger transitive foundation closure of those published suppliers; the review checked the exact supplier interfaces and the proofs needed by the assigned arguments rather than re-auditing the full foundations library.
