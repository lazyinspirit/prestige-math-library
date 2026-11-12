---
id: lem-author-b747b28c359f-derived-cohomology
kind: lemma
title: Cohomology descends to the derived category
status: published
domain: mathematics
deps:
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-cochain-maps
  - lem-author-b747b28c359f-homotopy-cohomology
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-homotopy-category-of-chain-complexes
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:def-functor-and-contravariant-functor
dependency_roles:
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  lem-author-b747b28c359f-cochain-maps: mathematical-premise
  lem-author-b747b28c359f-homotopy-cohomology: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-homotopy-category-of-chain-complexes: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
For each integer $i$, cohomology defines a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$. Here $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms; a quasi-isomorphism is a cochain map inducing an isomorphism on every cohomology group.

## Facts & Assumptions

[F1] The derived category is the localization of the homotopy category of complexes at quasi-isomorphisms ([[math:def-derived-category-of-an-abelian-category]]). A functor inverting the localized arrows factors through the localization by its universal property ([[math:def-localization-of-a-category-at-a-class-of-morphisms]]). We use the same-object localization model and the standing size convention of these interfaces; this argument makes no additional assertion of local smallness.

[F2] Cochain maps induce functorial cohomology maps, and homotopic maps induce equal maps ([[lem-author-b747b28c359f-cochain-maps]], [[lem-author-b747b28c359f-homotopy-cohomology]]).

[F3] The category $\operatorname{Ab}$ of abelian groups and homomorphisms is an abelian category ([[math:thm-abelian-groups-form-an-abelian-category]]), so the derived-category construction in [F1] applies to it.

[F4] Cochain complexes have differentials $d^n:C^n\to C^{n+1}$ with $d^{n+1}d^n=0$ ([[math:def-cochain-complex-in-an-abelian-category]]). Under reindexing $C^\sharp_n=C^{-n}$, the cochain homotopy category $K(\operatorname{Ab})$ has these complexes as objects and cochain-homotopy classes of maps as morphisms, with composition induced by representatives ([[math:def-homotopy-category-of-chain-complexes]]).

[F5] A covariant functor assigns objects and morphisms and preserves identities and composition ([[math:def-functor-and-contravariant-functor]]).

## Proof

**Given:** An integer $i$ and the derived category described in the statement.

**Goal:** Construct the stated functor.

1.1 By [F2], the assignments $C\mapsto H^i(C)$ and $[f]\mapsto H^i(f)$ are well defined on the objects and morphisms of the homotopy category in [F4], with values in $\operatorname{Ab}$ from [F3]. They preserve identities and composition, hence form a functor by [F5]. Every quasi-isomorphism becomes an isomorphism under this functor by the definition of quasi-isomorphism in the statement. [F2, F3, F4, F5, given]

2.1 The localization universal property in [F1] therefore gives a functor on $D(\mathbb Z)$ whose composite with localization is the functor of step 1.1. Thus cohomology and its maps depend only on the derived-category object and morphism. [F1, step 1.1] ∎
