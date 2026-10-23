---
id: ex-fd-homogeneous-polytropic-model
kind: example
title: Homogeneous translating polytropic fluid
status: published
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
  Exact spatially homogeneous positive-density state of the unforced polytropic
  Euler model on a periodic cell. It makes no thermal, molecular, shock, or
  empirical claim.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 4: Waves"
      url: https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf
      locator: §4.6, printed pp.170–171 (PDF file pp.60–61), equations(4.97)–(4.101),
        especially energy conservation(4.100) and ideal-gas
        internal-energy/enthalpy context(4.101).
empirical_premises: []
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Assume the Axiom of Countable Choice. Let $d\in\{1,2,3\}$ and $L>0$ measured in metres, and write $\mathbb T_L^d=(\mathbb R/(2\pi L\mathbb Z))^d$ for the coordinate torus. When $d=3$ it is the physical cell; when $d=1,2$ it is the reduced coordinate torus and the physical cell is $\mathbb T_L^3$. In SI units, choose a constant density $\rho_*>0$ in kilograms per cubic metre, a constant velocity $V_*\in\mathbb R^d$ in metres per second, a constant $\kappa_{\mathrm{phys}}>0$ in pascals times $(\mathrm{m}^3/\mathrm{kg})^\gamma$, and a dimensionless exponent $\gamma>1$. Define $W_*\in\mathbb R^3$ by $W_*=V_*$ for $d=3$ and $W_*=(V_{*,1},\ldots,V_{*,d},0,\ldots,0)$ for $d=1,2$. Identify fields on the three-dimensional torus with their smooth $2\pi L$-periodic lifts to $\mathbb R^3$ when applying the local continuum equations. In the unforced three-dimensional polytropic Euler model with $p_{\mathrm{phys}}=\kappa_{\mathrm{phys}}\rho_{\mathrm{phys}}^\gamma$ and adopted specific internal energy $e_{\mathrm{phys}}(\rho)=\kappa_{\mathrm{phys}}\rho^{\gamma-1}/(\gamma-1)$, take initial data $\rho_{\mathrm{phys}}(0,X)=\rho_*$ and $u_{\mathrm{phys}}(0,X)=W_*$. The constant fields $\rho_{\mathrm{phys}}(t,X)=\rho_*$, $u_{\mathrm{phys}}(t,X)=W_*$, and $p_{\mathrm{phys}}(t,X)=\kappa_{\mathrm{phys}}\rho_*^\gamma$ form a smooth solution for every $t\ge0$. For $d=1,2$ their reduced representation on $\mathbb T_L^d$ has velocity $V_*$. The total energy density $\tfrac12\rho_*|W_*|^2+\rho_*e_{\mathrm{phys}}(\rho_*)=\tfrac12\rho_*|W_*|^2+\kappa_{\mathrm{phys}}\rho_*^\gamma/(\gamma-1)$, measured in pascals, is constant in space and time and equals the reduced expression with $|V_*|^2$. For $d=3$ this is the unique local solution branch; for $d=1,2$ it is the unique branch in the transversely invariant reduced model.

## Example references

[[pthm-fd-local-polytropic-model-evolution]]

[David Tong, Fluid Mechanics, Chapter 4: Waves](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf).

## Facts & Assumptions

**Given:** Countable Choice, $d,L,\rho_*,V_*,\kappa_{\mathrm{phys}},\gamma$ as in the Example, and the force-free periodic polytropic Euler model.

[F1] [[pthm-fd-local-polytropic-model-evolution]]: its current Statement gives unique smooth local evolution and mean-energy conservation for smooth positive-density periodic data in the fixed polytropic model, with the one- and two-dimensional cases defined as transverse invariant reductions of the three-dimensional model; the conclusion is conditional on Countable Choice and its stated suppliers.

## Verification

**Given:** The Example data, the exact local model equation in the Statement, and [F1].

1.1 Since $\rho_{\mathrm{phys}}$ and $u_{\mathrm{phys}}$ are constant in $t$ and $X$, $\partial_t\rho_{\mathrm{phys}}=0$, $\nabla_X\cdot(\rho_{\mathrm{phys}}u_{\mathrm{phys}})=0$, and $\partial_tu_{\mathrm{phys}}+(u_{\mathrm{phys}}\cdot\nabla_X)u_{\mathrm{phys}}=0$. Thus the mass equation holds in dimension three and in each reduced dimension; for $d=1,2$, the zero-padded lift has the same vanishing derivatives. [given, algebra]

2.1 The pressure $\kappa_{\mathrm{phys}}\rho_*^\gamma$ is constant, so its gradient vanishes; the momentum equation also holds. The density stays strictly positive, and all fields are smooth and periodic. [given, step 1.1, algebra]

3.1 The local theorem [F1] gives uniqueness for these same initial data. Therefore its local branch coincides with the constant solution verified in steps 1.1 and 2.1, which already extends for every $t\ge0$. Its energy density is the same constant displayed in the Example. [given, F1, step 1.1, step 2.1, algebra] ∎
