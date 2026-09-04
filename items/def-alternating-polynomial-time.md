---
id: def-alternating-polynomial-time
kind: definition
title: "Alternating polynomial time and the class AP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-worst-case-time-and-space-complexity, def-multitape-and-nondeterministic-machines]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

An **alternating Turing machine** is a nondeterministic Turing machine whose
nonhalting states are partitioned into **existential** and **universal**
states.

Acceptance is defined recursively on the computation tree:

- an accepting halting configuration accepts;
- a rejecting halting configuration rejects;
- an existential configuration accepts when at least one legal successor
  accepts;
- a universal configuration accepts when every legal successor accepts.

The class **AP** is the set of languages decided by alternating Turing machines
whose every computation branch halts within polynomial time.

## Remarks

- Deterministic polynomial time is the special case with only one successor at
  every step.
- Alternation differs from ordinary nondeterminism only at universal states,
  where all continuations must accept.
