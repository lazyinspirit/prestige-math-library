---
id: ex-jordan-block-epsilon-pseudospectrum
kind: example
title: "The closed epsilon-pseudospectrum of the two-by-two Jordan block is a disk"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-closed-epsilon-pseudospectrum
  - def-singular-values-of-an-endomorphism
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.5"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Mark Embree, Matrix Theory course notes, §5.3"
      url: https://personal.math.vt.edu/embree/math5524/chapter5.pdf
---

## Example

Let $J=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $\epsilon>0$. Then

$$\Lambda_\epsilon(J)=\{z\in\mathbb C:|z|^2\le\epsilon+\epsilon^2\},$$

the closed disk centered at $0$ with radius $\sqrt{\epsilon+\epsilon^2}$. In particular, its radius is of order $\sqrt\epsilon$ as $\epsilon\downarrow0$, while $\sigma(J)=\{0\}$.

## Facts & Assumptions

**Given:** The matrix $J$ and $\epsilon>0$.

[F1] [[def-closed-epsilon-pseudospectrum]]: $z\in\Lambda_\epsilon(J)$ exactly when $\sigma_{\min}(zI-J)\le\epsilon$.

[F2] [[def-singular-values-of-an-endomorphism]]: the singular values are the nonnegative square roots of the eigenvalues of $M^*M$.

## Verification

1.1 Put $x=|z|^2$ and $M=zI-J=\begin{pmatrix}z&-1\\0&z\end{pmatrix}$. Then $M^*M=\begin{pmatrix}x&-\overline z\\-z&x+1\end{pmatrix}$ has trace $1+2x$ and determinant $x^2$, so its smaller eigenvalue is $f(x)=\sigma_{\min}(M)^2=(1+2x-\sqrt{1+4x})/2$ by [F2]. [given, F2, algebra]

2.1 For $y\ge x\ge0$, $f(y)-f(x)=(y-x)\left(1-\frac{2}{\sqrt{1+4y}+\sqrt{1+4x}}\right)\ge0$. The parenthesized factor is strictly positive when $y>x$, since then $\sqrt{1+4y}+\sqrt{1+4x}>2$; thus $f$ is strictly increasing on $[0,\infty)$. Also $\sqrt{1+4(\epsilon+\epsilon^2)}=1+2\epsilon$, hence $f(\epsilon+\epsilon^2)=\epsilon^2$. By strict monotonicity and [F1], $f(|z|^2)\le\epsilon^2$ exactly when $|z|^2\le\epsilon+\epsilon^2$. [given, F1, step 1.1, algebra] ∎
