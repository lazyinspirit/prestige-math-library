---
id: cex-nrqm-observables-plane-wave-is-not-a-preparation
aliases: [ nrqm-observables-plane-wave-is-not-a-preparation ]
kind: counterexample
domain: physics
title: "The plane wave and the point-localized delta are not preparations of the
  model"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    ex-nrqm-observables-position-bin-probabilities,
    cor-trigonometric-parity-and-pythagorean-identity,
    def-countable-choice,
    def-axiom-of-choice,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    pthm-nrqm-observables-position-and-momentum-outcome-laws,
    thm-cauchy-schwarz-in-an-inner-product-space,
    thm-eulers-formula,
    thm-monotone-convergence-for-the-integral
  ]
dependency_roles:
  ex-nrqm-observables-position-bin-probabilities: operational-prerequisite
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-observables-position-and-momentum-outcome-laws: physical-result
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A refutation under P1, P2 and P5, with Countable Choice and the Axiom of
  Choice for the cited spectral suppliers, of the
  informal claim that a free plane wave, or the point-localized distribution
  symbol delta(x minus X), is a preparation of the massive-particle model with
  the idealized position density one: the plane wave is not an element of the
  state space and the exact-position symbol is not an element of the state space
  either, while the model's own exact-position statement is that the probability
  of an exact value is zero and finite bins carry the probability. The item
  refutes that specific informal claim; it asserts no empirical result and no
  claim about approximation schemes in which such objects are formally useful."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.2.1,
        printed pages 67-70 (plane-wave and position eigenstates are not
        normalizable; the continuous spectrum has no normalizable
        eigenfunction)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4
        \"Dirac's Bra and Ket Notation\", Section 3, printed pages 11-13
        (position states have infinite norm and are not allowed states; the
        position basis is an idealization)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9\
        d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
verification:
  precheck: pass
---

## Statement refuted

Adopt the state and composition postulate P1, the observable and probability postulate P2, and the massive-particle model postulate P5 of the framework ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), with Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]) for the cited spectral suppliers. Then: **every** bounded smooth function $\psi:\mathbb R^{3}\to\mathbb C$ that solves the free time-independent Schrödinger equation $-\frac{\hbar^{2}}{2m}\Delta\psi=E\psi$ pointwise determines a pure preparation of the model with position density $|\psi|^{2}$; in particular the plane wave $\psi_{k}(x)=e^{ik\cdot x}$ with $k\ne0$ is a preparation with constant position density $|\psi_{k}|^{2}=1$, and the point-localized object $\delta^{3}(x-X)$ is the preparation of a particle exactly at $X$.

**Point-localized symbol.** Here $\delta^3(x-X)$ denotes the evaluation functional $\delta_X:C_c(\mathbb R^3;\mathbb C)\to\mathbb C$, $\delta_X(\eta):=\eta(X)$, where $C_c$ is the space of continuous complex functions with compact support. An $L^2$ representation would be a class $f$ with $\int f(x)\eta(x)\,dx=\eta(X)$ for every such $\eta$; these integrals are defined by Cauchy–Schwarz because $\eta\in L^2$.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2 and P5 for a spinless particle with state space $H=L^{2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-state-and-composition]] clauses (i)-(iii), [[post-nrqm-framework-observable-and-probability]] clauses (i)-(iii), [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clauses (iii)-(iv)); the position operators $Q_{j}$ with their spectral facts ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[pthm-nrqm-observables-position-and-momentum-outcome-laws]]); a wave vector $k\in\mathbb R^{3}$, $k\ne0$; a point $X\in\mathbb R^{3}$; the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] **Preparations are rays of the state space.** A pure preparation of the model is a unit ray $[\psi]=\{z\psi:z\in\mathbb C\setminus\{0\}\}$ of a vector $\psi\in H$ with $\|\psi\|=1$; the zero vector is excluded, and a general preparation is a density operator on $H$. The model assigns no preparation to an object that is not an element of $H$ ([[post-nrqm-framework-state-and-composition]] clause (ii), [[def-nrqm-state-geometry-framework-state-space]] clauses (a)-(c)).

[F2] **The plane wave has constant modulus and infinite norm.** For every real $\theta$ one has $|e^{i\theta}|^{2}=\cos^{2}\theta+\sin^{2}\theta=1$, hence $|e^{ik\cdot x}|^{2}=1$ for every $x$; consequently for the truncations $\mathbf 1_{[-N,N]^{3}}$ one has $\int_{[-N,N]^{3}}|\psi_{k}|^{2}dx=(2N)^{3}$, and monotone convergence gives $\int_{\mathbb R^{3}}|\psi_{k}|^{2}dx=+\infty$, so $\psi_{k}$ is not an element of $L^{2}(\mathbb R^{3};\mathbb C)$ ([[thm-eulers-formula]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-monotone-convergence-for-the-integral]],).

