---
page: itos-formula-and-brownian-martingales-examples
title: Itos Formula and Brownian Martingales — Examples
status: published
items: []
examples:
  - ex-ito-formula-for-brownian-powers
  - ex-logarithm-of-geometric-brownian-motion
  - ex-exponential-martingale-and-a-brownian-tail-bound
  - ex-harmonic-functions-of-planar-brownian-motion
  - ex-expected-exit-time-from-an-interval-via-ito-formula
  - ex-brownian-hitting-probability-from-an-exponential-martingale
  - cex-the-ordinary-chain-rule-fails-for-brownian-motion
  - cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability
---

These examples accompany [[itos-formula-and-brownian-martingales]]. The power
identities [[ex-ito-formula-for-brownian-powers]] derive the polynomial
martingales $B_t^2-t$ and $B_t^3-3tB_t$; the geometric Brownian motion and its
logarithm [[ex-logarithm-of-geometric-brownian-motion]] compute the exponential
change of variables; and the tail bound
[[ex-exponential-martingale-and-a-brownian-tail-bound]] turns the exponential
martingale into $P(\sup_{t\le T}B_t\ge a)\le e^{-a^2/(2T)}$.

The harmonic examples [[ex-harmonic-functions-of-planar-brownian-motion]]
exhibit $B^1B^2$ and $(B^1)^2-(B^2)^2$ as local martingales, while the exit-time
and hitting-probability examples
[[ex-expected-exit-time-from-an-interval-via-ito-formula]]
[[ex-brownian-hitting-probability-from-an-exponential-martingale]] compute
$E_x\tau=(x+a)(b-x)$ and the biased exit probability from the generator and the
exponential martingale.

The two counterexamples locate the boundaries of the main page: omitting the
quadratic-variation term contradicts the expectation of $B_t^2$
[[cex-the-ordinary-chain-rule-fails-for-brownian-motion]], and the stopped
exponential martingale shows that almost-sure finiteness of a stopping time does
not replace uniform integrability in optional stopping
[[cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability]].
