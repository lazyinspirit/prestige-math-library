---
id: thm-qc-quantum-distance-detects-low-weight-errors
kind: theorem
title: Every operator below the quantum code distance is detectable
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [def-qc-quantum-code-distance-and-error-detection, lem-qc-detectability-is-linear-and-encoding-invariant]
justified_by: []
proof_strategy: direct
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
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1, 36.3, and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

For a finite-register quantum code of distance $d$, every operator $E$ with $\operatorname{wt}(E)<d$ is detectable: $PEP=\lambda_E P$ for some $\lambda_E\in\mathbb C$. No correction-map conclusion is asserted.

## Facts & Assumptions

**Given:** A quantum code with projector $P$, distance $d$, and an operator $E$ on its physical register satisfying $\operatorname{wt}(E)<d$.

[L1] [[def-qc-quantum-code-distance-and-error-detection]]: For logical dimension at least two, $d$ is the minimum weight of a non-detectable operator; for logical dimension one, $d=n+1$.

[L2] [[lem-qc-detectability-is-linear-and-encoding-invariant]]: In logical dimension one every operator is detectable; otherwise the defining minimum exists.

## Proof


1.1 If the logical dimension is one, [L2] directly gives detectability. [L2, given]

2.1 If the logical dimension is at least two and $E$ were non-detectable, [L1] would imply $\operatorname{wt}(E)\ge d$, contradicting the hypothesis. Therefore $E$ is detectable. This proves only the compression identity $PEP=\lambda_E P$, not existence of a recovery map. [L1, given] ∎

## Remarks

Correction of a family of errors requires additional product conditions and is deferred to the QC19 Knill–Laflamme and recovery page.
