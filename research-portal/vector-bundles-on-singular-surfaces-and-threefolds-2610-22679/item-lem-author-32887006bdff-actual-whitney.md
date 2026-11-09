---
title: Actual exact-sequence Whitney and filtered-root formula on singular qcqs
  schemes
status: draft
research_item: lem-author-32887006bdff-actual-whitney
dependency_level: 18
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison)
- [thm-author-32887006bdff-non-a1-whitney-input](item-thm-author-32887006bdff-non-a1-whitney-input)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $X$ be any qcqs $k$-scheme over a field, and let $0\to V^{\prime}\to V\to V^{\prime\prime}\to0$ be an exact sequence of constant-rank finite locally free sheaves. Then $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. If $V$ has a filtration by subbundles with line quotients $L_s$, then $c_t(V)=\prod_s(1+c_1(L_s)t)$. These refer to the supplied projective-relation classes, not to an assumed Chern polynomial of a K-zero equality.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of the supplied model, orientation and Chern-class constructions in [F2] when they are applied in steps 1.1–3.1. The finite exact-sequence and filtration deductions introduce no additional choice requirement.

[F1] [thm-author-32887006bdff-non-a1-whitney-input](item-thm-author-32887006bdff-non-a1-whitney-input) supplies Lemma4.4.3(ii)–(iii) for a homotopy-commutative linearly oriented non-A¹ motivic ring spectrum with PBF over any qcqs derived base $S$, evaluated on $Y\in\mathrm{Sm}_S$.

[F2] For a field $k$, qcqs $k$-base $S$ and smooth qcqs $Y/S$, under [A1], [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) supplies the actual homotopy-commutative non-A¹ motivic ring spectrum and its product-preserving diagonal identifications. [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supplies its linear orientation and actual class-power projective-bundle formula. [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison) identifies the resulting projective-relation classes with the supplied motivic Chern classes. The rank-zero series $1$ and zero coefficients above rank are explicit local extensions of the positive-rank source definition, also prescribed by [def-motivic-chern-classes](item-def-motivic-chern-classes).

## Proof
**Given:** A field $k$, qcqs $X/k$, the exact sequence or filtration as stated, and [A1].

**Goal:** Apply the full source theorem within its real hypotheses.

1.1 Take the source base to be $S=X$, regarded as a classical derived scheme, and take $Y=X$ with the identity smooth map. Smooth derived schemes over a classical base are classical, so the EM restriction used in the model is defined on this smooth site. No assertion that $X$ is smooth over $k$ is needed. The comparison applies because $S=X$ is qcqs over $k$ and $Y=X$ is smooth qcqs over $S$. The model supplier in [F2] gives the homotopy-commutative motivic ring spectrum, and its orientation supplier gives the linear orientation and actual PBF. These are precisely the hypotheses needed to apply [F1]; the separate relation comparison in [F2] then identifies its Chern coefficients with the supplied classes. [A1, F1, F2, construct]

2.1 If either outer bundle has rank zero, it is the zero sheaf, and exactness identifies the middle bundle with the other outer bundle. Whitney then follows directly from $c_t(0)=1$ in [F2]. Otherwise all three ranks are positive. The sequence is locally split since its quotient is locally free, so its sheaf-complex triangle is a fiber sequence of vector bundles as required by [F1]. Apply part (iii) and transport the equality through [F2]. This proves Whitney in every stated rank. [A1, F1, F2, step 1.1]

3.1 For a nonempty line-quotient filtration apply part (ii) of [F1] and transport through [F2] to obtain the displayed root factorization. For the empty filtration the bundle is zero, and the empty product and its locally prescribed Chern series are both $1$. The substantial geometric splitting argument remains supplied by [F1]. This proves the filtered formula with the same rank-zero convention as in step 2.1. [A1, F1, F2, step 1.1, step 2.1] ∎
