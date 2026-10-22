---
id: def-gr-fx-thin-paths
kind: definition
title: Piecewise-smooth paths and thin homotopies
status: published
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
  - def-smooth-singular-simplex
  - lem-the-set-of-functions-between-two-sets-is-a-set
  - def-axiom-schema-of-separation
  - def-equivalence-relation
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-map-between-manifolds-with-boundary: mathematical-premise
  def-smooth-singular-simplex: mathematical-premise
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $M$ be a smooth manifold and $U\subseteq M$ open. A **piecewise-smooth path** in $U$ is a continuous map $\gamma:[0,1]\to U$ for which some finite partition $0=t_0<t_1<\cdots<t_n=1$ makes every restriction $\gamma|_{[t_{j-1},t_j]}$ smooth as a map of manifolds with boundary. Its source and target are $\gamma(0)$ and $\gamma(1)$. The collection of all such paths is a set: it is a subset, defined by separation, of the function set from $[0,1]$ to $U$.

Two paths $\gamma_0,\gamma_1$ with the same source $x$ and target $y$ are **thin-homotopic**, written $\gamma_0\sim_{\mathrm{thin}}\gamma_1$, if there is a continuous map $H:[0,1]^2\to U$ and a finite subdivision of the square into compact curvilinear triangles such that $H$ is smooth up to each triangle's boundary, $H(0,t)=\gamma_0(t)$, $H(1,t)=\gamma_1(t)$, $H(s,0)=x$, $H(s,1)=y$, and $\operatorname{rank}(dH_{(s,t)})\le 1$ on every smooth triangle. A **curvilinear triangle** here is a compact region $D$ equipped with a specified homeomorphism $\psi:\Delta^2\to D$ from the standard closed two-simplex which is a smooth embedding on the interior, extends smoothly to a neighborhood of $\Delta^2$ in its affine span, and maps the three edges of $\Delta^2$ to the three boundary arcs of $D$. Saying $H$ is smooth up to $D$'s boundary means that $H\circ\psi$ extends smoothly from $\Delta^2$ to an open neighborhood of $\Delta^2$ in its affine span, with values in $U$; equivalently, it is a smooth singular $2$-simplex under the neighborhood-extension convention of [[def-smooth-singular-simplex]]. The rank is the dimension of the image of the differential from the two-dimensional tangent space of the triangle to $T_{H(s,t)}M$, computed through the interior chart $\psi$ and extended to boundary points by these smooth extensions. The quotient by this relation is used only after its equivalence and compatibility properties are proved.

## Definition references

[[def-smooth-manifold]]

[[def-smooth-map-between-manifolds-with-boundary]]

[[def-smooth-singular-simplex]]

[[lem-the-set-of-functions-between-two-sets-is-a-set]]

[[def-axiom-schema-of-separation]]

[[def-equivalence-relation]]

## Remarks

The rank condition is the convention for thinness. The curvilinear triangles allow reparameterization homotopies whose smooth break lines move with the homotopy parameter. This is a local piecewise-smooth convention; it does not assert invariance for arbitrary continuous homotopies.
