---
id: pthm-sr-radar-synchronization-of-inertial-observers
kind: physics-theorem
domain: physics
title: "Radar synchronization of an inertial observer reproduces its inertial chart"
status: published
origin: pipeline
physical_scope: >-
  The statement is conditional on the adopted ideal-clock and ideal-light
  postulates and on the SI coordinate conventions of the model; it concerns one
  inertial observer's straight worldline and those events off its axis whose
  spatial coordinates are nonzero, and it concludes only that the two-way radar
  protocol of the observer reproduces the inertial chart's time and rest-frame
  distance. It asserts no one-way light-speed measurement without a
  synchronization convention, no empirical calibration, no deviation from the
  ideal model, and nothing about accelerated, rotating, dispersive or
  finite-resolution situations. The idealizations of the postulates are carried
  into the conclusion.
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sr-operational-radar-protocol, lem-sr-radar-midpoint-for-inertial-observer, post-sr-ideal-clocks-and-light, def-sr-si-units-and-coordinate-conventions, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-sr-simultaneity-slice-and-rest-distance]
dependency_roles:
  def-sr-operational-radar-protocol: operational-prerequisite
  lem-sr-radar-midpoint-for-inertial-observer: mathematical-premise
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
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

Adopt [[post-sr-ideal-clocks-and-light]] (ideal clocks read proper time; ideal vacuum light rays are exactly the future null straight lines) and the SI conventions of [[def-sr-si-units-and-coordinate-conventions]]. Let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with chart $x$, put $n:=e_0$ (future unit, $\eta(n,n)=-1$) and let $W:=x^{-1}(\{(\lambda,0,0,0):\lambda\in\mathbb R\})$ be the coordinate axis, a straight future timelike worldline whose proper time between the events with coordinates $(\lambda_-,0,0,0)$ and $(\lambda_+,0,0,0)$ is $(\lambda_+-\lambda_-)/c$ up to an additive constant ([[def-sr-proper-time]], [[def-inertial-frame-and-inertial-chart]]). Let $q$ be an event whose spatial coordinates $r:=\bigl(x^1(q),x^2(q),x^3(q)\bigr)$ are nonzero, and put $\lambda_\pm:=x^0(q)\pm|r|$ with $|r|$ the Euclidean norm of [[def-spatial-euclidean-structure-of-an-inertial-frame]]. Then:

(i) the events $e_-:=x^{-1}(\lambda_-,0,0,0)$ and $e_+:=x^{-1}(\lambda_+,0,0,0)$ lie on $W$, and $q-e_-$, $e_+-q$ are future null; hence the radar protocol of [[def-sr-operational-radar-protocol]] applies with emission $e_-$, reflection $q$ and reception $e_+$;

(ii) the radar assignments are $\tau_{\mathrm{rad}}(q)=x^0(q)/c$ and $\rho_{\mathrm{rad}}(q)=|r|$ up to the additive constant of the observer's proper time: the radar time is the chart time of $q$ and the radar distance is the chart's rest-frame distance;

(iii) consequently, on the region of events with nonzero spatial part, radar simultaneity of this observer coincides with chart simultaneity (equal radar times are equal $x^0$), and the radar distance equals the rest distance in the simultaneity slice $H(m,n)$ of the midpoint event $m:=x^{-1}\bigl(x^0(q),0,0,0\bigr)$ ([[def-sr-simultaneity-slice-and-rest-distance]]);

(iv) scope and qualification: this is a conditional statement of the adopted ideal model, showing that the operational round-trip protocol reproduces the inertial chart's time and rest distance, so the operational content of inertial simultaneity is this two-way radar convention; it asserts no one-way light-speed measurement without a synchronization convention, no empirical calibration, no result for accelerated, rotating or dispersive situations, and no deviation from the model. The idealizations of the postulates are carried into the conclusion.

## Facts & Assumptions

**Given:** The adopted ideal-clock and ideal-light postulates and SI conventions ([[post-sr-ideal-clocks-and-light]], [[def-sr-si-units-and-coordinate-conventions]]), an inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$, $n=e_0$, the axis $W$, an event $q$ with $\lambda_\pm:=x^0(q)\pm|r|$ and $|r|>0$, and the events $e_\pm:=x^{-1}(\lambda_\pm,0,0,0)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[F1] Ideal light in vacuum: the ideal light rays are exactly the future null straight lines $\{p+\mu v:\mu\in\mathbb R\}$ with $v$ future null; ideal clocks read the proper time $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,ds$ ([[post-sr-ideal-clocks-and-light]], [[def-sr-proper-time]]).

[F2] The radar protocol assigns $\tau_{\mathrm{rad}}(q)=\tfrac12(\tau(s_-)+\tau(s_+))$ and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}(\tau(s_+)-\tau(s_-))$ to an event $q$ reached by a future null segment from $e_-=x(s_-)$ and connected to $e_+=x(s_+)$ by a future null segment ([[def-sr-operational-radar-protocol]]).

[F3] Radar midpoint lemma: for a future unit $n$, events $e_\pm=o+\lambda_\pm n$ with $\lambda_-<\lambda_+$ and an event $q$, the conditions $q-e_-$, $e_+-q$ future null hold if and only if $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ with $u\in n^\perp$, $|u|=(\lambda_+-\lambda_-)/2$; in that case the midpoint is $m=\tfrac{e_-+e_+}{2}$ and $d_n(m,q)=|u|$ in the slice $H(m,n)$ ([[lem-sr-radar-midpoint-for-inertial-observer]], [[def-sr-simultaneity-slice-and-rest-distance]]).

