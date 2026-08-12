---
id: def-derived-series-solvable-group-and-derived-length
kind: definition
title: "The derived series, solvable groups, and derived length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

The **derived series** of a group $G$ is defined recursively by
$$G^{(0)}=G,\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$
Each term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].

The group $G$ is **solvable** if $G^{(n)}=1$ for some $n\in\mathbb N$. Its **derived length** is the least such $n$. This least index exists because the set of terminating indices is a nonempty subset of $\mathbb N$ and every such subset has a least element ([[thm-well-ordering-principle]]). Thus the trivial group has derived length $0$, and a nontrivial abelian group has derived length $1$.
