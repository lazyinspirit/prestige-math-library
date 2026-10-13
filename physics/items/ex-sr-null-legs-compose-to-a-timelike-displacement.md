---
id: ex-sr-null-legs-compose-to-a-timelike-displacement
kind: example
title: "Two nonparallel future null legs compose to a future timelike displacement"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, thm-sr-future-cone-and-flat-domain-of-dependence, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-sr-regular-causal-curve-and-worldline, def-spatial-euclidean-structure-of-an-inertial-frame, def-euclidean-inner-product]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  thm-sr-future-cone-and-flat-domain-of-dependence: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
dependency_level: 12
aliases: []
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation in the chart $x$ of an inertial frame
([[def-inertial-frame-and-inertial-chart]]). Let $p:=x^{-1}(0,0,0,0)$ and let
$x_{\mathrm{curve}}:[0,2]\to A$ be the piecewise straight path with
$$x_{\mathrm{curve}}(s)=x^{-1}(s,s,0,0)\ \ (s\in[0,1]),\qquad x_{\mathrm{curve}}(s)=x^{-1}(s,1,s-1,0)\ \ (s\in[1,2]).$$

**(a)** Both legs have constant future null tangents:
$\eta((1,1,0,0),(1,1,0,0))=-1+1=0$ and
$\eta((1,0,1,0),(1,0,1,0))=-1+1=0$, with positive time components.

**(b)** The total displacement is $D=(2,1,1,0)$ with
$\eta(D,D)=-4+1+1=-2<0$ and $D^0=2>0$, so $D$ is future timelike
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]) and the endpoint
$q:=x^{-1}(2,1,1,0)$ lies in $I^+(p)$ by the coordinate criterion
([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]), although
every tangent of the path is null.

**(c)** Consistently with the sum clause of the same lemma, the sum of the two
nonparallel future null vectors is future timelike, and the straight path from
$p$ to $q$, whose tangent is $D$, is a future timelike straight worldline by
[[thm-sr-future-cone-and-flat-domain-of-dependence]]. The path
$x_{\mathrm{curve}}$ is a future causal path whose displacement is strictly
timelike and whose tangents are nowhere timelike; the strict clause of part (a)
of that theorem is an implication from a timelike tangent to a timelike
displacement and not an equivalence, so no contradiction arises.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, the event $p=x^{-1}(0,0,0,0)$, the piecewise straight path $x_{\mathrm{curve}}$ with legs $x^{-1}(s,s,0,0)$ on $[0,1]$ and $x^{-1}(s,1,s-1,0)$ on $[1,2]$, and the endpoint $q=x^{-1}(2,1,1,0)$.

[L1] Diagonal form and classification: for coordinates $v=(v^0,v_s)$, $\eta(v,v)=-(v^0)^2+|v_s|^2$; a nonzero vector is null when $\eta(v,v)=0$, spacelike when $\eta(v,v)>0$, and timelike when $\eta(v,v)<0$; future null means nonzero null with positive time coordinate ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L2] Coordinate criterion and sums: $q\in I^+(p)$ iff $D^0>|D_s|$ for $D=x(q)-x(p)$, and the sum of finitely many future causal vectors is future causal, strictly timelike if one summand is future timelike ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]). The nonparallel null case is a local calculation, not an extra conclusion of that supplier: write the vectors $(a,p)$ and $(b,q)$ with $a=|p|>0$ and $b=|q|>0$. If they are not parallel, $p/a\ne q/b$, so $|p/a-q/b|^2=2-2(p\cdot q)/(ab)>0$ by the spatial Euclidean structure. Thus $\eta((a,p)+(b,q),(a,p)+(b,q))=2(p\cdot q-ab)=-ab|p/a-q/b|^2<0$, and the positive time component $a+b$ makes the sum future timelike. The spatial norm and scalar product are those of the named inertial frame ([[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-euclidean-inner-product]]).

[L3] Straight paths and reachability: the straight path $s\mapsto p+s(q-p)$ has constant tangent $q-p$, and for $q\ne p$ one has $q\in J^+(p)$ iff that straight path is a future causal path, with $I^+(p)$ characterized by the straight path being future timelike; part (a) of the theorem also says that a future causal path with a future timelike one-sided tangent has future timelike displacement ([[thm-sr-future-cone-and-flat-domain-of-dependence]], [[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L4] Piecewise $C^1$ curves: the concatenation of the two straight legs is a piecewise $C^1$ curve with constant tangents $(1,1,0,0)$ and $(1,0,1,0)$ on the open pieces and one-sided difference-quotient tangents equal to those vectors at every point of $[0,2]$ ([[def-sr-regular-causal-curve-and-worldline]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 The first leg $s\mapsto x^{-1}(s,s,0,0)$ has constant coordinate tangent $(1,1,0,0)$, whose squared norm is $-1+1=0$ with time component $1>0$, so it is future null by [L1]; the second leg $s\mapsto x^{-1}(s,1,s-1,0)$ has constant coordinate tangent $(1,0,1,0)$, whose squared norm is $-1+1=0$ with time component $1>0$, so it is future null too; both legs are straight and their endpoint values at $s=1$ agree, so $x_{\mathrm{curve}}$ is continuous with those one-sided tangents throughout by [L4]; this is (a). [given, L1, L4, algebra]

2.1 The total displacement is $D=q-p$ with coordinates $(2,1,1,0)$, namely the telescoping sum $(1,1,0,0)+(1,0,1,0)$ of the two constant tangents; then $\eta(D,D)=-4+1+1=-2<0$ and $D^0=2>0$, so $D$ is future timelike by [L1], and $D^0=2>\sqrt{2}=|D_s|$ shows $q\in I^+(p)$ by [L2]. [step 1.1, L1, L2, L4, algebra]

3.1 The two null tangents $(1,1,0,0)$ and $(1,0,1,0)$ are not parallel (neither is a multiple of the other, as their second and third components show), and their sum $D$ is future timelike by step 2.1, in agreement with the local nonparallel-null computation in [L2]; the straight path from $p$ to $q$ has the constant tangent $D$, which is future timelike, so it is a future timelike straight worldline and realizes the relation $q\in I^+(p)$ by [L3]. [step 1.1, step 2.1, L1, L2, L3, algebra]

4.1 The path $x_{\mathrm{curve}}$ is a piecewise $C^1$ future causal path by [L4] and step 1.1 whose displacement is future timelike by step 2.1 while none of its tangents is timelike; the strict clause of part (a) of [L3] (a future timelike one-sided tangent forces a timelike displacement) is therefore not an equivalence, and the computed example is consistent with both the sum clause of [L2] and the strict clause of the theorem; no choice principle is used. [step 1.1, step 2.1, step 3.1, L2, L3] ∎
