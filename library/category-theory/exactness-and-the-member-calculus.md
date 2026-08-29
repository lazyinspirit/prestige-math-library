---
page: exactness-and-the-member-calculus
title: "Exactness and the Member Calculus"
status: draft
items: [thm-the-subobject-inequalities-underlying-exactness,
        def-exactness-at-a-node,
        thm-the-arrow-theoretic-criterion-for-exactness,
        def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
        thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,
        thm-degenerate-exactness-criteria,
        thm-exactness-is-self-dual,
        def-split-short-exact-sequence-in-an-abelian-category,
        thm-splitting-lemma-in-an-abelian-category,
        def-member-of-an-object,
        def-equivalence-of-members,
        prop-member-equivalence-is-reflexive-and-symmetric,
        thm-member-equivalence-is-transitive,
        thm-members-modulo-equivalence-correspond-to-subobjects,
        prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
        prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
        thm-chasing-rule-monicity-detected-by-members,
        thm-chasing-rule-monicity-by-member-cancellation,
        thm-chasing-rule-epimorphy-detected-by-members,
        thm-chasing-rule-a-zero-arrow-is-detected-by-members,
        thm-chasing-rule-exactness-detected-by-members,
        thm-chasing-rule-the-subtraction-surrogate,
        rem-what-the-subtraction-rule-does-not-say,
        rem-the-cost-of-the-member-calculus,
        thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
        thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs,
        thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian,
        thm-epimorphisms-in-an-abelian-category-are-universal,
        thm-the-covering-criterion-for-exactness,
        rem-the-covering-criterion-and-the-member-calculus-are-the-same-tool,
        thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
        thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
        thm-the-kernel-cokernel-sequence-of-a-composite,
        def-comember-and-the-dual-calculus,
        rem-two-routes-to-every-dual-statement,
        thm-hom-is-left-exact-in-each-variable,
        cex-hom-is-not-exact,
        thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact,
        thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]
examples: [fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two,
           cex-the-members-of-an-object-do-not-form-a-group,
           cex-two-morphisms-agreeing-on-every-member-need-not-be-equal,
           cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact,
           fs-two-morphisms-that-agree-on-every-member-are-equal,
           fs-the-members-of-an-object-form-an-abelian-group,
           fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks,
           fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact,
           fs-the-subtraction-rule-produces-a-unique-member,
           fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]
---

This page is the arrow-theoretic bridge between abstract abelian-category
structure and the diagram chases that follow. It first pins down exactness as a
precise comparison of image and kernel subobjects, then packages the same data
into the member calculus and the covering criterion, and finally records the
kernel/cokernel exactness lemmas and Hom exactness facts that later diagram
lemmas spend directly.

The page also keeps its own guard rails visible. Members are weaker than
elements, the subtraction rule is weaker than actual subtraction, and short
exactness depends on compatible structure rather than an abstract isomorphism of
the middle object.
