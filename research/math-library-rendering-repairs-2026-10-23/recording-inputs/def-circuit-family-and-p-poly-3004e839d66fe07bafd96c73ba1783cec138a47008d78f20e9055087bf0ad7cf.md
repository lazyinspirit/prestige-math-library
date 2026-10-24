---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-circuit-family-and-p-poly.json
  precheck: n/a
id: def-circuit-family-and-p-poly
kind: definition
title: "Circuit families and P/poly"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boolean-circuit-size-depth-fanin-and-basis]
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Definition

A circuit family is a sequence $(C_n)$ with exactly $n$ inputs at length $n$. It recognizes $L$ if $C_n(x)=1$ exactly when $x$ belongs to $L$ for every $n$-bit $x$. P/poly contains exactly the languages recognized by families with polynomial size; no algorithm that constructs $C_n$ from $n$ is required.
