---
id: thm-qa-global-phase-under-control
kind: theorem
title: "A constant phase query is invisible alone and relative under control"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-phase-query
  - def-qc-controlled-unitary-access
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §2.4, PDF pp. 25–33: phase queries and controlled phase access."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp. 7–8: standard and phase-oracle operations; the global-phase distinction is checked locally."
---

## Statement

Let $f:\{0,1\}^{a}\to\{0,1\}$ be constant with value $c\in\{0,1\}$. Its phase query is $P_f=(-1)^cI$. A standalone call therefore leaves every pure-state measurement law unchanged. If the model explicitly grants controlled phase-query access, the two constant cases are distinguishable: on address $|0^a\rangle$ and control $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$, control of $P_f$ returns $|+\rangle|0^a\rangle$ when $c=0$ and $|-\rangle|0^a\rangle$ when $c=1$. Measuring the control in the $\{|+\rangle,|-\rangle\}$ basis distinguishes them with certainty. No controlled access is inferred from a bare phase-query call.

## Facts & Assumptions

**Given:** A constant Boolean function, the associated phase query, finite-dimensional quantum registers, and—only for the controlled conclusion—an explicit controlled phase-query call.

[F1] [[def-qa-phase-query]]: $P_f|x\rangle=(-1)^{f(x)}|x\rangle$.

[F2] [[thm-qc-standalone-global-phase-invariance]]: multiplication of a normalized pure-state vector by a scalar of modulus one leaves every finite POVM outcome probability unchanged.

[F3] [[def-qc-controlled-unitary-access]]: an explicitly controlled call is the control-first block operator $\operatorname{diag}(I,U)$.

[F4] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: fixes the exact one-qubit matrices and the ordered qubit basis.

[F5] [[thm-qc-computational-basis-orthonormal]]: the ordered qubit computational basis is orthonormal.

[F6] [[thm-qc-controlled-global-phase-is-relative-phase]]: for a nonzero finite-dimensional space, unitary $U$, and real $\theta$, separate controlled access to both $U$ and $e^{i\theta}U$ gives different measurement laws when $\theta\notin2\pi\mathbb Z$; the theorem supplies an explicit eigenvector input and control measurement.

[A1] Controlled access to $P_f$ is an explicit operation-model assumption. The controlled identity is the identity operator and requires no oracle call.

## Proof

1.1 Since $f(x)=c$ for every address $x$, [F1] gives $P_f|x\rangle=(-1)^c|x\rangle$ on a basis; hence $P_f=(-1)^cI$. [given, F1, algebra]

1.2 Under [A1], the controlled block is $I$ if $c=0$. If $c=1$, it is $\operatorname{diag}(I,-I)$ by [F3]. Applying these blocks to $|+\rangle|0^a\rangle$ gives respectively $|+\rangle|0^a\rangle$ and $(|0\rangle-|1\rangle)|0^a\rangle/\sqrt2=|-\rangle|0^a\rangle$. This is the $\theta=\pi$, $U=I$ relative-phase instance of [F6]; the controlled identity is the identity operation and the other block is the explicitly granted controlled phase call. [given, F3, F4, F6, A1, algebra]

2.1 The scalar has modulus one. Applying [F2] to any normalized address state shows that the standalone call preserves every finite POVM outcome law. This verifies the statement even when $c=1$ and the vector acquires a minus sign. [step 1.1, F2, algebra]

3.1 The explicit vectors $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $|-\rangle=(|0\rangle-|1\rangle)/\sqrt2$ have unit norm and inner product zero by [F5]. The two control outputs therefore give opposite deterministic outcomes when measured in that basis, proving distinguishability. The proof uses the explicitly controlled operation [A1] and makes no claim from uncontrolled access alone. [step 1.2, F4, F5, A1, algebra] ∎
