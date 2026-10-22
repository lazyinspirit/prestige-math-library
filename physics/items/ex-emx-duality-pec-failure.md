---
id: ex-emx-duality-pec-failure
kind: example
title: An ideal PEC boundary condition is not preserved by a vacuum duality quarter-turn
status: draft
origin: session
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-emx-duality-vacuum
  - def-emx-excitation-form
  - def-emx-lorentz-star
  - def-em-si-conventions
  - post-em-vacuum-maxwell
dependency_roles:
  pthm-emx-duality-vacuum: physical-result
  def-emx-excitation-form: formulation-prerequisite
  def-emx-lorentz-star: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
physical_scope: A smooth source-free vacuum field in a half-space with an ideal perfect-electric-conductor boundary condition imposed as model data. The calculation concerns that boundary condition only; it makes no claim about finite conductivity or measurements.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture script
      url: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf
      locator: Section 8.5, printed p. 8.7 (PDF p. 92), equations (8.28)–(8.29), the source-free duality rotation; its angle convention is converted by alpha = -theta.
    - title: Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, Recent developments in premetric classical electrodynamics, arXiv:physics/0610221v1
      url: https://arxiv.org/pdf/physics/0610221
      locator: Sections 4 and 6, PDF pp. 4–9, equations (9)–(10) and (25)–(26), the field-strength and excitation form conventions. Their metric and impedance conventions are converted explicitly in the local definition.
proof_strategy: direct
---

## Example

On $\Omega=\{(x_1,x_2,x_3):x_3>0\}$, consider the constant vacuum field $E=0$ and $B=B_0(1,0,0)$, where $B_0\ne0$ has units T. Let $\Pi=\{x_3=0\}$, with unit normal $n=(0,0,1)$. The constant fields are understood with their continuous traces on $\Pi$. In this example, a perfect-electric-conductor (PEC) boundary means the ideal boundary model imposing $E_\parallel=E-(E\cdot n)n=0$ on $\Pi$; this condition is imposed as model data and no finite-conductivity claim is made. For $\theta=\pi/2$, the vacuum duality rotation $F_\theta=\star_\eta F$ has electric field $E_\theta=-cB_0(1,0,0)$, which is nonzero and parallel to $\Pi$. Thus the source-free vacuum duality rotation does not preserve this same PEC boundary condition.

## Example references

[[pthm-emx-duality-vacuum]]

[[def-emx-excitation-form]]

[[def-emx-lorentz-star]]

[[def-em-si-conventions]]

[[post-em-vacuum-maxwell]]

## Facts & Assumptions

**Given:** The half-space, plane, normal, constant field, ideal PEC boundary condition, and quarter-turn angle in the Example.

[A1] The PEC condition used here is exactly E_parallel = E - (E dot n)n = 0 on Pi. It is an ideal boundary assumption, not a material constitutive law.

[F1] [[def-emx-excitation-form]] defines $F=\mathcal B-dt\wedge\mathcal E$ and fixes $F_{0i}=-E_i/c$.

[F2] [[pthm-emx-duality-vacuum]] states that the quarter-turn $F\mapsto\star_\eta F$ maps a source-free vacuum solution to another source-free vacuum solution.

[F3] [[def-emx-lorentz-star]] gives $\star_\eta(dx^2\wedge dx^3)=dx^0\wedge dx^1$ in the fixed $(-+++)$ orientation.

[F4] [[def-em-si-conventions]] gives $x^0=ct$ and $c>0$ in SI units.

[F5] [[post-em-vacuum-maxwell]] adopts the four smooth vacuum Maxwell equations and excludes magnetic-source terms.

## Verification

1.1 The fields are constant, so all their spatial and time derivatives vanish. With $P=M=0$ and $\rho=J=0$, they satisfy the four vacuum Maxwell equations on $\Omega$ by [F5]. The original tangential electric field is $E_\parallel=0$, so it satisfies the imposed PEC condition [A1]. [A1, F5, given, algebra]

2.1 The field form is $F=B_0dx^2\wedge dx^3$. By [F3], $\star_\eta F=B_0dx^0\wedge dx^1=cB_0dt\wedge dx^1$. Comparing with the defining form $\mathcal B_\theta-dt\wedge\mathcal E_\theta$ in [F1] gives $E_\theta=-cB_0(1,0,0)$. Since $E_\theta\cdot n=0$, its tangential component equals $E_\theta$ and is nonzero. Hence the rotated vacuum solution from [F2] fails the same PEC boundary condition. The unit $cB_0$ is V m$^{-1}$, as required for an electric field by [F4]. [A1, F1, F2, F3, F4, given, step 1.1, algebra] ∎
