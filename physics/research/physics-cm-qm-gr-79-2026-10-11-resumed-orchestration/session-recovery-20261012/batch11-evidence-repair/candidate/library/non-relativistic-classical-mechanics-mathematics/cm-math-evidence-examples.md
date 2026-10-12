---
page: cm-math-evidence-examples
title: Cm Math Evidence — Examples
status: draft
library: mathematics
items: []
examples: [ex-cm-math-evidence-pendulum-propagation, ex-cm-math-evidence-exact-versus-linear-variance, ex-cm-math-evidence-chebyshev-sample-mean-check, ex-cm-math-evidence-remainder-bound-check, cex-cm-math-evidence-confidence-coverage-is-not-posterior, cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps]
requires: ["cm-math-evidence","the-derivative-and-mean-value-theorems","finite-probability-spaces-and-random-variables"]
---

Worked finite verifications of the measurement, propagation and inference
definitions of [[cm-math-evidence]]. The two propagation computations are
symbolic and quantitative: [[ex-cm-math-evidence-pendulum-propagation]]
differentiates the formal two-input model $h(T,l)=4\pi^2l/T^2$ and expands
$Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$ into
$\frac{64\pi^4l_0^2}{T_0^6}\sigma_T^2-\frac{64\pi^4l_0}{T_0^5}\sigma_{Tl}+\frac{16\pi^4}{T_0^4}\sigma_l^2$,
and supplies an explicit Hessian bound on a box, mean and mean-square
remainder bounds and the scalar variance correction, asserting no
measured period, length or uncertainty;
[[ex-cm-math-evidence-exact-versus-linear-variance]] compares the propagated
value $6=\frac{24}4$ with the exact variance
$\frac{57}4$ for $h(y)=y^2$ on a three-point weighted set, exhibiting equality
in both remainder bounds.
[[ex-cm-math-evidence-chebyshev-sample-mean-check]] enumerates two independent
Rademacher variables, verifying
$E\lvert\overline X\rvert^2=\frac{\sigma^2}2$ and the Chebyshev bound at
$a=1$ (attained) and $a=\frac12$ (strict), and
[[ex-cm-math-evidence-remainder-bound-check]] shows the second-order remainder
bound can be an equality for a quadratic and strict for a cubic.

Two counterexamples mark the boundaries of the same results.
[[cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps]] shows
that under the full $C^2$ and Hessian-bound hypotheses the propagated value
$\frac{27}2$ still differs from the exact variance $\frac{267}2$ of $h(Y)=Y^3$,
so the hypotheses control the remainder rather than forcing equality, and
[[cex-cm-math-evidence-confidence-coverage-is-not-posterior]] refutes the
posterior reading of a confidence level: a confidence set of level $\frac34$
can, for an explicitly declared finite prior and a datum consistent with a
single parameter value, have conditional probability $1$ of containing the
parameter. Every computation on this page is finite or symbolic; none reports
a measurement.
