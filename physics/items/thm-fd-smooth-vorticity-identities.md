---
id: thm-fd-smooth-vorticity-identities
kind: theorem
title: "Smooth vorticity identities and two-dimensional norms"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - thm-fd-smooth-periodic-incompressible-ivp
  - def-countable-choice
dependency_roles:
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.6"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "Thomas Y. Hou, lecture notes, Blow-up or no blow-up?, equations (3.1)–(3.4)"
      url: "https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{2,3\}$, let $s\ge4$ be an integer, let $\nu\ge0$, and let $u:[0,T]\times Q_d\to\mathbb R^d$ be a smooth real solution of $u_t+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u$, $\sum_j\partial_ju_j=0$, where $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ has normalized measure and $\pi$ is a smooth periodic scalar. For $d=3$, define $\omega=\nabla\times u$ by $\omega_i=\sum_{j,k=1}^3\epsilon_{ijk}\partial_j u_k$, where $\epsilon_{123}=1$ and $\epsilon_{ijk}$ is totally antisymmetric; define $(a\times b)_i=\sum_{j,k=1}^3\epsilon_{ijk}a_jb_k$. Then $\omega_t+u\cdot\nabla\omega=(\omega\cdot\nabla)u+\nu\Delta\omega$. For $d=2$, define the scalar $\omega=\partial_1u_2-\partial_2u_1$; then $\omega_t+u\cdot\nabla\omega=\nu\Delta\omega$ and
$$\frac12\frac{d}{dt}\|\omega(t)\|_{L^2}^2=-\nu\|\nabla\omega(t)\|_{L^2}^2.$$
For every $\nu\ge0$ the scalar maximum bound $\|\omega(t)\|_{L^\infty}\le\|\omega(0)\|_{L^\infty}$ holds. These are exact identities and bounds on the given solution lifespan and assert no global existence or regularity result.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §2.1.6](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

[Hou, lecture notes, equations (3.1)–(3.4)](https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d,s,\nu$ as in the Statement, and the smooth periodic solution on $[0,T]$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: under Countable Choice, smooth divergence-free data on the normalized periodic torus give a unique local smooth solution of the stated incompressible equation for each fixed $\nu\ge0$.

## Proof

1.1 In dimension three, set $u\times\omega$ using the usual Levi-Civita component formula. Since $\operatorname{div}u=0$, the identity $u\cdot\nabla u=\nabla(|u|^2/2)-u\times\omega$ and the component expansion
$\nabla\times(u\times\omega)=u\,\operatorname{div}\omega-\omega\,\operatorname{div}u+(\omega\cdot\nabla)u-(u\cdot\nabla)\omega$
give $\nabla\times(u\cdot\nabla u)=(u\cdot\nabla)\omega-(\omega\cdot\nabla)u$. Taking the curl of the momentum equation annihilates the pressure gradient and commutes with $\partial_t$ and $\Delta$, yielding the stated 3D equation. [given, A1, F1, algebra]

2.1 In dimension two, regard $u=(u_1,u_2,0)$ and $\omega=(0,0,\partial_1u_2-\partial_2u_1)$. The 3D curl identity from step 1.1 applies to these fields, and $(\omega\cdot\nabla)u=0$ because $u$ is independent of the third coordinate. Its third component is therefore the stated scalar transport-diffusion equation. [given, step 1.1, algebra]

3.1 Multiply the scalar equation in step 2.1 by $\omega$ and integrate over the periodic torus. The transport integral is $\frac12\int u\cdot\nabla(\omega^2)\,d\mu=0$ by periodicity and $\operatorname{div}u=0$; integration by parts gives $\int\omega\Delta\omega\,d\mu=-\|\nabla\omega\|_2^2$. This proves the enstrophy identity. [given, step 2.1, algebra]

4.1 Set $M=\|\omega(0)\|_\infty$. For $\varepsilon>0$, the function $g(t,x)=\omega(t,x)-M-\varepsilon t$ is nonpositive at $t=0$. If it has a positive maximum on the compact cylinder $[0,T]\times Q_2$, it occurs at some $t_*>0$; there $\nabla g=0$, $\Delta g\le0$, and the time derivative from the left is nonnegative. But the equation in step 2.1 gives $g_t+u\cdot\nabla g=\nu\Delta g-\varepsilon<0$, a contradiction. Apply the same argument to $-\omega$, then let $\varepsilon\downarrow0$ to obtain $\|\omega(t)\|_\infty\le M$. [given, step 2.1, algebra] ∎