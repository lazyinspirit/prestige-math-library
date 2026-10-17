---
id: alg-modified-patankar-euler
kind: algorithm
title: "Modified Patankar Euler for conservative transfer systems"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §1"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: n/a
---

## Definition

Let $m\ge1$, let $y^n\in[0,\infty)^m$, let $h>0$, and let $(p_{ij},d_{ij})$ be the rates of a finite conservative PDS [[def-finite-conservative-production-destruction-system]]. Choose declared denominators $\sigma_i>0$. The **modified Patankar Euler step** returns the unique solution $y^{n+1}$ of

$$y_i^{n+1}=y_i^n+h\sum_{j\ne i}\left(p_{ij}(y^n)\frac{y_j^{n+1}}{\sigma_j}-d_{ij}(y^n)\frac{y_i^{n+1}}{\sigma_i}\right),\qquad i=1,\ldots,m.$$

Equivalently, form $M\in\mathbb R^{m\times m}$ by

$$M_{ii}=1+h\sum_{j\ne i}\frac{d_{ij}(y^n)}{\sigma_i},\qquad M_{ij}=-h\frac{p_{ij}(y^n)}{\sigma_j}\quad(i\ne j),$$

and solve $My^{n+1}=y^n$. The admissible conditions are exactly the finite conservative PDS identities, $y^n\ge0$, $h>0$, and $\sigma_i>0$. Return an inadmissible-input status if any condition fails; otherwise return the unique exact solution of the stated linear system. The standard first-order choice is $\sigma_i=y_i^n$, which is admissible only when every $y_i^n>0$. A separately defined rate-factor form extends a first-order step to zero donor coordinates under an additional source-factorization hypothesis.
