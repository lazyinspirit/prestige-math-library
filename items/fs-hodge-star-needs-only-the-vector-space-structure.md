---
id: fs-hodge-star-needs-only-the-vector-space-structure
kind: false-statement
title: "FALSE: Hodge star needs only the vector-space structure"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hodge-star-on-an-oriented-inner-product-space, thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula, ex-orientation-reversal-negates-the-hodge-star]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

The Hodge star is determined by the underlying real vector-space structure alone: no metric or orientation data is needed.

## Facts & Assumptions

**Given:** The real vector space $\mathbb R^3$, the standard inner product, and the two opposite orientations.

[L1] The Hodge star is built from the Gram pairing (the metric) and the oriented unit volume form (the orientation) ([[def-hodge-star-on-an-oriented-inner-product-space]]).

[L2] The Hodge star is the unique operator satisfying its characterizing relation for those data ([[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[L3] With the standard metric fixed, reversing the orientation negates the Hodge star: $\star_-=-\star_+$ ([[ex-orientation-reversal-negates-the-hodge-star]]).

## Refutation

**Proof technique:** direct.


1.1 By [L1], the definition of the Hodge star consumes a metric and an orientation as input, so the star is data attached to the pair, not to the bare vector space. [L1]

1.2 By [L3], the same underlying real vector space $\mathbb R^3$ with the same metric but the two opposite orientations has two different stars, $\star_+=-\star_-$. [L3]

2.1 By the uniqueness clause of [L2], the operator is genuinely tied to the chosen data: the characterizing relation forces the sign change of step 1.2, so no single star is attached to the vector-space structure alone. [L2, step 1.2]

3.1 Steps 1.1 through 2.1 refute the claimed sufficiency of the vector-space structure. [step 1.1, step 1.2, step 2.1] ∎
