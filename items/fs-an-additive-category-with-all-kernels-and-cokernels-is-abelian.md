---
id: fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian
kind: false-statement
title: "FALSE: every additive category with all kernels and cokernels is abelian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Example 12.3.13"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-21
---

## Statement

Every additive category with all kernels and cokernels is abelian.

## Facts & Assumptions

**Given:** The filtered-vector-space category from
[[cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]].

[L1] The filtered-vector-space example is additive and has all kernels and
cokernels, but it is not abelian
([[cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]]).

## Refutation

1.1 The cited category satisfies the hypothesis of the statement: it is additive and has kernels and cokernels. [L1]

2.1 But [L1] also says that category is not abelian. Therefore the universal statement is false. [L1, step 1.1] ∎
