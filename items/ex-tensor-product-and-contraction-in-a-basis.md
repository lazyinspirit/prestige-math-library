---
id: ex-tensor-product-and-contraction-in-a-basis
kind: example
title: "Tensor product and contraction in a basis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear,
       lem-contraction-is-independent-of-the-basis-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Example

On $V=\mathbb R^2$ with basis $(e_1,e_2)$ and dual basis $(e^1,e^2)$, let

$$
S=e^1,\qquad T=e^2,\qquad R=e_1\otimes e^1+e_2\otimes e^2.
$$

Then

$$
S\otimes T=e^1\otimes e^2,\qquad \operatorname{ctr}(R)=2.
$$

## Facts & Assumptions

**Given:** The basis $(e_1,e_2)$, its dual basis $(e^1,e^2)$, and the tensors $S,T,R$ above.

[L1] Tensor product multiplies the factor values on concatenated arguments, and contraction is basis-independent ([[prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear]], [[lem-contraction-is-independent-of-the-basis-formula]]).

## Verification
**Proof technique:** direct.

1.1 For vectors $(a_1,a_2)$ and $(b_1,b_2)$, [L1] gives $$ (S\otimes T)((a_1,a_2),(b_1,b_2))=S(a_1,a_2)\,T(b_1,b_2)=a_1b_2, $$ so $S\otimes T=e^1\otimes e^2$. [L1, given, algebra]

1.2 Again by [L1], $$ \operatorname{ctr}(R)=R(e^1,e_1)+R(e^2,e_2)=1+1=2. $$ [L1, given, algebra]

2.1 This computes the announced tensor product and contraction. [step 1.1, step 1.2] ∎