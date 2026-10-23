---
id: post-fd-capillary-linear-free-surface
kind: postulate
title: Linear capillary free-surface model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-fd-wall-defect-capillary-models
  - post-fd-boundary-data
dependency_roles:
  def-fd-wall-defect-capillary-models: formulation-prerequisite
  post-fd-boundary-data: physical-assumption
physical_scope: >-
  Adopted first-order inviscid, homogeneous, incompressible and irrotational
  capillary-gravity waves in a periodic horizontal cell above a fixed impermeable
  bed, with constant density and surface tension and negligible air inertia.
  No viscosity, background current, finite-amplitude accuracy, solvability, or
  universal empirical validity is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.354, Nonlinear Dynamics II: Continuum Systems, Spring 2015 Lecture Notes (authors: Michael Brenner, Tom Peacock, Roman Stocker, Pedro Reis, Jörn Dunkel)"
      url: "https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf"
      locator: "§23.1, printed pp. 104–105, equations (541)–(548): potential flow, kinematic and capillary dynamic surface conditions, and first-order linearization."
    - title: "Howard Georgi, MIT OpenCourseWare 8.03SC, The Physics of Waves, Fall 2016 textbook"
      url: "https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf"
      locator: "§§11.5.1–11.5.2, printed pp. 285–291, equations (11.108)–(11.140): idealized incompressible fluid, fixed-depth bed, surface-tension energy, and capillary-gravity modes."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin, 'Gravity Waves'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html"
      locator: "Chapter 11, equations (11.1)–(11.21): incompressible inviscid wave model, bottom impermeability, free-surface kinematics, and finite-depth gravity-wave mode."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin, 'Surface Tension'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html"
      locator: "Chapter 11, equations (11.116)–(11.121): curvature sign, pressure jump, capillary free-surface condition, and finite-depth capillary-gravity dispersion relation."
verification:
  precheck: pass
---

## Postulate

Use a classical Cartesian inertial frame with absolute time $t$ in seconds and horizontal coordinates $x=(x_1,x_2)$ in metres, with upward vertical coordinate $z$ in metres; let $e_z$ be the upward unit vector. Fix horizontal periods $L_1,L_2>0$ metres and identify opposite horizontal faces by translations, so the horizontal cell is the quotient torus $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$. Let $I\subseteq\mathbb R$ be a nonempty open time interval and let $h>0$ metres. The flat reference liquid region is $\Omega_0:=\mathbb T^2_L\times(-h,0)$; the bottom $z=-h$ is a fixed solid bed and the upper interface is the graph $z=\eta(x,t)$, where $\eta:\mathbb T^2_L\times I\to\mathbb R$ is the surface displacement in metres. Horizontal periodic faces are mathematical identifications, not physical walls.

Adopt a homogeneous single-component liquid with constant mass density $\rho>0$ in kilograms per cubic metre, constant downward gravitational acceleration $-g e_z$ with $g>0$ in metres per second squared, and constant surface-tension coefficient $\gamma>0$ in newtons per metre, equivalently kilograms per second squared. The gas above the liquid is modeled only by constant pressure $p_a$ in pascals; no gas momentum equation is included. Let $p_\ell$ denote the liquid pressure in pascals. This model assumes a horizontally periodic scalar velocity potential $\phi$ in metres squared per second, defined on $\mathbb T^2_L\times[-h,0]\times I$; the fluid velocity is the vector field $u:=\nabla\phi:\mathbb T^2_L\times[-h,0]\times I\to\mathbb R^3$ in metres per second, with no additive uniform component. The model is inviscid, meaning no viscous-stress or viscous-dissipation terms are included; it is incompressible and irrotational, meaning $\operatorname{div}u=0$ and $\operatorname{curl}u=0$. On the torus this potential assumption is stronger than irrotationality alone, since a curl-free field need not be the gradient of a periodic scalar. Assume $\phi$ is at least $C^3$ and $\eta$ is at least $C^2$; derivatives below are classical.

