---
id: def-gr-dust-reduction-variables-and-gauge
kind: definition
title: "Dust reduction variables: signature flip, frame, connection, kinematics, comoving-parallel gauge and unknowns"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-dust-matter-model, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-local-frame-and-tetrad-fields, def-gr-smooth-covariant-two-tensor-field, def-gr-observer-congruence-and-adapted-charts, def-c-r-and-smooth-maps-between-smooth-manifolds]
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
signature $(-+++)$ and metric-selected connection $\nabla$. Fix mathematical
parameters $c>0$, $\kappa>0$ and $\Lambda\in\mathbb R$. On an open set
$U_0\subseteq M$, prescribe a smooth function $\rho\ge0$ and a smooth
future-directed unit timelike field $u$, with $g(u,u)=-1$. Set
$\varepsilon:=\rho c^2$ and $T^{ab}:=\varepsilon u^au^b$. On the open positive
subset $\{\rho>0\}$, the tuple $(\varepsilon,u)$, rather than $(\rho,u)$, is
exactly the dust model of [[def-gr-dust-matter-model]]: that supplier's density
is the coefficient of $u\otimes u$. Here $\rho$ denotes its mass-normalized
parameter and $\varepsilon$ its energy-normalized coefficient. On zero-density
regions the smooth unit field is prescribed separately; the geodesic equation
is imposed there as well and is not deduced from conservation of the zero
tensor. This is the smooth geodesic-dust extension, without a free boundary
or a division by density. Make the following
**reduction conventions**, all local to an open set $\mathcal U\subseteq U_0$:

**(a) Signature flip.** Put $\gamma:=-g$, a smooth metric of signature
$(+---)$ on $\mathcal U$, with inverse $\gamma^{-1}=-g^{-1}$; all indices in the
reduction are raised and lowered with $\gamma$
([[def-gr-inverse-metric-and-musical-isomorphisms]]). Put
$$U:=u,\qquad r:=\rho c^2 .$$
Then $\gamma(U,U)=1$. Whenever the mathematical model equation
$G(g)+\Lambda g=\kappa T$ holds, it reads
$G(\gamma)-\Lambda\gamma=\kappa\,r\,U^\flat_\gamma\otimes U^\flat_\gamma$ with
the same constant $\kappa$ and the Einstein tensor of $\gamma$
([[def-gr-curvature-tensor-and-derived-tensors]]). Indeed the constant metric
flip leaves the connection and mixed curvature unchanged, so Ricci is unchanged,
the scalar changes sign and $G(\gamma)=G(g)$; both lower factors in $T$
change sign together. The original metric is recovered by $g=-\gamma$.
Physical identification of these mathematical parameters is made by the
consuming physical model, not assumed by this definition.

**(b) Orthonormal frame.** Choose a smooth orthonormal frame
$(e_0,e_1,e_2,e_3)$ on $\mathcal U$ with $e_0=U$ and
$\gamma(e_i,e_j)=\eta_{ij}:=\operatorname{diag}(1,-1,-1,-1)_{ij}$
([[def-gr-local-frame-and-tetrad-fields]], [[def-gr-observer-congruence-and-adapted-charts]]).
Its connection coefficients are defined by
$$\nabla_ie_j=\Gamma_i{}^k{}_j\,e_k,\qquad \Gamma_{ijk}:=\gamma_{kl}\Gamma_i{}^l{}_j=-\Gamma_{ikj},$$
and the frame components of $U$ are $U^i=\delta^i_0$.
The **spatial projection** is the endomorphism $h^i{}_j:=\delta^i_j-U^iU_j$, whose image is $U^\perp=\operatorname{span}(e_1,e_2,e_3)$ and whose kernel is $\mathbb RU$. Its lowered bilinear form and the auxiliary covariant tensor are
$$h_{ij}:=\gamma_{ij}-U_iU_j,\qquad l_{ij}:=h_{ij}-U_iU_j.$$
On spatial pairs $h$ and $l$ both restrict to $\gamma$; they are covariant two-tensors, while $h^i{}_j$ is the projection map.

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
$(x^0=s,x^1,x^2,x^3)$ on $\mathcal U$ are **comoving** ($e_0=\partial_s$ and $x^\alpha$
constant along the flow lines of $e_0$, $s$ a parameter on them) and
**parallel** ($\Gamma_0{}^i{}_j=0$, i.e. the spatial frame is parallelly
transported along $U$). This gauge is admissible for tilted configurations: the
initial surface $s=0$ is the given spacelike surface and need not be orthogonal
to $U$.

**(e) Unknowns.** The unknowns of the reduction are the coefficients
$$u_{\mathrm{red}}:=\bigl(e_a{}^\mu,\ \Gamma_a{}^i{}_j,\ E_{ij},\ B_{ij},\ r\bigr),\qquad a=1,2,3,$$
where $E$ and $B$ are independent smooth symmetric spatial covariant
$2$-tensor fields, with $E_{0i}=B_{0i}=0$ and
$\sum_{a=1}^3 E_{aa}=\sum_{a=1}^3 B_{aa}=0$ in this orthonormal frame.
Their slots are thus defined without assuming curvature reconstruction,
evolution or residual vanishing. Their interpretation as electric and magnetic
Weyl components is supplied after these reduction conventions are fixed.

During the independent reduced evolution, the frame and the coefficients
$\Gamma_a{}^i{}_j$ are tentative smooth unknowns. The coefficients define a
metric-compatible connection by $\widehat\nabla_{e_a}e_j=\Gamma_a{}^i{}_j e_i$
and the tensor product rule; impose the same coefficient antisymmetry and
parallel gauge, but do not assume its torsion vanishes or that it is the
metric-selected connection. In reduction calculations $\nabla$ denotes this
tentative connection. The residual theorem establishes that it equals the
metric-selected connection for constrained solutions. The frame is required
to remain a basis, so it defines the tentative metric by its constant
orthonormal components.
