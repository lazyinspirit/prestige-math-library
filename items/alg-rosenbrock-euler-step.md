---
id: alg-rosenbrock-euler-step
title: "Finite-precision one-stage Rosenbrock step with residual status"
kind: algorithm
status: published
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

**Input:** a dimension $d\ge1$, an ODE field $f:D\to\mathbb R^d$ on the open domain $D\subseteq\mathbb R\times\mathbb R^d$, $(t_n,y_n)\in D$, $h>0$, $\gamma>0$, a finite real Jacobian matrix $\widetilde J_n\in\mathbb R^{d\times d}$, a residual tolerance $\varepsilon\ge0$, a unit roundoff $u>0$ with $du<1$, the selected stored finite set $\mathbb F$ of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], a terminating field-evaluation routine that returns either the exact value $f(t,y)$ or `evaluation-failure` for each requested $(t,y)\in D$, a terminating partial exact-storage check `store`, and a terminating certificate evaluator `evaluator` meeting the input contract of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]. For an exact real scalar, vector, or matrix $v$, `store(v)` returns $v$ if every entry belongs to $\mathbb F$ and returns `unavailable` otherwise; it does not round. Apply it before each factorization call.

1. Form $M=I_d-\gamma h\widetilde J_n$ by exact outer arithmetic and set $M_s:=\operatorname{store}(M)$. If storage returns `unavailable`, return $(y_n,\texttt{representation-unavailable})$. Call `factor(M_s,u,evaluator)` of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]. If it returns a factorization failure status, return $(y_n,\text{that status})$; otherwise retain the returned factor object.
2. Request the field evaluation at $(t_n,y_n)$. If it returns `evaluation-failure`, return $(y_n,\texttt{field-evaluation-failure})$. Otherwise set $b=f(t_n,y_n)$ to the returned exact value and set $b_s:=\operatorname{store}(b)$. If storage returns `unavailable`, return $(y_n,\texttt{representation-unavailable})$. Call the retained factor object's `solve(b_s,\varepsilon)`. If the solve status is not `success`, return $(y_n,\text{that status})$ and retain its residual bound for diagnosis.
3. If the solve returns $k_n$ and a certified residual upper bound $\rho_n\le\varepsilon$, return $(y_n+h k_n,\texttt{success},\rho_n)$.

The name Rosenbrock–Euler applies when $\gamma=1$. The exact-arithmetic stage equation is $M k_n=f(t_n,y_n)$, exactly the map of [[def-rosenbrock-euler-step-map]]. Its residual $Mk_n-f(t_n,y_n)$ is the update residual of the linear stage equation in the sense of [[def-implicit-residual-and-algebraic-error-units]]. For this mixed-arithmetic specification, evaluations and outer affine combinations are exact real operations and every matrix/RHS passed to factorization or solve must pass `store`; only the factorization, triangular solve, and residual dot products use rounded operations, while residual-bound formation is delegated to the terminating certificate evaluator. A full hardware-rounding theorem for outer operations needs additional certified evaluation and update-error terms. This implementation has one shifted-matrix factorization and one stage solve. It does not turn a small residual into a forward-error claim without an inverse bound.
