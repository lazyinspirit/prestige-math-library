---
id: alg-rkc1-chebyshev
kind: algorithm
title: "First-order stabilized explicit Runge–Kutta–Chebyshev step"
status: draft
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

This algorithm takes an autonomous vector field $f$ on an open state domain $V\subseteq\mathbb R^d$, an admitted initial state $y$, a step $h>0$, and an integer stage count $s\ge1$. Define stage abscissae $c_j=j^2/s^2$ for $0\le j\le s$. Set $Y_0=y$. Before each query check that its stage state belongs to $V$; if it does not, return domain-failure with that stage index. If the right-hand-side evaluator fails, return evaluation-failure with that stage index. Query at $Y_0$ and, on success, set $Y_1=Y_0+(h/s^2)f(Y_0)$. For $j=2,\ldots,s$, query at $Y_{j-1}$ and, on success, set
$$Y_j=2Y_{j-1}-Y_{j-2}+\frac{2h}{s^2}f(Y_{j-1}).$$
If the final state $Y_s$ is outside $V$, return output-domain-failure; otherwise return success with $Y_s$ at time $t+h$.

For a nonautonomous equation $y'=f(t,y)$, apply the same algorithm to the autonomous augmented field $\widetilde f(t,y)=(1,f(t,y))$. Its time component follows the same recurrence and equals $t+c_jh$ at stage $j$, with $c_s=1$. This is the first-order undamped RKC method; its scalar linear stability polynomial is established separately.

The stability analysis uses $T_s$ and $U_s$ from [[def-chebyshev-polynomials-first-and-second-kind]]; this item defines the executable recurrence and does not itself assert an order or stability theorem.

