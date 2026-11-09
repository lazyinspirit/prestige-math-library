---
title: Essential smallness of perfect and supported categories
status: draft
research_item: lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness
dependency_level: 6
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. For every quasi-compact quasi-separated scheme X, the supplied Perf(X) is essentially small as a stable infinity-category. Every full supported subcategory Perf_T(X), for any subset T⊆X, is essentially small as well. Their already supplied idempotent completeness and stability therefore place chosen small equivalent models in Cat_perf, the infinity-category of small idempotent-complete stable infinity-categories and exact functors.

## Facts & Assumptions
**Given:** qcqs X, subset T, AC and fixed universes.

**Goal:** Justify the small domain needed for nonconnective K-theory.

[F1] [thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input) gives one perfect classical generator P of the ordinary perfect derived category.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) supplies the exact full stable idempotent-complete enhancements. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) makes ambient mapping spaces small relative to the chosen universe.

## Proof
1.1 Begin with P and all its integer shifts. Given a set of object representatives, form representatives of their finite sums and of cones of all maps between them; there is a set of these maps because ambient Hom sets are small. Also add images of their idempotent endomorphisms. There is a set of such idempotents and a splitting image is unique up to isomorphism. Iterating these finite constructions countably many times still gives a set of isomorphism classes. [F1, F2, construct]

2.1 By the classical-generator assertion [F1], every ordinary perfect object is isomorphic to one constructed in step 1.1. An isomorphism in the homotopy category is an equivalence of objects in the enhanced category, so the same set represents all objects of Perf(X) up to enhanced equivalence. Its full enhanced subcategory has small mapping spaces by [F2], hence is a small equivalent model. This argument uses the classical generator only for object enumeration and makes no inference of enhanced coherence from a triangulated equivalence. [F1, F2, step 1.1]

3.1 Support is invariant under equivalence by [F2], so the subset of these representatives satisfying the support condition represents Perf_T(X). This full subcategory is also essentially small. Stability and idempotent completeness are already supplied by [F2], and are preserved by equivalence to a small model. This proves the Statement. [F2, step 2.1] ∎
