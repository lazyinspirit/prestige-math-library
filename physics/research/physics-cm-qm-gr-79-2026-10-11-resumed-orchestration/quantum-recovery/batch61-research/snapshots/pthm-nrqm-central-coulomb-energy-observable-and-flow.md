---
id: pthm-nrqm-central-coulomb-energy-observable-and-flow
aliases: [nrqm-central-coulomb-energy-observable-and-flow]
kind: physics-theorem
domain: physics
title: "The one-centre Coulomb model: energy observable, flow, stationary states and spectral support"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, def-nrqm-central-framework-central-potential-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation, pthm-nrqm-kinematics-spin-s-outcome-laws, def-nrqm-state-geometry-framework-state-space, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-essential-spectrum, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, lem-nrqm-central-free-operator-differential-identification, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  def-nrqm-central-framework-central-potential-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the declared one-centre Coulomb model and the framework postulates P1, P2, P4 and P5: the model's assigned energy is a sharp observable on H^2 with essential spectrum [0,infinity) and negative spectrum consisting only of isolated finite-multiplicity discrete eigenvalues; its flow is the strongly continuous unitary group of P4 with the norm-differentiable Schroedinger equation exactly on the domain; its stationary preparations are exactly the eigenrays with point-mass energy law; and position and energy readings coexist. The item asserts no measured energy, no apparatus, no eigenvalue list or degeneracy, no transition or radiation statement and no empirical result; it does not identify the coupling, mass or charge with any measured constants."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1, printed pages 221-222 (self-adjointness of -Delta - gamma/|x| on H^2 and sigma_ess = [0,infinity)), and Section 5.1, printed pages 123-125 (Stone's theorem and the time evolution)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.2.3, printed pages 110-111 (self-adjointness of the radial Coulomb Hamiltonian and the admissible states) and Section 4.3, printed pages 111-112 (the Coulomb problem and its negative-energy bound states)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 182-185 (the stationary states of the hydrogen-like model and their energies)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5, read through the declared one-centre
Coulomb model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with
parameters $\hbar>0$, $m>0$ and coupling $\kappa>0$, its assigned energy
operator $H_{\kappa}$ on $D(H_{\kappa})=H^{2}(\mathbb R^{3};\mathbb C)$, the
assigned sharp-observable reading
[[def-nrqm-observables-framework-observable-and-outcome-law]], the flow and
preparation reading [[def-nrqm-autonomous-dynamics-framework-evolution]], and
the spin-zero position law
[[pthm-nrqm-kinematics-spin-s-outcome-laws]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) $(H_{\kappa},\mathrm J)$ is an assigned sharp observable of the model:
$H_{\kappa}$ is densely defined, self-adjoint and bounded below on
$D(H_{\kappa})=H^{2}(\mathbb R^{3};\mathbb C)$, acts by
$H_{\kappa}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f-\kappa f/|\cdot|$, and
$$\sigma_{\mathrm{ess}}(H_{\kappa})=[0,+\infty);$$
every point of $\sigma(H_{\kappa})\cap(-\infty,0)$ is an eigenvalue of finite
multiplicity, isolated in $\mathbb R$, and the set of negative eigenvalues is
at most countable;

(b) *Flow.* The family $U(t):=\exp(-itH_{\kappa}/\hbar)$ is the model's
strongly continuous one-parameter unitary group; the Schroedinger equation
$i\hbar\frac{d}{dt}\psi(t)=H_{\kappa}\psi(t)$ holds in the norm-differentiable
sense exactly for initial vectors $\psi(0)\in D(H_{\kappa})$, and for other
vectors the evolution is continuous but the equation is not asserted; density
preparations evolve by $\rho(t)=U(t)\rho(0)U(t)^{*}$ with $\rho(t)$ a density
operator for every $t$;

(c) *Stationary states.* For $\psi\in H_{0}$, $\psi\ne0$, the pure preparation
$[\psi]$ is stationary, $[\psi(t)]=[\psi(0)]$ for all $t$, if and only if
$\psi$ is an eigenvector of $H_{\kappa}$; in that case, with eigenvalue $E$,
one has $\psi(t)=e^{-itE/\hbar}\psi(0)$, the energy outcome law is the point
mass $\delta_{E}$ for a normalised $\psi$, and every bounded assigned sharp
observable compatible with the energy has a time-independent outcome law in
this preparation;

