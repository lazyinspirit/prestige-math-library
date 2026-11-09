---
title: First-class matching and explicit perfect Chern arithmetic
status: published
research_item: lem-author-3cde9692a7e9-first-class-and-coefficients
dependency_level: 24
---

PDF p. 11: Lemma5.3, second Chern additivity

## Prerequisites

- [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan)
- [lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection](item-lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection)
- [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input)
- [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input)
- [def-total-chern-class](item-def-total-chern-class)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. The first operation $C_1$ of the specified actual universal perfect Chern construction induces exactly the completed perfect first class $c_1^{\rm perf}$ on $K_0(X)=\pi_0K_{\rm Perf}(X)$. The total operations satisfy Cartan in this qcqs scope. Their second coefficient therefore satisfies, for all perfect classes $x,y\in K_0(X)$,
$$c_2(x+y)=c_2(x)+c_1^{\rm perf}(x)c_1^{\rm perf}(y)+c_2(y).$$
It also satisfies $c_2(-y)=(c_1^{\rm perf}(y))^2-c_2(y)$. If the first classes of $x,y$ agree, then $c_2(x-y)=c_2(x)-c_2(y)$. The total operations restrict to the existing virtual bundle series under the canonical map $K^0_{\rm vb}(X)\to K_0(X)$, without presuming surjectivity. In particular every assertion applies on normal qcqs schemes in the original article's scope, with no noetherian, finite-type or dimension restriction. Here $K^0_{\rm vb}(X)$ is the group on finite locally free bundles modulo exact-sequence relations, and the $i$th coefficient lies in $H^{2i,i}_{\rm mot}(X,\mathbb Z)$.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site-size and universe bounds in the Statement. They are inherited through the actual qcqs comparisons and Chern construction in [F1]–[F2] at step 1.1 and their consequences at steps 2.1–3.1. The formal finite-coefficient algebra adds no additional choice assumption.

[F1] [lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan](item-lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan) supplies the actual coefficientwise Cartan identities and the induced total-series homomorphism on every qcqs field-scheme. [lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection](item-lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection) supplies detection from the actual local free-class arrow and passage to global perfect K-spaces through the canonical unit.

[F2] [lem-author-ec13f1db88a5-global-picard-projection](item-lem-author-ec13f1db88a5-global-picard-projection) and [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) identify the actual rank-zero first-layer map with the extended perfect determinant/Picard stack map, retaining line-frame-torsor descent and true/enhanced cofiber coherence. [prop-first-chern-determinant](item-prop-first-chern-determinant) identifies the completed perfect first class on every qcqs field-scheme with this determinant followed by the original EM orientation, and agrees with the actual bundle first class. [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input) supplies universal-class detection and fixed-weight stabilization, including mapping homotopy degrees zero and one, over every qcqs base.

[F3] [def-total-chern-class](item-def-total-chern-class) and [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) supply the existing virtual bundle normalization and the formal multiplication/inversion formulas. Only the formal-series arithmetic is needed here; arbitrary perfect classes need not be globally bundle-representable.

## Proof
**Given:** $k,X$, the specified actual perfect operations and classes, Choice and the compatible site and universe bounds in the Statement.

**Goal:** Match the actual first operation globally in qcqs scope before using it in the Cartan cross term.

1.1 Compare $C_1$ with the extended determinant followed by the actual EM Picard orientation of [F2], as maps on the same local perfect K-space. On a finite Grassmannian over $X$, their restrictions to the universal quotient bundle agree by the actual-bundle comparison in [F2]; that Grassmannian is qcqs over $k$. The determinant map here is the already supplied stack map with its automorphism and gluing data. Universal-class detection and fixed-weight stabilization in [F2], applied at weight one, identify the two stable $BGL$ maps, without an inverse-limit ambiguity. Both maps are zero on trivial-rank classes, so their pullbacks along the entire free-class arrow agree. The qcqs detection in [F1] identifies the maps on the local model; its canonical perfect-space unit then gives equality on every global perfect class. By the completed determinant factorization in [F2], this is exactly $c_1^{\rm perf}$. This comparison never uses equality of affine Picard groups to infer equality of global maps. [A1, F1, F2]

2.1 Compare coefficients of $t^2$ in the actual total Cartan identity of [F1], using step 1.1 for its first coefficient. This gives the stated formula for $c_2(x+y)$. The formal inverse identity of [F3] applies to the same total-series homomorphism and gives $c_2(-y)=c_1^{\rm perf}(y)^2-c_2(y)$. Multiplication for $x-y$ therefore gives $c_2(x-y)=c_2(x)-c_1^{\rm perf}(x)c_1^{\rm perf}(y)+c_1^{\rm perf}(y)^2-c_2(y)$. If the first classes agree, the two quadratic terms cancel. [A1, F1, F3, step 1.1]

3.1 On every actual bundle the specified universal operation is its original projective-relation class, as retained by [F1]. Therefore the total homomorphism on perfect $K_0$ and the virtual bundle homomorphism of [F3], composed with the canonical bundle-to-perfect homomorphism, agree on all bundle generators. They agree on the entire bundle presentation and its image. This proves every asserted restriction and arithmetic formula on the stated qcqs schemes, including normal ones, without assuming that image is all of perfect $K_0$. [A1, F1, F3, step 1.1, step 2.1] ∎

## Scope and reading limits
The original arXiv:2610.22679v1 conventions on PDF p. 3, Proposition 3.2 and proof on p. 8, and Lemma 5.3 and proof on p. 11 were read in the supplied primary PDF text. Its normal-qcqs scope is retained. The present repair concerns the generated argument's formerly narrower local-comparison and Cartan suppliers. It does not dismiss any retained original/source finding about bundle-difference representatives or finite dimension.

All current suppliers named above were read for these applications; the generic chain-detection statement and full affine/sheaf-model comparison were also inspected. The two new qcqs helpers record exact source versions and this assignment's primary-source reading limits. The determinant and weight-one literature is used through its current precise supplied contracts; its deep source proofs were not freshly reconstructed. The sole existing direct consumer, the normal affine surface classification theorem, was read in full: its finite-type surface satisfies the clarified qcqs hypotheses and it uses exactly the retained bundle restriction and equal-first-class difference formula. Its body and public interface require no change, so no further consumer propagation is needed from this repair. All content remains draft, with central rendering, native maintenance and independent rejudgment pending.
