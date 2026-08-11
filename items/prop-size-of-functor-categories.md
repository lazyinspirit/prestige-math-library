---
id: prop-size-of-functor-categories
kind: proposition
title: "If $\\mathcal C$ is small and $\\mathcal D$ is locally small then $[\\mathcal C,\\mathcal D]$ is locally small; if both are small it is small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-functor-category, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

If $\mathcal C$ is small and $\mathcal D$ is locally small, then
$[\mathcal C,\mathcal D]$ is locally small. If both $\mathcal C$ and
$\mathcal D$ are small, then $[\mathcal C,\mathcal D]$ is small.

## Facts & Assumptions

**Given:** Categories $\mathcal C,\mathcal D$ with the stated size hypotheses.

[L1] The objects and morphisms of $[\mathcal C,\mathcal D]$ are functors and natural transformations ([[def-functor-category]]).

[L2] Smallness and local smallness mean set-sized object, morphism, and hom-collections as specified in [[def-small-locally-small-and-large-category]].

## Proof

**Proof technique:** direct.

1.1 For fixed functors $F,G$, a natural transformation is a family in the set-indexed product $\prod_{C\in\operatorname{Ob}\mathcal C}\mathcal D(FC,GC)$ satisfying a set of naturality equations; smallness of $\mathcal C$ and local smallness of $\mathcal D$ make this a set. [given, L1, L2]

2.1 Hence every hom-collection of $[\mathcal C,\mathcal D]$ is a set, so the functor category is locally small. [step 1.1, L1, L2]

3.1 If $\mathcal D$ is also small, the possible object and morphism functions of a functor lie in set-sized function spaces, and the functor equations define a subset; the union of the set-sized natural-transformation sets is then a set, so $[\mathcal C,\mathcal D]$ is small. [step 2.1, L1, L2] ∎

