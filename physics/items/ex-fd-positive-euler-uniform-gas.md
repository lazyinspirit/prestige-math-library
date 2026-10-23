---
id: ex-fd-positive-euler-uniform-gas
kind: example
title: "Uniform ideal-gas state is an unchanged numerical step"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-conditional-positive-euler-update
dependency_roles:
  pthm-fd-conditional-positive-euler-update: physical-result
physical_scope: "A symbolic one-step fixed-point calculation for a spatially uniform positive state in the specified periodic ideal-gas Euler model. It illustrates constant-state preservation only; it describes neither a shock nor a reported physical observation."
empirical_premises: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

For a dimensionless $\gamma>1$, define the admissible state set
$$\mathcal G_\gamma=\left\{(\rho,m,E)\in\mathbb R^3:\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\}.$$

Fix a dimensionless $\gamma>1$, $N\ge2$, $\Delta x>0$ metres, and $\Delta t\ge0$ seconds on a one-dimensional uniform periodic mesh. Choose one calorically perfect ideal-gas state $U=(\rho,m,E)\in\mathcal G_\gamma$, where $\rho>0$ is mass density in kilograms per cubic metre, $m=\rho u$ is momentum density in kilograms per square metre second, $E=\rho(e+u^2/2)$ is total energy density in joules per cubic metre, $u=m/\rho$ is velocity in metres per second, and $e>0$ is specific internal energy in joules per kilogram. Set $p=(\gamma-1)(E-m^2/(2\rho))>0$ in pascals, $c=\sqrt{\gamma p/\rho}$ in metres per second, and $F(U)=(m,m^2/\rho+p,u(E+p))$ with mass, momentum, and energy flux components in kilograms per square metre second, pascals, and watts per square metre. Put $\lambda=\Delta t/\Delta x$ in seconds per metre. In every cell set $U_i=U$, and at every face use the same speed $a>0$ in metres per second with $a\ge|u|+c$ and $2\lambda a\le1$, the symmetric HLL flux
$$\widehat F_{i+1/2}=\frac12(F(U_i)+F(U_{i+1}))-\frac a2(U_{i+1}-U_i),$$
and the update
$$U_i^+=U_i-\lambda(\widehat F_{i+1/2}-\widehat F_{i-1/2}).$$
Every face flux equals $F(U)$, so $U_i^+=U$ for every cell and the positive density and pressure remain unchanged. This uniform state has no shock; the calculation is a symbolic model example, not a reported measurement.

## Example references

[[pthm-fd-conditional-positive-euler-update]] — supplies the conditional one-step model interpretation and positivity hypotheses.

## Facts & Assumptions

**Given:** The adopted ideal-gas model, one state $U\in\mathcal G_\gamma$, a periodic mesh with $N\ge2$, and the stated shared symmetric HLL flux and update.

[F1] [[pthm-fd-conditional-positive-euler-update]]: with $\gamma>1$, $N\ge2$, periodic states in $\mathcal G_\gamma$, symmetric face speeds $a\ge\max(|u_L|+c_L,|u_R|+c_R)$, and $2\lambda a\le1$, the update uses $\widehat F=\frac12(F_L+F_R)-\frac a2(U_R-U_L)$ and $U_i^+=U_i-\lambda(\widehat F_{i+1/2}-\widehat F_{i-1/2})$.

## Verification

1.1 At every face, $U_i=U_{i+1}=U$, so substitution into [F1] gives
$$\widehat F_{i+1/2}=\frac12(F(U)+F(U))-\frac a2(U-U)=F(U).$$
[given, F1, algebra]

2.1 Both periodic face fluxes adjacent to cell $i$ therefore equal $F(U)$. Substitution into the update in [F1] gives $U_i^+=U-\lambda(F(U)-F(U))=U$. Since $U\in\mathcal G_\gamma$, its density and pressure are positive, and they are unchanged by the step. This is a symbolic model deduction. [given, F1, step 1.1, algebra] ∎
