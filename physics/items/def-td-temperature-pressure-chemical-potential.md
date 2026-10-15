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
dependency_level: 5
---

## Definition

Fix a material constitution $c$, with $r$ named species and dimensionless equilibrium state domain $D_c\subseteq\mathbb R^{r+2}$ from [[def-td-equilibrium-state-domain]]. For $x=(\hat U,\hat V,\hat n_1,\ldots,\hat n_r)\in D_c$, define the diagonal SI coordinate map

$$\Phi_c(x):=(U_c(x),V_c(x),n_{c,1}(x),\ldots,n_{c,r}(x))=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n_1\,\mathrm{mol},\ldots,\hat n_r\,\mathrm{mol}).$$

In SI numerical coordinates this is a diagonal linear bijection with a diagonal linear inverse, so it maps ambient open sets to open sets and its inverse is defined on its image.

Choose an open subset $O\subseteq D_c$ in the ambient dimensionless Euclidean coordinates that is designated as a single-phase chart, and set $\Omega:=\Phi_c(O)$, an open chart of physical SI coordinate values. Here $U$ is the internal-energy coordinate evaluated in the center-of-mass rest frame of [[def-td-galilean-rest-frame]]. If $S_c:D_c\to\mathbb R$ is the entropy adopted by [[post-td-concave-fundamental-entropy]], define its physical-coordinate representative on $\Omega$ by

$$S_c^{\mathrm{SI}}:=S_c\circ\Phi_c^{-1}:\Omega\to\mathbb R.$$

When its arguments are the physical coordinates $(U,V,n_1,\ldots,n_r)$, write this representative as $S_c(U,V,n)$ for brevity. On $\Omega$, assume the finite representative is $C^2$ and has $S_{c,U}>0$, as adopted by [[post-td-concave-fundamental-entropy]]. Here $C^2$ means that all coordinate partial derivatives through order two exist and are continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]]). A coordinate partial such as $S_{c,U}$ is the ordinary derivative in the physical $U$ coordinate while every other physical coordinate is held fixed, as in [[def-directional-and-partial-derivatives]]; in particular the conversion factor from $\hat U$ is included.

Explicitly, with the partial derivatives on the right taken in the dimensionless coordinates on $O$ while holding every other hatted coordinate fixed, the physical partials are

$$S_{c,U}^{\mathrm{SI}}=(1\,\mathrm J)^{-1}\partial_{\hat U}S_c,\qquad S_{c,V}^{\mathrm{SI}}=(1\,\mathrm{m^3})^{-1}\partial_{\hat V}S_c,\qquad S_{c,n_j}^{\mathrm{SI}}=(1\,\mathrm{mol})^{-1}\partial_{\hat n_j}S_c,$$

using the coordinate-conversion convention of [[post-td-concave-fundamental-entropy]].

Define the physical-coordinate representatives of the **absolute thermodynamic temperature**, **entropic pressure**, and **molar chemical potential** of species $j$ by

$$T_c^{\mathrm{SI}}:=\frac{1}{S_{c,U}^{\mathrm{SI}}},\qquad p_c^{\mathrm{SI}}:=T_c^{\mathrm{SI}}S_{c,V}^{\mathrm{SI}},\qquad \mu_{c,j}^{\mathrm{SI}}:=-T_c^{\mathrm{SI}}S_{c,n_j}^{\mathrm{SI}}.$$

For a state-domain point $x\in O$, define the corresponding state functions by pullback, $T_c(x):=T_c^{\mathrm{SI}}(\Phi_c(x))$, $p_c(x):=p_c^{\mathrm{SI}}(\Phi_c(x))$, and $\mu_{c,j}(x):=\mu_{c,j}^{\mathrm{SI}}(\Phi_c(x))$. When the argument is a physical tuple $(U,V,n)$, write $T_c(U,V,n)$, $p_c(U,V,n)$, and $\mu_{c,j}(U,V,n)$ for the physical-coordinate representatives. Thus both notations refer to the same state functions through $\Phi_c$.

The entropy unit is $\mathrm{J\,K^{-1}}$, the energy $U$ is in joules, $V$ is in cubic metres, and $n_j$ is in moles ([[def-td-si-quantities]]). Thus $S_{c,U}^{\mathrm{SI}}$ has units $\mathrm{K^{-1}}$, $T_c$ is finite and positive in kelvins, $S_{c,V}^{\mathrm{SI}}$ has units $\mathrm{J\,K^{-1}\,m^{-3}}$ and $p_c$ has units pascals, and $S_{c,n_j}^{\mathrm{SI}}$ has units $\mathrm{J\,K^{-1}\,mol^{-1}}$ and $\mu_{c,j}$ has units $\mathrm{J\,mol^{-1}}$. If a microscopic model instead uses a dimensionless particle count $N_j=N_{\!A}n_j$, the corresponding per-particle chemical potential is $\mu_{c,j}/N_{\!A}$ joules, with the exact SI Avogadro constant from [[def-td-si-quantities]].

These are scalar state functions of the stated rest-frame equilibrium chart. The pressure in this definition is a derivative-defined conjugate; identifying it with force per area requires a separate adopted mechanical coupling. Neither an empirical thermometer calibration nor any equation of state is supplied by this definition.
