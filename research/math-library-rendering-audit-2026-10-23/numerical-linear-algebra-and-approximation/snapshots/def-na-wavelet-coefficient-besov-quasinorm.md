---
id: def-na-wavelet-coefficient-besov-quasinorm
kind: definition
title: Finite wavelet-coefficient Besov quasi-norm on a dyadic multilevel transform
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 0
deps: []
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9, §9.2.3"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 13"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf"
---

## Definition

For an integer $J\ge3$, a coarse block $a=(a_0,a_1,a_2,a_3)$, a real $s>0$, and $p>0$, define the finite wavelet-coefficient Besov quasi-norm
$$\|(a,d)\|_{b^s_{p,p}(J)}^p=\sum_{\nu=0}^3|a_\nu|^p+\sum_{j=2}^{J-1}2^{jp(s+1/2-1/p)}\sum_{k=0}^{2^j-1}|d_{j,k}|^p.$$
This is the wavelet coefficient convention, with one coarse block and detail blocks indexed by their number $2^j$ of coefficients. At the critical relation $p=(s+1/2)^{-1}$, every scale weight equals $1$, so the quasi-norm is exactly the $\ell^p$ quasi-norm of the full coefficient vector. This finite coefficient definition does not assert equivalence with an intrinsic function-space Besov norm.
