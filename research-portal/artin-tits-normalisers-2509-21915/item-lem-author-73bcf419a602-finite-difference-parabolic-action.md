---
title: Finite outside roots give a finite complementary parabolic
status: draft
research_item: lem-author-73bcf419a602-finite-difference-parabolic-action
dependency_level: 10
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers)
- [lem-author-73bcf419a602-outside-root-invariance](item-lem-author-73bcf419a602-outside-root-invariance)
- [lem-author-73bcf419a602-connected-orbit-span](item-lem-author-73bcf419a602-connected-orbit-span)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group)


## Statement

Use the arbitrary-rank geometric representation of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) and the orbit definition $\Phi_L=\{w\alpha_i:w\in W_L,i\in L\}$ from [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers). Let $I\subseteq\Gamma_0$, $a\notin I$, $K=[I,a]$, $J=K\setminus\{a\}$, $V_L=\operatorname{span}_{\mathbb R}\{\alpha_i:i\in L\}$ and $D=\Phi_{I+a}\setminus\Phi_I$, with connected-component notation from [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers). Vectors have finite support, even if the vertex set is infinite. If $D$ is finite, then $K$ is finite and $W_J$ is finite.

## Facts & Assumptions

**Given:** the objects of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers) and [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers), and finite $D$. [F1] The set $D$ is $W_I$-invariant by [lem-author-73bcf419a602-outside-root-invariance](item-lem-author-73bcf419a602-outside-root-invariance), and its span contains $V_K$ by [lem-author-73bcf419a602-connected-orbit-span](item-lem-author-73bcf419a602-connected-orbit-span). [F2] For any finite set of simple generators, its restricted Coxeter presentation embeds in the ambient group by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), part 1. [F3] The canonical representation of a Coxeter system on finitely many generators is faithful by [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness), part 3.

[F4] For any set $X$, $\operatorname{Sym}(X)$ is the set of bijections $X\to X$, with operation $(f\circ h)(x)=f(h(x))$ and identity $\mathrm{id}_X$, as in [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group).

## Proof


**Given:** the objects of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers) and [def-connected-support-artin-tits-normalisers](item-def-connected-support-artin-tits-normalisers), and finite $D$. [F1] The set $D$ is $W_I$-invariant by [lem-author-73bcf419a602-outside-root-invariance](item-lem-author-73bcf419a602-outside-root-invariance), and its span contains $V_K$ by [lem-author-73bcf419a602-connected-orbit-span](item-lem-author-73bcf419a602-connected-orbit-span). [F2] For any finite set of simple generators, its restricted Coxeter presentation embeds in the ambient group by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), part 1. [F3] The canonical representation of a Coxeter system on finitely many generators is faithful by [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness), part 3.

[F4] For any set $X$, $\operatorname{Sym}(X)$ is the set of bijections $X\to X$, with operation $(f\circ h)(x)=f(h(x))$ and identity $\mathrm{id}_X$, as in [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group).



**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 Each element of the finite set $D$ has finite support. Let $F$ be the union of those supports; it is finite, and $\operatorname{span}D\subseteq V_F$. By [F1], $V_K\subseteq V_F$, hence $K\subseteq F$ by linear independence of the simple-root basis. Thus $K$ and $J$ are finite. [F1, given]

2.1 Since $J\subseteq I$, [F1] gives a map $\pi:W_J\to\operatorname{Sym}(D)$ defined by $\pi(g)(\beta)=g\beta$ for $\beta\in D$, using [F4]. Each such map is a bijection with inverse $\pi(g^{-1})$, and the geometric action gives $\pi(gh)=\pi(g)\circ\pi(h)$ and $\pi(1)=\mathrm{id}_D$. If $\pi(g)=\mathrm{id}_D$, then $g$ fixes $\operatorname{span}D$, hence fixes $V_K$ and in particular $V_J$ by [F1]. By [F2] applied to finite $J$, the group $W_J$ is the Coxeter group on the restricted matrix. Its restriction to $V_J$ is exactly the canonical representation, since the generator formulas coincide. Faithfulness [F3] gives $g=1$. If $\pi(g)=\pi(h)$, the composition identities give $\pi(h^{-1}g)=\mathrm{id}_D$, so $g=h$; thus $\pi$ is injective. The set $\operatorname{Sym}(D)$ is finite: every map $D\to D$ is determined by one image in the finite set $D$ for each of its finitely many elements, so there are finitely many such maps and hence finitely many bijections. Therefore $W_J$ is finite. For $J=\varnothing$ the subgroup is the identity and the same conclusion holds. [F1, F2, F3, F4, step 1.1, algebra] ∎
