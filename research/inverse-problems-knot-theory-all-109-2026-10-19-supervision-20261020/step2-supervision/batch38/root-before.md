---
id: op-ip-geodesic-xray-injectivity-with-conjugate-points
kind: open-problem
title: "Geodesic X-ray injectivity beyond the absence of conjugate points"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, author-hosted lecture notes"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.2, Question 2.1, PDF p. 9; the simple-manifold result and partial higher-dimensional results are discussed on PDF pp. 8–9."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 15, §15.2, printed pp. 340–342, on open directions involving trapping and conjugate points."
    - title: "Sean Holman and Venkateswaran P. Krishnan, Ray transform of symmetric tensor fields on Riemannian manifolds with conjugate points (2025; arXiv:2501.04544)"
      url: "https://arxiv.org/pdf/2501.04544"
      locator: "Introduction, PDF pp. 1–2, for microlocal results on cancellation of singularities and the scope of the 2025 work."
    - title: "Mikko Salo, Minicourse on Geometric Inverse Problems"
      url: "https://ipwin.compute.dtu.dk/DTU_lectures_v3.pdf"
      locator: "§1.2, Question 1.1, PDF p. 6, listing injectivity on compact strictly convex nontrapping manifolds as open."
verification:
  precheck: n/a
---

## Open problem

Let $n\ge2$ and let $(M^n,g)$ be a compact, connected, nonempty smooth Riemannian manifold with smooth boundary. Let $\nabla$ be the unique Levi-Civita connection of $g$. Write $\nu_{\mathrm{out}}$ for the outward unit normal, and assume $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for every nonzero boundary-tangent vector $w$. Assume every maximal unit-speed geodesic starting in $M^\circ$ reaches $\partial M$ in both time directions in finite time; no absence-of-conjugate-points condition is imposed. Set $SM=\{(x,v):x\in M,\ v\in T_xM,\ g_x(v,v)=1\}$, let $\nu_{\mathrm{in}}=-\nu_{\mathrm{out}}$, and set $\partial_+SM=\{(x,v)\in SM:x\in\partial M,\ g_x(v,\nu_{\mathrm{in}})>0\}$. For $f\in C^\infty(M)$ define $If(x,v)=\int_0^{\tau_+(x,v)}f(\gamma_{x,v}(t))\,dt$, where $\gamma_{x,v}$ solves $\nabla_{\dot\gamma}\dot\gamma=0$ with unit speed and initial state $(x,v)$, and $\tau_+(x,v)$ is its first positive exit time. Is $I$ injective on this class; equivalently, does $If=0$ on $\partial_+SM$ imply $f=0$ for every such $(M,g)$?

## Open problem references

[[def-riemannian-metric-and-riemannian-manifold|Definition of a Riemannian metric and manifold]]

[[def-levi-civita-connection|Definition of the Levi-Civita connection]]

[[thm-fundamental-theorem-of-riemannian-geometry|Existence and uniqueness of the Levi-Civita connection]]

[Mikko Salo, _On geometric inverse problems and microlocal analysis_, §2.2, Question 2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Paternain, Salo, and Uhlmann, _Geometric inverse problems, with emphasis on two dimensions_, §15.2](https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf)

[Holman and Krishnan, _Ray transform of symmetric tensor fields on Riemannian manifolds with conjugate points_](https://arxiv.org/pdf/2501.04544)

[Mikko Salo, _Minicourse on Geometric Inverse Problems_, §1.2, Question 1.1](https://ipwin.compute.dtu.dk/DTU_lectures_v3.pdf)

## Status

Status reviewed on 2026-10-21. Salo's 2023 RICAM notes and later minicourse notes both list injectivity for compact strictly convex nontrapping manifolds as an open question. The transform is injective on the simple class used by the theorem on this page; the notes also give noninjective examples when trapping is allowed, which do not settle this nontrapping question. Higher-dimensional injectivity is known under additional convex-foliation hypotheses, including cases where conjugate points may occur. The 2025 paper inspected here studies microlocal normal-operator structure and cancellation of singularities for tensor transforms with conjugate points; it does not state a general injectivity resolution for the class above. No general resolution was found in the sources checked for this review.
