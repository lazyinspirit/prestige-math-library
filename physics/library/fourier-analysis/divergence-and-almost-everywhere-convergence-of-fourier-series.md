---
page: divergence-and-almost-everywhere-convergence-of-fourier-series
title: Divergence and Almost Everywhere Convergence of Fourier Series
status: published
items: [def-carleson-maximal-partial-sum-operator, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, cex-continuous-function-with-divergent-fourier-series-at-a-point, lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one, rem-proof-cost-of-the-carleson-hunt-theorem, rem-the-lone-endpoint-is-excluded-from-carleson-hunt]
examples: []
---

The symmetric Fourier partial sums on $\mathbb T=\mathbb R/\mathbb Z$ can
diverge at a prescribed point even for a continuous real function. The local
proof connects this failure to the exact Lebesgue-constant operator norm.
The maximal-density lemma closes almost-everywhere convergence from a weak
maximal estimate and Fejér polynomial approximation.

Under the Axiom of Choice, the proved local Carleson–Hunt maximal inequality
[[thm-carleson-hunt-maximal-inequality-on-the-torus]] supplies that estimate, so
the convergence corollary establishes $S_Nf\to f$ almost everywhere for every
$f\in L^p(\mathbb T)$ with $1<p<\infty$. The local Kolmogorov theorem
[[thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] supplies an
$L^1$ function whose symmetric partial sums are unbounded almost everywhere;
the endpoint remark explains why a weak or strong $(1,1)$ maximal estimate
cannot hold. All integrals use Haar measure of total mass one.

The Carleson–Hunt and Kolmogorov results assume full AC. Finite polynomial
calculations remain choice-free; the continuous-function and maximal-density
arguments carry their separately stated choice hypotheses.
