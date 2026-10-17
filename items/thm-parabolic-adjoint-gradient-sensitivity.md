---
id: thm-parabolic-adjoint-gradient-sensitivity
kind: theorem
title: A parabolic adjoint gives the gradient when the state map is differentiable
status: published
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

Assume Countable Choice and $T>0$, and use the real evolution triple $(V,H,V^*)$ of [[def-parameterized-parabolic-variational-problem]]. On an open parameter set $\Theta\subseteq\mathbb R^m$, assume the state map $\theta\mapsto u_\theta$ is Fr\'echet differentiable into $W(0,T;V)$, with derivative $w_\eta$ in direction $\eta\in\mathbb R^m$. For each fixed $\theta$ and direction $\eta$, assume there is a null set $N_{\theta,\eta}\subset(0,T)$ such that the linearized equation below holds for every $t\notin N_{\theta,\eta}$ and simultaneously every $v\in V$, using representatives of its data:
$$\langle w_\eta'(t),v\rangle+a_\theta(t;w_\eta(t),v)=\langle f_\theta'[\eta](t),v\rangle-a_\theta'[\eta](t;u_\theta(t),v),\qquad w_\eta(0)=u_{0,\theta}'[\eta].$$
Let $\phi:H\times\Theta\to\mathbb R$ be $C^1$, and let $L:[0,T]\times V\times\Theta\to\mathbb R$ be measurable in time and $C^1$ in $(u,\theta)$ for almost every time, with a common integrable majorant that justifies differentiating its time integral. Assume $D_u\phi$ is represented by an element of $H$ and $D_uL(t,u_\theta,\theta)\in V^*$ is square-integrable in time. Suppose the adjoint $p\in W(0,T;V)$ satisfies the following equation simultaneously for every $v\in V$ outside one null set $M_\theta\subset(0,T)$, and has the stated terminal trace:
$$-\langle p'(t),v\rangle+a_\theta(t;v,p(t))=D_uL(t,u_\theta(t),\theta)[v],\qquad p(T)=\nabla_H\phi(u_\theta(T),\theta).$$
Then for $j(\theta)=\phi(u_\theta(T),\theta)+\int_0^T L(t,u_\theta(t),\theta)\,dt$,
$$D j(\theta)[\eta]=D_\theta\phi(u_\theta(T),\theta)[\eta]+(p(0),u_{0,\theta}'[\eta])_H+\int_0^T\left(D_\theta L(t,u_\theta,\theta)[\eta]+\langle f_\theta'[\eta](t),p(t)\rangle-a_\theta'[\eta](t;u_\theta(t),p(t))\right)dt.$$
The exceptional sets are independent of the test $v$; they need not be common to all parameters or directions. The forcing/form-derivative difference in the integrand is interpreted together. The hypotheses imply it is measurable and integrable: almost everywhere it equals $\langle w_\eta',p\rangle+\langle p',w_\eta\rangle+D_uL[w_\eta]$. No global boundedness or coercivity of $a_\theta$, or separability of $V$, is required for this conditional identity.

This is conditional on the displayed differentiable state and adjoint; it does not prove either exists. The adjoint form is transposed as shown, so symmetry of $a_\theta$ is not required.

## Facts & Assumptions

**Given:** $T>0$, the real evolution triple, differentiable parameterized state and objective, its linearized equation, and a solution of the stated terminal adjoint equation, with both displayed variational equations holding simultaneously for all tests outside their specified null sets.

[F1] The parameterized parabolic state and reduced objective use the variational equation on $W(0,T;V)$ with $H$ traces ([[def-parameterized-parabolic-variational-problem]]).

[F2] For $w,p\in W(0,T;V)$, the evolution-space pairing identity is $(p(T),w(T))_H-(p(0),w(0))_H=\int_0^T(\langle p',w\rangle+\langle w',p\rangle)dt$ ([[lem-parabolic-energy-pairing-and-trace]]).

[F3] Differentiable compositions and sums obey the Banach-space chain rule ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).

[A1] Countable Choice ([[def-countable-choice]]) is required by the pairing supplier ([[lem-parabolic-energy-pairing-and-trace]]). No use is made of a parabolic well-posedness theorem to infer state or adjoint existence.

[A2] For each fixed parameter and direction, the linearized and adjoint equations hold outside null sets independent of $v$. Their union, together with the null sets on which the $W$ representatives are undefined, still has measure zero. This is an explicit hypothesis, not a consequence of the fixed-test state convention in [F1].

## Proof

1.1 Apply [F3] to the terminal term and the running integrand. The common integrable majorant permits differentiation under the integral, so $$D j[\eta]=D_\theta\phi[\eta]+(\nabla_H\phi,w_\eta(T))_H+\int_0^T\bigl(D_\theta L[\eta]+D_uL[w_\eta]\bigr)dt.$$ The terminal condition replaces $\nabla_H\phi$ by $p(T)$. [F1, F3, given]

1.2 Fix $\theta,\eta$ and discard the union of the null sets in [A2]. At every remaining time, $w_\eta(t),p(t)\in V$ and both equations hold for all tests, so the choices $v=w_\eta(t)$ in the adjoint equation and $v=p(t)$ in the linearized equation are legitimate. Adding them and cancelling the two occurrences of $a_\theta(t;w_\eta(t),p(t))$ gives $$\langle f_\theta'[\eta],p\rangle-a_\theta'[\eta](u_\theta,p)=\langle w_\eta',p\rangle+\langle p',w_\eta\rangle+D_uL[w_\eta].$$ Each term on the right belongs to $L^1(0,T)$ by the $L^2(V^*)$ and $L^2(V)$ hypotheses and Cauchy--Schwarz. Thus the difference on the left has a measurable integrable representative without assuming either summand separately integrable. Apply [F2] to $w_\eta,p$; Countable Choice enters through this pairing supplier. [A1, A2, F2, given, algebra]

2.1 The pairing identity now gives $(p(T),w_\eta(T))_H=(p(0),u_{0,\theta}'[\eta])_H+\int_0^T(-D_uL[w_\eta]+\langle f_\theta'[\eta],p\rangle-a_\theta'[\eta](u_\theta,p))dt$. Substitute this into step 1.1; the terms $D_uL[w_\eta]$ cancel and yield the displayed formula. [F1, step 1.1, step 1.2, algebra] ∎ 
