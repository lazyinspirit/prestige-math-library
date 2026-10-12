---
id: pthm-nrqm-uncertainty-robertson-relation
aliases: [ nrqm-uncertainty-robertson-relation ]
kind: physics-theorem
domain: physics
title: "The Robertson relation for preparation spreads of assigned sharp observables"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-uncertainty-preparation-spread,
    lem-nrqm-composites-weak-form-robertson-uncertainty,
    lem-nrqm-observables-moments-and-variance,
    lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-preparation-moments
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  lem-nrqm-composites-weak-form-robertson-uncertainty: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-preparation-moments: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statements about the preparation spreads of two
  assigned sharp observables of the framework in a pure preparation of a unit
  vector: the weak Robertson bound Delta A Delta B >= |Im<A psi, B psi>| for
  unit vectors in both domains, the Robertson bound Delta A Delta B >=
  |<[A,B]psi,psi>|/2 and its anticommutator refinement when the product domains
  also contain the vector, and the automatic validity of these hypotheses for
  bounded observables. The statement is a conditional consequence of P1 and P2
  and the cited mathematics; it concerns preparation spreads of outcome laws
  only, and asserts no apparatus error, no disturbance, no joint measurement, no
  energy-time inequality and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4.1,
        printed pages 84-85 (PDF pages 87-88): variance as the spread of the
        outcome distribution, the derivation of Delta x Delta p >= hbar/2 from
        [x,p]=i hbar and the position-momentum example"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 2, printed
        pages 3-6: the uncertainty inequality (2.14), its
        commutator-anticommutator refinement (2.28) and the saturation
        conditions"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 3.1, printed pages 88-95 (PDF pages 100-107): expectation
        values, variances and spectral measures of self-adjoint operators"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1 and the observable and
