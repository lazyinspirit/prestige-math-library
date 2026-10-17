---
id: thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
kind: theorem
title: "The computed floating-point dot product obeys componentwise and normwise error bounds"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-relative-floating-point-model-and-unit-roundoff, lem-product-of-one-plus-deltas-gives-theta-n, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-abs-value]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
---



## Statement

Let $n\ge 1$ and let $x=(x_j),y=(y_j)\in\mathbb{R}^{n}$, with the dot product
$x\cdot y=\sum_{j<n}x_jy_j$ computed from left to right in an arithmetic model
with unit roundoff $u$ satisfying $nu<1$
([[def-standard-relative-floating-point-model-and-unit-roundoff]]), where every
product $x_jy_j$, every rounded product
$p_j:=\operatorname{fl}(x_jy_j)$, and every intermediate sum lies in the normal
range. Let $s_1:=p_0$ and, for $1\le k<n$, let
$s_{k+1}:=\operatorname{fl}(s_k+p_k)$. Then:

1. **Componentwise form.** There are reals $\delta_0,\dots,\delta_{n-1}$ with
   $|\delta_j|\le\gamma_n:=nu/(1-nu)$ such that
   $$s_n=\sum_{j<n}x_jy_j(1+\delta_j).$$
2. **Normwise form.**
   $$|s_n-x\cdot y|\;\le\;\gamma_n\sum_{j<n}|x_jy_j|\;\le\;\gamma_n\,\lVert x\rVert_1\lVert y\rVert_1,$$
   where $\lVert\cdot\rVert_1$ is the published $1$-norm
   ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]])
   and $|\cdot|$ the absolute value ([[def-abs-value]]).

## Facts & Assumptions

**Given:** A natural number $n\ge 1$, vectors $x,y\in\mathbb{R}^{n}$, a unit roundoff $u$ with $nu<1$, the rounded products $p_j=\operatorname{fl}(x_jy_j)$ for $j<n$, and the left-to-right computed sum $s_n$ above.

[L1] Each product and each sum obeys the relative model: $\operatorname{fl}(t)=t(1+\varepsilon)$ with $|\varepsilon|\le u$ for every real $t$ in the normal range ([[def-standard-relative-floating-point-model-and-unit-roundoff]]).

[L2] A product of factors $(1+\varepsilon_i)_{i<m}$ with $m\le n$ and $|\varepsilon_i|\le u$ for every $i<m$ equals $1+\delta$ with $|\delta|\le\gamma_m\le\gamma_n$, where $\gamma_n=nu/(1-nu)$ ([[lem-product-of-one-plus-deltas-gives-theta-n]]).

[L3] $\lVert x\rVert_1=\sum_{j<n}|x_j|$, and $|x_jy_j|=|x_j|\,|y_j|$ ([[def-p-norms-on-rn]], [[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], for each $j<n$ there is $\pi_j$ with $p_j=x_jy_j(1+\pi_j)$ and $|\pi_j|\le u$; and for each $k$ with $1\le k<n$ there is $\alpha_k$ with $s_{k+1}=(s_k+p_k)(1+\alpha_k)$ and $|\alpha_k|\le u$. [given, L1]

2.1 Unrolling the recursion of step 1.1 gives $$s_n=x_0y_0(1+\pi_0)\prod_{k=1}^{n-1}(1+\alpha_k)+\sum_{j=1}^{n-1}x_jy_j(1+\pi_j)\prod_{k=j}^{n-1}(1+\alpha_k),$$ where every empty product is $1$; each coefficient is the product of the error factor from the rounded multiplication $p_j$ and the error factors from the later additions through which that term passes. [step 1.1, algebra]

3.1 The coefficient of $x_0y_0$ in step 2.1 is a product of exactly $n$ factors of the form $1+\varepsilon$ with $|\varepsilon|\le u$, and for each $j$ with $1\le j<n$ the coefficient of $x_jy_j$ is a product of $n-j+1\le n$ such factors. By [L2], each coefficient therefore equals $1+\delta_j$ with $|\delta_j|\le\gamma_n$, so step 2.1 becomes $s_n=\sum_{j<n}x_jy_j(1+\delta_j)$, which is claim 1. [step 2.1, L2, algebra]

4.1 Subtracting $x\cdot y=\sum_jx_jy_j$ from claim 1 gives $s_n-x\cdot y=\sum_jx_jy_j\delta_j$, so by the triangle inequality and [L3] $|s_n-x\cdot y|\le\sum_j|x_jy_j|\,|\delta_j|\le\gamma_n\sum_j|x_jy_j|$. [step 3.1, L3, algebra]

5.1 Since $\sum_j|x_jy_j|=\sum_j|x_j|\,|y_j|\le\bigl(\sum_j|x_j|\bigr)\bigl(\sum_k|y_k|\bigr)=\lVert x\rVert_1\lVert y\rVert_1$ by [L3], step 4.1 gives the normwise form of claim 2. [step 4.1, L3, algebra]

6.1 Claim 1 is step 3.1 and claim 2 is steps 4.1 and 5.1. [step 3.1, step 4.1, step 5.1] ∎
