---
id: lem-integral-manifolds-are-locally-contained-in-plaques
kind: lemma
title: "Integral manifolds are locally contained in plaques"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-plaque-of-a-flat-chart,
       def-integral-manifold-of-a-distribution,
       cor-frobenius-local-first-integrals,
       prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component,
       def-connected-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\mathcal D$ be an integrable rank-$k$ distribution, let
$\varphi = (x,y):U \to \mathbb R^k \times \mathbb R^{n-k}$ be a flat chart for
$\mathcal D$, and let $i:N \to M$ be a connected integral manifold of
$\mathcal D$. Then each connected component of $i^{-1}(U)$ is mapped by $i$
into a single plaque of $U$.

## Facts & Assumptions

**Given:** A flat chart $\varphi = (x,y)$ and a connected integral manifold
$i:N \to M$.

[A1] Let $C$ be a connected component of $i^{-1}(U)$.

## Proof

**Proof technique:** direct.

1.1 The transverse coordinate map $y \circ i:C \to \mathbb R^{n-k}$ has zero [given]
differential. Indeed, the tangent image of $i$ is $\mathcal D$, and in a flat
chart the distribution is exactly the kernel of $dy$. [given]

1.2 A smooth map with zero differential is locally constant, hence constant on [given]
each connected component of its domain. Therefore $y \circ i$ is constant on
$C$. [given]

1.3 The image $i(C)$ is therefore contained in the slice with that fixed [given]
transverse coordinate, namely in a single plaque of the flat chart. [given] ∎
