---
id: def-na-d4-periodic-multilevel-transform
kind: definition
title: Periodic multilevel transform using the four-tap Daubechies filter
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 2
deps: [def-na-daubechies-d4-filter, def-na-periodic-orthogonal-compact-filter-dwt, thm-na-daubechies-d4-filter-qmf-and-two-moments]
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
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 8 and 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/29303d64110d5953075d8f3781ce61fe_Handout8.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Definition

Let $J\ge3$ and $N=2^J$. Starting with $a^{(0)}=x\in\mathbb R^N$, for $\ell=1,\ldots,J-2$ apply one-level periodic analysis with the D4 pair of [[def-na-daubechies-d4-filter]] to the current approximation vector $a^{(\ell-1)}$, whose length is $N/2^{\ell-1}\ge8$. Store the detail vector $d^{(\ell)}$ and set the next approximation to $a^{(\ell)}$. Stop with the length-four vector $a^{(J-2)}$. The output consists of that coarse vector and all detail vectors, ordered from coarsest details to finest. At every stage indices are reduced modulo that stage's current length; there is no padding or symmetric extension.
