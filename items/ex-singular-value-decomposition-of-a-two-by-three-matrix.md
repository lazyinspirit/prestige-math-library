---
id: ex-singular-value-decomposition-of-a-two-by-three-matrix
kind: example
title: "The singular value decomposition of an explicit 2x3 matrix"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-singular-value-decomposition, prop-standard-coordinate-inner-products]
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

For the linear map $\mathbb R^3\to\mathbb R^2$ with matrix

$$A=\begin{pmatrix}2&0&0\\0&1&0\end{pmatrix},$$

an SVD is

$$A=U\Sigma V^{\mathsf T},\qquad U=I_2,\qquad \Sigma=\begin{pmatrix}2&0&0\\0&1&0\end{pmatrix},\qquad V=I_3.$$

## Facts & Assumptions

**Given:** The matrix $A$ above with the standard inner products on $\mathbb R^3$ and $\mathbb R^2$.

[L1] Every linear map between finite-dimensional inner product spaces admits a singular value decomposition ([[thm-singular-value-decomposition]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $A^{\mathsf T}A=\operatorname{diag}(4,1,0)$, so the singular values are $2,1,0$, with standard basis vectors as right-singular vectors. [L1, algebra]

2.1 The images of the first two standard basis vectors are $2e_1$ and $e_2$, so the standard basis of $\mathbb R^2$ gives the left-singular vectors. Therefore $U=I_2$, $V=I_3$, and the displayed diagonal matrix $\Sigma$ give an SVD of $A$, exactly as [L1] guarantees. [L1, step 1.1, algebra] ∎
