---
id: def-na-clenshaw-curtis-dct-i
kind: definition
title: "Type-I cosine transform for Chebyshev–Lobatto data"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-canonical-natural, def-finite-sum, def-pi-via-first-positive-cosine-zero, def-sine-and-cosine-by-power-series, thm-reals-field]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, interpolation nodes and FFT implementation."
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, Chebyshev extrema and the Clenshaw–Curtis node family."
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$ be an integer and let $y=(y_0,\ldots,y_n)\in\mathbb R^{n+1}$. The type-I discrete cosine transform, in the Lobatto convention used here, is the vector $X=(X_0,\ldots,X_n)$ defined by
$$X_k:=y_0+(-1)^k y_n+2\sum_{j=1}^{n-1}y_j\cos\!\left(\frac{jk\pi}{n}\right),\qquad 0\le k\le n.$$
The sum is the finite sum of [[def-finite-sum]] and is empty when $n=1$. The data $y_j$ are ordered from the right endpoint toward the left endpoint at nodes $\cos(j\pi/n)$. This definition fixes the unnormalised DCT-I convention; the transform is not defined at $n=0$.
