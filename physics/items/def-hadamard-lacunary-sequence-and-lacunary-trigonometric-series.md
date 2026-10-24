---
id: def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series
kind: definition
title: "Hadamard-lacunary sequences and lacunary trigonometric series"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Definition 3.6.1"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Definition

Use the circle, normalized measure, and characters $e_k(x)=e^{2\pi i kx}$
from [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. A
strictly increasing sequence $(\lambda_j)_{j\ge1}$ of positive integers is
**Hadamard-lacunary with ratio $q$** if one fixed $q>1$ satisfies

$$\lambda_{j+1}\ge q\lambda_j\qquad(j\ge1).$$

A finite **lacunary trigonometric sum** is
$\sum_{j\in J}a_je_{\lambda_j}$ for a finite
$J\subset\mathbb N_{>0}$; a
**lacunary trigonometric series** is the corresponding formal series over
$j\ge1$. The ratio condition, rather than merely
$\lambda_{j+1}-\lambda_j\to\infty$, is part of this definition.
