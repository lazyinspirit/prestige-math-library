---
id: rem-universal-cover-existence-artin-tits-normalisers
kind: remark
title: Existence of universal connected groupoid covers
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-groupoid-conventions-artin-tits-normalisers
  - def-groupoid-cover-artin-tits-normalisers
  - thm-groupoid-cover-input-artin-tits-prerequisites
  - prop-cover-exact-artin-tits-normalisers
dependency_roles:
  def-groupoid-conventions-artin-tits-normalisers: mathematical-premise
  def-groupoid-cover-artin-tits-normalisers: mathematical-premise
  thm-groupoid-cover-input-artin-tits-prerequisites: mathematical-premise
  prop-cover-exact-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 2, §1.2.1 before Theorem 1.3; p. 6, §2.4
      reading_limits: The frozen article text at these passages was read for
        attribution and conventions. The article is not used as a proof premise.
formulation_deps:
  - def-groupoid-conventions-artin-tits-normalisers
  - def-groupoid-cover-artin-tits-normalisers
  - thm-groupoid-cover-input-artin-tits-prerequisites
  - prop-cover-exact-artin-tits-normalisers
argument_deps:
  - def-groupoid-conventions-artin-tits-normalisers
  - def-groupoid-cover-artin-tits-normalisers
  - thm-groupoid-cover-input-artin-tits-prerequisites
  - prop-cover-exact-artin-tits-normalisers
dependency_level: 9
---

## Statement

Every nonempty connected small groupoid $\mathcal G$ has a universal connected groupoid covering $F:\widetilde{\mathcal G}\to\mathcal G$. For every object $x$ of $\mathcal G$, the deck transformation group $\operatorname{Deck}(F)$ is isomorphic to the vertex group $\mathcal G_x$.

Here a groupoid is a category in which every morphism is invertible; connected means that any two objects are joined by a morphism. The vertex group at $x$ consists of the morphisms from $x$ to itself. A covering has a unique lift of each base morphism from each prescribed object over its source. It is universal when all upstairs vertex groups are trivial. A deck transformation is an automorphism of the upstairs groupoid whose composite with $F$ equals $F$.

## Statement references

[[def-groupoid-conventions-artin-tits-normalisers]]

[[def-groupoid-cover-artin-tits-normalisers]]

[[thm-groupoid-cover-input-artin-tits-prerequisites]]

[[prop-cover-exact-artin-tits-normalisers]]

## Facts & Assumptions

**Given:** A nonempty connected small groupoid $\mathcal G$ and an object $x$ of $\mathcal G$.

[F1] A connected covering of $\mathcal G$ with trivial characteristic subgroup at $x$ exists and is universal; its upstairs vertex groups are trivial. Such a covering is normal because the trivial subgroup is normal. [[thm-groupoid-cover-input-artin-tits-prerequisites]]

[F2] For a normal covering of nonempty connected small groupoids, the vertex-group exact sequence identifies the deck group with the base vertex group when the covering is universal. [[prop-cover-exact-artin-tits-normalisers]]

[F3] The covering, universal-cover and deck-transformation conventions are those stated above. [[def-groupoid-cover-artin-tits-normalisers]] The groupoid and vertex-group conventions are as stated above. [[def-groupoid-conventions-artin-tits-normalisers]]

## Proof

**Proof technique:** direct.

**Goal:** Construct a universal connected covering and identify its deck group with $\mathcal G_x$.

1.1 By [F1], the trivial subgroup of $\mathcal G_x$ gives a connected covering $F:\widetilde{\mathcal G}\to\mathcal G$ whose upstairs vertex groups are trivial. By the convention in [F3], this covering is universal. The same fact gives normality. [F1, F3, given]

2.1 Apply [F2] to this normal universal covering: its deck transformation group is isomorphic to $\mathcal G_x$. The construction works for any chosen object $x$, proving the statement. [F2, step 1.1, given] ∎

## Source notes

The article citation attributes the assertion. The proof uses the independent groupoid-covering input and the stated exact-sequence consequence.
