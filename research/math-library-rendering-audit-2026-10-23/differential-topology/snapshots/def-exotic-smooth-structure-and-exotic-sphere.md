---
id: def-exotic-smooth-structure-and-exotic-sphere
kind: definition
title: "Exotic smooth structure and exotic sphere"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 399, introduction (manifolds homeomorphic but not diffeomorphic to S^7); the exotic seven-spheres are constructed on pp. 402-403"
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 504-505, introduction (homotopy spheres, diffeomorphism versus homeomorphism)"
---

## Definition

Let $X$ and $Y$ be smooth manifolds. Then $X$ is an **exotic smooth structure**
on $Y$ when the underlying topological manifolds of $X$ and $Y$ are
homeomorphic and $X$ is not diffeomorphic to $Y$. An **exotic smooth
$n$-sphere** is a closed connected smooth $n$-manifold that is homeomorphic,
but not diffeomorphic, to the standard smooth sphere $S^n$.

Two clarifications belong to the definition. First, an orientation is extra
data when oriented classes are compared: a homeomorphism or diffeomorphism of
the underlying manifolds need not preserve any chosen orientation, and an
exotic sphere admits no diffeomorphism to the standard sphere in either
orientation. Second, the definition concerns the smooth category: a
homotopy equivalence alone does not assert a homeomorphism, so no exoticity
statement in this library is derived from homotopy data by itself. The
existence of exotic spheres is proved later on this page by exhibiting an
explicit seven-dimensional example.

## Remarks

The homeomorphism and diffeomorphism predicates fix the two categories being
compared, and the negation is the exoticness assertion. The reference smooth
sphere is the standard round $S^n$ with its standard smooth structure; a
manifold counted as an exotic $n$-sphere therefore carries a smooth structure
that is not diffeomorphic to that one, while its underlying topological
manifold is still homeomorphic to $S^n$. This is exactly the distinction
Milnor's 1956 paper introduced, and it is the distinction that separates the
exotic seven-spheres of this page from the standard seven-sphere.
