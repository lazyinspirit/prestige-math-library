---
id: texp-sr-superluminal-relay-antitelephone
kind: thought-experiment
title: "The conditional superluminal relay: a one-relay signal chain received in the strict past of its emission"
status: draft
origin: pipeline
domain: physics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
physical_scope: "Conditional kinematic identities of the hypothetical superluminal relay model S1-S4 in the ideal flat classical spacetime of the framework: signals at fixed coordinate speed u > c in each emitter's rest frame, immediate lossless relaying and inertial motion at v < c. It is a conditional deduction and not a report of any observation; it asserts nothing about the existence of superluminal transmitters, receivers, particles or signals, and it says nothing about prearranged patterns that transfer no signal or energy."
deps: [post-sr-causal-signal-propagation, post-sr-inertial-covariance, pthm-sr-causal-signal-order-and-composition, def-sr-causal-reachability-in-affine-minkowski-space, def-sr-regular-causal-curve-and-worldline, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart, def-sr-si-units-and-coordinate-conventions, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, thm-sr-future-cone-and-flat-domain-of-dependence, lem-sr-spacelike-pairs-have-frame-dependent-time-order, def-lorentz-boost, def-lorentz-map-and-lorentz-group, lem-boost-is-proper-orthochronous-with-inverse, thm-sr-proper-orthochronous-lorentz-algebra, pthm-sr-interval-and-cone-invariance]
dependency_roles:
  post-sr-causal-signal-propagation: formulation-prerequisite
  post-sr-inertial-covariance: physical-assumption
  pthm-sr-causal-signal-order-and-composition: physical-result
  def-sr-causal-reachability-in-affine-minkowski-space: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: formulation-prerequisite
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  lem-sr-spacelike-pairs-have-frame-dependent-time-order: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
  pthm-sr-interval-and-cone-invariance: physical-result
dependency_level: 13
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "R. C. Tolman, The Theory of the Relativity of Motion (University of California Press, Berkeley, 1917): Chapter V, Sections 45-52 pp. 49-55 (kinematical rate of a clock, the idea of simultaneity, velocities greater than that of light with the order-of-cause-and-effect reversal formula (28)-(29), and the blocks caveat that kinematic patterns without causal connection are not restricted); Internet Archive full text of the 1917 printing"
      url: "https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Consider the following hypothetical signalling model in the oriented
time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with the SI coordinate
conventions $x^0=ct$ ([[def-sr-si-units-and-coordinate-conventions]],
[[def-sr-affine-minkowski-model]]). **(S1)** There are transmitters, each at
rest in an inertial frame, that emit localized signals travelling at a fixed
speed $u$ with $u>c$ in that frame, in any spatial direction: from coordinates $(ct_0,r_0)$ in the emitter chart $x_E$, an emitted ray is $\lambda\mapsto x_E^{-1}(c(t_0+\lambda),r_0+u\lambda n)$ for $\lambda\in[0,\infty)$, $n\in\mathbb R^3$ with $|n|=1$. These are smooth spacelike curves with increasing emitter coordinate time, not future causal paths. **(S2)** A
received signal can be immediately re-emitted at the same event by a receiver,
at speed $u$ in the receiver's own rest frame (unrestricted receiving and
relaying, no delay, no loss). **(S3)** Transmitters and receivers may move
inertially at any speed $v$ with $0<v<c$. **(S4)** The displacement between the
emission and the reception event of a signal is a vector of the affine model,
and displacements transform between inertial charts by the model's Lorentz
transitions; the framework's kinematics is not modified. Then there is an
explicit configuration in which a one-relay signal chain is received strictly
before it was emitted: let $L>0$, $0<v<c$ and $u>c$ satisfy
$v>2u/(1+u^2/c^2)$, which is possible because $2u/(1+u^2/c^2)<c$ for $u>c$;
in an inertial chart $x$, let the transmitters have worldlines
$a(t)=x^{-1}(ct,0,0,0)$ and $b(t)=x^{-1}(ct,L+vt,0,0)$, $t\in\mathbb R$.
Both are smooth future timelike curves, since their tangents have coordinate
columns $(c,0,0,0)$ and $(c,v,0,0)$ with $0<v<c$. Write $A$ and $B$ for the
transmitters on these worldlines; emit a signal from $A$ at the event
$A_0=x^{-1}(0,0,0,0)$, in the direction of increasing $x^1$; let $B$ receive it
at the event $B_1$ and re-emit immediately toward $A$ at speed $u$ in $B$'s rest
frame. Then the following are exact identities of the model.

