---
id: rem-value-functions-and-hamilton-jacobi-bellman-equations
kind: remark
title: 'Value functions and the Hamilton--Jacobi--Bellman equation: orientation only'
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hamilton-jacobi-cauchy-problem
- def-legendre-transform-of-a-hamiltonian
- def-hopf-lax-operator
justified_by: []
aliases: []
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2 Sections 1--3, printed pp. 53--60
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Sections 9--10, printed pp. 49--63
  - title: Christian Clason, Nonsmooth Analysis and Optimization, lecture notes winter 2021/22, February 18, 2022
    url: https://imsc.uni-graz.at/clason/skripte/NonsmoothNotes21.pdf
    locator: 'Theorem 5.1(iii), printed pp. 44--45: a proper function equals its biconjugate exactly when convex and lower semicontinuous. This is source-only orientation for the extended velocity cost; the finite-valued Hamiltonian identity has its local Moreau proof.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Remarks

For a controlled dynamical system $y'(\cdot)=b(y,v)$ with running cost
$L(y,v)$ and initial cost $u_0$, consider the **value function**
$$u(x,t)=\inf\Bigl\{\int_0^tL\bigl(\gamma(s),v(s)\bigr)\,ds+u_0\bigl(\gamma(0)\bigr):\ \gamma(t)=x,\ \gamma'=b(\gamma,v)\Bigr\}$$
over admissible controls. When hypotheses make this value finite and
continuous, ensure the dynamic programming principle, and give the viscosity
characterization, $u$ is a viscosity solution of the Hamilton--Jacobi--Bellman
equation $u_t+H(x,Du)=0$ with
$$H(x,p)=\sup_v\{p\cdot b(x,v)-L(x,v)\}.$$
To express the Legendre duality precisely, define the effective velocity cost
$$\ell(x,\xi):=\inf\{L(x,v):b(x,v)=\xi\},$$
with value $+\infty$ when the fiber is empty. Then $H(x,\cdot)$ is the convex
conjugate of $\ell(x,\cdot)$; when $\ell(x,\cdot)$ is proper, lower
semicontinuous and convex, Fenchel--Moreau gives
$\ell(x,\xi)=\sup_p\{p\cdot\xi-H(x,p)\}$
(Clason, Theorem 5.1(iii), recorded here as source-only orientation;
[[def-legendre-transform-of-a-hamiltonian]] fixes the conjugate notation but
does not prove this extended-valued result). If comparison holds in the
chosen solution class, the viscosity solution is unique.

The sign convention is the one of this page: velocities are integrated forward
from time $0$ to time $t$, the running cost is accumulated forward, the
initial cost is paid at time $0$, and $H$ is convex in $p$ because it is a
supremum of affine functions of $p$, irrespective of convexity of the
control or velocity set. With this convention the
Hopf--Lax operator of [[def-hopf-lax-operator]] is the special case of the
formula in which the infimum over paths has been reduced to a single infimum
over the starting point, $u(x,t)=\inf_y\{u_0(y)+tL((x-y)/t)\}$, for the
autonomous convex superlinear case.

This remark records the interpretation only: no admissible-control framework,
no measurable selection, no existence of optimal controls and no dynamic
programming theorem for control systems is developed on this page, The stationary specialization of the displayed evolution equation is
$H(x,Du)=0$; a separately discounted formulation leads to equations such as
$\lambda u+H(x,Du)=f$. The only dynamic-programming content of
this page is the semigroup law for the Hopf--Lax operator
[[thm-hopf-lax-dynamic-programming-semigroup]], which is proved directly from
the convexity of the Lagrangian. No choice principle is used; this orientation
is recorded so that the Cauchy problems of
[[def-hamilton-jacobi-cauchy-problem]] can be read against their control
origin.
