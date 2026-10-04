---
page: calderon-zygmund-decomposition-and-singular-integrals
title: "Calderón–Zygmund Decomposition and Singular Integrals"
status: published
requires:
  - fourier-multipliers-and-sobolev-characterisations
  - hilbert-and-riesz-transforms
  - the-maximal-function-and-lebesgue-differentiation
items:
  - lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two
  - def-calderon-zygmund-kernel-and-principal-value-operator
  - def-standard-holder-calderon-zygmund-kernel
  - lem-holder-cz-kernels-satisfy-hormander-cancellation
  - def-dyadic-cube-in-rn-all-generations
  - lem-dyadic-cubes-all-generations-partition-and-nesting
  - lem-maximal-dyadic-cubes-at-height-lambda
  - lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function
  - lem-calderon-zygmund-decomposition-at-height-lambda
  - lem-cz-good-part-has-controlled-ltwo-image
  - lem-cz-bad-part-is-integrable-away-from-expanded-cubes
  - thm-calderon-zygmund-operator-has-weak-type-one-one
  - lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality
  - thm-calderon-zygmund-singular-integrals-are-bounded-on-lp
  - def-maximal-truncated-singular-integral
  - lem-cotlar-inequality-for-maximal-truncations
  - thm-maximal-truncations-are-weak-one-one-and-strong-lp
  - cor-principal-value-truncations-converge-almost-everywhere
  - cor-hilbert-transform-is-bounded-on-lp
  - cor-riesz-transforms-are-bounded-on-lp
  - lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control
  - lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation
  - thm-mihlin-fourier-multiplier-theorem
  - rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity
  - rem-mihlin-does-not-assert-strong-endpoint-bounds
examples: []
---

This page develops the Calderón–Zygmund decomposition and the mapping theory of
singular integrals, and then applies it to the Hilbert and Riesz transforms and
to Mihlin multipliers. Every argument that needs a choice principle assumes
Countable Choice and the spending step is named.

A Calderón–Zygmund kernel is a locally integrable function off the origin with a
finite annular $L^1$ mass and finite Hörmander integral; a standard
$\delta$-Hölder kernel is the pointwise-smoothness special case, and the
Hölder-to-Hörmander lemma converts the pointwise difference bound into the
integral condition with the explicit constant $|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$.
The decomposition itself is driven by the half-open dyadic cubes of all integer
generations: they partition $\mathbb R^n$ at each generation, are nested or
disjoint, and admit ancestors at every coarser generation. The maximal bad cubes
at height $\lambda$ are pairwise disjoint, and their good and bad parts satisfy
the $L^1$, $L^2$, $L^\infty$ and mean-zero bounds recorded in the decomposition
lemma.

Combining the decomposition with Chebyshev's inequality and the off-support
representation gives the weak $(1,1)$ endpoint for a Calderón–Zygmund operator,
and a two-level interpolation together with duality upgrades it to strong $L^p$
bounds for $1<p<\infty$ with the constant
$C_{n,p}(A_2+B)\max(p,(p-1)^{-1})$. The same machinery applied to the maximal
truncations, with Cotlar's inequality controlling the good part and a careful
annulus analysis of the bad part, yields weak $(1,1)$ and strong $L^p$ bounds
for $T^*$ and $T^{**}$, and a density argument then gives almost-everywhere
convergence of the principal-value truncations for the Hilbert and Riesz
kernels. The kernels $1/(\pi x)$ and $c_nx_j/|x|^{n+1}$ are verified to be
standard $1$-Hölder Calderón–Zygmund kernels, so the strict-range $L^p$ theory
applies to them directly.

Finally, the dyadic pieces $m\,\zeta(2^{-j}\cdot)$ of a Mihlin symbol are summed
to produce an off-support kernel with annular and Hörmander bounds of size
$C_nA$, and the strict-range theorem then proves the Mihlin–Hörmander multiplier
theorem on $L^p$ for $1<p<\infty$. The closing remark records the weak $(1,1)$ endpoint for Mihlin multipliers
themselves, using their Calderón–Zygmund operator representation. Weak bounds
for maximal truncations require the stronger kernel hypotheses of the
maximal-truncation theorem. The $L^\infty\to\mathrm{BMO}$ endpoint belongs to
the later BMO page, and no general strong $L^1$ or $L^\infty$ bound follows.
