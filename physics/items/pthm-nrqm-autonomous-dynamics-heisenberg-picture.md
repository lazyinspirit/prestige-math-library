---
id: pthm-nrqm-autonomous-dynamics-heisenberg-picture
aliases: [ nrqm-autonomous-dynamics-heisenberg-picture ]
kind: physics-theorem
domain: physics
title: "The Heisenberg picture: equivalent predictions and the domain-qualified
  equation of motion"
status: published
origin: pipeline
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-projection-valued-measure,
    def-self-adjoint-positive-unitary-and-normal-operator,
    def-unbounded-integral-against-a-pvm,
    lem-nrqm-autonomous-dynamics-heisenberg-flow,
    lem-nrqm-composites-nuclear-bounded-cyclicity,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional consequence of the autonomous-dynamics postulate
  P4 and the observable and probability postulate P2 in the reading of this page
  for a declared isolated system: the Heisenberg representative of a bounded
  assigned sharp observable is again a bounded assigned sharp observable with
  the same unit, norm and spectrum, the two pictures assign the same outcome
  laws to every preparation, the domain-qualified Heisenberg equation holds, and
  energy-compatible bounded observables are frozen in the Heisenberg picture. No
  measurement, apparatus, detector, driven-dynamics or open-system claim is
  made, and no empirical result is asserted."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Sections 3.1-3.2, printed pages 18-22 (Heisenberg operators,
        their properties, and the Heisenberg equation of motion)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 4.4,
        printed pages 70-71 (the Heisenberg picture: the time-dependent
        operator, its equation of motion and the equality of expectation values
        with the Schroedinger picture)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (self-adjoint observables and their
        spectral measures)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate [[post-nrqm-framework-state-and-composition]] (P1), the observable and probability postulate in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]] (P2), and the autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]] (P4), and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $(H_{\mathrm{op}},u_H)$ be the assigned energy observable of a declared isolated system with state space $H$ ([[def-nrqm-state-geometry-framework-state-space]]) and flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ as in [[def-nrqm-autonomous-dynamics-framework-evolution]], and let $(A,u_A)$ be a bounded assigned sharp observable: $A\in\mathcal B(H)$ is self-adjoint everywhere defined ([[def-bounded-linear-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]) with spectral projection-valued measure $E_A$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]). Put
$$A_H(t):=U(t)^{*}AU(t)=U(-t)AU(t)\qquad(t\in\mathbb R).$$
Then:

(a) **The Heisenberg representative is an assigned sharp observable.** For every $t$, $A_H(t)$ is bounded and self-adjoint with $\|A_H(t)\|=\|A\|$ and spectrum $\sigma(A_H(t))=\sigma(A)$, and its spectral projection-valued measure is
$$E_{A_H(t)}(B)=U(-t)E_A(B)U(t)\qquad(B\subseteq\mathbb R\ \text{Borel});$$
with the declared unit $u_A$ it is again a bounded assigned sharp observable of the framework, and $A_H(0)=A$.

(b) **The two pictures assign the same laws.** For every preparation $\rho$ ([[def-nrqm-state-geometry-framework-state-space]]), every Borel set $B\subseteq\mathbb R$ and every $t$,
$$\mu^{A}_{\rho(t)}(B)=\mu^{A_H(t)}_{\rho(0)}(B),$$
where $\mu^{\cdot}_{\cdot}$ is the outcome law of [[def-nrqm-observables-framework-observable-and-outcome-law]] and $\rho(t)=U(t)\rho(0)U(t)^{*}$; for the pure preparation of a unit vector $\psi$ this reads $\|E_A(B)U(t)\psi\|^{2}=\|E_{A_H(t)}(B)\psi\|^{2}$. In particular the expectation value of the bounded observable agrees, $\operatorname{tr}\bigl(\rho(t)A\bigr)=\operatorname{tr}\bigl(\rho(0)A_H(t)\bigr)$.

(c) **Heisenberg equation.** If $A\,D(H_{\mathrm{op}})\subseteq D(H_{\mathrm{op}})$, then for every $x\in D(H_{\mathrm{op}})$ the curve $t\mapsto A_H(t)x$ is differentiable at every $t$ and
$$i\hbar\,\frac{d}{dt}A_H(t)x=\bigl[A_H(t),H_{\mathrm{op}}\bigr]x=\bigl(A_H(t)H_{\mathrm{op}}-H_{\mathrm{op}}A_H(t)\bigr)x .$$

