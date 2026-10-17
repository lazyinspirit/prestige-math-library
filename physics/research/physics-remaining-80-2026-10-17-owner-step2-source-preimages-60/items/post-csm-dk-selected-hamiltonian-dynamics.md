---
id: post-csm-dk-selected-hamiltonian-dynamics
kind: postulate
title: Adopted classical Hamiltonian dynamics and preparation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-hamiltonian-flow-measure
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
physical_scope: A specified smooth nonrelativistic Hamiltonian and prepared probability law; no generic ergodicity, equilibration, thermostat identification, or claim about nature.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
---

## Postulate

For a selected finite-dimensional nonrelativistic classical model, adopt a
Hamiltonian phase datum
[[def-csm-dk-hamiltonian-flow-measure]] and a prepared Borel probability
measure $\mu_0$ on its stated complete invariant domain $R$. The model's
unforced state starting at $z_0\in R$ is $z(t)=\Phi_t(z_0)$, where $\Phi_t$ is
the actual Hamiltonian flow defined in that datum. The preparation is a
probability law over possible phase points; it is not an individual trajectory
or a claim that an ensemble was experimentally sampled.

In standard canonical mechanical coordinates, positions have units m,
canonical momenta kg m/s, the Hamiltonian J, and time s. The action reference
scale $a_0$ in the mathematical definition has units J s. If a canonical
temperature model is additionally selected, $T>0$ has units K,
$k_B$ has units J/K, and $\beta=(k_BT)^{-1}$ has units J$^{-1}$; the associated
weight is adopted only when its partition integral is finite and positive.
This postulate does not assert that the canonical law is normalizable for
every Hamiltonian.

## Remarks

This is an adopted model formulation and preparation rule. It is not derived
from mathematical axioms, and citing statistical-mechanics treatments does
not establish that a selected model describes nature. No ergodicity,
equilibration, measured outcome, or stochastic bath is assumed.
