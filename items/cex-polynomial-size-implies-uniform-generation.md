---
id: cex-polynomial-size-implies-uniform-generation
kind: counterexample
title: "Unary circuits for an undecidable language are not uniformly generated"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-undecidable-languages-exist-in-p-poly, fs-polynomial-size-implies-uniform-generation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Let $H=\{n:M_n(n)\text{ halts}\}$, let $U=\{1^n:n\in H\}$, and define
$L=\{x:1^{|x|}\in U\}$. The family whose $n$th circuit is the constant bit
$\mathbf 1_H(n)$ has constant size but has no polynomial-time uniform
generator.

## Facts & Assumptions

**Given:** the displayed diagonal halting tally language.

[L1] The length-language construction has constant circuits but is undecidable. by [[thm-undecidable-languages-exist-in-p-poly]].

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $L$ is undecidable and the chosen $C_n$ computes $L$ on every $n$-bit input. Each $C_n$ is one constant-output gate. [L1, given]

2.1 If an algorithm $G$ generated $C_n$ from $1^n$ in polynomial time, then on input $1^n$ we could run $G$, evaluate its output circuit on $1^n$, and answer whether $n\in H$. This would decide the diagonal halting set, contrary to [L1]. [L1, step 1.1, contradiction]

3.1 Thus the displayed constant-size family is the promised concrete counterexample to uniform generation. [step 1.1, step 2.1] ∎
