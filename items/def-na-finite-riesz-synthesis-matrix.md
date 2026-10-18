---
id: def-na-finite-riesz-synthesis-matrix
kind: definition
title: Finite Riesz synthesis matrix and biorthogonal coefficient coordinates
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 11"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/1bb693efeb7d2ea97f12ae72812f7522_Handout11.pdf"
---

## Definition

Let $V\in\mathbb R^{N\times N}$ be invertible and suppose there are constants $0<A\le B<\infty$ such that
$$A\|z\|_2^2\le\|Vz\|_2^2\le B\|z\|_2^2\quad\text{for every }z\in\mathbb R^N.$$
Call $V$ a finite Riesz synthesis matrix and call $A,B$ Riesz bounds. For a signal $x\in\mathbb R^N$, the analysis coefficients are $c=V^{-1}x$ and synthesis is $x=Vc$. The inverse analysis matrix and synthesis matrix form a biorthogonal coordinate pair; unless $A=B=1$, coefficient truncation errors need not equal Euclidean tail energy.
