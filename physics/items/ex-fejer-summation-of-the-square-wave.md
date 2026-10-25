---
id: ex-fejer-summation-of-the-square-wave
kind: example
title: "Fejer summation of the square wave"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (ex-fejer-summation-of-the-square-wave). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Example

Let $q$ be the one-periodic square wave defined by

$$q(x)=\begin{cases} 1, & 0<x<1/2,\\ -1, & -1/2<x<0, \end{cases}$$

with $q(0)=q(1/2)=0$. Then

$$\sigma_Nq(x)=\frac{4}{\pi}\sum_{m=0}^{\lfloor (N-1)/2\rfloor}\left(1-\frac{2m+1}{N+1}\right)\frac{\sin(2\pi(2m+1)x)}{2m+1},$$

and

$$\sigma_Nq(0)\to0.$$

Moreover $|\sigma_Nq(x)|\le1$ for every $x$ and every $N$, so these positive
means recover the midpoint value without a fixed Gibbs overshoot.

## Facts & Assumptions

**Given:** The one-periodic square wave $q$ above.

[L1] The Cesaro means are defined by averaging Fourier partial sums ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Fejer kernels are nonnegative and have Riemann integral $1$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]]).

## Verification

**Proof technique:** direct.

1.1 Direct integration gives $\widehat q(2m)=0$ for every $m$ and $$\widehat q(2m+1)=\frac{2}{\pi i(2m+1)},\qquad \widehat q(-(2m+1))=-\frac{2}{\pi i(2m+1)}.$$ Hence $$S_jq(x)=\frac{4}{\pi}\sum_{0\le m,\ 2m+1\le j}\frac{\sin(2\pi(2m+1)x)}{2m+1}.$$ [L1, algebra]

2.1 Averaging the partial sums from step 1.1 as in [L1] shows that the odd mode $2m+1$ appears with weight $1-(2m+1)/(N+1)$ when $2m+1\le N$ and with weight $0$ otherwise. This is exactly the displayed formula for $\sigma_Nq$. [L1, step 1.1, algebra]

3.1 Every term of the finite sine sum in step 2.1 vanishes at $x=0$, so $\sigma_Nq(0)=0$ for every $N$. Also [L1] and [L2] give $$\sigma_Nq(x)=\int_0^1 q(x-t)F_N(t)\,dt,$$ where the integral is Riemann because $q$ is a step function. Since $|q|\le1$, positivity and total mass one imply $|\sigma_Nq(x)|\le1$ for every $x$. Thus the Fejer means average across the jump and do not exhibit a fixed overshoot. [L1, L2, step 2.1, algebra] ∎
