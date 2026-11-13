---
title: Quadratic Gaussian process and its increment metric
status: published
research_item: lem-author-b9de37ca32a7-quadratic-gaussian-increments
dependency_level: 2
---

## Prerequisites

- [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)
- [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal)
- [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law)
- [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)
- [math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)


## Statement

Assume Choice and let $Y=T(Z)$ be the triangular Gaussian matrix of [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments). On the real unit sphere $S=\{v\in\mathbb R^r:\|v\|_2=1\}$ set $Q_v=v^TYv$. This is a centered Gaussian process with continuous sample paths. For $v,w\in S$, writing $D_{ij}=v_iv_j-w_iw_j$, one has $\mathbb E(Q_v-Q_w)^2=\sum_iD_{ii}^2+4\sum_{i<j}D_{ij}^2\le4\|v-w\|_2^2$. The process $H_v=2v^Tg$, for an independent-standard-normal vector $g\in\mathbb R^r$, is centered Gaussian with increment variance exactly $4\|v-w\|_2^2$.

## Facts & Assumptions

[F1] Finite independent standard normal scalars stack into a centered multivariate normal vector with identity covariance; every scalar projection is normal. [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal), [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law).

[F2] Gaussian processes are defined by normal finite linear combinations, allowing singular laws. Gaussian coordinates have mean zero and second moment one, and distinct independent coordinates have zero cross moment. [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process), [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments).

[F3] Finite integrable sums have linear expectation; real vectors satisfy Cauchy–Schwarz, and their Euclidean norm induces the metric $d(v,w)=\|v-w\|_2$ (restricted to $S$ when appropriate). [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one), [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] A real stochastic process is a family of real random variables indexed by a set and defined on a common probability space. [math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions).

[F5] A map between metric spaces is continuous if at every point, for each $\varepsilon>0$, some $\delta>0$ makes input distance less than $\delta$ imply output distance less than $\varepsilon$. Here sample paths are maps from $S$ with its restricted Euclidean metric to $\mathbb R$ with distance $|a-b|$. [math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 Expand $Q_v=\sum_i v_i^2Z_{ii}+2\sum_{i<j}v_iv_jZ_{ij}$. By [F1], for each fixed $v$ this scalar projection is a measurable real random variable on the common probability space carrying $Z$. Thus $Q=(Q_v)_{v\in S}$ is a stochastic process by [F4]. Every finite linear combination of the $Q_v$ is a scalar projection of the jointly Gaussian triangular coordinates, so [F1] and [F2] give the Gaussian-process assertion; [F3] gives zero mean. Expanding the square of $Q_v-Q_w$, the zero cross moments in [F2] give exactly $\sum_iD_{ii}^2+4\sum_{i<j}D_{ij}^2$. [F1, F2, F3, F4, algebra]

2.1 The preceding variance is at most $2\sum_{i,j}D_{ij}^2=4(1-(v^Tw)^2)$. Put $t=v^Tw\in[-1,1]$ by [F3]. Since $1-t^2\le2(1-t)$, this is at most $8(1-t)=4\|v-w\|_2^2$. By [F1], each $H_v=2v^Tg$ is a measurable scalar projection on the common probability space carrying $g$, so [F4] makes $H=(H_v)_{v\in S}$ a stochastic process. Every finite linear combination of the $H_v$ is also a scalar projection of $g$, so [F1] and [F2] prove that $H$ is centered Gaussian; direct expansion using its identity covariance gives $\mathbb E(H_v-H_w)^2=4\sum_i(v_i-w_i)^2$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Fix any outcome $\omega$ for the quadratic process and put $A=Y(\omega)$, a finite real matrix. For $v,w\in S$, the Euclidean norm gives $|v_i|,|w_i|\le1$ and $|v_i-w_i|\le\|v-w\|_2$. Consequently $|v_iv_j-w_iw_j|=|v_i(v_j-w_j)+w_j(v_i-w_i)|\le2\|v-w\|_2$, and finite summation yields $|Q_v(\omega)-Q_w(\omega)|\le L_Q(\omega)\|v-w\|_2$, where $L_Q(\omega)=2\sum_{i,j}|A_{ij}|<\infty$. For any outcome of the linear process, Cauchy–Schwarz in [F3] gives $|H_v(\omega)-H_w(\omega)|\le L_H(\omega)\|v-w\|_2$, where $L_H(\omega)=2\|g(\omega)\|_2<\infty$. For either path, write $L$ for its nonnegative finite bound. Given $\varepsilon>0$ and any $w\in S$, take $\delta=\varepsilon/(1+L)>0$; then $\|v-w\|_2<\delta$ implies that the output distance is at most $L\|v-w\|_2<\varepsilon$. By [F5] every path of each process is continuous. [F3, F5, step 1.1, step 2.1, algebra] ∎
