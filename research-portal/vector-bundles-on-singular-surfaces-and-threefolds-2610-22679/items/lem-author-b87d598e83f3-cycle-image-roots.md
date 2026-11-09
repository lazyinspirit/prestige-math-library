---
id: lem-author-b87d598e83f3-cycle-image-roots
kind: lemma
title: Divisibility of an image with torsion kernel
status: draft
domain: mathematics
deps:
  - lem-author-b87d598e83f3-torsion-kernel-injective
  - lem-author-b87d598e83f3-injective-image-isomorphism
  - lem-author-b87d598e83f3-isomorphism-transfers-roots
dependency_roles:
  lem-author-b87d598e83f3-torsion-kernel-injective: mathematical-premise
  lem-author-b87d598e83f3-injective-image-isomorphism: mathematical-premise
  lem-author-b87d598e83f3-isomorphism-transfers-roots: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Let $f:G\to H$ be a homomorphism of abelian groups. If multiplication by every positive integer is bijective on $G$ and every element of $\ker f$ is torsion, then multiplication by every positive integer is bijective on the subgroup $\operatorname{im}f\subseteq H$.

## Facts & Assumptions
**Given:** The map and hypotheses in the statement.

**Goal:** Prove unique divisibility of its image.

[F1] [[lem-author-b87d598e83f3-torsion-kernel-injective]] makes $f$ injective.

[F2] [[lem-author-b87d598e83f3-injective-image-isomorphism]] identifies an injective map's domain with its image.

[F3] [[lem-author-b87d598e83f3-isomorphism-transfers-roots]] transfers unique divisibility across an isomorphism.

## Proof
1.1 By [F1], the kernel hypothesis and unique divisibility make $f$ injective. Its corestriction to its image is therefore an isomorphism by [F2]. [F1, F2, given]

2.1 Apply [F3] to that isomorphism and the given multiplication maps on $G$. Every positive multiplication map on $\operatorname{im}f$ is bijective. [F3, step 1.1, given] ∎
