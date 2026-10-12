---
id: pthm-nrqm-driven-dynamics-mild-propagator-and-pictures
aliases: [nrqm-driven-dynamics-mild-propagator-and-pictures]
kind: physics-theorem
domain: physics
title: "The bounded-control driven model: mild propagator, interaction-picture evolution and equivalence of the two readings"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-driven-dynamics-framework-driven-model, def-nrqm-driven-dynamics-framework-interaction-picture, def-nrqm-autonomous-dynamics-framework-evolution, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-pure-mixed-states-and-purity, thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture, lem-nrqm-autonomous-dynamics-heisenberg-flow, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-inner-product-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  def-nrqm-driven-dynamics-framework-interaction-picture: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The bounded-control driven model of the declared system: existence, uniqueness and unitary character of the mild two-time propagator of H(t) = H0 + V(t), the vectorwise mild Schroedinger identity, the weak Schroedinger identity on the domain of H0, the interaction-picture state evolution and control, and the equivalence of the Schroedinger and interaction readings of the outcome laws. The theorem is conditional on a self-adjoint H0 and a strongly continuous bounded self-adjoint control and asserts no invariant domain, no strong full Schroedinger equation for domain vectors, no measurement and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 printed pages 123-131 (PDF pages 135-143): mild evolution equations and the interaction picture for a bounded time-dependent perturbation of a self-adjoint operator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 2.3 printed pages 15-17 (PDF pages 15-17): Dyson's formula for a time-dependent Hamiltonian with a time-independent part"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared driven model of [[def-nrqm-driven-dynamics-framework-driven-model]] in the **bounded-control class** of clause (b)(ii): $\mathfrak H$ is the model's state space, $H_{0}$ is self-adjoint on $D(H_{0})$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), $V:I\to\mathcal B(\mathfrak H)$ is strongly continuous with self-adjoint values and $v:=\sup_{t\in I}\|V(t)\|<\infty$ ([[def-bounded-linear-operator]], [[def-operator-norm]]), $H(t)=H_{0}+V(t)$ on $D(H_{0})$, and adopt the interaction-picture readings of [[def-nrqm-driven-dynamics-framework-interaction-picture]]: $E(t)=e^{-itH_{0}/\hbar}$, $V_{I}(t)=E(-t)V(t)E(t)$, $U_{I}(t,s)=E(-t)U(t,s)E(s)$. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the latter for the outcome-law reading of P2. Let $U(t,s)$ be the mild propagator constructed by [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]. Then:

(a) *Well-posedness of the declared model.* $U$ is the unique family of unitary operators on $\mathfrak H$, jointly strongly continuous on $I\times I$, with $U(s,s)=I$, $U(t,s)^{*}=U(s,t)$ and the cocycle $U(t,r)=U(t,s)U(s,r)$, satisfying the vectorwise mild Schroedinger identity
$$U(t,s)\psi=E(t-s)\psi-\frac{i}{\hbar}\int_{s}^{t}E(t-r)V(r)U(r,s)\psi\,dr\qquad(\psi\in\mathfrak H,\ s,t\in I);$$
so the model's clause (c)(ii) declaration has exactly one solution. For $\psi,\varphi\in D(H_{0})$ the scalar curve $t\mapsto\langle U(t,s)\psi,\varphi\rangle$ is continuously differentiable on $I$ with
$$\frac{d}{dt}\bigl\langle U(t,s)\psi,\varphi\bigr\rangle=-\frac{i}{\hbar}\Bigl[\bigl\langle U(t,s)\psi,H_{0}\varphi\bigr\rangle+\bigl\langle V(t)U(t,s)\psi,\varphi\bigr\rangle\Bigr].$$
No invariance of $D(H_{0})$ under $U$, no strong full Schroedinger equation for its domain vectors, and no operator-norm differentiability of $U$ with respect to the unbounded generator are asserted.

(b) *Interaction picture.* For every $s,t\in I$ and every $\psi\in\mathfrak H$ the interaction state $\psi_{I}(t):=E(-t)U(t,s)\psi(s)$ satisfies $\psi_{I}(t)=U_{I}(t,s)\psi_{I}(s)$, and its first-endpoint map is strongly differentiable with $i\hbar\partial_{t}\psi_{I}(t)=V_{I}(t)\psi_{I}(t)$; the interaction propagator is unitary with the cocycle and $U_{I}(t,s)^{*}=U_{I}(s,t)$, and its strong truncation bound is $\|U_{I}(t,s)-\sum_{n=0}^{N}D_{n}(t,s)\|\le e^{K(t-s)}(K(t-s))^{N+1}/(N+1)!$ for $s\le t$ with $K=v/\hbar$.

