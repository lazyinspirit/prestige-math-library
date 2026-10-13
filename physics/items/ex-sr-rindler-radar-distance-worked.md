---
id: ex-sr-rindler-radar-distance-worked
kind: example
title: "Rindler radar distances worked: reflectors at twice and at half the observer's radius"
status: published
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [pthm-sr-rindler-horizons-and-radar, def-sr-operational-radar-protocol, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-natural-logarithm, thm-natural-logarithm-laws, cor-two-less-than-e-less-than-three, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, def-sr-simultaneity-slice-and-rest-distance]
dependency_roles:
  pthm-sr-rindler-horizons-and-radar: physical-result
  def-sr-operational-radar-protocol: operational-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
proof_strategy: direct
physical_scope: "Worked numerical instance of the conditional Rindler radar protocol for two coaxial uniformly accelerated ideal observers with ideal clocks, ideal light rays and ideal reflectors in flat classical spacetime. No apparatus, measurement, statistical or empirical claim is made, and all idealizations of pthm-sr-rindler-horizons-and-radar are retained."
sources:
  references:
    - title: "Wikipedia, 'Rindler coordinates': section 'Notions of distance' (the null geodesic equation t - t_0 = log(x/x_0) and the radar distance x_0 log(1 + h/x_0) between Rindler observers at x_0 and x_0 + h, with the rider that radar distance need not be symmetric)"
      url: "https://en.wikipedia.org/wiki/Rindler_coordinates"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.5.2 and Section 7.1 pp. 61-62 and 147-148 (hyperbolic motion, accelerated coordinates and their horizons, in the convention x^0 = c t); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Example

Worked computation in the Rindler chart of [[pthm-sr-rindler-horizons-and-radar]]. Let $c > 0$, fix $\rho_0 > 0$ and take $y_0 = z_0 = 0$; let $O$ be the congruence worldline $\rho = \rho_0$ with Rindler time $\theta = c \tau/\rho_0$, and take the emission event $e_-$ at $\theta_e = 0$, so that $e_- = x^{-1}(0, \rho_0, 0, 0)$ in the inertial chart $x$.

(a) **Reflector at $\rho_m = 2\rho_0$.** The future null line from $e_-$ of constant $V$ has $V = -\rho_0$, and it meets $\rho = 2\rho_0$ at the Rindler time $\theta_m = \log 2$; using $\sinh(\log 2) = 3/4$ and $\cosh(\log 2) = 5/4$ ([[thm-hyperbolic-identities-and-derivatives]], [[thm-natural-logarithm-laws]]) the reflection event is $q_m = x^{-1}(3\rho_0/2, 5\rho_0/2, 0, 0)$, and the return event is $e_+ = x^{-1}(\rho_0 \sinh(2\log 2), \rho_0 \cosh(2\log 2), 0, 0) = x^{-1}(15\rho_0/8, 17\rho_0/8, 0, 0)$ at Rindler time $\theta(e_+) = 2 \log 2$. Thus $(\theta_e + \theta(e_+))/2 = \log 2 = \theta_m$, the radar time assigned to $q_m$ is $(\rho_0/c) \log 2$ plus the base constant of $O$'s proper time, and the radar distance is $\rho_0 \log 2$. The two worldlines $\rho = \rho_0$ and $\rho = 2\rho_0$ are at rest distance $\rho_0$ in the slice $\theta = \log 2$; since $e > 2$ gives $\log 2 < 1$ ([[cor-two-less-than-e-less-than-three]], [[thm-natural-logarithm-laws]]), the radar distance is strictly smaller than the rest distance.

(b) **Reflector at $\rho_m = \rho_0/2$.** The future null line from $e_-$ of constant $U$ has $U = \rho_0$, and it meets $\rho = \rho_0/2$ at the Rindler time $\theta_m = \log 2$; using $\sinh(\log 2) = 3/4$ and $\cosh(\log 2) = 5/4$ the reflection event is $q'_m = x^{-1}(3\rho_0/8, 5\rho_0/8, 0, 0)$ and the return event is again $e_+ = x^{-1}(15\rho_0/8, 17\rho_0/8, 0, 0)$ at Rindler time $2 \log 2$. The radar time is again $(\rho_0/c) \log 2$ plus the base constant and the radar distance is again $\rho_0 \log 2$, while the rest distance in the slice $\theta = \log 2$ is now $\rho_0/2$; since $e < 3 < 4$ gives $\log 2 > 1/2$ ([[cor-two-less-than-e-less-than-three]], [[thm-natural-logarithm-laws]]), the radar distance is now strictly larger than the rest distance.

