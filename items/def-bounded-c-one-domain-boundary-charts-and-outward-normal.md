---
id: def-bounded-c-one-domain-boundary-charts-and-outward-normal
kind: definition
title: Bounded C1 domains and their outward normals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter, §1.10 Definitions 1.34–1.35 and §1.10.3, printed pp. 13–16 (PDF pp. 19–22). Interior-up-to-boundary regularity is the local convention.
status: draft
origin: pipeline
deps: ["def-total-derivative-in-euclidean-space", "def-inner-product-space", "def-countable-choice"]
justified_by: ["lem-surface-integral-is-independent-of-c-one-boundary-charts"]
---

## Definition

Throughout this surface-integration page assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the earlier Lebesgue and polar measure machinery. Let $n\ge2$. A bounded $C^1$ domain is a nonempty bounded open set $\Omega\subset\mathbb R^n$ whose boundary is locally, after a rigid change of coordinates, the graph $z=h(y)$ of a $C^1$ function, with $\Omega$ locally exactly the subgraph $z<h(y)$. Connectedness is not required. The outward normal in these coordinates is $\nu=(-Dh,1)/\sqrt{1+|Dh|^2}$, transported by the orthogonal coordinate map. Its overlap agreement is justified with surface charts below.

The convention $F\in C^1(\overline\Omega)$ means F is continuously differentiable in $\Omega$, and F and its first derivatives extend continuously to its closure. For $C^2$ require the same for derivatives through order two. No ambient extension across the boundary is required. Derivatives use [[def-total-derivative-in-euclidean-space]]; products are the real Euclidean inner products of [[def-inner-product-space]]. Write $\operatorname{div}F=\sum_i\partial_iF_i$, $Du=(\partial_iu)_i$ and $\Delta u=\sum_i\partial_i^2u$.

## Source notes

Hunter, §1.10 Definitions 1.34–1.35 and §1.10.3, printed pp. 13–16 (PDF pp. 19–22). Interior-up-to-boundary regularity is the local convention.

