---
id: def-reeb-component-in-a-cooriented-three-manifold-foliation
kind: definition
title: "Reeb components of a codimension-one foliation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary, def-saturated-neighbourhood-of-a-leaf, def-embedded-submanifold-and-slice-chart, def-smooth-embedding, def-two-dimensional-torus, def-euclidean-spheres-and-closed-balls, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "\u00a74.3, printed pp. 144-145"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a codimension-one regular
foliation of a $3$-manifold $M$, and let $X=\overline D^2\times S^1$ be the closed solid
torus with its standard **Reeb foliation** $F_{\mathrm{Reeb}}$ ([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]]): the boundary $\partial X$ is a compact
leaf diffeomorphic to $T^2$ and every interior leaf is a plane accumulating on $\partial
X$. A **Reeb component** of $F$ is a saturated subset $R\subseteq M$, compact as a
subset, for which there is a homeomorphism $\Phi:X\to R$ mapping leaves of
$F_{\mathrm{Reeb}}$ onto leaves of $F|_R$ and $\partial X$ onto a leaf of $F$;
equivalently, $R$ is compact and saturated, homeomorphic to the solid torus, has a
single compact leaf as boundary, and its interior foliation is foliated-homeomorphic to
the Reeb foliation. In the smooth models of this page the conjugacy may be taken smooth;
in the general closed-leaf construction of lem-the-compact-leaf-produced-by-a-vanishing-
cycle-bounds-a-reeb-component the source produces a foliated homeomorphism, so the
topological form of the definition is the one used. A foliation with no Reeb component
is called **Reebless**.
