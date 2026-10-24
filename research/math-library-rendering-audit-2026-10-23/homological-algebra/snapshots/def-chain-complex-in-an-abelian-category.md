---
id: def-chain-complex-in-an-abelian-category
kind: definition
title: "Chain complex in an abelian category"
status: published
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abelian-category]
verification:
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

Let $\mathcal A$ be an abelian category ([[def-abelian-category]]).
A **chain complex in $\mathcal A$** is a family of objects $(C_n)_{n\in\mathbb Z}$
together with morphisms
$$d_n:C_n\to C_{n-1}$$
such that
$$d_{n-1}\circ d_n=0$$
for every $n\in\mathbb Z$.

The pair is written $(C_\bullet,d)$, or just $C_\bullet$ when the differentials
are clear. The differential has degree $-1$.
