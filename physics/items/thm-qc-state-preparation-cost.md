---
id: thm-qc-state-preparation-cost
kind: theorem
title: QC24 Explicit State-Preparation Cost Guarantee
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qc-state-preparation-cost-model
  - alg-qc-state-preparation
  - thm-qc-state-preparation-rotation-level-upper-bound
justified_by: []
proof_strategy: direct
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
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Statement

For an integer $n\ge0$, $D=2^n$, and target amplitudes supplied by the explicit normalized amplitude-table model of [[def-qc-state-preparation-cost-model]], [[alg-qc-state-preparation]] reads the dense table and produces an exact target ray using at most $D-1$ variable-control rotations and at most $D$ phases. The local clean Toffoli ladder yields $O((n+1)D)$ bounded-arity gates and serial depth using at most $\max\{n-1,0\}$ clean work bits in addition to the data register. If an integer $b\ge1$ specifies a dense fixed-width table with $b$ bits for each real and imaginary coordinate that decodes exactly to the input amplitudes, it contains $2Db=\Theta(Db)$ input bits; this procedure's explicit full-table preprocessing scan reads those bits. The statement assumes neither QRAM nor exact arbitrary-angle implementation in a fixed finite gate alphabet. It gives no uniform bit-time bound.

## Facts & Assumptions

**Given:** The declared cost model, a valid dense table with $D=2^n$ entries, and its fixed-width encoding when a bit representation is specified.

[F1] The model separates table length and classical preprocessing from continuous or finite-alphabet gates, width, ancillas and error metric; an encoding with $b$ bits per real/imaginary coordinate has $2Db$ bits when it decodes exactly to the table ([[def-qc-state-preparation-cost-model]]).

[F2] The exact procedure reads an explicit table, computes all prefix norms and phases, and uses the specified bounded-arity flag construction ([[alg-qc-state-preparation]]).

[F3] The exact target ray is prepared using at most $D-1$ prefix rotations and at most $D$ leaf phases, with $O((n+1)D)$ bounded-arity gates and serial depth and at most $\max\{n-1,0\}$ clean work bits ([[thm-qc-state-preparation-rotation-level-upper-bound]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 By [F2] the table is a finite explicit classical input, and by [F3] its prefix procedure prepares the target ray. There are $\sum_{l<n}2^l=D-1$ prefix nodes before zero-norm branches are skipped, so the circuit uses at most $D-1$ rotations; there are at most $D$ leaf phases. The same theorem supplies the bounded-arity gate, serial-depth and workspace counts. [F2, F3, algebra]

1.2 If the exact table is supplied in the fixed-width encoding of [F1], each of $D$ entries contains $b$ bits for its real coordinate and $b$ for its imaginary coordinate, with no per-entry index because the order is fixed. The procedure reads each encoded coordinate in its full-table preprocessing scan to form subtree norms and phases, so it reads exactly $2Db$ input bits in this bit-read model. This is an input and preprocessing charge separate from coherent gate cost; no alternate oracle or compressed-input lower bound is asserted. [F1, F2, algebra]

2.1 The gate construction uses continuous-angle operations under ideal exact arithmetic. A fixed finite alphabet only supplies the separate approximation claim once its compiler hypotheses are verified; the present exact gate-count statement makes no arbitrary-angle finite-set or uniform Turing-time claim. [F1, F2] ∎
