---
title: Apply the actual perfect Cartan identity to the second image
status: published
research_item: lem-author-3cde9692a7e9-second-subgroup
dependency_level: 28
---

PDF p. 11: Lemma5.3, second Chern additivity

## Prerequisites

- [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan)
- [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)
- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-author-3cde9692a7e9-first-class-and-coefficients](item-lem-author-3cde9692a7e9-first-class-and-coefficients)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice and fix the site and universe bounds of the supplied perfect K-theory, motivic filtration and Chern-operation constructions. Let $k$ be algebraically closed and let $X$ be a normal quasi-compact quasi-separated (qcqs) $k$-scheme. The actual second motivic Chern operation restricts to a group homomorphism
$$c_2:H=F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z).$$
In particular $c_2(0)=0$ and $c_2(-x)=-c_2(x)$ for $x\in H$. Whenever $[V]-[W]\in H$ for vector bundles $V,W$ on $X$, one has $c_2([V]-[W])=c_2(V)-c_2(W)$, with their original bundle Chern coefficients.

Here $K_0(X)$ is the zeroth homotopy group of nonconnective K-theory of perfect complexes, and $H$ is the image of the second filtration stage in that group. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves; a vector bundle is a finite locally free sheaf. Normality means that every local ring is an integrally closed domain. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of affine opens are quasi-compact. No finite-type, noetherian, dimension or global bundle-representation hypothesis is required.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible site and universe bounds of the supplied constructions. The universes satisfy [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with $\omega$ in the scheme-data universe; their existence is a separate premise from Choice. These inherited assumptions are used when invoking the perfect-category, motivic and Chern suppliers in steps 1.1–4.1. Choosing a lift of one image element is not itself an arbitrary-index choice argument.

[F0] Algebraically closed has the field meaning of [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). A $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$, as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Normality and qcqs have the inline meanings in the Statement. A finite locally free sheaf is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^r$ for a finite integer $r\geq0$, with $r$ allowed to vary between open sets. The specified nonconnective perfect spectrum and $K_0(X)=\pi_0K(X)$ are those of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface); addition is induced by direct sum. In the conclusion, group homomorphism means preservation of this addition and the target addition.

[F1] [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan) supplies coefficientwise Cartan for the actual perfect operations on every qcqs field-scheme through degree three, with zero normalization and formal inversion. Write $C_1$ for its first operation; its second operation is the specified $c_2$. All products below are the actual motivic cup products in these identities.

[F2] [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant) supplies rank zero and $c_1^{\mathrm{perf}}(x)=0$ for every $x\in H$ in precisely this normal qcqs scope. [def-motivic-filtration](item-def-motivic-filtration) defines $H=\operatorname{im}(\pi_0F^2_{\mathrm{mot}}K(X)\to K_0(X))$ as an additive subgroup.

[F3] [lem-author-3cde9692a7e9-first-class-and-coefficients](item-lem-author-3cde9692a7e9-first-class-and-coefficients) states directly that the first operation $C_1$ of this actual universal perfect Chern construction is $c_1^{\mathrm{perf}}$ on every perfect $K_0$ class of every qcqs field-scheme. It also supplies restriction of the operations to the original virtual bundle series under the canonical bundle-to-perfect map. Here $[V]$ means the class of the degree-zero perfect object $V$ under that map. [prop-first-chern-determinant](item-prop-first-chern-determinant) supplies additivity of $c_1^{\mathrm{perf}}$ and agreement with the original bundle first classes through its natural determinant factorization. The direct all-perfect comparison is the input used here; no equality of derived maps is inferred merely from agreement of bundle classes.

[F4] [def-motivic-cohomology](item-def-motivic-cohomology) fixes the actual integral coefficient groups $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)=H^a(\mathbb Z(b)_{\mathrm{mot}}(X))$ for $b\geq0$. In particular the first and second operations take values in the abelian groups $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ and $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. The complexes and their cohomology are the specified ones, rather than a replacement by classical motivic cohomology on singular schemes.

**Given:** $k,X,H$, Choice and the fixed compatible site and universe bounds as stated.

**Goal:** Establish additivity for arbitrary second-image perfect classes and retain the conditional bundle-difference formula.

## Proof
1.1 Apply the direct all-perfect comparison in [F3] to this qcqs $k$-scheme under [A1]. It identifies $C_1(x)=c_1^{\mathrm{perf}}(x)$ for every $x\in K_0(X)$ for the very operations of [F1]. This uses the supplied global comparison; it does not reconstruct a map-level determinant comparison from values on bundles. [A1, F1, F3]

2.1 Every $x\in H$ has rank zero and $c_1^{\mathrm{perf}}(x)=0$ by [F2]. Step 1.1 consequently gives $C_1(x)=0$ for every such $x$. This uses the full-qcqs suppliers and no global bundle representative. [A1, F2, step 1.1]

3.1 For $x,y\in H$, [F1] gives $c_2(x+y)=c_2(x)+C_1(x)C_1(y)+c_2(y)$. The cross term vanishes by step 2.1. Pointedness gives $c_2(0)=0$; since $H$ is a subgroup, applying additivity to $x+(-x)$ yields $c_2(-x)=-c_2(x)$ in the target abelian group of [F4]. Thus the restriction is a group homomorphism. [A1, F1, F2, F4, step 2.1]

4.1 Suppose $[V]-[W]\in H$. Additivity of $c_1^{\mathrm{perf}}$ and its bundle agreement in [F3], together with [F2], give $c_1(V)=c_1(W)$. On bundle classes the coefficients in [F1] are the original ones by [F3]. Degree-two inversion gives $c_2(-[W])=c_1(W)^2-c_2(W)$, and Cartan therefore gives $c_2([V]-[W])=c_2(V)-c_1(V)c_1(W)+c_1(W)^2-c_2(W)$. The equal first classes cancel the quadratic terms, proving the stated formula. Only this conditional assertion uses the supplied bundle-difference representation. [A1, F1, F2, F3, step 1.1, step 3.1] ∎

## Scope and reading limits
The normal qcqs scope and the conditional bundle formula are retained. The actual Cartan, first-class comparison, rank/determinant and filtration suppliers are used under their stated hypotheses; their deeper constructions are not independently reconstructed or certified here. This local consequence does not require any global bundle-generation assertion or finite-dimensional polynomial Chern series.

This assignment read the complete assigned body and the exact existing first-class comparison, Cartan, rank/determinant, first-Chern factorization, filtration, perfect-K and motivic-cohomology supplier bodies for the applications above. The original article conventions on p. 3 and Lemma 5.3 on p. 11 were checked in the frozen extracted text for scope and the conditional bundle calculation. No fresh external literature proof review or PDF-image verification is claimed. Historical original-article findings and report pages are unchanged.

The public Statement is unchanged. The frozen full graph contains no direct consumers of this item; the added comparison dependency does not reach this item. Central application, rendering and independent changed-item rejudgment remain engine tasks.
