---
id: ex-fourier-transform-of-an-interval-indicator
kind: example
title: Transform of an interval indicator
deps: ["def-fourier-transform-on-l-one-of-rn", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-complex-exponential-addition-and-real-extension", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 14.4(i)
---

## Example

Assume countable choice and $a\le b$. For $f=\mathbf1_{[a,b]}$ on $\mathbb R$,
$$\widehat f(\xi)=\frac{e^{-2\pi ia\xi}-e^{-2\pi ib\xi}}{2\pi i\xi}\quad(\xi\ne0),\qquad\widehat f(0)=b-a.$$
In particular for $[a,b]=[-1/2,1/2]$ the transform is $\sin(\pi\xi)/(\pi\xi)$ with value one at zero.

## Facts & Assumptions

**Given:** $a\le b$ and [[def-countable-choice]], with the integral convention of [[def-fourier-transform-on-l-one-of-rn]].

[F1] Complex FTC evaluates continuous derivatives on intervals ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F2] Euler's formula and the real sine/cosine derivatives give the exponential derivative ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]]).

[F3] The transform of an integrable function is continuous ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

## Verification

1.1 The interval indicator is integrable with norm $b-a$. For $a<b$ and $\xi\ne0$, F2 gives the antiderivative $-e^{-2\pi ix\xi}/(2\pi i\xi)$. F1 at a and b gives the displayed quotient. If $a=b$ the indicator is null almost everywhere and both the numerator and transform vanish. [F1, F2, given]

2.1 At zero frequency the integral is the interval length $b-a$; F3 shows this is the continuous extension of the quotient. For the symmetric interval its numerator is $e^{\pi i\xi}-e^{-\pi i\xi}=2i\sin(\pi\xi)$ by F2, giving the sinc formula and value one. Countable choice is inherited from the interval Lebesgue measure and FTC bridge. [F1, F2, F3, step 1.1] ∎
