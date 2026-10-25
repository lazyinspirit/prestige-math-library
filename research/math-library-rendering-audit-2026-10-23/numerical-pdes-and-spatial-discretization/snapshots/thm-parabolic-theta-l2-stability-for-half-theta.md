---
id: thm-parabolic-theta-l2-stability-for-half-theta
kind: theorem
title: Unconditional weighted L2 stability for θ at least one half
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint
  - lem-parabolic-theta-step-exists-uniquely
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.2.2 and §5.4, PDF pp. 61–64: implicit Euler and θ-scheme Fourier stability; §5.5, PDF pp. 64–65: Dirichlet setup."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: Crank–Nicolson unconditional Fourier stability; local proof here is an energy estimate for the finite Dirichlet grid."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

On a finite two-dimensional rectangular Dirichlet grid with zero boundary data, let $\theta\in[1/2,1]$, $\Delta t>0$, and consider one θ step of [[def-parabolic-theta-finite-difference-scheme]] with source vector $q^n$. It is uniquely solvable and satisfies
$$
\|U^{n+1}\|_h\le\|U^n\|_h+2\Delta t\|q^n\|_h.
$$
In particular, when $q^n=0$ every step is contractive in weighted grid L2. The contraction constant $1$ is independent of the mesh, time step, and number of steps, so this is unconditional finite-time grid-norm stability.

## Facts & Assumptions

**Given:** A finite two-dimensional zero-Dirichlet grid, $\theta\in[1/2,1]$, $\Delta t>0$, and the source-form θ update of [[def-parabolic-theta-finite-difference-scheme]].

[F1] [[def-parabolic-theta-finite-difference-scheme]] gives the update $U^{n+1}-U^n+\Delta t A_hU_\theta=\Delta t q^n$, where $U_\theta=(1-\theta)U^n+\theta U^{n+1}$, in the weighted grid inner product.

[F2] [[lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint]]: $A_h$ is self-adjoint and $\langle A_hv,v\rangle_h\ge0$.

[F3] [[lem-parabolic-theta-step-exists-uniquely]]: for every right-hand side the finite Dirichlet θ step has a unique solution.

## Proof

1.1 By [F3] the step has a unique solution. Write $\delta U=U^{n+1}-U^n$. The identity $U_\theta=U^n+\theta\delta U$ gives $\langle\delta U,U_\theta\rangle_h=\frac12(\|U^{n+1}\|_h^2-\|U^n\|_h^2)+(\theta-\tfrac12)\|\delta U\|_h^2$ by expanding the two squared norms. [F1, F3, algebra]

2.1 Taking the inner product of [F1] with $U_\theta$ and using step 1.1 gives $\frac12(\|U^{n+1}\|_h^2-\|U^n\|_h^2)+(\theta-\tfrac12)\|\delta U\|_h^2+\Delta t\langle A_hU_\theta,U_\theta\rangle_h=\Delta t\langle q^n,U_\theta\rangle_h$. The two terms after the norm difference on the left are nonnegative by $\theta\ge1/2$ and [F2]. Cauchy–Schwarz and the triangle inequality give $|\langle q^n,U_\theta\rangle_h|\le\|q^n\|_h\|U_\theta\|_h\le\|q^n\|_h\max(\|U^n\|_h,\|U^{n+1}\|_h)$. [F1, F2, step 1.1, algebra]

3.1 Put $a=\|U^n\|_h$, $b=\|U^{n+1}\|_h$, and $r=\|q^n\|_h$. If $b\le a$, the claimed bound is immediate. If $b>a$, step 2.1 gives $(b^2-a^2)/2\le\Delta t\,r b$; dividing by $(a+b)/2>0$ yields $b-a\le2\Delta t r\,b/(a+b)\le2\Delta t r$. This proves the forced estimate in all cases. When $q^n=0$, it gives $b\le a$; iteration over any finite number of steps preserves the same mesh-independent constant $1$. [step 2.1, given, algebra] ∎

## Remarks

The bound is in the weighted finite-grid norm. It does not imply positivity or high-frequency damping. No choice axiom is used.
