---
id: lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions
kind: lemma
title: "A dyadic Fourier-coefficient square-sum bound for Hölder functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, proof of Theorem 3.3.16"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $0<\alpha\le1$ and let $f\in C^\alpha(\mathbb T)$: $|f(x)-f(y)|\le C d_{\mathbb T}(x,y)^\alpha$. Then there is $C_\alpha$ such that, for every integer $N\ge1$,
$$\sum_{N\le |k|<2N}|\widehat f(k)|^2\le C_\alpha C^2N^{-2\alpha}.$$

## Facts & Assumptions

**Given:** $f,C,\alpha,N$ as in the statement and the Fourier convention of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

## Proof

**Proof technique:** direct.

1.1 Put $h=(4N)^{-1}$. For $N\le|k|<2N$, $|e^{-2\pi ikh}-1|\ge\sqrt2$, since $2\pi|k|h\in[\pi/2,\pi)$. [given, algebra]

1.2 For $u_h(x)=f(x-h)-f(x)$, translation in the coefficient integral gives $\widehat u_h(k)=(e^{-2\pi ikh}-1)\widehat f(k)$. [given, algebra]

2.1 Finite character orthogonality applied to the block and steps 1.1--1.2 gives $$2\sum_{N\le|k|<2N}|\widehat f(k)|^2\le\int_0^1|u_h(x)|^2dx.$$ [step 1.1, step 1.2, algebra]

3.1 The Hölder bound gives $|u_h(x)|\le C(4N)^{-\alpha}$, so step 2.1 proves the assertion. [step 2.1, given, algebra] ∎
