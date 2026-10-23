---
id: ex-fd-x13-formal-verification
kind: example
title: "Exterior potential sphere and zero ideal force — formal worked field"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02-examples
dependency_level: 3
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-fd-x13
dependency_roles:
  thm-fd-x13: mathematical-premise
scope: "Concrete unit-sphere potential-flow field with far-field velocity along the x-axis, tangent slip on the surface, and zero pressure-only formal resultant."
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

Choose $a=\rho_0=1$, $p_\infty=0$, and $U=e_x=(1,0,0)$. For $r>1$ let $\phi=x(1+1/(2r^3))$, $u=\nabla\phi$, and $p=(1-|u|^2)/2$. On the unit sphere, $u=(3/2)(e_x-n_xn)$ and $p=-5/8+(9/8)n_x^2$. The pressure is unchanged by $n\mapsto-n$, so the pressure-only formal resultant is zero.

## Example references

[[thm-fd-x13]]

## Facts & Assumptions

**Given:** Use the exterior unit sphere, potential flow, constant density and pressure definition in [A1]. The boundary condition is slip/no-through.

[A1] $a=\rho_0=1$, $p_\infty=0$, $U=e_x$, $\phi=x(1+1/(2r^3))$, $u=\nabla\phi$, $p=(1-|u|^2)/2$, and $n=x$ on $r=1$.

[F1] [[thm-fd-x13]]: this potential produces a smooth steady formal incompressible Euler field with $u\cdot n=0$; the sphere velocity is $(3/2)(U-(U\cdot n)n)$, and the pressure-only formal resultant is zero by antipodal symmetry.

## Verification

1.1 The parameters satisfy the theorem's positivity assumptions. Substituting $a=1$, $U=e_x$ into its potential gives $\phi=x(1+1/(2r^3))$; the displayed pressure is the theorem's pressure formula, and on $r=1$ the velocity is $(3/2)(e_x-n_xn)$, whose dot product with $n$ is $(3/2)(n_x-n_x)=0$. [given, A1, F1, algebra]

2.1 On $r=1$, $|u|^2=(9/4)(1-n_x^2)$, so $p=\frac12(1-\frac94(1-n_x^2))=-5/8+(9/8)n_x^2$. This is even under $n\mapsto-n$; spherical area is invariant and $n$ changes sign, hence $\int_{|x|=1}pn\,dS=0$. Therefore $\int\sigma_En\,dS=-\int pn\,dS=0$, as claimed. [given, A1, F1, step 1.1, algebra] ∎
