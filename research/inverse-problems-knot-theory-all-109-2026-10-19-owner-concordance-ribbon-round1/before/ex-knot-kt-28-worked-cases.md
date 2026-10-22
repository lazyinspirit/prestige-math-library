---
id: ex-knot-kt-28-worked-cases
kind: example
title: "The square knot is a nontrivial ribbon knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-ribbon-disk-and-ribbon-knot
  - lem-ribbon-singularity-local-resolution
  - thm-ribbon-knot-is-smoothly-slice
  - def-countable-choice
  - def-reverse-mirror-of-oriented-knot
  - def-knot-connected-sum-and-prime-knot
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - def-quandle-and-knot-coloring
  - lem-dihedral-operation-is-a-quandle
  - lem-dihedral-fox-coloring-count-is-reidemeister-invariant
  - thm-oriented-reidemeister-equivalence-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "ACω is used through the ribbon-disk construction and Reidemeister equivalence; the finite Fox-coloring calculation and local move bijections are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Proposition 1.6 and the banded-link movie discussion, printed pp.3–5"
    - title: "Daniel Brejevs, PhD thesis on alternating 3-braid closures"
      url: "https://www.maths.gla.ac.uk/~bowens/theses/2021BrejevsPhD.pdf"
      locator: "§2.2, Figure 2.1, square-knot band move and its 0/1-handle ribbon surface, printed pp.16–17"
    - title: "Brendan Owens, Knots and 4-Manifolds, Winter Braids IX lecture notes"
      url: "https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf"
      locator: "Lecture 1, PDF pp.2–3, square-knot ribbon disk and push-in resolution"
---

## Example

Assume ACω. Let $T$ be the standard right-handed trefoil, represented by the closure of the standard two-strand braid with three positive half-twists, and let $T^\dagger$ be its reverse mirror. Choose the connected-sum balls on arcs colored $0$ in the Fox 3-colorings described below. The square knot $T\#T^\dagger$ is nontrivial, is ribbon, and bounds a smooth properly embedded disk in $B^4$.

## Example references

[[def-reverse-mirror-of-oriented-knot|The reverse-mirror convention]]

[[def-knot-connected-sum-and-prime-knot|The fixed oriented connected-sum construction]]

[[def-ribbon-disk-and-ribbon-knot|Ribbon disks and banded-link movies]]

[[lem-general-knot-reverse-mirror-sum-is-ribbon|The reverse-mirror connected sum has a ribbon disk]]

