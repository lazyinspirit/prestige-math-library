---
id: alg-certified-exponential-euler-etd2-step
kind: algorithm
title: Certified-action implementation of exponential Euler and ETD2
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-exponential-euler-and-etd2-step-maps
  - def-certified-matvec-and-vector-arithmetic
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-logarithmic-norm-for-complex-matrices
  - def-real-exponential-function-and-e
  - lem-exponential-phi-integral-representations
  - thm-phi-recurrence-and-augmented-matrix-actions
  - alg-arnoldi-exponential-and-phi-actions
  - thm-arnoldi-exponential-action-error-bound
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§3.1, Arnoldi projection and matrix-vector product counts, PDF pp. 4–5; error estimates in §3.2 are not used as certified bounds."
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§4, implementation issues for matrix-function actions, PDF pp. 57–73, printed pp. 264–280."
verification:
  precheck: n/a
---

## Definition

**Inputs:** $T>0$, $d\ge1$, $A\in M_d(\mathbb C)$, a state $y\in\mathbb C^d$, a step $(t,h)$ with $0\le t<t+h\le T$, a method choice $E$ or $2$, a field $g$, a nonnegative state-Lipschitz bound $L$ on an admitted tube, a certified semigroup bound $\|e^{sA}\|_2\le M e^{\omega s}$ for $0\le s\le h$ with $M\ge1$ and $\omega\in\mathbb R$, finite Arnoldi budgets $1\le m_0\le d$, $1\le m_1\le d+1$, $1\le m_2\le d+2$, certified evaluation bounds for $g$, and certified vector-arithmetic error bounds. For each nonzero Arnoldi action request with matrix $B$, time $\tau\ge0$, and input $u$, the backend must certify a relation $BV_j=V_jH_j+\gamma v_{j+1}e_j^*+D+\Omega$ with $\gamma,\eta_i,\eta_{\rm orth},\eta_{\rm init},\nu_V,\epsilon_{\rm red},\eta_{\rm proj}\ge0$, $\|v_{j+1}\|_2=1$ when $\gamma>0$, $\|d_i\|_2\le\eta_i$, $\|\Omega\|_2\le\eta_{\rm orth}$, $\|u-\beta V_je_1\|_2\le\eta_{\rm init}$, $\|V_j\|_2\le\nu_V$, $\mu_2(B)\le\rho_B$ with $\rho_B\ge0$, and $\|H_j\|_2\le\rho_H$ with $\rho_H\ge0$. It must also return the reduced-action error $\epsilon_{\rm red}$ and final-projection error $\eta_{\rm proj}$ from [[alg-arnoldi-exponential-and-phi-actions]]. A missing or uncertified bound makes that action request inconclusive. In exact Arnoldi, the exact relation, initial representation, and orthonormal basis supply these bounds directly.

For any such request with positive time $\tau$, compute the full action-error bound from [[thm-arnoldi-exponential-action-error-bound]] using
$$\epsilon_{\rm act}:=e^{\rho_B\tau}\eta_{\rm init}+\beta\tau e^{\tau\max(\rho_B,\rho_H)}\left(\gamma+\sqrt{\sum_{i=1}^j\eta_i^2}+\eta_{\rm orth}\right)+\nu_V\epsilon_{\rm red}+\eta_{\rm proj}.$$
The stated bounds certify this expression; if any required quantity or its upward-rounded arithmetic certificate is missing, return inconclusive. For $k=0$, an action request $(0,v)$ calls [[alg-arnoldi-exponential-and-phi-actions]] with matrix $A$, time $h$, input $v$, index $0$, and budget $m_0$. For $k=1,2$, use the augmented-matrix construction in [[thm-phi-recurrence-and-augmented-matrix-actions]]: let $J_k$ have ones on its superdiagonal, let $e_1,e_k$ be the first and last coordinate vectors in $\mathbb C^k$, set
$$B_k(hA,v):=\begin{bmatrix}hA&ve_1^*\\0&J_k\end{bmatrix},\qquad w_k:=\begin{bmatrix}0\\e_k\end{bmatrix},$$
and call [[alg-arnoldi-exponential-and-phi-actions]] with matrix $B_k(hA,v)$, time $1$, input $w_k$, index $0$, and budget $m_k$. By [[thm-phi-recurrence-and-augmented-matrix-actions]], the top $d$ coordinates of $e^{B_k(hA,v)}w_k$ equal $\varphi_k(hA)v$. In either case compute the full action-error bound from [[thm-arnoldi-exponential-action-error-bound]] using its certified Arnoldi relation and reduced-action data, then project to the requested vector; projection to the top coordinates cannot increase the Euclidean error. If any bound required by that theorem is missing, return inconclusive. Here $\varphi_0(hA)=e^{hA}$. Set
$$B_h:=M e^{\max(\omega,0)h};$$
the integral representations in [[lem-exponential-phi-integral-representations]] give $\|\varphi_1(hA)\|_2\le B_h$ and $\|\varphi_2(hA)\|_2\le B_h/2$.

