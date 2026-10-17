---
id: def-additive-ode-and-partition
kind: definition
title: "Additive autonomous ODE partitions"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
---

## Definition

Let $d\ge1$, let $U\subseteq\mathbb R^d$ be open, and let $a,b:U\to\mathbb R^d$. The **additive autonomous ODE partition** with components $a$ and $b$ is the initial-value problem
$$y'(t)=a(y(t))+b(y(t)),\qquad y(t_0)=y_0\in U,$$
in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. The term *autonomous* means that neither component has a separate time argument. A numerical method may evaluate $a$ explicitly and solve an equation involving $b$ implicitly; this naming convention does not assert that either exact subflow exists or that an implicit stage has a solution.
