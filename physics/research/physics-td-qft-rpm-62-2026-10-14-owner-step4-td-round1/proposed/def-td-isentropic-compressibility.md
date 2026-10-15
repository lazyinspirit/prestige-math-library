---
id: def-td-isentropic-compressibility
kind: definition
title: Isentropic compressibility on a valid local chart
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Finite derivative response on a local smooth positive-temperature simple-compressible energy chart at fixed composition; no value or sign is asserted where the inverse chart fails.
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
---

## Definition

Fix a constitution $c$, a positive-temperature local energy chart with entropy coordinate $s$ and physical volume $V>0$, and fixed amounts $n=(n_1,\ldots,n_r)$. The energy representation and pressure on this chart are those of [[pthm-td-local-energy-representation]] and the response-chart conventions are those of [[def-td-response-functions]]. Where $(s,V,n)\mapsto(s,p,n)$ has a C1 local inverse, define the **isentropic compressibility** of the whole system by

$$\kappa_S:=-\frac1V\left(\frac{\partial V}{\partial p}\right)_{s,n}.$$

The entropy $s$ is held fixed, as are all amounts $n_j$. Here $V$ is in $\mathrm{m^3}$ by [[def-td-si-quantities]], while $p=-\mathcal U_{c,V}$ by [[pthm-td-local-energy-representation]] has units $\mathrm{J\,m^{-3}}=\mathrm{Pa}$ by the SI unit relation. Hence $\kappa_S$ has units $\mathrm{Pa^{-1}}$. This definition asserts no sign, finiteness, or existence outside the specified inverse chart; in particular it does not assign a value at a singular or critical response point.
