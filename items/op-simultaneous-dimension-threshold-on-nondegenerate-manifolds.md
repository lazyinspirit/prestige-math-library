---
id: op-simultaneous-dimension-threshold-on-nondegenerate-manifolds
kind: open-problem
title: "Simultaneous approximation dimension threshold on nondegenerate manifolds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-simultaneous-and-dual-linear-forms-approximation
  - def-analytic-nondegenerate-point
  - def-hausdorff-dimension
sources:
  references:
    - title: "Beresnevich–Velani 2026"
      url: "https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf"
      locator: "§§4.1–4.2, printed pp. 12–15"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "chapter 9, printed pp. 303–310: nondegenerate manifold conventions"
---

## Open problem

Let $n>d\ge1$ and let $\mathcal M\subset\mathbb R^n$ be an analytic nondegenerate $d$-dimensional submanifold. For $\tau>1/n$, set
$$W_n(\tau):=\{x\in\mathbb R^n:\|q x-p\|_\infty<q^{-\tau}\text{ for infinitely many }(q,p)\in\mathbb N\times\mathbb Z^n\}.$$
Determine the largest threshold $\tau_{n,d}(\mathcal M)>1/n$ such that
$$\dim_H(W_n(\tau)\cap\mathcal M)=\frac{n+1}{\tau+1}-(n-d)$$
for every $1/n<\tau<\tau_{n,d}(\mathcal M)$.

Here nondegenerate means that the partial derivatives through some finite order span the ambient $\mathbb R^n$, and $\dim_H$ denotes Hausdorff dimension.

## Open problem references

[Beresnevich–Velani 2026](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf) — §§4.1–4.2, printed pp. 12–15.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — chapter 9, printed pp. 303–310: nondegenerate manifold conventions.


## Status

The survey reports the conjectured uniform infimum threshold $1/(n-d)$ for $d>1$ and $3/(2n-1)$ for curves, with proved ranges, planar-curve equality and a nonzero-curvature hypersurface case. The threshold beyond these results remains open and can depend on arithmetic properties of the manifold.
