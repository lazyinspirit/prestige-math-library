---
id: thm-qa-26-hhl-amplified-postselection-cost
kind: theorem
title: "HHL capped postselection amplification cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - lem-qa-26-hhl-capped-amplification
  - alg-qa-26-hhl-phase-estimation
  - def-qa-26-hhl-access-model
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all counts are finite integer bounds."
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

For the OP5 HHL attempt with $p\ge1/(16\kappa^2)$ and failure target $0<\rho<1$, the capped schedule uses at most $2RK=O(\kappa(1+\log(1/\rho)))$ calls in total to $V$ and $V^\dagger$, where $K=\lceil4\kappa\rceil$ and $R=\lceil16\ln(1/\rho)\rceil+16$. Thus it uses $O(\kappa(1+\log(1/\rho)))$ preparations $B$ and inverse preparations $B^\dagger$ separately, multiplied by their supplied costs.

## Facts & Assumptions

**Given:** OP5 access costs and the lower success bound.

[F1] [[lem-qa-26-hhl-capped-amplification]]: each round uses at most $K$ calls to $V$ and at most $K$ calls to $V^\dagger$, over $R$ rounds.

[F2] [[alg-qa-26-hhl-phase-estimation]]: each $V$ contains one $B$ call and each $V^\dagger$ contains one $B^\dagger$ call.

[F3] [[def-qc-circuit-cost-model]]: sequential costs add and every inverse or controlled access has its own declared cost.

## Proof

1.1 By [F1], the total number of preparation and inverse-preparation calls is bounded separately by $RK$ each. Since $K=\lceil4\kappa\rceil\le5\kappa$ for $\kappa\ge1$ and $R\le16\ln(1/\rho)+17$, each count is $O(\kappa(1+\log(1/\rho)))$ with an absolute constant. [F1, algebra]

1.2 Each preparation call invokes $B$ once, and each inverse preparation invokes $B^\dagger$ once by [F2]. Their circuit/query/gate costs therefore multiply the two counts separately and add by [F3]. No call to a controlled form, simulator, reflection, or verifier is included unless it appears in the declared circuit. [F2, F3, step 1.1, algebra] ∎
