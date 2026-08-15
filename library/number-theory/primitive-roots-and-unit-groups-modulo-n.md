---
page: primitive-roots-and-unit-groups-modulo-n
title: "Primitive Roots and Unit Groups Modulo N"
status: published
items: [def-primitive-root-modulo-n, prop-primitive-root-iff-unit-group-generator,
        def-index-of-a-unit-relative-to-a-primitive-root, prop-index-calculus-modulo-n,
        lem-order-of-a-power-in-a-finite-cyclic-group, cor-generators-of-a-finite-cyclic-group,
        lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime,
        cor-unit-group-modulo-prime-is-cyclic, cor-primitive-roots-modulo-prime,
        cor-power-congruence-solution-count-modulo-a-prime,
        thm-eulers-criterion-for-binomial-congruences,
        cor-number-of-solutions-of-a-binomial-congruence,
        lem-primitive-root-lift-to-prime-square, lem-prime-power-binomial-congruence,
        lem-order-of-one-plus-pu-modulo-prime-powers,
        thm-unit-group-modulo-odd-prime-power-is-cyclic,
        cor-number-of-primitive-roots-modulo-odd-prime-power,
        lem-order-of-five-modulo-two-powers, thm-unit-group-modulo-two-power-structure,
        thm-unit-group-chinese-remainder-decomposition,
        thm-structure-of-the-unit-group-modulo-n, def-carmichael-function,
        prop-carmichael-function-as-maximal-order, thm-carmichael-function-formula,
        cor-carmichael-exponent-theorem,
        lem-primitive-roots-pass-between-odd-n-and-twice-n,
        thm-classification-of-moduli-with-primitive-roots,
        cor-number-of-primitive-roots-modulo-n]
examples: []
---

The published unit group $(\mathbb Z/n\mathbb Z)^\times$ collects the residue classes coprime to $n$, the unit criterion recognises them, and Euler's totient counts them. The order of a group element, its characterisation by which powers are trivial, and the fact that it divides the order of the group constrain every generator argument. The Chinese remainder theorem splits $\mathbb Z/n\mathbb Z$ along a prime factorisation, $\mathbb Z/p\mathbb Z$ is a field, a finite subgroup of the units of an integral domain is cyclic, and the solvability and solution count of a linear congruence are known. Coprimality, least common multiples and the $p$-adic valuation supply the remaining arithmetic.

A primitive root modulo $n$ is a generator of the unit group, and the index relative to a chosen generator converts multiplication into addition modulo $\varphi(n)$. Cyclicity of the unit group of a prime field yields primitive roots modulo a prime, Euler's criterion for the solvability of $x^m\equiv a$, and the exact number of its solution classes. The page then lifts a primitive root from $p$ to every odd prime power and determines the exceptional structure $(\mathbb Z/2^k\mathbb Z)^\times\cong C_2\times C_{2^{k-2}}$ for $k\ge3$. The Chinese remainder decomposition assembles the prime-power factors into the structure of the unit group modulo any $n$, and from it the page derives the Carmichael function and its formula, classifies the moduli $1,2,4,p^k,2p^k$ admitting primitive roots, and counts them.
