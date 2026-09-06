---
id: def-sharpp-and-gap-p-functions
kind: definition
title: "Sharp-P and Gap-P functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  audited: 2026-09-07
  precheck: n/a
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

## Definition

A #P function maps each input to the number of accepting paths of a binary-branching polynomial-time nondeterministic machine. A GapP function is accepting paths minus rejecting paths of such a machine. Function values are represented in binary.