**(a)** $t(B_1)=L/(u-v)>0$ and $x^1(B_1)=uL/(u-v)>0$, and the displacement
$B_1-A_0=(ct(B_1),x^1(B_1),0,0)$ is spacelike.

**(b)** The return displacement in the chart $x$ is
$(c\,\Delta t,-x^1(B_1),0,0)$ with
$\Delta t=x^1(B_1)(1-vu/c^2)/(u-v)$, which is negative under the stated choice
of $v$, and the arrival event $A_1$ on $A$'s worldline satisfies
$$t(A_1)=t(B_1)+\Delta t=\frac{L(2u-v-vu^2/c^2)}{(u-v)^2}<0 .$$

**(c)** Hence $A_1-A_0=(ct(A_1),0,0,0)$ with $t(A_1)<0$, so $A_1$ lies in the
strict chronological past $I^-(A_0)$ of the emission event, and the return
displacement $A_1-B_1$ is spacelike.

**(d)** In the model S1-S4 a signal chain therefore connects an emission event
$A_0$ to an event $A_1$ in the strict past of $A_0$, and each leg's reception is
spacelike-separated from its emission; the future-cone composition theorem and the antisymmetry in part (c) of
[[thm-sr-future-cone-and-flat-domain-of-dependence]] show incompatibility with the causal signal restriction
[[post-sr-causal-signal-propagation]], under which a reception event of a
transmission lies in the causal future of its emission event and a nontrivial relay chain
cannot return to its own emission event ([[pthm-sr-causal-signal-order-and-composition]]
(ii)-(iii)). So the hypothetical model S1-S4 and the causal signal restriction
cannot both describe one and the same process family.

**(e) Scope and qualification.** The computation is conditional on S1-S4 and is
a kinematic identity about the hypothetical model; it is not a report of any
observation, it does not establish that superluminal transmitters or receivers
can be built or that tachyons exist, and it says nothing about processes that
are not signals of the model: a prearranged pattern or configuration whose
successive spacelike-separated events transfer no signal or energy between them
(for example independently triggered devices, or a moving spot) is not covered,
and no phase velocity, group velocity, shadow or geometric pattern is thereby
claimed to be a signal. No quantum, gravitational, medium or detector effect is
described, and no statistical or empirical claim is made. No choice principle
is used.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with [[post-sr-inertial-covariance]] and the SI conventions of [[def-sr-si-units-and-coordinate-conventions]] adopted; the causal signal restriction [[post-sr-causal-signal-propagation]] is imposed only in the incompatibility supposition of step 5.1, not as a simultaneous premise of S1-S4; the hypothetical model S1-S4 of the Statement; parameters $L>0$, $u>c$, $0<v<c$ with $v>2u/(1+u^2/c^2)$; an inertial chart $x$ with $x^0=ct$ with transmitter worldlines $a(t)=x^{-1}(ct,0,0,0)$ and $b(t)=x^{-1}(ct,L+vt,0,0)$ for $t\in\mathbb R$; the emission event $A_0=x^{-1}(0,0,0,0)$ and the reception event $B_1$ of the outgoing signal on $B$'s worldline; the arrival event $A_1$ of the return signal on $A$'s worldline.

[A1] S1-S4: signals are emitted at fixed coordinate speed $u>c$ in each emitter's rest frame in any spatial direction; receipt is immediate, lossless and re-emitted at speed $u$ in the receiver's rest frame; inertial motion at $0<v<c$ is allowed; displacements transform by the model's Lorentz transitions.

