---
title: Atomic reduced compositions and standard products use the same order
status: draft
research_item: lem-author-c05e7a202611-atomic-product-length
dependency_level: 12
sources:
  references:
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Section 2.2 and Definition 2.1, PDF p. 9, equation (2.4); Definitions
        2.2–2.3 and following equivalence, p. 10; Section 1.3, p. 4; Lemma 3.4,
        p. 12; Definition 3.9 and Remark 3.11, p. 13; Definition 1.4 and
        equation (1.4), p. 3
      statement: For finitary I,H,K and cosets p:(I,H), q:(H,K), singular composition
        is p*q=W_I(P*Q)W_K, with P,Q the maxima and * the Coxeter monoid
        product. It is reduced exactly when (P w_H^{-1})Q is length additive,
        then has that maximum, and preserves core cosets. Atomic expressions
        concatenate atomic triples; reducedness tests successive prefix
        compositions. The empty expression at I represents W_I.
      hypotheses: An arbitrary Coxeter system (W,S); every subset indexing a coset or
        expression is finitary. Each atomic triple has a finitary larger subset
        and is core. No finite ambient Coxeter group is assumed.
      reading_limits: For this repair, read the extracted v3 PDF text at Section 2.2,
        Definitions 2.1–2.3, equation (2.4), the equivalence immediately after
        Definition 2.3, Section 1.3, Lemma 3.4, Definition 3.9, Remark 3.11 and
        Definition 1.4, with their immediate context. PDF screenshot retrieval
        failed; no successful visual inspection is claimed. The displayed
        composition and reducedness definitions and the stated core-closure
        result are imported, not reproved. The papers cited by Ko for these
        results were not independently read or reconstructed.
---

## Prerequisites

