---
title: Whitney identities and virtual Chern arithmetic
status: published
research_item: prop-chern-whitney-identities
dependency_level: 20
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney)
- [lem-author-32887006bdff-virtual-independence](item-lem-author-32887006bdff-virtual-independence)
- [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be any field. For every qcqs $X/k$ and exact sequence $0\to V^{\prime}\to V\to V^{\prime\prime}\to0$ of finite locally free sheaves, $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. In particular $c_t(V\oplus W)=c_t(V)c_t(W)$, $c_1(V\oplus W)=c_1(V)+c_1(W)$ and $c_2(V\oplus W)=c_2(V)+c_1(V)c_1(W)+c_2(W)$. A line has no higher classes, $c_1(L\otimes M)=c_1(L)+c_1(M)$, and on a flag filtration all coefficients are elementary symmetric polynomials in its line roots. The resulting representative-independent virtual series satisfy $c_t(-W)=1-c_1(W)t+(c_1(W)^2-c_2(W))t^2+(-c_1(W)^3+2c_1(W)c_2(W)-c_3(W))t^3+\cdots$. These statements concern $K^0_{\rm vb}$; only the completed affine comparison or locally Noetherian vector-bundle $K^0$ convention may be used for further group identifications.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of the supplied actual and virtual constructions [F1] and of the line comparison [F2] in steps 1.1–3.1.

[F1] [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney) supplies actual Whitney/filtered roots; [lem-author-32887006bdff-virtual-independence](item-lem-author-32887006bdff-virtual-independence) extends to varying ranks and to the presented virtual group without using this proposition or the same-wave total-class definition.

[F2] [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison), applied with $S=Y=X$ under [A1], supplies line normalization and the actual additive orientation on every qcqs $X/k$. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) supplies the formal product/inverse arithmetic.

## Proof
**Given:** A field $k$, qcqs $X/k$, the stated bundles/filtrations/classes, and [A1].

**Goal:** Prove all actual and virtual formulas in their actual dependency order.

1.1 Apply [F1] first to actual bundles. The split sequence gives the direct-sum identity. The filtered formula identifies its coefficients with elementary symmetric polynomials in the actual line first classes. Varying ranks use the finite-clopen interpretation of [F1]. [A1, F1]

2.1 Compare coefficients of $t$ and $t^2$ in the direct-sum polynomial, using commutativity of the even-degree coefficient ring, to obtain the two displayed formulas. The line assertions follow from [F2]; they use the original EM Picard map. [A1, F2, step 1.1]

3.1 Only now use the virtual extension in [F1], which has already killed every exact-sequence relation. Its value at $-[W]$ is the inverse of its actual value at $W$. Apply the recursive inverse formula of [F2] to get the displayed expansion through degree3 and its continuation as a formal series. No coefficientwise additivity of higher classes is inferred. [A1, F1, F2, step 1.1, step 2.1] ∎
