---
title: Whitney identities and virtual Chern arithmetic
status: published
research_item: prop-chern-whitney-identities
dependency_level: 23
sources:
  references:
    - title: Fasel and Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Section 3, page 8; Section 5, page 11
      statement: Section 3 introduces motivic Chern classes, reduction to a filtration
        by line bundles, and additivity of the first line class. The proof of
        Lemma 5.3 uses the Whitney sum identity, inversion of the total series
        through degree two, and the second-class cross term.
      hypotheses: The cited article passages use its scheme conventions; Lemma 5.3 is
        stated for normal schemes. The any-field qcqs scope, exact-sequence
        identity, rank-zero and varying-rank conventions, virtual representative
        independence and cubic inverse in this generated proposition are
        established through its declared suppliers, rather than attributed to
        these passages alone.
      reading_limits: Read the frozen article text at PDF page 8, Section 3 opening
        through Proposition 3.2 and its proof, and PDF page 11, Lemma 5.3 and
        its proof. This source records formula provenance. The fuller statement
        is AI-altered and the proof is a local composition of the named current
        interfaces; no fresh review of their underlying literature or
        original-author defect is claimed.
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
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be any field. For every qcqs $X/k$ and exact sequence $0\to V^{\prime}\to V\to V^{\prime\prime}\to0$ of finite locally free sheaves, $c_t(V)=c_t(V^{\prime})c_t(V^{\prime\prime})$. In particular $c_t(V\oplus W)=c_t(V)c_t(W)$, $c_1(V\oplus W)=c_1(V)+c_1(W)$ and $c_2(V\oplus W)=c_2(V)+c_1(V)c_1(W)+c_2(W)$. A line has no higher classes, $c_1(L\otimes M)=c_1(L)+c_1(M)$, and on a flag filtration all coefficients are elementary symmetric polynomials in its line roots. The resulting representative-independent virtual series satisfy $c_t(-W)=1-c_1(W)t+(c_1(W)^2-c_2(W))t^2+(-c_1(W)^3+2c_1(W)c_2(W)-c_3(W))t^3+\cdots$. These statements concern $K^0_{\rm vb}$; only the completed affine comparison or locally Noetherian vector-bundle $K^0$ convention may be used for further group identifications.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These discharge the foundational hypotheses of the supplied actual and virtual constructions [F1] and of the line comparison [F2] in steps 1.1–3.1, and of the affine comparison [F5] in step 3.1. The universe and site-size assumptions are separate hypotheses, not consequences of Choice.

[F1] [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney) supplies actual Whitney/filtered roots; [lem-author-32887006bdff-virtual-independence](item-lem-author-32887006bdff-virtual-independence) extends to varying ranks and to the presented virtual group without using this proposition or the same-wave total-class definition.

[F2] [lem-author-32887006bdff-relation-comparison](item-lem-author-32887006bdff-relation-comparison), applied with $S=Y=X$ under [A1], supplies line normalization and the actual additive orientation on every qcqs $X/k$. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) supplies the formal product/inverse arithmetic.

[F3] The formulation uses the following precise interfaces. A qcqs scheme is quasi-compact and quasi-separated in the sense of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme); $X/k$ includes a specified structural morphism to $\operatorname{Spec}k$. Finite locally free sheaves, their locally constant ranks, and line bundles (rank one) are as in [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). Exactness means equality of image and kernel sheaves, as in [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves). The finite direct sum $V\oplus W$ is the sheaf $U\mapsto V(U)\oplus W(U)$ with componentwise restrictions; its sheaf condition follows componentwise and local frames concatenate. The notation $L\otimes M$ denotes the tensor-product sheaf of [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product). A flag filtration means $0=V_0\subset\cdots\subset V_r=V$ by subbundles with line quotients $L_s=V_s/V_{s-1}$ as specified by [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney). Its roots are $x_s=c_1(L_s)$, and its elementary symmetric coefficient means $e_i(x_1,\ldots,x_r)=\sum_{1\leq s_1<\cdots<s_i\leq r}x_{s_1}\cdots x_{s_i}$, with $e_0=1$ and $e_i=0$ for $i>r$. For varying rank these are read on the common finite clopen rank partition supplied by [lem-author-32887006bdff-virtual-independence](item-lem-author-32887006bdff-virtual-independence).

