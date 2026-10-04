---
id: cor-integrality-of-the-j-invariant-fourier-coefficients
kind: corollary
title: "Integrality of the Fourier coefficients of the j-invariant"
status: published
origin: pipeline
deps:
  - lem-jacobi-product-formula-for-the-discriminant
  - def-modular-discriminant-and-j-invariant
  - thm-eisenstein-series-are-modular-forms
  - def-divisor-power-sums-sigma-k
  - thm-taylor-expansion-holomorphic-function
  - thm-weierstrass-convergence-holomorphic-functions
  - lem-cauchy-product-of-absolutely-convergent-complex-series
  - lem-binomial-theorem-over-complex-numbers
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 4.22 and the integrality statement, printed pp. 57-58."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "The j Fourier expansion with integral coefficients, printed p. 104 (following Theorem 5.42)."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Equation (24) and the integrality of the tau-function, printed p. 22."
---

## Statement

With $q=e^{2\pi i\tau}$, the $j$-invariant has a Laurent expansion convergent for $0<|q|<1$,
$$j(\tau)=q^{-1}+744+196884q+21493760q^2+\sum_{n\ge3}c(n)q^n,\qquad c(n)\in\mathbb Z.$$
Equivalently $qj$ is holomorphic in the unit disc with integer Taylor coefficients and constant term $1$.

## Facts & Assumptions

**Given:** $\Delta=qP(q)$ with $P$ holomorphic and zero-free on $|q|<1$ and $P(q)=\prod_{n\ge1}(1-q^n)^{24}$ ([[lem-jacobi-product-formula-for-the-discriminant]]), and $j=E_4^3/\Delta$ ([[def-modular-discriminant-and-j-invariant]]).

[F1] $P$ has integer Taylor coefficients and $P(0)=1$ ([[lem-jacobi-product-formula-for-the-discriminant]], [[lem-binomial-theorem-over-complex-numbers]]).

[F2] $E_4=1+240\sum_{n\ge1}\sigma_3(n)q^n$, with $\sigma_3(n)\in\mathbb Z$ and $\sigma_3(1)=1$, $\sigma_3(2)=9$, $\sigma_3(3)=28$ ([[thm-eisenstein-series-are-modular-forms]], [[def-divisor-power-sums-sigma-k]]).

[F3] A holomorphic function on a disc has a convergent Taylor expansion with the coefficients given by the derivatives at the centre ([[thm-taylor-expansion-holomorphic-function]]); locally uniform convergence passes to all derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]); the coefficient sequence of a product of two absolutely convergent complex series is the Cauchy product, absolutely convergent ([[lem-cauchy-product-of-absolutely-convergent-complex-series]], [[lem-binomial-theorem-over-complex-numbers]]).

## Proof

1.1 Since $P$ is zero-free on the unit disc and $\Delta=qP$, the function $qj=E_4(q)^3/P(q)$ is holomorphic on $|q|<1$. The powers $E_4^3$ have integer Taylor coefficients: by [F2] the expansion of $E_4$ has integer coefficients, and the coefficients of the cube are finite sums of products of integers, which by [F3] are exactly the Cauchy-product coefficients. [F1, F2, F3, given, algebra]

2.1 Write $P(q)=1+\sum_{n\ge1}p_nq^n$ with $p_n\in\mathbb Z$ by [F1], and let $P(q)^{-1}=\sum_{n\ge0}b_nq^n$ be its Taylor expansion at $0$, which exists and converges on $|q|<1$ because $P$ is holomorphic and zero-free there [F3]. Comparing coefficients in $P\cdot P^{-1}=1$ gives $b_0=1$ and $b_n=-\sum_{r=1}^np_rb_{n-r}$ for $n\ge1$; by induction on $n$ every $b_n$ is an integer. Hence $qj=E_4^3\cdot P^{-1}$ has integer Taylor coefficients by the Cauchy product [F3], and its constant term is $1\cdot1=1$. Since $j=q^{-1}(qj)$, the Laurent expansion of $j$ on $0<|q|<1$ has the stated integer coefficients. [F1, F2, F3, step 1.1, given, algebra]

3.1 The displayed coefficients are obtained by computing finitely many terms. From [F2] and $\sigma_3(1)=1$, $\sigma_3(2)=9$, $\sigma_3(3)=28$: $E_4=1+240q+2160q^2+6720q^3+O(q^4)$, so $E_4^3=1+720q+179280q^2+16954560q^3+O(q^4)$; from the product formula $\Delta=q(1-24q+252q^2-1472q^3+O(q^4))$, so $P=1-24q+252q^2-1472q^3+O(q^4)$ and its inverse begins $P^{-1}=1+24q+324q^2+3200q^3+O(q^4)$ (coefficient comparison, as in 2.1). Multiplying, $qj=E_4^3P^{-1}=1+744q+196884q^2+21493760q^3+O(q^4)$, hence $j=q^{-1}+744+196884q+21493760q^2+\sum_{n\ge3}c(n)q^n$ with the stated initial coefficients. [F2, F3, step 2.1, given, algebra] ∎
