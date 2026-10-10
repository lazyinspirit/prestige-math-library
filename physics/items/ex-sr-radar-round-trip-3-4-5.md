---
id: ex-sr-radar-round-trip-3-4-5
kind: example
domain: physics
title: "Worked radar round trip: emission, reflection and reception at exact rational parameters"
physical_scope: "Exact SI radar assignments for an inertial observer in complete vacuum under the ideal-clock and ideal-light assumptions of the radar protocol, with available ideal instantaneous reflectors and a clock calibrated to zero at the chart origin. Coordinates and rest distances have unit metre, T and proper/radar time have unit second, and c has unit metre per second. No finite-apparatus, material-medium, empirical-measurement or uncertainty claim is made."
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-sr-radar-midpoint-for-inertial-observer, def-sr-operational-radar-protocol, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-sr-proper-time, def-sr-simultaneity-slice-and-rest-distance, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-spatial-euclidean-structure-of-an-inertial-frame]
dependency_roles:
  lem-sr-radar-midpoint-for-inertial-observer: mathematical-premise
  def-sr-operational-radar-protocol: operational-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Adopt the ideal-clock, ideal-light, available-reflector and SI premises of [[def-sr-operational-radar-protocol]], and calibrate the observer's ideal clock to read $\tau=0$ at $x^0=0$. In an inertial chart $(x^0,x^1,x^2,x^3)$ of the affine Minkowski model with metric $\operatorname{diag}(-1,1,1,1)$ let the observer be at rest at the spatial origin, so that its worldline is $x^1=x^2=x^3=0$, let $T>0$, and let $q:=x^{-1}\bigl(cT,\tfrac35cT,0,0\bigr)$, an event of chart time $T$ and spatial coordinate $(3cT/5,0,0)$. With $e_-:=x^{-1}\bigl(\tfrac25cT,0,0,0\bigr)$ and $e_+:=x^{-1}\bigl(\tfrac85cT,0,0,0\bigr)$ one has $q-e_-=\bigl(\tfrac35cT,\tfrac35cT,0,0\bigr)$ and $e_+-q=\bigl(\tfrac35cT,-\tfrac35cT,0,0\bigr)$; both displacements have $\eta$-square $-\tfrac{9}{25}c^2T^2+\tfrac{9}{25}c^2T^2=0$ and positive time component, hence are future null, so the radar protocol applies with emission $e_-$, reflection $q$ and reception $e_+$ ([[def-sr-operational-radar-protocol]], [[lem-sr-radar-midpoint-for-inertial-observer]]). Since the observer is inertial, its proper time between the events with temporal coordinates $\lambda_-=\tfrac25cT$ and $\lambda_+=\tfrac85cT$ (chart times $2T/5$ and $8T/5$) is $(\lambda_+-\lambda_-)/c$ with the stated clock calibration, so the radar assignments are $\tau_{\mathrm{rad}}(q)=\tfrac12\bigl(\tfrac25T+\tfrac85T\bigr)=T$, the chart time of $q$, and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}\bigl(\tfrac85T-\tfrac25T\bigr)=\tfrac35cT$, the chart distance of $q$ from the observer. The same computation for $q':=x^{-1}\bigl(cT,\tfrac45cT,0,0\bigr)$ gives $e'_-=x^{-1}\bigl(\tfrac15cT,0,0,0\bigr)$, $e'_+=x^{-1}\bigl(\tfrac95cT,0,0,0\bigr)$, radar time $T$ and radar distance $\tfrac45cT$. Hence the two events $q$ and $q'$ of equal chart time are radar-simultaneous, with radar distances equal to their chart distances, in agreement with [[lem-sr-radar-midpoint-for-inertial-observer]].

## Facts & Assumptions

**Given:** The ideal-clock, ideal-light, reflector and SI premises of [L4], with the clock calibrated by $\tau(0)=0$, an inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$ ([[def-inertial-frame-and-inertial-chart]]), $T>0$, the observer worldline $W=\{x^{-1}(\lambda,0,0,0):\lambda\in\mathbb R\}$ at rest at the spatial origin, the events $q=x^{-1}(cT,\tfrac35cT,0,0)$, $e_-=x^{-1}(\tfrac25cT,0,0,0)$, $e_+=x^{-1}(\tfrac85cT,0,0,0)$ and $q'=x^{-1}(cT,\tfrac45cT,0,0)$, $e'_-=x^{-1}(\tfrac15cT,0,0,0)$, $e'_+=x^{-1}(\tfrac95cT,0,0,0)$ ([[def-sr-affine-minkowski-model]]).

