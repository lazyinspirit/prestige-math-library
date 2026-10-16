---
id: def-qa-26-qlsp-task
kind: definition
title: "Quantum linear-systems state-output task"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-singular-value-decomposition
  - def-kernel-and-image-of-a-linear-map
  - def-qc-register-and-computational-basis
  - def-qc-pure-state-and-ray
  - def-qc-dirac-notation-conversion
justified_by: [lem-qa-26-qlsp-target-is-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

## Definition

Let $A:\mathbb C^n\to\mathbb C^m$ be a finite-dimensional linear map, $m,n\ge1$, and let $b\in\operatorname{ran}(A)\setminus\{0\}$, where $\operatorname{ran}(A)$ is the image defined in [[def-kernel-and-image-of-a-linear-map]]. The **quantum linear-systems state-output task (QLSP)** is to prepare the normalized domain-register state
$$|x\rangle:=\frac{A^+b}{\|A^+b\|}\in\mathbb C^n,$$
where $A^+$ is the Moore–Penrose pseudoinverse. By [[thm-singular-value-decomposition]], write $b=\sum_{j:\sigma_j>0}\beta_j u_j$ in left singular vectors; the promised support gap is a supplied rational or exactly represented $\gamma>0$ such that every $j$ with $\beta_j\ne0$ has singular value $\sigma_j\ge\gamma$. The input includes a costed unitary $B$ mapping its designated all-zero input to $|b/\|b\|\rangle$ in the codomain register, tensored with a fixed work state. Its inverse, controlled access, and resource coordinates are specified in the separate HHL access model. If $b$ is multiplied by $c\ne0$, the normalized representative is multiplied by $c/|c|$, so its pure-state ray is unchanged. The task returns a quantum state (and may return a success flag); it does not promise a classical list of coordinates.
