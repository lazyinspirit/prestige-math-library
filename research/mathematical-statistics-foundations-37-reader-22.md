# Step 3a reader report — batch 22

## Scope and opened inventory

Run `mathematical-statistics-foundations-37`, batch `22`. The autopilot state
reported the run as active at `3a-read`; no reader result for batch 22 was
present. The worktree already contained changes from other run participants;
those were preserved.

Assigned pages opened:

- `library/mathematical-statistics/likelihood-asymptotics-wald-score-and-likelihood-ratio.md`
- `library/mathematical-statistics/likelihood-asymptotics-wald-score-and-likelihood-ratio-examples.md`

All eight assigned items were read in dependency order:

1. `def-qmd-path`
2. `lem-parametric-qmd-score-has-mean-zero`
3. `def-wald-score-likelihood-ratio-statistics`
4. `thm-regular-mle-asymptotic-linearity-and-normality`
5. `thm-wald-score-likelihood-ratio-asymptotic-chi-square`
6. `cor-wald-score-lr-asymptotic-equivalence`
7. `ex-normal-mean-exact-likelihood-calibration`
8. `cex-boundary-null-has-nonstandard-lr-limit`

The five required page summaries were also opened:
`fisher-information-and-finite-sample-information-bounds`,
`asymptotic-convergence-consistency-and-identification`,
`m-and-z-estimation-and-uniform-laws`,
`delta-method-and-asymptotic-normality`, and
`gaussian-orthogonal-decomposition-and-quadratic-forms`.

Dependency items opened to check the assigned statements and proofs:

- Current-run draft suppliers: `def-parametric-statistical-model`,
  `def-dominated-statistical-experiment`, `def-score-and-fisher-information`,
  `def-chi-square-law`, `def-op-and-little-op-stochastic-bounds`,
  `thm-vector-stochastic-order-calculus`, and `thm-vector-slutsky`.
- Further definition context: `def-statistical-experiment`,
  `def-likelihood-density`, and `def-consistency-in-probability`.
- Published suppliers: `def-measure-with-density`, `def-axiom-of-choice`,
  `cor-cauchy-schwarz-inequality-for-l-two`,
  `thm-integration-against-a-density`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`,
  `thm-dominated-convergence`,
  `thm-chebyshev-markov-inequality-for-the-integral`,
  `thm-multivariate-iid-central-limit-theorem`,
  `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`,
  `lem-characteristic-function-of-a-normal-law`,
  `lem-characteristic-functions-under-affine-maps-and-independent-sums`,
  `thm-uniqueness-of-a-law-from-its-characteristic-function`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-ftc-second-part`, `lem-gaussian-even-moment-bound-for-brownian-increments`,
  `thm-continuous-implies-integrable`,
  `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
  and `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`.

The batch manifest, coverage evidence, cross-batch dependency record, notes,
dispatch prompt, and all eight proof-contract entries were consulted as
navigation and evidence, not as verdicts. No unrelated run reports were used
to decide the mathematics.

## Review findings and edits

The supplied QMD definition is an $L^2(\mu)$ square-root-density expansion
with a supplied density family and does not infer pointwise differentiability.
The local mean-zero lemma correctly obtains centering by expanding the
normalized square-root densities and using Cauchy–Schwarz. The regular-MLE
theorem keeps its square-integrable log-density envelope, consistency, exact
maximization, and positive-information hypotheses explicit; its local
likelihood and score expansions are proved or stipulated where used. The
calibration theorem profiles the stated quadratic form and assumes the local
likelihood and score expansions rather than deriving them from QMD alone.
The corollary follows by subtracting the common $T_n+o_P(1)$ expansions.

The normal-mean example proves its finite-sample identities and exact null law.
The boundary counterexample computes $L_n=(Z_+)^2$ and its
$\tfrac12\delta_0+\tfrac12\chi_1^2$ law; this correctly separates a boundary
of the null from a boundary of the full parameter space. No mathematical
defect was found in the remaining assigned statements, constructions,
computations, or proofs.

One definition ambiguity was repaired in the in-flight assigned item
`def-wald-score-likelihood-ratio-statistics`: “full local model” is now “full
parameter space $\Theta$,” and the restricted maximizer is explicitly over
$\Theta_0$. The preceding definition of $L_n$ uses global suprema over these
sets, so the clarification makes the maximizer notation match that formula.
The three assigned consumers—the calibration theorem, normal-mean example,
and boundary counterexample—were checked: each uses an exact global
maximizer, while the local chart is used only for the regular equality-null
coordinates.

The affected proof contract was synchronized: its endpoint and choice evidence
now matches the definition, and consumer citation quotations match the edited
definition. Review of the finite-check contract entries also found stale
step locators: the normal example's completion-of-squares check now points to
step 4.1, and the boundary example's exact-law check points to steps 2.2 and
4.1. No `verification.judge` record was present on the edited definition.

No confirmed defect remained that this reader could not edit. In particular,
no in-run or published dependency finding is being routed.

## Source checks

- Peter Bartlett, *Theoretical Statistics*, Lecture 22, PDF pp. 8–10:
  QMD definition, score-centering consequence, and QMD-to-local-likelihood
  statement; pp. 1–3: normal-location likelihood setup.
  <https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf>
- Peter Bartlett, *Theoretical Statistics*, Lecture 23, PDF p. 14,
  “Maximum likelihood,” theorem: QMD, nonsingular information, a Lipschitz
  log density, and a consistent MLE imply asymptotic normality.
  <https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf>
- Peter Bartlett, *Theoretical Statistics*, Lecture 26, PDF pp. 1–2:
  global likelihood-ratio maximization; pp. 11–16: composite-null quadratic
  limit and chi-square calibration; p. 19: the one-sided boundary limit
  $(Z_+)^2$.
  <https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf>
- Yen-Chi Chen, STAT 581 Chapter 3, lines 181–190: MLE asymptotic linearity
  under QMD, nonsingular information, a square-integrable local log-Lipschitz
  envelope, and consistency. Chapter 4, lines 64–76: score statistic and
  comparison of the three likelihood-based tests.
  <https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html>
  <https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html>

The assigned examples also cite Stanford Stats 300B lecture notes. Their PDF
URLs returned an internal error in the web viewer, so I did not rely on those
secondary notes; the example calculations were verified directly and against
the accessible Bartlett and Chen passages above.

## Validation and page verdicts

For the changed item, `node tools/tsx-run.mjs tools/reflow.mts
items/def-wald-score-likelihood-ratio-statistics.md` reported unchanged;
`node tools/tsx-run.mjs tools/precheck.mts
items/def-wald-score-likelihood-ratio-statistics.md` reported 0 checked and
0 failing; and the final `node tools/proof-layout.mjs
items/def-wald-score-likelihood-ratio-statistics.md` reported 1 item, 0 steps,
0 defects.

- **A page — `likelihood-asymptotics-wald-score-and-likelihood-ratio`: pass.**
  The summary matches the regular-MLE and interior-null results and keeps
  asymptotic calibration separate from the boundary example.
- **B page — `likelihood-asymptotics-wald-score-and-likelihood-ratio-examples`: pass.**
  The exact normal calibration and the one-sided boundary mixture are both
  accurately summarized.

Blocker: none. The review covers all assigned items, both assigned pages,
their direct item dependencies, and the five required page summaries; it is not
a whole-corpus or unrelated transitive-supplier audit.
