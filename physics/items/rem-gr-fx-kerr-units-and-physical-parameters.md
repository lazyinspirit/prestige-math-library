---
id: rem-gr-fx-kerr-units-and-physical-parameters
kind: remark
title: "Kerr geometric parameters and SI unit restoration"
status: published
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
  - thm-gr-fx-kerr-hamilton-jacobi-separation
dependency_roles:
  def-gr-fx-kerr-exterior: formulation-prerequisite
  prop-gr-fx-kerr-horizon-generator: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  thm-gr-fx-kerr-hamilton-jacobi-separation: mathematical-premise
sources:
  references:
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §5, PDF pp. 14-15"
      url: "https://arxiv.org/pdf/0706.0622"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.2-7.3, PDF pp. 93-96"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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
frequency is $c\Omega_H$ in inverse seconds.

For the local Hamilton-Jacobi solutions on an axis-avoiding coordinate
rectangle, adopt the following action normalization. Let
$S_{\mathrm{SI}}:U\to\mathbb R$ be a $C^1$ reduced action with units
$\mathrm J\,\mathrm s=\mathrm{kg}\,\mathrm m^2\,\mathrm s^{-1}$, and define
$S:=(G_N/c^3)S_{\mathrm{SI}}$. Thus $[S]=\mathrm{length}^2$.
The momentum covector is $p=dS$; on the separated branches
$S=-Et+L\phi+S_r(r)+S_\theta(\theta)$, define $E:=-p_t$ and $L:=p_\phi$.
The real constant $\mu$ is the normalization parameter in
$g^{ab}p_ap_b=-\mu^2$, and the angular separation constant is
$$Q:=p_\theta^2+\cos^2\theta\left[a^2(\mu^2-E^2)+\frac{L^2}{\sin^2\theta}\right].$$
These are the constants of the local separation theorem, with its domain
and radicand restrictions. Since $t,r$ have length units and the angles are
dimensionless, $[p_t]=[p_r]=\mathrm{length}$ and
$[p_\theta]=[p_\phi]=\mathrm{length}^2$. The inverse-metric contraction has
units $\mathrm{length}^2$, so this convention assigns
$[\mu]=[E]=\mathrm{length}$, $[L]=\mathrm{length}^2$, and
$[Q]=\mathrm{length}^4$. These assignments apply also when a constant
vanishes. They fix an action normalization; they are not dimensions forced
by the unnormalized Hamilton-Jacobi equation alone. If a positive rest mass
$m_0$ is assigned in a massive-particle interpretation, its corresponding
positive parameter is $\mu=G_Nm_0/c^2$; that interpretation is additional
model data, not an existence or motion claim here.

These conversions restore units in the stated framework. They do not assert
numerical parameter values, a particular astrophysical source, or an
observation.

## Remark references

[[def-gr-si-unit-and-coordinate-conventions]]

[[def-gr-fx-kerr-exterior]]

[[prop-gr-fx-kerr-horizon-generator]]

[[thm-gr-fx-kerr-hamilton-jacobi-separation]]
