---
title: Short-interval real Volterra contraction
status: draft
research_item: lem-author-9e2ffff7db46-local-volterra-contraction
dependency_level: 1
---

## Prerequisites

- [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)
- [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)
- [math:def-space-of-bounded-linear-operators](https://alphabetamath.cc/item/def-space-of-bounded-linear-operators)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)


## Statement

Use the Banach space, group, Bochner conventions and constant $M$ of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). Let $P:[0,T]\to\mathcal B_{\mathbb R}(E)$ be norm-continuous and $K=\sup_{s\in[0,T]}\|P(s)\|$. If $J\subset[0,T]$ is a closed interval containing $r$ with length $h$ satisfying $MKh<1$, then for every $x\in E$ and $f\in L^1(J;E)$ there is a unique $u\in C(J;E)$ satisfying $u(t)=W(t-r)x+\int_r^tW(t-s)(P(s)u(s)+f(s))\,ds$. It depends boundedly and real-linearly on $(x,f)$ and satisfies $\|u\|_{C(J)}\le M(\|x\|+\|f\|_{L^1(J)})/(1-MKh)$. The construction is the contraction principle [math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point), valid also on an interval to the left of $r$.

## Facts & Assumptions

**Given:** The data and interval in the Statement, with $q=MKh<1$.

**Goal:** Construct and uniquely determine the local continuous solution without a complex-linearity assumption on $P$.

[F1] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) supplies the continuous free orbit and oriented forcing integral with $C$-norm at most $M$ times the $L^1$ norm.

[F2] A contraction of a nonempty complete metric space has a unique fixed point ([math:thm-banach-fixed-point](https://alphabetamath.cc/item/thm-banach-fixed-point)).

[F3] The notation $\mathcal B_{\mathbb R}(E)$ means the space $\mathcal B(E,E)$ of [math:def-space-of-bounded-linear-operators](https://alphabetamath.cc/item/def-space-of-bounded-linear-operators), applied to the underlying real normed space $E$. Operator norms and norm-continuity use [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) over the real field; in particular $\|Az\|\le\|A\|\,\|z\|$ for every bounded real-linear $A$ and every $z\in E$.

## Proof

**Given:** The data and interval in the Statement, with $q=MKh<1$.

**Goal:** Construct and uniquely determine the local continuous solution without a complex-linearity assumption on $P$.

1.1 The space $C(J;E)$ with supremum norm is complete: a uniform Cauchy sequence has a pointwise limit by completeness of $E$, converges uniformly to it by its Cauchy estimate, and the epsilon/three argument using one continuous sequence member proves continuity of the limit. Thus it is a nonempty complete metric space. Norm-continuity of $P$ and continuity of $v$ imply continuity of $s\mapsto P(s)v(s)$. By [F1] the affine map $\Phi(v)=W(\cdot-r)x+D_r(Pv+f)$ maps this whole space to itself. [F1, F3, given]

2.1 For $v,w\in C(J;E)$, the norm bound gives $\|\Phi(v)-\Phi(w)\|_C\le MK h\|v-w\|_C=q\|v-w\|_C$. Therefore [F2] gives one and only one fixed point. This estimate uses the length of the unoriented interval and consequently is identical in the backward direction. [F1, F2, F3, step 1.1]

3.1 At the fixed point, $\|u\|_C\le M\|x\|+M\|f\|_1+q\|u\|_C$, which yields the displayed estimate. Real linear combinations of solutions satisfy the same equation with the corresponding real linear combinations of their data, by real linearity of all operators and integration. Uniqueness identifies them with the constructed solutions; applying the bound to differences proves bounded dependence. [F1, step 2.1, algebra] ∎
