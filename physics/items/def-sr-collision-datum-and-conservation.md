---
id: def-sr-collision-datum-and-conservation
kind: definition
title: "Collision data and four-momentum conservation"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-total-four-momentum-and-invariant-mass
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-sr-four-velocity-and-four-acceleration
  - def-finite-sum-in-a-commutative-monoid
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (collision of two objects, collision invariants, centre-of-mass frame) and p. 94 (the initial and final total momentum in a process)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 30 (local stress-energy conservation, contextual only; finite collision balance is separately adopted)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Throughout, $(A,V,\eta,C^+)$ is the oriented time-oriented affine Minkowski
model of [[def-sr-affine-minkowski-model]] and $c>0$.

**(a) Collision datum and conservation.** A **collision datum** is a triple
$(p;(P_1,\dots,P_N);(P'_1,\dots,P'_K))$ consisting of an event $p\in A$, a
finite nonempty list $(P_1,\dots,P_N)$, $N\ge1$, of vectors of $V$, called the
incoming legs, and a finite nonempty list $(P'_1,\dots,P'_K)$, $K\ge1$, of
vectors of $V$, called the outgoing legs. Its **side totals** are the finite
sums of [[def-finite-sum-in-a-commutative-monoid]] in the additive group
$(V,+)$, formed as in [[def-sr-total-four-momentum-and-invariant-mass]]:

$$Q_{\mathrm{in}}:=\sum_{i=1}^{N}P_i,\qquad Q_{\mathrm{out}}:=\sum_{j=1}^{K}P'_j .$$

The datum **conserves** when $Q_{\mathrm{in}}=Q_{\mathrm{out}}$. The two sides
are compared only through these totals: if two data have the same incoming
legs and the same outgoing legs, their conservation behaviour is the same, and
for a datum with a single leg on each side conservation is exactly
$P_1=P'_1$.

**(b) Legs, mass data and mass sums.** A leg $P$ is **massive with mass**
$m>0$ if there is a future timelike $U\in V$ with $\eta(U,U)=-c^2$ (the
four-velocity normalisation of [[def-sr-four-velocity-and-four-acceleration]])
and $P=mU$; a leg is **null** if it is a nonzero future null vector
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]). For a massive leg both $U$
and $m$ are determined by $P$: $\eta(P,P)=-m^2c^2$ forces
$m=\sqrt{-\eta(P,P)}/c$, the invariant mass $m(P)$ of
[[def-sr-observed-energy-momentum-and-kinetic-energy]], and then $U=P/m$; so
the recorded mass of a massive leg is necessarily its invariant mass. A datum
is **on-shell** if every leg is massive or null; a **mass-specified** datum is
an on-shell datum together with the recorded mass $m>0$ of each massive leg
and the recorded value $0$ for each null leg. The **mass sum** of a side of a
mass-specified datum is the sum of the recorded positive masses of its
massive legs, and the side is **massive-only** if all its legs are massive.

**(c) Special classes of data.** A datum is **causal** if every leg lies in
$\mathrm{cl}(C^+)$; **two-leg** if $N=K=2$; and **equal-mass** if, in addition
to being mass-specified and two-leg, the recorded masses agree pair by pair, that is the
incoming masses $(m_1,m_2)$ equal the outgoing masses $(m'_1,m'_2)$ under the
identification of the pairing.

**(d) Scope.** The definition is purely mathematical: it neither asserts that
any datum describes a physical process, nor that a conserving datum exists for
a prescribed list of legs, nor any law of nature. Position, simultaneity,
mechanism and interaction strength are not part of a datum; only the event,
the two finite lists and, for mass-specified data, their recorded masses are. In particular
conservation here is an equation between two vectors of $V$ and is not the
adopted conservation law of a physical model, which is a separate postulate;
the existence question for prescribed masses is answered only in special
cases by [[lem-sr-collision-necessary-conditions]]. No choice principle is
used.
