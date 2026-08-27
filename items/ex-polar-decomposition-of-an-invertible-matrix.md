---
id: ex-polar-decomposition-of-an-invertible-matrix
kind: example
title: "A worked polar decomposition of an invertible matrix"
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

$$T=\begin{pmatrix}0&2\\1&0\end{pmatrix},$$

the polar decomposition is

$$T=SU,\qquad S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad U=\begin{pmatrix}1&0\\0&2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The matrix $T$ above on $\mathbb R^2$ with the standard inner product.

[L1] Every endomorphism has a polar decomposition $T=SU$ with $U=\sqrt{T^*T}$ and $S$ an isometry ([[thm-polar-decomposition]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $T^*T=\begin{pmatrix}1&0\\0&4\end{pmatrix}$, so its non-negative square root is $U=\begin{pmatrix}1&0\\0&2\end{pmatrix}$. [L1, algebra]

2.1 The matrix $S=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ satisfies $S^{\mathsf T}S=I$, so it is orthogonal, and $SU=\begin{pmatrix}0&2\\1&0\end{pmatrix}=T$. Hence this is the polar decomposition predicted by [L1]. [L1, step 1.1, algebra] ∎
