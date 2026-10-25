---
id: pthm-qftx-n2-dual-higgs-vortex-flux-and-tension
kind: physics-theorem
title: Flux quantization and positive tension for an admitted dual vortex
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 10
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps:
  - def-qftx-n2-dual-higgs-flux-tube-sector
  - def-qftx-n2-monopole-local-dual-higgs-model
dependency_roles:
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
proof_strategy: direct
physical_scope: Conditional classical result for an already existing smooth nonzero-winding finite-energy vortex profile in the local dual U(1) effective model; it proves flux quantization and positive tension, not vortex existence, stability, or a confining ground-state potential.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9407087v1
      locator: "§5.6, printed pp. 29–31: the source's local monopole-Higgs confinement interpretation; the quantized-flux and tension argument here is local and conditional on an admitted vortex profile."
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://davidtong.org/pdfs/teaching/solitons/tasi.pdf
      locator: "§4.6.2, printed pp. 106–108: the flux-tube interpretation and explicit limitation on known bulk vortex solutions in the different SQCD model discussed there."
verification:
  precheck: pass
---

## Statement

Use the local dual $U(1)_D$ model with natural units, positive coupling
$g_D>0$, smooth gauge potential on $\mathbb R^2$, and the vortex boundary
conditions of the preceding definition. If a finite-energy dual vortex
profile of winding $n\in\mathbb Z\setminus\{0\}$ exists, then its dual
magnetic flux, which is the original electric flux in the adopted duality
frame, is

$$\Phi_D=2\pi n,$$

and its transverse tension satisfies $0<\sigma<\infty$. This is a
conditional statement about an admitted profile; it asserts neither
existence nor stability of any vortex or a linearly confining minimum-energy
potential between external charges.

## Statement references

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, §4.6.2](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf).

## Facts & Assumptions

**Given:** A smooth static profile on $\mathbb R^2$ satisfying the exact
finite-energy, vacuum, winding, and asymptotic gauge-phase conditions in the
Statement and in the cited flux-tube definition.

[F1] [[def-qftx-n2-dual-higgs-flux-tube-sector]]: the dual gauge field is smooth on $\mathbb R^2$, the phase of $M$ on a sufficiently large circle has degree $n$, the tangential component of $\widetilde A-d\arg M$ tends uniformly to zero around large circles, and the flux limit exists.

[F2] [[def-qftx-n2-monopole-local-dual-higgs-model]]: $g_D>0$; the transverse energy density contains the nonnegative Maxwell term $\widetilde F_{12}^2/(2g_D^2)$, nonnegative covariant-gradient terms, and a sum-of-squares scalar potential with vacuum value zero.

## Proof

**Given:** [F1] supplies a smooth global potential, the winding-$n$ phase
map, the asymptotic gauge-phase condition, and existence of the flux limit.
The selected supersymmetric vacuum has zero potential energy by [F2].

1.1 In polar coordinates $(r,\theta)$ write the smooth one-form
$\widetilde A=\widetilde A_r\,dr+\widetilde A_\theta\,d\theta$.
For a disk of radius $R$, integration of
$\widetilde F_{r\theta}=\partial_r\widetilde A_\theta-
\partial_\theta\widetilde A_r$ first in $r$ and then in $\theta$ gives
$\int_{|x|\le R}\widetilde F_{12}\,d^2x
=\int_0^{2\pi}\widetilde A_\theta(R,\theta)\,d\theta$: the
$\theta$-derivative term cancels by single-valuedness, and the inner
boundary term tends to zero because a smooth one-form has
$\widetilde A_\theta=O(r)$ at the origin. [F1, given, algebra]

2.1 On a sufficiently large circle choose a continuous phase
$M/|M|=e^{i\vartheta(\theta)}$ with
$\vartheta(2\pi)-\vartheta(0)=2\pi n$. The tangential condition in [F1]
implies $\widetilde A_\theta(R,\theta)-
\partial_\theta\vartheta(\theta)\to0$ uniformly in $\theta$ as
$R\to\infty$.
Taking the limit in step 1.1 therefore gives
$\Phi_D=\int_0^{2\pi}\partial_\theta\vartheta\,d\theta=2\pi n$.
[F1, step 1.1, given]

3.1 Since $n\ne0$, step 2.1 gives nonzero flux, so the smooth function
$\widetilde F_{12}$ is nonzero at some point and hence on a neighborhood of
that point. Its squared integral is strictly positive. By [F2] and
$g_D>0$, the Maxwell term contributes strictly positive energy, while all
remaining energy terms are nonnegative; thus $\sigma>0$. Finiteness of
$\sigma$ is part of [F1]'s admitted-profile hypothesis. [F1, F2, step 2.1, algebra] ∎

## Remarks

This result proves consequences of a supplied profile. It does not prove
that the Seiberg–Witten effective action has such a profile or that the
profile minimizes the energy among all configurations with the same external
charges.
