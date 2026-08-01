---
id: lem-discrete-families-are-locally-finite
kind: lemma
title: 'Every discrete family is locally finite, so every $\sigma$-discrete basis is $\sigma$-locally finite'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-discrete-family-and-sigma-bases, def-cover-refinement-and-local-finiteness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Statement

Every discrete family is locally finite. Consequently every $\sigma$-discrete basis is $\sigma$-locally finite.

## Facts & Assumptions

**Given:** A discrete family $\mathcal D$ in a space $X$.

[L1] A family is locally finite when every point has a neighbourhood meeting only finitely many of its members ([[def-cover-refinement-and-local-finiteness]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$, discreteness supplies a neighbourhood meeting at most one member of $\mathcal D$. That is a finite number, so [L1] makes $\mathcal D$ locally finite. [L1]

2.1 Applying step 1.1 separately to every discrete layer in a $\sigma$-discrete decomposition leaves the same countable decomposition and gives a $\sigma$-locally-finite basis. [step 1.1] ∎
