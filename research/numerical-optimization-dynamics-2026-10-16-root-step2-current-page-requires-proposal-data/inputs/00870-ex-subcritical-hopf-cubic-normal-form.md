---
id: ex-subcritical-hopf-cubic-normal-form
kind: example
title: A subcritical planar cubic Hopf bifurcation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-hopf-normal-form-data
  - thm-hopf-local-branch-and-stability
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
      locator: Chapter 3, §3.4, printed pp. 88–90, subcritical planar cubic normal form
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, periodic-orbit stability and local branch
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: Two-dimensional subcritical normal form; orientation only
---

## Example

Consider
$$\dot x=\mu x-y+x(x^2+y^2),\qquad \dot y=x+\mu y+y(x^2+y^2).$$
This has the same eigenvalue crossing as the preceding cubic example but the opposite first Lyapunov sign.

## Facts & Assumptions

**Given:** The polynomial vector field in the Example, $\omega_0=1$, and the normalization $q^*q=p^*q=1$.

[F1] [[def-hopf-normal-form-data]]: $\ell_1=\operatorname{Re}G_{21}/(2\omega_0)$ with the displayed normalized eigenvectors.

[F2] [[thm-hopf-local-branch-and-stability]]: a simple crossing with $\ell_1\ne0$ has its local cycle on $\beta\ell_1<0$; radial stability requires $\beta>0$.

## Verification

1.1 The origin is an equilibrium and $A(\mu)=\begin{bmatrix}\mu&-1\\1&\mu\end{bmatrix}$ has eigenvalues $\mu\pm i$. Hence $\beta'(0)=1$ and there is no transverse spectrum. [given, algebra]

1.2 With $q=p=(1,-i)^T/\sqrt2$, $B=0$. The cubic vector field is $\|(x,y)\|^2(x,y)$, so $C(u,v,w)=2((u\cdot v)w+(u\cdot w)v+(v\cdot w)u)$. Since $q\cdot q=0$ and $q\cdot\bar q=1$, $C(q,q,\bar q)=4q$ and $G_{21}=4$. [F1, given, algebra]

2.1 Thus $\ell_1=2>0$, and [F2] gives a small branch only for $\mu<0$; its radial multiplier is unstable because $\beta<0$. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Directly, polar coordinates give $\dot R=\mu R+R^3$ and $\dot\theta=1$. At $\mu<0$, $R=\sqrt{-\mu}$ is a radial equilibrium with derivative $\mu+3R^2=-2\mu>0$, so the periodic orbit is unstable. [step 1.1, algebra] ∎
