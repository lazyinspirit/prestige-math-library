---
id: cex-nrqm-observables-plane-wave-is-not-a-preparation
aliases: [nrqm-observables-plane-wave-is-not-a-preparation]
kind: counterexample
domain: physics
title: "The plane wave and the point-localized delta are not preparations of the model"
status: draft
origin: pipeline
dependency_level: 8
deps: [cor-trigonometric-parity-and-pythagorean-identity, def-countable-choice, def-nrqm-magnetic-and-detection-position-and-momentum-operators, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-state-and-composition, pthm-nrqm-observables-position-and-momentum-outcome-laws, thm-eulers-formula, thm-monotone-convergence-for-the-integral]
dependency_roles:
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-position-and-momentum-outcome-laws: physical-result
  thm-eulers-formula: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A refutation, inside the framework's state assignment, of the informal claim that a free plane wave, or the point-localized distribution symbol delta(x minus X), is a preparation of the massive-particle model with the idealized position density one: the plane wave is not an element of the state space and the exact-position symbol is not an element of the state space either, while the model's own exact-position statement is that the probability of an exact value is zero and finite bins carry the probability. The item refutes that specific informal claim; it asserts no empirical result and no claim about approximation schemes in which such objects are formally useful."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.2.1, printed pages 67-70 (plane-wave and position eigenstates are not normalizable; the continuous spectrum has no normalizable eigenfunction)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 \"Dirac's Bra and Ket Notation\", Section 3, printed pages 11-13 (position states have infinite norm and are not allowed states; the position basis is an idealization)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
verification:
  precheck: pass
---

## Statement refuted

Adopt the state and composition postulate P1 and the massive-particle model postulate P5 of the framework ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]). Then: **every** bounded smooth function $\psi:\mathbb R^{3}\to\mathbb C$ that solves the free time-independent Schrödinger equation $-\frac{\hbar^{2}}{2m}\Delta\psi=E\psi$ pointwise determines a pure preparation of the model with position density $|\psi|^{2}$; in particular the plane wave $\psi_{k}(x)=e^{ik\cdot x}$ with $k\ne0$ is a preparation with constant position density $|\psi_{k}|^{2}=1$, and the point-localized object $\delta^{3}(x-X)$ is the preparation of a particle exactly at $X$.

## Facts & Assumptions

**Given:** The adopted postulates P1 and P5 for a spinless particle with state space $H=L^{2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-state-and-composition]] clauses (i)-(iii), [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clauses (iii)-(iv)); the position operators $Q_{j}$ with their spectral facts ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[pthm-nrqm-observables-position-and-momentum-outcome-laws]]); a wave vector $k\in\mathbb R^{3}$, $k\ne0$; a point $X\in\mathbb R^{3}$; the Axiom of Countable Choice ([[def-countable-choice]]).

[F1] **Preparations are rays of the state space.** A pure preparation of the model is a unit ray $[\psi]=\{z\psi:z\in\mathbb C\setminus\{0\}\}$ of a vector $\psi\in H$ with $\|\psi\|=1$; the zero vector is excluded, and a general preparation is a density operator on $H$. The model assigns no preparation to an object that is not an element of $H$ ([[post-nrqm-framework-state-and-composition]] clause (ii), [[def-nrqm-state-geometry-framework-state-space]] clauses (a)-(c)).

[F2] **The plane wave has constant modulus and infinite norm.** For every real $\theta$ one has $|e^{i\theta}|^{2}=\cos^{2}\theta+\sin^{2}\theta=1$, hence $|e^{ik\cdot x}|^{2}=1$ for every $x$; consequently for the truncations $\mathbf 1_{[-N,N]^{3}}$ one has $\int_{[-N,N]^{3}}|\psi_{k}|^{2}dx=(2N)^{3}$, and monotone convergence gives $\int_{\mathbb R^{3}}|\psi_{k}|^{2}dx=+\infty$, so $\psi_{k}$ is not an element of $L^{2}(\mathbb R^{3};\mathbb C)$ ([[thm-eulers-formula]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-monotone-convergence-for-the-integral]],).