**Outputs:** a candidate next state, a nonnegative one-step action-error bound $\delta_n$, the number of matrix-vector products, and status certified, inconclusive, or invalid-input.

**Procedure:**

1. Reject a nonpositive step, invalid dimension or budget, missing semigroup/evaluation/arithmetic bound, or nonadmissible stage with invalid-input. Evaluate $g(t,y)$ as $\widetilde q_0$ with a certified error $\eta_0$. For any zero action input, return the zero vector with action-error bound zero, as specified by the zero-start branch of [[alg-arnoldi-exponential-and-phi-actions]].
2. Request $(0,y)$ and $(1,\widetilde q_0)$ by the action routine above. If either request is inconclusive, return inconclusive without accepting a step. Denote their candidates by $\widehat E y$ and $\widehat P_1$ and their bounds by $\epsilon_0,\epsilon_1$.
3. For method $E$, return the candidate $\widetilde y^+=\widehat E y+h\widehat P_1$. If $\alpha_E$ bounds the scalar/vector arithmetic error in this combination, return
$$\delta_n=\epsilon_0+h(\epsilon_1+B_h\eta_0)+\alpha_E.$$
4. For method $2$, first form the predictor candidate $\widetilde a=\widehat E y+h\widehat P_1$. If $\alpha_a$ bounds its arithmetic error, set $\eta_a:=\epsilon_0+h(\epsilon_1+B_h\eta_0)+\alpha_a$. Evaluate $g(t+h,\widetilde a)$ as $\widetilde q_a$ with a certified error $\eta_a^g$. Request $(2,\widetilde q_0)$ and $(2,\widetilde q_a)$ by the augmented-matrix action routine above; if either request is inconclusive, return inconclusive without accepting a step. With their action-error bounds $\epsilon_{20},\epsilon_{2a}$, form
$$\widetilde y^+=\widehat E y+h(\widehat P_1-\widehat P_{20}+\widehat P_{2a}),$$
where $\widehat P_{20}$ and $\widehat P_{2a}$ are the two $\varphi_2$ candidates. If $\alpha_2$ bounds the final combination arithmetic error, return
$$\delta_n=\epsilon_0+h\left(\epsilon_1+B_h\eta_0+\epsilon_{20}+\frac{B_h}{2}\eta_0+\epsilon_{2a}+\frac{B_h}{2}(L\eta_a+\eta_a^g)\right)+\alpha_2.$$
5. Return certified only when every action, field-evaluation, and arithmetic bound is finite and certified; otherwise return inconclusive and do not accept the step.

Every scalar bound computation, including the displayed $\epsilon_{\rm act}$ and $\delta_n$, is rounded upward with a certified enclosure; if its enclosure is missing or does not dominate the exact expression, return inconclusive. The direct exponential request uses at most $m_0$ products with $A$; each augmented phi request uses at most $m_k$ Arnoldi products with $B_k$, each requiring one product with $A$ plus the stated block-vector arithmetic. If all budgets are bounded by $m$, the method uses at most $2m$ products with $A$ for exponential Euler and $4m$ for ETD2, plus reduced-action and field-evaluation work. A dense implementation must report its matrix-function work and arithmetic bound through the same interface; the exact mathematical map is not a zero-cost oracle.
