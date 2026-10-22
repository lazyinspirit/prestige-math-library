---
id: def-ip-tangent-orientation-double-cover
kind: definition
title: "Tangent orientation double cover of a surface with boundary"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 3, §3.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Printed pp. 234–235 (PDF pp. 50–51), local orientations and the two-sheeted orientation cover; the present definition uses the tangent determinant-line model and allows boundary charts."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $M$ be a smooth two-dimensional manifold with boundary and let $\det T_xM=\Lambda^2T_xM$ be the determinant line of its tangent space. An orientation of $T_xM$ is a positive ray $o_x$ in this line. The **tangent orientation double cover** is the set
$$
\widetilde M=\{(x,o_x):x\in M,\ o_x\text{ is an orientation of }T_xM\},\qquad \pi(x,o_x)=x.
$$
For a boundary chart $\phi:U\to V\subseteq\mathbb H^2$, let $o_\phi(x)$ be the ray obtained by applying $\det(d\phi_x^{-1})$ to the standard positive ray in $\det\mathbb R^2$. Give $\widetilde M$ the smooth boundary-chart structure whose two local sheets over $U$ are $\{(x,o_\phi(x)):x\in U\}$ and $\{(x,-o_\phi(x)):x\in U\}$, each with coordinate map $(x,\pm o_\phi(x))\mapsto\phi(x)$. On an overlap with a second chart $\psi$, the sheet sign changes by $\operatorname{sgn}\det D(\psi\circ\phi^{-1})$; this sign is locally constant, so the sheet transitions are smooth half-space transitions. Thus $\pi$ is the associated two-sheeted smooth covering map, including over the boundary. The involution $\tau(x,o_x)=(x,-o_x)$ exchanges the sheets. The canonical orientation of $\widetilde M$ at $(x,o_x)$ is the ray $(\det d\pi_{(x,o_x)})^{-1}(o_x)$ in $\det T_{(x,o_x)}\widetilde M$.

## Definition references

[[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space|Definition of orientations as rays in determinant lines]]

[[def-covering-map-and-evenly-covered-neighbourhoods|Definition of a covering map and its sheets]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary|Definition of smooth charts and atlases with boundary]]

[[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary|Theorem on smooth tangent bundles at the boundary]]
