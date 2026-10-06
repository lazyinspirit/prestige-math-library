---
page: abelian-categories
title: "Abelian Categories"
status: published
items: [def-normal-monomorphism-and-conormal-epimorphism,
        prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero,
        prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism,
        def-image-and-coimage-in-a-category-with-kernels-and-cokernels,
        thm-a-morphism-factors-uniquely-through-its-coimage,
        thm-a-morphism-factors-uniquely-through-its-image,
        thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique,
        prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic,
        def-abelian-category,
        rem-the-axiom-labels-and-where-they-come-from,
        thm-an-abelian-category-is-balanced,
        thm-the-opposite-of-an-abelian-category-is-abelian,
        thm-every-monomorphism-is-the-kernel-of-its-cokernel,
        thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
        thm-the-image-is-the-least-subobject-through-which-a-morphism-factors,
        cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero,
        def-the-freyd-axioms-for-an-abelian-category,
        thm-the-freyd-axioms-imply-the-additive-axioms,
        thm-the-freyd-mitchell-characterisation-of-an-abelian-category,
        rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data,
        thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits,
        thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs,
        thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
        cor-the-pushout-of-a-monomorphism-is-a-monomorphism,
        thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
        thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism,
        thm-pullback-pasting-in-an-abelian-category,
        thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects,
        def-the-quotient-of-an-object-by-a-subobject,
        thm-the-quotient-is-independent-of-the-representing-monomorphism,
        thm-first-isomorphism-theorem-in-an-abelian-category,
        thm-third-isomorphism-theorem-in-an-abelian-category,
        thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation,
        def-exact-functor-between-abelian-categories,
        thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive,
        thm-one-sided-and-two-sided-exactness-by-short-exact-sequences,
        thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels,
        thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms,
        thm-an-equivalence-between-abelian-categories-is-exact,
        def-abelian-subcategory-and-exact-embedding,
        thm-abelian-groups-form-an-abelian-category,
        thm-modules-over-a-ring-form-an-abelian-category,
        thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category,
        thm-a-small-product-of-abelian-categories-is-abelian,
        cor-an-abelian-category-that-is-a-preorder-is-trivial,
        rem-the-freyd-mitchell-embedding-theorem,
        rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem]
examples: [cex-an-exact-functor-need-not-be-faithful,
           cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian,
           cex-torsion-free-abelian-groups-do-not-form-an-abelian-category,
           fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian,
           fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic,
           fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism,
           fs-every-abelian-category-is-equivalent-to-a-category-of-modules,
           fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks]
---

This page builds the image and coimage of a morphism before it ever says that
the two agree. That ordering is the point: the canonical map
$\operatorname{coim}(f)\to\operatorname{im}(f)$ is constructed first, and only
then made invertible in the definition of an abelian category.

The page then develops the standard structural consequences. The basic ones are
balancedness, normality of monomorphisms and epimorphisms, epi-mono
factorization, pullbacks of epimorphisms, the quotient and isomorphism
theorems, and the exact-functor criteria. It also records Freyd's alternative
axiomatisation, but keeps Freyd-Mitchell as a non-load-bearing remark rather
than a proof device for later pages.
