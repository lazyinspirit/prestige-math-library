# Step 3a reader report — batch 24

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader (reader-24)  
Review date: 2026-10-21

## Scope and opened inventory

The live .autopilot status reported the run as active at 3a-read, with no
worker in flight. The assigned carriers were draft pipeline items in the current
working tree. The batch manifest and briefs/reader.md were read before review.
Both assigned page files were opened:

- library/inverse-problems/conditional-flow-matching-for-inverse-posteriors.md (A)
- library/inverse-problems/conditional-flow-matching-for-inverse-posteriors-examples.md (B)

Both pages have the manifest-matching inventories and prerequisites, empty
Markdown bodies, and page_layout: compact-v1.

All seven assigned items were opened:

1. lem-ip-gronwall-with-integrable-coefficient
2. lem-ip-lipschitz-ode-triangular-flow-and-c1-density
3. thm-ip-exact-triangular-transport-disintegrates-to-posterior
4. alg-ip-conditional-flow-matching
5. op-ip-function-space-flow-matching-error-theory
6. ex-ip-cfm-low-imh-acceptance-with-accurate-means
7. ex-ip-likelihood-free-conditional-flow-matching

The direct dependency statements or definitions needed for these checks were
opened, including:

- For the Grönwall and ODE arguments: def-countable-choice,
  def-dependent-choice, def-l-one-of-a-measure,
  cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous,
  thm-first-fundamental-theorem-of-calculus-for-l-one,
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions,
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous,
  lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous,
  def-continuous-map-top, lem-vector-valued-continuous-curve-space-is-complete,
  thm-banach-fixed-point, thm-norm-inequality-for-the-vector-valued-integral,
  thm-heine-cantor-metric,
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves,
  prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-c1-dependence-of-solutions-on-initial-data,
  thm-chain-rule-for-total-derivatives,
  thm-determinant-differential-and-jacobis-formula,
  def-determinant-of-a-square-matrix, def-trace-of-a-square-matrix,
  thm-trace-of-ab-equals-trace-of-ba, thm-chain-rule,
  lem-derivative-algebra-and-chain-rules, thm-derivative-of-exponential,
  lem-mean-value-theorem-on-closed-interval,
  thm-c-one-change-of-variables-for-l-one-functions, and
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions.
- For the disintegration and algorithm arguments: def-axiom-of-choice,
  thm-choice-implies-dependent-implies-countable-choice,
  lem-finite-euclidean-space-is-standard-borel,
  def-product-sigma-algebra-and-finite-product-sigma-algebras,
  def-measurable-function-between-measurable-spaces,
  lem-coordinate-maps-and-permutations-are-measurable-on-finite-products,
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique,
  def-measure-kernel-and-probability-kernel,
  thm-disintegration-of-a-joint-law-on-standard-borel-spaces,
  thm-measurability-of-integration-against-a-kernel,
  thm-tonelli-theorem-for-sigma-finite-product-spaces,
  def-conditional-law-given-a-random-element,
  def-conditional-expectation-given-a-sigma-algebra,
  thm-conditional-expectation-is-the-l2-orthogonal-projection,
  cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable,
  thm-linearity-of-the-lebesgue-integral-on-l-one,
  def-ip-misfit-evidence-and-posterior-law, and
  def-ip-posterior-computation-error-budget.
- For the open-problem source context, the current draft suppliers
  thm-ip-function-space-posterior-propriety,
  thm-ip-hellinger-data-stability,
  thm-ip-posterior-potential-discretization-error, and
  prop-ip-bounded-posterior-functional-error were read in full.
- For the examples, lem-metropolis-hastings-density-ratio was opened in full.

## Item verdicts and edits

- lem-ip-gronwall-with-integrable-coefficient — the integrating-factor proof,
  endpoint case, and reflected backward estimate follow from the stated
  hypotheses and cited integral facts. Its statement and references are
  uninterrupted. No mathematical defect found.
