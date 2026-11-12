---
id: lem-author-4b6f215bcf3b-rational-complex-multiplication
kind: lemma
title: Integer multiplication on rational complexes
status: published
domain: mathematics
deps:
  - lem-author-4b6f215bcf3b-rational-module-multiplication
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cochain-map
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-linear-map
dependency_roles:
  lem-author-4b6f215bcf3b-rational-module-multiplication: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cochain-map: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-linear-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $C=(C^i,d^i)_{i\in\mathbb Z}$ be a cochain complex of $\mathbb Q$-vector spaces, with $\mathbb Q$-linear differentials, and $n$ a positive integer. Multiplication by $n$ is an isomorphism of $C$ as a complex of abelian groups and hence in the derived category $D(\mathbb Z)$. Here $D(\mathbb Z)$ is the category of cochain complexes of abelian groups with quasi-isomorphisms inverted; a quasi-isomorphism induces isomorphisms on all cohomology groups. The canonical localization sends cochain maps to arrows and preserves identities and composition.

## Statement references

[[lem-author-4b6f215bcf3b-rational-module-multiplication]]

[[math:def-cochain-complex-in-an-abelian-category]]

[[math:def-cochain-map]]

[[math:def-cohomology-object-of-a-cochain-complex]]

[[math:def-linear-map]]

## Facts & Assumptions

**Given:** $C$ and $n$ as in the statement.

**Goal:** Prove that multiplication by $n$ on $C$ is an isomorphism in $D(\mathbb Z)$.

[F1] Multiplication by $n$ on each $\mathbb Q$-vector space is invertible as an additive map, with inverse multiplication by $1/n$. A rational vector space has its underlying abelian additive group and its unital $\mathbb Q$-scalar action. [[lem-author-4b6f215bcf3b-rational-module-multiplication]]

[F2] A cochain complex has differentials $d^i:C^i\to C^{i+1}$ with $d^{i+1}d^i=0$. A cochain map $f:C\to E$ consists of degree-preserving maps $f^i:C^i\to E^i$ satisfying $d_E^if^i=f^{i+1}d_C^i$. For complexes of abelian groups these maps are additive; identities and composition are defined degreewise. [[math:def-cochain-complex-in-an-abelian-category]] [[math:def-cochain-map]]

[F3] Linearity of $d^i$ means $d^i(av+bw)=a\,d^i(v)+b\,d^i(w)$ for $a,b\in\mathbb Q$ and $v,w\in C^i$; in particular it is additive and commutes with scalar multiplication. [[math:def-linear-map]]

[F4] Cohomology is $H^i(C)=\ker(d^i)/\operatorname{im}(d^{i-1})$; cochain maps induce the maps on these groups used in the definition of quasi-isomorphism. [[math:def-cohomology-object-of-a-cochain-complex]] The induced map sends the class of $v$ to the class of $f^i(v)$: the cochain-map equation in [F2] sends cocycles to cocycles and coboundaries to coboundaries, so this is well-defined.

## Proof

**Given:** $C$ and $n>0$ as in the statement.

1.1 By [F1], the additive maps $m^i(v)=nv$ and $s^i(v)=(1/n)v$ are inverse in every degree. By [F3], $d^im^i(v)=n\,d^i(v)=m^{i+1}d^i(v)$ and $d^is^i(v)=(1/n)d^i(v)=s^{i+1}d^i(v)$. Thus both families are cochain maps on the underlying complex of abelian groups by [F2]. [F1, F2, F3, given]

2.1 By the degreewise composition convention in [F2], $sm=\operatorname{id}_C=ms$, since these equalities hold in every degree by step 1.1. Their images under the canonical localization also compose to the identity, because it preserves identities and composition as specified in the statement. Thus multiplication by $n$ is an isomorphism both as a complex of abelian groups and in $D(\mathbb Z)$, with inverse multiplication by $1/n$. [F2, step 1.1, given] ∎
