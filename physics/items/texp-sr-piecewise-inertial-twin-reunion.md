---
id: texp-sr-piecewise-inertial-twin-reunion
kind: thought-experiment
title: "The piecewise inertial twin reunion: conditional differential aging"
status: published
origin: pipeline
domain: physics
physical_scope: "The idealized twin-reunion scenario of the flat classical special-relativity model: two ideal clocks set to zero at their common departure event, one inertial and one on a two-leg piecewise inertial history with an instantaneous ideal turn, compared at their common reunion event. Conditional on the named postulates (ideal clocks with no acceleration-dependent term, prescribed histories, flat spacetime, fixed c); the turn idealizes a finite-duration turnaround. Excludes real clocks and apparatus, gravity, quantum effects, and every measurement or statistical claim."
proof_strategy: direct
deps: [pthm-sr-same-endpoint-clock-comparison, thm-sr-endpoint-proper-time-bound-and-flat-maximum, def-sr-inertial-and-piecewise-inertial-worldline, def-sr-piecewise-proper-time, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, post-sr-ideal-clocks-and-light, post-sr-free-trajectories-and-clock-hypothesis, post-sr-inertial-covariance, def-sr-si-units-and-coordinate-conventions, lem-timelike-cone-has-two-convex-components, def-lorentz-form-and-inertia, thm-of-square-roots, lem-of-square-monotone, def-ordered-field]
dependency_roles:
  pthm-sr-same-endpoint-clock-comparison: physical-result
  thm-sr-endpoint-proper-time-bound-and-flat-maximum: mathematical-premise
  def-sr-inertial-and-piecewise-inertial-worldline: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
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
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-26 (figure s, the two-leg metric computation, the reunion discussion and the time-dilation factor); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 71-72 (timelike geodesics maximize proper time; the twin remark; the 'locally' caveat)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30 (Minkowski example: straight lines are extremal and maximize); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 13
aliases: []
---

## Statement

Thought experiment: the piecewise inertial twin reunion of the adopted model,
with its conditional conclusion. Adopt [[post-sr-inertial-covariance]],
[[post-sr-ideal-clocks-and-light]] and
[[post-sr-free-trajectories-and-clock-hypothesis]], and let $c$ and the SI
conventions be those of [[def-sr-si-units-and-coordinate-conventions]]. Fix an
inertial frame with chart $x$, a duration $T>0$ in seconds and a speed $v$ with
$0<|v|<c$; put $\gamma:=(1-v^2/c^2)^{-1/2}$. Define two histories (parameter
$t$ in seconds, with $x^0=ct$):

- **stay-at-home**: $x_{\mathrm{stay}}(t):=x^{-1}(ct,0,0,0)$ for
  $t\in[0,2T]$;
- **traveler**: $x_{\mathrm{travel}}(t):=x^{-1}(ct,vt,0,0)$ for $t\in[0,T]$ and
  $x_{\mathrm{travel}}(t):=x^{-1}(ct,v(2T-t),0,0)$ for $t\in[T,2T]$.

Carry ideal clocks along these histories, with reading maps
$C_{\mathrm{stay}},C_{\mathrm{travel}}:[0,2T]\to\mathbb R$ in seconds, whose
increments obey the clock postulates. Set both to zero at the common departure
event $p=x^{-1}(0,0,0,0)$:
$C_{\mathrm{stay}}(0)=C_{\mathrm{travel}}(0)=0$. This initial setting is part
of the preparation; the postulates fix increments and allow additive offsets.

Then:

**(i)** $x_{\mathrm{stay}}$ is the inertial future timelike worldline from
$p:=x^{-1}(0,0,0,0)$ to $q:=x^{-1}(2cT,0,0,0)$, and $x_{\mathrm{travel}}$ is a
piecewise inertial future timelike worldline from $p$ to $q$ whose two pieces
have the constant tangents $(c,v,0,0)$ and $(c,-v,0,0)$, with the corner
$r:=x^{-1}(cT,vT,0,0)$; the image of $x_{\mathrm{travel}}$ contains the three
events $p,r,q$, which are not collinear in the affine model, so the image of
$x_{\mathrm{travel}}$ is not contained in the straight segment from $p$ to $q$.

**(ii)** Conditional on the postulates, an ideal clock carried from $p$ to $q$
along $x_{\mathrm{stay}}$ reads $2T$, while an ideal clock carried from $p$ to
$q$ along $x_{\mathrm{travel}}$ reads
$2T/\gamma=2T\sqrt{1-v^2/c^2}$; hence at the reunion event $q$ the traveling
clock is behind the stay-at-home clock by
$2T(1-1/\gamma)=2T\bigl(1-\sqrt{1-v^2/c^2}\bigr)>0$.

