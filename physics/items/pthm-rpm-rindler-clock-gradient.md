---
id: pthm-rpm-rindler-clock-gradient
kind: physics-theorem
title: "Right-wedge Rindler clocks, radial rays and frequency ratio"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact coordinate and proper-time calculations in the right wedge of flat Minkowski spacetime for the stated uniformly accelerated congruence and idealized radial null rays. The clock ratio is conditional on the adopted ideal-clock postulate. The instantaneous received-frequency ratio is conditional on the additional ideal local phase-reception postulate; its finite-apparatus use carries the short-observation and local ray-regime limits, without a numerical accuracy claim. No measurement, material clock model, global accelerated frame, or claim about real clocks or light is asserted."
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
  - post-rpm-ideal-rindler-phase-reception
  - pthm-sr-rindler-horizons-and-radar
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-proper-acceleration: formulation-prerequisite
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: formulation-prerequisite
  post-rpm-ideal-rindler-phase-reception: physical-assumption
  pthm-sr-rindler-horizons-and-radar: physical-result
sources:
  references:
    - title: "Eric Gourgoulhon, Special relativity from an accelerated observer perspective, full author-hosted talk slides, slides 26–30"
      url: "https://people-lux.obspm.fr/gourgoulhon/fr/present_rec/imcce_syrte10.pdf"
      locator: "Slides 26–30 of the 55-page PDF: hyperbolic worldline, right-wedge Rindler map and metric, proper-time rate, radial null trajectories, horizon and redshift; the full relevant section inspected."
    - title: "Tevian Dray, Geometry of General Relativity, Chapter 4: Rindler Geometry, online textbook sections §1 The Rindler Metric and §2 Rindler Geometry"
      url: "https://sites.science.oregonstate.edu/physics/coursewikis/GGR/book/ggr/rindprop.html"
      locator: "Chapter 4 §2 Rindler Geometry: stationary constant-rho proper-time relation, four-velocity and proper-acceleration magnitude; complete section inspected. Source coordinates use c=1 and were restored to SI in this proof."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Use the flat affine Minkowski model with signature $(-,+,+,+)$ and SI coordinates $(x^0,x^1,y,z)=(ct,x^1,y,z)$. Fix $a>0$ in metres per second squared and define

$$\Phi_a(T,\rho,y,z)=\bigl(\rho\sinh(aT/c),\rho\cosh(aT/c),y,z\bigr),\qquad T\in\mathbb R,\quad \rho>0.$$

Then $\Phi_a$ is a smooth chart of the right wedge $W=\{x^1>|x^0|\}$, with $\rho$ in metres and $T$ in seconds. Its pullback metric, the proper-time rate of a stationary Rindler observer, and that observer's proper-acceleration magnitude are

$$ds^2=-\frac{a^2\rho^2}{c^2}\,dT^2+d\rho^2+dy^2+dz^2,\qquad \frac{d\tau}{dT}=\frac{a\rho}{c^2},\qquad \alpha=\frac{c^2}{\rho}.$$

For ideal radial vacuum rays with $y,z$ fixed, $d\rho/dT=\pm a\rho/c$. A ray joining positive radii $\rho_E,\rho_R$ therefore has one-way Rindler travel time $\Delta T=(c/a)|\log(\rho_R/\rho_E)|$, and stationary ideal clocks at those radii satisfy $\Delta\tau_R/\Delta\tau_E=\rho_R/\rho_E$ over any common nonzero $T$ interval. The clock statement is conditional on the ideal-clock adoption in [[post-sr-ideal-clocks-and-light]].

For a future null plane-wave covector $k$ directed along the same radial ray, define $\omega_n=-k(U_n)$ using [[def-sr-null-wave-covector-and-observer-frequency]]. Under the additional adopted local reception rule [[post-rpm-ideal-rindler-phase-reception]], the instantaneous received angular frequencies at the two events obey $\omega_R/\omega_E=\rho_E/\rho_R$. The ratio is exact within that ideal model and inherits its local ray-regime and finite-apparatus qualifications, with no numerical error bound or empirical validation. Clause (iv) of [[post-sr-ideal-plane-wave-model]] retains its accelerated-reception exclusion; this theorem uses the separately adopted rule. The coordinate chart excludes $\rho=0$; no global rigid accelerated frame is asserted.

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


