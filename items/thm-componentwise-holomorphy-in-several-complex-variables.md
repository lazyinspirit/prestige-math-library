---
id: thm-componentwise-holomorphy-in-several-complex-variables
kind: theorem
title: "A map into $\\mathbb{C}^n$ is holomorphic exactly when each of its components is"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-map-and-complex-jacobian, def-holomorphic-function-in-several-complex-variables, rem-complex-euclidean-space-dictionary, thm-componentwise-limits-and-continuity, def-p-norms-on-rn, def-euclidean-inner-product, lem-standard-basis-of-f-n, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, lem-complex-linear-real-differential-criterion, def-wirtinger-operators-in-several-complex-variables, lem-complex-conjugation-and-modulus-laws, def-coordinate-column-and-matrix-of-a-linear-map, def-vector-valued-functions-limits-and-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m,n\ge1$, let $U\subseteq\mathbb C^m$ be open, let $a\in U$ and let
$F:U\to\mathbb C^n$ with components $F_j=\pi_j\circ F$ for $j<n$. Then $F$ is
holomorphic at $a$ ([[def-holomorphic-map-and-complex-jacobian]]) if and only if
every $F_j$ is holomorphic at $a$
([[def-holomorphic-function-in-several-complex-variables]]), and in that case

$$DF(a)h=\bigl(DF_0(a)h,\dots,DF_{n-1}(a)h\bigr),\qquad \bigl(J_{\mathbb C}F(a)\bigr)_{jk}=\partial_{z_k}F_j(a).$$

For $n=1$ this is the scalar definition read back.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$, $a\in U$ and $F:U\to\mathbb C^n$ with components $F_j$; the spaces are read through [[rem-complex-euclidean-space-dictionary]].

[L1] $F$ is holomorphic at $a$ when there is a $\mathbb C$-linear $L:\mathbb C^m\to\mathbb C^n$ with $F(a+h)=F(a)+L(h)+r(h)$ and $\lVert r(h)\rVert/\lVert h\rVert\to0$; $L$ is unique and its matrix in the standard bases is $J_{\mathbb C}F(a)$, whose $(j,k)$ entry is the $j$th coordinate of $L(e_k)$ ([[def-holomorphic-map-and-complex-jacobian]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L2] The scalar case is the same condition with $|r(h)|/\lVert h\rVert\to0$ and $L$ a $\mathbb C$-linear functional ([[def-holomorphic-function-in-several-complex-variables]]).

[L4] Under the interleaved real-coordinate identification fixed in the Given, $|w_j|^2=(\operatorname{Re}w_j)^2+(\operatorname{Im}w_j)^2$, so the Euclidean norm is $\lVert w\rVert=(\sum_{j<n}|w_j|^2)^{1/2}$ ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]).

[L5] Every $h$ satisfies $h=\sum_{k<m}h_ke_k$ in the standard basis ([[lem-standard-basis-of-f-n]]).

[L6] Finite sums in the additive commutative monoid of $\mathbb C$ may be regrouped termwise, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L7] If a scalar function is complex differentiable at $a$, its complex-linear real differential has the form $Dg(a)h=\sum_{k<m}(\partial_{z_k}g(a))h_k$ ([[lem-complex-linear-real-differential-criterion]], [[def-wirtinger-operators-in-several-complex-variables]]).

[L8] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] and [L6], every $w\in\mathbb C^n$ satisfies $|w_j|\le\lVert w\rVert$ for each $j<n$ and $\lVert w\rVert\le\sum_{j<n}|w_j|$, the first because $|w_j|^2$ is one term of a sum of nonnegative terms and the second because the square of the right-hand side dominates that sum. [L4, L6, L8]

2.1 Suppose $F$ is holomorphic at $a$ with $L=DF(a)$ as in [L1]. For each $j<n$ the map $\pi_j\circ L$ is $\mathbb C$-linear, being a coordinate of a $\mathbb C$-linear map, and $F_j(a+h)=F_j(a)+(\pi_j\circ L)(h)+r_j(h)$ with $|r_j(h)|\le\lVert r(h)\rVert$ by step 1.1; so $|r_j(h)|/\lVert h\rVert\to0$ and [L2] makes $F_j$ holomorphic at $a$ with $DF_j(a)=\pi_j\circ L$. [given, step 1.1, L1, L2]

2.2 Conversely, suppose every $F_j$ is holomorphic at $a$ with $L_j=DF_j(a)$, and set $L(h)=(L_0(h),\dots,L_{n-1}(h))$. Then $L$ is $\mathbb C$-linear because each coordinate is and the operations on $\mathbb C^n$ are coordinatewise, and the remainder of $F$ has $\lVert r(h)\rVert\le\sum_{j<n}|r_j(h)|$ by step 1.1; each summand is $o(\lVert h\rVert)$ and there are finitely many, so [L6] makes the sum $o(\lVert h\rVert)$ and [L1] makes $F$ holomorphic at $a$ with $DF(a)=L$. [given, step 1.1, L1, L2, L6]

3.1 In either direction $DF(a)h=(DF_0(a)h,\dots,DF_{n-1}(a)h)$ by steps 2.1 and 2.2 and the uniqueness in [L1]. Evaluating at $h=e_k$ and reading the $j$th coordinate, [L1], [L5] and [L7] give $(J_{\mathbb C}F(a))_{jk}=DF_j(a)e_k=\partial_{z_k}F_j(a)$. For $n=1$ the two conditions of [L1] and [L2] coincide. [step 2.1, step 2.2, L1, L2, L5, L7] ∎
