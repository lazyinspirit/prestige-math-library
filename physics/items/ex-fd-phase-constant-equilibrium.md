---
id: ex-fd-phase-constant-equilibrium
kind: example
title: Constant phase is an energy-stationary state
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - thm-fd-diffuse-interface-energy
dependency_roles:
  thm-fd-diffuse-interface-energy: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Example

Let $d\ge1$, $T>0$, $\varepsilon,M,\nu>0$, $W\in C^2(\mathbb R)$ be bounded below, and $c\in\mathbb R$. On $\mathbb T^d=\mathbb R^d/(2\pi\mathbb Z)^d$, consider the periodic equations $\partial_t\phi+u\cdot\nabla\phi=M\Delta\mu_c$, $\partial_tu+(u\cdot\nabla)u+\nabla\pi=\nu\Delta u-\phi\nabla\mu_c$, and $\nabla\cdot u=0$, with $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta\phi$. The constant fields $u=0$, $\phi=c$, and $\pi=0$ solve this system with constant chemical potential $\mu_c=\varepsilon^{-1}W'(c)$. Their total energy is $E(t)=(2\pi)^d\varepsilon^{-1}W(c)$ for all $t\in[0,T]$, so this is an energy-stationary state, meaning that its energy is constant in time; no local-minimum or stability claim is made. All quantities are dimensionless mathematical variables.

## Example references

[[def-fd-diffuse-interface-equations|Periodic system and total-energy functional]]

[[thm-fd-diffuse-interface-energy|Conditional smooth periodic energy identity]]

## Facts & Assumptions

**Given:** The parameters, potential, constant $c$, and periodic equations in the example statement.

[F1] [[thm-fd-diffuse-interface-energy]]: for a classical periodic solution of these equations, $E'(t)=-\nu\int_{\mathbb T^d}|\nabla u|^2\,dx-M\int_{\mathbb T^d}|\nabla\mu_c|^2\,dx$.

## Verification

1.1 For $u=0$ and $\phi=c$, all time derivatives and spatial derivatives of $u$ and $\phi$ vanish, while $\mu_c=\varepsilon^{-1}W'(c)$ is constant and therefore $\nabla\mu_c=\Delta\mu_c=0$. The phase equation has both sides zero; the momentum equation has every term zero; and $\nabla\cdot u=0$. Thus these fields are a classical periodic solution. [given, algebra]

2.1 Their kinetic and gradient-energy terms vanish, while the potential term integrates to $(2\pi)^d\varepsilon^{-1}W(c)$ because the fundamental cube has volume $(2\pi)^d$. Alternatively, [F1] gives $E'(t)=0$ because both dissipation integrands vanish. Hence the energy is constant and the state is energy-stationary. [given, F1, step 1.1, algebra] ∎
