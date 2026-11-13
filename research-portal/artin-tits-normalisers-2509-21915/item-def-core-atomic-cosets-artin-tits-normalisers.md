---
title: Core and atomic double cosets
status: published
research_item: def-core-atomic-cosets-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 20, Remark 4.22, second paragraph
      reading_limits: The frozen article text at Remark 4.22 was read for attribution;
        this reference is not a proof premise.
    - title: An atomic Coxeter presentation
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Definitions 1.1 and 1.6, PDF pp. 1 and 4
      statement: A core parabolic double coset is simultaneously the corresponding
        left and right coset. An atom is a core coset formed from the longest
        element of a finitary parabolic and two corank-one parabolics.
      hypotheses: A Coxeter system; in the atomic definition the parabolic indexed by
        the larger subset is finite.
      reading_limits: Read Definitions 1.1 and 1.6 and their immediate context. No
        theorem about atomic compositions or their translation to groupoid
        products is used here.
---

PDF p. 20: ` Remark 4.22, second paragraph `

## Prerequisites

- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)
- [math:def-coset](https://alphabetamath.cc/item/def-coset)
- [` An atomic Coxeter presentation · Definitions 1.1 and 1.6, PDF pp. 1 and 4 `](https://arxiv.org/pdf/2312.16666v3)


## Definition

Let $(W,S)$ be a Coxeter system with $S=\{s_i:i\in\Gamma_0\}$. For $J\subseteq\Gamma_0$, let $W_J=\langle s_j:j\in J\rangle$ be its standard parabolic subgroup. For $I,K\subseteq\Gamma_0$ and $x\in W$, the $(I,K)$-double coset of $x$ is the set $W_IxW_K=\{uxv:u\in W_I,\ v\in W_K\}$. The set $W_Ix=\{ux:u\in W_I\}$ is the right coset of $W_I$ represented by $x$, and $xW_K=\{xv:v\in W_K\}$ is the left coset of $W_K$ represented by $x$.

The $(I,K)$-double coset $W_IxW_K$ is **core** if $W_Ix=W_IxW_K=xW_K$ as sets. No finiteness condition is imposed on $W_I$ or $W_K$ in this definition.

For $L\subseteq\Gamma_0$ with $W_L$ finite, write $w_L$ for its unique longest element, meaning the element of maximal Coxeter length in $W_L$. For $a,a'\in L$, write $L-a=L\setminus\{a\}$ and $L-a'=L\setminus\{a'\}$. An **atomic double coset**, or **atom**, is a core double coset of the form $W_{L-a}w_LW_{L-a'}$ for such $L,a,a'$. The core condition is part of the definition; it is not asserted for arbitrary choices of $a,a'$.

## Definition references

[def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)

[def-longest-elements-artin-tits-normalisers](item-def-longest-elements-artin-tits-normalisers)

[math:def-coset](https://alphabetamath.cc/item/def-coset)

## Justification

The standard parabolic construction supplies subgroups $W_I$ and $W_K$ of $W$. Their left, right and double cosets are sets of group products, so the displayed equality is a meaningful condition. It depends only on the double coset and its specified pair $(I,K)$: if it holds for $x$ and $y$ lies in that double coset, then $y\in W_Ix$ and $y\in xW_K$, whence $W_Iy=W_Ix$ and $yW_K=xW_K$; also $W_IyW_K=W_IxW_K$. Thus the same equality holds for $y$.

When $W_L$ is finite, the longest-elements definition supplies the unique $w_L$. The two deleted subsets are subsets of $\Gamma_0$, so their standard parabolics and the displayed double coset exist. Selecting those double cosets that satisfy the core condition therefore defines the atoms.
