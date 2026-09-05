---
page: dirichlet-characters-l-functions-and-primes-in-progressions
title: "Dirichlet Characters L Functions and Primes in Progressions"
status: published
items: [def-dirichlet-character-modulo-q,
        lem-dirichlet-character-extension-well-defined,
        lem-dirichlet-character-arithmetic-function-characterization,
        def-principal-dirichlet-character,
        lem-dirichlet-character-values,
        thm-dirichlet-character-orthogonality,
        cor-dirichlet-character-residue-class-indicator,
        lem-nonprincipal-dirichlet-character-complete-sum,
        lem-nonprincipal-dirichlet-character-partial-sums,
        def-dirichlet-l-function,
        thm-dirichlet-l-euler-product,
        thm-principal-dirichlet-l-factorization,
        thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane,
        lem-positive-log-dirichlet-series-nonvanishing,
        thm-product-dirichlet-l-nonvanishing-line-one,
        thm-dirichlet-l-nonvanishing-line-one,
        lem-nonreal-dirichlet-l-nonzero-at-one,
        lem-real-dirichlet-l-nonzero-at-one,
        thm-dirichlet-l-nonzero-at-one,
        def-natural-and-dirichlet-density,
        thm-natural-density-implies-dirichlet-density,
        thm-primes-residue-class-dirichlet-density,
        thm-mertens-primes-arithmetic-progressions,
        thm-dirichlet-primes-arithmetic-progressions]
examples: []
---

Dirichlet characters are the Fourier characters of the finite group
$(\mathbb Z/q\mathbb Z)^\times$, written as arithmetic functions by extending
them by zero off the units. That extension is proved representative-independent
before it is used, so the page can move honestly from finite-group
orthogonality to Euler products for the Dirichlet series
$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$.

The analytic spine then splits the line $\operatorname{Re}s=1$ into the
regular points $1+it$ with $t\ne0$, the nonreal case at $s=1$, and the real
nonprincipal case at $s=1$. With those nonvanishing statements in hand,
character averages isolate one residue class, giving its Dirichlet density, the
reciprocal-prime asymptotic, and finally Dirichlet's theorem on infinitely many
primes in every reduced arithmetic progression.
