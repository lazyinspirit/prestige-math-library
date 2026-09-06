---
id: def-circuit-family-and-p-poly
kind: definition
title: "Circuit families and P/poly"
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

A circuit family is a sequence (C_n) with exactly n inputs at length n. It recognizes L if C_n(x)=1 exactly when x belongs to L for every n-bit x. P/poly contains exactly the languages recognized by families with polynomial size; no algorithm that constructs C_n from n is required.
