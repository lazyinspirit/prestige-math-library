---
id: thm-rosenbrock-euler-global-first-order-error
title: "Rosenbrock–Euler has a first-order global error bound on a common tube"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-rosenbrock-euler-step
  - lem-rosenbrock-euler-local-defect-and-residual-error
  - lem-rosenbrock-shifted-inverse-perturbation
  - lem-rosenbrock-stage-residual-certificate
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - cor-vector-valued-ftc-and-lipschitz-bound
  - lem-exponential-dominates-one-plus-x
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Theorem 2.38 and the local-to-global error framework in Chapter 1"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44, order and bounded inverse conditions"
---

## Statement

Let $f:D\to\mathbb R^d$ be $C^2$ on an open time-state domain, and let $y(t)$ be an exact solution on $[t_0,t_0+T]$. Fix $\gamma>0$ and a compact convex tube $Q\subset D$ containing the solution, all numerical states, and all state segments used below. Assume the bounds of [[lem-rosenbrock-euler-local-defect-and-residual-error]] hold uniformly on $Q$: $F,L,M_1$, an exact-J inverse bound $\kappa_0$, an approximate-J inverse bound $\kappa_1$, and $\|\widetilde J-D_yf\|_2\le\delta$. Assume $\|\widetilde J(t,u)-\widetilde J(t,v)\|_2\le L_J\|u-v\|_2$ on each state slice of $Q$, and $\|(I-\gamma h\widetilde J(t,y))^{-1}\|_2\le\kappa_1$ for all $0<h\le h_0$ and all relevant $(t,y)\in Q$.

At each step $t_n=t_0+nh$, use the one-stage algorithm of [[alg-rosenbrock-euler-step]] with a certified stage residual upper bound $\rho_n\le R h$, for a fixed $R\ge0$, and assume its exact-storage checks succeed. Starting from $y_0=y(t_0)$, suppose the computed states and comparison segments remain in $Q$ and $Nh\le T$. Then, with
$$C_E=\gamma\kappa_0LF+\frac{M_1}{2}+\gamma\kappa_0\kappa_1\delta F, \qquad C_s=\kappa_1L+\gamma\kappa_1^2L_JFh_0.$$
the global error obeys
$$
\|y_n-y(t_n)\|_2\le (C_E+\kappa_1R)T e^{C_sT}h\qquad(0\le n\le N).
$$
Thus the method is first order on this common tube when the linear solve residuals are $O(h)$. The theorem is conditional on the stated tube and inverse bounds; it does not prove that computed states stay in the tube.

## Facts & Assumptions

**Given:** The exact solution, common tube, derivative and inverse bounds, Lipschitz Jacobian approximation, residual bounds, and exact starting value in the Statement.

[F1] [[alg-rosenbrock-euler-step]]: the stage system is $A(t,y)k=f(t,y)$ with $A(t,y)=I-\gamma h\widetilde J(t,y)$ and output $y+hk$.

[F2] [[lem-rosenbrock-euler-local-defect-and-residual-error]]: at an exact state, the step defect is at most $C_Eh^2+\kappa_1h\rho$.

[F3] [[lem-rosenbrock-shifted-inverse-perturbation]]: for two invertible shifted matrices, the inverse difference is bounded by $\gamma h$ times the two inverse norms and the Jacobian difference.

[F4] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean matrix norm bounds matrix action on vectors.

[F5] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a derivative bound on a convex segment gives the corresponding Lipschitz bound between its endpoints.

[F6] [[lem-exponential-dominates-one-plus-x]]: $1+x\le e^x$ for $x\ge0$.

[F7] [[lem-rosenbrock-stage-residual-certificate]]: a successful stage solve supplies a certified upper bound $\rho_n$ for the exact residual vector norm.

## Proof

**Given:** The data in the Statement.

1.1 Fix $t$ and $u,v$ in the state slice of $Q$. From [F1], subtract the two exact stage maps and add and subtract $A(t,u)^{-1}f(t,v)$. By [F5], $\|f(t,u)-f(t,v)\|_2\le L\|u-v\|_2$; the triangle inequality and [F4] give $\|\Phi(t,u)-\Phi(t,v)\|_2\le\|u-v\|_2+h\kappa_1L\|u-v\|_2+hF\|A(t,u)^{-1}-A(t,v)^{-1}\|_2$. [given, F1, F4, F5, algebra]

1.2 At the numerical input $y_n$, let $k_n$ be the exact solution of the shifted stage equation, let $\widehat k_n$ be the computed stage, and define $r_n=A(t_n,y_n)\widehat k_n-f(t_n,y_n)$. Then $\widehat k_n-k_n=A(t_n,y_n)^{-1}r_n$, so [F4] and [F7] bound the output perturbation by $\kappa_1h\rho_n\le\kappa_1Rh^2$. [given, F1, F4, F7, algebra]

2.1 The shifted matrices use the same $\gamma h$. Their Jacobian difference is at most $L_J\|u-v\|_2$. Apply [F3] and both inverse bounds to get $\|A(t,u)^{-1}-A(t,v)^{-1}\|_2\le\gamma h\kappa_1^2L_J\|u-v\|_2$. Since $h\le h_0$, step 1.1 implies $\|\Phi(t,u)-\Phi(t,v)\|_2\le(1+C_sh)\|u-v\|_2$. [given, F3, step 1.1, algebra]

3.1 Let $e_n=\|y_n-y(t_n)\|_2$. Insert $\Phi(t_n,y_n)$ and $\Phi(t_n,y(t_n))$ between the computed value and exact solution value. Step 2.1 bounds the middle map difference by $(1+C_sh)e_n$. [given, F1, step 2.1, algebra]

4.1 At the exact state $y(t_n)$, [F2] with zero stage residual bounds the exact map's local defect by $C_Eh^2$. Combining this with steps 1.2 and 3.1 gives $e_{n+1}\le(1+C_sh)e_n+(C_E+\kappa_1R)h^2$. [given, F2, step 1.2, step 3.1, algebra]

5.1 Iterating step 4.1 from $e_0=0$ gives $e_n\le(C_E+\kappa_1R)h^2\sum_{j=0}^{n-1}(1+C_sh)^j$. Each summand is at most $e^{C_snh}\le e^{C_sT}$ by [F6]; also $n\le T/h$. Hence $e_n\le(C_E+\kappa_1R)Te^{C_sT}h$, as claimed. [step 4.1, given, F6, algebra] ∎
