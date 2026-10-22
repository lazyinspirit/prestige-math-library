---
id: def-ip-calderon-weak-dn-map-for-bounded-conductivities
kind: definition
title: Weak Dirichlet-to-Neumann map for bounded conductivities
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hk-and-hk-zero-notation
  - def-ip-calderon-admissible-conductivity-class
  - def-wkp-zero-as-a-sobolev-closure
  - lem-ip-calderon-boundary-trace-quotient-identification
justified_by:
  - lem-ip-calderon-rough-dn-map-wellposedness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 1, printed pp. 1–2: the weak conductivity solution and energy-form definition of the DN map for bounded positive conductivities."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 2.1, printed pp. 5–6: the direct weak problem and DN map as a boundary dual functional."
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Section 2.3, printed pp. 9–10: the weak Neumann-to-Dirichlet map and inverse Dirichlet-to-Neumann map on mean-zero trace classes."
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset\mathbb R^d$ be a nonempty bounded connected smooth domain, and let $\gamma\in\Gamma_{m,M}(\Omega)$ be a real almost-everywhere class with $0<m\le\gamma\le M<\infty$. Set $\mathcal D(\Omega):=H^1(\Omega;\mathbb C)/H_0^1(\Omega;\mathbb C)$ with quotient norm $\|[U]\|_{\mathcal D}:=\inf_{w\in H_0^1(\Omega)}\|U+w\|_{H^1(\Omega)}$, and let $\mathcal D(\Omega)^*$ be its continuous conjugate-linear dual. For $f=[U]\in\mathcal D(\Omega)$, let $u_{\gamma,f}$ be the unique element of the coset $f$ satisfying
$$\int_\Omega\gamma\,\nabla u_{\gamma,f}\cdot\overline{\nabla z}\,dx=0\qquad(z\in H_0^1(\Omega;\mathbb C)).$$
Define the weak Dirichlet-to-Neumann map $\Lambda_\gamma:\mathcal D(\Omega)\to\mathcal D(\Omega)^*$ by
$$\bigl(\Lambda_\gamma f\bigr)(g):=\int_\Omega\gamma\,\nabla u_{\gamma,f}\cdot\overline{\nabla V_g}\,dx,$$
where $V_g$ is any representative of $g\in\mathcal D(\Omega)$. The trace quotient identification makes $\mathcal D(\Omega)$ the $H^{1/2}(\partial\Omega)$ boundary data space with its trace quotient norm. Constants lie in the kernel of $\Lambda_\gamma$, and its range functionals annihilate constants; hence $\Lambda_\gamma$ induces $\dot\Lambda_\gamma:\mathcal D(\Omega)/\mathbb C\mathbf1\to(\mathcal D(\Omega)/\mathbb C\mathbf1)^*$, the quotient Dirichlet-to-Neumann map used for Calderón stability. Well-posedness, independence from the representative $V_g$, boundedness and the induced quotient map are established by the well-posedness result cited below.

## Definition references

[[def-ip-calderon-admissible-conductivity-class|The real bounded conductivity class and uniform ellipticity bounds.]]

[[lem-ip-calderon-boundary-trace-quotient-identification|The trace quotient realization of the boundary $H^{1/2}$ space.]]

[[def-hk-and-hk-zero-notation|The $H^1$ and $H_0^1$ notation.]]

[[def-wkp-zero-as-a-sobolev-closure|The zero-boundary Sobolev closure.]]
