---
id: lem-qa-character-dual-of-a-product-factors
kind: lemma
title: Characters of a finite product factor coordinatewise
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-additive-character-of-a-finite-abelian-group, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

Let $G_1,\ldots,G_r$ be finite abelian groups and let $P=G_1\times\cdots\times G_r$ be their recursively parenthesized external direct product. By convention, $P$ is the trivial group when $r=0$. Restriction to the coordinate factors gives a bijection
$$\widehat P\longrightarrow\widehat{G_1}\times\cdots\times\widehat{G_r}.$$
Its inverse sends $(\chi_1,\ldots,\chi_r)$ to $\chi(g_1,\ldots,g_r)=\prod_{i=1}^r\chi_i(g_i)$. For $r=0$, both sides are singletons.

## Facts & Assumptions

**Given:** A finite list of finite abelian groups with the coordinatewise operation on its iterated product.

[F1] An additive character is a group homomorphism to $\mathbb C^{\times}$; it preserves addition and sends the identity to $1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F2] The external direct product has carrier $G\times H$ and componentwise operation ([[def-external-direct-product-of-groups]]).

[F3] This componentwise operation makes $G\times H$ a group ([[thm-external-direct-product-is-a-group]]).

[F4] The dual $\widehat P$ is the set of additive characters of $P$ ([[def-qa-finite-abelian-character-dual]]).

## Proof

1.1 For $\chi\in\widehat P$ as defined in [F4], put $\chi_i(g_i):=\chi(0,\ldots,0,g_i,0,\ldots,0)$. The coordinate embedding preserves addition by the componentwise operation in [F2], so [F1] shows each $\chi_i$ is a character. [F1, F2, F4, given, construct]

1.2 For a tuple $(\chi_i)$, define $\sigma((\chi_i))(g_1,\ldots,g_r):=\prod_i\chi_i(g_i)$. The componentwise operation and each homomorphism law give $\sigma((\chi_i))(g+h)=\sigma((\chi_i))(g)\sigma((\chi_i))(h)$, so this is a character of $P$. [F1, F2, given, construct]

2.1 Restricting $\sigma((\chi_i))$ to the $i$th coordinate gives $\chi_i$, because all other coordinates are zero and every character takes the identity to $1$. Thus restriction after $\sigma$ is the identity on the product of duals. [step 1.2, F1, F2]

2.2 Every $(g_1,\ldots,g_r)$ is the sum of its coordinate vectors. Applying a homomorphism $\chi$ to this sum gives $\chi(g_1,\ldots,g_r)=\prod_i\chi_i(g_i)$, so $\sigma$ after restriction is the identity on $\widehat P$. For $r=0$, the sole group element and sole character give the stated singleton bijection. [step 1.1, F1, F2, F3, algebra]

3.1 Steps 2.1 and 2.2 show the two displayed maps are inverse bijections between the character sets in [F4], including the empty-product case. [F4, step 2.1, step 2.2] ∎
