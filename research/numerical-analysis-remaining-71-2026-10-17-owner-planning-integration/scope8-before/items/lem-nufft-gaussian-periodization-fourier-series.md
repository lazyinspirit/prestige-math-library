---
id: lem-nufft-gaussian-periodization-fourier-series
kind: lemma
title: Fourier series of the periodized Gaussian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 2
proof_strategy: direct
deps:
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-gaussian-periodization-converges
  - def-real-elementary-functions-and-domains
  - thm-poisson-summation-for-schwartz-functions
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - thm-derivative-of-exponential
  - lem-derivative-algebra-and-chain-rules
  - thm-exponential-beats-every-polynomial
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is used only through the Schwartz Poisson-summation theorem and the Gaussian Fourier-transform supplier; the derivative, decay, and kernel-convergence arguments use no choice principle.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and its Applications, Part I, slides 31–34"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "One-dimensional and d-dimensional periodisation Fourier coefficients by Poisson summation"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§2, printed pp. 445–446, periodized heat kernel and Gaussian Fourier multiplier"
---
## Statement
Assume Countable Choice. For $\tau>0$, the Fourier coefficient of $\phi_\tau$ at each integer $r$ is $\widehat\phi_\tau(r)=\sqrt{\tau}\exp(-\pi\tau r^2)$, and
$$\phi_\tau(x)=\sum_{r\in\mathbb Z}\sqrt{\tau}\exp(-\pi\tau r^2)e^{2\pi i r x}.$$
The periodized series on the left converges locally uniformly, and the Fourier series on the right converges absolutely and uniformly.

## Facts & Assumptions
**Given:** Countable Choice and a real parameter $\tau>0$.

[A1] [[def-countable-choice]]: Countable Choice, as required by the Schwartz Poisson-summation and Euclidean Gaussian-transform suppliers.

[F1] [[thm-poisson-summation-for-schwartz-functions]]: for a Schwartz function $h$ on $\mathbb R$, $\sum_{n\in\mathbb Z}h(x+n)=\sum_{r\in\mathbb Z}\widehat h(r)e^{2\pi i r x}$, with the left side locally uniform and the right side absolutely uniformly convergent.

[F2] [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]: under Countable Choice, $\widehat{(\exp(-\pi t u^2))}(r)=t^{-1/2}\exp(-\pi r^2/t)$ for $t>0$ and $r\in\mathbb R$.

[F3] [[def-schwartz-space-and-its-seminorms]]: $h\in\mathcal S(\mathbb R)$ when it is smooth and every seminorm $\sup_u|u^m h^{(q)}(u)|$ is finite.

[F4] [[thm-derivative-of-exponential]] and [[lem-derivative-algebra-and-chain-rules]]: $\exp'=\exp$, and derivatives of products and compositions obey the product and chain rules.

[F5] [[thm-exponential-beats-every-polynomial]]: for every fixed nonnegative integer $m$ and $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$.

[F6] [[lem-nufft-gaussian-periodization-converges]]: the defining kernel series is locally uniformly convergent and equals $\phi_\tau$.

[F7] [[def-real-elementary-functions-and-domains]]: $\arctan(1)=\int_0^1(1+t^2)^{-1}\,dt\ge1/2$, so $\pi=4\arctan(1)\ge2>0$; the real exponential is defined on all of $\mathbb R$.

## Proof

1.1 Let $h_\tau(u)=\exp(-\pi u^2/\tau)$. By [F4], induction on derivative order gives $h_\tau^{(q)}(u)=P_q(u)\exp(-\pi u^2/\tau)$ for a polynomial $P_q$. For every $m,q$, the quantity $|u|^m|P_q(u)|\exp(-\pi u^2/\tau)$ tends to zero as $|u|\to\infty$: bound the polynomial by a finite sum of powers, set $z=u^2$, and apply [F5] with $a=\pi/\tau>0$ by [F7]. On a compact interval it is bounded by continuity. Thus every seminorm in [F3] is finite and $h_\tau\in\mathcal S(\mathbb R)$. [A1, F3, F4, F5, F7, given, induction]

2.1 Apply [F1] to $h_\tau$ from step 1.1. By [F2] with $t=1/\tau$, its Fourier transform at integer $r$ is $\sqrt{\tau}\exp(-\pi\tau r^2)$. The left periodization is $\phi_\tau$ by [F6], so [F1] gives the displayed Fourier series, its coefficient formula, and both convergence assertions. [A1, F1, F2, F6, step 1.1] ∎