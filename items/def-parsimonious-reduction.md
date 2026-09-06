---
id: def-parsimonious-reduction
kind: definition
title: "Parsimonious reductions between counting functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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

A parsimonious reduction f to g is a polynomial-time map r with f(x)=g(r(x)) for every input x. This exact count equality is stronger than a decision many-one reduction, which preserves only nonzeroness.

