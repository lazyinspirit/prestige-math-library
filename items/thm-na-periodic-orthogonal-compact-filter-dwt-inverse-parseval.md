---
id: thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval
kind: theorem
title: Inverse and Parseval identity for a periodic orthogonal compact-filter transform
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-periodic-orthogonal-compact-filter-dwt, def-euclidean-inner-product]
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
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 3 and 7"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/f95f7897eb0d62fc82ab88c3ae3937e6_Handout7.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Statement

For every admissible pair $(h,g)$, every even $N\ge2L$, and every $x\in\mathbb R^N$, the analysis matrix $W$ in [[def-na-periodic-orthogonal-compact-filter-dwt]] is orthogonal. Thus synthesis $W^T$ is its inverse and $\|Wx\|_2^2=\|x\|_2^2$. Every multilevel transform defined there is also orthogonal, with inverse given by reversing the stages and applying each stage's transpose.

## Facts & Assumptions

**Given:** An admissible real filter pair of length $L\ge1$, an even length $N\ge2L$, and $x\in\mathbb R^N$.

[F1] [[def-na-periodic-orthogonal-compact-filter-dwt]]: row $k$ of the low-pass or high-pass block has its nonzero tap $a_j$ at coordinate $(2k+j)\bmod N$; the tap correlation at every even shift is the stated Kronecker delta or zero.

[F2] [[def-euclidean-inner-product]]: row inner products are finite sums of coordinate products.

## Proof

1.1 Fix row types $a,b\in\{h,g\}$ and row indices $k,\ell\in\{0,\ldots,N/2-1\}$. A coordinate can contribute to both rows only when $2k+j\equiv2\ell+r\pmod N$ for taps $j,r\in\{0,\ldots,L-1\}$. Hence the row inner product is the sum of $a_jb_r$ over such pairs. The difference $j-r$ lies in $[-L+1,L-1]$, whose width is $2L-2<N$; so at most one representative of the congruence class modulo $N$ occurs. Since $N$ and $2(\ell-k)$ are even, that representative, when present, is $2s$ for an integer $s$. The inner product is therefore the filter correlation $\sum_j a_jb_{j-2s}$, which equals $1$ exactly for the same filter and $s=0$, and equals $0$ otherwise by [F1]. In the same-filter case $s=0$ forces $k=\ell$, because $k,\ell$ lie in a complete residue system modulo $N/2$. Thus the $N$ rows are orthonormal. [given, F1, F2, choose, algebra]

2.1 A square real matrix with orthonormal rows satisfies $WW^T=I_N$; hence it is invertible with inverse $W^T$, so also $W^TW=I_N$. It follows that $\|Wx\|_2^2=x^TW^TWx=\|x\|_2^2$. A multilevel transform is a composition of these one-level orthogonal maps and coordinate permutations; composing their transposes in reverse order gives its inverse and preserves norm. [step 1.1, given, algebra] ∎
