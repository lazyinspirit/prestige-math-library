---
id: thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution
kind: theorem
title: The periodic PIC Poisson algorithm returns the unique gauged solution
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-periodic-pic-zero-mean-poisson-solver
  - def-periodic-pic-grid-and-inner-product
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
proof_strategy: direct
axiom_use: No choice principle is used.
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
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

For every real zero-mean source $s$ on the grid of [[def-periodic-pic-grid-and-inner-product]], [[alg-periodic-pic-zero-mean-poisson-solver]] terminates and returns the unique $\phi$ satisfying $A_h\phi=s$ and $\bar\phi=0$. Its incompatible-source branch is taken exactly when the equation has no solution.

## Facts & Assumptions

**Given:** A real grid source and the exact-arithmetic finite Fourier procedure.

[F1] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: the Fourier characters diagonalize $A_h$, $\lambda_h(k)>0$ for $k\ne0$, and a zero-mean source has a unique zero-mean solution.

[F2] [[alg-periodic-pic-zero-mean-poisson-solver]]: the procedure checks $\bar s$, sets $\widehat\phi_0=0$, divides each other coefficient by $\lambda_h(k)$, and applies the inverse finite Fourier transform.

## Proof

1.1 The source and grid contain finitely many real numbers, so computing its mean and finite Fourier transform terminates. If $\bar s\ne0$, then the constant Fourier coefficient of $s$ is nonzero while $A_h$ annihilates constants and has zero constant coefficient on every output, so $A_h\phi=s$ is impossible. [F1, F2, algebra]

2.1 If $\bar s=0$, its zero Fourier coefficient is zero. By [F1], every other eigenvalue is positive, so all divisions in [F2] are defined. For real input, $\widehat s_{-k}=\overline{\widehat s_k}$ and $\lambda_h(-k)=\lambda_h(k)$; therefore the returned coefficients have the same conjugate symmetry, and pairing the $k$ and $-k$ terms in the inverse transform shows every $\phi_j$ is real. For every nonzero mode, the returned coefficient satisfies $\lambda_h(k)\widehat\phi_k=\widehat s_k$, and the zero mode satisfies $0=\widehat s_0$. Inverse Fourier transformation therefore gives $A_h\phi=s$ and $\widehat\phi_0=0$ gives $\bar\phi=0$. [F1, F2, step 1.1, algebra]

3.1 The coefficient list is finite, hence inverse transformation terminates. Uniqueness of the returned gauged solution follows from [F1]. [F1, step 2.1] ∎
