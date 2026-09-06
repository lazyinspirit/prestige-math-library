---
id: def-number-sat
kind: definition
title: "NumberSAT"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boolean-formula-cnf-and-sat]
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

An input to $\mathrm{NumberSAT}$ is well formed when it encodes a Boolean
formula $\varphi$ together with an ordered list
$(x_1,\ldots,x_n)$ of distinct variables and every variable occurring in
$\varphi$ appears in that list. Its value is the exact number of assignments
$a:\{x_1,\ldots,x_n\}\to\{0,1\}$ that satisfy $\varphi$. Declared variables
count even when unused, so the count ranges over all $2^n$ assignments to the
list. Every input not having this form is malformed and has value zero.