(d) *Position reading.* In a unit vector $\psi$ the position outcome law is
$\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$; if $\psi$ is in addition a unit
eigenvector of $H_{\kappa}$ with eigenvalue $E$, then the position density
$|\psi|^{2}$ and the energy point mass at $E$ are readings of the same
preparation through the declared observables, with no joint-measurement claim;

(e) *Spectral support and exact values.* For every preparation $\rho$ one has
$\mu^{H_{\kappa}}_{\rho}(\sigma(H_{\kappa}))=1$, and an exact energy value
$\lambda$ has $\mu^{H_{\kappa}}_{\rho}(\{\lambda\})=0$ unless $\lambda$ is an
eigenvalue, in which case the probability is the total weight of the
eigenspace; in particular no exact value in $\mathbb R\setminus\sigma(H_{\kappa})$
is admissible, and the item asserts neither that $0$ is an eigenvalue nor any
statement about eigenvalues in the positive half-line, which are excluded by
the following radial items;

(f) *Scope.* The statement is conditional on P1, P2, P4, P5 and the declared
Coulomb model and the cited mathematics. It asserts no eigenvalue list, no
degeneracy, no transition, radiation or line-intensity statement, no
identification of $\kappa$, $m$ or $\hbar$ with measured constants, and no
empirical result.

## Facts & Assumptions

**Given:** The declared one-centre Coulomb model with parameters $\hbar,m,\kappa>0$ and assigned energy operator $H_{\kappa}$; the framework readings of P1, P2, P4 and P5; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **The model's operator.** $H_{\kappa}=(\hbar^{2}/2m)C_{\gamma}$ with $\gamma=2m\kappa/\hbar^{2}$ and $C_{\gamma}=-\Delta-\gamma/|\cdot|$ on $D(C_{\gamma})=H^{2}(\mathbb R^{3};\mathbb C)$; $H_{\kappa}$ is self-adjoint on that domain and acts by $H_{\kappa}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f-\kappa f/|\cdot|$; the domain $H^{2}$ is a dense subspace of $L^{2}(\mathbb R^{3};\mathbb C)$ ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b), [[lem-nrqm-central-free-operator-differential-identification]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] **Spectrum of the unscaled operator.** $C_{\gamma}$ is bounded below, $\sigma_{\mathrm{ess}}(C_{\gamma})=[0,+\infty)$, every point of $\sigma(C_{\gamma})\cap(-\infty,0)$ is an eigenvalue of $C_{\gamma}$ of finite multiplicity isolated in $\mathbb R$, and the set of such eigenvalues is at most countable ([[thm-nrqm-coulomb-essential-spectrum]] clauses (a), (b), [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] clause (c)).

[F3] **Positive scaling of self-adjoint operators.** For $c_{0}>0$ and a densely defined self-adjoint $A$, the operator $c_{0}A$ with domain $D(A)$ is self-adjoint, $\rho(c_{0}A)=c_{0}\rho(A)$ and $\sigma(c_{0}A)=c_{0}\sigma(A)$; for a general $z\in\mathbb C$ one has $z\in\rho(c_{0}A)$ if and only if $z/c_{0}\in\rho(A)$ ([[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a), (b)).

[F4] **Assigned observables and outcome laws.** For an assigned sharp observable $(A,u_{A})$, the spectral measure and outcome law are $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, the outcome law of a unit pure vector is $\|E_{A}(B)\psi\|^{2}$, the outcomes lie in $\sigma(A)$, and the reading of an exact value is the singleton probability $\mu^{A}_{\rho}(\{\lambda\})$, which vanishes unless $\lambda$ is an eigenvalue ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a)-(e), [[def-nrqm-state-geometry-framework-state-space]]).

