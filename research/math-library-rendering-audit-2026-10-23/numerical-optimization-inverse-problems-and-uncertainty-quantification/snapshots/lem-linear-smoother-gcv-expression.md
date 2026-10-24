---
id: lem-linear-smoother-gcv-expression
kind: lemma
title: The ridge leave-one-out identity yields the generalized cross-validation score
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 0
deps:
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
  - thm-singular-value-decomposition
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 15–16 derive leave-one-out cross-validation and the trace-average GCV criterion.
---

## Statement

Let $A\in\mathbb R^{m\times n}$ with $m\ge1$, let $b\in\mathbb R^m$,
and let $\lambda>0$. Define
$$x_\lambda=(A^TA+\lambda I)^{-1}A^Tb,\qquad H_\lambda=A(A^TA+\lambda I)^{-1}A^T,$$
so the fitted vector is $H_\lambda b$. For row $a_i^T$ of $A$, let
$x_\lambda^{(-i)}$ be the same Tikhonov minimizer after deleting row $i$ and
entry $b_i$. Then $1-(H_\lambda)_{ii}>0$ and
$$b_i-a_i^Tx_\lambda^{(-i)}=\frac{((I-H_\lambda)b)_i}{1-(H_\lambda)_{ii}}.$$
Consequently exact leave-one-out squared prediction error is
$$\sum_{i=1}^m\left(\frac{((I-H_\lambda)b)_i}{1-(H_\lambda)_{ii}}\right)^2,$$
and its mean over the $m$ observations is $1/m$ times this sum. Replacing
every diagonal leverage $(H_\lambda)_{ii}$ in the mean by
their average $\operatorname{tr}(H_\lambda)/m$ gives the GCV score
$$\operatorname{GCV}(\lambda)=\frac{\|(I-H_\lambda)b\|^2}{m\bigl(1-\operatorname{tr}(H_\lambda)/m\bigr)^2}.$$
This trace-average replacement is the GCV approximation. As a function of the
data, it equals the exact mean leave-one-out squared prediction error exactly
when all diagonal entries of $H_\lambda$ are equal; for a particular data
vector the two scores may coincide accidentally. When the diagonal entries are
equal, the unnormalized leave-one-out sum is $m$ times the GCV score.

## Facts & Assumptions

**Given:** A real matrix $A\in\mathbb R^{m\times n}$, $m\ge1$, data
$b\in\mathbb R^m$, a parameter $\lambda>0$, and the standard Tikhonov
solution after any row deletion.

[F1] [[def-tikhonov-regularised-least-squares]]: For finite matrices, the
Tikhonov objective is $\|Ax-b\|^2+\lambda\|x\|^2$.

[F2] [[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]: Its
unique minimizer is $(A^TA+\lambda I)^{-1}A^Tb$.

[F3] [[thm-singular-value-decomposition]]: The singular value decomposition
gives orthonormal left and right singular vectors and nonnegative singular
values.

## Proof
1.1 Put $G=A^TA+\lambda I$. For every nonzero $z$, $z^TGz=\|Az\|^2+\lambda\|z\|^2>0$, so $G$ is positive definite and invertible; [F1]–[F2] give $x_\lambda=G^{-1}A^Tb$. The SVD [F3] shows $H_\lambda$ has eigenvalues $\sigma_j^2/(\sigma_j^2+\lambda)$ on the left singular vectors and zero on their orthogonal complement. Every eigenvalue is in $[0,1)$, so $I-H_\lambda$ is positive definite and $1-(H_\lambda)_{ii}>0$ for every coordinate vector. [given, F1, F2, F3, algebra]

2.1 Fix $i$, write $a=a_i$, $h=a^TG^{-1}a=(H_\lambda)_{ii}$, and $G_-=G-aa^T=A_{-i}^TA_{-i}+\lambda I$. The same positive-definiteness argument makes $G_-$ invertible. Direct multiplication verifies $G_-^{-1}=G^{-1}+G^{-1}aa^TG^{-1}/(1-h)$; the denominator is positive by step 1.1. Substituting $A^Tb-a b_i$ for the reduced right-hand side and simplifying gives $x_\lambda^{(-i)}=x_\lambda-G^{-1}a\,((I-H_\lambda)b)_i/(1-h)$. Multiplying by $a^T$ and using $a^TG^{-1}a=h$ yields the stated deleted residual identity. [given, step 1.1, algebra]

3.1 Squaring the deleted residual identity and summing over $i$ proves the exact leave-one-out sum; dividing by $m$ gives its mean. Replacing all $h_i=(H_\lambda)_{ii}$ by $\bar h=m^{-1}\sum_i h_i=\operatorname{tr}(H_\lambda)/m$ in that mean gives $m^{-1}\sum_i ((I-H_\lambda)b)_i^2/(1-\bar h)^2 =\|(I-H_\lambda)b\|^2/[m(1-\bar h)^2]$, the displayed design convention for GCV. If all $h_i=\bar h$, the exact mean has the same formula. Conversely, if the exact mean and GCV agree for every $b$, then $z=(I-H_\lambda)b$ ranges over all of $\mathbb R^m$ because step 1.1 makes $I-H_\lambda$ positive definite and hence invertible. Equality of the two diagonal quadratic forms for all $z$ forces $(1-h_i)^{-2}=(1-\bar h)^{-2}$ for every $i$; all terms $1-h_i$ are positive by step 1.1, so $h_i=\bar h$ for every $i$. This is equality as formulas in the data; individual data vectors may yield accidental equality. [step 1.1, step 2.1, algebra] ∎
