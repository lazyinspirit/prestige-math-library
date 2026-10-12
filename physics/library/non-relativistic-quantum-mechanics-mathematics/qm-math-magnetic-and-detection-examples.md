---
page: qm-math-magnetic-and-detection-examples
title: Qm Math Magnetic And Detection — Examples
status: draft
items: []
requires:
  - qm-math-magnetic-and-detection
  - improper-and-parameter-dependent-multiple-integrals
examples:
  - ex-nrqm-magnetic-and-detection-gauge-phase-units
  - ex-nrqm-magnetic-and-detection-finite-dark-bin-probability
  - ex-nrqm-magnetic-and-detection-preparation-spread-versus-error
---

The companion page to [[qm-math-magnetic-and-detection]] records three
explicit mathematical checks behind its gauge, detection and uncertainty
results. All three items are mathematics: they carry `domain: mathematics`,
depend only on the items of the parent page and on mathematical suppliers, and
make no physical or empirical claim.

[[ex-nrqm-magnetic-and-detection-gauge-phase-units]] verifies the phase algebra
of the gauge multiplier: the factor $e^{iq\chi/\hbar}$ is unchanged when
$\chi$ is shifted by $2\pi\hbar/q$, and for the linear gauge $\chi(x)=c\cdot x$
with $A=0$, $\Phi=0$ it computes
$K_{c,0}=GK_{0,0}G^{-1}$, $G(P_j)G^{-1}=P_j-qc_j$ and
$e^{-itK_{c,0}/\hbar}=Ge^{-itK_{0,0}/\hbar}G^{-1}$, so the constant vector
potential is removed by a unitary. It also checks, in a stated SI
dimension-vector convention, that $q\chi/\hbar$ has zero dimension vector.

[[ex-nrqm-magnetic-and-detection-finite-dark-bin-probability]] computes the two
bin laws of the parent page for the amplitudes $a=1$, $b=e^{2\pi ix}$ on
$[0,1)$: the unnormalized coherent weight density $2+2\cos(2\pi x)$ vanishes
at the ideal dark point $x_0=\frac12$, while the normalized coherent density
is $1+\cos(2\pi x)$; yet every bin
$B_\varepsilon=(\frac12-\varepsilon,\frac12+\varepsilon)$ of positive length
has $p_{\mathrm{coh}}(B_\varepsilon)=2\varepsilon-\frac{\sin(2\pi\varepsilon)}\pi
=\frac{4\pi^2}3\varepsilon^3+O(\varepsilon^5)>0$, while the balanced incoherent
law gives $2\varepsilon$; a dark point is not a forbidden bin.

[[ex-nrqm-magnetic-and-detection-preparation-spread-versus-error]] computes the
Gaussian preparation $\psi_\sigma$ and its maximal-domain spreads
$\Delta Q=\sigma$, $\Delta P=\hbar/(2\sigma)$, saturating the parent page's
bound; and it shows that an independent symmetric additive reading error of
size $e$ changes the second central moment of any admissible density by
$V(\rho_e)=V(\rho)+e^2$, so the model variance $\sigma^2+e^2$ does not
determine the preparation spread $\sigma$ when $e$ is unknown, although it
implies $\sigma<\sqrt{\sigma^2+e^2}$.
