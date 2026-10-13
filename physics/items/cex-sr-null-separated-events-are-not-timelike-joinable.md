---
id: cex-sr-null-separated-events-are-not-timelike-joinable
kind: counterexample
title: "Counterexample: a causally related pair of events need not be joinable by a future timelike worldline"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [thm-sr-future-cone-and-flat-domain-of-dependence, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-sr-causal-reachability-in-affine-minkowski-space, def-causal-classification-of-lorentz-vectors, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart]
dependency_roles:
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
dependency_level: 12
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement refuted

**False claim.** If $q$ lies in $J^+(p)$ then $q$ lies in $I^+(p)$, that is,
every causally related pair of events can be joined by a future timelike
worldline ([[def-sr-causal-reachability-in-affine-minkowski-space]]).

## Facts & Assumptions

**Given:** An inertial frame with chart $x$, the events $p=x^{-1}(0,0,0,0)$ and $q=x^{-1}(3,3,0,0)$, and the displacement $D=q-p$ with coordinates $(3,3,0,0)$.

[L1] Coordinate criterion and cone description: $q\in J^+(p)$ iff $D^0\ge|D_s|$, and $q\in I^+(p)$ iff $D^0>|D_s|$; a vector $v$ is future null exactly when $|v_s|=v^0>0$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

[L2] Causal classification: $\eta(v,v)=-(v^0)^2+|v_s|^2$; a nonzero vector with $\eta(v,v)=0$ is null, and a vector with $\eta(v,v)>0$ is spacelike ([[def-causal-classification-of-lorentz-vectors]]).

[L3] Reachability: $J^+(p)$ and $I^+(p)$ are the causal and chronological futures of $p$ defined by the displacements $q-p\in\overline{C^+}$ and $q-p\in C^+$, and a future timelike worldline is a $C^1$ curve with future timelike tangent everywhere ([[def-sr-causal-reachability-in-affine-minkowski-space]], [[def-sr-regular-causal-curve-and-worldline]]).

[L4] Displacement of a future causal path: for a piecewise $C^1$ future causal path with a future timelike one-sided tangent at some point, the displacement lies in $C^+$ ([[thm-sr-future-cone-and-flat-domain-of-dependence]]).

[L5] The false claim of the statement refuted section.

## Counterexample

**Proof technique:** direct.

1.1 The displacement has coordinates $D=(3,3,0,0)$, so $\eta(D,D)=-9+9=0$ with $D\ne 0$ and $D^0=3>0$; by [L2] and [L1] the vector $D$ is future null, since $|D_s|=3=D^0>0$. [given, L1, L2, algebra]

2.1 By [L1], $3\ge 3$ gives $q\in J^+(p)$, while $3>3$ is false, so $q\notin I^+(p)$; hence the pair is causally related without belonging to the chronological relation, and the straight path from $p$ to $q$ has the constant tangent $D$, which is future null and not future timelike. [step 1.1, L1, L3, algebra]

2.2 No future timelike worldline $y:[a,b]\to A$ with $y(a)=p$ and $y(b)=q$ exists: if $y$ were one, it would be in particular a piecewise $C^1$ future causal path with a future timelike tangent at every point by [L3], so [L4] would put its displacement $q-p=D$ in $C^+$, and then [L2] would give $\eta(D,D)<0$, contradicting $\eta(D,D)=0$ from step 1.1. [step 1.1, L2, L3, L4]

3.1 Steps 2.1 and 2.2 exhibit a pair with $q\in J^+(p)$ and $q\notin I^+(p)$ that is not joinable by any future timelike worldline, while the null straight segment realizes the causal relation; the claim of [L5] is therefore false, and no choice principle is used. [step 2.1, step 2.2, L5] ∎
