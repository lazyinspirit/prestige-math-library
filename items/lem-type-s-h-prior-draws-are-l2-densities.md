---
id: lem-type-s-h-prior-draws-are-l2-densities
kind: lemma
title: Finite type-S and type-H prior draws are L2 probability densities
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-type-s-and-h-multiscale-density-priors
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §3.2"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.4 Notes"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Every finite type-S draw and every type-H draw in [[def-type-s-and-h-multiscale-density-priors]] is a well-defined nonnegative $L^2([0,1])$ probability density.

## Facts & Assumptions

**Given:** A finite type-S coefficient array or a type-H Dirichlet vector, and the bounded finite-level wavelet basis and normalized prior constructions of [[def-type-s-and-h-multiscale-density-priors]].

[F1] [[def-type-s-and-h-multiscale-density-priors]]: type S sets $f=e^{T-c(T)}$ for a finite bounded wavelet sum $T$, with $c(T)=\log\int_0^1e^T$; type H sets $f=2^L\omega_k$ on dyadic cells of length $2^{-L}$, where $\omega_k\ge0$ and $\sum_k\omega_k=1$.

## Proof

1.1 For a type-S draw, boundedness of the finite wavelet sum gives $M=\|T\|_\infty<\infty$, hence $e^{-M}\le e^{T(x)}\le e^M$ on $[0,1]$. Therefore $0<e^{-M}\le\int_0^1e^{T(x)}dx\le e^M<\infty$, so $c(T)$ is finite and $f=e^{T-c(T)}$ is positive and integrates to one. The same bounds make $f$ bounded, so $f\in L^2([0,1])$. [F1, given, algebra]

2.1 For type H, each dyadic cell has length $2^{-L}$, so $\int_0^1 f(x)dx=\sum_{k<2^L}2^L\omega_k2^{-L}=\sum_k\omega_k=1$. Also $\|f\|_2^2=2^L\sum_k\omega_k^2\le2^L(\sum_k\omega_k)^2=2^L<\infty$, since all weights are nonnegative. Thus every type-H draw is a nonnegative $L^2$ probability density. [F1, given, algebra] ∎
