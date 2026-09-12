---
id: cex-riemann-lebesgue-has-no-universal-rate
kind: counterexample
title: There is no universal Riemann–Lebesgue decay rate
deps: ["lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-dominated-convergence", "def-countable-choice"]
generation:
  role: counterexample
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
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
      locator: §14.1 Gaussian and modulation formulas support the constituents; the no-rate construction is local, not attributed to this text.
---

## Statement refuted

There is a positive rate function $r:[0,\infty)\to(0,\infty)$ tending to zero such that every $f\in L^1(\mathbb R)$ satisfies $|\widehat f(\xi)|=O(r(|\xi|))$ as $|\xi|\to\infty$.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and any positive r tending to zero.

[F1] $g(x)=e^{-\pi x^2}$ has mass one and transform $e^{-\pi\xi^2}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F2] Modulation by $e^{2\pi ibx}$ translates the transform by b ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F3] Dominated convergence applies under one integrable majorant ([[thm-dominated-convergence]]).

## Counterexample

1.1 Set $\xi_0=0$. For $k\ge1$ let $\xi_k$ be the least positive integer greater than $\xi_{k-1}+k$ for which $r(\xi_k)<2^{-2k}$. Such integers exist by the assumed limit. This recursion is explicit and uses no choice selection. The series $f(x)=\sum_{k\ge1}2^{-k}e^{2\pi i\xi_kx}g(x)$ converges absolutely at each x with modulus at most g(x); its measurable limit belongs to $L^1$ by F1. [F1, given]

2.1 At each frequency, F3 applied to the partial sums times the unit-modulus Fourier factor, dominated by g, gives $\widehat f(\xi)=\sum_{k\ge1}2^{-k}e^{-\pi(\xi-\xi_k)^2}$ by F1 and F2. All summands are nonnegative. Thus $|\widehat f(\xi_k)|\ge2^{-k}$ and $|\widehat f(\xi_k)|/r(\xi_k)>2^k\to\infty$, while $\xi_k\to\infty$. This refutes every proposed rate, even allowing an f-dependent big-O constant. Countable choice is inherited only from the Gaussian and modulation suppliers. This explicit construction is local and is not attributed to a source theorem. [F1, F2, F3, step 1.1] ∎
