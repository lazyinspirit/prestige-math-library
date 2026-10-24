---
id: alg-na-upwind-hjb-grid-step
kind: algorithm
title: CFL-monotone upwind update for first-order HJB equations
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-first-order-hjb-cauchy-problem, def-na-periodic-grid-and-tensor-multilinear-interpolation, def-periodic-one-way-advection-schemes, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: not-applicable
axiom_base: The algorithm is a finite array recurrence; no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: https://people.maths.ox.ac.uk/suli/nspdes.pdf
      locator: "§§6.5–6.6, explicit upwind rows and sign conventions, PDF pp. 97–104."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Use the model and coefficient notation of [[def-na-first-order-hjb-cauchy-problem]] and the periodic grid of [[def-na-periodic-grid-and-tensor-multilinear-interpolation]]. Choose an integer $M\ge1$, set $\tau=T/M$, and put $t_n=n\tau$ for $n=0,\ldots,M$. Choose a finite nonempty control set $A_k\subseteq A$. For a finite control model take $A_k=A$; for compact controls use a sequence of finite nonempty sets with the stated uniform Hamiltonian error. For each control and grid node put
$$b_{a,j}^+=\max\{b_{a,j},0\},\qquad b_{a,j}^- =\max\{-b_{a,j},0\},$$
and define the explicit row
$$G^a_i(V)=V_i+\tau\left[\sum_{j=1}^d\left(\frac{b_{a,j}^+(x_i,t_n)}{h_j}(V_{i+e_j}-V_i)+\frac{b_{a,j}^-(x_i,t_n)}{h_j}(V_{i-e_j}-V_i)\right)+\ell_a(x_i,t_n)\right].$$
The periodic HJB upwind update at time $t_n$ is
$$U_i^{n+1}=\min_{a\in A_k}G_i^a(U^n).$$
At every step $n=0,\ldots,M-1$, require the CFL condition
$$\tau\max_{a,i}\sum_{j=1}^d\frac{|b_{a,j}(x_i,t_n)|}{h_j}\le1$$
Initialize $U_i^0=u_0(x_i)$ and perform the updates for $n=0,\ldots,M-1$. Return $U^M$. Since the transport velocity in [[def-periodic-one-way-advection-schemes]] is $-b_a$ for this Hamiltonian sign convention, the displayed one-sided direction is its sign-reflected upwind row.
