---
id: pthm-sr-same-endpoint-clock-comparison
kind: physics-theorem
title: "Same-endpoint clock comparison: the inertial clock ages most"
status: published
origin: pipeline
domain: physics
physical_scope: "Ideal clocks and prescribed histories in the flat classical special-relativity model: the reading of an ideal clock between two fixed endpoint events along a piecewise C^1 future timelike worldline, compared with the reading along the straight inertial worldline between the same events. Conditional on the named postulates (ideal clocks with no acceleration-dependent term, prescribed histories, flat spacetime, fixed c). Excludes real clocks and apparatus, calibration and resolution effects, gravity, quantum phenomena, and any empirical or statistical claim."
proof_strategy: direct
deps: [thm-sr-endpoint-proper-time-bound-and-flat-maximum, def-sr-piecewise-proper-time, def-sr-inertial-and-piecewise-inertial-worldline, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, post-sr-ideal-clocks-and-light, post-sr-free-trajectories-and-clock-hypothesis, post-sr-inertial-covariance, def-sr-si-units-and-coordinate-conventions, def-lorentz-form-and-inertia, thm-of-square-roots]
dependency_roles:
  thm-sr-endpoint-proper-time-bound-and-flat-maximum: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  def-sr-inertial-and-piecewise-inertial-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  post-sr-free-trajectories-and-clock-hypothesis: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-lorentz-form-and-inertia: mathematical-premise
  thm-of-square-roots: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-27 (the reunion discussion and the time-dilation factor); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 71-72 (timelike geodesics maximize proper time; the twin remark; the 'locally' caveat)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30 (Minkowski example: straight lines are extremal and maximize); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 12
aliases: []
---

## Statement

Adopt as physical assumptions the postulates [[post-sr-inertial-covariance]],
[[post-sr-ideal-clocks-and-light]] and
[[post-sr-free-trajectories-and-clock-hypothesis]], and let $c$ and the SI
conventions be those of [[def-sr-si-units-and-coordinate-conventions]]. Let $p$
and $q$ be events with $q-p$ future timelike, fix reals $a<b$, and put
$T:=\sqrt{-\eta(q-p,q-p)}>0$, and let $x_s:[a,b]\to A$ be the straight
(inertial) future timelike worldline from $p$ to $q$,
$x_s(s):=p+\frac{s-a}{b-a}(q-p)$. Let $x:[a,b]\to A$ be a piecewise $C^1$
future timelike worldline from $p$ to $q$ in the weak sense of
[[def-sr-regular-causal-curve-and-worldline]], with total proper time
$\Delta\tau(x)$ defined by [[def-sr-piecewise-proper-time]]. Then, as
conditional statements about ideal clocks of the adopted model and not about any
actual apparatus:

**(i)** An ideal clock carried along $x_s$ from $p$ to $q$ reads between the
parameter values $a$ and $b$ the time $c^{-1}T$.

**(ii)** An ideal clock carried along $x$ from $p$ to $q$ reads $\Delta\tau(x)$,
and $\Delta\tau(x)\le c^{-1}T$, with equality if and only if $x$ is a strictly
increasing reparametrization of the straight segment from $p$ to $q$ in the
sense of [[thm-sr-endpoint-proper-time-bound-and-flat-maximum]] (ii).

**(iii)** If $x$ is piecewise inertial
([[def-sr-inertial-and-piecewise-inertial-worldline]]) and its image is not
contained in the straight segment from $p$ to $q$, then
$\Delta\tau(x)<c^{-1}T$ strictly; so among ideal clocks carried between the same
two events along future timelike piecewise $C^1$ histories of the weak class of
[[def-sr-regular-causal-curve-and-worldline]] (including its ordinary Riemann
special case (H)) the straight inertial clock records the largest reading, and
every history whose image is not the straight segment records a strictly
smaller one.

**(iv)** The two numbers $\Delta\tau(x)$ and $c^{-1}T$ are determined by the
parametrized histories and the model's conversion constant alone: the integrand
$\sqrt{-\eta(x',x')}$ of [[def-sr-piecewise-proper-time]] involves no chart, so
the comparison is a definite pair of clock readings attached to the same pair of
endpoint events and involves no simultaneity convention.

