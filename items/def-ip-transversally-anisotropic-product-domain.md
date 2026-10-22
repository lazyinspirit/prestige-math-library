---
id: def-ip-transversally-anisotropic-product-domain
kind: definition
title: "Transversally anisotropic product domain"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
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
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.1, transversally anisotropic product geometry and distinguished Euclidean coordinate."
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 1, definition of CTA manifolds as compact subdomains of product manifolds."
---

## Definition

A transversally anisotropic product domain of dimension $n\geq3$ is a compact connected smooth $n$-dimensional Riemannian domain $(M,g)$ with smooth boundary, together with a compact connected smooth $(n-1)$-dimensional Riemannian manifold with boundary $(M_0,g_0)$ and an isometric embedding of $(M,g)$ as a smooth domain compactly contained in $(\mathbb R\times M_0^\circ,dx_1^2\oplus g_0)$. The coordinate $x_1$ on $\mathbb R$ is the distinguished Euclidean coordinate; $M_0$ is the transversal manifold. All Laplacians use $\Delta_g=\operatorname{div}_g\nabla_g$. Neither $M$ nor $M_0$ is assumed orientable. A positive smooth conformal factor is not included in this definition; claims using a conformally related metric must state and prove the required conformal transformation separately.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metrics and manifolds]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary|Smooth domains and boundary charts]]

