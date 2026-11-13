---
title: Independent relative chamber labelling input
status: published
research_item: thm-relative-chamber-labelling-input-artin-tits-prerequisites
dependency_level: 5
sources:
  references:
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications,
        author-hosted draft
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      hypotheses: Finite Coxeter graph, canonical real reflection representation and
        dual action; arbitrary vertex subset J, not required spherical. Our I is
        the source secondary subset, and our J is the source fixed subset.
      reading_limits: Read web-extracted passages in §§1.1–1.5 covering the
        finite-matrix convention, canonical representation, Definitions 1.3–1.6
        and 1.8, and Theorem 1.12 statement. PDF screenshots for the subset
        typography were unavailable in this pass; no visual-reading credit or
        source-proof review is claimed. Only the stated finite-rank labelling
        theorem is imported, with no local-finiteness or infinite-rank
        assertion.
      locator: Definition 1.8 and Theorem 1.12, printed pp. 6–7 (PDF pp. 30–31)
      statement: Iyama–Wemyss, Definition 1.8 and Theorem 1.12, states that the pairs
        $(x,I)$ with $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ are in
        bijection with their $J$-chambers, under $(x,I)\mapsto xC_I$.
---

## Prerequisites

- [lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology)
- [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)
- [` Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications, author-hosted draft · Definition 1.8 and Theorem 1.12, printed pp. 6–7 (PDF pp. 30–31) `](https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. Let $W_I=\langle I\rangle$ and let $\ell$ denote Coxeter length. The pairs $(x,I)$, with $x\in W$ and $I\subseteq S$, satisfying $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ label the $J$-chambers bijectively by $(x,I)\mapsto xC_I$. These are exactly the chambers of $(T^\circ,\mathcal A)$, where $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi,\ E\not\subseteq H_\alpha\}$, with traces missing $T^\circ$ omitted. No sphericity assumption on $J$ is imposed.

## Statement references

[lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology)

[prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

## External input

Iyama–Wemyss, Definition 1.8 and Theorem 1.12, states that the pairs $(x,I)$ with $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ are in bijection with their $J$-chambers, under $(x,I)\mapsto xC_I$.

## Facts & Assumptions

[F1] The source and interior-arrangement chamber sets coincide by [lem-author-9b7c42e8f103-chamber-topology](item-lem-author-9b7c42e8f103-chamber-topology).

[F2] The standard parabolics and the unique minimum of each right coset are those supplied by [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites).

[F3] The bijection from the displayed labels to source $J$-chambers is the independent theorem recorded in External input (Iyama–Wemyss, Definition 1.8 and Theorem 1.12).

## Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, Definition 1.8 and Theorem 1.12, states that the pairs $(x,I)$ with $W_Jx=xW_I$ and $\ell(x)=\min\{\ell(y):y\in xW_I\}$ are in bijection with their $J$-chambers, under $(x,I)\mapsto xC_I$.


1.1 Using the parabolic and length conventions of [F2], the external input [F3] gives a bijection from exactly the displayed pairs to the source $J$-chambers, with value $xC_I$. This uses the independent theorem as an imported premise, not a locally reconstructed proof. [F2, F3, given]

2.1 By [F1], those same subsets are exactly the chambers in the relative-interior arrangement, with the same topology. Composing the first bijection with this identification proves the asserted labelling and its applicability to $(T^\circ,\mathcal A)$. Neither input restricts $J$ to spherical type. [step 1.1, F1] ∎

## Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local proof composes that imported bijection with the chamber-topology supplier; it does not reconstruct the source theorem. Root hyperplanes and geometric formulation conventions are supplied by the chamber-topology lemma, whose Statement defines $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$. The source proof has not been reviewed.