[A2] [[post-rpm-ideal-rindler-phase-reception]]: an ideal comoving point receiver on the stationary Rindler congruence assigns the instantaneous angular frequency $-k(U_n)$ at reception. This is an additional adopted local phase-reading model; finite-apparatus use is limited to its local ray regime and short observation intervals, with no claimed numerical accuracy or empirical validation.

## Proof

1.1 Put $\theta=aT/c$. The exponential definitions [F11] give $x^1+x^0=\rho e^\theta$ and $x^1-x^0=\rho e^{-\theta}$, both positive, so the image lies in $W$. Conversely, [F3] supplies the unique smooth Rindler inverse $\rho=\sqrt{(x^1)^2-(x^0)^2}$, $\theta=\frac12\log((x^1+x^0)/(x^1-x^0))$; setting $T=c\theta/a$ gives the stated inverse, which is smooth because $a,c>0$. The range agrees with [F3], and units and coordinates are those of [F1, F2]. [given, F1, F2, F3, F11, algebra]

2.1 Differentiating the map with [F9] gives $dx^0=\sinh\theta\,d\rho+(a\rho/c)\cosh\theta\,dT$ and $dx^1=\cosh\theta\,d\rho+(a\rho/c)\sinh\theta\,dT$. Substitution into the inertial metric of [F1, F2], using $\cosh^2\theta-\sinh^2\theta=1$, cancels the mixed terms and yields the displayed pullback metric. For $d\rho=dy=dz=0$, the proper-time line element and adopted clock rule [F4] give $d\tau/dT=a\rho/c^2$. [step 1.1, F1, F2, F4, F9, algebra]

3.1 Along a stationary worldline set $\chi:=c\tau/\rho=aT/c$. Its inertial coordinates are $(\rho\sinh\chi,\rho\cosh\chi)$. Differentiating twice with respect to $\tau$ by [F9] gives $U=(c\cosh\chi,c\sinh\chi)$ and $A=(c^2\sinh\chi/\rho,c^2\cosh\chi/\rho)$. Thus $\eta(U,U)=-c^2$ and $\eta(A,A)=c^4/\rho^2$ by [F1]; $U$ is future timelike and has the proper-time normalization of [F5]. The definition [F6] makes the proper-acceleration magnitude $c^2/\rho$, consistently with [F3]. [step 2.1, F1, F3, F5, F6, F9, algebra]

3.2 For a radial null curve, set $dy=dz=0$ and $ds^2=0$ in the metric of step 2.1. Since $a,\rho,c$ are positive, this gives $d\rho/dT=\pm a\rho/c$. By [F10], $d(\log\rho)/dT=\pm a/c$; integration between its endpoint radii gives $\Delta T=(c/a)|\log(\rho_R/\rho_E)|$, finite for positive finite radii. [F4] identifies these null curves with the ideal vacuum rays. [step 2.1, F4, F10, algebra]

3.3 Over a common nonzero Rindler-time interval $\Delta T$, step 2.1 gives $\Delta\tau_E=(a\rho_E/c^2)\Delta T$ and $\Delta\tau_R=(a\rho_R/c^2)\Delta T$. Their ratio is $\rho_R/\rho_E$. If the radii coincide the two increments agree; for distinct positive radii the ratio is positive and finite. [step 2.1, F4, algebra]

4.1 For an outward radial wave take dimensionless phase $\vartheta=\kappa(x^1-x^0)=\kappa\rho e^{-aT/c}$ with $\kappa>0$ in inverse metres; for an inward wave take $\vartheta=-\kappa(x^1+x^0)=-\kappa\rho e^{aT/c}$, using [F11]. Each is an inertial affine phase with future null covector as in [F8], and its $T$ derivative is constant along its corresponding null ray because $\rho e^{\mp aT/c}$ is constant there by step 3.2. A stationary observer has $U_n=(c^2/(a\rho))\partial_T$ by step 2.1, so [F7] yields $\omega_n=-k(U_n)=-(c^2/(a\rho))\partial_T\vartheta$, proportional to $1/\rho$ with the same positive proportionality constant at the two events. Hence $\omega_R/\omega_E=\rho_E/\rho_R$ as a contraction identity. Under [A2] these contractions are the instantaneous received angular frequencies; their finite-apparatus interpretation retains the local ray-regime and short-observation qualifications of that postulate. This is separate from [F8] and does not extend its scope. [step 2.1, step 3.2, F7, F8, F11, A2, algebra] ∎
