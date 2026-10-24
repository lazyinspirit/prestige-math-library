---
id: ex-the-circle-from-two-stereographic-charts
kind: example
title: "The circle from two stereographic charts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-atlas, def-smooth-manifold, def-smoothly-compatible-charts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Example 1.6"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Example

Let

$$S^1:=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}.$$

Removing the north pole $N=(0,1)$ and south pole $S=(0,-1)$, define
stereographic charts

$$\sigma_N(x,y)=\frac{x}{1-y},\qquad \sigma_S(x,y)=\frac{x}{1+y}.$$

Their inverses are

$$\sigma_N^{-1}(u)=\left(\frac{2u}{1+u^2},\frac{u^2-1}{1+u^2}\right),\qquad \sigma_S^{-1}(u)=\left(\frac{2u}{1+u^2},\frac{1-u^2}{1+u^2}\right).$$

These two charts form a smooth atlas on $S^1$, so they exhibit the circle as a
smooth $1$-manifold.

## Facts & Assumptions

**Given:** The circle $S^1$, the poles $N,S$, and the two stereographic maps $\sigma_N,\sigma_S$.

[F1] A smooth atlas is a covering family of pairwise smoothly compatible charts ([[def-smooth-atlas]]).

[F2] Smooth compatibility requires both transition maps on the overlap to be smooth ([[def-smoothly-compatible-charts]]).

[F3] A smooth manifold is a topological manifold equipped with a smooth structure ([[def-smooth-manifold]]).

## Verification

**Proof technique:** direct.

1.1 The domains $S^1\setminus\{N\}$ and $S^1\setminus\{S\}$ are open in $S^1$ [given] and cover it. The displayed inverse formulas show that each $\sigma_N$ and $\sigma_S$ is a homeomorphism onto $\mathbb R$: composing the inverse with the chart returns the original point, and composing the chart with the inverse gives $u$. So these are genuine charts. [given]

2.1 On the overlap $S^1\setminus\{N,S\}$ the transition maps are [F1, F2, step 1.1]

$$\sigma_S\circ\sigma_N^{-1}(u)=\frac{1}{u}, \qquad \sigma_N\circ\sigma_S^{-1}(u)=\frac{1}{u},$$

defined on $\mathbb R\setminus\{0\}$, hence smooth. Therefore the two charts are smoothly compatible by [F2], and [F1] makes them a smooth atlas. [F1, F2, step 1.1]

3.1 This smooth atlas equips $S^1$ with a smooth structure, so [F3] makes the [F3, step 2.1] circle a smooth $1$-manifold. [F3, step 2.1] ∎
