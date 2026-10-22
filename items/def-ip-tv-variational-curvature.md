---
id: def-ip-tv-variational-curvature
kind: definition
title: Variational curvature of a finite-perimeter set
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, Definition 4"
      url: "https://arxiv.org/pdf/1711.06495"
    - title: "Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon, Geometric properties of solutions to the total variation denoising problem, §2.6"
      url: "https://arxiv.org/pdf/1602.00087"
---

## Definition

Let $\Omega=\mathbb R^2$ or let $\Omega\subseteq\mathbb R^2$ be a bounded Lipschitz domain. Choose one of three perimeter functionals for measurable $E\subseteq\Omega$: full-space perimeter $P_R(E)=P(E;\mathbb R^2)$ when $\Omega=\mathbb R^2$; Neumann relative perimeter $P_N(E)=P(E;\Omega)$ on a bounded domain; or Dirichlet perimeter $P_D(E)=P(\widetilde E;\mathbb R^2)$, where $\widetilde E$ is $E$ extended by the empty set outside $\Omega$. Require finite measure and finite selected perimeter, and let $\kappa:\Omega\to\mathbb R$ be Lebesgue-measurable with $\int_F|\kappa|<\infty$ for every set considered. The set $E$ has **variational curvature** $\kappa$ for the selected model if its selected perimeter minus $\int_E\kappa\,dx$ is no greater than the same quantity for every finite-measure finite-selected-perimeter competitor $F\subseteq\Omega$ whose symmetric difference $F\mathbin\triangle E$ has compact closure in $\Omega$. In the full-space model, this means compact closure in $\mathbb R^2$.

For bounded Dirichlet TV, a separate **obstacle curvature** condition on $\Omega$ means that $\Omega$, viewed as a finite-perimeter set in $\mathbb R^2$, minimizes $F\mapsto P(F;\mathbb R^2)-\int_F\kappa_\Omega\,dx$ over all finite-measure finite-perimeter $F\subseteq\mathbb R^2$ whose symmetric difference with $\Omega$ has compact closure in $\mathbb R^2$, where $\kappa_\Omega\in L^1(\mathbb R^2;\mathbb R)$.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|Relative and full-space perimeters are TV of characteristic functions.]]

[[def-ip-boundary-tv-conventions|Dirichlet perimeter uses zero extension; Neumann perimeter is relative to the open domain.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, Definition 4](https://arxiv.org/pdf/1711.06495)

[Chambolle, Duval, Peyré, and Poon, *Geometric properties of solutions to the total variation denoising problem*, §2.6](https://arxiv.org/pdf/1602.00087)
