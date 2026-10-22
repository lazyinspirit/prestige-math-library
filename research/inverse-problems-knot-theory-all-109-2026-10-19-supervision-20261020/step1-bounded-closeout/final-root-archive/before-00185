---
id: ex-knot-kt-46-worked-cases
kind: example
title: "L(3,1) correction terms in the stated orientation convention"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness-examples
deps:
  - def-heegaard-floer-correction-term
  - lem-heegaard-floer-correction-terms-lens-space-lp1
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 4.1, Proposition 4.8; q=1 specialization and orientation reversal"
    - title: "Jennifer Hom, Lecture Notes on Heegaard Floer Homology"
      url: "https://arxiv.org/pdf/2008.01836v1"
      locator: "Section 2.2; d-invariant grading convention"
---

## Example

Use the orientation and cyclic labels for which $d(L(p,1),i)=((2i-p)^2-p)/(4p)$. For $p=3$, the correction terms are $d(L(3,1),0)=1/2$, $d(L(3,1),1)=-1/6$, and $d(L(3,1),2)=-1/6$. Reversing orientation negates all three values.

## Example references

[[lem-heegaard-floer-correction-terms-lens-space-lp1|The lens-space formula and orientation reversal]]

[Ozsvath and Szabo, *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, Proposition 4.8](https://arxiv.org/pdf/math/0110170v1)

[Hom, *Lecture Notes on Heegaard Floer Homology*, Section 2.2](https://arxiv.org/pdf/2008.01836v1)

## Facts & Assumptions

**Given:** The stated orientation convention and the three labels $i=0,1,2$.

[F1] For every $p\ge1$ and canonical label $i$, the stated $L(p,1)$ correction-term formula holds; reversing orientation negates the value at the conjugate label ([[lem-heegaard-floer-correction-terms-lens-space-lp1]]).

## Proof
**Proof technique:** substitute each label into the formula and simplify.

**Given:** The data above.

1.1 For $p=3,i=0$, $(2i-p)^2-p=9-3=6$ and $4p=12$, so [F1] gives $d(L(3,1),0)=6/12=1/2$. [F1, given, algebra]

2.1 For $i=1$, the numerator is $(-1)^2-3=-2$; for $i=2$, it is $1^2-3=-2$. Both denominators are $12$, so the other two values are $-2/12=-1/6$. Orientation reversal negates each by [F1]. [F1, step 1.1, algebra] ∎
