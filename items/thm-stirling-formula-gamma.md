---
id: thm-stirling-formula-gamma
kind: theorem
title: "Stirling's formula for Gamma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euler-mascheroni-constant-and-harmonic-asymptotic,
       thm-gamma-weierstrass-product,
       thm-real-stirling-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §6"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

Fix $\delta$ with $0<\delta<\pi$. On the closed sector
$|\arg z|\le\pi-\delta$, using the principal logarithm in
$z^{z-1/2}:=\exp((z-1/2)\operatorname{Log} z)$, one has

$$\Gamma(z)=\sqrt{2\pi}\,z^{z-1/2}e^{-z}\left(1+O_\delta(|z|^{-1})\right)$$

as $|z|\to\infty$.

## Facts & Assumptions

**Given:** A fixed closed sector $|\arg z|\le\pi-\delta$.

[L1] Reciprocal Gamma has the Weierstrass product ([[thm-gamma-weierstrass-product]]).

[L2] Harmonic numbers satisfy $H_n=\log n+\gamma+o(1)$ ([[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]).

[L3] The real Stirling formula gives
$$\log (N-1)!=\left(N-\frac12\right)\log N-N+\frac12\log(2\pi)+o(1)$$
as $N\to\infty$ through the positive integers
([[thm-real-stirling-formula]]).

## Proof

**Proof technique:** direct.

1.1 Taking logarithms in [L1] on the chosen sector gives [L1, given, algebra] $$\log\Gamma(z)=-\log z-\gamma z+\sum_{n\ge1}\left(\frac{z}{n}-\operatorname{Log}\left(1+\frac{z}{n}\right)\right),$$ where $\operatorname{Log}$ denotes the principal logarithm. [L1, given, algebra]

2.1 For an integer $N\ge1$, define [step 1.1, algebra] $$I_N(z):=\int_0^N \frac{\lfloor u\rfloor-u+1/2}{u+z}\,du.$$ On each interval $[n,n+1]$ with $0\le n\le N-1$, one has $$\int_n^{n+1}\frac{n-u+1/2}{u+z}\,du=\left(n+\frac12+z\right)\operatorname{Log}\frac{n+1+z}{n+z}-1.$$ Summing these equalities and telescoping the logarithms yields $$I_N(z)=\left(N+z-\frac12\right)\operatorname{Log}(N+z)-\left(z+\frac12\right)\operatorname{Log} z-N-\log (N-1)!-zH_{N-1}+\sum_{n=1}^{N-1}\left(\frac{z}{n}-\operatorname{Log}\left(1+\frac{z}{n}\right)\right).$$ [step 1.1, algebra]

3.1 For fixed $z$ in the sector, [L2] and [L3] give [L2, L3, step 1.1, step 2.1, algebra] $$H_{N-1}=\log N+\gamma+o(1),\qquad \log (N-1)!=\left(N-\frac12\right)\log N-N+\frac12\log(2\pi)+o(1),$$ and also $\operatorname{Log}(N+z)=\log N+o(1)$ as $N\to\infty$. Comparing the $N\to\infty$ limit of step 2.1 with the partial sums in step 1.1 gives the Binet-type formula $$\log\Gamma(z)=\left(z-\frac12\right)\operatorname{Log} z-z+\frac12\log(2\pi)+\int_0^\infty \frac{\lfloor u\rfloor-u+1/2}{u+z}\,du.$$ [L2, L3, step 1.1, step 2.1, algebra]

4.1 Let [step 3.1, algebra] $$\Phi(u):=\int_0^u \bigl(\lfloor v\rfloor-v+1/2\bigr)\,dv.$$ Then $\Phi$ is $1$-periodic and therefore bounded. Integrating by parts in step 3.1 gives $$\int_0^\infty \frac{\lfloor u\rfloor-u+1/2}{u+z}\,du=\int_0^\infty \frac{\Phi(u)}{(u+z)^2}\,du.$$ On the closed sector $|\arg z|\le\pi-\delta$, one has $|u+z|\ge c_\delta(u+|z|)$ for a constant $c_\delta>0$, so the integral above is $O_\delta(|z|^{-1})$ uniformly as $|z|\to\infty$. Hence $$\log\Gamma(z)=\left(z-\frac12\right)\operatorname{Log} z-z+\frac12\log(2\pi)+O_\delta(|z|^{-1}),$$ and exponentiating yields $$\Gamma(z)=\sqrt{2\pi}\,z^{z-1/2}e^{-z}\left(1+O_\delta(|z|^{-1})\right).$$ [step 3.1, algebra] ∎
