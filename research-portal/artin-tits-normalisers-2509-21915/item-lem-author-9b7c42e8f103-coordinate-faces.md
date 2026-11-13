---
title: Coordinate faces span their annihilator subspaces
status: published
research_item: lem-author-9b7c42e8f103-coordinate-faces
dependency_level: 1
---

## Prerequisites

- [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)
- [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)
- [math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)
- [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)


## Statement

Let $V$ be a real vector space with finite basis $(\alpha_s)_{s\in S}$, let $I\subseteq S$, and put $E_I=\{f\in V^*:f(\alpha_i)=0\ (i\in I)\}$, $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Then $C_I$ is nonempty, relatively open in $E_I$, and spans $E_I$. For any linear automorphism $x$ of $V^*$, $xC_I$ is relatively open in $xE_I$ and spans $xE_I$. These assertions include $I=S$, where $C_S=E_S=\{0\}$.

## Statement references

[prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

[math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

## Facts & Assumptions

[F1] Coordinate dual functionals and the coordinate Euclidean metric on $V^*$, restricted to subspaces for relative topology, are supplied by [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites). Write $f_s=f(\alpha_s)$ and $\|f\|_2=(\sum_{s\in S}|f_s|^2)^{1/2}$.

[F2] The span of a subset is the smallest linear subspace containing it; a subset spans a space when that span is the whole space ([math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)).

[F3] A linear automorphism is an invertible linear self-map; its inverse is linear and satisfies both inverse equations ([math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)).

[F4] A subset of a metric space is open precisely when each of its points has a positive-radius ball contained in the subset ([math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)). Here the metrics on $E_I$ and $xE_I$ are restrictions of the coordinate Euclidean metric in [F1].

## Proof

**Given:** The objects and hypotheses of the statement, with the coordinate metrics in [F1]. **Goal:** Establish all the stated conclusions.

1.1 If $I=S$, then $C_I=E_I=\{0\}$, which is nonempty, open in itself and spans itself; also $xC_I=xE_I=\{0\}$ by linearity. All conclusions hold in this case, including $S=\varnothing$. Henceforth suppose $S\setminus I\ne\varnothing$. In dual coordinates $E_I$ is the subspace with coordinates zero on $I$, and $v=\sum_{s\notin I}\alpha_s^*$ belongs to $C_I$. For each $s\notin I$, both $v$ and $v+\alpha_s^*$ belong to $C_I$, so every subspace containing $C_I$ contains their difference $\alpha_s^*$. Every $f\in E_I$ equals $\sum_{s\notin I}f_s\alpha_s^*$; thus $C_I$ spans $E_I$. [F1, F2, F3, F4, algebra]

2.1 For $f\in C_I$ put $r_f=\frac12\min_{s\notin I}f_s>0$. If $g\in E_I$ and $\|g-f\|_2<r_f$, then $|g_s-f_s|\le\|g-f\|_2<r_f\le f_s/2$ for each $s\notin I$, so $g_s>0$. Thus the ball of radius $r_f$ about $f$ in $E_I$ lies in $C_I$. This proves relative openness. [F1, F4, step 1.1, algebra]

3.1 Let $(b_{st})_{s,t\in S}$ be the coordinate matrix of the linear inverse $x^{-1}$ and put $L=1+\sum_{s,t\in S}|b_{st}|>0$. For any $h\in V^*$ and $s\in S$, linearity and $|h_t|\le\|h\|_2$ give $|(x^{-1}h)_s|\le\sum_t|b_{st}||h_t|\le L\|h\|_2$. Fix $f\in C_I$ and $y=xf$. If $z\in xE_I$ and $\|z-y\|_2<r_f/L$, then $g=x^{-1}z\in E_I$ and $|g_s-f_s|=|(x^{-1}(z-y))_s|<r_f\le f_s/2$ for every $s\notin I$. Hence $g\in C_I$ and $z\in xC_I$. This supplies a positive-radius ball in $xE_I$ about every $y\in xC_I$, proving relative openness directly. Finally every subspace containing $xC_I$ contains $x(v+\alpha_s^*)-xv=x\alpha_s^*$ for $s\notin I$, and these vectors span $xE_I$ by applying $x$ to the coordinate expansion in step 1.1. Since $xC_I\subseteq xE_I$, it spans $xE_I$. Together with step 1.1 this also covers the zero-dimensional case. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
