---
id: cex-a-variable-rank-involutive-family-outside-regular-frobenius
kind: counterexample
title: "A bracket-closed variable-rank family outside regular Frobenius"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-involutive-distribution,
       def-smooth-distribution-on-a-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
---

## Statement refuted

Any variable-rank family of tangent subspaces satisfying a bracket-closure
condition is covered by the regular Frobenius theorem.

## Facts & Assumptions

**Given:** On $\mathbb R$, let $$\mathcal D_x := \begin{cases} \{0\}, & x = 0, \\ T_x\mathbb R, & x \neq 0. \end{cases}$$

[A1] The rank is $0$ at the origin and $1$ elsewhere.

## Counterexample

**Proof technique:** direct.

1.1 Any smooth vector field tangent to this family must vanish at the origin. [given] The Lie bracket of two such fields also vanishes at the origin, so the tangent fields are closed under bracket in this loose sense. [given]

1.2 Nevertheless the family is not a smooth distribution of constant rank, so [given] it does not satisfy the hypotheses of the regular Frobenius theorem. [given]

2.1 Hence variable-rank bracket closure does not place a family inside regular [given] Frobenius theory. [given] ∎
