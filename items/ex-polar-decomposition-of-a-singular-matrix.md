---
id: ex-polar-decomposition-of-a-singular-matrix
kind: example
title: "A singular matrix has a polar decomposition with visibly nonunique isometric factors"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-polar-decomposition, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For

$$T=\begin{pmatrix}1&0\\0&0\end{pmatrix},$$

one has the polar factor $U=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and
two distinct orthogonal choices

$$S_1=\begin{pmatrix}1&0\\0&1\end{pmatrix},\qquad S_2=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$

with

$$T=S_1U=S_2U.$$

## Facts & Assumptions

**Given:** The singular matrix $T$ above on $\mathbb R^2$ with the standard inner product.

[L1] The polar decomposition exists, and uniqueness of the isometric factor fails in general when the operator is singular ([[thm-polar-decomposition]]).

## Verification

**Proof technique:** direct.

1.1 Because $T^*T=T$, the non-negative square root is $U=T$. Also $S_1$ and $S_2$ are both orthogonal because $S_1^{\mathsf T}S_1=S_2^{\mathsf T}S_2=I$. [L1, algebra]

2.1 Direct multiplication gives $S_1U=U=S_2U=T$, while $S_1\ne S_2$. Hence this singular operator has more than one polar isometric factor, exactly as [L1] allows. [L1, step 1.1, algebra] ∎
