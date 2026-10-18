---
id: thm-qc-tqc-toric-recovery
kind: theorem
title: Toric code corrects Pauli errors below half the distance
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-qc-tqc-toric-distance
  - thm-qc-tqc-toric-code-dimension
  - thm-qc-stabilizer-distance-detection-and-correction
justified_by: []
proof_strategy: direct
axiom_use: "None; the recovery theorem applies to a finite-dimensional stabilizer code."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $t\in\mathbb Z_{\ge0}$ satisfy $2t<L$. Every finite Pauli error channel
whose Kraus operators lie in the span of Pauli operators of weight at most
$t$ has an exact recovery on the periodic $L\times L$ toric code. In
particular, every unknown Pauli error of weight at most $t$ is exactly
correctable.

## Facts & Assumptions

**Given:** The periodic toric code on $n=2L^2$ qubits and an integer $t\ge0$ with $2t<L$.

[F1] [[thm-qc-tqc-toric-distance]]: the code has stabilizer distance $d(S)=L$.

[F2] [[thm-qc-stabilizer-distance-detection-and-correction]]: a finite stabilizer error channel with Kraus operators in the span of Paulis of weight at most $t$ has an exact recovery whenever $2t<d(S)$.

[F3] [[thm-qc-tqc-toric-code-dimension]]: the toric code is a nonzero finite-dimensional stabilizer code.

## Proof

1.1 By [F3], the common toric code space is nonzero and finite-dimensional; it is the stabilizer code defined by the commuting toric checks. [given, F3]

2.1 By [F1], its distance is $d(S)=L$. The hypothesis $2t<L$ is therefore exactly the strict condition $2t<d(S)$ in [F2]. Applying [F2] gives one finite exact recovery for every error channel in the stated Pauli span, and hence for each Pauli error of weight at most $t$. No circuit-level noisy procedure or hardware threshold is asserted. [given, F1, F2, step 1.1, algebra] ∎

