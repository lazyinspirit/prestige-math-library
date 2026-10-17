---
id: def-parameterized-finite-state-step-objective
kind: definition
title: Finite parameterized state-step graphs and objectives
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-c-one-map-and-local-inverse, def-total-derivative-in-euclidean-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§2–3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Definition

Let $\Theta\subseteq\mathbb R^m$ be open, let $N\ge1$, and for $0\le n\le N$ let $U_n\subseteq\mathbb R^{d_n}$ be open. A finite parameterized state-step graph consists of a $C^1$ initial map $x_0:\Theta\to U_0$ and $C^1$ step maps $\Psi_n:U_n\times\Theta\to U_{n+1}$ for $0\le n<N$, such that the recursion $x_{n+1}(\theta)=\Psi_n(x_n(\theta),\theta)$ is defined for every $\theta$ in the chosen parameter neighborhood. A $C^1$ running objective consists of maps $\ell_n:U_n\times\Theta\to\mathbb R$ and a terminal objective $\phi:U_N\times\Theta\to\mathbb R$, all $C^1$. Its reduced objective is
$$J(\theta)=\phi(x_N(\theta),\theta)+\sum_{n=0}^{N-1}\ell_n(x_n(\theta),\theta).$$
The maps and objective define one finite real-arithmetic graph. A gradient of this graph is the derivative of this finite composition; it is not the derivative of an exact implicit solution unless the step map itself is that solution map.

