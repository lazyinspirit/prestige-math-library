---
id: thm-parabolic-theta-scheme-global-error-bound
kind: theorem
title: Global weighted L2 error from the complete parabolic residual
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-parabolic-theta-finite-difference-scheme
  - thm-parabolic-theta-l2-stability-for-half-theta
  - thm-parabolic-theta-scheme-local-truncation-error
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
      locator: "§5.5.3 and §5.6, PDF pp. 68–74: exact boundary error rows, residual recurrence, and global error transfer."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: Fourier stability context only; the finite-Dirichlet error propagation is proved locally."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

Under the smoothness, exact initial data, and exact sampled Dirichlet rows of [[thm-parabolic-theta-scheme-local-truncation-error]], let $\theta\in[1/2,1]$ and let $U^n$ be the fully discrete solution. At every time level $m\le M$,
$$
\|r^m-U^m\|_h\le 2T\sqrt{L_xL_y}\,R_\theta,
$$
where
$$
R_\theta=\begin{cases}kM_{tt}+(\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4})/12,&\theta\ne1/2,\\k^2M_{ttt}/12+(\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4})/12,&\theta=1/2.\end{cases}
$$
Here $r^m$ is the exact solution sampled on the grid and $\|\cdot\|_h$ is the weighted interior L2 norm. Thus the global rate is first order in time when $\theta\ne1/2$, second order in time when $\theta=1/2$, and second order in each spatial spacing under the stated derivative and boundary hypotheses.

## Facts & Assumptions

**Given:** The finite rectangular grid and time levels of [[def-parabolic-theta-finite-difference-scheme]], an exact smooth solution and exact sampled initial and Dirichlet rows as in [[thm-parabolic-theta-scheme-local-truncation-error]], and $\theta\in[1/2,1]$.

[F1] [[def-parabolic-theta-finite-difference-scheme]] uses the same linear θ update and the same exact boundary row at each time level for both the numerical and sampled exact grids.

[F2] [[thm-parabolic-theta-l2-stability-for-half-theta]]: for a zero-boundary error step with source $q^n$, $\|e^{n+1}\|_h\le\|e^n\|_h+2\Delta t\|q^n\|_h$.

[F3] [[thm-parabolic-theta-scheme-local-truncation-error]]: the exact sampled grid has complete interior residual $\tau^n$ with $\|\tau^n\|_\infty\le R_\theta$.

## Proof

1.1 Define the interior error $e^n=r^n-U^n$. Exact initial values give $e^0=0$, and exact boundary rows give $e^n=0$ on every boundary node. Subtracting the numerical equation from the exact sampled equation whose residual is [F3] shows that $e^n$ satisfies the same zero-Dirichlet θ update with source $q^n=\tau^n$. [F1, F3, given, algebra]

2.1 Applying [F2] at each time step gives $\|e^{n+1}\|_h\le\|e^n\|_h+2k\|\tau^n\|_h$. Summing these inequalities from $n=0$ to $m-1$ and using $e^0=0$ yields $\|e^m\|_h\le2k\sum_{n=0}^{m-1}\|\tau^n\|_h$. [F2, step 1.1, algebra]

3.1 The weighted grid norm has total interior weight $h_xh_y(N_x-1)(N_y-1)<L_xL_y$, so [F3] gives $\|\tau^n\|_h\le\sqrt{L_xL_y}\,R_\theta$. Since $mk\le T$, step 2.1 implies $\|e^m\|_h\le2T\sqrt{L_xL_y}\,R_\theta$. Substituting the two explicit values of $R_\theta$ from [F3] proves the stated rates. [F3, step 2.1, given, algebra] ∎

## Remarks

Exact boundary samples make the error zero on the boundary; the local residual includes every interior stencil row adjacent to it. The conclusion is a smooth-solution grid L2 error estimate; it gives no positivity or nonsmooth-solution rate. No choice axiom is used.
