---
id: def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
kind: definition
title: Oriented interval meshes and broken polynomial spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
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
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.4, printed pp. 161–164: one-dimensional interval partition, broken polynomial trial space, and left/right traces."
---

## Definition

Let $a<b$ and choose an integer $N\ge1$ and points
$$a=x_0<x_1<\cdots<x_N=b.$$
The **oriented interval mesh** is the ordered family of cells $I_j=(x_{j-1},x_j)$, $1\le j\le N$, each oriented from left to right. Write $h_j=x_j-x_{j-1}>0$. For an integer $p\ge0$, the **broken polynomial space** is
$$V_h^{\mathrm{br}}=\prod_{j=1}^N\mathbb P_p(I_j),$$
with functions interpreted cell by cell. At an interior node $x_j$, write $w^-_j=w|_{I_j}(x_j)$ for the trace from the left cell and $w^+_j=w|_{I_{j+1}}(x_j)$ for the trace from the right cell; the chosen face normal points from left to right, and the jump is $[w]_j=w^+_j-w^-_j$. At $a$ and $b$, the outward normals are $-1$ and $+1$, respectively.

The published matching-affine-simplicial-mesh convention used elsewhere on the A page has dimension $d\ge2$. This definition supplies the distinct one-dimensional interval and trace convention; it makes no assertion about multidimensional cells.
