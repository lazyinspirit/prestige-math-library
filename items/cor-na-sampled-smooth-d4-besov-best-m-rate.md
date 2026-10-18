---
id: cor-na-sampled-smooth-d4-besov-best-m-rate
kind: corollary
title: Smooth periodic samples have a best m-term D4 Besov-tail rate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 5
deps: [lem-na-sampled-smooth-d4-coefficient-decay, def-na-wavelet-coefficient-besov-quasinorm, thm-na-critical-besov-coefficients-best-m-tail, def-na-d4-periodic-multilevel-transform, thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval]
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9, §9.2.3"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 8 and 13"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf"
---

## Statement

Let $J\ge3$, $N=2^J$, and let $f:\mathbb R\to\mathbb R$ be $1$-periodic and $C^2$, with $f|_U\in\mathcal S^2$ for an open interval $U\supset[0,1]$. Form the normalized sample vector $x_n=N^{-1/2}f(n/N)$ and its multilevel D4 coefficients $(a,d)$. For any $0<s<2$, set $p=(s+1/2)^{-1}$. Then
$$\|(a,d)\|_{b^s_{p,p}(J)}^p\le4M_0^p+\frac{(9\sqrt3M_2/2)^p\,2^{-2p(2-s)}}{1-2^{-p(2-s)}},$$
where $M_r=\sup_{[0,1]}|f^{(r)}|$, and for $1\le m\le N$,
$$\|x-U_N^TH_m(U_Nx)\|_2\le \sqrt{\frac p{2-p}}\left(4M_0^p+\frac{(9\sqrt3M_2/2)^p\,2^{-2p(2-s)}}{1-2^{-p(2-s)}}\right)^{1/p}m^{-s}.$$
The norm is the finite wavelet-coefficient convention of [[def-na-wavelet-coefficient-besov-quasinorm]]; no intrinsic Besov norm equivalence is asserted.

## Facts & Assumptions

**Given:** A $1$-periodic $C^2$ function $f:\mathbb R\to\mathbb R$, its restriction $f|_U\in\mathcal S^2$ on an open interval $U\supset[0,1]$, its normalized samples, and $s\in(0,2)$.

[F1] [[lem-na-sampled-smooth-d4-coefficient-decay]]: each detail coefficient at scale $j$ is bounded by $(9\sqrt3/2)M_2\,2^{-5j/2}$.

[F2] [[def-na-d4-periodic-multilevel-transform]]: the coarse block has four coefficients, and the level-$j$ detail block has $2^j$ coefficients.

[F3] [[thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval]]: the multilevel analysis matrix $U_N$ is orthogonal and preserves the Euclidean norm.

[F4] [[def-na-wavelet-coefficient-besov-quasinorm]]: the critical coefficient norm has no scale weights when $p=(s+1/2)^{-1}$.

[F5] [[thm-na-critical-besov-coefficients-best-m-tail]]: a finite orthogonal coefficient vector with this critical norm has best m-term error at most $\sqrt{p/(2-p)}\|c\|_{b^s_{p,p}}m^{-s}$.

## Proof

1.1 Here $1/p=s+1/2$, so the coefficient norm's scale weight is $1$ by [F4]. Orthogonality [F3] gives $\|x\|_2^2=N^{-1}\sum_{n=0}^{N-1}|f(n/N)|^2\le M_0^2$, and therefore each of the four coarse coefficients has magnitude at most $M_0$. [given, F2, F3, F4, algebra]

1.2 At scale $j$, [F1] and [F2] imply $\sum_{k=0}^{2^j-1}|d_{j,k}|^p\le2^j(9\sqrt3M_2/2)^p2^{-5jp/2}=(9\sqrt3M_2/2)^p2^{-jp(2-s)},$ because $1-p(5/2)= -p(2-s)$. Summing over the finite range $2\le j\le J-1$ and bounding by the infinite geometric series gives the first displayed estimate. Its ratio is $2^{-p(2-s)}<1$ since $0<s<2$. [given, F1, F2, F4, algebra]

2.1 Apply [F5] to the finite orthogonal coefficient vector of $U_Nx$ and substitute the first bound from step 1.2. This gives the stated best m-term error rate with the declared constant. [given, F3, F5, step 1.2, algebra] ∎