(d) **Energy-compatible observables are frozen.** If $A$ is compatible with the energy, that is $E_A(B)E_H(C)=E_H(C)E_A(B)$ for all Borel $B,C$ ([[def-nrqm-autonomous-dynamics-framework-evolution]] clause (f)), then $A_H(t)=A$ for every $t$, and by (b) the outcome law of $(A,u_A)$ is the same in $\rho(t)$ as in $\rho(0)$ for every preparation.

(e) **Status.** Clauses (a)-(d) are conditional consequences of P1, P2 and P4 and the cited mathematics. They introduce no new physical assumption, no measurement or apparatus model, no collapse, no driven or open dynamics; they make no claim about which laboratory quantity realizes $(A,u_A)$ and record no empirical result.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P4; the Axiom of Countable Choice and the Axiom of Choice; the assigned energy observable $(H_{\mathrm{op}},u_H)$ with flow $U(t)$; a bounded self-adjoint $A\in\mathcal B(H)$ with spectral PVM $E_A$; the representatives $A_H(t)=U(t)^{*}AU(t)$; a preparation $\rho$; a Borel set $B$; a vector $x\in D(H_{\mathrm{op}})$; real $t$.

[F1] **Flow and pictures.** $U$ is the strongly continuous unitary flow of P4(ii); the Schroedinger-picture evolutions are $\psi(t)=U(t)\psi(0)$ and $\rho(t)=U(t)\rho(0)U(t)^{*}$, which is a preparation for every $t$; and for every bounded $B_0$ one has $\operatorname{tr}(\rho(t)B_0)=\operatorname{tr}(\rho(0)U(t)^{*}B_0U(t))$ ([[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a) and (d), [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (b) and (c)).

[F2] **Heisenberg flow.** With $T=-H_{\mathrm{op}}/\hbar$, the conjugates $A(t)=U(t)^{*}AU(t)=A_H(t)$ satisfy: $A_H(t)$ bounded with $\|A_H(t)\|=\|A\|$ and $A_H(t)^{*}=A_H(t)$; $E_{A_H(t)}(B)=U(-t)E_A(B)U(t)$ and $\sigma(A_H(t))=\sigma(A)$; if $A D(H_{\mathrm{op}})\subseteq D(H_{\mathrm{op}})$ then $\frac{d}{dt}A_H(t)x=-i[T,A_H(t)]x$ for $x\in D(T)$ ([[lem-nrqm-autonomous-dynamics-heisenberg-flow]] clauses (a), (b), (d)).

[F3] **Conserved spectral laws.** Let $K$ be self-adjoint with PVM $E_K$ and $U(t)=e^{-itK/\hbar}$. If a bounded operator $B_0$ satisfies $B_0E_K(C)=E_K(C)B_0$ for every Borel $C$, then $B_0U(t)=U(t)B_0$ for every $t$; and if a PVM $F$ satisfies $F(S)E_K(C)=E_K(C)F(S)$ for all $S$ in its measurable space and all Borel $C$, then $\operatorname{tr}(U(t)\rho U(t)^{*}F(S))=\operatorname{tr}(\rho F(S))$ for every preparation $\rho$ and all $t,S$ ([[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]] clauses (a) and (b)(ii)).

[F4] **Outcome law.** For an assigned sharp observable $(A_0,u_{A_0})$ with spectral PVM $E_{A_0}$, the outcome law of a preparation $\rho$ is $\mu^{A_0}_{\rho}(B)=\operatorname{tr}(\rho E_{A_0}(B))$, equal to $\|E_{A_0}(B)\psi\|^{2}$ for the pure preparation of a unit $\psi$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F5] **Spectral uniqueness.** A self-adjoint operator has a unique regular PVM representing it, and two bounded self-adjoint operators with the same spectral PVM are equal ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]; for the bounded case the representing integral is $\Phi_E(\mathrm{id})$).



## Proof

