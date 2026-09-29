---
page: "zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples"
title: "Zariski Tangent Spaces, Regular Points, Smoothness, and Bertini — Examples"
status: draft
items: []
examples:
  - ex-tangent-space-parabola
  - ex-node-two-tangent-directions
  - ex-cusp-double-tangent
  - ex-smooth-quadric-hypersurface
  - cex-nonreduced-hypersurface-jacobian
  - cex-regular-not-smooth-purely-inseparable-point
  - cex-bertini-characteristic-p-failure
  - ex-tangent-space-product-origin
  - ex-projective-cone-singular-vertex
  - cex-generic-target-smoothness-needs-smooth-source
  - ex-determinantal-quadric-singularity
  - ex-tangent-spaces-general-and-special-linear-groups
  - ex-tangent-dimension-distinguishes-three-line-configurations
  - ex-higher-plane-curve-tangent-cones
  - ex-orthogonal-and-symplectic-tangent-matrices
  - ex-irreducible-curve-with-arbitrary-embedding-dimension
  - cex-nonradical-ideal-can-have-the-same-tangent-space
---

The examples compute the theory on explicit equations. The parabola has a
one-dimensional tangent space at each rational point, given by the Jacobian row
$(-2a,1)$, with no restriction on the characteristic; the node
$y^2=x^2+x^3$ has two distinct tangent directions as soon as the
characteristic is not two; and the cusp $y^2=x^3$ is the first singular case,
with two-dimensional tangent space at the origin, multiplicity two and the
doubled $x$-axis as its scheme-theoretic tangent cone, whose reduction spans
only a line. Five higher plane curves exhibit tangent cones of multiplicities
two through five with explicitly different reduced spans, a smooth quadric
hypersurface exhibits the multiplicity-one case, and the determinantal quadric
$xt-yz$ and the projective cone over a smooth conic contribute standard
singular points in higher dimension. The tangent spaces of the general and
special linear groups and of the orthogonal and symplectic groups are computed
as kernels of the corresponding Jacobian matrices, the tangent space of a
product of two parabolas decomposes as a direct sum at the origin, and the
coordinate axes of $\mathbb A^3_k$ are separated from every configuration cut
out in a plane by the tangent dimension at the origin alone.

The counterexamples record the failure modes that the hypotheses exclude. A
nonradical ideal need not enlarge the tangent space at every point: the ideal
$(x^2,xy)$ and its radical $(x)$ have the same one-dimensional tangent space at
$(0,1)$, where the two ideals agree after localisation, but differ at the
origin, where the nonreduced scheme has the whole plane as its tangent space.
The reduced zero set does not determine the tangent space or the singular
locus: the ideals $(x^p)$ and $(x)$ have the same reduced zero set in
$\mathbb A^1_k$, while the thickened scheme $k[x]/(x^p)$ has
one-dimensional tangent space and nonregular local ring at its only point and
the reduced point has zero-dimensional tangent space, with the vanishing
Jacobian correctly describing the thickened scheme. In characteristic $p$ a
base-point-free linear system on a smooth projective variety can have every
member singular, so Bertini needs the characteristic-zero hypothesis; a regular
purely inseparable point over an imperfect field is not smooth; target-side
generic smoothness fails without a smooth source; and the monomial curve
spanned by the consecutive monomials $t^n,\ldots,t^{2n-1}$ realises an
irreducible curve of dimension one whose tangent space at its origin has
dimension $n$, so the embedding dimension of a curve is unbounded.
