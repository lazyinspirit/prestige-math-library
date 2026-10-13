---
id: pthm-sr-observer-time-length-and-velocity-measurements
kind: physics-theorem
domain: physics
title: "Time dilation, length contraction, simultaneity and velocity transformation for inertial observers"
status: published
origin: pipeline
physical_scope: >-
  Ideal clock, rod and signal measurements between inertial observers in flat
  classical special-relativistic spacetime: moving-clock time dilation, length
  contraction on the measuring frame's simultaneity slice, relativity of
  simultaneity, and the relativistic velocity transformation. Conditional on the
  adopted ideal postulates; excludes real apparatus and clock errors, optical
  appearance, accelerating or deformable bodies, gravity, quantum effects, and
  every empirical, statistical or ontological claim.
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sr-boost-time-length-and-velocity-formulas, post-sr-ideal-clocks-and-light, post-sr-inertial-covariance, pthm-sr-radar-synchronization-of-inertial-observers, def-sr-simultaneity-slice-and-rest-distance, thm-sr-proper-time-and-observer-decomposition, def-sr-four-velocity-and-four-acceleration, def-sr-proper-time, def-sr-si-units-and-coordinate-conventions, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-sr-regular-causal-curve-and-worldline]
dependency_roles:
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  pthm-sr-radar-synchronization-of-inertial-observers: physical-result
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Adopt the ideal-clock and ideal-light assumptions of [[post-sr-ideal-clocks-and-light]] and the inertial-covariance assumption of [[post-sr-inertial-covariance]], and the SI coordinate conventions of [[def-sr-si-units-and-coordinate-conventions]]. Let the inertial frames and charts $x$, $x'$ related by a boost of parameter $v$ along the common first spatial direction be as in [[lem-sr-boost-time-length-and-velocity-formulas]], with $\gamma=(1-v^2/c^2)^{-1/2}$. Then, as statements about the ideal model and not about any actual apparatus:

**(i) Moving clocks run slow.** An ideal clock carried along the worldline $y(\lambda)=x^{-1}\bigl(\lambda,\tfrac{v}{c}\lambda+a_1,a_2,a_3\bigr)$ of clause (i) of the lemma reads between parameter values $\lambda_0<\lambda_1$ the time $(\lambda_1-\lambda_0)/(c\gamma)$, and since the coordinate time of $x$ along $y$ is $t=\lambda/c$, this is $(t_1-t_0)/\gamma$; equivalently, between two events of the clock's history the coordinate time elapsed in $x$ is $\Delta t=\gamma\,\Delta\tau$, where $\Delta\tau$ is the clock's reading ([[def-sr-proper-time]], [[def-sr-regular-causal-curve-and-worldline]]). Symmetrically, with $x$ and $x'$ interchanged, a clock at rest in $x$ runs slow by the same factor in the frame $x'$.

**(ii) Length contraction.** For a rod at rest in the frame $x'$ of rest length $L_0>0$, with endpoints carried along the worldlines $y_a$, $y_b$ of clause (ii) of the lemma, the length assigned to it by the frame $x$ on a simultaneity slice of $x$ in the sense of [[def-sr-simultaneity-slice-and-rest-distance]] is $L_0/\gamma$; symmetrically, a rod at rest in $x$ with constant spatial endpoint separation $(L_0,0,0)$ along the boost direction has length $L_0/\gamma$ as measured by $x'$. Measured length here is defined by the stated protocol — the rest distance between the two endpoint events at equal time in the measuring frame — and it is not the optical appearance of a moving rod; no claim is made about a rod whose state of motion changes.

**(iii) Relativity of simultaneity.** If two events $p,q$ satisfy $x^0(q)-x^0(p)=0$ and $x^1(q)-x^1(p)=L$, with vanishing transverse coordinate difference, then $x'^0(q)-x'^0(p)=-\gamma\tfrac{v}{c}L$, which is nonzero whenever $vL\ne0$; hence simultaneity in $x$ is not simultaneity in $x'$ and is not an observer-independent relation. Each inertial frame's simultaneity is exactly the simultaneity relation of its time axis in the sense of [[def-sr-simultaneity-slice-and-rest-distance]], operationally reproduced by its radar protocol as established in [[pthm-sr-radar-synchronization-of-inertial-observers]].

