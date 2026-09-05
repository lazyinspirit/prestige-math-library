---
id: prop-integral-manifolds-have-the-distribution-dimension
kind: proposition
title: "Integral manifolds have the distribution dimension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-manifold-of-a-distribution,
       def-smooth-distribution-on-a-manifold,
       cor-the-tangent-space-of-an-n-manifold-has-dimension-n]
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

Let $\mathcal D$ be a rank-$k$ smooth distribution on $M$, and let
$i:N \to M$ be an integral manifold of $\mathcal D$. Then $\dim N = k$.

## Facts & Assumptions

**Given:** A rank-$k$ smooth distribution $\mathcal D$ and an integral manifold
$i:N \to M$ of $\mathcal D$.

[A1] For every $q \in N$, the image of $di_q$ equals $\mathcal D_{i(q)}$.

## Proof

**Proof technique:** direct.

1.1 Because $i$ is an immersion, each $di_q:T_qN \to T_{i(q)}M$ is injective. [given]
Since $i$ is integral, its image is $\mathcal D_{i(q)}$, which has dimension
$k$. Therefore $\dim T_qN = k$ for every $q \in N$. [given]

1.2 The dimension of a manifold is the common dimension of its tangent spaces, [given]
so $\dim N = k$. [given] ∎
