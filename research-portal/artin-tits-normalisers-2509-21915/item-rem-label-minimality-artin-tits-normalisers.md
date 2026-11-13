---
title: Minimal coset representatives remove chamber-label ambiguity
status: published
research_item: rem-label-minimality-artin-tits-normalisers
dependency_level: 13
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 10, Remark 3.11 and the following paragraph
      statement: For $x'\in xW_I$, the translates $xC_I$ and $x'C_I$ agree; the length
        constraint removes the resulting ambiguity. The notation
        $\mathrm{Cham}(J)$ is used both for labels and for chambers.
      hypotheses: The Coxeter-system and face conventions of the article, with $J$ a
        subset of the vertex set; the length constraint is that in equation
        (3.10).
      reading_limits: The frozen extracted text at Remark 3.11 and its following
        paragraph was read for attribution. This article citation is not used as
        an independent proof input.
---

PDF p. 10: ` Remark 3.11 and following paragraph `

## Prerequisites

- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system, with simple roots $(e_s)_{s\in S}$ in its canonical real reflection representation and contragredient action on the dual. For $I\subseteq S$, let $W_I=\langle I\rangle$ and let $C_I$ be the face consisting of dual functionals that vanish on $e_i$ for $i\in I$ and are positive on $e_s$ for $s\notin I$. If $x'\in xW_I$, then $x'C_I=xC_I$; consequently distinct group elements can give the same face translate.

Fix $J\subseteq S$. A label in $\mathrm{Cham}(J)$ is a pair $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum word length in $xW_I$. These labels identify the chambers of the relative arrangement in the interior of the $J$-cone bijectively with their face translates $xC_I$. Thus the minimum-length condition removes the ambiguity within each right coset, and distinct labels do not describe the same chamber. Accordingly $\mathrm{Cham}(J)$ may denote either this label set or the corresponding set of geometric chambers, with the bijection understood.

## Statement references

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

[thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

## Proof


**Given:** The finite-rank Coxeter system and subsets $I,J\subseteq S$ in the Statement, with arbitrary Coxeter type.

[F1] The simple reflection $s$ acts on the real root space by $v\mapsto v-2B(v,e_s)e_s$, and the dual action is $(wf)(v)=f(w^{-1}v)$. The face $C_I$ is defined by the coordinate conditions in the Statement. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F2] Every right coset $xW_I$ has a unique minimum-length element. [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

[F3] The label set consists of the pairs specified in the Statement. The $J$-cone is the intersection of the Tits cone with the subspace annihilating the simple roots indexed by $J$; the relative arrangement uses the proper traces of root hyperplanes on that subspace, and its chambers are connected components of the complement in the cone's relative interior. [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[F4] For these finite-rank conventions and arbitrary $J$, the map $(x,I)\mapsto xC_I$ is a bijection from the label set to the chambers described in [F3]. [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)



**Proof technique:** direct.

**Goal:** Prove the equality of translates and the stated uniqueness and notation assertions.

1.1 Let $f\in C_I$ and $i\in I$. Since $f(e_i)=0$, the reflection formula and dual action in [F1] give $(if)(v)=f(v-2B(v,e_i)e_i)=f(v)$ for every root-space vector $v$. Thus each generator in $I$ fixes every point of $C_I$, and so does every $u\in W_I$. If $x'=xu$, the group action gives $x'C_I=x(uC_I)=xC_I$. When $I$ is nonempty, an element $i\in I$ is distinct from the identity, so $x$ and $xi$ provide distinct group elements with the same translate. [F1, given]

2.1 By [F2], each right coset has exactly one minimum-length element, so at most one choice of $x$ from that coset satisfies the length condition for a fixed $I$. The bijection in [F4], with the label and chamber conventions in [F3], also rules out equality of chamber translates from any two distinct labels, including labels with different subsets. It supplies every geometric chamber and its unique label; hence the two uses of $\mathrm{Cham}(J)$ are identified by that bijection. Together with step 1.1 this proves the assertions. [F2, F3, F4, step 1.1] ∎

## Source notes

The article citation attributes the remark and its notation. The argument above uses the declared mathematical suppliers, rather than the article remark as a proof of itself. The geometric statement uses the finite-rank convention of the completed relative-cone and labelling suppliers.
