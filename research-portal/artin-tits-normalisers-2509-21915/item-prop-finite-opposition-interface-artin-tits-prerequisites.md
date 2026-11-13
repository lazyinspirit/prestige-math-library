---
title: Finite parabolic longest elements and disconnected factors
status: published
research_item: prop-finite-opposition-interface-artin-tits-prerequisites
dependency_level: 0
---

## Prerequisites

- [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)
- [math:lem-cg-diagram-products-and-invariant-form-comparison](https://alphabetamath.cc/item/lem-cg-diagram-products-and-invariant-form-comparison)
- [math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization)
- [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)
- [math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism)
- [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)
- [math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection)


## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite and length function $\ell$. For $I\subseteq S$, write $W_I=\langle I\rangle$, $V_I=\operatorname{span}\{e_i:i\in I\}$ and $\Phi_I=\{w e_i:w\in W_I,\ i\in I\}$ in the canonical real reflection representation. Put $\Phi_I^+=\Phi_I\cap\Phi_+$ and $\Phi_I^-= -\Phi_I^+$.

If $W_I$ is finite, it has a unique element $w_I$ of maximum length, $w_I^2=1$, and $w_I\Phi_I^+=\Phi_I^-$. There is a permutation $\iota_I$ of $I$ such that $w_Ie_i=-e_{\iota_I(i)}$ for every $i\in I$.

For the connected components $I_1,\ldots,I_k$ of the Coxeter diagram induced on $I$, the factors $W_{I_j}$ commute elementwise, their multiplication map is an isomorphism from their direct product onto $W_I$, and their lengths add. If $W_I$ is finite, each factor is finite and $w_I=\prod_j w_{I_j}$, including the empty product when $I=\varnothing$.

In particular, let $a\in S\setminus I$, put $K=I\cup\{a\}$, and suppose $W_K$ is finite. If $H$ is a union of connected components common to the induced diagrams on $I$ and $K$, write $J=I\setminus H$ and $L=K\setminus H$. Then $w_Iw_K=w_Jw_L$. Thus common disconnected finite factors cancel.

## Facts & Assumptions

[F1] The Coxeter system $(W,S)$ is presented by its Coxeter matrix $m$, its length $\ell(w)$ is the least number of letters from $S$ representing $w$, and $W_I=\langle I\rangle$ is the standard parabolic subgroup ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)). For every $I\subseteq S$, $(W_I,I)$ is a Coxeter system for the restricted matrix $m|_{I\times I}$ and its intrinsic length is the restriction of $\ell$ ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), part 2).

[F2] A finite Coxeter system has a unique longest element, which is an involution, sends its positive roots to its negative roots and sends each simple root to the negative of a simple root according to a permutation of the generators ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), part 1).

