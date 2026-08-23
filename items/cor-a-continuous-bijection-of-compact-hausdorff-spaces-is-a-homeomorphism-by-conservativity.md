---
id: cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity
kind: corollary
title: "A continuous bijection of compact Hausdorff spaces is a homeomorphism, by conservativity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-hausdorff-spaces-are-monadic-over-sets, thm-a-monadic-functor-is-conservative, def-homeomorphism-and-open-maps, prop-topological-spaces-and-continuous-maps-form-category-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.6.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume UL/BPI. Every continuous bijection between compact Hausdorff spaces is a homeomorphism.

## Facts & Assumptions

**Given:** UL/BPI and a continuous bijection $f:X\to Y$ between compact Hausdorff spaces.

[L1] Every monadic functor reflects isomorphisms ([[thm-a-monadic-functor-is-conservative]]).

[L2] Under UL/BPI, compact Hausdorff spaces are monadic over sets ([[thm-compact-hausdorff-spaces-are-monadic-over-sets]]).

[L3] A homeomorphism is a continuous bijection whose inverse is continuous ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the underlying-set functor from compact Hausdorff spaces reflects isomorphisms. [L1, L2]

2.1 The underlying function of $f$ is a bijection, hence an isomorphism in $\mathbf{Set}$. Conservativity from step 1.1 makes $f$ an isomorphism in the category of compact Hausdorff spaces. [step 1.1, given]

3.1 The categorical inverse of $f$ is a continuous map, so $f$ is a continuous bijection with continuous inverse and is a homeomorphism by [L3]. This includes empty and singleton spaces. [step 2.1, L3] ∎

## Remarks

The same conclusion has a direct topological proof: [[thm-compactness-under-continuous-maps]] makes the inverse send closed sets to closed sets when the codomain is Hausdorff. The proof above records how the conclusion follows instead from monadic conservativity.
