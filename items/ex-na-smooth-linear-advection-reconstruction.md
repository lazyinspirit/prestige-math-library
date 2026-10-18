---
id: ex-na-smooth-linear-advection-reconstruction
kind: example
title: MUSCL and WENO reconstruct a translating affine profile exactly
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - lem-na-weno5-optimal-linear-reconstruction
  - thm-na-musc-minmod-second-order-on-smooth-data
  - thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $I_i=[ih,(i+1)h)$, $x_i=(i+\tfrac12)h$, and $u(x,t)=x-at$ for a fixed $a\in\mathbb R$. On this affine profile, both the minmod MUSCL reconstruction and each of the three normalized WENO5 reconstructions give the exact upwind face value; the corresponding conservative forward-Euler update advances every cell average exactly by one time step.

## Facts & Assumptions

**Given:** $h>0$, $\Delta t>0$, uniform cells $I_i$, fixed advection speed $a$, the profile $u(x,t)=x-at$, and the reconstruction conventions of the A page.

[F1] [[def-na-high-resolution-reconstruction]]: cell averages are reconstructed by the displayed MUSCL slope and WENO candidate functionals, normalized weights sum to one, and positive/negative advection selects the appropriate upwind trace.

[F2] [[lem-na-weno5-optimal-linear-reconstruction]]: each WENO candidate functional is exact on polynomials of degree at most two; in particular all three candidate face values agree with the exact face value for affine data.

[F3] [[thm-na-musc-minmod-second-order-on-smooth-data]]: on a smooth strictly monotone profile, minmod selects the common-sign one-sided differences and the face states have second-order accuracy.

[F4] [[thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction]]: for C5 data and fixed positive $\epsilon_0$, the displayed WENO-JS and WENO-Z reconstructions have fifth-order face accuracy.

## Verification

1.1 Since the average of an affine function over a cell equals its value at the cell center, $U_i^n=x_i-at_n$. Hence $U_i^n-U_{i-1}^n=U_{i+1}^n-U_i^n=h$ and the minmod slope is $s_i=1$. The right MUSCL trace is $U_i^n+h/2=(i+1)h-at_n=u(x_{i+1/2},t_n)$, with the reflected left trace giving the same exact value at the face. [given, F1, algebra]

1.2 The WENO candidates reproduce affine polynomials by [F2], so $p_0=p_1=p_2=u(x_{i+1/2},t_n)$. Each normalized weight triple therefore returns this same exact value. The uniform smooth profile also satisfies [F3] and [F4], with zero error here because it is affine. [F1, F2, F3, F4, algebra]

2.1 For $a>0$, the upwind flux is $a((i+1)h-at_n)$ and the left face flux is $a(ih-at_n)$; their difference is $ah$, so the update gives $U_i^{n+1}=x_i-at_n-a\Delta t$, the exact average at $t_{n+1}$. For $a<0$ the reflected right trace yields the same interface value and flux difference; for $a=0$ both the flux and time change vanish. [F1, step 1.1, step 1.2, algebra] ∎
