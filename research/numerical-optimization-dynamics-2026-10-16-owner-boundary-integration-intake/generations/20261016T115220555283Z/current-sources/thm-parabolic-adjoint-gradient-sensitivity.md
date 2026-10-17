---
id: thm-parabolic-adjoint-gradient-sensitivity
kind: theorem
title: A parabolic adjoint gives the gradient when the state map is differentiable
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-parameterized-parabolic-variational-problem, lem-parabolic-energy-pairing-and-trace, def-countable-choice, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the parabolic energy-pairing supplier; the theorem assumes the state and adjoint solutions and makes no separate existence claim."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, §11.1"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.1–1.2 and Chapter 3"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
---

## Statement

Assume Countable Choice, and use the real evolution triple $(V,H,V^*)$ of [[def-parameterized-parabolic-variational-problem]]. On an open parameter set $\Theta\subseteq\mathbb R^m$, assume the state map $\theta\mapsto u_\theta$ is Fr\'echet differentiable into $W(0,T;V)$, with derivative $w_\eta$ in direction $\eta\in\mathbb R^m$. Assume, for every $v\in V$ and almost every $t$,
$$\langle w_\eta'(t),v\rangle+a_\theta(t;w_\eta(t),v)=\langle f_\theta'[\eta](t),v\rangle-a_\theta'[\eta](t;u_\theta(t),v),\qquad w_\eta(0)=u_{0,\theta}'[\eta].$$
Let $\phi:H\times\Theta\to\mathbb R$ be $C^1$, and let $L:[0,T]\times V\times\Theta\to\mathbb R$ be measurable in time and $C^1$ in $(u,\theta)$ for almost every time, with a common integrable majorant that justifies differentiating its time integral. Assume $D_u\phi$ is represented by an element of $H$ and $D_uL(t,u_\theta,\theta)\in V^*$ is square-integrable in time. Suppose the adjoint $p\in W(0,T;V)$ satisfies
$$-\langle p'(t),v\rangle+a_\theta(t;v,p(t))=D_uL(t,u_\theta(t),\theta)[v],\qquad p(T)=\nabla_H\phi(u_\theta(T),\theta).$$
Then for $j(\theta)=\phi(u_\theta(T),\theta)+\int_0^T L(t,u_\theta(t),\theta)\,dt$,
$$D j(\theta)[\eta]=D_\theta\phi(u_\theta(T),\theta)[\eta]+(p(0),u_{0,\theta}'[\eta])_H+\int_0^T\left(D_\theta L(t,u_\theta,\theta)[\eta]+\langle f_\theta'[\eta](t),p(t)\rangle-a_\theta'[\eta](t;u_\theta(t),p(t))\right)dt.$$
This is conditional on the displayed differentiable state and adjoint; it does not prove either exists. The adjoint form is transposed as shown, so symmetry of $a_\theta$ is not required.

## Facts & Assumptions

**Given:** The real evolution triple, differentiable parameterized state and objective, its linearized equation, and a solution of the stated terminal adjoint equation.

[F1] The parameterized parabolic state and reduced objective use the variational equation on $W(0,T;V)$ with $H$ traces ([[def-parameterized-parabolic-variational-problem]]).

[F2] For $w,p\in W(0,T;V)$, the evolution-space pairing identity is $(p(T),w(T))_H-(p(0),w(0))_H=\int_0^T(\langle p',w\rangle+\langle w',p\rangle)dt$ ([[lem-parabolic-energy-pairing-and-trace]]).

[F3] Differentiable compositions and sums obey the Banach-space chain rule ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).

[A1] Countable Choice ([[def-countable-choice]]) is required by the pairing supplier ([[lem-parabolic-energy-pairing-and-trace]]). No use is made of a parabolic well-posedness theorem to infer state or adjoint existence.

## Proof

1.1 Apply [F3] to the terminal term and the running integrand. The common integrable majorant permits differentiation under the integral, so $$D j[\eta]=D_\theta\phi[\eta]+(\nabla_H\phi,w_\eta(T))_H+\int_0^T\bigl(D_\theta L[\eta]+D_uL[w_\eta]\bigr)dt.$$ The terminal condition replaces $\nabla_H\phi$ by $p(T)$. [F1, F3, given]

1.2 Apply [F2] to $w_\eta$ and $p$. By the adjoint equation with $v=w_\eta$ and the linearized state equation with $v=p$, the integrand in its right side is $$\langle p',w_\eta\rangle+\langle w_\eta',p\rangle=a_\theta(t;w_\eta,p)-D_uL[w_\eta]+\langle f_\theta'[\eta],p\rangle-a_\theta(t;w_\eta,p)-a_\theta'[\eta](u_\theta,p),$$ so the two terms containing $a_\theta(t;w_\eta,p)$ cancel. Countable Choice enters here through the pairing result [F2]. [A1, F2, given, algebra]

2.1 The pairing identity now gives $(p(T),w_\eta(T))_H=(p(0),u_{0,\theta}'[\eta])_H+\int_0^T(-D_uL[w_\eta]+\langle f_\theta'[\eta],p\rangle-a_\theta'[\eta](u_\theta,p))dt$. Substitute this into step 1.1; the terms $D_uL[w_\eta]$ cancel and yield the displayed formula. [F1, step 1.1, step 1.2, algebra] ∎ 
