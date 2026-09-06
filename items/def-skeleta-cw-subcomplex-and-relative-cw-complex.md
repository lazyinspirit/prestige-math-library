---
id: def-skeleta-cw-subcomplex-and-relative-cw-complex
kind: definition
title: Skeleta, CW subcomplexes, and relative CW complexes
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cw-complex-with-closure-finiteness-and-weak-topology]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 10
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
---

## Definition

Write $X^n$ for the union of cells of dimension at most $n$, with $X^{-1}=\varnothing$. A **CW subcomplex** $A\subseteq X$ is a union of open cells such that, whenever $A$ contains an open cell $e$, it contains the whole closure $\overline e$. A **relative CW complex** $(X,A)$ is formed from the subcomplex $A$ by attaching cells in stages; thus $A\hookrightarrow X$ is a cellular inclusion.
