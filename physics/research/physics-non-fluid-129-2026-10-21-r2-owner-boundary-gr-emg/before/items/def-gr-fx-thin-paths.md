---
id: def-gr-fx-thin-paths
kind: definition
title: Piecewise-smooth paths and thin homotopies
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-smooth-manifold
  - def-smooth-map-between-manifolds-with-boundary
  - lem-the-set-of-functions-between-two-sets-is-a-set
  - def-axiom-schema-of-separation
  - def-equivalence-relation
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-map-between-manifolds-with-boundary: mathematical-premise
  lem-the-set-of-functions-between-two-sets-is-a-set: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-equivalence-relation: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, §2.1, Definitions 2.1–2.2"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "PDF pp. 6–7, smooth paths, fixed-endpoint homotopies, and the rank-at-most-one condition. This item uses the same thinness condition for piecewise-smooth path representatives."
verification:
  precheck: pass
---

## Definition

Let $M$ be a smooth manifold and $U\subseteq M$ open. A **piecewise-smooth path** in $U$ is a continuous map $\gamma:[0,1]\to U$ for which some finite partition $0=t_0<t_1<\cdots<t_n=1$ makes every restriction $\gamma|_{[t_{j-1},t_j]}$ smooth as a map of manifolds with boundary. Its source and target are $\gamma(0)$ and $\gamma(1)$. The collection of all such paths is a set: it is a subset, defined by separation, of the function set from $[0,1]$ to $U$.

Two paths $\gamma_0,\gamma_1$ with the same source $x$ and target $y$ are **thin-homotopic**, written $\gamma_0\sim_{\mathrm{thin}}\gamma_1$, if there is a continuous map $H:[0,1]^2\to U$ and a finite subdivision of the square into compact curvilinear triangles such that $H$ is smooth up to each triangle's boundary, $H(0,t)=\gamma_0(t)$, $H(1,t)=\gamma_1(t)$, $H(s,0)=x$, $H(s,1)=y$, and $\operatorname{rank}(dH_{(s,t)})\le 1$ on every smooth triangle. A **curvilinear triangle** here is a compact region equipped with a smooth parametrization from the standard closed two-simplex, smooth up to its three edges. The rank is the dimension of the image of the differential from the two-dimensional tangent space of the triangle to $T_{H(s,t)}M$. The quotient by this relation is used only after its equivalence and compatibility properties are proved.

## Definition references

[[def-smooth-manifold]]

[[def-smooth-map-between-manifolds-with-boundary]]

[[lem-the-set-of-functions-between-two-sets-is-a-set]]

[[def-axiom-schema-of-separation]]

[[def-equivalence-relation]]

## Remarks

The rank condition is the convention for thinness. The curvilinear triangles allow reparameterization homotopies whose smooth break lines move with the homotopy parameter. This is a local piecewise-smooth convention; it does not assert invariance for arbitrary continuous homotopies.
