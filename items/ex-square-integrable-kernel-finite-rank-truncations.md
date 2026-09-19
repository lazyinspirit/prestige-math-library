---
id: ex-square-integrable-kernel-finite-rank-truncations
kind: example
title: Finite-rank truncations of a square-integrable kernel
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-l-two-kernels-give-hilbert-schmidt-operators, def-hilbert-schmidt-operator, thm-hilbert-schmidt-operators-are-compact, lem-finite-rank-operators-are-compact, def-square-summable-family-on-an-arbitrary-index-set, def-counting-measure, prop-counting-measure-is-a-measure, rem-ell-p-is-l-p-of-counting-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-finite-sigma-finite-and-semifinite-measures, def-linear-basis, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-operator-norm, def-bounded-linear-operator, def-linear-combination-and-span, def-natural-numbers, def-complete-ordered-field, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, diagonal Hilbert–Schmidt operators, printed pp. 93–95"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "John Roe, Lectures on Analysis — Lecture 13, diagonal examples after Definition 13.1, printed p. 67"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$a=(a_n)_{n\in\mathbb N}$ be a square-summable complex family, that is an
element of $\ell^2(\mathbb N,\mathbb C)$
([[def-square-summable-family-on-an-arbitrary-index-set]]), and let
$X=Y=\mathbb N$ carry counting measure $\#$
([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]), so that
$L^2(\#;\mathbb C)$ is the space of complex square-summable sequences
([[rem-ell-p-is-l-p-of-counting-measure]],
[[def-l-p-space-as-a-quotient-by-null-functions]]). Put

$$k(m,n):=\begin{cases}a_n,&m=n,\\0,&m\ne n,\end{cases}\qquad(m,n)\in\mathbb N^2 .$$

Then $k\in L^2(\#\times\#;\mathbb C)$ with $\|k\|_2=\|a\|_2$, the kernel
operator of [[thm-l-two-kernels-give-hilbert-schmidt-operators]] is the diagonal
operator $(T_kf)(m)=a_mf(m)$, and for every $N\in\mathbb N$ the truncation
$k_N(m,n):=k(m,n)$ for $n\le N$ and $k_N(m,n):=0$ for $n>N$ satisfies:

1. $T_{k_N}$ has finite rank: its range admits the ordered basis
   $(e_{j_q})_{q<r}$ of [[def-linear-basis]], where
   $J=\{n\le N:a_n\ne0\}=\{j_0<\cdots<j_{r-1}\}$ is the increasing
   enumeration of $J$ and $e_n$ is the class of $\mathbf 1_{\{n\}}$, so
   $T_{k_N}$ is compact
   ([[lem-finite-rank-operators-are-compact]]);
2. $\|T_k-T_{k_N}\|_{HS}=\bigl(\sum_{n>N}|a_n|^2\bigr)^{1/2}$
   ([[def-hilbert-schmidt-operator]]);
3. $\|T_k-T_{k_N}\|=\sup_{n>N}|a_n|$, the supremum being a real number
   ([[def-operator-norm]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a square-summable complex family $(a_n)$, counting measure on $\mathbb N$, the diagonal kernel $k$ and its truncations $k_N$, and the standard vectors $e_n$ of $L^2(\#;\mathbb C)$.

[F1] Counting measure is a sigma-finite measure on $(\mathbb N,\mathcal P(\mathbb N))$, since $\mathbb N=\bigcup_N\{0,\dots,N\}$ and each finite set has finite counting measure; every function on $\mathbb N$ is measurable, $\int g\,d\#$ is the series sum of $g$ for nonnegative $g$ and for integrable $g$, and almost-everywhere equality is equality everywhere ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[rem-ell-p-is-l-p-of-counting-measure]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F2] Tonelli applies to nonnegative product-measurable functions on $\mathbb N\times\mathbb N$: $\int g\,d(\#\times\#)=\sum_m\sum_ng(m,n)$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-counting-measure]]).

[F3] The kernel theorem gives the well-defined bounded kernel operator, its exact Hilbert–Schmidt norm $\|T_h\|_{HS}=\|h\|_2$ for every square-integrable kernel $h$, and the Hilbert–Schmidt compactness theorem gives that such an operator is compact under Countable Choice ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-operators-are-compact]]).

[F4] A bounded linear operator whose range admits an ordered basis of finite length is compact ([[lem-finite-rank-operators-are-compact]], [[def-bounded-linear-operator]]).

[F5] The vectors $e_n$ are orthonormal, hence linearly independent with $\|e_n\|=1$, and they span the ranges considered below; an ordered basis is an injective finite list whose image is a basis ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-linear-basis]], [[def-linear-combination-and-span]]).