(c) *Equivalence of the two readings.* For every preparation $\rho$ specified at time $s$, every assigned sharp observable $(A,u_{A})$ with $A$ bounded, every $t\in I$ and every Borel set $B\subseteq\mathbb R$, the Schroedinger reading and the interaction reading give the same outcome probability:
$$\mu^{A}_{\rho(t)}(B)=\mu^{A_{I}(t)}_{\rho_{I}(t)}(B),\qquad A_{I}(t)=E(-t)AE(t),\quad \rho_{I}(t)=E(-t)\rho(t)E(t),$$
and for pure preparations $\|\psi_{I}(t)\|=\|\psi(t)\|=\|\psi(s)\|$. For eigenvectors $\varphi_{a},\varphi_{b}$ of $H_{0}$ as in clause (e) of the model, the transition probabilities of the two pictures agree,
$$p_{ba}(t,s)=\bigl|\bigl\langle U(t,s)\varphi_{a},\varphi_{b}\bigr\rangle\bigr|^{2}=\bigl|\bigl\langle U_{I}(t,s)\varphi_{a},\varphi_{b}\bigr\rangle\bigr|^{2}.$$

(d) *Scope.* The theorem is conditional on the bounded-control class; the mild identity, not a strong equation on $D(H_{0})$, is the evolution equation it establishes, and it asserts nothing about unbounded controls, invariant domains, measurement records, detectors, rates or empirical data.

## Facts & Assumptions

**Given:** the declared driven model in the bounded-control class and its interaction-picture readings; the operators $E(t)$, $V_{I}$, $U_{I}$; a preparation $\rho$, a bounded assigned sharp observable $A$, times $s,t\in I$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Interaction-picture supplier.** Under the hypotheses of the Statement, $V_{I}$ is strongly continuous with self-adjoint values and $\|V_{I}(t)\|=\|V(t)\|\le v$; the strong integrals $D_{n}(t,s)$ and the interaction propagator $U_{I}=\sum_{n\ge0}D_{n}$ converge in operator norm uniformly on the time triangle with $\|D_{n}\|\le(K(t-s))^{n}/n!$ and $\|U_{I}(t,s)-\sum_{n=0}^{N}D_{n}\|\le e^{K(t-s)}(K(t-s))^{N+1}/(N+1)!$; $U_{I}$ extends to all $s,t\in I$ as a strongly continuous unitary evolution with $U_{I}(s,t)=U_{I}(t,s)^{-1}=U_{I}(t,s)^{*}$ and the cocycle; for every $\psi$ its first-endpoint map is $C^{1}$ with $U_{I}(t,s)\psi=\psi+\int_{s}^{t}B(r)U_{I}(r,s)\psi\,dr$ and $\partial_{t}U_{I}(t,s)\psi=B(t)U_{I}(t,s)\psi$, where $B(t)=-\frac{i}{\hbar}V_{I}(t)$; the physical propagator $U(t,s)=E(t)U_{I}(t,s)E(-s)$ is unitary, jointly strongly continuous, has the cocycle and inverse, and satisfies the vectorwise mild identity $U(t,s)\psi=E(t-s)\psi-\frac{i}{\hbar}\int_{s}^{t}E(t-r)V(r)U(r,s)\psi\,dr$; for $\psi,\varphi\in D(H_{0})$ the scalar curve satisfies $\frac{d}{dt}\langle U(t,s)\psi,\varphi\rangle=-\frac{i}{\hbar}[\langle U(t,s)\psi,H_{0}\varphi\rangle+\langle V(t)U(t,s)\psi,\varphi\rangle]$ ([[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]).

[F2] **Model and picture readings.** The model declares $U$ of clause (c)(ii) as the propagator carrying the state evolution and fixes the evolved preparation and outcome-law readings ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (c)(ii), (d)); the interaction-picture readings fix $E,V_{I},U_{I},\psi_{I},\rho_{I}$ and state the outcome-law equivalence with the conjugate observable $A_{I}(t)=E(-t)AE(t)$ ([[def-nrqm-driven-dynamics-framework-interaction-picture]] clauses (b)-(e)). The conjugate observable has spectral measure $E_{A_{I}(t)}(B)=E(-t)E_{A}(B)E(t)$ ([[lem-nrqm-autonomous-dynamics-heisenberg-flow]] clause (d), applied to the flow $E$ of the self-adjoint generator $-H_{0}/\hbar$).

