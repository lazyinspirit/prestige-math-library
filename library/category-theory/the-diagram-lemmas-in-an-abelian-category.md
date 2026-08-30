---
page: the-diagram-lemmas-in-an-abelian-category
title: "The Diagram Lemmas in an Abelian Category"
status: draft
items: [thm-short-five-lemma-in-an-abelian-category,
        cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible,
        thm-short-five-lemma-by-pullback-without-members,
        def-snake-data,
        thm-the-connecting-morphism-exists-and-is-unique,
        rem-the-connecting-morphism-depends-on-no-choices,
        thm-snake-lemma-in-an-abelian-category,
        thm-snake-lemma-under-the-weaker-stacks-hypotheses,
        def-the-arrow-category-of-an-abelian-category,
        thm-naturality-of-the-connecting-morphism,
        cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake,
        thm-four-lemma-in-an-abelian-category,
        thm-weak-four-lemma-with-the-exactness-hypotheses-named,
        rem-the-two-halves-of-the-four-lemma-are-mutually-dual,
        thm-sharp-five-lemma-in-an-abelian-category,
        thm-five-lemma-in-an-abelian-category,
        rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle,
        lem-half-nine-lemma,
        thm-nine-lemma-in-an-abelian-category,
        thm-nine-lemma-variants-by-which-rows-are-assumed-exact,
        rem-why-the-middle-nine-lemma-needs-a-zero-composite,
        thm-sharp-nine-lemma,
        thm-symmetric-nine-lemma,
        thm-the-nine-lemma-follows-from-the-snake-lemma,
        thm-the-splitting-lemma-follows-from-the-nine-lemma,
        thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma,
        thm-the-pullback-and-pushout-theorems,
        thm-the-diagram-lemmas-hold-in-the-opposite-category,
        thm-an-exact-functor-transports-every-diagram-lemma,
        thm-five-lemma-for-a-morphism-of-long-exact-sequences]
examples: [fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction,
           fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic,
           fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero,
           fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows,
           fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem]
---

This page packages the standard diagram lemmas in the order that actually
drives later proofs: first the short five lemma, then the snake lemma and its
connecting morphism, and only afterwards the four, five, and nine lemmas that
are built on top of that exact-sequence machinery.

Two proof routes are kept visible on purpose. The opening short five lemma is
proved once with the member calculus and once without it, while the connecting
morphism itself is constructed arrow-theoretically from pullbacks, pushouts,
and universal properties. That is the point of the page: members are useful,
but the underlying arguments live entirely inside an arbitrary abelian
category.
