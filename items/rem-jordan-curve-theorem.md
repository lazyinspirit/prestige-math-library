---
id: rem-jordan-curve-theorem
kind: remark
title: "The Jordan curve theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "A simple closed curve in the plane has exactly two complementary components"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jordan curve theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_curve_theorem"
    - title: "A. Hatcher, Algebraic Topology, Section 2.B (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
    - title: "Alexander horned sphere (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexander_horned_sphere"
pipeline_run: null
---

## Statement

Let $J \subset \mathbb{R}^2$ be a **Jordan curve**, that is, a subspace
homeomorphic to $S^1$, equivalently the image of an injective continuous map
$\gamma \colon [0,1] \to \mathbb{R}^2$ with $\gamma(0) = \gamma(1)$ and no other
repeated value. Then $\mathbb{R}^2 \setminus J$ has exactly two connected
components, one bounded (the interior) and one unbounded (the exterior), and $J$
is the topological boundary of each.

Two companions, also not proved here:

* **Jordan-Schoenflies.** In the plane the conclusion can be upgraded: every
  homeomorphism $S^1 \to J$ extends to a homeomorphism of $\mathbb{R}^2$ onto
  itself, so the pair $(\mathbb{R}^2, J)$ is homeomorphic to
  $(\mathbb{R}^2, S^1)$ and the interior is an open disc.
* **The failure in higher dimensions.** The separation statement survives, an
  embedded $S^{n-1}$ in $\mathbb{R}^n$ separates it into exactly two components,
  but the Schoenflies upgrade does not: Alexander's horned sphere is an embedded
  $2$-sphere in $\mathbb{R}^3$ whose unbounded complementary component is not
  simply connected, so no self-homeomorphism of $\mathbb{R}^3$ carries it to the
  round sphere.

## Remarks

**Not proved in this library.**

**What would prove it.** The standard modern proof is homological: a Mayer-Vietoris
induction shows that for an embedded $S^k$ in $S^n$ the reduced homology of the
complement is that of $S^{n-k-1}$, which for $k = n-1$ gives exactly two
components; see [[rem-homology-and-cohomology]]. There are also winding-number
proofs in the plane, which need [[rem-pi1-circle-is-z]] or an equivalent
elementary degree theory, and a genuinely elementary proof for **polygonal**
curves by the parity of crossings of a generic ray. The polygonal case is within
reach of this library's methods; the general case is not, and the gap between
them is exactly where the difficulty of the theorem lies, since a Jordan curve
need not be rectifiable or even locally well behaved anywhere.

**Why it matters here.** Plane analysis quietly assumes it. Green's theorem, the
Cauchy integral theorem in its "inside a closed contour" form, and every argument
that speaks of "the region enclosed by a closed curve" presuppose that a closed
curve encloses a region. This library must therefore state such theorems for
regions given by an explicit description, for instance a region between two
graphs, a finite union of such, or a domain given with its boundary
parametrisation and an orientation convention, rather than for the interior of an
arbitrary Jordan curve. That restriction is not laziness; it is the honest
consequence of not having proved this theorem.
