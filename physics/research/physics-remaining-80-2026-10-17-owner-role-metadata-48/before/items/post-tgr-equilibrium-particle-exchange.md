---
id: post-tgr-equilibrium-particle-exchange
kind: postulate
title: Specified equilibrium particle exchange
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - def-tgr-framework-units
  - def-tgr-local-fluid-state
  - post-tgr-local-material-thermodynamics
  - def-tgr-charged-liouville-data
  - lem-tgr-gauge-killing-energy
  - thm-tgr-finite-entropy-exchange-equilibrium
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-local-fluid-state: mathematical-premise
  post-tgr-local-material-thermodynamics: physical-assumption
  def-tgr-charged-liouville-data: formulation-prerequisite
  lem-tgr-gauge-killing-energy: mathematical-premise
  thm-tgr-finite-entropy-exchange-equilibrium: mathematical-premise
physical_scope: "A selected fixed-composition local material branch with either a finite independent-cell exchange model or a massive classical charged Liouville ansatz; charged conclusions require the stated global potential symmetry and reference."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jorge A. Rueda, Remo Ruffini, and She-Sheng Xue, The Klein first integrals in an equilibrium system with electromagnetic, weak, strong and gravitational interactions, §4"
      url: "https://arxiv.org/pdf/1104.4062"
      locator: "Full 12-page PDF; §4, PDF pp. 8–10: charged particle chemical potentials and the model-specific Klein potentials."
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§IV and VI.B"
      url: "https://arxiv.org/pdf/2106.09235"
      locator: "Full 79-page PDF; charged kinetic data and the exact global-equilibrium restrictions, PDF pp. 26–30 and 45–46."
    - title: "Francesco Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §6"
      url: "https://arxiv.org/pdf/1606.06605"
      locator: "Full 13-page PDF; global equilibrium density-operator discussion and the constant chemical-potential-to-temperature ratio, PDF pp. 6–7."
---

## Postulate

For a selected fixed-composition material branch, adopt the local state function and energy convention of [[post-tgr-local-material-thermodynamics]] and [[def-tgr-local-fluid-state]]. In that state map, $T>0$ is the derivative of the supplied energy per marker with respect to entropy per marker, and the chemical potential is $\mu=H-T\sigma_p$ in joules per marker. Rest energy stays in the energy convention used for $\mu$ and for any particle generator; a rest-energy subtraction made in a different convention must be tracked explicitly.

For particle exchange, select and declare one of these physical model protocols:

- **Finite-cell exchange.** Supply $r\ge1$ finitely many independent cells with differentiable concave entropy functions $S_i(E_i,n_i)$, positive lapse values $N_i$, a fixed common charge $q$, and potential values $\Phi_i$ in a stated common reference. The adopted exchange conserves $\sum_i(N_iE_i+q\Phi_i n_i)$ and $\sum_i n_i$. The local $T_i$ and $\mu_i$ for this protocol are those defined by the entropy derivatives in [[thm-tgr-finite-entropy-exchange-equilibrium]]. Their identification with another material state map is an additional model identification, not inferred here.

- **Charged kinetic exchange.** On the selected stationary domain, supply a species of rest mass $m>0$, charge $q$, smooth local fields $T>0$ and $\mu$, a global smooth real potential $A$ with $F=dA$, and a smooth compensator $\Lambda_\xi$ satisfying $\mathcal L_\xi A=d\Lambda_\xi$. Use the future massive shell, charged transport, and dimensionless exponential ansatz exactly as defined in [[def-tgr-charged-liouville-data]]. Adopt whole-shell stationarity $\mathcal L_{F,q}f=0$ as the exchange criterion. This is a model assumption on every future mass-shell momentum, not an assertion that collisions drive a gas to this ansatz.

The two protocols are separate model choices. This postulate does not derive either protocol from gravity, assert a global electrostatic potential when no single-valued symmetry compensator exists, establish a Gibbs state or material realization, or identify finite entropy variables with kinetic fields without an explicit model assumption.
