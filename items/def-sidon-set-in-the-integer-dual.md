---
id: def-sidon-set-in-the-integer-dual
kind: definition
title: "Sidon sets in the integer dual"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Definition 3.6.8"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Definition

With the characters of
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]], a set
$E\subset\mathbb Z$ is a **Sidon set** if there is a constant $C_E<\infty$
such that every finitely supported family $(a_k)_{k\in E}$ obeys

$$\sum_{k\in E}|a_k|\le C_E\left\|\sum_{k\in E}a_ke_k\right\|_\infty.$$

The constant may depend on $E$, but never on the finite support or on its
coefficients.
