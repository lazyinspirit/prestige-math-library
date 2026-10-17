---
id: alg-mprk22-1
kind: algorithm
title: "The positive-interior MPRK22(1) step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-modified-patankar-euler
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: [thm-mprk22-1-positive-conservative]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §2 and §3.2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(p_{ij},d_{ij})$ be the rates of a finite conservative PDS [[def-finite-conservative-production-destruction-system]] with state domain $\Omega$. Given $y^n\in\mathbb R^m$ and $h$, if $y^n\notin\Omega_+$, any coordinate of $y^n$ is nonpositive, or $h\le0$, return an inadmissible-input status before evaluating rates or solving a system. First compute the stage $z$ by invoking [[alg-modified-patankar-euler]] with denominators $\sigma_i=y_i^n$:

$$z_i=y_i^n+h\sum_{j\ne i}\left(p_{ij}(y^n)\frac{z_j}{y_j^n}-d_{ij}(y^n)\frac{z_i}{y_i^n}\right).$$

If the stage solve does not return a unique vector, return stage-failure. If its output $z\notin\Omega_+$, return rate-domain-failure before evaluating rates at $z$. Otherwise form $B(y^n,z)$ with, for $i\ne j$,

$$B_{ij}(y^n,z):=\frac{p_{ij}(y^n)+p_{ij}(z)}{2z_j},\qquad B_{jj}(y^n,z):=-\sum_{i\ne j}B_{ij}(y^n,z),$$

and solve

$$\bigl(I-hB(y^n,z)\bigr)y^{n+1}=y^n.$$

Equivalently,

$$y_i^{n+1}=y_i^n+\frac h2\sum_{j\ne i}\left((p_{ij}(y^n)+p_{ij}(z))\frac{y_j^{n+1}}{z_j}-(d_{ij}(y^n)+d_{ij}(z))\frac{y_i^{n+1}}{z_i}\right).$$

If the final solve is not uniquely solvable, return update-failure; otherwise return its unique solution $y^{n+1}$. No zero-stage or denominator-regularized second-order variant is defined here.
