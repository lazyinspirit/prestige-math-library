---
id: def-nrqm-light-matter-framework-finite-level-coupled-model
aliases: [nrqm-light-matter-framework-finite-level-coupled-model]
kind: definition
domain: physics
title: "The declared finite-level matter model and its cutoff dipole coupling to the transverse radiation sector"
status: published
origin: pipeline
dependency_level: 14
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, def-nrqm-identical-particles-framework-species-sectors-and-preparations, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, def-hilbert-space, def-bounded-linear-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-inner-product-space, def-countable-choice, def-axiom-of-choice, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-orthogonal-projection, def-nrqm-autonomous-dynamics-framework-evolution]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared finite-level cutoff dipole model: the compressed dipole matrices and compressed Coulomb energy of a declared finite-dimensional subspace of the two-body Coulomb relative-coordinate model, the bosonic transverse radiation sector of the adopted extension, the cutoff mode vectors g_j with 0 < epsilon <= Lambda and the bounded-relative coupling eta_0 sum_j D_j tensor phi(g_j) declared to be read in joules, together with the model's self-adjointness, its autonomous evolution and its state and outcome readings. The definition asserts no laboratory atom, field, mode cutoff or coupling value, no Maxwell equation, no derivation of the truncation, the cutoff or the coupling, no detector, no environment, no rate and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 215-218 (PDF pages 223-226): the classical electromagnetic wave as a perturbation of the atomic Hamiltonian, the long-wavelength electric-dipole approximation and the transition rate proportional to the squared dipole matrix element"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 5.3 printed pages 48-50: the single electromagnetic field mode with field amplitudes q and p, the oscillator Hamiltonian and the identification of a classical field with an expectation value"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 9 Section 9.2 printed pages 135-138 (mode expansion of the field operator) and Chapter 14 Section 14.3 printed page 221 (coupling to a classical current that is unaffected by the emission)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4
and the identical-particle and spin postulate P6
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-identical-particles-and-spin]]), the radiation extension
postulate
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]] and
the static finite-level dipole postulate
[[post-nrqm-approximations-static-finite-level-dipole-coupling]], in the state
and outcome readings of [[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]], in the radiation
sector vocabulary of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] and
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
and in the units and dimensions of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice, the choice hypotheses of the cited Fock space
mathematics ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) Finite-level matter factor.** Take the declared charged pair, the
relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$, the coordinate
multipliers $Q_{j}$ and the dipole operator components $D_{j}=-q\,Q_{j}$ of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses
(i)-(ii), with the Coulomb energy operator $H_{\kappa}$ of clause (iv) of that
postulate. Fix, as model data, a declared finite-dimensional subspace
$$W\subseteq D(H_{\kappa})\cap D(Q_{1})\cap D(Q_{2})\cap D(Q_{3}),\qquad \dim W=d<\infty,$$
with a declared orthonormal basis $(w_{1},\dots,w_{d})$ of $W$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
and read $W$ as $\mathbb C^{d}$ in that basis. The model's **compressed matter
energy** is the Hermitian $d\times d$ matrix
$$H_{a}:=\Pi_{W}H_{\kappa}\big|_{W},$$
read in joules, where $\Pi_{W}$ is the orthogonal projection onto $W$
([[def-hilbert-orthogonal-projection]]); the model's **compressed dipole
matrices** are the Hermitian $d\times d$ matrices
$$D^{W}_{j}:=\Pi_{W}D_{j}\big|_{W}\qquad(j=1,2,3),$$
read in $\mathrm{C\,m}$; and the model's **levels** are the pairs $(E,v)$ with
$E\in\mathbb R$ (joules) an eigenvalue of $H_{a}$ and $v\in\mathbb C^{d}$ a
nonzero eigenvector for $E$. A **declared level pair** is an ordered pair
$(a,b)$ of orthonormal eigenvectors $v_{a},v_{b}$ of $H_{a}$; its **transition
energy** is $E_{a}-E_{b}$. The subspace, its basis and its dimension are model
data: they are not derived from the Coulomb model and they replace the
unbounded operators $H_{\kappa},D_{j}$ by their compressions throughout this
pair.

