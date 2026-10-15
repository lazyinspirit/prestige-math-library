---
id: def-qft-regulated-thermal-parameter
kind: definition
domain: physics
library: physics
title: Finite-regulator temperature and inverse-energy parameter
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 2
deps:
  - post-qft-regulated-polynomial-model
  - def-qft-framework-units
dependency_roles:
  post-qft-regulated-polynomial-model: physical-assumption
  def-qft-framework-units: formulation-prerequisite
physical_scope: "A declared positive temperature input for one fixed finite-regulator model; it does not assert thermalization, an observed temperature, or an infinite-volume state."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted lecture notes, Chapter 1, §§1.3–1.3.1, canonical ensemble and density matrix"
      url: "https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html"
      locator: "Complete Chapter 1 HTML; beta=1/(k_B T), canonical density matrix, and partition function."
---

## Definition

For the fixed model of [[post-qft-regulated-polynomial-model]], use the SI
energy-unit convention of [[def-qft-framework-units]]. A declared temperature
input is a scalar $T>0$ with unit kelvin (K). Take $k_B>0$, with
unit $\mathrm{J\,K^{-1}}$, as the fixed Boltzmann conversion constant in this
branch. Define the physical inverse-energy parameter

$$\beta_{\rm phys}:=\frac{1}{k_BT}\quad[\mathrm{J^{-1}}],$$

and its dimensionless form

$$\widehat\beta:=E_*\beta_{\rm phys}.$$

The product $k_BT$ has unit joule, and $\widehat\beta$ is dimensionless
because $E_*$ has unit joule. Since $k_B>0$ and $T>0$, both inverse parameters
are defined and positive. The values of $T$ and the model's choice of $k_B$
are inputs; this definition does not infer them from a state or an
experiment. It defines a parameter convention only and asserts no dynamical
thermalization.
