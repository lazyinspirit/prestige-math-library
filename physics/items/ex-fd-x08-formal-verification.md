---
id: ex-fd-x08-formal-verification
kind: example
title: "Exact viscous diffusion layer and material-circulation decay — formal worked fields"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02-examples
dependency_level: 2
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-fd-x08
dependency_roles:
  thm-fd-x08: mathematical-premise
scope: "One explicit tail-bound evaluation for the corner-excluded wall layer and one periodic material-loop circulation evaluation; the two fields are distinct exact models."
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

For the wall layer take $\nu=U=1$. At time $t=1$ and distance $y=2$ from the wall, the exact solution obeys $|u(1,2)|=E(1)\le e^{-1}$. In the separate periodic example, take $\nu=1$, $L_x=4$, $L_y=2\pi$, $L_z=1$, $m=k=1$, $A=2$, $c=1$, and $b=\pi/2$. Then $\alpha=kb=\pi/2$ and the material loop initialized as an ellipse in the Statement has circulation $\Gamma(t)=2C_{\pi/2}e^{-t}$, where $C_{\pi/2}=\int_0^{2\pi}\cos\theta\sin((\pi/2)\cos\theta)\,d\theta>0$. Its circulation strictly decreases between times $0$ and $1$.

## Example references

[[thm-fd-x08]]

## Facts & Assumptions

**Given:** The wall layer is considered only for $t>0,y>0$; the periodic shear and the loop initialized as an ellipse are on the indicated flat three-torus.

[A1] Wall layer: $\nu=U=1$, $t=1$, $y=2$, $\varepsilon=e^{-1}$. Periodic field: $\nu=1$, $L_x=4$, $L_y=2\pi$, $L_z=1$, $m=k=1$, $A=2$, $c=1$, $b=\pi/2$, and $\alpha=\pi/2$.

[F1] [[thm-fd-x08]]: $E(s)\le e^{-s^2}$; for the smooth material loop initialized as an ellipse with $0<\alpha=kb<\pi$, circulation is $\Gamma(t)=AcC_\alpha e^{-\nu k^2t}$ with $C_\alpha=\int_0^{2\pi}\cos\theta\sin(\alpha\cos\theta)\,d\theta>0$.

## Verification

1.1 The wall-layer parameters give $y=2\sqrt{\nu t}\sqrt{\log(1/\varepsilon)}=2$, so the theorem's tail bound yields $|u(1,2)|\le e^{-1}|U|=e^{-1}$. The corner is not involved because $t=1$ and $y=2$ are both positive. [given, A1, F1, algebra]

2.1 For the periodic field, $kL_y=2\pi$, $0<c<L_x/2$, $0<b<L_y/2$, and $0<\alpha=kb=\pi/2<\pi$, so [F1] applies. Substitution gives $\Gamma(t)=2\cdot1\cdot C_{\pi/2}e^{-t}=2C_{\pi/2}e^{-t}$. Since $C_{\pi/2}>0$, $\Gamma(0)=2C_{\pi/2}$ and $\Gamma(1)=2C_{\pi/2}/e$ are distinct. This is a formal viscous circulation change for this loop only. [given, A1, F1, algebra] ∎
