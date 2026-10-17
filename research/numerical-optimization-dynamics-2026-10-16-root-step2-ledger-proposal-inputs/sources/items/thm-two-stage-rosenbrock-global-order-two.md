---
id: thm-two-stage-rosenbrock-global-order-two
title: "The selected two-stage Rosenbrock W-method has a second-order global error bound"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-two-stage-rosenbrock-w-method
  - lem-two-stage-rosenbrock-local-defect-and-residual-error
  - lem-rosenbrock-shifted-inverse-perturbation
  - def-first-order-ode-initial-value-problem-and-solution
  - def-jacobian-matrix-and-gradient
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-total-derivative-computes-directional-and-partial-derivatives
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
      locator: "§2.4, Theorem 2.38 and Remark 2.39, printed pp. 46–47"
    - title: "Joachim Rang and Lutz Angermann, New Rosenbrock Methods of Order 3 for PDAEs of Index 2"
      url: "https://www.math.ntnu.no/preprint/numerics/2005/N2-2005.pdf"
      locator: "§2, printed pp. 386–387: exact-J and arbitrary-W order conditions"
---

## Statement

Let $f:D\to\mathbb R^d$ be $C^2$ on an open time-state domain and let $y(t)$ solve $y'=f(t,y)$ on $[t_0,t_0+T]$. Fix $\alpha=1-1/\sqrt2$, $h_0>0$, and a compact convex tube $Q\subset D$ containing the exact and computed states, all stage midpoint segments, and the line segments between states compared below. Use a fixed step size satisfying $0<h\le h_0$. Assume on $Q$ that
$$
\|f\|_2\le F,\quad\|D_yf\|_2\le L,\quad\|f_t\|_2\le T_0,\quad\|D^2f\|_{\rm op}\le H,
$$
and that $\|\widetilde J(t,y)\|_2\le B_J$, $\|\widetilde T(t,y)\|_2\le B_T$, with state-Lipschitz bounds $\|\widetilde J(t,u)-\widetilde J(t,v)\|_2\le L_J\|u-v\|_2$ and $\|\widetilde T(t,u)-\widetilde T(t,v)\|_2\le L_T\|u-v\|_2$. Suppose $\|\alpha h\widetilde J(t,y)\|_2\le q<1$ for all $0<h\le h_0$ and relevant $(t,y)$; put $\kappa=(1-q)^{-1}$. Define the constants $C_1,K_1,C_F,C_K,M_2,C_r$ from [[lem-two-stage-rosenbrock-local-defect-and-residual-error]] using $h_0$ in $K_1=F+\alpha h_0\kappa C_1$, and put $C_{loc}=C_K+M_2/6$.

Use the method of [[alg-two-stage-rosenbrock-w-method]] with stage residual upper bounds $\rho_{1,n}\le R_1h$ and $\rho_{2,n}\le R_2h^2$, where $R_1,R_2$ are fixed, and assume each call returns `success`, including both field evaluations, residual certifications, and exact-storage checks. Starting from $y_0=y(t_0)$ and assuming $Nh\le T$ and all stated tube conditions hold, define
$$
G_1=F+\alpha h_0B_T,\quad K_s=\kappa G_1,
$$
$$
L_1=\kappa(L+\alpha h_0L_T)+\alpha h_0\kappa^2L_JG_1,
$$
$$
V=F+\alpha h_0B_JK_s,
$$
$$L_V=L(1+h_0L_1/2)+\alpha h_0(L_JK_s+B_JL_1),\qquad L_2=\kappa L_V+\alpha h_0\kappa^2L_JV.$$
Then the global error satisfies
$$
\|y_n-y(t_n)\|_2\le(C_{loc}+C_rR_1+\kappa R_2)T e^{L_2T}h^2\qquad(0\le n\le N).
$$
This is a conditional order-two theorem on the common tube. Its constants and assumptions permit both the exact-J branch and the bounded W-method branch; scalar A/L-stability is asserted separately only for the exact-J branch.

## Facts & Assumptions

**Given:** The exact solution, compact convex tube, bounds and Lipschitz constants, shifted inverse condition, residual budgets, and exact initial value in the Statement.

[F1] [[alg-two-stage-rosenbrock-w-method]]: the two stages use $W=I-\alpha h\widetilde J$, the midpoint field value, and one shared factorization.

[F2] [[lem-two-stage-rosenbrock-local-defect-and-residual-error]]: the exact map has local defect at most $C_{loc}h^3$, while residual perturbations change the output by at most $C_rh^2\rho_1+\kappa h\rho_2$.

