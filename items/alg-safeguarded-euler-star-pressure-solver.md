---
id: alg-safeguarded-euler-star-pressure-solver
kind: algorithm
title: "Finite-budget safeguarded Newton–bisection for Euler star pressure"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-euler-star-pressure-response
  - thm-euler-star-pressure-root-and-vacuum-criterion
  - alg-finite-budget-newton-for-vector-residuals
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–93: pressure root solved iteratively; the bracket and status guarantees below are supplied locally"
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 138–141 / PDF pp. 5–7: finite Newton corrections and local iteration context"
---

## Definition

Assume exact-real arithmetic in which each arithmetic operation, comparison,
square root, real power on a positive argument, scalar residual evaluation,
and call to the one-step Newton procedure terminates. **Inputs:**
admissible primitive states $(\rho_L,u_L,p_L)$ and $(\rho_R,u_R,p_R)$, gas
constant $\gamma>1$, pressure-width tolerance $\tau>0$, and iteration budget
$N\in\mathbb N_0$. **Outputs:** `inadmissible-input`, `vacuum`,
`pressure-bracket` with an interval, or `budget-exhausted` with an interval.
The procedure never treats a nonzero residual tolerance as an exact root.

1. If $\rho_L,\rho_R,p_L,p_R$ are not all positive or $\gamma\le1$, return
   `inadmissible-input` before evaluating a wave response.
2. Compute $\Phi(0+)$ from
   [[thm-euler-star-pressure-root-and-vacuum-criterion]]. If $\Phi(0+)\ge0$,
   return `vacuum`.
3. Otherwise set the bracket $[a,b]=[0,P]$ with $P$ from that theorem. Its
   endpoint convention is $\Phi(a):=\Phi(0+)<0<\Phi(b)$.
4. For at most $N$ iterations, in this order:
   1. If $b-a\le\tau$, return `pressure-bracket` with $[a,b]$.
   2. Let $m=(a+b)/2$. Call
      [[alg-finite-budget-newton-for-vector-residuals]] on the scalar residual
      $F(p)=\Phi(p)$ over the open domain $(0,\infty)$, starting at $m$, with
      residual tolerance $0$ and update budget $1$.
   3. If Newton returns $(r,\texttt{root})$, return `pressure-bracket` with
      $[r,r]$. If it
      returns `iteration-budget-exhausted` with last iterate $q$ and
      $a+(b-a)/4\le q\le b-(b-a)/4$, use $q$ as the query. In every other
      status or when this central-quarter test fails, use $m$ as the query.
   4. Evaluate $\Phi$ at the query. If it is zero, return `pressure-bracket`
      with the singleton interval. If negative, replace $a$ by the query; if
      positive, replace $b$ by the query.
5. After the budget, return `pressure-bracket` if the width is at most $\tau$;
   otherwise return `budget-exhausted` with the current bracket.

The returned interval uses the zero lower endpoint as a limiting endpoint, not
an admissible pressure. This algorithm gives a finite status and bracket; the
separate theorem below proves its invariant and width reduction. It makes no
claim that an exhausted budget found a root.
