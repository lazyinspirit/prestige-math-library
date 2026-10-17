---
id: alg-mprk22-1
kind: algorithm
title: "The positive-interior MPRK22(1) step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-modified-patankar-euler
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: []
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

Let $y^n\in(0,\infty)^m$, let $h>0$, and let $(p_{ij},d_{ij})$ be the rates of a finite conservative PDS [[def-finite-conservative-production-destruction-system]]. First compute the stage $z$ by invoking [[alg-modified-patankar-euler]] with denominators $\sigma_i=y_i^n$:

$$z_i=y_i^n+h\sum_{j\ne i}\left(p_{ij}(y^n)\frac{z_j}{y_j^n}-d_{ij}(y^n)\frac{z_i}{y_i^n}\right).$$

Then form $B(y^n,z)$ with, for $i\ne j$,

$$B_{ij}(y^n,z):=\frac{p_{ij}(y^n)+p_{ij}(z)}{2z_j},\qquad B_{jj}(y^n,z):=-\sum_{i\ne j}B_{ij}(y^n,z),$$

and solve

$$\bigl(I-hB(y^n,z)\bigr)y^{n+1}=y^n.$$

Equivalently,

$$y_i^{n+1}=y_i^n+\frac h2\sum_{j\ne i}\left((p_{ij}(y^n)+p_{ij}(z))\frac{y_j^{n+1}}{z_j}-(d_{ij}(y^n)+d_{ij}(z))\frac{y_i^{n+1}}{z_i}\right).$$

Inputs with nonpositive $y_i^n$ or $h\le0$ are inadmissible. The algorithm returns stage-failure or update-failure if a required linear system is not uniquely solvable; under the stated conservative PDS and positive-input hypotheses, [[lem-strict-column-dominance-implies-nonnegative-inverse]] guarantees both solves are uniquely solvable and the stage is positive. No zero-stage or denominator-regularized second-order variant is defined here.
