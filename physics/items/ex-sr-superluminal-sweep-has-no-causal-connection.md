---
id: ex-sr-superluminal-sweep-has-no-causal-connection
kind: example
title: "A prearranged sweep with superluminal coordinate speed: successive events are spacelike separated and can be made simultaneous"
status: draft
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-sr-spacelike-pairs-have-frame-dependent-time-order, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-sr-causal-reachability-in-affine-minkowski-space, def-lorentz-boost, def-causal-classification-of-lorentz-vectors, def-inertial-frame-and-inertial-chart]
dependency_roles:
  lem-sr-spacelike-pairs-have-frame-dependent-time-order: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
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

Worked computation in the chart $x$ of an inertial frame with $x^0$ in metres
and $c>0$ ([[def-inertial-frame-and-inertial-chart]]). Fix $w>c$ and consider
the family
$$E_\xi:=x^{-1}\Bigl(\tfrac{c}{w}\xi,\ \xi,\ 0,\ 0\Bigr),\qquad \xi\in\mathbb R,$$
a prearranged array of devices at $x^1=\xi$ triggered at coordinate time
$t=\xi/w$, so the pattern is a sweep of coordinate speed $w>c$ along the row.

**(a)** For $\xi<\eta$ the displacement is
$$E_\eta-E_\xi=\Bigl(\tfrac{c}{w}(\eta-\xi),\ \eta-\xi,\ 0,\ 0\Bigr),$$
whose interval is $(\eta-\xi)^2(1-c^2/w^2)>0$, so successive events are
spacelike separated; in particular no event $E_\eta$ lies in $J^+(E_\xi)$ or
$J^-(E_\xi)$ for $\eta\ne\xi$, by the coordinate criterion
([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

**(b)** Let $b:=c/w\in(0,1)$. The passive boost with parameter $be_1$
([[def-lorentz-boost]]) maps the displacement to time component
$\gamma_b\bigl(\tfrac{c}{w}(\eta-\xi)-b(\eta-\xi)\bigr)=\gamma_b(\eta-\xi)(\tfrac{c}{w}-\tfrac{c}{w})=0$,
so in the boosted chart $x_b$ the whole family consists of events simultaneous
at one coordinate time; taking $b>c/w$ produces the opposite sign
$\gamma_b(\eta-\xi)(\tfrac{c}{w}-b)$, so the apparent temporal order of the
sweep runs forward, frozen or backward in different inertial frames even though
no event of the family is causally related to another
([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

**(c)** No signal statement is made or needed: the computation is a property of
the spacetime locations of independently triggered events, and it exhibits the
class of spacelike-separated patterns that a kinematic superluminal speed bound
cannot exclude. It is a statement about the locations of the events, it asserts
nothing about any of them being the reception of a signal, and it does not model
the fixed-speed relay kinematics of the hypothetical superluminal model treated
on the companion page.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and origin event $o=x^{-1}(0,0,0,0)$, a constant $c>0$, a real $w>c$, the family $E_\xi=x^{-1}((c/w)\xi,\xi,0,0)$ of events, and for $|b|<1$ the boost $B(be_1)$ with $\gamma_b=(1-b^2)^{-1/2}$.

[L1] For the spacelike pair $(E_0,E_1)$ with displacement $D=(c/w,1,0,0)$ and spatial unit direction $e_1$, and for every $|b|<1$, the chart $x_b$ of the inertial frame with the same origin $o$ and basis $e'_a:=B(be_1)^{-1}e_a$ satisfies $x_b=B(be_1)\circ x$ and $x_b^0(E_1)-x_b^0(E_0)=\gamma_b(D^0-b|D_s|)$; in general $|D^0|<|D_s|$ in every inertial chart ([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

[L2] The passive boost acts in the $(0,1)$-plane by $x'^0=\gamma(x^0-bx^1)$, $x'^1=\gamma(x^1-bx^0)$ and is linear in the coordinate column ([[def-lorentz-boost]]).

[L3] Diagonal form and classification: $\eta(D,D)=-(D^0)^2+|D_s|^2$, and $D$ is spacelike exactly when $\eta(D,D)>0$, timelike exactly when $\eta(D,D)<0$ ([[def-causal-classification-of-lorentz-vectors]]).

[L4] Coordinate criterion for reachability: for events $r,s$ with $D=x(s)-x(r)$, $s\in J^+(r)$ iff $D^0\ge|D_s|$, and $s\in J^-(r)$ iff $-D^0\ge|D_s|$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]], [[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L5] Chart linearity: $x(s)-x(r)=E^{-1}(s-r)$ for events $r,s$ ([[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct.

1.1 For $\xi<\eta$ the displacement of the family is $E_\eta-E_\xi=((c/w)(\eta-\xi),\eta-\xi,0,0)$ by [L5], so $\eta(E_\eta-E_\xi,E_\eta-E_\xi)=-(c/w)^2(\eta-\xi)^2+(\eta-\xi)^2=(\eta-\xi)^2(1-c^2/w^2)>0$ because $w>c$ and $\eta-\xi>0$; hence the displacement is spacelike by [L3]. For $\eta>\xi$ the first criterion of [L4] would require $(c/w)(\eta-\xi)\ge\eta-\xi$, which fails since $c/w<1$, and the second would require $-(c/w)(\eta-\xi)\ge\eta-\xi$, which also fails; the case $\xi>\eta$ is the same computation with the roles exchanged, so no event of the family lies in the causal future or past of another; this is (a). [given, L3, L4, L5, algebra]

2.1 Set $b:=c/w\in(0,1)$. The vector $E_1-E_0$ is spacelike by step 1.1, so [L1] applies with the origin event $o$ and gives the chart $x_b=B(be_1)\circ x$ of an inertial frame; by linearity [L2] and [L5], $x_b(E_\eta)-x_b(E_\xi)=B(be_1)(E_\eta-E_\xi)$, whose time component is $\gamma_b((c/w)(\eta-\xi)-b(\eta-\xi))=\gamma_b(\eta-\xi)(c/w-c/w)=0$ for all $\xi,\eta$; hence all events $E_\xi$ share the coordinate time $x_b^0$. For a parameter $b'>c/w$ with $b'<1$, which exists because $c/w<1$, the same computation gives $x_{b'}^0(E_\eta)-x_{b'}^0(E_\xi)=\gamma_{b'}(\eta-\xi)(c/w-b')$, of sign opposite to $\eta-\xi$; so the temporal order of the sweep runs forward in $x$, is frozen in $x_b$ and runs backward in $x_{b'}$; this is (b). [step 1.1, L1, L2, L5, algebra]

3.1 Steps 1.1 and 2.1 compute only the locations and coordinate differences of the family $E_\xi$ and the chart changes of those coordinate differences; the family is prearranged and independently triggered, no displacement of the family is causal in either direction, and nothing in the computation identifies an event $E_\xi$ with the reception of a signal or with the relay model of the companion page; the sweep is a kinematic pattern whose temporal order is frame-dependent without any causal relation among its events, and no choice principle is used. [step 1.1, step 2.1, given] ∎
