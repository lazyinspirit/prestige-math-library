---
id: lem-qa-26-hhl-filter-geometry
kind: lemma
title: "The reciprocal filter defines valid three-outcome amplitudes"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-26-hhl-reciprocal-filter
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the real square root is applied to a strictly positive scalar."
provenance:
  statement: literature-derived
  proof: ai-generated
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

## Statement

For every real $z$ and $\kappa\ge1$, $f_\kappa(z)^2+g_\kappa(z)^2\le1/4$. Hence $h(z)$ in [[def-qa-26-hhl-reciprocal-filter]] is real, and the three displayed amplitudes have squared moduli summing to one.

## Facts & Assumptions

**Given:** The piecewise functions in [[def-qa-26-hhl-reciprocal-filter]].

[F1] [[def-qa-26-hhl-reciprocal-filter]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: in the transition band the two nonzero functions are one half times sine and cosine of the same angle; on each plateau they are constants or one reciprocal term.

## Proof


1.1 If $|z|\ge1/\kappa$, then $g_\kappa(z)=0$ and $|f_\kappa(z)|=1/(2\kappa|z|)\le1/2$, so their squared sum is at most $1/4$. [F1, algebra]

2.1 If $1/(2\kappa)\le|z|<1/\kappa$, the identity $\sin^2\theta+\cos^2\theta=1$ gives $f_\kappa(z)^2+g_\kappa(z)^2=1/4$. If $|z|<1/(2\kappa)$, the sum is $0+(1/2)^2=1/4$. Thus all cases give the bound, and $1-f^2-g^2\ge3/4>0$. [F1, algebra] ∎

