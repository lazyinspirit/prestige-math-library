---
id: def-parameterized-elliptic-variational-problem
kind: definition
title: Parameter-dependent coercive elliptic variational states and objectives
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-hilbert-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.1–1.2 and Example 3.39"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §§2.4–3"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Definition

Let $V$ be a real Hilbert space, let $\Theta\subseteq\mathbb R^m$ be open, and write $V^*$ for the continuous real dual. A parameter-dependent coercive elliptic variational problem is a family of bounded bilinear forms $a_\theta:V\times V\to\mathbb R$ and bounded linear functionals $\ell_\theta\in V^*$ such that, on each parameter neighborhood under discussion, $\|a_\theta\|\le M$ and $a_\theta(v,v)\ge\alpha\|v\|_V^2$ for fixed $M<\infty$ and $\alpha>0$. Operator-norm $C^1$ data means that the maps $\theta\mapsto A_\theta\in\mathcal L(V,V^*)$, $A_\theta u:=a_\theta(u,\cdot)$, and $\theta\mapsto\ell_\theta\in V^*$ are continuously Fréchet differentiable. A state at $\theta$ is a vector $u_\theta\in V$ satisfying $a_\theta(u_\theta,v)=\ell_\theta(v)$ for every $v\in V$. When a state is specified, a $C^1$ objective $J:V\times\Theta\to\mathbb R$ defines the reduced objective $j(\theta)=J(u_\theta,\theta)$. This definition alone asserts neither state existence nor uniqueness of an optimizer.