[L1] Chart and frame: $x^{-1}(\lambda,r_1,r_2,r_3)=o+\lambda e_0+r_1e_1+r_2e_2+r_3e_3$, the coordinate basis is $\eta$-orthonormal with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and the spatial part of a displacement is measured by the Euclidean norm of [[def-spatial-euclidean-structure-of-an-inertial-frame]] ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L2] Future null criterion: a nonzero vector $v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$ is future null exactly when $\eta(v,v)=0$ and $v^0>0$; indeed the closure of the future cone is $\{v:v^0\ge|v_{\mathrm{vec}}|\}$ in the coordinates of the frame, and on the null cone $v^0=|v_{\mathrm{vec}}|$, so for $v\ne0$ the condition $v^0>0$ is exactly $v\in\operatorname{cl}(C^+)$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-timelike-cone-has-two-convex-components]]).

[L3] Radar midpoint lemma: for a future unit $n$, events $e_\pm=o+\lambda_\pm n$ with $\lambda_-<\lambda_+$ and an event $q$, the conditions "$q-e_-$ future null and $e_+-q$ future null" hold if and only if $q=o+\tfrac{\lambda_-+\lambda_+}{2}n+u$ with $u\in n^\perp$ and $|u|=(\lambda_+-\lambda_-)/2$; in that case the midpoint is $m=\tfrac{e_-+e_+}{2}$, the event $q$ lies in the slice $H(m,n)$, and its rest distance in that slice is $(\lambda_+-\lambda_-)/2$ ([[lem-sr-radar-midpoint-for-inertial-observer]], [[def-sr-simultaneity-slice-and-rest-distance]]).

[L4] Radar protocol: an observer with proper-time function $\tau$ assigns to a reflection event $q$ reached from $e_-=x(s_-)$ and connected to $e_+=x(s_+)$ by future null segments the values $\tau_{\mathrm{rad}}(q)=\tfrac12\bigl(\tau(s_-)+\tau(s_+)\bigr)$ and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}\bigl(\tau(s_+)-\tau(s_-)\bigr)$ ([[def-sr-operational-radar-protocol]]).

[L5] Proper time of an inertial observer: for the straight worldline $\lambda\mapsto o+\lambda e_0$ the proper-time function satisfies $\tau'(\lambda)=c^{-1}\sqrt{-\eta(e_0,e_0)}=1/c$, hence $\tau(\lambda)=\lambda/c$ under the stated calibration ([[def-sr-proper-time]], [[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct.

1.1 The events of the statement are $e_-=o+\tfrac25cT\,e_0$, $e_+=o+\tfrac85cT\,e_0$, $q=o+cT\,e_0+\tfrac35cT\,e_1$ and $m:=x^{-1}(cT,0,0,0)=o+cT\,e_0$ by [L1]; the observer direction is $n:=e_0$, future unit. With $u:=\tfrac35cT\,e_1\in n^\perp$ one has $q=m+u$ and $|u|=\tfrac35cT=\tfrac12\bigl(\tfrac85cT-\tfrac25cT\bigr)=(\lambda_+-\lambda_-)/2$, so condition (ii) of [L3] holds; by the implication (ii)$\Rightarrow$(i) of [L3] the displacements $q-e_-$ and $e_+-q$ are future null and the radar protocol applies with emission $e_-$, reflection $q$ and reception $e_+$. Directly, $q-e_-=\tfrac35cT\,e_0+\tfrac35cT\,e_1$ and $e_+-q=\tfrac35cT\,e_0-\tfrac35cT\,e_1$ by [L1], and $\eta(q-e_-,q-e_-)=-\tfrac{9}{25}c^2T^2+\tfrac{9}{25}c^2T^2=0$ with time component $\tfrac35cT>0$, so $q-e_-$ is future null by [L2], and likewise $\eta(e_+-q,e_+-q)=0$ with time component $\tfrac35cT>0$, so $e_+-q$ is future null. [L1, L2, L3, algebra]

