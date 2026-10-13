---
id: def-sr-causal-reachability-in-affine-minkowski-space
kind: definition
title: "Causal reachability, causal futures and pasts, causal diamonds, and reachability by future causal paths in affine Minkowski space"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-affine-space-and-displacement, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-sr-regular-causal-curve-and-worldline, def-interval]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-affine-space-and-displacement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-interval: mathematical-premise
dependency_level: 8
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Throughout, $(A,V,\eta,C^+)$ is an oriented time-oriented affine Minkowski
space ([[def-sr-affine-minkowski-model]]): $A$ is a nonempty affine space over
the $4$-dimensional real vector space $V$ with displacement vectors $q-p$ and
translations $v \mapsto p+v$ ([[def-affine-space-and-displacement]]), and $C^+$
is one of the two connected components of the timelike set
$T=\{v\in V:\eta(v,v)<0\}$, chosen as the time orientation, with
$C^-:=T\setminus C^+$ the other component
([[def-time-orientation-and-future-causal-sets]]). Write
$\overline{C^+}:=\operatorname{cl}(C^+)$ and
$\overline{C^-}:=\operatorname{cl}(C^-)$ for the future and past closed cones.
A vector $v\in V$ is timelike, null, spacelike or causal according to the sign
of $\eta(v,v)$ as in [[def-causal-classification-of-lorentz-vectors]]; in
particular the zero vector is none of timelike, null or spacelike and hence is
not causal, and the causal vectors are exactly the nonzero elements of
$\overline{C^+}\cup\overline{C^-}$.

**The closed cones and their boundaries.** By
[[def-time-orientation-and-future-causal-sets]] the sets
$\overline{C^+}$ and $\overline{C^-}$ are convex cones with
$\overline{C^+}\cap\overline{C^-}=\{0\}$. By
[[lem-timelike-cone-has-two-convex-components]], applied in an
$\eta$-orthonormal basis whose first vector lies in $C^+$, the closure of the
component $\{v:v^0>|v_s|\}$ of the timelike set is
$\{v:v^0\ge|v_s|\}$ with boundary points exactly $0$ and the nonzero null
vectors of $\overline{C^+}$. Writing $N^+$ and $N^-$ for the sets of nonzero
future and past null vectors ([[def-time-orientation-and-future-causal-sets]]),
this gives

$$\overline{C^+}=C^+\cup N^+\cup\{0\},\qquad \overline{C^-}=C^-\cup N^-\cup\{0\}.$$

**The objects fixed by this definition.**

**(a) Causal and chronological reachability.** For events $p,q\in A$ set
$p\le q$ if and only if $q-p\in\overline{C^+}$, and $p<q$ if and only if
$q-p\in C^+$. The first relation is read "$q$ is causally reachable from $p$"
and the second "$q$ is strictly (chronologically) reachable from $p$"; both are
relations on the set of events, and neither is asserted here to have any
property beyond being a relation.

**(b) Futures and pasts.** For an event $p\in A$ set

$$J^+(p):=\{q\in A:p\le q\}=p+\overline{C^+},\qquad I^+(p):=\{q\in A:p<q\}=p+C^+,$$

$$J^-(p):=\{q\in A:q\le p\}=p+\overline{C^-},\qquad I^-(p):=\{q\in A:q<p\}=p+C^-.$$

The displayed equalities hold because $q\in J^+(p)$ says exactly that the
displacement $q-p$ lies in $\overline{C^+}$, that is $q=p+v$ for some
$v\in\overline{C^+}$; here $p+v$ is the affine translation of
[[def-affine-space-and-displacement]]. Since $0\in\overline{C^+}\cap\overline{C^-}$
one has $p\in J^+(p)\cap J^-(p)$, and since $0$ is not timelike one has
$p\notin I^+(p)$ and $p\notin I^-(p)$. The sets
$J^\pm(p)$ and $I^\pm(p)$ are called the causal and chronological future and
past of $p$.

**(c) Causal diamonds.** For events $p,q\in A$ with $p\le q$, the causal diamond
of the ordered pair $(p,q)$ is the set

$$J^+(p)\cap J^-(q)=\{r\in A:p\le r\le q\}.$$

The diamond is defined only under the hypothesis $p\le q$; some of its
properties are computed in the examples page of this pair.

**(d) Reachability by future causal paths.** A piecewise $C^1$ future causal
path is a piecewise $C^1$ curve $x:[a,b]\to A$ on a compact interval with
$a<b$ ([[def-interval]], [[def-sr-regular-causal-curve-and-worldline]]) all of
whose tangents are future causal: at every interior point of every open smooth
piece the tangent $x'(s)$ exists and is future causal, and at every partition
point of $[a,b]$ and at the endpoints $a$ and $b$ both one-sided
difference-quotient tangents that exist there exist and are future causal
vectors in the sense of [[def-causal-classification-of-lorentz-vectors]] and
[[def-time-orientation-and-future-causal-sets]]. For events $p,q\in A$, say
that $q$ is reachable from $p$ by a future causal path when $p=q$, or when
$p\ne q$ and there are real numbers $a<b$ and a piecewise $C^1$ future causal
path $x:[a,b]\to A$ with $x(a)=p$ and $x(b)=q$. Write $R^+(p)$ for the set of
events reachable from $p$ in this sense; thus $p\in R^+(p)$ by the first clause.

**(e) Conventions and scope.** All objects above are defined from the affine
structure of $A$, the form $\eta$ and the time orientation alone: no chart, no
choice of origin, no spatial orientation of $V$ and no unit convention enters
their definition. This item asserts no property of these objects
beyond their being well-defined sets and relations: the reflexivity of $\le$ is
part of (b), while the transitivity of $\le$, the identification
$R^+(p)=J^+(p)$, the antisymmetry "$p\le q$ and $q\le p$ imply $p=q$", the
monotonicity of inertial coordinate time along future causal paths and the
invariance of these objects under proper orthochronous affine Lorentz maps are
proved later on this page and are not used here. No choice principle is used:
all objects are subsets or finite data built from a finite-dimensional real
vector space.
