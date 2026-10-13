---
id: ex-nrqm-oscillator-ladder-norms
aliases: [ nrqm-oscillator-example-ladder-norms ]
kind: example
domain: physics
title: "Ladder norms and excitation statistics of the oscillator eigenstates"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    pthm-nrqm-oscillator-energy-spectrum-and-completeness,
    lem-nrqm-oscillator-closed-ladder-domains,
    thm-nrqm-oscillator-oscillator-scaling-and-exact-realization,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  pthm-nrqm-oscillator-energy-spectrum-and-completeness: physical-result
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The ladder operators of the one-dimensional oscillator model
  applied to the first excited eigenstates: the explicit ladder norms up to the
  second excited level, the outcome laws of the assigned dimensionless
  excitation-number observable in unit 1 and of the energy observable in
  the eigenstate preparations, and the warning that the annihilation and
  creation operators are not assigned sharp observables of the model. The
  example is a conditional computation inside the adopted model and asserts no
  measured excitation number, apparatus realisation or empirical value."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §1 printed pages 1-9: the ladder relations a|n> =
        sqrt(n)|n-1> and a^dagger|n> = sqrt(n+1)|n+1> and the number operator"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed
        pages 37-41 (PDF pages 45-49): the creation and annihilation operators,
        equations (3.17), and the number operator N = A^dagger A"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Adopt the state and composition postulate P1, the observable and probability postulate P2 and the kinematics and massive-particle model postulate P5, read through the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (a), (b), (c), and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $(\psi_n)$ be the model's complete orthonormal eigenbasis, $a_\psi,a^\dagger_\psi,N_\psi$ the transported ladder and number operators of [[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] clause (b), and $E_n=\hbar\omega(n+\frac12)$. Then:

(a) the first ladder images and their norms are
$$a_\psi\psi_0=0,\quad a_\psi\psi_1=\psi_0,\quad a_\psi\psi_2=\sqrt2\,\psi_1,\qquad a^\dagger_\psi\psi_0=\psi_1,\quad a^\dagger_\psi\psi_1=\sqrt2\,\psi_2,$$
$$\|a_\psi\psi_1\|=1,\quad\|a_\psi\psi_2\|=\sqrt2,\quad\|a^\dagger_\psi\psi_0\|=1,\quad\|a^\dagger_\psi\psi_1\|=\sqrt2;$$

(b) the matrix elements of the ladder operators in the eigenbasis are
$$\langle\psi_m,a_\psi\psi_n\rangle=\sqrt n\,\delta_{m,n-1}\ (n\ge1),\qquad\langle\psi_m,a^\dagger_\psi\psi_n\rangle=\sqrt{n+1}\,\delta_{m,n+1},\qquad\langle a_\psi\psi_n,a_\psi\psi_m\rangle=n\,\delta_{nm};$$

(c) every eigenvector is an eigenvector of the number operator, $N_\psi\psi_n=n\psi_n$, and the number and energy outcome laws of the eigenstate preparations are the point masses
$$\mu^{N_\psi}_{\psi_n}(\{n\})=1,\qquad \mu^{H_1}_{\psi_n}\bigl(\{E_n\}\bigr)=1:$$
the $n$-th eigenstate preparation carries exactly $n$ excitations and the energy $E_n=\hbar\omega(n+\frac12)$;

(d) the annihilation and creation operators are not assigned sharp observables of the model: they are not self-adjoint and have no assigned sharp outcome laws. Their images and norms are operator-theoretic quantities; a norm may nevertheless equal an outcome coordinate of another assigned observable, as $\|a_\psi\psi_1\|=1$ equals the certain number outcome in $\psi_1$. The assigned sharp observables of the model are $(Q,\mathrm m)$, $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$, $(H_1,\mathrm J)$ and $(N_\psi,1)$, the dimensionless excitation-number observable of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (c), and only laws of those are read in clause (c);

(e) the computation is a finite low-level check of the ladder relations in the adopted model, not a measurement record and not a claim that a laboratory oscillator was prepared in an eigenstate.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice and the Axiom of Choice; the one-dimensional oscillator model with parameters $m,\omega,\hbar>0$; its complete orthonormal eigenbasis $(\psi_n)$ with $H_1\psi_n=E_n\psi_n$ and $E_n=\hbar\omega(n+\frac12)$; the closed ladder and number operators $a_\psi,a^\dagger_\psi,N_\psi$ of the model's spectrum theorem clause (b).

