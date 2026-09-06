---
id: thm-undecidable-languages-exist-in-p-poly
kind: theorem
title: "Some undecidable languages have polynomial-size circuits"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circuit-family-and-p-poly, thm-halting-is-recognizable-and-undecidable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

There is an undecidable language in $\mathrm{P/poly}$; indeed, one can choose a
language having constant-size circuits at every input length.

## Facts & Assumptions

**Given:** a fixed effective enumeration $(M_n)_{n\in\mathbb N}$ of Turing machines.

[L1] The diagonal halting problem is undecidable, by [[thm-halting-is-recognizable-and-undecidable]].

[L2] A $\mathrm{P/poly}$ family need not be effectively constructible from its input length, by [[def-circuit-family-and-p-poly]].

## Proof

**Proof technique:** direct.

1.1 Let $H=\{n:M_n(n)\text{ halts}\}$ and form the tally language $U=\{1^n:n\in H\}$. A decider for $U$ would decide $H$ by mapping $n$ to $1^n$, so $U$ is undecidable by [L1]. Define the binary length language $L=\{x:1^{|x|}\in U\}$. If $L$ were decidable, its decider restricted to $1^n$ would decide $U$; hence $L$ is undecidable. [L1, given, construct]

2.1 For each $n$, choose $C_n$ to be the constant-one circuit if $1^n\in U$, and the constant-zero circuit otherwise. Then for every $x\in\{0,1\}^n$, $C_n(x)=1$ exactly when $x\in L$. The circuits have constant size, and their non-effective length-by-length choice is permitted by [L2]. [L2, step 1.1, construct]

3.1 Thus $L$ is both undecidable and recognized by a polynomial-size circuit family. [step 1.1, step 2.1] ∎
