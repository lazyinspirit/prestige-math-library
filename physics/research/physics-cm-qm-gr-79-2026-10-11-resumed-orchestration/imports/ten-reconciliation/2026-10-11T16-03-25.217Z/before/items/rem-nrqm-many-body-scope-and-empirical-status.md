---
id: rem-nrqm-many-body-scope-and-empirical-status
aliases: [nrqm-many-body-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the many-body and equilibrium models"
status: draft
origin: pipeline
dependency_level: 13
deps: [def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-many-body-framework-one-body-reduced-operator, post-nrqm-many-body-canonical-equilibrium-ensemble, pthm-nrqm-many-body-noninteracting-sector-diagonalization, pthm-nrqm-many-body-one-body-readout-law, pthm-nrqm-many-body-exchange-energy-splitting, pthm-nrqm-many-body-thermal-equilibrium-characterization, pthm-nrqm-many-body-thermal-occupation-predictions, pthm-nrqm-many-body-unitary-evolution-preserves-entropy, def-nrqm-identical-particles-framework-species-sectors-and-preparations, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-identical-particles-and-spin, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-many-body-framework-one-body-reduced-operator: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  pthm-nrqm-many-body-noninteracting-sector-diagonalization: physical-result
  pthm-nrqm-many-body-one-body-readout-law: physical-result
  pthm-nrqm-many-body-exchange-energy-splitting: physical-result
  pthm-nrqm-many-body-thermal-equilibrium-characterization: physical-result
  pthm-nrqm-many-body-thermal-occupation-predictions: physical-result
  pthm-nrqm-many-body-unitary-evolution-preserves-entropy: physical-result
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The recorded scope and empirical status of the many-body and equilibrium page: which statements are model definitions, adopted ensemble assumptions or conditional results, which quantities are declared empirical parameters, what is explicitly not derived (thermalisation, thermodynamic limit, infinite-dimensional entropy, spin-statistics), and the absence of experiment items or measured values on this page."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.4 printed pages 129-132 (PDF pages 137-140): the Gibbs distribution taken as the maximum-entropy distribution, the thermodynamic interpretation of Z, U, S and F, and the authors' own caution that the dependence of Z on T and V can be computed for only very few Hamiltonians"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.1.1 printed page 13: the remark that the von Neumann entropy is conserved under the Liouville equation, and Section 1.1.4 printed pages 14-15: the maximal-entropy motivation for the Gibbs distribution"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: n/a
---

## Recorded scope

The page declares and works with the finite-mode and spatial realizations of a
**declared fixed-$N$ many-body model**
([[def-nrqm-many-body-framework-declared-fixed-n-model]]): a species sector of
P6, a one-particle energy operator, a pair interaction and the self-adjoint
restriction of the labelled Hamiltonian to the adopted symmetric or
antisymmetric sector. Everything proved on the page is a conditional
statement about such a declared model at declared parameters:

- the non-interacting finite-mode model is diagonal in the occupation basis
  with the stated occupation eigenvalues, partition sum and ground energy
  ([[pthm-nrqm-many-body-noninteracting-sector-diagonalization]]);
- the one-body readout of a bounded self-adjoint one-particle quantity has
  mean equal to $N$ times the pairing of the one-body reduced preparation
  with that quantity ([[pthm-nrqm-many-body-one-body-readout-law]]);
- for two orthonormal orbitals and a repulsive Coulomb pair interaction the
  spatially antisymmetric (spin-triplet) sector preparation has the lower
  mean pair energy, with splitting the exchange integral
  ([[pthm-nrqm-many-body-exchange-energy-splitting]]);
- in the finite-sector class the canonical preparation is the unique
  minimiser of the free-energy functional at the assigned
  $\beta=1/(k_BT)$ ([[pthm-nrqm-many-body-thermal-equilibrium-characterization]]),
  and the free-mode thermal occupation means are the Bose and Fermi factors
  with the stated product convergence criterion and dilute remainders
  ([[pthm-nrqm-many-body-thermal-occupation-predictions]]);
- the model's unitary flow preserves the entropy of every declared
  preparation and never maps a preparation different from the canonical one
  to it ([[pthm-nrqm-many-body-unitary-evolution-preserves-entropy]]).

## Adopted assumptions and parameters

The **canonical ensemble** is the adopted assumption of
[[post-nrqm-many-body-canonical-equilibrium-ensemble]]; the maximum-entropy
and free-energy arguments are motivations inside the model, and the
free-energy minimum theorem is a statement about the functional, not a
derivation of the ensemble from P1-P4. The **Boltzmann constant** is the exact
SI defining constant, while the **temperature**, **chemical potential**,
masses, couplings and any potential parameters are assigned model parameters
with uncertainty ([[def-nrqm-many-body-framework-entropy-and-free-energy]],
[[def-nrqm-framework-quantities-and-units]]). The assignment of a concrete
sample, mode family or detector to these model objects is a tested
identification under P7
([[post-nrqm-framework-preparation-and-apparatus]]).

## Explicitly not asserted

The page does **not** assert: thermalization or equilibration of any
preparation (the opposite conservation statement is proved for the closed
model); a thermodynamic limit, pressure, volume, phase transitions or
condensation; entropy or free energy for infinite-dimensional sectors, for
which $\rho\log\rho$ need not be trace class; any spin-statistics theorem,
which remains the adopted sector assignment of P6; any experimental value,
count or measured level splitting. The mode models are declared
idealizations: a finitely many-mode or product-of-modes reading of a free
system, not a derivation from a spatial continuum model. The exchange
computation of the page compares two declared preparations of one model; it
does not claim that any atom's spectrum equals the difference computed.

## Source limits

The physical reading of the Gibbs distribution and of the relations among
$U$, $S$ and $F$ follows the treatments of Binney-Skinner and Burmistrov-Lunkin
at the indicated locators; both are textbook and lecture-note presentations
whose thermodynamic identifications are heuristic model assumptions rather
than mathematical derivations, and the present page therefore records them as
adopted assumptions. Burmistrov-Lunkin work with $\beta$ as a formal
inverse-energy parameter and set $k_B=1$ implicitly; the SI reading
$\beta=1/(k_BT)$ with the exact BIPM value of $k_B$ used here is our own
convention, not a claim made at their locators. No source supplies measured
temperature-dependent data for the declared mode models on this page, and no
experiment item is created from these sources.
