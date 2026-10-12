---
id: def-gr-flrw-model-data
kind: definition
title: "FLRW model data: warped product metric, cosmic time, comoving congruence, scale factor and Hubble parameter"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-flrw-spatial-model, def-riemannian-metric-and-riemannian-manifold, def-smooth-manifold, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, def-interval, def-countable-choice, lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]
dependency_roles:
  lem-gr-constant-rescaling-preserves-levi-civita-and-curvature: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-smooth-manifold: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: [lem-gr-flrw-metric-and-comoving-data]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.1): ds^2 = -dt^2 + a^2(t) gamma_ij du^i du^j, comoving coordinates, the scale factor and the identification of the slices, printed pp. 218-219 (PDF pp. 225-226); (8.37): the Hubble parameter H = a-dot/a, printed p. 223 (PDF p. 230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1: the FRW metric (4.63), printed pp. 199-200 (PDF pp. 206-207)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), sections 1.1.2-1.1.3: the Robertson-Walker metric (1.12)-(1.13) and the comoving coordinates (1.14)-(1.15), printed pp. 10-12 (PDF pp. 16-18)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Definition

This item assumes $\mathrm{AC}_\omega$ through the tangent-bundle and
manifold-product suppliers cited below ([[def-countable-choice]]); no further
choice principle is used.

**(a) Data.** Let $c>0$ be a real constant. An **FLRW model datum with
conversion constant $c$** is a tuple

$$(I,\Sigma,\gamma,k,a)$$

consisting of:

1. a nonempty open interval $I\subseteq\mathbb R$, the **time interval**
   ([[def-interval]]);
2. a spatial model datum $(\Sigma,\gamma,k)$: a connected smooth
   three-manifold $\Sigma$ without boundary, a Riemannian metric $\gamma$ on
   $\Sigma$, and a normalized curvature parameter $k\in\{-1,0,1\}$ with
   $\operatorname{Ric}(\gamma)=2k\gamma$
   ([[def-gr-flrw-spatial-model]], [[def-riemannian-metric-and-riemannian-manifold]],
   [[def-smooth-manifold]]);
3. a **scale factor**: a smooth map $a:I\to(0,\infty)$, with values in the open
   interval of strictly positive reals
   ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

Its **spacetime** is the product manifold $M:=I\times\Sigma$ with the product
smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]),
a smooth four-manifold without boundary. We write $t:M\to I$ for the first
coordinate function, the **cosmic time**, and $\dot a:=\frac{d}{dt}a$ for the
derivative of the scale factor ([[def-derivative]]).

**(b) The FLRW metric.** In product charts $(x^0,x^1,x^2,x^3)$ with $x^0=t$,
where $(x^1,x^2,x^3)$ is a smooth chart of $\Sigma$, define the component functions

$$g_{00}:=-c^2,\qquad g_{0i}:=g_{i0}:=0,\qquad g_{ij}:=a(t)^2\gamma_{ij},\qquad i,j\in\{1,2,3\}.$$

These functions are smooth on the chart domain, and they define a smooth
symmetric covariant two-tensor field $g$ on $M$
([[def-gr-smooth-covariant-two-tensor-field]]): the component transformation
law is that of a symmetric $(0,2)$-tensor because the definitions agree on
chart overlaps, the time component is constant and the spatial components are
multiplied by the common smooth factor $a(t)^2$. The field $g$ is the
**FLRW metric** of the datum; we write the standard informal display
$g=-c^2\,dt^2+a(t)^2\,\gamma$, meaning the symmetric tensor $-c^2\,dt\otimes dt+a(t)^2\gamma$.
That $g$ is a Lorentzian metric of signature
$(-,+,+,+)$ on $M$ and that the coordinate field $\partial_t$ is a time
orientation for it are not asserted by this definition but proved in
[[lem-gr-flrw-metric-and-comoving-data]] on this page; the same holds for the
clauses below that use the metric's causal classification.

**(c) Comoving congruence and cosmic time direction.** The **comoving
congruence** of the datum is the smooth vector field
$n:=c^{-1}\partial_t$ on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]). By
[[lem-gr-flrw-metric-and-comoving-data]] the field $n$ is a smooth
future-directed unit timelike field, $g(n,n)=-1$, and the **comoving
observers** of the datum are its maximal integral curves; in product
coordinates the integral curve through $(t_0,x)$ is
$s\mapsto(t_0+s/c,x)$ on $c(I-t_0)$. Its proper-time parametrization is the
**comoving curve** $t\mapsto(t,x)$ on $I$, with constant spatial coordinate
$x\in\Sigma$ and velocity $U=cn=\partial_t$.

**(d) Hubble parameter and expansion.** The **Hubble parameter** of the datum
is the smooth function

$$H:=\frac{\dot a}{a}:I\to\mathbb R .$$

No field equation, no matter content, no equation of state, no measured value
and no claim about nature is part of this definition: an FLRW model datum is a
geometric object, and the physical reading of $c$, of $t$ as a clock reading,
of $n$ as the matter rest congruence and of $H$ as an expansion rate is
recorded in the physical postulates of the framework, not here.

## Remarks

- **Slices.** For $t_0\in I$ the subset $\Sigma_{t_0}:=\{t_0\}\times\Sigma$ is
  a smoothly embedded copy of $\Sigma$ in $M$, the **spatial slice at cosmic
  time $t_0$**; its induced metric, the pullback of $g$ by
  $x\mapsto(t_0,x)$, is $a(t_0)^2\gamma$. The induced metric is Riemannian
  because $\gamma$ is, and by
  [[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]] it has
  constant sectional curvature $k/a(t_0)^2$; the reading of the sign of $k$
  as the sign of the spatial curvature is therefore independent of $t_0$,
  while the curvature scale depends on the scale factor. These readings are
  made precise, with the submersion and pullback operations, in
  [[lem-gr-flrw-metric-and-comoving-data]].

- **Coordinate conventions and units.** In the physical framework the cosmic
  time coordinate $t$ is measured in seconds, the scale factor $a$ in metres,
  the parameter $c$ in metres per second and the Hubble parameter in inverse
  seconds; the spatial coordinates and the metric coefficients $\gamma_{ij}$
  are dimensionless in these coordinate conventions, so that $a(t)^2\gamma_{ij}$
  carries the dimension of $a^2$. The units and the physical readings are
  fixed by the framework's unit conventions and postulates, not by this
  mathematical definition.

- **Scale redundancy and normalization.** For a constant $\lambda>0$, the
  substitution $a'=\lambda a$, $\gamma'=\lambda^{-2}\gamma$ leaves
  $g=-c^2dt^2+a^2\gamma$ unchanged. Ricci invariance
  ([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]]) gives
  $\operatorname{Ric}(\gamma')=2(\lambda^2k)\gamma'$, so the curvature
  parameter of this presentation is $k'=\lambda^2k$, and
  $k'/a'^2=k/a^2$. For $k=0$ this is again a normalized FLRW datum for
  every $\lambda>0$; for $k=\pm1$ it is a normalized datum only when
  $\lambda=1$. Otherwise it is an unnormalized presentation of the same
  spacetime metric, and restoring the three-sign normalization returns the
  normalized spatial metric and scale factor. The definition keeps
  $k\in\{-1,0,1\}$ throughout.
