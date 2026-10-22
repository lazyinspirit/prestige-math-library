---
id: lem-emg-fx-charged-radial-equation
kind: lemma
title: Charged radial equation on subextremal electric RN
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-charged-radial-scattering
dependency_roles:
  def-emg-fx-charged-radial-scattering: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, second edition"
      url: https://arxiv.org/pdf/1501.06570
      locator: "Sections 4.1.1 and 4.6.1, equations (4.2a) and (4.55): minimally coupled charged scalar equation and RN separated radial potential. The local sign and mode conventions are taken from the exact Definition above."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, University of Sheffield (2022)"
      url: https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0
      locator: "Chapter 3, Sections 3.2.2-3.2.4, equations (3.36)-(3.56): gauge-covariant wave equation, angular separation, charged radial ODE and effective potential. The calculation below is given in the local sign convention."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let the metric, gauge, parameters, tortoise coordinate, harmonic $Y$, and
operator be exactly those of the charged radial scattering definition. For
$\varpi(r):=\omega-eQ/r$, a smooth separated solution
$\psi=A_{\mathrm{in}}e^{-i\omega t}Y(\Omega)u(r_*)/r$ of
$\Box_{g,A}\psi=0$ has radial function satisfying
$$\frac{d^2u}{dr_*^2}+\left[\left(\omega-\frac{eQ}{r}\right)^2-f(r)\left(\frac{\ell(\ell+1)}{r^2}+\frac{f'(r)}r\right)\right]u=0.$$
Here $f'$ denotes the derivative with respect to $r$, and derivatives of $u$
are with respect to $r_*$.

## Statement references

[[def-emg-fx-charged-radial-scattering]]

## Facts & Assumptions

**Given:** The exact subextremal electric RN exterior and charged wave operator
from the charged scattering definition, a smooth real normalized spherical
harmonic $Y$ of degree $\ell$, and a smooth separated solution with nonzero
incident normalization $A_{\mathrm{in}}$.

[F1] [[def-emg-fx-charged-radial-scattering]]: $g=-f\,dt^2+f^{-1}dr^2+r^2\gamma_{S^2}$, $A_t=-Q/r$, $D_t=\partial_t+ieQ/r$, $\Box_{g,A}=-f^{-1}D_t^2+r^{-2}\partial_r(r^2f\partial_r)+r^{-2}\Delta_{\gamma_{S^2}}$, $dr_*/dr=f^{-1}$, and $\Delta_{\gamma_{S^2}}Y=-\ell(\ell+1)Y$ with $\int Y^2\,d\omega_{S^2}=1$.

[A1] $M>0$, $0<|Q|<M$, $e\in\mathbb R$, $\omega>0$, and $\ell\in\mathbb N_0$. The complex function $u$ is twice differentiable in $r_*$.

## Proof

1.1 Put $\varpi(r)=\omega-eQ/r$. Since $A_t$ is independent of $t$,
$D_t(e^{-i\omega t}uY/r)=-i\varpi(r)e^{-i\omega t}uY/r$ and
$D_t^2(e^{-i\omega t}uY/r)=-\varpi(r)^2e^{-i\omega t}uY/r$.
The angular term is $-\ell(\ell+1)e^{-i\omega t}uY/r$. Substitution into
$\Box_{g,A}\psi=0$ and division only by the nonzero factor
$A_{\mathrm{in}}e^{-i\omega t}$ gives $Y(\Omega)\,B(t,r)=0$, where
$$B(t,r)=\frac{\varpi(r)^2}{f(r)}\frac{u}{r}+\frac1{r^2}\partial_r\!\left(r^2f(r)\partial_r\frac{u}{r}\right)-\frac{\ell(\ell+1)}{r^3}u.$$
Multiplying by $Y$ and integrating over $S^2$ gives $B(t,r)=0$ because
$\int_{S^2}Y^2\,d\omega_{S^2}=1$; no division by $Y$ at its zeros is used.
[given, F1, A1, algebra]

2.1 Since $dr_*/dr=f^{-1}$, $\partial_{r_*}=f\partial_r$, so
$r^2f\partial_r(u/r)=r\,\partial_{r_*}u-fu$. Multiplying $B=0$ by $fr$,
the radial derivative term becomes
$$\frac f r\partial_r(r\partial_{r_*}u-fu)=\frac1r\partial_{r_*}(r\partial_{r_*}u-fu)=\partial_{r_*}^2u-\frac{ff'}r u,$$
where $\partial_{r_*}r=f$ and $\partial_{r_*}f=ff'$. The other terms become
$\varpi^2u$ and $-f\ell(\ell+1)u/r^2$. Their sum is the asserted radial
equation. [given, F1, A1, step 1.1, algebra] ∎

## Remarks

This is a conditional separation identity for the explicitly supplied harmonic
and mode. It proves neither existence of a spherical harmonic nor existence of
a scattering solution.
