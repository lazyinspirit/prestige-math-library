---
id: ex-poisson-summation-for-the-gaussian-and-theta-functional-equation
kind: example
title: Gaussian Poisson summation and theta inversion
deps: ["thm-poisson-summation-for-schwartz-functions", "lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "def-countable-choice", "ex-gaussians-and-polynomials-times-gaussians-are-schwartz"]
status: draft
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
    - title: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices
      url: https://people.math.harvard.edu/~elkies/aws09.pdf
      locator: Equations (17)–(18), and proof following Theorem 2, p.11
---

## Statement

Assume countable choice. For real $t>0$, define $\theta(t)=\sum_{k\in\mathbb Z}e^{-\pi tk^2}$. Then
$$\theta(t)=t^{-1/2}\theta(1/t).$$

## Facts & Assumptions

**Given:** [[def-countable-choice]] and $t>0$.

[F1] Polynomial Gaussians with positive parameter are Schwartz ([[ex-gaussians-and-polynomials-times-gaussians-are-schwartz]]).

[F2] The normalized Gaussian transform is $\mathcal F(e^{-\pi t x^2})(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] Poisson summation applies to Schwartz functions, with both lattice sums absolutely convergent ([[thm-poisson-summation-for-schwartz-functions]]).

## Verification

1.1 The series defining $\theta(t)$ converges: for $k\ge1$, $e^{-\pi tk^2}\le e^{-\pi tk}$ and $0<e^{-\pi t}<1$, so its positive and negative tails are bounded by geometric series; the zero term is one. The same proof applies to $1/t>0$. By [F1], $g_t(x)=e^{-\pi tx^2}$ is Schwartz, and [F2] gives its transform with factor $t^{-1/2}$. [F1, F2, given, algebra]

2.1 Apply [F3] at $x=0$ to $g_t$: $\sum_kg_t(k)=\sum_k\widehat g_t(k)=t^{-1/2}\sum_ke^{-\pi k^2/t}$. By step 1.1 these are the two absolutely convergent theta series, proving the identity. At $t=1$ both sides agree termwise. The parameter is only real and positive; this example makes no complex modular-form assertion. [step 1.1, F3] ∎
