---
id: lem-ip-simple-geometry-global-eikonal-geometric-optics
kind: lemma
title: Finite-order geometric optics along a maximal ray in simple geometry
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
axiom_base: Countable Choice
deps:
  - lem-ip-simple-geodesic-polar-extension
  - def-ip-simple-riemannian-background
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-countable-choice
provenance:
  statement: literature-derived
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.3, complete simple-geometry geometric-optics construction, PDF pp. 26–32: eikonal, transport, transverse cutoff, residual estimate, and concentrating products."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§4.1–4.4, PDF pp. 20–22: eikonal and transport calculations and the Euclidean correction estimate; the variable-metric chart and normalization terms must be supplied locally."
proof_strategy: polar eikonal and transport expansion with energy correction
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$, let $T>0$, and let $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$ be static potentials. Let $\gamma:[0,L]\to M$ be a maximal unit-speed geodesic with $0<L<T$, and choose a time shift $t_0$ with $0<t_0<T-L$. In a nonsingular geodesic-polar tube about $\gamma$, there are conjugate eikonal phases and transport amplitudes, with a transverse cutoff of width $\varepsilon_\lambda=\lambda^{-1/(n+8)}$, that produce approximate forward and terminal solutions for the two wave operators. After solving the transport hierarchy through the required finite order and correcting the residual by the zero-data energy solver, the exact solutions have remainders $R_{j,\lambda}$ satisfying
$$\|R_{j,\lambda}\|_{L^\infty(0,T;H^1(M))}\le C\lambda^{-1}\|\chi_\lambda\|_{W^{4,\infty}},\qquad \|R_{j,\lambda}\|_{L^2((0,T)\times M)}=O(\lambda^{-1/2}),$$
where $\chi_\lambda$ is the stated transverse cutoff and $C$ is independent of $\lambda$. The normalized product of the forward and terminal exact solutions converges against every compactly supported smooth spacetime test function to integration along the null ray $(t_0+s,\gamma(s))$, $0\le s\le L$, with the Gaussian normalization fixed so that the limiting transverse integral is one.

## Statement references

[[lem-ip-simple-geodesic-polar-extension]]

[[def-ip-simple-riemannian-background]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-countable-choice]]

## Proof status

The statement retains the finite-order residual and normalized product contract. The geodesic-polar supplier is escalated for global injectivity, and the local proof still needs the variable-metric phase/transport residual calculation, amplitude normalization, cutoff derivative bounds, and exact energy correction. The source calculation was read in full, but no missing local proof or supplier excerpt is claimed here.
