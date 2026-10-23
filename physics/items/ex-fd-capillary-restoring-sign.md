---
id: ex-fd-capillary-restoring-sign
kind: example
title: Positive gravity and capillary modal restoring terms
status: published
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Use $\mathbb C:=\mathbb R[X]/(X^2+1)$ with $i:=[X]$, the series-defined complex exponential $\exp w:=\sum_{n=0}^{\infty}w^n/n!$, and $\pi$ defined as twice the least positive zero of cosine.

Fix periods $L_1,L_2>0$ metres and let $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$. Define horizontal derivatives by differentiating the $L$-periodic lift to $\mathbb R^2$, and set $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$. Fix an integer lattice mode $m=(m_1,m_2)\in\mathbb Z^2\setminus\{(0,0)\}$ and define its wavevector and magnitude by $\mathbf k:=2\pi(m_1/L_1,m_2/L_2)$ in inverse metres and $k:=|\mathbf k|>0$. For any representative $\widetilde x\in\mathbb R^2$ of $[x]\in\mathbb T^2_L$, define the horizontal mode factor $q_m^h([x]):=\exp(i\mathbf k\cdot\widetilde x)$. A change of representative by $(L_1n_1,L_2n_2)$ changes its exponent by $2\pi iN$, where $N=m_1n_1+m_2n_2\in\mathbb Z$; the exponential addition law and $\exp(i\pi)=-1$ give $\exp(2\pi iN)=1$ for every integer $N$ (by repeated addition for $N\ge0$ and $\exp(w)\exp(-w)=1$ for $N<0$), so $q_m^h$ is well-defined. The identity $\exp(i\mathbf k\cdot\widetilde x)\exp(-i\mathbf k\cdot\widetilde x)=\exp(0)=1$ also shows $q_m^h$ never vanishes. Its periodic lift has $\Delta_hq_m^h=-k^2q_m^h$. Thus, for any unrestricted nonzero formal coefficient amplitude $H\in\mathbb C$ in metres, the nonzero horizontal mode $\eta_m:=Hq_m^h$ satisfies $\Delta_h\eta_m=-k^2\eta_m$. For real $s$, write $e^s:=\exp(s)$ and define $\sinh s:=(e^s-e^{-s})/2$, $\cosh s:=(e^s+e^{-s})/2$, and $\tanh s:=\sinh s/\cosh s$. Fix $h,\rho,g,\gamma>0$, where $h$ is depth in metres, $\rho$ is constant liquid mass density in kilograms per cubic metre, $g$ is the magnitude of the downward gravitational acceleration $-g e_z$ in metres per second squared, and $\gamma$ is the constant surface-tension coefficient in newtons per metre; $e_z$ is the upward unit vector. The vertical coordinate $z$ is upward, with the flat reference surface at $z=0$ and the fixed bed at $z=-h$. Let $I\subseteq\mathbb R$ be the model's nonempty open time interval in seconds. The adopted first-order model is the one specified in the Postulate titled “Linear capillary free-surface model.” Its real coefficient fields are $\eta:\mathbb T^2_L\times I\to\mathbb R$ in metres and $\phi:\mathbb T^2_L\times[-h,0]\times I\to\mathbb R$ in metres squared per second; in periodic-lift coordinates they have continuous partial derivatives through total orders two and three, respectively, with one-sided continuous extensions at $z=-h,0$. Its equations in the selected periodic cell are $\Delta_h\phi+\partial_z^2\phi=0$ for $-h<z<0$, $\partial_z\phi(x,-h,t)=0$, $\partial_t\eta(x,t)=\partial_z\phi(x,0,t)$, and $\partial_t\phi(x,0,t)+g\eta(x,t)-\frac{\gamma}{\rho}\Delta_h\eta(x,t)=0$. For $\omega\in\mathbb C$ in inverse seconds define $q_m([x],t):=q_m^h([x])\exp(-i\omega t)$ for $t\in I$. A nonzero complex mode at index $m$ and angular frequency $\omega$ is a pair of fields $\eta_c:\mathbb T^2_L\times I\to\mathbb C$ and $\phi_c:\mathbb T^2_L\times[-h,0]\times I\to\mathbb C$ given by $\eta_c([x],t)=Hq_m([x],t)$ and $\phi_c([x],z,t)=F(z)q_m([x],t)$ and satisfying the complex-linear extension of those equations, with $H\in\mathbb C\setminus\{0\}$ in metres and $F\in C^2([-h,0],\mathbb C)$ in metres squared per second; here $F$ is continuous on $[-h,0]$, twice continuously differentiable on $(-h,0)$, and its first two derivatives extend continuously to the endpoints. The mode definition and dispersion result are those of the theorem titled “Linear capillary-gravity wave dispersion.” Its frequency relation is $\omega^2=(gk+(\gamma/\rho)k^3)\tanh(kh)>0$, since $h,k,g,\gamma,\rho>0$ and $\tanh(kh)>0$. Thus the gravity coefficient $g$ and capillary coefficient $\gamma k^2/\rho$ are both positive, and their contributions enter additively in the modal factor $g+\gamma k^2/\rho$. No finite-displacement constraint is imposed on the formal coefficient: optional geometric displacements are scaled by a sufficiently small dimensionless factor on compact time windows as in the postulate. This is a symbolic conditional model example; it reports no observation or numerical measurement.

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
