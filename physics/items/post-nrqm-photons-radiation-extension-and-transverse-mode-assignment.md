---
id: post-nrqm-photons-radiation-extension-and-transverse-mode-assignment
kind: postulate
title: "Radiation extension of the framework: transverse mode and photon assignments"
status: draft
origin: pipeline
domain: physics
dependency_level: 10
deps:
  - lem-nrqm-photons-transverse-fock-total-momentum
  - post-nrqm-framework-state-and-composition
  - post-nrqm-framework-observable-and-probability
  - post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
  - post-nrqm-framework-identical-particles-and-spin
  - post-nrqm-framework-preparation-and-apparatus
  - def-nrqm-framework-newtonian-spacetime
  - def-nrqm-framework-inertial-frames
  - def-nrqm-framework-quantities-and-units
  - def-nrqm-state-geometry-framework-state-space
  - def-nrqm-observables-framework-observable-and-outcome-law
  - def-nrqm-identical-particles-framework-species-sectors-and-preparations
  - thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
  - thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian
  - thm-nrqm-fock-and-equilibrium-number-operator-domain
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  lem-nrqm-photons-transverse-fock-total-momentum: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-newtonian-spacetime: formulation-prerequisite
  def-nrqm-framework-inertial-frames: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adopted radiation extension of the non-relativistic quantum
  framework: a fixed propagation-mode one-photon polarisation model with a
  two-dimensional transverse internal space, and a quantised free transverse
  radiation sector with bosonic Fock space and the mode assignments omega=c|k|,
  photon energy E=hbar*omega and photon momentum p=hbar*k in a declared inertial
  laboratory chart. The extension is an explicitly adopted model assumption; it
  is not derived from classical Maxwell theory, from special relativity, or from
  the massive-particle model by a mass-to-zero limit, and no Lorentz
  transformation law for the mode labels and no Galilean covariance of the
  radiation sector are claimed. Detection, coupling to matter and spontaneous
  emission are not supplied by this postulate."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): photon polarisation, the
        two transverse states, individual photons transmitted or absorbed, and
        the agreement of the transmitted fraction cos^2(theta) with the
        classical Malus law"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: a single electromagnetic
        field mode, its field amplitudes q and p, the oscillator Hamiltonian,
        photon number and energy hbar*omega, and the classical standing-wave
        expectation of a coherent state"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "Robert G. Littlejohn, Physics 221B 2021-22 Notes 41, The Quantized
        Electromagnetic Field, Section 7, equations (21)-(33), printed pages
        8-10: for the free field, derives the normal-ordered momentum operator
        P=sum_lambda hbar*k*a_lambda^dagger*a_lambda and reads occupation-number
        states as carrying the corresponding photon momentum hbar*k; the
        derivation uses Gaussian units, Coulomb gauge and box normalization"
      url: "https://bohr.physics.berkeley.edu/classes/221/notes/quantemf.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 9 Section 9.2 printed pages 135-138: creation and destruction
        operators in coordinate space, the field operator expansion and the
        energy of free modes"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/p\
        ratts/phy851/lectures/lectures_full.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II,
        Michaelmas 2021), Chapter 5 'Angular Momentum', printed page 15 footnote
        55: the photon carries one unit of hbar of intrinsic angular momentum
        but has only two states, and a massless particle requires Lorentz-group
        representations rather than spatial rotations; Internet Archive copy of
        the original DAMTP-hosted Chapter 5 PDF"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk\
        /user/dbs26/PQM/chap5.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt, as an additional model assumption of the framework on this page and its
consumers, the following radiation extension. It is adopted together with the
state and composition postulate P1, the observable and probability postulate P2,
the kinematics and massive-particle model postulate P5, the identical-particle
and spin postulate P6 and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]), in the space vocabulary of
[[def-nrqm-state-geometry-framework-state-space]], the observable vocabulary of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the species and
sector vocabulary of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
and the units and dimensions of [[def-nrqm-framework-quantities-and-units]].
Assume the Axiom of Countable Choice and the Axiom of Choice, the choice
hypotheses of the cited Fock space mathematics ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(i) Fixed propagation-mode one-photon polarisation model.** For a declared
propagation mode, described by a nonzero wavevector label
$k_{0}\in\mathbb R^{3}\setminus\{0\}$ read in $\mathrm m^{-1}$ in a declared
inertial chart ([[def-nrqm-framework-inertial-frames]]), the model assigns a
two-dimensional complex internal space, the **transverse polarisation space**
of the mode: the complex span of an orthonormal pair $(v_{1},v_{2})$ of vectors
of $\mathbb C^{3}$ satisfying $k_{0}\cdot v_{1}=k_{0}\cdot v_{2}=0$, with the
standard Hermitian form. Unit rays of this space are the model's **one-photon
polarisation preparations** of the mode. This assignment is an idealised
manifestation of the abstract Born/state framework on a finite-dimensional
internal factor; it is not a spatial wave function of a massive particle, not a
model of a photon position, and not the massive one-particle Hamiltonian of P5
with mass set to zero. For the massive free family,
[[cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit]] refutes strong
action convergence to a self-adjoint operator on every Schwartz state and
shows frequency divergence at each fixed nonzero wave number as
$m\downarrow0$. This extension uses its independently declared massless
model assignments, with no such limiting construction.

