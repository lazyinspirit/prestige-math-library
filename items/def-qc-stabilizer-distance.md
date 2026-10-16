---
id: def-qc-stabilizer-distance
kind: definition
title: Stabilizer distance
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qc-local-operator-support-and-weight
  - def-qc-stabilizer-syndrome-and-logical-operators
  - thm-qc-stabilizer-logical-pauli-quotient-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; the logical quotient is finite and its minimum exists by well-ordering."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1'
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

Let $n\ge1$ and let $S$ be a stabilizer code on $n$ qubits whose code space has dimension
$2^k$. The stabilizer **distance** is

$$d(S):=\min\{\operatorname{wt}(E):E\in N(S)\setminus Z_nS\}\quad\text{if }k>0.$$

This is a set difference: it excludes scalar-phase multiples of stabilizers.
If $k=0$, define $d(S)=+\infty$, since there is no nontrivial logical Pauli
class.

## Facts & Assumptions

**Given:** A finite stabilizer group $S$ on $n$ qubits, its logical Pauli
quotient, and the quotient weight inherited from Pauli support.

[F1] [[thm-qc-stabilizer-logical-pauli-quotient-dimension]]: when the code
encodes $k$ qubits, $N(S)/(Z_nS)$ has binary dimension $2k$.

[F2] [[def-qc-local-operator-support-and-weight]]: every Pauli has a
well-defined integer weight between $0$ and $n$.

## Verification

1.1 If $k>0$, [F1] gives a quotient of positive dimension, so it contains a nonidentity class. Any representative is a Pauli in the finite group $\mathcal P_n$, and [F2] assigns it an integer weight in $\{0,\ldots,n\}$. Thus the set in the minimum is nonempty and finite, so its minimum exists. [F1, F2, construct]

2.1 If $k=0$, [F1] gives a zero-dimensional binary quotient, hence the quotient is trivial and $N(S)=Z_nS$. Therefore the set difference defining the finite-distance branch is empty, which is why the definition assigns $+\infty$. [F1, algebra] ∎

## Remarks

The weight is the number of physical qubits on which the Pauli is
nonidentity. Scalar phases do not change it. The product set $N(S)S$ is not
the definition of logical nontriviality; the relevant set is
$N(S)\setminus Z_nS$.
