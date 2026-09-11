---
id: def-fourier-transform-on-l-one-of-rn
kind: definition
title: Fourier transform on complex L1 classes
deps: ["def-complex-lp-and-euclidean-test-function-conventions", "def-l-p-space-as-a-quotient-by-null-functions", "def-l-one-of-a-measure", "def-complex-exponential", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity"]
justified_by: ["lem-l-one-fourier-transform-is-well-defined"]
status: draft
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Definition 11.1, p.119; substitute ξ→2πξ
---

## Definition

Let $n\ge1$ and $f\in L^1(\mathbb R^n;\mathbb C)$, with the componentwise integral and quotient conventions of [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-l-one-of-a-measure]]. Define
$$\widehat f(\xi)=\mathcal Ff(\xi):=\int_{\mathbb R^n}f(x)\exp(-2\pi i x\cdot\xi)\,dx,\qquad \xi\in\mathbb R^n.$$
Here $x\cdot\xi=\sum_{j=1}^n x_j\xi_j$, Lebesgue measure is used, and the exponential is [[def-complex-exponential]]. Its unit modulus follows from [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. The integral is evaluated using any measurable representative. Absolute convergence and representative independence are the obligations discharged by [[lem-l-one-fourier-transform-is-well-defined]]. The output is a function defined at every frequency, not merely an almost-everywhere class. At frequency zero the formula reads $\widehat f(0)=\int f$. No choice selection of representatives for a family of classes is part of this definition.
