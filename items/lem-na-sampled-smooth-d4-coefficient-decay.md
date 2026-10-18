---
id: lem-na-sampled-smooth-d4-coefficient-decay
kind: lemma
title: Two D4 vanishing moments give a local coefficient bound for smooth periodic samples
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 4
deps: [lem-na-d4-multilevel-detail-support-and-moments, def-na-smooth-derivative-bound-class, lem-taylor-lagrange-remainder-from-mean-value]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 13"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Statement

Let $J\ge3$, $N=2^J$, and let $f:\mathbb R\to\mathbb R$ be $1$-periodic and $C^2$. Its restriction to an open interval $U\supset[0,1]$ belongs to $\mathcal S^2$; write $M_2=M_2(f|_U)$. Form $x_n=N^{-1/2}f(n/N)$ for $0\le n<N$, and analyze $x$ with the multilevel D4 transform. For a detail coefficient $d_{j,k}$ at scale $j=J-\ell$ ($1\le\ell\le J-2$), one has
$$|d_{j,k}|\le\frac{9\sqrt3}{2}M_2\,2^{-5j/2}.$$

## Facts & Assumptions

**Given:** $J\ge3$, a $1$-periodic $C^2$ function $f:\mathbb R\to\mathbb R$, its restriction $f|_U\in\mathcal S^2$ on an open interval $U\supset[0,1]$, and the normalized samples $x_n=2^{-J/2}f(n2^{-J})$.

[F1] [[lem-na-d4-multilevel-detail-support-and-moments]]: each stage-$\ell$ detail row is supported on at most $3\cdot2^\ell$ consecutive lifted samples, has $\ell^1$ norm at most the square root of this support bound, and annihilates affine data on that lift.

[F2] [[def-na-smooth-derivative-bound-class]]: for $q=2$, the second derivative of $f$ is continuous and bounded by $M_2$ on a full period; periodicity gives the same bound on the periodic extension.

[F3] [[lem-taylor-lagrange-remainder-from-mean-value]]: for a $C^2$ function and a center $c$, $f(t)$ differs from its degree-one Taylor polynomial at $c$ by $f''(\xi)(t-c)^2/2$ for an intermediate point $\xi$.

## Proof

1.1 Fix a detail row at stage $\ell$ and lift its fewer-than-$N$ periodic support to a consecutive interval of integer indices. Periodicity makes the wrapped samples equal to $f(n/N)$ at these lifted indices. Let $c$ be the midpoint of the support interval in physical coordinates. Its length is at most $3\cdot2^\ell/N=3\cdot2^{-j}$, so every support point is within $3\cdot2^{-j}$ of $c$. The row's affine cancellation from [F1] removes the degree-one Taylor polynomial of $f$ at $c$ from the coefficient sum. [given, F1, F2, choose]

2.1 By [F3], each remaining Taylor remainder is bounded by $\frac12M_2(3\cdot2^{-j})^2$. The row coefficient is the sum of these remainders weighted by $2^{-J/2}$ times the detail-row entries. Using the $\ell^1$ bound $\sqrt{3\cdot2^\ell}$ from [F1] gives $|d_{j,k}|\le2^{-J/2}\sqrt{3\cdot2^\ell}\,\frac{9M_2}{2}2^{-2j} =\frac{9\sqrt3}{2}M_2\,2^{-j/2}2^{-2j},$ because $\ell=J-j$. This is the asserted estimate. [given, F1, F3, step 1.1, algebra] ∎
