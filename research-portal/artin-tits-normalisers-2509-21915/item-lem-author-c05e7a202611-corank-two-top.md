---
title: The corank-two atomic coset has relative longest minimum
status: published
research_item: lem-author-c05e7a202611-corank-two-top
dependency_level: 19
sources:
  references:
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3
      url: https://arxiv.org/pdf/2312.16666v3
      locator: §2.2, Definition 2.1 and (2.4), PDF p. 9; Remark 4.8 (4.8), PDF p. 15
      statement: Composition of singular cosets is induced by star multiplication of
        their maximal elements. The switchback extension is a reduced expression
        of the compressed coset [I,T,bar I].
      hypotheses: A Coxeter system; all subsets indexing singular expressions are
        finitary. Section 4 is applied inside a finite standard parabolic
        (W_T,T).
      reading_limits: For this adjudication, read the extracted text of §2.2 through
        Definition 2.1 and (2.4), PDF p. 9, and Remark 4.8 with (4.8), PDF p.
        15, plus the finite-system convention at the start of §4. No visual
        inspection, full-paper reading, reconstruction of the cited background
        proofs, or inherited reading credit is claimed. The rotation-word
        equality is supplied by the existing rotation-words lemma; this item
        imports only the singular-composition definition for its local
        calculation.
---

## Prerequisites

- [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)
- [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words)
- [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest)
- [prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 · §2.2, Definition 2.1 and (2.4), PDF p. 9; Remark 4.8 (4.8), PDF p. 15 `](https://arxiv.org/pdf/2312.16666v3)


## Statement

In the finite setting $T=I\sqcup\{a,b\}$ of the rotation construction, both words have minimum representative $q=w_Iw_T$ and target $\bar I=w_TIw_T$. This $q$ is the finite-relative-longest morphism used to construct $v_{a,b,I}$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] The rotation words express $[I,T,\bar I]$. [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words)

[F2] A core coset with maximum $M$ and source $I$ has minimum $w_IM$. [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)

[F3] The finite-relative-longest construction is $r=w_Dw_{D\cap I}$, $q=r^{-1}$, where $D$ is the union of components of $T$ meeting $a$ or $b$. Common components of finite longest elements commute and cancel. [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest) [prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites)

[F4] The two-generator lemma explicitly chooses $v_{a,b,I}=(w_Dw_{D\cap I})^{-1}=r^{-1}$, with $D$ as in [F3]. Its finite-root-difference hypothesis holds here because $W_T$ is finite. [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)

## External input

Ko Definition 2.1 defines singular composition by star multiplication of maxima. In $W_T$, the longest element satisfies $w_T*w_T=w_T$, by the defining idempotence and the fact that every simple generator of $T$ is a descent of $w_T$. This determines the maximum of $[I,T,\bar I]$.

## Proof

**Proof technique:** direct.

**Goal:** Establish the stated dictionary or identification.

1.1 The compressed expression $[I,T,\bar I]$ has maximum $w_T$. Indeed its first inclusion has maximum $w_T$, and its final deletion is represented by the coset with maximum $w_T$ again; multiplication in the singular Coxeter monoid leaves $w_T*w_T=w_T$. It is the core coset $W_Iw_TW_{\bar I}$ because $w_T\bar Iw_T=I$. Thus [F2] gives the minimum $w_Iw_T$, and [F1] gives the same minimum for each rotation word. [F1, F2]

2.1 Write $H=T\setminus D$. Then $H\subseteq I$ consists of the components not meeting $a,b$. The finite component cancellation in [F3] gives $w_Iw_T=w_{D\cap I}w_D=r^{-1}$. This is precisely the construction of $q$ in [F3], including source $I$ and target $\bar I$. By [F4], it is the element $v_{a,b,I}$. [F3, F4, step 1.1] ∎
