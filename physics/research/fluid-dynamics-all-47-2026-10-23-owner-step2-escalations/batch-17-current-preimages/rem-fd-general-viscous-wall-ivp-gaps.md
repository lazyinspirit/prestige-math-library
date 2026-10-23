---
id: rem-fd-general-viscous-wall-ivp-gaps
kind: remark
title: "Scope limits for general wall and viscous initial-value problems"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-smooth-polytropic-euler-ivp
  - def-fd-smooth-wall-exterior-solution-domains
  - thm-fd-compatible-wall-shear-heat
  - def-countable-choice
dependency_roles:
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  def-fd-smooth-wall-exterior-solution-domains: mathematical-premise
  thm-fd-compatible-wall-shear-heat: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian F. Morton, Local-in-Time Well-Posedness of the Incompressible Euler and Navier–Stokes Equations, §§7.1–7.3"
      url: "https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Remark

Assume Countable Choice for the Fourier-based periodic claims cited here. The local periodic incompressible draft gives a conditional smooth-evolution argument on a torus; the positive-density polytropic draft gives a conditional argument for only the stated inviscid barotropic system; and the channel heat theorem gives a compatible shear solution conditional on its Fourier interfaces. These results do not provide a local smooth theorem for arbitrary incompressible data on bounded-wall or exterior domains, nor a general nonuniform-density compressible viscous initial-value theorem. The bounded-wall and exterior domain definition only fixes domain, regularity, trace, and possible far-field conventions; it proves no existence or pressure regularity. No claim is made that the broader theories do not exist in the literature. A theorem for such a broader claim would need its own exact data compatibility, pressure/elliptic estimates, and proof chain, so none is inferred from these periodic or shear special cases.

## Remark references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[thm-fd-smooth-polytropic-euler-ivp]]

[[def-fd-smooth-wall-exterior-solution-domains]]

[[thm-fd-compatible-wall-shear-heat]]

[[def-countable-choice]]

[Brian F. Morton, *Local-in-Time Well-Posedness of the Incompressible Euler and Navier–Stokes Equations*, §§7.1–7.3](https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf)

[François Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*, §7.4](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)
