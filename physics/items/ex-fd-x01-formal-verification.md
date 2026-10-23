---
id: ex-fd-x01-formal-verification
kind: example
title: "Exact Reynolds and Mach parameter substitution"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01-examples
deps:
  - thm-fd-x01
dependency_roles:
  thm-fd-x01: mathematical-premise
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references: []
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
generation:
  role: example
---

## Example

Choose the formal SI parameter values $\rho_0=2\,\mathrm{kg\,m^{-3}}$, $\mu=2\,\mathrm{Pa\,s}$, $U=2\,\mathrm{m\,s^{-1}}$, and $L=3\,\mathrm m$. For the barotropic branch take $P(\rho)=16\rho$, with the coefficient carrying units so that $P'(\rho_0)=16\,\mathrm{m^2\,s^{-2}}$ and $c=4\,\mathrm{m\,s^{-1}}$. The kinematic viscosity and dimensionless groups are $\nu=1\,\mathrm{m^2\,s^{-1}}$, $\operatorname{Re}=6$, $\operatorname{Ma}=1/2$, and the transformed equation coefficients are $\operatorname{Re}^{-1}=1/6$ and $\operatorname{Ma}^{-2}=4$. With $\rho=2\rho^*$, the normalized pressure is $p^*=\rho^*-1$ because $P(\rho_0)=32\,\mathrm{Pa}$ and $\rho_0c^2=32\,\mathrm{Pa}$. These are formal parameter substitutions, not measurements or a claim that any selected fields solve the fluid equations.

## Example references

Exact Reynolds and Mach scaling identities: [[thm-fd-x01]].

## Facts & Assumptions

**Given:** The parameter assignments in the Example and the exact scaling result of `thm-fd-x01`.

[F1] Under the positive scale substitutions, the incompressible coefficient is $\operatorname{Re}^{-1}=\nu/(UL)$ and the barotropic momentum coefficient is $\operatorname{Ma}^{-2}=c^2/U^2$ ([[thm-fd-x01]]).

## Verification

1.1 The assigned density and dynamic viscosity give $\nu=\mu/\rho_0=2/2=1\,\mathrm{m^2\,s^{-1}}$. Hence $\operatorname{Re}=UL/\nu=(2)(3)/1=6$ and $\operatorname{Re}^{-1}=1/6$, agreeing with [F1]. [given, F1, algebra]

2.1 Since $P'(\rho_0)=16\,\mathrm{m^2\,s^{-2}}$, its positive square root is $c=4\,\mathrm{m\,s^{-1}}$. Thus $\operatorname{Ma}=U/c=2/4=1/2$ and $\operatorname{Ma}^{-2}=c^2/U^2=16/4=4$. Also $P(2)=32\,\mathrm{Pa}$, $P(2\rho^*)=32\rho^*\,\mathrm{Pa}$, and $p^*=(P(2\rho^*)-P(2))/(\rho_0c^2)=\rho^*-1$. By [F1] these are the exact transformed coefficients; the arithmetic adds no limiting or empirical assertion. [given, F1, algebra] ∎
