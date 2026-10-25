---
id: def-jacobian-determinant-of-a-c-one-map
kind: definition
title: "The Jacobian determinant of a square-dimensional $C^1$ map is the determinant of its Jacobian matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-c-one-map-and-local-inverse, def-jacobian-matrix-and-gradient, thm-total-derivative-computes-directional-and-partial-derivatives, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §5.5"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $g=(g_1,\ldots,g_n):U\to\mathbb R^n$ be $C^1$. Its **Jacobian matrix** at $x\in U$ is
$$Dg(x)=\left(\frac{\partial g_i}{\partial x_j}(x)\right)_{1\le i,j\le n},$$
the matrix of the total derivative in the standard bases. Its **Jacobian determinant** is
$$\det Dg(x).$$
The change-of-variables scale factor is $|\det Dg(x)|$. Thus an orientation-reversing derivative and an orientation-preserving derivative with the same volume scale have the same change-of-variables factor.
