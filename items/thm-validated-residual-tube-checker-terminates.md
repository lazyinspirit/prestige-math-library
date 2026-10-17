---
id: thm-validated-residual-tube-checker-terminates
kind: theorem
title: "The rational residual-tube certificate checker terminates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [alg-validated-residual-tube-certificate-checker, def-outward-rounded-interval-and-ball-operations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For every finite input record, [[alg-validated-residual-tube-certificate-checker]] returns `certified` or `inconclusive` after finitely many operations. It performs no unbounded subdivision or search.

## Facts & Assumptions

**Given:** A finite certificate record and the finite checker procedure in [[alg-validated-residual-tube-certificate-checker]].

[F1] [[alg-validated-residual-tube-certificate-checker]]: all loops traverse supplied finite arrays, a finite acyclic DAG, finite panels and finite supplied subdivisions; all arithmetic operations are the finite interval operations of [[def-outward-rounded-interval-and-ball-operations]].

## Proof

1.1 Structural validation traverses finite input arrays and the finite graph. A topological traversal visits each acyclic node finitely often, and the derivative recursion creates a fixed finite number of derivative nodes per source node and coordinate. Therefore the syntax and derivative phases terminate. [given, F1, algebra]

2.1 The numerical phase visits each of finitely many panels and cells and executes a fixed finite list of interval operations per field, reconstruction, derivative, and margin expression. Each interval operation returns either a finite interval or one of its specified statuses in finitely many endpoint operations. Every comparison is rational and finite. The procedure therefore reaches a passing or failed check and returns one of its two statuses. [F1, step 1.1, algebra] ∎
