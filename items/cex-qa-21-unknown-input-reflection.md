---
id: cex-qa-21-unknown-input-reflection
kind: counterexample
title: A preserved unknown state cannot program its own reflection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-reflection
  - def-qa-21-oblivious-reflection
  - thm-qc-reflection-unitary-involution
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-dirac-notation-conversion
  - thm-qc-rank-one-reflection-phase-and-control-sign
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - lem-qc-linear-isometry-preserves-inner-products
justified_by: []
generation:
  role: counterexample
proof_strategy: contradiction
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.22)–(28.25), printed p.142: reflections are operations supplied by explicit access; the impossibility claim is proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Printed pp.74–76: oblivious amplification uses a declared reflection; the preserved-program contradiction is proved locally."
---

## Statement

Let $P$ and $T$ be qubit registers. There is no fixed unitary $U$ on $P\otimes T$
that, for every unit program vector $|\psi\rangle\in P$ and target vector
$|\phi\rangle\in T$, implements
$$U(|\psi\rangle\otimes|\phi\rangle)=|\psi\rangle\otimes(I-2|\psi\rangle\langle\psi|)|\phi\rangle,$$
while preserving the program register. This only rules out that exact
program-state interface; it does not rule out a declared circuit for a known
reflection or a separate oracle interface.

## Facts & Assumptions

**Given:** The two-dimensional register with ordered orthonormal basis
$|0\rangle,|1\rangle$ and the reflection convention
$S_\psi=I-2|\psi\rangle\langle\psi|$.

[F1] [[def-qc-register-and-computational-basis]] and
[[thm-qc-computational-basis-orthonormal]]: $|0\rangle,|1\rangle$ are an
orthonormal basis of the qubit register.

[F2] [[def-qc-dirac-notation-conversion]]: $|\psi\rangle\langle\psi|$ sends
$z$ to $\langle z,\psi\rangle_{\rm root}\psi$;
[[thm-qc-rank-one-reflection-phase-and-control-sign]] proves that for unit
$\psi$ it is an orthogonal rank-one projector.

[F3] [[def-qc-reflection]] and
[[thm-qc-reflection-unitary-involution]]: $S_\psi=I-2|\psi\rangle\langle\psi|$
is unitary.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]] and
[[lem-qc-linear-isometry-preserves-inner-products]]: every unitary preserves
inner products.

[F5] [[def-qc-tensor-register-and-permutation]]: the product inner product
satisfies $\langle x\otimes y,x'\otimes y'\rangle=
\langle x,x'\rangle\langle y,y'\rangle$.

[F6] [[def-qa-21-oblivious-reflection]]: the reflection and its controlled form
are declared access operations; a state or matrix description alone supplies
neither call.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Assume for contradiction that such a unitary $U$ exists as the one fixed implementation replacing the explicitly declared reflection access of [F6]. Compare the unit inputs $|0\rangle_P\otimes|0\rangle_T$ and $|+\rangle_P\otimes|0\rangle_T$, where $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$. Their inner product is $1/\sqrt2$ by [F1] and [F5]. [given, F1, F5, F6, assume-contra, construct, algebra]

2.1 The required output for the first input is $-|0\rangle_P\otimes|0\rangle_T$, since $S_0|0\rangle=-|0\rangle$. For the second, $2|+\rangle\langle+|0\rangle=|0\rangle+|1\rangle$, so $S_+|0\rangle=-|1\rangle$ and the output is $-|+\rangle_P\otimes|1\rangle_T$. These computations use [F2]–[F3]. [given, F2, F3, step 1.1, algebra]

3.1 The two required outputs have inner product zero because $\langle0|1\rangle=0$ on $T$, by [F1] and [F5]. But [F4] says $U$ preserves the input inner product $1/\sqrt2$. This contradiction proves that no such fixed unitary exists. [F1, F4, F5, step 1.1, step 2.1, discharge-contradiction] ∎
