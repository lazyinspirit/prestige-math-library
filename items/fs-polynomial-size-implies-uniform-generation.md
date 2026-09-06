---
id: fs-polynomial-size-implies-uniform-generation
kind: false-statement
title: "Polynomial-size circuits imply a uniform polynomial-time generator"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circuit-family-and-p-poly, thm-undecidable-languages-exist-in-p-poly]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Every polynomial-size circuit family has a polynomial-time algorithm that,
given $1^n$, outputs its length-$n$ circuit.

## Facts & Assumptions

**Given:** the nonuniform family convention.

[L1] $\mathrm{P/poly}$ requires only a separate polynomial-size circuit at each length and no generator, by [[def-circuit-family-and-p-poly]].

[L2] There is an undecidable language recognized by constant-size circuits, by [[thm-undecidable-languages-exist-in-p-poly]].

## Refutation

**Proof technique:** direct.

1.1 Let $(C_n)$ be the constant-size family for the undecidable length language from [L2]. If a polynomial-time generator $G$ output $C_n$ on input $1^n$, then on any word $x$ one could compute $G(1^{|x|})$ and evaluate that constant- size circuit on $x$ in polynomial time. [L2, given, construct]

2.1 The resulting algorithm would decide the language, contradicting its undecidability. Hence this polynomial-size family has no such generator. [step 1.1, contradiction]

3.1 The size condition in [L1] is therefore strictly nonuniform; effective generation is an additional hypothesis. [L1, step 2.1] ∎
