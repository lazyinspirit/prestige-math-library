---
id: thm-bramble-hilbert-on-reference-simplex
kind: theorem
title: Bramble–Hilbert approximation on a reference simplex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-reference-simplex-poincare-wirtinger, def-sobolev-space-wkp-and-its-norm, thm-holder-inequality-for-integrals, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.1, printed pp. 131–134: moment projection and Bramble–Hilbert estimate."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: reference-cell Bramble–Hilbert argument."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $1\le p<\infty$, integer $r\ge1$,
integer $s\ge0$, and real-valued $v\in W^{\max(r,s),p}(\widehat S_d)$.
There is a polynomial $q\in\mathbb P_{r-1}(\widehat S_d)$, chosen by
matching all means $\int_{\widehat S_d}D^\alpha q=
\int_{\widehat S_d}D^\alpha v$ for $|\alpha|\le r-1$, such that:

- if $0\le s\le r$, then
  $\|v-q\|_{W^{s,p}(\widehat S_d)}\le C|v|_{W^{r,p}(\widehat S_d)}$;
- if $s>r$, then
  $\|v-q\|_{W^{s,p}(\widehat S_d)}\le
  C\sum_{j=r}^{s}|v|_{W^{j,p}(\widehat S_d)}$.

The second clause assumes $v\in W^{s,p}$; constants depend only on
$d,p,r,s$.

## Facts & Assumptions

**Given:** $1\le p<\infty$, integers $r\ge1$ and $s\ge0$, and $v\in W^{\max(r,s),p}(\widehat S_d)$.

[F1] The mean-zero Poincare–Wirtinger inequality holds on the reference simplex for every finite $p$. ([[thm-reference-simplex-poincare-wirtinger]])

[F2] Sobolev classes provide all weak derivatives up to the specified integer order, and their norms are finite sums of derivative $L^p$ norms. ([[def-sobolev-space-wkp-and-its-norm]])

[F3] The mean-zero Poincare supplier [F1] assumes Countable Choice. ([[def-countable-choice]])

[F4] Holder's inequality on the finite-volume simplex sends $L^p$ derivatives into $L^1$ for finite $p$. ([[thm-holder-inequality-for-integrals]])

## Proof

1.1 The monomials $x^\alpha$ with $|\alpha|\le r-1$ form a basis of $\mathbb P_{r-1}$. Thus if $N$ is the number of these multi-indices, then $N=\dim\mathbb P_{r-1}$. Define the linear moment map $M:\mathbb P_{r-1}\to\mathbb R^N$ by $M(q)_\alpha=|\widehat S_d|^{-1}\int_{\widehat S_d}D^\alpha q$. If every component is zero, take the largest degree $m$ of a nonzero homogeneous part of $q$. For each $|\alpha|=m$, $D^\alpha q$ is the constant $\alpha!$ times the coefficient of $x^\alpha$ in that highest homogeneous part; its zero mean forces that coefficient to vanish. This contradicts the choice of $m$. Repeating downward shows $q=0$, so $M$ is injective and, since its domain and codomain have the same finite dimension, bijective. [given, algebra]

2.1 The vector of means of $D^\alpha v$, $|\alpha|\le r-1$, is defined because each derivative is in $L^p$ on the finite-measure simplex and therefore in $L^1$ by [F4]. By bijectivity in step 1.1 there is a unique $q\in\mathbb P_{r-1}$ with those moments. For $w=v-q$, each derivative $D^\alpha w$, $|\alpha|\le r-1$, has zero mean; and every derivative of $q$ of order at least $r$ is zero. [F2, F4, step 1.1, given]

3.1 Apply [F1] to every mean-zero derivative of order $r-1$ in step 2.1; its $L^p$ norm is bounded by the $L^p$ norms of derivatives of order $r$ of $v$, since $D^r q=0$. Apply [F1] successively to derivatives of orders $r-2,r-3,\ldots,0$, each of which also has zero mean; at each stage its norm is bounded by the next derivative order already controlled. Thus all derivatives of $w$ of order at most $r$ are bounded by $C|v|_{W^{r,p}}$. If $s\le r$, retaining only orders through $s$ proves the first clause. [F1, F2, F3, step 2.1]

4.1 If $s>r$, the same argument controls all derivative orders at most $r-1$ by $C|v|_{W^{r,p}}$. For each $r\le|\beta|\le s$, $D^\beta w=D^\beta v$ because $D^\beta q=0$. Adding the finitely many derivative bounds through order $s$ gives $\|w\|_{W^{s,p}}\le C\sum_{j=r}^s|v|_{W^{j,p}}$, proving the second clause. [F2, step 2.1, step 3.1, algebra] ∎
