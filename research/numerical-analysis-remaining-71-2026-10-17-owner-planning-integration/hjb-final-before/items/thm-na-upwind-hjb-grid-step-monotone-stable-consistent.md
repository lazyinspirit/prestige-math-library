---
id: thm-na-upwind-hjb-grid-step-monotone-stable-consistent
kind: theorem
title: Monotonicity, L-infinity stability, and consistency of the upwind HJB step
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-upwind-hjb-grid-step, def-na-first-order-hjb-cauchy-problem, cor-taylor-remainder-bound]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; the proof is finite row algebra and Taylor's theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: https://people.maths.ox.ac.uk/suli/nspdes.pdf
      locator: "§§6.5–6.6, explicit upwind row and smooth consistency, PDF pp. 97–104."
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 3 §4, monotone and consistent finite-difference schemes, printed pp. 100–103."
verification:
  precheck: pass
---

## Statement

Assume the first-order HJB coefficients satisfy the hypotheses of
[[def-na-first-order-hjb-cauchy-problem]]. Under the CFL condition in
[[alg-na-upwind-hjb-grid-step]], each one-control update is a convex
combination of the current node and its one-sided neighbors plus
$\tau\ell_a$. Consequently the control-minimum update is order-preserving and
$$\|U^{n+1}\|_\infty\le\|U^n\|_\infty+\tau L.$$
For a smooth periodic test function $\phi$ with bounded derivatives through
order two, the normalized local residual satisfies
$$\frac{\phi(t_n+\tau,x_i)-S_{h,\tau}\phi(t_n,\cdot)_i}{\tau} =\phi_t(x_i,t_n)+H(x_i,t_n,D\phi(x_i,t_n))+O(\tau+h_{\max}+\eta_k(P)),$$
where $S_{h,\tau}$ is the scheme map, $h_{\max}=\max_jh_j$, $P$ bounds
$|D\phi|$ on the tested compact set, and $\eta_k(P)=0$ for exact control
minimization.

## Facts & Assumptions

**Given:** The periodic upwind update, its CFL condition, bounded coefficient
and running-cost bounds, and a smooth periodic test function.

[F1] For fixed $a$, the row is
$$G_i^a(V)=\left(1-\tau\sum_j\frac{|b_{a,j}|}{h_j}\right)V_i+ \tau\sum_j\left(\frac{b_{a,j}^+}{h_j}V_{i+e_j}+\frac{b_{a,j}^-}{h_j}V_{i-e_j}\right)+\tau\ell_a,$$
with periodic indices and $b^+=\max(b,0)$, $b^- =\max(-b,0)$; the scheme
takes the minimum of these rows ([[alg-na-upwind-hjb-grid-step]]).

[F2] For $g\in C^2$ with $|g''|\le M$, Taylor's theorem bounds a first-order
increment by its linear term plus $M h^2/2$
([[cor-taylor-remainder-bound]]).

[F3] The HJB sign convention is
$H(x,t,p)=-\min_{a\in A}(b_a(x,t)\cdot p+\ell_a(x,t))$
([[def-na-first-order-hjb-cauchy-problem]]).

## Proof

1.1 The CFL condition makes the center coefficient in [F1] nonnegative; all neighbor coefficients are nonnegative by $b_{a,j}^\pm\ge0$. Their sum is $$1-\tau\sum_j|b_{a,j}|/h_j+\tau\sum_j(b_{a,j}^++b_{a,j}^-)/h_j=1.$$ Thus each row is a convex combination of nodal values plus $\tau\ell_a$ and is order-preserving. A pointwise minimum of order-preserving maps is order-preserving. Every row value lies in $[-\|U^n\|_\infty-\tau L,\|U^n\|_\infty+\tau L]$, so the minimum has the same bound. [F1, given, algebra]

1.2 If $b_{a,j}\ge0$, the drift term in [F1] is $b_{a,j}(\phi(x_i+h_je_j)-\phi(x_i))/h_j$; if $b_{a,j}<0$, it is $b_{a,j}(\phi(x_i)-\phi(x_i-h_je_j))/h_j$. In either case it equals $b_{a,j}\phi_{x_j}(x_i)+O(|b_{a,j}|h_j\|\phi_{x_jx_j}\|_\infty)$ by [F2]. The time increment divided by $\tau$ is $\phi_t(x_i,t_n)+O(\tau\|\phi_{tt}\|_\infty)$. The minimum is Lipschitz with respect to uniform perturbations of its entries, and replacing $A$ by $A_k$ changes the Hamiltonian by at most $\eta_k(P)$. Combining these estimates and [F3] gives the stated residual. [F1, F2, F3, given, algebra]

2.1 The weights in [F1] show that the upwind step is a monotone, stable, consistent approximation with the stated error. This conclusion is local consistency only and asserts no solution-error rate. [F1, step 1.1, step 1.2] ∎
