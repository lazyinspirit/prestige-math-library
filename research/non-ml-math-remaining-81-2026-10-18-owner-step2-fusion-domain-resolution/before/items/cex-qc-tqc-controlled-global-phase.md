---
id: cex-qc-tqc-controlled-global-phase
kind: counterexample
title: A controlled braid phase is observable
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-projective-gate-and-metric
  - thm-qc-controlled-global-phase-is-relative-phase
dependency_level: 8
axiom_use: None; the witness is a two-dimensional state and a finite projective measurement.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 1 §1.4, PDF pp. 21–22; controlled-unitary block convention
---

## Statement refuted

A scalar phase that is irrelevant for an uncontrolled fixed-sector braid
remains irrelevant when that braid is coherently controlled.

## Facts & Assumptions

**Given:** A control qubit with basis $|0\rangle,|1\rangle$, the target space
$\mathbb C$, and a control-first controlled-unitary convention.

[F1] The phase-insensitive projective class identifies $I$ and $-I$ on the
one-dimensional target. [[def-qc-tqc-projective-gate-and-metric]]

[F2] A controlled global phase becomes a relative control phase and is
observable by a two-outcome measurement.
[[thm-qc-controlled-global-phase-is-relative-phase]]

## Counterexample

**Given:** The target starts in its unique unit vector, the control starts in
$|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$, and the measurement is in the
$\{|+\rangle,|-\rangle\}$ basis.

1.1 Uncontrolled on $\mathbb C$, the gates $I$ and $-I$ differ by the scalar $-1$, so they have the same projective class by [F1]. [given, F1, algebra]

2.1 The controlled $I$ is the identity, so it leaves the control in $|+\rangle$ and the $+$ outcome has probability $1$. The controlled $-I$ is $\operatorname{diag}(1,-1)$ on the control; it maps $|+\rangle$ to $|-\rangle$, so the same outcome has probability $0$. Thus the controlled outcome laws differ, refuting the statement. [given, F2, step 1.1, algebra] ∎
