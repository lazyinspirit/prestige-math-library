---
id: lem-bracketing-zoom-finite-budget-checked-return
kind: lemma
title: "Bracketing and zoom terminate with a checked step or a failure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-bracketing-zoom-strong-wolfe-search
  - def-wolfe-and-strong-wolfe-conditions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 \u00a73.5, printed pp. 60\u201361 / PDF pp. 78\u201379: bracketing and zoom method context. The explicit E,Z caps and statuses are the local adaptation in alg-bracketing-zoom-strong-wolfe-search; the present finite-return and checked-step bounds are proved from that local procedure, not quoted as an identical theorem from this reference."
---

## Statement

Under the inputs of [[alg-bracketing-zoom-strong-wolfe-search]], assume all requested in-domain function and gradient evaluations terminate with real values and all prescribed comparisons are exact. The procedure terminates with its specified step or failure status. It makes at most $E$ expansion trial evaluations and at most one zoom call with at most $Z$ trial evaluations, hence at most $E+Z$ evaluated trial points. Each evaluates the objective and directional derivative at that point. Every returned step is positive, feasible, and satisfies both strong Wolfe inequalities. A domain-exit trial is not evaluated. The bound excludes the initial-point data and does not bound arithmetic work or guarantee success when a strong Wolfe step exists.

## Facts & Assumptions

**Given:** The input, evaluation and exact-comparison hypotheses of the Statement.

[F1] [[alg-bracketing-zoom-strong-wolfe-search]]: expansion starts at $a=0,t=1$, doubles $t$ only after setting $a=t$, and returns immediately after a zoom call; zoom uses midpoints and its prescribed endpoint updates, with finite budgets $E,Z$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: a positive feasible step in a descent direction is strong Wolfe exactly when it satisfies the Armijo and absolute-curvature inequalities.

## Proof

**Given:** The hypotheses of the Statement.

1.1 The initial direction check either returns failure or establishes $\phi'(0)<0$. Expansion trial parameters are positive: initially $t=1$, and later they are positive doubles. Before each doubling, $0\le a<t$; hence both possible endpoint orders passed to zoom have distinct nonnegative endpoints, at least one positive. [given, F1, induction]

2.1 A midpoint of distinct nonnegative endpoints, at least one positive, is positive and strictly between them. Replacing $b$ by that midpoint preserves distinct nonnegative endpoints. In the other update, replacing $a$ by the midpoint, either retaining $b$ or first replacing $b$ by the old $a$, also preserves those properties. Thus every zoom trial is positive, even with reversed endpoint order. [F1, step 1.1, induction, algebra]

3.1 Before any trial evaluation the domain check either returns failure or verifies feasibility. In expansion, a return of a step occurs only after the Armijo-failure branch was bypassed and the strong curvature test passed. In zoom the same two tests precede every step return. Therefore [F2] and steps 1.1–2.1 prove every returned step has the asserted properties. [F1, F2, step 1.1, step 2.1]

4.1 Each expansion pass either returns, calls zoom and returns its output, or consumes one of at most $E$ passes. Thus at most one zoom is called. Each zoom pass either returns or consumes one of at most $Z$ passes. All evaluations terminate by hypothesis; after exhaustion the specified failure is returned. There are at most $E+Z$ evaluated trial points, with the objective and directional derivative evaluated at each; domain exits consume no trial evaluation. These finite counts prove termination but imply neither an arithmetic-work bound nor successful discovery of an existing step. [given, F1, step 3.1, algebra] ∎