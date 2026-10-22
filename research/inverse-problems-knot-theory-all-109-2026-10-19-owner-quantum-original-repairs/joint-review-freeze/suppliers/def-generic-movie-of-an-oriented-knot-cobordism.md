---
id: def-generic-movie-of-an-oriented-knot-cobordism
kind: definition
title: A generic movie of an oriented knot cobordism
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §§2 and 8
      url: https://arxiv.org/pdf/math/0410495v2
      locator: Printed pp.1445–1448 and 1472–1480; movie presentations and the map
        assigned to a movie
    - title: Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology,
        §§3.2 and 4.2–5
      url: https://arxiv.org/pdf/math/0206303
      locator: Printed pp.1220–1225 and 1235–1244; movies, equivalence, and the
        movie-move theorem's use
---

## Definition

Assume countable choice. Let $K_0,K_1\subset S^3$ be smooth oriented knots. A smooth oriented knot cobordism from $K_0$ to $K_1$ is a compact smooth properly embedded oriented surface $\Sigma\subset S^3\times[0,1]$ whose boundary is $(-K_0\times\{0\})\sqcup(K_1\times\{1\})$, with product collars at both ends. A **generic movie** for $\Sigma$ is obtained by choosing a generic projection of the slices $S^3\times\{t\}$ to the plane and a Morse height function on $\Sigma$, then recording the oriented link diagram at each regular level. Intermediate regular levels may be links with any finite number of components. After choosing the projection and height generically, the finitely many exceptional levels are isolated and distinct: between them the diagrams change by planar isotopy or one oriented Reidemeister move, and at them the surface height has one nondegenerate minimum (a birth), one nondegenerate maximum (a death), or one index-one critical point (a saddle band move). A movie includes its ordered list of frames and these elementary changes; no claim that two movies of the same cobordism are equivalent is part of this definition.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Properly embedded surfaces and product collars]]

[[lem-smooth-link-cobordisms-admit-finite-generic-movies|Finite generic movie existence for the actual collared surface]]

[[def-countable-choice|Countable choice]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and links in the standard three-sphere]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§2 and 8](https://arxiv.org/pdf/math/0410495v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §§3.2 and 4.2–5](https://arxiv.org/pdf/math/0206303)


## Diagram

For example, a saddle movie may merge two circles or split one circle, according to how its band is attached. The following schematic records the merge case only; the circles shown are level-set components, not a projection of the full embedded surface.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.6cm]
  \node (a) {$\bigcirc\ \sqcup\ \bigcirc$};
  \node[right=of a] (b) {$\bigcirc$};
  \draw[->] (a) -- node[above] {one saddle band} (b);
\end{tikzpicture}
```
