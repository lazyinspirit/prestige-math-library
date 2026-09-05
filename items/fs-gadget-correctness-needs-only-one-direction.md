---
id: fs-gadget-correctness-needs-only-one-direction
kind: false-statement
title: "A gadget reduction is correct as soon as every yes-instance maps to a yes-instance"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduction-gadget-and-interface-invariant, def-polynomial-time-many-one-reduction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

A gadget reduction is correct as soon as every yes-instance maps to a
yes-instance.

## Facts & Assumptions

**Given:** A source language $A$ having at least one no-instance and a target
language $B$ having at least one yes-instance $y_B$.

[L1] A gadget reduction is not complete until both directions of correctness have been proved, by [[def-reduction-gadget-and-interface-invariant]].

[L2] A polynomial-time many-one reduction requires $x\in A$ if and only if $f(x)\in B$, by [[def-polynomial-time-many-one-reduction]].

## Refutation

**Proof technique:** direct.

1.1 Define the constant map $f(x):=y_B$ for every source instance $x$. This map is total and polynomial-time, and it certainly sends every yes-instance of $A$ to a yes-instance of $B$. [L2, given, construct]

2.1 Let $x_0\notin A$. Then $f(x_0)=y_B\in B$, so the reverse implication in [L2] fails: $f(x_0)\in B$ does not force $x_0\in A$. Therefore yes-preservation alone does not make $f$ a correct many-one reduction. [L1, L2, step 1.1]

3.1 The statement is false. [step 2.1] ∎
