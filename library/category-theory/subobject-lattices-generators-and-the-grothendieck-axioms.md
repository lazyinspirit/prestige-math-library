---
page: subobject-lattices-generators-and-the-grothendieck-axioms
title: "Subobject Lattices Generators and the Grothendieck Axioms"
status: draft
items: [def-modular-lattice,
        def-the-join-of-subobjects-in-an-abelian-category,
        thm-the-join-of-subobjects-is-their-least-upper-bound,
        thm-the-meet-of-subobjects-is-their-pullback,
        thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice,
        thm-the-subobject-lattice-of-an-abelian-category-is-modular,
        rem-the-published-modular-law-for-subgroups-is-the-instance,
        thm-second-isomorphism-theorem-in-an-abelian-category,
        def-the-direct-image-and-inverse-image-of-a-subobject,
        thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection,
        cor-inverse-image-preserves-meets-and-direct-image-preserves-joins,
        cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism,
        def-simple-object,
        def-composition-series-and-composition-factors-of-an-object,
        thm-zassenhaus-butterfly-lemma-in-an-abelian-category,
        thm-schreier-refinement-theorem-in-an-abelian-category,
        thm-jordan-holder-theorem-in-an-abelian-category,
        def-object-of-finite-length,
        thm-length-is-additive-along-a-subobject,
        thm-objects-of-finite-length-form-an-abelian-subcategory,
        rem-the-published-group-development-is-the-instance,
        def-generator-and-cogenerator-of-a-category,
        def-the-axioms-ab3-and-ab3-star,
        thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree,
        thm-a-locally-small-abelian-category-with-a-generator-is-well-powered,
        rem-generator-separator-and-the-three-inequivalent-looking-definitions,
        cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied,
        thm-a-generator-detects-equality-of-subobjects,
        def-the-axioms-ab4-and-ab4-star,
        def-the-axioms-ab5-and-ab5-star,
        thm-ab5-implies-ab4,
        def-grothendieck-category,
        thm-module-categories-are-grothendieck-categories,
        thm-abelian-groups-satisfy-ab4-star,
        thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star,
        def-projective-object,
        thm-projective-object-characterisations,
        def-injective-object,
        thm-injective-object-characterisations,
        thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective,
        thm-a-direct-summand-of-a-projective-is-projective,
        def-a-category-with-enough-projectives-and-with-enough-injectives,
        thm-module-categories-have-enough-projectives,
        rem-module-categories-have-enough-injectives-is-already-published,
        thm-a-projective-generator-detects-isomorphisms]
examples: [cex-a-subobject-lattice-need-not-be-distributive,
           cex-abelian-groups-do-not-satisfy-ab5-star,
           cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5,
           fs-the-subobject-lattice-of-an-abelian-category-is-distributive,
           fs-every-abelian-category-has-a-generator,
           fs-every-object-of-an-abelian-category-has-a-composition-series,
           fs-ab4-implies-ab5,
           fs-a-generator-is-the-same-thing-as-a-projective-generator,
           fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category]
---

This page is where the abelian-category block starts behaving like homological
algebra rather than like category-theoretic infrastructure. Subobjects become a
modular lattice, quotient calculus turns that lattice into the second
isomorphism theorem and the butterfly/Jordan-Holder spine, and generators turn
size questions from `MA-2` into concrete hypotheses one can actually verify.

The Grothendieck axioms are stated here in their primitive lattice form, on
purpose. Exact filtered colimits and their duals are later reformulations, not
the starting point. The page also keeps the projective/injective interface as
lean as possible: enough projectives for module categories is established now,
while the deeper enough-injectives theorem for general Grothendieck categories is
left to later work.
