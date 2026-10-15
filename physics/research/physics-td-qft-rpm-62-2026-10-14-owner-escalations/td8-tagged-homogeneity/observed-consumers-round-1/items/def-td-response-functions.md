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
---

## Definition

Fix a constitution $c$ and a smooth physical-coordinate chart in $D_c$ from [[def-td-equilibrium-state-domain]], with fixed amounts $n=(n_1,\ldots,n_r)$ and $T,p$ as in [[def-td-temperature-pressure-chemical-potential]]. A **valid response chart** is an open neighborhood on which the relevant independent coordinates used below have a $C^1$ inverse to the physical $(U,V)$ coordinates; a $C^1$ diffeomorphism has a $C^1$ inverse on open neighborhoods by [[def-ck-euclidean-maps-and-diffeomorphisms]]. The existence of such a chart is a hypothesis for a response derivative, not a consequence of this definition. The derivatives use the indicated natural variables and hold all other listed coordinates fixed.

The **constant-volume heat capacity** and **constant-pressure heat capacity** of the whole system are, where the derivatives exist and are finite,

$$C_V:=\left(\frac{\partial U}{\partial T}\right)_{V,n},\qquad H:=U+pV,\qquad C_p:=\left(\frac{\partial H}{\partial T}\right)_{p,n}.$$

Here $H$ is the enthalpy in joules; both heat capacities are in $\mathrm{J\,K^{-1}}$, not per mole. The **isothermal compressibility** and **isobaric thermal expansion coefficient** are

$$\kappa_T:=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_{T,n},\qquad \alpha_p:=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_{p,n}.$$

Since $V>0$ and the coordinates use SI units ([[def-td-si-quantities]]), $\kappa_T$ has units $\mathrm{Pa^{-1}}$ and $\alpha_p$ has units $\mathrm{K^{-1}}$. This definition asserts no sign for any response, no identity among them, and no finite value at a critical or otherwise singular chart.
