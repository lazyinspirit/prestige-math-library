---
id: fs-an-orientation-determines-an-inner-product
kind: false-statement
title: "FALSE: an orientation determines an inner product"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oriented-unit-volume-form, thm-gram-inner-product-on-exterior-powers-is-positive-definite]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.3"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

An orientation of a finite-dimensional real vector space determines an inner product on that space.

## Facts & Assumptions

**Given:** The orientation of $\mathbb R^2$ represented by $(e_1,e_2)$, the standard inner product $g$, and the scaled inner product $2g$.

[L1] The oriented unit volume form is attached to the pair of an orientation and an inner product ([[def-oriented-unit-volume-form]]).

[L2] The Gram pairing on the exterior powers is built from the inner product ([[thm-gram-inner-product-on-exterior-powers-is-positive-definite]]).

## Refutation

**Proof technique:** direct.


1.1 The two inner products $g$ and $2g$ are different: $\langle e_1,e_1\rangle_g=1$ but $\langle e_1,e_1\rangle_{2g}=2$. However, orientation classes of ordered bases are defined purely by determinants of change-of-basis maps, with no metric input, so both metrics sit over the same orientation class of $(e_1,e_2)$. [given, algebra]

1.2 By [L1], the unit volume form for $(\text{orientation},g)$ is $e_1\wedge e_2$, while for $(\text{orientation},2g)$ it is $(e_1/\sqrt2)\wedge(e_2/\sqrt2)=\tfrac12\,e_1\wedge e_2\ne e_1\wedge e_2$. [L1, algebra]

2.1 By [L2], the two metrics also induce different Gram pairings on the exterior powers: norms are rescaled, so the metric data is genuinely different even though the orientation is the same. [L2, step 1.1]

3.1 Steps 1.1, 1.2 and 2.1 exhibit two different inner products over one fixed orientation, refuting the claim. [step 1.1, step 1.2, step 2.1] ∎
