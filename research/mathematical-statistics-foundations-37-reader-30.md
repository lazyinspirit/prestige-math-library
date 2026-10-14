# Step 3a reader report — batch 30

Run: `mathematical-statistics-foundations-37`  
Batch: `30`  
Role: reader

## Scope and run state

The recomputed autopilot status showed the run in `3a-read`, with no active
dispatch at inspection. The assigned batch contains two pages and seven items.
The formerly missing LAN prerequisite page is present in the current workspace.

## Opened inventory

Assigned pages:

- `library/mathematical-statistics/semiparametric-efficiency-and-regular-estimation.md`
- `library/mathematical-statistics/semiparametric-efficiency-and-regular-estimation-examples.md`

Assigned item bodies and proofs, reviewed in dependency-level order:

- `items/thm-asymptotic-linearity-implies-normality.md`
- `items/lem-finite-dimensional-functional-convolution-bound.md`
- `items/lem-one-sided-dqm-implies-iid-lan.md`
- `items/cex-finite-mean-functional-without-l2-influence-curve.md`
- `items/thm-general-regular-estimator-convolution-bound.md`
- `items/thm-semiparametric-information-bound-for-regular-al-estimators.md`
- `items/ex-sample-mean-attains-unrestricted-mean-bound.md`

Required page context:

- `library/mathematical-statistics/pathwise-differentiability-influence-functions-and-efficient-scores.md`
- `library/mathematical-statistics/local-asymptotic-normality-contiguity-and-efficiency.md`
- `library/probability/central-limit-theorems.md`

Direct dependency interfaces opened for verification:

`cor-cauchy-schwarz-inequality-for-l-two`,
`cor-markov-inequality-for-random-variables`,
`cor-taylor-remainder-bound`,
`cor-weakly-convergent-sequences-are-tight`,
`def-axiom-of-choice`,
`def-characteristic-function-of-a-real-random-variable`,
`def-countable-choice`,
`def-identically-distributed-and-iid-random-variables`,
`def-measure-with-density`,
`def-multivariate-normal-law`,
`def-product-measure-on-sigma-finite-spaces`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-total-variation-distance-for-probability-laws`,
`lem-characteristic-function-of-a-multivariate-normal-law`,
`thm-continuous-mapping-theorem`,
`thm-cramer-wold-device`,
`thm-finite-and-countable-subadditivity-of-measures`,
`thm-heine-borel-rn`,
`thm-identity-theorem-holomorphic-functions`,
`thm-influence-curve-representers`,
`thm-khinchin-weak-law-for-iid-integrable-variables`,
`thm-l1-convergence-implies-uniform-integrability`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-measure-uniqueness-on-a-sigma-finite-pi-system`,
`thm-multivariate-iid-central-limit-theorem`,
`thm-prokhorov-tightness-theorem-on-polish-spaces`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
`thm-slutsky-for-real-random-variables`,
`thm-tonelli-theorem-for-sigma-finite-product-spaces`,
`thm-uniqueness-of-a-law-from-its-characteristic-function`,
`def-asymptotically-linear-estimator-and-influence-function`,
`def-lan-experiment`,
`def-qmd-path`,
`def-regular-estimator-under-local-alternatives`,
`thm-le-cam-third-lemma`,
`def-dqm-submodel-through-a-law`,
`thm-dqm-score-mean-zero`,
`thm-qmd-implies-lan-for-iid`,
`def-pathwise-differentiable-functional`, and
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

The full proof sections of `thm-le-cam-third-lemma`,
`thm-dqm-score-mean-zero`, `thm-qmd-implies-lan-for-iid`, and
`thm-influence-curve-representers` were also checked where their conclusions
were used. The complete statement and proof of the published Fubini supplier
were opened for the repair below.

## Review and edit

