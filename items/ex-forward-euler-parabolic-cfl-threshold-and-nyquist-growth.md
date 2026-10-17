---
id: ex-forward-euler-parabolic-cfl-threshold-and-nyquist-growth
kind: example
title: Forward Euler at and above the parabolic CFL threshold
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-periodic-heat-difference-amplification-symbol
  - thm-forward-euler-heat-cfl-and-nyquist-instability
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

Take the one-dimensional periodic heat equation with $\kappa>0$ on an even $N$-point grid, and let $\mu=\kappa\Delta t/h^2$. The alternating initial data $U_j^0=(-1)^j$ keep their magnitude when $\mu=1/2$ and grow geometrically when $\mu>1/2$ under forward Euler.

## Verification

**Given:** An even integer $N\ge2$, periodic spacing $h=L/N$, $\Delta t>0$, and the forward-Euler scheme with diffusivity $\kappa>0$.

[F1] [[def-parabolic-theta-finite-difference-scheme]]: the periodic update is $U^{n+1}-U^n+\Delta t A_h^{\rm per}U^n=0$ when $\theta=0$ and the source is zero.

[F2] [[lem-periodic-heat-difference-amplification-symbol]]: mode $\ell=N/2$ has eigenvalue $4\kappa/h^2$ and multiplier $1-\Delta t\lambda_\ell$.

[F3] [[thm-forward-euler-heat-cfl-and-nyquist-instability]]: on even periodic grids $\mu\le1/2$ gives nonexpansion, while $\mu>1/2$ makes the Nyquist multiplier less than $-1$.

1.1 The vector $\phi_j=(-1)^j$ is the mode $\ell=N/2$, so [F2] gives its multiplier $g=1-4\mu$. [F1, F2, given]

2.1 At $\mu=1/2$, $g=-1$, and hence $U_j^n=(-1)^n\phi_j$ has unchanged norm; [F3] shows all other Fourier modes are also nonexpansive. If $\mu>1/2$, then $g<-1$, so $\|U^n\|_h=|g|^n\|\phi\|_h$ grows geometrically. [F2, F3, step 1.1, algebra] ∎

## Remarks

The endpoint is stable but not damping for the Nyquist mode. This example is periodic and does not assert a finite-boundary result.
