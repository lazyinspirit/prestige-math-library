---
id: thm-counting-measure-integral-is-nonnegative-series
kind: theorem
title: "Counting-measure integration is a nonnegative series"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-cauchy-reals-lub-complete
  - def-counting-measure
  - def-integral-of-a-nonnegative-simple-function
  - def-nonnegative-extended-series
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - lem-of-naturals-positive
  - prop-counting-measure-is-a-measure
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-monotone-convergence-for-the-integral
  - thm-of-archimedean
  - thm-reals-ordered-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Measure Theory, Princeton University MAT425 Spring 2025 Lecture Notes, Example 2.42 and Claim 2.50"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT425_spring_2025/MAT425_Lecture_Notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathbb N=\{0,1,2,\ldots\}$ and let $\#$ be counting measure on
$(\mathbb N,\mathcal P(\mathbb N))$ ([[def-counting-measure]],
[[prop-counting-measure-is-a-measure]]). For every measurable
$f:\mathbb N\to[0,+\infty]$,
$$\int_{\mathbb N} f\,d\#=\sum_{n=0}^{\infty}f(n),$$
where the right side is the nonnegative extended series of
[[def-nonnegative-extended-series]].

## Facts & Assumptions

**Given:** A measurable function $f:\mathbb N\to[0,+\infty]$ and counting measure $\#$ on the power set of $\mathbb N$.

[F1] [[def-counting-measure]] and [[prop-counting-measure-is-a-measure]]: $\#$ is a measure on $\mathcal P(\mathbb N)$ and every singleton has measure one.

[F2] [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: a finite-range nonnegative measurable function is simple, its simple integral is the sum of its coefficients times the measures of the level sets, and this equals its nonnegative integral.

[F3] [[thm-monotone-convergence-for-the-integral]]: if nonnegative measurable functions increase pointwise to $f$, then their integrals increase to $\int f\,d\#.$

[F4] [[def-nonnegative-extended-series]]: the nonnegative series is the supremum of its finite partial sums $P_r:=\sum_{n<r}f(n)$.

[F5] [[cor-cauchy-reals-lub-complete]], [[thm-reals-ordered-field]], [[thm-of-archimedean]], and [[lem-of-naturals-positive]]: the real numbers are a complete ordered field, their canonical naturals are strictly increasing, and for every finite real $x$ some canonical natural is greater than $x$.

## Proof

**Given:** The function and counting measure in the Statement.

1.1 For each integer $m\ge1$, define $s_m(n)=\min\{f(n),m\}$ when $n<m$ and $s_m(n)=0$ when $n\ge m$. Every subset of $\mathbb N$ is measurable under [F1], so $s_m$ is measurable; its range is finite, hence it is simple by [F2]. For fixed $n$, the indicator $1_{n<m}$ is eventually one; if $f(n)<+\infty$, [F5] ensures the increasing canonical naturals eventually exceed $f(n)$, while if $f(n)=+\infty$ the capped values increase without bound. Thus $s_m(n)\uparrow f(n)$ for every $n$. Monotone convergence [F3] gives $\int f\,d\#=\lim_{m\to\infty}\int s_m\,d\#$. [F1, F2, F3, F5, given, construct]

1.2 By [F1] and [F2], for every $m\ge1$,
$$\int s_m\,d\#=\sum_{n<m}\min\{f(n),m\}\,\#(\{n\})=\sum_{n<m}\min\{f(n),m\}=:D_m.$$
For each $n<m$, $\min\{f(n),m\}\le\min\{f(n),m+1\}$ and $D_{m+1}$ adds a nonnegative term, so $D_m$ is nondecreasing. Termwise $\min\{f(n),m\}\le f(n)$, so $D_m\le P_m\le\sum_{n=0}^{\infty}f(n)$ by [F4]. [F1, F2, F4, step 1.1, algebra]

2.1 Fix $r\ge0$. If $P_r=+\infty$, some $f(n)=+\infty$ with $n<r$, so for every $m\ge r$ with $m>n$, $D_m\ge m$; the canonical naturals are unbounded by [F5], hence $\lim_mD_m=+\infty\ge P_r$. If $P_r<+\infty$, then each $f(n)$ for $n<r$ is finite. Write $\bar r=r\cdot1_{\mathbb R}$ and apply [F5] to $P_r+\bar r$ to choose an integer $m$ with $m\cdot1_{\mathbb R}>P_r+\bar r$. Then $m\ge r$ and $m>f(n)$ for every $n<r$, since nonnegative summands give $f(n)\le P_r$. Thus $D_m\ge P_r$, and monotonicity of $D_m$ again gives $\lim_mD_m\ge P_r$. Since this holds for every $r$, [F4] implies $\lim_mD_m\ge\sum_{n=0}^{\infty}f(n)$. Together with step 1.2's reverse bound, $\lim_mD_m=\sum_{n=0}^{\infty}f(n)$. [F4, F5, step 1.2, algebra, choose]

3.1 Steps 1.1 and 1.2 identify the integral with $\lim_mD_m$, and step 2.1 identifies that limit with the nonnegative extended series. This proves the stated identity, including infinite values. [step 1.1, step 1.2, step 2.1] ∎