The seven assigned item claims and proofs preserve their stated domains and
hypotheses. The one-sided DQM proof controls both singular mass and the
zero-density set before forming its normalized proxy. The two convolution
arguments use the required common-limit, positive-information, target-shift,
and dense-submodel hypotheses. The mean counterexample uses a finite-mean,
infinite-variance law and bounded centered score tilts; the sample-mean example
has finite variance and verifies regularity along its stated paths.

I repaired one omission in `items/lem-finite-dimensional-functional-convolution-bound.md`,
Proof step 6.1. That step identifies a complex-valued joint characteristic
function under a product law. The existing product-measure and Tonelli
dependencies cover the product construction and nonnegative integrands, but
do not by themselves state the needed Fubini conclusion for this complex
integrand. I added the published
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` dependency and
made the hypothesis explicit: the integrand is bounded, and hence belongs to
L1 under the product probability; Fubini then factors the integral into the
marginal characteristic functions. Step 5.1 supplies the matching
factorization for the actual joint law.

I mirrored the new dependency in
`research/mathematical-statistics-foundations-37-batch-30.pages.json` and added
the exact supplier quotation and step-6 derivation input to
`research/mathematical-statistics-foundations-37-batch-30.proof-contracts.json`.
The item had no `verification.judge` record to remove.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-finite-dimensional-functional-convolution-bound.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-dimensional-functional-convolution-bound.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-finite-dimensional-functional-convolution-bound.md` — 1 item, 6 steps, 0 defects.

## External source checks

- A. W. van der Vaart, *Semiparametric Statistics*, author-hosted full PDF: <https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf>. I checked Lecture 2, Theorem 2.7 (convolution, printed p. 17), Lemma 2.9 (regular efficient estimators and their influence expansion, printed p. 17), Example 2.11 (empirical mean, printed p. 19), and Lecture 4, Theorem 4.12 and its proof (printed pp. 43–45). These support the cited efficiency and convolution context; the assigned carriers supply their local arguments.
- Edward H. Kennedy, “Semiparametric theory,” arXiv:1709.06418v1: <https://arxiv.org/pdf/1709.06418>. Section 3, PDF p. 3, states the asymptotic-linear expansion and its CLT limit; Sections 4–5, PDF pp. 4–6, discuss tangent spaces, influence curves, and the efficiency bound.
- John Duchi, *A few notes on contiguity, asymptotics, and local asymptotic normality*: <https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf>. I checked §2, Definition 2.1 and the QMD-family example, PDF pp. 8–11, and §4.3.1, PDF pp. 19–20, including Lemma 4.2 on QMD and LAN and the bounded-score tilt construction.
- Peter Bartlett, *Theoretical Statistics*, Lecture 22: <https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf>. PDF pp. 8–11 give the QMD definition and the iid LAN expansion used as background for the one-sided local proof.
- The repair supplier `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` states Fubini for complex L1 functions on sigma-finite product spaces; its proof reduces to Tonelli on the positive and negative parts and linearity of the integral. The assigned use satisfies its L1 hypothesis because the product measure is a probability and the characteristic-function integrand is bounded.

## Page verdicts

- `semiparametric-efficiency-and-regular-estimation`: **pass**. Its summary matches the asymptotic-normality result, the regular asymptotically linear bound, and the separately hypothesized general convolution route. It does not claim that either lower bound produces an attaining estimator.
- `semiparametric-efficiency-and-regular-estimation-examples`: **pass**. Its summary accurately describes finite-variance sample-mean attainment and the finite-mean, infinite-variance counterexample.

## Unedited defects and blockers

No confirmed defect remains in an out-of-scope dependency or assigned page. No withdrawal is proposed. There is no mathematical blocker.

## Coverage note

All assigned item bodies and proofs, both assigned pages, their three page prerequisites, and the direct dependency interfaces listed above were reviewed. The full transitive closure of upstream supplier proofs was not independently re-audited; the four listed in-run supplier proofs and the new published Fubini supplier were checked in full where their arguments were material to this batch.
