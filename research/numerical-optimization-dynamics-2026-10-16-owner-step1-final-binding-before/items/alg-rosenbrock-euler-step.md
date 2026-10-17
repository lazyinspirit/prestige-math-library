---
id: alg-rosenbrock-euler-step
title: "Finite-precision Rosenbrock–Euler step with residual status"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-rosenbrock-euler-step-map
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
  - def-implicit-residual-and-algebraic-error-units
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
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

**Input:** an ODE field $f:D\to\mathbb R^d$ on the open domain $D\subseteq\mathbb R\times\mathbb R^d$, $(t_n,y_n)\in D$, $h>0$, $\gamma>0$, a finite real Jacobian matrix $\widetilde J_n\in\mathbb R^{d\times d}$, a residual tolerance $\varepsilon\ge0$, the selected stored finite set $\mathbb F$ of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], a terminating field-evaluation routine and a terminating partial exact-storage check, and the terminating certified-norm routine of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]. For an exact real scalar, vector, or matrix $v$, `store(v)` returns $v$ if every entry belongs to $\mathbb F$ and returns `unavailable` otherwise; it does not round. Apply it before each QR call.

1. Form $M=I_d-\gamma h\widetilde J_n$ by exact outer arithmetic and set $M_s:=\operatorname{store}(M)$. If storage returns `unavailable`, return $(y_n,\texttt{representation-unavailable})$. Factor $M_s$. If factorization reports `singular-factor` or `range-failure`, return $(y_n,\text{that status})$.
2. Evaluate $b=f(t_n,y_n)$ exactly and set $b_s:=\operatorname{store}(b)$. If storage returns `unavailable`, return $(y_n,\texttt{representation-unavailable})$. Call the factor object's `solve(b_s,\varepsilon)`. If the solve status is not `success`, return $(y_n,\text{that status})$ and retain its residual bound for diagnosis.
3. If the solve returns $k_n$ and a certified residual upper bound $\rho_n\le\varepsilon$, return $(y_n+h k_n,\texttt{success},\rho_n)$.

The exact-arithmetic stage equation is $M k_n=f(t_n,y_n)$, exactly the map of [[def-rosenbrock-euler-step-map]]. Its residual $Mk_n-f(t_n,y_n)$ is the update residual of the linear stage equation in the sense of [[def-implicit-residual-and-algebraic-error-units]]. For this mixed-arithmetic specification, evaluations and outer affine combinations are exact real operations and every matrix/RHS passed to QR must pass `store`; only the factorization, triangular solve, and residual check use rounded operations. A full hardware-rounding theorem for outer operations needs additional certified evaluation and update-error terms. This implementation has one shifted-matrix factorization and one stage solve. It does not turn a small residual into a forward-error claim without an inverse bound.
