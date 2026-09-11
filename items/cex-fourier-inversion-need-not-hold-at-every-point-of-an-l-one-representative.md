---
id: cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative
kind: counterexample
title: Null-set modifications defeat everywhere representative recovery
deps: ["lem-l-one-fourier-transform-is-well-defined", "thm-l-one-fourier-inversion", "cor-integral-over-a-null-set-vanishes", "thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null", "def-countable-choice"]
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

## Statement refuted

Whenever $f,\widehat f\in L^1$, the inverse Fourier integral equals the chosen representative f at every point.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and $f=\mathbf1_{\{0\}}$ on $\mathbb R$.

[F1] A singleton on the line is Lebesgue null ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]).

[F2] The integral of a nonnegative function over a null set vanishes ([[cor-integral-over-a-null-set-vanishes]]).

[F3] Null modifications do not change any transform value ([[lem-l-one-fourier-transform-is-well-defined]]).

## Counterexample

1.1 F1 and F2 give $\int|f|=0$, so f represents the zero integrable class. F3 gives $\widehat f(\xi)=0$ for every frequency, and hence the transform is integrable too. [F1, F2, F3, given]

2.1 The inverse integral at zero is $\int\widehat f(\xi)\,d\xi=0$, whereas $f(0)=1$. Thus the claimed every-point assertion fails. In fact the mean oscillation about the chosen value f(0) equals one on every centered interval, so zero is not a Lebesgue point with that value. This respects the actual almost-everywhere inversion theorem. Countable choice is inherited from F1. [F1, F2, step 1.1] ∎
