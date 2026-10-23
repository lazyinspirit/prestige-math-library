---
id: def-fd-periodic-torus-domain
kind: definition
title: Periodic torus calculus
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "§1, p. 1: the source fixes the periodic convention T^3=(R/2πZ)^3; the definition here gives its coordinatewise d-dimensional version."
---

## Definition

For an integer $d\ge 1$, set $\mathbb T^d:=\mathbb R^d/(2\pi\mathbb Z)^d$ and let $Q_d:=[0,2\pi]^d$ be its chosen fundamental cube. A scalar or vector field on $\mathbb T^d$ is represented by its $(2\pi\mathbb Z)^d$-periodic lift to $\mathbb R^d$. For $k\ge 0$ and $m\ge 1$, $C^k_{\rm per}(\mathbb T^d;\mathbb R^m)$ consists of such lifts whose componentwise partial derivatives through order $k$ exist, are continuous and periodic, and are bounded, uniformly continuous, and Riemann integrable on $Q_d$. For a scalar field $f$ and a vector field $v=(v_1,\ldots,v_d)$, define

$$\nabla f:=(\partial_1 f,\ldots,\partial_d f),\qquad \operatorname{div}v:=\sum_{j=1}^d\partial_jv_j,\qquad \Delta f:=\sum_{j=1}^d\partial_j^2f.$$

The integral of an integrable scalar field over $\mathbb T^d$ means its Riemann integral over $Q_d$. For a matrix field $A=(A_{ij})$, $|A|^2:=\sum_{i,j}|A_{ij}|^2$. The notation $C^1([0,T];C^k_{\rm per})$ means that the field is continuously differentiable in time in the supremum norms of its spatial derivatives through order $k$. These are dimensionless mathematical conventions; they assign no physical units.
