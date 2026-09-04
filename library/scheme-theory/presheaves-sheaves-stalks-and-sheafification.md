---
page: presheaves-sheaves-stalks-and-sheafification
title: "Presheaves Sheaves Stalks and Sheafification"
status: draft
items: [def-open-set-category-topological-space,
        def-presheaf-on-topological-space,
        def-section-restriction-and-global-section,
        def-morphism-of-presheaves,
        def-separated-presheaf,
        def-sheaf-on-topological-space,
        lem-sheaf-section-over-empty-set-terminal,
        thm-sheaf-equalizer-condition,
        lem-sheaf-condition-check-on-basis,
        def-presheaf-of-groups-rings-modules,
        lem-forgetful-sheaf-compatibility,
        def-stalk-of-presheaf,
        lem-germ-equivalence-relation,
        def-germ-of-section,
        lem-section-zero-if-all-germs-zero,
        lem-morphisms-of-sheaves-determined-by-stalks,
        thm-sheaf-morphism-isomorphism-stalkwise,
        def-etale-space-of-sheaf-of-sets,
        thm-sheaves-as-local-homeomorphisms,
        def-presheaf-plus-construction,
        lem-first-plus-construction-is-separated,
        lem-second-plus-construction-is-sheaf,
        def-sheafification,
        thm-sheafification-universal-property,
        thm-sheafification-preserves-stalks,
        cor-sheafification-idempotent,
        def-subsheaf,
        lem-image-sheaf-is-sheafification-presheaf-image,
        rem-sections-not-determined-by-single-stalk]
examples: []
---

This page fixes the standard sheaf vocabulary on a topological space and keeps
the route deliberately concrete. Opens form the indexing category, presheaves
and sheaves are written in restriction notation, stalks are built from actual
neighbourhood sections, and the first local tests are phrased in germs.

The second half keeps sheafification explicit rather than hiding it behind an
abstract adjoint. The plus construction separates uniqueness from existence,
double-plus gives the sheaf, stalks survive unchanged, and the universal
property explains why image presheaves have to be sheafified before they become
image sheaves.
