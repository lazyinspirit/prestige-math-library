---
id: lem-gr-flrw-comoving-congruence-expansion
kind: lemma
title: "The comoving congruence is geodesic; its expansion is three Hubble parameters per unit conversion constant"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-model-data, lem-gr-flrw-metric-and-comoving-data, lem-gr-flrw-christoffel-symbols, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, def-affine-connection-on-a-smooth-manifold, def-geodesic-of-an-affine-connection, def-gr-timelike-worldline-and-proper-time, def-gr-observer-congruence-and-adapted-charts, def-gr-perfect-fluid-matter-model, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  lem-gr-flrw-christoffel-symbols: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1-4.6.2: the comoving frame with u^mu = (1,0,0,0), its geodesic property and the expansion, printed pp. 200-203 (PDF pp. 207-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8: the comoving observer field and the Hubble parameter (8.37), printed pp. 219-223 (PDF pp. 226-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(I,\Sigma,\gamma,k,a)$ be an FLRW model datum with conversion constant
$c>0$, with spacetime $M=I\times\Sigma$, metric $g$, comoving congruence
$n=c^{-1}\partial_t$ and Hubble parameter $H=\dot a/a$
([[def-gr-flrw-model-data]], [[lem-gr-flrw-metric-and-comoving-data]]), and
let $\nabla$ be the metric-selected connection of $g$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Then:

**(a)** $\nabla_{\partial_t}\partial_t=0$ and $\nabla_nn=0$; consequently the
comoving curves are geodesics of $\nabla$ with affine parameter $t$, the
parameter $t$ is their proper time, and, when $\Sigma\ne\varnothing$, $n$ is a geodesic unit timelike
observer congruence in the sense of
[[def-gr-observer-congruence-and-adapted-charts]]
([[def-geodesic-of-an-affine-connection]],
[[def-gr-timelike-worldline-and-proper-time]]).

**(b)** The **expansion** of the comoving congruence
$\vartheta:=\nabla_an^a$
([[def-gr-perfect-fluid-matter-model]] clause (b),
[[def-gr-inverse-metric-and-musical-isomorphisms]]) is the constant-in-space
function

$$\vartheta=\frac{3H}{c}.$$

**(c)** For the physical four-velocity field $U=\partial_t=cn$ of the comoving
observers, $\nabla_aU^a=3H$, so that
$H=\tfrac13\nabla_aU^a$; the acceleration of the comoving congruence,
$a^b:=n^a\nabla_an^b$, vanishes identically
([[def-gr-perfect-fluid-matter-model]] clause (b)).

## Facts & Assumptions

**Given:** An FLRW model datum with $c>0$, its spacetime, metric, comoving congruence $n=c^{-1}\partial_t$ and Hubble parameter $H$, a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$, and the metric-selected connection $\nabla$.

[L1] In the product chart the Christoffel symbols of $\nabla$ are $\Gamma^0{}_{00}=\Gamma^0{}_{0i}=\Gamma^i{}_{00}=0$, $\Gamma^0{}_{ij}=a\dot a\gamma_{ij}/c^2$, $\Gamma^i{}_{0j}=H\delta^i{}_j$ and $\Gamma^i{}_{jk}={}^{(3)}\Gamma^i{}_{jk}$ ([[lem-gr-flrw-christoffel-symbols]]).

[L2] A curve $\gamma$ is a geodesic of $\nabla$ with affine parameter $s$ when $\nabla_{\gamma'}\gamma'=0$ in the parameter, equivalently $\ddot\gamma^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^b\dot\gamma^c=0$ in a chart ([[def-geodesic-of-an-affine-connection]], [[def-christoffel-symbols-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]]). An affine connection is real bilinear, function-linear in its first argument and satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$ ([[def-affine-connection-on-a-smooth-manifold]]). For a vector field $J$, the divergence in a chart is $\nabla_aJ^a=\partial_aJ^a+\sum_{a,b}\Gamma^a{}_{ab}J^b$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] The comoving curves $\gamma_x(t)=(t,x)$ have tangent $\partial_t=cn$ and are the future timelike worldlines whose parameter is proper time ([[lem-gr-flrw-metric-and-comoving-data]], [[def-gr-timelike-worldline-and-proper-time]]). The expansion and the acceleration of a smooth unit timelike congruence are defined by $\vartheta=\nabla_an^a$ and $a^b=n^a\nabla_an^b$ ([[def-gr-perfect-fluid-matter-model]], [[def-gr-observer-congruence-and-adapted-charts]]).

## Proof

**Proof technique:** direct substitution of the Christoffel symbols in the geodesic and divergence formulas.

1.1 (The comoving curves are geodesics.) In the product chart the vector field $\partial_t$ has components $\delta^a{}_0$, so for $\nabla_{\partial_t}\partial_t$ the chart expression of [L2] is $\sum_{b,c}\Gamma^a{}_{bc}\delta^b{}_0\delta^c{}_0=\Gamma^a{}_{00}=0$ for $a=0,1,2,3$ by [L1]. Hence $\nabla_{\partial_t}\partial_t=0$. Multiplying by $c^{-2}$ and using the function-linearity and Leibniz rules of [L2] gives $\nabla_nn=c^{-2}\nabla_{\partial_t}\partial_t=0$. Therefore each comoving curve $\gamma_x$ of [L3], whose tangent is $\partial_t=cn$, satisfies $\nabla_{\gamma_x'}\gamma_x'=c\nabla_n(cn)=c^2\nabla_nn=0$: it is a geodesic with affine parameter $t$, and by [L3] its parameter is proper time. If $\Sigma\ne\varnothing$, the nonempty interval $I$ gives a nonempty product $M=I\times\Sigma$, open in itself, and [L3] supplies the smooth future unit timelike field $n$; thus it is an observer congruence on $M$ in the exact sense of [[def-gr-observer-congruence-and-adapted-charts]], with vanishing geodesic acceleration as just proved. If $\Sigma=\varnothing$, all pointwise tensor and geodesic assertions are vacuous, and no observer-congruence designation is made. This is claim (a). [L1, L2, L3, algebra]

1.2 (Expansion.) In the product chart, $n=c^{-1}\partial_t$ has components $n^0=c^{-1}$ and $n^i=0$, all of them constant as functions on the chart domain, so $\partial_an^a=\partial_0c^{-1}+\sum_i\partial_i0=0$. The divergence formula of [L2] therefore gives $\nabla_an^a=\sum_{a,b}\Gamma^a{}_{ab}n^b=\sum_a\Gamma^a{}_{a0}c^{-1}=c^{-1}\bigl(\Gamma^0{}_{00}+\Gamma^1{}_{10}+\Gamma^2{}_{20}+\Gamma^3{}_{30}\bigr)$. By [L1], $\Gamma^0{}_{00}=0$ and $\Gamma^i{}_{i0}=H\delta^i{}_i=H$ for each $i=1,2,3$ (no sum over $i$ in the symbol, and the three indices each contribute $H$), so $\nabla_an^a=c^{-1}\cdot3H=3H/c$. This is claim (b). [L1, L2, algebra]

2.1 (Physical velocity and vanishing acceleration.) Since $U=cn$, linearity gives $\nabla_aU^a=c\nabla_an^a=3H$, hence $H=\tfrac13\nabla_aU^a$. For the acceleration, $a^b=n^a\nabla_an^b=c^{-2}(\nabla_{\partial_t}\partial_t)^b=0$ by step 1.1. This is claim (c). [L2, step 1.1, step 1.2, algebra]

3.1 (Conclusion.) Step 1.1 proves the geodesic property and the affine/proper-time reading of claim (a); step 1.2 computes the expansion $\vartheta=3H/c$ of claim (b); and step 2.1 proves the physical-velocity divergence identity and the vanishing acceleration of claim (c). No step used a field equation or a matter model beyond the definitions recalled in [L3], and the inherited assumption $\mathrm{AC}_\omega$ is the one carried by the tangent-bundle and connection suppliers. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Reading of the factor.** The unit-normalized congruence $n$ has
  $\nabla_an^a=3H/c$, whereas the physical four-velocity field
  $U=\partial_t$ has $\nabla_aU^a=3H$ in the sense of inverse seconds; the
  factor reflects the normalization $U=cn$ and the unit conventions of the
  framework. The statement of the lemma is purely kinematic: it computes the
  divergence of a specified vector field on a specified metric and asserts no
  dynamical equation and no measurement.

- **Volume reading.** In the adapted chart the divergence identity
  $\nabla_aU^a=3H$ says that the fractional rate of change of the spatial
  volume element $\sqrt{\det(a^2\gamma)}$ along the congruence is $3H$,
  $d\log\sqrt{\det(a^2\gamma)}\,/dt=3H$; this is the kinematic content used by
  the continuity equation later on this page and is not a conservation law by
  itself.
