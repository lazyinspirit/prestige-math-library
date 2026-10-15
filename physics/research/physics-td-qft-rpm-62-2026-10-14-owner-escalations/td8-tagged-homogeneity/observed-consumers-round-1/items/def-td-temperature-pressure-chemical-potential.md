---
id: def-td-temperature-pressure-chemical-potential
kind: definition
title: Entropic temperature, pressure, and molar chemical potentials
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Smooth single-phase charts with positive finite entropy derivative in the adopted nonrelativistic macroscopic thermodynamic framework; the quantities are state functions, not empirical thermometer readings.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-galilean-rest-frame
  - def-directional-and-partial-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
  - post-td-concave-fundamental-entropy
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  post-td-concave-fundamental-entropy: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.2.4 and 1.4
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.9
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Definition

Fix a material constitution $c$ and its equilibrium state domain $D_c$ from [[def-td-equilibrium-state-domain]]. Let $\Omega\subseteq D_c$ be a specified open, single-phase chart in physical SI coordinates $(U,V,n_1,\ldots,n_r)$, with $U$ evaluated in the center-of-mass rest frame of [[def-td-galilean-rest-frame]]. On $\Omega$, use the finite $C^2$ entropy function $S_c$ and the strict positivity $S_{c,U}>0$ adopted by [[post-td-concave-fundamental-entropy]]. Here $C^2$ means that all coordinate partial derivatives through order two exist and are continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]]). A coordinate partial such as $S_{c,U}$ is the ordinary derivative in that coordinate direction while every other physical coordinate is held fixed, as in [[def-directional-and-partial-derivatives]].

Define the **absolute thermodynamic temperature**, **entropic pressure**, and **molar chemical potential** of species $j$ by

$$T_c:=\frac{1}{S_{c,U}},\qquad p_c:=T_cS_{c,V},\qquad \mu_{c,j}:=-T_cS_{c,n_j}.$$

The entropy unit is $\mathrm{J\,K^{-1}}$, the energy $U$ is in joules, $V$ is in cubic metres, and $n_j$ is in moles ([[def-td-si-quantities]]). Thus $S_{c,U}$ has units $\mathrm{K^{-1}}$, $T_c$ is finite and positive in kelvins, $S_{c,V}$ has units $\mathrm{J\,K^{-1}\,m^{-3}}$ and $p_c$ has units pascals, and $S_{c,n_j}$ has units $\mathrm{J\,K^{-1}\,mol^{-1}}$ and $\mu_{c,j}$ has units $\mathrm{J\,mol^{-1}}$. If a microscopic model instead uses a dimensionless particle count $N_j=N_{\!A}n_j$, the corresponding per-particle chemical potential is $\mu_{c,j}/N_{\!A}$ joules, with the exact SI Avogadro constant from [[def-td-si-quantities]].

These are scalar state functions of the stated rest-frame equilibrium chart. The pressure in this definition is a derivative-defined conjugate; identifying it with force per area requires a separate adopted mechanical coupling. Neither an empirical thermometer calibration nor any equation of state is supplied by this definition.
