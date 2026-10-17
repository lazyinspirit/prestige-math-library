---
id: ex-emg-ml-b05
kind: example
title: Everywhere regular counterpoised sphere
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: "Central values and proper integrals in one exact smooth coupled charged-dust model profile. This is an ideal conditional calculation, not an observation, particle-composition claim, or stability result."
dependency_level: 6
proof_strategy: direct
deps:
  - pthm-emg-counterpoised-smooth-sphere
dependency_roles:
  pthm-emg-counterpoised-smooth-sphere: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Take $a=b>0$ and $s=+1$ in the exact A-page family. With $r^2=\sum_i(x^i)^2$, $\Psi=\sqrt{r^2+b^2}$, and $H=1+b/\Psi$, the center has $H(0)=2$, $\nabla H(0)=0$, and $\Delta H(0)=-3/b^2$. Its central rest-mass density and scalar curvature are
$$\rho(0)=\frac{3c^2}{32\pi G_Nb^2},\qquad S_g(0)=\frac{3}{4b^2}.$$
The observer electric field vanishes at the center. The complete model remains smooth with strictly positive density for every finite $r$ and has infinite spatial extent. Its proper mass and signed proper charge are $c^2b/G_N$ and $Q_sc^2b/G_N$. There is no point source at the center; no stability, real-particle composition, or empirical realization is asserted.

## Facts & Assumptions

**Given:** $b>0$, $a=b$, $s=+1$, the selected SI conventions, and the exact A-page theorem.

[F1] [[pthm-emg-counterpoised-smooth-sphere]] supplies the exact smooth coupled fields, $H=1+a/\sqrt{r^2+b^2}$, $\Delta H=-3ab^2/(r^2+b^2)^{5/2}$, $\rho=-c^2\Delta H/(4\pi G_NH^3)$, $E_i=-s c^2H_i/(Q_sH^2)$, $S_g=-2\Delta H/H^3$, and the proper mass and charge integrals. It asserts ideal model deductions only.

## Verification

1.1 Since $b>0$, $r^2+b^2>0$ everywhere. The derivative of the spherical profile in [F1] is $H_i=-b x^i/(r^2+b^2)^{3/2}$, which vanishes at $x=0$. Substituting $a=b$ into its Laplacian gives $\Delta H(0)=-3b^3/b^5=-3/b^2$, while $H(0)=1+b/b=2$. Thus the profile is regular at the center and is within [F1]'s positive smooth domain. [given, F1, algebra]

2.1 Substitution into [F1]'s density and curvature formulas yields $\rho(0)=3c^2/(4\pi G_N\cdot8b^2)=3c^2/(32\pi G_Nb^2)$ and $S_g(0)=6/(8b^2)=3/(4b^2)$. Since every $H_i(0)=0$, its observer electric components are zero there. The positive density for all finite $r$ and the proper mass/charge values are the exact spherical conclusions of [F1]; they make no observation or point-source claim. [given, F1, step 1.1, algebra] ∎
