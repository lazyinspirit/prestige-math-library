---
id: lem-qa-26-qlsp-target-is-well-defined
kind: lemma
title: "The QLSP target is nonzero"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-26-qlsp-task
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-kernel-and-image-of-a-linear-map
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite singular expansion is part of the finite-dimensional spectral theorem."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Under the hypotheses in [[def-qa-26-qlsp-task]], $A^+b\ne0$, so the normalized target is well-defined.

## Facts & Assumptions

**Given:** A finite-dimensional map $A$ and $b\in\operatorname{ran}(A)\setminus\{0\}$.

[F1] [[def-kernel-and-image-of-a-linear-map]]: $b\in\operatorname{ran}(A)$ means that some $x$ satisfies $b=Ax$.

[F2] [[def-moore-penrose-pseudoinverse]]: $AA^+A=A$; [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: this pseudoinverse exists and is unique.

## Proof

1.1 By [F1], choose $x$ with $b=Ax$. The Penrose equation in [F2] gives $AA^+b=AA^+Ax=Ax=b$. [given, F1, F2, choose, algebra]

1.2 If $A^+b=0$, then $AA^+b=0$, contradicting step 1.1 and the hypothesis $b\ne0$. Hence $A^+b\ne0$ and the normalized QLSP target is defined. [given, step 1.1, algebra] ∎
