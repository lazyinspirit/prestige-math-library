---
id: ex-degenerate-hopf-with-zero-lyapunov-coefficient
kind: example
title: An imaginary eigenvalue crossing with zero Lyapunov coefficient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-hopf-normal-form-data]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101, nondegeneracy and cubic examples
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, genericity conditions and exceptional cases
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: First Lyapunov nondegeneracy condition; orientation only
---

## Example

Consider the linear system
$$\dot x=\mu x-y,\qquad \dot y=x+\mu y.$$
The eigenvalues cross the imaginary axis transversely, but there is no isolated small cycle branch for nonzero $\mu$.

## Facts & Assumptions

**Given:** The linear system in the Example and the eigenvector normalization $q^*q=p^*q=1$.

[F1] [[def-hopf-normal-form-data]]: the first Lyapunov coefficient is computed from the second and third derivatives by the displayed formula.

## Verification

1.1 Its Jacobian is $\begin{bmatrix}\mu&-1\\1&\mu\end{bmatrix}$, with eigenvalues $\mu\pm i$, so $\beta'(0)=1$. The vector field is linear; therefore $B=0$ and $C=0$. [given, algebra]

2.1 By [F1], $G_{21}=0$ and $\ell_1=0$. The nondegeneracy hypothesis of the generic Hopf theorem is therefore absent even though the eigenvalue crossing is transverse. [F1, step 1.1, algebra]

3.1 In polar coordinates $\dot R=\mu R$ and $\dot\theta=1$. If $\mu\ne0$, every nonzero radius changes strictly exponentially and cannot be periodic; if $\mu=0$, every circle $R>0$ is periodic, so there is no isolated branch selected by crossing. [step 1.1, algebra] ∎
