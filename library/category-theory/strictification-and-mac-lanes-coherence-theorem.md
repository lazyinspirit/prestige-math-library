---
page: strictification-and-mac-lanes-coherence-theorem
title: "Strictification and Mac Lanes Coherence Theorem"
status: published
items: [def-canonical-morphism-between-parenthesised-words,
        rem-every-diagram-commutes-is-false-as-stated,
        def-the-category-of-binary-words,
        thm-the-category-of-binary-words-is-monoidal,
        def-the-category-of-right-module-endofunctors,
        thm-the-module-endofunctor-category-is-strict-monoidal,
        thm-mac-lane-strictification,
        rem-strictification-gives-equivalence-and-never-isomorphism,
        thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence,
        rem-the-choice-cost-of-strictification,
        thm-mac-lane-coherence-in-the-canonical-map-form,
        rem-the-exact-scope-of-the-coherence-statement,
        thm-unbracketed-tensor-strings-are-well-defined-expressions,
        thm-the-monoid-object-axioms-may-be-written-without-associators,
        thm-the-word-category-is-the-free-monoidal-category-on-one-generator,
        cor-coherence-follows-from-freeness,
        rem-the-history-of-the-coherence-theorem]
examples: [fs-every-diagram-in-a-monoidal-category-commutes,
           fs-every-monoidal-category-is-isomorphic-to-a-strict-one,
           fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one,
           fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal,
           fs-strictification-requires-the-axiom-of-choice]
---

This page fixes the coherence theorem in its canonical-map form and proves it by
the strictification route. The free word category is still recorded, but it is a
reformulation after the strictification argument rather than the proof engine.

The scope boundary is sharp. Coherence compares only canonical morphisms built
from associators and unitors between parenthesisations of one ordered tensor
string. It does not say that arbitrary diagrams commute, it does not identify
equivalence with isomorphism, and it does not fold skeletal replacement into
strictification.
