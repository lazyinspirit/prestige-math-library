---
id: def-relative-smooth-triangulation-and-projection-preserving-fitting
kind: definition
title: "Relative smooth triangulations, strong approximation and bundle fitting"
status: draft
origin: session
deps: [def-simplicial-subcomplex-star-closure-and-link]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf
      locator: "§§8.1–8.5,10.1, printed79–83,97–98"
    - title: "H. Putz, Triangulation of fibre bundles (1967)"
      url: https://doi.org/10.4153/CJM-1967-042-3
      locator: "§§1.1–1.10, printed499–501"
---

## Definition

A finite geometric simplicial complex $K$ is considered with its Euclidean realization and induced metric. For a point $b\in|K|$, its **tangent star** is the union of the tangent cones at $b$ of all simplices containing $b$. These are the rays locally contained in its closed star; subcomplex, star and face terminology follows [[def-simplicial-subcomplex-star-closure-and-link]]. A map $f:|K|\to M$ is **piecewise smooth** when the restriction to each closed simplex extends smoothly to a neighbourhood in its affine hull, with agreeing values on common faces. In a target coordinate chart its differential at $b$ is the well-defined continuous piecewise linear map $d f_b$ on the tangent star, with value $D(f|\sigma)(b)v$ on the cone of $\sigma$. Agreement on a common face makes this independent of the containing simplex.

A **smooth immersion of a complex** requires $d f_b$ injective on the entire tangent star at every point, not merely injective on each simplex tangent space. A **smooth embedding** additionally requires $f$ to be a homeomorphism onto its image. A **finite smooth triangulation** of $M$ is such an embedding onto $M$. For corners it is also required to be face compatible: every local corner face is the image of a subcomplex, and the differential fan maps the source tangent star homeomorphically onto the appropriate tangent orthant (or its specified face sector). This last local orthant condition is the corner-adapted triangulation contract.

After an ambient Euclidean realization of the target, or in a fixed finite family of compact target chart patches, $g:K'\to M$, where $K'$ is a finite subdivision of $K$, is a **strong $C^1$ $\delta$-approximation** to $f$ if $\sup_b|g(b)-f(b)|<\delta$ and $|d g_b(v)-d f_b(v)|<\delta|v|$ for all $b$ and tangent-star vectors $v$. A relative approximation **fixed on $L$** means $g|_{|L|}=f|_{|L|}$; subdivision of $L$ is permitted unless explicitly prohibited. Shape control means a positive lower bound on $r(\sigma)/\operatorname{diam}\sigma$ for every positive-dimensional simplex, where $r(\sigma)$ is the distance from its barycentre to its relative boundary. Shape control is not asserted for arbitrary iterated barycentric subdivisions.

Two embeddings $f_i:K_i\to M$ **fit in a subcomplex** if their inverse images of $f_1(|K_1|)\cap f_2(|K_2|)$ are subcomplexes $L_i$, and $f_2^{-1}f_1:L_1\to L_2$ is a simplexwise affine isomorphism. The fit is **full** if any simplex all of whose vertices belong to $L_i$ belongs to $L_i$. Gluing the two complexes along that isomorphism defines their union realization and union map.

For a smooth bundle $\pi:E\to B$ and a supplied base triangulation $h:D\to B$, a **projection-preserving diagram** consists of $F:K\to E$ and a map $r:K\to D$ that is affine on each simplex into a simplex of $D$, satisfying $\pi F=hr$. This affine/PL requirement does not require every domain vertex to map to a vertex of the original fixed base complex. Fitting preserves the projection when all modified maps satisfy the same equality with the original $h$ and the original affine $r$ restricted to their subdivisions. A fixed relative bundle piece must already carry such a diagram. No generic smooth map is called a bundle merely because it is proper.

For relative extension on a compact manifold with corners, supplied boundary data are admissible only when they are compatible on all corner-face intersections and satisfy the tangent-orthant condition above. The extension keeps their pointwise parametrization, with compatible subdivisions permitted; a claim of extending arbitrary incompatible boundary data is excluded by the definition.
