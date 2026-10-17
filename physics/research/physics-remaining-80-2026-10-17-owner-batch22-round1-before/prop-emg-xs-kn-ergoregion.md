---
id: prop-emg-xs-kn-ergoregion
kind: proposition
title: Specified time Killing ergosurfaces and geodesic constants
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - thm-emg-xs-kn-extension
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-explicit-power-regimes
  - thm-gr-killing-and-on-shell-matter-identities
dependency_roles:
  thm-emg-xs-kn-extension: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.124)-(7.128): rotating horizon and stationary-limit surfaces; the selected-model claims are derived here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)-(3.23): KN roots and stationary-limit surface."
---

## Statement

Let $M>0$ and $M^2\ge a^2+q^2>0$ in the selected ingoing KN model.
For the specified stationary field $T=\partial_v$,
$$g(T,T)=-\frac{r^2-2Mr+q^2+a^2\cos^2\theta}{\Sigma},\qquad \Sigma=r^2+a^2\cos^2\theta.$$
Define its ergoregion by $g(T,T)>0$ and its stationary-limit set by
$g(T,T)=0$, using the planned terminology in
[[def-emg-causal-solution-and-horizon-vocabulary]]. At each angle where
the discriminant is nonnegative, the stationary-limit radii are
$$r_{E\pm}(\theta)=M\pm\sqrt{M^2-q^2-a^2\cos^2\theta}.$$
If $a\ne0$, then $g(T,T)=a^2\sin^2\theta/\Sigma_H>0$ at every nonpolar
point of the outer horizon $r_+=M+\sqrt{M^2-a^2-q^2}$, and
$r_{E+}(\theta)>r_+$. The outer stationary-limit set meets the outer
horizon on the rotation axis. For each affinely parameterized geodesic,
$g(T,\dot\gamma)$ and $g(\Psi,\dot\gamma)$ are constant, where
$\Psi=X\partial_Y-Y\partial_X$ generates rotations. These statements
refer to the specified fields and model.

## Facts & Assumptions

**Given:** The smooth ingoing KN metric with $M>0$ and
$M^2\ge a^2+q^2>0$.

[F1] [[thm-emg-xs-kn-extension]]: the metric is smooth on the full sphere
product, its coefficients depend on $r,\theta$ but not $v$, and it is
invariant under the global rotation field $\Psi$. Its $vv$ coefficient is
$g_{vv}=-1+(2Mr-q^2)/\Sigma$.

[F2] [[thm-gr-killing-and-on-shell-matter-identities]]: a smooth field is
Killing if its metric Lie derivative vanishes; along an affine geodesic,
the pairing of a Killing field with the tangent is constant. Equivalently,
the Killing equation is $\nabla_aK_b+\nabla_bK_a=0$.

[F3] [[def-emg-explicit-power-regimes]]: nonnegative real square roots are
unique and $\sqrt0=0$.

[L1] The planned [[def-emg-causal-solution-and-horizon-vocabulary]] carrier
is absent. Its exact interface defines the ergoregion for a specified
stationary field $T$ by $g(T,T)>0$ and distinguishes the stationary-limit
set $g(T,T)=0$ from a null horizon.

[A1] $\Psi$ is the smooth generator of rotations on $S^2$ and equals
$\partial_\psi$ away from the axes. The angles are dimensionless and
$M,a,q,r$ have units of length.

## Proof

1.1 The $vv$ metric coefficient in [F1] is
$$-1+\frac{2Mr-q^2}{\Sigma} =-\frac{r^2-2Mr+q^2+a^2\cos^2\theta}{\Sigma},$$
which proves the stated norm. Since $\Sigma>0$, its zero set is the
quadratic equation in the numerator; the quadratic formula and [F3] give
the stated two real roots exactly when the discriminant is nonnegative.
The metric is independent of $v$ and invariant under rotations, so
$\mathcal L_Tg=\mathcal L_\Psi g=0$ and [F2] makes both fields Killing.
[L1, F1, F2, F3, A1, algebra]

2.1 Write $r_+=M+\sqrt{M^2-a^2-q^2}$ and
$\Sigma_H=r_+^2+a^2\cos^2\theta$. Put
$D=M^2-a^2-q^2$, $u=\sqrt{D+a^2\sin^2\theta}$ and $w=\sqrt D$.
For $a\ne0$ and $\sin\theta\ne0$,
$(u-w)(u+w)=a^2\sin^2\theta>0$ and $u+w>0$, hence $u>w$.
Thus the outer stationary-limit radius $r_{E+}=M+u$ strictly exceeds
$r_+=M+w$. At the horizon,
$2Mr_+=r_+^2+a^2+q^2$, and substitution in step 1.1 yields
$g(T,T)=a^2\sin^2\theta/\Sigma_H$. This is positive off the axis and zero
on the axis, proving the stated local distinction. [F1, F3, step 1.1, A1, algebra]

3.1 Let $\gamma$ be an affine geodesic and let $K$ be either Killing field
from step 1.1. Metric compatibility and the product rule give
$$\frac{d}{d\lambda}g(K,\dot\gamma) =g(\nabla_{\dot\gamma}K,\dot\gamma) +g(K,\nabla_{\dot\gamma}\dot\gamma).$$
The second term is zero by the affine geodesic equation. The first is zero
because the Killing equation in [F2] says the symmetric part of $\nabla K$
vanishes, while $\dot\gamma\otimes\dot\gamma$ is symmetric. The derivative
therefore vanishes and both contractions are constant on the geodesic
interval. [F2, step 1.1, algebra] ∎
## Remarks

The missing terminology carrier is used only for the stated ergoregion and
stationary-limit labels. The formulas and Killing identities are proved for
the specified fields; no event-horizon classification or observation is
asserted.
