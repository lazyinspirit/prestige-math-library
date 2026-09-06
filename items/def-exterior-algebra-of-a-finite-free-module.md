---
id: def-exterior-algebra-of-a-finite-free-module
kind: definition
title: "Exterior Algebra Of A Finite Free Module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-free-module-on-a-set-and-standard-basis]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Definition

Let $R$ be a commutative unital ring and let $F$ be a finite free $R$-module
with ordered basis $e_1,\ldots,e_n$. Define
$\bigwedge F=T_R(F)/(v\otimes v:v\in F)$, graded by tensor degree; write
$e_I=e_{i_1}\wedge\cdots\wedge e_{i_p}$ for
$I=\{i_1<\cdots<i_p\}$.
