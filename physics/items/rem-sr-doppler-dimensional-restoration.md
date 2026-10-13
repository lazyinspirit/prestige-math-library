---
id: rem-sr-doppler-dimensional-restoration
kind: remark
title: 'Units, coordinate conventions and c restoration for the wave and Doppler formulas'
status: published
origin: pipeline
domain: physics
physical_scope: 'Units and c-restoration conventions for the ideal plane-wave model of flat classical special-relativistic spacetime and its Doppler and aberration formulas. A conventions statement; it asserts no empirical content and excludes quantum energy identifications, amplitudes, intensities and measurement claims.'
deps: [def-sr-si-units-and-coordinate-conventions,
       def-sr-null-wave-covector-and-observer-frequency,
       def-sr-affine-phase-and-wave-covector,
       lem-sr-null-covector-frame-data,
       pthm-sr-null-wave-doppler-and-aberration]
dependency_roles:
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  def-sr-affine-phase-and-wave-covector: formulation-prerequisite
  lem-sr-null-covector-frame-data: formulation-prerequisite
  pthm-sr-null-wave-doppler-and-aberration: physical-result
dependency_level: 16
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 3.2-3.3 pp. 55-59, Sections 6.4-6.5 pp. 134-139 and Section 6.6.1 p. 140; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Remark

Remark on the conventions of [[def-sr-si-units-and-coordinate-conventions]] and [[def-sr-null-wave-covector-and-observer-frequency]], for use with [[pthm-sr-null-wave-doppler-and-aberration]]. The frame data and wave data of a future null wave covector are related as in [[lem-sr-null-covector-frame-data]], and the symbols below have the meanings fixed there and in [[def-sr-affine-phase-and-wave-covector]].

**(a) Units in the adopted coordinates $x^0=ct$.** The phase $\theta$ is dimensionless; the coordinates $x^a$, the wavelength $\lambda$ and all distances are in metres; the components $k_a$ of a wave covector, the wave vector $\kappa$ and $\varpi=-k(e_0)$ are in $\mathrm m^{-1}$; the angular frequencies $\omega$ and $\omega_n$ and the linear frequencies $\nu$ are in $\mathrm s^{-1}$ ($\nu$ also in hertz); $c$ is in $\mathrm m\,\mathrm s^{-1}$; and $s$, $\beta$, $\beta_w$ and $\gamma$ are dimensionless. These assignments are consistent with the identities $\omega=c\varpi$, $\kappa=(\omega/c)s$, $\lambda=2\pi c/\omega=c/\nu$ and phase $=\theta$ dimensionless.

**(b) Two coordinate forms.** In the adopted coordinates $\theta=-\omega t+\kappa\cdot x_{\mathrm{vec}}+\mathrm{const}$ and $k_a=(-\omega/c,(\omega/c)s_1,(\omega/c)s_2,(\omega/c)s_3)$; in a chart whose time coordinate is $t$ in seconds directly, so that the metric component $g_{tt}=-c^2$ carries $\mathrm m^2\mathrm s^{-2}$ and the time-space components carry $\mathrm m\,\mathrm s^{-1}$, the same phase is $\theta=-\omega t+\kappa\cdot x_{\mathrm{vec}}+\mathrm{const}$ with the same $\omega$ and $\kappa$, and the component tuple $(-\omega,(\omega/c)s)$ carries mixed units $(\mathrm s^{-1},\mathrm m^{-1})$ because it is read in the coordinate basis $(\partial_t,\partial_{x^i})$ rather than in the dimensionless frame basis $(e_0,e_1,e_2,e_3)$. Formulas derived in one convention are not reused unchanged in the other; this is the general warning of [[def-sr-si-units-and-coordinate-conventions]] specialized to the wave covector.

**(c) Natural units and restoration.** In natural units $c=1$ with $x^0=t$ one has $k_a=(-\omega,\omega s)$, $\lambda=2\pi/\omega$, and the Doppler and aberration factors $\gamma(1-\beta\cdot s)$ and $\sqrt{(1\mp|\beta|)/(1\pm|\beta|)}$ are unchanged; restoring dimensions means replacing $k_0$ by $-\omega/c$, $k_i$ by $(\omega/c)s_i$, writing every velocity as $v=c\beta$ with the dimensionless $\beta$, and replacing $\lambda$ by $2\pi c/\omega=c/\nu$. The dimensionless factors $\gamma(1-\beta\cdot s)$ and the longitudinal square roots need no $c$ restoration because they contain only $\beta$, $s$ and $\gamma$; the $c$ restoration affects the map between $\omega$, $\nu$, $\lambda$ and the components of $k$, not the shift factors themselves.

**(d) Scope.** This remark introduces no quantum identification of energy with $\hbar\omega$, no amplitude or intensity content and no measurement claim; it is a units and convention statement carrying the scope of the items it cites. No choice principle is used.
