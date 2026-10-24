---
page: preadditive-and-additive-categories-and-biproducts
title: "Preadditive and Additive Categories and Biproducts"
status: published
items: [def-preadditive-category,
        thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring,
        thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules,
        def-additive-functor,
        prop-an-additive-functor-preserves-zero-morphisms,
        thm-the-opposite-of-a-preadditive-category-is-preadditive,
        prop-a-small-product-of-preadditive-categories-is-preadditive,
        prop-additive-functors-and-natural-transformations-form-a-preadditive-category,
        thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal,
        prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group,
        cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense,
        def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product,
        def-biproduct,
        thm-biproduct-data-characterisation-without-addition,
        prop-the-empty-biproduct-is-a-zero-object,
        prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism,
        thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids,
        thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique,
        cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument,
        def-semiadditive-category,
        thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation,
        thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse,
        def-additive-category,
        thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct,
        cor-additive-categories-are-closed-under-passage-to-the-opposite,
        thm-morphisms-between-finite-biproducts-correspond-to-matrices,
        thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication,
        cor-the-biproduct-of-morphisms-is-the-diagonal-matrix,
        def-the-additive-category-of-matrices-over-a-ring,
        thm-the-matrix-category-over-a-ring-is-additive,
        thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules,
        rem-the-matrix-category-is-the-finite-biproduct-completion-of-a-ring,
        thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference,
        cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference,
        thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits,
        thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero,
        cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero,
        thm-an-additive-functor-preserves-finite-biproducts,
        thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts,
        cor-a-functor-between-additive-categories-preserving-finite-products-is-additive,
        cor-any-adjoint-between-additive-categories-is-additive,
        thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels,
        prop-an-additive-functor-preserves-split-biproduct-diagrams,
        thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups,
        cor-hom-functors-on-a-preadditive-category-are-left-exact,
        rem-the-published-module-statement-is-the-instance-of-this-corollary,
        def-idempotent-and-split-idempotent,
        thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism,
        def-idempotent-complete-category,
        thm-an-additive-category-with-kernels-is-idempotent-complete,
        def-the-idempotent-completion-of-a-preadditive-category,
        thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal]
examples: [cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product,
           cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category,
           cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels,
           fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen,
           fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts,
           fs-a-functor-preserving-zero-morphisms-is-additive,
           fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts,
           fs-every-idempotent-splits]
---

This page develops the thesis that additivity is not extra decoration on a
category once finite biproducts exist. It starts from preadditive categories,
reconciles the two notions of zero morphism, defines biproducts without using a
pre-existing addition law, and then shows that finite biproducts force a unique
commutative-monoid enrichment on every hom-set.

From there it proves the practical consequences: finite products already imply
biproducts in a preadditive category, morphisms between finite biproducts admit
matrix calculus, additive functors are exactly the biproduct-preserving ones,
hom-functors are left exact by representability, and kernels force idempotent
completeness. The false statements isolate the exact hypotheses that fail if one
drops biproducts, additive inverses, or splitting data.
