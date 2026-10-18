---
id: def-classical-and-formal-quantum-master-equations
kind: definition
title: Classical and formal quantum master equations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-bv-algebra-and-degree-plus-one-bracket
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Yvette Kosmann-Schwarzbach and Juan Monterde, Divergence operators and odd Poisson brackets, Annales de l’Institut Fourier 52 (2002)"
      url: "https://arxiv.org/pdf/math/0002209"
      locator: "§1.3 and §2.2, printed pp. 423–428 (PDF pp. 4–9): the Maurer–Cartan/BV quantum master equation and its relation to square-zero generators."
    - title: "Albert Schwarz, Geometry of Batalin–Vilkovisky quantization, arXiv:hep-th/9205088v1"
      url: "https://arxiv.org/pdf/hep-th/9205088"
      locator: "§1, PDF pp. 1–3: the odd bracket, BV Laplacian, and the distinction between the algebraic equation and integration over a Lagrangian submanifold."
---

## Definition

Let $(A,\Delta)$ be a BV algebra in the degree-$+1$ convention of
[[def-bv-algebra-and-degree-plus-one-bracket]], with derived bracket $\{-,-\}$.
For an element $S\in A^0$, the **classical master equation** (CME) is
$$\{S,S\}=0.$$

For a formal version, take $A$ over $\mathbb C$, let $\hbar$ be a central
formal variable of degree $0$, and write $A[\![\hbar]\!]$ for formal power series
with the Cauchy product. Extend $\Delta$ and $\{-,-\}$ coefficientwise. For
$S_\hbar\in A^0[\![\hbar]\!]$, the **formal quantum master equation** (QME) in
the convention used here is
$$\frac12\{S_\hbar,S_\hbar\}-i\hbar\Delta S_\hbar=0$$
as an equality in $A^1[\![\hbar]\!]$, checked coefficientwise. Each coefficient
uses only a finite Cauchy sum, so this is a formal algebraic condition and
requires no analytic convergence.

## Remarks

Kosmann-Schwarzbach–Monterde write a corresponding Maurer–Cartan equation as
$\Delta w+\frac12\{w,w\}=0$. Where $w=iS_\hbar/\hbar$ is formed in the
Laurent-series extension, multiplying that equation by $-\hbar^2$ gives the
QME displayed here. This scalar substitution is only a normalization
conversion. Neither equation defines a measure, proves a renormalization
claim, or by itself establishes anomaly cancellation. The CME differential
consequence is proved in
[[thm-classical-master-equation-defines-square-zero-differential]].
