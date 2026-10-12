---
id: def-nrqm-photons-framework-radiation-sector-and-quantum-assignments
kind: definition
title: "The radiation sector of the framework: modes and the number, energy and
  momentum assignments"
status: draft
origin: pipeline
domain: physics
dependency_level: 11
deps:
  [
    lem-nrqm-photons-transverse-fock-total-momentum,
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-identical-particles-and-spin,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian,
    lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers,
    lem-nrqm-photons-fixed-mode-number-isometry,
    def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  lem-nrqm-photons-transverse-fock-total-momentum: mathematical-premise
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers: mathematical-premise
  lem-nrqm-photons-fixed-mode-number-isometry: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The reading of the radiation extension postulate in the
  framework's vocabulary: the transverse one-particle space, the bosonic Fock
  sector assignment, the vocabulary of modes and mode families, normalized
  one-photon wave-packet coordinates f(k) in m^(3/2) under d^3k and
  dimensionless coherent-state labels z, the assigned total-number observable in
  the dimensionless unit 1, the assigned free-field energy observable in joules
  with epsilon(k)=hbar*c*|k|, and the assigned total momentum components and
  their one-photon restrictions in kg m s^-1 with the mode assignments
  omega=c|k|, E=hbar*omega and p=hbar*k. The readings record operator domains
  and self-adjointness from the cited mathematics; they assert no detector
  response, no light-matter coupling, no dynamics, no Lorentz transformation law
  and no empirical result."
sources:
  references:
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 9 Section 9.2 printed pages 135-138: the coordinate-space field
        operator expansion into mode creation and destruction operators and the
        free-mode energy"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/p\
        ratts/phy851/lectures/lectures_full.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Sections 1.2-1.4 printed pages 3-9 (PDF pages 4-10):
        Fock space, occupation-number states, and second-quantised
        single-particle operators"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: photon number, energy
        increment hbar*omega, and the classical standing-wave expectation of a
        coherent state"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2 and the identical-particle and spin
postulate P6 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-identical-particles-and-spin]]) and the radiation
extension postulate
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]] in
its clauses (i)-(iv), read in the state vocabulary of
[[def-nrqm-state-geometry-framework-state-space]], the observable vocabulary of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the sector
vocabulary of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
and the units of [[def-nrqm-framework-quantities-and-units]]. Assume the
Axioms of Countable Choice and of Choice, the choice hypotheses of the cited
Fock space mathematics ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) Radiation one-particle space and sectors.** The **transverse one-particle
space** of the radiation sector is
$$\mathfrak h:=\Bigl\{f\in L^{2}(\mathbb R^{3};\mathbb C^{3}):\ k\cdot f(k)=0\ \text{for almost every }k\Bigr\}$$
with the restricted $L^{2}$ inner product, a separable complex Hilbert space
([[def-hilbert-space]]); its elements are read as **one-photon wave-packet
vectors**. The wave-vector coordinate is $k$ in $\mathrm m^{-1}$ and the
normalization is against $d^{3}k$. With normalized state vectors dimensionless,
a unit wave-packet vector $f$ therefore has coordinate representatives $f(k)$
with units $\mathrm m^{3/2}$, so that $\int\|f(k)\|^{2}d^{3}k$ is
dimensionless. A unit mode vector has the same coordinate units. For $n\ge1$
the **$n$-photon sector** is
$\mathfrak H_{n}^{+}=\operatorname{ran}P_{+}^{(n)}\subseteq\mathfrak h^{\otimes n}$
and the **radiation state space** is the bosonic Fock space
$F(\mathfrak h)=\bigoplus_{n\ge0}\mathfrak H_{n}^{+}$, whose sector projections
are $\Pi_n$ and whose vacuum is $\Omega=\iota_0(1)$
([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]],
[[lem-nrqm-fock-and-equilibrium-fock-sector-projections]]). A **declared
radiation preparation** is a state $\rho\in D(F(\mathfrak h))$ in the sense of
[[def-nrqm-state-geometry-framework-state-space]]; a **declared one-photon
preparation** is a preparation whose state is supported in the one-photon
sector, and for a unit $f\in\mathfrak h$ the ray of $\iota_{1}(f)$ is the
one-photon preparation **of wave-packet vector $f$**.

