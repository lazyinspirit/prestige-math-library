---
id: rem-de-rham-and-stokes-on-manifolds
kind: remark
title: "De Rham cohomology and the general Stokes theorem on manifolds"
status: draft
origin: session
proved_here: false
deps: [rem-homology-and-cohomology]
justified_by: []
forward_refs: []
aliases: [rem-de-rham]
landmark: false
short: "Stokes on chains may be reachable; the manifold version and de Rham are not"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Generalized Stokes theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Generalized_Stokes_theorem"
    - title: "De Rham cohomology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/De_Rham_cohomology"
    - title: "R. Bott and L. W. Tu, Differential Forms in Algebraic Topology, GTM 82 (Springer)"
      url: "https://link.springer.com/book/10.1007/978-1-4757-3951-0"
    - title: "Stokes theorem (nLab)"
      url: "https://ncatlab.org/nlab/show/Stokes+theorem"
pipeline_run: null
---

## Statement

**General Stokes theorem.** Let $M$ be an oriented smooth $n$-manifold with
boundary and let $\omega$ be a smooth $(n-1)$-form on $M$ with compact support.
Then

$$\int_M d\omega = \int_{\partial M} \omega,$$

where $\partial M$ carries the induced orientation and the right-hand side is the
integral of the pullback of $\omega$ along the inclusion.

**De Rham cohomology and de Rham's theorem.** For a smooth manifold $M$ the
complex of smooth forms with the exterior derivative has cohomology
$H^k_{\mathrm{dR}}(M)$, and integration of forms over smooth singular chains
induces a natural isomorphism

$$H^k_{\mathrm{dR}}(M) \cong H^k(M;\mathbb{R})$$

with singular cohomology with real coefficients; for compact $M$ it is an
isomorphism of graded rings, wedge product to cup product.

## Remarks

**What may be in scope, and is deliberately not written off.** DEFERRED.md flags
the **Stokes theorem on chains** as possibly reachable from the multivariable
track, and that flag is repeated here. The chain version, stated for a singular
$k$-cube or a formal sum of such in an open subset of $\mathbb{R}^n$, needs only
differential forms in $\mathbb{R}^n$, the change-of-variables theorem, Fubini for
the Riemann integral and a direct computation on the standard cube. Its classical
corollaries, Green's theorem in the plane, the divergence theorem and the
classical Stokes theorem for a parametrised surface, are all in scope as well and
should be proved, not deferred.

**Not proved in this library.** The manifold statement above, which needs smooth
manifolds with boundary, charts and atlases, orientation, partitions of unity, and
integration of forms defined chartwise; and de Rham's theorem, which needs all of
that together with singular cohomology from
[[rem-homology-and-cohomology]]. The distinction is not cosmetic: the manifold
version is the one that gives coordinate-free results and that makes the boundary
of $M$ well defined, which itself rests on
[[rem-invariance-of-domain]].

**Why it matters here.** Two reasons beyond the theorem's own weight. First, de
Rham's theorem is the bridge between analysis and topology: it says that the
obstruction to a closed form being exact is a topological invariant of the
domain, which is the general form of the Poincare lemma the library proves only
for star-shaped regions, see [[rem-simple-connectedness]]. Second, the general
Stokes theorem is the route by which Brouwer's fixed point theorem might be
recovered here without any homotopy theory at all, see
[[rem-brouwer-fixed-point]].
