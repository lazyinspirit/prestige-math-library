---
id: def-gr-dust-torsion-and-curvature-residuals
kind: definition
title: "Tentative coframe, Cartan torsion and curvature, and the curvature residual of the dust reduction"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, def-gr-curvature-tensor-and-derived-tensors, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Definition

Work in the reduction conventions of
[[def-gr-dust-reduction-variables-and-gauge]], so a tentative frame
$(e_0,e_1,e_2,e_3)$, its dual coframe $\theta^i$ and tentative connection
coefficients $\Gamma_i{}^k{}_j$ are given.

**(a) Connection forms.** The **connection $1$-forms** are
$\omega^i{}_j:=\Gamma_k{}^i{}_j\,\theta^k$, and the **torsion $2$-forms** and
**curvature $2$-forms** are the Cartan expressions
$$\Theta^i:=d\theta^i+\omega^i{}_j\wedge\theta^j,\qquad \Omega^i{}_j:=d\omega^i{}_j+\omega^i{}_k\wedge\omega^k{}_j .$$
The exterior derivatives are those of the frame-coordinate calculus, and the
wedge products are on the coframe; components are denoted
$\Theta^i=\tfrac12\Theta^i{}_{jk}\theta^j\wedge\theta^k$ and similarly for
$\Omega$. The actual curvature uses the frame bracket in its component formula:
$R^i{}_{jkl}=\partial_k\Gamma_l{}^i{}_j-\partial_l\Gamma_k{}^i{}_j+\Gamma_k{}^i{}_m\Gamma_l{}^m{}_j-\Gamma_l{}^i{}_m\Gamma_k{}^m{}_j-\Gamma_m{}^i{}_j\,[e_k,e_l]^m$,
not the antisymmetrized connection coefficients alone, precisely so that no
torsion conclusion is assumed.

**(b) Curvature residual.** With the prescribed curvature $R^{\mathrm{pre}}$
of [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] the
**curvature residual $2$-forms** are
$$\Delta^i{}_j:=\Omega^i{}_j-\tfrac12R^{\mathrm{pre}\,i}{}_{jkl}\,\theta^k\wedge\theta^l .$$

**(c) Zero quantities.** The **zero quantities** of the reduction are the
collections
$$z:=\bigl(T^i{}_{jk},\ \Delta^i{}_{jkl},\ F_{jkl},\ q_k\bigr),$$
namely the frame components of the torsion, of the curvature residual, of the
Bianchi residual $F_{jkl}=\nabla^i(C_{ijkl}+S\text{-terms})$ of
[[lem-gr-dust-reduced-evolution-equations]] and the flux quantity
$q_k:=\kappa^{-1}\nabla_aT^a{}_k$ of the matter model. The reduced system sets
$z=0$; the identities satisfied by $z$ off the reduced system, and the theorem
that $z=0$ on the domain of dependence of an initial surface on which $z=0$
and the constraints hold, are proved in
[[thm-gr-dust-subsidiary-and-residual-vanishing]].