**(iii)** The conclusion is a comparison of two clock readings at the common
events $p$ and $q$; it does not depend on a simultaneity convention or on the
inertial frame used to describe the histories, because both readings are
proper-time integrals of the two histories.

**(iv)** Scope and idealization: the scenario is a conditional model statement;
the instantaneous turn at $r$ idealizes a turnaround of finite duration, the
clocks are ideal with no acceleration-dependent reading term, spacetime is flat,
and no gravitational, quantum, apparatus or statistical effect is modeled; no
measurement is reported. The conclusion is conditional on the adopted postulates
and does not assert that nature is exactly described by the model.

## Facts & Assumptions

**Given:** The adopted postulates [[post-sr-inertial-covariance]], [[post-sr-ideal-clocks-and-light]] and [[post-sr-free-trajectories-and-clock-hypothesis]]; the SI conventions of [[def-sr-si-units-and-coordinate-conventions]] with fixed $c>0$; an inertial frame with chart $x$; a duration $T>0$ and a speed $v$ with $0<|v|<c$; $\gamma=(1-v^2/c^2)^{-1/2}$; the two histories $x_{\mathrm{stay}}$ and $x_{\mathrm{travel}}$ of the statement, with $p=x^{-1}(0,0,0,0)$, $r=x^{-1}(cT,vT,0,0)$ and $q=x^{-1}(2cT,0,0,0)$; their ideal-clock reading maps $C_{\mathrm{stay}},C_{\mathrm{travel}}:[0,2T]\to\mathbb R$ in seconds, set to $C_{\mathrm{stay}}(0)=C_{\mathrm{travel}}(0)=0$ at $p$.

[A1] Inertial covariance ([[post-sr-inertial-covariance]], [[def-sr-affine-minkowski-model]]): the oriented time-oriented affine Minkowski space is the spacetime of the framework, and the model's equations are covariant under the affine maps preserving $\eta$, orientation and the future cone.

[A2] Ideal-clock reading rule ([[post-sr-ideal-clocks-and-light]] (i)): along a $C^1$ history with everywhere future timelike derivative the ideal clock's reading increment between parameters $a<b$ is $C(b)-C(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,\mathrm ds$, with no acceleration-dependent term; the reading map $C$ is specified up to an additive constant.

[A3] Clock hypothesis for the piecewise class ([[post-sr-free-trajectories-and-clock-hypothesis]] (ii)): an ideal clock carried along a future timelike worldline of the model, including a weak piecewise $C^1$ one with finitely many kinks, has reading increment $C(b)-C(a)=\Delta\tau_{[a,b]}$ of [[def-sr-piecewise-proper-time]], with no term depending on acceleration, jerk or higher derivatives.

[L4] Inertial and piecewise inertial worldlines ([[def-sr-inertial-and-piecewise-inertial-worldline]], [[def-sr-regular-causal-curve-and-worldline]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-timelike-cone-has-two-convex-components]], [[def-inertial-frame-and-inertial-chart]]): a curve with constant tangent $d$ along an interval is inertial when $d$ is future timelike; a two-piece curve with constant future timelike tangents $d_1,d_2$ joining at a corner is a piecewise inertial weak piecewise $C^1$ future timelike worldline; and in the chart a coordinate vector $(w^0,w_s)$ is future timelike exactly when $w^0>|w_s|$.

[L5] Proper times of straight and piecewise straight histories ([[def-sr-proper-time]], [[def-sr-piecewise-proper-time]], [[def-lorentz-form-and-inertia]]): a straight history with constant tangent $w$ over a parameter interval of length $L$ has proper time $c^{-1}L\sqrt{-\eta(w,w)}$; a two-leg history has total proper time the sum of its leg values; and the values depend only on the intrinsic integrand $\sqrt{-\eta(x',x')}$ and the parameter interval, not on the inertial chart.

[L6] Same-endpoint clock comparison ([[pthm-sr-same-endpoint-clock-comparison]]): for a weak piecewise future timelike history from $p$ to $q$ with $q-p$ future timelike, the clock reading along the straight history is $c^{-1}\sqrt{-\eta(q-p,q-p)}$ and is the largest among the readings of the class, with strict inequality for every history whose image is not the straight segment; the conclusion is conditional on the same postulates.

[L7] Endpoint theorem ([[thm-sr-endpoint-proper-time-bound-and-flat-maximum]]): for the weak piecewise future timelike class, $c\,\Delta\tau\le\sqrt{-\eta(q-p,q-p)}$ with the stated equality and strictness clauses.

