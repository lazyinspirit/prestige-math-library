---
page: pell-equations-and-generalized-pell-orbits
title: "Pell Equations and Generalized Pell Orbits"
status: published
items: [def-pell-equation,
        def-generalized-and-negative-pell-equations,
        def-norm-on-integer-square-root-order,
        lem-pell-norm-multiplication,
        prop-integral-pell-solutions-form-a-group,
        lem-square-root-continued-fraction-state-recurrence,
        lem-square-root-convergent-norm-identity,
        thm-square-root-continued-fraction-period-structure,
        thm-lagrange-existence-for-pell-equation,
        thm-negative-pell-period-parity-criterion,
        def-fundamental-pell-solution,
        thm-all-positive-pell-solutions-are-fundamental-powers,
        cor-all-integral-pell-solutions,
        def-pell-equivalence-of-generalized-solutions,
        thm-generalized-pell-solutions-have-finitely-many-orbits,
        cor-generalized-pell-solubility-is-decidable,
        cor-one-generalized-pell-solution-gives-infinitely-many]
examples: []
---

Pell's equation is where the continued-fraction machinery of $\sqrt D$ stops
being a theory of approximation and becomes a machine for producing integer
solutions. This page follows the explicit-order route of the design: it works
inside $\mathbb Z[\sqrt D]$, proves the coordinate multiplication and norm laws
there directly, and uses the specialized $P_n,Q_n$ recurrence for $\sqrt D$ to
read period parity off the continued fraction.

Once the fundamental solution is in hand, the positive norm-one solutions are
exactly its powers. The same unit then organizes every nonzero generalized Pell
equation into finitely many orbits, with explicit representative bounds and an
immediate finite-search decidability corollary.
