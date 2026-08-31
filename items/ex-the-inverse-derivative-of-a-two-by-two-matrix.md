---
id: ex-the-inverse-derivative-of-a-two-by-two-matrix
kind: example
title: "Differentiating the inverse of a $2\\times2$ matrix reproduces the closed formula entrywise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-derivative-of-matrix-inversion]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Example

Take

$$A=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Then

$$A^{-1}=\begin{pmatrix}\frac12&0\\0&1\end{pmatrix},\qquad -A^{-1}HA^{-1}=\begin{pmatrix}-\frac14&0\\0&1\end{pmatrix}.$$

The direct first-order expansion of $(A+tH)^{-1}$ has the same linear term.

## Facts & Assumptions

**Given:** The displayed matrices $A$ and $H$.

[L1] On the invertible locus,
$D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$
([[thm-derivative-of-matrix-inversion]]).

## Verification
**Proof technique:** direct.

1.1 Since $A+tH=\operatorname{diag}(2+t,1-t)$, one has $$(A+tH)^{-1}=\operatorname{diag}\!\left(\frac1{2+t},\frac1{1-t}\right)=\begin{pmatrix}\frac12-\frac14 t&0\\0&1+t\end{pmatrix}+O(t^2).$$ Also direct multiplication gives $-A^{-1}HA^{-1}=\begin{pmatrix}-\frac14&0\\0&1\end{pmatrix}$. [algebra]

2.1 Step 1.1 shows that the coefficient of $t$ in the exact inverse expansion is $\begin{pmatrix}-\frac14&0\\0&1\end{pmatrix}$, which is exactly $-A^{-1}HA^{-1}$. This matches [L1] entry by entry. [L1, step 1.1, algebra] ∎
