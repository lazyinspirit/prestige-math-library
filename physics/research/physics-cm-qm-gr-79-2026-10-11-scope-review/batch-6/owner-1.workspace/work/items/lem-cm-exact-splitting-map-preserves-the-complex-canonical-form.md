---
id: lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
kind: lemma
title: Hamiltonian flows and the exact splitting map preserve the complexified canonical form and the Poisson bracket
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-holomorphic-map-calculus
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-phase-domain-and-standard-symplectic-two-form
- thm-clairaut-schwarz-mixed-partials
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-matrix-product-and-identity-matrix
- def-transpose-of-a-matrix
- def-invertible-matrix-and-general-linear-group
- def-directional-and-partial-derivatives
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 2: symplectic methods have a locally Hamiltonian modified equation; the matrix identity J f''(y) symmetric, printed pages 5-6'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Section 1 and Theorem 2: the exact flow of a Hamiltonian system is symplectic and symplecticity is closed under composition, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$ and let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data as in [[def-cm-analytic-splitting-data-and-exact-splitting-map]], with $J$ the standard matrix and $\omega_{\mathbb C}$, $\{\,\cdot\,,\,\cdot\,\}$ the complexified form and bracket of [[def-cm-complex-phase-domains-and-holomorphic-maps]]. Let $F\in\{\tilde A,\tilde B\}$ and let $\varphi_F^t$ be the flow of $X_F$ as in [[lem-cm-complex-analytic-flow-existence-and-holomorphy]], on the domain where it is defined.

1. For every $(t,Z)$ in the flow domain, $\varphi_F^t$ is holomorphic near $Z$, its derivative is invertible, and
 $$D\varphi_F^t(Z)^{\mathsf T}J\,D\varphi_F^t(Z)=J.$$
2. For every $h$ and every point $Z$ where $\Psi_h$ is defined and holomorphic, $D\Psi_h(Z)$ is invertible and
 $$D\Psi_h(Z)^{\mathsf T}J\,D\Psi_h(Z)=J.$$
3. For all holomorphic $f,g$ on an open set containing $\Psi_h(Z)$,
 $$\{f\circ\Psi_h,\;g\circ\Psi_h\}(Z)=\{f,g\}\bigl(\Psi_h(Z)\bigr).$$

## Facts & Assumptions

**Given:** The analytic splitting data of [[def-cm-analytic-splitting-data-and-exact-splitting-map]]; a field $F\in\{\tilde A,\tilde B\}$ with $\lVert X_F\rVert\le M$ on $U_\rho$; the flow $\varphi^t_F$ of $X_F$; the exact splitting map $\Psi_h=\varphi_{\tilde A}^{h/2}\circ\varphi_{\tilde B}^{h}\circ\varphi_{\tilde A}^{h/2}$.

