---
id: post-qsm-local-ensemble-preparations
kind: postulate
title: Adopted finite canonical and band preparation rules
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-additive-spectral-ensembles
  - def-qsm-local-finite-tensor-state
  - post-nrqm-framework-state-and-composition
  - post-nrqm-framework-observable-and-probability
  - def-nrqm-framework-quantities-and-units
dependency_roles:
  def-qsm-local-additive-spectral-ensembles: formulation-prerequisite
  def-qsm-local-finite-tensor-state: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
physical_scope: "Adopted preparation assignments for the explicitly finite, noninteracting q-level tensor model: canonical finite-temperature density and, when nonempty, a uniform exact energy-band density. These rules are conditional model inputs; they do not assert dynamical thermalization, experimental frequencies, data, or a continuum or interacting limit."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, §§1.2–1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: BIPM, SI base unit kelvin and defining value of the Boltzmann constant
      url: https://www.bipm.org/en/web/guest/si-base-units/kelvin
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

For the finite $q$-level tensor model of
[[def-qsm-local-additive-spectral-ensembles]], adopt the following
preparation rules in addition to the state and outcome assumptions P1 and P2
of [[post-nrqm-framework-state-and-composition]] and
[[post-nrqm-framework-observable-and-probability]]. The quantities in this
item are model assignments; they are not inferred from the cited texts or
from data.

1. For declared temperature $T>0$ kelvin and Boltzmann constant
   $k_B=1.380649\times10^{-23}\ \mathrm{J\,K^{-1}}$, the fixed exact SI
   Boltzmann constant, use $\beta=(k_BT)^{-1}>0$ joules$^{-1}$. In this
   formulation $k_B$ is the primitive SI conversion constant between
   temperature and energy; it is not derived from this finite-level model or
   fitted from its data. The real scalar levels $e_j$ in
   [[def-qsm-local-additive-spectral-ensembles]] are primitive model energy
   parameters in joules. The total label energy
   $E(j_1,\ldots,j_N)=\sum_{a=1}^Ne_{j_a}$ and the one-site canonical mean
   $E=\sum_{j=1}^qp_je_j$ defined there are derived scalar energies in
   joules. Adopt the canonical finite density $\gamma_N$ of that definition.
2. For declared band width $\delta_N\ge0$ in joules, if its label set
   $\Gamma_N$ is nonempty, the uniform band preparation is the density
   $\sigma_N=\Pi_N/|\Gamma_N|$ from that definition. If the set is empty,
   this normalized preparation is undefined and no band state is assigned.
3. For a stated finite POVM $(M_a)$ on the register, the outcome law is the
   adopted Born law $p_a=\operatorname{Tr}(\rho M_a)$ of P2. A prediction is
   the resulting model probability, not a reported detector frequency.

The positive-temperature interpretation uses SI units as fixed in
[[def-nrqm-framework-quantities-and-units]]. No preparation mechanism,
thermalization process, sampling law, apparatus error, or observed data is
asserted. A statement that a physical preparation realizes one of these
densities requires a separate empirical identification and uncertainty
analysis.
