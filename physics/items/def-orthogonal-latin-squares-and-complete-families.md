---
id: def-orthogonal-latin-squares-and-complete-families
kind: definition
title: "Orthogonal Latin squares and complete families of them"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-latin-square]
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Deductive Press, Section 16.2: Latin Squares and MOLS"
      url: "https://deductivepress.ca/math3860/textbook/sect_latin-squares-mols"
---

## Definition

Let $L,M:R\times C\to S$ be Latin squares of the same order $n$ on the same row,
column, and symbol sets. They are **orthogonal** when the map
$$(r,c)\longmapsto\bigl(L(r,c),M(r,c)\bigr)$$
is a bijection from $R\times C$ to $S\times S$, equivalently when every ordered
pair of symbols occurs exactly once.

A **complete family** of mutually orthogonal Latin squares of order $n$ is a
family of $n-1$ pairwise orthogonal Latin squares of that order.
