---
id: def-fuchsian-dirichlet-domains-and-cusp-data
kind: definition
title: Fuchsian Dirichlet domains and cusp data
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, author text
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
    locator: 'Sections 4.10-4.11, printed pp.75-77: fundamental/Dirichlet domains
      and face-cycle setup. The finite-area and cusp arguments here are supplied locally.'
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version 1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections 2.1-2.4 and 3.8-3.9: models and horospheres. Sections 5.10-5.11
      are a distinct thick-thin treatment in the manifold setting, not an imported
      proof of the torsion-bearing Fuchsian assertion.'
dependency_level: 0
---

## Definition

Let $\mathbb H=\{x+iy:y>0\}$ have path length element
$ds=|dz|/y$ and area $dA=dx\,dy/y^2$. Its ideal compactification is the
closed disc obtained by adjoining $\mathbb R\cup\{\infty\}$ via the Cayley
map. A geodesic half-plane is either side of a complete geodesic in
$\mathbb H$. A finite geodesic polygon is a closed convex region bounded
by finitely many maximal geodesic sides, with nonempty interior; a vertex
may lie in $\mathbb H$ or on the ideal boundary. Angles are measured in
the conformal metric.

The group $\operatorname{PSL}_2(\mathbb R)$ consists of determinant-one
real matrices modulo $\{\pm I\}$, acting by
$z\mapsto(az+b)/(cz+d)$. A subgroup $\Delta$ is discrete when the identity
is isolated in its matrix topology. It is cofinite when the quotient
orbifold has finite area for the area measure induced in its local
isometric charts. A point $p\in\mathbb H$ is free if its stabilizer is
trivial. For such a point define its closed Dirichlet region by
$$D_p=\{z\in\mathbb H:d(z,p)\le d(z,\delta p)\text{ for all }\delta\in\Delta\}.$$
A side pairing is the group element taking one of the two tiles adjacent
to an open side to the other. An ordinary vertex is a genuine corner
with angle strictly less than $\pi$; subdivisions of a straight side are
discarded.

A nonidentity parabolic element is conjugate to $z\mapsto z+t$ with
$t\ne0$; its unique ideal fixed point is a cusp. A cusp class is its
$\Delta$-orbit. A standard cusp normalization sends a cusp to $\infty$
and its full stabilizer to
$\langle z\mapsto z+1\rangle$. A normalized cusp horoball is
$H_\xi(Y)=N_\xi^{-1}\{y>Y\}$ in such a normalization. An open set $U$ is
precisely invariant under a subgroup $P$ if $PU=U$ and
$\delta U\cap U=\varnothing$ for every $\delta\notin P$.
A compact standard-cusp truncation means finitely many pairwise
disjoint embedded cusp cylinders, one for every cusp class, whose
complement in the quotient is compact. These definitions assert no
existence or finiteness theorem.