[L1] Coordinate criterion, cone description and sums: for $D=x(q)-x(p)$, $q\in J^+(p)$ iff $D^0\ge|D_s|$, $q\in I^+(p)$ iff $D^0>|D_s|$, and the past statements hold with $-D$; nonzero elements of $\overline{C^+}$ have positive time coordinate; $\overline{C^+}\cap\overline{C^-}=\{0\}$; sums of finitely many elements of $\overline{C^+}$ lie in $\overline{C^+}$, strictly in $C^+$ if one summand lies in $C^+$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]], [[def-sr-causal-reachability-in-affine-minkowski-space]], [[def-time-orientation-and-future-causal-sets]]).

[L2] Classification: in an inertial basis $\eta(D,D)=-(D^0)^2+|D_s|^2$, so $D$ is spacelike, null or timelike according to the sign of $\eta(D,D)$ with the null case excluding $D=0$, and a timelike displacement with negative time coordinate points to the past ([[def-causal-classification-of-lorentz-vectors]]).

[L4] Signals: the model admits a transmission carrying a signal from $p$ to $q$ only if $q\in J^+(p)$; relaying two transmissions $p\to q$ and $q\to r$ gives $r\in J^+(p)$, strictly $r\in I^+(p)$ if one leg is strict, and two transmissions $p\to q$ and $q\to p$ force $p=q$ ([[post-sr-causal-signal-propagation]], [[pthm-sr-causal-signal-order-and-composition]]).

[L5] Boosts: for $|\beta|<1$ the passive boost acts by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ in the $(0,1)$-plane and is proper orthochronous with inverse $B(\beta)^{-1}=B(-\beta)$; the inverse transformation reads $x^0=\gamma(x'^0+\beta x'^1)$, $x^1=\gamma(x'^1+\beta x'^0)$; the chart $x'=B(\beta)\circ x$ is the chart of an inertial frame ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-map-and-lorentz-group]]).

[L6] Invariance: the interval $\eta(D,D)$, the causal character of a displacement and, for causal displacements, the future/past alternative are independent of the inertial chart; every proper orthochronous Lorentz map preserves $\eta$, the causal character and the closed cones ([[thm-sr-proper-orthochronous-lorentz-algebra]], [[pthm-sr-interval-and-cone-invariance]], [[post-sr-inertial-covariance]]).

