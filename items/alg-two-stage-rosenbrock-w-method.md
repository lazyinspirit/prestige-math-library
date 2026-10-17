---
id: alg-two-stage-rosenbrock-w-method
title: "Two-stage second-order Rosenbrock W-method with shared factorization"
kind: algorithm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
  - def-implicit-residual-and-algebraic-error-units
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
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
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Example 2.37 and Theorems 2.38–2.41, printed pp. 45–48"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44"
    - title: "Joachim Rang and Lutz Angermann, New Rosenbrock methods of order 3 for PDAEs of index 2"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700435/Equadiff_11-2005-2_46.pdf"
      locator: "§2, printed pp. 386–387: general Rosenbrock W-method stage equations"
---

## Definition

**Input:** a dimension $d\ge1$, an ODE field $f:D\to\mathbb R^d$ on the open domain $D\subseteq\mathbb R\times\mathbb R^d$, $(t_n,y_n)\in D$, $h>0$, a finite real state-Jacobian approximation $\widetilde J_n\in\mathbb R^{d\times d}$, a finite approximation $\widetilde T_n\in\mathbb R^d$ to $\partial_t f(t_n,y_n)$, stage residual tolerances $\varepsilon_1,\varepsilon_2\ge0$, a unit roundoff $u>0$ with $du<1$, the selected stored finite set $\mathbb F$ of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], a terminating field-evaluation routine `evaluate_f` that returns either the exact value $f(t,y)$ or `evaluation-failure` for each requested $(t,y)\in D$, a terminating domain-membership routine `in_domain` returning true exactly for points in $D$ and false otherwise, a terminating `store` routine, and terminating certificate evaluator `evaluator` meeting the input contract of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]. The exact-storage check returns $v$ if every entry is in $\mathbb F$ and `unavailable` otherwise; it does not round. Put
$$\alpha:=\frac{1}{2+\sqrt2}=1-\frac{1}{\sqrt2},\qquad W:=I_d-\alpha h\widetilde J_n.$$
The two-stage method is
$$W k_1=f(t_n,y_n)+\alpha h\widetilde T_n,$$
$$F_1=f\!\left(t_n+\frac h2,y_n+\frac h2k_1\right),\qquad W q_2=F_1-k_1,\qquad k_2=q_2+k_1,$$
$$y_{n+1}=y_n+h k_2.$$

The residuals $Wk_1-[f(t_n,y_n)+\alpha h\widetilde T_n]$ and $Wq_2-(F_1-k_1)$ are update residuals of their linear stage equations in the sense of [[def-implicit-residual-and-algebraic-error-units]]. The coefficient $\alpha$ and the autonomous two-stage formula are the second-order Rosenbrock formula recorded for ode23s in WIAS Example 2.37. The first-stage $\alpha h\widetilde T_n$ term specifies the nonautonomous extension used here; its order is independently established under the stated boundedness hypotheses.

1. Form $W$ by exact outer arithmetic and set $W_s:=\operatorname{store}(W)$. If storage returns `unavailable`, return $(y_n,\texttt{representation-unavailable})$. Call `factor(W_s,u,evaluator)` of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]. If it returns a factorization failure status, return $(y_n,\texttt{factorization-failure})$; otherwise retain its factor object.
2. Call `evaluate_f(t_n,y_n)`. If it returns `evaluation-failure`, return $(y_n,\texttt{input-or-representation-failure})$. Otherwise denote its returned exact value by $f_0$, form $b_1=f_0+\alpha h\widetilde T_n$ by exact outer arithmetic, and set $b_{1,s}:=\operatorname{store}(b_1)$. If storage returns `unavailable`, return $(y_n,\texttt{input-or-representation-failure})$. Call the retained factor object's `solve(b_{1,s},\varepsilon_1)`. If it is not certified, return $(y_n,\text{stage-1 status})$. Otherwise set $k_1$ to its returned vector and $\rho_1$ to its certified residual bound.
3. Call `in_domain` on $(t_n+h/2,y_n+hk_1/2)$. If it returns false, return $(y_n,\texttt{invalid-stage-domain})$. Otherwise call `evaluate_f(t_n+h/2,y_n+hk_1/2)`. If it returns `evaluation-failure`, return $(y_n,\texttt{stage-2-input-or-representation-failure})$. Otherwise set $F_1$ to the returned exact value, form $b_2=F_1-k_1$ exactly, and set $b_{2,s}:=\operatorname{store}(b_2)$. If storage returns `unavailable`, return $(y_n,\texttt{stage-2-input-or-representation-failure})$. Call the same factor object's `solve(b_{2,s},\varepsilon_2)`. If this solve is not certified, return $(y_n,\text{stage-2 status})$. Otherwise set $q_2$ to its returned vector and $\rho_2$ to its certified residual bound.
4. Set $k_2=q_2+k_1$ and return $(y_n+h k_2,\texttt{success},\rho_1,\rho_2)$ with the two certified update-residual bounds.

Where all the indicated state and time partial derivatives exist, the exact-J branch takes $\widetilde J_n=D_yf(t_n,y_n)$ and $\widetilde T_n=\partial_t f(t_n,y_n)$. The W-method branch permits any bounded matrix approximations satisfying the hypotheses of the local and global order results; it receives no scalar A/L-stability guarantee from the exact-J result. The factor matrix is the same in both stages, so the procedure performs one shifted-matrix factorization and two stage solves. For this mixed-arithmetic specification, field evaluations and outer affine combinations are exact real operations, and every matrix/RHS passed to factorization or solve must pass `store`; factorization, triangular solves, and residual dot products use the operationwise model, while residual-bound formation is delegated to the terminating certificate evaluator. A full hardware-rounding theorem for outer operations would need additional certified evaluation and update-error terms. A finite arithmetic residual is not a forward-error bound without an inverse estimate.
