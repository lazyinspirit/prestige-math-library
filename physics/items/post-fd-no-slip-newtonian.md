---
id: post-fd-no-slip-newtonian
kind: postulate
title: Bounded no-slip Newtonian vessel model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-bounded-solenoidal-spaces
  - def-countable-choice
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-bounded-solenoidal-spaces: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >-
  Adopted constant-density, positive-viscosity, zero-force incompressible
  Newtonian continuum on a fixed nonempty bounded open three-dimensional
  vessel. No-slip is the H_0^1 solenoidal-closure condition; no pointwise
  trace is asserted on an arbitrary open boundary. The weak result concerns
  velocity only, and makes no universal empirical or thermal claim.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
sources:
  references:
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§1.2–1.3, printed pp. 6–12, for the continuum momentum and Newtonian stress formulation; §§5.2–5.5 for weak velocity conventions."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§1, printed pp. 1–3, for the bounded-domain homogeneous Dirichlet case; §§2.1–2.2 for the energy spaces."
---

## Postulate

Let $I\subseteq\mathbb R$ be an open time interval in seconds and let $\Omega\subset\mathbb R^3$ be a fixed nonempty bounded open vessel in Cartesian coordinates measured in metres. Assume Countable Choice for the stated Sobolev space conventions. Define $D_\sigma(\Omega)=\{a\in C_c^\infty(\Omega;\mathbb R^3):\operatorname{div}a=0\}$, where divergence is the distributional divergence (equal to the classical divergence for these smooth fields), $H$ as its closure in $L^2(\Omega;\mathbb R^3)$, and $V$ as its closure in $H_0^1(\Omega;\mathbb R^3)$; here $H_0^1$ is the closure of compactly supported smooth vector fields in the $H^1$ norm, and $H^1$ uses square-integrable fields and first weak derivatives. The adopted no-slip condition means $u(t)\in V$, not a pointwise boundary value. This closure convention does not identify $V$ with every divergence-free member of $H_0^1$ on an arbitrary open set and does not assert a boundary trace theorem.

Take a constant mass density $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, a constant dynamic viscosity $\mu>0$ in $\mathrm{Pa\,s}$, and zero body-force density in $\mathrm{N\,m^{-3}}$. For classical fields $u\in C^1(I;C^2(\Omega;\mathbb R^3))$ and $p\in C^1(I;C^1(\Omega))$, adopt $\operatorname{div}u=0$, the Cauchy stress $\sigma=-pI_3+2\mu D(u)$ with $D(u)=\tfrac12(\nabla u+(\nabla u)^{\mathsf T})$, and the local balance $\rho_0(\partial_tu+\operatorname{div}(u\otimes u))=\operatorname{div}\sigma$ in the interior. The velocity has units $\mathrm{m\,s^{-1}}$, pressure and stress have units $\mathrm{Pa}$, spatial derivatives have units $\mathrm{m^{-1}}$, and $\nu=\mu/\rho_0$ has units $\mathrm{m^2\,s^{-1}}$. No temperature field is included.

For the weak regime, take $u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\rm loc}(0,\infty;V)$, with $u(0)=u_0\in H$ and strong $H$ trace at zero; $u_0$ is an initial velocity in $\mathrm{m\,s^{-1}}$. Here $C_w$ means continuity of every fixed $H$-pairing, and each time-dependent Bochner space uses strongly measurable maps with the indicated norm, locally on every finite interval. Interpret this model through the solenoidal variational identity: for every compactly time-supported $C^1$ curve $\phi:[0,\infty)\to V$,
$$
\int_0^\infty\!\bigl[(u,\partial_t\phi)_{L^2}+(u\otimes u,\nabla\phi)_{L^2}-\nu(\nabla u,\nabla\phi)_{L^2}\bigr]dt+(u_0,\phi(0))_{L^2}=0.
$$
Here all spatial pairings use unnormalized Lebesgue measure on $\Omega$, $(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$, and $\nabla u:\nabla\phi=\sum_{i,j}\partial_j u_i\partial_j\phi_i$. In this weak formulation pressure is eliminated by the divergence-free tests; no distributional pressure or corner regularity is postulated. On a smoother boundary, a pointwise zero-trace reading would require a separate trace theorem. This is an adopted fixed-vessel model, not a deduction about every real wall.

## Postulate references

[[def-fd-bounded-solenoidal-spaces|Bounded no-slip solenoidal closure spaces: H, V, and the no-trace convention]]

[[def-fd-quantity-and-frame-conventions|Cartesian inertial-frame, SI, and Cauchy-stress conventions]] supplies only the formulation conventions used here: Cartesian inertial coordinates, velocity in metres per second, density in kilograms per cubic metre, stress and pressure in pascals, dynamic viscosity in pascal seconds, the row-gradient $L_{ij}=\partial_j u_i$, its symmetric part $D=(L+L^{\mathsf T})/2$, and tension-positive traction $\sigma n$. The smooth local momentum law and the weak solution class in this Postulate are separately adopted model assumptions; no weak balance, energy inequality, boundary trace, or pressure regularity is inferred from a smooth material-balance theorem.

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §§1.2–1.3, printed pp. 6–12, and §§5.2–5.5, printed pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §1, printed pp. 1–3, and §§2.1–2.2, printed pp. 4–5](https://www.mdpi.com/2311-5521/6/1/42/pdf)
