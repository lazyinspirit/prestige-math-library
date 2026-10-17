---
id: lem-truncated-svd-bias-and-data-noise-decomposition
kind: lemma
title: "A truncated SVD separates discarded-direction bias from retained data noise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-truncated-singular-value-pseudoinverse-at-a-declared-threshold
  - thm-singular-value-decomposition
  - def-inner-product-space
  - cor-inner-product-induces-a-norm
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Complete 29-slide chapter, especially slides 5–8 on truncation and bias."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Complete 27-slide chapter, especially slides 4–6 on forward error and TSVD."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapters 3 and 5–6 on compact singular systems and spectral regularization, PDF pp. 21–63."
---

## Statement

Let $A\in\mathbb F^{m\times n}$, where $\mathbb F\in\{\mathbb R,\mathbb C\}$,
with singular value decomposition $A=U\Sigma V^*$, where the columns
$(v_1,\ldots,v_n)$ of $V$ and $(u_1,\ldots,u_m)$ of $U$ are orthonormal bases
and the nonzero singular values satisfy $\sigma_1\ge\cdots\ge\sigma_r>0$.
Thus $Av_i=\sigma_i u_i$ for $i\le r$ and $Av_i=0$ for $i>r$. The remaining
$v_{r+1},\ldots,v_n$ span $\ker A:=\{v\in\mathbb F^n:Av=0\}$. Fix a
threshold $\tau\ge0$ and put
$I_\tau=\{i\le r:\sigma_i>\tau\}$ and
$J_\tau=\{1,\ldots,n\}\setminus I_\tau$. For $x^\dagger\in\mathbb F^n$,
$e\in\mathbb F^m$, and $b=Ax^\dagger+e$, the truncated pseudoinverse from
[[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]] obeys

$$x^\dagger-A_\tau^+b= \sum_{i\in J_\tau}\langle x^\dagger,v_i\rangle v_i- \sum_{i\in I_\tau}\frac{\langle e,u_i\rangle}{\sigma_i}v_i.$$

Thus discarded singular directions, including $\ker A$, form the truncation bias, while only retained directions amplify the data perturbation. If $I_\tau\ne\varnothing$, then

$$\|A_\tau^+e\|\le \left(\max_{i\in I_\tau}\frac1{\sigma_i}\right)\|e\|;$$

if $I_\tau=\varnothing$, then $A_\tau^+=0$ and the noise term is zero.

## Facts & Assumptions

**Given:** A finite matrix $A\in\mathbb F^{m\times n}$, its singular value decomposition, $\tau\ge0$, a target $x^\dagger\in\mathbb F^n$, and data $b=Ax^\dagger+e$ with $e\in\mathbb F^m$.

[F1] [[thm-singular-value-decomposition]]: A finite-dimensional map has orthonormal bases $(e_i)$ and $(f_i)$ with $Tv=\sum_{i=1}^r s_i\langle v,e_i\rangle f_i$ and $s_1\ge\cdots\ge s_r>0$.

[F2] [[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]]: The truncated filter uses coefficient $\sigma_i^{-1}$ when $\sigma_i>\tau$ and coefficient $0$ when $\sigma_i\le\tau$.

[F3] [[cor-inner-product-induces-a-norm]]: The norm induced by the inner product satisfies $\|v\|^2=\langle v,v\rangle$.

[F4] [[def-inner-product-space]]: The inner product is linear in its first argument and conjugate symmetric.

## Proof

1.1 By linearity and $b=Ax^\dagger+e$, $x^\dagger-A_\tau^+b=(I-A_\tau^+A)x^\dagger-A_\tau^+e$. [given, F2, algebra]

2.1 The definition in [F2] and the SVD in [F1] give $A_\tau^+A x^\dagger=\sum_{i\in I_\tau}\langle x^\dagger,v_i\rangle v_i$; expanding $x^\dagger$ in the full orthonormal basis $(v_i)$ therefore makes $(I-A_\tau^+A)x^\dagger=\sum_{i\in J_\tau}\langle x^\dagger,v_i\rangle v_i$. Likewise, $A_\tau^+e=\sum_{i\in I_\tau} \sigma_i^{-1}\langle e,u_i\rangle v_i$. [F1, F2, step 1.1, algebra]

3.1 If $I_\tau$ is empty, [F2] makes $A_\tau^+=0$. Otherwise orthonormality of the retained $v_i$ and [F1] give $\|A_\tau^+e\|^2=\sum_{i\in I_\tau} |\langle e,u_i\rangle|^2/\sigma_i^2\le (\max_{i\in I_\tau}\sigma_i^{-1})^2\sum_{i\in I_\tau}|\langle e,u_i\rangle|^2$. Since $(u_1,\ldots,u_m)$ is an orthonormal basis of $\mathbb F^m$, write $e=\sum_{i=1}^m\langle e,u_i\rangle u_i$; conjugate symmetry and orthonormality give $\|e\|^2=\sum_{i=1}^m|\langle e,u_i\rangle|^2$. Consequently $\sum_{i\in I_\tau}|\langle e,u_i\rangle|^2\le\|e\|^2$. Taking nonnegative square roots proves the noise bound and the stated bias/noise split. [F1, F2, F3, F4, step 2.1, algebra] ∎
