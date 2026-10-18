---
id: lem-euler-pressure-solver-bracket-and-termination
kind: lemma
title: "The safeguarded Euler pressure solver preserves its root bracket and terminates"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - alg-safeguarded-euler-star-pressure-solver
  - thm-euler-star-pressure-root-and-vacuum-criterion
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–93: iterative pressure root context; the invariant and finite-budget guarantees are proved here"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 138–141 / PDF pp. 5–7: Newton iteration context"
---

## Statement

For admissible non-vacuum input data, the algorithm in
[[alg-safeguarded-euler-star-pressure-solver]] terminates after at most $N$
outer iterations and returns either a singleton exact root, a bracket
containing the unique $p_*$ from [[thm-euler-star-pressure-root-and-vacuum-criterion]],
or an explicit budget-exhausted status with that root still bracketed. After
$k$ completed non-exact iterations the bracket width is at most
$(3/4)^kP$. Thus any budget satisfying $(3/4)^N P\le\tau$ returns a
pressure-bracket status. No floating-point or nonlinear convergence guarantee
is asserted.

## Facts & Assumptions

**Given:** An admissible non-vacuum Euler pressure problem, positive tolerance, finite budget, and the specified exact-arithmetic primitives.

[F1] [[thm-euler-star-pressure-root-and-vacuum-criterion]]: there is a unique $p_*>0$ with $\Phi(p_*)=0$, initially bracketed by $[0,P]$ with $\Phi(0+)<0<\Phi(P)$; $\Phi$ is strictly increasing.

[F2] [[alg-safeguarded-euler-star-pressure-solver]]: each query is either the midpoint or a Newton iterate in the central quarter, and the endpoint with the same residual sign is replaced.

[F3] [[alg-finite-budget-newton-for-vector-residuals]]: on an open domain with a $C^1$ residual, finite budget $1$ returns one of its declared statuses and a last valid iterate.

[F4] [[alg-newton-correction-for-vector-residuals]]: for a scalar residual, the correction procedure evaluates a one-by-one determinant and solves the single linear equation using Cramer's rule.

[A1] The algorithm's exact-arithmetic model assumes each scalar evaluation, comparison, square root, real power on a positive argument, and arithmetic operation returns in finite time.

## Proof

1.1 At $k=0$, [F2] initializes $[0,P]$ with $\Phi(0+)<0<\Phi(P)$ by [F1], so it contains $p_*$. This establishes the initial bracket. [given, F1, F2, base]

1.2 Assume the current bracket contains $p_*$ with nonpositive left and nonnegative right residuals. A midpoint query lies in its central half; any accepted Newton query is in the central quarter, and all other Newton outcomes use the midpoint. By strict increase in [F1], a negative query residual leaves the root to its right and a positive one to its left, so the corresponding endpoint replacement preserves the bracket; an exact zero returns the singleton. Every nonexact query is at least one quarter of the old width from either endpoint, so the new width is at most $3/4$ of the old width. [given, F1, F2, IH, algebra]

2.1 Induction on completed nonexact queries using the base step 1.1 and the preserved-bracket transition in step 1.2 gives containment and width at most $(3/4)^kP$. Each outer pass calls the Newton procedure with budget $1$, so [F3] supplies at most one correction and finitely many scalar residual evaluations; the one-dimensional correction is finite by [F4], and all primitive operations terminate by [A1]. At most $N$ passes therefore return one of the defined statuses. [step 1.1, step 1.2, F3, F4, A1, IH, induction]

3.1 If $(3/4)^N P\le\tau$, the width test in [F2] succeeds no later than the final check, so the algorithm returns a pressure bracket unless it already returned an exact singleton. Otherwise a budget-exhausted result retains the bracket invariant from step 2.1. [step 2.1, F1, F2, discharge-induction] ∎
