---
id: lem-ip-gaussian-beam-null-bicharacteristic
kind: lemma
title: Gaussian beams concentrated on an embedded null bicharacteristic
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: Countable Choice
deps:
  - lem-ip-borel-jet-realization-and-beam-patching
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-countable-choice
  - def-principal-part-and-principal-symbol-of-a-scalar-pde
  - lem-principal-symbol-under-a-c-one-coordinate-change
  - def-tautological-one-form-on-a-cotangent-bundle
  - thm-the-canonical-cotangent-two-form-is-symplectic
  - def-symplectic-form-and-symplectic-manifold
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions
provenance:
  statement: literature-derived
sources:
  references:
    - title: "Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse problems for real principal type operators (arXiv:2001.07599v2)"
      url: "https://arxiv.org/pdf/2001.07599v2"
      locator: "§3, Theorem 3.1 and proof, PDF pp. 20–32: complex phase, Riccati positivity, transport, Borel realization, patching, and normalized concentration."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.4, PDF pp. 32–39: Gaussian-beam construction sketch and its explicit proof boundary."
proof_strategy: complex phase, Riccati transport, Borel summation, and energy correction
---

## Statement

Assume Countable Choice. Let $X$ be a smooth spacetime manifold of dimension $m\ge2$ with a smooth positive density, and let $P=\sum_{|\alpha|\le2}a_\alpha(x)D^\alpha$ be a scalar second-order differential operator in local coordinates. Its principal symbol $p(x,\xi)=\sum_{|\alpha|=2}a_\alpha(x)\xi^\alpha$ is real and satisfies $dp\ne0$ on $\{p=0\}\subset T^*X\setminus0$. Equip $T^*X$ with its canonical cotangent symplectic form and define the Hamilton vector field by $\iota_{H_p}\omega_{\rm can}=dp$. A null bicharacteristic is a nonzero integral curve of $H_p$ contained in $\{p=0\}$. Let $\Gamma$ be a compact phase-space segment that is an injective immersion with no repeated phase points; assume its base projection is an immersion (the no-cusp condition) and that the segment is contained in the interior of $T^*X\setminus0$. For every integer $N\ge1$, there are complex smooth functions $u_\lambda$ supported in a fixed tubular neighborhood of the base curve of $\Gamma$, with a smooth cutoff equal to one near that curve, such that the following hold as $\lambda\to+\infty$:

1. The phase has a formal transverse Taylor expansion solving the complex eikonal equation to every prescribed finite order; its transverse imaginary Hessian is positive definite along the curve and yields Gaussian decay away from the ray.
2. The amplitudes solve the transport hierarchy to the corresponding order and are realized by a Borel sum with a finite-coordinate-patch construction.
3. After normalization by the transverse Gaussian integral, the measures $|u_\lambda|^2dV_X$ converge against every compactly supported smooth test function $a$ to $\int_\Gamma a\,ds$.
4. The residual satisfies $\|Pu_\lambda\|_{L^2(X)}=O(\lambda^{-N})$ for every requested $N$ after carrying the phase and transport expansions sufficiently far.

The cutoff is supported away from the spacetime boundary; hence the beam has zero boundary trace. The claim concerns an embedded segment in phase space and does not assume that the projected base curve has no self-intersections.

## Statement references

[[lem-ip-borel-jet-realization-and-beam-patching]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-countable-choice]]

[[def-principal-part-and-principal-symbol-of-a-scalar-pde]]

[[lem-principal-symbol-under-a-c-one-coordinate-change]]

[[def-tautological-one-form-on-a-cotangent-bundle]]

[[thm-the-canonical-cotangent-two-form-is-symplectic]]

[[def-symplectic-form-and-symplectic-manifold]]

[[def-hamiltonian-vector-field-and-hamiltonian-function]]

[[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]

## Proof status

The full beam statement is retained. A complete local proof still has to solve the infinite-order complex eikonal and Riccati systems, preserve positivity under finite patching, Borel-realize all transport jets, quantify cutoff and residual errors, and apply the variable-metric energy solver to correct the approximate solution. The cited lecture notes state this construction only as a sketch; the full source proof has been read, but its argument has not yet been reproduced here. No proof or readiness is claimed.
