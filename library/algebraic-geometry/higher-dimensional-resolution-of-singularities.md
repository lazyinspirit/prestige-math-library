---
page: higher-dimensional-resolution-of-singularities
title: "Higher-Dimensional Resolution of Singularities"
status: draft
requires: [birational-morphisms-contractions-and-surface-singularities,
           galois-orbits-and-descent-of-simple-finite-group-modules]
items: [def-order-of-an-ideal-sheaf-at-a-point,
        def-simple-normal-crossings-divisors,
        lem-etale-formal-local-isomorphism,
        lem-etale-morphism-extends-to-ambient-neighbourhoods,
        rem-resolution-of-singularities-conventions,
        lem-order-and-snc-under-smooth-morphisms,
        def-marked-ideal,
        def-multiple-test-blowup-and-controlled-transform,
        def-ideal-of-derivatives,
        def-equivalence-of-marked-ideals,
        lem-controlled-transform-is-well-defined,
        lem-derivative-ideals-have-the-same-support,
        lem-derivative-ideals-under-etale-morphisms,
        lem-restriction-of-marked-ideal-to-a-smooth-subvariety,
        lem-derivatives-under-field-isomorphisms,
        def-maximal-order-and-tangent-directions,
        lem-addition-and-multiplication-of-marked-ideals,
        def-canonical-resolution-invariants,
        lem-smooth-pullback-of-multiple-test-blowups,
        lem-derivatives-commute-with-controlled-transform,
        lem-equivalence-of-powers-of-a-marked-ideal,
        def-homogenized-ideal,
        def-coefficient-ideal,
        def-companion-ideal-and-monomial-part,
        lem-order-semicontinuity-and-snc-strata,
        lem-derivatives-of-maximal-order-ideals,
        lem-derivatives-of-a-multiple-test-blowup,
        lem-maximal-order-preserved-by-controlled-transform,
        lem-homogenized-ideal-properties,
        lem-homogenized-ideal-under-smooth-morphisms,
        lem-completion-automorphisms-for-tangent-directions,
        lem-coefficient-ideal-under-smooth-morphisms,
        lem-giraud-tangent-directions-and-controlled-transforms,
        lem-coefficient-ideal-is-equivalent,
        lem-homogenized-ideal-is-equivalent,
        lem-tangent-direction-contains-the-support,
        lem-coefficient-ideal-restriction-support,
        lem-codimension-one-maximal-order-components,
        lem-glueing-homogenized-ideals,
        lem-coefficient-ideal-disjoint-centres,
        lem-refined-giraud-maximal-contact,
        prop-canonical-resolution-of-marked-ideals,
        lem-etale-commutativity-of-maximal-order-case,
        lem-canonical-resolution-commutes-with-ambient-embeddings,
        lem-canonical-resolution-under-field-isomorphisms,
        lem-etale-commutativity-of-companion-step,
        lem-canonical-resolution-commutes-with-smooth-morphisms,
        lem-canonical-resolution-over-nonclosed-fields,
        thm-principalization-of-ideals,
        thm-weak-embedded-desingularization,
        thm-bravo-villamayor-full-transform,
        lem-embedding-independence-of-desingularization,
        lem-open-restriction-of-desingularization,
        thm-resolution-of-singularities-in-characteristic-zero,
        lem-resolution-is-functorial-under-smooth-maps,
        rem-positive-characteristic-resolution-status]
examples: []
---

This page develops the characteristic-zero resolution of singularities after
Hironaka in the form given by Włodarczyk's marked-ideal algorithm, over
[[rem-resolution-of-singularities-conventions]]. The construction is carried
out for marked ideals $ (\mathcal I,E,\mu) $, whose order function
[[def-order-of-an-ideal-sheaf-at-a-point]] and simultaneous normal-crossings
divisors [[def-simple-normal-crossings-divisors]] provide the geometry of the
supports. Multiple test blow-ups, their controlled transforms and the
equivalence relation on marked ideals are set up in
[[def-multiple-test-blowup-and-controlled-transform]] and
[[def-equivalence-of-marked-ideals]], with the well-definedness of the
transform calculus in [[lem-controlled-transform-is-well-defined]].

The core of the page is the calculus of derivative ideals
[[def-ideal-of-derivatives]], maximal order and tangent directions
[[def-maximal-order-and-tangent-directions]], homogenized ideals
[[def-homogenized-ideal]] and coefficient ideals [[def-coefficient-ideal]],
together with the glueing lemma [[lem-glueing-homogenized-ideals]] that makes
the choice of a hypersurface of maximal contact irrelevant. These tools feed
the canonical resolution of marked ideals,
[[prop-canonical-resolution-of-marked-ideals]], the engine of the subject.

From the engine the page derives the main theorems in their classical form:
principalization of ideals [[thm-principalization-of-ideals]], weak embedded
desingularization [[thm-weak-embedded-desingularization]] with the
Bravo–Villamayor full-transform strengthening
[[thm-bravo-villamayor-full-transform]], embedding independence
[[lem-embedding-independence-of-desingularization]], open restriction
[[lem-open-restriction-of-desingularization]], and resolution of singularities
in characteristic zero
[[thm-resolution-of-singularities-in-characteristic-zero]] with its
functoriality under smooth morphisms
[[lem-resolution-is-functorial-under-smooth-maps]]. The positive-characteristic
boundary is recorded, not proved, in
[[rem-positive-characteristic-resolution-status]]. The worked blowup
computations of the companion page illustrate the theory on the quadric cone
([[higher-dimensional-resolution-of-singularities-examples]]).
