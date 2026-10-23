---
id: post-fd-periodic-newtonian
kind: postulate
title: Periodic incompressible Newtonian idealization
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-periodic-solenoidal-spaces
  - def-fd-periodic-leray-hopf
  - def-countable-choice
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-periodic-solenoidal-spaces: formulation-prerequisite
  def-fd-periodic-leray-hopf: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >-
  Adopted three-dimensional, incompressible, constant-density and
  constant-viscosity Newtonian continuum model on a flat periodic cell, with
  zero body force and no temperature field. Its weak realization uses the
  unforced periodic Leray–Hopf class. It asserts no empirical universality,
  global smoothness, or uniqueness.
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
      locator: "§1.3, printed pp. 9–11, especially the symmetric velocity gradient,
        Newtonian stress, and incompressible reduction."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf
        Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§1, printed pp. 1–3, for the constant-density, constant-temperature
        incompressible model, zero force, and periodic domain."
---

## Postulate

Let $I\subseteq\mathbb R$ be an open time interval measured in seconds. Fix $L>0$ as the numerical period in the declared SI metre unit, so the physical side length is $L\,\mathrm m$, and use the flat periodic cell $\mathbb T_L^3=(\mathbb R/L\mathbb Z)^3$ with normalized spatial measure $L^{-3}dx$. Spatial coordinates in physical volume integrals are measured in metres. Assume Countable Choice for the stated Fourier and Sobolev space conventions. The velocity is a vector field $u:I\times\mathbb T_L^3\to\mathbb R^3$ with SI units $\mathrm{m\,s^{-1}}$; the mass density is a constant primitive parameter $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$; the dynamic viscosity is a constant primitive parameter $\mu>0$ in $\mathrm{Pa\,s}$; and the mechanical pressure $p$ has units $\mathrm{Pa}$. The body-force density is zero (its SI unit is $\mathrm{N\,m^{-3}}$), and there is no temperature variable in this model.

For classical fields take $u\in C^1(I;C^2(\mathbb T_L^3;\mathbb R^3))$ and $p\in C^1(I;C^1(\mathbb T_L^3))$. Adopt incompressibility $\operatorname{div}u=0$ and the local momentum balance
$$\rho_0\bigl(\partial_tu+\operatorname{div}(u\otimes u)\bigr)=\operatorname{div}\sigma,\qquad \sigma=-pI_3+2\mu D(u),\qquad D(u)=\tfrac12\bigl(\nabla u+(\nabla u)^{\mathsf T}\bigr).$$
Here $\sigma$ is the Cauchy stress, so its traction on an oriented surface with unit normal $n$ is $\sigma n$; $D(u)$ is the symmetric rate-of-deformation tensor; and $\nabla$ has units $\mathrm{m^{-1}}$. Every term in the momentum balance has units $\mathrm{N\,m^{-3}}$. Since $\operatorname{div}u=0$, this equation is equivalently
$$\partial_tu+\operatorname{div}(u\otimes u)+\nabla\pi=\nu\Delta u,\qquad \nu=\mu/\rho_0>0,\qquad \pi=p/\rho_0.$$
where kinematic viscosity $\nu$ and kinematic pressure $\pi$ have units $\mathrm{m^2\,s^{-1}}$ and $\mathrm{m^2\,s^{-2}}$, respectively. All fields are periodic in each spatial coordinate; this is an ideal cell, not a wall-bounded vessel.

For the weak regime, use the global unforced periodic Leray–Hopf class. The spaces are $H$, the real $L^2$ vector fields whose divergence vanishes distributionally on $\mathbb T_L^3$, with unrestricted constant Fourier mode, and $V=H\cap H^1$, where $H^1$ consists of fields and first weak derivatives in $L^2$; use normalized spatial norms. Here $C_w([0,\infty);H)$ means that $t\mapsto (u(t),h)_H$ is continuous for every fixed $h\in H$; the time-dependent $L^p$ spaces are the corresponding Bochner spaces. A weak velocity has $u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\rm loc}(0,\infty;V)$, strongly attains $u_0\in H$ as $t\downarrow0$, and satisfies, for every smooth real periodic divergence-free test field $\phi$ compactly supported in time,
$$
\int_0^\infty\!\bigl[(u,\partial_t\phi)+(u\otimes u,\nabla\phi)-\nu(\nabla u,\nabla\phi)\bigr]dt+(u_0,\phi(0))=0.
$$
The tensor pairing is $L^{-3}\int_{[0,L]^3}u_i u_j\partial_j\phi_i\,dx$, and the gradient pairing is $L^{-3}\int_{[0,L]^3}\partial_j u_i\partial_j\phi_i\,dx$. The class also requires
$$
\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u(s)\|_2^2ds\le\|u_0\|_2^2\qquad(t\ge0),
$$
and a full-measure set $S\subset(0,\infty)$ such that
$$
\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u(\tau)\|_2^2d\tau\le\|u(s)\|_2^2\qquad(s\in S\cup\{0\},\ t\ge s).
$$
This weak convention asserts neither uniqueness nor pressure regularity. These equations and the solution class are adopted model assumptions; they are not deductions that every physical fluid obeys them.

## Postulate references

[[def-fd-periodic-solenoidal-spaces|Periodic solenoidal Fourier spaces: normalized torus, mean mode, and spaces H,V]]

[[def-fd-periodic-leray-hopf|Unforced periodic Leray–Hopf solution: weak identity and initial/restart energy inequalities]]

[[def-fd-quantity-and-frame-conventions|Cartesian inertial-frame, SI, and Cauchy-stress conventions]] supplies only the formulation conventions used here: Cartesian inertial coordinates, velocity in metres per second, density in kilograms per cubic metre, stress and pressure in pascals, dynamic viscosity in pascal seconds, the row-gradient $L_{ij}=\partial_j u_i$, its symmetric part $D=(L+L^{\mathsf T})/2$, and tension-positive traction $\sigma n$. On the periodic cell these Cartesian conventions are read on local periodic lifts, not as a global affine chart on the compact torus. The smooth local momentum law and the weak solution class in this Postulate are separately adopted model assumptions; no weak balance, energy inequality, boundary trace, or pressure regularity is inferred from a smooth material-balance theorem.

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §1.3, printed pp. 9–11](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §1, printed pp. 1–3](https://www.mdpi.com/2311-5521/6/1/42/pdf)
