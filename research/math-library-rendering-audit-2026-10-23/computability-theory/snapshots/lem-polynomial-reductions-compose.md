---
id: lem-polynomial-reductions-compose
kind: lemma
title: "Polynomial-time many-one reductions compose"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-time-many-one-reduction]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If $A\le_p B$ and $B\le_p C$, then $A\le_p C$.

## Facts & Assumptions

**Given:** Languages $A,B,C$ with $A\le_p B$ witnessed by a total map $f$ and $B\le_p C$ witnessed by a total map $g$, in the sense of [[def-polynomial-time-many-one-reduction]].

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

## Proof

**Proof technique:** direct.

1.1 Define $h:=g\circ f$. Because both $f$ and $g$ are total by [L1], the composite $h$ is also total. [L1, given, construct]

2.1 For every source word $x$, [L1] gives $x\in A\iff f(x)\in B\iff g(f(x))\in C$. So $x\in A\iff h(x)\in C$. [L1, step 1.1]

3.1 The function $f$ runs in polynomial time and can output only polynomially many symbols, so the length of $f(x)$ is polynomially bounded in $|x|$. Running $g$ on that output therefore still takes polynomial time in $|x|$. Hence $h$ is a polynomial-time many-one reduction from $A$ to $C$. [L1, step 1.1, step 2.1] ∎
