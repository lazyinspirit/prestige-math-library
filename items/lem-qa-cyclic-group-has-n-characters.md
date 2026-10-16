---
id: lem-qa-cyclic-group-has-n-characters
kind: lemma
title: A cyclic group of order n has exactly n additive characters
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-additive-character-of-a-finite-abelian-group, lem-group-homomorphism-basic-properties, lem-group-power-laws, thm-classification-of-cyclic-groups, thm-complex-nth-roots-and-roots-of-unity]
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

Write $C_n=\langle g\rangle$ additively, so $jg$ denotes the sum of $j$ copies of $g$ and $ng=0$. If $C_n$ has order $n\ge1$, then its set $\widehat{C_n}$ of additive characters has cardinality $n$. Each character is uniquely determined by $\chi(g)$, and the possible values are exactly the $n$ distinct complex $n$th roots of unity. For each such root $z$, the corresponding character is $\chi_z(jg)=z^j$ for every $j\in\mathbb Z$.

## Facts & Assumptions

**Given:** A cyclic group $C_n=\langle g\rangle$ of finite order $n\ge1$.

[F1] An additive character is a group homomorphism and sends $0$ to $1$ ([[def-additive-character-of-a-finite-abelian-group]]); a group homomorphism preserves integer powers, so $\chi(jg)=\chi(g)^j$ ([[lem-group-homomorphism-basic-properties]]).

[F2] The finite-order case of the cyclic classification identifies $\mathbb Z/n\mathbb Z$ with $C_n$ by the map $[j]\mapsto jg$; hence every element is $jg$, and $jg=kg$ exactly when $n$ divides $j-k$ ([[thm-classification-of-cyclic-groups]]).

[F3] For $n\ge1$, the complex $n$th roots of unity are exactly $n$ distinct values ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F4] The notation $\widehat{C_n}$ is the set of additive characters of $C_n$ ([[def-qa-finite-abelian-character-dual]]).

[F5] Integer powers in a group satisfy $z^{j+k}=z^jz^k$ and $(z^j)^k=z^{jk}$ ([[lem-group-power-laws]]).

## Proof

1.1 If $\chi\in\widehat{C_n}$ as defined in [F4], then $\chi(g)^n=\chi(ng)=\chi(0)=1$ by [F1] and the given relation $ng=0$, so evaluation at $g$ maps this character set into the set in [F3]. Every element is $jg$ by [F2], and [F1] gives $\chi(jg)=\chi(g)^j$; thus evaluation at $g$ is injective. [F1, F2, F3, F4]

1.2 Conversely, for each $n$th root of unity $z$, define $\chi_z(jg):=z^j$ for $j\in\mathbb Z$. If $jg=kg$, [F2] gives $j-k=qn$ for some integer $q$, so $z^j=z^k(z^n)^q=z^k$ by [F3, F5]; hence the value is well defined. Also $\chi_z(jg+kg)=z^{j+k}=\chi_z(jg)\chi_z(kg)$ by [F5], so $\chi_z$ is an additive character in [F4], and $\chi_z(g)=z$. [F1, F2, F3, F4, F5, construct]

2.1 Steps 1.1 and 1.2 make evaluation at $g$ a bijection from the character set [F4] to the $n$ distinct roots in [F3]. This also covers $n=1$: the quotient is trivial and the sole root is $1$. Therefore $|\widehat{C_n}|=n$. [step 1.1, step 1.2, F3, F4] ∎
