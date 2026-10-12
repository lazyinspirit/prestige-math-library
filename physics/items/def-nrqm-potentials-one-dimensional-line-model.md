---
id: def-nrqm-potentials-one-dimensional-line-model
aliases: [ nrqm-potentials-one-dimensional-line-model ]
kind: definition
domain: physics
title: "The declared one-dimensional line model: state space, Hamiltonian, bound
  states and generalized stationary solutions"
status: draft
origin: session
dependency_level: 10
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    lem-nrqm-potentials-free-operator-differential-identification,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-weak-derivative-of-a-locally-integrable-function,
    def-schwartz-space-and-its-seminorms,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-potentials-free-operator-differential-identification: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared effective one-dimensional model for a
  spinless massive particle: its state space, position and momentum assignments,
  its assigned energy operator for a real bounded measurable potential, its
  bound-state and stationary vocabulary, and its declared generalized stationary
  solutions used for the scattering reading. The model is an additional
  assumption of the pair, not a derivation from the three-dimensional
  massive-particle model P5, and no identification of a concrete apparatus or
  material system with the model is asserted; such an identification would be a
  tested identification with uncertainty in the sense of P7. No experiment and
  no empirical value appear."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Chapter 2,
        printed pages 19-27 (PDF pages 22-30): a quantum particle in one
        dimension, the free particle, the infinite potential well and the
        Gaussian wavepacket; Sections 2.3-2.4, printed pages 41-63 (PDF pages
        44-66): bound states in one-dimensional potentials and scattering"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 5,
        printed pages 75-103 (PDF pages 83-111): motion in step potentials,
        square potential wells, scattering of free particles and tunnelling
        through a potential barrier"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 9.1 printed pages 181-187 (PDF pages 193-199): one-dimensional
        Sturm-Liouville operators on the line and on intervals"
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
energy in joules, and $\hbar$ in $\mathrm{J\,s}$. Assume the Axiom of Countable
Choice and the Axiom of Choice as the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) The declared effective one-dimensional model.** As an additional model
assumption of the pair, adopt the **line model**. Its declared state space is
$$H_{\mathrm{lin}}:=L^{2}(\mathbb R;\mathbb C) =\Bigl\{f:\mathbb R\to\mathbb C\ \text{measurable}: \int_{\mathbb R}|f(x)|^{2}\,dx<\infty\Bigr\}\Big/\!\sim,$$
the complex Hilbert space of almost-everywhere classes with the pairing
$\langle f,g\rangle=\int_{\mathbb R}f\overline g\,dx$ linear in the first
argument ([[def-l-p-space-as-a-quotient-by-null-functions]]). Its declared
**position assignment** is the multiplication assignment $Q$, defined on the
classes with $xf\in H_{\mathrm{lin}}$, with the declared outcome law
$$\mu^{Q}_{\psi}(B):=\int_{B}|\psi(x)|^{2}\,dx\qquad(B\subseteq\mathbb R \text{ Borel})$$
for a unit class $\psi$, the one-dimensional reading of the framework's Born
position law of [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (a)
adopted here as part of the model; its declared **momentum assignment** is
$P:=-i\hbar D$ on the classes whose weak derivative $D\psi$ lies in
$H_{\mathrm{lin}}$ ([[def-weak-derivative-of-a-locally-integrable-function]]).
The pair asserts no derivation of $H_{\mathrm{lin}}$, $Q$ or $P$ from the
three-dimensional model $H_{0}$ of P5: the reduction to one spatial dimension,
for instance by an idealized strong transverse confinement or by a declared
one-dimensional sector, is an assumption of the model. An assignment of a
concrete material system to the line model is an identification in the sense
of clause (iii) of P7 and carries the corresponding uncertainty.

**(c) The assigned energy operator.** Let $V:\mathbb R\to\mathbb R$ be real,
bounded and measurable; write $\|V\|_{\infty}:=\sup_{x\in\mathbb R}|V(x)|$.
The **assigned energy operator** of the line model with potential $V$ is
$$H_{V}:=H_{0}^{\mathrm{lin}}+M_{V},\qquad H_{0}^{\mathrm{lin}}:=\mathcal F_{2}^{*}M_{c|\xi|^{2}}\mathcal F_{2},\qquad c:=\frac{2\pi^{2}\hbar^{2}}{m},$$
with $M_{V}$ the multiplication operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (a), on the common domain
$D(H_{V}):=D(H_{0}^{\mathrm{lin}})
=\{f\in H_{\mathrm{lin}}:|\xi|^{2}\mathcal F_{2}f\in H_{\mathrm{lin}}\}$,
where $\mathcal F_{2}$ is the unitary Plancherel transform of that theorem
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clauses (a)-(c)). The declared energy unit is the joule. By
[[lem-nrqm-potentials-free-operator-differential-identification]] the domain
$D(H_{V})$ is the Sobolev space $W^{2,2}(\mathbb R;\mathbb C)$ and
$$H_{V}f=-\frac{\hbar^{2}}{2m}\,D^{2}f+Vf\qquad(f\in D(H_{V})),$$
$D^{2}$ the second weak derivative, so the model's time-independent equation
inside any open interval on which $V$ is (say) constant is the ordinary
differential equation $-\frac{\hbar^{2}}{2m}\psi''+V\psi=E\psi$. The model
adopts $(H_{V},\mathrm J)$ as its assigned energy observable in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a); its
self-adjointness is established by the line-model energy theorem of this page
and is not presupposed here. A declared potential is **compactly supported** when $V$
vanishes almost everywhere outside some bounded interval.

