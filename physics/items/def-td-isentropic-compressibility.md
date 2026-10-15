---
id: def-td-isentropic-compressibility
kind: definition
title: Isentropic compressibility on a valid local chart
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Finite derivative response on a local C2 positive-temperature simple-compressible energy chart at fixed composition; no value or sign is asserted where the inverse chart fails.
deps:
  - def-td-si-quantities
  - def-td-equilibrium-state-domain
  - def-td-response-functions
  - pthm-td-local-energy-representation
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-response-functions: formulation-prerequisite
  pthm-td-local-energy-representation: physical-result
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.10.5
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.10:_Applications_of_Thermodynamics
    - title: Jeremy Tatum, Heat and Thermodynamics, §13.3, Pressure and Temperature
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/13:_Expansion_Compression_and_the_TdS_Equations/13.03:_Pressure_and_Temperature
dependency_level: 7
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

Fix a constitution $c$, a positive-temperature local energy chart with entropy coordinate $s$ and physical volume $V>0$, and fixed amounts $n=(n_1,\ldots,n_r)$. The energy representation and pressure on this chart are those of [[pthm-td-local-energy-representation]] and the response-chart conventions are those of [[def-td-response-functions]]. Where $(s,V,n)\mapsto(s,p,n)$ has a C1 local inverse, define the **isentropic compressibility** of the whole system by

$$\kappa_S:=-\frac1V\left(\frac{\partial V}{\partial p}\right)_{s,n}.$$

The entropy $s$ is held fixed, as are all amounts $n_j$. The local energy representation gives $p=-(\partial U/\partial V)_{s,n}$ ([[pthm-td-local-energy-representation]]). Since $U$ is in joules and $V$ in $\mathrm{m^3}$, the relation $\mathrm{J\,m^{-3}=Pa}$ in [[def-td-si-quantities]] gives $p$ in $\mathrm{Pa}$, and hence $\kappa_S$ in $\mathrm{Pa^{-1}}$. This definition asserts no sign, finiteness, or existence outside the specified inverse chart; in particular it does not assign a value at a singular or critical response point.
