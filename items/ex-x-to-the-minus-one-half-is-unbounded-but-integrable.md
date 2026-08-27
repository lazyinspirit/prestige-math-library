---
id: ex-x-to-the-minus-one-half-is-unbounded-but-integrable
kind: example
title: "The function $x^{-1/2}$ on $(0,1]$ is unbounded and integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-geometric-series, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Example

The function $f(x)=x^{-1/2}$ on $(0,1]$ is unbounded near $0$ but belongs to
$L^1((0,1],\lambda)$.

## Facts & Assumptions

**Given:** The function $f(x)=x^{-1/2}$ on $(0,1]$.

[L1] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L2] Intervals have the expected Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L3] The geometric series with ratio $2^{-1/2}$ converges ([[thm-geometric-series]]).

[L4] The nonnegative integral is additive on measurable sets ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Verification

**Proof technique:** direct.

1.1 On the dyadic interval $I_k:=(2^{-k-1},2^{-k}]$, one has $f(x)\le2^{(k+1)/2}$ and $\lambda(I_k)=2^{-k-1}$. [L2, construct, algebra]

Hence

$$\int_{I_k}f\,d\lambda\le2^{(k+1)/2}2^{-k-1}=2^{-(k+1)/2}.$$


2.1 The partial sums of the integrals over $\bigcup_{k<n}I_k=(2^{-n},1]$ are bounded by $\sum_{k<n}2^{-(k+1)/2}$. [step 1.1, L1, L3, L4]

That series converges by [L3]. Since $f\chi_{(2^{-n},1]}\uparrow f$, [L1] and [L4] give $\int_0^1x^{-1/2}\,d\lambda<+\infty$. The pointwise values $f(2^{-m})=2^{m/2}$ show that $f$ is unbounded. [step 1.1, L1, L3, L4] ∎
