---
id: ex-sr-antitelephone-relay-arrival-time
kind: example
title: "Worked relay arithmetic at $u=2c$ and $v=(9/10)c$: arrival at $t=-50/(121c)$ seconds"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-inertial-frame-and-inertial-chart, def-lorentz-boost, def-lorentz-map-and-lorentz-group, lem-boost-is-proper-orthochronous-with-inverse, lem-lorentz-map-preserves-metric-and-causal-structure, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
dependency_level: 10
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
---

## Example

Worked computation in the chart $x$ of an inertial frame of an affine Minkowski
space ([[def-sr-affine-minkowski-model]],
[[def-inertial-frame-and-inertial-chart]]) with $x^0=ct$ for a fixed constant
$c>0$. Throughout this numerical example, $x^a$ and $L$ are numerical values
in metres, $t$ and $\Delta t$ are numerical values in seconds, and $c,u,v$
are numerical values in metres per second; units after a formula apply to its
numerical value. Take $u:=2c$, $v:=(9/10)c$ and $L:=1$ (a length of $1$ m), so that
$u>c$, $0<v<c$ and $v>2u/(1+u^2/c^2)=(4/5)c$. Let $A$ and $B$ have affine curves $a(t)=x^{-1}(ct,0,0,0)$ and
$b(t)=x^{-1}(ct,L+vt,0,0)$ for $t\in\mathbb R$. Their constant tangents
$(c,0,0,0)$ and $(c,v,0,0)$ are future timelike since $0<v<c$. Emit from $A$ at the event
$A_0:=x^{-1}(0,0,0,0)$ a signal travelling at coordinate speed $u$ in the
$+x^1$ direction, and let $B$ re-emit immediately from the reception event
$B_1$ a signal travelling at coordinate speed $u$ in the $-x^1$ direction of
$B$'s rest frame; this fixed-speed, immediate, lossless relay is the whole
content of the hypothetical model, and no device, signal or measurement is
asserted to exist.

**(a)** The reception time solves $ut=L+vt$, so
$$t(B_1)=\frac{L}{u-v}=\frac{10}{11c}\ \mathrm{s},\qquad x^1(B_1)=ut(B_1)=\frac{20}{11}\ \mathrm{m},$$
and the displacement $B_1-A_0=(\frac{10}{11},\frac{20}{11},0,0)$ m has interval
$\eta=-\frac{100}{121}+\frac{400}{121}=\frac{300}{121}>0$: it is spacelike.

**(b)** Write $\beta:=v/c=9/10$, $\gamma:=(1-\beta^2)^{-1/2}=10/\sqrt{19}$, and
let $x'=B(\beta)x$ be the chart of the inertial frame in which $B$ is at rest
([[def-lorentz-boost]],
[[lem-boost-is-proper-orthochronous-with-inverse]]). In that chart the return
displacement is $(c\,\Delta t',-u\,\Delta t')$ with $\Delta t'>0$, and
transforming back with the inverse boost
$$c\,\Delta t=\gamma\bigl(c\,\Delta t'-\beta u\,\Delta t'\bigr),\qquad \Delta x^1=\gamma\bigl(-u\,\Delta t'+\beta c\,\Delta t'\bigr),$$
the condition that the arrival lies on $A$'s worldline $x^1=0$ gives
$\Delta x^1=-x^1(B_1)$, hence
$$\Delta t'=\frac{x^1(B_1)}{\gamma(u-v)}>0,\qquad \Delta t=\frac{x^1(B_1)\bigl(1-vu/c^2\bigr)}{u-v} =\frac{20}{11}\Bigl(-\frac45\Bigr)\frac{10}{11c}=-\frac{160}{121c}\ \mathrm{s}.$$

