---
id: lem-cardinality-of-finite-natural-initial-segment
kind: lemma
title: "A finite initial segment of the naturals has its index as cardinality"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-natural-numbers
  - def-nat-order
  - lem-nat-order-is-membership
  - def-finite-cardinality
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bob Dumas and John E. McCarthy, Transition to Higher Mathematics, §1.2: Sets"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/Transition_to_Higher_Mathematics_(Dumas_and_McCarthy)/01:_New_Page/1.02:_New_Page"
      locator: "Complete relevant page, lines 226–232: the set of natural numbers less than n is a canonical set with exactly n elements; the proof here derives the claim from the library's von Neumann-order and finite-cardinality suppliers."
---

## Statement

For each $n\in\mathbb N$, let $I_n=\{t\in\mathbb N:t<n\}$. Then $I_n=n$, so $I_n$ is finite and $|I_n|=n$.

## Statement references

[[def-natural-numbers|The natural numbers are the von Neumann naturals, and each natural number is the set of its predecessors]].

[[def-nat-order|The natural-number order is defined by addition]].

[[lem-nat-order-is-membership|For von Neumann naturals, strict order is membership]].

[[def-finite-cardinality|Each natural n is finite and has cardinality n]].

[Dumas and McCarthy, *Transition to Higher Mathematics*, §1.2](https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/Transition_to_Higher_Mathematics_(Dumas_and_McCarthy)/01:_New_Page/1.02:_New_Page).

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and $I_n=\{t\in\mathbb N:t<n\}$, using the additive order on $\mathbb N$.

[F1] For every natural $n$, $n=\{t\in\mathbb N:t<n\}$, and the additive strict order agrees with membership on von Neumann naturals. [[def-natural-numbers]], [[def-nat-order]], [[lem-nat-order-is-membership]]

[F2] Every natural $n$ is finite and has cardinality $|n|=n$. [[def-finite-cardinality]]

## Proof

1.1 The final equality in [F1] says precisely that the set $\{t\in\mathbb N:t<n\}$ is $n$, so $I_n=n$. [given, F1]

2.1 By [F2], $n$ is finite and $|n|=n$. Substituting $I_n=n$ from step 1.1 gives that $I_n$ is finite and $|I_n|=n$. [step 1.1, F2] ∎
