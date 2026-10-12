---
id: def-gr-congruence-acceleration-and-expansion
kind: definition
title: "Acceleration, expansion and the along-congruence derivative of an observer congruence"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-affine-connection-on-a-smooth-manifold, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-countable-choice]
dependency_roles:
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: [lem-gr-congruence-acceleration-and-expansion-properties]
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), sections 3.3.3-3.3.4: the Eulerian observer congruence, its 4-acceleration a = grad_n n and the identity a = D ln N, printed pp. 43-44 (PDF pp. 43-44), and sections 4.1.1 and 5.2: the divergence of the Eulerian normal and the conservation equation in which it appears, printed pp. 51 and 72-73 (PDF pp. 51 and 72-73)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: covariant derivatives along a curve and the geodesic equation, printed pp. 67-69 and 100-101 (PDF pp. 74-76 and 107-108)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let
$U\subseteq M$ be a nonempty open subset carrying the restricted smooth
structure of
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]],
and let $n$ be a smooth observer congruence on $U$
([[def-gr-observer-congruence-and-adapted-charts]]), so that $g_p(n_p,n_p)=-1$
and $n_p$ is future-directed at every $p\in U$.

**(a) Acceleration.** The **acceleration field** of $n$ is the smooth vector
field

$$a:=\nabla_nn,$$

the covariant derivative of $n$ along itself; componentwise
$a^b=n^a\nabla_an^b$. The item defines the field; that it is spatial and that
it is the acceleration of the observer curves is proved in
[[lem-gr-congruence-acceleration-and-expansion-properties]].

**(b) Expansion.** The **expansion** of $n$ is the smooth function

$$\theta:=\nabla_an^a=g^{ab}\nabla_an_b .$$

Its chart formula and its identification with $h^{ab}\nabla_an_b$ are proved in
[[lem-gr-congruence-acceleration-and-expansion-properties]].

**(c) Along-congruence derivative.** For a smooth function
$f:U\to\mathbb R$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]) define

$$Df:=n^a\nabla_af,$$

the derivative of $f$ along $n$; $Df$ is smooth and $D$ is a derivation of the
smooth functions on $U$
([[lem-gr-congruence-acceleration-and-expansion-properties]] clause (d)).

**(d) Scope.** The acceleration and the expansion are geometric data of the
congruence $n$ alone, computed with the connection $\nabla$. This item asserts
neither $a=0$ (a geodesic congruence) nor $\theta=0$, and it defines no shear,
vorticity, measurement, clock reading or physical interpretation; the reading
of observer curves as ideal-clock worldlines belongs to the framework's
postulates and is not asserted here.

## Remarks

- **Why only two kinematic fields.** On this page the expansion enters the
  local energy balance through the identity
  $\nabla_a(\mu n^a+\Phi^a)=D\mu+\mu\theta+\nabla_a\Phi^a$ of
  [[lem-gr-energy-momentum-current-divergence]]. The shear and vorticity
  tensors are not needed for the statements proved here and are therefore not
  introduced; no decomposition of $\nabla n$ beyond the trace $\theta$ and the
  acceleration $a$ is asserted.

- **Choice convention.** The smooth structure of the tangent bundle underlying
  $n$ assumes the axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]]
  ([[def-smooth-vector-field-as-a-tangent-bundle-section]]); this is the only
  choice principle used in this item.
