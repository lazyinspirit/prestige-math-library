---
id: lem-na-d4-multilevel-detail-support-and-moments
kind: lemma
title: Local support, affine cancellation, and normalization of multilevel D4 detail rows
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 3
deps: [def-na-d4-periodic-multilevel-transform, thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval, thm-na-daubechies-d4-filter-qmf-and-two-moments]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 7, 8 and 13"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Statement

In the multilevel transform of [[def-na-d4-periodic-multilevel-transform]], a detail row at stage $\ell$ has $2^{J-\ell}$ translates, is supported on at most $3(2^\ell-1)+1$ consecutive input indices on a periodic lift, has Euclidean norm $1$, and annihilates every affine function of the lifted sample index. Its $\ell^1$ norm, meaning the sum of absolute row entries, is at most the square root of its support size. Since $1\le\ell\le J-2$, this support has fewer than $N=2^J$ indices and so its lifted support contains no repeated residue modulo $N$.

## Facts & Assumptions

**Given:** $J\ge3$, $N=2^J$, the D4 filter pair, and the multilevel periodic procedure defined above.

[F1] [[def-na-d4-periodic-multilevel-transform]]: stage $\ell$ applies the four-tap low-pass filter to the approximation branch $\ell-1$ times before taking a four-tap high-pass detail, with all indices periodic modulo the current length.

[F2] [[thm-na-daubechies-d4-filter-qmf-and-two-moments]]: $\sum g_r=0$ and $\sum r g_r=0$, and the D4 filters satisfy the QMF conditions.

[F3] [[thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval]]: every applied one-level D4 analysis matrix and their multilevel composition are orthogonal.

## Proof

1.1 Expanding the recursion shows that the detail row at stage $\ell$, translated to its first input index, has taps at indices $t=2^{\ell-1}r+\sum_{v=1}^{\ell-1}2^{v-1}s_v$, where each of $r,s_1,\ldots,s_{\ell-1}$ ranges over $\{0,1,2,3\}$; each tuple contributes $g_r\prod_{v=1}^{\ell-1}h_{s_v}$ at that index, and the effective coefficient at $t$ is the sum of these products over all tuples with that index. This follows by substituting the low-pass sum at each earlier stage into the current high-pass sum. The largest such index is $3(2^\ell-1)$, so the row is supported in at most $3(2^\ell-1)+1$ consecutive locations. Because $\ell\le J-2$, this number is $3\cdot2^\ell-2\le3\cdot2^{J-2}-2<N$, so the locations are distinct modulo $N$. [given, F1, construct, induction, algebra]

2.1 Regard the effective taps in step 1.1 before reducing their input positions modulo $N$. A low-pass stage maps an affine input sequence $p(n)=\alpha+\beta n$ to an affine sequence: $\sum_{s=0}^3h_sp(2k+s)=2\beta k\sum h_s+\alpha\sum h_s+\beta\sum s h_s$, which is affine in $k$. Repeating this argument keeps the coarse sequence affine. The next high-pass stage applied to an affine sequence $A+Bk$ gives $A\sum g_s+B(2k\sum g_s+\sum s g_s)=0$ by [F2]. Therefore the effective detail tap row has zero sum and zero first moment. After summing all tuple contributions at each lifted location, periodic reduction assigns the resulting effective coefficients to residues. Step 1.1 confines these locations to one interval of fewer than $N$ consecutive integers, so reduction modulo $N$ is injective on that interval and the row lifts back to the same interval. [given, F1, F2, step 1.1, algebra]

3.1 By [F3], each row of the full multilevel analysis matrix has squared Euclidean norm $1$. If its support has $S$ locations with coefficients $z_1,\ldots,z_S$, then $(\sum_{i=1}^S|z_i|)^2\le S\sum_{i=1}^S|z_i|^2=S$, since $S\sum_i|z_i|^2-(\sum_i|z_i|)^2=\sum_{i<j}(|z_i|-|z_j|)^2\ge0$. Hence its $\ell^1$ norm is at most $\sqrt S$. The detail block at stage $\ell$ has the length of the current approximation after downsampling, namely $N/2^\ell=2^{J-\ell}$ rows. This and the affine cancellation from step 2.1 establish every clause of the Statement. [F1, F3, step 1.1, step 2.1, algebra] ∎
