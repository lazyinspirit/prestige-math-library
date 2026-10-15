---
id: pthm-rpm-static-clock-redshift
kind: physics-theorem
title: "Static-clock redshift, proper acceleration, and a controlled weak-field expansion in Schwarzschild"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-gr-schwarzschild-vacuum-model
  - post-gr-ideal-clocks-and-free-fall
  - def-gr-schwarzschild-exterior-model
  - lem-gr-schwarzschild-static-congruence-and-clock-rates
  - pthm-gr-schwarzschild-stationary-redshift
  - def-derivative
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-ftc-first-part
  - thm-monotonicity-of-the-integral
  - def-integral-logarithm
physical_scope: "Conditional model prediction for ideal static clocks, observer energy/frequency ratios in geometric optics, and the proper acceleration required to remain static in the Schwarzschild exterior. The weak-field statement is a uniform mathematical remainder bound. No clock, spectral, acceleration, or gravitational-field measurement is asserted."
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  pthm-gr-schwarzschild-stationary-redshift: physical-result
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-integral-logarithm: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 180–181"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification: {}
---

## Statement

Let $s=2G_Nm_*/c^2>0$, $f(r)=1-s/r$, and let $r_E,r_R>s$ be the emitter and receiver radii of static observers in the adopted Schwarzschild exterior model. With $n=f^{-1/2}\partial_0$ the unit static congruence and $U=cn$ the corresponding four-velocity, the ideal-clock and geometric-optics predictions are

$$\frac{\Delta\tau_R}{\Delta\tau_E}=\frac{\omega_E}{\omega_R}=\sqrt{\frac{f(r_R)}{f(r_E)}},\qquad \frac{\omega_R}{\omega_E}=\sqrt{\frac{f(r_E)}{f(r_R)}}.$$

The proper four-acceleration magnitude required to remain static at radius $r>s$ is

$$a(r)=\sqrt{g(\nabla_UU,\nabla_UU)}=\frac{c^2s}{2r^2\sqrt{f(r)}}=\frac{G_Nm_*}{r^2\sqrt{1-s/r}}.$$

For any $0\le\rho<1$ and radii satisfying $0<s/r_E,s/r_R\le\rho$, define $x_i=s/r_i$ and write $\log:=L$ for the natural integral logarithm of [[def-integral-logarithm]]. The exact logarithmic ratio has the uniform expansion

$$\log\frac{\omega_R}{\omega_E}=\frac{s}{2}\left(\frac1{r_R}-\frac1{r_E}\right)+R,\qquad |R|\le\frac{x_E^2+x_R^2}{4(1-\rho)}.$$

These are conditional deductions of the idealized model; no measured redshift or acceleration is asserted.

## Facts & Assumptions

**Given:** The Schwarzschild vacuum exterior model with $s>0$, static observers at $r_E,r_R>s$, an ideal-clock reading of proper time, and the geometric-optics interpretation of the observer-energy ratio.

[A1] Ideal massive test bodies follow the adopted free-fall rule and ideal clocks record proper time; treating the observer-energy ratio as a frequency ratio is the geometric-optics convention ([[pthm-gr-schwarzschild-vacuum-model]], [[post-gr-ideal-clocks-and-free-fall]]).

[F1] The static congruence is $n=f^{-1/2}\partial_0$, with $g(n,n)=-1$, $\Delta\tau=\sqrt{f(r)}\Delta t$, and $\nabla_n n=(s/(2r^2))\partial_r$ ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clauses (a), (c), (e)).

[F2] For a specified future null geodesic between static observers, $\omega_R/\omega_E=\sqrt{f(r_E)/f(r_R)}$ under the geometric-optics interpretation ([[pthm-gr-schwarzschild-stationary-redshift]] clauses (b), (d)).

[F3] In the Schwarzschild exterior $g_{rr}=f^{-1}$, $f=1-s/r$, and $s=2G_Nm_*/c^2$ ([[def-gr-schwarzschild-exterior-model]]).

[F4] The natural logarithm is the integral logarithm $L(y)=\int_1^y dt/t$ for $y>0$, and a continuous integrand has its integral function as a primitive ([[def-integral-logarithm]], [[thm-ftc-first-part]]).

[F5] If two continuous real functions satisfy $g\le h$ on an interval, their integrals preserve that order ([[thm-monotonicity-of-the-integral]]).

## Proof

**Proof technique:** combine the exact static observer identities and redshift ratio, scale the acceleration from unit observer to four-velocity, and bound the logarithmic remainder by an integral inequality.


1.1 By [F1], $U=cn$ is the static observer four-velocity because $g(U,U)=-c^2$. Since $c$ is constant, $\nabla_UU=c^2\nabla_nn=c^2s\partial_r/(2r^2)$. With $g(\partial_r,\partial_r)=f^{-1}$ from [F3], its squared norm is $c^4s^2/(4r^4f)$, so its positive magnitude is $c^2s/(2r^2\sqrt f)$. Substituting $s=2G_Nm_*/c^2$ gives the displayed Newton-constant form. [F1, F3, algebra]

1.2 Over the same coordinate-time interval, [F1] gives $\Delta\tau_R/\Delta\tau_E=\sqrt{f(r_R)/f(r_E)}$. [F2] gives the inverse ratio for received to emitted ideal-ray frequency, so the two displayed exact ratios follow. Each ratio is a conditional model result for the specified static observers and ideal ray. [A1, F1, F2, algebra]

1.3 For $0<x\le\rho<1$, the chain rule and [F4] show that $d\log(1-x)/dx=-1/(1-x)=-1-x/(1-x)$. Integrating from $0$ to $x$, using $\log(1)=0$, gives $\log(1-x)=-x-\int_0^x\frac{t}{1-t}\,dt,\qquad 0\le\int_0^x\frac{t}{1-t}\,dt\le\frac{1}{1-\rho}\int_0^x t\,dt=\frac{x^2}{2(1-\rho)}.$ For $t\in[0, x]$, $0\le t/(1-t)\le t/(1-\rho)$. Thus [F5] and $\int_0^x t\,dt=x^2/2$ give the displayed bound. By [F2], $\log(\omega_R/\omega_E)=\frac12[\log(1-x_E)-\log(1-x_R)]$. Inserting the integral identity separates the linear term $(x_R-x_E)/2=s(1/r_R-1/r_E)/2$. The remaining terms have absolute value at most half the sum of their nonnegative integral bounds, namely $(x_E^2+x_R^2)/(4(1-\rho))$. [F2, F4, F5, given, algebra, algebra]

2.1 The exact ratios, acceleration magnitude and uniform remainder bound are all consequences of the stated model identities; no empirical input is used. [step 1.1, step 1.2, step 1.3, A1] ∎
## Remarks

- The static congruence is accelerated. The divergence of its required proper acceleration as $r\downarrow s$ is not a divergence of the Schwarzschild curvature invariant and does not make the exterior-coordinate boundary a curvature singularity.
- The frequency ratio assumes an ideal geometric-optics ray. Propagation through matter, finite wavelength, moving endpoints and measurement apparatus require additional models.
