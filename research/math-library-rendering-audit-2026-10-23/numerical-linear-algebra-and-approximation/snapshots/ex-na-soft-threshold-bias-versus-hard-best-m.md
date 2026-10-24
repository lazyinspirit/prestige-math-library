---
id: ex-na-soft-threshold-bias-versus-hard-best-m
kind: example
title: Soft thresholding shrinks a retained coefficient while hard best-m retention does not
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation-examples
dependency_level: 2
deps: [def-na-hard-soft-coefficient-thresholding, thm-na-orthogonal-best-m-term-thresholding]
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
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handout 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/d22d96dea13c0396474b1d87439fc4d0_Handout15.pdf"
---

## Example

In the standard orthonormal basis, let $c=(3,1)$, choose $m=1$, and use soft threshold $\lambda=1$. Hard best-1 retention gives $(3,0)$ and error norm $1$. Soft thresholding gives $(2,0)$ and error norm $\sqrt2$: it both shrinks the retained coefficient and discards the smaller one.

## Verification

**Given:** $c=(3,1)$, $m=1$, $\lambda=1$, and the standard orthonormal basis $U=I_2$.

[F1] [[def-na-hard-soft-coefficient-thresholding]]: $H_m$ keeps the $m$ largest absolute coordinates, while $S_\lambda(c)_i=\operatorname{sign}(c_i)(|c_i|-\lambda)_+$.

[F2] [[thm-na-orthogonal-best-m-term-thresholding]]: hard retention has squared error equal to the discarded squared-coefficient sum and is best among one-term approximations.

1.1 The coordinate magnitudes are $3>1$, so [F1] gives $H_1(c)=(3,0)$. The discarded coordinate is $1$, hence [F2] gives hard squared error $1$. [given, F1, F2, algebra]

2.1 The soft formula gives $S_1(c)=(2,0)$. Its residual is $(1,1)$, whose squared norm is $1^2+1^2=2$, so the soft error norm is $\sqrt2>\!1$. [given, F1, step 1.1, algebra] ∎
