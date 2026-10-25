---
id: def-nufft-periodized-gaussian-gridding-kernel
kind: definition
title: Periodized Gaussian gridding kernel
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 0
deps:
  - def-real-elementary-functions-and-domains
  - cor-exponential-reciprocal-and-positivity
justified_by:
  - lem-nufft-gaussian-periodization-converges
  - lem-nufft-gaussian-periodization-fourier-series
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The definition itself uses no choice principle; the separate local uniform convergence proof is choice-free.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and its Applications, Part I, slides 44–50 and 65–67"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Periodic Gaussian window, Fourier multiplier, gridding, deconvolution, and Gaussian error estimate"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§2, printed pp. 445–446, equations (7)–(15)"
---

## Definition

For a real parameter $\tau>0$, define the period-one Gaussian gridding kernel by the series

$$\phi_\tau(x)=\sum_{n\in\mathbb Z}\exp\!\left(-\frac{\pi(x+n)^2}{\tau}\right),\qquad x\in\mathbb R.$$

The series is the formal periodization; [[lem-nufft-gaussian-periodization-converges]] proves that it converges absolutely and locally uniformly, so its value is a continuous one-periodic real function. Its Fourier coefficient at $r\in\mathbb Z$ is denoted $\widehat\phi_\tau(r)=\int_0^1\phi_\tau(x)e^{-2\pi i r x}\,dx$ when this integral is used; [[lem-nufft-gaussian-periodization-fourier-series]] computes it exactly. The kernel is nonnegative and satisfies $\phi_\tau(x+1)=\phi_\tau(x)$.

