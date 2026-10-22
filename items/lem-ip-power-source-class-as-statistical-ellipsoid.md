---
id: lem-ip-power-source-class-as-statistical-ellipsoid
kind: lemma
title: Power source balls are weighted statistical ellipsoids
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - def-ip-power-source-set
  - lem-ip-index-source-elements-are-minimum-norm
  - def-compact-spectral-filter-and-qualification
  - thm-singular-value-decomposition-for-compact-operators
  - def-countable-choice
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the compact singular system and the source-class definition; the coefficient comparison and converse construction use no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 2, equations (5)–(6), PDF p. 2"
      url: https://arxiv.org/pdf/1707.01706v2
---

## Statement

Assume Countable Choice and let $K:X\to Y$ be a compact operator of infinite rank between real Hilbert spaces, with positive singular values $s_1\ge s_2\ge\cdots\downarrow0$. For every $\nu,\rho>0$, the coefficient sequences of the minimum-norm power source ball
$$X_{\nu,\rho}(K)=\{|K|^\nu w:w\in X,\ \|w\|_X\le\rho\}$$
are exactly
$$\left\{\theta\in\ell^2(\mathbb N_{>0},\mathbb R):\sum_{j\ge1}s_j^{-2\nu}\theta_j^2\le\rho^2\right\}.$$
Thus its ellipsoid weights are $a_j=s_j^{-\nu}$, a positive nondecreasing sequence.

## Statement references

[[def-ip-gaussian-sequence-inverse-model|Real SVD coordinate model and coefficient-space isometry]]

[[def-ip-statistical-ellipsoid-class|Weighted statistical ellipsoid class]]

[[def-ip-power-source-set|Power source ball]]

[[lem-ip-index-source-elements-are-minimum-norm|Power source elements lie in the minimum-norm subspace]]

[[thm-singular-value-decomposition-for-compact-operators|Compact singular system]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, Definition 2, equations (5)–(6)](https://arxiv.org/pdf/1707.01706v2)

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact singular-system and spectral-power definitions.

[F1] [[def-ip-gaussian-sequence-inverse-model]]: The right singular vectors form a complete orthonormal basis of $N(K)^\perp$, and their coefficient map identifies that subspace isometrically with $\ell^2(\mathbb N_{>0},\mathbb R)$.

[F2] [[def-ip-power-source-set]]: $X_{\nu,\rho}(K)=\{|K|^\nu w:w\in X,\ \|w\|_X\le\rho\}$.

[F3] [[def-ip-statistical-ellipsoid-class]]: A weighted statistical ellipsoid is $\{\theta\in\ell^2:\sum_j a_j^2\theta_j^2\le Q^2\}$ for positive nondecreasing weights.

[F4] [[thm-singular-value-decomposition-for-compact-operators]]: $|K|v_j=s_jv_j$, and $(v_j)$ is a complete orthonormal basis of $N(K)^\perp$.

[F5] [[def-compact-spectral-filter-and-qualification]]: A compact spectral multiplier acts on each singular eigenspace by its scalar multiplier and vanishes on the kernel for a positive spectral power.

[F6] [[lem-ip-index-source-elements-are-minimum-norm]]: Every element of the power source ball lies in $N(K)^\perp$.

[F7] [[def-real-power]] and [[thm-real-power-laws]]: Positive-base real powers obey $(s_j^2)^{\nu/2}=s_j^\nu$ and $s_j^{-\nu}=1/s_j^\nu$; [[thm-real-power-continuity-and-derivatives]] gives continuity and $(x^{-\nu})'=-\nu x^{-\nu-1}$ on $(0,\infty)$.

[F8] [[cor-mean-value-theorem]]: If $a<b$ and $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c\in(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$.

**Given:** Countable Choice, the compact real infinite-rank operator $K$, its fixed positive singular system $(s_j,v_j,u_j)$, and $\nu,\rho>0$.

## Proof


1.1 Write $w_j=\langle w,v_j\rangle_X$. By [F4] and the compact spectral multiplier [F5], the coefficient of $|K|^\nu w$ at $v_j$ is $s_j^\nu w_j$; the kernel component of $w$ contributes zero. [given, A1, F2, F4, F5, F7, algebra]

1.2 Conversely, take any $\theta\in\ell^2$ with $\sum_j s_j^{-2\nu}\theta_j^2\le\rho^2$ and put $w_j=s_j^{-\nu}\theta_j$. This sequence is square-summable with norm at most $\rho$; the coefficient isometry in [F1] gives a unique $w\in N(K)^\perp$ with these coefficients. [given, A1, F1, F7, construct]

2.1 For every $x=|K|^\nu w$ with $\|w\|_X\le\rho$, step 1.1 and Bessel's inequality for the orthonormal family $(v_j)$ give $\sum_{j\ge1}s_j^{-2\nu}\langle x,v_j\rangle_X^2=\sum_{j\ge1}w_j^2\le\|w\|_X^2\le\rho^2$. Thus every source element has coefficient sequence in the stated ellipsoid. [given, F1, F2, F4, F6, step 1.1, algebra]

2.2 Set $x=|K|^\nu w$ for the vector constructed in step 1.2. By [F5] its $j$th coefficient is $s_j^\nu w_j=\theta_j$; [F1] makes equality of the coefficient sequences equality of vectors in $N(K)^\perp$. Since $\|w\|_X\le\rho$, [F2] gives $x\in X_{\nu,\rho}(K)$. This proves the reverse inclusion. [given, F1, F2, F4, F5, step 1.2, algebra]

3.1 If $s_{j+1}=s_j$, their inverse powers are equal. Otherwise $0<s_{j+1}<s_j$; by [F7], $f(t)=t^{-\nu}$ is continuous on $[s_{j+1},s_j]$ and differentiable on its interior, with $f'(t)=-\nu t^{-\nu-1}<0$. Thus [F8] gives $f(s_j)-f(s_{j+1})=f'(c)(s_j-s_{j+1})<0$ for some $c\in(s_{j+1},s_j)$. In both cases $s_{j+1}^{-\nu}\ge s_j^{-\nu}$. Hence $a_j=s_j^{-\nu}$ is positive and nondecreasing; by [F3] the right-hand set is a weighted statistical ellipsoid. Steps 2.1 and 2.2 prove the two set inclusions, completing the identification. [given, F3, F4, F7, F8, step 2.1, step 2.2, algebra] ∎
