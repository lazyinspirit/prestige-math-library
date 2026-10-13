---
id: def-sr-total-four-momentum-and-invariant-mass
kind: definition
title: "Total four-momentum, invariant mass and center-of-momentum frame of a finite system"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-finite-sum-in-a-commutative-monoid
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-rational-power
  - def-inertial-frame-and-inertial-chart
  - def-sr-four-velocity-and-four-acceleration
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-rational-power: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (total energy-momentum and centre-of-mass frame, total mass M = E_cm)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 30, equation (1.113) and its discussion (local stress-energy conservation, contextual only; finite collision balance is separately adopted)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 7.4 printed p. 86 (centre-of-momentum frame Pi = 0, total energy equals the total mass)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Definition

Throughout, $(A,V,\eta,C^+)$ is the oriented time-oriented affine Minkowski
model of [[def-sr-affine-minkowski-model]] and $c>0$.

**(a) Total four-momentum.** For a finite list $(P_1,\dots,P_N)$, $N\ge0$, of
vectors of $V$, define the **total four-momentum**
$P_{\mathrm{tot}}:=\sum_{i=1}^{N}P_i$ as the finite sum of
[[def-finite-sum-in-a-commutative-monoid]] in the additive group $(V,+)$ of
the vector space $V$; the empty sum is $0$. The sum uses the vectors $P_i$
alone: no event, no position and no simultaneity datum enters it, and the
order of the list does not affect $P_{\mathrm{tot}}$ because addition in $V$
is commutative.

**(b) Invariant mass of the total.** If $P_{\mathrm{tot}}$ is future timelike
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]), define the **invariant
mass** of the system and its **rest energy** by

$$M:=M(P_{\mathrm{tot}}):=\frac{\sqrt{-\eta(P_{\mathrm{tot}},P_{\mathrm{tot}})}}{c}>0$$

and its rest energy is $Mc^2$.

The square root is a real number because
$\eta(P_{\mathrm{tot}},P_{\mathrm{tot}})<0$ for a timelike vector, and it is
strictly positive, so $M>0$ ([[def-rational-power]]). If
$P_{\mathrm{tot}}$ is future null, set $M:=0$ and say that the system has no
rest frame. For $P_{\mathrm{tot}}$ equal to zero, spacelike or past causal,
this convention defines no invariant mass.

**(c) Center-of-momentum frame.** A **center-of-momentum frame** of a nonzero
$P_{\mathrm{tot}}$ is an inertial frame $(o;e_0,e_1,e_2,e_3)$
([[def-inertial-frame-and-inertial-chart]]) whose first vector satisfies

$$h_{e_0}(P_{\mathrm{tot}})=0,\qquad h_{e_0}(v):=v+\eta(v,e_0)e_0\quad(v\in V),$$

where the projection is defined on all of $V$; for a future causal total this
is $q_{e_0}(P_{\mathrm{tot}})=0$, meaning that its total spatial momentum
vanishes for the observer stationary in the frame
([[def-sr-observed-energy-momentum-and-kinetic-energy]]). The condition is equivalent to
$P_{\mathrm{tot}}=-\eta(P_{\mathrm{tot}},e_0)e_0$, i.e. to
$P_{\mathrm{tot}}\in\mathrm{span}(e_0)$; if $P_{\mathrm{tot}}$ is future
timelike this holds exactly when $P_{\mathrm{tot}}=\lambda e_0$ with
$\lambda>0$, and then $E_{e_0}(P_{\mathrm{tot}})=Mc^2$ for $M$ as in (b).

**(d) Comparison with the single-vector convention.** For a single future
timelike vector $P$, the invariant mass $M$ of (b) coincides with $m(P)$ of
[[def-sr-observed-energy-momentum-and-kinetic-energy]]; in particular if
$P=mU$ with $m>0$ and $\eta(U,U)=-c^2$ (the four-velocity normalisation of
[[def-sr-four-velocity-and-four-acceleration]]), then $M=m$. Both quantities
are functions of the scalar $\eta(P,P)$ alone.

**(e) Scope.** This definition asserts no existence of a center-of-momentum
frame (that is [[lem-sr-center-of-momentum-frame]]), no physical conservation
law and no dynamics; only the total vector carries the invariant mass, and the
individual summands need not be causal for the sum to be defined. No choice
principle is used.
