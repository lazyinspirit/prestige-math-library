---
id: thm-qc-generic-unitary-cnot-lower-bound
kind: theorem
title: Generic No-Ancilla CNOT Lower Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-elementary-circuit-resources
  - lem-qc-generic-cnot-parameter-count
  - def-countable-choice
  - def-axiom-of-choice
  - lem-axiom-of-choice-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC_omega for normalized Frobenius volume; assume full AC only for the optional identification with normalized Haar measure."
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Vivek V. Shende, Igor L. Markov, and Stephen S. Bullock, Minimal Universal Two-Qubit CNOT-Based Circuits, arXiv:quant-ph/0308033v3"
      url: "https://arxiv.org/pdf/quant-ph/0308033"
---

## Statement

Assume AC$_\omega$ to form normalized Frobenius volume. For $n\ge1$, almost every $n$-qubit unitary with respect to that measure requires at least
$$\left\lceil\frac{4^n-3n-1}{4}\right\rceil$$
CNOT gates in an exact circuit with arbitrary one-qubit gates and no ancillas. Under full AC, normalized Frobenius volume is normalized Haar measure, so the same is a Haar-almost-everywhere bound. This is a generic lower bound and is not a per-unitary assertion.

## Facts & Assumptions

**Given:** AC$_\omega$, fixed $n$, exact matrix equality, no ancillas, and the stated one-qubit/CNOT gate model.

[F1] [[lem-qc-generic-cnot-parameter-count]]: each fixed $m$-CNOT skeleton has a normalized-Frobenius-volume-null image whenever $3n+4m+1<4^n$; under AC this is Haar-null.

[A1] Assume AC$_\omega$ for normalized Frobenius volume; the Haar wording assumes full AC ([[def-countable-choice]], [[def-axiom-of-choice]], [[lem-axiom-of-choice-implies-countable-choice]]).

## Proof


1.1 If $n=1$, the claimed lower bound is $\lceil(4-3-1)/4\rceil=0$ and holds because gate counts are nonnegative. Suppose $n\ge2$ and put $M=\left\lceil(4^n-3n-1)/4\right\rceil$, which is positive. For every integer $m<M$, the ceiling property gives $4m<4^n-3n-1$, hence $3n+4m+1<4^n$. [given, algebra, algebra]

2.1 For fixed $n,m$, only finitely many CNOT skeletons exist: at each of the $m$ positions one chooses an ordered pair of distinct wires from a finite set. By [F1], each skeleton image is null for normalized Frobenius volume; a finite union is null. For $n\ge2$, the finite union over $m=0,\ldots,M-1$ remains null. Under full AC, [A1] and [F1] identify this as a Haar-null union. [step 1.1, F1, A1, algebra]

3.1 For $n\ge2$, outside the null union in step 2.1 no exact circuit with fewer than $M$ CNOTs exists, so almost every unitary needs at least $M$ CNOTs. For $n=1$, step 1.1 proves the zero bound directly. Since a null exceptional set may contain individual unitaries, the conclusion does not assert a positive lower bound for every unitary. [step 1.1, step 2.1, algebra] ∎