[L1] The flow is holomorphic, and holomorphic maps are $C^\infty$: the coordinate derivatives of a holomorphic map are again holomorphic ([[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] clause 3, [[lem-cm-holomorphic-map-calculus]] clause 1 and 2, [[def-cm-complex-phase-domains-and-holomorphic-maps]]).

[L2] The variational equation. Since $t\mapsto\varphi^t_F(Z)$ solves $\partial_t\varphi=X_F(\varphi)$ and both sides are $C^1$ in $(t,Z)$ by [L1], Clairaut's theorem permits exchanging the mixed partials, and the chain rule gives
 $$\partial_t\bigl(D\varphi^t_F(Z)\bigr)=DX_F\bigl(\varphi^t_F(Z)\bigr)\circ D\varphi^t_F(Z)$$
 ([[thm-clairaut-schwarz-mixed-partials]], [[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[L3] For holomorphic $H:D\to\mathbb C$, its gradient column $\nabla H$ has total derivative $D(\nabla H)(Z)=\operatorname{Hess}H(Z)=\bigl(\partial_{z_k}\partial_{z_l}H(Z)\bigr)_{k,l}$, a complex-symmetric matrix, and $DX_H=J\operatorname{Hess}H$ because $X_H=J\nabla H$ ([[lem-cm-holomorphic-map-calculus]] clause 2, [[thm-clairaut-schwarz-mixed-partials]], [[def-cm-complex-phase-domains-and-holomorphic-maps]]).

[L4] Matrix algebra: $J^{\mathsf T}=-J$, $J^2=-I_{2d}$, hence $J^{\mathsf T}J=I_{2d}$; for invertible $A$, the identity $A^{\mathsf T}JA=J$ is equivalent to $AJA^{\mathsf T}=J$; and products of matrices satisfying the identity satisfy it again ([[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]]).

[L5] Bracket matrix identity: for holomorphic $f,g$, $\{f,g\}=(\nabla f)^{\mathsf T}J\nabla g$ ([[lem-cm-holomorphic-map-calculus]] clause 2).

## Proof

**Proof technique:** direct; differentiate the matrix identity along the flow with the variational equation, then compose and rewrite the bracket.

1.1 The derivative of the matrix identity along the flow. Fix $(Z,t)$ in the flow domain and put $A(\tau):=D\varphi^\tau_F(Z)$. By [L2], $A'(\tau)=DX_F(\varphi^\tau_F(Z))A(\tau)$, and by [L3], $DX_F=J\operatorname{Hess}F$ with $\operatorname{Hess}F$ symmetric. Then $$\frac{d}{d\tau}\bigl(A(\tau)^{\mathsf T}JA(\tau)\bigr)=A^{\mathsf T}\bigl[(J\operatorname{Hess}F)^{\mathsf T}J+J(J\operatorname{Hess}F)\bigr]A= A^{\mathsf T}\bigl[\operatorname{Hess}F^{\mathsf T}J^{\mathsf T}J+J^2\operatorname{Hess}F\bigr]A=0,$$ using $J^{\mathsf T}J=I$, $J^2=-I$ and $\operatorname{Hess}F^{\mathsf T}=\operatorname{Hess}F$ ([L4]). Since the expression is continuous in $\tau$ and has zero derivative on the connected flow interval, it equals its value at $\tau=0$, namely $I^{\mathsf T}JI=J$. Thus $D\varphi^t_F(Z)^{\mathsf T}JD\varphi^t_F(Z)=J$. [given, L1, L2, L3, L4, algebra]

2.1 Invertibility. The flow has a two-sided inverse $\varphi^{-t}_F$ ([[lem-cm-complex-analytic-flow-existence-and-holomorphy]], clause 3), so the chain rule gives $D\varphi^{-t}_F(\varphi^t_F(Z))\circ D\varphi^t_F(Z)=I$: the derivative is invertible with inverse $D\varphi^{-t}_F(\varphi^t_F(Z))$, and the identity of step 1.1 transfers to $AJA^{\mathsf T}=J$ by [L4]. [given, step 1.1, L4]

3.1 Composition. The chain rule gives $D\Psi_h(Z)=A_1A_2A_3$ with $A_1=D\varphi_{\tilde A}^{h/2}$ at $\varphi_{\tilde B}^h(\varphi_{\tilde A}^{h/2}(Z))$, $A_2=D\varphi_{\tilde B}^h$ at $\varphi_{\tilde A}^{h/2}(Z)$ and $A_3=D\varphi_{\tilde A}^{h/2}$ at $Z$. Each $A_i$ satisfies $A_i^{\mathsf T}JA_i=J$ by step 1.1 and is invertible by step 2.1; hence $D\Psi_h(Z)^{\mathsf T}JD\Psi_h(Z)=A_3^{\mathsf T}(A_2^{\mathsf T}(A_1^{\mathsf T}JA_1)A_2)A_3=J$ by [L4], and $D\Psi_h(Z)$ is invertible as a product of invertible matrices. [given, step 1.1, step 2.1, L4, algebra]

4.1 Bracket identity. Let $f,g$ be holomorphic near $\Psi_h(Z)$. By the chain rule, $\nabla(f\circ\Psi_h)(Z)=D\Psi_h(Z)^{\mathsf T}\nabla f(\Psi_h(Z))$, and likewise for $g$; hence by [L5] $$\{f\circ\Psi_h,g\circ\Psi_h\}(Z)=\nabla f(\Psi_h(Z))^{\mathsf T}\bigl(D\Psi_h(Z)\,J\,D\Psi_h(Z)^{\mathsf T}\bigr)\nabla g(\Psi_h(Z)).$$ By step 3.1 and the equivalence of [L4] (applicable because $D\Psi_h(Z)$ is invertible), $D\Psi_h\,J\,D\Psi_h^{\mathsf T}=J$, so the last display equals $\nabla f(\Psi_h(Z))^{\mathsf T}J\nabla g(\Psi_h(Z))=\{f,g\}(\Psi_h(Z))$ by [L5] again. [given, step 3.1, L4, L5, algebra]

5.1 Conclusion. Step 1.1 gives clause 1 for the two fields, step 3.1 gives clause 2, and step 4.1 gives clause 3. [step 1.1, step 3.1, step 4.1] ∎

## Remarks

- Whether the flows are *globally* defined on the whole of $U_\rho$ is not asserted; all identities hold wherever the flows and compositions exist, which is the only form used on this page. The lemma is the complexified counterpart of the real symplecticity of the splitting map in [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]; for the mechanical data the velocity-Verlet variant is obtained by interchanging the analytic splitting labels.
- The bracket identity is the hypothesis that makes the formal logarithm a derivation of the Poisson bracket in [[lem-cm-binomial-pullback-family-and-its-log-are-derivations]].
