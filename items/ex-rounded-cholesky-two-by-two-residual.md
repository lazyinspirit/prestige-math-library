---
id: ex-rounded-cholesky-two-by-two-residual
kind: example
title: "A rounded two by two Cholesky factor and its residual"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-rounded-cholesky-with-failure-status
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, Cholesky factorization"
      url: https://fncbook.com/structure/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Example

In binary64 round-to-nearest, ties-to-even, let
$$A=\begin{pmatrix}1&1/2\\1/2&1\\\end{pmatrix}.$$
For every nonzero real $v=(v_1,v_2)^T$,
$$v^TAv=(v_1+v_2/2)^2+3v_2^2/4>0,$$
so $A$ is positive definite. The rounded recurrence gives
$\widehat l_{11}=1$, $\widehat l_{21}=1/2$, $p_2=3/4$ exactly, and
$\widehat l_{22}=\operatorname{fl}(\sqrt{3/4})$. Since $\sqrt3/2$ is irrational and every binary64 number is rational, $\widehat l_{22}^2\ne3/4$. Therefore
$$E=\widehat L\widehat L^T-A= \begin{pmatrix}0&0\\0&\widehat l_{22}^2-3/4\end{pmatrix}\ne0.$$
The successful factor satisfies the backward bound, but its residual is not zero.
## Facts & Assumptions
**Given:** the real symmetric matrix and binary64 RNE arithmetic.

[F1] [[alg-rounded-cholesky-with-failure-status]]: successful factorization uses the rounded pivot and square-root recurrence.

[F2] [[thm-rounded-cholesky-componentwise-and-normwise-backward-error]]: success gives $E=\widehat L\widehat L^T-A$ with the stated bound.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: positive square roots and basic operations are rounded to nearest, ties to even.

## Verification

1.1 The displayed quadratic form proves positive definiteness. The first pivot is $1$, $\widehat l_{21}=(1/2)/1=1/2$, and the second pivot is $1-(1/2)^2=3/4$ exactly, so the procedure succeeds through the square-root step. [given, F1, F3, algebra]

2.1 Every binary64 value is rational, whereas sqrt(3/4)=sqrt(3)/2 is irrational; hence l-hat_22^2!=3/4. Multiplication of the displayed factor gives exactly the stated nonzero E, to which [F2] applies. [step 1.1, F2, algebra] ∎