**Scope and qualification.** The statement inherits the idealizations of its
postulates (ideal pointlike clocks with no acceleration-dependent reading term,
prescribed histories, flat classical spacetime, the fixed conversion constant
$c$); it asserts no measurement outcome, contains no statistical inference, and
carries no claim that real clocks or the physical world are exactly described by
the model. The conclusion is conditional on the named postulates and does not
follow from the geometry alone.

## Facts & Assumptions

**Given:** The adopted postulates [[post-sr-inertial-covariance]] (A1), [[post-sr-ideal-clocks-and-light]] (A2) and [[post-sr-free-trajectories-and-clock-hypothesis]] (A3); the SI conventions of [[def-sr-si-units-and-coordinate-conventions]] with the fixed conversion constant $c>0$; events $p,q$ with $q-p$ future timelike, $T=\sqrt{-\eta(q-p,q-p)}>0$; the straight worldline $x_s(s)=p+\frac{s-a}{b-a}(q-p)$ on $[a,b]$, $a<b$; and a weak piecewise $C^1$ future timelike worldline $x:[a,b]\to A$ from $p$ to $q$ with total proper time $\Delta\tau(x)$.

[A1] Inertial covariance ([[post-sr-inertial-covariance]]): the oriented time-oriented affine Minkowski space is the spacetime of the framework, and the model's equations are covariant under the affine maps whose linear part preserves $\eta$, has determinant $+1$ and maps $C^+$ onto $C^+$ ([[def-sr-affine-minkowski-model]]).

[A2] Ideal clock reading rule ([[post-sr-ideal-clocks-and-light]] (i)): along a curve whose coordinate representation in an inertial chart is $C^1$ with everywhere future timelike derivative, an ideal clock reads between parameters $a<b$ the value $c^{-1}\int_a^b\sqrt{-\eta(x'(s),x'(s))}\,\mathrm ds$, with no additional acceleration-dependent term.

[A3] Clock hypothesis for the general worldline class ([[post-sr-free-trajectories-and-clock-hypothesis]] (ii)): an ideal clock carried along a future timelike worldline of the model, including an accelerated one and a weak piecewise $C^1$ one with finitely many kinks, reads between two parameter values the proper-time difference $\Delta\tau$ of [[def-sr-piecewise-proper-time]] (for weak piecewise $C^1$ histories), with no term depending on acceleration, jerk or any higher derivative; the reading does not depend on an increasing regular change of parameter.

[L4] Endpoint bound and flat maximum ([[thm-sr-endpoint-proper-time-bound-and-flat-maximum]]): for the weak piecewise future timelike $x$ from $p$ to $q$, $c\Delta\tau(x)\le T$; equality holds exactly for the strictly increasing reparametrizations of the straight segment in the sense of that theorem's clause (ii); and if the image of $x$ is not contained in the straight segment, in particular if $x$ is piecewise inertial with piece tangents not all positive multiples of one another, then $c\Delta\tau(x)<T$, while a piecewise inertial itinerary whose tangents are all positive multiples of one another attains the bound.

[L5] Proper-time definition and chart independence ([[def-sr-piecewise-proper-time]], [[def-sr-proper-time]], [[def-sr-regular-causal-curve-and-worldline]]): $\Delta\tau(x)=c^{-1}\sum_i\int_{(s_{i-1},s_i)}\sqrt{-\eta(x',x')}$ is defined through the intrinsic integrand $\sqrt{-\eta(x',x')}$, is independent of the inertial chart and of the admissible partition, and for the straight worldline with constant tangent $d/(b-a)$ equals $c^{-1}\sqrt{-\eta(d,d)}$, the straight-segment value of [[def-sr-proper-time]].

[L6] Bilinearity and roots ([[def-lorentz-form-and-inertia]], [[thm-of-square-roots]]): $\eta$ is bilinear, so $-\eta(\lambda d,\lambda d)=\lambda^2(-\eta(d,d))$ for real $\lambda$, and $\sqrt{\lambda^2T^2}=\lambda T$ for every real $\lambda>0$; every nonnegative real has a unique nonnegative square root.