- lem-ip-lipschitz-ode-triangular-flow-and-c1-density — the construction,
  Grönwall bounds, reversal, parameter continuity, variational equation,
  Liouville formula, and density change of variables are supported by the
  stated hypotheses and suppliers. Step 2.1 previously called the global
  solution unique before step 3.1 established global uniqueness. I changed
  step 2.1 to claim existence only; step 3.1 supplies uniqueness. I also
  verified the source passages: Teschl, Ordinary Differential Equations and
  Dynamical Systems, §2.3 Corollary 2.6, §2.4 Lemma 2.7, and §2.6
  Theorem 2.17; the CMU ODE notes, Picard–Lindelöf, Grönwall, flow, and
  Liouville sections; and Folland, Real Analysis, Theorem 2.47.
- thm-ip-exact-triangular-transport-disintegrates-to-posterior — the proof
  constructs the image kernel, checks its rectangle identity using Tonelli,
  and applies common-null-set uniqueness. No mathematical defect found. I
  made the source locators precise: Durrett, Probability: Theory and
  Examples, §2.1 Theorem 2.1.22 and §4.1.3 Theorem 4.1.17; Varadhan,
  Probability Theory, Chapter 4 §4.3 Theorem 4.7 and Exercise 4.10. The local
  proof supplies the full rectangle and common-null-set arguments used here.
- alg-ip-conditional-flow-matching — the finite-sample and solver branches
  are operationally specified, and the item correctly declines to infer exact
  posterior sampling from finite regression or solver success. The callable
  statistic S had no convergence semantics, so its threshold could not
  justify the status “converged.” I renamed it a stopping statistic and
  changed that status to “criterion-met,” which reports exactly the stopping
  condition without claiming optimizer convergence.
- op-ip-function-space-flow-matching-error-theory — this remains a
  formulated open problem, not a proved result. I updated its consumer
  reference to the algorithm's “criterion-met” status and refined the
  Shikhman locator to Theorem 23 in §8, Assumption 25/Theorem 26/Corollary 27
  in §8.1, Theorem 18 on approximate-ERM and sample risk, and §1.2 on scope.
  Full relevant source passages were checked in Blechschmidt et al.
  (Theorem 3.1, §3.2, Algorithms 2–4, Table 1/Figure 6, §4.2.2, §5); Zhai,
  Jeong, and Ročková (Theorem 1 and Assumptions 1–2; Theorem 2 and Assumptions
  3–4); Shikhman (Theorems 18, 23, 26, Assumption 25, Corollary 27, §1.2);
  and Chemseddine et al. (§2, Proposition 1). These sources do not supply the
  combined Bayesian-potential, finite-rank, uniform-conditional theorem in
  this formulation. Any solution must also make its assumptions control
  vector-field-class approximation and align the finite-rank training law
  with the posterior model term; the stated e_stat is excess over the class
  infimum only. Because this item asks for those assumptions rather than
  asserting a theorem under the listed data alone, I left that obligation in
  the open formulation.
- ex-ip-cfm-low-imh-acceptance-with-accurate-means — the four acceptance
  rates, posterior-summary comparison, normalized radii, and tail frequency
  match Blechschmidt et al., §4.2.1–§4.2.2, Figure 6 and Table 1. The
  empirical qualification is preserved. No defect found.
- ex-ip-likelihood-free-conditional-flow-matching — the distinction between
  joint-sample access and likelihood-density access is explicit, and the
  MH ratio is restricted to positive forward-flow pairs. The stated caveats
  preserve special likelihood cancellation and pseudo-marginal alternatives.
  No defect found.

## External source passages reviewed

- [Teschl, Ordinary Differential Equations and Dynamical Systems](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf):
  §2.3 Corollary 2.6, §2.4 Lemma 2.7, and §2.6 Theorem 2.17 with its
  locally-integrable-bound remark.
- [CMU ODE notes](https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html):
  Picard–Lindelöf, Grönwall, flow, Liouville, and extension sections.
