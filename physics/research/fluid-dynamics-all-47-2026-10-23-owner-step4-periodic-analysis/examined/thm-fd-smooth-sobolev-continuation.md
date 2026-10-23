---
id: thm-fd-smooth-sobolev-continuation
kind: theorem
title: "Smooth Sobolev continuation criterion"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-smooth-polytropic-euler-ivp
  - def-fd-polytropic-symmetric-variables
  - def-countable-choice
dependency_roles:
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  def-fd-polytropic-symmetric-variables: mathematical-premise
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
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §§2.1.5–2.1.6"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For the periodic incompressible IVP with $d\in\{1,2,3\}$, $\nu\ge0$, smooth real divergence-free initial data on the normalized torus $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$, and integer $s\ge4$, let $u$ be the unique maximal smooth solution on $[0,T^*)$. Maximal means that no smooth solution in the same class on a larger interval agrees with $u$ on $[0,T^*)$. If $T^*<\infty$ and $\sup_{t<T^*}\|u(t)\|_{H^s}<\infty$, then $u$ extends smoothly to an interval $[0,T^*+\epsilon]$ for some $\epsilon>0$.

For the positive-density polytropic Euler IVP with $d\in\{1,2,3\}$, $\kappa>0$, $\gamma>1$, and integer $s\ge4$, let $q=(r,u)$ be the unique maximal smooth solution in the symmetric variables from the stated definition, on $[0,T^*)$, with $r(t,x)>0$. If $T^*<\infty$, $\sup_{t<T^*}\|q(t)\|_{H^s}<\infty$, and $\inf_{t<T^*,\,x\in Q_d}r(t,x)>0$, then $q$ and its positive density $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$ extend smoothly beyond $T^*$.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[thm-fd-smooth-polytropic-euler-ivp]]

[[def-fd-polytropic-symmetric-variables]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §§2.1.5–2.1.6](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the exact periodic local IVP interfaces and conventions in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: its current proof gives $T_0=(2C_s\|u_0\|_{H^s})^{-1}$ for nonzero data and $T_0=1$ for zero data, with $C_s$ depending only on $d,s$. Thus a common positive lower bound follows whenever $\|u_0\|_{H^s}$ is uniformly bounded; it is independent of $\nu$ and higher Sobolev norms.

[F2] [[thm-fd-smooth-polytropic-euler-ivp]]: its current proof gives $T_0=(2C_s\|q_0\|_{H^s})^{-1}$ for nonzero data and $\|r(t)-r(0)\|_\infty\le C_1t\|q_0\|_{H^s}^2$; choose a smaller time to retain $r(t)\ge\frac12\min r(0)$. The inverse density map is the one in [[def-fd-polytropic-symmetric-variables]].

## Proof

1.1 In either branch, the corresponding local theorem [F1] or [F2] gives a nonempty interval of smooth solution. Local uniqueness makes any two such solutions with the same data agree on their common interval. Taking the union over all right endpoints on which a solution exists therefore defines a unique solution on an interval $[0,T^*)$, where $T^*$ is the supremum of those endpoints; the same local uniqueness makes the union well-defined and maximal. [given, A1, F1, F2]

2.1 In the incompressible branch, let $M=\sup_{t<T^*}\|u(t)\|_{H^s}<\infty$ and $M_1=\max\{1,M\}$. The current proof of [F1] gives a restart lifespan at least $\epsilon=\min\{1,(2C_sM_1)^{-1}\}>0$ for every datum $u(t_0)$ with $t_0<T^*$. Choose $t_0<T^*$ with $T^*-t_0<\epsilon/2$. The local theorem applied at $t_0$ gives a smooth solution beyond $T^*$; by [F1] uniqueness it agrees with the maximal solution on the overlap $[t_0,T^*)$. Patching them extends $u$ beyond $T^*$, as required. [given, A1, F1, step 1.1]

2.2 In the polytropic branch, let $M=\sup_{t<T^*}\|q(t)\|_{H^s}<\infty$, $M_1=\max\{1,M\}$, and $r_*=\inf_{t<T^*,\,x\in Q_d}r(t,x)>0$. By [F2], every restart datum has an $H^s$ lifespan at least $(2C_sM_1)^{-1}$, while positivity persists for at least $r_*/(2C_1M_1^2)$. Thus $\epsilon=\min\{1,(2C_sM_1)^{-1},r_*/(2C_1M_1^2)\}>0$ works uniformly for all $q(t_0)$. Choose $t_0$ with $T^*-t_0<\epsilon/2$ and apply [F2] at $q(t_0)$. Uniqueness on the overlap gives a smooth extension of $q$ beyond $T^*$; the positive lower bound keeps the inverse map $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$ smooth there. [given, A1, F2, step 1.1]

3.1 The maximality in the Statement rules out a finite endpoint satisfying either set of bounds. The constructed extensions establish both continuation conclusions without requiring a limit of the solution at $T^*$. [given, A1, F1, F2, step 1.1, step 2.1, step 2.2] ∎