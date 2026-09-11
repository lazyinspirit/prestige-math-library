---
id: thm-riemann-lebesgue
kind: theorem
title: Riemann–Lebesgue lemma
deps: ["thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "def-countable-choice", "thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity", "def-c-zero-on-rn", "lem-complex-translation-and-approximate-identity-interfaces"]
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
      locator: Corollary 14.5, p.381; proof reordered via MT15 translation continuity
---

## Statement

Assume countable choice. For $f\in L^1(\mathbb R^n;\mathbb C)$, $n\ge1$, $\widehat f\in C_0(\mathbb R^n;\mathbb C)$: it is continuous and tends to zero as $|\xi|\to\infty$. The notation extends [[def-c-zero-on-rn]] componentwise.

## Facts & Assumptions

**Given:** $f\in L^1$ and [[def-countable-choice]].

[F1] The transform is linear, uniformly continuous and bounded by the input $L^1$ norm ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F2] Translation multiplies the transform by $e^{-2\pi ih\cdot\xi}$ ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F3] Complex $L^1$ translations are norm-continuous under countable choice ([[lem-complex-translation-and-approximate-identity-interfaces]]).

## Proof

1.1 For $\xi\ne0$ set $h=\xi/(2|\xi|^2)$. Then $h\cdot\xi=1/2$, so $\widehat{\tau_hf-f}(\xi)=-2\widehat f(\xi)$ by F2 and linearity. The bound in F1 gives $2|\widehat f(\xi)|\le\|\tau_hf-f\|_1$. [F1, F2, given]

2.1 Given $\epsilon>0$, F3 supplies $\delta>0$ with $\|\tau_hf-f\|_1<2\epsilon$ for $|h|<\delta$. If $|\xi|>1/(2\delta)$, the explicit $h$ from step 1.1 satisfies that condition, hence $|\widehat f(\xi)|<\epsilon$. Continuity is already F1. This is the asserted $C_0$ property. Countable choice is inherited from F2 and F3, not from the explicit selection of $h$. [F1, F2, F3, step 1.1] ∎
