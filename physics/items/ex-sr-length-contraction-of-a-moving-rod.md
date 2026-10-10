---
id: ex-sr-length-contraction-of-a-moving-rod
kind: example
domain: mathematics
title: "Worked length contraction of a rod of rest length 5 at speed 3c/5"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-sr-boost-time-length-and-velocity-formulas, def-lorentz-boost, def-sr-simultaneity-slice-and-rest-distance, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model]
dependency_roles:
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

In an inertial chart $x$ let the chart $x'$ be related to $x$ by a boost of speed $v=3c/5$ along the first spatial axis, $\gamma=5/4$, so that $x'^0=\tfrac54\bigl(x^0-\tfrac35x^1\bigr)$ and $x'^1=\tfrac54\bigl(x^1-\tfrac35x^0\bigr)$ ([[lem-sr-boost-time-length-and-velocity-formulas]], [[def-lorentz-boost]]). Let $L_0=5$ and let the rod at rest in $x'$ have endpoints on the worldlines $x'^1=0$ and $x'^1=5$, with vanishing transverse coordinates. Solving the transition for $x^1$ as a function of $x^0$ gives $x^1=\tfrac35x^0$ on the first worldline and $x^1=\tfrac35x^0+4$ on the second, so at every equal $x$-time the endpoints are separated by $4=L_0/\gamma$ in the frame $x$. Explicit witness: the events $p:=x^{-1}(5,3,0,0)$ and $r:=x^{-1}(5,7,0,0)$ are simultaneous in $x$ (both have $x^0=5$) and separated by $4$; their $x'$-coordinates are $x'(p)=(4,0,0,0)$ and $x'(r)=(1,5,0,0)$, so they are not simultaneous in $x'$ but their $x'$-separation is $5=L_0$. Comparing events at equal $x'$-time instead: the events of the two worldlines with $x'^0=4$ are $x^{-1}(5,3,0,0)$ and $x^{-1}(35/4,37/4,0,0)$, the second of which has $x'^1=5$; at equal $x'$-time $4$ the endpoints are separated by $5$, the rest length. Thus the frame $x$ assigns length $4$ to a rod of rest length $5$ at rest in $x'$, exactly the contraction $L_0/\gamma$ of clause (ii) of [[lem-sr-boost-time-length-and-velocity-formulas]], and the comparison uses the simultaneity slice of the measuring frame in the sense of [[def-sr-simultaneity-slice-and-rest-distance]].

## Facts & Assumptions

**Given:** Two inertial charts $x$, $x'$ of the affine Minkowski model related by the boost of speed $v=3c/5$ along the first axis with $\gamma=5/4$, the number $L_0=5$, the two worldlines $x'^1=0$ and $x'^1=5$ at rest in $x'$ with zero transverse coordinates, and the witness events $p=x^{-1}(5,3,0,0)$, $r=x^{-1}(5,7,0,0)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L1] The transition is $x'^0=\gamma\bigl(x^0-\tfrac35x^1\bigr)$, $x'^1=\gamma\bigl(x^1-\tfrac35x^0\bigr)$, $x'^2=x^2$, $x'^3=x^3$ with $\gamma=5/4$ ([[lem-sr-boost-time-length-and-velocity-formulas]], [[def-lorentz-boost]]).

[L2] Length comparison (clause (ii) of [[lem-sr-boost-time-length-and-velocity-formulas]]): two worldlines at rest in $x'$ with $x'$-separation $L_0$ have $x$-separation $L_0/\gamma$ at equal $x$-times, while at equal $x'$-times their $x'$-separation is $L_0$.

[L3] Simultaneity relative to a chart is equality of the chart's time coordinate, and the events simultaneous with $p$ in the frame $x$ are the slice $H(p,e_0)$ of the measuring frame ([[def-sr-simultaneity-slice-and-rest-distance]], [[def-inertial-frame-and-inertial-chart]]).

## Verification

**Proof technique:** direct.

1.1 On the worldline $x'^1=\ell$ the transition reads $\gamma(x^1-\tfrac35x^0)=\ell$, so $x^1=\tfrac35x^0+\ell/\gamma=\tfrac35x^0+\tfrac45\ell$; for $\ell=0$ this is $x^1=\tfrac35x^0$ and for $\ell=L_0=5$ it is $x^1=\tfrac35x^0+4$. Hence at every fixed $x^0$ the $x$-separation of the two worldlines is $4=L_0/\gamma$ as asserted. [L1, L2, algebra]

1.2 The witness events: $x'(p)=\bigl(\tfrac54(5-\tfrac35\cdot3),\tfrac54(3-\tfrac35\cdot5),0,0\bigr)=(4,0,0,0)$ and $x'(r)=\bigl(\tfrac54(5-\tfrac35\cdot7),\tfrac54(7-\tfrac35\cdot5),0,0\bigr)=(1,5,0,0)$; the first lies on $x'^1=0$ and the second on $x'^1=5$, both have $x^0=5$ hence are simultaneous in $x$ and separated by $7-3=4$; their $x'$-times $4$ and $1$ differ, their $x'$-separation is $5$. [L1, L3, algebra]

1.3 Equal $x'$-time comparison: on the second worldline, $x'^0=\tfrac54\bigl(x^0-\tfrac35(\tfrac35x^0+4)\bigr)=\tfrac45x^0-3$; setting $x'^0=4$ gives $x^0=35/4$ and then $x^1=\tfrac35\cdot\tfrac{35}{4}+4=\tfrac{37}{4}$, so the two events $x^{-1}(5,3,0,0)$ and $x^{-1}(35/4,37/4,0,0)$ have equal $x'$-time $4$; their $x'^1$-coordinates are $0$ and $5$, so at equal $x'$-time the separation is the rest length $5$. [L1, L2, algebra]

2.1 Conclusion: the frame $x$ assigns to the rod the length $4$ at its own equal-$x$-time slice, which is exactly $L_0/\gamma=5/(5/4)=4$ of clause (ii) of [L2]; the same pair of worldlines has $x'$-separation $5$ at equal $x'$-times, and the witness events show explicitly that the equal-$x$ and the equal-$x'$ comparisons involve different pairs of events. This verifies the length contraction formula and the role of the measuring frame's simultaneity slice. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Which events are being compared.** The two witness events of step 1.2 are simultaneous in $x$ and not in $x'$, while the two events of step 1.3 are simultaneous in $x'$ and not in $x$; the contracted and the rest lengths therefore refer to different pairs of events on the same two worldlines, which is exactly the content of clause (ii) of [[lem-sr-boost-time-length-and-velocity-formulas]].

- **No optical claim.** The length $4$ assigned by $x$ is the distance of the rod's endpoints on a simultaneity slice of $x$; it is not an appearance or a photograph, and no light-propagation or measurement model is involved.
