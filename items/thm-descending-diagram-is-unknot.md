---
id: thm-descending-diagram-is-unknot
kind: theorem
title: A descending based knot diagram represents the unknot
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-planar-code
  - alg-descending-diagram-unknotting-sequence
  - lem-one-extremum-arc-is-boundary-parallel
  - lem-knot-genus-zero-iff-unknot
  - thm-isotopy-extension
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Exercise 2.3.8(a), printed p. 24"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§4.2, printed pp. 34–36, based traversal convention"
---

## Statement

Assume the Axiom of Countable Choice. For every finite rational polygonal code that records one oriented circle, finitely many transverse double points, and one overpassing branch at each double point, and every basepoint in the interior of an edge, if the first encounter at each crossing is the overpassing branch, then the represented knot is ambient isotopic through orientation-preserving diffeomorphisms to the standard unknot.

## Statement references

[[def-knot-planar-code|Finite planar code and represented knot diagram]]

[[alg-descending-diagram-unknotting-sequence|The based traversal that produces a descending diagram]]

[[lem-one-extremum-arc-is-boundary-parallel]]

[[lem-knot-genus-zero-iff-unknot]]

## Facts & Assumptions

**Given:** AC$_\omega$, an admissible finite code $D$, its oriented diagram, and a basepoint in the interior of an edge.

[A1] The Axiom of Countable Choice, written AC$_\omega$. [[def-countable-choice]]

[F1] A valid code represents a smooth regular diagram after its finitely many bend vertices are smoothed; one base edge has a crossing-free subarc around the basepoint. [[def-knot-planar-code]]

[F2] Under AC$_\omega$, every smooth isotopy of embeddings of the compact source circle into the boundaryless $S^3$ extends to an ambient isotopy. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-isotopy-extension]]

[F3] A proper arc with one height maximum or minimum in a height ball bounds a disk with any prescribed simple boundary arc on its level sphere. [[lem-one-extremum-arc-is-boundary-parallel]]

[F4] A smooth oriented knot bounds a genus-zero spanning surface if and only if it is ambient isotopic to the standard unknot. [[lem-knot-genus-zero-iff-unknot]]

## Proof

**Given:** The code and hypotheses in the statement.


1.1 Cut the based circle at a small crossing-free subarc around the basepoint. Orient the cut subarc from the endpoint where the remaining long arc ends to the endpoint where it begins. Identify the plane with the equatorial sphere $S_0\subset S^3$ minus one point, and write the projected long arc as $\gamma(t)\in S_0$, $0\le t\le1$, and the cut subarc as $\delta(s)\in S_0$, $0\le s\le1$. Thus $\gamma(1)=\delta(0)$ and $\delta(1)=\gamma(0)$. Choose $a=1/2$ and lift these paths by
$$\widehat\gamma(t)=\bigl(\sqrt{1-a^2\cos^2(\pi t)}\,\gamma(t),\ a\cos(\pi t)\bigr),\qquad \widehat\delta(s)=\bigl(\sqrt{1-a^2\cos^2(\pi s)}\,\delta(s),\ -a\cos(\pi s)\bigr).$$
The first height strictly decreases from $a$ to $-a$ and the second strictly increases from $-a$ to $a$; their first derivatives vanish at the joins and their second derivatives match. Reparametrize the projected paths near their endpoints to match the smooth based-diagram jets. The resulting closed knot is smooth and has exactly one maximum and one minimum. The projected cut subarc is disjoint from the rest of the diagram except at its endpoints. [given, F1, construct]

2.1 At every double point of $\gamma$, the first encounter occurs at smaller $t$ and therefore has strictly larger fourth coordinate; hence the lifted knot has exactly the prescribed overpassing branch at every crossing. The long lifted arc is embedded because its fourth coordinate is strictly monotone, and the base subarc is disjoint from its projection away from the endpoints, so their union is an embedding. To identify this lift with the knot represented by the diagram, let $z_0$ be the smooth height function of any realizing lift over the same smoothed projected circle, and let $z_1$ be the height function specified in step 1.1. For $0\le u\le1$, set $z_u=(1-u)z_0+uz_1$. This is a jointly smooth family with values in $(-1,1)$, since the compact image of $z_0$ lies in $(-1,1)$ and $|z_1|\le1/2$. At every crossing the first-encounter inequality holds for both $z_0$ and $z_1$, so it holds strictly for every $z_u$; distinct projected points remain distinct, and the projected derivative is nonzero. Thus the corresponding lifts form a smooth isotopy of embeddings of the compact circle. By [F2] it extends to an ambient isotopy, proving that the constructed lift represents the same knot as the descending diagram. [A1, F1, F2, step 1.1, construct]

3.1 Choose the regular level $S_0$ between the unique minimum and maximum. It cuts the lifted knot into an upper proper arc with one maximum and a lower proper arc with one minimum. Choose one simple joining arc on $S_0$. By [F3], each proper arc bounds an embedded disk with that same joining arc; push their interiors into the opposite open balls, so the disks intersect only in the joining arc. Their union, after smoothing its corner, is an embedded genus-zero spanning surface for the knot. [F3, step 2.1, construct]

4.1 Apply [F4] to the spanning disk of step 3.1. The lifted knot, and therefore the represented descending diagram by step 2.1, is ambient isotopic to the standard unknot. [F4, step 2.1, step 3.1] ∎
