---
id: def-emx-anisotropic-plane-symbol
kind: definition
title: "Anisotropic Maxwell symbol"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - post-em-material-closure
  - pthm-em-macroscopic-maxwell
  - def-em-plane-wave-definition
  - def-em-si-conventions
dependency_roles:
  post-em-material-closure: physical-assumption
  pthm-em-macroscopic-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A source-free bulk plane-wave sector of the macroscopic Maxwell model in one fixed material rest frame, with constant real symmetric positive-definite absolute permittivity tensor and constant positive scalar absolute permeability. Interfaces, spatial dispersion, loss, experimental material data and finite-energy conditions are outside this definition."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf"
      locator: "Chapter 3, §3.2.A, printed pp. 292–294: anisotropic constitutive tensors, the principal-coordinate uniaxial tensor and the separate gyrotropic-plasma example; §3.3.E, printed pp. 315–322: plane waves in uniaxial media and the ordinary/extraordinary wave surfaces."
    - title: "Weng Cho Chew, Electromagnetic Field Theory, Purdue ECE 604 lecture notes, 2023–2024 revision"
      url: "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
      locator: "§7.1.2, printed pp. 83–84: anisotropic local constitutive tensors, complex permittivity for conductive media, and the distinction between D and E directions. Chew uses the exp(+jωt) convention; the definition below follows the library's exp(−iωt) convention."
---

## Definition

Use a material-rest frame: an inertial chart in which each modelled material element has fixed spatial coordinates. Use the macroscopic fields of the classical electromagnetic material model. In a homogeneous source-free region take $\rho_f=0$, $J_f=0$ and select the nonconducting, lossless constitutive branch

$$D=\varepsilon E,\qquad B=\mu H,$$

where $\varepsilon\in\mathbb R^{3\times3}$ is a constant real symmetric positive-definite absolute permittivity tensor in $\mathrm{F\,m^{-1}}$, and $\mu>0$ is a constant real scalar absolute permeability in $\mathrm{H\,m^{-1}}$. These are declared model coefficients, not dimensionless relative coefficients. Here lossless means these coefficients are real and the conductive current density $J_c=\sigma E$ is absent, $\sigma=0$; no dispersive or absorbing coefficient is included. Fix right-handed Cartesian coordinates and the phasor convention

$$E(x,t)=\operatorname{Re}\!\left(e\,e^{i(k\cdot x-\omega t)}\right),\qquad B(x,t)=\operatorname{Re}\!\left(b\,e^{i(k\cdot x-\omega t)}\right),$$

with $k\in\mathbb R^3\setminus\{0\}$ in $\mathrm{m^{-1}}$, $\omega>0$ in $\mathrm{s^{-1}}$, and complex amplitudes $e,b\in\mathbb C^3$. Write $d=\varepsilon e$ and $h=\mu^{-1}b$ for the displacement and magnetic-intensity amplitudes, in $\mathrm{C\,m^{-2}}$ and $\mathrm{A\,m^{-1}}$. For complex vectors use the bilinear dot product $u\cdot v=\sum_{r=1}^3u_rv_r$, with no conjugation. The **anisotropic Maxwell symbol** is the linear map

$$\mathcal M(k,\omega)e:=k\times\bigl(\mu^{-1}(k\times e)\bigr)+\omega^2\varepsilon e.$$

A nonzero amplitude $e$ is a source-free plane-wave mode in this branch exactly when $\mathcal M(k,\omega)e=0$; its magnetic amplitudes are $b=(k\times e)/\omega$ and $h=b/\mu$. The cross product is extended complex-bilinearly. In this model $k\cdot d=0$, while $k\cdot e$ need not vanish.

## Definition references

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-plane-wave-definition]]

[[def-em-si-conventions]]

## Derivation from the source-free Maxwell equations

For the real plane-wave fields above, the source-free macroscopic equations are $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}H=\partial_tD$, $\operatorname{div}B=0$, and $\operatorname{div}D=0$. Their phasor amplitudes are $k\times e=\omega b$, $k\times h=-\omega d$, $k\cdot b=0$, and $k\cdot d=0$: spatial differentiation multiplies the common phase by $ik$, time differentiation by $-i\omega$, and equality of the real encodings for all $(x,t)$ forces equality of their complex amplitudes.

With $d=\varepsilon e$ and $h=\mu^{-1}b$, the first curl equation gives $b=(k\times e)/\omega$. Substitution into the second gives $\mathcal M(k,\omega)e=0$. Conversely, if this symbol equation holds, define $b=(k\times e)/\omega$ and $h=b/\mu$. The first curl equation then holds by definition, and the second is the symbol equation divided by $\omega$. Taking the dot product of the symbol equation with $k$ gives $\omega^2 k\cdot\varepsilon e=0$, hence $k\cdot d=0$; also $k\cdot b=0$ because $k\cdot(k\times e)=0$. Thus the symbol equation is equivalent to the source-free plane-wave Maxwell amplitude system under the declared coefficients and convention. It is a conditional model formulation, not evidence that any substance realizes these coefficients.
