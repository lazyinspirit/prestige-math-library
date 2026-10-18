---
id: def-na-haar-cell-average-projection
kind: definition
title: Haar cell-average projection on the unit interval
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 3"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Definition

For an integer $J\ge0$, put $h=2^{-J}$ and $I_{J,k}=[kh,(k+1)h]$ for $0\le k<2^J$. For an integrable real function $f$ on $[0,1]$, its Haar cell-average projection is the piecewise constant function
$$P_Jf(x)=\frac1h\int_{I_{J,k}}f(t)\,dt\quad\text{when }x\in[kh,(k+1)h).$$
The value at $x=1$ is defined by the average on the last cell. The half-open intervals give an unambiguous partition for point values; changing endpoint values does not change the integrals or the $L^2$ error.