**Proof technique:** direct; instantiate the mathematical Heisenberg flow at the generator $T=-H_{\mathrm{op}}/\hbar$, express the outcome law through the trace identity of the Schroedinger-picture theorem, and read the compatibility statement from the conserved-spectral-law theorem.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Representative and conjugation of the law] By [F2], $A_H(t)$ is bounded, self-adjoint and of norm $\|A\|$, with spectral PVM $E_{A_H(t)}(B)=U(-t)E_A(B)U(t)$ and $\sigma(A_H(t))=\sigma(A)$, and $A_H(0)=U(0)^{*}AU(0)=A$; with the declared unit $u_A$ it is an assigned sharp observable in the sense of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a). This is (a). [given, F2]

2.1 [Equality of laws] Let $\rho$ be a preparation. By [F4] and [F1], $\mu^{A}_{\rho(t)}(B)=\operatorname{tr}\bigl(\rho(t)E_A(B)\bigr)=\operatorname{tr}\bigl(\rho(0)U(t)^{*}E_A(B)U(t)\bigr)$, and by step 1.1 the last expression is $\operatorname{tr}\bigl(\rho(0)E_{A_H(t)}(B)\bigr)$, which equals $\mu^{A_H(t)}_{\rho(0)}(B)$ by [F4]; this is the first display of (b). For the pure preparation of a unit vector $\psi$, the same chain with $\rho=T_{\psi,\psi}$ gives $\|E_A(B)U(t)\psi\|^{2}=\|U(t)E_{A_H(t)}(B)\psi\|^{2}=\|E_{A_H(t)}(B)\psi\|^{2}$, using $E_A(B)U(t)=U(t)E_{A_H(t)}(B)$, which follows from the PVM identity of step 1.1 by multiplying on the left by $U(t)$. [given, step 1.1, F1, F4, algebra]

2.2 [Heisenberg equation] Assume $A\,D(H_{\mathrm{op}})\subseteq D(H_{\mathrm{op}})$ and let $x\in D(H_{\mathrm{op}})=D(T)$ with $T=-H_{\mathrm{op}}/\hbar$. By [F2], $\frac{d}{dt}A_H(t)x=-i[T,A_H(t)]x$; substituting $T=-H_{\mathrm{op}}/\hbar$ gives $\frac{d}{dt}A_H(t)x=\frac{i}{\hbar}\bigl[H_{\mathrm{op}},A_H(t)\bigr]x$, and multiplying by $i\hbar$ gives $i\hbar\frac{d}{dt}A_H(t)x=-\bigl[H_{\mathrm{op}},A_H(t)\bigr]x=\bigl[A_H(t),H_{\mathrm{op}}\bigr]x$, which is the display of (c). [given, step 1.1, F2, algebra]

3.1 [Expectation identity] Taking $B_0=A$ in the trace identity of [F1] and using $A_H(t)=U(t)^{*}AU(t)$ gives $\operatorname{tr}(\rho(t)A)=\operatorname{tr}(\rho(0)A_H(t))$, the last assertion of (b). [given, step 2.1, F1, algebra]

3.2 [Frozen energy-compatible observables] Assume $A$ is energy-compatible. For every Borel $B$, the bounded operator $E_A(B)$ commutes with every $E_H(C)$, so [F3] gives $E_A(B)U(t)=U(t)E_A(B)$ for every $t$. Multiplying on the left by $U(t)^{*}=U(-t)$ gives $E_{A_H(t)}(B)=U(-t)E_A(B)U(t)=E_A(B)$ by step 1.1; hence $A_H(t)$ and $A$ have the same spectral PVM and, by [F5], $A_H(t)=A$ for every $t$. With step 2.1 the outcome law of $(A,u_A)$ is therefore the same in $\rho(t)$ as in $\rho(0)$; this is (d). [given, step 1.1, step 2.1, F3, F5, algebra]

4.1 Steps 1.1, 2.1, 3.1, 2.2 and 3.2 prove (a)-(d); clause (e) records the scope. [step 1.1, step 2.1, step 3.1, step 2.2, step 3.2] ∎

## Remarks

- **The two pictures are not two theories.** Step 2.1 is an identity between outcome laws, not a derivation of one picture from the other; the Schroedinger picture and the Heisenberg picture are two ways of computing the same numbers $\mu^{A}_{\rho(t)}(B)$.
- **Domain hypothesis in the equation of motion.** The hypothesis $A\,D(H_{\mathrm{op}})\subseteq D(H_{\mathrm{op}})$ in (c) is exactly what makes the differentiated products defined; the position, momentum and other unbounded quantities of later pages are not bounded observables and are not covered by this theorem.

