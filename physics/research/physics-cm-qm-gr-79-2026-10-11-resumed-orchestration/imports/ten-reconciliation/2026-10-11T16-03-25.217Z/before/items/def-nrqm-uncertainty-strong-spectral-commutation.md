---
id: def-nrqm-uncertainty-strong-spectral-commutation
aliases: [nrqm-uncertainty-strong-spectral-commutation]
kind: definition
domain: mathematics
title: "Strong spectral commutation of self-adjoint operators"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-borel-sigma-algebra, def-countable-choice, def-hilbert-space, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3, printed pages 87-100 (PDF pages 99-112): projection-valued measures, the spectral theorem and the functional calculus of a self-adjoint operator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Sections 7-8, printed pages 16-19: simultaneous diagonalization of commuting Hermitian operators and complete sets of commuting observables"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Setting.** Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]), the choice hypotheses of
the spectral theorem. Let $H$ be a nonzero complex Hilbert space
([[def-hilbert-space]]) and let $A$ and $B$ be self-adjoint operators on $H$
with domains $D(A)$ and $D(B)$
([[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). By the spectral
theorem each of them has a unique spectral projection-valued measure on the
Borel sigma-algebra of $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]], [[def-borel-sigma-algebra]]); write $E_{A}$
for the spectral projection-valued measure of $A$ and $E_{B}$ for that of $B$.

**(b) Strong spectral commutation.** The operators $A$ and $B$ **strongly
commute**, or are **spectrally compatible**, when their spectral
projection-valued measures commute on every pair of Borel sets:
$$E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)\qquad\text{for all Borel }\Lambda,\Sigma\subseteq\mathbb R .$$
This is the relation that the term "compatible sharp observables" abbreviates
on the physical pages of the category. It is a condition on the two families
of projections, not on a single vector or on a formal difference of operator
products.

**(c) Not to be confused with a commutator identity on a core.** Let $D$ be a
linear subspace of $D(A)\cap D(B)$ with $A D\subseteq D$, $B D\subseteq D$. The
formal identity $ABu-BAu=0$ for every $u\in D$ is a different condition: it
constrains the two products on $D$ only, whereas clause (b) constrains the
spectral projections of $A$ and $B$ on all of $H$. The two conditions coincide
for bounded everywhere-defined self-adjoint operators, but for unbounded
operators neither one implies the other in general; a pair of self-adjoint
extensions of one symmetric operator whose difference is invisible on a dense
core is a standard witness. Clause (b), not the core identity, is the relation
that governs joint sharp outcomes and the vanishing of suitably formed
products; the examples page of the category records a domain-sensitive
counterexample.

**(d) Status.** Clauses (a)-(c) fix a definition and a comparison of
conditions. They assert no physical claim, no joint measurement, no
simultaneous sharp value and no dynamical statement. All further content about
strong spectral commutation used by the category -- the bounded-calculus
consequences, the joint projection-valued measure criterion and the physical
readings -- is established as separate results with their own hypotheses.

## Remarks

- **Why projections and not commutators.** For unbounded $A$ and $B$ the
  products $AB$ and $BA$ may be defined on different domains, so the
  expression $AB-BA$ need not be an operator at all; the spectral projections
  $E_{A}(\Lambda)$ and $E_{B}(\Sigma)$ are bounded everywhere-defined
  projections, so their products are always defined and clause (b) makes
  literal sense. This is why the definition is stated at the level of the
  projection-valued measures.
- **Symmetric role of the two operators.** Clause (b) is manifestly symmetric
  in $A$ and $B$; the notation $E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)$
  is a single condition on each pair of Borel sets, not two conditions.
