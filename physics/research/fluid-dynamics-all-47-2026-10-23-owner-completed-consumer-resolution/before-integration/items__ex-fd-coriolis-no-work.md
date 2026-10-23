---
id: ex-fd-coriolis-no-work
kind: example
title: Coriolis acceleration does no work
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-geophysical-model-branches
dependency_roles:
  post-fd-geophysical-model-branches: physical-assumption
physical_scope: >-
  Pointwise algebraic consequence of the ideal rotating Boussinesq branch's
  Coriolis term in a right-handed local Cartesian model. No
  empirical motion or universal fluid behavior is asserted.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter ECMM719 full lecture notes, Autumn 2018"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pending
---

## Example

In the adopted rotating Boussinesq model, let $u=(u_1,u_2,u_3)\in\mathbb R^3$ be velocity in m s$^{-1}$, let $f\in\mathbb R$ be the constant Coriolis parameter in s$^{-1}$, and let $e_3=(0,0,1)$ be the upward unit vector in the right-handed Cartesian coordinates. The momentum equation places $+f e_3\times u$ on its left side, so its signed acceleration contribution on the right side is $-f e_3\times u$. Its contribution to the instantaneous rate of change of specific kinetic energy $|u|^2/2$ is the scalar product

$$u\cdot(-f e_3\times u)=0.$$

Thus this ideal Coriolis term contributes zero specific power, in W kg$^{-1}$, at every point where the velocity is defined. This does not remove work by other forces or assert that an observed fluid follows the adopted model.

## Example references

[[post-fd-geophysical-model-branches]]: adopted Coriolis acceleration convention and its physical scope.

[Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter ECMM719 full lecture notes (Autumn 2018), §1.2, rotating-frame equations and Coriolis work, printed pp. 3–4](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf)

## Facts & Assumptions

**Given:** The pointwise velocity vector and constant Coriolis coefficient in the adopted rotating Boussinesq branch.

[A1] [[post-fd-geophysical-model-branches]]: the local Cartesian coordinates are right-handed, $e_3=(0,0,1)$, and the rotating Boussinesq momentum equation places $+f e_3\times u$ on its left side, with signed acceleration contribution $-f e_3\times u$ on the right.

[F1] [[post-fd-geophysical-model-branches]]: the coordinate convention is $e_3\times u=(-u_2,u_1,0)$.

## Verification

1.1 By [F1], $f e_3\times u=f(-u_2,u_1,0)$. [given, F1, algebra]

2.1 Taking the Euclidean dot product with $u$ gives $u\cdot(-f e_3\times u)=f(u_1u_2-u_2u_1)=0$. The acceleration has units m s$^{-2}$, so the work rate has units $(\mathrm{m\,s^{-1}})(\mathrm{m\,s^{-2}})=\mathrm{m^2\,s^{-3}}=\mathrm{W\,kg^{-1}}$ and is zero. [given, A1, step 1.1, algebra] ∎
