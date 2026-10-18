---
id: lem-nufft-gaussian-periodization-converges
kind: lemma
title: Local uniform convergence of the periodized Gaussian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 1
proof_strategy: direct
deps:
  - def-nufft-periodized-gaussian-gridding-kernel
  - def-real-elementary-functions-and-domains
  - thm-geometric-series
  - lem-archimedean-property-from-completeness
  - thm-exponential-is-strictly-increasing
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - def-continuity-and-derivative-on-real-interval
  - thm-derivative-of-exponential
  - lem-derivative-algebra-and-chain-rules
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used; the geometric tail is explicit for each compact interval and continuity is proved one point at a time.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and its Applications, Part I, slides 44–46"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Periodized Gaussian window and its Fourier representation"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§2, printed pp. 445–446, periodic heat kernel definition"
---
## Statement
For every $\tau>0$, the series defining $\phi_\tau(x)$ converges absolutely and uniformly on each compact interval of $x$. Its sum is continuous on $\mathbb R$ and has period one.

## Facts & Assumptions
**Given:** A real parameter $\tau>0$.

[F1] [[def-nufft-periodized-gaussian-gridding-kernel]]: $\phi_\tau(x)$ is the series $\sum_{n\in\mathbb Z}\exp(-\pi(x+n)^2/\tau)$, with $\pi$ the real constant from the real elementary functions.

[F2] [[lem-archimedean-property-from-completeness]]: the natural numbers are unbounded above.

[F3] [[thm-geometric-series]]: if $0<q<1$, then $\sum_{n\ge0}q^n=1/(1-q)$ and its tails tend to zero.

[F4] [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[def-continuity-and-derivative-on-real-interval]], [[thm-derivative-of-exponential]], [[lem-derivative-algebra-and-chain-rules]], and [[def-real-elementary-functions-and-domains]]: $\exp$ is continuous and strictly increasing, $\exp(0)=1$ by its power series, and $\exp(x)>0$ for every real $x$; the difference-quotient definition and scalar power, sum and chain rules show each summand $x\mapsto\exp(-\alpha(x+n)^2)$ is differentiable and hence continuous, so each finite partial sum is continuous.

[F5] [[def-real-elementary-functions-and-domains]]: $\pi=4\int_0^1(1+t^2)^{-1}\,dt$, whose integrand is at least $1/2$ on $[0,1]$; hence $\pi\ge2>0$.

[F6] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$.

## Proof
**Given:** $\tau>0$.

1.1 Put $\alpha=\pi/\tau>0$ using [F5] and $\tau>0$, and set $q=\exp(-\alpha)\in(0,1)$ by [F4]. Fix $R>0$ and choose an integer $n_0>R+1$ by [F2]. For $|x|\le R$ and $|n|\ge n_0$, one has $|x+n|\ge|n|-R>1$, hence $(x+n)^2\ge(|n|-R)^2\ge|n|-R$. Since $\exp$ is increasing, the $n$th nonnegative summand is at most $\exp(-\alpha(|n|-R))=\exp(\alpha R)q^{|n|}$ by [F6]. The two-sided geometric tail is finite and tends to zero uniformly in $x\in[-R,R]$ as its starting index tends to infinity, by [F3]. This proves absolute and uniform convergence on every compact interval. [given, F1, F2, F3, F4, F5, F6, choose, algebra]

2.1 Each finite partial sum is continuous by [F1] and [F4]. Fix $x_0\in\mathbb R$ and $\varepsilon>0$, choose $R>|x_0|+1$, and choose a partial-sum index for which the uniform tail on $[-R,R]$ is below $\varepsilon/3$ by step 1.1. Continuity of that finite partial sum at $x_0$ gives a neighborhood where its change is below $\varepsilon/3$; the two tail values contribute less than $2\varepsilon/3$. Thus the full sum is continuous at $x_0$. Absolute convergence permits the reindexing $m=n+1$ in $\phi_\tau(x+1)=\sum_n\exp(-\alpha(x+1+n)^2)$, giving $\phi_\tau(x+1)=\phi_\tau(x)$. Since $x_0$ was arbitrary, the sum is continuous and one-periodic. [F1, F4, step 1.1, algebra] ∎
