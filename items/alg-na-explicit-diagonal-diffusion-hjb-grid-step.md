---
id: alg-na-explicit-diagonal-diffusion-hjb-grid-step
kind: algorithm
title: Explicit monotone diagonal-diffusion Bellman grid update
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-periodic-diagonal-controlled-diffusion-hjb-problem, def-na-periodic-grid-and-tensor-multilinear-interpolation, lem-finite-set-has-max]
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
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§1.6, controlled second-order HJB operators and degenerate ellipticity."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, monotone second-order schemes and the comparison-dependent convergence theorem, printed pp. 274–276."
verification:
  precheck: n/a
---

## Definition

Use the model of [[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]] and a periodic grid with integers $N_j\ge3$, $h_j=1/N_j$. Choose an integer $M\ge1$, set $\tau=T/M$, and put $t_n=n\tau$ for $n=0,\ldots,M$. For a nodal array $V$, define
$$D_{jj}^hV_i=\frac{V_{i+e_j}-2V_i+V_{i-e_j}}{h_j^2}.$$
For a control $a$, define
$$D_{j,a}^{up}V_i=\begin{cases}(V_i-V_{i-e_j})/h_j,&b_j^a(x_i,t_n)\ge0,\\(V_{i+e_j}-V_i)/h_j,&b_j^a(x_i,t_n)<0.\end{cases}$$
The recurrence is
$$U_i^{n+1}=U_i^n+\tau\max_{a\in A}\left\{\sum_{j=1}^d\left[\alpha_j^a(x_i,t_n)D_{jj}^hU_i+b_j^a(x_i,t_n)D_{j,a}^{up}U_i\right]+f^a(x_i,t_n)\right\}.$$
At each time level $n=0,\ldots,M-1$, admit the update only when, at every node, control, and coordinate,
$$|b_j^a(x_i,t_n)|h_j\le\alpha_j^a(x_i,t_n),$$
and
$$\tau\max_{i,a}\sum_{j=1}^d\left(\frac{2\alpha_j^a(x_i,t_n)}{h_j^2}+\frac{|b_j^a(x_i,t_n)|}{h_j}\right)\le1.$$
Initialize by $U_i^0=u_0(x_i)$ and perform the updates for $n=0,\ldots,M-1$, evaluating coefficients at $(x_i,t_n)$. Return $U^M$. No claim about an arbitrary anisotropic central stencil is included.