(c) The two cases (a)-(b) give the same radar distance $\rho_0\log2$ at distinct rest distances $\rho_0$ and $\rho_0/2$; this demonstrates noninjectivity of the assignment as the reflector radius varies. To prove that radar distance is not determined by the rest distance alone, also take $\rho_m=3\rho_0/2$. With the same emission at $\theta_e=0$, the reflection occurs at $\theta_m=\log(3/2)$, at $q''_m=x^{-1}(5\rho_0/8,13\rho_0/8,0,0)$, and the return occurs at $2\log(3/2)$, at $e''_+=x^{-1}(65\rho_0/72,97\rho_0/72,0,0)$. This reflector has rest distance $\rho_0/2$, equal to case (b), but radar distance $\rho_0\log(3/2)<\rho_0\log2$, because $3/2<2$ and $\log$ is strictly increasing. These equal inputs and unequal outputs prove the stated failure of dependence on rest distance alone. The original two cases both satisfy $\theta_m=(\theta_e+\theta(e_+))/2$ and have round-trip proper time $2\rho_0\log2/c$; the third case satisfies the same midpoint identity and has round-trip proper time $2\rho_0\log(3/2)/c$.

(d) **Scope.** Conditional model computation with ideal clocks, ideal light rays and ideal reflectors in the flat classical model; no measurement, apparatus, source or statistical claim, and no empirical inference, is made, and the idealizations of [[pthm-sr-rindler-horizons-and-radar]] (v) are retained.

## Facts & Assumptions

**Given:** $c>0$, $\rho_0>0$, $y_0=z_0=0$, the inertial chart $x$ with $x^0=ct$, the congruence worldlines $\rho=\rho_0$ (observer $O$) and $\rho=\rho_m$ (reflector) with Rindler time $\theta=c\tau/\rho_0$ on $O$, and the emission event $e_-=x^{-1}(0,\rho_0,0,0)$ at $\theta_e=0$; the radar protocol of [[def-sr-operational-radar-protocol]] is applied with $O$ as observer.