[F3] [[lem-rosenbrock-shifted-inverse-perturbation]]: the difference between two shifted inverses is at most $\alpha h$ times their inverse bounds and the difference of their Jacobian matrices.

[F4] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: induced matrix norms bound vector actions and products.

[F5] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a derivative bound on a convex segment gives the corresponding Lipschitz bound between its endpoints.

[F6] [[lem-exponential-dominates-one-plus-x]]: $1+x\le e^x$ for $x\ge0$.

[F7] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: the componentwise $C^2$ assumption makes $f$ totally differentiable at each point of $Q$.

[F8] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: in the joint variable $(t,y)$, the nonzero standard time and state basis directions identify the derivative blocks with $f_t$ and $D_yf$.

[F9] [[thm-chain-rule-for-total-derivatives]]: composing $f$ with a differentiable state segment gives derivative $D_yf$ applied to the segment direction.

## Proof

**Given:** The data in the Statement.

1.1 For fixed $t$, put $W_y=I-\alpha h\widetilde J(t,y)$ and $g_y=f(t,y)+\alpha h\widetilde T(t,y)$. Then $\|g_y\|_2\le G_1$ and $k_1(y)=W_y^{-1}g_y$, so $\|k_1(y)\|_2\le K_s$. [given, F1, F4, algebra]

1.2 For $y,z$ in a state slice of $Q$, set $x(s)=y+s(z-y)$ for $0\le s\le1$. By [F7], [F9], and [F8], the curve $s\mapsto f(t,x(s))$ has derivative $D_yf(t,x(s))(z-y)$, whose norm is at most $L\|y-z\|_2$; [F5] gives $\|f(t,y)-f(t,z)\|_2\le L\|y-z\|_2$. The other two differences satisfy their assumed Lipschitz bounds. [given, F5, F7, F8, F9]

2.1 By [F3], $\|W_y^{-1}-W_z^{-1}\|_2\le\alpha h\kappa^2L_J\|y-z\|_2$. Apply this and step 1.2 to $k_1(y)=W_y^{-1}g_y$ after adding and subtracting $W_y^{-1}g_z$. The result is $\|k_1(y)-k_1(z)\|_2\le L_1\|y-z\|_2$. [given, F3, F4, step 1.2, algebra]

3.1 The midpoint state $m_y=y+(h/2)k_1(y)$ therefore satisfies $\|m_y-m_z\|_2\le(1+hL_1/2)\|y-z\|_2$. Applying [F5] along the midpoint-state segment gives $\|F_1(y)-F_1(z)\|_2\le L(1+h_0L_1/2)\|y-z\|_2$. [given, F5, step 2.1, algebra]

4.1 The algebraic identity from [F1] is $k_2(y)=W_y^{-1}v_y$, with $v_y=F_1(y)-\alpha h\widetilde J(t,y)k_1(y)$. Its norm is at most $V$. Adding and subtracting terms in the product and using steps 2.1 and 3.1 gives $\|v_y-v_z\|_2\le L_V\|y-z\|_2$. [given, F1, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Apply [F3] once more to $W_y^{-1}v_y-W_z^{-1}v_z$. Steps 4.1 and the inverse bound give $\|k_2(y)-k_2(z)\|_2\le L_2\|y-z\|_2$. Hence the exact one-step map $\Phi_h(t,y)=y+hk_2(y)$ obeys $\|\Phi_h(t,y)-\Phi_h(t,z)\|_2\le(1+L_2h)\|y-z\|_2$. [given, F3, F4, step 4.1, algebra]

6.1 At numerical state $y_n$, [F2] and the two residual budgets bound the difference between the computed output and $\Phi_h(t_n,y_n)$ by $(C_rR_1+\kappa R_2)h^3$. At exact state $y(t_n)$, [F2] with zero residual gives local defect at most $C_{loc}h^3$; the componentwise $C^2$ premise of [F2] supplies the total differentiability by [F7], and [F8] identifies its time and state derivative blocks. Insert the exact maps at the numerical and exact states and use step 5.1; the errors satisfy $e_{n+1}\le(1+L_2h)e_n+(C_{loc}+C_rR_1+\kappa R_2)h^3$. [given, F2, F7, F8, step 5.1, algebra]

7.1 Iterate step 6.1 from $e_0=0$. Each amplification factor product is at most $e^{L_2T}$ by [F6], and there are at most $T/h$ local terms. Therefore $e_n\le(C_{loc}+C_rR_1+\kappa R_2)T e^{L_2T}h^2$, proving the assertion. [step 6.1, given, F6, algebra] ∎
