---
id: thm-na-critical-besov-coefficients-best-m-tail
kind: theorem
title: Critical Besov coefficient control implies a best m-term squared-error rate
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 2
deps: [def-na-wavelet-coefficient-besov-quasinorm, thm-na-orthogonal-best-m-term-thresholding]
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9, §§9.2.2–9.2.3"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/d22d96dea13c0396474b1d87439fc4d0_Handout15.pdf"
---

## Statement

Let $J\ge3$, $N=2^J$, $s>0$, and $p=(s+1/2)^{-1}\in(0,2)$. Let $U\in\mathbb R^{N\times N}$ be orthogonal, $x\in\mathbb R^N$, and $c=Ux$. Regard $c$ as one coarse block $a\in\mathbb R^4$ and detail blocks $d_j\in\mathbb R^{2^j}$ for $2\le j\le J-1$, with the norm of [[def-na-wavelet-coefficient-besov-quasinorm]]. For $1\le m\le N$, hard retention of the $m$ largest coefficients has reconstruction error
$$\|x-U^TH_m(c)\|_2\le \sqrt{\frac{p}{2-p}}\,\|c\|_{b^s_{p,p}(J)}\,m^{-s},$$
where $c=Ux$ and $U$ is the orthogonal analysis matrix.

## Facts & Assumptions

**Given:** $s>0$, $p=(s+1/2)^{-1}$, a finite orthogonal coefficient vector $c=Ux$, and $1\le m\le N$.

[F1] [[def-na-wavelet-coefficient-besov-quasinorm]]: at $p=(s+1/2)^{-1}$ the scale exponent $p(s+1/2-1/p)$ is zero, and the coefficient quasi-norm is the $\ell^p$ quasi-norm.

[F2] [[thm-na-orthogonal-best-m-term-thresholding]]: hard retention of the $m$ largest coefficients minimizes the orthogonal reconstruction error and its squared error is the sum of the discarded squares.

## Proof

1.1 Since $s>0$, $p<2$, and [F1] gives $\sum_{n=1}^N|c_n|^p=\|c\|_{b^s_{p,p}(J)}^p$. Arrange the absolute coefficients in nonincreasing order $b_1\ge\cdots\ge b_N\ge0$. For each $n$, $n b_n^p\le\sum_{r=1}^n b_r^p\le\|c\|_{b^s_{p,p}(J)}^p$, so $b_n^2\le\|c\|_{b^s_{p,p}(J)}^2 n^{-2/p}$. [given, F1, choose, algebra]

2.1 By [F2], the squared best m-term error is $\sum_{n=m+1}^N b_n^2$. Because $2/p>1$, the decreasing function $t^{-2/p}$ satisfies $\sum_{n=m+1}^N n^{-2/p}\le\int_m^\infty t^{-2/p}\,dt=\frac{p}{2-p}m^{1-2/p}.$ Combining this with step 1.1 and taking square roots gives a factor $m^{1/2-1/p}=m^{-s}$, since $1/p=s+1/2$. When $m=N$, the actual error is zero by retaining every coefficient, so the bound still holds. [given, F2, step 1.1, algebra] ∎
