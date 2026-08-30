---
id: def-bounded-bounded-below-and-bounded-above-complex
kind: definition
title: "Bounded, bounded below, and bounded above complexes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category,
       def-cochain-complex-in-an-abelian-category]
verification:
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
    - title: "Romyar Sharifi, Homological Algebra, Definition 2.7.6"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Definition

A chain complex $C_\bullet$ is:

- **bounded below** if $C_n=0$ for all $n\ll0$;
- **bounded above** if $C_n=0$ for all $n\gg0$;
- **bounded** if $C_n=0$ outside some finite interval of integers.

For a cochain complex $C^\bullet$ the same words mean:

- $C^n=0$ for all $n\ll0$;
- $C^n=0$ for all $n\gg0$;
- $C^n=0$ outside a finite interval.

Under the reindexing convention of
[[def-cochain-complex-in-an-abelian-category]], bounded below and bounded above
exchange roles, while boundedness is unchanged.
