---
id: cex-qa-26-hhl-classical-vector-output
kind: counterexample
title: "State preparation does not print all coordinates"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-26-qlsp-task
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the family and output-counting argument are finite."
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

## Statement refuted

A polylogarithmic-time QLSP state-output procedure necessarily returns a full classical description of its $N$-coordinate solution vector in polylogarithmic time.

## Facts & Assumptions

**Given:** The state-output task in [[def-qa-26-qlsp-task]] and the family below.

[F1] [[def-qa-26-qlsp-task]]: the requested output is a quantum state; no classical coordinate list is promised.

## Counterexample

For any integer $N\ge1$, take $A=I_N$ and, for each sign string $s\in\{-1,+1\}^N$, let $b_s=N^{-1/2}\sum_{j=1}^Ns_j e_j$. Then $A^+b_s=b_s$ and the normalized solution is exactly $b_s$.


1.1 Each coordinate of $b_s$ equals $s_j/\sqrt N$. If a classical output $z\in\mathbb C^N$ obeys $|z_j-s_j/\sqrt N|<1/(2\sqrt N)$ for every $j$, then $\operatorname{Re}z_j$ has sign $s_j$, because its distance from the real number $s_j/\sqrt N$ is smaller than half that number's magnitude. Thus the output determines all $N$ signs. [given, F1, algebra]

1.2 The family has $2^N$ distinct sign strings, so any unambiguous classical output code for all these vectors has at least $2^N$ distinct codewords and therefore at least $N$ bits. This output-length requirement is independent of the ability to prepare or measure the corresponding quantum state. [step 1.1, algebra] ∎
