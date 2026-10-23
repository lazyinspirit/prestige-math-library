---
id: ex-fd-x07-formal-verification
kind: example
title: Bounded-domain Stokes residual estimate — formal worked field
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-fd-x07
dependency_roles:
  thm-fd-x07: mathematical-premise
scope: "Explicit smooth periodic-channel residual field with zero trace and the valid channel Poincare bound C=h and this field's exact norm ratio h/pi. It verifies that channel clause only; it does not apply the bounded C1 Euclidean residual estimate to the periodic quotient cell."
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. Let $L_x,L_z,h,\mu>0$, define $\mathbb T_L=\mathbb R/(L\mathbb Z)$ for $L>0$, and set $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$. Regard fields on $Q$ as periodic lifts to $\mathbb R\times(0,h)\times\mathbb R$ with periods $L_x,L_z$ in $x,z$, and integrate with Lebesgue measure over one fundamental cell in each periodic coordinate. Set $w(x,y,z)=(\sin(\pi y/h),0,0)$, $q=0$, and $f=\mu(\pi/h)^2w$. Then $w$ is a smooth divergence-free periodic field with zero trace on both $y$ walls and satisfies $-\mu\Delta w+\nabla q=f$. Its norms satisfy $\|w\|_{L^2(Q)}^2=L_xL_z h/2$ and $\|\nabla w\|_{L^2(Q)}^2=(\pi/h)^2\|w\|_{L^2(Q)}^2$, so $\|w\|_{L^2(Q)}=(h/\pi)\|\nabla w\|_{L^2(Q)}\le h\|\nabla w\|_{L^2(Q)}$. This is a formal worked field for the periodic-channel Poincare clause; the general bounded $C^1$ Euclidean residual theorem is not applied to this periodic cell.

## Facts & Assumptions

**Given:** The field, periodic channel, positive parameters, residual equation, and $\mathrm{AC}_\omega$ assumption in [A1].

[A1] $L_x,L_z,h,\mu>0$, $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$ with Lebesgue measure on one fundamental cell, $w=(\sin(\pi y/h),0,0)$, $q=0$, $f=\mu(\pi/h)^2w$, periodicity in $x,z$, and zero trace at $y=0,h$; assume $\mathrm{AC}_\omega$.

[F1] [[thm-fd-x07]]: on this periodic channel, every $C^1$ field $v$ periodic in the torus variables and zero on $y=0,h$ satisfies $\|v\|_{L^2(Q)}\le h\|\nabla v\|_{L^2(Q)}$. The theorem's global statement carries $\mathrm{AC}_\omega$.

## Verification

1.1 The field is periodic in $x,z$ and vanishes at $y=0,h$ because $\sin(0)=\sin(\pi)=0$. Its only nonzero component is independent of $x$, so $\nabla\cdot w=0$, and $\Delta w=-(\pi/h)^2w$. Hence $-\mu\Delta w+\nabla q=\mu(\pi/h)^2w=f$. [given, A1, algebra]

1.2 Integrating $\sin^2(\pi y/h)$ over $0<y<h$ gives $h/2$, so $\|w\|_{L^2(Q)}^2=L_xL_z h/2$. The only nonzero derivative is $\partial_yw_1=(\pi/h)\cos(\pi y/h)$, whose squared integral gives $\|\nabla w\|_{L^2(Q)}^2=L_xL_z(\pi/h)^2(h/2)=(\pi/h)^2\|w\|_{L^2(Q)}^2$. [given, A1, algebra]

2.1 Since $\pi>1$, step 1.2 gives $\|w\|_{L^2(Q)}=(h/\pi)\|\nabla w\|_{L^2(Q)}\le h\|\nabla w\|_{L^2(Q)}$. This explicitly verifies the channel inequality in [F1]; the field is only a worked channel residual, not an application of the general-domain residual estimate. [given, A1, F1, step 1.2, algebra] ∎
