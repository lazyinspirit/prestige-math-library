---
id: alg-sqp-merit-globalization-with-finite-budgets
kind: algorithm
title: "L1 merit globalization with finite penalty and backtracking budgets"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-sqp-exhaustive-active-set-qp-solve
  - def-sqp-l1-exact-penalty-merit
  - alg-sqp-second-order-correction
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §§18.5–18.6, printed pp. 543–546 / PDF pp. 561–564; L1 merit descent and SQP line search."
---

## Definition

At $x\in U$, choose a positive-definite SQP model matrix and solve the exact
quadratic subproblem by
[[alg-sqp-exhaustive-active-set-qp-solve]]. If it reports infeasibility or
failure, return that status. Given parameters $\rho_0>0$, $\gamma>1$,
$\beta\in(0,1)$, $\sigma\in(0,1)$ and integer caps $R,J\ge1$, keep the
resulting step $p$ fixed and perform attempts $r=0,\ldots,R-1$ with
$\rho_r=\rho_0\gamma^r$:

1. Compute $D_r=D_{\rho_r}(x,p)$ from
[[def-sqp-l1-exact-penalty-merit]]. If $D_r\le0$, go to the next penalty.
2. If the second-order correction of
   [[alg-sqp-second-order-correction]] returns a candidate $x+p+w\in U$,
   test $\psi_{\rho_r}(x+p+w)\le\psi_{\rho_r}(x)-\sigma D_r$. If it passes,
   return `accepted-soc` with the corrected point.
3. For $j=0,\ldots,J-1$, set $t_j=\beta^j$. Whenever $x+t_jp\in U$, test
   $$\psi_{\rho_r}(x+t_jp)\le\psi_{\rho_r}(x)-\sigma t_jD_r.$$
   On the first passing test, return `accepted` with that fraction.

If no attempt has $D_r>0$, return `nonpositive-predicted-decrease-budget`.
If some attempt has $D_r>0$ but no trial passes, return
`line-search-budget-exhausted`. Out-of-domain trials are skipped. These
finite tests do not guarantee acceptance or convergence.

## Facts & Assumptions

**Given:** The smooth program, an exact QP subproblem result, merit
parameters in the stated ranges, and finite positive caps.

[F1] [[alg-sqp-exhaustive-active-set-qp-solve]] returns a finite exact
subproblem status and, on success, a feasible linearized step.

[F2] [[def-sqp-l1-exact-penalty-merit]] defines $D_\rho$, $\psi_\rho$,
and the Armijo inequality used by the tests.

[F3] [[alg-sqp-second-order-correction]] returns a corrected point or a
failure status for the selected active constraints.

[A1] $\rho_0>0$, $\gamma>1$, $0<\beta,\sigma<1$, and the integer caps
$R,J$ are positive and finite.

## Proof

1.1 On a successful QP return, the step is fixed before the penalty loop. For each index $r$ the positive scalar $\rho_r$ is defined, and [F2] defines a finite $D_r$ at $x$. Thus the branch $D_r\le0$ or $D_r>0$ is well-defined. [given, A1, F1, F2, algebra]

2.1 On the positive branch, the routine performs at most one correction test and at most $J$ ordinary trial tests; each test either returns its listed accepted status or advances a finite loop. There are at most $R$ penalty attempts. If no attempt has positive prediction the first terminal status applies; otherwise the second applies. No step asserts a passing trial or an asymptotic convergence property. [given, A1, F2, F3, step 1.1, algebra] ∎
