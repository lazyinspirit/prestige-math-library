---
id: post-nrqm-many-body-canonical-equilibrium-ensemble
aliases: [nrqm-many-body-canonical-equilibrium-ensemble]
kind: postulate
domain: physics
title: "The canonical equilibrium-ensemble assumption: the Gibbs preparation of a declared model at assigned temperature"
status: draft
origin: pipeline
dependency_level: 11
deps: [def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-many-body-framework-entropy-and-free-energy, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-countable-choice, def-axiom-of-choice, thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The canonical equilibrium-ensemble assumption of the many-body pair: for a declared fixed-N model with semibounded energy operator and assigned temperature, the Gibbs preparation rho_beta = e^{-beta H}/Z with Z = tr e^{-beta H} finite, its thermal means, and the identifications of beta = 1/(k_B T) and of rho_beta with the model's description of thermal equilibrium. It is an adopted statistical-mechanical assumption motivated by maximum-entropy reasoning, not a consequence of the framework's state, probability or dynamics postulates; it asserts no thermalization, no equilibration rate, no thermodynamic limit and no fact about a laboratory sample except through the tested identifications of P7."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.4 printed pages 129-131 (PDF pages 137-139): the maximum-entropy motivation, the Gibbs distribution rho = Z^{-1} sum e^{-beta E_i}|i><i| (6.94), beta = 1/(k_B T) and Z = sum e^{-beta E_i} (6.93a,b), U = Tr(H rho) (6.95) and S = k_B s (6.98)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.1.2 printed page 13: the Gibbs distribution rho = e^{-beta H}/Z, Z = Tr e^{-beta H}, with beta a formal inverse-energy parameter; Section 1.1.4 printed pages 14-15: the maximal-entropy principle and the free energy F = -T ln Z"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: n/a
---

## Postulate

**(a) Adopted readings and framework data.** Adopt the state and composition
postulate [[post-nrqm-framework-state-and-composition]] (P1), the observable
and probability postulate
[[post-nrqm-framework-observable-and-probability]] (P2), the
autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]]
(P4) and the preparation and apparatus postulate
[[post-nrqm-framework-preparation-and-apparatus]] (P7), together with a
declared fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] and the entropy,
Boltzmann-constant and free-energy vocabulary of
[[def-nrqm-many-body-framework-entropy-and-free-energy]]. Let
$H_N^\sigma$ be the model's sector energy operator with spectral
projection-valued measure $E$ on the Borel sets of $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]), assume it is bounded below, let $T>0$ be
an assigned temperature in kelvin and let $\beta:=1/(k_BT)$ in
$\mathrm J^{-1}$ with the assigned Boltzmann constant $k_B$ of the entropy
definition. Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the spectral calculus.

**(b) Existence hypothesis and the Gibbs preparation.** Assume the
**partition sum is finite**:
$$Z_N:=\operatorname{tr}e^{-\beta H_N^\sigma}=\int_{\mathbb R}e^{-\beta\lambda}\,d\bigl(\operatorname{tr}E(\lambda)\bigr)<\infty .$$
Then $e^{-\beta H_N^\sigma}$ is defined by the spectral calculus of the
self-adjoint generator, it is positive with finite trace $Z_N>0$, and the
model adopts as the **canonical** or **Gibbs preparation** of the declared
model at temperature $T$ the density operator
$$\rho_\beta:=Z_N^{-1}e^{-\beta H_N^\sigma}.$$
In the finite-dimensional sector class of the entropy definition, $Z_N$ is
the finite sum $\sum_je^{-\beta E_j}$ over the eigenvalues and $\rho_\beta$
is the canonical operator of
[[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]]; the
hypothesis $Z_N<\infty$ is automatic there. Outside that class the
hypothesis is a genuine restriction: the single-mode calculation of
[[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] exhibits the
case $Z_N=(1-e^{-\beta\varepsilon})^{-1}$, and the product criterion of
[[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] shows that
countably many free modes have finite $Z_N$ exactly when
$\sum_je^{-\beta\varepsilon_j}<\infty$.

**(c) The equilibrium assumption and thermal means.** The model **assumes**
that, for a declared sample of the species at the assigned temperature $T$
and in the absence of further preparation information, the preparation
description of the sample is $\rho_\beta$ in the sense of P1. For an assigned
sharp observable $(A,u_A)$ of the system whose mean in $\rho_\beta$ exists
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (e)),
the number
$$\langle A\rangle_\beta:=\operatorname{tr}(\rho_\beta A)$$
is the model's **thermal mean** of $A$ at temperature $T$, read in the unit
$u_A$; when the mean does not exist the model asserts no thermal mean. The
identification of the parameter $T$ with the thermodynamic temperature of a
sample, and of $\beta$ with its inverse temperature, is part of this
assumption; the stated conservation and equilibrium properties of
$\rho_\beta$ under the flow of P4, and the extremal property of $\rho_\beta$
among preparations, are separate conditional results of this pair.

**(d) Motivation and status.** The assumption is motivated, but not
established, by the maximum-entropy reasoning of the cited sources: among
preparations with a prescribed mean energy, the Gibbs weights maximize the
entropy functional, and the finite-dimensional comparison theorem makes
$\rho_\beta$ the minimizer of the free-energy functional. That reasoning is
an argument inside mathematical statistics and thermodynamics; it does not
derive the physical assumption that a sample is described by $\rho_\beta$.
The postulate is an **adopted** statistical-mechanical assumption of the
model, in the sense of the content model's distinction between adopted
assumptions and derived consequences.

**(e) Scope.** The postulate asserts nothing about how a sample reaches the
Gibbs preparation; in particular it asserts no thermalization, no equilibration
time, no ergodicity, no master-equation or Markov approximation, no
thermodynamic limit, no pressure, volume or phase-transition structure, and
no measured temperature or expectation. The requirement $Z_N<\infty$ is part
of the assumption; the model does not define a canonical preparation when the
partition sum diverges. Any comparison with a laboratory sample requires the
declared preparation, isolation, detection and sampling models of P7, and
agreement of a thermal prediction with data is evidence about the combined
model and apparatus assumptions, not a proof of the framework or of this
postulate.

## Remarks

- **The finite-sector case.** For a finite-dimensional sector the existence
  hypothesis is a finite sum and hence automatic; the only content of clause
  (b) there is the assignment of the Gibbs weights to the declared energies.
- **Relation to P4.** The postulate adds a preparation assumption to the
  dynamics; by itself P4 describes the unitary evolution of whatever
  preparation is declared, and does not single out $\rho_\beta$. The precise
  sense in which unitary evolution cannot produce $\rho_\beta$ from a
  different preparation is a separate theorem of this pair.
