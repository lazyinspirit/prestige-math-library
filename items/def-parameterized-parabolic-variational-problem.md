---
id: def-parameterized-parabolic-variational-problem
kind: definition
title: Parameter-dependent parabolic variational states and objectives
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-parabolic-evolution-triple-and-energy-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.1–1.2 and Chapter 3"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, Chapter 11"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
---

## Definition

Let $T>0$, let $(V,H,V^*)$ be the real evolution triple and let $\Theta\subseteq\mathbb R^m$ be open. A parameter-dependent parabolic variational problem specifies, for each $\theta\in\Theta$, a bilinear form $a_\theta(t;\cdot,\cdot)$ and data $f_\theta\in L^2(0,T;V^*)$, $u_{0,\theta}\in H$. A state is a function $u_\theta\in W(0,T;V)$ with continuous $H$ trace, $u_\theta(0)=u_{0,\theta}$, and
$$\langle u_\theta'(t),v\rangle_{V^*,V}+a_\theta(t;u_\theta(t),v)=\langle f_\theta(t),v\rangle_{V^*,V}$$
for every $v\in V$ and almost every $t$. When a state is specified, let $\phi:H\times\Theta\to\mathbb R$ be differentiable and let $L:(0,T)\times V\times\Theta\to\mathbb R$ be differentiable in $(v,\theta)$ for almost every $t$. Require $t\mapsto L(t,u_\theta(t),\theta)$ to be measurable and to belong to $L^1(0,T)$ for every parameter under consideration. Then the finite real number $j(\theta)=\phi(u_\theta(T),\theta)+\int_0^T L(t,u_\theta(t),\theta)\,dt$ is its reduced objective. This definition does not assert existence of a state, parameter differentiability of the state or reduced objective, or optimality.

