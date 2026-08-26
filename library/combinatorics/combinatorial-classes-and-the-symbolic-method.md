---
page: combinatorial-classes-and-the-symbolic-method
title: "Combinatorial Classes and the Symbolic Method"
status: draft
items: [def-combinatorial-class-and-ordinary-generating-function,
        def-neutral-and-atomic-classes,
        def-disjoint-union-and-cartesian-product-of-combinatorial-classes,
        thm-symbolic-sum-and-product-rules,
        def-sequence-construction-of-a-combinatorial-class,
        thm-sequence-construction-generating-function,
        cor-binary-words-have-generating-function-one-over-one-minus-two-x,
        cor-compositions-have-generating-function-x-over-one-minus-two-x,
        cor-compositions-with-k-parts-are-counted-by-binomial-coefficients,
        def-multiset-and-powerset-constructions,
        thm-multiset-product-formula,
        thm-multiset-exponential-formula,
        cor-integer-partitions-have-euler-product,
        thm-powerset-product-formula,
        thm-powerset-exponential-formula,
        def-cycle-construction-of-a-combinatorial-class,
        lem-cyclic-rotation-fixed-tuples-are-periodic,
        thm-cycle-construction-formula,
        cor-necklaces-over-an-m-letter-alphabet,
        def-substitution-of-combinatorial-classes,
        thm-substitution-rule-for-ordinary-generating-functions,
        def-pointing-of-a-combinatorial-class,
        thm-pointing-rule-for-ordinary-generating-functions,
        def-combinatorial-specification-and-order-raising-recursion,
        thm-order-raising-recursive-specifications-have-unique-solutions,
        cor-plane-trees-satisfy-t-equals-z-over-one-minus-t,
        cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared]
examples: [ex-binary-words-as-sequences-of-two-atoms,
           ex-compositions-of-four-from-sequences,
           ex-partitions-with-parts-at-most-three,
           ex-plane-trees-with-at-most-four-vertices,
           ex-binary-necklaces-of-length-six-in-two-colours,
           ex-truncation-iteration-for-a-recursive-specification,
           cex-an-infinite-level-is-not-a-combinatorial-class,
           cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule,
           cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule,
           fs-sequence-construction-with-a-size-zero-object,
           fs-multiset-product-exists-for-every-coefficient-sequence]
---

Formal power series, coefficient extraction, summable families, composition,
differentiation, and the $x$-adic topology supply the exact background for this
development. Finite cardinality underlies the counting sequence of a class, the
published stars-and-bars theorem recovers the fixed-part composition count, and
Euler's totient together with Burnside's orbit count is the seam that makes the
cycle construction and the necklace formula rigorous.

The page defines combinatorial classes and the basic constructors
$\mathcal{E}$, $\mathcal{Z}$, $+$, $\times$, $\operatorname{SEQ}$,
$\operatorname{MSET}$, $\operatorname{PSET}$, $\operatorname{CYC}$,
substitution, and pointing, then proves their ordinary generating-function
translations. From those rules it derives binary words, compositions,
partitions, necklaces, and the functional equations for plane and binary trees.
It closes with order-raising recursive specifications, where $x$-adic
completeness yields unique fixed points for symbolic recursive equations.
