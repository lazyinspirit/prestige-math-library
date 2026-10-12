---
id: def-nrqm-many-body-framework-entropy-and-free-energy
aliases: [nrqm-many-body-framework-entropy-and-free-energy]
kind: definition
domain: physics
title: "Entropy, the Boltzmann constant and the free-energy functional of the declared finite-sector model"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-identical-particles-framework-orbital-occupation-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum, thm-nrqm-identical-particles-finite-mode-occupation-counts, def-natural-logarithm, def-hilbert-space, def-countable-choice, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The framework's reading of entropy and free energy for a declared fixed-N model whose sector space is finite-dimensional (the finite-mode realization): the dimensionless von Neumann entropy of a declared preparation, the assigned Boltzmann constant with its exact SI value, an assigned temperature and inverse temperature, the physical entropy in J K^-1 and the Helmholtz free-energy functional in joules. The identification beta = 1/(k_B T) and the constancy of k_B are adopted model and unit-convention assumptions; the definition asserts no increase of entropy, no equilibration, no thermodynamic limit and no measured temperature or entropy."
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition 2019, Section 2.2 Table 1 printed pages 123-124 (PDF pages 12-13): the Boltzmann constant k is fixed to 1.380 649 x 10^-23 J K^-1 as an exact defining constant"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3.2 printed pages 127-129 (PDF pages 135-137): the Shannon entropy s = -sum p_i ln p_i and its operator form -Tr(rho ln rho); Section 6.4 printed pages 129-131 (PDF pages 137-139): the Gibbs distribution, beta = 1/(k_B T), the thermodynamic entropy S = k_B s (6.98) and the Helmholtz free energy F = -k_B T ln Z (6.99)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.1.3 printed pages 13-14: the von Neumann entropy S = -sum_j lambda_j ln lambda_j; Section 1.1.5 printed page 15: F = -T ln Z and F = E - T S"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Adopted readings and restricted sector class.** Adopt the observable and
probability postulate [[post-nrqm-framework-observable-and-probability]] (P2)
and the autonomous-dynamics postulate
[[post-nrqm-framework-autonomous-dynamics]] (P4), in the readings of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-autonomous-dynamics-framework-evolution]], for the declared
fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]]. This definition
applies to the class of declared models whose sector space
$\mathfrak H_N^\sigma$ is **finite-dimensional**, in particular to every
finite-mode realization
([[def-nrqm-identical-particles-framework-orbital-occupation-model]]), where
$D:=\dim\mathfrak H_N^\sigma$ is finite (and may be zero) by
[[thm-nrqm-identical-particles-finite-mode-occupation-counts]] clauses (a),
(b). Write $\mathcal D(\mathfrak H_N^\sigma)$ for the set of declared sector
preparations, that is, the density operators on $\mathfrak H_N^\sigma$
([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).
If $D=0$, the only operator has trace zero, so
$\mathcal D(\mathfrak H_N^\sigma)=\varnothing$. The partition trace is
$Z_N=0$, and there is no normalized canonical density or equilibrium free
energy; $\log D$, $D^{-1}\mathrm{id}$ and $\log Z_N$ are not used in this
branch. Clauses (b), (d) and (e) below apply when $D\ge1$; the assigned
parameters of (c) can still be declared when $D=0$.
Assume the Axiom of Countable Choice ([[def-countable-choice]]).

**(b) Dimensionless entropy.** For $\rho\in\mathcal D(\mathfrak H_N^\sigma)$
with eigenvalues $w_1,\dots,w_D\ge0$ (counted with multiplicity, in any
order), the **entropy** of $\rho$ is
$$s(\rho):=-\sum_{i:\,w_i>0}w_i\log w_i\in[0,\log D],$$
the quantity of [[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]]
clause (a) with $\log$ the natural logarithm
([[def-natural-logarithm]]). It is dimensionless, is a function of the
eigenvalue multiset of $\rho$ alone, and equals zero exactly for pure
preparations; by clause (c) of the cited theorem $s(\rho)=\log D$ holds
exactly when $\rho=D^{-1}\mathrm{id}$.

**(c) Boltzmann constant, temperature and inverse temperature.** The model
assigns a positive **Boltzmann constant** $k_B$ and a positive **temperature**
$T$; in the SI conventions of
[[def-nrqm-framework-quantities-and-units]] the unit of $k_B$ is
$\mathrm J\,\mathrm K^{-1}$, the unit of $T$ is the kelvin, and
$$k_B=1.380\,649\times10^{-23}\ \mathrm J\,\mathrm K^{-1}$$
fixed exactly by the BIPM SI definition. The model declares the **inverse
temperature** $\beta:=1/(k_BT)$, a positive real number in $\mathrm J^{-1}$.
The value and exactness of $k_B$ are unit-convention facts; the assignment of
the parameter $T$ to a physical sample, and the identification of
$\beta=1/(k_BT)$ with an inverse thermodynamic temperature, are adopted
assumptions of the ensemble model of this pair, not consequences of P1-P4,
and are tested identifications with uncertainty under the preparation and
apparatus postulate P7.

**(d) Physical entropy.** The **physical entropy** of $\rho$ is
$$S(\rho):=k_B\,s(\rho),$$
read in $\mathrm J\,\mathrm K^{-1}$. It is nonnegative, is at most
$k_B\log D$, and vanishes exactly for pure preparations.

**(e) Free-energy functional.** For $\rho\in\mathcal D(\mathfrak H_N^\sigma)$,
let $\operatorname{tr}(\rho H_N^\sigma)\in\mathbb R$ be the mean of the
declared energy observable in $\rho$ (finite because $D<\infty$, in the
moment reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (e)).
The **Helmholtz free-energy reading** of $\rho$ is
$$F(\rho):=\operatorname{tr}(\rho H_N^\sigma)-k_BT\,s(\rho),$$
read in joules; it is the quantity
$\operatorname{tr}(\rho H)-\beta^{-1}s(\rho)$ of
[[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clause (a)
at the identified $\beta$. For the canonical operator
$\rho_\beta:=e^{-\beta H_N^\sigma}/Z_N$ and
$Z_N:=\operatorname{tr}e^{-\beta H_N^\sigma}\in(0,\infty)$ (positive finite sum in the
nonzero finite-dimensional sector), the number $F_{\mathrm{eq}}:=-\beta^{-1}\log Z_N$
is called the **equilibrium free energy**; it is the value of the functional
at $\rho_\beta$ by the cited theorem.

**(f) Scope.** This definition covers only declared models with
finite-dimensional sector space, with the zero-sector branch of (a), and preparations in
$\mathcal D(\mathfrak H_N^\sigma)$. For a declared spatial realization, whose
sector space is infinite-dimensional, the operator $\rho\log\rho$ need not be
trace class; no entropy, physical entropy or free energy is defined here for
that case, and a separate trace-class statement would be required. The
definition asserts no increase of entropy in time, no equilibration to
$\rho_\beta$, no thermodynamic limit, no pressure or volume variable, and no
measured temperature, entropy or free energy.

## Remarks

- **Why the finite case first.** In the finite-dimensional sector the entropy
  is an ordinary finite sum over $D$ eigenvalues, and the comparison theorem
  of [[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] is
  available without any trace-class convergence hypothesis on
  $\rho\log\rho$. The infinite-dimensional questions are deferred rather than
  assumed.
- **Units of $\beta$.** $\beta=1/(k_BT)$ has the unit
  $\mathrm J^{-1}\mathrm K\,\mathrm K^{-1}=\mathrm J^{-1}$, so the exponent
  $\beta H_N^\sigma$ is dimensionless, as the spectral calculus requires.
