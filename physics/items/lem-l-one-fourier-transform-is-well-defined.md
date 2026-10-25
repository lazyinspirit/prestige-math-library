---
id: lem-l-one-fourier-transform-is-well-defined
kind: lemma
title: The integral transform is representative independent
deps: ["def-fourier-transform-on-l-one-of-rn", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-the-lebesgue-integral-respects-almost-everywhere-equality", "thm-integral-triangle-inequality"]
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
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Definition 11.1 and (11.2)
---

## Statement

For every $f\in L^1(\mathbb R^n;\mathbb C)$, $n\ge1$, the integral defining $\widehat f(\xi)$ is absolutely convergent for every $\xi$ and unchanged by null-set modifications. Moreover $|\widehat f(\xi)|\le\|f\|_1$.

## Facts & Assumptions

**Given:** An integrable complex representative $f$ and $\xi\in\mathbb R^n$, with the formula of [[def-fourier-transform-on-l-one-of-rn]].

[F1] The exponential satisfies $|\exp(x+iy)|=e^x$ for real $x,y$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] Integrable functions equal almost everywhere have equal integrals on every measurable set ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F3] The modulus of an integral is at most the integral of the modulus ([[thm-integral-triangle-inequality]]).

## Proof

1.1 The exponential factor is continuous, hence measurable, and has modulus one. Thus the product is measurable and $\int|f(x)e^{-2\pi ix\cdot\xi}|\,dx=\int|f|<\infty$. Its componentwise integral exists, and $|\widehat f(\xi)|\le\|f\|_1$. [F1, F3, given]

2.1 If $g=f$ outside a measurable null set $N$, the same modulus equality proves the product with $g$ integrable, and the two products agree outside $N$. Applying integral invariance on $\mathbb R^n$ gives identical values at this $\xi$. Since $\xi$ was arbitrary, this holds at every frequency; no union of frequency-dependent exceptional sets is taken. In particular a zero class has identically zero transform. [F1, F2, step 1.1] ∎
