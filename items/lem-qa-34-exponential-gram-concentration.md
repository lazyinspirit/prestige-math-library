---
id: lem-qa-34-exponential-gram-concentration
kind: lemma
title: Exponential Frobenius concentration for normalized Gram sampling
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - lem-qa-34-modfkv-sampling-gram-bound
  - def-finite-probability-space-and-event
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-markov-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement

Let $A\ne0$, $F=\|A\|_F$, and let $S,W$ be its exact normalized two-stage sketches in [[lem-qa-34-modfkv-sampling-gram-bound]], using $q\ge1$ samples at each stage. For $0<\delta<1$ and $t>0$, if
$$q\ge t^{-2}(1+\sqrt{2\log(2/\delta)})^2,$$
then, with probability at least $1-\delta$, both
$$\|A^TA-S^TS\|_F\le tF^2,\qquad \|SS^T-WW^T\|_F\le tF^2.$$
Deterministically $\|S\|_F=\|W\|_F=F$. The confidence bound has no matrix-dimension factor.

## Facts & Assumptions

**Given:** The finite sampling laws, exact sketch normalization, and parameters in the Statement.

[F1] [[lem-qa-34-modfkv-sampling-gram-bound]] proves the normalized Gram estimator is unbiased and has squared Frobenius mean error at most $F^4/q$, at both sampling stages, with the second statement conditional on $S$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives $\mathbb E|Z|\le\sqrt{\mathbb E Z^2}$ on a finite probability space. [[thm-markov-inequality]] bounds a nonnegative variable's upper tail by its mean divided by the threshold.

## Proof


1.1 We first prove a finite bounded-differences estimate. If a centered finite real variable $Y$ lies in an interval of length $c$, let $h(s)=\log\mathbb E e^{sY}$. Differentiating finite sums shows $h''(s)$ is the variance under the weights proportional to $e^{sY}$. Any variable in $[a,b]$ has variance at most $\mathbb E[(Y-(a+b)/2)^2]\le(b-a)^2/4$. Thus $h''(s)\le c^2/4$; since $h(0)=h'(0)=0$, integration gives $\mathbb E e^{sY}\le e^{s^2c^2/8}$ for all real $s$. [given, algebra]

2.1 Suppose a real function $f$ of independent finite samples changes by at most $c_j$ if sample $j$ is replaced. Reveal samples in order and let $M_j$ be the finite conditional mean of $f$. For each fixed earlier history, the possible values of $M_j$ lie in an interval of length at most $c_j$, since averaging the future preserves the coordinate oscillation bound. Therefore $M_j-M_{j-1}$ is conditionally centered in an interval of that length. Applying step 1.1 conditionally and summing over successive histories gives $\mathbb E e^{s(f-\mathbb Ef)}\le e^{s^2\sum_j c_j^2/8}$. Markov applied to this exponential, followed by $s=4u/\sum_jc_j^2$, gives $\mathbb P(f-\mathbb Ef\ge u)\le e^{-2u^2/\sum_jc_j^2}$ when $u>0$ and the denominator is positive. If all $c_j=0$, $f$ is constant on the product support and its upper tail is zero. [step 1.1, F2, algebra, construct]

3.1 For a finite random vector $X$ with $\|X\|^2=L$ identically, set $Z=q^{-1}\sum_jX_jX_j^T$ and $H=\mathbb E XX^T$. Independence cancels the mixed centered terms, and $\|XX^T\|_F^2=L^2$, so $\mathbb E\|Z-H\|_F^2\le L^2/q$. By [F2], $\mathbb E\|Z-H\|_F\le L/\sqrt q$. Replacing one $X_j$ changes $\|Z-H\|_F$ by at most $2L/q$, by the triangle inequality. Step 2.1 now gives $\mathbb P(\|Z-H\|_F>L(1+\sqrt{2\log(2/\delta)})/\sqrt q)\le\delta/2$. [given, F1, F2, step 2.1, algebra]

4.1 The row sampling is step 3.1 with $X=A_{i,*}^T/\sqrt{D_A(i)}$ and $L=F^2$. Every row of $S$ has squared norm $F^2/q$, so $\|S\|_F=F$. Its column mixture probability is $\|S_{*,j}\|^2/F^2$; hence every normalized sampled column of $W$ has squared norm $F^2/q$, and $\|W\|_F=F$. Conditional on every realized $S$, step 3.1 applies to the column sampling with the same $L=F^2$ and failure bound $\delta/2$. Averaging that bound over the finite row histories and adding the first-stage failure bound proves the assertion. Zero-probability rows and columns are never selected and require no division by zero. [given, F1, step 3.1, algebra] ∎

