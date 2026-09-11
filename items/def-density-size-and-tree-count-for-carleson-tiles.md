---
id: "def-density-size-and-tree-count-for-carleson-tiles"
kind: "definition"
title: "Density size and tree count for carleson tiles"
deps: ["def-carleson-tiles-wave-packets-and-tile-order", "def-carleson-operator-and-measurable-linearisation", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Section 3, equations 3.4–3.10
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Assume [[def-axiom-of-choice]] as inherited from the packet and real-line analytic conventions. Use the tiles, plus trees, fixed packets and finite model of [[def-carleson-tiles-wave-packets-and-tile-order]], and a measurable selector $N:\mathbb R\to\mathbb R$ as in [[def-carleson-operator-and-measurable-linearisation]]. Fix $f\in L^2(\mathbb R)$, a measurable testing set E of finite measure, and the integer $\kappa=20$. Put
$$\chi_I(x)=|I|^{-1}\bigl(1+|x-c(I)|/|I|\bigr)^{-\kappa}.$$
For a tile s and a finite tile set S, define
$$\operatorname{dens}_{E,N}(s)=\sup_{t>s}\int_{E\cap\{x:N(x)\in\omega_t\}}\chi_{I_t}(x)\,dx,\qquad\operatorname{dens}_{E,N}(S)=\sup_{s\in S}\operatorname{dens}_{E,N}(s),$$
where $t>s$ means $s\le t$ and $s\ne t$ in the tile order. The supremum over t ranges over all strict ancestors of s, not just members of S. This family is nonempty: a dyadic spatial parent of $I_s$, paired with either dyadic half of $\omega_s$ of reciprocal length, is a strict ancestor. The integral tests the whole frequency interval $\omega_t$. Every integrand is nonnegative measurable. Substitution $u=(x-c(I))/|I|$ and the antiderivative of $(1+u)^{-20}$ on $[0,\infty)$ give $\int\chi_I=2/19$, so densities are finite and between zero and $2/19$. For empty S define density zero; for null E every integral is zero. Null modifications of N or E leave each integral, and hence its supremum, unchanged.

Define
$$\operatorname{size}_f(S)=\sup_{(T,t)}\left(\frac1{|I_t|}\sum_{s\in T}|\langle f,\phi_s\rangle|^2\right)^{1/2},$$
where the supremum ranges over nonempty plus subtrees $T\subseteq S$ with designated top t. In particular singleton trees with their own tile as top are allowed. Empty S has size zero. This supremum is finite: if $\ell=\min_{s\in S}|I_s|>0$, each candidate top has length at least ell and the numerator is at most the finite sum over S of the finite squared coefficients. Size zero is equivalent to every coefficient being zero: the forward implication follows from singleton trees and the reverse from the displayed sum. The pairing depends only on the $L^2$ class of f.

A displayed **forest** is a finite family of disjoint tile subcollections, each equipped with a designated top and forming a tree. Its count is $\sum_T|I_T|$, where $I_T$ means its designated top interval. This counts top lengths with multiplicity even when intervals overlap. The empty forest has count zero. A different assignment of tops may change the count; no intrinsic count is attached to a tile set without a forest or an explicit existence assertion about such a decomposition. Restricting S can only decrease density and size, because it restricts the families in their suprema. No selection estimate is part of these definitions.
