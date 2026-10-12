---
id: def-gr-dust-torsion-and-curvature-residuals
kind: definition
title: "Tentative coframe, Cartan torsion and curvature, and the curvature residual of the dust reduction"
status: draft
origin: session
domain: mathematics
dependency_level: 10
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
[[def-gr-dust-reduction-variables-and-gauge]], with a smooth tentative frame
$(e_0,e_1,e_2,e_3)$, $e_0=U$, dual coframe $\theta^i(e_j)=\delta^i_j$ and smooth
metric-compatible tentative connection coefficients $\Gamma_i{}^k{}_j$.
The connection acts on every tensor index by the tensor product rule and
annihilates $\gamma$; torsion-freeness is not assumed. A differential $k$-form
is a smooth alternating covariant $k$-tensor. The wedge is its alternating
tensor product, normalized so that for a $p$-form $\alpha$ and a $q$-form
$\beta$, $\alpha\wedge\beta$ is the sum over $(p,q)$ shuffles with their signs.
The exterior derivative is specified, for smooth fields $X_0,\ldots,X_k$, by
$$d\alpha(X_0,\ldots,X_k)=\sum_{a=0}^k(-1)^aX_a\bigl(\alpha(X_0,\ldots,\widehat X_a,\ldots,X_k)\bigr)+\sum_{a<b}(-1)^{a+b}\alpha([X_a,X_b],X_0,\ldots,\widehat X_a,\ldots,\widehat X_b,\ldots,X_k).$$
Here a hat deletes a slot, and the undeleted slots in the second sum retain
their order. These definitions fix the local frame-coordinate calculus.

**(a) Connection forms.** The **connection $1$-forms** are
$\omega^i{}_j:=\Gamma_k{}^i{}_j\,\theta^k$, and the **torsion $2$-forms** and
**curvature $2$-forms** are the Cartan expressions
$$\Theta^i:=d\theta^i+\omega^i{}_j\wedge\theta^j,\qquad \Omega^i{}_j:=d\omega^i{}_j+\omega^i{}_k\wedge\omega^k{}_j .$$
Components are denoted
$\Theta^i=\tfrac12\Theta^i{}_{jk}\theta^j\wedge\theta^k$ and similarly for
$\Omega$. The actual curvature uses the frame bracket in its component formula:
$R^i{}_{jkl}=\partial_k\Gamma_l{}^i{}_j-\partial_l\Gamma_k{}^i{}_j+\Gamma_k{}^i{}_m\Gamma_l{}^m{}_j-\Gamma_l{}^i{}_m\Gamma_k{}^m{}_j-\Gamma_m{}^i{}_j\,[e_k,e_l]^m$,
not the antisymmetrized connection coefficients alone, precisely so that no
torsion conclusion is assumed.

**(b) Curvature residual.** With the prescribed curvature $R^{\mathrm{pre}}$
of [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] the
**curvature residual $2$-forms** are
$$\Delta^i{}_j:=\Omega^i{}_j-\tfrac12R^{\mathrm{pre}\,i}{}_{jkl}\,\theta^k\wedge\theta^l .$$

**(c) Bianchi and matter residuals.** Using the reconstructed $C$ and
prescribed $S$ of [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]],
define
$$F_{jkl}:=\nabla_i\bigl(C^i{}_{jkl}-\delta^i{}_{[k}S_{l]j}\bigr),\qquad q_j:=\nabla_i(rU^iU_j),\qquad q:=U(r)+r\chi,$$
with brackets of weight $\tfrac12$. The full flux covector satisfies
$q_j=qU_j+r\nabla_UU_j$, since $\nabla_iU^i=\chi$ in the acceleration-free
gauge. In particular $q=0$ and $\nabla_UU=0$ imply $q_j=0$ even where $r=0$.
This normalization uses the coefficient $r$ of the source tensor and does
not divide by $r$ or $\kappa$.

**(d) Zero quantities and reduced premises.** Write
$\mathcal T^i{}_{jk}:=\Theta^i(e_j,e_k)$, also denoted $T^i{}_{jk}$ when
unambiguous; this torsion tensor is distinct from the stress-energy tensor.
The **zero quantities** are
$$z:=\bigl(\mathcal T^i{}_{jk},\ \Delta^i{}_{jkl},\ F_{jkl},\ q_j\bigr).$$
The reduced transport equations impose only
$\mathcal T^i{}_{0a}=0$ and $\Delta^i{}_{j0a}=0$, and density transport imposes
$q=0$; the gauge gives $\nabla_UU=0$. Weyl evolution imposes the symmetric
spatial evolution projections of $F$. The reduced evolution does not itself
impose every component of $z=0$. The subsidiary theorem propagates the
remaining zero quantities from constrained initial data.

For vector-valued forms define $D_\omega\alpha=d\alpha+\omega\wedge\alpha$;
for an endomorphism-valued $k$-form define
$D_\omega\alpha=d\alpha+\omega\wedge\alpha-(-1)^k\alpha\wedge\omega$, with
matrix multiplication of endomorphism indices. These conventions specify the
Cartan identities used in [[thm-gr-dust-subsidiary-and-residual-vanishing]].
