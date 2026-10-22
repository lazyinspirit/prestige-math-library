---
id: thm-ip-wave-data-determine-light-ray-integrals
kind: theorem
title: Wave boundary data determine integrals along maximal geodesics shorter than T
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 5
deps:
  - lem-ip-wave-alessandrini-identity
  - lem-ip-simple-geometry-global-eikonal-geometric-optics
  - def-ip-hyperbolic-dirichlet-to-neumann-map
  - def-ip-simple-riemannian-background
  - def-countable-choice
provenance:
  statement: literature-derived
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorem 3.1 and its proof, PDF pp. 21–22: equality of hyperbolic boundary data yields integrals of the static potential difference along nontrapped rays shorter than T."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§5.1, PDF pp. 22–23: high-frequency boundary solutions and the data-to-ray-integral limit; the local proof obligation is to give all beam error estimates."
proof_strategy: Alessandrini identity and finite-order simple-geometry geometric optics; proof escalated
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$, with smooth boundary, let $T>0$, and let $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$ be static interior potentials. Suppose the full time-dependent forward Dirichlet-to-Neumann maps for $\partial_t^2-\Delta_g+q_1$ and $\partial_t^2-\Delta_g+q_2$ agree for every smooth Dirichlet input compactly supported in $(0,T)\times\partial M$. Let $\gamma:[0,L]\to M$ be any unit-speed geodesic segment with $\gamma(0),\gamma(L)\in\partial M$, $\gamma((0,L))\subset M^\circ$, directed inward at $0$ and outward at $L$, and with length $0<L<T$. Then
$$\int_0^L(q_1-q_2)(\gamma(s))\,ds=0.$$

## Statement references

[[def-ip-simple-riemannian-background]]

[[def-ip-hyperbolic-dirichlet-to-neumann-map]]

[[lem-ip-wave-alessandrini-identity]]

[[lem-ip-simple-geometry-global-eikonal-geometric-optics]]

[[def-countable-choice]]

## Proof status

The full ray-integral claim is retained. Its proof requires the exact forward-terminal Alessandrini identity, the finite-order eikonal/transport construction on a nonsingular polar ray tube, and an error estimate sufficient to pass the normalized product limit. The global polar and simple-geometry GO suppliers and classical DN solvability prerequisite are not yet ready; the separate general Gaussian-beam module remains an independent broader claim. No proof or readiness is claimed here.
