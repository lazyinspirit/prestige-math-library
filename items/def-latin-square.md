---
id: def-latin-square
kind: definition
title: "A Latin square"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
landmark: true
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
    - title: "Jonathan Davidson, Latin Squares"
      url: "https://jjdavidson.github.io/notes/design-theory/01latin-squares.html"
---

## Definition

Let $R$, $C$, and $S$ be finite sets of the same cardinality $n$. A **Latin
square of order $n$** on rows $R$, columns $C$, and symbols $S$ is a function
$L:R\times C\to S$ such that:

- for each fixed row $r\in R$, the map $c\mapsto L(r,c)$ is a bijection
  $C\to S$;
- for each fixed column $c\in C$, the map $r\mapsto L(r,c)$ is a bijection
  $R\to S$.

When $R=C=S=\{0,1,\dots,n-1\}$, this is the usual square array description.
