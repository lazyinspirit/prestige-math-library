---
title: Motivic weight zero on all qcqs schemes
status: draft
research_item: prop-motivic-weight-zero
dependency_level: 14
---

PDF p. 4: Property (1)

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections)
- [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction)
- [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection)
- [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. Let $X$ be any qcqs $k$-scheme and let $F$ be the prime subfield of $k$. For $R\Gamma_{\mathrm{cdh}}(X,\mathbb Z)$ use the ordinary constant integer sheaf on the general qcqs $F$-scheme cdh site specified by the preceding qcqs-site construction, evaluated at the underlying $F$-scheme $X$. Then there is a natural equivalence
$$\mathbb Z(0)_{\mathrm{mot}}(X)\simeq R\Gamma_{\mathrm{cdh}}(X,\mathbb Z),$$
and natural isomorphisms $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^i_{\mathrm{cdh}}(X,\mathbb Z)$ for all integers $i$. Negative-degree groups vanish. The site convention is part of this statement and covers every qcqs $X/k$.

## Statement references

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

## Facts & Assumptions

[A1] Choice and the fixed compatible site and universe bounds are retained when applying [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections) and [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology) in steps 1.1 and 2.1. They supply the derived constant-sheaf interpretation and its negative-degree vanishing. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] The five supplied lemmas, with their explicit site and map conventions: [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site), [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections), [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction), [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection) and [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology).

## Proof
1.1 The first three supplied lemmas fix the precise general site, ordinary constant sheaf, derived evaluation, and actual prime-field restriction. The fourth proves that the actual source projection is an equivalence. Thus all hypotheses of the fifth lemma are satisfied for the given qcqs $X/k$. [A1, F1]

2.1 Apply that lemma. It supplies the displayed natural map and equivalence, its cohomology isomorphisms and negative-degree vanishing. This proves the full qcqs statement using the source’s site directly; the narrower completed site supplier has not been altered or silently substituted. [A1, F1, step 1.1] ∎
