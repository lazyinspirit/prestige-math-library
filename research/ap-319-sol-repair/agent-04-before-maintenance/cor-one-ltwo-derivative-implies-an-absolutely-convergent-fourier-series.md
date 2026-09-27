---
id: cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series
kind: corollary
title: "One ell-2 weak derivative implies an absolutely convergent Fourier series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz, lem-fourier-coefficients-of-a-periodic-weak-derivative]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, Exercise 3.3.5"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

If $f\in L^2(\mathbb T)$ has periodic weak derivative $g\in L^2(\mathbb T)$, then $(\widehat f(k))\in\ell^1(\mathbb Z)$.

## Facts & Assumptions

**Given:** $f,g\in L^2(\mathbb T)$ with $g=f'$ periodically.

[L1] $\widehat g(k)=2\pi ik\widehat f(k)$ ([[lem-fourier-coefficients-of-a-periodic-weak-derivative]]).

[L2] A finite weighted $\ell^2$ sum at exponent $1$ implies $\ell^1$ ([[lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz]]).

## Proof

**Proof technique:** direct.

1.1 For a finite $E\subset\mathbb Z$, orthogonality of the characters gives $\sum_{k\in E}|\widehat g(k)|^2\le\|g\|_2^2$. [given, algebra]

2.1 By [L1], $$\sum_{k\in E}(1+|k|)^2|\widehat f(k)|^2\le |\widehat f(0)|^2+\left(1+\frac1{2\pi}\right)^2\|g\|_2^2.$$ Taking increasing finite $E$ gives the weighted $\ell^2$ hypothesis. [L1, step 1.1, algebra]

3.1 Apply [L2] with $s=1$. [L2, step 2.1] ∎
