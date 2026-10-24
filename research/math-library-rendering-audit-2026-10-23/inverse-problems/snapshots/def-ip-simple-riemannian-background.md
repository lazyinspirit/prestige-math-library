---
id: def-ip-simple-riemannian-background
kind: definition
title: "Simple Riemannian background"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-jacobi-field
  - def-ip-simple-surface-and-geodesic-xray-transform
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, full author lecture notes"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§2.2, PDF pp. 7–9: strict convexity, nontrapping, and no-conjugate-points convention."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, Definition 3.8.1 and Theorem 3.8.2, printed pp. 102–103: the standard compact connected simple-manifold convention."
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

Let $n\ge2$ and let $(M,g)$ be a compact, connected, nonempty smooth $n$-dimensional Riemannian manifold with smooth boundary. Let $\nu_{\mathrm{out}}$ be the outward unit normal and let $\nabla$ be the Levi–Civita connection of $g$. The boundary is **strictly convex** when
$$
g(\nabla_w\nu_{\mathrm{out}},w)>0
$$
for every boundary point and every nonzero boundary-tangent vector $w$. Use the curvature convention
$$
R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.
$$
A Jacobi field along a unit-speed geodesic $\gamma$ is a smooth vector field $J$ satisfying $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$, where $D_tJ=\nabla_{\dot\gamma}J$. The manifold has **no conjugate points** if every positive-length unit-speed geodesic segment $\gamma:[a,b]\to M$ has no nonzero Jacobi field with $J(a)=J(b)=0$. It is **nontrapping** if every maximal unit-speed geodesic starting in $M^\circ$ reaches $\partial M$ in finite forward and backward time. The pair $(M,g)$ is a **simple Riemannian background** if its boundary is strictly convex, it has no conjugate points, and it is nontrapping.

When $n=2$, this is the simple-surface convention used for the scalar geodesic X-ray transform on the required inverse-problems page.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-levi-civita-connection]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[def-jacobi-field]]

[[def-ip-simple-surface-and-geodesic-xray-transform]]