[F3] **The position observable has no eigenvalues and no atoms.** The spectrum of $Q_{j}$ is all of $\mathbb R$, its outcome law in every preparation is atomless, and by the atom/eigenvalue correspondence it has no eigenvectors: there is no nonzero $x\in H$ with $Q_{j}x=\lambda x$ for any $\lambda$ ([[pthm-nrqm-observables-position-and-momentum-outcome-laws]] clauses (a) and (d), [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a) and (b)).

[F4] **Outcome-law reading.** The model reads an exact position value $\lambda$ through the singleton $\{\lambda\}$ and a finite-resolution outcome through a Borel bin $B$, with probabilities given by the spectral law of [[def-nrqm-observables-framework-observable-and-outcome-law]]; a vector outside $H$ carries no such law.

## Counterexample

**Proof technique:** direct; show that the objects named in the refuted statement are not elements of the state space and that the model's exact-position statement is atomless.

1.1 [The plane wave is not in the state space] By [F2], $|\psi_{k}(x)|^{2}=1$ for every $x$ and $\int_{\mathbb R^{3}}|\psi_{k}|^{2}dx=+\infty$; hence $\psi_{k}\notin H=L^{2}(\mathbb R^{3};\mathbb C)$. For every nonzero scalar $z$ the same computation gives $\int|z\psi_{k}|^{2}=|z|^{2}\cdot\infty=\infty$, so no nonzero scalar multiple of $\psi_{k}$ lies in $H$ either, and the formal normalization "$\psi_{k}/\sqrt{V}$" depends on a box volume $V$ and is also not an element of $H$. [given, F2, algebra]

1.2 [The exact-position symbol is not a state] Suppose $x\in H$ were an eigenvector of $Q_{j}$ at some $\lambda$, that is $Q_{j}x=\lambda x$ with $x\ne0$; then $\lambda$ would be an eigenvalue of $Q_{j}$. But [F3] states that $Q_{j}$ has no eigenvalues, and its law is atomless, so no such $x$ exists. The symbol $\delta^{3}(x-X)$ is not a function class in $L^{2}(\mathbb R^{3};\mathbb C)$ and cannot be an eigenvector; the model's corresponding exact-position statement is instead $\mu^{Q_{j}}(\{X\})=0$ for every preparation. [given, F3, F4, algebra]

2.1 [Hence no preparation is assigned to either object] By [F1] pure preparations are unit rays of $H$ and general preparations are density operators on $H$; since neither $\psi_{k}$ nor $\delta^{3}(x-X)$ determines an element of $H$, neither determines a preparation, and no position density can be attached to them within the model. The identities $|\psi_{k}|^{2}=1$ and "$\delta$ is localized" are formal statements outside the state space, not probabilities of the model. [step 1.1, step 1.2, F1, F4, algebra]

3.1 [The pointwise solution property does not supply a state] Granting that the free plane wave satisfies $-\frac{\hbar^{2}}{2m}\Delta\psi_{k}=E\psi_{k}$ pointwise with $E=\hbar^{2}|k|^{2}/(2m)$, and that the time-dependent expression $e^{i(k\cdot x-\omega t)}$ with $\omega=E/\hbar$ solves the free Schrödinger equation classically, those are statements about a smooth function on $\mathbb R^{3}$ and do not place it in $H$; the model's dynamics and its Born law are defined on the state space, and by steps 1.1-2.1 the plane wave is not in it. The finite-resolution content of the model is the bin probability of a normalizable packet, not the idealized plane wave: every bin of positive length has positive probability and every exact value has probability zero. This refutes the displayed claim. [step 1.1, step 1.2, step 2.1, F1, F3, F4, algebra] ∎

## Remarks

- The counterexample concerns the state assignment of this model, not the usefulness of plane waves or delta symbols as distributional tools: they are standard idealizations in formal manipulations, where any probability conclusion requires a separate mathematical statement about normalizable approximants. Nothing here asserts that such approximation schemes fail, only that the raw objects are not preparations and carry no Born law.
- The same argument excludes any bounded solution that does not decay: membership in $H$ is a separate requirement from solving the differential equation, and the model's state postulate assigns states only to elements of $H$.
