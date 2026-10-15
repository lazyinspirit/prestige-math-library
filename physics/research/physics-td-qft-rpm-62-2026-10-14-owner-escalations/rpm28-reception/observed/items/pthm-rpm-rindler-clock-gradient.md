---
id: pthm-rpm-rindler-clock-gradient
kind: physics-theorem
title: "Right-wedge Rindler clocks, radial rays and frequency ratio"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact coordinate and proper-time calculations in the right wedge of flat Minkowski spacetime for the stated uniformly accelerated congruence and idealized radial null rays. The clock ratio is conditional on the adopted ideal-clock postulate. The frequency contraction ratio is a mathematical observer-frequency functional; interpreting it as reception by accelerated observers requires the additional hypothesis [A2], which the current plane-wave postulate explicitly excludes. No measurement, material clock model, global accelerated frame, or claim about real clocks or light is asserted."
empirical_premises: []
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-sr-si-units-and-coordinate-conventions
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-proper-acceleration
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-logarithm-derivative-and-integral
  - post-sr-ideal-clocks-and-light
  - def-sr-null-wave-covector-and-observer-frequency
  - post-sr-ideal-plane-wave-model
  - pthm-sr-rindler-horizons-and-radar
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-proper-acceleration: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: physical-assumption
  pthm-sr-rindler-horizons-and-radar: mathematical-premise
sources:
  references:
    - title: "Eric Gourgoulhon, Special relativity from an accelerated observer perspective, full author-hosted talk slides, slides 26–30"
      url: "https://people-lux.obspm.fr/gourgoulhon/fr/present_rec/imcce_syrte10.pdf"
      locator: "Slides 26–30: hyperbolic worldline, right-wedge Rindler map and metric, proper-time rate, radial null trajectories, horizon and redshift; complete 41-slide presentation inspected."
    - title: "Scott Hughes, MIT 8.033 Introduction to Relativity and Spacetime Physics, Fall 2024, complete lecture notes, §14.6"
      url: "https://ocw.mit.edu/courses/8-033-introduction-to-relativity-and-spacetime-physics-fall-2024/mit8_033_f24_lec_full.pdf"
      locator: "§14.6, printed pp. 119–121: construction and domain of Rindler coordinates, metric and proper acceleration; complete course notes inspected."
verification: {}
---

## Statement

Use the flat affine Minkowski model with signature $(-,+,+,+)$ and SI coordinates $(x^0,x^1,y,z)=(ct,x^1,y,z)$. Fix $a>0$ in metres per second squared and define

$$\Phi_a(T,\rho,y,z)=\bigl(\rho\sinh(aT/c),\rho\cosh(aT/c),y,z\bigr),\qquad T\in\mathbb R,\quad \rho>0.$$

Then $\Phi_a$ is a smooth chart of the right wedge $W=\{x^1>|x^0|\}$, with $\rho$ in metres and $T$ in seconds. Its pullback metric, the proper-time rate of a stationary Rindler observer, and that observer's proper-acceleration magnitude are

$$ds^2=-\frac{a^2\rho^2}{c^2}\,dT^2+d\rho^2+dy^2+dz^2,\qquad \frac{d\tau}{dT}=\frac{a\rho}{c^2},\qquad \alpha=\frac{c^2}{\rho}.$$

For ideal radial vacuum rays with $y,z$ fixed, $d\rho/dT=\pm a\rho/c$. A ray joining positive radii $\rho_E,\rho_R$ therefore has one-way Rindler travel time $\Delta T=(c/a)|\log(\rho_R/\rho_E)|$, and stationary ideal clocks at those radii satisfy $\Delta\tau_R/\Delta\tau_E=\rho_R/\rho_E$ over any common nonzero $T$ interval. The clock statement is conditional on the ideal-clock adoption in [[post-sr-ideal-clocks-and-light]].

For a future null plane-wave covector $k$ directed along the same radial ray, define $\omega_n=-k(U_n)$ using [[def-sr-null-wave-covector-and-observer-frequency]]. The contraction functional obeys $\omega_R/\omega_E=\rho_E/\rho_R$. Reading this as an accelerated-observer reception frequency requires the extra hypothesis [A2] below: clause (iv) of [[post-sr-ideal-plane-wave-model]] excludes accelerated-observer reception. The result is conditional and does not silently extend that postulate. The coordinate chart excludes $\rho=0$; no global rigid accelerated frame is asserted.

## Facts & Assumptions

**Given:** The flat affine model, $c>0$, $a>0$, the map $\Phi_a$, stationary observers with fixed $\rho>0,y,z$, ideal vacuum radial rays, and the conditional ideal-clock and wave-covector readings specified below.

[F1] [[def-inertial-frame-and-inertial-chart]]: an inertial frame is an $\eta$-orthonormal basis with matrix $\operatorname{diag}(-1,1,1,1)$, and its chart gives the four inertial coordinates.

[F2] [[def-sr-si-units-and-coordinate-conventions]]: $x^0=ct$, all inertial coordinates carry metres, $c$ has metres per second, and $\eta$ has the stated diagonal matrix in inertial coordinates.

[F3] [[pthm-sr-rindler-horizons-and-radar]]: the right-wedge map has range $x^1>|x^0|$, inverse $\rho=\sqrt{(x^1)^2-(x^0)^2}$, $\theta=\frac12\log((x^1+x^0)/(x^1-x^0))$, pullback metric $-\rho^2d\theta^2+d\rho^2+dy^2+dz^2$, and stationary observer proper acceleration $c^2/\rho$ when $\theta=c\tau/\rho$.

