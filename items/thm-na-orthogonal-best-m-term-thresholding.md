---
id: thm-na-orthogonal-best-m-term-thresholding
kind: theorem
title: Hard m-term retention is optimal for an orthonormal coefficient basis
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-hard-soft-coefficient-thresholding, def-euclidean-inner-product]
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/d22d96dea13c0396474b1d87439fc4d0_Handout15.pdf"
---

## Statement

Let $U\in\mathbb R^{N\times N}$ satisfy $U^TU=UU^T=I_N$, let $x\in\mathbb R^N$, and set $c=Ux$. For any $S\subseteq\{0,\ldots,N-1\}$ let $P_Sc$ retain exactly the coordinates in $S$. Then
$$\|x-U^TP_Sc\|_2^2=\sum_{i\notin S}|c_i|^2.$$
Consequently, for every $0\le m\le N$, $H_m(c)$ from [[def-na-hard-soft-coefficient-thresholding]] minimizes reconstruction error over all choices retaining at most $m$ coefficients. Its squared error is exactly the sum of the discarded squared coefficients.

## Facts & Assumptions

**Given:** A real orthogonal matrix $U$, a vector $x\in\mathbb R^N$, its coefficient vector $c=Ux$, and an integer $0\le m\le N$.

[F1] [[def-euclidean-inner-product]]: $\|z\|_2^2=\sum_i z_i^2$ for a real coordinate vector.

[F2] [[def-na-hard-soft-coefficient-thresholding]]: hard m-term retention keeps a set of $m$ largest absolute coefficients, with arbitrary tie resolution.

## Proof

1.1 Since $U^TU=I_N$, $x=U^Tc$. Orthogonality gives $\|x-U^TP_Sc\|_2^2=\|U^T(c-P_Sc)\|_2^2=\|c-P_Sc\|_2^2=\sum_{i\notin S}|c_i|^2.$ This proves the exact discarded-tail identity. [given, F1, algebra]

2.1 Minimizing the tail is equivalent to maximizing $\sum_{i\in S}|c_i|^2$ among sets with at most $m$ indices. A maximizing set can include no zero coefficient while omitting a nonzero one; and if it includes $j$ while omitting $i$ with $|c_i|>|c_j|$, replacing $j$ by $i$ strictly increases that sum. Since the index set is finite, a maximizing set exists, and every set of $m$ largest absolute coefficients is maximizing; when fewer than $m$ coefficients are nonzero, adding zero coordinates changes no error. By [F2], $H_m$ is one such set, proving optimality including ties and the endpoints $m=0,N$. [given, F2, step 1.1, algebra] ∎
