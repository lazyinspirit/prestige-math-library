---
id: prop-the-total-kernel-of-a-cohomological-functor-is-thick
kind: proposition
title: "The total kernel of a cohomological functor is thick"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-thick-subcategory, def-cohomological-functor-on-a-triangulated-category, def-split-monomorphism-and-split-epimorphism]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Exercise 10.2.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

For a cohomological $H$, the full subcategory of objects $X$ with
$H(X[n])=0$ for every $n\in\mathbb Z$ is thick.

## Facts & Assumptions

**Given:** A cohomological functor $H$ and its total kernel.

## Proof

1.1 The long exact sequence of every translated distinguished triangle makes the total kernel closed under shifts and two-out-of-three. [given]

2.1 If $B$ is a retract of $A$ then $H(B[n])$ is a retract of $H(A[n])=0$ for every $n$, hence is zero; this proves direct-summand closure. [step 1.1, given] ∎
