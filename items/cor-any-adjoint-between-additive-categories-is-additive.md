---
id: cor-any-adjoint-between-additive-categories-is-additive
kind: corollary
title: "Any adjoint between additive categories is additive"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-functor-between-additive-categories-preserving-finite-products-is-additive, thm-right-adjoints-preserve-limits, cor-additive-categories-are-closed-under-passage-to-the-opposite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2(1)"
      url: "https://stacks.math.columbia.edu/tag/010M"
pipeline_run: frontier-20
---

## Statement

Every left adjoint or right adjoint between additive categories is additive.

## Facts & Assumptions

**Given:** An adjunction between additive categories.

[L1] A functor between additive categories preserving finite products is additive ([[cor-a-functor-between-additive-categories-preserving-finite-products-is-additive]]).

[L2] Right adjoints preserve all limits that exist ([[thm-right-adjoints-preserve-limits]]).

[L3] Additive categories remain additive after passing to the opposite ([[cor-additive-categories-are-closed-under-passage-to-the-opposite]]).

## Proof

**Proof technique:** direct.

1.1 A right adjoint preserves finite products by [L2], so [L1] makes it additive. [L1, L2]

2.1 If $F:\mathcal C\to\mathcal D$ is a left adjoint, then $F^{\mathrm{op}}:\mathcal C^{\mathrm{op}}\to\mathcal D^{\mathrm{op}}$ is a right adjoint. By [L3], the opposite categories are additive, so step 1.1 applied in the opposite categories shows that $F^{\mathrm{op}}$ is additive. But additivity is checked on the same hom-group maps before and after taking opposites, so $F$ is additive as well. [L3, step 1.1]

3.1 Therefore any adjoint between additive categories is additive. [step 1.1, step 2.1] ∎