**(c) Modes.** A **mode** of the radiation sector is a nonzero class
$\varphi\in\mathfrak h$ considered up to phase, equivalently the rank-one
orthogonal projection onto $\mathbb C\varphi$; a **declared mode family** is a
finite or countable orthonormal family $(\varphi_{j})$ of $\mathfrak h$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). For
a unit mode vector $\varphi$ and a dimensionless label $z\in\mathbb C$ the vector
$$U_\varphi\psi_z,\qquad \psi_z=e^{-|z|^{2}/2}\sum_{n\in\mathbb N}\frac{z^{n}}{\sqrt{n!}}e_n,$$
is the **mode-coherent preparation vector of label $z$**, and $U_\varphi e_n$
is the **$n$-quanta mode vector**; these are the readings of the transferred
vectors of [[lem-nrqm-photons-fixed-mode-number-isometry]]. A mode vector is a
normalisable wave packet; the sharp-mode label $k$ of the propagation-mode
idealisation is a spectral parameter and is not a state of $\mathfrak h$
([[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]]
clause (c)).

**(d) Assigned observables.** The framework assigns to the radiation sector:

1. the **total number observable** $(N,1)$, the self-adjoint number operator of
   [[thm-nrqm-fock-and-equilibrium-number-operator-domain]], with domain
   $D(N)=\{\psi:\sum_nn^{2}\|\psi_n\|^{2}<\infty\}$ and read in the
   dimensionless unit $1$ of counted quanta;
2. the **free-field energy observable** $(H_f,\mathrm J)$, the operator
   $H_f=\bigoplus_{n\ge0}T_{n}$ with $\varepsilon(k)=\hbar c|k|$ and
   $T_{n}\psi=\varepsilon_{n}\psi$, of
   [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]],
   read in joules; its one-particle restriction is the energy multiplier
   $M_{\hbar c|k|}^{\mathfrak h}$ of
   [[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]];
3. for $j\in\{1,2,3\}$ the **total momentum component** $(P_j,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ is the self-adjoint direct sum of the signed summed multipliers $P_{j,n}$ of [[lem-nrqm-photons-transverse-fock-total-momentum]], with $P_{j,0}=0$. In the lemma's exact Euclidean embedding $I_n$ of each symmetric transverse sector, $P_{j,n}$ multiplies by $p_{j,n}(k)=\hbar\sum_i(k_i)_j$ on the maximal domain $\{u:p_{j,n}I_nu\in L^2\}$. Its Fock domain is
   $$D(P_j)=\{\psi:\psi_n\in D(P_{j,n})\text{ for every }n,\ \sum_n\|P_{j,n}\psi_n\|^2<\infty\}.$$
   This is the domain of the sum, without an extra requirement that each individual momentum summand be square integrable. Its spectral PVM is the sectorwise direct sum of the inverse-image indicator multipliers, including the atom at zero on the vacuum. The **one-photon momentum component** is its restriction to sector one, identified with $M_{\hbar k_j}^{\mathfrak h}$ of [[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]]. The postulate assigns these mathematical operators their physical momentum meaning and units.

**(e) Reading of the mode assignments.** In the declared inertial chart the
assignments $\omega(k)=c|k|$ in $\mathrm s^{-1}$, $E(k)=\hbar\omega(k)$ in
$\mathrm J$ and $p(k)=\hbar k$ in $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$ of
clause (iii) of the radiation postulate are read through the spectral measures
of clause (d): for a one-photon preparation of unit wave-packet vector
$f\in\mathfrak h$, the **assigned frequency**, **energy** and
**momentum component** laws are the push-forwards of the measure
$\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k$ under $k\mapsto c|k|$,
$k\mapsto\hbar c|k|$ and $k\mapsto\hbar k_{j}$; these laws, and their finite means under the corresponding first-moment conditions, are proved on this page. Sharp
frequency, sharp energy and sharp momentum-component states are not vectors of
$\mathfrak h$; every unit one-photon vector in the corresponding multiplier domain has
finite strictly positive variance in that quantity (clause (d) of
[[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]]).
The push-forward laws themselves exist for every unit $f\in\mathfrak h$, without a moment-domain assumption; all their singleton probabilities vanish by the null level sets in the cited lemma, so they are non-Dirac laws even when finite means or variances do not exist. Thus "photon of energy $\hbar\omega$" names a spectral assignment of the model, not a normalisable state with an exact energy.

**(f) Scope.** Clauses (b)-(e) fix the sector assignment and the units. They
assert no detector model, no sampling model, no dynamics, no interaction with
matter, no spontaneous emission and no empirical result; the counting and detection vocabulary is fixed separately on this page. The
identification of a laboratory radiation field with a preparation of
$F(\mathfrak h)$ is a tested identification with uncertainty under P7, and no
Lorentz transformation law for modes or their labels is adopted or claimed.
