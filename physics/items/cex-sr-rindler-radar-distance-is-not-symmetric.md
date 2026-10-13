---
id: cex-sr-rindler-radar-distance-is-not-symmetric
kind: counterexample
title: "Rindler radar distance between two coaxial observers is not symmetric under interchange"
status: published
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [pthm-sr-rindler-horizons-and-radar, def-sr-operational-radar-protocol, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-natural-logarithm, thm-natural-logarithm-laws, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, def-sr-proper-time]
dependency_roles:
  pthm-sr-rindler-horizons-and-radar: physical-result
  def-sr-operational-radar-protocol: operational-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  def-sr-proper-time: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional model computation of the radar protocol for two coaxial uniformly accelerated ideal observers in flat classical spacetime with ideal clocks, ideal light rays and ideal reflectors. The asymmetry exhibited is a property of the two observers' radar assignments; no physical anisotropy, apparatus, measurement, statistical or empirical claim is made."
sources:
  references:
    - title: "Wikipedia, 'Rindler coordinates': section 'Notions of distance' (the radar distance between Rindler observers at x_0 and x_0 + h and the explicit caution against assuming that radar distance is symmetric under interchange of the observers)"
      url: "https://en.wikipedia.org/wiki/Rindler_coordinates"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.5.2 and Section 7.1 pp. 61-62 and 147-148 (hyperbolic motion and accelerated coordinates in the convention x^0 = c t); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Statement refuted

For every pair of future timelike worldlines $y$ and $y'$ of the model for which the radar protocol of [[def-sr-operational-radar-protocol]] applies with $y$ as observer and $y'$ as reflector, the radar distance assigned by $y$ to the reflection event on $y'$ equals the radar distance assigned by $y'$ to the reflection event on $y$; that is, the radar distance between two observers is symmetric under interchange of observer and reflector.

## Facts & Assumptions

**Given:** The inertial chart $x$ with $x^0=ct$ of the flat model; the Rindler congruence data of [[pthm-sr-rindler-horizons-and-radar]]; the coaxial worldlines $O$ ($\rho=\rho_0$) and $R$ ($\rho=2\rho_0$) with the same $y=z=0$ coordinates, $\rho_0>0$, $c>0$; and the radar protocol of [[def-sr-operational-radar-protocol]] applied with each worldline in turn as the observer.

[L1] Rindler chart and congruence: $U=\rho e^{\theta}$, $V=-\rho e^{-\theta}$; the future null lines in the plane of the two worldlines are the constant-$U$ and constant-$V$ lines; the congruence worldlines have proper acceleration $c^2/\rho$ and Rindler time $\theta=c\tau/\rho$ up to an additive constant ([[pthm-sr-rindler-horizons-and-radar]] (i),(ii); [[def-sr-proper-time]]).

[L2] Radar protocol: the radar distance assigned by the observer is $c(\tau(s_+)- \tau(s_-))/2$, half the round-trip proper time of the observer multiplied by $c$, given emission event $e_-$, reflection event $q$, and reception event $e_+$ with $q-e_-$ and $e_+-q$ future null ([[def-sr-operational-radar-protocol]]).

[L3] The radar round trip of the coaxial Rindler family: from $O$ at Rindler time $\theta_e$ to the reflector at $\rho_m$, the reflection occurs at $\theta_m=\theta_e+|\log(\rho_m/\rho_0)|$ and the return at $\theta_e+2|\log(\rho_m/\rho_0)|$, giving radar distance $\rho_0|\log(\rho_m/\rho_0)|$ for the observer at $\rho_0$ ([[pthm-sr-rindler-horizons-and-radar]] (iii)).

[L4] Hyperbolic values: $\sinh u=(e^u-e^{-u})/2$, $\cosh u=(e^u+e^{-u})/2$, $\cosh^2u-\sinh^2u=1$ and $\cosh u+\sinh u=e^{u}$, so at $u=\log 2$ one has $\sinh\log2=3/4$, $\cosh\log2=5/4$, $\sinh(2\log2)=15/8$ and $\cosh(2\log2)=17/8$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[L5] Coordinates and chart: points are determined by their inertial coordinates and $x^0=ct$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

## Counterexample

1.1 (Radar distance from $O$ to $R$.) By [L3] applied with observer radius $\rho_0$ and reflector radius $\rho_m=2\rho_0$, emitted from $O$ at $\theta_e=0$, the reflection event on $R$ is at Rindler time $\log2$ and the return event on $O$ at Rindler time $2\log2$, so the round trip takes $2\rho_0\log2/c$ of $O$'s proper time and the radar distance assigned by $O$ is $D_1=\rho_0\log2$; by [L1] and [L4] the reflection event is $x^{-1}(\rho_0\cdot2\cdot(3/4),\rho_0\cdot2\cdot(5/4),0,0)=x^{-1}(3\rho_0/2,5\rho_0/2,0,0)$ and the reception event is $x^{-1}(\rho_0\sinh(2\log2),\rho_0\cosh(2\log2),0,0)=x^{-1}(15\rho_0/8,17\rho_0/8,0,0)$. [L1, L3, L4, algebra]

1.2 (Radar distance from $R$ to $O$.) Now take $R$ as observer, emitting at its Rindler time zero from $r_-=x^{-1}(0,2\rho_0,0,0)$. The future null line from $r_-$ toward $O$ is the constant-$U$ line with $U=2\rho_0$ (the constant-$V$ line leaves the radius increasing), and it meets $\rho=\rho_0$ at the unique Rindler time $\theta$ with $\rho_0e^{\theta}=2\rho_0$, i.e. $\theta=\log2$, at the reflection event $q'_m=x^{-1}(\rho_0\sinh\log2,\rho_0\cosh\log2,0,0)=x^{-1}(3\rho_0/4,5\rho_0/4,0,0)$ by [L4]. The return leg is the constant-$V$ line through $q'_m$, with $V=-\rho_0e^{-\log2}=-\rho_0/2$, and it reaches $R$ at the unique Rindler time $\theta$ with $-(2\rho_0)e^{-\theta}=-\rho_0/2$, i.e. $e^{-\theta}=1/4$ and $\theta=2\log2$, at the event $x^{-1}(2\rho_0\sinh(2\log2),2\rho_0\cosh(2\log2),0,0)=x^{-1}(15\rho_0/4,17\rho_0/4,0,0)$ by [L4]. [L1, L4, L5, algebra]

2.1 (The two assignments.) By [L2] and [L1], the round trip of step 1.2 lasts $(2\log2)$ in Rindler time of $R$, whose proper time satisfies $d\tau=\rho_m\,d\theta/c=(2\rho_0/c)\,d\theta$, so the elapsed proper time of $R$ is $4\rho_0\log2/c$ and the radar distance assigned by $R$ is $D_2=c\cdot(1/2)\cdot4\rho_0\log2/c=2\rho_0\log2$. [L1, L2, step 1.2, algebra]

3.1 (Asymmetry and scope.) Steps 1.1 and 2.1 give $D_1=\rho_0\log2$ and $D_2=2\rho_0\log2$, and $\log2>\log1=0$ with $\rho_0>0$ makes $D_1>0$, so $D_2=2D_1\ne D_1$ and the radar distance between the two worldlines depends on which worldline is the observer; both reflection events lie in the causal future of their emission events by step 1.2 and [L1], and the protocol's symmetric half-split convention of [L2] was retained. This is a property of the two radar assignments, not a physical anisotropy; no measurement, statistical or empirical claim is made, and no choice principle was used. [L1, L2, L4, step 1.1, step 2.1] ∎
