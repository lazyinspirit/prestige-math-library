---
id: ex-wedge-products-of-the-standard-dual-basis
kind: example
title: "Wedge products of the standard dual basis"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-wedge-product-is-associative-and-graded-commutative,
       lem-wedge-monomials-in-a-dual-basis-form-a-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Example

On $\mathbb R^3$ with standard dual basis $dx,dy,dz$,

$$ dx\wedge dy=-dy\wedge dx,\qquad dx\wedge dx=0,\qquad dx\wedge dy\wedge dz $$

is a basis of $\operatorname{Alt}^3(\mathbb R^3)$.

## Facts & Assumptions

**Given:** The standard basis of $\mathbb R^3$ and its dual basis $dx,dy,dz$.

[L1] The wedge product is graded commutative ([[thm-wedge-product-is-associative-and-graded-commutative]]).

[L2] Increasing wedge monomials in a dual basis form a basis of each exterior-power space ([[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

## Verification
**Proof technique:** direct.

1.1 Since $dx$ and $dy$ are $1$-forms, [L1] gives $dx\wedge dy=-dy\wedge dx$ and $dx\wedge dx=-dx\wedge dx$, hence $dx\wedge dx=0$. [L1, given, algebra]
1.2 By [L2], the unique increasing triple wedge $dx\wedge dy\wedge dz$ forms a basis of $\operatorname{Alt}^3(\mathbb R^3)$. [L2, given]
2.1 These are the standard wedge-product identities in the dual basis. [step 1.1, step 1.2] ∎