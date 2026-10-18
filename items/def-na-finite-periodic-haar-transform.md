---
id: def-na-finite-periodic-haar-transform
kind: definition
title: Finite periodic Haar transform
status: draft
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
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Definition

Let $J\ge1$, $N=2^J$, and $x\in\mathbb R^N$, with the Euclidean inner product and norm of [[def-euclidean-inner-product]]. Put $a^{(0)}=x$. For $r=1,\ldots,J$ and $0\le k<2^{J-r}$ define
$$a^{(r)}_k=\frac{a^{(r-1)}_{2k}+a^{(r-1)}_{2k+1}}{\sqrt2},\qquad d^{(r)}_k=\frac{a^{(r-1)}_{2k}-a^{(r-1)}_{2k+1}}{\sqrt2}.$$
The finite periodic Haar transform $T_Hx$ is the length-$N$ vector obtained by listing $a^{(J)}_0$, then $d^{(J)}_0$, then the entries of $d^{(J-1)}$, and continuing through $d^{(1)}$. The input is already of even dyadic length; this convention uses no padding and no endpoint extension.
