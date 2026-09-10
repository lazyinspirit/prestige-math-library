---
id: "fs-every-riemannian-manifold-has-finite-distance-between-points-in-different-components"
kind: "false-statement"
title: "Every riemannian manifold has finite distance between points in different components"
deps: ["def-extended-riemannian-distance-on-a-disconnected-manifold"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every Riemannian manifold has finite distance between points in different connected components.

## Facts & Assumptions

**Given:** $M=\mathbb R\times\{0,1\}$ with its disjoint-union smooth structure and metric $dx^2$ on each line; $p=(0,0)$ and $q=(0,1)$.

[F1] [[def-extended-riemannian-distance-on-a-disconnected-manifold]]: The **extended Riemannian distance** on arbitrary $M$ is the componentwise Riemannian distance when two points are in the same component, and $+\infty$ otherwise. Within each component use thm-riemannian-distance-is-a-metric. Components are open, since small coordinate balls are connected. A continuous curve cannot meet two components because its connected interval image is connected, so the cross-component curve family is empty, with $\inf\varnothing=+\infty$. This is an extended metric: if two endpoints are in different components, any third point is in a different component from at least one of them, so the triangle inequality has infinite right side. It is a finite metric precisely when there are no distinct components. Empty and singleton manifolds retain their unique distances.

## Refutation

**Proof technique:** direct.

1.1 The two copies of $\mathbb R$ are open and closed, with the usual charts and positive metric coefficient $1$. A countable union of their rational interval bases is a countable basis; separation holds within each line and between the two open components. Thus this is a smooth Riemannian manifold. [given]

2.1 If a continuous curve $\gamma:[a,b]\to M$ joined $p$ to $q$, the inverse images of the two components would be disjoint nonempty relatively open sets covering the connected interval. This is impossible. The family of admissible piecewise $C^1$ curves is therefore empty, and its infimum is $+\infty$ by the extended-distance convention. [F1, step 1.1] ∎

## Source locator

Lee, pp. 337–338, length and connected-manifold distance; the disconnected extension here is the declared infimum-empty convention.