1.2 Radar assignments for $q$: the proper-time function of the observer along $W$ is $\tau(\lambda)=\lambda/c$ under the stated calibration by [L5], so the emission event $e_-$ has parameter $\lambda_-=\tfrac25cT$ and clock reading $\tau(e_-)=\tfrac25T$, and the reception event $e_+$ has parameter $\lambda_+=\tfrac85cT$ and reading $\tau(e_+)=\tfrac85T$. By [L4], $\tau_{\mathrm{rad}}(q)=\tfrac12\bigl(\tfrac25T+\tfrac85T\bigr)=T$, the chart time $x^0(q)/c$, and $\rho_{\mathrm{rad}}(q)=\tfrac{c}{2}\cdot\tfrac65T=\tfrac35cT$. The chart distance of $q$ from the observer is the Euclidean norm of the spatial coordinate difference $(3cT/5,0,0)$, namely $\tfrac35cT$, so $\rho_{\mathrm{rad}}(q)$ equals the chart distance; and by [L3] the same number is the rest distance $d_n(m,q)$ in the slice $H(m,n)$ through the midpoint $m=x^{-1}(cT,0,0,0)$. [L1, L3, L4, L5, algebra]

1.3 The same computation for $q'=o+cT\,e_0+\tfrac45cT\,e_1$: here $q'-e'_-=\tfrac45cT\,e_0+\tfrac45cT\,e_1$ and $e'_+-q'=\tfrac45cT\,e_0-\tfrac45cT\,e_1$ by [L1], both with $\eta$-square $-\tfrac{16}{25}c^2T^2+\tfrac{16}{25}c^2T^2=0$ and time component $\tfrac45cT>0$, hence future null by [L2]; equivalently $q'=m'+u'$ with $m'=x^{-1}(cT,0,0,0)=m$ and $u'=\tfrac45cT\,e_1$, where $|u'|=\tfrac45cT=\tfrac12\bigl(\tfrac95cT-\tfrac15cT\bigr)$ satisfies condition (ii) of [L3]. Since $\tau(e'_-)=\tfrac15T$ and $\tau(e'_+)=\tfrac95T$, [L4] gives $\tau_{\mathrm{rad}}(q')=\tfrac12\bigl(\tfrac15T+\tfrac95T\bigr)=T$ and $\rho_{\mathrm{rad}}(q')=\tfrac{c}{2}\cdot\tfrac85T=\tfrac45cT$, the chart distance of $q'$; the midpoint of the $q'$ round trip is again $m$. [L1, L2, L3, L4, L5, algebra]

2.1 Conclusion: by steps 1.1 and 1.3 the two round trips have the same midpoint $m=m'=x^{-1}(cT,0,0,0)$, and the assigned radar times agree, $\tau_{\mathrm{rad}}(q)=\tau_{\mathrm{rad}}(q')=T$; so $q$ and $q'$ are radar-simultaneous although they are distinct events with different spatial coordinates, and each lies in the slice $H(m,n)$ with the rest vector $u=\tfrac35cT\,e_1$ or $u'=\tfrac45cT\,e_1$ by [L3]. Their radar distances $\tfrac35cT$ and $\tfrac45cT$ equal their chart distances and their rest distances in that slice, while the reception intervals differ, $\tfrac65cT$ for $q$ and $\tfrac85cT$ for $q'$, reflecting the different rest distances from the same midpoint. This is the exact rational instance of [L3]: the reflection events on one slice need not be reflections for the same emission-reception pair, and the radar assignment reproduces the chart time and chart distance for each of them. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Exact arithmetic only.** All parameters are rational multiples of $cT$; the nullity of the two segments and the two radar assignments are exact evaluations, and no numerical approximation or measurement model is involved.

- **Clock calibration.** The stated calibration fixes the additive proper-time constant to zero and hence gives the displayed radar time $T$. A different common clock offset would add that offset to both radar times while leaving their equality and both radar distances unchanged.

- **One midpoint, different reflection radii.** The two reflection events $q$ and $q'$ lie on the same slice $H(m,n)$ but at different rest distances $\tfrac35cT$ and $\tfrac45cT$ from the midpoint $m$; the lemma's statement that admissible reflections for one fixed emission-reception pair differ only in the direction of $u$ is not being applied to the pair $\{q,q'\}$, which has two different reception intervals, but each event separately is checked against its own pair by [L3].
