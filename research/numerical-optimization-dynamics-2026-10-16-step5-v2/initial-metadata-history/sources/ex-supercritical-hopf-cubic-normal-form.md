---
id: ex-supercritical-hopf-cubic-normal-form
kind: example
title: A supercritical planar cubic Hopf bifurcation
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
      locator: Chapter 3, §3.4, printed pp. 86–89, supercritical planar cubic normal form
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 1 and 3C, printed pp. 18–22 and 95–98, Hopf branch and stability method
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: Two-dimensional supercritical normal form; orientation only
---

## Example

Consider
$$\dot x=\mu x-y-x(x^2+y^2),\qquad \dot y=x+\mu y-y(x^2+y^2).$$
The normal-form convention is that $q^*q=p^*q=1$ and $\ell_1=\operatorname{Re}G_{21}/(2\omega_0)$.

## Facts & Assumptions

**Given:** The polynomial vector field in the Example, $\omega_0=1$, parameter $\mu$, and the normalization $q^*q=p^*q=1$.

[F1] [[def-hopf-normal-form-data]]: $\ell_1=\operatorname{Re}G_{21}/(2\omega_0)$, with $Aq=i\omega_0q$, $A^*p=-i\omega_0p$, and $q^*q=p^*q=1$.

[F2] [[thm-hopf-local-branch-and-stability]]: for a $C^5$ field with the stated local equilibrium and simple critical eigenvalue branches, a simple pair $\pm i\omega_0$ with $\omega_0>0$, no other imaginary-axis eigenvalues, $\beta'(0)\ne0$, and $\ell_1\ne0$, a small local cycle exists on the side $\beta\ell_1<0$; it is radially stable for $\beta>0$, and with no transverse modes this is orbital asymptotic stability.

## Verification

1.1 The origin is an equilibrium for all $\mu$, and its Jacobian is $A(\mu)=\begin{bmatrix}\mu&-1\\1&\mu\end{bmatrix}$ with eigenvalues $\mu\pm i$. Thus the critical pair is simple, $\beta(\mu)=\mu$, $\beta'(0)=1$, and there are no other eigenvalues. [given, algebra]

1.2 At $\mu=0$, take $q=p=(1,-i)^T/\sqrt2$. The quadratic derivative $B$ is zero. For the cubic term $-\,\|(x,y)\|^2(x,y)$, its symmetric third derivative is $C(u,v,w)=-2((u\cdot v)w+(u\cdot w)v+(v\cdot w)u)$, using the complex-bilinear extension of the real dot product. Since $q\cdot q=0$ and $q\cdot\bar q=1$, $C(q,q,\bar q)=-4q$, so $G_{21}=p^*C(q,q,\bar q)=-4$. [F1, given, algebra]

2.1 Therefore $\ell_1=-2$. The hypotheses of [F2] hold, and $\beta\ell_1<0$ exactly when $\mu>0$; since there are no transverse modes, the small cycle on that side is orbitally stable. [F1, F2, step 1.1, step 1.2, algebra]

3.1 In polar coordinates $R=\sqrt{x^2+y^2}$ the equations give $\dot R=\mu R-R^3$ and $\dot\theta=1$. For $\mu>0$ the nonzero radial equilibrium is $R=\sqrt{\mu}$, and its radial derivative is $\mu-3R^2=-2\mu<0$, verifying the stable cycle and period $2\pi$. [step 1.1, algebra] ∎
