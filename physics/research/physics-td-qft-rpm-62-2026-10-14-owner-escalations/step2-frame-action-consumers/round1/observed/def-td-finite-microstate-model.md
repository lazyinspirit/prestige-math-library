---
id: def-td-finite-microstate-model
kind: definition
title: Finite statistical microstate model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps: [def-function, def-td-equilibrium-state-domain, def-td-galilean-rest-frame, def-td-si-quantities]
dependency_roles:
  def-function: mathematical-premise
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Finite discrete statistical models whose energies are numerical values in joules in the declared center-of-mass rest frame; no probability law or equilibration claim is part of the definition.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.2–1.3 (printed pp. 2–27)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.4 (printed pp. 192–208)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Definition

A finite statistical microstate model is a pair $(\Omega,\epsilon)$ where $\Omega$ is a finite nonempty set and $\epsilon:\Omega\to\mathbb R$ assigns a finite numerical energy to each microstate. The physical energy of $x\in\Omega$ is $E(x)=\epsilon(x)\,\mathrm J$, with its zero and any retained internal offsets fixed by the declared material model. Energies are evaluated in the center-of-mass rest frame specified by [[def-td-galilean-rest-frame]], and $U$ is the corresponding macroscopic internal-energy coordinate of [[def-td-equilibrium-state-domain]]. Equal energy values at distinct elements of $\Omega$ count as distinct microstates.

When two such models are declared independent, their joint microstate set is the Cartesian product $\Omega_A\times\Omega_B$, and additivity of the microscopic energy is the explicit condition $\epsilon_{AB}(x,y)=\epsilon_A(x)+\epsilon_B(y)$. Independence and this energy equation are model data; they do not follow merely from the two systems being separated. The definition itself assigns no weights, temperature, probability law, or dynamics.
