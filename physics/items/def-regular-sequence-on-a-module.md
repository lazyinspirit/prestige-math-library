---
id: def-regular-sequence-on-a-module
kind: definition
title: "Regular Sequence On A Module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-annihilator-and-torsion-of-a-module, def-quotient-module]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Definition

Let $R$ be a commutative unital ring, let $M$ be an $R$-module, and let
$\mathbf x=(x_1,\ldots,x_n)$ be a finite ordered sequence in $R$. The
sequence is $M$-regular when $M/(x_1,\ldots,x_{i-1})M\ne0$ and
multiplication by $x_i$ is injective on it for every $i$, and
$M/(\mathbf x)M\ne0$.