[F4] In the chart of an inertial frame, $x^0=ct$, the metric is $\operatorname{diag}(-1,1,1,1)$, $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and the spatial part of a displacement is measured by the Euclidean norm of [[def-spatial-euclidean-structure-of-an-inertial-frame]]; the axis $W$ is the straight worldline $\lambda\mapsto o+\lambda e_0$, whose tangent $e_0$ is future unit ([[def-inertial-frame-and-inertial-chart]], [[def-sr-regular-causal-curve-and-worldline]], [[def-causal-classification-of-lorentz-vectors]]).

## Proof

**Proof technique:** direct.

1.1 With $o:=x^{-1}(0,0,0,0)$ the axis is $W=\{o+\lambda e_0:\lambda\in\mathbb R\}$ and $e_\pm=x^{-1}(\lambda_\pm,0,0,0)=o+\lambda_\pm e_0$; the tangent of $W$ is the constant vector $e_0=n$ with $\eta(n,n)=-1$, so $W$ is a straight future timelike worldline and its proper-time function satisfies $\tau'(\lambda)=c^{-1}\sqrt{1}=1/c$, hence $\tau(\lambda)=\lambda/c+const$ by [F1] and [F4]. [F1, F4]

2.1 The hypotheses of the radar midpoint lemma [F3] are satisfied with $\lambda_\pm=x^0(q)\pm|r|$: since $|r|=0$ is excluded, $\lambda_-<\lambda_+$; the event $q$ has displacement $q-o=x^0(q)n+r_1e_1+r_2e_2+r_3e_3$ by [F4], so $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ with $u:=r_1e_1+r_2e_2+r_3e_3\in n^\perp$ and $|u|=|r|=(\lambda_+-\lambda_-)/2$, because $e_1,e_2,e_3$ span $n^\perp$ and the norm of $u$ is the Euclidean norm of the spatial part by [F4]. By [F3] the displacements $q-e_-$ and $e_+-q$ are future null; hence the radar protocol applies with emission $e_-$, reflection $q$ and reception $e_+$ by [F2]. [F1, F2, F3, F4, step 1.1]

3.1 The radar assignments of clause (ii): by [F2] and step 2.1, $\tau_{\mathrm{rad}}(q)=\tfrac12\bigl(\tau(\lambda_-)+\tau(\lambda_+)\bigr)$ and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}\bigl(\tau(\lambda_+)-\tau(\lambda_-)\bigr)$, and substituting the proper-time function of step 1.1 gives $\tau_{\mathrm{rad}}(q)=\tfrac{\lambda_-+\lambda_+}{2c}+const=\tfrac{x^0(q)}{c}+const$ and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}\cdot\tfrac{\lambda_+-\lambda_-}{c}=\tfrac{\lambda_+-\lambda_-}{2}=|r|$, where the additive constant is the same for all events measured by this observer. Hence the radar time is the chart time and the radar distance is the chart's rest-frame distance, up to the fixed additive constant of the following. [F2, step 1.1, step 2.1]

4.1 Clause (iii): by [F3] and step 2.1 the midpoint of the round trip is $m=\tfrac{e_-+e_+}{2}=x^{-1}\bigl(x^0(q),0,0,0\bigr)$, the displacement $q-m=u$ lies in $n^\perp$, and the rest distance in the slice $H(m,n)$ is $d_n(m,q)=|u|=|r|$, which equals $\rho_{\mathrm{rad}}(q)$ by step 3.1; and since $\tau_{\mathrm{rad}}$ differs from $x^0/c$ by a constant depending only on the observer, two events measured by this observer have equal radar times if and only if they have equal chart time $x^0$, so radar simultaneity coincides with chart simultaneity on the stated region. [F3, step 2.1, step 3.1]

5.1 Conclusion and scope: steps 1.1 and 2.1 prove (i) — the events $e_\pm$ lie on the observer's worldline and the two displacements are future null, so the operational protocol applies; steps 3.1 and 4.1 prove (ii) and (iii); clause (iv) is the honest qualification of the result: the deduction is conditional on the adopted ideal-clock and ideal-light postulates and the SI conventions, it identifies the operational content of inertial simultaneity as the two-way radar convention, and it asserts no one-way light-speed measurement without a synchronization convention, no empirical calibration and no result for accelerated, rotating or dispersive situations. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Conditional status.** The theorem is a conditional deduction inside the ideal model: the hypotheses are the adopted postulates, not experimental facts, and the conclusion is a statement about the model's own operational assignment. No measurement, calibration or statistical comparison is asserted, and the idealizations (exact proper-time readings, exact future null straight rays, instantaneous reflection) are part of the scope carried into every consumer.

- **What the symmetric split achieves.** The radar time $\tfrac12(\lambda_-+\lambda_+)/c$ is the half-sum of the emission and reception chart times, and the radar distance is half the round-trip light time times $c$; the theorem shows that these two-way quantities reproduce the chart's time coordinate and Euclidean rest distance. The one-way split into an outgoing and a returning light time is the symmetric convention fixed in [[def-sr-operational-radar-protocol]] and is not measured independently.
