---
id: thm-qa-finite-abelian-character-dual-is-finite-abelian-group
kind: theorem
title: Pointwise character dual is a finite abelian group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-additive-character-of-a-finite-abelian-group, lem-group-homomorphism-basic-properties, thm-complex-numbers-form-a-field, thm-qa-finite-abelian-dual-has-same-cardinality]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

For a finite abelian group $G$, the pointwise product, constant-one identity and pointwise inverse on $\widehat G$ make it a finite abelian group. Its order is $|\widehat G|=|G|$.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and the set $\widehat G$ of its additive characters.

[F1] $\widehat G$ consists of homomorphisms $G\to\mathbb C^{\times}$ with pointwise product, constant-one function and pointwise inverse ([[def-qa-finite-abelian-character-dual]], [[def-additive-character-of-a-finite-abelian-group]]).

[F2] $\mathbb C$ is a field, so multiplication on $\mathbb C^{\times}$ is associative, commutative and has identity $1$ ([[thm-complex-numbers-form-a-field]]).

[F3] A group homomorphism preserves the identity and inverses ([[lem-group-homomorphism-basic-properties]]).

[F4] The number of characters is $|\widehat G|=|G|<\infty$ ([[thm-qa-finite-abelian-dual-has-same-cardinality]]).

## Proof

1.1 For $\chi,\psi\in\widehat G$, $x,y\in G$, and pointwise product as in [F1], $(\chi\psi)(x+y)=\chi(x)\chi(y)\psi(x)\psi(y)=\chi(x)\psi(x)\chi(y)\psi(y)$ by commutativity in [F2]. Thus $\chi\psi$ is again a homomorphism. The constant-one function is a homomorphism because it sends every sum to $1\cdot1=1$; [F3] also confirms each character takes the identity to $1$. [F1, F2, F3]

1.2 The pointwise inverse is a homomorphism because $(\chi(x+y))^{-1}=(\chi(x)\chi(y))^{-1}=\chi(x)^{-1}\chi(y)^{-1}$ in the abelian group $\mathbb C^{\times}$. Associativity and commutativity of pointwise product, its identity law, and the inverse laws follow by evaluating at each $x$ and using the corresponding laws in [F2]. Hence $\widehat G$ is an abelian group. [F1, F2, algebra]

2.1 The dual is finite by [F4], and its order is $|G|$ by the same result. Thus it is a finite abelian group of the asserted order. [F4, step 1.2] ∎
