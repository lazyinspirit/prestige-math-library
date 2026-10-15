---
id: def-qft-regulated-thermal-parameter
kind: definition
domain: physics
library: physics
title: Finite-regulator temperature and inverse-energy parameter
status: published
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
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted lecture notes, Chapter 1, §§1.3–1.3.1, canonical ensemble and density matrix"
      url: "https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html"
      locator: "Complete Chapter 1 HTML; beta=1/(k_B T), canonical density matrix, and partition function."
    - title: "BIPM, The International System of Units (SI), 9th edition, version 4.01, §§2.2 and 2.3.1"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "Printed pp. 15–18; exact SI defining value and unit of the Boltzmann constant."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

For the fixed model of [[post-qft-regulated-polynomial-model]], use the SI
energy-unit convention of [[def-qft-framework-units]]. A declared temperature
input is a scalar $T>0$ with unit kelvin (K). Use the SI-defining Boltzmann
constant
$$k_B:=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}.$$
This exact value is the one stated by the BIPM SI Brochure, 9th edition,
version 4.01, §§2.2 and 2.3.1. Define the physical inverse-energy parameter

$$\beta_{\rm phys}:=\frac{1}{k_BT}\quad[\mathrm{J^{-1}}],$$

and its dimensionless form

$$\widehat\beta:=E_*\beta_{\rm phys}.$$

The product $k_BT$ has unit joule, and $\widehat\beta$ is dimensionless
because $E_*$ has unit joule. Since $k_B>0$ and $T>0$, both inverse parameters
are defined and positive. The temperature $T$ is a declared model input; this
definition does not infer it from a state or an experiment. It defines a
parameter convention only and asserts no dynamical thermalization.
