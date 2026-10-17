---
id: lem-matrix-action-defect-variation-of-constants
kind: lemma
title: "Variation of constants for a finite-matrix action defect"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-matrix-product-and-identity-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-vector-valued-derivative-and-integral
  - lem-exponential-series-of-a-bounded-operator
  - prop-standard-coordinate-inner-products
  - thm-continuous-implies-integrable
  - thm-complex-numbers-are-the-real-coordinate-plane
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 2, variation-of-constants representation (2.2), and Section 2, Theorem 2.1 proof, printed pp. 489–492."
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7, matrix-function actions on vectors, printed pp. 22–24."
---

## Statement

Let $n\ge1$, $A\in M_n(\mathbb C)$, $T>0$, $v\in\mathbb C^n$, and $u:[-T,T]\to\mathbb C^n$ be continuously differentiable, with one-sided derivatives at the endpoints. Define the continuous defect $r(s):=Au(s)-u'(s)$. Then, for every $t\in[-T,T]$,

$$e^{tA}v-u(t)=e^{tA}(v-u(0))+\int_0^t e^{(t-s)A}r(s)\,ds.$$

The vector integral is the oriented componentwise Riemann integral after identifying $\mathbb C^n$ with $\mathbb R^{2n}$. In particular, if $u(0)=v$, the initial term vanishes.

## Facts & Assumptions

**Given:** $n\ge1$, a complex square matrix $A$, $T>0$, a vector $v$, and a continuously differentiable curve $u:[-T,T]\to\mathbb C^n$ with defect $r(s)=Au(s)-u'(s)$.

[F1] [[lem-exponential-series-of-a-bounded-operator]]: for a bounded operator $A$, $E(t):=e^{tA}$ is differentiable, $E'(t)=AE(t)=E(t)A$, and $E(t)E(s)=E(t+s)$.

[F2] [[def-vector-valued-derivative-and-integral]]: derivatives and integrals of finite-dimensional real vector-valued curves are taken componentwise.

[F3] [[cor-vector-valued-ftc-and-lipschitz-bound]]: if a real vector-valued curve is differentiable on a compact interval and its derivative is integrable, the integral of the derivative equals the endpoint difference.

[F4] [[thm-complex-numbers-are-the-real-coordinate-plane]] and [[prop-standard-coordinate-inner-products]]: real and imaginary coordinates identify $\mathbb C^n$ with a finite-dimensional real vector space, and the standard inner product is given coordinatewise.

[F5] [[cor-finite-dimensional-normed-spaces-are-banach]]: the finite-dimensional complex-inner-product space $\mathbb C^n$ is complete.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: for a linear map between finite-dimensional inner-product spaces, its operator norm is the maximum of $\|Ax\|_2$ over unit vectors.

[F7] [[thm-continuous-implies-integrable]]: every continuous real-valued function on a nondegenerate closed bounded interval is Riemann integrable.

## Proof

**Proof technique:** direct.

1.1 Set $x(t):=e^{tA}v-u(t)$. If $y\ne0$, rescaling $y/\|y\|_2$ in [F6] gives $\|Ay\|_2\le\|A\|_2\|y\|_2$, while the same inequality is immediate for $y=0$; thus $A$ is bounded. By [F1] and [F5], the exponential series applies on the complete space $\mathbb C^n$. It gives $x'(t)=Ae^{tA}v-u'(t)=A(x(t)+u(t))-u'(t)=Ax(t)+r(t)$, and $x(0)=v-u(0)$. [given, F1, F5, F6, algebra]

2.1 Define $g(t):=e^{-tA}x(t)$. Differentiating the product and using that $A$ commutes with every power in its exponential series gives $g'(t)=-Ae^{-tA}x(t)+e^{-tA}(Ax(t)+r(t))=e^{-tA}r(t)$. [step 1.1, F1, algebra]

3.1 By [F2] and [F4], $g$ is a real finite-dimensional vector-valued curve with continuous derivative. Each coordinate of $g'$ is continuous and therefore Riemann integrable on every nondegenerate closed subinterval by [F7]. If $t=0$, then $g(t)=g(0)$ and the oriented integral is zero. If $t>0$, [F3] on $[0,t]$ gives $g(t)=g(0)+\int_0^t e^{-sA}r(s)\,ds$. If $t<0$, [F3] on $[t,0]$ gives $g(0)-g(t)=\int_t^0 e^{-sA}r(s)\,ds$, which is the same oriented identity after reversing the bounds. [step 2.1, F2, F3, F4, F7]

4.1 Multiply this equality by $e^{tA}$. Matrix multiplication is a fixed finite-dimensional linear map and therefore commutes with the componentwise integral; [F1] gives $e^{tA}g(t)=x(t)$, $e^{tA}g(0)=e^{tA}(v-u(0))$, and $e^{tA}e^{-sA}=e^{(t-s)A}$. Substitution yields the stated identity. [step 3.1, F1, F2, algebra] ∎
