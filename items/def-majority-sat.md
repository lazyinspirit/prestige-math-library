---
id: def-majority-sat
kind: definition
title: "MajoritySAT"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-sat]
verification:
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

MajoritySAT asks whether NumberSAT(phi)>2^(n-1), where n is the declared-variable count. At n=0 this is equivalent to the empty assignment satisfying phi.

