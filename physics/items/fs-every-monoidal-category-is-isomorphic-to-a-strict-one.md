---
id: fs-every-monoidal-category-is-isomorphic-to-a-strict-one
kind: false-statement
title: "Every monoidal category is strictly monoidally isomorphic to a strict one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mac-lane-strictification, rem-strictification-gives-equivalence-and-never-isomorphism, thm-a-category-with-finite-products-is-monoidal]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 2.8.5 and Remark 2.8.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

**False claim:** every monoidal category is strictly monoidally isomorphic to a
strict monoidal category.

## Facts & Assumptions

**Given:** The strictification theorem and its scope boundary.

[L1] Every monoidal category is monoidally equivalent to a strict monoidal category ([[thm-mac-lane-strictification]]).

[L2] Strictification does not turn a category into a strict one by merely identifying isomorphic objects ([[rem-strictification-gives-equivalence-and-never-isomorphism]]).

[L3] The category of sets is monoidal under cartesian product ([[thm-a-category-with-finite-products-is-monoidal]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose a strict monoidal isomorphism $F:\mathbf{Set}\to\mathcal D$ existed with $\mathcal D$ strict. Strict preservation and strict associativity in $\mathcal D$ would give $$F((A\times B)\times C)=(F(A)\otimes F(B))\otimes F(C)=F(A)\otimes(F(B)\otimes F(C))=F(A\times(B\times C)).$$ Since $F$ is injective on objects, this would force $(A\times B)\times C=A\times(B\times C)$ as literal sets for all $A,B,C$. [L2, L3, assume-contra, algebra]

2.1 For nonempty sets under the usual ordered-pair construction, these two nested cartesian products are not literally equal: their elements have different bracketed pair shapes. This contradicts step 1.1. [step 1.1, contradiction]

3.1 Thus cartesian $\mathbf{Set}$ is not strictly monoidally isomorphic to a strict monoidal category, even though [L1] supplies a monoidal equivalence to one. Therefore the claim is false. [L1, L3, step 2.1, discharge-contradiction] ∎
