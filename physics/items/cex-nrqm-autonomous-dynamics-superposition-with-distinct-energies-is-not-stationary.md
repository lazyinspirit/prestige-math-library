---
id: cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary
aliases:
  [
    nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary
  ]
kind: counterexample
domain: physics
title: "A superposition of distinct energy eigenrays need not be stationary"
status: published
origin: pipeline
dependency_level: 12
deps:
  [
    cor-trigonometric-parity-and-pythagorean-identity,
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    ex-nrqm-autonomous-dynamics-two-level-precession,
    post-nrqm-framework-autonomous-dynamics,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation,
    thm-eulers-formula,
    thm-kernel-and-fibres-of-complex-exponential,
    thm-quarter-turn-values-and-shift-formulas
  ]
dependency_roles:
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  ex-nrqm-autonomous-dynamics-two-level-precession: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  thm-eulers-formula: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A refutation, inside the framework's autonomous-dynamics
  reading, of the informal claim that every superposition of two or more
  distinct energy eigenrays of an isolated system is a stationary state with
  time-independent outcome laws: in the explicit two-level model with two
  distinct energies, an equal-weight superposition carries the bounded flip
  observable with an outcome probability oscillating between one and zero. The
  item refutes that specific universal claim; it asserts no apparatus, no
  measurement statistics from a laboratory and no empirical result, and it does
  not deny that individual eigenrays are stationary or that special
  superpositions can be stationary."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 2-3, chapter pages 2-6 (two-state precession:
        superpositions of energy eigenstates with distinct energies have
        time-dependent expectation values, while eigenstates do not)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.2
        and 2.2.1, printed pages 21-24 (only states of well-defined energy have
        time-independent expectation values of all time-independent operators;
        superpositions generally do not)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement refuted

Adopt the autonomous-dynamics reading of the framework ([[def-nrqm-autonomous-dynamics-framework-evolution]], [[post-nrqm-framework-autonomous-dynamics|P4]]). Then: **every** preparation of an isolated system that is a superposition of two or more energy eigenrays with distinct eigenvalues is a stationary state, in the sense that all of its outcome laws are independent of time; in particular a superposition of two eigenrays of the two-level model is stationary.

## Facts & Assumptions

**Given:** The adopted autonomous-dynamics reading of the framework with the two-level model data of [[ex-nrqm-autonomous-dynamics-two-level-precession]]: the Hilbert space $H=\mathbb C^{2}$, distinct energies $E_{1}\ne E_{2}$ in joules, the assigned energy observable $H_{\mathrm{op}}=E_{1}T_{u_{1},u_{1}}+E_{2}T_{u_{2},u_{2}}$ with flow $U(t)$ and frequency $\omega=(E_{2}-E_{1})/\hbar\ne0$, the bounded self-adjoint flip observable $X=T_{u_{1},u_{2}}+T_{u_{2},u_{1}}$, and the unit vector $\psi_{0}=(u_{1}+u_{2})/\sqrt2$; the Axiom of Countable Choice and the Axiom of Choice, the choice hypotheses of the cited spectral suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] **The model data and the law of $X$.** In the two-level model, $\psi(t)=U(t)\psi_{0}=\alpha e^{-iE_{1}t/\hbar}u_{1}+\beta e^{-iE_{2}t/\hbar}u_{2}$ for unit $\psi_{0}=\alpha u_{1}+\beta u_{2}$, $\langle X\rangle(t)=2\operatorname{Re}(\alpha\overline{\beta}e^{i\omega t})$, and $\mu^{X}_{\psi(t)}(\{+1\})=(1+\langle X\rangle(t))/2$ ([[ex-nrqm-autonomous-dynamics-two-level-precession]] clauses (i), (iii) and (v)).

[F2] **Stationary states are the eigenrays.** A pure preparation $[\psi]$ is stationary, that is $[\psi(t)]=[\psi(0)]$ for every $t$, exactly when $\psi$ is an eigenvector of $H_{\mathrm{op}}$; for a non-eigenvector the ray is not constant ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c)).

[F3] **Trigonometric values.** For real $x$ one has $\cos(x+\pi)=-\cos x$ and $\cos(-x)=\cos x$; in particular $\cos\pi=-1$ and $\cos(-\pi)=-1$ ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F4] **Euler form of the phase.** $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$, so $2\operatorname{Re}(e^{i\theta})=2\cos\theta$ ([[thm-eulers-formula]]). Moreover $\ker(\exp)=2\pi i\mathbb Z$, so for real $\theta$ one has $e^{i\theta}=1$ exactly for $\theta\in2\pi\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Counterexample

**Proof technique:** direct; evaluate the outcome law of the flip observable of the two-level model at two times and show that it takes different values.

1.1 [The preparation and its frequency] The vector $\psi_{0}=(u_{1}+u_{2})/\sqrt2$ is a unit vector with $\alpha=\beta=1/\sqrt2$, so $\alpha\overline{\beta}=1/2$ and, by [F1], $\langle X\rangle(t)=2\operatorname{Re}\bigl(\frac12e^{i\omega t}\bigr)=\cos\omega t$ by [F4], with $\omega=(E_{2}-E_{1})/\hbar\ne0$ because $E_{1}\ne E_{2}$. [given, F1, F4, algebra]

2.1 [Two values of the law] At $t=0$ one has $e^{i\omega\cdot0}=1$ since $0\in\ker(\exp)$ by [F4], so $\langle X\rangle(0)=2\operatorname{Re}(1/2)=1$ by step 1.1 and the law of $X$ in $[\psi_{0}]$ is $\mu^{X}_{\psi_{0}}(\{+1\})=(1+1)/2=1$. At $t_{0}:=\pi/|\omega|>0$ one has $\omega t_{0}=\pm\pi$, so $\cos(\omega t_{0})=\cos(\pm\pi)=-1$ by [F3], and therefore $\mu^{X}_{\psi(t_{0})}(\{+1\})=(1-1)/2=0$. [given, step 1.1, F1, F3, F4, algebra]

3.1 [The claim fails] The outcome law of the bounded assigned sharp observable $X$ takes the value $1$ at $t=0$ and the value $0$ at $t=t_{0}>0$ in the same preparation $[\psi_{0}]$; hence this law is not independent of time and the superposition $[\psi_{0}]$ is not stationary. By [F2] this is exactly as it must be, since $\psi_{0}$ is not an eigenvector of $H_{\mathrm{op}}$: $H_{\mathrm{op}}\psi_{0}=(E_{1}u_{1}+E_{2}u_{2})/\sqrt2$ is a multiple of $\psi_{0}=(u_{1}+u_{2})/\sqrt2$ only if $E_{1}=E_{2}$. This refutes the displayed universal claim. [given, step 1.1, step 2.1, F1, F2, algebra] ∎

## Remarks

- **What is not refuted.** Each eigenray is stationary by [F2], and a superposition whose nonzero coefficients all carry the same eigenvalue is stationary too; the refuted assertion is the universal one about superpositions of *distinct* eigenvalues. The failure is produced by the relative phase $e^{i\omega t}$, not by any external disturbance.
- **The two-times computation is exact model arithmetic.** Both probabilities are consequences of the framework's outcome law for the declared finite model; no detector, efficiency, resolution or recorded data is involved.