[F4] [def-motivic-chern-classes](item-def-motivic-chern-classes) fixes $H^{a,b}(X)=H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)$, its bigraded products, the actual coefficients $c_i(E)$, $c_0=1$, zero coefficients above rank, and the polynomial $c_t(E)=\sum_{i\geq0}c_i(E)t^i$. Here $t$ is a formal variable. The diagonal coefficient ring $R_X=\bigoplus_{i\geq0}H^{2i,i}(X)$ is commutative because all first degrees are even, as used in [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface). Products of formal series use finite coefficient convolution, and inverses are recursively defined as in [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion); no convergence is assumed.

[F5] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) defines $K^0_{\rm vb}(X)$ as the abelian group on bundle isomorphism classes with $[E]=[E']+[E'']$ for each short exact sequence. Its conditional extension applies after [F1] has proved actual Whitney, and identifies this presentation with the library vector-bundle $K^0(X)$ when $X$ is locally Noetherian. This last condition means having an affine open cover by spectra of Noetherian rings, as in [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme). Independently, [def-vector-bundle-classes](item-def-vector-bundle-classes) supplies the affine comparison: if $X=\operatorname{Spec}A$ for a commutative unital ring $A$, then, under [A1] and suitable universes for the supplied perfect K-theory construction, $K_0(X)=\pi_0K(X)$ is canonically identified with this bundle group, taking the spectral class of $E[0]$ to $[E]$. This is the completed affine comparison mentioned in the Statement. Neither this affine comparison nor the locally Noetherian convention identifies perfect K-zero with coherent-sheaf G-theory, and the latter convention makes no general perfect-K-zero identification.

## Proof
**Given:** A field $k$, qcqs $X/k$, the stated bundles/filtrations/classes, and [A1].

**Goal:** Prove all actual and virtual formulas in their actual dependency order.

1.1 Apply [F1] first to actual bundles. The direct sum in [F3] has the exact split sequence with inclusion $v\mapsto(v,0)$ and projection $(v,w)\mapsto w$: the image and kernel agree sectionwise. Its concatenated local frames make it a bundle, so actual Whitney gives the direct-sum identity. The filtered formula identifies its coefficients with elementary symmetric polynomials in the actual line first classes: expanding the product selects precisely the subsets in the formula for $e_i$ in [F3]. Varying ranks use the finite-clopen interpretation of [F1]. [A1, F1, F3, F4]

2.1 Compare coefficients of $t$ and $t^2$ in the direct-sum polynomial, using commutativity of the even-degree coefficient ring, to obtain the two displayed formulas. The line assertions follow from [F2] with the rank-one convention in [F4]; they use the original EM Picard map. The tensor product in [F3] is again a line: in common line frames its local model is $\mathcal O_U\otimes_{\mathcal O_U}\mathcal O_U\cong\mathcal O_U$, with mutually inverse maps $a\otimes b\mapsto ab$ and $a\mapsto a\otimes1$. Thus the additive orientation applies to exactly $L\otimes M$. [A1, F2, F3, F4, step 1.1]

3.1 Only now use the virtual extension in [F1], which has already killed every exact-sequence relation. Its value at $-[W]$ is the inverse of its actual value at $W$. Apply the recursive inverse formula of [F2] to get the displayed expansion through degree3 and its continuation as a formal series. The group presentation and its permitted identifications are exactly [F5]: the affine identification is used only for affine $X$ under its stated universe assumptions, and the locally Noetherian convention only for that vector-bundle group. No coefficientwise additivity of higher classes is inferred. [A1, F1, F2, F4, F5, step 1.1, step 2.1] ∎
