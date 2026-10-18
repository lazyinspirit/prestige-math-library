---
id: def-na-first-order-hjb-cauchy-problem
kind: definition
title: Periodic first-order controlled Hamilton–Jacobi Cauchy problem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-hamilton-jacobi-cauchy-problem, def-viscosity-subsolution-and-supersolution, def-na-periodic-grid-and-tensor-multilinear-interpolation, thm-euclidean-semicontinuous-extreme-value-theorem]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: not-applicable
axiom_base: Definition only; no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 1 §§1–6, especially the first-order Cauchy problem and comparison theorem, printed pp. 9–29."
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§1, controlled first-order and second-order HJB Cauchy equations, printed pp. 1–2."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $d,q\ge1$, $T>0$, and let $A$ be a nonempty compact subset of
$\mathbb R^q$ (a finite action set is included). For each $a\in A$, let
$b_a:\mathbb T^d\times[0,T]\to\mathbb R^d$ and
$\ell_a:\mathbb T^d\times[0,T]\to\mathbb R$ be bounded and jointly
continuous in $(x,t,a)$. Write $b_a,\ell_a$ also for their periodic lifts to
$\mathbb R^d\times[0,T]$. Assume there are constants $B,L<\infty$ such that
$$|b_a(x,t)|\le B,\qquad |\ell_a(x,t)|\le L,$$
and for all $a\in A$, $x,y\in\mathbb R^d$, and $t,s\in[0,T]$,
$$|b_a(x,t)-b_a(y,s)|+|\ell_a(x,t)-\ell_a(y,s)| \le L(|x-y|+|t-s|).$$
Given continuous periodic initial data $u_0:\mathbb T^d\to\mathbb R$, define
$$H(x,t,p)=\max_{a\in A}\{-b_a(x,t)\cdot p-\ell_a(x,t)\}.$$
The **periodic first-order controlled Hamilton–Jacobi Cauchy problem** is
$$u_t+H(x,t,Du)=0\quad\text{on }\mathbb T^d\times(0,T),\qquad u(x,0)=u_0(x).$$
The signs are fixed by
$u_t=\min_{a\in A}\{b_a\cdot Du+\ell_a\}$. Whenever the controls are
discretized, use a sequence of finite nonempty sets $A_k\subseteq A$ and define
$$H_k(x,t,p):=\max_{a\in A_k}(-b_a\cdot p-\ell_a).$$
Define the Hamiltonian error by
$$\eta_k(R):=\sup_{x,t,|p|\le R}|H_k(x,t,p)-H(x,t,p)|.$$
The sequence is admissible when $\eta_k(R)\to0$ for every $R<\infty$.
Exact minimization over $A$ corresponds to $\eta_k=0$. Scheme convergence below
uses this explicit control-grid error whenever the controls are discretized.

## Remarks

The compact action set and continuity make each displayed maximum attained.
The coefficient assumptions imply the exact first-order comparison bounds on
the periodic extension to $\mathbb R^d$:
$$|H(x,t,p)-H(y,s,p)|\le L(1+|p|)(|x-y|+|t-s|),\qquad |H(x,t,p)-H(x,t,p')|\le B|p-p'|.$$
Thus the published whole-space comparison theorem applies once bounded upper
semicontinuous subsolutions and bounded lower semicontinuous supersolutions
with the same pointwise initial ordering have been established.
