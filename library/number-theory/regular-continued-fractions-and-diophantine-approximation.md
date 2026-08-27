---
page: regular-continued-fractions-and-diophantine-approximation
title: "Regular Continued Fractions and Diophantine Approximation"
status: draft
items: [def-regular-continued-fraction,
        def-convergents-of-regular-continued-fraction,
        lem-continued-fraction-convergent-recurrence,
        lem-continued-fraction-determinant-identity,
        cor-continued-fraction-convergents-are-reduced,
        def-continued-fraction-complete-quotients,
        lem-continued-fraction-complete-quotient-formula,
        thm-convergence-of-infinite-regular-continued-fractions,
        thm-continued-fraction-algorithm-for-real-numbers,
        thm-rational-continued-fraction-termination,
        thm-normalized-finite-continued-fraction-uniqueness,
        lem-continued-fraction-error-bound,
        thm-continued-fraction-convergents-are-best-approximations,
        thm-legendre-continued-fraction-criterion,
        def-quadratic-irrational,
        def-eventually-periodic-continued-fraction,
        lem-periodic-continued-fraction-is-quadratic,
        lem-quadratic-irrational-complete-quotients-are-finite-state,
        thm-lagrange-periodic-continued-fraction-theorem]
examples: []
---

Regular continued fractions turn Euclidean division into an approximation
machine. This page fixes the low-anchor route from the design block: it proves
the integer-part step directly from Archimedeanness and well-ordering, derives
convergence from completeness rather than from later sequence pages, and then
uses the determinant identity and complete-quotient formula to reach best
approximation and Legendre's criterion.

The last third of the page turns to quadratic irrationals. It isolates the two
load-bearing ideas separately: an eventually periodic tail satisfies a quadratic
equation, while the continued-fraction algorithm on a quadratic irrational runs
inside a finite integral state space. Lagrange's theorem is then exactly the
equivalence between those two descriptions.
