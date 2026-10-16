---
id: def-qa-finite-branch-output-law
kind: definition
title: "Normalized output law for finite quantum query branches"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-promise-computation-model
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-conditional-state-is-density
  - def-qc-density-operator
  - def-non-negative-and-positive-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-finite-dimensional-isometry-characterisations
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - thm-qc-unit-vector-projector-is-density
  - lem-finite-sum-reindexing-and-fubini
  - thm-induction-principle
justified_by: []
proof_strategy: induction
axiom_use: "No Choice; only finite sums, finite histories, and natural-number induction are used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Fix an encoded input $x$ and a finite rooted execution tree on the same declared finite register $H_n$ at every node. Its root state is the density operator of the standard input basis state with zero-initialized work registers. Every nonterminal node is either a unitary endomorphism $U:H_n\to H_n$ or a finite instrument $(\mathcal I_a)_{a\in\Omega_h}$ whose branch maps are from $\mathcal L(H_n)$ to $\mathcal L(H_n)$. The observed outcome label $a$ is retained for classical feed-forward, while a hidden Kraus label is not a branch. The tree has finite depth and finite outcome sets.

Assign the root weight $w(\varnothing)=1$. At a unitary edge set $\rho_{h'}=U\rho_hU^\dagger$ and $w(h')=w(h)$. At an instrument node set $q_{h,a}=\operatorname{tr}(\mathcal I_a(\rho_h))$ and $w(ha)=w(h)q_{h,a}$. If $q_{h,a}>0$, set $\rho_{ha}=\mathcal I_a(\rho_h)/q_{h,a}$; if $q_{h,a}=0$, that child and its descendants have weight zero and contribute no state or output weight. The instrument and conditional-state conventions are those of [[def-qc-instrument-and-conditional-state]].

At each positive-weight leaf $\ell$, the ordered output wires have a fixed length $m$ and are disjoint from the remaining wires $W_\ell$. For $z\in\{0,1\}^m$ and a bit string $v$ on $W_\ell$, let $e_{\ell,z,v}$ be the full-register computational-basis vector with those bits in their declared wire positions. Define the leaf output weight and total output law by
$$q_\ell(z):=\sum_{v\in\{0,1\}^{|W_\ell|}}\langle \rho_\ell e_{\ell,z,v},e_{\ell,z,v}\rangle_{\rm root},\qquad P(z\mid x):=\sum_{\ell\text{ positive-weight leaf}}w(\ell)q_\ell(z).$$
The classical output predicate $A_n(x,z)$ selects the acceptance event by summing $P(z\mid x)$ over the finite set of accepted strings. This definition extends the terminal-output convention of [[def-qc-promise-computation-model]] to finite instrument branches; the verification proves that $P(\cdot\mid x)$ is a normalized probability law and every acceptance probability lies in $[0,1]$.

## Facts & Assumptions

**Given:** The finite execution tree, its specified unitary and instrument nodes, standard basis-state input and zero work registers, and its ordered output-wire tuple and total classical predicate.

[A1] The tree has finite depth and finitely many nodes on the fixed register $H_n$; each unitary edge is an explicitly declared unitary endomorphism, each measurement node is a finite instrument on $H_n$ with observed outcomes as above, and terminal output wires partition the complete ordered register together with the remaining wires.

[F1] [[def-qc-promise-computation-model]]: the standard input is a computational-basis vector with zero-initialized auxiliary wires, and the computation specifies an ordered output-wire tuple and a total output predicate.

[F2] [[def-qc-instrument-and-conditional-state]]: each observed-outcome branch is a completely positive map, the branch traces sum to the input trace, and a positive-probability conditional state is the branch output divided by its probability.

[F3] [[thm-qc-instrument-outcome-law-normalizes]]: for a density input, finite instrument branch weights are nonnegative and sum to one.

[F4] [[thm-qc-instrument-conditional-state-is-density]]: every positive-probability instrument branch has a density-operator conditional state.

[F5] [[def-qc-density-operator]] and [[def-non-negative-and-positive-operator]]: a density operator is self-adjoint, has nonnegative quadratic form, and has trace one.

[F6] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[prop-adjoint-algebra]]: adjoints are characterized by the inner-product identity and reverse the order of composition.

[F7] [[def-linear-isometry-and-orthogonal-or-unitary-operator]] and [[thm-finite-dimensional-isometry-characterisations]]: a finite-dimensional unitary endomorphism is a norm-preserving map and satisfies $U^\dagger U=I$.

[F8] [[thm-trace-of-ab-equals-trace-of-ba]] and [[def-trace-of-an-endomorphism]]: compatible finite-dimensional products have cyclic trace, and trace is the sum of diagonal entries in any basis.

[F9] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: each register has its declared ordered orthonormal computational basis, with the zero-qubit register one-dimensional.

