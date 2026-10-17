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
failure, return that status. On a solution return, retain its step $p$, full
QP multiplier vectors $(\nu^{QP},\lambda^{QP})$, retained equality basis
$E$, and selected inequality support $J$. The stacked rows $Dh_E(x)$ and
$Dg_J(x)$ are independent, and the selected rows satisfy
$h_E(x)+Dh_E(x)p=0$ and $g_J(x)+Dg_J(x)p=0$. For the SOC call only, form the auxiliary $C^2$ program on the same domain $U$, with the same objective $f$ and inequality map $g$, and equality map $h_E$; an empty $E$ means no equality constraints in that auxiliary program. This is a specified correction model, not a claim of nonlinear equivalence to the original program. All merit values and predictions below use the original full $h$ and $g$. Given parameters $\rho_0>0$,
$\gamma>1$, $\beta\in(0,1)$, $\sigma\in(0,1)$ and finite integer caps
$R,J_{\max}\ge1$, keep the resulting step $p$ fixed, initialize flags
$P_{\rm pos}=\mathrm{false}$ and $P_{\rm dom}=\mathrm{false}$, and perform
attempts $r=0,\ldots,R-1$ with $\rho_r=\rho_0\gamma^r$:

1. Compute $D_r=D_{\rho_r}(x,p)$ from
   [[def-sqp-l1-exact-penalty-merit]]. If $D_r\le0$, go to the next penalty.
   Otherwise set $P_{\rm pos}=\mathrm{true}$.
2. If $x+p\in U$, call
   [[alg-sqp-second-order-correction]] for this auxiliary program, with
   all its equality constraints $h_E$ and selected inequality constraints $g_J$,
   so $c_A=(h_E,g_J)$. If it returns a corrected displacement $d$ and $x+d\in U$, set
   $P_{\rm dom}=\mathrm{true}$ and test the original full merit
   $\psi_{\rho_r}(x+d)\le\psi_{\rho_r}(x)-\sigma D_r$. If it passes,
   return `accepted-soc` with $x+d$, $p$, $(\nu^{QP},\lambda^{QP})$, $E$,
   and $J$. If $x+p\notin U$, skip the correction call.
3. For $j=0,\ldots,J_{\max}-1$, set $t_j=\beta^j$. Whenever $x+t_jp\in U$,
   set $P_{\rm dom}=\mathrm{true}$ and test
   $$\psi_{\rho_r}(x+t_jp)\le\psi_{\rho_r}(x)-\sigma t_jD_r.$$
   On the first passing test, return `accepted` with $x+t_jp$, $t_j$,
   $p$, $(\nu^{QP},\lambda^{QP})$, $E$, and $J$.

After all attempts, if $P_{\rm pos}$ is false, return
`nonpositive-predicted-decrease-budget`. If $P_{\rm pos}$ is true but
$P_{\rm dom}$ is false, return `domain-exit`: no SOC or ordinary trial could
be evaluated in $U$. Otherwise return `line-search-budget-exhausted`. These
finite tests do not guarantee acceptance or convergence.

## Facts & Assumptions

**Given:** The smooth program, an exact QP subproblem result, merit
parameters in the stated ranges, and finite positive caps.

[F1] [[alg-sqp-exhaustive-active-set-qp-solve]] returns a finite exact
subproblem status and, on success, a feasible linearized step, full QP
multiplier vectors, and the independent row sets $E$ and $J$.

[F2] [[def-sqp-l1-exact-penalty-merit]] defines $D_\rho$, $\psi_\rho$,
and the Armijo inequality used by the tests.

[F3] [[alg-sqp-second-order-correction]] returns the corrected displacement
$p+w$, or a failure status, for all equality constraints and the specified
active inequalities of its input program. Here that program is the auxiliary
one with equality map $h_E$; the selected active map is $(h_E,g_J)$.

[A1] $\rho_0>0$, $\gamma>1$, $0<\beta,\sigma<1$, and the integer caps
$R,J_{\max}$ are positive and finite.

## Proof

1.1 On a successful QP return, the step is fixed before the penalty loop. For each index $r$ the positive scalar $\rho_r$ is defined, and [F2] defines a finite $D_r$ at $x$. Thus the branch $D_r\le0$ or $D_r>0$ is well-defined. [given, A1, F1, F2, algebra]

1.2 Fix the returned row sets $E,J$. The auxiliary program is $C^2$ on $U$ because it retains the original objective, inequalities, and selected equality components. By [F1], its active Jacobian $A=D(h_E,g_J)(x)$ has full row rank and $(h_E,g_J)(x)+Ap=0$. Thus, whenever $x+p\in U$, the SOC call satisfies [F3]'s input conditions, including all equalities of that auxiliary program; its zero-row and correction-failure returns remain available. No feasibility conclusion for omitted original nonlinear equalities is used: [F2]'s tests still evaluate their full merit contribution. [given, F1, F2, F3, algebra]

2.1 On each positive-prediction attempt, the routine performs at most one correction call and at most $J_{\max}$ ordinary trial tests; each in-domain test either returns its accepted record or advances a finite loop. There are at most $R$ attempts, so the total number of correction calls and ordinary tests is finite. The flags distinguish no positive prediction, positive prediction with no in-domain trial, and in-domain trials that all fail the Armijo test, giving respectively the nonpositive-prediction, domain-exit, and line-search-budget-exhausted statuses. No step asserts a passing trial or an asymptotic convergence property. [given, A1, F2, F3, step 1.1, step 1.2, algebra] ∎
