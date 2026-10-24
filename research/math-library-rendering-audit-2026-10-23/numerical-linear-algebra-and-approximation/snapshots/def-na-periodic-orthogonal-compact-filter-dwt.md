---
id: def-na-periodic-orthogonal-compact-filter-dwt
kind: definition
title: Periodic finite orthogonal compact-filter wavelet transform
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 0
deps: [def-euclidean-inner-product]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Let $L\ge1$, let $N$ be even with $N\ge2L$, and let $h=(h_0,\ldots,h_{L-1})\in\mathbb R^L$. Set $g_j=(-1)^j h_{L-1-j}$ for $0\le j<L$, and set $h_j=g_j=0$ for all other integers $j$. The pair $(h,g)$ is an admissible orthogonal filter pair when
$$\sum_jh_j=\sqrt2,\quad \sum_jg_j=0,\quad \sum_jh_jh_{j-2r}=\delta_{r0},\quad \sum_jg_jg_{j-2r}=\delta_{r0},\quad \sum_jh_jg_{j-2r}=0\quad(r\in\mathbb Z).$$
Here $\delta_{r0}=1$ for $r=0$ and $0$ for $r\ne0$.
For $x\in\mathbb R^N$, define
$$a_k=\sum_{j=0}^{L-1}h_jx_{(2k+j)\bmod N},\qquad d_k=\sum_{j=0}^{L-1}g_jx_{(2k+j)\bmod N}\qquad(0\le k<N/2).$$
This is the one-level periodic analysis map. It has no padding: the indices are reduced modulo $N$. Its matrix $W$ has the $N/2$ rows for $a_k$ followed by the $N/2$ rows for $d_k$. Synthesis is, by definition, multiplication by $W^T$. A multilevel transform repeats this one-level rule on the approximation vector while its current length $M$ is even and $M\ge2L$, then stops; the boundary convention at every level is periodic modulo that level's current length.
