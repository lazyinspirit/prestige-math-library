---
id: lem-qa-16-query-unitary-normal-form
kind: lemma
title: Unitary normal form for finite bit-query algorithms without extra queries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-quantum-query-algorithm
  - def-qa-standard-bit-query
  - thm-qc-deferred-measurement
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For any finite-input standard XOR bit-query algorithm in the ordinary oracle-only model, using at most T queries on every branch, there is an algorithm with the same output probabilities whose evolution consists of an input-independent initial state, input-independent unitaries between exactly T unconditional calls to O_x, and a final measurement. It uses no controlled access to O_x and no more than T oracle calls.

## Facts & Assumptions

**Given:** A finite standard bit-query algorithm in the ordinary oracle-only model, with worst-branch query count at most T.



[F1] [[def-qa-quantum-query-algorithm]]: in the ordinary oracle-only model, the zero-initialized root and every preparation/nonoracle operation are input-independent, and a T-query algorithm has at most T designated oracle calls on each branch; preparation and other operations retain their separate charges.

[F2] [[thm-qc-deferred-measurement]]: finite instruments have coherent unitary dilations with retained outcome records, preserving their branch maps even on entangled data. Newly used dilation and block operations must be accounted for in the chosen model; this denotational theorem asserts no cost bound.

[F3] [[def-qa-standard-bit-query]]: O_x|i,b,w⟩=|i,b⊕x_i,w⟩ and O_x^2=I.

[F4] [[def-qc-register-and-computational-basis]]: each finite register has an ordered computational basis, and tensor factors may be enlarged by finite work registers.

[F5] [[thm-qc-computational-basis-orthonormal]]: distinct computational-basis labels are orthogonal.

## Proof

1.1 The root state and all nonoracle instruments are input-independent by [F1]. Apply [F2] to those instruments only, retaining their observed outcomes and hidden dilation registers. Each dilation and each block control of a known nonoracle operation is then an input-independent unitary on finitely enlarged registers, allowed as a nonoracle operation in this query model; their gate and preparation costs are separate from oracle count. Retaining the orthogonal histories [F5] and using [F2] with the remaining registers as reference preserves the original branch output law. No oracle operation is dilated or replaced by an assumed controlled oracle. [given, F1, F2, F4, F5, construct]

2.1 Synchronize the finite execution tree by query number: before slot q, run each retained history's nonoracle segment until its qth query or termination, keeping terminated histories unchanged. These finite controlled segments are input-independent unitaries by step 1.1. At the slot, an active history presents its address and response to the query wires. On an inactive history, controlled swaps instead present a scratch address i_0 chosen as the first computational-basis label (the empty word for a zero-qubit address register) and a scratch target |+⟩=(|0⟩+|1⟩)/√2, preserving the algorithm registers. This address exists because the address register has positive dimension by [F4]. Apply one unconditional O_x and undo the routing swaps. Since X^{x_i}|+⟩=|+⟩ for every i, this acts identically on inactive histories and as the prescribed query on active ones, including their coherent superpositions. [given, F1, F3, F4, step 1.1, construct, algebra]

3.1 Use slots q=1,…,T, then execute the final nonoracle segments and read the retained output records. Each slot contains exactly one unconditional oracle call by step 2.1, and step 1.1 adds none, so the total is exactly T, including zero when T=0. Histories with fewer queries are padded by inactive slots. Induction over the slots preserves each branch map and hence the final output law. All remaining operations and the initial state are input-independent; no controlled access to an unknown O_x or gate-efficiency bound is assumed. [given, F1, step 1.1, step 2.1, F3, algebra] ∎
