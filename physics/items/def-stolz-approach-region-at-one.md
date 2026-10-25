---
id: def-stolz-approach-region-at-one
kind: definition
title: "Stolz approach regions at the boundary point 1 of the unit disc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-conjugate-real-imaginary-part-and-modulus]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2, Abel's theorem"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

For $C\ge1$, the **Stolz approach region at $1$** is
$$S_C:=\{z\in\mathbb C:|z|<1\text{ and }|1-z|\le C(1-|z|)\}.$$
A net or sequence approaches $1$ **within a Stolz region** if it converges to $1$ and all sufficiently late points lie in one fixed $S_C$. Convergence to $1$ is part of the definition and is not implied by the membership condition: the constant sequence $z_n=0$ satisfies $|0|<1$ and $|1-0|=1\le1\cdot(1-|0|)$, so it lies in $S_1$ at every index while converging to $0$. The definition uses the complex modulus of [[def-complex-conjugate-real-imaginary-part-and-modulus]]. Radial approach through $0\le r<1$ lies in $S_1$.
