---
id: thm-qa-26-hhl-query-cost
kind: theorem
title: "HHL sparse-query and state-preparation cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - alg-qa-26-hhl-phase-estimation
  - thm-qa-26-hhl-state-correctness
  - thm-qa-26-hhl-simulator-cost
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
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

The intended sparse-oracle specialization is: for a $d$-sparse Hermitian instance with $\|H\|\le1$, supported gap $1/\kappa$, and target state error $\epsilon$, the phase-estimation HHL method uses $O(d\kappa^2\epsilon^{-1}\operatorname{polylog}(d\kappa/\epsilon))$ sparse-row/value queries and $O(\kappa(1+\log(1/\rho)))$ calls to $B$ and separately to $B^\dagger$, multiplied by their supplied costs. For fixed constant $\rho$, this specializes to the displayed query order without an additional failure logarithm; for variable $\rho$, include the factor $\log(1/\rho)$. Under direct simulation access, the simulator contribution is instead the explicit sum in [[thm-qa-26-hhl-simulator-cost]].

## Owner escalation

No current supplier item proves that the QA20 sparse row/value oracle implements each controlled evolution with query cost $O(d|t|\operatorname{polylog}(d|t|/\eta))$ (or another bound sufficient to derive the displayed asymptotic). The QA20 page has the sparse-oracle definition and product-formula results but no sparse-simulation theorem; the proposed QA25 qubitization items have no carriers and, even when supplied, use an access contract whose location/state-preparation costs need a bridge to this row/value model. The missing proof must establish the controlled and inverse simulation theorem for Hermitian $d$-sparse $H$, $\|H\|\le1$, with reversible row/column location and value access, declared entry precision, and an explicit query bound. Until that supplier and interface bridge exist, the displayed sparse-query asymptotic remains an owner-escalated claim. No local proof or source excerpt is asserted.