[F3] **The position observable has no eigenvalues and no atoms.** The spectrum of $Q_{j}$ is all of $\mathbb R$, its outcome law in every preparation is atomless, and by the atom/eigenvalue correspondence it has no eigenvectors: there is no nonzero $x\in H$ with $Q_{j}x=\lambda x$ for any $\lambda$ ([[pthm-nrqm-observables-position-and-momentum-outcome-laws]] clauses (a) and (d), [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a) and (b)).

[F4] **Outcome-law reading.** The model reads an exact position value $\lambda$ through the singleton $\{\lambda\}$ and a finite-resolution outcome through a Borel bin $B$, with probabilities given by the spectral law of [[def-nrqm-observables-framework-observable-and-outcome-law]]; a vector outside $H$ carries no such law.

[F5] **Cauchy–Schwarz.** In the $L^2$ inner product, $|\int f\overline h|\le\|f\|_2\|h\|_2$ for $f,h\in L^2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]); the integral pairing convention is that of the position/momentum operator definition.

## Counterexample

**Proof technique:** direct; show that the objects named in the refuted statement are not elements of the state space and that the model's exact-position statement is atomless.

1.1 [The plane wave is not in the state space] By [F2], $|\psi_{k}(x)|^{2}=1$ for every $x$ and $\int_{\mathbb R^{3}}|\psi_{k}|^{2}dx=+\infty$; hence $\psi_{k}\notin H=L^{2}(\mathbb R^{3};\mathbb C)$. For every nonzero scalar $z$ the same computation gives $\int|z\psi_{k}|^{2}=|z|^{2}\cdot\infty=\infty$, so no nonzero scalar multiple of $\psi_{k}$ lies in $H$ either, and the formal normalization "$\psi_{k}/\sqrt{V}$" depends on a box volume $V$ and is also not an element of $H$. [given, F2, algebra]

1.2 [The exact-position symbol is not a state] If an $L^2$ class $f$ represented $\delta_X$, use the real continuous compactly supported functions $\eta_n(x):=\prod_{j=1}^3\max\{0,1-n|x_j-X_j|\}$, for integers $n\ge1$. They satisfy $\eta_n(X)=1$, $0\le\eta_n\le1$, and are supported in the cube $\prod_j[X_j-1/n,X_j+1/n]$, so $\|\eta_n\|_2\le(2/n)^{3/2}$. The representation and [F5] would give $1=|\int f\eta_n|\le\|f\|_2(2/n)^{3/2}\to0$, a contradiction. Thus $\delta_X$ has no $L^2$ representation. Independently, [F3] rules out nonzero position eigenvectors. The model's exact-coordinate law is $\mu^{Q_j}_{\rho}(\{X_j\})=0$ for every preparation $\rho$, with $X_j\in\mathbb R$ the $j$-th coordinate of $X\in\mathbb R^3$. [given, F3, F4, F5, construct, algebra]

2.1 [Hence no preparation is assigned to either object] By [F1] pure preparations are unit rays of $H$ and general preparations are density operators on $H$; since neither $\psi_{k}$ nor $\delta^{3}(x-X)$ determines an element of $H$, neither determines a preparation, and no position density can be attached to them within the model. The identities $|\psi_{k}|^{2}=1$ and "$\delta$ is localized" are formal statements outside the state space, not probabilities of the model. [step 1.1, step 1.2, F1, F4, algebra]

3.1 [The pointwise solution property does not supply a state] Granting that the free plane wave satisfies $-\frac{\hbar^{2}}{2m}\Delta\psi_{k}=E\psi_{k}$ pointwise with $E=\hbar^{2}|k|^{2}/(2m)$, and that the time-dependent expression $e^{i(k\cdot x-\omega t)}$ with $\omega=E/\hbar$ solves the free Schrödinger equation classically, those are statements about a smooth function on $\mathbb R^{3}$ and do not place it in $H$; the model's dynamics and its Born law are defined on the state space, and by steps 1.1-2.1 the plane wave is not in it. The finite-resolution content of the model is the bin probability of a normalizable packet, not the idealized plane wave. Specifically, under the stated hypotheses of [[ex-nrqm-observables-position-bin-probabilities]] clauses (i)-(ii), for its Gaussian first-coordinate packet, every bin $(a,b]$ with $a<b$ has positive probability, whereas every exact first-coordinate value has probability zero. Positivity in every positive-length bin is not claimed for arbitrary normalizable packets. This refutes the displayed claim. [step 1.1, step 1.2, step 2.1, F1, F3, F4, algebra] ∎

## Remarks

- The counterexample concerns the state assignment of this model, not the usefulness of plane waves or delta symbols as distributional tools: they are standard idealizations in formal manipulations, where any probability conclusion requires a separate mathematical statement about normalizable approximants. Nothing here asserts that such approximation schemes fail, only that the raw objects are not preparations and carry no Born law.
- Solving the free equation and being bounded do not by themselves imply membership in $H$; the plane wave above is one explicit bounded solution that is not square-integrable. Every proposed preparation must separately satisfy the model's state-space and normalization requirements.
