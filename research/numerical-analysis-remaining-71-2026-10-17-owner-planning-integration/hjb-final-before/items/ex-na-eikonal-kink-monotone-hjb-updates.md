---
id: ex-na-eikonal-kink-monotone-hjb-updates
kind: example
title: An eikonal kink and its monotone HJB grid updates
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-first-order-hjb-cauchy-problem, alg-na-positive-interpolation-semilagrangian-hjb-step, alg-na-upwind-hjb-grid-step, thm-na-first-order-hjb-scheme-convergence]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
axiom_base: The PDE verification and one-step updates are explicit; no choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 3 §4, monotone first-order grid updates, printed pp. 100–103."
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§3–4, first-order semi-Lagrangian equation and positive interpolation, printed pp. 3–5."
verification:
  precheck: pass
---

## Statement

On $\mathbb T^1$, take $A=\{-1,1\}$, $b(a)=a$, $\ell=0$, so
$H(p)=|p|$. Let $d_{\mathbb T^1}(x,0)=\min_{k\in\mathbb Z}|x-k|$ and
$$u(x,t)=\max\{d_{\mathbb T^1}(x,0)-t,0\},\qquad 0\le t\le1/4.$$
This is the viscosity solution of $u_t+|u_x|=0$ with initial data
$u_0(x)=d_{\mathbb T^1}(x,0)$. On a grid with an even number $N\ge4$ of
nodes, $h=1/N$, and $0$ a node, one step with $0<\tau\le h$ gives both the positive-interpolation
and upwind schemes value $\tau$ at $x=0$, whereas the exact solution there is
$0$. On the horizon $T=1/4$, choosing $M=N/2$ gives $\tau=T/M=h/2$; along
this even-grid family the one-step error is exactly $\tau$ and the
positive-interpolation mesh condition is satisfied.

## Facts & Assumptions

**Given:** The torus, the eikonal Hamiltonian, the profile, and the two
updates in [[alg-na-positive-interpolation-semilagrangian-hjb-step]] and
[[alg-na-upwind-hjb-grid-step]].

[F1] For $A=\{-1,1\}$, $b(a)=a$, $\ell=0$, the model Hamiltonian is
$H(p)=\max_{a\in A}(-ap)=|p|$
([[def-na-first-order-hjb-cauchy-problem]]).

[F2] The interpolation weights are nonnegative and reproduce linear
functions on each grid cell; the upwind rows use the one-sided derivative in
the velocity direction ([[alg-na-positive-interpolation-semilagrangian-hjb-step]],
[[alg-na-upwind-hjb-grid-step]]).

[F3] Under $h_{k,\max}^2/\tau_k\to0$, the semi-Lagrangian scheme covered by
the main convergence theorem converges to its viscosity solution
([[thm-na-first-order-hjb-scheme-convergence]]).

## Proof

1.1 Away from $x=0,1/2$ and the moving fronts $d_{\mathbb T^1}(x,0)=t$, the function is either constant zero or has $u_t=-1$ and $|u_x|=1$; it satisfies the PDE classically. Near a moving front on the increasing-distance side, put $s=x-t$ in a local lift; on the other side put $s=1-x-t$. In either case $u=\max(s,0)$. There is no $C^1$ upper test at this convex kink: its directional slopes would have to be at least $1$ in the positive $s$ direction and at most $0$ in the negative direction. Any $C^1$ lower test has $s$-slope $p\in[0,1]$. Use a second coordinate tangent to the moving front: the profile is constant in that direction, so the test's tangential derivative is zero. Thus $\phi_t=-p$ and $\phi_x=p$ on the increasing-distance side, or $\phi_x=-p$ on the decreasing-distance side; in both cases its residual is $-p+|p|=0$. At the antipode $x=1/2$ for $t<1/4$, the local profile is $1/2-t-|x-1/2|$. Its upper tests have spatial slope $p\in[-1,1]$ and time derivative $-1$, giving residual $-1+|p|\le0$; no lower test exists at that concave cusp. Thus the sub- and supersolution tests hold everywhere for $0<t<1/4$. The initial trace is $u_0$. [F1, given, algebra]

2.1 At $x=0$, the sampled data have $U_0=0$ and $U_{\pm1}=h$ because $u_0(\pm h)=h$. For either semi-Lagrangian action the footpoint is $\pm\tau$; linear interpolation between $0$ and $\pm h$ returns $\tau$ when $\tau\le h$, so the action minimum is $\tau$. For the upwind update the forward difference for $a=1$ and backward difference for $a=-1$ both equal $1$, and the CFL condition is $\tau/h\le1$; hence its minimum update is also $\tau$. Since $u(0,\tau)=0$, both one-step errors equal $\tau$. Taking $\tau=h/2$ gives $h^2/\tau=2h\to0$, and [F3] supplies convergence for the refined semi-Lagrangian family under its full hypotheses. [F2, F3, given, step 1.1, algebra] ∎