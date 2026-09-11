---
id: lem-gaussian-fourier-summability-kernel-is-an-approximate-identity
kind: lemma
title: Gaussian summability kernels
deps: ["lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "def-l-one-approximate-identity-on-rn", "thm-dominated-convergence", "def-countable-choice", "cor-c-one-change-of-variables-for-l-one-functions"]
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
      locator: Theorem 14.7 proof, p.382
---

## Statement

Assume countable choice. For $t>0$ put $k_t(x)=t^{-n/2}e^{-\pi|x|^2/t}$ on $\mathbb R^n$, $n\ge1$. Then $k_t\ge0$, $\int k_t=\|k_t\|_1=1$, $\widehat{k_t}(\xi)=e^{-\pi t|\xi|^2}$, and $(k_t)_{t>0}$ is an $L^1$ approximate identity as $t\downarrow0$. Directly,
$$k_t(z)=\int e^{-\pi t|\xi|^2}e^{2\pi iz\cdot\xi}\,d\xi.$$

## Facts & Assumptions

**Given:** $n\ge1$, $t>0$ and [[def-countable-choice]].

[F1] The Gaussian transform is $\mathcal F(e^{-\pi s|x|^2})(\xi)=s^{-n/2}e^{-\pi|\xi|^2/s}$ for $s>0$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F2] The complex Lebesgue substitution formula uses the absolute Jacobian ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F3] Dominated convergence passes integrable tails to zero ([[thm-dominated-convergence]]).

[F4] An approximate identity has unit mass, uniformly bounded $L^1$ norm and vanishing absolute tails outside every fixed radius ([[def-l-one-approximate-identity-on-rn]]).

## Proof

1.1 Apply F1 with $s=1/t$ and multiply by $t^{-n/2}$ to obtain $\widehat{k_t}(\xi)=e^{-\pi t|\xi|^2}$. At $\xi=0$ this gives mass one; positivity gives the same $L^1$ norm. Applying F1 with $s=t$ at frequency $-z$ proves the displayed inverse integral without an inversion theorem. [F1, given]

2.1 Write $y=x/\sqrt t$. F2 gives $\int_{|x|>\delta}k_t(x)\,dx=\int_{|y|>\delta/\sqrt t}e^{-\pi|y|^2}\,dy$. This tends to zero: F3 applied to the explicit integer-radius tails with majorant the integrable Gaussian gives their convergence to zero, and monotonicity bounds every sufficiently small t-tail by any fixed integer tail. All three conditions in F4 now hold with norm bound one. Countable choice is inherited from the Gaussian and substitution results. [F1, F2, F3, F4, step 1.1] ∎
