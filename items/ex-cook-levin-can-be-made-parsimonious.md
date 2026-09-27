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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] The Cook--Levin construction can be made parsimonious by [[lem-cook-levin-can-be-made-parsimonious]].

## Verification

**Proof technique:** direct.

1.1 Use two distinct intermediate states $q_0'$ and $q_1'$ to record the first choice: from the initial state the machine branches to $q_b'$, then deterministically enters its single accepting state. These are its only two computation paths. Their first successor rows have different state tags, and padding repeats the final accepting configuration, so they give two and only two legal accepting tableaux. [given, construct]

2.1 In the exact encoding of [L1], every declared variable is a tableau cell variable and there are no auxiliary variables. Each of the two legal padded tableaux fixes every declared variable, and [L1] gives the converse from any satisfying assignment to exactly one accepting path. Hence the two paths correspond bijectively to the formula's satisfying assignments. [L1, step 1.1]

3.1 Therefore the source accepting-path count and the formula's satisfying- assignment count are both exactly $2$. [step 1.1, step 2.1] ∎