[L1] Rindler chart and congruence: $U=\rho e^{\theta}$ and $V=-\rho e^{-\theta}$; the future null lines in the plane of the two worldlines are the constant-$U$ lines and the constant-$V$ lines; the congruence worldlines have Rindler time $\theta=c\tau/\rho$ up to an additive constant ([[pthm-sr-rindler-horizons-and-radar]] (i),(ii); [[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L2] Coaxial radar geometry: for a reflector at $\rho_m\neq\rho_0$, the reflection occurs at $\theta_m=\theta_e+|\log(\rho_m/\rho_0)|$, the return at $\theta(e_+)=\theta_e+2|\log(\rho_m/\rho_0)|$ with midpoint $\theta_m$, the radar distance is $\rho_0|\log(\rho_m/\rho_0)|$, and the radar time is $(\rho_0/c)\theta_m$ plus a constant ([[pthm-sr-rindler-horizons-and-radar]] (iii), [[def-sr-operational-radar-protocol]]).

[L3] Rest distance in a slice: two congruence worldlines $\rho=\rho'$ and $\rho=\rho''$ at the same Rindler time $\theta$ are at rest distance $|\rho'-\rho''|$ ([[pthm-sr-rindler-horizons-and-radar]] (iii), [[def-sr-simultaneity-slice-and-rest-distance]]).

[L4] Hyperbolic and logarithmic values: $\sinh u=(e^u-e^{-u})/2$, $\cosh u=(e^u+e^{-u})/2$, $\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y$, $\cosh(x+y)=\cosh x\cosh y+\sinh x\sinh y$ and $\cosh u+\sinh u=e^u$; $2<e<3<4$, so $\log2<\log e=1<\log4=2\log2$ and therefore $1/2<\log2<1$, and $\log$ is strictly increasing with $\log(3/2)<\log2$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]], [[cor-two-less-than-e-less-than-three]], [[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).



**Proof technique:** direct.

## Verification

1.1 (Clause (a): the outer reflector.) With $\rho_m=2\rho_0$ and $\theta_e=0$, [L2] gives $\theta_m=\log2$, so the reflection event is $q_m=(2\rho_0\sinh\log2,2\rho_0\cosh\log2,0,0)=(3\rho_0/2,5\rho_0/2,0,0)$ by the values $\sinh\log2=3/4$, $\cosh\log2=5/4$ of [L4], and the return occurs at $\theta(e_+)=2\log2$ at $e_+=(\rho_0\sinh(2\log2),\rho_0\cosh(2\log2),0,0)=(15\rho_0/8,17\rho_0/8,0,0)$ using $\sinh(2\log2)=2\cdot(3/4)(5/4)=15/8$ and $\cosh(2\log2)=(25+9)/16=17/8$ of [L4]; the midpoint identity and the radar distance $\rho_0\log2$ follow from [L2]. The rest distance in the slice $\theta=\log2$ is $|2\rho_0-\rho_0|=\rho_0$ by [L3], and $\rho_0\log2<\rho_0$ because $\log2<1$ by [L4]. [L1, L2, L3, L4, algebra]

2.1 (Clause (b): the inner reflector.) With $\rho_m=\rho_0/2$ and $\theta_e=0$, [L2] gives $\theta_m=\log(\rho_0/\rho_m)=\log2$, so the reflection event is $q'_m=(\rho_0/2)(3/4,5/4,0,0)=(3\rho_0/8,5\rho_0/8,0,0)$ by [L4], and the return at $\theta(e_+)=2\log2$ is the same event $e_+=(15\rho_0/8,17\rho_0/8,0,0)$ as in step 1.1; the radar distance is again $\rho_0\log2$ by [L2], while the rest distance in the slice $\theta=\log2$ is $|\rho_0-\rho_0/2|=\rho_0/2$ by [L3]. Since $2<e<3<4$ implies $\log2>1/2$ by [L4], the radar distance exceeds the rest distance in this case. [L2, L3, L4, step 1.1, algebra]

3.1 (Clause (c): the third reflector and noninjectivity.) With $\rho_m=3\rho_0/2$ and $\theta_e=0$, [L2] gives $\theta_m=\log(3/2)$; the hyperbolic values $\sinh\log(3/2)=5/12$ and $\cosh\log(3/2)=13/12$ give the reflection event $q''_m=(3\rho_0/2)(5/12,13/12,0,0)=(5\rho_0/8,13\rho_0/8,0,0)$, and the return at $2\log(3/2)$ is $e''_+=(\rho_0\sinh(2\log(3/2)),\rho_0\cosh(2\log(3/2)),0,0)=(65\rho_0/72,97\rho_0/72,0,0)$, using $\sinh(2u)=2\sinh u\cosh u=65/72$ and $\cosh(2u)=\cosh^2u+\sinh^2u=97/72$ at $u=\log(3/2)$ by [L4]; the radar distance is $\rho_0\log(3/2)$, the rest distance in the slice is $\rho_0/2$ by [L3] (the same as in step 2.1), and $\rho_0\log(3/2)<\rho_0\log2$ because $3/2<2$ and $\log$ is strictly increasing by [L4]. Thus two distinct reflector radii ($\rho_0/2$ and $3\rho_0/2$) share the rest distance $\rho_0/2$ but have different radar distances, and the two cases of steps 1.1 and 2.1 share the radar distance $\rho_0\log2$ at rest distances $\rho_0$ and $\rho_0/2$. [L1, L2, L3, L4, step 1.1, step 2.1, algebra]

4.1 (Midpoint identities, round-trip times and scope.) In each of the three cases the reported $\theta_m$ is the midpoint $(\theta_e+\theta(e_+))/2$ by [L2], and the round-trip proper time of $O$ is $\rho_0(\theta(e_+)-\theta_e)/c$, equal to $2\rho_0\log2/c$ in cases (a) and (b) and to $2\rho_0\log(3/2)/c$ in case (c). All quantities are conditional model computations with ideal clocks, light rays and reflectors; no apparatus, measurement or empirical claim is made, and no choice principle was used. [L1, L2, step 1.1, step 2.1, step 3.1] ∎
