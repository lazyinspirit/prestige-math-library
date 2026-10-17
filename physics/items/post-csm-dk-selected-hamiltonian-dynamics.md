---
id: post-csm-dk-selected-hamiltonian-dynamics
kind: postulate
title: Adopted classical Hamiltonian dynamics and preparation
status: published
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
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §§4.1–4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
    - title: David Tong, Statistical Physics, §§1.2.1 and 1.3.1
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
    - title: David Tong, Statistical Physics, §2.1
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
---

## Postulate

For a selected finite-dimensional nonrelativistic classical model, adopt a
Hamiltonian phase datum [[def-csm-dk-hamiltonian-flow-measure]] and interpret
each point of its manifold $M$ as a complete instantaneous model state. The
Hamiltonian $H:M\to\mathbb R$ is the model's supplied primitive energy
function; no derivation from a Lagrangian is assumed here. Choose a complete
invariant domain $R$ and a prepared Borel probability measure $\mu_0$ on $R$.
For each initial state $z_0\in R$, the unforced state curve is the smooth map
$z_{z_0}:\mathbb R\to M$ defined by $z_{z_0}(t)=\Phi_t(z_0)$ using the flow
from the phase datum; complete invariance ensures $z_{z_0}(t)\in R$ for every
$t$. The preparation is a probability law over possible
phase points; it is not an individual trajectory or a claim that an ensemble
was experimentally sampled.

Use SI units for the physical interpretation. In a canonical cotangent
chart, $q^i$ are generalized configuration coordinates and $p_i$ are the
conjugate covector components, so $\sum_i p_i\,dq^i$ has units J s.
If $q^i$ has unit $u_i$, then $p_i$ has unit J s/$u_i$.
Thus Cartesian length coordinates have units m and their conjugates
kg m/s, whereas dimensionless angular coordinates have conjugates in J s.
Identifying a conjugate with mechanical momentum requires an additional
model convention. The Hamiltonian
has units J and time has units s. The reference action $a_0$ in the
mathematical definition has units J s and is a normalization convention.
If a canonical-temperature model is additionally selected, take $T>0$ as
absolute temperature in K and adopt $k_B>0$ as a primitive
energy-temperature conversion constant of this formulation, with units J/K.
Set $\beta=(k_BT)^{-1}$ in J$^{-1}$ and use the associated weight only when
its partition integral is finite and positive. This postulate does not assert
that the canonical law is normalizable for every Hamiltonian or that these
adopted parameters describe nature.

## Remarks

This is an adopted model formulation and preparation rule. It is not derived
from mathematical axioms, and citing statistical-mechanics treatments does
not establish that a selected model describes nature. No ergodicity,
equilibration, measured outcome, or stochastic bath is assumed.