[F6] The operator norm is the supremum of $\|Df\|$ over $\|f\|\le1$ ([[def-operator-norm]]).

[F7] Since $|a_n|^2\le\sum_k|a_k|^2=\|a\|_2^2$, the set $\{|a_n|:n>N\}$ is nonempty and bounded above in $\mathbb R$, so its supremum is a real number by the least-upper-bound property ([[def-complete-ordered-field]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-natural-numbers]]).

[F8] Choice implies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Verification

**Proof technique:** direct.

**Given:** The objects above, a square-summable $(a_n)$, the diagonal kernel $k$, its truncations $k_N$, and for $N\in\mathbb N$ the finite set $J=\{n\le N:a_n\ne0\}$.

1.1 By [F1] the counting measures are sigma-finite and every subset of $\mathbb N^2$ is measurable, and by [F2] applied to $|k|^2$ one has $\|k\|_{L^2(\#\times\#)}^2=\sum_{m}\sum_n|k(m,n)|^2=\sum_n|a_n|^2=\|a\|_2^2<+\infty$; hence $k$ is a square-integrable kernel with $\|k\|_2=\|a\|_2$, and the same computation applies to every diagonal kernel with square-summable coefficients. [F1, F2, F8]

2.1 For every $m$, the defining integral of the kernel operator is the counting sum $\int k(m,n)f(n)\,d\#(n)=\sum_nk(m,n)f(n)$, in which the only possibly nonzero term is $n=m$, so $(T_kf)(m)=a_mf(m)$; by [F3] this diagonal operator is well defined on $L^2(\#;\mathbb C)$ and bounded with $\|T_k\|\le\|k\|_2=\|a\|_2$. [step 1.1, F1, F3]

2.2 **The truncated kernels.** For fixed $N$ the kernel $k-k_N$ is diagonal with coefficients $a_n\mathbf 1_{n>N}$, a square-summable family, so [step 1.1] applied to it gives $\|T_k-T_{k_N}\|_{HS}=\|k-k_N\|_{L^2(\#\times\#)}=\bigl(\sum_{n>N}|a_n|^2\bigr)^{1/2}$ by the exact-norm part of [F3]; moreover $k_N$ is the diagonal kernel with coefficients $a_n\mathbf 1_{n\le N}$, so $T_{k_N}$ is the diagonal operator with those coefficients. [step 1.1, F3]

3.1 **Finite rank of the truncations.** By [step 2.2] the range of $T_{k_N}$ is the set of sequences $a_n\mathbf 1_{n\le N}f(n)e_n$, which is exactly the span of $\{e_n:n\in J\}$. Since $J\subseteq\{0,\dots,N\}$ is finite, write its increasing enumeration as $J=\{j_0<\cdots<j_{r-1}\}$ for some $r\in\mathbb N$. The map $q\mapsto e_{j_q}$ with domain the von Neumann natural $r$ is an injective finite list whose image is an orthonormal family, hence is linearly independent, and it spans the range. Thus $(e_{j_q})_{q<r}$ is an ordered basis of the range, and $T_{k_N}$ is compact by [F4], while its Hilbert–Schmidt norm is finite by [step 2.2]. [step 2.2, F4, F5]

3.2 **Operator norm of the difference.** Let $D:=T_k-T_{k_N}$, so that $(Df)(m)=a_m\mathbf 1_{m>N}f(m)$ by [step 2.2]. For every $f$ in $L^2(\#;\mathbb C)$ one has $\|Df\|^2=\sum_{m>N}|a_m|^2|f(m)|^2\le S_N^2\|f\|^2$ where $S_N:=\sup_{n>N}|a_n|$ is the real number of [F7], so $\|D\|\le S_N$ by [F6]; conversely for each $m>N$ the vector $e_m$ has norm one by [F5] and $De_m=a_me_m$, so $\|D\|\ge|a_m|$ and hence $\|D\|\ge S_N$. Therefore $\|D\|=S_N=\sup_{n>N}|a_n|$. [step 2.2, F5, F6, F7]

4.1 Collecting the results, $k$ is a square-integrable diagonal kernel with $\|k\|_2=\|a\|_2$, $T_k$ is the diagonal operator of [step 2.1], the truncations $T_{k_N}$ are finite rank and compact by [step 3.1], and the two exact truncation errors are [step 2.2] and [step 3.2]. [step 2.1, step 2.2, step 3.1, step 3.2] ∎
