---
id: def-morphism-of-short-exact-sequences-of-complexes
kind: definition
title: "A morphism of short exact sequences of complexes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-short-exact-sequence-of-complexes,
       def-chain-map]
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Definition

A **morphism of short exact sequences of complexes** is a commutative ladder
$$ \begin{matrix} 0&\to&A_\bullet&\to&B_\bullet&\to&C_\bullet&\to&0\\ &&\downarrow&&\downarrow&&\downarrow&&\\ 0&\to&A'_\bullet&\to&B'_\bullet&\to&C'_\bullet&\to&0 \end{matrix} $$
in which each row is a short exact sequence of complexes and each vertical map
is a chain map.

Equivalently, it is a triple of chain maps $a:A_\bullet\to A'_\bullet$,
$b:B_\bullet\to B'_\bullet$, and $c:C_\bullet\to C'_\bullet$ for which the
obvious squares with the inclusion and projection maps commute in every degree.

