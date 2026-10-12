---
id: def-gr-dust-reduction-variables-and-gauge
kind: definition
title: "Dust reduction variables: signature flip, frame, connection, kinematics, comoving-parallel gauge and unknowns"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-dust-matter-model, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-local-frame-and-tetrad-fields, def-gr-smooth-covariant-two-tensor-field, def-gr-observer-congruence-and-adapted-charts, def-gr-si-unit-and-coordinate-conventions, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-dust-matter-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
signature $(-+++)$ and metric-selected connection $\nabla$, and let $(\rho,u)$
be a dust model on an open matter domain $U_0\subseteq M$
([[def-gr-dust-matter-model]]), so $\rho>0$ is the rest density,
$u$ is the future-directed unit timelike four-velocity and
$T^{ab}=\rho u^au^b$. Fix a constant $c>0$ (the speed of light of the
framework, [[def-gr-si-unit-and-coordinate-conventions]]) and make the following
**reduction conventions**, all local to an open set $U\subseteq U_0$:

**(a) Signature flip.** Put $\gamma:=-g$, a smooth metric of signature
$(+---)$ on $U$, with inverse $\gamma^{-1}=-g^{-1}$; all indices in the
reduction are raised and lowered with $\gamma$
([[def-gr-inverse-metric-and-musical-isomorphisms]]). Put
$$U:=u,\qquad r:=\rho c^2 .$$
Then $\gamma(U,U)=1$, and the Einstein equation of the framework reads
$G(\gamma)-\Lambda\gamma=\kappa\,r\,U^\flat_\gamma\otimes U^\flat_\gamma$ with
the same constant $\kappa$ and the Einstein tensor of $\gamma$
([[def-gr-curvature-tensor-and-derived-tensors]]). The original metric and
frame connection are recovered by the constant signs $g=-\gamma$; no physical
equation is changed.

**(b) Orthonormal frame.** Choose a smooth orthonormal frame
$(e_0,e_1,e_2,e_3)$ on $U$ with $e_0=U$ and
$\gamma(e_i,e_j)=\eta_{ij}:=\operatorname{diag}(1,-1,-1,-1)_{ij}$
([[def-gr-local-frame-and-tetrad-fields]], [[def-gr-observer-congruence-and-adapted-charts]]).
Its connection coefficients are defined by
$$\nabla_ie_j=\Gamma_i{}^k{}_j\,e_k,\qquad \Gamma_{ijk}:=\gamma_{kl}\Gamma_i{}^l{}_j=-\Gamma_{ikj},$$
and the frame components of $U$ are $U^i=\delta^i_0$.
The **spatial projection** onto the $\gamma$-orthogonal complement of $U$ and the tensor
$$h_{ij}:=\gamma_{ij}-U_iU_j,\qquad l_{ij}:=h_{ij}-U_iU_j$$
coincide with $\gamma$-orthogonal projection onto $\operatorname{span}(e_1,e_2,e_3)$
when restricted to spatial pairs.

**(c) Kinematics.** With $\nabla$ the metric connection of $\gamma$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) put
$$\chi_{ij}:=h_i{}^k\nabla_kU_j,\qquad \chi:=h^{ij}\chi_{ij},\qquad \chi^{ij}:=h^{ik}h^{jl}\chi_{kl},$$
and let $D$ denote fully projected covariant differentiation: for a spatial
tensor field $T$, $(DT)_{i\ldots}:=(h_i{}^j\cdots)\nabla_j(T_\ldots)$, so
$D_ih_{jk}=0$ and $D_i\epsilon_{jkl}=0$. Let $\epsilon_{ijkl}$ be the
$\gamma$-volume tensor with $\epsilon_{0123}=1$ and set
$\epsilon_{ijk}:=\epsilon_{0ijk}$ (so $\epsilon_{123}=1$).

**(d) Comoving-parallel gauge.** Assume the coordinates
$(x^0=s,x^1,x^2,x^3)$ on $U$ are **comoving** ($e_0=\partial_s$ and $x^\alpha$
constant along the flow lines of $e_0$, $s$ a parameter on them) and
**parallel** ($\Gamma_0{}^i{}_j=0$, i.e. the spatial frame is parallelly
transported along $U$). This gauge is admissible for tilted configurations: the
initial surface $s=0$ is the given spacelike surface and need not be orthogonal
to $U$.

**(e) Unknowns.** The unknowns of the reduction are the coefficients
$$u_{\mathrm{red}}:=\bigl(e_a{}^\mu,\ \Gamma_a{}^i{}_j,\ E_{ij},\ B_{ij},\ r\bigr),\qquad a=1,2,3,$$
where $E$ and $B$ are the electric and magnetic parts of the Weyl curvature
defined in [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]; the transport,
evolution and subsidiary equations they satisfy are stated and derived in
[[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]],
[[lem-gr-dust-reduced-evolution-equations]],
[[lem-gr-dust-symmetric-hyperbolic-reduction]] and
[[thm-gr-dust-subsidiary-and-residual-vanishing]].
