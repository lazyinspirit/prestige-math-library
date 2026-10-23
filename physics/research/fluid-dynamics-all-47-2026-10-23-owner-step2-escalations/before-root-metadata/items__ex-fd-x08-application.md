---
id: ex-fd-x08-application
kind: example
title: Exact viscous diffusion layer and material-circulation decay — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
- pthm-fd-px08-prediction
dependency_roles:
  pthm-fd-px08-prediction: physical-result
physical_scope: Numerical substitutions in two exact Newtonian model solutions; not an observation or a general
  boundary-layer or Kelvin result.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mandre, Fluid Dynamics Lecture Notes
    url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html
    locator: §3.3.1, Stokes first problem.
  - title: 'MIT 2.25, Solution: Stokes First Problem'
    url: https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf
    locator: Similarity and wall-stress scale only.
verification:
  precheck: pending
---

## Example

For the half-space Stokes first-problem model, choose $\nu=1\,\mathrm{m^2\,s^{-1}}$, $U=1\,\mathrm{m\,s^{-1}}$, and $t=1\,\mathrm s$. At $y=2\sqrt{\log2}\,\mathrm m$, the exact Gaussian-tail estimate gives $|u|\le\tfrac12\,\mathrm{m\,s^{-1}}$. For the separate torus shear choose $L_x=L_y=L_z=2\pi\,\mathrm m$, $m=1$, $k=1\,\mathrm{m^{-1}}$, $A=2\,\mathrm{m\,s^{-1}}$, $b=\pi/3\,\mathrm m$, and $c=1\,\mathrm m$. Then $\alpha=\pi/3$ and
$$\Gamma(t)=2C_{\pi/3}e^{-t/(1\,\mathrm s)}\,\mathrm{m^2\,s^{-1}},\qquad C_{\pi/3}=\int_0^{2\pi}\cos\theta\sin((\pi/3)\cos\theta)\,d\theta>0.$$
These are exact model values, not measured velocity or circulation.

## Example references

[Mandre, *Fluid Dynamics Lecture Notes*, §3.3.1](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html)

[MIT 2.25 Advanced Fluid Mechanics, *Solution: Stokes First Problem*, similarity scaling](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf)

## Facts & Assumptions

**Given:** The positive-time half-space and torus solutions, parameters above, and specified loop.

[F1] [[pthm-fd-px08-prediction]]: the half-space field obeys $|u|\le|U|e^{-y^2/(4\nu t)}$, and the torus material-loop circulation is $AcC_\alpha e^{-\nu k^2t}$.

[F2] [[def-fd-x00]]: for a closed piecewise-$C^1$ oriented curve $\gamma:[a,b]\to\Omega$, circulation is the line integral $\oint_\gamma u\cdot d\mathbf r=\int_a^b u(\gamma(s))\cdot\gamma'(s)\,ds$; for the material loop $X(t,s)$, the curve integral is $\int_0^1u(t,X(t,s))\cdot\partial_sX(t,s)\,ds$.

## Proof

1.1 At the selected height $y^2/(4\nu t)=\log2$, so $|u|\le1\cdot e^{-\log2}=\tfrac12\,\mathrm{m\,s^{-1}}$. [given, F1, algebra]

2.1 For the torus parameters, $\nu k^2=1\,\mathrm{s^{-1}}$, $Ac=2\,\mathrm{m^2\,s^{-1}}$, and $\alpha=kb=\pi/3$; substitution gives the displayed circulation. Positivity of $C_{\pi/3}$ follows from the theorem's stated range. [given, F1, step 1.1, algebra]

3.1 Both outputs are deductions for their specified exact solutions and make no general empirical or boundary-layer claim. [F1, step 1.1, step 2.1] ∎

