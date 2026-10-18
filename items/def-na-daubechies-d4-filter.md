---
id: def-na-daubechies-d4-filter
kind: definition
title: Explicit four-tap Daubechies filter and its high-pass partner
status: draft
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
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 8"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/29303d64110d5953075d8f3781ce61fe_Handout8.pdf"
    - title: "Jelena Kovačević, Vivek K. Goyal, and Martin Vetterli, Fourier and Wavelet Signal Processing"
      url: "https://www.fourierandwavelets.org/FWSP_a3.2_2013.pdf"
justified_by:
  - thm-na-daubechies-d4-filter-qmf-and-two-moments
---

## Definition

Set
$$h=\frac1{4\sqrt2}(1+\sqrt3,\ 3+\sqrt3,\ 3-\sqrt3,\ 1-\sqrt3),\qquad g_j=(-1)^jh_{3-j}\quad(0\le j\le3).$$
Both filters are zero outside the indices $0,1,2,3$. The high-pass filter is therefore $g=(h_3,-h_2,h_1,-h_0)$. The exact admissibility and two-moment properties of this pair are the statement of [[thm-na-daubechies-d4-filter-qmf-and-two-moments]].