[Ray, *Slice Knots and Knot Concordance*, Proposition 1.6](https://aru-ray.github.io/documents/slicenotes.pdf)

[Brejevs, §2.2, Figure 2.1](https://www.maths.gla.ac.uk/~bowens/theses/2021BrejevsPhD.pdf)

[Owens, *Knots and 4-Manifolds*, Lecture 1](https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf)

## Facts & Assumptions

**Given:** ACω, the standard right-handed trefoil $T$, its reverse mirror $T^\dagger$, and the connected-sum datum specified in the Example.

[F1] Under ACω, every smooth oriented knot $K$ has $K\#K^\dagger$ bounding a smooth proper disk whose squared radial function is Morse with only index-$0$ and index-$1$ critical points. ([[lem-general-knot-reverse-mirror-sum-is-ribbon]])

[F2] The reverse mirror is reflection of the knot followed by reversal of its knot orientation, and the connected sum uses the fixed orientation-matching gluing convention. ([[def-reverse-mirror-of-oriented-knot]], [[def-knot-connected-sum-and-prime-knot]])

[F3] A Fox 3-coloring assigns an element of $\mathbb F_3$ to each diagram arc and satisfies $2x_o=x_i+x_j$ at every crossing. ([[def-quandle-and-knot-coloring]], [[lem-dihedral-operation-is-a-quandle]])

[F4] For $p=3$, the number of Fox $p$-colorings is unchanged by planar isotopy and every oriented Reidemeister move. ([[lem-dihedral-fox-coloring-count-is-reidemeister-invariant]])

[F5] Under ACω, two regular diagrams represent the same oriented knot exactly when connected by a finite sequence of planar isotopies and oriented Reidemeister moves. ([[thm-oriented-reidemeister-equivalence-theorem]])

[A1] ACω is the sequence-choice axiom used by [F1] and [F5]. ([[def-countable-choice]])

## Verification

**Given:** ACω, $T$ the standard right-handed trefoil, $T^\dagger$, and the stated connected-sum datum.

1.1 Apply [F1] with $K=T$. This gives a smooth properly embedded disk in $B^4$ with boundary $T\#T^\dagger$, so that knot is smoothly slice. Its radial levels also form the no-maximum disk movie from the A page, but this does not by itself establish the ribbon-immersion clause of the Example. [given, F1, F3, A1, construct]

1.2 In the two-strand braid chart with parameter increasing from bottom to top, let $S$ be the color transfer for the positive generator whose overstrand runs from lower left to upper right. By [F3], $S(a,b)=(2a-b,a)$; the inverse crossing has transfer $S^{-1}$. Direct calculation gives $S^2(a,b)=(3a-2b,2a-b)$ and $S^3(a,b)=(4a-3b,3a-2b)=(a,b)$ in $\mathbb F_3^2$. Hence $S^{-3}$ is also the identity. Starting each trefoil tangle with the ordered pair $(0,1)$ therefore satisfies the braid closure conditions for both the trefoil and its mirror. The first arc in each closure has color $0$; choose those arcs for the connected-sum datum. The colorings glue because the shared arc colors agree, and the color-$1$ arcs remain, giving a nonconstant Fox 3-coloring of the square knot. [F2, F3, construct, algebra]

2.1 A crossing-free diagram of the unknot has one arc and exactly three Fox 3-colorings, one for each residue. The square-knot diagram has those three constant colorings and the nonconstant coloring from step 1.2, so its coloring count is at least four. If it were isotopic to the unknot, [F5] would give a finite Reidemeister sequence between their diagrams, and [F4] would preserve the coloring count, a contradiction. Thus the square knot is nontrivial. [F4, F5, step 1.2, algebra] ∎

## Diagram

The schematic depicts one positive generator and its inverse in the two-strand braid. The braid parameter increases upward; the continuous strand is over, and the understrand has a gap. The top and bottom labels are ordered by left and right position. The calculation in step 1.2, rather than the drawing, verifies the three-crossing closure colorings.

```tikz
\begin{tikzpicture}[scale=0.82,line cap=round,line join=round]
  \begin{scope}
    \draw[very thick,->] (-1,-1)--(1,1);
    \draw[very thick,->] (1,-1)--(0.16,-0.16);
  \draw[very thick,->] (-0.16,0.16)--(-1,1);
    \node[below] at (-1,-1) {$a$};
    \node[below] at (1,-1) {$b$};
    \node[above] at (-1,1) {$2a-b$};
    \node[above] at (1,1) {$a$};
    \node at (0,-1.55) {$S(a,b)=(2a-b,a)$};
  \end{scope}
  \begin{scope}[xshift=4.4cm]
    \draw[very thick,->] (1,-1)--(-1,1);
    \draw[very thick,->] (-1,-1)--(-0.16,-0.16);
    \draw[very thick,->] (0.16,0.16)--(1,1);
    \node[below] at (-1,-1) {$a$};
    \node[below] at (1,-1) {$b$};
    \node[above] at (-1,1) {$S^{-1}_1(a,b)$};
    \node[above] at (1,1) {$S^{-1}_2(a,b)$};
    \node at (0,-1.55) {$S^{-1}$};
  \end{scope}
\end{tikzpicture}
```

## Remarks

The Fox-coloring calculation proves nontriviality, and [F1] proves smooth sliceness. The ribbon clause remains escalated: [F1] supplies a radial no-maximum disk, while the A-page definition uses a ribbon immersion in $S^3$. The required implication from the former model to the latter has no complete proof or verified supplier in this batch.
