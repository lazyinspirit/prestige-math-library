---
id: ex-na-compact-control-quantization-hamiltonian-error
kind: example
title: Uniform Hamiltonian error for an evenly spaced compact-control grid
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-first-order-hjb-cauchy-problem, alg-na-positive-interpolation-semilagrangian-hjb-step, thm-na-first-order-hjb-scheme-convergence]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
axiom_base: This is a finite-dimensional algebraic calculation and uses no choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§1–3, compact-control HJB Hamiltonians and finite-control semi-Lagrangian approximation, printed pp. 1–4."
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 1 §6 and Chapter 3 §4, HJB comparison and finite-control scheme convergence, printed pp. 26–29 and 100–103."
verification:
  precheck: pass
---

## Statement

Let $A=[-1,1]$, $b(a)=a$, and $\ell(a)=a^2$. Then
$$H(p)=\max_{a\in[-1,1]}(-ap-a^2)= \begin{cases} p^2/4,&|p|\le2,\\ |p|-1,&|p|>2. \end{cases}$$
For $m\ge1$, let $A_m=\{-1+2r/m:r=0,\ldots,m\}$ and let
$H_m(p)=\max_{a\in A_m}(-ap-a^2)$. The uniform control-grid error satisfies
$$\sup_{p\in\mathbb R}|H_m(p)-H(p)|\le m^{-2}.$$
Thus $A_m$ satisfies the control approximation hypothesis of
[[def-na-first-order-hjb-cauchy-problem]]. For any continuous periodic initial
datum, its semi-Lagrangian scheme falls under
[[thm-na-first-order-hjb-scheme-convergence]] whenever the stated mesh
restrictions also hold.

## Facts & Assumptions

**Given:** The compact control set and coefficient functions in the statement
and the Hamiltonian convention of
[[def-na-first-order-hjb-cauchy-problem]].

[F1] For $g_p(a)=-ap-a^2$, completing the square gives
$g_p(a)=p^2/4-(a+p/2)^2$; hence its maximizer is the projection of
$-p/2$ onto $[-1,1]$ ([[def-na-first-order-hjb-cauchy-problem]]).

[F2] If $|p|\le2$, a nearest point of the evenly spaced grid $A_m$ is at
distance at most $1/m$ from $-p/2$; if $|p|>2$, the maximizing endpoint is
included in $A_m$ (finite-grid definition in the statement).

[F3] The convergence theorem requires the Hamiltonian errors to vanish on
bounded momentum sets and the semi-Lagrangian mesh condition
$h_{\max}^2/\tau\to0$
([[alg-na-positive-interpolation-semilagrangian-hjb-step]],
[[thm-na-first-order-hjb-scheme-convergence]]).

## Proof

1.1 Completing the square as in [F1], the unconstrained maximizing control is $a_*=-p/2$. It lies in $[-1,1]$ exactly when $|p|\le2$, where substitution gives $H(p)=p^2/4$. If $p>2$, the concave quadratic is maximized at $a=-1$ and gives $p-1$; if $p<-2$, it is maximized at $a=1$ and gives $-p-1$. This proves the displayed formula. [F1, given, algebra]

2.1 For $|p|\le2$, choose a nearest $a_m\in A_m$ to $a_*$. Then $$H(p)-H_m(p)=(a_m-a_*)^2\le m^{-2}$$ by [F1] and [F2]. For $|p|>2$, the maximizing endpoint belongs to $A_m$, so $H_m(p)=H(p)$. Also $H_m(p)\le H(p)$ since $A_m\subset A$. Taking the supremum proves the global error bound. Because $m^{-2}\to0$, condition [F3] is satisfied for every bounded momentum set (in fact for all momenta), so the stated convergence theorem applies along any mesh family satisfying its remaining hypotheses. [F1, F2, F3, step 1.1, algebra] ∎