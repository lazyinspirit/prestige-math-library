---
id: def-nrqm-central-framework-central-potential-model
aliases: [nrqm-central-framework-central-potential-model]
kind: definition
domain: physics
title: "The declared central-potential model: state space, assigned energy operator, spherical reading and bound-state vocabulary"
status: draft
origin: session
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, pthm-nrqm-kinematics-spin-s-outcome-laws, lem-nrqm-central-free-operator-differential-identification, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-nrqm-coulomb-angular-radial-unitary-reduction, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared central-potential model for one spinless massive particle: its state space, its position and momentum assignments, its assigned energy operator for a real bounded measurable central potential, its declared spherical angular-radial reading and effective potential, and its stationary-state, bound-state and continuum-threshold vocabulary. The model is an additional assumption of the pair, not a derivation from the three-dimensional massive-particle model P5; the Coulomb and other unbounded or singular potentials, spin, relativistic and radiative corrections, finite nuclear size and external fields are excluded and are introduced only by their own later items. No identification of a concrete material system with the model, no empirical value and no measured energy are asserted."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.2, printed pages 104-110 (central potentials, the radial equation, the effective potential, the boundary condition at the origin and three-dimensional bound states) and Section 4.3, printed pages 111-114 (the hydrogen atom)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 182-189 (the gross-structure model of a hydrogen-like ion, the effective potential and the radial Hamiltonian)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1 printed pages 221-222 (Schr\u00f6dinger operators with singular potentials on H^2) and Section 10.2 printed pages 222-225 (spherical coordinates and separation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4,
the kinematics and massive-particle model postulate P5, the identical-particle
and spin postulate P6, and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]). Fix a mass parameter
$m>0$ and a spin label $s=0$, so that the framework's one-particle model
[[def-nrqm-kinematics-framework-massive-spin-s-model]] reads its state space as
$H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ with the pairing linear in the first
argument, its componentwise position family $Q_{1},Q_{2},Q_{3}$, its
componentwise momentum family $P_{1},P_{2},P_{3}$ and the action constant
$\hbar>0$; the spin-zero internal factor carries the trivial representation of
P6. Units are those of [[def-nrqm-framework-quantities-and-units]]: position is
read in metres, momentum in $\mathrm{kg\,m\,s^{-1}}$, energy and potential
energy in joules, and $\hbar$ in $\mathrm{J\,s}$. Assume the Axiom of
Countable Choice and the Axiom of Choice as the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) The declared central-potential model.** As an additional model
assumption of the pair, adopt the **central-potential model**. Its declared
state space is $H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ of clause (a), with the
position and momentum families $Q_{j}$, $P_{k}$ of that clause
([[def-nrqm-kinematics-framework-massive-spin-s-model]]). A **declared central
potential** of the model is a function $V:\mathbb R^{3}\to\mathbb R$ of the
form $V(x):=v(|x|)$ for $x\ne0$, where $v:(0,\infty)\to\mathbb R$ is real,
bounded and measurable and $\|V\|_{\infty}:=\|v\|_{\infty}=\sup_{r>0}|v(r)|$ is
finite; the assignment $V(0):=0$ is a declared convention that does not affect
the $L^{2}$ theory. The potential energy is read in joules. The model declares
the **Born position law** of the framework for a unit class $\psi$,
$$\mu^{G}_{\psi}(B):=\int_{B}|\psi(x)|^{2}\,dx\qquad(B\subseteq\mathbb R^{3}\ \text{Borel}),$$
the spin-zero reading of clause (b) of
[[pthm-nrqm-kinematics-spin-s-outcome-laws]]. The pair asserts no derivation
of a central force law from $H_{0}$ or from P5: the restriction to a declared
central potential is an assumption of the model, and an assignment of a
concrete material system to the model is an identification in the sense of
clause (iii) of P7 and carries the corresponding uncertainty.

