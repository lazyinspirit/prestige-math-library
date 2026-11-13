---
title: Minimal representatives identify core cosets with root-transport arrows
status: draft
research_item: lem-author-c05e7a202611-core-minimum-dictionary
dependency_level: 10
---

## Prerequisites

- [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)
- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [math:lem-cg-double-coset-intersection-parabolic](https://alphabetamath.cc/item/lem-cg-double-coset-intersection-parabolic)
- [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a Coxeter system and let $I,K\subseteq S$ be finitary, meaning that their standard parabolic subgroups $W_I$ and $W_K$ are finite. Write $\Pi_L=\{\alpha_s:s\in L\}$. Sending a core $(I,K)$-coset $p=W_IxW_K$ to its minimum-length representative $d$ gives a bijection with the labels $d$ satisfying $d\Pi_K=\Pi_I$, namely the arrows $I\to K$ in the Brink–Howlett groupoid. Its inverse is $d\mapsto W_IdW_K$. Moreover the maximum-length element of $p$ is $w_Id=dw_K$ and has length $\ell(w_I)+\ell(d)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] The standard parabolic is $W_L=\langle L\rangle$; for finite $W_L$, $w_L$ denotes its unique longest element. Core cosets satisfy $W_Ix=W_IxW_K=xW_K$; root-transport arrows satisfy $d\Pi_K=\Pi_I$, with labels composed from left to right. [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers) [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[F2] In finite rank, each parabolic coset has a unique global minimum. [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)

[F3] In finite rank, $(W_L,L)$ is a Coxeter system with intrinsic length equal to ambient length. The minimum $d$ in $W_Ld$ is characterized by $\ell(sd)>\ell(d)$ for every $s\in L$, and satisfies $\ell(ud)=\ell(u)+\ell(d)$ for every $u\in W_L$. The corresponding assertions for $dW_L$ use $\ell(ds)>\ell(d)$ and $\ell(du)=\ell(d)+\ell(u)$. Length is invariant under inversion. [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)

[F4] In finite rank, $\ell(ws)>\ell(w)$ if and only if $w\alpha_s$ is positive; the canonical reflection representation is faithful. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F5] In finite rank, if $d$ is minimal on both sides for $(I,K)$ and $s\in I$ satisfies $d^{-1}sd\in W_K$, then $d^{-1}\alpha_s=\alpha_t$ for some $t\in K$. [math:lem-cg-double-coset-intersection-parabolic](https://alphabetamath.cc/item/lem-cg-double-coset-intersection-parabolic)

[F6] For every finite $H\subseteq S$, the Coxeter group presented by the restricted matrix on $H$ embeds in $W$ as $W_H$, and its intrinsic length equals ambient length. [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)

[F7] In the geometric representation, $s(v)=v-2B(v,\alpha_s)\alpha_s$, where $B(\alpha_s,\alpha_s)=1$ and the entries of $B$ are determined by the Coxeter matrix. Positive roots have nonnegative simple-root coordinates. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

## Proof

**Given:** The data and hypotheses in the Statement.

[F1] The standard parabolic is $W_L=\langle L\rangle$; for finite $W_L$, $w_L$ denotes its unique longest element. Core cosets satisfy $W_Ix=W_IxW_K=xW_K$; root-transport arrows satisfy $d\Pi_K=\Pi_I$, with labels composed from left to right. [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers) [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[F2] In finite rank, each parabolic coset has a unique global minimum. [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)

[F3] In finite rank, $(W_L,L)$ is a Coxeter system with intrinsic length equal to ambient length. The minimum $d$ in $W_Ld$ is characterized by $\ell(sd)>\ell(d)$ for every $s\in L$, and satisfies $\ell(ud)=\ell(u)+\ell(d)$ for every $u\in W_L$. The corresponding assertions for $dW_L$ use $\ell(ds)>\ell(d)$ and $\ell(du)=\ell(d)+\ell(u)$. Length is invariant under inversion. [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)

[F4] In finite rank, $\ell(ws)>\ell(w)$ if and only if $w\alpha_s$ is positive; the canonical reflection representation is faithful. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F5] In finite rank, if $d$ is minimal on both sides for $(I,K)$ and $s\in I$ satisfies $d^{-1}sd\in W_K$, then $d^{-1}\alpha_s=\alpha_t$ for some $t\in K$. [math:lem-cg-double-coset-intersection-parabolic](https://alphabetamath.cc/item/lem-cg-double-coset-intersection-parabolic)

[F6] For every finite $H\subseteq S$, the Coxeter group presented by the restricted matrix on $H$ embeds in $W$ as $W_H$, and its intrinsic length equals ambient length. [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)

[F7] In the geometric representation, $s(v)=v-2B(v,\alpha_s)\alpha_s$, where $B(\alpha_s,\alpha_s)=1$ and the entries of $B$ are determined by the Coxeter matrix. Positive roots have nonnegative simple-root coordinates. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)



**Proof technique:** direct.

**Goal:** Establish the stated dictionary or identification.

1.1 By [F1], $I\subseteq W_I$ and $K\subseteq W_K$, so the finite-parabolic hypothesis in the Statement makes $I$ and $K$ finite. For any representative $g$ under consideration, choose a finite $H\subseteq S$ containing $I,K$ and the letters of a word for $g$. The whole double coset $W_IgW_K$ lies in $W_H$. By [F6], all its group equalities and lengths can be computed in the finite-rank Coxeter system on $H$. The span of $\Pi_H$ is invariant under every generator in $H$ by the reflection formula [F7]; the restricted form has exactly the entries of that finite system. Thus the finite-system action and the ambient action agree on this span, and positivity agrees because their simple-root coordinates coincide. Consequently [F2]–[F5] apply there to the entire parabolic cosets and to all the transported roots used below. Also each simple reflection preserves $B$: expanding $B(su,sv)$ with [F7] cancels the two cross terms against the term involving $B(\alpha_s,\alpha_s)=1$. Hence every element of $W_H$ preserves the restricted form. [given, F1, F2, F3, F4, F5, F6, F7]

2.1 Let $p=W_IxW_K$ be core. Its equality with the two one-sided cosets in [F1], and [F2], give its unique minimum $d$. Since $d\in p$, those same one-sided cosets are $W_Id=dW_K=p$, so $d^{-1}W_Id=W_K$. By [F3], $d$ is minimal on both sides for $(I,K)$ and $d^{-1}$ is minimal on both sides for $(K,I)$. For every $s\in I$, its conjugate $d^{-1}sd$ lies in $W_K$, and [F5] gives $d^{-1}\alpha_s\in\Pi_K$. Applying [F5] to $d^{-1}$ gives $d\Pi_K\subseteq\Pi_I$ as well. The two inclusions imply $d\Pi_K=\Pi_I$. [F1, F2, F3, F5, step 1.1]

3.1 Conversely suppose $d\Pi_K=\Pi_I$. Work in the finite system of step 1.1 with $g=d$. If $d\alpha_t=\alpha_s$ for $t\in K$ and $s\in I$, preservation of $B$ and the reflection formula show that the action of $dtd^{-1}$ is the reflection with normal $d\alpha_t=\alpha_s$. By faithfulness [F4], $dtd^{-1}=s$. Thus conjugation by $d$ bijects $K$ with $I$ and gives $dW_Kd^{-1}=W_I$. Both $d\Pi_K$ and $d^{-1}\Pi_I$ consist of positive simple roots. By [F4], $\ell(dt)>\ell(d)$ for $t\in K$ and $\ell(d^{-1}s)>\ell(d^{-1})$ for $s\in I$; inversion invariance makes the latter $\ell(sd)>\ell(d)$. The characterization in [F3] makes $d$ the minimum in both one-sided cosets. Their equality $W_Id=dW_K$ now makes $W_IdW_K$ core by [F1]. Its unique minimum is $d$, so this construction and step 2.1 are inverse bijections, with the stated arrow direction. [F1, F3, F4, F7, step 1.1, step 2.1]

4.1 Conjugation by $d$ bijects the simple generating sets $K$ and $I$, so it preserves intrinsic word lengths: it sends any word to a word of the same length, and its inverse gives the reverse inequality. Intrinsic and ambient lengths agree by [F3] and step 1.1. It therefore sends the unique longest element $w_K$ to $w_I$. Each element of $p=W_Id$ is $ud$ for a unique $u\in W_I$, and [F3] gives $\ell(ud)=\ell(u)+\ell(d)$. Hence the unique maximum is $w_Id=dw_K$, with length $\ell(w_I)+\ell(d)$. The source, target and left-to-right label convention are those in [F1]. [F1, F3, step 1.1, step 2.1, step 3.1] ∎
