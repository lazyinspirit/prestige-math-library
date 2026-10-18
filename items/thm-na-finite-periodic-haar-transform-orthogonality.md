---
id: thm-na-finite-periodic-haar-transform-orthogonality
kind: theorem
title: Orthogonality, inverse, and Parseval identity for the finite periodic Haar transform
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-finite-periodic-haar-transform, def-euclidean-inner-product]
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
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 3 and 7"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Statement

For every $J\ge1$ and $x\in\mathbb R^{2^J}$, the transform $T_H$ of [[def-na-finite-periodic-haar-transform]] is an orthogonal linear map. Its inverse is $T_H^{T}$ and $\|T_Hx\|_2^2=\|x\|_2^2$.

## Facts & Assumptions

**Given:** An integer $J\ge1$ and $x\in\mathbb R^{2^J}$.

[F1] [[def-na-finite-periodic-haar-transform]]: at each stage the approximation/detail pair from $(u,v)$ is $((u+v)/\sqrt2,(u-v)/\sqrt2)$, and the final output lists the coarse coefficient followed by detail blocks.

[F2] [[def-euclidean-inner-product]]: the squared Euclidean norm of a vector is the finite sum of the squares of its coordinates.

## Proof

1.1 For any real $u,v$, the two outputs of one Haar pair satisfy $((u+v)/\sqrt2)^2+((u-v)/\sqrt2)^2=u^2+v^2$ by expansion and cancellation of the cross terms. Thus the pair map has matrix $2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ whose transpose times itself is the identity; applying it to disjoint coordinate pairs preserves the squared Euclidean norm. [given, F1, F2, algebra]

2.1 At stage $r$, the approximation coordinates are replaced by their pair-map outputs, with the second outputs recorded as $d^{(r)}$ and the first outputs passed to stage $r+1$. Therefore the map from the original vector to all stored stage outputs is a composition of the orthogonal pair maps and a coordinate permutation. It is orthogonal; hence its transpose is its inverse and it preserves squared norm. [given, step 1.1, F1, algebra] ∎