**(ii) Quantised transverse radiation sector.** The model assigns to the free
radiation a **bosonic species** in the sense of P6, whose one-particle space is
the transverse space
$$\mathfrak h:=\Bigl\{f\in L^{2}(\mathbb R^{3};\mathbb C^{3}):\ k\cdot f(k)=0\ \text{for almost every }k\Bigr\}$$
with the $L^{2}$ inner product; its $n$-particle sector is
$\mathfrak H_{n}^{+}=\operatorname{ran}P_{+}^{(n)}$ and its radiation state
space is the bosonic Fock space $F(\mathfrak h)=\bigoplus_{n\ge0}\mathfrak H_{n}^{+}$
([[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]). The
statistics choice "bosonic" is an empirical model assignment of P6 clause (iii)
and is not derived here; it is motivated by the photon's observed
indistinguishability and integer spin but is adopted, not deduced.

**(iii) Mode assignments of frequency, energy and momentum.** In the declared
inertial chart, each free mode label $k\in\mathbb R^{3}\setminus\{0\}$ is
assigned the **angular frequency** $\omega(k):=c|k|$ in $\mathrm s^{-1}$, the
**photon energy** $E(k):=\hbar\omega(k)=\hbar c|k|$ in joules and the
**photon momentum** $p(k):=\hbar k$ in $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$,
where $c=2{,}99792458\times10^{8}\ \mathrm m\,\mathrm s^{-1}$ and
$\hbar=h/(2\pi)>0$ in $\mathrm J\,\mathrm s$ have the SI values of
[[def-nrqm-framework-quantities-and-units]] clause (c). Ordinary frequency is
$\nu(k)=\omega(k)/(2\pi)$ in hertz. These are separate quantum-radiation model
assignments: they are neither consequences of classical Maxwell theory nor
consequences of the special-relativistic framework, and no Lorentz
transformation law for the mode label $k$, for $\omega(k)$ or for the
polarisation pair is adopted or claimed; the extension does not assert Galilean
covariance of the radiation sector, and it does not identify the massless
Lorentz representations of the photon with the representations of the spatial
rotation group used in P6.

Littlejohn's Section 7 derives the normal-ordered free-field momentum from the
field momentum density and obtains
$P=\sum_{\lambda}\hbar k\,a_{\lambda}^{\dagger}a_{\lambda}$, then reads an
occupation-number state as carrying the corresponding sum of photon momenta
(equations (21)-(33)). That derivation uses Gaussian units, Coulomb gauge and box
normalization; it supports this assignment but does not derive this framework's
other radiation assumptions or its covariance claims.

**(iv) Free-field observables.** The model assigns the total free-field energy
observable $H_f=\bigoplus_{n\ge0}T_{n}$ with $\varepsilon(k)=\hbar c|k|$ and
$T_{n}\psi=\varepsilon_{n}\psi$, read in joules, the total number observable $N$
read in the dimensionless unit $1$ of counted quanta, and the total momentum
components $\bigoplus_n\bigl(\sum_{i=1}^{n}\hbar k_{j,i}\bigr)$, read in
$\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$; their operator domains and
self-adjointness are the mathematics of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]
and [[thm-nrqm-fock-and-equilibrium-number-operator-domain]] for energy and
number, and [[lem-nrqm-photons-transverse-fock-total-momentum]] for total
momentum, read physically in
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]].
The total momentum components use the maximal signed summed-multiplier
sector domains and the squared-norm summability Fock domain of that lemma;
the vacuum has total momentum zero.

**(v) Counting, detection and light-matter coupling are not supplied.** Photon
number and energy *statistics* require a declared detector model in the sense
of P2 and P7, which this postulate does not supply; a prescribed classical
electromagnetic field does not by itself yield photon counting or vacuum
spontaneous emission. No light-matter Hamiltonian, no dipole coupling, no
emission or absorption process and no recoil model is asserted here; the
absorption/stimulated-emission branch with a finite-level dipole coupling and
the quantised-mode emission construction are separate model assumptions for
the later pair on light-matter and spectral transitions. The relation of a
laboratory field, polariser or detector to this model is a tested
identification with uncertainty under P7, not a consequence of the postulate.

**(vi) Scope of the framework.** The radiation extension is deliberately
non-relativistic in its matter sector: it adds external free radiation modes to
the fixed-particle-number massive matter core without changing P5. Relativistic
matter, antiparticles, pair creation, covariant local field dynamics and full
quantum electrodynamics are not contained in this extension and are not
disguised as solved core prerequisites; they require a named field-theory
destination. No position wave function of the photon satisfying the massive
Schrödinger equation is introduced.

**(vii) Status.** Clauses (i)-(vi) are adopted assumptions of the model. They
are motivated by the sources cited above -- the transverse two-state
description of polarisation with transmitted fraction $\cos^{2}\theta$, the
single-mode oscillator quantisation with photon energy increment $\hbar\omega$,
and the field-operator expansion of free modes -- but motivation is not
deduction. No empirical claim, no measured value and no claim that any
laboratory field, polariser or detector is exactly described by the model is
made by this item.

## Status and scope

- **Adopted, not derived.** Neither the two-dimensional transverse
  polarisation space, nor the bosonic Fock assignment, nor the relations
  $\omega=c|k|$, $E=\hbar\omega$ and $p=\hbar k$ follow from P1-P7. They are the
  additional model content of this page, adopted only by the items that cite
  this postulate.
- **Relation to the massive model.** The quantum-radiation assignments are
  declared directly, without a limit construction from the massive free
  Schrödinger model. The counterexample
  [[cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit]] refutes strong
  action convergence on every Schwartz state and a finite frequency limit
  at each fixed nonzero wave number; it does not decide other operator
  topologies or exclude independently specified massless models. The
  polarisation internal space is a finite-state model, not a position
  representation of a photon.
- **Empirical qualifications.** The statistics choice, the transverse
  polarisation count, and the frequency-energy-momentum assignments are
  empirical model choices with uncertainties carried by their laboratory
  identifications. No experiment, count, efficiency or calibration is recorded
  or assumed by this postulate; comparisons with data belong to the
  preparation-and-apparatus discipline of P7.
