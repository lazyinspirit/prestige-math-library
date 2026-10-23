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

Use $\mathbb C:=\mathbb R[X]/(X^2+1)$ with $i:=[X]$, the series-defined complex exponential $\exp w:=\sum_{n=0}^{\infty}w^n/n!$, and $\pi$ defined as twice the least positive zero of cosine.

Fix periods $L_1,L_2>0$ metres and let $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$. Define horizontal derivatives by differentiating the $L$-periodic lift to $\mathbb R^2$, and set $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$. Fix an integer lattice mode $m=(m_1,m_2)\in\mathbb Z^2\setminus\{(0,0)\}$ and define its wavevector and magnitude by $\mathbf k:=2\pi(m_1/L_1,m_2/L_2)$ in inverse metres and $k:=|\mathbf k|>0$. For any representative $\widetilde x\in\mathbb R^2$ of $[x]\in\mathbb T^2_L$, define the horizontal mode factor $q_m^h([x]):=\exp(i\mathbf k\cdot\widetilde x)$. A change of representative by $(L_1n_1,L_2n_2)$ changes its exponent by $2\pi iN$, where $N=m_1n_1+m_2n_2\in\mathbb Z$; the exponential addition law and $\exp(i\pi)=-1$ give $\exp(2\pi iN)=1$ for every integer $N$ (by repeated addition for $N\ge0$ and $\exp(w)\exp(-w)=1$ for $N<0$), so $q_m^h$ is well-defined. The identity $\exp(i\mathbf k\cdot\widetilde x)\exp(-i\mathbf k\cdot\widetilde x)=\exp(0)=1$ also shows $q_m^h$ never vanishes. Its periodic lift has $\Delta_hq_m^h=-k^2q_m^h$. Thus, for any unrestricted nonzero formal coefficient amplitude $H\in\mathbb C$ in metres, the nonzero horizontal mode $\eta_m:=Hq_m^h$ satisfies $\Delta_h\eta_m=-k^2\eta_m$. For real $s$, write $e^s:=\exp(s)$ and define $\sinh s:=(e^s-e^{-s})/2$, $\cosh s:=(e^s+e^{-s})/2$, and $\tanh s:=\sinh s/\cosh s$. In the adopted finite-depth linear model with $h>0$ metres, $\rho>0$ kilograms per cubic metre, $g>0$ metres per second squared and $\gamma>0$ newtons per metre, its capillary contribution to the restoring coefficient is $\gamma k^2/\rho>0$ and adds to the positive gravity coefficient $g$. The model angular frequency $\omega$ in inverse seconds therefore satisfies $\omega^2=(gk+(\gamma/\rho)k^3)\tanh(kh)>0$. No finite-displacement constraint is imposed on this formal coefficient: optional geometric displacements are scaled by a sufficiently small dimensionless factor on compact time windows as in the postulate. This is a symbolic conditional model example; it reports no observation or numerical measurement.

## Example references

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §11.5.2, printed pp. 290–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.119)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Facts & Assumptions

**Given:** The positive model parameters and nonzero mode in the Example.

[F1] [[pthm-fd-capillary-wave-model-prediction]]: for each nonzero integer lattice mode, the quotient-torus mode factor has $\Delta_hq_m=-k^2q_m$; every complex mode with $k>0$ has $\omega^2=(gk+(\gamma/\rho)k^3)\tanh(kh)$, and the right-hand side is positive when $h,\rho,g,\gamma>0$.

## Verification

1.1 At any time $t$ in the model's nonempty interval, the theorem's factor in [F1] is $q_m(x,t)=q_m^h(x)\exp(-i\omega t)$. Its scalar time factor is nonzero by the exponential reciprocal identity, so $\Delta_hq_m=-k^2q_m$ in [F1] gives $\Delta_hq_m^h=-k^2q_m^h$ after cancellation. Linearity then gives $\Delta_h\eta_m=-k^2\eta_m$ for $\eta_m=Hq_m^h$. [given, F1, algebra]

1.2 Since $k>0$, $\gamma>0$, and $\rho>0$, the capillary coefficient $\gamma k^2/\rho$ is positive; adding $g>0$ yields $g+\gamma k^2/\rho>0$. [given, algebra]

2.1 By [F1], $\omega^2=k(g+\gamma k^2/\rho)\tanh(kh)>0$ for the nonzero lattice mode defined in the Example; hence each model frequency is real and nonzero. [given, F1, step 1.2, algebra] ∎
