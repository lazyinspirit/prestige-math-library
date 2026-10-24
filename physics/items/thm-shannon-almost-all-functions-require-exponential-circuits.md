---
id: thm-shannon-almost-all-functions-require-exponential-circuits
kind: theorem
title: "Almost all Boolean functions require exponential circuit size"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-counting-circuits-of-bounded-size, thm-cardinality-of-a-set-of-functions]
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

As $n\to\infty$, the proportion of Boolean functions on $n$ variables having
circuit size at most $2^n/(10n)$ tends to $0$. In particular, almost all
Boolean functions require circuit size $\Omega(2^n/n)$.

## Facts & Assumptions

**Given:** the fixed circuit basis of the page.

[L1] Size-at-most-$s$ circuits represent at most $2^{O(s\log(n+s))}$ functions, with the explicit gate-record count in the proof, by [[lem-counting-circuits-of-bounded-size]].

[L2] There are $2^{2^n}$ Boolean functions on $n$ inputs, by [[thm-cardinality-of-a-set-of-functions]].

## Proof

**Proof technique:** direct.

1.1 Put $s=\lfloor2^n/(10n)\rfloor$ and let $b$ be the fixed number of available gate types. The explicit encoding in [L1] gives at most $$ (s+1)(n+s)\bigl(b(n+s)^2\bigr)^s $$ circuits. Since $b$ is constant, for all sufficiently large $n$ the base-two logarithm is at most $s(2n+O(1))+O(n)<2^n/3$. [L1, given, algebra]

2.1 Dividing the resulting bound $2^{2^n/3}$ by the total $2^{2^n}$ from [L2] gives at most $2^{-2\cdot2^n/3}$, which tends to $0$. Hence a uniformly random truth table has size greater than $2^n/(10n)$ with probability tending to $1$. [L2, step 1.1, algebra]

3.1 This is an existence-and-density argument over truth tables; it does not select or compute an explicit hard family. [step 2.1] ∎