[L7] Piecewise inertial histories ([[def-sr-inertial-and-piecewise-inertial-worldline]]): a piecewise inertial worldline is a weak piecewise $C^1$ future timelike worldline with constant future timelike tangents on the open pieces.

## Proof

**Proof technique:** direct.

1.1 The straight worldline $x_s$ has constant tangent $w:=\frac{1}{b-a}(q-p)$, which is future timelike because $q-p$ is future timelike and $\frac{1}{b-a}>0$; hence $x_s$ is a $C^1$ future timelike worldline from $p$ to $q$, and $x$ is a weak piecewise $C^1$ future timelike worldline from $p$ to $q$ by hypothesis, so both are histories of the class covered by the clock postulates [A2] and [A3]. [given, A1, A3, L5, L7]

2.1 By the reading rule [A2] applied to the $C^1$ history $x_s$, the ideal clock reads $c^{-1}\int_a^b\sqrt{-\eta(x_s',x_s')}\,\mathrm ds=c^{-1}(b-a)\sqrt{-\eta(w,w)}$; by bilinearity [L6], $-\eta(w,w)=\frac{1}{(b-a)^2}(-\eta(q-p,q-p))=\frac{T^2}{(b-a)^2}$, so $\sqrt{-\eta(w,w)}=\frac{T}{b-a}$ and the reading is $c^{-1}T$; this is (i). [step 1.1, A2, L6, algebra]

2.2 By the clock hypothesis [A3] for the weak piecewise class, the ideal clock carried along $x$ from $p$ to $q$ reads $\Delta\tau(x)$, which by [L5] equals the intrinsic proper-time value $c^{-1}\sum_i\int_{(s_{i-1},s_i)}\sqrt{-\eta(x',x')}$. [step 1.1, A3, L5]

3.1 Endpoint comparison: by [L4] the endpoint bound gives $c\,\Delta\tau(x)\le T$, equivalently $\Delta\tau(x)\le c^{-1}T$ because $c>0$; and equality holds if and only if $x$ is a strictly increasing reparametrization of the straight segment from $p$ to $q$ in the sense of [[thm-sr-endpoint-proper-time-bound-and-flat-maximum]] (ii); this proves (ii). [step 2.1, step 2.2, L4]

4.1 Strict case: if $x$ is piecewise inertial with piece tangents not all positive multiples of one another, then its image is not contained in the straight segment and [L4] gives $c\,\Delta\tau(x)<T$, that is $\Delta\tau(x)<c^{-1}T$. Since the straight clock reads $c^{-1}T$ by (i) and every weak piecewise history reads at most $c^{-1}T$ by (ii) with equality only for the straight-segment reparametrizations, the straight inertial clock records the largest reading among the histories of the class, and every history whose image is not the straight segment records strictly less — for a continuous history from $p$ to $q$ contained in the straight segment has the whole segment as image, so 'image not contained' and 'image not the straight segment' agree; this proves (iii). [step 3.1, L4, L7]

5.1 Chart independence: the proper-time integrand $\sqrt{-\eta(x',x')}$ is formed from $\eta$ and the tangent alone, and [L5] records that $\Delta\tau(x)$ is independent of the inertial chart and of the partition; likewise $T=\sqrt{-\eta(q-p,q-p)}$ is the interval of the intrinsic displacement, and the rest-frame computation of [L4] realizes it as the coordinate value in any inertial frame with first vector $(q-p)/T$, so both numbers are determined by the parametrized histories and the fixed constant $c$; since the two readings are attached to the same events $p$ and $q$, no simultaneity convention enters. This is (iv). [step 3.1, step 4.1, L5, L6]

6.1 Scope: the deduction used the adopted postulates [A1]-[A3] and the mathematical endpoint theorem [L4]; the conclusion is conditional on those idealizations (ideal clocks without an acceleration-dependent term, prescribed histories, flat spacetime, fixed $c$), asserts no measurement outcome and no statistical inference, and claims nothing about real clocks or about nature; no choice principle is used beyond the published suppliers. [step 2.1, step 2.2, step 3.1, step 5.1, A1, A2, A3, L4, L5] ∎