[F4] [[post-sr-ideal-clocks-and-light]]: an adopted ideal clock accumulates Minkowski proper time, and ideal vacuum light rays are future null straight lines with speed $c$ in inertial coordinates.

[F5] [[thm-sr-proper-time-and-observer-decomposition]]: a future timelike inertial-chart worldline has $|v|<c$, $U=\gamma(c,v)$, and four-acceleration given by proper-time differentiation of this four-velocity.

[F6] [[def-sr-proper-acceleration]]: proper acceleration is the nonnegative square root $\sqrt{\eta(A,A)}$ of the four-acceleration norm.

[F7] [[def-sr-null-wave-covector-and-observer-frequency]]: for future null wave covector $k$ and observer four-velocity $U_n$, the angular-frequency functional is $\omega_n=-k(U_n)$.

[F8] [[post-sr-ideal-plane-wave-model]]: the adopted affine plane-wave phase has constant future null covector and clause (iv) excludes accelerated-observer reception.

[F9] [[thm-hyperbolic-identities-and-derivatives]]: $\cosh^2\theta-\sinh^2\theta=1$, $\sinh'=\cosh$, and $\cosh'=\sinh$.

[F10] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with derivative $1/s$.

[F11] [[def-hyperbolic-functions]]: $\sinh\theta=(e^\theta-e^{-\theta})/2$ and $\cosh\theta=(e^\theta+e^{-\theta})/2$.


[A2] Additional physical reception assumption, not supplied by [F8]: the frequency functional $-k(U_n)$ is interpreted as the received frequency for these accelerated Rindler observers. The theorem's contraction identity below is mathematical; this added interpretation remains unresolved.

## Proof

1.1 Put $\theta=aT/c$. The exponential definitions [F11] give $x^1+x^0=\rho e^\theta$ and $x^1-x^0=\rho e^{-\theta}$, both positive, so the image lies in $W$. Conversely, [F3] supplies the unique smooth Rindler inverse $\rho=\sqrt{(x^1)^2-(x^0)^2}$, $\theta=\frac12\log((x^1+x^0)/(x^1-x^0))$; setting $T=c\theta/a$ gives the stated inverse, which is smooth because $a,c>0$. The range agrees with [F3], and units and coordinates are those of [F1, F2]. [given, F1, F2, F3, F11, algebra]

1.2 Differentiating the map with [F9] gives $dx^0=\sinh\theta\,d\rho+(a\rho/c)\cosh\theta\,dT$ and $dx^1=\cosh\theta\,d\rho+(a\rho/c)\sinh\theta\,dT$. Substitution into the inertial metric of [F1, F2], using $\cosh^2\theta-\sinh^2\theta=1$, cancels the mixed terms and yields the displayed pullback metric. For $d\rho=dy=dz=0$, the proper-time line element and adopted clock rule [F4] give $d\tau/dT=a\rho/c^2$. [step 1.1, F1, F2, F4, F9, algebra]

1.3 Along a stationary worldline set $\eta=c\tau/\rho=aT/c$. Its inertial coordinates are $(\rho\sinh\eta,\rho\cosh\eta)$. Differentiating twice with respect to $\tau$ by [F9] gives $U=(c\cosh\eta,c\sinh\eta)$ and $A=(c^2\sinh\eta/\rho,c^2\cosh\eta/\rho)$. Thus $\eta(U,U)=-c^2$ and $\eta(A,A)=c^4/\rho^2$ by [F1]. The definition [F6] makes the proper-acceleration magnitude $c^2/\rho$, consistently with [F3]. [step 1.2, F1, F3, F6, F9, algebra]

2.1 For a radial null curve, set $dy=dz=0$ and $ds^2=0$ in the metric of step 1.2. Since $a,\rho,c$ are positive, this gives $d\rho/dT=\pm a\rho/c$. By [F10], $d(\log\rho)/dT=\pm a/c$; integration between its endpoint radii gives $\Delta T=(c/a)|\log(\rho_R/\rho_E)|$, finite for positive finite radii. [F4] identifies these null curves with the ideal vacuum rays. [step 1.2, F4, F10, algebra]

2.2 Over a common nonzero Rindler-time interval $\Delta T$, step 1.2 gives $\Delta\tau_E=(a\rho_E/c^2)\Delta T$ and $\Delta\tau_R=(a\rho_R/c^2)\Delta T$. Their ratio is $\rho_R/\rho_E$. If the radii coincide the two increments agree; for distinct positive radii the ratio is positive and finite. [step 1.2, F4, algebra]

3.1 For an outward radial wave take phase $\vartheta=\kappa(x^1-x^0)=\kappa\rho e^{-aT/c}$, $\kappa>0$; for an inward wave take $\vartheta=-\kappa(x^1+x^0)=-\kappa\rho e^{aT/c}$, using [F11]. Each is an inertial affine phase with future null covector as in [F8], and its $T$ derivative is constant along its corresponding null ray because $\rho e^{\mp aT/c}$ is constant there by step 2.1. A stationary observer has $U_n=(c/(a\rho))\partial_T$ by step 1.2, so [F7] yields $\omega_n=-k(U_n)=-(c/(a\rho))\partial_T\vartheta$, proportional to $1/\rho$ with the same positive proportionality constant at the two events. Hence $\omega_R/\omega_E=\rho_E/\rho_R$ as a contraction identity. Calling this a received frequency additionally invokes [A2], which is not included in [F8]. [step 1.2, step 2.1, F7, F8, F11, A2, algebra] ∎
