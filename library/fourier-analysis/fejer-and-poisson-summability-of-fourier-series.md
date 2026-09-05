---
page: fejer-and-poisson-summability-of-fourier-series
title: "Fejer and Poisson Summability of Fourier Series"
status: published
items: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-convergence-in-lp, thm-fejer-uniform-convergence-for-continuous-periodic-functions, thm-fejer-means-converge-at-lebesgue-points, lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity, thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points, thm-cesaro-summability-implies-abel-summability, thm-fejer-theorem-for-pointwise-midpoint-values, thm-gibbs-overshoot-at-a-piecewise-c-one-jump, rem-gibbs-phenomenon]
examples: []
---

This page treats the two positive summation methods for one-period Fourier
series. The route is concrete: define Cesaro and Abel means on
$\mathbb T=\mathbb R/\mathbb Z$, prove that the Fejer and Poisson kernels are
positive approximate identities, then deduce norm convergence, uniform
convergence on continuous data, and pointwise convergence at Lebesgue points and
jumps. The closing comparison records the Gibbs overshoot for Dirichlet partial
sums and explains why the positive kernels avoid it.

The current on-disk $L^p$ proofs use the library's published real-line density
theorem, so the norm-convergence items inherit the same Axiom-of-Countable-Choice
cost already present elsewhere in the Fourier route on current bytes.
