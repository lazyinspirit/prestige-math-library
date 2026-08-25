---
page: noetherian-rings-and-hilbert-basis
title: "Noetherian Rings and Hilbert Basis"
status: published
items: [rem-noetherian-conventions-and-choice,
        lem-generated-submodule-as-finite-linear-combinations,
        lem-finite-generating-subset-of-a-generating-set,
        thm-noetherian-ring-ideal-characterisations,
        thm-noetherian-induction,
        lem-retract-of-a-noetherian-ring-is-noetherian,
        lem-localised-ideal-generated-by-contracted-numerators,
        thm-noetherian-ring-quotients-and-localisations,
        cor-noetherian-from-finitely-many-noetherian-quotients,
        cor-product-of-two-noetherian-rings-is-noetherian,
        lem-leading-coefficient-ideals,
        lem-hilbert-basis-degree-cancellation,
        lem-polynomial-ideal-finite-generation,
        thm-hilbert-basis-theorem,
        cor-finite-variable-polynomial-ring-noetherian,
        cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian,
        def-finite-type-and-module-finite-algebras,
        cor-finite-type-algebra-over-noetherian-ring-is-noetherian,
        cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian,
        def-finitely-presented-module-and-algebra,
        thm-finite-generation-and-finite-presentation-over-a-noetherian-ring,
        cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented,
        lem-hom-module-over-a-commutative-ring,
        lem-hom-from-a-finite-free-module,
        cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring,
        lem-transitivity-of-module-finiteness,
        thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian,
        lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite,
        lem-artin-tate-coefficient-subalgebra,
        lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra,
        thm-artin-tate-lemma,
        cor-artin-tate-integral-form,
        def-invariant-subring-of-a-group-of-ring-automorphisms,
        lem-orbit-polynomial-has-invariant-coefficients,
        thm-noether-finiteness-theorem-for-invariants,
        lem-maximal-non-finitely-generated-ideal,
        lem-maximal-non-finitely-generated-ideal-is-prime,
        thm-cohen-noetherian-criterion,
        rem-noetherian-hypotheses-do-not-descend-to-subrings]
examples: []
---

This page works in commutative rings with identity, using the regular-module definition of a Noetherian ring and the module theorem identifying finite generation, the ascending chain condition, and the maximal condition. It also uses the earlier algebra pages on ideals, quotient rings, localisations, polynomial rings, evaluation, and integrality, together with the module pages on free modules, exact sequences, and chain conditions. Those inputs let ideal-theoretic statements be transported to modules and back, and they supply the basic quotient, localisation, and polynomial constructions used throughout the later arguments.

The development first rewrites Noetherianity in ideal language and derives Noetherian induction, then proves stability under quotients, localisations, retractions, and finite products. It next breaks the Hilbert basis theorem into leading-coefficient ideals, one cancellation step, and the degree argument that makes polynomial ideals finitely generated, then passes to finite-variable polynomial rings and finite-type algebras. The later items treat finite presentation, finiteness of `Hom`, module-finite algebras, the Artin-Tate lemma and its integral form, and finally Noether's finiteness theorem for invariants and Cohen's criterion.
