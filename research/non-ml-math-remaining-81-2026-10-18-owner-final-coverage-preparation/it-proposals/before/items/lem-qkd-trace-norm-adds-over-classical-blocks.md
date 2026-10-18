---
id: lem-qkd-trace-norm-adds-over-classical-blocks
kind: lemma
title: Trace norm of a finite classical block operator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-trace-norm
  - thm-qc-trace-norm-spectral-formula
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional spectral decompositions and finite sums.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §2.1
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
---

## Statement

Let $I$ be a finite nonempty set with a fixed ordering, let $H_E$ be a nonzero finite-dimensional complex inner-product space, and let $X_i:H_E\to H_E$ be self-adjoint for each $i\in I$. On the ordered register $\mathbb C^I\otimes H_E$ with the corresponding computational basis, set $X=\sum_{i\in I}|i\rangle\langle i|\otimes X_i$. Then

$$\|X\|_1=\sum_{i\in I}\|X_i\|_1.$$

## Facts & Assumptions

**Given:** The finite set $I$, the finite-dimensional space $H_E$, and the self-adjoint blocks $X_i$ in the Statement.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: each finite-dimensional self-adjoint operator has an orthonormal eigenbasis with real eigenvalues.

[F2] [[thm-qc-trace-norm-spectral-formula]]: the trace norm is the sum of singular values, equivalently $\operatorname{tr}\sqrt{X^\dagger X}$.

[F3] [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]: the key and adversary product basis is orthonormal and uses the displayed factor order.

## Proof

1.1 For each $i\in I$, choose an orthonormal eigenbasis $(e_{i,j})_j$ of $X_i$ from [F1], with eigenvalues $\lambda_{i,j}\in\mathbb R$. By [F3], the vectors $|i\rangle\otimes e_{i,j}$ over all $i,j$ form an orthonormal basis of $\mathbb C^I\otimes H_E$. The operator $X$ is diagonal in this basis with eigenvalues exactly the finite list $(\lambda_{i,j})_{i,j}$. [given, F1, F3, choose]

2.1 Since $X$ and each $X_i$ are self-adjoint, their singular values are the absolute values of their eigenvalues: in each eigenbasis, $X^\dagger X$ has eigenvalues $\lambda_{i,j}^2$. Applying [F2] to the displayed basis and to each block gives $\|X\|_1=\sum_{i,j}|\lambda_{i,j}|=\sum_i\|X_i\|_1$. [given, F1, F2, step 1.1, algebra] ∎