- [Folland, Real Analysis](https://djvu.online/file/NPF4BEtSuqdFA):
  Theorem 2.47, C1 change of variables for nonnegative measurable functions.
- [Durrett, Probability: Theory and Examples, fifth edition](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf):
  §2.1 Theorem 2.1.22 and §4.1.3 Theorem 4.1.17.
- [Varadhan, Probability Theory, Chapter 4](https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf):
  §4.3 Theorem 4.7 and Exercise 4.10; the latter formulates the R2
  disintegration result as an exercise.
- [Blechschmidt et al., Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems](https://arxiv.org/pdf/2610.02377):
  Theorem 3.1, §§3.1–3.2, Remark 3.1, Algorithms 2–4, §4.2.1 Figure 6/Table 1,
  §4.2.2 normalized radius, and §5 future-work discussion.
- [Lipman et al., Flow Matching for Generative Modeling](https://ar5iv.labs.arxiv.org/html/2210.02747):
  §3.2 Theorem 2 and §4 Theorem 3. The arXiv PDF fetch exceeded the browser
  size limit; the corresponding full HTML text was available and inspected.
- [Tong et al., Improving and Generalizing Flow-Based Generative Models with Minibatch Optimal Transport](https://arxiv.org/pdf/2302.00482):
  §3.2 Theorem 3.2 and Algorithm 1, plus §3.2.2 equations (14)–(15).
- [Zhai, Jeong, and Ročková, Conditional Flow Matching for Bayesian Posterior Inference](https://arxiv.org/pdf/2510.09534):
  §3.1 Theorem 1 and Assumptions 1–2; §3.2 Theorem 2 and Assumptions 3–4.
- [Shikhman, Discretization and Statistical Consistency of Functional Flow Matching](https://arxiv.org/pdf/2608.04531):
  §1.2 scope; Theorem 18 (PDF pp. 16–17); Theorem 23 in §8; Assumption 25,
  Theorem 26, and Corollary 27 in §8.1.
- [Chemseddine et al., Conditional Wasserstein Distances with Applications in Bayesian OT Flow Matching](https://www.jmlr.org/papers/volume26/24-0586/24-0586.pdf):
  §2, Proposition 1.
- [Roberts and Rosenthal, General State Space Markov Chains and MCMC Algorithms](https://probability.ca/jeff/ftpdir/probsurv.pdf):
  §2.1 and Proposition 2.
- [Owen, Monte Carlo Theory, Methods and Examples](https://artowen.su.domains/mc/Ch-MCMC.pdf):
  §11.4. Direct PDF access returned HTTP 403; the indexed excerpt was available.

## Page verdicts

- conditional-flow-matching-for-inverse-posteriors (A) — pass. Its
  frontmatter inventory, requires, draft status, and compact layout match the
  manifest; body is empty.
- conditional-flow-matching-for-inverse-posteriors-examples (B) — pass. Its
  example inventory, companion prerequisite, draft status, and compact layout
  match the manifest; body is empty.

No assigned-scope diagrams were present. No page prose or B-page content was
edited. The reviewed cross-batch draft suppliers had no confirmed mathematical
defect in the interfaces used here. There are no uneditable findings.

## Checks and limitations

For the four edited items, reflow reported no formatting changes and precheck
passed. The batch-24 proof-contract check reported 0 errors and 0 warnings for
all four edited items. The final batched proof-layout command reported 4 items,
13 steps, 0 defects. None of the four edited item frontmatters contained a
verification.judge record.

The first assigned item, lem-ip-gronwall-with-integrable-coefficient, was
opened before its direct suppliers. I inspected those supplier statements
before forming the verdict, but the strict file-open order was not achieved.
The Owen Chapter 11 §11.4 PDF returned HTTP 403 in this reader; its indexed
excerpt was available, and the acceptance-ratio claim was independently
checked against the local published MH lemma and Roberts–Rosenthal, §2.1 and
Proposition 2. This review inspected direct supplier clauses needed by the
assigned arguments; it was not a fresh proof audit of every transitive
published dependency.

Blocker: none.
