---
id: lem-qa-26-hhl-success-amplitude
kind: lemma
title: "Ideal inverse amplitude and HHL postselection probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-26-hhl-phase-estimation
  - def-qa-26-qlsp-task
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-qa-26-hhl-reciprocal-filter
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite spectral expansion and norm identity are choice-free."
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

For the ideal exact-eigenvalue version of [[alg-qa-26-hhl-phase-estimation]], on a normalized $|b\rangle$ supported on $1/\kappa\le|\lambda|\le1$, the well-flag vector is $v=(2\kappa)^{-1}H^+|b\rangle$. Its probability $p=\|v\|^2$ satisfies $1/(4\kappa^2)\le p\le1/4$, and its normalized state is the QLSP target.

## Facts & Assumptions

**Given:** A self-adjoint $H$, a normalized $|b\rangle$, and the support promise.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: $H$ has an orthonormal eigenbasis with real eigenvalues.

[F2] [[def-moore-penrose-pseudoinverse]] and [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: the pseudoinverse is the unique matrix satisfying $HH^+H=H$, $H^+HH^+=H^+$, and self-adjointness of $HH^+$ and $H^+H$.

[F3] [[def-qa-26-hhl-reciprocal-filter]]: on the supported spectrum $f_\kappa(\lambda)=1/(2\kappa\lambda)$ and $g_\kappa(\lambda)=0$.

[F4] [[def-qa-26-qlsp-task]]: the target is the normalized pseudoinverse action on the supported input.

## Proof

1.1 In the eigenbasis from [F1], define $G u_j=\lambda_j^{-1}u_j$ for $\lambda_j\ne0$ and $G u_j=0$ for $\lambda_j=0$. Diagonal multiplication gives $HGH=H$, $GHG=G$, and $HG=GH$ equal to the orthogonal projection onto the nonzero-eigenvalue span; both products are self-adjoint. Thus $G$ satisfies [F2], and uniqueness gives $H^+=G$. [F1, F2, algebra]

1.2 Expand $|b\rangle=\sum_j\beta_j|u_j\rangle$ in [F1], with $\sum_j|\beta_j|^2=1$. Every nonzero coefficient has $|\lambda_j|\ge1/\kappa$, so [F3] multiplies it by $(2\kappa\lambda_j)^{-1}$. Step 1.1 therefore gives the well vector $v=\sum_j\beta_j(2\kappa\lambda_j)^{-1}|u_j\rangle=(2\kappa)^{-1}H^+|b\rangle$. Its normalization is the state in [F4]. [F1, F3, F4, step 1.1, algebra]

1.3 Orthonormality gives $p=\sum_j|\beta_j|^2/(4\kappa^2|\lambda_j|^2)$. Since $1\le|\lambda_j|^{-1}\le\kappa$, each weight factor lies in $[1/(4\kappa^2),1/4]$. Their convex average lies in the same interval, proving $1/(4\kappa^2)\le p\le1/4$. [step 1.2, algebra] ∎
