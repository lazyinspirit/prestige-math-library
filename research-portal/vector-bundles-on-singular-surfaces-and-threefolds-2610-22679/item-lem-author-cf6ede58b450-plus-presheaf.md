---
title: The plus construction is a presheaf
status: published
research_item: lem-author-cf6ede58b450-plus-presheaf
dependency_level: 2
---

## Prerequisites

- [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)
- [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections)


## Statement
For every set-valued presheaf on a small site, the relation and restriction maps in the plus construction are well defined; they give a presheaf F+ and a natural map η_F: F → F+. A natural map F → G induces a natural map F+ → G+.

## Facts & Assumptions
[F1] The constructions and topology axioms are those of [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F2] Finite intersections of covering sieves cover by [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections).

## Proof
**Given:** A presheaf F on a small site.

**Goal:** Establish the relation, functorial restrictions, unit and functoriality in F.

1.1 Reflexivity and symmetry of the relation are immediate. For transitivity, intersect the two covering sieves on which successive pairs agree; the intersection covers and both equalities hold there. Thus the relation is an equivalence relation. [F1, F2, given]

2.1 Pulling back a common covering sieve along an arrow gives a covering sieve on which the pulled-back families agree. Pullback of matching families respects identities and composition, so restriction descends to equivalence classes and makes F+ a presheaf. [F1, step 1.1]

3.1 Restrictions of a section along the maximal sieve define η_F, and restriction along any arrow gives the same class as applying η_F after restricting the section. Applying a natural map F → G pointwise to a matching family preserves compatibility and local equality, and commutes with restriction. These constructions prove both naturality assertions. [F1, step 2.1] ∎