[F10] [[lem-qc-tensor-product-basis-and-dimension]]: ordered product-basis vectors form an orthonormal basis of the full finite register.

[F11] [[thm-qc-unit-vector-projector-is-density]]: the rank-one projector of every unit vector is a density operator.

[F12] [[def-qc-circuit-syntax-and-register-order]] and [[def-qc-circuit-denotational-semantics]]: finite ordered gate layers on declared wires denote a unitary in their stated chronological order.

[F13] [[lem-finite-sum-reindexing-and-fubini]]: finite sums over products of finite index sets can be interchanged.

[F14] [[thm-induction-principle]]: a property holding at zero and preserved at each successor stage holds at every natural-number stage.

## Verification

1.1 The standard input register vector and zero-work-register vector are supplied by [F1]; they are computational-basis vectors and hence unit vectors by [F9]–[F10]. Their combined basis vector is unit by the same orthonormal product-basis fact. Its rank-one projector is a density operator by [F11], so the root state has trace one and is nonnegative. [given, F1, F9, F10, F11]

1.2 If $\rho$ is a density operator and $U$ is a unitary endomorphism node, then [F12] supplies the unitary denotation for circuit blocks; any other unitary edge is explicit in [A1]. The operator $U\rho U^\dagger$ is self-adjoint by [F6] and $\rho^\dagger=\rho$. For every $v$, the adjoint identity gives $\langle U\rho U^\dagger v,v\rangle=\langle\rho U^\dagger v,U^\dagger v\rangle\ge0$. Cyclicity and [F7] give $\operatorname{tr}(U\rho U^\dagger)=\operatorname{tr}(\rho U^\dagger U)=\operatorname{tr}(\rho)=1$. Thus the successor state is a density operator and the edge preserves its branch weight. [A1, F5, F6, F7, F8, F12, algebra]

1.3 At an instrument node with density input $\rho_h$, [F3] gives $q_{h,a}\ge0$ and $\sum_aq_{h,a}=1$. If $q_{h,a}>0$, [F4] gives a density operator at that child; if $q_{h,a}=0$, the child weight is zero and no conditional state is used. Therefore the sum of child weights is $w(h)\sum_aq_{h,a}=w(h)$. [F2, F3, F4, algebra]

2.1 At depth zero the frontier consists only of the root, whose weight is one and whose state is a density operator by step 1.1. Assume the same assertions for a finite frontier. At each live unitary node, step 1.2 preserves the state property and weight; at each instrument node, step 1.3 gives density states on positive children and preserves the sum of child weights. For the induction, carry an already-terminal positive-weight node forward along a single identity-unitary edge, retaining its state and weight; carry a zero-weight terminal node forward at weight zero without assigning a state. These padding edges add no outcome branch. Summing over the finite frontier by [F13] shows that the next frontier again has total weight one and a density state at every positive-weight node. [A1, step 1.1, step 1.2, step 1.3, F13, base, ih]

3.1 Let $D$ be the maximum depth of the original tree. Repeating the extension from step 2.1 carries each earlier positive-weight leaf to depth $D$ without changing its state, weight, or assigned output wires; zero-weight leaves remain weight zero and have no assigned state. The base and successor cases are those in step 2.1, so induction [F14] reaches this common frontier. Therefore the original positive-weight leaves have total weight one and density-operator states. [A1, step 2.1, F14, discharge-induction: step 2.1]

4.1 At a positive-weight leaf, each pair $(z,v)$ specifies exactly one full computational-basis word because the output-wire tuple has distinct indices and $W_\ell$ is its complement. Conversely every full word has exactly one such pair. Thus [F9]–[F10] make the vectors $e_{\ell,z,v}$ a complete orthonormal basis. Each $\langle\rho_\ell e_{\ell,z,v},e_{\ell,z,v}\rangle$ is nonnegative by [F5], and their finite sum over $(z,v)$ is $\operatorname{tr}(\rho_\ell)=1$ by [F8]. Therefore $q_\ell(z)\ge0$ and $\sum_zq_\ell(z)=1$, including the empty-output or empty-work-register cases. [A1, F5, F8, F9, F10, step 3.1]

5.1 Summing the definition of $P(z\mid x)$ over all output strings and interchanging its finite leaf and output sums by [F13] gives $\sum_zP(z\mid x)=\sum_\ell w(\ell)\sum_zq_\ell(z)=\sum_\ell w(\ell)=1$ by steps 3.1 and 4.1. Each term is nonnegative, so any predicate-selected subset has probability between zero and one. The terminal marginal is normalized directly by the basis-and-trace calculation in step 4.1; instrument branch normalization and conditional-state density use [F3] and [F4] in step 1.3. [F13, step 3.1, step 4.1, algebra, discharge-induction: step 2.1] ∎
