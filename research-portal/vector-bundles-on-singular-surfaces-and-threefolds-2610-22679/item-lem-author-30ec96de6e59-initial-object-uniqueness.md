---
title: Uniqueness of an initial object
status: published
research_item: lem-author-30ec96de6e59-initial-object-uniqueness
dependency_level: 0
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)


## Statement
Any two initial objects of a category are uniquely isomorphic. An object is initial if it has exactly one arrow to every object.

## Facts & Assumptions

[F1] A category supplies objects, arrows, identity arrows and composition of composable arrows, as in [math:def-category](https://alphabetamath.cc/item/def-category).

[F2] An arrow $f:I\to J$ is an isomorphism if there is an arrow $g:J\to I$ with $gf=\operatorname{id}_I$ and $fg=\operatorname{id}_J$, as in [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category).

**Given:** Initial objects $I$ and $J$ in a category.

**Goal:** Prove there is a unique isomorphism $I\to J$.

## Proof

1.1 Initiality supplies unique arrows $f:I\to J$ and $g:J\to I$. Since each initial object has only one endomorphism, $gf=\operatorname{id}_I$ and $fg=\operatorname{id}_J$. [given, F1]

2.1 Thus $f$ is an isomorphism with inverse $g$; it is unique because there is only one arrow from $I$ to $J$. [given, F2, step 1.1] ∎
