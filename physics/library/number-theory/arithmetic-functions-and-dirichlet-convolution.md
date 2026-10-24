---
page: arithmetic-functions-and-dirichlet-convolution
title: "Arithmetic Functions and Dirichlet Convolution"
status: published
items: [def-arithmetic-function,
        def-multiplicative-arithmetic-function,
        def-completely-multiplicative-arithmetic-function,
        def-dirichlet-convolution,
        def-dirichlet-convolution-identity,
        thm-dirichlet-convolution-commutative-ring,
        thm-dirichlet-convolution-invertibility-criterion,
        thm-dirichlet-convolution-preserves-multiplicativity,
        thm-multiplicative-functions-determined-by-prime-powers,
        def-divisor-counting-function,
        def-divisor-power-sum-functions,
        def-liouville-function,
        def-von-mangoldt-function,
        prop-divisor-functions-under-dirichlet-convolution,
        thm-von-mangoldt-divisor-sum-identity,
        cor-von-mangoldt-mobius-inversion-formula,
        cor-number-of-monic-irreducible-polynomials-over-a-finite-field,
        prop-liouville-convolution-square-indicator,
        def-mertens-function]
examples: []
---

Arithmetic functions package number-theoretic data into maps on the positive
integers. This page fixes the positive-divisor convention, separates the
constant-one function $\mathbf 1$ from the convolution identity $\varepsilon$,
and builds the finite algebra of Dirichlet convolution without appealing to
Euler products or infinite series.

The second half records the standard divisor, Liouville, von Mangoldt, and
Mertens functions. Their first structural identities are all finite: divisor
functions arise from convolution, the divisor sum of $\Lambda$ is $\log$, Möbius
inversion closes the finite-field irreducible-count formula, and
$\mathbf 1 * \lambda$ detects squares prime-by-prime.