[L7] Frame-dependent order of spacelike pairs: for a spacelike displacement there are inertial charts assigning the time-coordinate difference either sign and inertial charts of simultaneity ([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

## Proof

**Proof technique:** direct.

1.1 Work in the chart $x$ and write $t_1:=t(B_1)$. The outgoing signal is the ray $x^1=ut$ starting at $A_0$ (hypothesis S1 in the frame of $A$, whose chart is $x$), and $B$'s worldline is $x^1=L+vt$, so $ut_1=L+vt_1$, that is $t_1=L/(u-v)>0$ because $u>v$, and $x^1(B_1)=ut_1=uL/(u-v)>0$. The displacement $B_1-A_0$ has coordinates $(ct_1,ut_1,0,0)$, so $\eta=(u^2-c^2)t_1^2>0$ by [L2] and it is spacelike; this is (a). [given, A1, L2, algebra]

2.1 Let $x'=B(v/c)\circ x$ be the chart of $B$'s rest frame, which is an inertial chart by [L5]; in it $B$ has constant spatial coordinate because $x'^1=\gamma(x^1-\frac{v}{c}x^0)=\gamma(L+vt-vt)=\gamma L$, and the return signal of S1-S2 moves in the $-x'^1$ direction at coordinate speed $u$, so its displacement in $x'$ is $(c\,\Delta t',-u\,\Delta t')$ for the positive coordinate-time increment $\Delta t'>0$ of the leg. [step 1.1, A1, L5, algebra]

3.1 Transforming the displacement of step 2.1 back to $x$ with the inverse formulas of [L5] gives $c\,\Delta t=\gamma(c\,\Delta t'+\frac{v}{c}(-u\Delta t'))=\gamma c\,\Delta t'(1-vu/c^2)$ and the spatial displacement $\gamma(-u\Delta t'+\frac{v}{c}c\,\Delta t')=\gamma\Delta t'(v-u)$. The arrival event lies on $A$'s worldline $x^1=0$, so $\gamma\Delta t'(v-u)=-x^1(B_1)$, that is $\Delta t'=x^1(B_1)/(\gamma(u-v))>0$; substituting and using $x^1(B_1)=ut_1$ gives $\Delta t=x^1(B_1)(1-vu/c^2)/(u-v)$, which is negative exactly when $v>c^2/u$; the hypothesis $v>2u/(1+u^2/c^2)$ implies $v>c^2/u$, because $c^2/u<2u/(1+u^2/c^2)$ is equivalent to $u^2>c^2$. Hence $\Delta t<0$, and $t(A_1)=t(B_1)+\Delta t=\frac{L}{u-v}+\frac{uL(1-vu/c^2)}{(u-v)^2}=\frac{L(2u-v-vu^2/c^2)}{(u-v)^2}$, which is negative exactly when $v>2u/(1+u^2/c^2)$, as assumed; this is (b). [step 2.1, step 1.1, L5, algebra]

4.1 The arrival displacement is $A_1-A_0=(ct(A_1),0,0,0)$ with $t(A_1)<0$, so $\eta=-c^2t(A_1)^2<0$ with negative time coordinate: it is past timelike by [L2], and the reversed displacement $A_0-A_1=(c|t(A_1)|,0,0,0)$ satisfies $c|t(A_1)|>0=|D_s|$, so $A_0\in I^+(A_1)$, that is $A_1\in I^-(A_0)$, by [L1]. The return displacement $A_1-B_1$ has, in the chart $x'$ of step 2.1, the form $(c\Delta t',-u\Delta t')$ with $\eta'=(u^2-c^2)\Delta t'^2>0$, so it is spacelike there and, by the invariance of the interval under the Lorentz transition of [L6], spacelike in $x$ as well; this is (c). [step 3.1, step 2.1, L1, L2, L6, algebra]

5.1 Suppose the causal signal restriction holds for this configuration. The two legs are transmissions of the model, so [L4] applies to the chain $A_0\to B_1$ and $B_1\to A_1$ and gives $A_1\in J^+(A_0)$, that is $A_1-A_0\in\overline{C^+}$; by step 4.1, however, $A_1\in I^-(A_0)$, that is $A_0-A_1\in C^+$. Then $A_0-A_1\in C^+\subset\overline{C^+}$ and its negative $A_1-A_0\in\overline{C^+}$, so $A_0-A_1\in\overline{C^+}\cap\overline{C^-}=\{0\}$ by [L1], contradicting $A_0\ne A_1$ (their time coordinates differ) and $0\notin C^+$. Independently, the first leg is spacelike by step 1.1, so its reception $B_1$ does not lie in $J^+(A_0)$ by [L1], already violating the restriction's requirement. Hence the model S1-S4 and the causal signal restriction cannot both hold of one and the same process family; this is (d). [step 1.1, step 4.1, L1, L4]

6.1 Everything above is a conditional computation inside S1-S4 in the ideal flat model: no observation is reported, nothing is asserted about the existence of superluminal transmitters, receivers, particles or signals, and the argument is void for patterns that transfer no signal or energy between their spacelike-separated events, for which by [L7] inertial charts of simultaneity and of either time order exist, so that the "speed $u$" of a leg is a chart-dependent description and not a frame-independent property; no quantum, gravitational, medium or detector effect, no phase or group velocity and no statistical or empirical claim is involved, and no choice principle is used. [step 5.1, step 3.1, L4, L7, given] ∎
