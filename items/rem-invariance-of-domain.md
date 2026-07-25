---
id: rem-invariance-of-domain
kind: remark
title: "Invariance of domain"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "A continuous injection from an open subset of R^n into R^n is an open map"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Invariance of domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Invariance_of_domain"
    - title: "L. E. J. Brouwer, Beweis der Invarianz des n-dimensionalen Gebiets, Math. Ann. 71 (1912) 305-313"
      url: "https://doi.org/10.1007/BF01456846"
    - title: "invariance of dimension (nLab)"
      url: "https://ncatlab.org/nlab/show/invariance+of+dimension"
    - title: "A. Hatcher, Algebraic Topology, Theorem 2B.3 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
pipeline_run: null
---

## Statement

**(Brouwer, 1912.)** Let $U \subseteq \mathbb{R}^n$ be open and let
$f \colon U \to \mathbb{R}^n$ be continuous and injective. Then $f(U)$ is open in
$\mathbb{R}^n$ and $f$ is a homeomorphism of $U$ onto $f(U)$.

Two immediate reformulations, equally not proved here: a subspace of
$\mathbb{R}^n$ homeomorphic to an open subset of $\mathbb{R}^n$ is itself open;
and a topological $n$-manifold cannot be homeomorphic to an open subset of
$\mathbb{R}^m$ for $m < n$.

**The case $n = 1$ is in scope.** A continuous injection from an interval into
$\mathbb{R}$ is strictly monotone, by the intermediate value theorem, hence maps
open intervals to open intervals and is a homeomorphism onto its image. That
argument is elementary and uses nothing deferred. It also does not generalise:
for $n \geq 2$ there is no ordering to exploit.

## Remarks

**Not proved in this library.**

**What would prove it.** Local homology, or equivalently the homology of spheres:
one shows that for a compact $D \subseteq S^n$ homeomorphic to a ball the
complement is connected, and for $S \subseteq S^n$ homeomorphic to a sphere the
complement has the homology of a sphere, then deduces openness pointwise. The
machinery is [[rem-homology-and-cohomology]]. Degree theory, or a proof by way
of the no-retraction theorem in [[rem-brouwer-fixed-point]], are the other
standard routes. There is no known proof by point-set methods alone; the result
is genuinely a theorem of algebraic topology, and it was one of the first.

**Why it matters here.** Three things depend on it that a careful reader will
notice are missing.

* **Dimension is a topological invariant**, see
  [[rem-dimension-invariance-of-euclidean-space]].
* **The boundary of a manifold is well defined.** Without invariance of domain
  there is nothing to stop a point being interior in one chart and a boundary
  point in another, and every statement about manifolds with boundary, including
  the general Stokes theorem, rests on that not happening.
* **Injective continuous maps in analysis are open.** The inverse function
  theorem gives this under a derivative hypothesis, by an argument this library
  can run; invariance of domain gives it with no differentiability at all, which
  is the version needed whenever one has injectivity but no smoothness.
