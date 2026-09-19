---
id: ex-legendre-polynomials-from-gram-schmidt
kind: example
title: Legendre polynomials from Gram–Schmidt
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-separable-hilbert-space-has-a-countable-orthonormal-basis, cor-weierstrass-approximation-on-a-closed-interval, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-countable-choice, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-ftc-second-part, lem-derivative-of-a-power, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, def-real-and-complex-inner-product-space, lem-finite-bessel-inequality]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.50, example after Theorem 2.3"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Exercise 2.63, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). On the real
Hilbert space $L^2([-1,1])$ with the integral pairing
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]) apply Gram–Schmidt
elimination to the sequence of monomial classes $1,x,x^2,\dots$
([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]). The result
is a complete orthonormal family — an orthonormal basis of $L^2([-1,1])$ — whose
first three members are

$$e_0=\frac{1}{\sqrt 2},\qquad e_1=\sqrt{\frac32}\,x,\qquad e_2=\sqrt{\frac58}\,(3x^2-1).$$

The corresponding unnormalised polynomials with value $1$ at $x=1$ are
$P_0=1$, $P_1=x$, and $P_2=(3x^2-1)/2$, the first three classical Legendre
polynomials. No general formula for $P_n$ or its norm is asserted here.

## Facts & Assumptions

[A1] Gram–Schmidt elimination applied to a sequence with dense range in a Hilbert space yields an orthonormal family whose closed linear span is the closed linear span of the sequence; explicitly $e_0=x_0/\|x_0\|$ when $x_0\ne0$, and each further nonzero residual $v_n=x_n-\sum_{m}\langle x_n,e_m\rangle e_m$ is normalised ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[lem-finite-bessel-inequality]]).

[A2] The polynomials are uniformly dense in $C([-1,1],\mathbb R)$, and continuous functions are dense in $L^2$ of a bounded interval, so the $L^2$-closure of the polynomials is all of $L^2([-1,1])$ ([[cor-weierstrass-approximation-on-a-closed-interval]], [[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

[A3] The pairing on real $L^2$ is $\langle f,g\rangle=\int fg$; for continuous real functions on $[-1,1]$ the $L^2$ integral is the Riemann integral over $[-1,1]$, and the Riemann integral is computed by the second fundamental theorem with the power rule ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-ftc-second-part]], [[lem-derivative-of-a-power]]).

[A4] A complete orthonormal family, equivalently an orthonormal family with closed linear span the whole space, is an orthonormal basis ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

## Verification

**Proof technique:** direct.

**Given:** The sequence of monomial classes $1,x,x^2,\dots$ in $L^2([-1,1],\mathbb R)$.

1.1 Gram–Schmidt applies to the monomials and produces an orthonormal family $(e_n)$ with the same closed linear span as the monomials; that closed span is all of $L^2([-1,1])$, because the polynomials are uniformly dense in $C([-1,1])$ and the continuous functions are dense in $L^2$. Hence $(e_n)$ is a complete orthonormal family, that is, an orthonormal basis of $L^2([-1,1])$. [A1, A2, A4]

1.2 First element: $x_0=1$ has $\|1\|_2^2=\int_{-1}^11\,dx=2$, so $e_0=1/\sqrt2$. [A1, A3]

2.1 Second element: $v_1=x-\langle x,e_0\rangle e_0$ with $\langle x,e_0\rangle=\frac{1}{\sqrt2}\int_{-1}^1x\,dx=0$, so $v_1=x$ and $\|x\|_2^2=\int_{-1}^1x^2\,dx=\bigl[x^3/3\bigr]_{-1}^1=\frac23$, giving $e_1=\sqrt{3/2}\,x$. [step 1.2, A1, A3]

3.1 Third element: $v_2=x^2-\langle x^2,e_0\rangle e_0-\langle x^2,e_1\rangle e_1$ with $\langle x^2,e_1\rangle=\sqrt{\frac32}\int_{-1}^1x^3\,dx=0$ and $\langle x^2,e_0\rangle=\frac{1}{\sqrt2}\int_{-1}^1x^2\,dx=\frac{1}{\sqrt2}\cdot\frac23$, so $v_2=x^2-\frac13$; its squared norm is $\int_{-1}^1(x^2-\frac13)^2dx=\bigl[x^5/5-\frac29x^3+\frac19x\bigr]_{-1}^1=\frac25-\frac49+\frac29=\frac{8}{45}$, giving $e_2=\sqrt{45/8}\,(x^2-\frac13)=\sqrt{5/8}\,(3x^2-1)$. [step 1.2, step 2.1, A1, A3, algebra]

4.1 Therefore the Gram–Schmidt family of the monomials is a complete orthonormal family of $L^2([-1,1])$ beginning with $1/\sqrt2$, $\sqrt{3/2}\,x$ and $\sqrt{5/8}\,(3x^2-1)$. Rescaling these three displayed unit vectors to have value $1$ at $x=1$ gives $P_0=1$, $P_1=x$, and $P_2=(3x^2-1)/2$. [step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎
