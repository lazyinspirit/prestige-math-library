---
id: ex-determinant-differential-at-an-invertible-and-a-singular-matrix
kind: example
title: "The adjugate formula still differentiates the determinant at a singular matrix, while Jacobi's inverse form does not"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-determinant-differential-and-jacobis-formula]
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
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Example

Let

$$H=\begin{pmatrix}h_{11}&h_{12}\\h_{21}&h_{22}\end{pmatrix}.$$

At the invertible matrix $I_2$, one has
$D\det(I_2)[H]=h_{11}+h_{22}=\operatorname{tr}(H)$. At the singular matrix
$S=\operatorname{diag}(1,0)$, one has

$$\det(S+tH)=t\,h_{22}+O(t^2),$$

so
$D\det(S)[H]=h_{22}=\operatorname{tr}(\operatorname{adj}(S)H)$, but Jacobi's
formula cannot even be written because $S^{-1}$ does not exist.

## Facts & Assumptions

**Given:** The direction matrix $H$, the identity $I_2$, and the singular
matrix $S=\operatorname{diag}(1,0)$.

[L1] The determinant differential is $\operatorname{tr}(\operatorname{adj}(A)H)$
for every $A$, while Jacobi's inverse form needs $A$ invertible
([[thm-determinant-differential-and-jacobis-formula]]).

## Verification
**Proof technique:** direct.

1.1 At $A=I_2$, one has $\operatorname{adj}(I_2)=I_2$, so [L1] gives $D\det(I_2)[H]=\operatorname{tr}(H)=h_{11}+h_{22}$. [L1, algebra]

2.1 At $S=\operatorname{diag}(1,0)$, $$\det(S+tH)=\det\begin{pmatrix}1+th_{11}&th_{12}\\th_{21}&th_{22}\end{pmatrix} =th_{22}+t^2(h_{11}h_{22}-h_{12}h_{21}),$$ so $D\det(S)[H]=h_{22}$. Since $\operatorname{adj}(S)=\operatorname{diag}(0,1)$, this is $\operatorname{tr}(\operatorname{adj}(S)H)$, exactly as [L1] predicts. But $S^{-1}$ does not exist, so Jacobi's inverse-locus formula is unavailable. [L1, algebra] ∎