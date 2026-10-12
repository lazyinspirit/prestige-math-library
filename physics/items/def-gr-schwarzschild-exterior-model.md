---
id: def-gr-schwarzschild-exterior-model
kind: definition
title: "The Schwarzschild exterior model datum: domain, metric, mass parameter and time orientation"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-smooth-manifold, def-interval, def-rational-power, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivation-at-a-point-and-tangent-space, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: [lem-gr-schwarzschild-metric-properties]
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild metric (6.1), the horizon r = 2GM and the statement that the coordinates break down there, printed pp. 232-233 (PDF pp. 239-240); section 6.1.1: Birkhoff's theorem and the reduced form ds^2 = -f(t,r)dt^2 + g(t,r)dr^2 + r^2 dOmega^2, printed pp. 233-235 (PDF pp. 240-242)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.4)-(7.13): the general spherically symmetric metric in coordinates with the sphere factor r^2 dOmega^2, and (7.29): ds^2 = -(1-2GM/r)dt^2 + (1-2GM/r)^{-1}dr^2 + r^2 dOmega^2, printed pp. 164-168 and 170 (PDF pp. 171-175 and 177)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3: the Schwarzschild metric (2.32) ds^2 = -(1-2M/r)dt^2 + (1-2M/r)^{-1}dr^2 + r^2 dOmega^2 in units G = c = 1, printed p. 15; section 2.3.1: the one-way membrane at r = 2M, printed p. 19"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: n/a
---

## Definition

This item assumes the axiom of countable choice $\mathrm{AC}_\omega$ through
the manifold-product and tangent-bundle suppliers cited below
([[def-countable-choice]]); no further choice principle is used.

**(a) Parameters and the Schwarzschild radius.** Let $c>0$ and $G_N>0$ be real
constants and let $m_*>0$ be a real **mass parameter**. Put

$$s:=\frac{2G_Nm_*}{c^2}>0 .$$

The number $s$ is the **Schwarzschild radius** of the datum. Neither $c$,
$G_N$ nor $m_*$ is measured here; the physical reading of $c$ and $G_N$ as the
framework's conversion and Newton constants and of $m_*$ as a mass is fixed by
the physical conventions of the framework, not by this definition.

**(b) The underlying manifold and its product charts.** Let $S^2:=S_2(0,1)=
\{y\in\mathbb R^3:\lVert y\rVert_2=1\}$ be the unit Euclidean sphere with its
induced smooth structure ([[def-euclidean-spheres-and-closed-balls]]), and let
$M$ be the product manifold

$$M:=\mathbb R\times(s,\infty)\times S^2$$

with the product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]);
it is a smooth four-manifold without boundary. Write $x^0:M\to\mathbb R$ and
$r:M\to(s,\infty)$ for the first and second projections and $\iota:M\to S^2$
for the third. A **product chart** of $M$ is a smooth chart on the product
whose angular part is a smooth chart of $S^2$. In a **spherical-polar product
chart**, $0<\vartheta<\pi$ and the components of the round metric
$\gamma_{S^2}$ of [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]
are $\gamma_{22}=1$, $\gamma_{23}=\gamma_{32}=0$,
$\gamma_{33}=\sin^2\vartheta$. These polar charts omit the two poles; ordinary
smooth sphere charts around the poles complete the product atlas.

**(c) The metric.** Let $f:(s,\infty)\to(0,\infty)$ be the smooth function

$$f(r):=1-\frac{s}{r} .$$

Define $g$ globally by the coordinate-free expression

$$g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\,\iota^*\gamma_{S^2}.$$

In every spherical-polar product chart its component functions are

$$g_{00}:=-f(r),\qquad g_{11}:=\frac{1}{f(r)},\qquad g_{22}:=r^2,\qquad g_{33}:=r^2\sin^2\vartheta,$$

and $g_{ab}:=0$ whenever $a\ne b$, $a,b\in\{0,1,2,3\}$, with the index order
$(x^0,x^1,x^2,x^3)=(x^0,r,\vartheta,\varphi)$. This is a smooth symmetric
covariant $2$-tensor field on all of $M$
([[def-gr-smooth-covariant-two-tensor-field]]); the component display is local
to spherical-polar charts, and $f>0$ because $r>s$. The pair $(M,g)$ is the **Schwarzschild exterior
metric of mass parameter $m_*$**; the datum of this definition is the
quadruple $(c,G_N,m_*,g)$, equivalently the tuple $(M,g,N)$ with $N$ as in
clause (d). That $(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold
of signature $(-,+,+,+)$ is not asserted here; it is proved in the companion metric-properties lemma of this page (its
justification record in the frontmatter), which also records the equivalent
coordinate-free description
$g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\,\iota^*\gamma_{S^2}$.

**(d) Time orientation and the Schwarzschild chart.** The field
$N:=\partial_0$ is the smooth product vector field on $M$
([[def-derivation-at-a-point-and-tangent-space]]); the chart components of $g$
are independent of $x^0$, so $N$ is the restriction of a global vector field,
and $g(N,N)=-f(r)<0$ at every point. The datum carries the time orientation
$N$. Spherical-polar product charts are **Schwarzschild charts** of the datum;
at the poles the same metric is represented in the smooth sphere charts of
the product atlas. We write $t$ for the coordinate $x^0/c$ when the datum is
read in the framework's unit conventions.

**(e) Scope.** The domain of the datum is the exterior region $r>s$; the
definition asserts nothing about $r=s$, about $r\le 0$, about any matter, or
about any equation satisfied by $g$. The horizon $r=s$ is not part of the
datum, and a continuation of the metric to $r=s$ requires the separate constructions recorded on this page, the
regularity lemma for the advanced chart and the Kruskal model-properties
lemma. Whether the datum is a solution of the
framework's field law is proved, not defined, in the Ricci-and-Einstein-tensor lemma of this
page.

## Remarks

- **Units and the physical reading.** In the framework's conventions the
  coordinate $x^0=ct$ and the radial coordinate $r$ have dimension of length
  in metres, the angular coordinates are dimensionless, and the metric
  coefficients are dimensionless; $m_*$ is read in kilograms and $s$ in
  metres. No numerical value of any constant is asserted. The reading of
  $x^0$ as a clock coordinate of static observers is part of the framework's
  postulates and is not part of this geometric definition (see the static-congruence and clock-rate lemma and the exterior
  vacuum-model theorem of this page).

- **The sphere factor.** The function $r$ is the **areal radius**: on the
  level set $\{x^0=c_0,\ r=c_1\}$ the induced metric is
  $c_1^2\gamma_{S^2}$, so the area of the sphere is $4\pi c_1^2$. Nothing in
  this definition identifies $r$ with a Euclidean radial coordinate of any
  ambient space.
