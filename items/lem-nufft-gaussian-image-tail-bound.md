---
id: lem-nufft-gaussian-image-tail-bound
kind: lemma
title: Explicit tail for the periodized Gaussian image sum
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
  - thm-geometric-series
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used; the bound is a pair of explicit
  geometric comparisons.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and
        its Applications, Part I, slides 44–50"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Periodized Gaussian window and finite Gaussian gridding support"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast
        Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§3, printed pp. 447–448, periodic image terms and local spreading"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement
For $\tau>0$, integer $L\ge1$, and $x\in[0,1]$, put
$$\phi_{\tau,L}(x)=\sum_{n=-L}^{L}\exp\!\left(-\frac{\pi(x+n)^2}{\tau}\right),\qquad R_{\tau,L}=\frac{2\exp(-\pi L^2/\tau)}{1-\exp(-\pi L/\tau)}.$$
Then $0\le\phi_\tau(x)-\phi_{\tau,L}(x)\le R_{\tau,L}$, and the denominator defining $R_{\tau,L}$ is positive.

## Facts & Assumptions
**Given:** $\tau>0$, $L\ge1$, and $x\in[0,1]$.

[F1] [[def-nufft-periodized-gaussian-gridding-kernel]] and [[lem-nufft-gaussian-periodization-converges]]: $\phi_\tau(x)$ is the convergent sum over all integer images.

[F2] [[def-real-elementary-functions-and-domains]]: $\pi=4\arctan(1)\ge2>0$, because $(1+t^2)^{-1}\ge1/2$ on $[0,1]$; the exponential power series gives $\exp(0)=1$.

[F3] [[thm-exponential-is-strictly-increasing]] and [[cor-exponential-reciprocal-and-positivity]]: $0<\exp(-\pi L/\tau)<1$.

[F4] [[thm-geometric-series]]: for $0<q<1$, $\sum_{h\ge0}q^h=1/(1-q)$ and $\sum_{h\ge1}q^h=q/(1-q)$.

## Proof

1.1 Let $q=\exp(-\pi L/\tau)\in(0,1)$ by [F2]–[F3]. For positive omitted indices write $n=L+h$ with $h\ge1$. Since $0\le x\le1$, $(x+n)^2\ge n^2=(L+h)^2\ge L^2+Lh$, so their sum is at most $\exp(-\pi L^2/\tau)\sum_{h\ge1}q^h$. By [F4] this is at most $\exp(-\pi L^2/\tau)/(1-q)$. [given, F1, F2, F3, F4, algebra]

1.2 For negative omitted indices write $n=-(L+1+h)$ with $h\ge0$. Then $|x+n|=L+1+h-x\ge L+h$, and $(L+h)^2\ge L^2+Lh$. Their sum is at most $\exp(-\pi L^2/\tau)\sum_{h\ge0}q^h=\exp(-\pi L^2/\tau)/(1-q)$ by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 The two omitted tails are nonnegative and exhaust the indices outside $[-L,L]$. Adding steps 1.1 and 1.2 gives the claimed remainder $R_{\tau,L}$; [F3] also proves its denominator is positive. [step 1.1, step 1.2, F1, F3, algebra] ∎
