---
id: def-na-smooth-derivative-bound-class
kind: definition
title: Smooth functions on the unit interval with bounded derivative data
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 0
deps: [def-continuity-and-derivative-on-real-interval]
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
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 13"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/99231bc0f90b87508c01a2e7f5a960e7_Handout13.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Definition

Let $q\ge1$ be an integer and let $U\subseteq\mathbb R$ be an open interval containing $[0,1]$. A real function $f:U\to\mathbb R$ belongs to the smooth derivative-bound class $\mathcal S^q$ when it is $C^q$ on $U$ in the sense of [[def-continuity-and-derivative-on-real-interval]]. For $0\le r\le q$ define $M_r(f)=\sup_{0\le t\le1}|f^{(r)}(t)|$, with $f^{(0)}=f$. These derivative bounds are finite because the derivatives are continuous on the compact interval. They are bounds on the restriction to $[0,1]$, not a norm on arbitrary extensions to $U$; no claim that this class exhausts $W^{q,\infty}(0,1)$ is part of the definition.
