---
id: def-rosenbrock-euler-step-map
title: "The Rosenbrock–Euler step map with an exact or approximate Jacobian"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-invertible-euclidean-linear-map
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Example 2.35, printed p. 45"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–43"
---

## Definition

Let $D\subseteq\mathbb R\times\mathbb R^d$ be open, let $d\ge1$, and let $f:D\to\mathbb R^d$ be a vector field ([[def-first-order-ode-initial-value-problem-and-solution]]). For $(t,y)\in D$, a step size $h>0$, a parameter $\gamma>0$, and a matrix $\widetilde J\in\mathbb R^{d\times d}$, put
$$A_{\gamma,h}(\widetilde J):=I_d-\gamma h\widetilde J.$$
When this matrix is invertible, the **one-stage Rosenbrock step** uses the stage slope $k$ and update
$$A_{\gamma,h}(\widetilde J)k=f(t,y),\qquad \Phi_{\gamma,h}^{\widetilde J}(t,y):=y+hk.$$
At points where all state partial derivatives exist, the **exact-Jacobian branch** sets $\widetilde J=D_yf(t,y)$, where $D_yf$ is the Jacobian in the state variables as in [[def-jacobian-matrix-and-gradient]]. An approximate-Jacobian branch may supply a different $\widetilde J$; the equation requires the chosen shifted matrix to be invertible. The name **Rosenbrock–Euler** here refers to the case $\gamma=1$. This definition specifies one linearized step and does not say that it solves the full backward-Euler nonlinear equation.
