---
page: the-riemann-zeta-function
title: "The Riemann Zeta Function"
status: draft
items: [lem-riemann-zeta-dirichlet-series-converges-locally-uniformly,
        def-riemann-zeta-function,
        thm-euler-product-for-riemann-zeta,
        cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one,
        rem-agreement-with-the-existing-infinitude-of-primes,
        thm-riemann-zeta-continuation-to-the-right-half-plane,
        thm-dirichlet-eta-representation,
        def-jacobi-theta-function,
        thm-jacobi-theta-transformation,
        thm-theta-mellin-representation-of-completed-zeta,
        def-completed-riemann-zeta-function,
        thm-riemann-zeta-meromorphic-continuation,
        thm-completed-riemann-zeta-functional-equation,
        thm-riemann-zeta-functional-equation,
        def-riemann-xi-function,
        thm-riemann-xi-is-entire-of-order-one,
        thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane,
        thm-trivial-zeros-and-critical-strip,
        thm-hadamard-product-for-riemann-xi,
        def-bernoulli-numbers-by-their-generating-function,
        thm-special-values-of-riemann-zeta-at-integers,
        rem-dirichlet-series-continuation-and-regularized-sums]
examples: []
---

This page separates three roles that are easy to conflate. First, the Dirichlet
series defines $\zeta(s)$ only on $\operatorname{Re}s>1$, where absolute
convergence and the Euler product live. Second, analytic continuation enlarges
that domain, first to $\operatorname{Re}s>0$ by the fractional-part integral and
then to all of $\mathbb C$ by the theta-Mellin route. Third, the completed
functions $\Lambda$ and $\xi$ package the continuation so that the functional
equation, the zero symmetries, the trivial zeros, and the Hadamard product can
be stated cleanly.

The page keeps the standard warning in view: outside $\operatorname{Re}s>1$, the
continued function is not the original Dirichlet series. That distinction is
what makes the eta representation, the special values, and the false-statement
guards mathematically honest rather than slogan-level folklore.
