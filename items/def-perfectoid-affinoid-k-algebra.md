---
id: def-perfectoid-affinoid-k-algebra
kind: definition
title: "Perfectoid affinoid K-algebra"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-perfectoid-k-algebra
  - def-tate-k-algebra-and-power-bounded-elements
  - def-affinoid-k-algebra-and-integral-subring
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definition 6.1"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a perfectoid field. A **perfectoid affinoid $K$-algebra** is an affinoid $K$-algebra pair $(R,R^+)$ for which $R$ is a perfectoid $K$-algebra. Thus $R$ is a complete Tate $K$-algebra, $R^+$ is an open integrally closed subring of $R^\circ$, and $R^\circ$ is open and bounded with Frobenius surjective on $R^\circ/\varpi R^\circ$ for a pseudo-uniformizer $\varpi$ of $K$ as in the perfectoid-algebra definition. The subring $R^+$ is part of the affinoid data and is not required to equal $R^\circ$.

## Definition references

[[def-perfectoid-k-algebra]]

[[def-affinoid-k-algebra-and-integral-subring]]

[Peter Scholze, *Perfectoid Spaces*, Definition 6.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)