**(c) The assigned energy operator.** Let $\mathcal F_{2}$ be the unitary
Plancherel transform of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b), $c:=2\pi^{2}\hbar^{2}/m$, and let
$$H_{0}^{\mathrm{free}}:=\mathcal F_{2}^{*}M_{c|\xi|^{2}}\mathcal F_{2},\qquad D(H_{0}^{\mathrm{free}}):=\bigl\{f\in H_{0}:|\xi|^{2}\mathcal F_{2}f\in H_{0}\bigr\}$$
be the free operator of that clause with $d=3$ and $b=0$. With $M_{V}$ the
bounded multiplication operator of clause (a) of the same theorem, the
**assigned energy operator** of the model with central potential $V$ is
$$H_{V}:=H_{0}^{\mathrm{free}}+M_{V},\qquad D(H_{V}):=D(H_{0}^{\mathrm{free}}).$$
The declared energy unit is the joule. By clause (c) of the cited theorem
$H_{V}$ is self-adjoint on $D(H_{V})$, bounded below by $-\|V\|_{\infty}$; by
[[lem-nrqm-central-free-operator-differential-identification]] the domain is
the Sobolev space $W^{2,2}(\mathbb R^{3};\mathbb C)$ and
$$H_{V}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f+Vf\qquad(f\in D(H_{V})),$$
$\Delta_{w}=D_{1}^{2}+D_{2}^{2}+D_{3}^{2}$ the weak Laplacian of that lemma, so
that on any open set on which $V$ is of class $C^{2}$ the model's
time-independent equation is the ordinary differential equation
$-\frac{\hbar^{2}}{2m}\Delta\psi+V\psi=E\psi$ for a $C^{2}$ representative. The
model adopts $(H_{V},\mathrm J)$ as its declared energy observable; its
self-adjointness is the cited theorem's, and no further spectral property is
presupposed here.

**(d) The declared spherical reading.** Let $U$ be the unitary of
[[thm-nrqm-coulomb-angular-radial-unitary-reduction]] from
$H_{0}$ onto $K=\bigoplus_{(l,m)}L^{2}((0,\infty),dr;\mathbb C)$, written
$U\psi=(u_{lm})_{l\ge0,-l\le m\le l}$, and let $(Y_{lm})$ be the complete
orthonormal family of that theorem. As an additional reading of the model, the
pair declares the **spherical sector** $(l,m)$ and the **effective potential**
$$v^{\mathrm{eff}}_{l}(r):=v(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}\qquad(r>0),$$
whose second summand is called the **angular-momentum barrier**; both
summands, and $v^{\mathrm{eff}}_{l}$, are read in joules. The model's
**declared radial equation** in the sector $(l,m)$ is the eigenvalue equation
for the one-dimensional expression
$$u\longmapsto-\frac{\hbar^{2}}{2m}u''+\Bigl(v(r)+\frac{\hbar^{2}l(l+1)}{2mr^{2}}\Bigr)u,\qquad u:(0,\infty)\to\mathbb C,$$
restricted to declared admissible classes (for instance $u\in
C_{c}^{\infty}((0,\infty))$). The pair does not presuppose that the assigned
energy operator of clause (c) literally reduces to this expression; the
consistency of the two readings on smooth states is the content of the
spherical-reduction theorem of this page, which is proved from the cited
mathematics. The angular-momentum quantum numbers $l$ and $m$
appearing in the reading are labels of the orthonormal family $(Y_{lm})$; the
identification of $l$ with a total angular momentum of a material system is a
separate assignment of the framework's angular-momentum items and is not made
here.

**(e) Stationary and bound-state vocabulary.** A **stationary vector** of the
model with potential $V$ and **energy** $E\in\mathbb R$ is a nonzero class
$\psi\in D(H_{V})$ with $H_{V}\psi=E\psi$; the pair $(\psi,E)$ is an
**eigenpair** of the model. A **bound state** of the model is a stationary
vector with energy $E<0$ whose representative is normalised, $\|\psi\|=1$; its
eigenvalue is its **binding energy**, read in joules, and the value $0$ is
called the **continuum threshold** of the model. The model reads the energy
outcome law of the pure preparation of a unit eigenvector with eigenvalue $E$
as the point mass $\delta_{E}$, the reading of clause (c) of
[[def-nrqm-observables-framework-observable-and-outcome-law]], and the
position density of that preparation as $|\psi|^{2}$ by clause (b). These are
declarations of the model under P2; they construct no sample, detector or
measured value, and they assert no stability, decay or formation claim.

**(f) Status and scope.** Clauses (a)-(e) fix the data of the pair: a declared
state space, position and momentum assignments, an assigned energy operator
for a real bounded measurable central potential, a declared spherical reading
with its effective potential and radial equation, and a stationary-state and
bound-state vocabulary. They introduce no assumption beyond P1, P2, P4, P5,
P6, P7 and the cited mathematics; in particular the central form of the
potential, the model's use of the full three-dimensional space as its state
space and the identification of the spherical sectors with angular-momentum
labels are declarations of the pair. The model excludes from its scope, until
their own items introduce them: the Coulomb potential $\propto-1/r$ and other
unbounded or singular potentials; spin and magnetic couplings; relativistic
corrections; finite nuclear size; the radiation extension, spontaneous
emission and radiation reaction; external electromagnetic fields; and any
many-body or shielding modification of a central potential. No numerical value
of $m$, $\hbar$ or of any potential is fixed here, and no empirical result is
asserted.
