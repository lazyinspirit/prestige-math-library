---
id: def-circuit-sat
kind: definition
title: "Circuit satisfiability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boolean-circuit-size-depth-fanin-and-basis]
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

CircuitSAT consists of well-formed finite topologically numbered Boolean gate lists with a designated output for which some input assignment makes that output one; malformed lists are rejected.
