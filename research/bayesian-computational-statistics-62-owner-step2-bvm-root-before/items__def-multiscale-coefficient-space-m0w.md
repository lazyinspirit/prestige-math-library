---
id: def-multiscale-coefficient-space-m0w
kind: definition
title: Little-o multiscale coefficient space M0(w)
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-negative-sobolev-space-for-white-noise
justified_by:
  - lem-m0w-separable-and-projection-tails
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §2.1, equations (11)–(12)"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §5.2.2 and §7.3.4"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Definition

Use the wavelet coefficient levels $(l,k)$ and multiplicities $|K_l|=2^l$ from [[def-negative-sobolev-space-for-white-noise]]. The same coefficient-space definition applies to the Haar system used for type-H histograms: detail levels $l\ge0$ have $2^l$ coefficients, and the single scaling coefficient is an additional finite coarsest coordinate, included in the norm with weight $1$. Finite projections always retain that scaling coordinate; this finite convention does not alter any tail assertion. Let $w=(w_l)$ be nondecreasing with $w_l\ge1$. Define
$$M(w)=\left\{x=(x_{lk}):\|x\|_{M(w)}:=\sup_l\frac{\max_{k\in K_l}|x_{lk}|}{w_l}<\infty\right\}$$
and its closed little-o subspace
$$M_0(w)=\left\{x\in M(w):\frac{\max_{k\in K_l}|x_{lk}|}{w_l}\longrightarrow0\text{ as }l\to\infty\right\},$$
with the same norm. Call $w$ admissible when $w_l/\sqrt l\to\infty$. The finite coarsest level is included in the norm and does not affect this limit. Elements are coefficient sequences; in particular, they need not be $L^2$ functions. [[lem-m0w-separable-and-projection-tails]] proves that $M_0(w)$ is a separable Banach space, that $L^2$ coefficient sequences embed in it, and that finite-level projections converge in its norm.
