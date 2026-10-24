---
id: thm-na-positive-interpolation-hjb-step-monotone-stable-consistent
kind: theorem
title: Monotonicity, L-infinity stability, and consistency of the semi-Lagrangian HJB step
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-positive-interpolation-semilagrangian-hjb-step, lem-na-multilinear-interpolation-positive-and-second-order-accurate, def-na-first-order-hjb-cauchy-problem]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; the proof uses finite nodal arrays and pointwise estimates.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§2–4, positive interpolation, first-order drift approximation, and LISL monotonicity, printed pp. 2–5."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, monotonicity and consistency assumptions for approximation schemes, printed pp. 274–276."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the update $S_{h,\tau}$ of
[[alg-na-positive-interpolation-semilagrangian-hjb-step]], if $V\le W$ at all
nodes then $S_{h,\tau}V\le S_{h,\tau}W$. If $|\ell_a|\le L$, then
$$\|S_{h,\tau}V\|_\infty\le\|V\|_\infty+\tau L.$$
For $\phi\in C^2$ in space and time with bounded derivatives, on a compact
test region with $|D\phi|\le P$,
$$\frac{\phi(t_n+\tau,x_i)-S_{h,\tau}\phi(t_n,\cdot)_i}{\tau} =\phi_t(x_i,t_n)+H(x_i,t_n,D\phi(x_i,t_n)) +O\left(\tau+\frac{h_{\max}^2}{\tau}+\eta_k(P)\right).$$
The term $\eta_k(P)$ is zero when the full finite control set is used.

## Facts & Assumptions

**Given:** The positive-interpolation update, coefficient bounds $B,L$, a
periodic smooth test function, and the control-grid error $\eta_k(P)$.

[F1] The step is
$$S_{h,\tau}V_i=\min_{a\in A_k}\{I_hV(x_i+\tau b_a(x_i,t_n))+\tau\ell_a(x_i,t_n)\}$$
([[alg-na-positive-interpolation-semilagrangian-hjb-step]]).

[F2] The interpolant is order-preserving, contractive in $\ell^\infty$, and
approximates a smooth function with error at most
$\frac18\sum_jh_j^2\|\partial_{jj}\phi\|_\infty$
([[lem-na-multilinear-interpolation-positive-and-second-order-accurate]]).

[F3] The Hamiltonian and sign convention satisfy
$H=\max_{a\in A}(-b_a\cdot p-\ell_a)=-\min_{a\in A}(b_a\cdot p+\ell_a)$,
and $|b_a|\le B$, $|\ell_a|\le L$
([[def-na-first-order-hjb-cauchy-problem]]).

## Proof

1.1 If $V\le W$, [F2] gives $I_hV\le I_hW$ at every footpoint. Adding the same running cost preserves the inequality for each action, and taking the minimum preserves it again; hence $S_{h,\tau}V\le S_{h,\tau}W$. Also $|I_hV|\le\|V\|_\infty$ by the convex weights in [F2]. Every action value in [F1] therefore has absolute value at most $\|V\|_\infty+\tau L$, and so does their minimum. [F1, F2, F3, algebra]

1.2 Let $y_a=x_i+\tau b_a(x_i,t_n)$ in a periodic lift. By [F2], $$I_h\phi(t_n,\cdot)(y_a)=\phi(t_n,y_a)+O(h_{\max}^2\|D^2\phi\|_\infty).$$ Taylor expansion at $(x_i,t_n)$ gives $$\phi(t_n,y_a)+\tau\ell_a=\phi(t_n,x_i)+\tau(b_a\cdot D\phi+\ell_a)(x_i,t_n)+O(\tau^2B^2\|D^2\phi\|_\infty).$$ The minimum of finitely many entries changes by at most their largest perturbation. Replacing $A_k$ by $A$ changes the minimum of $b_a\cdot D\phi+\ell_a$ by at most $\eta_k(P)$, by [F3]. A time Taylor expansion then yields the normalized residual in the statement, because $-\min_{a\in A}(b_a\cdot D\phi+\ell_a)=H$. [F1, F2, F3, given, algebra]

2.1 Steps 1.1 and 1.2 prove order preservation, the stated sup-norm bound, and the local consistency error. The interpolation term is divided by $\tau$, so convergence of this residual requires the explicit condition $h_{\max}^2/\tau\to0$. No solution-error rate follows from these one-step estimates. [step 1.1, step 1.2] ∎
