---
id: cex-sr-spacelike-time-order-is-not-absolute
kind: counterexample
title: "Counterexample: the temporal order of a spacelike-separated pair is not the same in every inertial frame"
status: draft
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [lem-sr-spacelike-pairs-have-frame-dependent-time-order, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, thm-sr-future-cone-and-flat-domain-of-dependence, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse]
dependency_roles:
  lem-sr-spacelike-pairs-have-frame-dependent-time-order: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
dependency_level: 12
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
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement refuted

**False claim.** For any two distinct events $p,q$ of the affine Minkowski
model, the sign of the time-coordinate difference $x^0(q)-x^0(p)$ is
independent of the inertial frame
([[def-inertial-frame-and-inertial-chart]]).

## Facts & Assumptions

**Given:** An inertial frame with chart $x$, the events $p=x^{-1}(0,0,0,0)$ and $q=x^{-1}(11,13,0,0)$, and the displacement $D=q-p$ with coordinates $(11,13,0,0)$.

[L1] For a spacelike displacement $|D^0|<|D_s|$ holds in every inertial chart, and for every $|b|<1$ the chart $x_b$ of the inertial frame with basis $B(be_1)^{-1}e_a$ (same origin) satisfies $x_b=B(be_1)\circ x$ and $x_b^0(q)-x_b^0(p)=\gamma_b(D^0-b|D_s|)$ with $\gamma_b=(1-b^2)^{-1/2}$ ([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]).

[L2] For $|b|<1$ the passive boost acts in the $(0,1)$-plane by $x'^0=\gamma(x^0-bx^1)$, $x'^1=\gamma(x^1-bx^0)$ and is a proper orthochronous Lorentz map ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L3] Diagonal form and classification: $\eta(D,D)=-(D^0)^2+|D_s|^2$; a nonzero vector with positive squared norm is spacelike ([[def-causal-classification-of-lorentz-vectors]]).

[L4] Time monotonicity: for every piecewise $C^1$ future causal path that is nonconstant on $[a',b']$, every inertial chart gives $(x^0\circ y)(b')>(x^0\circ y)(a')$; and for $q\ne p$ with $q\in J^+(p)$ the straight path from $p$ to $q$ is a future causal path ([[thm-sr-future-cone-and-flat-domain-of-dependence]]).

[L5] The false claim of the statement refuted section.

## Counterexample

**Proof technique:** direct.

1.1 The displacement has coordinates $D=(11,13,0,0)$, so $\eta(D,D)=-121+169=48>0$ and $|D^0|=11<13=|D_s|$; by [L3] the displacement is spacelike, so [L1] applies to the pair. [given, L1, L3, algebra]

2.1 With $b=3/5$, admissible since $|b|<1$, one has $\gamma_b=(1-9/25)^{-1/2}=5/4$, so the chart $x_{3/5}$ of the inertial frame of [L1] satisfies $x_{3/5}^0(q)-x_{3/5}^0(p)=\gamma_b(11-13b)=(5/4)(11-39/5)=(5/4)(16/5)=4>0$. [step 1.1, L1, L2, algebra]

2.2 With $b=12/13$, admissible since $|b|<1$, one has $\gamma_b=(1-144/169)^{-1/2}=13/5$, so $x_{12/13}^0(q)-x_{12/13}^0(p)=\gamma_b(11-13b)=(13/5)(11-12)=-13/5<0$. [step 1.1, L1, L2, algebra]

3.1 The charts $x_{3/5}$ and $x_{12/13}$ are charts of inertial frames of the model by [L1] and [L2], and they assign to the same pair of events $(p,q)$ time-coordinate differences of opposite sign by steps 2.1 and 2.2; the claim of [L5] is therefore false. The failure is confined to spacelike-separated pairs: if $q\ne p$ with $q-p$ future causal, then [L4] gives the straight path from $p$ to $q$ as a nonconstant future causal path, so every inertial chart gives $x^0(q)-x^0(p)>0$; no choice principle is used. [step 1.1, step 2.1, step 2.2, L1, L4, L5] ∎
