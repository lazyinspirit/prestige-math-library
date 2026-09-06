---
id: lem-regular-quotient-preserves-depth-dimension-gap
title: A regular parameter quotient preserves the depth--dimension gap
kind: lemma
status: draft
origin: pipeline
deps: [lem-depth-quotient-by-regular-element, lem-parameter-dimension-drop-is-exact, thm-dimension-and-parameters-for-modules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local, $0\ne M$ finite, and let
$x\in\mathfrak m$ be $M$-regular and part of a system of parameters for $M$.
Then
$$\dim_R(M/xM)-\operatorname{depth}_R(M/xM) =\dim_R(M)-\operatorname{depth}_R(M).$$

## Facts & Assumptions

**Given:** regularity makes $M/xM$ nonzero; complete $x$ to a system of parameters $x,x_2,\ldots,x_d$ for $M$, where $d=\dim_R(M)$.

## Proof

**Proof technique:** direct.

1.1 By `lem-depth-quotient-by-regular-element`, $\operatorname{depth}(M/xM)=\operatorname{depth}(M)-1$. [given]

1.2 Put $A=R/\operatorname{Ann}_R(M)$. The finite-length terminal quotient shows that the images of $x,x_2,\ldots,x_d$ form a system of parameters of the local ring $A$, as in `thm-dimension-and-parameters-for-modules`. Moreover $$\operatorname{Supp}_R(M/xM)=\operatorname{Supp}_R(M)\cap V(x) \cong\operatorname{Spec}(A/(x)).$$ Applying `lem-parameter-dimension-drop-is-exact` to $A$ gives $\dim_R(M/xM)=d-1$. [given, algebra]

2.1 Subtracting the equalities in steps 1.1 and 1.2 cancels the common decrement and gives the displayed identity. [step 1.1, step 1.2, algebra] ∎