[F5] **Flow and stationarity.** The flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ of an assigned energy observable is a strongly continuous one-parameter unitary group whose generator is $-iH_{\mathrm{op}}$; the norm-differentiable Schroedinger equation holds exactly on $D(H_{\mathrm{op}})$; a nonzero $\psi$ gives a stationary pure preparation exactly when it is an eigenvector, and then every bounded assigned sharp observable has a time-independent outcome law, in particular the energy law is time-independent ([[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (b), (c), (e), [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clauses (a), (c)).

[F6] **Position law.** In the spin-zero model the Born position law of a unit $\psi$ is $\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$ for Borel $B\subseteq\mathbb R^{3}$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)).

## Proof

**Proof technique:** direct; scale the spectral data of the unscaled Coulomb operator, then read the framework's observable, flow, stationarity and position vocabulary in the model.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Energy observable and spectrum] By [F1], $H_{\kappa}$ is self-adjoint on the dense domain $H^{2}(\mathbb R^{3};\mathbb C)$; with the declared unit joule the pair $(H_{\kappa},\mathrm J)$ is an assigned sharp observable in the sense of [F4]. Write $c_{0}:=\hbar^{2}/2m>0$, so that $H_{\kappa}=c_{0}C_{\gamma}$. By [F3] applied to $A=C_{\gamma}$, $c_{0}A$ is self-adjoint and $\sigma(c_{0}A)=c_{0}\sigma(A)$, whence $\sigma_{\mathrm{ess}}(H_{\kappa})=c_{0}\sigma_{\mathrm{ess}}(C_{\gamma})=c_{0}[0,+\infty)=[0,+\infty)$. A point $\lambda\in\sigma(H_{\kappa})\cap(-\infty,0)$ has $\lambda/c_{0}\in\sigma(C_{\gamma})\cap(-\infty,0)$, so by [F2] it is an eigenvalue of $C_{\gamma}$ of finite multiplicity isolated in $\mathbb R$; by clause (d) of [F3] the eigenspaces correspond exactly under the scaling, so $\lambda$ is an eigenvalue of $H_{\kappa}$ of the same finite multiplicity, isolated because $c_{0}$ is a homeomorphism of $\mathbb R$, and the set of such $\lambda$ is at most countable as the image of an at-most-countable set. Boundedness below is [F2] together with the scaling, and the action formula is [F1]. This proves (a). [given, F1, F2, F3, F4, algebra]

2.1 [Flow] By (a) and [F5] the family $U(t)=\exp(-itH_{\kappa}/\hbar)$ is a strongly continuous one-parameter unitary group; the Schroedinger equation holds in the norm-differentiable sense exactly for $\psi(0)\in D(H_{\kappa})$; density preparations evolve as $\rho(t)=U(t)\rho(0)U(t)^{*}$. This is (b). [step 1.1, F5]

2.2 [Stationary states and readings] Let $\psi\ne0$. By [F5], $[\psi]$ is stationary exactly when $\psi\in D(H_{\kappa})$ and $H_{\kappa}\psi=E\psi$ for some $E\in\mathbb R$; then $\psi(t)=e^{-itE/\hbar}\psi(0)$ and every bounded assigned sharp observable has a time-independent outcome law. For a normalised such $\psi$ the energy law is given by [F4] as $\mu^{H_{\kappa}}_{\psi}(B)=\|E_{H_{\kappa}}(B)\psi\|^{2}$, which equals $1$ for $B\ni E$ and $0$ otherwise, i.e. the point mass $\delta_{E}$. The position law is [F6], and the two readings of the same preparation are clause (d) of the statement. [step 1.1, F4, F5, F6]

2.3 [Spectral support and exact values] By clause (d) of [F4], $\mu^{H_{\kappa}}_{\rho}(\sigma(H_{\kappa}))=1$ for every preparation; by clause (c) of [F4] an exact value $\lambda$ has probability equal to the total weight of the eigenspace at $\lambda$ when $\lambda$ is an eigenvalue, and zero otherwise. Claim (a) identifies the negative eigenvalues as the only spectral points asserted to be eigenvalues on this page, so the item makes no eigenvalue claim at $0$ or on the positive half-line; this is clause (e) with its recorded exclusions. [step 1.1, F4]

3.1 [Assembly and scope] Steps 1.1 and 2.1 give (a) and (b), steps 2.2 and 2.3 give (c)-(e); only the declared model, the framework postulates P1, P2, P4, P5 and the cited mathematics were used, so the statement is conditional as recorded in (f), and no empirical identification or measured value is asserted. [step 1.1, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The continuum is present but unstructured here.** The statement records
  only $\sigma_{\mathrm{ess}}(H_{\kappa})=[0,\infty)$ and the discreteness of
  the negative part; the exhaustion of the negative spectrum by the Coulomb
  levels and the absence of positive eigenvalues require the radial theory of
  the following items, and no scattering interpretation of the continuous
  spectrum is made on this page.
- **Threshold.** The value $0$ is called the continuum threshold of the model;
  the statement does not assert whether $0$ is an eigenvalue, and the following
  radial items show that it is not.