probability postulate P2 in the readings of
[[def-nrqm-state-geometry-framework-state-space]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $(A,u_{A})$ and $(B,u_{B})$ be assigned sharp
observables with outcome laws $\mu^{A},\mu^{B}$ and let
$\Delta_{\rho}A,\Delta_{\rho}B$ be their preparation spreads in the reading of
[[def-nrqm-uncertainty-preparation-spread]]. Let $\psi$ be a unit vector and
write $a:=\langle A\psi,\psi\rangle$, $b:=\langle B\psi,\psi\rangle$. Then:

(a) **Weak form.** If $\psi\in D(A)\cap D(B)$, then the means $a,b$ are real,
the spreads $\Delta_{\psi}A$ and $\Delta_{\psi}B$ are defined, both are read in
the units $u_{A}$ and $u_{B}$, and
$$\Delta_{\psi}A\,\Delta_{\psi}B\ge\bigl|\operatorname{Im}\langle A\psi,B\psi\rangle\bigr| .$$

(b) **Robertson form.** If in addition $\psi\in D(AB)\cap D(BA)$, that is
$B\psi\in D(A)$ and $A\psi\in D(B)$, then the pairing
$\langle[A,B]\psi,\psi\rangle:=\langle AB\psi,\psi\rangle-\langle BA\psi,\psi\rangle$
is defined, is purely imaginary, and
$$\Delta_{\psi}A\,\Delta_{\psi}B\ge\tfrac12\bigl|\langle[A,B]\psi,\psi\rangle\bigr| ,$$
read in the product unit $u_{A}u_{B}$; moreover the anticommutator refinement
$$(\Delta_{\psi}A)^{2}(\Delta_{\psi}B)^{2}\ge\Bigl(\tfrac12\bigl\langle\{(A-a),(B-b)\}\psi,\psi\bigr\rangle\Bigr)^{2}+\tfrac14\bigl|\langle[A,B]\psi,\psi\rangle\bigr|^{2}$$
holds, with equality in the refined bound if and only if $(A-a)\psi$ and
$(B-b)\psi$ are linearly dependent.

(c) **Bounded observables.** If $A$ and $B$ are bounded everywhere-defined
self-adjoint operators, then clauses (a) and (b) hold for every unit
$\psi\in H$ with all hypotheses automatic ([[def-bounded-linear-operator]]).

(d) **Status and scope.** Clauses (a)-(c) are conditional consequences of P1
and P2 and the cited mathematics. They concern the spreads of the two outcome
laws in one preparation; they introduce no joint outcome law, no apparatus
resolution, no measurement error, no disturbance of the preparation, and no
time observable. In particular no energy-time inequality is asserted, and
clauses (a)-(c) do not claim that a laboratory procedure realizes either
observable or attains the bounds; whether a concrete preparation and apparatus
realize the pair $(A,u_{A})$ and produce the spread $\Delta_{\psi}A$ is a
tested identification under the preparation and apparatus postulate P7.

## Facts & Assumptions

**Given:** The postulates P1 and P2; the Axiom of Countable Choice and the Axiom of Choice; assigned sharp observables $(A,u_{A})$, $(B,u_{B})$ with self-adjoint operators $A,B$ and declared units; a unit vector $\psi$; the preparation spreads of [[def-nrqm-uncertainty-preparation-spread]].

[F1] **Moments and spread.** For an assigned sharp observable $(A,u_{A})$ and a pure preparation of a unit vector $\psi\in D(A)$, the mean and the second moment of the outcome law exist with $m=\langle A\psi,\psi\rangle\in\mathbb R$ and $\int\lambda^{2}\,d\mu^{A}_{\psi}=\|A\psi\|^{2}$, and the preparation spread is $\Delta_{\psi}A=\|(A-\langle A\psi,\psi\rangle I)\psi\|$ ([[pthm-nrqm-observables-preparation-moments]] clause (a), [[lem-nrqm-observables-moments-and-variance]] clause (c), [[def-nrqm-uncertainty-preparation-spread]] clauses (b) and (c)).

[F2] **Schroedinger-Robertson bound.** For symmetric densely defined $A,B$ and a unit $u\in D(A)\cap D(B)$ with $u\in D(AB)\cap D(BA)$, with real means $a,b$ and centered vectors $x=(A-a)u$, $y=(B-b)u$, the refined bound and the equality clause hold: $(\Delta A)^{2}(\Delta B)^{2}\ge[\operatorname{Re}\langle x,y\rangle]^{2}+[\operatorname{Im}\langle x,y\rangle]^{2}$, with equality if and only if $x,y$ are linearly dependent, and $\Delta A\Delta B\ge\tfrac12|\langle[A,B]u,u\rangle|$ with $\langle[A,B]u,u\rangle=-2i\operatorname{Im}\langle x,y\rangle$; and $\operatorname{Re}\langle x,y\rangle=\tfrac12\langle\{(A-a),(B-b)\}u,u\rangle$ ([[lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]] clauses (a)-(d)).

[F3] **Weak-form identification without products.** For symmetric densely defined $A,B$ and a unit $u\in D(A)\cap D(B)$, with real means $a,b$ and $x,y$ as above, $\operatorname{Im}\langle x,y\rangle=\operatorname{Im}\langle Au,Bu\rangle$ because $\langle x,y\rangle=\langle Au,Bu\rangle-ab$ with $ab\in\mathbb R$, and the refined Cauchy-Schwarz bound yields $\Delta A\Delta B\ge|\operatorname{Im}\langle Au,Bu\rangle|$ ([[lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound]] clause (a), [[lem-nrqm-composites-weak-form-robertson-uncertainty]] clauses (a), (c)).

[F4] **Units.** The declared unit of an assigned sharp observable and the reading of powers and products of units are those of [[def-nrqm-framework-quantities-and-units]]; the commutator pairing $\langle[A,B]\psi,\psi\rangle$ and the product $\Delta_{\psi}A\Delta_{\psi}B$ are read in the product unit $u_{A}u_{B}$ ([[def-nrqm-uncertainty-preparation-spread]] clause (d)).

## Proof

**Proof technique:** instantiate the mathematical Schroedinger-Robertson bound at the two self-adjoint operators of the assigned observables and read the definitions of mean and spread from the moment theorem.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Weak form] Let $\psi\in D(A)\cap D(B)$ be a unit vector. By [F1] the means $a=\langle A\psi,\psi\rangle$ and $b=\langle B\psi,\psi\rangle$ are real, the spreads $\Delta_{\psi}A$ and $\Delta_{\psi}B$ are defined, and they equal the norms of the centered vectors $x=(A-a)\psi$ and $y=(B-b)\psi$. By [F3], $\operatorname{Im}\langle x,y\rangle=\operatorname{Im}\langle A\psi,B\psi\rangle$ and $\Delta_{\psi}A\Delta_{\psi}B\ge|\operatorname{Im}\langle A\psi,B\psi\rangle|$, which is (a). [given, F1, F3]

2.1 [Robertson form] Assume in addition $\psi\in D(AB)\cap D(BA)$. Then $A,B$ satisfy the product-domain hypothesis of [F2] at $u=\psi$; combining the Robertson bound and the anticommutator refinement of [F2] with the identifications of [F1] gives the two displays of (b), and the equality clause transfers because the centered vectors there are exactly $(A-a)\psi$ and $(B-b)\psi$. The pairing $\langle[A,B]\psi,\psi\rangle$ is purely imaginary by [F2]. This is (b). [step 1.1, F1, F2]

3.1 [Bounded case] If $A$ and $B$ are bounded everywhere-defined self-adjoint operators, then $D(A)=D(B)=H$ and all products are everywhere defined, so the hypotheses of clauses (a) and (b) hold for every unit $\psi\in H$; clauses (a) and (b) apply verbatim. This is (c). [step 1.1, step 2.1, F1, F2]

4.1 [Units and scope] The units are those of [F4]; the preparation spread is the outcome-law spread of [[def-nrqm-uncertainty-preparation-spread]] and no apparatus, disturbance, joint-law or time quantity enters steps 1.1-2.1, which is the scope statement (d). [step 1.1, step 2.1, step 3.1, F1, F4] ∎
