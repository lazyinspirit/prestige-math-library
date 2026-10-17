---
id: ex-distributed-heat-source-control-with-an-exact-box-optimum
kind: example
title: A distributed heat source has an exact box-constrained optimum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - cor-linear-elliptic-control-projection-formula
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: distributed elliptic state/adjoint, tracking objective, and box variational inequality."
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§§2–3, printed pp. 5–25: weak elliptic control model and first-order optimality framework; the exact trigonometric data are verified locally."
---

## Statement

Assume Countable Choice. Let $\Omega=(0,1)$, $V=H^1_0(0,1)$, $U=H=L^2(0,1)$, and $a(u,v)=\int_0^1(u'v'+uv)\,dx$. Let $Bq$ be the $L^2$ load functional $v\mapsto\int_0^1qv\,dx$, set $q_a=0$, $q_b=1$, and $\alpha=1$. Put $q_*(x)=\frac12\sin(\pi x)$ and $u_*(x)=q_*(x)/(\pi^2+1)$, which solve the state equation. Set $p_*(x)=-q_*(x)$ and $u_d(x)=u_*(x)+\frac12(\pi^2+1)\sin(\pi x)$. Define $J(q)=\frac12\|u(q)-u_d\|_{L^2}^2+\frac12\|q\|_{L^2}^2$. Then $q_*$ is the unique optimal control, and its adjoint is $p_*$.

## Facts & Assumptions
**Given:** The one-dimensional coercive elliptic control problem, the admissible box $0\le q\le1$, and the exactly defined target $u_d$.

[F1] The state and adjoint equations have unique weak solutions under the bounded coercive form hypotheses ([[thm-linear-elliptic-control-state-and-adjoint-wellposedness]]).

[F2] For $\alpha>0$, an admissible control satisfying the adjoint box projection formula is the unique minimizer ([[cor-linear-elliptic-control-projection-formula]]).

## Verification

1.1 Since $-u_*''+u_*=q_*$ and $u_*(0)=u_*(1)=0$, integration by parts gives $a(u_*,v)=(q_*,v)_{L^2}$ for every $v\in H^1_0(0,1)$; uniqueness in [F1] identifies the state. Since $-p_*''+p_*=-\frac12(\pi^2+1)\sin(\pi x)=u_*-u_d$ and $p_*$ has zero boundary values, the same argument verifies the adjoint equation. [F1, given, algebra]

2.1 The adjoint identity gives $-p_*/\alpha=q_*$. This function lies in $[0,1]$ almost everywhere, so [F2] clips it to itself. The projection formula gives the variational inequality, and positive regularization makes the minimizer unique. [F2, step 1.1, given, algebra] ∎
