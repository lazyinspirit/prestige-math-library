---
id: pthm-nrqm-uncertainty-position-momentum-incompatible
aliases: [ nrqm-uncertainty-position-momentum-incompatible ]
kind: physics-theorem
domain: physics
title: "Position and momentum of the massive model have no joint sharp observable"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-uncertainty-strong-spectral-commutation,
    def-projection-valued-measure,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law: physical-result
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The incompatibility of the j-th position and j-th momentum of
  the massive spin-s particle model: their spectral projection-valued measures
  do not commute, so the pair possesses no joint sharp observable with the two
  spectral measures as marginals. The statement is a conditional consequence of
  P2, P5 and P6 and the cited mathematics; it asserts no approximate joint
  measurement, no apparatus, no error-disturbance relation and no empirical
  result, and it concerns the model's assigned sharp observables only."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4,
        printed pages 81-84 (PDF pages 84-87): the canonical commutation
        relation, the shared-eigenfunction claim for commuting operators and its
        non-degeneracy caveat, and the physical reading of simultaneous values"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Sections 7-8,
        printed pages 16-19: simultaneous diagonalization of commuting Hermitian
        operators"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 8.1, printed pages 173-175 (PDF pages 185-187): the momentum
        operator as the generator of translations and the algebraic
        position-momentum calculus"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the observable and probability postulate P2, the kinematics and
massive-particle model postulate P5 and the internal-factor assignment P6, read
for the spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$ and spin label $s$
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix a coordinate index $j$. Then:

(a) the spectral projection-valued measures $E_{Q_{j}}$ and $E_{P_{j}}$ of the
model's $j$-th position and $j$-th momentum do not strongly commute: there are
Borel sets $\Lambda,\Sigma\subseteq\mathbb R$ with
$E_{Q_{j}}(\Lambda)E_{P_{j}}(\Sigma)\ne E_{P_{j}}(\Sigma)E_{Q_{j}}(\Lambda)$;

(b) consequently the pair $(Q_{j},P_{j})$ is not compatible: there is no regular
projection-valued measure $H$ on the Borel sets of $\mathbb R^{2}$ whose
marginals are $E_{Q_{j}}$ and $E_{P_{j}}$, and in particular the framework
assigns to the pair no joint sharp outcome law in any preparation;

(c) **Scope.** The statement is conditional on P2, P5, P6 and the cited
mathematics and concerns the model's assigned sharp operators only. It does
not assert that no approximate or unsharp joint measurement exists, gives no
error-disturbance relation, and records no apparatus or empirical result.

## Facts & Assumptions

**Given:** The postulates P2, P5, P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the model operators $Q_{j},P_{j}$ with their maximal domains; real $t\ne0$; a nonzero class $\psi\in D(Q_{j})$.

[F1] **Model operators and translations.** $Q_{j}$ and $P_{j}$ are self-adjoint with the maximal componentwise domains $D(Q_{j})=\{f:x_{j}f_{l}\in L^{2}\ \forall l\}$ and $D(P_{j})=\{f:D_{j}f_{l}\in L^{2}\ \forall l\}$, and the componentwise translation $T_{te_{j}}f=f(\cdot-te_{j})$ satisfies $T_{te_{j}}D(Q_{j})=D(Q_{j})$, $T_{te_{j}}Q_{j}T_{te_{j}}^{-1}=Q_{j}-tI$ and $T_{te_{j}}=\exp\bigl(-\tfrac{i}{\hbar}tP_{j}\bigr)$, the exponential being the spectral-calculus flow of $P_{j}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a), (c) and (d); [[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (b)).

[F2] **Bounded Borel calculus.** If two self-adjoint operators $A,B$ have strongly commuting spectral projection-valued measures, then for every bounded Borel $f$ one has $f(B)D(A)\subseteq D(A)$ and $Af(B)x=f(B)Ax$ for every $x\in D(A)$ ([[lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]] clause (b)).

[F3] **Joint sharp observable criterion.** A pair of assigned sharp observables is compatible -- possesses a regular projection-valued measure on the Borel sets of $\mathbb R^{2}$ with the two spectral measures as marginals -- exactly when the two spectral projection-valued measures strongly commute ([[pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law]] clause (a); [[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b)).

[F4] **The exponential function.** $\exp\bigl(-\tfrac{i}{\hbar}tp\bigr)$ is a bounded Borel function of $p\in\mathbb R$ with values of modulus $1$, so it is admissible in the bounded Borel functional calculus of a self-adjoint operator ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]).

## Proof

**Proof technique:** suppose the two projection-valued measures commute and use the bounded Borel calculus to make the unitary translation group of the momentum commute with the position operator, contradicting the conjugation identity $TQ_{j}T^{-1}=Q_{j}-tI$.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Supposition and its consequence] Assume for contradiction that $E_{Q_{j}}$ and $E_{P_{j}}$ strongly commute, and fix $t\ne0$. By [F4] the function $f(p)=\exp(-\tfrac{i}{\hbar}tp)$ is bounded Borel, and by [F1] its operator is $f(P_{j})=T_{te_{j}}$. Applying [F2] with $A=Q_{j}$, $B=P_{j}$ gives $T_{te_{j}}D(Q_{j})\subseteq D(Q_{j})$ and $$T_{te_{j}}Q_{j}\eta=Q_{j}T_{te_{j}}\eta\qquad\text{for every }\eta\in D(Q_{j}).$$ [given, assume-contra, F1, F2, F4]

2.1 [The contradiction] Let $\psi\in D(Q_{j})$ be nonzero, which exists because $D(Q_{j})$ is dense, and put $\eta:=T_{te_{j}}^{-1}\psi$; by the domain invariance of [F1], $\eta\in D(Q_{j})$. The conjugation identity of [F1] gives $$T_{te_{j}}Q_{j}\eta=(Q_{j}-tI)T_{te_{j}}\eta=(Q_{j}-tI)\psi,$$ while step 1.1 gives $T_{te_{j}}Q_{j}\eta=Q_{j}T_{te_{j}}\eta=Q_{j}\psi$. Hence $(Q_{j}-tI)\psi=Q_{j}\psi$, that is $t\psi=0$, which contradicts $\psi\ne0$ and $t\ne0$. Therefore $E_{Q_{j}}$ and $E_{P_{j}}$ do not strongly commute, and there are Borel sets on which the two projections fail to commute. This proves (a). [given, step 1.1, F1, algebra]

3.1 [No joint sharp observable] By [F3] a pair of assigned sharp observables is compatible exactly when its spectral projection-valued measures strongly commute; by step 2.1 this fails for $(Q_{j},P_{j})$, so no regular projection-valued measure on $\mathcal B(\mathbb R^{2})$ has $E_{Q_{j}}$ and $E_{P_{j}}$ as marginals, and no joint sharp outcome law of the pair is assigned by the framework to any preparation. This proves (b); the scope statement (c) records that no approximate or unsharp joint measurement, error-disturbance relation, apparatus model or empirical result is asserted by steps 1.1-2.1. [given, step 2.1, F3, discharge-contradiction] ∎
