---
page: decision-problems-for-finitely-presented-groups
title: "Decision Problems for Finitely Presented Groups"
status: draft
items: [def-finite-alphabet-encoding-and-algorithm,
        def-recursive-and-recursively-enumerable-languages,
        def-recursive-and-finite-group-presentations,
        lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable,
        def-word-problem-for-a-fixed-finite-presentation,
        def-uniform-word-problem-for-finite-presentations,
        prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set,
        thm-word-problem-for-free-groups,
        rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form,
        thm-word-problem-for-finitely-generated-abelian-groups,
        thm-word-problem-for-free-products-and-amalgams-with-decidable-membership,
        def-conjugacy-problem-for-a-finitely-generated-group,
        def-isomorphism-problem-for-a-class-of-finite-presentations,
        def-markov-property-of-finitely-presented-groups,
        rem-novikov-boone-undecidability-of-the-word-problem,
        rem-adian-rabin-undecidability-for-markov-properties,
        rem-triviality-and-finiteness-are-undecidable-for-finite-presentations,
        rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups,
        rem-groups-with-unsolvable-conjugacy-problem,
        def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation,
        lem-minimal-algebraic-relator-area-exists,
        prop-recursive-dehn-function-implies-solvable-word-problem]
examples: [fs-every-finitely-presented-group-has-solvable-word-problem,
           fs-recursively-enumerable-trivial-words-form-a-decision-algorithm,
           fs-unsolvable-word-problem-means-no-word-can-be-decided,
           fs-the-novikov-boone-theorem-proves-the-uniform-problem-only,
           fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem]
---

This page fixes the algorithmic vocabulary before speaking about solvability.
It keeps the word problem for one fixed finite presentation separate from the
uniform problem, proves several positive decision results, and records the
classical negative theorems as exact cited boundary markers rather than
synthetic reconstructions.

The final seam defines algebraic relator area and the Dehn function in a way
that stays inside presentations and normal closures. Van Kampen diagrams and
the geometric reformulation are deferred to later pages.
