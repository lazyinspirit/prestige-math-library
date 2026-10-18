---
id: def-na-hard-soft-coefficient-thresholding
kind: definition
title: Hard m-term retention and soft thresholding of finite coefficients
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/d22d96dea13c0396474b1d87439fc4d0_Handout15.pdf"
---

## Definition

Let $c\in\mathbb R^N$. For $m\in\{0,\ldots,N\}$, choose any set $S_m$ of $m$ indices whose absolute coefficients are among the $m$ largest, resolving ties arbitrarily. The hard m-term retention $H_m(c)$ has coordinate $c_i$ for $i\in S_m$ and $0$ otherwise. For a threshold $\lambda\ge0$, the soft-threshold vector $S_\lambda(c)$ has coordinates
$$S_\lambda(c)_i=\operatorname{sign}(c_i)(|c_i|-\lambda)_+,\qquad (t)_+=\max(t,0),$$
with $\operatorname{sign}(0)=0$. Soft thresholding shrinks retained coefficients; it is not defined by a prescribed number of retained terms.
