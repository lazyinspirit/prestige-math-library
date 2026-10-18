---
id: ex-na-haar-step-vector-compression
kind: example
title: Exact two-coefficient Haar compression of a four-entry step vector
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation-examples
dependency_level: 2
deps: [def-na-finite-periodic-haar-transform, thm-na-finite-periodic-haar-transform-orthogonality, thm-na-orthogonal-best-m-term-thresholding]
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
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 3 and 15"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Example

For the four-entry step vector $x=(1,1,0,0)$, the finite periodic Haar transform has coefficient vector $(1,1,0,0)$ in the order “coarse average, coarsest detail, finest details.” Retaining the first two coefficients reconstructs $x$ exactly. Among one-coefficient approximations the squared error is $1$.

## Verification

**Given:** $x=(1,1,0,0)$ and the transform convention of [[def-na-finite-periodic-haar-transform]].

[F1] [[def-na-finite-periodic-haar-transform]]: each pair $(u,v)$ maps to average/detail $((u+v)/\sqrt2,(u-v)/\sqrt2)$, and output order is coarse coefficient followed by detail blocks from coarse to fine.

[F2] [[thm-na-finite-periodic-haar-transform-orthogonality]]: the transform is orthogonal with inverse transpose and preserves squared Euclidean norm.

[F3] [[thm-na-orthogonal-best-m-term-thresholding]]: keeping $m$ largest coefficients is best among all $m$-coefficient reconstructions and squared error is the discarded squared sum.

1.1 The first pair $(1,1)$ yields approximation $\sqrt2$ and detail $0$; the second pair $(0,0)$ yields approximation and detail $0$. Transforming the remaining approximation pair $(\sqrt2,0)$ gives coarse coefficient $1$ and coarsest detail $1$. In the declared ordering the full vector is therefore $(1,1,0,0)$. [given, F1, algebra]

2.1 Keeping the two nonzero coefficients gives the original vector by the inverse in [F2]. Keeping only one leaves one coefficient of magnitude $1$ discarded; [F3] gives squared error $1$. [given, F2, F3, step 1.1, algebra] ∎