[F3] **Framework readings.** $\rho(t)=U(t,s)\rho(s)U(t,s)^{*}$ is a preparation and the outcome law of an assigned sharp observable in a preparation is $\mu^{A}_{\rho}(B)$ with the pure form $\|E_{A}(B)\psi\|^{2}$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]); $E(t)=e^{-itH_{0}/\hbar}$ is the autonomous flow of the assigned energy observable $(H_{0},\mathrm J)$ ([[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)).

[F4] **Inner product.** The pairing is linear in the first argument and conjugate-linear in the second, and unitary operators preserve it ([[def-inner-product-space]]).

## Proof

**Proof technique:** direct; instantiate the interaction-picture supplier at the model's data and transfer the model's readings through the recorded definitions.

**Given:** the data of the Statement and [F1]-[F4].

1.1 [Well-posedness and the mild identity] The pair $(H_{0},V)$ satisfies exactly the hypotheses of [F1] and the model's clause (b)(ii) is that hypothesis, so [F1] supplies the family $U(t,s)=E(t)U_{I}(t,s)E(-s)$ with the unitary, strong-continuity, inverse and cocycle properties and the vectorwise mild identity, and identifies it with the solution of the model's clause (c)(ii); the uniqueness is the uniqueness of $U_{I}$ as the norm-convergent Dyson sum of [F1], since $E$ is a fixed unitary family. The weak identity for $\psi,\varphi\in D(H_{0})$ is the scalar derivative assertion of [F1]. This is clause (a). [F1, F2, given]

1.2 [Interaction picture] By [F1], $U_{I}$ is unitary with the cocycle and adjoint properties, its first-endpoint map is strongly $C^{1}$ with $i\hbar\partial_{t}U_{I}(t,s)=V_{I}(t)U_{I}(t,s)$, and the truncation bound is displayed; by [F2] $\psi_{I}(t)=E(-t)\psi(t)$ and $\psi_{I}(t)=U_{I}(t,s)\psi_{I}(s)$, so the strong equation for $\psi_{I}$ follows from the equation for $U_{I}$ applied to $\psi_{I}(s)$. This is clause (b). [F1, F2, given]

1.3 [Equivalence of the readings] Let $\rho$ be specified at $s$ and let $A$ be bounded. By [F2], $\rho_{I}(t)=E(-t)\rho(t)E(t)$ and $E_{A_{I}(t)}(B)=E(-t)E_{A}(B)E(t)$; using $\rho(t)=E(t)\rho_{I}(t)E(-t)$ and the trace identity $\operatorname{tr}(E(t)\rho_{I}E(-t)E_{A}(B))=\operatorname{tr}(\rho_{I}E(-t)E_{A}(B)E(t))$, the two laws agree; for pure preparations unitarity of $E(-t)$ [F4] gives $\|\psi_{I}(t)\|=\|\psi(t)\|=\|\psi(s)\|$ by [F1]. For the eigenvector amplitudes, $U=E(t)U_{I}E(-s)$ and $E(\pm t)\varphi_{a/b}=e^{\mp itE_{a/b}/\hbar}\varphi_{a/b}$, so the two inner products differ by the phase $e^{is(E_{a}-E_{b})/\hbar}$ of modulus one and the transition probabilities agree, as recorded in clause (e) of [[def-nrqm-driven-dynamics-framework-interaction-picture]]. This is clause (c). [F1, F2, F3, F4, algebra]

2.1 [Scope] Every hypothesis used is one of: self-adjointness of $H_{0}$, strong continuity and boundedness of the self-adjoint control, the compactness of $I$, and the choice hypotheses; the established equation is the mild identity, and no invariance of $D(H_{0})$, no strong equation for its vectors, no measurement and no empirical claim entered, which is clause (d). [step 1.1, step 1.2, step 1.3, given] ∎

## Remarks

- **Why the mild equation and not more.** The supplier deliberately does not claim that $U(t,s)$ maps $D(H_{0})$ into itself, so the strong full Schroedinger equation for domain vectors is not available at this level of hypothesis; the weak identity of clause (a) is what remains, and it is enough for the amplitude theorem of this page because the eigenvector amplitudes are evaluated in the energy basis of $H_{0}$.
- **The interaction picture does not change the model.** Clause (c) records that $A$ and $\rho$ are transported together; a computation in the interaction picture is therefore a computation of the same outcome law, not a different physical situation.