**(iv) Velocity transformation.** For a $C^1$ future timelike worldline with coordinate velocity $w$ in the frame $x$, $|w|<c$, the coordinate velocity $w'$ in the frame $x'$ is

$$w'_1=\frac{w_1-v}{1-vw_1/c^2},\qquad w'_\perp=\frac{w_\perp}{\gamma\bigl(1-vw_1/c^2\bigr)},$$

so relative velocities are not simply added; moreover $|w'|<c$ whenever $|w|<c$. Equivalently, $w'$ gives the spatial-basis components of the velocity of the worldline relative to the observer with four-velocity direction $e'_0$ in the sense of clause (d) of [[thm-sr-proper-time-and-observer-decomposition]] ([[def-sr-four-velocity-and-four-acceleration]]).

**(v) Scope and qualification.** All clauses are conditional on the adopted ideal postulates (ideal clocks, ideal light, inertial covariance, flat spacetime) and on the stated measurement protocols. They carry no statistical or empirical claim; they say nothing about real clock errors, real rods, optical appearance, accelerating or deformable bodies, gravity or quantum effects; and they do not establish the exclusive truth of the model. The time, length and simultaneity assignments are protocol-relative: they involve the measuring frame and its simultaneity slice, which the radar theorem identifies operationally.

## Facts & Assumptions

**Given:** The adopted ideal-clock/ideal-light and inertial-covariance postulates and the SI conventions ([[post-sr-ideal-clocks-and-light]], [[post-sr-inertial-covariance]], [[def-sr-si-units-and-coordinate-conventions]]), two inertial frames with charts $x$, $x'$ related by the boost of parameter $v$, $|v|<c$, with $\gamma=(1-v^2/c^2)^{-1/2}$, and the data of clauses (i)-(iv) of the Statement ([[def-inertial-frame-and-inertial-chart]]).

[F1] Boost formulas ([[lem-sr-boost-time-length-and-velocity-formulas]]): (i) the worldline $y(\lambda)=x^{-1}(\lambda,\tfrac{v}{c}\lambda+a_1,a_2,a_3)$ is future timelike and its proper time between $\lambda_0<\lambda_1$ is $(\lambda_1-\lambda_0)/(c\gamma)$; (ii) for the worldlines $y_a,y_b$ at rest in $x'$ with constant $x'$-spatial separation $(L_0,0,0)$ along the boost direction, the $x'$-separation at equal $x'$-times is $L_0$ while the $x$-separation at equal $x$-times is $L_0/\gamma$, and symmetrically for worldlines at rest in $x$ with constant $x$-spatial separation $(L_0,0,0)$; (iii) $x^0(q)-x^0(p)=0$, $x^1(q)-x^1(p)=L$ imply $x'^0(q)-x'^0(p)=-\gamma\tfrac{v}{c}L$; (iv) for a $C^1$ future timelike worldline with subluminal coordinate velocity $w$ in $x$, the coordinate velocity in $x'$ is $w'_1=(w_1-v)/(1-vw_1/c^2)$, $w'_\perp=w_\perp/\bigl(\gamma(1-vw_1/c^2)\bigr)$, and $|w'|<c$ when $|w|<c$.

