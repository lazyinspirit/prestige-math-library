---
id: lem-product-of-one-plus-deltas-gives-theta-n
kind: lemma
title: "If |delta_i| <= u and n u < 1, then prod (1+delta_i) = 1 + theta_n with |theta_n| <= gamma_n"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-relative-floating-point-model-and-unit-roundoff, thm-geometric-series, thm-binomial-theorem]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 2: Floating Point Arithmetic"
      url: "https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html"
    - title: "David Bindel, CS 6210: Floating Point and Error Analysis"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html"
---



## Statement

Let $n\in\mathbb{N}$ with $n\ge 1$, let $u\ge 0$, let
$\delta_0,\dots,\delta_{n-1}\in\mathbb{R}$ satisfy $|\delta_i|\le u$ for every
$i<n$, and suppose $n u<1$. Then

$$\prod_{i<n}(1+\delta_i)=1+\theta_n\qquad\text{with}\qquad|\theta_n|\le\gamma_n:=\frac{n u}{1-n u}.$$

## Facts & Assumptions

**Given:** A natural number $n\ge 1$, a real $u\ge 0$ with $nu<1$, and reals $\delta_0,\dots,\delta_{n-1}$ with $|\delta_i|\le u$; write $\gamma_n:=nu/(1-nu)$.

[L1] The hypothesis $nu<1$ gives $u<1$, hence $1-u>0$ and $1+u>0$; the unit roundoff vocabulary comes from [[def-standard-relative-floating-point-model-and-unit-roundoff]].

[L2] Binomial expansion over the reals: $(1+t)^{n}=\sum_{k\le n}\binom{n}{k}t^{k}$ ([[thm-binomial-theorem]]), and the binomial coefficient satisfies $\binom{n}{k}\le n^{k}$ for every $k\le n$.

[L3] Geometric series: for a real $r$ with $0\le r<1$, $\sum_{k=0}^{\infty}r^{k}=1/(1-r)$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 Since $|\delta_i|\le u$, each factor satisfies $1-u\le 1+\delta_i\le 1+u$, and the factors $1\pm u$ are nonnegative by [L1]; multiplying the inequalities across $i<n$ gives $(1-u)^{n}\le\prod_{i<n}(1+\delta_i)\le(1+u)^{n}$. [L1, algebra]

1.2 Upper deviation. By [L2], $(1+u)^{n}-1=\sum_{k=1}^{n}\binom{n}{k}u^{k}\le\sum_{k=1}^{n}n^{k}u^{k}$, since $\binom{n}{k}\le n^{k}$ and $u\ge 0$. [L2, algebra]

2.1 The geometric series of [L3] at $r=nu$, where $0\le nu<1$, gives $\sum_{k=1}^{\infty}(nu)^{k}=nu/(1-nu)=\gamma_n$, so step 1.2 gives $(1+u)^{n}-1\le\gamma_n$. [step 1.2, L3, algebra]

3.1 Lower deviation. By [L2], $1-(1-u)^{n}=-\sum_{k=1}^{n}\binom{n}{k}(-u)^{k}=\sum_{k=1}^{n}\binom{n}{k}(-1)^{k+1}u^{k}\le\sum_{k=1}^{n}\binom{n}{k}u^{k}\le\gamma_n$, the last estimate being step 1.2 and step 2.1; hence $(1-u)^{n}\ge 1-\gamma_n$. [L2, step 1.2, step 2.1, algebra]

4.1 Define $\theta_n:=\prod_{i<n}(1+\delta_i)-1$. Step 1.1 gives $(1-u)^{n}-1\le\theta_n\le(1+u)^{n}-1$, and steps 2.1 and 3.1 give $(1-u)^{n}-1\ge-\gamma_n$ and $(1+u)^{n}-1\le\gamma_n$, so $-\gamma_n\le\theta_n\le\gamma_n$, that is $|\theta_n|\le\gamma_n$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Step 4.1 is exactly the claim. [step 4.1] ∎
