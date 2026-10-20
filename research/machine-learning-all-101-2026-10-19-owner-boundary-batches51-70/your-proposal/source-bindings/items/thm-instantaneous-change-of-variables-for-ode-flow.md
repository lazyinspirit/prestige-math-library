---
id: thm-instantaneous-change-of-variables-for-ode-flow
kind: theorem
title: Instantaneous change of variables along a neural ODE flow
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-neural-ode
  - thm-neural-ode-global-smooth-flow
  - thm-continuous-flow-log-density-equation
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only through the published change-of-variables theorem to identify the pushforward density; the flow existence and smoothness argument is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations, §4 and Appendix A"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, §4.1"
      url: "https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $T>0$, let $d,q\ge1$, let $\Theta\subseteq\mathbb R^q$ be open, let $I\subseteq\mathbb R$ be an open interval containing $[0,T]$, and let $v:I\times\mathbb R^d\times\Theta\to\mathbb R^d$ be jointly $C^\infty$. For every compact $K\subseteq\Theta$, assume there are constants $L_K,M_K\ge0$ such that, for all $t\in[0,T]$, $\eta\in K$, and $z,w\in\mathbb R^d$,

$$\|v(t,z,\eta)-v(t,w,\eta)\|_2\le L_K\|z-w\|_2,\qquad \|v(t,0,\eta)\|_2\le M_K.$$

Fix $\theta\in\Theta$ and let $\Phi_t:=\Phi^\theta_{t,0}:\mathbb R^d\to\mathbb R^d$ be its flow. Let $p_0:\mathbb R^d\to(0,\infty)$ be a continuous probability density with respect to Lebesgue measure, define $\mu_0(E):=\int_Ep_0(z)\,dz$ for Borel $E$, and define the pushforward measure $\mu_t(E):=\mu_0(\Phi_t^{-1}(E))$. For $y\in\mathbb R^d$, set

$$p_t(y):=\frac{p_0(\Phi_t^{-1}(y))}{|\det D\Phi_t(\Phi_t^{-1}(y))|}.$$

Then $p_t$ is a density of $\mu_t$. For every $z_0\in\mathbb R^d$, write $z_t:=\Phi_t(z_0)$ and $J_t:=D\Phi_t(z_0)$; the determinant of $J_t$ is positive and

$$p_t(\Phi_t(z_0))=\frac{p_0(z_0)}{\det J_t}>0,\qquad \frac{d}{dt}\log p_t(z_t)=-\operatorname{tr}(D_zv(t,z_t,\theta))=-\sum_{i=1}^d\partial_{z_i}v_i(t,z_t,\theta),$$

The derivative identity holds for $0<t<T$ and has one-sided meanings at $0$ and $T$.

## Statement references

[Chen et al., §4 and Appendix A](https://arxiv.org/pdf/1806.07366)

[Papamakarios et al., §4.1](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the neural ODE hypotheses in the Statement, a fixed $\theta\in\Theta$, and the positive continuous initial probability density $p_0$.

[F1] [[def-neural-ode]]: for fixed $\theta$, the state satisfies $\dot z=v_\theta(t,z)$ on its interval.

[F2] [[thm-neural-ode-global-smooth-flow]]: under the stated smoothness, compact-neighborhood global Lipschitz, and origin-bound hypotheses, $\Phi^\theta_{t,s}$ exists on $[0,T]$ and each time slice is a smooth diffeomorphism, with identity flow at $t=s$.

[F3] [[thm-continuous-flow-log-density-equation]]: assuming Countable Choice, a common $C^1$ flow of $C^1$ diffeomorphisms and a positive continuous initial probability density, the pushforward density is $p_t(\Phi_t(x))=p_0(x)/\det D\Phi_t(x)>0$ and its logarithmic derivative along trajectories is minus the state divergence.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is assumed only through [F3]'s use of the library change-of-variables theorem.

## Proof

**Proof technique:** direct.

**Given:** The finite-time neural ODE, its compact-neighborhood hypotheses, Countable Choice, and $p_0$ as in the Statement.

1.1 Fix $\theta$. By [F1] this is a first-order IVP, and [F2] supplies its flow $\Phi_t$ on all of $[0,T]$; every slice is a $C^1$ diffeomorphism of $\mathbb R^d$ and $\Phi_0$ is the identity. Hence the flow and initial density satisfy the hypotheses of [F3]. [given, F1, F2, F3]

2.1 Apply [F3] using the assumed Countable Choice [A1]. It gives that the displayed $p_t$ is a density of the pushforward and that $p_t(\Phi_t(z_0))=p_0(z_0)/\det J_t>0$ with logarithmic derivative $-\operatorname{tr}(D_zv(t,z_t,\theta))$. By the definition of trace as the sum of diagonal entries, this is $-\sum_{i=1}^d\partial_{z_i}v_i(t,z_t,\theta)$; [F3] gives the stated endpoint convention. [A1, F3, step 1.1, algebra] ∎
