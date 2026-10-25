---
id: def-relative-smooth-triangulation-and-projection-preserving-fitting
kind: definition
title: "Relative smooth triangulations, strong approximation and bundle fitting"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-subcomplex-star-closure-and-link]
justified_by: []
aliases: []
landmark: true
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Chapter II §§7-10, printed pp. 69-108 (PDF pp. 74-113): §8.1-8.4 whole-star immersion/embedding, §8.5 strong delta-approximation printed p. 83, §§9.1-9.4 secants, radius and thickness printed pp. 90-93, §§9.6-9.8 relative secants and extension printed pp. 94-96, §§10.1-10.4 fitting printed pp. 97-103, §§10.5-10.6 boundary extension printed pp. 103-105, Problems 10.11-10.14 printed pp. 106-108"
    - title: "H. Putz, Triangulation of fibre bundles, Canadian Journal of Mathematics 19 (1967), pp. 499-513"
      url: "https://doi.org/10.4153/CJM-1967-042-3"
      locator: "§§1.1-1.10 definitions, diagrams, shifts and fitting in a full subcomplex, printed pp. 499-501; Theorem 2.1 and Corollaries 2.2-2.5 printed pp. 501-505; §§3.1-3.4 secants and fitting with a fixed linear subcomplex printed pp. 508-510"
---

## Definition

A finite geometric simplicial complex $K$ is considered with its Euclidean
realization and induced metric; subcomplex, closure, star and link terminology
follows [[def-simplicial-subcomplex-star-closure-and-link]]. For $b\in|K|$ the
**tangent star** is the union of the tangent cones at $b$ of all simplices
containing $b$, that is, the rays locally contained in the closed star.

A map $f:|K|\to M$ is **piecewise smooth** when every restriction $f|\sigma$ to
a closed simplex extends smoothly to a neighbourhood in its affine hull and the
extensions agree on common faces. In a target coordinate chart the differential
$df_b$ is then the well-defined continuous piecewise linear map on the tangent
star that equals $D(f|\sigma)(b)$ on the cone of each simplex $\sigma$
containing $b$; agreement on common faces makes it independent of the chosen
containing simplex. A **smooth immersion of a complex** requires $df_b$
injective on the entire tangent star at every point, not merely on each simplex
tangent space; a **smooth embedding** requires in addition that $f$ be a
homeomorphism onto its image, and a **finite smooth triangulation** of $M$ is
such an embedding onto $M$. A corner-adapted triangulation must be face
compatible: the inverse image of each local corner face is locally the restriction of a
subcomplex, and the
differential fan maps the source tangent star homeomorphically onto the
appropriate tangent orthant, or its specified face sector. This last local
orthant condition is the corner-adapted triangulation contract.

After an ambient Euclidean realization of the target, or in a fixed finite
family of compact target chart patches, $g:K'\to M$ on a finite subdivision
$K'$ of $K$ is a **strong $C^1$ $\delta$-approximation** to $f$, for $\delta>0$, if
$\sup_b|g(b)-f(b)|<\delta$ and $|dg_b(v)-df_b(v)|<\delta|v|$ for all $b$ and
all nonzero tangent-star vectors $v$. A relative approximation **fixed on $L$** means
$g|_{|L|}=f|_{|L|}$, subdivision of $L$ permitted unless explicitly prohibited.
**Shape control** means a positive lower bound on
$r(\sigma)/\operatorname{diam}\sigma$ for every positive-dimensional simplex,
where $r(\sigma)$ is the distance from the barycentre to the relative boundary;
it is not asserted for arbitrary iterated barycentric subdivisions.

Two embeddings $f_i:K_i\to M$ **fit in a subcomplex** if the inverse images of
$f_1(|K_1|)\cap f_2(|K_2|)$ are subcomplexes $L_i$ and
$f_2^{-1}f_1:L_1\to L_2$ is a simplexwise affine isomorphism; the fit is
**full** if every simplex all of whose vertices belong to $L_i$ belongs to
$L_i$. For a full fit, gluing along that isomorphism gives a finite simplicial
complex and its union map: simplices from opposite sides can share only
vertices of the glued full subcomplex, so their common vertices span a common
face. For a fit that is not full, first barycentrically subdivide both sides
compatibly to make the common subcomplex full, then glue. The union map is
well defined because the maps agree on the identified points.

For a smooth bundle $\pi:E\to B$ and a supplied base triangulation $h:D\to B$,
a **projection-preserving diagram** consists of $F:K\to E$ and a map $r:K\to D$
that is affine on each simplex into a simplex of the original $D$ and satisfies
$\pi F=hr$; the affine/PL requirement does not require domain vertices to map
to vertices of the original fixed base complex. Fitting preserves the
projection when all modified maps satisfy the same equality with the original
$h$ and the original affine $r$ restricted to their subdivisions; a fixed
relative bundle piece must already carry such a diagram. A projection-preserving
diagram is determined by the pair $(F,r)$ together with its restrictions to
subdivisions, so a modification supported away from a piece leaves the original
diagram there exactly on the nose. No generic smooth map is called a bundle
merely because it is proper.

For relative extension on a compact manifold with corners, supplied boundary
data are admissible only when they are compatible on all corner-face
intersections and satisfy the tangent-orthant condition above; the extension
keeps their pointwise parametrization, with compatible subdivisions permitted,
and no extension of arbitrary incompatible boundary data is asserted.
