---
id: def-ribbon-disk-and-ribbon-knot
kind: definition
title: "Ribbon disks and ribbon knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-smooth-and-topological-slice-genus
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "ACω is retained for the library's slice-genus convention; the ribbon-singularity definition itself is choice-free."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Definitions 1.4–1.5, Figures 4–6, and Conjecture 1.7, printed pp.3–5"
    - title: "Brendan Owens, Knots and 4-Manifolds, Winter Braids IX lecture notes"
      url: "https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf"
      locator: "Lecture 1, PDF pp.2–3: ribbon singularities, push-in resolution, and radial Morse movie"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.3, printed p.322, and §10, Problem 1, printed p.342"
    - title: "Daniel Brejevs, PhD thesis on alternating 3-braid closures"
      url: "https://www.maths.gla.ac.uk/~bowens/theses/2021BrejevsPhD.pdf"
      locator: "§2.2, band-move definition and Euler-characteristic count, printed pp.16–17"
---

## Definition

Let $D^2$ be the oriented closed disk and let $K\subset S^3=\partial B^4$ be a smooth oriented knot, meaning the image of an orientation-preserving smooth embedding of a circle. A **ribbon immersion** for $K$ is a smooth immersion $f:D^2\to S^3$ whose boundary restriction is an embedding onto $K$ and whose only multiple points form finitely many pairwise disjoint transverse double arcs $\gamma_1,\ldots,\gamma_m$. For each $i$, the full preimage of $\gamma_i$ consists of two disjoint embedded arcs $\alpha_i$ and $\beta_i$ in $D^2$: $\alpha_i$ is properly embedded, with its two endpoints on $\partial D^2$ and its interior in $\operatorname{Int}D^2$, while $\beta_i$ is compact and lies in $\operatorname{Int}D^2$. There are no triple points or other self-intersections. A **ribbon disk** for $K$ is such a ribbon immersion, and $K$ is a **ribbon knot** if it admits a ribbon disk.

A **band** on a link in $S^3$ is the image of a smoothly embedded rectangle whose two opposite attaching edges lie on the link and whose remaining points are disjoint from it. A **band move** removes the attaching edges, inserts the other two edges, and rounds the corners; the embedded band, including its half-twist data, is part of the move. A **no-maximum disk movie** is the family of regular level links of a smooth proper disk $D\subset B^4$ for which the squared radial function $\rho(x)=\lVert x\rVert^2$ is Morse in the disk interior and has only index-$0$ minima and index-$1$ saddles. A minimum creates a split unknot and a saddle performs an oriented band move; there are no maxima. The no-maximum disk movie is a second presentation convention used by the design for explicit ribbon examples. The equivalence between this movie model and the ribbon-immersion definition above is not proved by the local resolution lemma and remains a prerequisite for identifying the movie examples with ribbon knots. The local resolution lemma proves only that a ribbon immersion pushes rel boundary to a smooth proper disk in $B^4$. The slice-ribbon conjecture asks whether every smooth slice knot admits a ribbon immersion as defined above.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Proper smooth surfaces and boundary collars]]

[[def-smooth-knot-concordance|Smooth oriented knot convention]]

[[def-smooth-and-topological-slice-genus|Smooth sliceness and the ACω slice-genus convention]]

[[def-countable-choice|The Axiom of Countable Choice used by the slice-genus convention]]

[Ray, *Slice Knots and Knot Concordance*, §1.1](https://aru-ray.github.io/documents/slicenotes.pdf)

[Owens, *Knots and 4-Manifolds*, Lecture 1](https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf)

[Livingston, *A Survey of Classical Knot Concordance*, §2.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

[Brejevs, ribbon band-move convention, §2.2](https://www.maths.gla.ac.uk/~bowens/theses/2021BrejevsPhD.pdf)

## Diagram

The two shaded rectangles are local image sheets in coordinates $(x,y,z)$. They meet transversely along the red double arc $\gamma=\{(x,0,0):-1\le x\le1\}$. The source preimage of the blue sheet is the interior arc $\beta$; the source preimage of the gray sheet is the proper arc $\alpha$, whose endpoints lie on the boundary knot. The diagram shows the local type only; it does not encode a global knot diagram or serve as a proof.

```tikz
\begin{tikzpicture}[x={(1cm,0cm)},y={(0.38cm,0.32cm)},z={(0cm,0.9cm)},line join=round]
  \fill[gray!18] (-1,-0.62,0)--(1,-0.62,0)--(1,0.62,0)--(-1,0.62,0)--cycle;
  \fill[blue!22] (-1,0,-0.58)--(1,0,-0.58)--(1,0,0.58)--(-1,0,0.58)--cycle;
  \draw[thick] (-1,-0.62,0)--(1,-0.62,0)--(1,0.62,0)--(-1,0.62,0)--cycle;
  \draw[thick] (-1,0,-0.58)--(1,0,-0.58)--(1,0,0.58)--(-1,0,0.58)--cycle;
  \draw[red,very thick] (-1,0,0)--(1,0,0);
  \fill[red] (-1,0,0) circle (2pt);
  \fill[red] (1,0,0) circle (2pt);
  \draw[->] (0.25,0.95,0.35)--(0.08,0.12,0.02);
  \node[above] at (0.6,1.05,0.45) {$\gamma$};
  \node at (-0.15,0.2,0.82) {interior sheet};
  \node at (0.15,0.85,-0.75) {proper sheet};
  \node[red,below] at (0,-0.2,-0.7) {double arc};
\end{tikzpicture}
```

## Remarks

The plan retains $\mathrm{AC}_\omega$ because the library's smooth slice-genus definition assumes it. The finite definition of a ribbon immersion and its local height separation use no choice principle. The conversion between the radial no-maximum disk model and this immersion model remains an explicit unresolved prerequisite in this draft.
