---
id: def-milnor-sphere-bundle-m-h-j
kind: definition
title: "The Milnor sphere and disk bundles $M_{h,j}$ and $W_{h,j}$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quaternionic-clutching-bundles-xi-h-j-over-s-four, def-disk-bundle-sphere-bundle-and-thom-space, thm-vector-bundle-construction-from-a-smooth-cocycle, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r, def-relative-fundamental-class-and-boundary-orientation]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 402-403, the unit sphere bundles M_{h,j} of the bundles xi_{h,j} and their bounding disk bundles"
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 1.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "clutching construction and the disk/sphere bundles of a Euclidean vector bundle, printed pp. 21-24"
---

## Definition

Let $\xi_{h,j}\to S^4$ be the oriented rank-four quaternionic clutching
bundle of [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]], with its
Euclidean metric coming from the quaternionic norm $N$ on each fibre. Give
$\xi_{h,j}$ that metric; it is preserved by the clutching maps and hence
descends to a smooth bundle metric. Define
$$W_{h,j}:=D(\xi_{h,j})=\{v\in\xi_{h,j}:\lVert v\rVert\le1\},\qquad M_{h,j}:=S(\xi_{h,j})=\{v\in\xi_{h,j}:\lVert v\rVert=1\}=\partial W_{h,j},$$
the closed disk bundle and the unit sphere bundle of [[def-disk-bundle-sphere-bundle-and-thom-space]].
Then $W_{h,j}$ is a compact oriented smooth eight-manifold with boundary, and
$M_{h,j}=\partial W_{h,j}$ is a closed oriented smooth seven-manifold, the
total space of a smooth $S^3$-bundle
$$S^3\longrightarrow M_{h,j}\longrightarrow S^4 .$$
The orientation of $W_{h,j}$ is the one for which the base orientation of
$S^4$ followed by the fibre orientation of $\xi_{h,j}$ is positive, and the
orientation of $M_{h,j}$ is induced from $W_{h,j}$ by the outward-normal-first
convention of [[def-relative-fundamental-class-and-boundary-orientation]].

## Remarks

**Why the bundles exist.** The clutching map $g_{h,j}$ is the restriction to
$S^3$ of a polynomial map into $\operatorname{Mat}_{4\times4}(\mathbb R)$:
for negative exponents use powers of $\bar a$. Its values on $S^3$ lie in
$SO(4)$, so the clutching map is smooth and orientation preserving; over
each closed hemisphere the bundle is trivial, and over the
equatorial collar the two trivializations are compared by $g_{h,j}$. The
smooth cocycle constructed this way satisfies the transition identities, so
[[thm-vector-bundle-construction-from-a-smooth-cocycle]] produces a smooth
rank-four vector bundle $\xi_{h,j}$ on $S^4$, whose total space has dimension
$4+4=8$ ([[prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r]]).
The quaternionic norm is preserved by $g_{h,j}$ because
$N(a^hva^j)=N(v)$ for $N(a)=1$, so it is constant along the clutching orbits
and descends to a smooth bundle metric on $\xi_{h,j}$
([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]); the
disk and sphere bundles are taken with respect to this metric as in
[[def-disk-bundle-sphere-bundle-and-thom-space]].

**Dimension and boundary.** Fibrewise, $D(\xi_{h,j})$ is the closed unit
ball in $\mathbb R^4$ and its boundary is the unit sphere $S^3$; over the base
$S^4$ this gives a smooth fiber bundle with fibre $D^4$ and boundary the
corresponding $S^3$-bundle. Compactness follows from compactness of $S^4$ and
of the closed unit ball, and the oriented smooth structures and boundary
orientation are those fixed above. The sphere bundle $M_{h,j}$ is the total
space of the fibration displayed, so the long exact homotopy sequence of a
fibration applies to it. Nothing here asserts that $M_{h,j}$ is a homotopy
sphere; that is proved separately under the Euler-number hypothesis
$h+j=\pm1$.
