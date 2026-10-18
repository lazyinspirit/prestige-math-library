---
id: def-half-order-product-integration
kind: definition
title: Piecewise-linear product integration for a half-order diagonal singularity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-half-order-singular-integral-exists
  - def-continuous-real-functions-on-a-compact-metric-space
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "The Nyström and product-quadrature framework, Chapter 3, §3.3, printed pp. 60–65."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.4"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Chapter 1, §1.4, continuous-kernel Nyström method and its distinction from singular-kernel methods, printed pp. 14–16."
---

## Definition

Let $X:=C([0,1],\mathbb R)$ and let $a:[0,1]^2\to\mathbb R$ be continuous.
Use $S_x$ from [[lem-half-order-singular-integral-exists]] to define
$$(Ku)(x):=S_x\bigl(y\mapsto a(x,y)u(y)\bigr).$$
For an integer $n\ge1$, set $h:=1/n$ and $y_j:=jh$ for $j=0,\ldots,n$.
Define the nonnegative piecewise-linear hat functions by
$$\phi_{n,0}(y):=\max(1-y/h,0),\qquad   \phi_{n,n}(y):=\max(1-(1-y)/h,0),$$
and, for $1\le j<n$,
$$\phi_{n,j}(y):=\max(1-|y-y_j|/h,0).$$
Their piecewise-linear interpolant is
$$I_ng:=\sum_{j=0}^n g(y_j)\phi_{n,j}.$$
The product weights and product-integration operator are
$$w_{n,j}(x):=S_x(\phi_{n,j}),\qquad   (K_nu)(x):=\sum_{j=0}^n w_{n,j}(x)a(x,y_j)u(y_j)   =S_x\bigl(I_n(y\mapsto a(x,y)u(y))\bigr).$$
The kernel factor $s(x,y)=|x-y|^{-1/2}$ is integrated in the weights; the smooth
factor $a(x,y)u(y)$ is interpolated. This item defines the pointwise formulas;
the subsequent results on this page establish their mapping properties,
stability, and error estimates.
