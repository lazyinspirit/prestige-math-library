---
id: ex-maxwell-yee-periodic-plane-wave-dispersion
kind: example
title: Periodic Yee plane-wave dispersion and the cubic CFL limit
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [thm-maxwell-yee-cartesian-dispersion-and-cfl]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 7 §7.4, printed pp. 164–168: plane-wave Yee dispersion; the cubic three-dimensional corner calculation below is explicit."
verification:
  precheck: pass
---

## Example

Take a cubic periodic grid with spacing $h$ and even cell counts in all three directions. Let $c=(\epsilon\mu)^{-1/2}$. The allowed corner angle $\theta=(\pi,\pi,\pi)$ has symbol vector proportional to $(1,1,1)$; choose the transverse polarization $p=(1,-1,0)/\sqrt2$. The axial mode $\theta=(\pi,0,0)$ can use $p=(0,1,0)$. The exact Yee dispersion law is
$$\sin^2\!\left(\frac{\omega\Delta t}{2}\right)=c^2\Delta t^2\sum_{j=x,y,z}\frac{\sin^2(\theta_j/2)}{h^2}.$$

## Facts & Assumptions


**Given:** The homogeneous periodic Yee grid and the lossless Fourier-mode symbol.

[F1] A transverse Fourier mode has $\lambda(\theta)=4c^2h^{-2}\sum_j\sin^2(\theta_j/2)$ and satisfies the displayed dispersion relation; for even cell counts the corner angle attains the maximum. ([[thm-maxwell-yee-cartesian-dispersion-and-cfl]])

## Verification

1.1 For $\theta=(\pi,0,0)$, the sine-square sum is $1$, so $\sin^2(\omega_{\rm ax}\Delta t/2)=c^2\Delta t^2/h^2$. Its symbol direction is the $x$-axis, and $p=(0,1,0)$ is orthogonal to it, so this is a transverse mode. [F1, given, algebra]

2.1 For $\theta=(\pi,\pi,\pi)$, the sum is $3$ and $p=(1,-1,0)/\sqrt2$ is orthogonal to $(1,1,1)$. Thus $\sin^2(\omega_{\rm corner}\Delta t/2)=3c^2\Delta t^2/h^2$. The maximum eigenvalue is $12c^2/h^2$, so strict positivity requires $\Delta t<h/(c\sqrt3)$; equality places the maximal mode at the repeated-root endpoint. [F1, algebra] ∎
