---
id: thm-qa-21-oblivious-amplification-block-identity
kind: theorem
title: Oblivious-amplification block identity
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-21-one-step-oblivious-amplification
  - def-qa-21-oblivious-reflection
  - thm-qc-reflection-unitary-involution
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - lem-qc-linear-isometry-adjoint-identities
  - thm-qc-isometric-encoding-projector
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: None; the proof is finite operator algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.22)–(28.25), printed p.142: the exact three-use block polynomial."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3 and Exercise 9"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Printed pp.74–76: the oblivious-amplification circuit and its unitary-target condition."
---

## Statement

Let $J:S\to A\otimes S$ be the clean-ancilla isometry $Jx=|0_{\rm anc}\rangle\otimes x$, let $\Pi=JJ^\dagger$ be the orthogonal projection onto its image, and set $R_0=I-2\Pi$. Let $W$ be unitary and assume $J^\dagger WJ=M/2$. For the chronological circuit $WR_0W^\dagger R_0W$,
$$J^\dagger WR_0W^\dagger R_0WJ=-\frac{3}{2}M+\frac12MM^\dagger M.$$
If $M$ is unitary, this projected block is $-M$. The identity alone gives no bound on leakage outside the clean-ancilla subspace for a nonunitary $M$.

## Facts & Assumptions

**Given:** A finite-dimensional system, a unitary $W$, the clean-ancilla isometry $J$, and $J^\dagger WJ=M/2$.

[L1] [[alg-qa-21-one-step-oblivious-amplification]]: the chronological operation is $W$, $R_0$, $W^\dagger$, $R_0$, $W$, and $R_0=I-2\Pi$.

[F1] [[def-qa-21-oblivious-reflection]]: $\Pi$ projects only the full clean coefficient/work ancilla to zero and is identity on the system.

[F2] [[thm-qc-reflection-unitary-involution]]: for an orthogonal projection $\Pi$, $I-2\Pi$ is a unitary involution; the opposite sign is distinct under control.

[F3] [[def-linear-isometry-and-orthogonal-or-unitary-operator]] and [[lem-qc-linear-isometry-adjoint-identities]]: a unitary is a surjective linear isometry, so $W^\dagger W=WW^\dagger=I$; an isometry $J$ satisfies $J^\dagger J=I$.

[F4] [[thm-qc-isometric-encoding-projector]]: $JJ^\dagger$ is the orthogonal projection onto the image of an isometry $J$.

[F5] [[def-qc-register-and-computational-basis]], [[thm-qc-computational-basis-orthonormal]], and [[def-qc-tensor-register-and-permutation]]: the clean basis vector is unit and the product inner product makes $Jx=|0_{\rm anc}\rangle\otimes x$ a linear isometry.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Let $B=J^\dagger WJ=M/2$. By [F3]–[F5], $J^\dagger J=I$ and $\Pi=JJ^\dagger$ is the stated orthogonal projection; hence $J^\dagger\Pi=J^\dagger$ and $\Pi J=J$. By [L1]–[F2], the three-use circuit is the stated unitary circuit with two reflections. [given, L1, F1, F2, F3, F4, F5, algebra]

2.1 Expand $(I-2\Pi)$ twice inside $J^\dagger W(I-2\Pi)W^\dagger(I-2\Pi)WJ$. Since $W$ is unitary, [F3] gives $WW^\dagger=W^\dagger W=I$, and [F4] gives $\Pi^2=\Pi$. The four terms compress to $B-2B-2B+4BB^\dagger B=-3B+4BB^\dagger B$: respectively, use $W^\dagger W=I$, $\Pi J=J$, $J^\dagger\Pi=J^\dagger$, and $\Pi=JJ^\dagger$. Substituting $B=M/2$ gives $-\tfrac32M+\tfrac12MM^\dagger M$. [given, F1, step 1.1, F3, F4, algebra]

3.1 If $M$ is unitary, then $MM^\dagger M=M$, so the block is $-M$. For arbitrary $M$, step 2.1 proves only the compression identity; it contains no estimate for $(I-\Pi)WR_0W^\dagger R_0WJ$. [given, step 2.1, cases] ∎
