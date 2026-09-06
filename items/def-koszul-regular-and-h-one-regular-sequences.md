---
id: def-koszul-regular-and-h-one-regular-sequences
kind: definition
title: "Koszul Regular And H One Regular Sequences"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-koszul-complex-of-a-sequence-with-coefficients, def-homology-object-of-a-chain-complex]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Definition

Let $R$ be a commutative unital ring, let $M$ be an $R$-module, and let
$\mathbf x$ be a finite ordered sequence in $R$. Call $\mathbf x$
$M$-Koszul-regular when $H_i(K(\mathbf x;M))=0$ for every $i>0$, and
$M$-$H_1$-regular when $H_1(K(\mathbf x;M))=0$; ordinary regularity is the
preceding ordered definition.

