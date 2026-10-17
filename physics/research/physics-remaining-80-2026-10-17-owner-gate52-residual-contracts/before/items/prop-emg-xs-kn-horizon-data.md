---
id: prop-emg-xs-kn-horizon-data
kind: proposition
title: KN Killing generators, surface gravity, area and potential
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
  - lem-gr-future-causal-classification-by-a-timelike-field
dependency_roles:
  thm-emg-xs-kn-extension: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)-(3.23): horizon roots and angular velocity; area, generator and potential contractions are calculated here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, rotating horizon and stationary-limit discussion; its global horizon interpretation is not imported."
---

## Statement

Let $M>0$ and $M^2\ge a^2+q^2>0$ in the selected ingoing KN model.
For either $r_H=r_\pm=M\pm\sqrt{M^2-a^2-q^2}$ set
$R_H=r_H^2+a^2$, $\Sigma_H=r_H^2+a^2\cos^2\theta$, and
$$\chi_H=\partial_v+\Omega_H\Psi,\qquad \Omega_H=\frac{a}{R_H},$$
where $\Psi=X\partial_Y-Y\partial_X$ is the smooth rotation field on
$S^2$. The surface $r=r_H$ is a null hypersurface and $\chi_H$ is its
future null normal and Killing generator. Under the specified normalization
$d(g(\chi_H,\chi_H))=-2\kappa_H\chi_H^\flat$ in
[[def-emg-causal-solution-and-horizon-vocabulary]],
$$\kappa_H=\frac{\Delta'(r_H)}{2R_H} =\frac{r_H-r_{\mathrm{other}}}{2R_H},\qquad \operatorname{Area}(S_H)=4\pi R_H,\qquad -\mathcal A_{\mathrm{in}}(\chi_H)=\frac{q r_H}{R_H}.$$
At the double root $\kappa_H=0$. These are local geometric calculations on
the specified model; they assert no maximality or uniqueness.

## Facts & Assumptions

**Given:** The exact ingoing KN metric and potential with $M>0$ and
$M^2\ge a^2+q^2>0$.

[F1] [[thm-emg-xs-kn-extension]]: the product metric and potential are
smooth on $\mathbb R_v\times(0,\infty)_r\times S^2$, with
$\Sigma=r^2+a^2\cos^2\theta>0$, and the future timelike field is
$N=\partial_v-(1+f_0^2)\partial_r/2$. On a polar chart,
$$g_{vv}=\frac{-\Delta+a^2\sin^2\theta}{\Sigma},\quad g_{v\psi}=-\frac{a(R-\Delta)\sin^2\theta}{\Sigma},\quad g_{\psi\psi}=\frac{(R^2-a^2\Delta\sin^2\theta)\sin^2\theta}{\Sigma},$$
$g_{vr}=1$, $g_{r\psi}=-a\sin^2\theta$, and $g_{\theta\theta}=\Sigma$;
$\mathcal A_{\mathrm{in}}=-qr\Sigma^{-1}(dv-a\sin^2\theta\,d\psi)$.

[F2] [[thm-gr-killing-and-on-shell-matter-identities]]: a smooth field
with zero metric Lie derivative is Killing; along an affinely parameterized
geodesic, its metric pairing with the tangent is constant.

[F3] [[lem-gr-future-causal-classification-by-a-timelike-field]]: a
nonzero null vector is future-directed when its pairing with the selected
future timelike field is negative.

[F4] [[def-emg-explicit-power-regimes]]: each nonnegative real has a unique
nonnegative square root, with $\sqrt0=0$.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (b)-(c): the null conormal criterion, nonempty dense regular Killing-generator portion, ambient signed normalization $d(g(\chi,\chi))=-2\kappa_H\chi^\flat$, and intrinsic positive induced area density apply to the specified horizon and section.

[A1] $\Psi$ is the global smooth generator of rotations of the round sphere;
on polar charts it equals $\partial_\psi$. The section $S_H$ is the sphere
at fixed $v,r_H$. Parameters and radial coordinates have length units;
angles are dimensionless, and $\Omega_H,\kappa_H$ have inverse-length units.

## Proof

1.1 The quadratic factors as
$\Delta=(r-r_+)(r-r_-)$, with $D=M^2-a^2-q^2\ge0$. Its nonnegative root
$s=\sqrt D$ satisfies $s<M$: if $s\ge M$, then $s^2\ge M^2$, contrary to
$s^2=M^2-(a^2+q^2)<M^2$. Hence both roots $M\pm s$ are positive. The metric coefficients are
independent of $v$ and invariant under rotations, so [F2] makes
$\partial_v$, $\Psi$, and their constant linear combination $\chi_H$
Killing. [F1, F2, F4, A1, algebra]

2.1 In a polar chart, substitute $\Omega_H=a/R_H$ into the metric at
$r=r_H$. The result is
$$\chi_H^\flat=\frac{\Sigma_H}{R_H}\,dr.$$
The multiplier is positive. Since $dr(\chi_H)=0$, this identity gives
$g(\chi_H,\chi_H)=0$ and shows $\chi_H$ is tangent and normal to the
level $r=r_H$. It also gives
$g^{-1}(dr,dr)=(R_H/\Sigma_H)^2g(\chi_H,\chi_H)=0$, so the level is
null. Moreover $dr(N)=-(1+f_0^2)/2<0$, whence
$g(\chi_H,N)=(\Sigma_H/R_H)dr(N)<0$; [F3] makes the generator future.
The generator has $v$ component one everywhere, so its nonzero-generator part is the whole horizon, nonempty and dense. This verifies the Killing-horizon conditions in [L1]. The formula is
smooth at the axes because it is an identity of global tensors agreeing on
the dense polar charts. [F1, F3, L1, step 1.1, A1, algebra]

3.1 Direct contraction on a polar chart gives
$$g(\chi_H,\chi_H)=-\frac{\Delta}{\Sigma} \left(1-a\sin^2\theta\,\Omega_H\right)^2 +\frac{\sin^2\theta}{\Sigma}(R\Omega_H-a)^2.$$
At $r_H$ the second squared factor vanishes, as does its first radial
derivative. Also $1-a^2\sin^2\theta/R_H=\Sigma_H/R_H$. Therefore
$$d(g(\chi_H,\chi_H))=-\frac{\Delta'(r_H)\Sigma_H}{R_H^2}\,dr\qquad\text{on }r=r_H.$$
Comparing with [L1] and step 2.1 yields
$\kappa_H=\Delta'(r_H)/(2R_H)$. Differentiating the factorization of
$\Delta$ gives $\Delta'(r_H)=r_H-r_{\mathrm{other}}$, including zero
at the double root. [F1, L1, step 2.1, algebra]

4.1 The metric induced on the fixed-$v,r_H$ sphere is
$$\Sigma_H\,d\theta^2+\frac{R_H^2}{\Sigma_H}\sin^2\theta\,d\psi^2.$$
Its area density is $R_H\sin\theta$, so integration over
$0\le\theta\le\pi$, $0\le\psi<2\pi$ gives $4\pi R_H$. Contracting the
potential in [F1] gives
$$-\mathcal A_{\mathrm{in}}(\chi_H) =\frac{q r_H}{\Sigma_H}\left(1-\frac{a^2\sin^2\theta}{R_H}\right) =\frac{q r_H}{R_H},$$
which is independent of $\theta$. [F1, L1, step 3.1, algebra] ∎
## Remarks

The current vocabulary supplies the exact Killing-horizon, signed surface-gravity and area definitions. The coordinate calculations above verify those interfaces for the displayed smooth metric, including both roots and the double-root limit.
