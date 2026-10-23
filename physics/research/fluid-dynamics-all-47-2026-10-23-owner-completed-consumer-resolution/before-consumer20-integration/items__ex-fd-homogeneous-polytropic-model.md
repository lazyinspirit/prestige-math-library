---
id: ex-fd-homogeneous-polytropic-model
kind: example
title: Homogeneous translating polytropic fluid
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-local-polytropic-model-evolution
dependency_roles:
  pthm-fd-local-polytropic-model-evolution: physical-result
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: >-
  Exact spatially homogeneous positive-density state of the unforced
  polytropic Euler model on a periodic cell. It makes no thermal, molecular,
  shock, or empirical claim.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Fluid Mechanics, Chapter 3
      url: https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf
      locator: §4.5, PDF pp. 170–171; compressible energy-density context.
empirical_premises: []
verification:
  precheck: pending
---

## Example

Assume the Axiom of Countable Choice. Let $d\in\{1,2,3\}$ and let $L>0$ be measured in metres, so the physical periodic cell is $\mathbb T_L^d=(\mathbb R/(2\pi L\mathbb Z))^d$ with position $X$ in metres and time $t$ in seconds. In SI units, choose a constant density $\rho_*>0$ kilograms per cubic metre, a constant velocity vector $V_*\in\mathbb R^d$ in metres per second, a constant $\kappa_{\mathrm{phys}}>0$ in pascals times $(\mathrm{m}^3/\mathrm{kg})^\gamma$, and a dimensionless exponent $\gamma>1$. In the unforced polytropic Euler model with pressure $p_{\mathrm{phys}}=\kappa_{\mathrm{phys}}\rho_{\mathrm{phys}}^\gamma$, take initial data $\rho_{\mathrm{phys}}(0,X)=\rho_*$ and $u_{\mathrm{phys}}(0,X)=V_*$. The fields $\rho_{\mathrm{phys}}(t,X)=\rho_*$, $u_{\mathrm{phys}}(t,X)=V_*$, and $p_{\mathrm{phys}}(t,X)=\kappa_{\mathrm{phys}}\rho_*^\gamma$ form a smooth solution for every $t\ge0$. Its total energy density $\tfrac12\rho_*|V_*|^2+\kappa_{\mathrm{phys}}\rho_*^\gamma/(\gamma-1)$, measured in pascals, is constant in space and time. The unique local solution branch for these data is this homogeneous translating state.

## Example references

[[pthm-fd-local-polytropic-model-evolution]]

[David Tong, Fluid Mechanics, Chapter 3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf).

## Facts & Assumptions

**Given:** Countable Choice, $d,L,\rho_*,V_*,\kappa_{\mathrm{phys}},\gamma$ as in the Example, and the force-free periodic polytropic Euler model.

[F1] [[pthm-fd-local-polytropic-model-evolution]]: its current Statement gives unique smooth local evolution and mean-energy conservation for smooth positive-density periodic data in the fixed polytropic model, conditional on Countable Choice and its stated suppliers.

## Verification

**Given:** The Example data, the exact local model equation in the Statement, and [F1].

1.1 Since $\rho_{\mathrm{phys}}$ and $u_{\mathrm{phys}}$ are constant in $t$ and $X$, $\partial_t\rho_{\mathrm{phys}}=0$, $\nabla_X\cdot(\rho_{\mathrm{phys}}u_{\mathrm{phys}})=0$, and $\partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla_X)u_{\mathrm{phys}}=0$. Thus the mass equation holds. [given, algebra]

2.1 The pressure $\kappa_{\mathrm{phys}}\rho_*^\gamma$ is constant, so its gradient vanishes; the momentum equation also holds. The density stays strictly positive, and all fields are smooth and periodic. [given, step 1.1, algebra]

3.1 The local theorem [F1] gives uniqueness for these same initial data. Therefore its local branch coincides with the constant solution verified in steps 1.1 and 2.1, which already extends for every $t\ge0$. Its energy density is the same constant displayed in the Example. [given, F1, step 1.1, step 2.1, algebra] ∎