[L8] Roots, monotonicity and order ([[thm-of-square-roots]], [[lem-of-square-monotone]], [[def-ordered-field]]): $a\ge0$ has a unique nonnegative square root; for $x,y\ge0$, $x<y\iff x^2<y^2$; and $0<|v|<c$ gives $0<v^2/c^2<1$.

## Proof

**Proof technique:** direct.

1.1 The stay-at-home history has parameter path $(ct,0,0,0)$, hence constant tangent $(c,0,0,0)$ with $c>0=|0|$, so it is future timelike and inertial, running from $p$ at $t=0$ to $q$ at $t=2T$. The traveler's first piece has parameter path $(ct,vt,0,0)$ on $[0,T]$, hence constant tangent $(c,v,0,0)$ with $c>|v|$, and its second piece has parameter path $(ct,v(2T-t),0,0)$ on $[T,2T]$, hence constant tangent $(c,-v,0,0)$ with $c>|-v|$; at $t=T$ both formulas give the point $(cT,vT,0,0)$, so the two pieces join at the corner $r$ and define a two-leg piecewise inertial future timelike worldline from $p=x^{-1}(0,0,0,0)$ at $t=0$ to $q=x^{-1}(2cT,0,0,0)$ at $t=2T$. [given, L4, algebra]

2.1 The three events $p,r,q$ have coordinate columns $(0,0,0,0)$, $(cT,vT,0,0)$, $(2cT,0,0,0)$; the affine line through $p$ and $q$ consists of the columns $\lambda(2cT,0,0,0)$ with second coordinate $0$, and $r$ has second coordinate $vT\ne0$ because $v\ne0$ and $T>0$, so $r$ is not on that line; as affine charts preserve collinearity, $p,r,q$ are not collinear, and since the image of $x_{\mathrm{travel}}$ contains them it is not contained in the straight segment from $p$ to $q$. [step 1.1, L4, algebra]

2.2 By the reading rule [A2] applied to the $C^1$ history $x_{\mathrm{stay}}$, $C_{\mathrm{stay}}(2T)-C_{\mathrm{stay}}(0)=c^{-1}\int_0^{2T}\sqrt{-\eta((c,0,0,0),(c,0,0,0))}\,\mathrm dt=c^{-1}\cdot2T\cdot c=2T$, in agreement with the straight-segment value of [L5]. Since its given initial reading is zero, $C_{\mathrm{stay}}(2T)=2T$. [given, step 1.1, A2, L5, algebra]

2.3 By the clock hypothesis [A3], $C_{\mathrm{travel}}(2T)-C_{\mathrm{travel}}(0)=\Delta\tau(x_{\mathrm{travel}})$ of [[def-sr-piecewise-proper-time]]; the two legs have constant tangents $(c,v,0,0)$ and $(c,-v,0,0)$ with the same interval value $-c^2+v^2=-c^2(1-v^2/c^2)$, so by [L5] each leg contributes $c^{-1}T\sqrt{c^2-v^2}=T\sqrt{1-v^2/c^2}=T/\gamma$. Since its given initial reading is zero, the reunion reading is $C_{\mathrm{travel}}(2T)=2T/\gamma=2T\sqrt{1-v^2/c^2}$. [given, step 1.1, A3, L5, L8, algebra]

3.1 Comparison: by [L8] $0<v^2/c^2<1$, so $0<1-v^2/c^2<1$ and $\sqrt{1-v^2/c^2}<1$ by strict monotonicity of squaring on the nonnegatives, whence $2T/\gamma<2T$ and the traveler is behind by $2T(1-1/\gamma)=2T(1-\sqrt{1-v^2/c^2})>0$; this is the strict case of the clock-comparison theorem [L6], consistent with step 2.1, since the image of $x_{\mathrm{travel}}$ is not the straight segment. [step 2.1, step 2.2, step 2.3, L6, L7, L8, algebra]

4.1 With the given zero initial settings, both reunion readings equal proper-time integrals of the respective histories; the integrand $\sqrt{-\eta(x',x')}$ is built from $\eta$ and the tangent alone, and [L5] records that the values do not depend on the inertial chart. The comparison uses the common events $p$ and $q$ and their specified clock settings, so no simultaneity convention or preferred inertial frame enters, which is (iii). [given, step 2.2, step 2.3, step 3.1, L5]

5.1 Scope: the instantaneous turn at $r$ idealizes a turnaround of finite duration, the clocks are ideal with no acceleration-dependent reading term, spacetime is flat and $c$ is fixed; the conclusion is a conditional statement about ideal clocks of the adopted model, asserts no measurement outcome and no statistical inference, and claims nothing about real clocks, gravity or quantum effects; no choice principle is used beyond the published suppliers. This is (iv). [step 3.1, step 4.1, A1, A2, A3, L4, L5, L6] ∎
