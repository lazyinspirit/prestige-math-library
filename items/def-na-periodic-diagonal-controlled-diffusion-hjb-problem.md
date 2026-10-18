---
id: def-na-periodic-diagonal-controlled-diffusion-hjb-problem
kind: definition
title: Periodic diagonal controlled-diffusion HJB Cauchy problem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-viscosity-subsolution-and-supersolution, def-na-periodic-grid-and-tensor-multilinear-interpolation, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: not-applicable
axiom_base: Definition only; the action set is finite and no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§1.6, controlled second-order HJB operators; §8, parabolic viscosity conventions and comparison."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§1 second-order viscosity definition and §2 monotone-stable-consistent convergence framework, printed pp. 272–276."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $d\ge1$, $T>0$, and let $A$ be a nonempty finite ordered control set.
For each $a\in A$ and $j=1,\ldots,d$, let
$\alpha_j^a,b_j^a,f^a:\mathbb T^d\times[0,T]\to\mathbb R$ be bounded and
periodic, jointly continuous in $(x,t)$, and uniformly Lipschitz in $(x,t)$.
Assume a common constant $\alpha_*>0$ satisfies
$$\alpha_j^a(x,t)\ge\alpha_*\qquad\text{for every }a,j,x,t.$$
The **diagonal controlled-diffusion HJB Cauchy problem** is
$$u_t-\max_{a\in A}\left\{ \sum_{j=1}^d\bigl(\alpha_j^a(x,t)u_{x_jx_j}+b_j^a(x,t)u_{x_j}\bigr)+f^a(x,t) \right\}=0\quad\text{on }\mathbb T^d\times(0,T),$$
with continuous periodic initial data $u(x,0)=u_0(x)$. In the convention
$u_t+F(x,t,Du,D^2u)=0$, this has
$$F(x,t,p,X)=-\max_{a\in A}\left\{ \sum_j(\alpha_j^a X_{jj}+b_j^a p_j)+f^a\right\},$$
which is nonincreasing in each diagonal Hessian entry. No off-diagonal
diffusion or arbitrary anisotropic central stencil is covered.

## Remarks

The lower bound $\alpha_*>0$ is part of this selected coefficient branch; the
monotonicity proof below only needs the separate mesh diffusion-dominance and
time-step inequalities. The definition itself asserts no solution existence or uniqueness. Local draft
items now prove comparison for the full stated coefficient class and use it to
prove unconditional convergence and existence along an admissible mesh family.
Those new arguments remain subject to the native independent reviews and gates
and have not received workflow acceptance.
