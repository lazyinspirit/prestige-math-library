---
id: post-nrqm-many-body-canonical-equilibrium-ensemble
aliases: [nrqm-many-body-canonical-equilibrium-ensemble]
kind: postulate
domain: physics
title: "The canonical equilibrium-ensemble assumption: the Gibbs preparation of a declared model at assigned temperature"
status: draft
origin: pipeline
dependency_level: 11
deps: [thm-positive-square-root, def-hilbert-schmidt-operator, thm-trace-class-iff-product-of-two-hilbert-schmidt-operators, thm-trace-is-absolutely-convergent-and-basis-independent, thm-hilbert-schmidt-norm-is-basis-independent, thm-zorn, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion, lem-nrqm-many-body-spectral-mean-and-defined-trace-product, def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-many-body-framework-entropy-and-free-energy, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-countable-choice, def-axiom-of-choice, thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]
dependency_roles:
  thm-positive-square-root: mathematical-premise
  def-hilbert-schmidt-operator: mathematical-premise
  thm-trace-class-iff-product-of-two-hilbert-schmidt-operators: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-hilbert-schmidt-norm-is-basis-independent: mathematical-premise
  thm-zorn: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion: mathematical-premise
  lem-nrqm-many-body-spectral-mean-and-defined-trace-product: mathematical-premise
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
physical_scope: "The adopted equilibrium-ensemble assumption of the many-body pair: for a declared fixed-N model or a separately declared number-variable mode model with self-adjoint semibounded Gibbs generator G (including a declared effective generator H-mu N), assigned temperature and strictly positive finite partition trace, the Gibbs preparation rho_beta = e^{-beta G}/Z, its thermal means, and the identifications of beta = 1/(k_B T) and of rho_beta with the model's description of thermal equilibrium. It is an adopted statistical-mechanical assumption motivated by maximum-entropy reasoning, not a consequence of the framework's state, probability or dynamics postulates; it asserts no thermalization, no equilibration rate, no thermodynamic limit and no fact about a laboratory sample except through the tested identifications of P7."
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
[[post-nrqm-framework-preparation-and-apparatus]] (P7), together with the
Boltzmann-constant and temperature conventions of
[[def-nrqm-many-body-framework-entropy-and-free-energy]]. Declare one of the
following model readings of the same **adopted Gibbs assignment**:

(i) a fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]], on its sector space,
with Gibbs generator $G:=H_N^\sigma$; or

(ii) a separately declared number-variable mode model, such as a one-mode
bosonic Fock space, a fermionic occupation space, or a declared countable
independent-mode space, with its declared assigned observables and energy
operator $H$. The model declares a self-adjoint Gibbs generator $G$ on that
space: either $G=H$, or a separately supplied self-adjoint realization of the
effective generator $G=H-\mu\mathcal N$, where $\mathcal N$ is the declared
particle-number operator and $\mu\in\mathbb R$ is an assigned chemical
potential in joules. The subtraction is an operator with its supplied domain,
not an assertion that a formal unbounded difference is self-adjoint.

In either reading assume $G$ is bounded below and give its spectral PVM
$E_G$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]). Let $T>0$ be an assigned temperature in
kelvin and let $\beta:=1/(k_BT)$ in $\mathrm J^{-1}$ with the assigned
Boltzmann constant $k_B$. The Gibbs assignment to either model, and the
chemical-potential identification in (ii), are additional physical
preparation assumptions made here; they are not derived from P1-P4 or from
the fixed-$N$ construction. In (ii) no restriction on the assigned real
$\mu$ is imposed beyond the declared generator and trace existence
conditions; the mode-specific convergence conditions are proved separately.
For reading (ii), $G$ specifies the Gibbs weights. If the assigned autonomous
dynamics is generated by $H$, stationarity of the Gibbs density requires its
separate dynamical or commutation hypotheses; this assignment does not
identify $H-\mu\mathcal N$ with the physical evolution generator.
The physical Helmholtz free-energy vocabulary of the entropy definition
continues to apply only to its stated nonzero finite-sector class and is not
extended to every effective generator by this postulate.
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the spectral calculus.

**(b) Existence hypothesis and the Gibbs preparation.** The model assumes
that the **partition trace is strictly positive and finite**:
$$0<Z:=\operatorname{Tr}e^{-\beta G}<\infty,$$
where $\operatorname{Tr}B:=\sum_{f\in\mathcal B}\langle Bf,f\rangle$ for a
bounded positive $B$ and an orthonormal basis $\mathcal B$, with value allowed
to be $+\infty$. Such a basis exists under the declared AC by the maximal
orthonormal-family argument using [[thm-zorn]] and the zero-complement
criterion of [[thm-parseval-equivalences-for-a-complete-orthonormal-family]].
This trace is basis independent: for $C:=B^{1/2}$ of
[[thm-positive-square-root]], the defining sum is
$\sum_{f\in\mathcal B}\|Cf\|^2$, whose invariance is
[[thm-hilbert-schmidt-norm-is-basis-independent]]. When the sum is finite,
$C$ is Hilbert-Schmidt ([[def-hilbert-schmidt-operator]]), so $B=C^2$ is
trace class by [[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]],
and its ordinary trace is this same diagonal sum by
[[thm-trace-is-absolutely-convergent-and-basis-independent]]. Apply this to the bounded positive operator $e^{-\beta G}$, since the
declared Gibbs generator $G$ is bounded below. The model
adopts as the **canonical** or **Gibbs preparation** of the declared model
at temperature $T$ the density operator
$$\rho_\beta:=Z^{-1}e^{-\beta G}.$$
If the sector is zero-dimensional, its partition trace is $Z=0$, no
trace-one density exists, and no canonical density or equilibrium free
energy is assigned. On a nonzero finite-dimensional model space, $Z$ is a
positive finite sum $\sum_je^{-\beta E_j}$ over the eigenvalues of $G$; no energy
sign restriction is needed. There $\rho_\beta$ is the canonical operator of
[[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]], and the
strict positivity and finiteness hypothesis is automatic. In reading (i),
$Z=Z_N$ and this is precisely the finite-sector Gibbs assignment.

