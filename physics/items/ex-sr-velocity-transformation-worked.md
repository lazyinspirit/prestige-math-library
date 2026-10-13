---
id: ex-sr-velocity-transformation-worked
kind: example
domain: mathematics
title: "Worked velocity transformation: collinear, transverse and null cases"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-sr-boost-time-length-and-velocity-formulas, def-lorentz-boost, def-inertial-frame-and-inertial-chart]
dependency_roles:
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Let $x$ and $x'$ be inertial charts related by a boost of parameter $v=3c/5$ along the first axis ($\gamma=5/4$, [[def-lorentz-boost]], [[def-inertial-frame-and-inertial-chart]]).

(a) **Collinear case.** A worldline with coordinate velocity $w=(4c/5,0,0)$ in $x$ has, by clause (iv) of [[lem-sr-boost-time-length-and-velocity-formulas]], $w'_1=(4c/5-3c/5)/(1-(3/5)(4/5))=(c/5)/(13/25)=5c/13$, so $|w'|=5c/13<c$; the Galilean difference $c/5$ is not the transformed velocity.

(b) **Transverse case.** A worldline with $w=(0,c/2,0)$ has $w'_1=(0-3c/5)/(1-0)=-3c/5$ and $w'_2=(c/2)/((5/4)(1-0))=2c/5$, hence $|w'|=\sqrt{9/25+4/25}\,c=(\sqrt{13}/5)c<c$.

(c) **Null limit.** For $w=(c,0,0)$ the formula gives $w'_1=(c-3c/5)/(1-3/5)=c$ and $|w'|=c$: a null worldline is null in every inertial chart.

In each case take the affine coordinate curve $t\mapsto(ct,wt)$ on $\mathbb R$ with the stated constant $w$; the first two are future timelike and the third future null. The three cases verify the velocity transformation and the subluminality statement of clause (iv) of [[lem-sr-boost-time-length-and-velocity-formulas]].

## Facts & Assumptions

**Given:** Two inertial charts $x$, $x'$ related by the boost of parameter $v=3c/5$ along the first axis with $\gamma=5/4$, and the three coordinate velocities $w=(4c/5,0,0)$, $w=(0,c/2,0)$, $w=(c,0,0)$ ([[def-lorentz-boost]], [[def-inertial-frame-and-inertial-chart]]).

[L1] Clause (iv) of [[lem-sr-boost-time-length-and-velocity-formulas]]: for a $C^1$ future causal curve with coordinate velocity $w$, $|w|\le c$, in the chart $x$, the coordinate velocity in $x'$ is $w'_1=(w_1-v)/(1-vw_1/c^2)$ and $w'_\perp=w_\perp/\bigl(\gamma(1-vw_1/c^2)\bigr)$, with positive denominators, and $|w'|<c$ for $|w|<c$, with $|w'|=c$ exactly when $|w|=c$.

[L2] The boost parameter is $\beta=v/c=3/5$ and $\gamma=(1-\beta^2)^{-1/2}=5/4$ ([[def-lorentz-boost]]).

## Verification

**Proof technique:** direct.

1.1 Collinear case: with $w_1=4c/5$, $w_\perp=0$, $v=3c/5$, the denominator of [L1] is $1-\tfrac35\cdot\tfrac45=1-\tfrac{12}{25}=\tfrac{13}{25}>0$ and $w'_1=\tfrac{c/5}{13/25}=\tfrac{5c}{13}$; hence $w'=(5c/13,0,0)$ and $|w'|=5c/13<c$ because $5/13<1$. The Galilean difference for this passive change of frame is $4c/5-3c/5=c/5$, which is not the transformed velocity. [L1, L2, algebra]

1.2 Transverse case: with $w_1=0$, $w_\perp=(c/2,0)$, the denominator is $1$ and [L1] gives $w'_1=(0-3c/5)/1=-3c/5$ and $w'_2=(c/2)/(\gamma\cdot1)=2c/5$, so $|w'|^2=(9/25+4/25)c^2=13c^2/25$ and $|w'|=(\sqrt{13}/5)c<c$ because $\sqrt{13}<5$. [L1, L2, algebra]

1.3 Null limit: with $w_1=c$ the denominator of [L1] is $1-3/5=2/5>0$ and $w'_1=(c-3c/5)/(2/5)=(2c/5)/(2/5)=c$, so $w'=(c,0,0)$ and $|w'|=c$; this is the equality case of the subluminality statement, consistent with $|w|=c$. [L1, L2, algebra]

2.1 Conclusion: steps 1.1-1.3 evaluate the transformation formula of [L1] in the three configurations and confirm $|w'|<c$ for subluminal $w$ and $|w'|=c$ in the null case; in particular the collinear case deviates from the Galilean difference by the relativistic denominator $1-vw_1/c^2$, and the transverse case exhibits the factor $1/\gamma$ in the perpendicular component. [step 1.1, step 1.2, step 1.3] ∎
