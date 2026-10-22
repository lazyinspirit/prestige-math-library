---
id: def-gr-fx-future-null-geodesic-completeness
kind: definition
title: "Future null geodesic completeness and incompleteness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "A purely geometric definition of affine completeness within a specified Lorentzian manifold; it asserts neither curvature blow-up nor the existence of a singular point."
deps:
  - def-geodesic-of-an-affine-connection
  - def-gr-causal-curves-and-reachability
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
dependency_roles:
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §5.6, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §4.1 and Theorem 2."
      url: "https://arxiv.org/pdf/1410.5226"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with metric-selected connection $\nabla$. A **future-directed affinely parametrized null geodesic** is a smooth nonconstant curve $\gamma:J\to M$, where $J\subseteq\mathbb R$ is an interval with nonempty interior, such that its tangent $\dot\gamma$ is future-directed and null at every interior parameter and $D_\lambda\dot\gamma=0$. Here “null” means $g(\dot\gamma,\dot\gamma)=0$ and $\dot\gamma\ne0$, and future-directed means $g(\dot\gamma,N)<0$. The geodesic equation and covariant derivative are those of the metric-selected connection.

The **maximal future affine interval** of such a geodesic is the future endpoint interval of its maximal extension as an affinely parametrized geodesic in $M$. It is **future complete** when that interval has no finite upper endpoint, equivalently when its affine parameter tends to $+\infty$. The spacetime is **future null geodesically complete** when every future-directed null geodesic is future complete, and **future null geodesically incomplete** when at least one is not.

An affine change of parameter $\widetilde\lambda=a\lambda+b$ with $a>0$ preserves whether the maximal future interval is unbounded above, so these properties do not depend on the chosen positive affine normalization.

## Definition references

[[def-geodesic-of-an-affine-connection]]

[[def-gr-causal-curves-and-reachability]]

[[def-gr-metric-selected-connection]]

[[def-gr-smooth-lorentzian-objects]]

## Conventions and scope

This definition distinguishes an incomplete geodesic in $M$ from a curvature singularity or a point added to an extension. No equation for matter, Einstein equation, or claim about the physical adequacy of $(M,g,N)$ is included.
