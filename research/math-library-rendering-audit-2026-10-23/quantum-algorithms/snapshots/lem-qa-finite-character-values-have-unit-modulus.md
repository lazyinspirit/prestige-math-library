---
id: lem-qa-finite-character-values-have-unit-modulus
kind: lemma
title: Values of additive characters of finite abelian groups have modulus one
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-additive-character-of-a-finite-abelian-group, def-order-in-a-group, lem-group-homomorphism-basic-properties, thm-complex-nth-roots-and-roots-of-unity, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
dependency_level: 0
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

If $G$ is a finite abelian group, $\chi:G\to\mathbb C^{\times}$ is an additive character, and $x\in G$, then $|\chi(x)|=1$.

## Facts & Assumptions

**Given:** A finite abelian group $G$, an additive character $\chi$, and $x\in G$.

[F1] In a finite group, each element $x$ has a positive finite order $n=\operatorname{ord}(x)$ with $nx=0$ in additive notation ([[def-order-in-a-group]]).

[F2] An additive character is a homomorphism and sends the identity to $1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F3] A homomorphism preserves integer powers; in additive notation this gives $\chi(nx)=\chi(x)^n$ ([[lem-group-homomorphism-basic-properties]]).

[F4] For $n\ge1$, every $n$th root of unity is $\exp(2\pi i k/n)$ for some integer $0\le k<n$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F5] Every purely imaginary complex exponential has modulus one ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

1.1 Put $n:=\operatorname{ord}(x)\ge1$. By [F1] and [F3], $\chi(x)^n=\chi(nx)=\chi(0)=1$, with $\chi(0)=1$ by [F2]. [F1, F2, F3]

2.1 By [F4], $\chi(x)=\exp(2\pi i k/n)$ for some $0\le k<n$. Therefore [F5] gives $|\chi(x)|=1$. The argument includes $x=0$, for which $n=1$ and $\chi(0)=1$. [F2, F4, F5, step 1.1] ∎
