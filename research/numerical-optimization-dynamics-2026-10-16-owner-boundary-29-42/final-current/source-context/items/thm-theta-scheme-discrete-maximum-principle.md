---
id: thm-theta-scheme-discrete-maximum-principle
kind: theorem
title: A boundary-aware discrete maximum principle for the θ scheme
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-parabolic-theta-step-exists-uniquely
  - thm-parabolic-theta-l2-stability-for-half-theta
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.5.2 and §5.6, PDF pp. 66–73: Dirichlet θ-scheme maximum-principle coefficients and multidimensional condition; the 2D proof is only sketched there."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: periodic Fourier stability only; no boundary maximum-principle result is claimed from this source."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

On the finite two-dimensional rectangular Dirichlet grid of [[def-parabolic-theta-finite-difference-scheme]], suppose $\theta\in[0,1]$, the source is zero, and
$$
\Delta t(1-\theta)\left(\frac{\kappa_x}{h_x^2}+\frac{\kappa_y}{h_y^2}\right)\le\frac12.
$$
Then every numerical interior value at every time level lies between the minimum and maximum of all initial and prescribed boundary values. In particular, with homogeneous boundary rows and $\theta=1/2$, this maximum-principle condition is $\Delta t(\kappa_x/h_x^2+\kappa_y/h_y^2)\le1$, a stricter sufficient condition than the unconditional weighted $L^2$ stability for the same homogeneous problem proved in [[thm-parabolic-theta-l2-stability-for-half-theta]].

## Facts & Assumptions

**Given:** A finite two-dimensional rectangular Dirichlet grid, $\kappa_x,\kappa_y>0$, $\Delta t>0$, $\theta\in[0,1]$, zero source, initial values, and prescribed boundary rows at every time level as in [[def-parabolic-theta-finite-difference-scheme]].

[F1] [[def-parabolic-theta-finite-difference-scheme]] defines the exact Dirichlet neighbor rows and the centered θ update. Put $\mu_x=\Delta t\kappa_x/h_x^2$, $\mu_y=\Delta t\kappa_y/h_y^2$.

[F2] [[lem-parabolic-theta-step-exists-uniquely]]: each implicit interior step has a unique solution for its known right-hand side and prescribed boundary data.

[F3] [[thm-parabolic-theta-l2-stability-for-half-theta]]: for $\theta\in[1/2,1]$ and homogeneous Dirichlet data, the θ step is weighted-L2 contractive for every positive time step.

## Proof

1.1 Rearranging the scheme at an interior node gives $(1+2\theta(\mu_x+\mu_y))U^{n+1}_{ij}=\theta\mu_x(U^{n+1}_{i+1,j}+U^{n+1}_{i-1,j})+\theta\mu_y(U^{n+1}_{i,j+1}+U^{n+1}_{i,j-1})+(1-\theta)\mu_x(U^{n}_{i+1,j}+U^{n}_{i-1,j})+(1-\theta)\mu_y(U^{n}_{i,j+1}+U^{n}_{i,j-1})+[1-2(1-\theta)(\mu_x+\mu_y)]U^n_{ij}$. The coefficient of the old center is nonnegative by the stated condition, and every neighbor coefficient is nonnegative because $\theta\in[0,1]$ and $\mu_x,\mu_y>0$. Thus if all old interior and boundary values are nonnegative, the known right-hand side of the implicit interior system is nonnegative; the future boundary contributions are also nonnegative. [F1, given, algebra]

1.2 Let $W$ be the unique interior solution of the implicit system with nonnegative right-hand side and nonnegative future boundary data, whose existence is [F2]. If an interior value attained a negative minimum $W_{ij}<0$, then every adjacent interior or boundary value would be at least $W_{ij}$, so $W_{ij}+\theta\mu_x(2W_{ij}-W_{i+1,j}-W_{i-1,j})+\theta\mu_y(2W_{ij}-W_{i,j+1}-W_{i,j-1})\le W_{ij}<0$. This is the corresponding component of the nonnegative right-hand side, a contradiction. Hence $W\ge0$; for $\theta=0$ the same inequality reduces to $W_{ij}<0$ and gives the contradiction directly. [F1, F2, given, algebra]

2.1 The zero-source scheme is linear. Let $M_0$ and $m_0$ be respectively the maximum and minimum of the finite collection of initial and prescribed boundary values at all time levels. The constant grid with interior and boundary values $M_0$ solves the zero-source scheme with constant boundary rows $M_0$, since every centered second difference of a constant is zero. Subtracting the numerical solution $U$ gives a solution with initial values $M_0-U^0\ge0$ and boundary rows $M_0-B^n\ge0$. Induction using steps 1.1–1.2 gives $U\le M_0$. Likewise, subtracting the constant grid with interior and boundary values $m_0$ from $U$ gives initial values $U^0-m_0\ge0$ and boundary rows $B^n-m_0\ge0$, so induction gives $U\ge m_0$. Thus $m_0\le U^n_{ij}\le M_0$ at every interior node and time level; the prescribed boundary nodes satisfy the same bounds by definition. [F1, step 1.1, step 1.2, algebra]

3.1 In the homogeneous-boundary case at $\theta=1/2$, the stated sufficient maximum-principle restriction reduces to $\Delta t(\kappa_x/h_x^2+\kappa_y/h_y^2)\le1$. By [F3] weighted $L^2$ stability holds for every $\Delta t>0$ under the same zero-boundary setup. Thus the maximum-principle condition is a stricter sufficient condition; this comparison makes no claim that the maximum principle fails outside it. [F3, given, algebra] ∎

## Remarks

For $\theta=1$ the restriction is automatic; the precise $\theta=1/2$ comparison with weighted $L^2$ stability is proved in step 3.1. This theorem is specific to the centered rectangular Dirichlet rows stated above. No choice axiom is used.