The outward unit normal from liquid to gas on the graph is $n=(-\nabla_h\eta,1)/\sqrt{1+|\nabla_h\eta|^2}$, where $\nabla_h:=(\partial_{x_1},\partial_{x_2})$ and $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$. Define the signed curvature of this graph by $\kappa:=-\nabla_h\cdot(\nabla_h\eta/\sqrt{1+|\nabla_h\eta|^2})$; with the stated upward normal its first-order value about the flat state is $-\Delta_h\eta$, and $\kappa$ has units of inverse metres. Adopt the liquid-minus-gas pressure jump $p_\ell-p_a=\gamma\kappa$. At the fixed bed impose only impermeability, meaning zero normal fluid velocity, $u_z=0$, equivalently $\phi_z=0$ at $z=-h$; no-slip is not imposed in this inviscid branch. The upper boundary moves with the fluid and obeys the explicit first-order kinematic equation below; it is not a solid wall.

The selected first-order model is defined by retaining only terms linear in perturbations about the hydrostatic rest state $\eta=0$, $u=0$, and $p_\ell=p_a-\rho g z$, then evaluating surface derivatives at $z=0$. Products of perturbations are discarded, with no error estimate for replacing a finite-amplitude flow by this linear model. On $\Omega_0\times I$ the adopted equations and boundary conditions are

$$\Delta_h\phi+\partial_z^2\phi=0,\qquad -h<z<0,$$

$$\partial_z\phi(x,-h,t)=0,$$

$$\partial_t\eta(x,t)=\partial_z\phi(x,0,t),\qquad \partial_t\phi(x,0,t)+g\eta(x,t)-\frac{\gamma}{\rho}\Delta_h\eta(x,t)=0.$$

These are model assumptions for the stated idealized regime. They assert no existence or uniqueness for the nonlinear free-boundary equations, no finite-amplitude approximation bound, and no empirical claim that a particular liquid satisfies this model.

## Postulate references

[[def-fd-wall-defect-capillary-models|Formal capillary-gravity potential model: harmonic potential, impermeable bottom, and linear kinematic/dynamic surface equations. Identify its $\sigma$ with physical $\gamma$, its $L_x$ with $L_1$, and its $L_y$ with $L_2$; the physical branch uses the stricter $\gamma>0$ and the stronger regularity stated above.]]

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §§11.5.1–11.5.2, printed pp. 285–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Gravity Waves,” equations (11.1)–(11.21)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.116)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Geometry diagram

The schematic shows a vertical section through the flat reference cell at fixed $x_2$. The upper curve represents the graph $z=\eta(x,t)$, the dashed horizontal line is the rest level $z=0$, and the lower horizontal line is the fixed bed $z=-h$. The upward normal points from liquid to gas; gravity points downward. The picture is not to scale and supplies no premise to any proof.

```tikz
\begin{tikzpicture}[x=1.05cm,y=0.85cm,>=stealth]
  \fill[blue!12] (0,-1.8) -- plot[smooth] coordinates {(0,0.05) (0.8,0.32) (1.6,0.12) (2.4,-0.16) (3.2,-0.03) (4,0.05)} -- (4,-1.8) -- cycle;
  \draw[thick] (0,-1.8) -- (4,-1.8);
  \draw[thick,blue!65!black] plot[smooth] coordinates {(0,0.05) (0.8,0.32) (1.6,0.12) (2.4,-0.16) (3.2,-0.03) (4,0.05)};
  \draw[dashed] (0,0) -- (4.25,0) node[right] {$z=0$};
  \draw[<->] (-0.35,0) -- (-0.35,-1.8) node[midway,left] {$h$};
  \draw[->] (2,0.02) -- (2.36,0.92) node[right] {$n$};
  \draw[->] (4.5,0.8) -- (4.5,0.1) node[right] {$-g e_z$};
  \node at (2,-0.9) {liquid};
  \node at (2,0.65) {gas};
  \node[below] at (2,-1.8) {fixed impermeable bed $z=-h$};
  \node[above] at (2.65,0.16) {$z=\eta(x,t)$};
\end{tikzpicture}
```
