---
id: def-nrqm-uncertainty-preparation-spread
aliases: [ nrqm-uncertainty-preparation-spread ]
kind: definition
domain: physics
title: "Preparation variance and spread of an assigned sharp observable"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-observables-moments-and-variance,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-preparation-moments
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-preparation-moments: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The reading of preparation variance and preparation spread for
  an assigned sharp observable of the framework: the variance and standard
  deviation of the outcome law of a preparation, their units, their existence
  hypotheses through the moment theorem, the centered-vector form for pure
  preparations of domain vectors, and the resulting definition of the product of
  two spreads. The item fixes terminology and readings of P1 and P2 only; it
  asserts no apparatus resolution, no measurement error, no disturbance, no
  joint measurement, no dynamics and no empirical result, and it does not claim
  that any preparation has finite moments automatically."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4.1,
        printed pages 84-85 (PDF pages 87-88): the variance of an observable in
        a state defined as the uncertainty, the eigenstate case and the
        position-momentum example"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 1, printed
        pages 1-3: the uncertainty defined as the norm of the centered vector
        and the identity (Delta A)^2 = <A^2> - <A>^2"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 3.1, printed pages 88-95 (PDF pages 100-107): expectation values
        and moments of a self-adjoint operator in a state"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Setting.** Adopt the state and composition postulate P1 and the
observable and probability postulate P2 in the readings of
[[def-nrqm-state-geometry-framework-state-space]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $(A,u_{A})$ be an assigned sharp observable with
declared unit $u_{A}$ and outcome law $\mu^{A}_{\rho}$ in a preparation
$\rho$, in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b).

**(b) Preparation variance.** When the mean
$m(\rho):=\int_{\mathbb R}\lambda\,d\mu^{A}_{\rho}(\lambda)$ and the second
moment $\int_{\mathbb R}\lambda^{2}\,d\mu^{A}_{\rho}(\lambda)$ of the outcome
law are finite, the **preparation variance** of $(A,u_{A})$ in $\rho$ is
$$\operatorname{Var}_{\rho}(A):=\int_{\mathbb R}\bigl(\lambda-m(\rho)\bigr)^{2}\,d\mu^{A}_{\rho}(\lambda),$$
read in the square $u_{A}^{2}$ of the declared unit, and the **preparation
spread** is $\Delta_{\rho}A:=\operatorname{Var}_{\rho}(A)^{1/2}\ge0$, read in
the unit $u_{A}$. When either quantity is not finite the variance and the
spread of the pair in $\rho$ are **not defined**; the definition does not
extend them by $+\infty$.

**(c) Values and hypotheses.** The variance and its hypotheses are exactly
those of the moment theorem: for a pure preparation of a unit vector
$\psi\in D(A)$ the spread is $\Delta_{\psi}A=\|(A-\langle A\psi,\psi\rangle I)\psi\|$,
equal to $\bigl(\langle A^{2}\psi,\psi\rangle-\langle A\psi,\psi\rangle^{2}\bigr)^{1/2}$
when $\psi\in D(A^{2})$; for a preparation $\rho$ the identities and existence
criteria are those of [[pthm-nrqm-observables-preparation-moments]] and
[[lem-nrqm-observables-moments-and-variance]]. In particular a mean exists
exactly when $\rho$ is concentrated on the domain of $|A|^{1/2}$ in the sense
of those items, and no preparation is equipped with finite moments
automatically.

**(d) Products of spreads.** For two assigned sharp observables $(A,u_{A})$
and $(B,u_{B})$ in a common preparation $\rho$ in which both spreads are
defined, the product $\Delta_{\rho}A\,\Delta_{\rho}B$ is a nonnegative real
number read in the product unit $u_{A}u_{B}$; for a pure preparation of a unit
vector in $D(A)\cap D(B)$ it is
$\|(A-a)\psi\|\,\|(B-b)\psi\|$ with the real means $a=\langle A\psi,\psi\rangle$
and $b=\langle B\psi,\psi\rangle$.

**(e) Reading and scope.** The spread $\Delta_{\rho}A$ is a property of the
pair (preparation, assigned observable): it is the standard deviation of the
outcome law that P2 assigns. It is not an apparatus resolution, not a
measurement error and not a disturbance of the preparation; those are further
objects that require a declared instrument or apparatus model and are not
introduced here. Clause (b) makes no claim that a preparation realizes a
specific laboratory state, that a laboratory procedure measures $A$ with
resolution $u_{A}$, or that the spread is observed in any experiment; the
identification of an apparatus with the pair $(A,u_{A})$ is a tested
identification under the preparation and apparatus postulate P7.
[[def-nrqm-framework-quantities-and-units]] fixes the units in which the
displays are read.

## Remarks

- **Vanishing spread and eigenstates.** For a pure preparation of a unit
  vector $\psi\in D(A)$, clause (c) shows $\Delta_{\psi}A=0$ exactly when
  $A\psi=\langle A\psi,\psi\rangle\psi$, that is exactly when $\psi$ is an
  eigenvector of $A$; this is the framework's reading of the textbook
  statement that the uncertainty of an observable vanishes in an eigenstate.
  The identification of a laboratory state with such a preparation is again a
  tested identification, not a consequence of the definition.
- **The product is not a joint distribution.** Clause (d) forms a product of
  two spreads of the same preparation; it does not introduce a joint outcome
  law of $A$ and $B$, and the product can be defined even when no joint sharp
  observable of the pair exists. Joint sharp observables are a separate
  notion with its own criterion.