[F2] Ideal clocks read proper time: an ideal clock carried along a $C^1$ future timelike curve reads between parameters $a<b$ the value $\sigma(b)-\sigma(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,ds$, with no acceleration-dependent term ([[post-sr-ideal-clocks-and-light]] clause (i), [[def-sr-proper-time]]).

[F3] Radar theorem: for an inertial observer with chart $x$ and an event $q$ with nonzero spatial coordinates, the radar time is $x^0(q)/c$ and the radar distance is the chart's rest-frame distance $|r|$, up to the fixed additive constant of the observer's proper-time origin ([[pthm-sr-radar-synchronization-of-inertial-observers]], [[def-sr-simultaneity-slice-and-rest-distance]]).

[F4] Simultaneity slices and rest distance: for a future unit $n$ and event $m$, $H(m,n)=\{z:\eta(n,z-m)=0\}$, and for $z\in H(m,n)$ the rest distance is $d_n(m,z)=\sqrt{\eta(z-m,z-m)}$ ([[def-sr-simultaneity-slice-and-rest-distance]]). For the time axis $n=e_0$ of an inertial frame with chart $x$, $\eta(e_0,z-m)=-(x^0(z)-x^0(m))$, so $H(m,e_0)=\{z:x^0(z)=x^0(m)\}$ is the chart's simultaneity slice through $m$; and for two events at equal $x^0$ with spatial coordinate difference $\Delta r\in\mathbb R^3$, the rest distance is the Euclidean norm $|\Delta r|$ of [[def-spatial-euclidean-structure-of-an-inertial-frame]] ([[def-inertial-frame-and-inertial-chart]], [[def-sr-simultaneity-slice-and-rest-distance]]).

[F5] Observer-relative velocity: if $n$ is future unit timelike and $u$ is the unit four-velocity direction of a worldline, the relative velocity is $w=c\,h(u)/(-\eta(n,u))$ with $h(v)=v+\eta(n,v)n$, and in the chart of an inertial frame with time axis $n=e_0$ it coincides with the worldline's coordinate velocity in that chart ([[thm-sr-proper-time-and-observer-decomposition]] clauses (c),(d),(e), [[def-sr-four-velocity-and-four-acceleration]]).

[F6] Inertial covariance: the framework's model equations have the same form under the inertial changes of description of [[post-sr-inertial-covariance]]; in particular the boost relation between $x$ and $x'$ is such an inertial change of description, and the roles of the two frames in (i) and (ii) may be exchanged ([[lem-sr-boost-time-length-and-velocity-formulas]], [[def-inertial-frame-and-inertial-chart]]).

## Proof

**Proof technique:** direct.

1.1 Setup: after choosing coincident origins (translations do not affect rates or differences by [F1]), the boost transition is $x'^0=\gamma\bigl(x^0-\tfrac{v}{c}x^1\bigr)$, $x'^1=\gamma\bigl(x^1-\tfrac{v}{c}x^0\bigr)$, $x'^2=x^2$, $x'^3=x^3$, and the inverse relation is the boost of parameter $-v$; the worldline $y$ of [F1](i) is a future timelike worldline carrying an ideal clock, and its coordinate time in $x$ is $t=\lambda/c$ by the SI convention $x^0=ct$ ([[def-sr-si-units-and-coordinate-conventions]], [F1], [F2], [F6]). [F1, F2, F6]

1.2 Clause (i): by [F1](i) the proper time of $y$ between $\lambda_0<\lambda_1$ is $(\lambda_1-\lambda_0)/(c\gamma)$, and by [F2] the ideal clock carried along $y$ reads exactly this proper time; since $t$ runs from $\lambda_0/c$ to $\lambda_1/c$, the reading is $(t_1-t_0)/\gamma$. Writing $\Delta\tau:=(\lambda_1-\lambda_0)/(c\gamma)$ for the clock's reading and $\Delta t:=t_1-t_0=\gamma\Delta\tau$, we obtain $\Delta t=\gamma\Delta\tau$. A clock at rest in $x$ moves at velocity $-v$ in the primed frame, and the same computation applied to the inverse boost of parameter $-v$ gives the symmetric statement, so the factor is the same in both directions. [F1, F2, F6]

1.3 Clause (ii): let the rod at rest in $x'$ have endpoints on the worldlines $y_a,y_b$ of [F1](ii), whose $x'$-coordinate separation is $L_0$. At a fixed $x$-time the endpoints are two events with equal $x^0$ and $x$-separation $L_0/\gamma$ by [F1](ii); they lie in the simultaneity slice of $x$ through their midpoint in the sense of [F4], and their rest distance in that slice is the Euclidean norm of their spatial coordinate difference, namely $L_0/\gamma$. Since the measurement protocol of clause (ii) assigns to the rod exactly the rest distance between the endpoint events at equal measuring-frame time, the length assigned by $x$ is $L_0/\gamma$. For the symmetric statement, take two worldlines at rest in $x$ with constant $x$-spatial separation $(L_0,0,0)$; the inverse boost and [F1](ii) give their separation $L_0/\gamma$ at equal $x'$-times by the same argument; the rod is modelled by two straight worldlines at rest in the measuring frame's complement, so the computation applies only to a rod in uniform motion and never to a rod whose state of motion changes. [F1, F4, F6]

1.4 Clause (iii): by [F1](iii), events with equal $x^0$ and first-coordinate separation $L$ have $x'^0$-difference $-\gamma\tfrac{v}{c}L$, which is nonzero exactly when $vL\ne0$, so the two events are not simultaneous in $x'$; this exhibits the observer dependence of simultaneity. Chart simultaneity is equality of $x^0$, which by [F4] is exactly the slice relation $H(m,e_0)$ of the frame's time axis; and by [F3] the radar protocol of the inertial observer reproduces $x^0/c$ and the chart distance on events with nonzero spatial coordinates, so these simultaneity slices have the stated operational content. [F1, F3, F4]

1.5 Clause (iv): apply [F1](iv) to the worldline of the clause, which is $C^1$ future timelike with subluminal coordinate velocity $w$ in $x$; this gives the displayed transformation and $|w'|<c$ whenever $|w|<c$. For the identification of $w'$ as a relative velocity, [F5] with $n=e'_0$ and $u=U/c$ gives $w_{\mathrm{rel}}=c\,h'(U/c)/(-\eta(e'_0,U/c))$, and clause (e) of [F5] states that for the chart of the frame its components in the chart's spatial basis are the coordinate velocity $w'$. Finally, the deviation from the Galilean sum is exact: $w'_1-(w_1-v)=\frac{(vw_1/c^2)(w_1-v)}{1-vw_1/c^2}$ by a single algebraic simplification of the displayed formula, so the transformation coincides with the difference $w_1-v$ exactly when $v=0$ or $w_1=0$ or $w_1=v$, and not in general. [F1, F5]

2.1 Conclusion and scope: steps 1.2, 1.3, 1.4 and 1.5 establish clauses (i), (ii), (iii) and (iv) as statements about the ideal model, each derived from the mathematical content of [F1] together with the adopted ideal-clock reading [F2], the radar identification [F3] and the observer-relative velocity identification [F5]; the symmetric halves of (i) and (ii) use the inverse boost as in [F6]. Clause (v) records the honest qualification: the deduction is conditional on the adopted postulates and stated protocols, it produces no measurement outcome, no statistical inference and no empirical comparison, it says nothing about real clocks, rods, optical appearance, accelerating or deformable bodies, gravity or quantum effects, and it does not establish the exclusive truth of the model; the assignments are intrinsic to the measuring frame and its simultaneity slice. [step 1.2, step 1.3, step 1.4, step 1.5] ∎

## Remarks

- **Conditional reading, not empirical claim.** The theorem converts mathematical coordinate statements of [[lem-sr-boost-time-length-and-velocity-formulas]] into the operational language of ideal clocks, rods and radar signals exactly under the adopted postulates of [[post-sr-ideal-clocks-and-light]] and [[post-sr-inertial-covariance]]. It is a conditional deduction about the model; agreement of any apparatus with it would be evidence about the model, not a proof of the postulates.

- **Length is slice-dependent; appearance is not claimed.** The contracted length $L_0/\gamma$ refers to the endpoint events at equal time in the measuring frame, so it is the rest distance in that frame's simultaneity slice by [[def-sr-simultaneity-slice-and-rest-distance]]. No light-travel-time or photographic statement is made, and the two frames assign their different lengths to different pairs of events on the same two worldlines.

- **The velocity transformation is not a sum.** The exact identity $w'_1-(w_1-v)=\frac{(vw_1/c^2)(w_1-v)}{1-vw_1/c^2}$ shows precisely when the Galilean difference is recovered, namely when $v=0$, $w_1=0$ or $w_1=v$, and exhibits the correction factor $1-vw_1/c^2$ otherwise; the transverse component is additionally scaled by $1/\gamma$.
