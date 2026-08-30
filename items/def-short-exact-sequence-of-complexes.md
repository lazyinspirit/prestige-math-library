---
id: def-short-exact-sequence-of-complexes
kind: definition
title: "Short exact sequence of complexes"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category-of-chain-complexes,
       def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

A **short exact sequence of complexes** is a sequence of chain maps
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$
that is exact in each degree as a sequence in the ambient abelian category.
