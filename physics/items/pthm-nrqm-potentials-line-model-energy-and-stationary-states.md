---
id: pthm-nrqm-potentials-line-model-energy-and-stationary-states
aliases: [ nrqm-potentials-line-model-energy-and-stationary-states ]
kind: physics-theorem
domain: physics
title: "The line model's energy observable, flow and stationary states"
status: published
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-potentials-one-dimensional-line-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-potentials-free-operator-differential-identification,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-potentials-free-operator-differential-identification: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The line model of the pair for a spinless massive particle with
  a real bounded measurable potential: the fact that its declared energy
  operator is an assigned sharp observable, generates the model's unitary flow,
  and that its stationary preparations are exactly the eigenrays with a
  point-mass energy law. The statement is conditional on P1, P2, P4, P5, the
  declared effective one-dimensional model and the cited mathematics. It asserts
  no measured energy, no apparatus, no discrete-spectrum claim for a general
  bounded potential, no completeness of eigenfunctions and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 2.1 and
        3.2, printed pages 20-30 and 66-75 (PDF pages 23-33 and 69-78): the
        time-independent Schroedinger equation, eigenfunctions and their
        energies"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1 printed pages 55-58 (PDF pages 67-70): the Schroedinger
        operator as a self-adjoint operator and the domain-qualified equation;
        Section 5.1 printed pages 123-126 (PDF pages 135-138): Stone's theorem
        and the time evolution"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), all
read through the declared effective one-dimensional line model
[[def-nrqm-potentials-one-dimensional-line-model]] with mass parameter $m>0$
and spin label $s=0$. Assume the Axiom of Countable Choice and the Axiom of
Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $V:\mathbb
R\to\mathbb R$ be real, bounded and measurable, let $\|V\|_\infty=\sup|V|$,
and let $H_{V}$ be the assigned energy operator of clause (c) of the model,
with flow $U(t):=\exp(-itH_{V}/\hbar)$ and evolved preparations
$\rho(t):=U(t)\rho(0)U(t)^{*}$ as in
[[def-nrqm-autonomous-dynamics-framework-evolution]]. Then:

(a) $(H_{V},\mathrm J)$ is an assigned sharp observable of the model in the
sense of clause (a) of
[[def-nrqm-observables-framework-observable-and-outcome-law]]: $H_{V}$ is
densely defined and self-adjoint on
$D(H_{V})=W^{2,2}(\mathbb R;\mathbb C)$, bounded below by $-\|V\|_\infty$, and
$H_{V}f=-\frac{\hbar^{2}}{2m}D^{2}f+Vf$ for every $f\in D(H_{V})$.

(b) *Flow.* The family $t\mapsto U(t)$ is the model's strongly continuous
one-parameter unitary group of the assigned energy observable; the
Schroedinger equation $i\hbar\frac{d}{dt}\psi(t)=H_{V}\psi(t)$ holds in the
norm-differentiable sense exactly for initial vectors $\psi(0)\in D(H_{V})$,
and for other vectors the evolution is continuous but the equation is not
asserted; density preparations evolve as $\rho(t)=U(t)\rho(0)U(t)^{*}$ with
$\rho(t)$ a density operator for every $t$.

(c) *Stationary states.* For $\psi\in H_{\mathrm{lin}}$, $\psi\ne0$, the pure
preparation $[\psi]$ is stationary, $[\psi(t)]=[\psi(0)]$ for all $t$, if and
only if $\psi$ is an eigenvector of $H_{V}$; in that case, with eigenvalue
$E$, one has $\psi(t)=e^{-itE/\hbar}\psi(0)$, the energy outcome law is
time-independent, and if $\|\psi\|=1$ the law assigns probability one to the
singleton $\{E\}$, so the energy mean exists and equals $E$, with second
moment $E^{2}$. Moreover every bounded assigned sharp observable compatible
with the energy has a time-independent outcome law in every preparation.

(d) *Position reading.* In a unit pure preparation $\psi$ the declared
position assignment of the model has outcome law
$\mu^{Q}_{\psi}(B)=\int_{B}|\psi|^{2}dx$ for every Borel $B\subseteq\mathbb R$;
and if $\psi$ is a unit eigenvector with eigenvalue $E$, the position density
$|\psi|^{2}$ and the energy point mass at $E$ coexist as readings of the same
preparation, of the action of the declared observables, without any joint
measurement claim.

