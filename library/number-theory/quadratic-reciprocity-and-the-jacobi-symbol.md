---
page: quadratic-reciprocity-and-the-jacobi-symbol
title: "Quadratic Reciprocity and the Jacobi Symbol"
status: draft
items: [lem-gauss-lower-half-lattice-count,
        lem-reciprocity-rectangle-lattice-count,
        thm-quadratic-reciprocity,
        def-jacobi-symbol,
        prop-jacobi-symbol-well-defined,
        thm-jacobi-symbol-multiplicativity,
        prop-jacobi-symbol-on-units-is-a-homomorphism,
        thm-jacobi-symbol-supplements,
        thm-jacobi-symbol-reciprocity,
        thm-euclidean-algorithm-for-jacobi-symbol,
        prop-unit-square-has-jacobi-symbol-one,
        cor-jacobi-symbol-minus-one-obstructs-square,
        lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
        thm-unit-square-criterion-modulo-odd-prime-powers,
        thm-unit-square-criterion-modulo-two-powers,
        thm-unit-square-criterion-modulo-n,
        cor-number-of-square-roots-of-a-unit-modulo-n,
        thm-jacobi-map-kernel-and-square-subgroup]
examples: []
---

Gauss's lemma turns a Legendre symbol into the parity of a finite lower-half count. For two distinct odd primes, the two counts occupy opposite sides of a rectangle with no lattice point on its diagonal, so their sum gives the sign in quadratic reciprocity. After Gauss's lemma and its half-system permutation, the rectangle argument uses integer division, rational inequalities, and finite sets; it does not use a floor function or any result from real analysis.

The Jacobi symbol multiplies the prime Legendre symbols in an odd denominator's canonical factorisation, with value zero for noncoprime arguments and empty-product value one at denominator one. Its multiplicativity, supplementary laws, and reciprocity yield a terminating Euclidean evaluation algorithm. On unit groups it is a sign character: every square lies in its kernel, but the kernel can be larger. Direct lifting at odd prime powers, the separate criterion for powers of two, and the Chinese remainder theorem then give a complete criterion and exact count for unit square roots modulo a positive integer.
