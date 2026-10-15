---
id: def-td-response-functions
kind: definition
title: Thermodynamic response functions on valid local charts
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Finite response derivatives on smooth positive-temperature simple-compressible charts at fixed composition; no positivity or finite-response claim is made outside the specified charts.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2.4
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.10.5
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 6
---

## Definition

Fix a constitution $c$ and an open dimensionless subset $O\subseteq D_c$ in the single-phase region of [[def-td-equilibrium-state-domain]]. Its physical chart is $\Omega=\Phi_c(O)$, where $\Phi_c$ is the SI coordinate map defined in [[def-td-temperature-pressure-chemical-potential]]. For fixed physical amounts $n=(n_1,\ldots,n_r)$ with nonempty slice $\Omega_n:=\{(U,V):(U,V,n)\in\Omega\}$, this slice is open in $\mathbb R^2$. Use $T,p$ from [[def-td-temperature-pressure-chemical-potential]] as functions of the physical coordinates on $\Omega_n$. For a response derivative, restrict to an open neighborhood in $\Omega_n$ where the required natural-coordinate map is a $C^1$ diffeomorphism onto an open image, so its inverse expresses the physical $(U,V)$ as $C^1$ functions of those natural coordinates ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Specifically, $C_V$ uses $(U,V)\mapsto(T,V)$ at fixed $n$, while $C_p$, $\kappa_T$, and $\alpha_p$ use $(U,V)\mapsto(T,p)$ at fixed $n$. The existence of each such local chart is a hypothesis for its response derivative, not a consequence of this definition. Each derivative uses the indicated natural variables and holds all other listed coordinates fixed.

The **constant-volume heat capacity** and **constant-pressure heat capacity** of the whole system are, where the derivatives exist and are finite,

$$C_V:=\left(\frac{\partial U}{\partial T}\right)_{V,n},\qquad H:=U+pV,\qquad C_p:=\left(\frac{\partial H}{\partial T}\right)_{p,n}.$$

Here $H$ is the enthalpy in joules; both heat capacities are in $\mathrm{J\,K^{-1}}$, not per mole. The **isothermal compressibility** and **isobaric thermal expansion coefficient** are

$$\kappa_T:=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_{T,n},\qquad \alpha_p:=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_{p,n}.$$

Since $V>0$ and the coordinates use SI units ([[def-td-si-quantities]]), $\kappa_T$ has units $\mathrm{Pa^{-1}}$ and $\alpha_p$ has units $\mathrm{K^{-1}}$. This definition asserts no sign for any response, no identity among them, and no finite value at a critical or otherwise singular chart.
