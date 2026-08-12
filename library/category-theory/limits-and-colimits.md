---
page: limits-and-colimits
title: "Limits and Colimits"
status: draft
items: [def-constant-diagram-cone-cocone-and-cone-morphism,
        def-limit-and-colimit-of-a-diagram,
        thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism,
        prop-limit-colimit-duality,
        prop-empty-limits-and-colimits-are-terminal-and-initial-objects,
        def-products-and-coproducts,
        def-equalizers-and-coequalizers,
        def-pullbacks-and-pushouts,
        def-kernels-and-cokernels-as-equalizers-and-coequalizers,
        lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic,
        cor-equalizers-are-monic-and-coequalizers-are-epic,
        lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms,
        thm-pullback-and-pushout-pasting,
        def-cardinality-of-a-small-category-and-kappa-small-diagram,
        def-small-finite-and-large-limits-completeness-and-cocompleteness,
        lem-identity-diagram-large-limit-and-initial-objects,
        thm-set-has-all-small-limits,
        thm-set-has-all-small-colimits,
        thm-small-limits-from-products-and-equalizers,
        thm-small-colimits-from-coproducts-and-coequalizers,
        cor-completeness-and-cocompleteness-criteria,
        thm-finite-limit-and-colimit-criteria,
        def-preservation-reflection-creation-continuity-and-cocontinuity,
        lem-canonical-comparison-characterises-limit-preservation,
        prop-fully-faithful-functors-reflect-limits-and-colimits,
        prop-equivalences-preserve-reflect-and-create-limits-and-colimits,
        prop-created-limits-exist-and-are-preserved,
        thm-chosen-limits-and-colimits-assemble-into-functors,
        rem-choice-behind-limit-and-colimit-functors,
        thm-representable-functors-preserve-small-limits,
        cor-hom-functors-are-continuous-and-send-colimits-to-limits,
        thm-limits-and-colimits-in-functor-categories-are-computed-pointwise,
        cor-functor-categories-inherit-completeness-and-cocompleteness,
        cor-yoneda-preserves-and-reflects-small-limits,
        thm-small-limits-commute-with-small-limits,
        def-filtered-category-and-filtered-colimit,
        lem-equality-in-a-filtered-colimit-of-sets-is-eventual,
        thm-filtered-colimits-commute-with-finite-limits-in-set,
        def-final-and-initial-functors,
        thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits,
        thm-grp-is-complete-and-cocomplete,
        thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both,
        thm-rmod-is-complete-and-cocomplete,
        prop-completeness-and-cocompleteness-in-poset-categories,
        thm-cardinality-sized-products-or-coproducts-force-a-preorder,
        cor-small-complete-or-cocomplete-categories-are-preorders]
examples: []
---

Categories, functors, natural transformations, opposite categories, universal objects, representable functors, and the Yoneda lemma supply the language for specifying an object through all morphisms to or from it. Cardinal arithmetic fixes the size convention: an indexing category is small when its objects and morphisms form sets, while completeness and cocompleteness quantify over all such small diagrams. Under Choice, the cardinality of a small category is the cardinality of its morphism set; this separates ordinary completeness from the exceptional existence of a particular large limit.

A cone records a compatible family of arrows into a diagram, and a limit is the cone through which every other cone factors in exactly one way; colimits are the exact formal dual. Products, equalizers, pullbacks, terminal objects, and their duals arise as special shapes. Small limits are constructed from products and equalizers, representable functors preserve them, and functor-category limits are computed pointwise. Preservation, reflection, creation, filtered colimits, final functors, and the size obstruction for small complete categories describe how these universal constructions behave under functors, iteration, and changes of index.
