---
id: ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation
kind: example
title: "Projection-preserving product triangulation of a trivial smooth bundle"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§§7.1-7.10 rectilinear cell complexes, subdivisions and the common-subdivision theorem, printed pp. 69-77, and §§8.1-8.5 whole-star and strong-approximation conventions, printed pp. 79-83"
    - title: "H. Putz, Triangulation of fibre bundles, Canadian Journal of Mathematics 19 (1967), pp. 499-513"
      url: "https://doi.org/10.4153/CJM-1967-042-3"
      locator: "§§1.5-1.6 diagrams and the product-chart differential formula, printed pp. 499-500"
---

## Example

Let $h:D\to B$ and $g:L\to N$ be supplied finite corner-adapted whole-star smooth
triangulations ([[def-relative-smooth-triangulation-and-projection-preserving-fitting]]).
The trivial bundle $\pi:B\times N\to B$ has a finite smooth triangulation
$F:K\to B\times N$ satisfying $\pi F=hr$ for a piecewise affine map $r:K\to D$,
with $h$ unchanged. Product corner faces are subpolyhedra.

## Facts & Assumptions

**Given:** finite corner-adapted whole-star smooth triangulations $h:D\to B$ and $g:L\to N$, and the trivial bundle $\pi:B\times N\to B$, $\pi(b,n)=b$, in the sense of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F1] A finite convex cell complex can be triangulated compatibly, with the triangulation subdividing each cell ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F2] Whole-star smooth embeddings, corner-adapted triangulations and affine-base projection-preserving diagrams have the meanings fixed in [[def-relative-smooth-triangulation-and-projection-preserving-fitting]]: a map is a whole-star embedding when it is a homeomorphism onto its image and its differential is injective on the whole tangent star, and a projection-preserving diagram for $\pi$ over $h$ consists of $F$ and a piecewise affine $r$ with $\pi F=hr$.

## Verification

**Proof technique:** direct.

1.1 The cells $\sigma\times\tau$, with $\sigma$ a simplex of $D$ and $\tau$ a simplex of $L$, form a finite convex cell complex: the intersection $(\sigma_1\times\tau_1)\cap(\sigma_2\times\tau_2)=(\sigma_1\cap\sigma_2)\times(\tau_1\cap\tau_2)$ is a product of common faces, hence a common face of $\sigma_1\times\tau_1$. By [F1] there is a finite compatible triangulation $K$ of $|D|\times|L|$ subdividing these cells. Define $F(x,y):=(h(x),g(y))$ and $r(x,y):=x$. Every simplex $s$ of $K$ lies in a product cell $\sigma\times\tau$, so $F|_s$ is the restriction of the smooth map $(h|_\sigma)\times(g|_\tau)$ and $r|_s$ is the restriction of the affine projection $\operatorname{pr}_1$ onto $\sigma$; on common faces the two restrictions agree, so $F$ is piecewise smooth and $r$ is affine on each simplex into a simplex of the original $D$. Pointwise $\pi F(x,y)=h(x)=h(r(x,y))$, so $\pi F=hr$ with the original $h$ unchanged. [F1, F2, given, algebra]

2.1 The map $F$ is a homeomorphism onto $B\times N$ because $h$ and $g$ are homeomorphisms onto their images and $F$ is their product; its differential on the tangent star at $(x,y)$ is $(u,v)\mapsto(dh_x(u),dg_y(v))$, where $(u,v)$ runs through the tangent cone of a refined simplex contained in $\sigma\times\tau$, so $u$ lies in the cone $\sigma-x$ of the tangent star of $D$ at $x$ and $v$ in $\tau-y$. If two tangent-star vectors $(u,v)$ and $(u\prime,v\prime)$ have the same product differential, then $dh_x(u)=dh_x(u\prime)$ and $dg_y(v)=dg_y(v\prime)$. Whole-star injectivity of the two factors gives $u=u\prime$ and $v=v\prime$; hence the product differential is injective on the whole tangent star, even after the product-cell subdivision. The corner-face fans of the product are products of those of the factors, and their zero sets are correspondingly products, so the product triangulation is corner adapted; moreover every product face $\sigma\times\tau$ is a union of cells of the triangulation by [F1], so product corner faces are subpolyhedra. Thus $F:K\to B\times N$ is a finite corner-adapted whole-star smooth triangulation with $\pi F=hr$ and $h$ unchanged, proved directly without invoking the general bundle theorem. [F1, F2, step 1.1] ∎
