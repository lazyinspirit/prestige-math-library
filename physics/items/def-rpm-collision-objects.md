---
id: def-rpm-collision-objects
kind: definition
title: "Finite event collisions and observer quantities"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-sr-collision-datum-and-conservation
  - def-rpm-spacetime-observer-and-worldline
  - def-rpm-mechanical-momentum-and-observer-energy
dependency_roles:
  def-sr-collision-datum-and-conservation: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Finite event-local collision data for classical point particles and ideal null legs in the adopted flat relativistic-particle model; no interaction law, collision occurrence, probability, or curved-spacetime total-energy claim."
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.06%3A_Conservation_of_Momenergy_and_Its_Consequences"
verification:
  precheck: n/a
---

## Definition

Use the flat oriented, time-oriented affine Minkowski model, signature $(-,+,+,+)$, and SI convention $x^0=ct$ of [[def-rpm-spacetime-observer-and-worldline]]. A **relativistic-particle-mechanics collision configuration** is a mass-specified causal collision datum of [[def-sr-collision-datum-and-conservation]]: an event $p\in A$, a finite nonempty incoming list $P_1,\ldots,P_N\in V$, and a finite nonempty outgoing list $P'_1,\ldots,P'_K\in V$, where every leg is a nonzero future-causal vector in the same displacement space $V$. A massive leg has a recorded mass $m>0$ and the massive-sector momentum of [[def-rpm-mechanical-momentum-and-observer-energy]]; a null leg has recorded mass $0$ and is a nonzero future-null vector with its scale specified independently. The definition does not identify a null momentum with $mU$ at $m=0$.

The side totals are the finite vector sums $Q_{\rm in}:=\sum_{i=1}^N P_i$ and $Q_{\rm out}:=\sum_{j=1}^K P'_j$. All legs are attached to the same event, so the sums compare vectors in one affine displacement space; no transport between different events is part of the datum. The adjective **isolated** is reserved for a model condition used by the postulate below: no external four-momentum transfer during the idealized event and no omitted incoming or outgoing leg.

At an event, an **observer** is a future unit timelike vector $n$ with $\eta(n,n)=-1$, and its rest space is $n^\perp=\{v\in V:\eta(v,n)=0\}$, as in [[def-rpm-spacetime-observer-and-worldline]]. Observer energy $E_n(P):=-c\eta(P,n)$ and spatial momentum $q_n(P):=P+\eta(P,n)n\in n^\perp$ are those of [[def-rpm-mechanical-momentum-and-observer-energy]]. Their units are joules and kilogram metres per second. An inertial laboratory means one named inertial chart and its time-axis observer; it is not a general observer congruence or an arbitrary coordinate chart.