**(d) Bound states and stationary vocabulary.** A **stationary solution** of
the model with potential $V$ and energy $E\in\mathbb R$ is a nonzero class
$\psi\in D(H_{V})$ with $H_{V}\psi=E\psi$; the pair $(\psi,E)$ is an
**eigenpair** of the model. A **bound state** of the model is a stationary
solution with energy $E<0$ whose representative is normalized, $\|\psi\|=1$;
its eigenvalue $E$ is its **binding energy**, read in joules, and in this model
the value $0$ is called the **continuum threshold**. The model reads the
energy outcome law of the pure preparation of a unit eigenstate $\psi$ with
eigenvalue $E$ through clause (a) of
[[def-nrqm-observables-framework-observable-and-outcome-law]] as the point
mass $\delta_{E}$ at $E$, so that outcome in $\{E\}$ has probability one; and
the position density of the preparation is $|\psi|^{2}$ by clause (b). These
readings are declarations of the model under P2 and construct no sample,
detector or measured value.

**(e) Declared generalized stationary solutions.** Let
$-\infty=x_{0}<x_{1}<\dots<x_{n}=\infty$ be a finite partition of
$\mathbb R$, and let $\psi:\mathbb R\to\mathbb C$ be bounded and classically
$C^{1}$ on $\mathbb R$ with a continuous derivative, and twice continuously
differentiable on each open interval $(x_{j},x_{j+1})$ restricted to which
$V$ is continuous, satisfying
$-\frac{\hbar^{2}}{2m}\psi''(x)+V(x)\psi(x)=E\psi(x)$ there. Such a $\psi$ is
a **declared generalized stationary solution** of the model at energy $E$. It
is generally not an element of $H_{\mathrm{lin}}$ (a bounded oscillatory
solution has $|\psi|^{2}$ not integrable), so it is not a preparation of the
model and clause (d) does not apply to it; it is used only through the
declared flux quantities computed from it, and every such use states the
idealization. The pair's scattering reading assigns to $\psi$ the
**probability current** $j(x)=\frac{\hbar}{m}\operatorname{Im}\bigl(\overline{\psi(x)}\psi'(x)\bigr)$,
read in $\mathrm{s^{-1}}$ by clause (d)5 of
[[def-nrqm-framework-quantities-and-units]], and reads a ratio of currents at
infinity as a *transmitted or reflected fraction* of the incident current,
conditional on the declared solution and on the asymptotics displayed in each
statement; no such fraction is ascribed to a single particle and no count is
predicted.

**(f) Status and scope.** Clauses (a)-(e) fix the data of the pair: a declared
effective line model with a declared potential, energy operator, bound-state
vocabulary and generalized-solution vocabulary. They introduce no assumption
beyond P1, P2, P4, P5, P6, P7 and the cited mathematics; in particular the
line model, its state space and its position and momentum assignments are
declarations of the pair and are not consequences of the three-dimensional
model. No numerical value of $m$, $V$ or $\hbar$ and no measured quantity is
asserted.
