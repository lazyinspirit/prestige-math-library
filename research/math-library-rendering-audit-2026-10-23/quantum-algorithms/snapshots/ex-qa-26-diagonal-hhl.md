---
id: ex-qa-26-diagonal-hhl
kind: example
title: "Two-dimensional diagonal HHL inversion"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-26-hhl-phase-estimation
  - lem-qa-26-hhl-success-amplitude
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; this is an explicit two-dimensional calculation."
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

## Example

Let $H=\operatorname{diag}(1,1/\kappa)$ for $\kappa\ge1$ and $|b\rangle=(|0\rangle+|1\rangle)/\sqrt2$. The support promise holds with gap $1/\kappa$.

## Verification

[F1] [[lem-qa-26-hhl-success-amplitude]]: the ideal well vector is $(2\kappa)^{-1}H^+|b\rangle$ and its squared norm is the ideal success probability.

**Given:** The displayed diagonal matrix and normalized input.

1.1 Direct inversion gives $H^+|b\rangle=(|0\rangle+\kappa|1\rangle)/\sqrt2$. Its norm is $\sqrt{1+\kappa^2}/\sqrt2$, so the target is $(|0\rangle+\kappa|1\rangle)/\sqrt{1+\kappa^2}$. [given, algebra]

2.1 By [F1], the well vector is $(|0\rangle+\kappa|1\rangle)/(2\sqrt2\kappa)$ and its probability is $(1+\kappa^2)/(8\kappa^2)$, which satisfies $1/8<p\le1/4$. For OP5, the eigenvalue grid spacing is $2\pi/t_0=\pi\epsilon/(1024\kappa)$. The sine window has nonzero tails, so this spacing is a grid resolution and not a hard error guarantee; the kernel moment and filter proof supply the error bound. [F1, step 1.1, algebra] ∎

