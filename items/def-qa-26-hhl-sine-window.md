---
id: def-qa-26-hhl-sine-window
kind: definition
title: "Finite sine-window phase state"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
justified_by: []
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

For a power of two $T\ge2$, the **sine-window vector** is
$$|\Psi_T\rangle=\sqrt{\frac2T}\sum_{\tau=0}^{T-1}\sin\!\left(\frac{\pi(\tau+1/2)}T\right)|\tau\rangle.$$
For any integer interval $0\le a\le b\le T$, define its unnormalized sine mass
$$W_T(a,b):=\sum_{\tau=a}^{b-1}\sin^2\!\left(\frac{\pi(\tau+1/2)}T\right).$$
The closed trigonometric formula for $W_T(a,b)$ is proved by the assigned prefix-mass lemma. The chosen OP5 table variant stores these interval masses and their conditional split angles; it charges its full $O(T)$ table and rotation size, arithmetic, interval-refinement, angle-bit, and finite gate-synthesis costs. This definition does not assign a polylogarithmic implementation cost.
