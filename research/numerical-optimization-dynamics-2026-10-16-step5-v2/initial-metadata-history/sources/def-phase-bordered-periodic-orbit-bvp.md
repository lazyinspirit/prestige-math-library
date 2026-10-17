---
id: def-phase-bordered-periodic-orbit-bvp
kind: definition
title: "The phase-bordered periodic-orbit BVP residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - lem-c1-ode-flow-on-common-tube
  - def-local-periodic-orbit-poincare-and-floquet-data
  - def-autonomous-ordinary-differential-equation
  - def-ck-euclidean-maps-and-diffeomorphisms
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
---

## Definition

Let $f:U\to\mathbb R^d$ be an autonomous $C^2$ vector field on an open set $U$, with the autonomous ODE convention of [[def-autonomous-ordinary-differential-equation]] and the $C^2$ map convention of [[def-ck-euclidean-maps-and-diffeomorphisms]]. Let $\psi(x)=c^\top(x-x_{\rm ref})$ be an affine phase function with $c\ne0$. On the scaled interval $s\in[0,1]$, introduce the augmented state $u=(x,\theta)\in U\times(0,\infty)$ and vector field
$$
\widetilde f(x,\theta)=(\theta f(x),0).
$$
For endpoint states $u_0=(x_0,\theta_0)$ and $u_1=(x_1,\theta_1)$, define the boundary map
$$
B(u_0,u_1)=(x_1-x_0,\psi(x_0))\in\mathbb R^{d+1}.
$$
This is a square nonlinear BVP in the sense of [[def-nonlinear-two-point-bvp-and-boundary-residual]]: its state dimension and number of boundary equations are both $d+1$. The period coordinate is constant along solutions because its derivative is zero. The common-tube differentiability of the exact flow is given by [[lem-c1-ode-flow-on-common-tube]], and monodromy/Floquet terminology follows [[def-local-periodic-orbit-poincare-and-floquet-data]].

Whenever the exact autonomous flow $\phi_t$ exists on the required interval, the associated phase-bordered shooting residual is
$$
G(x,\theta)=\bigl(\phi_\theta(x)-x,\psi(x)\bigr)\in\mathbb R^{d+1},\qquad \theta>0.
$$
It is defined only for initial data whose flow exists through time $\theta$. Phase transversality at a nonstationary periodic point $x_*$ means $c^\top f(x_*)\ne0$. Neither existence of a zero nor invertibility of its Jacobian is part of this definition.
