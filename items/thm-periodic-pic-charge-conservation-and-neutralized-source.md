---
id: thm-periodic-pic-charge-conservation-and-neutralized-source
kind: theorem
title: Periodic PIC deposition conserves charge and satisfies Poisson compatibility
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
proof_strategy: direct
axiom_use: No choice principle is used; the grid is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

For positions $X_1,\ldots,X_P\in\mathbb T_L^d$ and real charges $q_1,\ldots,q_P$, define $Q=\sum_pq_p$ and an admissible algebraic assignment shape $w_j$ as in [[def-periodic-pic-shape-assignment-and-gather]]. Then
$$ h^d\sum_{j\in J_N}h^{-d}\sum_{p=1}^Pq_pw_j(X_p)=Q . $$
Consequently the neutralized source $\rho_j(X)=h^{-d}\sum_pq_pw_j(X_p)-Q/L^d$ has mean zero and is in the range of the periodic Poisson operator; it therefore has a unique mean-zero potential for the gauge $\bar\phi=0$ by [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]].

## Facts & Assumptions

**Given:** The finite periodic grid, particle positions and charges, the normalized assignment shape, and the periodic Poisson operator.

[F1] [[def-periodic-pic-shape-assignment-and-gather]]: $\rho_j=h^{-d}\sum_pq_pw_j(X_p)-Q/L^d$, and an algebraic assignment has nonnegative weights.

[F2] [[def-periodic-pic-shape-assignment-and-gather]]: every algebraic assignment shape satisfies $\sum_jw_j(x)=1$ for every particle location.

[F3] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: the range of $A_h$ is exactly the zero-mean grid subspace, and every zero-mean source has a unique mean-zero solution.

## Proof

1.1 Before subtracting the background, sum the assigned density with cell volume. Since the sum is finite, interchange its particle and grid sums; [F2] gives $h^d\sum_j h^{-d}\sum_pq_pw_j(X_p)=\sum_pq_p\sum_jw_j(X_p)=\sum_pq_p=Q .$ [given, F1, F2, algebra]

2.1 The background has total grid charge $h^d|J_N|Q/L^d=L^dQ/L^d=Q$ because $h^d|J_N|=L^d$. Hence $\langle\rho,1\rangle_h=0$, equivalently $\bar\rho=0$. [F1, step 1.1, algebra]

3.1 By [F3], this zero-mean source has a solution and fixing its mean to zero selects exactly one potential. [F3, step 2.1] ∎
