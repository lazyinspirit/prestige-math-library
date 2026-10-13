---
id: ex-sr-causal-classification-of-explicit-displacements
kind: example
title: "Worked coordinate criteria: four displacements classified by the future-cone inequalities"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-sr-causal-reachability-in-affine-minkowski-space, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart]
dependency_roles:
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
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
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

Worked computation in the chart $x$ of an inertial frame of an affine Minkowski
space with $\eta_0=\operatorname{diag}(-1,1,1,1)$
([[def-inertial-frame-and-inertial-chart]]). Put
$p:=x^{-1}(0,0,0,0)$ and, in order,

$$q_A:=x^{-1}(5,3,0,0),\quad q_B:=x^{-1}(5,5,0,0),\quad q_C:=x^{-1}(5,7,0,0),\quad q_D:=x^{-1}(5,-3,0,0),$$

with $D_A,D_B,D_C,D_D$ the corresponding displacements $q_\bullet-p$ and
$|D_{\bullet s}|$ the Euclidean norm of the spatial part. Then:

**(a) Future timelike.** $D_A=(5,3,0,0)$ has $D_A^0=5>3=|D_{A s}|$, so
$q_A$ lies in $I^+(p)$ ([[def-sr-causal-reachability-in-affine-minkowski-space]])
and $\eta(D_A,D_A)=-25+9=-16<0$ confirms that $D_A$ is future timelike
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]).

**(b) Future null.** $D_B=(5,5,0,0)$ has $D_B^0=|D_{B s}|=5>0$, so $q_B$ lies
in $J^+(p)$ but not in $I^+(p)$, and $D_B$ is future null.

**(c) Spacelike and causally unrelated.** $D_C=(5,7,0,0)$ has
$|D_C^0|=5<7=|D_{C s}|$, so $D_C$ is spacelike and $q_C$ lies in neither
$J^+(p)$ nor $J^-(p)$: the pair $(p,q_C)$ is causally unrelated.

**(d) Future timelike with past-directed companion.** $D_D=(5,-3,0,0)$ has
$\eta(D_D,D_D)=-25+9=-16<0$ and $D_D^0=5>0$, so $D_D$ is future timelike; the
past-directed companion is the event $q_E:=x^{-1}(-5,3,0,0)$, whose
displacement $(-5,3,0,0)$ has $\eta=-16<0$, time component $-5<0$ and
$|x_s|=3$, so $q_E$ lies in $I^-(p)$.

**(e)** The strict inequality $D^0>|D_s|$, the equality $D^0=|D_s|>0$ and the
reversal $|D^0|<|D_s|$ of the coordinate criterion therefore separate, in this
single computation, the three causal characters of the displacement and the two
reachability relations; the numbers are exact integers and no measurement is
reported.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$, $\eta_0=\operatorname{diag}(-1,1,1,1)$, the events $p=x^{-1}(0,0,0,0)$, $q_A=x^{-1}(5,3,0,0)$, $q_B=x^{-1}(5,5,0,0)$, $q_C=x^{-1}(5,7,0,0)$, $q_D=x^{-1}(5,-3,0,0)$ and $q_E=x^{-1}(-5,3,0,0)$.

[L1] Coordinate criterion: for events $p,q$ with $D=x(q)-x(p)$, $q\in J^+(p)$ iff $D^0\ge|D_s|$, and $q\in I^+(p)$ iff $D^0>|D_s|$; moreover $q\in J^-(p)$ iff $p\in J^+(q)$ iff the displacement $p-q$ satisfies $(p-q)^0\ge|(p-q)_s|$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]], [[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L2] Diagonal form: $\eta(D,D)=-(D^0)^2+|D_s|^2$ for coordinate differences $D$; a displacement is timelike iff $\eta(D,D)<0$, null iff $D\ne 0$ and $\eta(D,D)=0$, spacelike iff $\eta(D,D)>0$, and future-directed causal displacements are exactly the nonzero displacements with $D^0\ge|D_s|$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

## Verification

**Proof technique:** direct.

1.1 The four displacements are $D_A=(5,3,0,0)$, $D_B=(5,5,0,0)$, $D_C=(5,7,0,0)$ and $D_D=(5,-3,0,0)$ by the linearity clause of the inertial chart, with spatial norms $3$, $5$, $7$ and $3$; the companion displacement is $D_E=q_E-p=(-5,3,0,0)$ with spatial norm $3$. [given, L2, algebra]

2.1 $D_A$: $D_A^0=5>3=|D_{A s}|$, so $q_A\in I^+(p)$ by [L1] and $\eta(D_A,D_A)=-25+9=-16<0$ makes $D_A$ future timelike by [L2]; this is (a). [step 1.1, L1, L2, algebra]

2.2 $D_B$: $D_B^0=5=|D_{B s}|>0$, so $q_B\in J^+(p)$ and $q_B\notin I^+(p)$ by [L1], and $\eta(D_B,D_B)=-25+25=0$ with $D_B\ne 0$ makes $D_B$ future null by [L2]; this is (b). [step 1.1, L1, L2, algebra]

2.3 $D_C$: $|D_C^0|=5<7=|D_{C s}|$ gives $\eta(D_C,D_C)=-25+49=24>0$, so $D_C$ is spacelike by [L2]; the criterion $D^0\ge|D_s|$ fails for both $D_C$ and $-D_C=p-q_C$, that is $D_C^0\ge|D_{C s}|$ is false and $(p-q_C)^0=-5\ge|D_{C s}|=7$ is false, so $q_C\in J^+(p)$ and $q_C\in J^-(p)$ both fail by [L1], and the pair is causally unrelated; this is (c). [step 1.1, L1, L2, algebra]

2.4 $D_D$: $D_D^0=5>3=|D_{D s}|$ with $\eta(D_D,D_D)=-25+9=-16<0$ makes $D_D$ future timelike and $q_D\in I^+(p)$ by [L1] and [L2]. For the companion, the displacement from $p$ to $q_E$ is $D_E=(-5,3,0,0)$, whose reversed displacement $(p-q_E)$ has time component $5>|(p-q_E)_s|=3$, so $p\in I^+(q_E)$, that is $q_E\in I^-(p)$, by [L1]; moreover $\eta(D_E,D_E)=-25+9=-16<0$ with time component $-5<0$ exhibits a past timelike displacement; this is (d). [step 1.1, L1, L2, algebra]

3.1 Steps 2.1, 2.2 and 2.3 exhibit the three cases of the criterion (strict inequality, equality with positive time component, and failure in both directions), while step 2.4 exhibits a future timelike displacement together with a past-directed companion; all values are exact integers obtained from the diagonal form and the criterion, and no physical measurement or empirical claim is involved. [step 2.1, step 2.2, step 2.3, step 2.4] ∎
