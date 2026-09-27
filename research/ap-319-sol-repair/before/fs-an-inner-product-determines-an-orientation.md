---
id: fs-an-inner-product-determines-an-orientation
kind: false-statement
title: "FALSE: an inner product determines an orientation"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-orientation-reversal-negates-the-hodge-star, thm-determinant-sign-detects-orientation-change]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.2"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

An inner product on a finite-dimensional real vector space determines an orientation of that space.

## Facts & Assumptions

**Given:** The standard inner product on $\mathbb R^3$ and the ordered bases $(e_1,e_2,e_3)$ and $(e_2,e_1,e_3)$.

[L1] With the standard metric fixed, $\mathbb R^3$ carries the two opposite orientations represented by $(e_1,e_2,e_3)$ and $(e_2,e_1,e_3)$, and reversing the orientation negates the Hodge star ([[ex-orientation-reversal-negates-the-hodge-star]]).

[L2] The sign of a change-of-basis determinant records which orientation class a basis lies in ([[thm-determinant-sign-detects-orientation-change]]).

## Refutation

**Proof technique:** direct.


1.1 By [L1], the same standard inner product is compatible with both the orientation represented by $(e_1,e_2,e_3)$ and the opposite one represented by $(e_2,e_1,e_3)$; neither is preferred by the metric. [L1]

1.2 By [L2], these are genuinely different orientations: the change-of-basis determinant is $-1$, so the two bases lie in opposite classes. [L2]

2.1 Since one inner product is compatible with two different orientations, the inner product does not determine an orientation. [step 1.1, step 1.2] ∎
