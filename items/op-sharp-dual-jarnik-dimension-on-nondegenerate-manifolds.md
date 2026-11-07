---
id: op-sharp-dual-jarnik-dimension-on-nondegenerate-manifolds
kind: open-problem
title: "Sharp dual Jarník–Besicovitch dimension law on nondegenerate manifolds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
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

Let $n>d\ge1$, let $\mathcal M\subset\mathbb R^n$ be an analytic nondegenerate $d$-dimensional submanifold, and for $\tau>n$ define
$$W_n^*(\tau):=\{x\in\mathbb R^n:|q\cdot x+p|<\|q\|_\infty^{-\tau}\text{ for infinitely many }(p,q)\in\mathbb Z\times(\mathbb Z^n\setminus\{0\})\}.$$
Is it true that for every such analytic nondegenerate manifold and every $\tau>n$,
$$\dim_H(W_n^*(\tau)\cap\mathcal M)=\frac{n+1}{\tau+1}+d-1?$$

Here nondegenerate means that the partial derivatives through some finite order span the ambient $\mathbb R^n$, and $\dim_H$ denotes Hausdorff dimension.

## Open problem references

[Beresnevich–Velani 2026](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf) — §§4.1–4.2, printed pp. 12–15.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — chapter 9, printed pp. 303–310: nondegenerate manifold conventions.


## Status

The 2026 survey records a general lower bound and a sharp upper bound only in a restricted exponent range and for special manifolds. The full stated range remains unresolved.
