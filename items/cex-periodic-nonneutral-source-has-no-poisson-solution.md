---
id: cex-periodic-nonneutral-source-has-no-poisson-solution
kind: counterexample
title: A periodic Poisson source without neutralization is incompatible
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
proof_strategy: direct
axiom_use: No choice principle is used; the compatibility obstruction is a finite sum.
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
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapter 2
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Take the one-dimensional periodic grid with $L=1$ and odd $N\ge3$, one particle of charge $q=1$, and any nonnegative normalized assignment shape. If the deposited density $s_j=h^{-1}w_j(X)$ is sent directly to $A_h\phi=s$ without subtracting the neutralizing background $1/L$, then the equation has no solution.

## Facts & Assumptions

**Given:** A periodic grid, a charge-one particle, normalized assignment weights, and the periodic centered Poisson operator.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $\bar u=L^{-1}h\sum_j u_j$ and $A_h$ is the periodic negative centered Laplacian.

[F2] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: every output of $A_h$ has zero mean, and its range is exactly the zero-mean subspace.

[F3] [[def-periodic-pic-shape-assignment-and-gather]]: an admissible algebraic assignment shape has $\sum_jw_j(x)=1$ at every particle location.

## Proof

1.1 The deposited source has total grid charge $h\sum_js_j=\sum_jw_j(X)=1$ by [F3]. Since $L=1$, its grid mean is $\bar s=L^{-1}h\sum_js_j=1$. [F1, F3, given, algebra]

2.1 By [F2], every solvable source for $A_h\phi=s$ must have zero mean. Step 1.1 gives $\bar s=1$, so this unneutralized Poisson equation is incompatible. Subtracting the uniform background $1/L=1$ would instead make the source mean zero. [F1, F2, step 1.1] ∎
