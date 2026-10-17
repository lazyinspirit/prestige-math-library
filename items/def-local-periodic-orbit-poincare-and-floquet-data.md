---
id: def-local-periodic-orbit-poincare-and-floquet-data
kind: definition
title: Local periodic-orbit, Poincare-return, and Floquet data
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 1 and 3B, printed pp. 15–22 and 91–94, local sections and periodic-orbit stability
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101, local limit-cycle branch and stability
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

For a real $C^1$ [[def-ck-euclidean-maps-and-diffeomorphisms|vector field]] $\dot x=f(x)$ on an open subset of $\mathbb R^d$, a nonconstant solution $x_*(t)$ with least positive period $T$ has periodic orbit $\Gamma=\{x_*(t):0\le t<T\}$. Its variational fundamental matrix $Y(t)$ solves

$$\dot Y(t)=D f(x_*(t))Y(t),\qquad Y(0)=I.$$

The matrix $Y(T)$ is the **monodromy matrix**; its eigenvalues, counted with algebraic multiplicity, are the **Floquet multipliers**. The multiplier $1$ in the direction $\dot x_*(0)$ is called the **phase multiplier**.

A **local Poincare section** at $x_*(0)$ is a smooth codimension-one surface through that point whose tangent space does not contain $f(x_*(0))$. The local return map, on a sufficiently small section neighborhood where the next return is defined, sends a point to its next intersection after one turn around $\Gamma$. Its derivative at $x_*(0)$ is the Poincare derivative.

The orbit is **orbitally asymptotically stable** if it is Lyapunov stable as a set and the distance from every sufficiently nearby trajectory to $\Gamma$ tends to zero as time tends to $+\infty$. It is **orbitally unstable** if it is not Lyapunov stable as a set.
