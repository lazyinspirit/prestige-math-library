---
id: alg-rkc1-chebyshev
kind: algorithm
title: "First-order stabilized explicit Runge–Kutta–Chebyshev step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-chebyshev-polynomials-first-and-second-kind
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.1"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Definition

This algorithm takes an autonomous vector field $f$ on an open state domain $V\subseteq\mathbb R^d$, an admitted initial state $y$, a step $h>0$, an integer stage count $s\ge1$, and an evaluator that returns either $f(u)$ or an evaluation-failure status. In the exact mathematical model the evaluator returns $f(u)$ at every $u\in V$; the failure status records only an unavailable numerical evaluation. Define stage abscissae $c_j=j^2/s^2$ for $0\le j\le s$. Set $Y_0=y$. Before each query check that its stage state belongs to $V$; if it does not, return domain-failure with that stage index. If the evaluator reports failure, return evaluation-failure with that stage index. Query at $Y_0$ and, on success, set $Y_1=Y_0+(h/s^2)f(Y_0)$. For $j=2,\ldots,s$, query at $Y_{j-1}$ and, on success, set
$$Y_j=2Y_{j-1}-Y_{j-2}+\frac{2h}{s^2}f(Y_{j-1}).$$
If the final state $Y_s$ is outside $V$, return output-domain-failure; otherwise return success with state $Y_s$.

For a nonautonomous field $f:D\to\mathbb R^d$ on an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$, input an admitted pair $(t,y)\in D$ and an evaluator that returns either $f(\tau,u)$ or evaluation-failure. In the exact mathematical model it returns $f$ at every point of $D$. Use the same state recurrence, querying at the declared stage times: query at $(t+c_0h,Y_0)=(t,y)$ before setting $Y_1=Y_0+(h/s^2)f(t,Y_0)$; for $j=2,\ldots,s$, query at $(t+c_{j-1}h,Y_{j-1})$ before setting
$$Y_j=2Y_{j-1}-Y_{j-2}+\frac{2h}{s^2}f(t+c_{j-1}h,Y_{j-1}).$$
Before each query, check that its time-state input lies in $D$; return domain-failure with that stage index if it does not, or evaluation-failure with that index if the evaluator fails. After the stages, return output-domain-failure if $(t+h,Y_s)\notin D$; otherwise return success with $(t+h,Y_s)$. The scalar linear stability polynomial is established separately.

The stability analysis uses $T_s$ and $U_s$ from [[def-chebyshev-polynomials-first-and-second-kind]]; this item defines the executable recurrence and does not itself assert an order or stability theorem.

