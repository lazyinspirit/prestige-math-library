---
dependency_level: 5
id: def-standard-gl3-l-function-and-dirichlet-twist
kind: definition
title: "Standard GL3 L-Function and Primitive Dirichlet Twist"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-full-level-gl3-automorphic-distribution
  - def-primitive-dirichlet-character-and-conductor
  - lem-gl3-outer-dual-phase-normalization
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
justified_by:
  - lem-gl3-standard-l-series-converges-in-a-right-half-plane
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §§5–6"
      url: "https://arxiv.org/pdf/math/0408100v3"
pipeline_run: number-theory-all-141-2026-10-25
---

## Facts & Assumptions

**Given:** The supplied normalized distribution and coefficient data from [[def-full-level-gl3-automorphic-distribution]].

[F1] [[lem-gl3-outer-dual-phase-normalization]] proves the exact unphased sign and the phase-fixed coefficient transposition by a choice-free finite matrix calculation.

[F2] [[def-euler-gamma-function]] and [[thm-gamma-meromorphic-continuation]] supply the Euler integral on its right half-plane and its specified meromorphic continuation.

## Definition

Let $\tau$ be a full-level GL3 automorphic distribution with normalized Fourier coefficients $a_{r,s}$. Let $\vartheta(g)=w_{\mathrm{long}}(g^{\mathsf T})^{-1}w_{\mathrm{long}}^{-1}$ and define the phase-fixed dual distribution $\widetilde\tau=(-1)^{\delta_2}\vartheta^*\tau$, where $w_{\mathrm{long}}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$. The unphased pullback has normalized coefficients $(-1)^{\delta_2}a_{s,r}$, so this specified scalar makes the dual normalized coefficients exactly $a_{s,r}$. Define the standard Dirichlet series
$$L(s,\tau)=\sum_{n\geq1}a_{1,n}n^{-s},\qquad L(s,\widetilde{\tau})=\sum_{n\geq1}a_{n,1}n^{-s}$$
in their right half-planes of absolute convergence. For a primitive Dirichlet character $\chi$ of conductor $Q\geq1$, define
$$L(s,\tau\otimes\chi)=\sum_{n\geq1}a_{1,n}\chi(n)n^{-s},\qquad L(s,\widetilde{\tau}\otimes\chi)=\sum_{n\geq1}a_{n,1}\chi(n)n^{-s}$$
in their right half-planes of absolute convergence. Here Euler's gamma function is $\Gamma(s)=\int_0^\infty e^{-t}t^{s-1}\,dt$ for $\operatorname{Re}s>0$, with its meromorphic continuation to $\mathbb C$. Write $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$ and
$$G_0(s)=\Gamma_{\mathbb C}(s)\cos(\pi s/2),\qquad G_1(s)=i\Gamma_{\mathbb C}(s)\sin(\pi s/2).$$
For any integer $\nu$, $G_\nu$ means $G_0$ if $\nu$ is even and $G_1$ if $\nu$ is odd. Define the phase-fixed Gauss sum by
$$g_\chi=\sum_{k\bmod Q}\chi(k)e(k/Q),\qquad e(t)=\exp(2\pi i t).$$

## Definition references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §§5–6](https://arxiv.org/pdf/math/0408100v3)


[[lem-gl3-outer-dual-phase-normalization|The sign and phase-fixed dual coefficient transposition]]
