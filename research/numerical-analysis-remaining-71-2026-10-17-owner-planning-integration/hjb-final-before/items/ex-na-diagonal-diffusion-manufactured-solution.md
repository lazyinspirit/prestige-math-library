---
id: ex-na-diagonal-diffusion-manufactured-solution
kind: example
title: A periodic manufactured solution for the diagonal-diffusion HJB stencil
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-explicit-diagonal-diffusion-hjb-grid-step, def-na-periodic-diagonal-controlled-diffusion-hjb-problem, thm-na-diagonal-diffusion-stencil-consistency]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
axiom_base: This is an exact trigonometric calculation and uses no choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§1.6, controlled-diffusion HJB operator and degenerate-elliptic sign convention."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, smooth test consistency requirement for second-order schemes, printed pp. 274–276."
verification:
  precheck: pass
---

## Statement

For $d=1$, one control, $\alpha=1$, and $b=0$ on $\mathbb T^1$, set
$$u(x,t)=e^{-t}\cos(2\pi x),\qquad f(x,t)=(-1+4\pi^2)e^{-t}\cos(2\pi x).$$
Then $u_t-(u_{xx}+f)=0$ exactly. On a periodic grid $h=1/N$, the centered
diffusion scheme with $0<\tau\le h^2/2$ satisfies a normalized one-step
residual of order $O(\tau+h^2)$ on the sampled exact solution. This is a
local residual calculation, not a global solution-error estimate.

## Facts & Assumptions

**Given:** The smooth periodic function and forcing in the statement and the
one-control explicit scheme of
[[alg-na-explicit-diagonal-diffusion-hjb-grid-step]].

[F1] The continuous operator in one dimension is
$u_t-(\alpha u_{xx}+b u_x+f)=0$
([[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]]).

[F2] Under $b=0$ and $\alpha=1$, the normalized scheme residual equals the
time difference quotient minus $D_{xx}^h u+f$; its second-difference error
on smooth tests is controlled by
[[thm-na-diagonal-diffusion-stencil-consistency]].

## Proof

1.1 Direct differentiation gives $u_t=-u$ and $u_{xx}=-4\pi^2u$. Therefore $u_t-u_{xx}=(-1+4\pi^2)u=f$, proving the exact PDE identity in [F1]. The diffusion-dominance condition is automatic since $b=0$; the CFL condition is $2\tau/h^2\le1$, which is exactly the stated time-step bound. [F1, given, algebra]

2.1 The discrete second difference is $$D_{xx}^h u(x_i,t_n)= -\frac{4\sin^2(\pi h)}{h^2}u(x_i,t_n).$$ Taylor expansion in time gives $(u(x_i,t_n+\tau)-u(x_i,t_n))/\tau=u_t(x_i,t_n)+O(\tau)$, while $$u_{xx}-D_{xx}^h u= \left(\frac{4\sin^2(\pi h)}{h^2}-4\pi^2\right)u=O(h^2),$$ because $\sin z=z+O(z^3)$ at $z=0$. Thus the exact normalized residual is $O(\tau+h^2)$, agreeing with [F2]. No accumulated error is claimed. [F2, step 1.1, algebra] ∎