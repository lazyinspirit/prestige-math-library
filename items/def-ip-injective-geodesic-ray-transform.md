---
id: def-ip-injective-geodesic-ray-transform
kind: definition
title: "Injective geodesic ray transform on a transversal manifold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-geodesic-of-an-affine-connection
  - thm-fundamental-theorem-of-riemannian-geometry
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 1, CTA hypotheses and the injectivity condition on the transversal ray transform."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 2.2, Theorem 2.7, injectivity of the geodesic ray transform on simple manifolds."
---

## Definition

Let $(M_0,g_0)$ be a compact connected smooth Riemannian manifold with smooth boundary. A geodesic segment in $M_0$ satisfies the geodesic equation for the Levi-Civita connection of $g_0$ on $(0,L)$ and extends smoothly to its endpoints, where derivatives are interpreted one-sided. A nontangential maximal geodesic segment is a unit-speed geodesic $\gamma:[0,L]\to M_0$, with $L>0$, whose initial velocity points strictly inward at $\partial M_0$, whose terminal velocity points strictly outward at $\partial M_0$, and whose points for $0<t<L$ lie in $M_0^\circ$. For $f\in C_c^\infty(M_0^\circ,\mathbb R)$ define its geodesic ray transform by $I_{g_0}f(\gamma)=\int_0^L f(\gamma(t))\,dt$. The unweighted scalar ray transform is called injective on compactly supported smooth functions if $I_{g_0}f(\gamma)=0$ for every such segment implies $f=0$. For complex-valued $f$, injectivity means injectivity of its real and imaginary parts separately.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metric and unit-speed convention]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary|Boundary and interior of a smooth manifold with boundary]]

[[def-geodesic-of-an-affine-connection|Geodesics of a connection]]

[[thm-fundamental-theorem-of-riemannian-geometry|Levi-Civita connection of the metric]]

