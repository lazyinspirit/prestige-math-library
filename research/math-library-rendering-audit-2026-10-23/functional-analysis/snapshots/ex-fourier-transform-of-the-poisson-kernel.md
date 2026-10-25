---
id: ex-fourier-transform-of-the-poisson-kernel
kind: example
title: Poisson kernel transform and Abel summability on the line
deps: ["def-fourier-transform-on-l-one-of-rn", "thm-l-one-fourier-inversion", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "lem-radial-majorized-kernels-recover-lebesgue-point-values", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "thm-sine-and-cosine-derivatives", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 14.4(ii), real positive parameter
---

## Example

Assume countable choice. For $a>0$, $P_a(x)=a/(\pi(a^2+x^2))$ satisfies $\widehat P_a(\xi)=e^{-2\pi a|\xi|}$. For $f\in L^1(\mathbb R)$ its Abel mean $\int\widehat f(\xi)e^{-2\pi a|\xi|}e^{2\pi ix\xi}\,d\xi$ equals $(f*P_a)(x)$ and tends to the Lebesgue value at every Lebesgue point as $a\downarrow0$.

## Facts & Assumptions

**Given:** $a>0$ and [[def-countable-choice]], with [[def-fourier-transform-on-l-one-of-rn]].

[F1] Complex FTC and the trigonometric exponential derivative evaluate finite-interval exponential integrals ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[thm-sine-and-cosine-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] Positive improper integrals agree with Lebesgue integrals ([[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]).

[F3] Inversion applies when the function and transform are integrable ([[thm-l-one-fourier-inversion]]).

[F4] Absolute product integrability permits Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Bounded integrable radial majorants give recovery of Lebesgue values ([[lem-radial-majorized-kernels-recover-lebesgue-point-values]]).

## Verification

1.1 Put $q_a(x)=e^{-2\pi a|x|}$. It is integrable with integral $1/(\pi a)$, by F1 on finite half-intervals and F2 for the positive exponential tails. Integration on $[0,R]$ gives $[1-e^{-2\pi(a+i\xi)R}]/[2\pi(a+i\xi)]$. The omitted absolute tail is $e^{-2\pi aR}/(2\pi a)$, so the half-line transform is $1/[2\pi(a+i\xi)]$. Reflecting the negative half gives $1/[2\pi(a-i\xi)]$. Their sum is $a/[\pi(a^2+\xi^2)]=P_a(\xi)$. [F1, F2, given]

2.1 The rational P_a is bounded on a compact core and bounded by $a/(\pi x^2)$ for $|x|\ge1$, hence integrable by the elementary convergent inverse-square improper tail and F2. F3 applied to q_a gives $\widehat P_a(-x)=q_a(x)$ almost everywhere. Both sides are continuous, so equality holds everywhere (a nonzero continuous difference cannot vanish a.e. on an interval). Evenness then gives the stated transform and, at zero, $\int P_a=1$. [F2, F3, step 1.1]

3.1 In the Abel integral, inserting $\widehat f$ gives a double absolute bound $\|f\|_1\|q_a\|_1<\infty$. F4 exchanges the integrals and step 1.1 identifies the inner inverse integral with $P_a(x-y)$, since P_a is even. Thus the mean is $f*P_a$, absolutely at every x since P_a is bounded. Finally $P_a(y)=a^{-1}P_1(y/a)$ and $\Phi(r)=1/[\pi(1+r^2)]$ is bounded, decreasing and integrable with radial mass one. F5 gives the asserted Lebesgue-point limit. All integral and pointwise suppliers carry the stated countable choice. [F4, F5, step 1.1, step 2.1] ∎
