---
page: dirichlet-kernel-localisation-and-pointwise-fourier-convergence
title: "Dirichlet Kernel Localisation and Pointwise Fourier Convergence"
status: published
items: [def-period-one-fourier-coefficients-partial-sums-and-convolution, def-dirichlet-and-fejer-kernels, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel, lem-step-functions-have-vanishing-torus-fourier-coefficients, lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus, thm-riemann-lebesgue-lemma-for-fourier-coefficients, lem-symmetric-difference-formula-for-fourier-partial-sums, thm-riemann-localisation-principle-for-fourier-series, thm-dini-pointwise-convergence-criterion-for-fourier-series, cor-local-holder-regularity-implies-fourier-convergence-at-a-point, lem-bounded-variation-gives-one-sided-dirichlet-integrability, thm-dirichlet-jordan-pointwise-convergence, cor-piecewise-c-one-fourier-series-converges-to-midpoint-values]
examples: []
---

This page keeps the algebraic Dirichlet-kernel identities separate from the
oscillatory arguments that make pointwise convergence local. The route is:
period-one Fourier setup, convolution with the Dirichlet kernel, the
Riemann-Lebesgue cancellation input, the symmetric-difference formula, then the
localisation, Dini, and Dirichlet-Jordan criteria.

The current corpus does not yet supply the earlier Fourier-series setup page
that the design originally expected, so this page carries its own period-one
torus definitions and the minimal step-function density repair needed for the
Riemann-Lebesgue lemma on current bytes. Because that repair presently routes
through the published $L^1(\mathbb R)$ density theorem, the Riemann-Lebesgue,
localisation, Dini, and Dirichlet-Jordan branch on this page is stated under
the Axiom of Countable Choice. The bounded-variation branch is then proved by
an honest one-sided Dirichlet argument rather than by folding it into the
stronger Dini hypothesis.
