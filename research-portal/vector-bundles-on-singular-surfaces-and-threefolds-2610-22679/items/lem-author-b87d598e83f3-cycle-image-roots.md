---
id: lem-author-b87d598e83f3-cycle-image-roots
kind: lemma
title: Divisibility of an image with torsion kernel
status: published
domain: mathematics
deps:
  - lem-author-b87d598e83f3-torsion-kernel-injective
  - lem-author-b87d598e83f3-injective-image-isomorphism
  - lem-author-b87d598e83f3-isomorphism-transfers-roots
  - math:def-group
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-subgroup
  - math:def-group-isomorphism-and-automorphism
  - math:def-injection-surjection-bijection
dependency_roles:
  lem-author-b87d598e83f3-torsion-kernel-injective: mathematical-premise
  lem-author-b87d598e83f3-injective-image-isomorphism: mathematical-premise
  lem-author-b87d598e83f3-isomorphism-transfers-roots: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-subgroup: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Let $f:G\to H$ be a homomorphism of abelian groups. If multiplication by every positive integer is bijective on $G$ and every element of $\ker f$ is torsion, then multiplication by every positive integer is bijective on the subgroup $\operatorname{im}f\subseteq H$.

Here $nx$ denotes the sum of $n$ copies of $x$ for a positive integer $n$; an element $x$ is torsion when $nx=0$ for some positive integer $n$. A group is called uniquely divisible here when every map $x\mapsto nx$ for a positive integer $n$ is bijective.

## Facts & Assumptions
**Given:** The map and hypotheses in the statement.

**Goal:** Prove unique divisibility of its image.

[F1] [[lem-author-b87d598e83f3-torsion-kernel-injective]] makes $f$ injective.

[F2] [[lem-author-b87d598e83f3-injective-image-isomorphism]] identifies an injective map's domain with its image.

[F3] [[lem-author-b87d598e83f3-isomorphism-transfers-roots]] transfers unique divisibility across an isomorphism.

[F4] [[math:def-group]] supplies the additive abelian-group operations and identity $0$; [[math:def-group-homomorphism]] supplies the condition $f(a+b)=f(a)+f(b)$ for $a,b\in G$. Repeated addition in the statement uses these operations.

[F5] [[math:def-kernel-and-image-of-group-homomorphism]] defines $\ker f=\{x\in G:f(x)=0\}$ and $\operatorname{im}f=\{f(x):x\in G\}$. The subgroup operation is inherited from $H$ as in [[math:def-subgroup]]. After [F1], [F2] supplies this image group and the isomorphism given by the corestriction $c:G\to\operatorname{im}f$, $c(x)=f(x)$.

[F6] [[math:def-injection-surjection-bijection]] defines injectivity, surjectivity and bijectivity; [[math:def-group-isomorphism-and-automorphism]] defines a group isomorphism as a bijective group homomorphism.

## Proof
1.1 By [F1], the kernel hypothesis and unique divisibility make $f$ injective. Its corestriction to its image is therefore an isomorphism by [F2], with the image operation and corestriction specified in [F5]. [F1, F2, F5, given]

2.1 Apply [F3] to that isomorphism and the given multiplication maps on $G$. Every positive multiplication map on $\operatorname{im}f$ is bijective, in the sense of [F6]. [F3, F6, step 1.1, given] ∎