- [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)
- [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)
- [lem-finite-parabolic-wall-formula-artin-tits-normalisers](item-lem-finite-parabolic-wall-formula-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 · Section 2.2 and Definition 2.1, PDF p. 9, equation (2.4); Definitions 2.2–2.3 and following equivalence, p. 10; Section 1.3, p. 4; Lemma 3.4, p. 12; Definition 3.9 and Remark 3.11, p. 13; Definition 1.4 and equation (1.4), p. 3 `](https://arxiv.org/pdf/2312.16666v3)


## Statement

For a composable sequence of atoms $p_i=[I_{i-1},T_i,I_i]$ with $T_i=I_{i-1}\cup\{a_i\}$ finitary, put $g_i=w_{I_{i-1}}w_{T_i}$. The minimum of $p_i$ is $g_i=v_{a_i,I_{i-1}}$, and $I_i=T_i\setminus\{w_{T_i}a_iw_{T_i}\}$. The sequence is an atomic reduced expression precisely when $g_1\cdots g_m$ is a standard expression. In that case the composed core coset has minimum $g_1\cdots g_m$. Products retain their displayed left-to-right order.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] The core-minimum dictionary gives the maximum of a core $(I,K)$-coset as $w_Id=dw_K$. [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)

[F2] The finite wall formula identifies $v_{a,I}=w_Iw_{I+a}$ and its target, and a standard expression means a composable product whose Coxeter lengths add. [lem-finite-parabolic-wall-formula-artin-tits-normalisers](item-lem-finite-parabolic-wall-formula-artin-tits-normalisers) [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[F3] Atoms are the core cosets obtained by deleting one vertex from a finitary parabolic. [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)

[F4] Singular composition, evaluation of atomic expressions and sequential reducedness have the finitary conventions imported below from [Ko, Definitions 2.1–2.3 and 3.9](https://arxiv.org/pdf/2312.16666v3).

## External input

For finitary $I,H,K$, use Ko's Coxeter monoid $(W,\star)$: the usual Coxeter braid relations and $s\star s=s$ replace $s^2=1$, identifying underlying elements with $W$. For an $(I,H)$-coset $p$ and an $(H,K)$-coset $q$ with maxima $P,Q$, define $p\star q=W_I(P\star Q)W_K$. It is reduced iff $\ell((Pw_H^{-1})Q)=\ell(Pw_H^{-1})+\ell(Q)$; then $(Pw_H^{-1})Q$ is its maximum. Reduced composition preserves core cosets.

For adjacent nested finitary subsets, $[J_0,\ldots,J_n]=(W_{J_0}eW_{J_1})\star\cdots\star(W_{J_{n-1}}eW_{J_n})$. An atomic expression concatenates triples $[I_{i-1},T_i,I_i]$, each denoting its atom. Evaluate it by $r_0=W_{I_0}$, $r_i=r_{i-1}\star p_i$. It is reduced iff each prefix composition $r_{i-1}\star p_i$ is reduced. This is Ko's grouped form of sequential reducedness (Definitions 2.1–2.3 and the following equivalence; Section 1.3; Definition 3.9). The empty expression represents $W_{I_0}$ and is reduced (Remark 3.11).

## Proof

**Given:** The data and hypotheses in the Statement.

[F1] The core-minimum dictionary gives the maximum of a core $(I,K)$-coset as $w_Id=dw_K$. [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)

[F2] The finite wall formula identifies $v_{a,I}=w_Iw_{I+a}$ and its target, and a standard expression means a composable product whose Coxeter lengths add. [lem-finite-parabolic-wall-formula-artin-tits-normalisers](item-lem-finite-parabolic-wall-formula-artin-tits-normalisers) [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[F3] Atoms are the core cosets obtained by deleting one vertex from a finitary parabolic. [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)

[F4] Singular composition, evaluation of atomic expressions and sequential reducedness have the finitary conventions imported below from [Ko, Definitions 2.1–2.3 and 3.9](https://arxiv.org/pdf/2312.16666v3).



For finitary $I,H,K$, use Ko's Coxeter monoid $(W,\star)$: the usual Coxeter braid relations and $s\star s=s$ replace $s^2=1$, identifying underlying elements with $W$. For an $(I,H)$-coset $p$ and an $(H,K)$-coset $q$ with maxima $P,Q$, define $p\star q=W_I(P\star Q)W_K$. It is reduced iff $\ell((Pw_H^{-1})Q)=\ell(Pw_H^{-1})+\ell(Q)$; then $(Pw_H^{-1})Q$ is its maximum. Reduced composition preserves core cosets.

For adjacent nested finitary subsets, $[J_0,\ldots,J_n]=(W_{J_0}eW_{J_1})\star\cdots\star(W_{J_{n-1}}eW_{J_n})$. An atomic expression concatenates triples $[I_{i-1},T_i,I_i]$, each denoting its atom. Evaluate it by $r_0=W_{I_0}$, $r_i=r_{i-1}\star p_i$. It is reduced iff each prefix composition $r_{i-1}\star p_i$ is reduced. This is Ko's grouped form of sequential reducedness (Definitions 2.1–2.3 and the following equivalence; Section 1.3; Definition 3.9). The empty expression represents $W_{I_0}$ and is reduced (Remark 3.11).



**Proof technique:** direct.

**Goal:** Establish the stated dictionary or identification.

1.1 The atom has maximum $w_{T_i}$, so [F1] gives its minimum $g_i=w_{I_{i-1}}w_{T_i}$. Its core condition forces $I_i=w_{T_i}I_{i-1}w_{T_i}$, hence the displayed deleted vertex. The longest element on the source changes negative simple roots to positive ones, so this agrees with the root-transport orientation in [F2]. [F1, F2, F3]

1.2 Let two core cosets have minima $x,y$ and intermediate subset $H$. By [F1], their maxima are $P=w_Ix=xw_H$ and $Q=w_Hy$. Thus [F4] tests whether $x(w_Hy)$ is length additive. The product $xy$ is a root-transport arrow, so [F1] gives $\ell(w_Ixy)=\ell(w_I)+\ell(xy)$ and $\ell(w_Hy)=\ell(w_H)+\ell(y)$. Conjugation by $x$ bijects the parabolic simple generating sets $H$ and $I$, preserving their word lengths in both directions; hence $\ell(w_H)=\ell(w_I)$. Since $xw_H=w_Ix$, the criterion is equivalent to $\ell(xy)=\ell(x)+\ell(y)$. When it holds, [F4] gives maximum $w_Ixy$ and a core composite, whose minimum is $xy$ by [F1]. [F1, F4]

2.1 Evaluate the atomic expression by the prefixes $r_i$ of [F4]. The initial coset $r_0=W_{I_0}$ is core with minimum $e$. Whenever the prefix is reduced, step 1.2 and step 1.1 show that its minimum is $g_1\cdots g_i$ and that adjoining $p_{i+1}$ is reduced exactly when $\ell(g_1\cdots g_ig_{i+1})=\ell(g_1\cdots g_i)+\ell(g_{i+1})$. Thus [F4] makes atomic reducedness equivalent to all these prefix length equalities. They telescope to the total length equality; conversely, a shorter word for any prefix, followed by shortest words for the remaining factors, would contradict the total equality. By [F2] this is exactly a standard expression. Step 1.2 gives the asserted minimum of its composite, with no reversal of factors. The empty case has minimum $e$ and length sum zero on both sides. [F1, F2, F4, step 1.1, step 1.2] ∎
