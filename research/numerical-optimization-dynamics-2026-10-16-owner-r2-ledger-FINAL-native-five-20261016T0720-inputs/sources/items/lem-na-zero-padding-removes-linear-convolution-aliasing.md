---
id: lem-na-zero-padding-removes-linear-convolution-aliasing
kind: lemma
title: "Zero padding embeds linear convolution in cyclic convolution without aliasing"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 0
deps: [def-cyclic-convolution-on-z-mod-n, def-finite-sum-in-a-commutative-monoid, thm-integers-modulo-n-basic-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 13 §13.1"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, Problem 24.1"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
---

## Statement

Let $a_0,\ldots,a_{n-1}$ and $b_0,\ldots,b_{m-1}$ be finite complex sequences, and let $M\ge n+m-1$. Extend both sequences by zero to indices $0,\ldots,M-1$. For every $0\le k<n+m-1$, their length-$M$ cyclic convolution equals the ordinary linear convolution $c_k=\sum_{j=0}^{n-1}a_jb_{k-j}$, with $b_q=0$ outside $0\le q<m$. For every remaining cyclic index $n+m-1\le k<M$, the cyclic convolution is zero. Thus the first $n+m-1$ cyclic-convolution outputs are exactly the full linear convolution, with no wraparound alias.

## Facts & Assumptions

**Given:** Positive sequence lengths $n,m$, an integer $M\ge n+m-1$, and the zero-padded vectors $a,b\in\mathbb C^M$.

[F1] The length-$M$ cyclic convolution is $(a*_Mb)_k=\sum_{j=0}^{M-1}a_jb_{[k-j]_M}$ ([[def-cyclic-convolution-on-z-mod-n]]).

[F2] The supports of the padded vectors are contained in $\{0,\ldots,n-1\}$ and $\{0,\ldots,m-1\}$, respectively; the cyclic index is the unique representative in $\{0,\ldots,M-1\}$ ([[def-finite-sum-in-a-commutative-monoid]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 A nonzero summand in [F1] has $0\le j<n$ and its second index is a residue in $\{0,\ldots,m-1\}$. If $k<n+m-1$ and $j>k$, then $k-j<0$ and $M+k-j\ge M-(n-1)\ge m$, so $[k-j]_M$ lies outside the support of $b$ and the summand is zero. If $j\le k$, then $k-j\ge0$; whenever $k-j\ge m$ the summand is again zero, and otherwise the cyclic representative equals the ordinary index $k-j$. Therefore the nonzero terms of [F1] are exactly the linear-convolution terms. [given, F1, F2, choose]

2.1 Every index sum $j+q$ with $a_jb_q\ne0$ satisfies $0\le j+q\le n+m-2<M$. Hence no such sum wraps modulo $M$. For $k\ge n+m-1$, no supported pair has sum congruent to $k$ modulo $M$: a sum is at most $n+m-2$, and its difference from $k$ has magnitude less than $M$ for the output indices $0\le k<M$. Thus all cyclic terms vanish there. This proves the asserted zero tail and completes the claim. [step 1.1, F1, F2, algebra] ∎
