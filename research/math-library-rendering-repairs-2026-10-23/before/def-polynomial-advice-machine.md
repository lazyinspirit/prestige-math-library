---
id: def-polynomial-advice-machine
kind: definition
title: "Polynomial advice for a deterministic machine"
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

An advised polynomial-time machine consists of a deterministic polynomial-time machine M and strings a_n of polynomial length. On each n-bit input x it receives (x,a_n), and accepts exactly the intended language. The string is length-indexed and need not be computable from n.
