---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-generic-movie-of-an-oriented-knot-cobordism.json
  precheck: n/a
id: def-generic-movie-of-an-oriented-knot-cobordism
kind: definition
title: A generic movie of an oriented knot cobordism
status: published
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

Assume countable choice. Let $K_0,K_1\subset S^3$ be smooth oriented knots. A smooth oriented knot cobordism from $K_0$ to $K_1$ is a compact smooth properly embedded oriented surface $\Sigma\subset S^3\times[0,1]$ whose boundary is $(-K_0\times\{0\})\sqcup(K_1\times\{1\})$, with product collars at both ends. A **generic movie** for $\Sigma$ is obtained by first choosing an ambient isotopy, fixed on smaller prescribed end collars, carrying $\Sigma$ to a surface $\Sigma'$ on which the ambient time coordinate $h=\operatorname{pr}_{[0,1]}|_{\Sigma'}$ is Morse with distinct critical values. Choose a common spatial chart $S^3\setminus\{p\}\cong\mathbb R^3$ containing the spatial image of $\Sigma'$ and a generic planar projection in that chart, retaining the time coordinate and the over/under crossing information, and record the oriented link diagrams of the regular slices $\Sigma'\cap(S^3\times\{t\})$. Intermediate regular levels may be links with any finite number of components. The isotopy and projection are chosen so that the finitely many exceptional levels are isolated and distinct: between them the diagrams change by planar isotopy. At each exceptional level there is either one oriented Reidemeister move, at which the surface height is regular, or one nondegenerate surface-height critical point: a minimum (a birth), a maximum (a death), or an index-one critical point (a saddle band move). The movie includes its ordered list of frames and these elementary changes, with its oriented smooth embedded trace ambient isotopic to $\Sigma$ relative to the retained end collars and boundary parametrizations. No claim that two movies of the same cobordism are equivalent is part of this definition.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Properly embedded surfaces and product collars]]

[[lem-smooth-link-cobordisms-admit-finite-generic-movies|Finite generic movie existence up to ambient isotopy relative to end collars]]

[[def-countable-choice|Countable choice]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and links in the standard three-sphere]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§2 and 8](https://arxiv.org/pdf/math/0410495v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §§3.2 and 4.2–5](https://arxiv.org/pdf/math/0206303)


## Diagram

For example, a saddle movie may merge two circles or split one circle, according to how its band is attached. The following schematic records the merge case only; the circles shown are oriented regular level-set components, not a projection of the full embedded surface. The dashed band joins oppositely directed attaching arcs, so the displayed orientations extend across the oriented saddle. The outgoing circle is drawn up to planar isotopy.

```tikz
\begin{tikzpicture}[>=stealth, line width=0.8pt, scale=1.3, transform shape]
  \path[fill=gray!15] (0.49,0.25) -- (1.11,0.25)
    .. controls (1.03,0.08) and (1.03,-0.08) .. (1.11,-0.25)
    -- (0.49,-0.25)
    .. controls (0.57,-0.08) and (0.57,0.08) .. (0.49,0.25);
  \draw[dashed] (0.49,0.25) -- (1.11,0.25);
  \draw[dashed] (0.49,-0.25) -- (1.11,-0.25);
  \draw (0,0) circle (0.55);
  \draw (1.6,0) circle (0.55);
  \draw[->] (0.55,0) arc (0:90:0.55);
  \draw[->] (2.15,0) arc (0:90:0.55);
  \draw[->] (2.5,0) -- (4,0);
  \node at (3.25,1.15) {one saddle band};
  \draw (5,0) circle (0.75);
  \draw[->] (5.75,0) arc (0:90:0.75);
\end{tikzpicture}
```
