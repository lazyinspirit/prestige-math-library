---
id: ex-plancherel-for-an-interval-indicator
kind: example
title: Sinc-square integral from Plancherel
deps: ["def-fourier-transform-on-l-one-of-rn", "thm-l-one-l-two-agreement-of-fourier-transform", "thm-plancherel", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-countable-choice"]
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
      locator: §14.1
---

## Statement

Assume countable choice. With the quotient at zero defined as one,
$$\int_{\mathbb R}\left(\frac{\sin(\pi\xi)}{\pi\xi}\right)^2\,d\xi=1.$$

## Facts & Assumptions

**Given:** [[def-countable-choice]] and the integral transform [[def-fourier-transform-on-l-one-of-rn]]. The sine/cosine derivative and Euler formulas give the complex exponential antiderivative ([[thm-sine-and-cosine-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F1] The complex interval FTC integrates derivatives to endpoint differences ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F2] The integral transform represents the norm transform on $L^1\cap L^2$ ([[thm-l-one-l-two-agreement-of-fourier-transform]]).

[F3] Plancherel preserves the square norm ([[thm-plancherel]]).

## Verification

1.1 Set $f=\mathbf1_{[-1/2,1/2]}$. Then $\|f\|_1=\|f\|_2^2=1$, so $f\in L^1\cap L^2$. For $\xi\ne0$, [F1] gives $\widehat f(\xi)=[e^{-2\pi ix\xi}/(-2\pi i\xi)]_{-1/2}^{1/2}=(e^{-\pi i\xi}-e^{\pi i\xi})/(-2\pi i\xi)=\sin(\pi\xi)/(\pi\xi)$. For $\xi=0$ the defining integral is the interval length, one. [F1, given, algebra]

2.1 By [F2] and [F3], the square modulus of this explicitly computed transform has integral $\|\mathcal F_2f\|_2^2=\|f\|_2^2=1$. The sinc quotient is real, so its squared modulus is its square, yielding the statement. This supplies integrability of the square as well as its value. [step 1.1, F2, F3] ∎
