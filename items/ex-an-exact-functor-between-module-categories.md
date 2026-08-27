---
id: ex-an-exact-functor-between-module-categories
kind: example
title: "Localization of modules gives an exact functor between module categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories, thm-localisation-of-modules-is-exact, thm-modules-over-a-ring-form-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 10, §10.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture10.pdf"
pipeline_run: frontier-21
---

## Example

If $S$ is a multiplicative subset of a commutative ring $R$, the localization
functor

$$S^{-1}(-):R\text{-}\mathbf{Mod}\longrightarrow S^{-1}R\text{-}\mathbf{Mod}$$

is exact.

## Facts & Assumptions

**Given:** A ring $R$ and a multiplicative subset $S$.

[L1] Module categories are abelian
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Localization of modules preserves short exact sequences
([[thm-localisation-of-modules-is-exact]]).

[L3] Exact functors between abelian categories are defined by additivity plus
left and right exactness
([[def-exact-functor-between-abelian-categories]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], localization carries every short exact sequence of $R$-modules to a short exact sequence of $S^{-1}R$-modules. [L2]

2.1 Since both source and target are abelian by [L1], the short-exact-sequence criterion makes localization exact, which is exactly the notion in [L3]. [L1, L2, L3, step 1.1] ∎
