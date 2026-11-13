---
id: def-author-18fc5d9b80f3-garside-groupoid
kind: definition
title: Groupoid completion and Garside groupoids
status: published
domain: mathematics
origin: pipeline
deps:
  - def-garside-interface-artin-tits-prerequisites
  - math:def-category
  - math:def-isomorphism-groupoid-and-connected-category
  - math:ex-the-free-category-on-a-quiver
  - math:def-equivalence-relation
  - math:def-semigroup-and-monoid
  - math:def-small-locally-small-and-large-category
  - math:def-group
  - math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
dependency_roles:
  def-garside-interface-artin-tits-prerequisites: mathematical-premise
  math:def-category: mathematical-premise
  math:def-isomorphism-groupoid-and-connected-category: mathematical-premise
  math:ex-the-free-category-on-a-quiver: mathematical-premise
  math:def-equivalence-relation: mathematical-premise
  math:def-semigroup-and-monoid: mathematical-premise
  math:def-small-locally-small-and-large-category: mathematical-premise
  math:def-group: mathematical-premise
  math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 2
---

## Definition

For a small category $\mathcal C$, form a directed graph with its objects as vertices, one edge $[f]:x\to y$ for each arrow $f:x\to y$, and a formal reverse edge $[f]^{-1}:y\to x$. Take finite directed paths and identify paths by the smallest equivalence relation compatible with concatenation containing $[1_x]=1_x$, $[f][g]=[fg]$ for composable arrows, and $[f][f]^{-1}=1_x$, $[f]^{-1}[f]=1_y$. The resulting category is the groupoid completion of $\mathcal C$. A Garside groupoid is a groupoid isomorphic to the completion of a Garside category. In the one-object case the completion is a group, called the group of fractions of that categorical Garside monoid.

## Definition references

[[def-garside-interface-artin-tits-prerequisites]]

[[math:def-category]]

[[math:def-isomorphism-groupoid-and-connected-category]]

[[math:ex-the-free-category-on-a-quiver]]

[[math:def-equivalence-relation]]

[[math:def-semigroup-and-monoid]]

[[math:def-small-locally-small-and-large-category]]

[[math:def-group]]

[[math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]

## Justification

The intersection of all concatenation-compatible equivalence relations containing the listed relations exists, since the relation identifying all paths with the same endpoints is one such relation. The quotient inherits associative composition and identities from paths. Reversing a path and reversing each edge gives an inverse in the quotient, so every arrow is invertible. With one object, this groupoid is a group. This construction alone does not assert that the original category embeds in its completion.
