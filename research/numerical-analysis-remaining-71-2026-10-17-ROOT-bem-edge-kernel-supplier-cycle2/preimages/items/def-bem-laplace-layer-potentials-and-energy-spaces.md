---
id: def-bem-laplace-layer-potentials-and-energy-spaces
kind: definition
title: Weak Laplace single-layer potentials and energy spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, lem-bem-lipschitz-trace-and-lifting, def-bem-newtonian-kernel-in-three-dimensions, lem-bem-newtonian-kernel-is-fundamental-solution]
justified_by: [thm-bem-single-layer-transmission-mapping-and-coercivity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–625: distributional layer potentials, weak boundary operators, Green identities, jumps, and operator extensions."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.2, PDF pp. 3–7: the 3D Laplace single-layer kernel and its potential convention; Chapter 3 §§3.1–3.3, printed pp. 40–46: the weak transmission definition."
---

## Definition

Write $G_3$ for the Newton kernel of [[def-bem-newtonian-kernel-in-three-dimensions]]. For a smooth density $\lambda$ on $\Gamma$, the classical single-layer potential is
$$S\lambda(x)=\int_\Gamma G_3(x,y)\lambda(y)\,dS_y,\qquad x\in\mathbb R^3\setminus\Gamma.$$

Let $\dot H^1(\mathbb R^3)$ be the completion of $C_c^\infty(\mathbb R^3)$ in the norm $\|u\|_{\dot H^1}=\|\nabla u\|_{L^2(\mathbb R^3)}$, using its $L^6$ representative and the trace from [[lem-bem-lipschitz-trace-and-lifting]]. For $\lambda\in H^{-1/2}(\Gamma)$, call any $u\in\dot H^1(\mathbb R^3)$ satisfying
$$\int_{\mathbb R^3}\nabla u\cdot\nabla v\,dx=\langle\lambda,\gamma v\rangle_\Gamma\qquad(v\in\dot H^1(\mathbb R^3)).$$
Call such a function a weak single-layer potential and write $S\lambda=u$ when it exists. Define the exterior energy space $E^+(\Omega^+)=\{u\in H^1_{\mathrm{loc}}(\Omega^+):u\in L^6(\Omega^+),\ \nabla u\in L^2(\Omega^+)\}$. For a harmonic function $u^-$ in $\Omega^-$ with trace in $H^{1/2}(\Gamma)$, define its weak outward conormal by $\langle\partial_n^-u^-,g\rangle=\int_{\Omega^-}\nabla u^-\cdot\nabla L^-g$, where $L^-g$ is any $H^1$ trace lift. For a harmonic $u^+\in E^+(\Omega^+)$, use the same fixed normal $n$ by $\langle\partial_n^+u^+,g\rangle=-\int_{\Omega^+}\nabla u^+\cdot\nabla L^+g$ for a compactly supported local lift. In either case the value is independent of the lift: the difference of two lifts has zero trace, and weak harmonicity makes its gradient pairing zero. Existence, uniqueness, agreement with the displayed kernel for smooth densities, and the conormal jump are proved in [[thm-bem-single-layer-transmission-mapping-and-coercivity]]. The weak definition fixes the normalization at infinity through $u\in L^6(\mathbb R^3)$; arbitrary additive constants are excluded.
