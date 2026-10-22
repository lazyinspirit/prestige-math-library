---
id: thm-barnatan-khovanov-cobordism-functoriality-up-to-sign
kind: theorem
title: "Functoriality of even integral Khovanov homology up to sign"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-khovanov-cobordism-map-up-to-sign
  - lem-barnatan-carter-saito-movie-moves-up-to-sign
  - thm-carter-saito-movie-move-equivalence
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega through link-level Khovanov homology and the oriented link invariance theorem; no full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Theorems 4–5 and §8.3"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1472–1480; projectivized functoriality under isotopy and the movie-move proof"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, Theorem 2 and §5"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed pp.1235–1244; boundary-fixed isotopy invariance up to sign"
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, §7"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "§7.1; the original cobordism-map construction and functoriality conjecture"
---

## Statement

Assume countable choice. Let $\Sigma\subset S^3\times[0,1]$ be a compact smooth oriented cobordism from an oriented knot $K_0$ to an oriented knot $K_1$, with fixed product collars and fixed endpoint diagrams. Every generic movie $M$ of $\Sigma$ defines a map of bidegree $(0,\chi(\Sigma))$,
$$
Kh(M):Kh^{i,j}(K_0)\longrightarrow Kh^{i,j+\chi(\Sigma)}(K_1),
$$
where $\chi(\Sigma)$ is the Euler characteristic of the surface and the integral even Khovanov groups use the normalized crossing shifts. If two such movies represent cobordisms related by an ambient isotopy fixed on the boundary collars, their maps differ by multiplication by a single overall sign, independent of the input class. The resulting assignment is a functor after each morphism group is quotiented by the relation identifying a map with its negative; before that quotient the sign is not canonical.

## Statement references

[[def-khovanov-cobordism-map-up-to-sign|The map associated to a fixed generic movie]]

[[thm-carter-saito-movie-move-equivalence|The movie-move classification]]

[[lem-barnatan-carter-saito-movie-moves-up-to-sign|The local movie-move calculations]]

[[thm-khovanov-homology-is-an-oriented-link-invariant|The integral link-level Khovanov groups]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, Theorems 4–5 and §8.3](https://arxiv.org/pdf/math/0410495v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, Theorem 2 and §5](https://arxiv.org/pdf/math/0206303)

[Khovanov, *A categorification of the Jones polynomial*, §7](https://arxiv.org/pdf/math/9908171v2)

## Unresolved proof obligations

To prove independence from the movie, one must first connect any two boundary-fixed movies by the Carter–Saito moves and distant-critical-point interchanges, then apply the local map equality for each move and compose the resulting equalities. The exact unresolved geometric and algebraic suppliers are the complete Euclidean movie classification, local normalized movie-move maps, and a separate sweep-around map identity required by the full spherical scope. Consequently this carrier does not claim the theorem is ready.
