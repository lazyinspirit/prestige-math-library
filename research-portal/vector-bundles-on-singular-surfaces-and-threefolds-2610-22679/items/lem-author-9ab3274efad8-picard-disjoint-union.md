---
id: lem-author-9ab3274efad8-picard-disjoint-union
kind: lemma
title: Picard groups of finite disjoint unions
status: published
domain: mathematics
deps:
  - math:def-picard-group-scheme
dependency_roles:
  math:def-picard-group-scheme: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
For a finite disjoint union of open and closed subschemes $X=\coprod_iX_i$, restriction gives an isomorphism $\operatorname{Pic}(X)\cong\prod_i\operatorname{Pic}(X_i)$. The empty union has the zero Picard group.

A line bundle is a sheaf of modules locally isomorphic to the structure sheaf. Its isomorphism classes form the Picard group under tensor product.

## Facts & Assumptions
[F1] The Picard group is the group of line-bundle isomorphism classes under tensor product ([[math:def-picard-group-scheme]]).

**Given:** A finite disjoint union as stated.

**Goal:** Establish the restriction isomorphism.

## Proof
1.1 A line bundle on $X$ restricts to one on each $X_i$. Conversely, sheaves on the disjoint open pieces glue uniquely because all pairwise intersections are empty; gluing line bundles gives a line bundle, since local freeness is checked on these open pieces. Restriction and gluing are inverse up to isomorphism, also for the empty union. [given, construct]

2.1 Restriction commutes with tensor products, and gluing does so componentwise. The bijection of step 1.1 is therefore a group isomorphism by [F1]. For the empty scheme there is one line-bundle class, the identity. [F1, step 1.1] ∎
