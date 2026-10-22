---
id: rem-gr-fx-kerr-units-and-physical-parameters
kind: remark
title: "Kerr geometric parameters and SI unit restoration"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
physical_scope: "Unit and parameter interpretation for the Kerr metric; it asserts no measured value, astrophysical source model, or observational result."
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-fx-kerr-exterior
  - prop-gr-fx-kerr-horizon-generator
  - def-gr-si-unit-and-coordinate-conventions
dependency_roles:
  def-gr-fx-kerr-exterior: formulation-prerequisite
  prop-gr-fx-kerr-horizon-generator: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
sources:
  references:
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §5, PDF pp. 14-15"
      url: "https://arxiv.org/pdf/0706.0622"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.2-7.3, PDF pp. 93-96"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: n/a
---

## Remark

In the SI coordinate convention $x^0=ct_{\mathrm{SI}}$, the Kerr metric's
coordinate $t$ is the length coordinate $x^0$ (not the time in seconds), and
$r$ is a length; $\theta,\phi$ are dimensionless. The metric parameters $M$
and $a$ in the
Kerr exterior definition are geometric lengths: the associated physical mass
is $m_{\mathrm{phys}}=c^2M/G_N$, and the physical angular momentum is
$J_{\mathrm{phys}}=c^3Ma/G_N$. Thus $a=J_{\mathrm{phys}}/(m_{\mathrm{phys}}c)$
is the specific angular-momentum parameter. The horizon parameter
$\Omega_H=a/(r_+^2+a^2)$ has units of inverse length; the physical angular
frequency is $c\Omega_H$ in inverse seconds. The Hamilton-Jacobi parameters
in geometric units have dimensions $[\mu]=[E]=\mathrm{length}$,
$[L]=\mathrm{length}^2$, $[Q]=\mathrm{length}^4$, and
$[S]=\mathrm{length}^2$.

These conversions restore units in the stated framework. They do not assert
numerical parameter values, a particular astrophysical source, or an
observation.

## Remark references

[[def-gr-si-unit-and-coordinate-conventions]]

[[def-gr-fx-kerr-exterior]]

[[prop-gr-fx-kerr-horizon-generator]]
