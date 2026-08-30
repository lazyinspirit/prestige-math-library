---
id: def-cochain-complex-in-an-abelian-category
kind: definition
title: "Cochain complex in an abelian category"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abelian-category, def-chain-complex-in-an-abelian-category]
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
    - title: "Romyar Sharifi, Homological Algebra, §2.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Definition

Let $\mathcal A$ be an abelian category. A **cochain complex in $\mathcal A$**
is a family of objects $(C^n)_{n\in\mathbb Z}$ together with morphisms
$$d^n:C^n\to C^{n+1}$$
such that
$$d^{n+1}\circ d^n=0$$
for every $n\in\mathbb Z$.

This page uses the reindexing convention that a cochain complex $C^\bullet$ may
also be read as the chain complex with $(C^\sharp)_n:=C^{-n}$ and
$d^\sharp_n:=d^{-n}$, so that lower and upper indices differ only by the sign
of the grading.