**(c) Radiation factor and cutoff dipole data.** Take the transverse
one-particle space $\mathfrak h$, the bosonic Fock space $F(\mathfrak h)$, the
vacuum $\Omega$, the sector projections $\Pi_{n}$ and the free-field energy
observable $H_{f}=\bigoplus_{n\ge0}T_{n}$ with $\varepsilon(k)=\hbar c|k|$ of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]]
clauses (b),(d), with the domains and self-adjointness of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]
and [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], read in
joules. Fix, as further model data, a **cutoff** $\Lambda>0$ (joules), an
integer $J\ge1$ and vectors $g_{1},\dots,g_{J}\in\mathfrak h$ with
$$\operatorname{supp}g_{j}\subseteq\{k:\ 0<\varepsilon(k)\le\Lambda\},\qquad \frac{g_{j}}{\sqrt\varepsilon}\in\mathfrak h ,$$
For each radiation channel $j=1,\ldots,J$, declare real dimensionless weights $e_{j,i}$ ($i=1,2,3$) and define the Hermitian **channel dipole matrix**
$$D_j^{\mathrm{ch}}:=\sum_{i=1}^3 e_{j,i}D_i^W.$$
These are compressions of the actual real Cartesian dipole combination $\sum_i e_{j,i}D_i$ on $W$, so they have dipole units. This explicitly defines every channel even when $J>3$; the Cartesian case $J=3$, $e_{j,i}=\delta_{ji}$ is included. The weights are declared model data, with no assumed normalization or measured direction. Fix also a real **coupling number** $\eta_0$ declared so that the interaction term
of clause (d) is read in joules. The cutoff and the mode vectors are model
data; no laboratory mode content, no Maxwell field, no mode density and no
value of $\eta_{0}$ is asserted.

**(d) The coupled model.** Write $\phi(g):=A_{-}(g)+A_{+}(g)$ for the maximal
creation-annihilation sum of
[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] on
$F(\mathfrak h)$. The **declared finite-level cutoff dipole model** is the pair
of the Hilbert space $\mathbb C^{d}\otimes F(\mathfrak h)$
([[def-hilbert-space]]) and the operator
$$H_{\mathrm{LM}}:=H_{a}\otimes I+I\otimes H_{f}+\eta_{0}\sum_{j=1}^{J}D_j^{\mathrm{ch}}\otimes\phi(g_j), \qquad D(H_{\mathrm{LM}}):=\mathbb C^{d}\otimes D(H_{f}).$$
For $d\ge1$, by [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] clause (c),
read with the Hermitian matrices $H_{a}$, $D_1^{\mathrm{ch}},\dots,D_J^{\mathrm{ch}}$ and the
coupling $\eta_{0}$ (its $d$ is the present $d$), the operator
$H_{\mathrm{LM}}$ is self-adjoint on the displayed domain and bounded below
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-bounded-linear-operator]]). If $d=0$, both the tensor-product Hilbert space and the displayed domain are $\{0\}$; $H_{\mathrm{LM}}$ is the unique operator on that space. Its adjoint is the same operator, and $\langle H_{\mathrm{LM}}0,0\rangle=0$, so it is self-adjoint and bounded below without invoking the positive-dimensional supplier. This degenerate case has no levels, level pairs or normalized preparations. For $d\ge1$, the model declares $H_{\mathrm{LM}}$ its
**energy observable**, in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], with energies,
mode energies and the coupling read in joules.

**(e) The model's evolution and states.** The model's evolution is the
autonomous unitary family $U(t):=e^{-itH_{\mathrm{LM}}/\hbar}$, $t\in\mathbb R$,
in the reading of clause (ii) of P4 and of
[[def-nrqm-autonomous-dynamics-framework-evolution]]; for $d\ge1$, a preparation $\rho$ of
the model is a state of $\mathbb C^{d}\otimes F(\mathfrak h)$ in the sense of
[[def-nrqm-state-geometry-framework-state-space]], with
$\rho(t):=U(t)\rho U(t)^{*}$, and the outcome law of an assigned sharp
observable $(A,u_{A})$ is the reading of P2
([[def-nrqm-observables-framework-observable-and-outcome-law]]). No
measurement, no detector, no environment, no external field, no rate and no
record is part of this definition.

**(f) Scope.** Clauses (b)-(e) are adopted model data and readings. They assert
nothing about a laboratory atom, sample, mode content, cutoff or coupling; no
Maxwell equation, source model, back-reaction or propagation is assumed; the
truncation, the cutoff and the mode vectors are not derived; and no
identification of $\eta_{0}$ or of the $g_{j}$ with laboratory quantities is
made. The identification of a physical preparation with a state of this model
is a tested identification with uncertainty under P7. The model contains no
photon detector, no sampling model, no environment beyond the declared
transverse modes, and no rate, decay or linewidth statement.
