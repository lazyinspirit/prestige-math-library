---
page: "the-heat-kernel-and-the-cauchy-problem"
title: "The Heat Kernel and the Cauchy Problem"
status: draft
items: ["def-heat-equation-heat-operator-and-cauchy-problem", "def-heat-kernel", "lem-heat-kernel-normalisation-scaling-and-derivatives", "lem-first-and-second-moments-of-the-heat-kernel", "lem-gaussian-kernels-form-an-approximate-identity", "lem-heat-kernel-semigroup-identity", "thm-heat-kernel-is-the-causal-fundamental-solution", "def-heat-evolution-of-initial-data", "lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time", "thm-heat-cauchy-solution-for-bounded-continuous-data", "thm-heat-cauchy-solution-for-lp-data", "thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class", "lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data", "cor-heat-flow-preserves-mass-and-positivity", "cor-heat-flow-is-order-preserving-and-lp-contractive", "thm-lp-to-lq-heat-kernel-estimate", "thm-spatial-derivative-estimates-for-heat-flow", "thm-positive-time-spatial-analyticity-of-heat-kernel-solutions", "cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class", "rem-heat-kernel-conventions-and-diffusivity"]
examples: []
---

This page defines the heat operator $\partial_t-\Delta_x$, its classical
solutions and the Cauchy problem with data on the time-zero slice, and then
constructs the Gaussian heat kernel
$\Gamma(x,t)=(4\pi t)^{-n/2}e^{-|x|^2/(4t)}$ together with its causal
extension. The kernel is normalised to unit mass, obeys the parabolic scaling
law and the semigroup identity $\Gamma_t*\Gamma_s=\Gamma_{t+s}$, satisfies the
heat equation with explicit Gaussian derivative bounds, and forms an $L^1$
approximate identity as $t\downarrow0^+$; its causal extension is proved to be
the fundamental solution of $\partial_t-\Delta_x$, with weak convergence to
the Dirac mass at the origin. The heat evolution $H_t$ of initial data is then
defined on $L^p$ by convolution and developed: derivatives and the heat
operator pass through the convolution for positive time, bounded uniformly
continuous data and $L^p$ data ($1\le p<\infty$) give classical solutions with
the expected initial behaviour, the semigroup is the unique solution of the
mild relation in $C([0,T];L^p)$, and the generator at zero is computed on
compactly supported smooth data.

The contractive, order-preserving and mass-conserving properties of the flow
are recorded, together with the $L^p$ to $L^q$ smoothing estimate with its
exact Gaussian constant and the derivative estimates that follow from it by
parabolic scaling. At positive time the flow of any $L^p$ datum is spatially
real analytic with factorial derivative bounds, and nonnegative nonzero data
propagate with infinite speed. A closing remark compares the diffusivity
normalisation with the ball and half-space Poisson kernels. Countable Choice
is assumed throughout because the convolution, Fubini–Tonelli, change of
variables and approximate-identity interfaces carry it, and each item states
its assumption explicitly; the spatial analyticity proof records the exact
choice cost of its $L^p$ supplier steps.
