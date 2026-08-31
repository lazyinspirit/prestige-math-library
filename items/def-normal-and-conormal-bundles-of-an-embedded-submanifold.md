---
id: def-normal-and-conormal-bundles-of-an-embedded-submanifold
kind: definition
title: "Normal and conormal bundles of an embedded submanifold"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-embedded-submanifold-and-slice-chart, lem-slice-chart-restrictions-form-a-smooth-atlas, prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding, def-differential-of-a-smooth-map, def-annihilators-under-the-evaluation-pairing]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $S\subseteq M$ be an embedded submanifold.

Equip $S$ with the smooth structure supplied by
[[lem-slice-chart-restrictions-form-a-smooth-atlas]]. The inclusion
$i:S\hookrightarrow M$ is then a smooth embedding by
[[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]], so its
differential is defined. Identify $T_pS$ with the linear subspace
$di_p(T_pS)\subseteq T_pM$. Here the notation
$$TM|_S:=\coprod_{p\in S}T_pM,\qquad T^*M|_S:=\coprod_{p\in S}T_p^*M$$
means the fibrewise restriction of these disjoint unions to base points in
$S$; it does not invoke restriction to an open subset.

The **normal-bundle set** of $S$ in $M$ is the fibrewise quotient

$$\nu(S):=\coprod_{p\in S}T_pM/T_pS.$$

The **conormal-bundle set** of $S$ in $M$ is the fibrewise annihilator

$$N^*S:=\{\xi\in T^*M|_S:\xi|_{T_pS}=0\text{ for the base point }p\}.$$

Both are intrinsic constructions attached to the embedding $S\hookrightarrow M$.
The next proposition supplies their smooth vector-bundle structures.
