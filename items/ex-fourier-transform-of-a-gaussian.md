---
id: ex-fourier-transform-of-a-gaussian
kind: example
title: Scaled and tensor Gaussian examples
deps: ["lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "def-countable-choice"]
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
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
---

## Example

Assume countable choice. For $t>0$, $g_t(x)=e^{-\pi t|x|^2}$ has transform $t^{-n/2}e^{-\pi|\xi|^2/t}$ on $\mathbb R^n$. The normalized density $t^{n/2}g_t$ has mass one and transform $e^{-\pi|\xi|^2/t}$.

## Facts & Assumptions

**Given:** $n\ge1$, $t>0$ and [[def-countable-choice]].

[F1] The normalized Gaussian transform formula holds in every positive dimension ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F2] Linear scaling uses the absolute determinant ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

## Verification

1.1 Write $g_t=g_1\circ(\sqrt t I)$. F2 and F1 give $\widehat g_t(\xi)=t^{-n/2}\widehat g_1(\xi/\sqrt t)=t^{-n/2}e^{-\pi|\xi|^2/t}$. Thus the spatial scale is $t^{-1/2}$, while the frequency scale is $t^{1/2}$. [F1, F2, given]

2.1 At zero frequency the formula gives $\int g_t=t^{-n/2}$. Multiplying both sides by $t^{n/2}$ gives the mass-one formula. For t=1 the Gaussian is unchanged by Fourier transform; in n coordinates the product of n one-dimensional values gives the factor $t^{-n/2}$. Countable choice is inherited from F1 and F2. [F1, F2, step 1.1] ∎
