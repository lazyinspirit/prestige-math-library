---
id: thm-qa-finite-abelian-dual-has-same-cardinality
kind: theorem
title: A finite abelian group and its character dual have equal order
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, lem-qa-cyclic-group-has-n-characters, lem-qa-character-dual-of-a-product-factors, prop-order-of-finite-direct-product, thm-product-rule, def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism, def-order-in-a-group]
dependency_level: 2
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

If $G$ is a finite abelian group with invariant-factor decomposition $G\cong C_{n_1}\times\cdots\times C_{n_r}$, then $|\widehat G|=\prod_i n_i=|G|$. The empty product is allowed: it represents the trivial group and has value $1$. This is a finite-set cardinality assertion; it does not choose an isomorphism $G\cong\widehat G$.

## Facts & Assumptions

**Given:** A finite abelian group $G$.

[F1] Every finite abelian group has an invariant-factor decomposition; the trivial group corresponds to the empty list ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[F2] Characters of a finite direct product factor coordinatewise ([[lem-qa-character-dual-of-a-product-factors]]).

[F3] A cyclic group of order $n\ge1$ has exactly $n$ characters, including the case $n=1$ ([[lem-qa-cyclic-group-has-n-characters]]).

[F4] A binary external direct product of finite groups has order the product of the two orders ([[prop-order-of-finite-direct-product]]).

[F5] A Cartesian product of finite sets has cardinality the product of the cardinalities ([[thm-product-rule]]).

[F6] A group isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]); the order of a finite group is the cardinality of its carrier ([[def-order-in-a-group]]).

[F7] The inverse of a bijective group homomorphism is a group homomorphism ([[lem-inverse-of-bijective-group-homomorphism]]).

[F8] $\widehat G$ denotes the set of additive characters with its specified pointwise operations ([[def-qa-finite-abelian-character-dual]]).

## Proof

1.1 If the invariant-factor list is empty, [F1] identifies $G$ with the trivial group, which is cyclic of order $1$. By [F3] it has one character and one element, so $|\widehat G|=|G|=1$ for the character set in [F8]. [F1, F3, F8]

1.2 Otherwise fix one isomorphism $\varphi:G\to P$, where $P=C_{n_1}\times\cdots\times C_{n_r}$ is the finite iterated product. By [F6] and [F7], both $\varphi$ and $\varphi^{-1}$ are group homomorphisms. Thus $\chi\mapsto\chi\circ\varphi^{-1}$ and $\psi\mapsto\psi\circ\varphi$ preserve the character sets in [F8] and are inverse bijections between $\widehat G$ and $\widehat P$. [F1, F6, F7, F8, construct]

1.3 By [F2], $\widehat P$ is in bijection with $\prod_i\widehat{C_{n_i}}$. Each factor has $n_i$ elements by [F3], and repeated application of [F5] to the finite Cartesian products gives $|\widehat P|=\prod_i n_i$. [F2, F3, F5]

2.1 The same repeated product-order formula gives $|P|=\prod_i n_i$ by [F4]; the isomorphism in step 1.2 preserves finite cardinality by [F6]. Hence $|G|=\prod_i n_i=|\widehat G|$. [step 1.2, step 1.3, F4, F6] ∎