(e) *Scope.* The statement is conditional on P1, P2, P4, P5 and the declared
line model; it asserts no discrete spectrum or eigenbasis for a general
bounded measurable $V$, no completeness or scattering statement, no
identification of $H_{V}$ with any laboratory Hamiltonian beyond the tested
identification allowed by P7, and no empirical result.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and the choice hypotheses; the line model of [[def-nrqm-potentials-one-dimensional-line-model]] with $m>0$; a real bounded measurable $V$; the assigned energy operator $H_{V}$, its domain $D(H_{V})$, the flow $U(t)$ and evolved states $\rho(t)$.

[F1] **Self-adjointness of the free plus bounded-potential operator.** With $d=1$, $c=2\pi^{2}\hbar^{2}/m$ and $b=0$, the operator $H_{0}^{\mathrm{lin}}=\mathcal F_{2}^{*}M_{c|\xi|^{2}}\mathcal F_{2}$ of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (b) has domain $W^{2,2}(\mathbb R;\mathbb C)$; for real bounded measurable $V$ the operator $H_{0}^{\mathrm{lin}}+M_{V}$ on that domain is self-adjoint, bounded below by $-\|V\|_{\infty}$, and the assignment $t\mapsto e^{it(H_{0}^{\mathrm{lin}}+M_{V})}$ is a strongly continuous one-parameter unitary group whose generator is $i(H_{0}^{\mathrm{lin}}+M_{V})$, the difference quotients converging exactly on the domain (clauses (b), (c) of that theorem).

[F2] **Differential identification.** $D(H_{0}^{\mathrm{lin}})=W^{2,2}(\mathbb R;\mathbb C)$ and $H_{0}^{\mathrm{lin}}f=-\frac{\hbar^{2}}{2m}D^{2}f$ for all $f\in D(H_{0}^{\mathrm{lin}})$; hence $H_{V}f=-\frac{\hbar^{2}}{2m}D^{2}f+Vf$ on $D(H_{V})$ ([[lem-nrqm-potentials-free-operator-differential-identification]] clauses (a), (b)).

[F3] **Assigned observables and outcome laws.** An assigned sharp observable is a pair $(A,u_{A})$ with $A$ densely defined and self-adjoint on the model state space and $u_{A}$ a declared unit for its spectral coordinate; its outcome law in a preparation $\rho$ is $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, with pure reading $\|E_{A}(B)\psi\|^{2}$, a probability measure on the Borel sets ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b)).

[F4] **Assigned energy observable and flow.** An assigned energy observable is an assigned sharp observable $(H_{\mathrm{op}},u_{H})$ whose unit is an energy unit; its flow is $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$, a strongly continuous one-parameter unitary group, the Schroedinger equation holds in the norm-differentiable sense exactly on $D(H_{\mathrm{op}})$, and $\rho(t)=U(t)\rho(0)U(t)^{*}$ is a density operator ([[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a)-(c), reading clause (i)-(iii) of P4).

[F5] **Stationary states and conserved laws.** For an assigned energy observable $H_{\mathrm{op}}$ with flow $U(t)$: the energy law of every preparation is time-independent and, if $\psi(0)\ne0$ and $\psi(0)\in D(H_{\mathrm{op}})$, the energy mean and second moment of its pure-ray probability law are finite and time-independent with time-zero values $\langle H_{\mathrm{op}}\psi(0),\psi(0)\rangle/\|\psi(0)\|^2$ and $\|H_{\mathrm{op}}\psi(0)\|^{2}/\|\psi(0)\|^2$, respectively. Equivalently these are the raw moment formulas evaluated on the unit representative $\psi(0)/\|\psi(0)\|$; every bounded assigned sharp observable compatible with the energy has a time-independent law; and a nonzero $\psi$ gives a stationary ray $[\psi]$ exactly when $\psi$ is an eigenvector of $H_{\mathrm{op}}$, in which case $\psi(t)=e^{-it\lambda/\hbar}\psi(0)$ ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clauses (a)-(c)).