**(c)** The arrival event $A_1$ therefore satisfies
$$t(A_1)=t(B_1)+\Delta t=\frac{10}{11c}-\frac{160}{121c}=-\frac{50}{121c}\ \mathrm{s}<0,$$
matching the closed formula
$L(2u-v-vu^2/c^2)/(u-v)^2=(-c/2)/(121c^2/100)=-50/(121c)\ \mathrm{s}$. The
displacement $A_1-A_0=(-\frac{50}{121},0,0,0)$ m is past timelike, so the
relayed signal is received strictly before it was emitted in the chart of the
emitter; the return displacement in $x$ is
$(-\frac{160}{121},-\frac{220}{121},0,0)$ m with
$\eta=-(\frac{160}{121})^2+(\frac{220}{121})^2>0$, spacelike.

**(d)** The computation is an arithmetic specialization of the hypothetical
fixed-speed model (signals at fixed coordinate speed $u>c$ in each emitter's
rest frame, immediate lossless relaying, inertial motion at $v<c$, ordinary
Lorentz kinematics of displacements); it is a conditional identity about that
model and neither asserts that such signals or devices exist nor reports any
measurement.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$, $x^0=ct$, a constant $c>0$, the numerical data $u=2c$, $v=(9/10)c$, $L=1$ (numerical metres), $\beta=v/c=9/10$, the affine curves $a(t)=x^{-1}(ct,0,0,0)$ of $A$ and $b(t)=x^{-1}(ct,L+vt,0,0)$ of $B$, $t\in\mathbb R$, the emission event $A_0=x^{-1}(0,0,0,0)$, and the hypothetical relay: outgoing leg of coordinate speed $u$ in the $+x^1$ direction from $A_0$, immediate re-emission at the reception event $B_1$ of a return leg of coordinate speed $u$ in the $-x^1$ direction of $B$'s rest frame.

[L1] Coordinate criterion: for events $p,q$ with $D=x(q)-x(p)$, $q\in J^+(p)$ iff $D^0\ge|D_s|$, and $q\in I^+(p)$ iff $D^0>|D_s|$; $J^-(p)=\{q:q\le p\}$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]], [[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L2] For $|\beta|<1$ the passive boost acts on coordinates by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ in the $(0,1)$-plane with $\gamma=(1-\beta^2)^{-1/2}$, its inverse is $B(-\beta)$ with inverse formulas $x^0=\gamma(x'^0+\beta x'^1)$, $x^1=\gamma(x'^1+\beta x'^0)$, and $B(\beta)$ is a proper orthochronous Lorentz map ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L3] The ordered basis $e'_a:=B(\beta)^{-1}e_a$ is $\eta$-orthonormal, future and positively oriented, so $(o;e'_0,e'_1,e'_2,e'_3)$ is an inertial frame; its chart satisfies $x'(r)=B(\beta)x(r)$ ([[lem-boost-is-proper-orthochronous-with-inverse]], [[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-inertial-frame-and-inertial-chart]], [[def-lorentz-map-and-lorentz-group]]).

[L4] A displacement is spacelike iff $\eta(D,D)>0$ and timelike iff $\eta(D,D)<0$; for a timelike displacement with negative time component the reversed displacement has positive time component dominating its spatial part, giving $A_0\in J^+(A_1)$ by [L1] ([[def-causal-classification-of-lorentz-vectors]]).

## Verification

**Proof technique:** direct.

1.1 The reception event $B_1$ has $ut=x^1=L+vt$, so $t(B_1)=L/(u-v)=1/((2-\frac{9}{10})c)=\frac{10}{11c}$ s and $x^1(B_1)=ut(B_1)=\frac{20}{11}$ m; the displacement is $B_1-A_0=(c\,t(B_1),x^1(B_1),0,0)=(\frac{10}{11},\frac{20}{11},0,0)$ m, with $\eta(D,D)=-(\frac{10}{11})^2+(\frac{20}{11})^2=\frac{300}{121}>0$ and $D^0>0$, so it is spacelike with positive time component in $x$; this is (a). [given, L4, algebra]