Outside the finite-dimensional class the existence hypothesis is a genuine
restriction. For a declared non-interacting fixed-$N$ model with a supplied
countably infinite orthonormal eigenmode basis and real mode energies
$\varepsilon_j$ bounded below, the complete construction and trace criterion
of [[lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion]] give
$Z_N=h_N(q)$ for bosonic statistics or $Z_N=e_N(q)$ for fermionic statistics,
where $q_j=e^{-\beta\varepsilon_j}$ and $h_N,e_N$ are the corresponding
nonnegative occupation-series sums. For every fixed $N\ge1$, either trace is
finite exactly when $\sum_jq_j<\infty$. This is a trace on the fixed-$N$
sector and permits negative mode energies.

For the separately declared full bosonic Fock models of reading (ii),
the single-mode calculation of
[[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] and the product
criterion of [[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]]
provide the separate mathematical full-Fock traces, with their original
positive mode-energy hypotheses: they sum over every particle number,
including the vacuum, giving $(1-e^{-\beta\varepsilon})^{-1}$ for one mode
and $\prod_j(1-e^{-\beta\varepsilon_j})^{-1}$ for countably many modes.
Their physical Gibbs reading is the additional assignment of (a)(ii), not a
consequence of a mathematical trace formula. Those full-Fock traces are not
substituted for the fixed-$N$ partition trace of reading (i).

**(c) The equilibrium assumption and thermal means.** The model **assumes**
that, for a declared sample of the species at the assigned temperature $T$
and in the absence of further preparation information, the preparation
description of the sample is $\rho_\beta$ in the sense of P1. For an assigned
sharp observable $(A,u_A)$ with spectral PVM $E_A$, define its outcome law
$\mu_{\rho_\beta}^A(B):=\operatorname{tr}(\rho_\beta E_A(B))$ as in
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b).
If and only if the absolute first moment is finite,
$$\int_{\mathbb R}|a|\,d\mu_{\rho_\beta}^A(a)<\infty,$$
the model defines the **thermal mean** at temperature $T$ by
$$\langle A\rangle_\beta:=\int_{\mathbb R}a\,d\mu_{\rho_\beta}^A(a),$$
read in the assigned unit $u_A$. For bounded $A$ this equals
$\operatorname{tr}(\rho_\beta A)=\operatorname{tr}(A\rho_\beta)$. For
unbounded $A$, if the mean exists and the literal product $A\rho_\beta$ is
defined on the whole Hilbert space and is trace class, the mean also equals
$\operatorname{tr}(A\rho_\beta)$ and
$\operatorname{tr}(\overline{\rho_\beta A})$; these conditional product
identities are proved by the density eigenexpansion in
[[lem-nrqm-many-body-spectral-mean-and-defined-trace-product]]. First-moment
existence alone imposes no such product or operator-square-domain condition.
When the absolute first moment is infinite the model asserts no finite
thermal mean. The identification of the parameter $T$ with the thermodynamic temperature of a
sample, and of $\beta$ with its inverse temperature, is part of this
assumption; the stated conservation and equilibrium properties of
$\rho_\beta$ under the flow of P4, and the extremal property of $\rho_\beta$
among preparations, are separate conditional results of this pair.

**(d) Motivation and status.** The assumption is motivated, but not
established, by the maximum-entropy reasoning of the cited sources: among
preparations with a prescribed mean energy, the Gibbs weights maximize the
entropy functional, and the finite-dimensional comparison theorem makes
$\rho_\beta$ the minimizer of the corresponding functional built from $G$.
Its physical Helmholtz free-energy reading applies in the stated finite
fixed-sector class; an effective-generator interpretation in a different
mode model is a separate declared reading. That reasoning is
an argument inside mathematical statistics and thermodynamics; it does not
derive the physical assumption that a sample is described by $\rho_\beta$.
The postulate is an **adopted** statistical-mechanical assumption of the
model, in the sense of the content model's distinction between adopted
assumptions and derived consequences.

**(e) Scope.** The postulate asserts nothing about how a sample reaches the
Gibbs preparation; in particular it asserts no thermalization, no equilibration
time, no ergodicity, no master-equation or Markov approximation, no
thermodynamic limit, no pressure, volume or phase-transition structure, and
no measured temperature or expectation. The requirement $0<Z<\infty$ is part
of the assumption; the model does not define a canonical preparation when
$Z=0$ or the partition trace diverges. Any comparison with a laboratory sample requires the
declared preparation, isolation, detection and sampling models of P7, and
agreement of a thermal prediction with data is evidence about the combined
model and apparatus assumptions, not a proof of the framework or of this
postulate.

## Remarks

- **The finite-sector case.** For a nonzero finite-dimensional sector the existence
  hypothesis is a positive finite sum and hence automatic (and likewise for
  any separately declared nonzero finite-dimensional mode space); the only content of clause
  (b) there is the assignment of the Gibbs weights to the declared energies.
- **Relation to P4.** The postulate adds a preparation assumption to the
  dynamics; by itself P4 describes the unitary evolution of whatever
  preparation is declared, and does not single out $\rho_\beta$. The precise
  sense in which unitary evolution cannot produce $\rho_\beta$ from a
  different preparation is a separate theorem of this pair.