[F1] **Eigenbasis and ladder operators.** $(\psi_n)$ is a complete orthonormal family of $\mathcal H_1$, $H_1\psi_n=E_n\psi_n$, $N_\psi\psi_n=n\psi_n$, and on the eigenbasis $a_\psi\psi_n=\sqrt n\,\psi_{n-1}$ for $n\ge1$ with $a_\psi\psi_0=0$, $a^\dagger_\psi\psi_n=\sqrt{n+1}\,\psi_{n+1}$ and $a^\dagger_\psi a_\psi=N_\psi$, $a_\psi a^\dagger_\psi=N_\psi+I$ on the common domain; the operators $a_\psi$, $a^\dagger_\psi$ are closed with $a_\psi^{*}=a^\dagger_\psi$ and $(a^\dagger_\psi)^{*}=a_\psi$, and $N_\psi$ is self-adjoint with eigenbasis $(\psi_n)$; the number law of $N_\psi$ in the pure preparation of $\psi_n$ is $\delta_n$, and the energy law of $H_1$ is the atomic law $\mu^{H_1}_{\psi_n}(\{E_n\})=|\langle\psi_n,\psi_n\rangle|^{2}=1$ ([[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] clauses (a), (b), (c); [[lem-nrqm-oscillator-closed-ladder-domains]] clauses (b), (c), (d), (e); [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a), (b)).

[F2] **Assigned observables and their laws.** The model assigns the status of assigned sharp observable to $(Q,\mathrm m)$, $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$, $(H_1,\mathrm J)$ and $(N_\psi,1)$, the dimensionless excitation number; their outcome laws are read from the spectral measures, and an operator that is not self-adjoint is not an assigned sharp observable of the framework ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c); [[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[def-nrqm-framework-quantities-and-units]]).

[F3] **Orthonormality.** $\langle\psi_n,\psi_m\rangle=\delta_{nm}$ and $\|\psi_n\|=1$ for every $n$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clause (a)).

## Verification

**Given:** the data of the Example and [F1]-[F3].

1.1 [Ladder images] By [F1], $a_\psi\psi_0=0$, $a_\psi\psi_1=\sqrt1\psi_0=\psi_0$, $a_\psi\psi_2=\sqrt2\psi_1$, $a^\dagger_\psi\psi_0=\sqrt1\psi_1=\psi_1$ and $a^\dagger_\psi\psi_1=\sqrt2\psi_2$. [given, F1]

1.2 [Matrix elements] By [F1] and [F3], for $n\ge1$ and every $m$, $\langle\psi_m,a_\psi\psi_n\rangle=\sqrt n\langle\psi_m,\psi_{n-1}\rangle=\sqrt n\,\delta_{m,n-1}$, $\langle\psi_m,a^\dagger_\psi\psi_n\rangle=\sqrt{n+1}\langle\psi_m,\psi_{n+1}\rangle=\sqrt{n+1}\,\delta_{m,n+1}$, and $\langle a_\psi\psi_n,a_\psi\psi_m\rangle=\sqrt{nm}\langle\psi_{n-1},\psi_{m-1}\rangle=n\,\delta_{nm}$ for $n,m\ge1$. At $n=0$, $a^\dagger_\psi\psi_0=\psi_1$ gives $\langle\psi_m,a^\dagger_\psi\psi_0\rangle=\delta_{m,1}$. If $n=0$ or $m=0$, one annihilation image vanishes by $a_\psi\psi_0=0$, so the pairing is zero, equal to $n\delta_{nm}$. [given, F1, F3]

1.3 [Number and energy laws of the eigenstates] By [F1], $N_\psi\psi_n=n\psi_n$ and the number law of the unit eigenvector $\psi_n$ is $\delta_n$; likewise the energy law of the unit eigenvector is $\mu^{H_1}_{\psi_n}(\{E_n\})=|\langle\psi_n,\psi_n\rangle|^{2}=1$ by [F1] and [F3], so the preparation carries exactly $n$ excitations and the energy value $E_n=\hbar\omega(n+\frac12)$. [given, F1, F3]

2.1 [Clause (a)] Taking norms in the images of step 1.1 and using $\|\psi_k\|=1$ of [F3] gives $\|a_\psi\psi_1\|=\|\psi_0\|=1$, $\|a_\psi\psi_2\|=\sqrt2\|\psi_1\|=\sqrt2$, $\|a^\dagger_\psi\psi_0\|=\|\psi_1\|=1$ and $\|a^\dagger_\psi\psi_1\|=\sqrt2\|\psi_2\|=\sqrt2$. [step 1.1, F3]

2.2 [Clause (b)] The displays of clause (b) are exactly the identities computed in step 1.2. [step 1.2]

3.1 [Clause (d)] By [F1], $a_\psi\psi_0=0$ and $a^\dagger_\psi\psi_0=\psi_1\ne0$, so $a_\psi\ne a^\dagger_\psi$. Since $a_\psi^{*}=a^\dagger_\psi$ and $(a^\dagger_\psi)^{*}=a_\psi$ by [F1], neither operator is self-adjoint. By [F2] neither is an assigned sharp observable, so neither has an assigned sharp outcome law; the computed images and norms alone do not supply such a law. This does not exclude numerical equality with an outcome coordinate of another observable: step 2.1 gives $\|a_\psi\psi_1\|=1$, while step 1.3 gives $\mu^{N_\psi}_{\psi_1}(\{1\})=1$. The assigned observable pairs are those listed in [F2]. [step 1.1, step 1.3, step 2.1, F1, F2]

4.1 [Clause (e)] The computation used the model's eigenbasis and ladder operators and the orthonormality of the eigenbasis; it produced no measurement record and no claim about a laboratory preparation. [step 1.1, step 3.1, given] ∎