[F6] **Eigenvalue atoms of the outcome law.** If $u$ is a unit eigenvector of a self-adjoint $A$ with eigenvalue $\lambda$, then the pure outcome law assigns $\mu^{A}_{T_{u,u}}(\{\lambda\})=1$ to the singleton ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (b)).

## Proof

**Proof technique:** direct; instantiate the composite operator theorem for the declared line model, transfer the flow and stationary-state statements from the autonomous-dynamics suppliers to the declared assigned energy observable, and read off the energy atom and the declared position law.

**Given:** The data and hypotheses of the statement and [F1]-[F6].

1.1 [The energy operator is an assigned observable] The operator $H_{V}=H_{0}^{\mathrm{lin}}+M_{V}$ is exactly the operator of [F1] for the bounded measurable $V$, so it is self-adjoint on $D(H_{V})=W^{2,2}(\mathbb R;\mathbb C)$, bounded below by $-\|V\|_{\infty}$, and densely defined; [F2] identifies its action as $-\frac{\hbar^{2}}{2m}D^{2}+V$. The declared energy unit joule is a unit for the real spectral coordinate of $H_{V}$ under the conventions of [[def-nrqm-framework-quantities-and-units]], so the pair $(H_{V},\mathrm J)$ meets the definition [F3] of an assigned sharp observable; this is (a). [given, F1, F2, F3, algebra]

2.1 [Flow and Schroedinger equation] By clause (c) of the model, $H_{V}$ is adopted as the energy observable of the model's isolated system in the sense of clause (i) of P4; [F4] applied to the assigned energy observable $(H_{V},\mathrm J)$ therefore gives that $U(t)=\exp(-itH_{V}/\hbar)$ is a strongly continuous one-parameter unitary group, that the Schroedinger equation holds in the norm-differentiable sense exactly for initial vectors in $D(H_{V})$, and that $\rho(t)=U(t)\rho(0)U(t)^{*}$ is a density operator for every $t$; this is (b). [step 1.1, F4, algebra]

3.1 [Stationary rays and the energy atom] By [F5], $[\psi]$ is stationary if and only if $\psi$ is an eigenvector of $H_{V}$, and then $\psi(t)=e^{-itE/\hbar}\psi(0)$; the energy law is time-independent, and if $\psi(0)\in D(H_{V})$ the mean and second moment are finite and time-independent with values $\langle H_{V}\psi,\psi\rangle=E\|\psi\|^{2}=E$ and $\|H_{V}\psi\|^{2}=E^{2}\|\psi\|^{2}=E^{2}$ for a unit eigenvector. By [F6] the time-independent law of the unit eigenvector assigns probability one to $\{E\}$. Clauses (b) of [F5] give the conservation statement for bounded compatible observables, completing (c). [step 2.1, F5, F6, algebra]

4.1 [Position reading] Clause (b) of the model declares the outcome law of the position assignment $Q$ in a unit class $\psi$ to be $\mu^{Q}_{\psi}(B)=\int_{B}|\psi|^{2}dx$; this reading is part of the model and is not derived here. For a unit eigenvector both readings are those of the same preparation through the two declared observables $(H_{V},\mathrm J)$ and $Q$, and no joint law, joint measurement or compatibility of $Q$ and $H_{V}$ is asserted; this is (d), and the exclusions of (e) are exactly those recorded in clause (f) of the model. [step 1.1, given] ∎

## Remarks

- **What the theorem does not say.** For a general bounded measurable
  potential only self-adjointness, the flow and the stationary-state
  equivalence are claimed. Discreteness of the spectrum, completeness of
  eigenfunctions and the explicit negative spectrum are proved in the interval
  and finite-well items of this page under their own hypotheses, not here.
- **Units.** The lower bound $-\|V\|_{\infty}$ and the eigenvalues $E$ are read
  in joules when $V$ and $\hbar$ are read in the units of
  [[def-nrqm-framework-quantities-and-units]]; $D^{2}$ acts on the coordinate
  $x$ in metres, so $-\frac{\hbar^{2}}{2m}D^{2}$ has the dimension of energy.
