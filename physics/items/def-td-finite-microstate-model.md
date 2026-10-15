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
physical_scope: Finite discrete statistical models whose energies are numerical values in joules in the statewise instantaneous center-of-mass rest chart selected by separately supplied compatible mechanical data; no probability law or equilibration claim is part of the definition.
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

A finite statistical microstate model is a pair $(\Omega,\epsilon)$ where $\Omega$ is a finite nonempty set and $\epsilon:\Omega\to\mathbb R$ assigns a finite numerical energy to each microstate. The physical energy of $x\in\Omega$ is $E(x)=\epsilon(x)\,\mathrm J$, with its zero and any retained internal offsets fixed by the declared material model. For a physical internal-energy interpretation, the declared companion mechanical model supplies, for every admitted microstate preparation $x$, a positive total mass and a center-of-mass position map with a defined componentwise velocity at that preparation, obeying the Galilean transformation conditions of [[def-td-galilean-rest-frame]]. That velocity selects the statewise instantaneous rest chart in which $E(x)$ is recorded; a finite set and energy map alone do not construct these mechanical data or a common rest chart for a time interval. Bulk translational kinetic energy and separately tracked external-field energy are excluded from these internal-energy values. The energy zero and any internal offsets are fixed consistently across admitted states. If the statistical model also assigns a single equilibrium macrostate to a preparation, $U$ is its internal-energy coordinate of [[def-td-equilibrium-state-domain]]; the pair $(\Omega,\epsilon)$ alone does not assert that macroscopic identification. Equal energy values at distinct elements of $\Omega$ count as distinct microstates.

When two such models are declared independent, their joint microstate set is the Cartesian product $\Omega_A\times\Omega_B$, and additivity of the microscopic energy is the explicit condition $\epsilon_{AB}(x,y)=\epsilon_A(x)+\epsilon_B(y)$. Independence and this energy equation are model data; they do not follow merely from the two systems being separated. The definition itself assigns no weights, temperature, probability law, or dynamics.
