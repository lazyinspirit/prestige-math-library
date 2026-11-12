---
id: lem-author-91088613574d-chain-cochain
kind: lemma
title: Reindexing a chain complex cohomologically
status: published
domain: mathematics
deps:
  - math:def-group
  - math:def-group-homomorphism
  - math:def-subgroup
  - math:def-normal-subgroup
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-quotient-group
  - math:def-group-isomorphism-and-automorphism
  - math:thm-image-subgroup-and-kernel-normal
  - math:thm-quotient-group-laws
dependency_roles:
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-subgroup: mathematical-premise
  math:def-normal-subgroup: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-quotient-group: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:thm-image-subgroup-and-kernel-normal: mathematical-premise
  math:thm-quotient-group-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Write abelian groups additively. A chain complex $C$ consists of a family $(C_n)_{n\in\mathbb Z}$ of abelian groups and group homomorphisms $d_n:C_n\to C_{n-1}$ satisfying $d_{n-1}\circ d_n=0$ for every integer $n$, where $0$ denotes the zero homomorphism. Its cycles, boundaries and homology are $Z_n(C)=\ker d_n$, $B_n(C)=\operatorname{im}d_{n+1}$ and $H_n(C)=Z_n(C)/B_n(C)$, with the quotient-group operation induced by addition. A cochain complex $D$ similarly consists of abelian groups $D^q$ and homomorphisms $\delta^q:D^q\to D^{q+1}$ satisfying $\delta^{q+1}\circ\delta^q=0$; its cohomology is $H^q(D)=\ker\delta^q/\operatorname{im}\delta^{q-1}$.

For a chain complex $C$, define $C^\vee$ by $(C^\vee)^q=C_{-q}$ and $\delta^q=d_{-q}$. Then $C^\vee$ is a cochain complex, all the displayed homology and cohomology quotients are well defined abelian groups, and for every integer $q$ there is a canonical group isomorphism $H^q(C^\vee)\cong H_{-q}(C)$, given by the identity on the common quotient of cycles by boundaries.

## Facts & Assumptions
**Given:** A chain complex $C$ and an integer $q$ as specified in the Statement.

**Goal:** Verify the reindexing and identify its cohomology with the corresponding homology group.

[F1] Abelian groups and group homomorphisms have the meanings of [[math:def-group]] and [[math:def-group-homomorphism]], in additive notation.

[F2] Kernels and images are as in [[math:def-kernel-and-image-of-group-homomorphism]]. The kernel and image of a group homomorphism are subgroups by [[math:thm-image-subgroup-and-kernel-normal]]. Subgroups inherit the ambient operation as in [[math:def-subgroup]], and normality means invariance under conjugation as in [[math:def-normal-subgroup]].

[F3] Quotients by normal subgroups have the coset operation of [[math:def-quotient-group]], which is well defined and gives a group by [[math:thm-quotient-group-laws]]. In additive notation the operation is $(x+B)+(y+B)=(x+y)+B$.

[F4] A group isomorphism is a bijective homomorphism, as in [[math:def-group-isomorphism-and-automorphism]].

## Proof
1.1 By [F2], $Z_n(C)$ and $B_n(C)$ are subgroups of $C_n$. The square-zero equation gives $B_n(C)\subseteq Z_n(C)$, since $d_n(d_{n+1}(x))=0$ for every $x\in C_{n+1}$. Their inherited operations make $B_n(C)$ a subgroup of $Z_n(C)$; moreover $z+b-z=b$ for $z\in Z_n(C)$ and $b\in B_n(C)$, so it is normal there by [F1] and [F2]. Thus [F3] makes $H_n(C)$ a well defined group, and its operation is commutative because addition in $C_n$ is commutative. The identical argument for any cochain complex, using $\delta^q\delta^{q-1}=0$, makes its cohomology a well defined abelian group. For the proposed $C^\vee$, the map $\delta^q=d_{-q}$ is a homomorphism from $C_{-q}$ to $C_{-q-1}=(C^\vee)^{q+1}$ and satisfies $\delta^{q+1}\delta^q=d_{-q-1}d_{-q}=0$. Hence it is a cochain complex. [given, F1, F2, F3, construct, algebra]

2.1 The degree-$q$ cycles of $C^\vee$ are $\ker d_{-q}=Z_{-q}(C)$, and its incoming image is $\operatorname{im}d_{-q+1}=B_{-q}(C)$. The two groups in the conclusion are therefore the same quotient with the same operation from [F3]. The map sending each coset to itself is well defined, preserves addition and is bijective with itself as inverse; by [F4] it is the asserted canonical isomorphism. [given, F2, F3, F4, step 1.1] ∎
