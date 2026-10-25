---
id: thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
kind: theorem
title: "The Gregory-Leibniz series: pi over four equals 1-1/3+1/5-1/7+..."
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-tangent-cotangent-secant-cosecant, thm-tangent-cotangent-secant-cosecant-derivatives-and-periods, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-derivatives, thm-substitution, lem-integral-elementary-bounds, thm-squeeze, thm-linearity-of-the-integral, lem-derivative-of-a-power, thm-ftc-second-part, cor-trigonometric-parity-and-pythagorean-identity, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, exercise 11.4.11"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

The series

$$\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}$$

converges, and its sum is $\pi/4$. More precisely, for every natural $N$,

$$\frac{\pi}{4}=\sum_{k=0}^{N}\frac{(-1)^k}{2k+1}+R_N,\qquad |R_N|\le\frac1{2N+3},$$

where

$$R_N:=(-1)^{N+1}\int_0^1\frac{x^{2N+2}}{1+x^2}\,dx.$$

## Facts & Assumptions
**Given:** A natural $N$ and the finite geometric identity used below.

[L1] A series converges exactly when its sequence of finite partial sums converges ([[def-series]]).

[L2] The Riemann integral is linear over finite sums ([[thm-linearity-of-the-integral]]).

[L3] The power rule gives $(x^{m+1})'=(m+1)x^m$ for $m\ge0$. If $G$ is differentiable on a closed interval and $f=G'$ is integrable there, then $\int f$ is the endpoint increment of $G$ ([[lem-derivative-of-a-power]], [[thm-ftc-second-part]]).

[L4] If $m\le f\le M$ on $[a,b]$, then the integral lies between $m(b-a)$ and $M(b-a)$ ([[lem-integral-elementary-bounds]]).

[L5] Substitution holds for a differentiable inner map with integrable derivative and a continuous outer function ([[thm-substitution]]).

[L6] On its natural domain, $\tan t=\sin t/\cos t$, $\sec t=1/\cos t$, and $(\tan t)'=\sec^2t$; for every real $t$, $\sin^2t+\cos^2t=1$ ([[def-tangent-cotangent-secant-cosecant]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L7] The quarter-turn values are $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$; the sine and cosine addition formulas hold for all real inputs, sine is strictly increasing on $[-\pi/2,\pi/2]$, cosine is strictly decreasing on $[0,\pi]$, and $\sin0=0$, $\cos0=1$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-derivatives]]).

[L8] A sequence squeezed between two sequences with the same limit has that limit ([[thm-squeeze]]).

[L9] For every $\varepsilon>0$ there is a natural $M\ge1$ with $1/M<\varepsilon$ ([[cor-archimedean-reciprocal]]).



## Proof

**Proof technique:** direct.

1.1 For every real $x$, finite geometric algebra gives $$\frac1{1+x^2}=\sum_{k=0}^{N}(-1)^kx^{2k}+(-1)^{N+1}\frac{x^{2N+2}}{1+x^2}.$$ [given, algebra]

1.2 From [L7], the cosine double-angle formula at $\pi/4$ gives $\cos^2(\pi/4)=\sin^2(\pi/4)$, while the stated monotonicities make both values positive; hence [L6] gives $\tan(\pi/4)=1$, and [L6] also gives $\tan0=0$. The definitions and Pythagorean identity in [L6] give $\sec^2t=1+\tan^2t$. Apply [L5] with $x=\tan t$ on $[0,\pi/4]$. Then $dx=(1+\tan^2t)dt$, so $$\int_0^1\frac{dx}{1+x^2}=\int_0^{\pi/4}1\,dt=\frac\pi4.$$ [L4, L5, L6, L7, algebra]

2.1 Integrating step 1.1 on $[0,1]$ and using [L2] and [L3] yields $$\int_0^1\frac{dx}{1+x^2}=\sum_{k=0}^{N}\frac{(-1)^k}{2k+1}+R_N,$$ where $R_N=(-1)^{N+1}\int_0^1x^{2N+2}/(1+x^2)\,dx$. [step 1.1, L2, L3]

3.1 On $[0,1]$, $0\le x^{2N+2}/(1+x^2)\le x^{2N+2}$, so [L3] and [L4] give $|R_N|\le1/(2N+3)$. [step 2.1, L3, L4, algebra]

4.1 Steps 2.1 and 1.2 give the displayed finite-remainder identity. By [L9], $1/(2N+3)\to0$, so step 3.1 and [L8] make the finite sums converge to $\pi/4$; by [L1], this is the sum of the series. [step 2.1, step 3.1, step 1.2, L1, L8, L9] ∎
