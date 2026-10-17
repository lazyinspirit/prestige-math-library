---
id: ex-emg-xs-rn-charge-sign
kind: example
title: Opposite electric charges give the same RN metric
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-xs-rn-data
  - def-emg-xs-geometric-electrovac
  - lem-emg-lorentz-hodge-calculus
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
dependency_roles:
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): RN field and charge parameters"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN field and exact Einstein-Maxwell verification"
physical_scope: null
---


## Example

Fix a length $\ell>0$ and a real mass parameter $M$. On any positive-radius
interval where the two functions
$f_\pm(r)=1-2M/r+\ell^2/r^2$ are nonzero, compare the pure electric RN data
with $q_e=+\ell$ and $q_e=-\ell$.

## Facts & Assumptions

**Given:** The dyonic RN formula with $q_m=0$ and the same $M,r$ domain in both cases.

[F1] [[def-emg-xs-rn-data]]: $f=1-2M/r+(q_e^2+q_m^2)/r^2$ and
$\mathcal F=-q_e r^{-2}dx^0\wedge dr+q_m\omega_{S^2}$.

[F2] [[lem-emg-lorentz-hodge-calculus]]: on a positively oriented Lorentzian
orthonormal coframe, the two-form Hodge map is determined by the metric and
orientation and satisfies $\star(e^0\wedge e^1)=-e^2\wedge e^3$.

[F3] [[thm-continuous-implies-integrable]] makes a continuous real function on a compact interval Riemann integrable. [[thm-ftc-second-part]] evaluates its integral as $G(b)-G(a)$ when the integrand is the derivative of a differentiable primitive $G$.

[F4] [[def-emg-xs-geometric-electrovac]] defines sphere flux by pulling back the smooth field or its Hodge dual along a smooth embedding of a compact oriented sphere and integrating the resulting top form. The integral uses the inherited $\mathrm{AC}_\omega$ convention; the flux parameter is the integral divided by $4\pi$.

## Verification


1.1 Since $(+\ell)^2=(-\ell)^2$, both lapse functions equal $1-2M/r+\ell^2/r^2$. Every metric coefficient is consequently identical. [F1, algebra]

2.1 At fixed $x^0$ and admitted radius $r>0$, the sphere map $u\mapsto(x^0,r,u)$ from the oriented unit sphere into the RN product is a smooth embedding; it is a product-factor inclusion, so it is injective with injective differential and has the continuous inverse given by the sphere projection. The source sphere is compact and has no boundary, and the fields are smooth on a neighborhood since $r>0$ and $f(r)\ne0$. Thus its pulled-back field and dual are smooth compactly supported top forms, and the flux integrals below are the well-defined operation in [F4]. The two fields are $\mathcal F_\pm=\mp\ell r^{-2}dx^0\wedge dr$, so $\mathcal F_-=-\mathcal F_+$. If $f>0$, use the positively oriented coframe $e^0=\sqrt f\,dx^0$, $e^1=f^{-1/2}dr$, $e^2=r\,d\theta$, $e^3=r\sin\theta\,d\phi$. If $f<0$, use $e^0=(-f)^{-1/2}dr$, $e^1=-(-f)^{1/2}dx^0$, $e^2=r\,d\theta$, $e^3=r\sin\theta\,d\phi$. In both cases $dx^0\wedge dr=e^0\wedge e^1$ and $e^2\wedge e^3=r^2\omega_{S^2}$, so [F2] gives $\star_g(dx^0\wedge dr)=-r^2\omega_{S^2}$ and $\star_g\mathcal F_\pm=\pm\ell\,\omega_{S^2}$. For the explicit sphere parametrization $s(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$, differentiation gives $s\cdot(s_\theta\times s_\phi)=\sin\theta$, so the outward form pulls back to $\sin\theta\,d\theta\wedge d\phi$, as in [F1]. The sine density is continuous, hence integrable by [F3]; its primitive is $-\cos\theta$. Its integral on $\delta\le\theta\le\pi-\delta$, $0\le\phi\le2\pi$ is $4\pi\cos\delta$, and the two omitted caps have total area $4\pi(1-\cos\delta)\to0$ by the same bounded polar density; the seam has zero width in the azimuthal integral. Thus $\int_{S^2}\omega_{S^2}=2\pi[-\cos\theta]_0^\pi=4\pi$. The normalized oriented electric sphere fluxes are therefore $(4\pi)^{-1}\int_{S_r}\star_g\mathcal F_\pm=\pm\ell$. Thus the metric does not determine the sign of the electric flux parameter. [F1, F2, F3, F4, step 1.1, algebra] ∎

