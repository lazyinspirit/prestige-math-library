---
id: ex-fd-capillary-restoring-sign
kind: example
title: Positive gravity and capillary modal restoring terms
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-capillary-wave-model-prediction
dependency_roles:
  pthm-fd-capillary-wave-model-prediction: physical-result
physical_scope: >-
  Exact sign check for nonzero modes of the stated inviscid finite-depth linear
  capillary-gravity model; it is not a measured result or a statement about
  nonlinear or viscous fluids.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT OpenCourseWare 18.354, Nonlinear Dynamics II: Continuum Systems, Spring 2015 Lecture Notes (authors: Michael Brenner, Tom Peacock, Roman Stocker, Pedro Reis, Jörn Dunkel)"
      url: "https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf"
      locator: "§23.1, printed pp. 104–105, equations (547c) and (551): capillary contribution to the linear dynamic condition and mode frequency."
    - title: "Howard Georgi, MIT OpenCourseWare 8.03SC, The Physics of Waves, Fall 2016 textbook"
      url: "https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf"
      locator: "§11.5.2, printed pp. 290–291, equation (11.137): positive gravity and surface-tension contributions to the finite-depth modal frequency."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin, 'Surface Tension'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html"
      locator: "Chapter 11, equations (11.119)–(11.121): capillary pressure sign and finite-depth dispersion relation."
verification:
  precheck: pass
---

## Example

Take any nonzero horizontal periodic mode in the adopted model, with $h,\rho,g,\gamma>0$. Its horizontal Laplacian satisfies $\Delta_h\eta=-k^2\eta$, so the capillary part of the dynamic free-surface coefficient is $\gamma k^2/\rho>0$ and adds to the gravity coefficient $g>0$. The exact model frequency therefore has $\omega^2>0$. This is a symbolic model example; it reports no observation or numerical measurement.

## Example references

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §11.5.2, printed pp. 290–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.119)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Facts & Assumptions

**Given:** The positive model parameters and nonzero mode in the Example.

[F1] [[pthm-fd-capillary-wave-model-prediction]]: every nonzero mode of the stated linear model has $\omega^2=(gk+(\gamma/\rho)k^3)\tanh(kh)$.

## Verification

1.1 Since $k>0$, $\gamma>0$, and $\rho>0$, the capillary coefficient $\gamma k^2/\rho$ is positive; adding $g>0$ yields $g+\gamma k^2/\rho>0$. [given, algebra]

2.1 By [F1], $\omega^2=k(g+\gamma k^2/\rho)\tanh(kh)$. The factors $k$, $g+\gamma k^2/\rho$, and $\tanh(kh)$ are positive, so $\omega^2>0$ and the mode frequency is real and nonzero. [given, F1, step 1.1, algebra] ∎
