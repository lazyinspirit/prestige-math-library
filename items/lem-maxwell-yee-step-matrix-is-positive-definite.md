---
id: lem-maxwell-yee-step-matrix-is-positive-definite
kind: lemma
title: The midpoint-conductivity Yee electric solve is well defined
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-maxwell-discrete-cochain-and-yee-grid]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 3 §3.12, printed pp. 64–72, and Chapter 9 §9.3, printed pp. 246–249: centered-in-time conductivity terms in staggered field updates."
verification:
  precheck: pass
---

## Statement

Let $M_e$ be the positive definite electric mass matrix, let $S$ be the positive semidefinite conductivity matrix, and let $\Delta t>0$. Then $M_e+(\Delta t/2)S$ is symmetric positive definite, hence invertible. Thus each midpoint-conductivity Yee electric row has a unique solution.

## Facts & Assumptions


**Given:** The material matrices and time-step convention of [[def-maxwell-discrete-cochain-and-yee-grid]].

[F1] $M_e$ is symmetric positive definite and $S$ is symmetric positive semidefinite. ([[def-maxwell-discrete-cochain-and-yee-grid]])

## Proof

1.1 The matrix $M_e+(\Delta t/2)S$ is symmetric because both summands are symmetric. For each nonzero $x$, its quadratic form is $x^TM_ex+(\Delta t/2)x^TSx>0+0=0$, using $\Delta t>0$ and the two definiteness hypotheses. Hence it is positive definite. [F1, given, algebra]

2.1 A positive definite square matrix has trivial kernel: if $(M_e+(\Delta t/2)S)x=0$, then its quadratic form at $x$ is zero and step 1.1 forces $x=0$. A linear map from a finite-dimensional space to itself with trivial kernel is bijective, so the solve exists uniquely for every right-hand side. [step 1.1, algebra] ∎
