---
page: the-winding-number-and-the-global-cauchy-theorem
title: "The Winding Number and the Global Cauchy Theorem"
status: draft
items: [lem-tagged-sums-approximate-a-contour-integral,
        lem-continuous-function-holomorphic-off-a-point-is-holomorphic,
        thm-contour-parameter-integrals-are-holomorphic,
        cor-holomorphic-logarithm-has-the-logarithmic-derivative,
        lem-logarithm-branch-for-a-linear-factor-on-a-disc,
        lem-contour-subdivision-into-discs-missing-a-point,
        def-continuous-argument-and-holomorphic-logarithm-branches,
        thm-continuous-logarithms-exist-along-a-contour,
        thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment,
        def-winding-number-closed-complex-contour,
        thm-winding-number-is-integer,
        cor-winding-number-is-the-normalized-argument-increment,
        thm-winding-number-locally-constant,
        lem-plane-exterior-of-a-closed-disc-is-path-connected,
        thm-complement-of-a-compact-plane-set-has-one-unbounded-component,
        thm-winding-number-zero-unbounded-component,
        prop-winding-number-under-reversal-and-concatenation,
        thm-winding-number-circle-traversed-k-times,
        def-complex-chain-and-cycle,
        def-integration-and-index-of-complex-chain,
        thm-winding-number-chain-laws,
        thm-winding-number-of-a-cycle-is-integer,
        cor-cycle-integral-of-a-derivative-vanishes,
        cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace,
        def-null-homologous-and-homologous-complex-cycles,
        def-homologically-simply-connected-complex-domain,
        prop-star-shaped-plane-domains-are-homologically-simply-connected,
        lem-holomorphic-difference-quotient-segment-formula,
        lem-holomorphic-difference-quotient-is-jointly-continuous,
        lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable,
        lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace,
        lem-dixon-entire-gluing,
        thm-global-cauchy-integral-formula-homology,
        cor-global-cauchy-theorem-homology,
        cor-contour-integrals-homologous-cycles,
        cor-global-cauchy-formula-higher-derivatives,
        thm-primitives-homologically-simply-connected-domains,
        thm-holomorphic-logarithms-homologically-simply-connected-domains,
        cor-holomorphic-roots-homologically-simply-connected-domains,
        thm-homological-simple-connectivity-equivalences,
        cor-principal-logarithm-is-holomorphic-on-the-slit-plane,
        rem-homological-simple-connectivity-conventions]
examples: []
---

This page starts from the local complex tools already available on discs and
contours: complex line integrals, the ML estimate, the one-variable Cauchy
formula, local holomorphic logarithms of nonvanishing functions, and the
topological facts that open plane sets decompose into connected components and
that compact plane sets have a unique unbounded complementary component. Those
inputs are enough to define winding numbers for rectifiable closed contours
without assuming differentiability of the parameter.

The development first builds continuous logarithms along a contour and uses them
to prove that the winding number is integral, locally constant off the trace, and
zero on the unbounded complementary component. It then extends the index and
integration from one contour to finite chains and cycles, introduces null
homology and homological simple connectivity, and proves the global Cauchy
integral formula, Cauchy's theorem for null-homologous cycles, the invariance of
holomorphic integrals under homology, and the existence of primitives,
holomorphic logarithms, and holomorphic roots on homologically simply connected
domains.
