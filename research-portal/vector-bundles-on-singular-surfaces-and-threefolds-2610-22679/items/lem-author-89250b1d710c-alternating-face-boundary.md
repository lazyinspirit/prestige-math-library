---
id: lem-author-89250b1d710c-alternating-face-boundary
kind: lemma
title: Alternating face boundaries square to zero
status: published
domain: mathematics
deps:
  - lem-author-89250b1d710c-admissible-face-identities
  - math:def-chain-complex-in-an-abelian-category
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-89250b1d710c-admissible-face-identities: mathematical-premise
  math:def-chain-complex-in-an-abelian-category: mathematical-premise
  math:def-homology-object-of-a-chain-complex: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
formulation_deps:
  - lem-author-89250b1d710c-admissible-face-identities
  - math:def-chain-complex-in-an-abelian-category
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
argument_deps:
  - lem-author-89250b1d710c-admissible-face-identities
  - math:def-chain-complex-in-an-abelian-category
  - math:def-homology-object-of-a-chain-complex
  - math:def-group
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
---

## Statement
Let $C_n$ be abelian groups for $n\geq0$ and, for $n\geq1$, let $d_i^n:C_n\to C_{n-1}$, $0\leq i\leq n$, be group homomorphisms satisfying $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ for $i<j$ and $n\geq2$. Put $C_n=0$ for $n<0$, $\partial_n=0:C_n\to C_{n-1}$ for every $n\leq0$, and $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$ for $n\geq1$. Then $\partial_{n-1}\partial_n=0$ for every integer $n$, and $H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}$ is defined and vanishes for $n<0$.

Under the Axiom of Choice, this applies to the specified admissible cycle face maps for smooth finite-type schemes over fields. The abstract abelian-group assertion above has no Choice premise.

## Facts & Assumptions
**Given:** The abelian groups, group homomorphisms and face identities in the Statement.

**Goal:** Prove the chain identity and justify the homology quotient.

[F1] The admissible cycle face maps are group homomorphisms satisfying these identities. [[lem-author-89250b1d710c-admissible-face-identities]]

[F2] A chain complex has consecutive differential composites zero; its homology is cycles modulo boundaries. [[math:def-chain-complex-in-an-abelian-category]], [[math:def-homology-object-of-a-chain-complex]]

[F3] Abelian groups and their homomorphisms form an abelian category: homomorphisms add pointwise, and kernels, images and cokernels are the usual subgroup and quotient constructions. [[math:thm-abelian-groups-form-an-abelian-category]]

[F4] Abelian groups are written additively, group homomorphisms preserve addition, and $\ker$ and $\operatorname{im}$ denote the group-theoretic kernel and image. [[math:def-group]], [[math:def-group-homomorphism]], [[math:def-kernel-and-image-of-group-homomorphism]]

[A1] Only the cycle application invokes the Axiom of Choice, as assumed in the supplied admissible-face construction [F1]. The given abstract face identities suffice for the general algebraic assertion. [[math:def-axiom-of-choice]]

## Proof
1.1 By [F3], each $\partial_n$ is a group homomorphism, since it is a finite signed sum of homomorphisms or a zero map. For $n\geq2$, additivity allows the expansion $\partial_{n-1}\partial_n=\sum_{a=0}^{n-1}\sum_{b=0}^{n}(-1)^{a+b}d_a^{n-1}d_b^n$. Pair $(a,b)$ with $a<b$ to $(b-1,a)$. This is a bijection onto the pairs whose first coordinate is at least the second, with inverse $(c,d)\mapsto(d,c+1)$. [F3, F4, given, construct, algebra]

2.1 The two maps in each pair agree by the face identity, while their signs are opposite. All terms cancel. For $n=1$ the composite is zero because $\partial_0=0$; for $n\leq0$ it is zero because $\partial_n$ is the explicitly defined zero map. [given, step 1.1, algebra]

3.1 For $x\in C_{n+1}$, step 2.1 gives $\partial_n(\partial_{n+1}(x))=0$, so $\operatorname{im}\partial_{n+1}\subseteq\ker\partial_n$. By [F3], these are the usual subgroup constructions and their cokernel is the usual quotient; [F2] therefore defines the displayed homology group. For $n<0$ the group $C_n$ is zero, so its homology is zero. For the cycle application, retain [A1]; the face maps in [F1] then supply both the homomorphism hypothesis and the face identities. [A1, F1, F2, F3, F4, step 2.1] ∎