2.1 With $\beta=v/c=9/10$, the basis $e'_a=B(\beta)^{-1}e_a$ is the basis of an inertial frame by [L3], and its chart satisfies $x'=B(\beta)x$ with inverse $x=B(-\beta)x'$, that is $x^0=\gamma(x'^0+\beta x'^1)$, $x^1=\gamma(x'^1+\beta x'^0)$; moreover $\gamma=(1-81/100)^{-1/2}=(19/100)^{-1/2}=10/\sqrt{19}$. [step 1.1, L2, L3, algebra]

3.1 In the chart $x'$ the worldline of $B$ is constant in $x'^1$, since $x'^1=\gamma(x^1-\frac{9}{10}x^0)=\gamma(L+vt-\frac{9}{10}ct)=\gamma L$; the return leg moves in the $-x'^1$ direction at coordinate speed $u$, so its displacement in $x'$ is $(c\,\Delta t',-u\,\Delta t')$ for a single $\Delta t'$, and applying the inverse formula of step 2.1 to its $x^1$-component gives $\Delta x^1=\gamma(\beta c\,\Delta t'-u\,\Delta t')=\gamma(v-u)\Delta t'$. [step 1.1, step 2.1, L2, L3, algebra]

4.1 The arrival event lies on the worldline $x^1=0$ of $A$, so $\Delta x^1=-x^1(B_1)=-\frac{20}{11}$ m, and step 3.1 gives $\Delta t'=x^1(B_1)/(\gamma(u-v))>0$; substituting into the time component of the inverse formula gives $\Delta t=\frac{\Delta x^0}{c}=\gamma\,\Delta t'\bigl(1-\frac{vu}{c^2}\bigr)=\frac{x^1(B_1)(1-vu/c^2)}{u-v}$, and with $vu/c^2=\frac{9}{10}\cdot 2=\frac{9}{5}$ this is $\frac{20}{11}\bigl(-\frac{4}{5}\bigr)\frac{10}{11c}=-\frac{160}{121c}$ s; this is (b). [step 3.1, L2, algebra]

5.1 Adding the two legs gives $t(A_1)=t(B_1)+\Delta t=\frac{10}{11c}-\frac{160}{121c}=\frac{110-160}{121c}=-\frac{50}{121c}$ s, and the closed formula $L(2u-v-vu^2/c^2)/(u-v)^2$ evaluates as $\bigl(4c-\frac{9}{10}c-\frac{9}{10}\cdot 4c\bigr)/(\frac{11}{10}c)^2=(-\frac{c}{2})/(\frac{121}{100}c^2)=-\frac{50}{121c}$ s, the same number. The displacement $A_1-A_0=(-\frac{50}{121},0,0,0)$ m has $\eta=-\bigl(\frac{50}{121}\bigr)^2<0$, so it is timelike, and the reversed displacement $A_0-A_1=(\frac{50}{121},0,0,0)$ has time component $\frac{50}{121}>0=|D_s|$, so $A_0\in I^+(A_1)$ by [L1]: the arrival is in the strict chronological past of the emission. The return displacement in $x$ is $(-\frac{160}{121},-\frac{220}{121},0,0)$ m because its $x^1$-component is $-\frac{20}{11}=-\frac{220}{121}$ m, and its interval is $\eta=-\bigl(\frac{160}{121}\bigr)^2+\bigl(\frac{220}{121}\bigr)^2>0$, so it is spacelike; this is (c). [step 1.1, step 4.1, L1, L4, algebra]

6.1 Steps 1.1 to 5.1 are an arithmetic specialization of the hypothetical fixed-speed relay model with its stated inputs, and no step uses any property beyond the Lorentz kinematics of the boost and the causal classification of the two displacements; the reception of the relayed signal strictly before its emission in the chart of the emitter is therefore a conditional conclusion of that model, not a report of a measurement and not an assertion that superluminal signals or the devices realizing the relay exist; this is (d). [step 5.1, given] ∎
