---
id: def-internal-central-product-of-a-family-of-subgroups
kind: definition
title: "Internal central products of a finite family of subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, def-generated-subgroup, def-subgroup-commutator-and-lower-central-series, def-center-of-a-group, def-internal-direct-product-of-subgroups]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.34"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.5"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $G_1,\dots,G_r$ be subgroups of $G$, where
$r\in\mathbb N$ ([[def-subgroup]]). Subgroups $G_1,\dots,G_r$ of $G$ form an
internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$,
where $\langle\,\cdot\,\rangle$ is the generated subgroup of
[[def-generated-subgroup]] and $[G_i,G_j]$ is the subgroup commutator of
[[def-subgroup-commutator-and-lower-central-series]]. The empty family is an
internal central product of the trivial group.

Since the factors commute pairwise, $G=G_1G_2\cdots G_r$ as a set of products,
and for $i\ne j$ every element of $G_i\cap G_j$ commutes with both $G_i$ and
$G_j$, so $G_i\cap G_j\le Z(G_i)\cap Z(G_j)$ ([[def-center-of-a-group]]).

## Remarks

The condition differs from that of an internal direct product
([[def-internal-direct-product-of-subgroups]]) in exactly one place: there the
factors are required to intersect trivially, here they are allowed to share a
central subgroup. An internal direct product of normal subgroups is in
particular an internal central product, since distinct factors of a direct
product commute elementwise.

No hypothesis is placed on the intersections beyond what the commuting condition
already forces. That is deliberate: the intersections are what the recognition
theorem computes, rather than data prescribed in advance.
