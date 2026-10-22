---
id: ex-gr-fx01-2
kind: example
title: "Boost normalization and affine focusing"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "Pure mathematical normalization example; no field equation or empirical claim is used."
deps:
  - def-gr-fx-null-screen-geometry
  - prop-gr-fx-null-raychaudhuri
  - lem-gr-fx-null-focal-boundary-exclusion
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  prop-gr-fx-null-raychaudhuri: mathematical-premise
  lem-gr-fx-null-focal-boundary-exclusion: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.6-2.7 and 5.1, 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§5.4-5.5 and 8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Let $(\ell,k)$ be a normalized future null normal pair and let $f$ be a real
function on the initial section. Extend $f$ constantly along each affine
generator and boost the pair by $\ell'=e^f\ell$, $k'=e^{-f}k$. Then
$\widehat\theta_0=e^f\theta_0$, so the sign of the initial expansion is independent
of this positive normalization. Along each generator the new affine
parameter is $\lambda'=e^{-f}\lambda$; optical expansion, shear and Ricci
contraction scale so that the null Raychaudhuri equation is unchanged. A
focal event and its exclusion from $E^+(S)$ after the event are therefore
independent of the chosen constant-along-generator boost, although the
numerical affine focusing bound rescales to
$\lambda'_* = e^{-f}2/|\theta_0|$.

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[prop-gr-fx-null-raychaudhuri]]

[[lem-gr-fx-null-focal-boundary-exclusion]]

## Facts & Assumptions

**Given:** A normalized future null pair, affine null generators, a smooth
boost factor constant along each generator, and the definitions in [F1].

[F1] Under a normal-frame boost, $\chi_\ell$, $\theta_\ell$ and
$\sigma_\ell$ scale by $e^f$; the optical map and expansion are defined on
the positive screen ([[def-gr-fx-null-screen-geometry]]).

[F2] The affine screen equation is
$\theta'=-\theta^2/2-|\sigma|^2-\operatorname{Ric}(\ell,\ell)$ and the bound
is $2/|\theta(0)|$ when $\theta(0)<0$ and $\operatorname{Ric}(\ell,\ell)\ge0$
([[prop-gr-fx-null-raychaudhuri]]).

[F3] The focal event is geometric and every point of the normal generator
sufficiently just beyond it lies in $I^+(S)$, hence outside $E^+(S)$
([[lem-gr-fx-null-focal-boundary-exclusion]]).

[A1] $f$ is constant as a function of affine parameter on each generator;
without this restriction $e^f\ell$ need not be affine.

## Proof

**Given:** [F1]–[F3] and [A1].

1.1 Since $e^f>0$, the boost preserves the future null rays, and
$g(\ell',k')=e^fe^{-f}g(\ell,k)=-2$. The boost law in [F1] gives
$\widehat\theta_0=e^f\theta_0$, so $\widehat\theta_0$ has the same sign as $\theta_0$.
The new tangent is $\ell'=d/d\lambda'$, while $\ell=d/d\lambda$; solving
$d\lambda/d\lambda'=e^f$ with both parameters zero at the initial section
gives $\lambda'=e^{-f}\lambda$ because $f$ is constant along the generator.
[A1, F1, algebra]

2.1 Since $d/d\lambda'=e^f d/d\lambda$, [F1] gives
$\widehat B=e^fB$, $\widehat\sigma=e^f\sigma$, and
$\widehat\theta=e^f\theta$. Therefore
$d\widehat\theta/d\lambda'=e^{2f}d\theta/d\lambda$ and
$|\widehat\sigma|^2=e^{2f}|\sigma|^2$. Tensoriality gives
$\operatorname{Ric}(\ell',\ell')=e^{2f}\operatorname{Ric}(\ell,\ell)$.
Multiplying the Raychaudhuri equation in [F2] by $e^{2f}$ proves its form is
unchanged. If $\theta_0<0$, then
$$\lambda'_* =\frac2{|\widehat\theta_0|} =e^{-f}\frac2{|\theta_0|}=e^{-f}\lambda_*.$$
[F1, F2, step 1.1, algebra]

3.1 The screen Jacobi map is reparametrized by
$\widehat A_{\lambda'}=A_{e^f\lambda'}$, so its rank-loss event is the same point
of $M$ and its parameter value is multiplied by $e^{-f}$. By [F3], the
geometric statement that points just beyond that event lie in $I^+(S)$ is
unchanged by relabeling the affine parameter. Thus only the numerical affine
label changes; the causal-boundary conclusion does not. [F1, F3, step 1.1,
step 2.1, algebra] ∎

## Remarks

This is a normalization calculation for a constant-along-generator boost.
No field equation, energy condition, or empirical input is used.
