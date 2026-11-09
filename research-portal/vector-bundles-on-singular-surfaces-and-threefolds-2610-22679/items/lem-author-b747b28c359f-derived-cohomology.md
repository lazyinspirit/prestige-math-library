---
id: lem-author-b747b28c359f-derived-cohomology
kind: lemma
title: Cohomology descends to the derived category
status: draft
domain: mathematics
deps:
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-cochain-maps
  - lem-author-b747b28c359f-homotopy-cohomology
dependency_roles:
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  lem-author-b747b28c359f-cochain-maps: mathematical-premise
  lem-author-b747b28c359f-homotopy-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
For each integer $i$, cohomology defines a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$. Here $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms; a quasi-isomorphism is a cochain map inducing an isomorphism on every cohomology group.

## Facts & Assumptions

[F1] The derived category is the localization of the homotopy category of complexes at quasi-isomorphisms and has the corresponding universal property ([[math:def-derived-category-of-an-abelian-category]]).

[F2] Cochain maps induce functorial cohomology maps, and homotopic maps induce equal maps ([[lem-author-b747b28c359f-cochain-maps]], [[lem-author-b747b28c359f-homotopy-cohomology]]).

## Proof

**Given:** An integer $i$ and the derived category described in the statement.

**Goal:** Construct the stated functor.

1.1 By [F2], taking $i$th cohomology is a functor on the homotopy category. Every quasi-isomorphism becomes an isomorphism under this functor by the definition of quasi-isomorphism. [F2, given]

2.1 The localization universal property in [F1] therefore gives a functor on $D(\mathbb Z)$ whose composite with localization is the functor of step 1.1. Thus cohomology and its maps depend only on the derived-category object and morphism. [F1, step 1.1] ∎
