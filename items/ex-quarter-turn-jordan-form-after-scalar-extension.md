---
id: ex-quarter-turn-jordan-form-after-scalar-extension
kind: example
title: 'The real quarter-turn acquires diagonal Jordan form over $\mathbb C$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.43"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Example

The real quarter-turn
$$R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$
has no Jordan form over $\mathbb R$, but after scalar extension to $\mathbb C$ the basis $((1,-i),(1,i))$ gives
$$[R]=\operatorname{diag}(i,-i)=J_1(i)\oplus J_1(-i).$$

## Facts & Assumptions

**Given:** The displayed real matrix, read over $\mathbb R$ and then over $\mathbb C$.

[L1] Jordan form over the base field exists exactly when the characteristic polynomial splits over that field ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

## Verification

**Proof technique:** computation.

1.1 Direct computation gives $\chi_R=x^2+1$, which has no real root and hence does not split over $\mathbb R$; [L1] rules out real Jordan form. [L1, algebra]

2.1 Over $\mathbb C$, $R(1,-i)=i(1,-i)$ and $R(1,i)=-i(1,i)$; these eigenvectors are independent, so their basis gives the displayed diagonal Jordan form, as [L1] permits. [L1, algebra] ∎
