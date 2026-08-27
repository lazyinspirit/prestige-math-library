---
id: thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits
kind: theorem
title: "An abelian category has all finite limits and all finite colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

Every abelian category has all finite limits and all finite colimits.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

[L1] An abelian category is additive and every morphism has a kernel and a
cokernel ([[def-abelian-category]]).

[L2] An additive category with all kernels and cokernels has all finite limits
and all finite colimits
([[thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], an abelian category satisfies the hypotheses of [L2]. [L1, L2]

2.1 Therefore [L2] applies directly and yields all finite limits and all finite colimits. [L2, step 1.1] ∎
