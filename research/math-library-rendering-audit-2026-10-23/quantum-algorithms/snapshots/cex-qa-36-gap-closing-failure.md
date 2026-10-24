---
id: cex-qa-36-gap-closing-failure
kind: counterexample
title: Gap closing invalidates a uniform adiabatic bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-qa-36-jrs-finite-adiabatic-bound
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; a direct diagonal evolution calculation is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Introduction and Theorem 3 hypotheses, PDF pp. 1–5; the gap condition in finite adiabatic estimates.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 151–156; gap hypotheses for adiabatic evolution.
---

## Statement

The $C^2$ path $H(s)=(s-1/2)Z$ has a closing gap and its exact evolution from the initial ground state ends orthogonal to the final ground state. Thus $C^2$ regularity alone does not imply ground-state following or satisfy the uniform-gap hypothesis of the finite JRS theorem.

## Facts & Assumptions

**Given:** The finite path and the uniform positive-gap hypothesis of [[def-qa-36-finite-adiabatic-path-model]] and [[thm-qa-36-jrs-finite-adiabatic-bound]].

[F1] The eigenvalues of a finite Hermitian matrix determine its ground state and gap ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 The path is linear in $s$, hence twice continuously differentiable. Since $Z=\operatorname{diag}(1,-1)$, its eigenvalues are $s-1/2$ and $-(s-1/2)$; the gap is $g(s)=2|s-1/2|$, which vanishes at $s=1/2$. Therefore no positive uniform full gap exists. [given, F1, algebra]

1.2 At $s=0$, $H(0)=-Z/2$ has unique ground vector $|0\rangle$; at $s=1$, $H(1)=Z/2$ has unique ground vector $|1\rangle$. The Hamiltonians commute for all times and are diagonal, so the solution of $i\partial_sU_T=TH(s)U_T$ maps $|0\rangle$ to a scalar phase times $|0\rangle$. Its final overlap with the final ground vector is zero, and its transition probability out of the final ground space is exactly $1$ for every $T>0$. [given, F1, algebra]

2.1 The path satisfies the smoothness assumption but violates the strictly positive uniform-gap hypothesis in [[thm-qa-36-jrs-finite-adiabatic-bound]]. Step 1.2 shows directly that the desired ground-state-following conclusion can fail completely when that hypothesis is removed. [given, step 1.1, step 1.2] ∎