[F3] For the connected components of a finite Coxeter diagram, the corresponding standard parabolic subgroups form a direct product by multiplication, commute elementwise, and their lengths add ([math:lem-cg-diagram-products-and-invariant-form-comparison](https://alphabetamath.cc/item/lem-cg-diagram-products-and-invariant-form-comparison), part 1).

[F4] On the simple-root basis of $V=\mathbb R^S$, the Coxeter form satisfies $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for distinct $s,t$ with $m(s,t)<\infty$, and $B(e_s,e_t)=-1$ when $m(s,t)=\infty$; the reflection with normal $e_s$ is $r_{e_s}(v)=v-2B(v,e_s)e_s$ ([math:def-cg-real-coxeter-form-and-reflection](https://alphabetamath.cc/item/def-cg-real-coxeter-form-and-reflection), parts 1–3). The canonical homomorphism satisfies $\rho(s)=r_{e_s}$, and $w v$ denotes $\rho(w)v$ ([math:def-cg-canonical-reflection-homomorphism](https://alphabetamath.cc/item/def-cg-canonical-reflection-homomorphism), part 1). Moreover $\Phi_I=\Phi\cap V_I$ and its positive and negative roots are the intersections with the ambient positive and negative roots ([math:thm-cg-parabolic-intersections-and-coset-factorization](https://alphabetamath.cc/item/thm-cg-parabolic-intersections-and-coset-factorization), part 2).

[F5] The Coxeter diagram has vertex set $S$ and an edge between distinct $s,t$ exactly when $m(s,t)\ge3$, with the Coxeter label on that edge. Its induced diagram on $I$ is the diagram of the restricted matrix $m|_{I\times I}$, and its components are the connected components of the underlying graph ([math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type), parts 1 and 2).

[F6] In the canonical representation put $\Phi=\{w e_s:w\in W,\ s\in S\}$ and $V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\ge0\}$. The ambient sign convention is $\Phi_+=\Phi\cap V_+$ and $\Phi_-=\Phi\cap(-V_+)=-\Phi_+$, with $\Phi=\Phi_+\sqcup\Phi_-$ ([math:thm-cg-root-sign-and-simple-reflection-positivity](https://alphabetamath.cc/item/thm-cg-root-sign-and-simple-reflection-positivity), part 2).

## Proof
**Given:** The finite-rank Coxeter system, canonical representation and subsets in the statement. A connected component means a maximal connected vertex set in the indicated induced Coxeter diagram; distinct components have no diagram edges between them.

**Goal:** Establish the longest-element, product and cancellation assertions in the statement.


1.1 By [F1], $(W_I,I)$ is a Coxeter system with the ambient length restricted to $W_I$. The entries of $B|_{V_I\times V_I}$ in [F4] depend only on $m|_{I\times I}$, so this restricted form is the Coxeter form of $(W_I,I)$. For $i\in I$ and $v\in V_I$, the formula $r_{e_i}(v)=v-2B(v,e_i)e_i$ stays in $V_I$ and is exactly the reflection for that restricted form. Thus the restricted ambient action and the intrinsic canonical action agree on each generator in $I$, hence on every word representing an element of $W_I$ by [F1]. Consequently its canonical representation is the restriction to $V_I$. The nonnegative-coordinate convention in [F6] agrees on $V_I$ with the intrinsic convention, so its positive and negative roots are $\Phi_I^+$ and $\Phi_I^-$. When $W_I$ is finite, applying [F2] to this system gives the unique maximum-length element $w_I$, its involution and root-sign properties, and the permutation $\iota_I$ with $w_Ie_i=-e_{\iota_I(i)}$. This includes $I=\varnothing$, for which the group and permutation are trivial and the root assertions are vacuous. [F1, F2, F4, F6]

2.1 By [F5], the diagram induced on $I$ is the diagram of the restricted Coxeter matrix. Apply [F3] to the Coxeter system $(W_I,I)$ from [F1] with this diagram. The component subgroups commute and multiply isomorphically onto $W_I$, with additive intrinsic lengths; [F1] identifies these lengths with ambient lengths. If $W_I$ is finite, each subgroup $W_{I_j}$ is finite. Every element of $W_I$ has a unique product decomposition, and its length is the sum of the component lengths. The product of the component longest elements therefore has maximum length in $W_I$; uniqueness from step 1.1 identifies it with $w_I$. The empty-component case gives the identity. [F1, F3, F5, step 1.1]

3.1 By [F5], since $H$ is a union of components in both induced diagrams, there are no diagram edges between $H$ and $J$, or between $H$ and $L$. The component formula of step 2.1 gives $w_I=w_Hw_J$ and $w_K=w_Hw_L$, with $w_H$ commuting with both $w_J$ and $w_L$. All these parabolics are finite because they are subgroups of finite $W_K$. Hence $w_Iw_K=w_Hw_Jw_Hw_L=w_H^2w_Jw_L=w_Jw_L$, using $w_H^2=1$ from step 1.1. This proves the stated cancellation and completes the proof. [F5, step 1.1, step 2.1, algebra] ∎
