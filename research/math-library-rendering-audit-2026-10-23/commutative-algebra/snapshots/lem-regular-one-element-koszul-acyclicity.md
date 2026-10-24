---
id: lem-regular-one-element-koszul-acyclicity
kind: lemma
title: "Regular One Element Koszul Acyclicity"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-one-element-koszul-homology, def-regular-sequence-on-a-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
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

## Statement

If multiplication by $x$ is injective on nonzero $M$ and $M/xM\ne0$, then $K(x;M)$ has zero positive homology and resolves $M/xM$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-one-element-koszul-homology]], [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 The one-element computation identifies positive homology with the kernel of multiplication by $x$. [given, algebra]

2.1 Injectivity makes that kernel zero and degree zero is the stated quotient. [step 1.1, algebra] ∎
