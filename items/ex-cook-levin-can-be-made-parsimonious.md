---
id: ex-cook-levin-can-be-made-parsimonious
kind: example
title: "A two-branch computation and its parsimonious tableau formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-cook-levin-can-be-made-parsimonious]
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

On empty input, let $N$ make one nondeterministic choice $b\in\{0,1\}$,
record $b$ in its state, and accept. Its two accepting paths give two legal
padded tableaux, and the exact Cook--Levin encoding has exactly two satisfying
assignments.

## Facts & Assumptions

**Given:** the displayed one-choice machine $N$.

[L1] The Cook--Levin construction can be made parsimonious. by [[lem-cook-levin-can-be-made-parsimonious]].

## Verification

**Proof technique:** direct.

1.1 The paths are ``start $\xrightarrow{0}$ accept-with-tag-$0$'' and ``start $\xrightarrow{1}$ accept-with-tag-$1$''. Padding repeats the final configuration, so these give two and only two legal accepting tableaux. [given, algebra]

2.1 In the exact encoding of [L1], the tableau variables are uniquely fixed by one of these tableaux and every auxiliary variable is constrained by a biconditional with the subformula it names. Equivalently, after eliminating those uniquely determined variables, the formula is the tautology $b\lor\neg b$ with declared variable $b$. Its two assignments correspond bijectively to the two paths. [L1, step 1.1]

3.1 Therefore the source accepting-path count and the formula's satisfying- assignment count are both exactly $2$. [step 1.1, step 2.1] ∎
