---
id: lem-kauffman-bracket-r2-r3-identities
kind: lemma
title: "Kauffman bracket R2 and R3 identities"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the proof is a finite local algebra calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §III, printed pp. 430–432"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §4.1, printed pp. 21–22"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.2"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement

Let $A$ be an indeterminate and $n\ge2$. In a vertical $n$-strand braid box
whose longitudinal parameter increases from bottom to top, let $I$ be the
straight tangle and, for
$1\le i<n$, let $e_i$ be the cup-cap tangle with a cap at the top and a cup
at the bottom on strands $i,i+1$, and straight strands elsewhere. Each closed
loop has value $\delta=-A^2-A^{-2}$. For the crossing whose over-strand runs
northwest to southeast, the source crossing chart, after an
orientation-preserving quarter-turn, has its A-smoothing equal to $I$ and its
B-smoothing equal to $e_i$; here the source chart assigns coefficient $A$ to
its top/bottom smoothing and $A^{-1}$ to its left/right smoothing. Set
$$C_i:=AI+A^{-1}e_i.$$
For the opposite crossing, the smoothings exchange their through and cup-cap
pairings; set
$$C_i^{-}:=A^{-1}I+Ae_i.$$
Then $C_iC_i^{-}=C_i^{-}C_i=I$, and for adjacent strands
$$C_iC_{i+1}C_i=C_{i+1}C_iC_{i+1}.$$
Consequently the bracket is unchanged by every local Reidemeister II or III
replacement; arbitrary strand orientations do not change these unoriented
tangle identities.

```tikz
\begin{tikzpicture}[scale=0.8, line cap=round]
  \draw (-0.35,-0.25) rectangle (2.35,1.25);
  \foreach \x in {0,1,2} {
    \fill (\x,1) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0,1) .. controls (0,0.68) and (1,0.68) .. (1,1);
  \draw (0,0) .. controls (0,0.32) and (1,0.32) .. (1,0);
  \draw (2,0) -- (2,1);
  \node[above] at (0,1.06) {$t_1$};
  \node[above] at (1,1.06) {$t_2$};
  \node[above] at (2,1.06) {$t_3$};
  \node[below] at (0,-0.06) {$b_1$};
  \node[below] at (1,-0.06) {$b_2$};
  \node[below] at (2,-0.06) {$b_3$};
  \node at (1,-0.55) {$e_1$};
\end{tikzpicture}
```

The picture names the cap, cup, and through strand that define $e_1$; the
algebraic equalities above are proved below without using the picture as an
inference.

## Statement references

[[def-oriented-reidemeister-moves|Oriented Reidemeister moves]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §III, printed pp. 430–432](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.2](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** A regular link diagram with one of the local R2 or R3 replacements described in the statement.

[F1] In the source crossing chart, the A-smoothing has weight $A$, the B-smoothing has weight $A^{-1}$, and a closed trivial loop has value $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] The identity $I$ is the vertical through tangle; $e_i$ is the cap on top and cup on bottom, stacking removes loops with coefficient $\delta$, and the stacking product is associative and bilinear ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F3] The generators satisfy $e_i^2=\delta e_i$, $e_ie_{i+1}e_i=e_i$, $e_{i+1}e_ie_{i+1}=e_{i+1}$, and distant generators commute ([[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F4] R2 creates or deletes two opposite crossings, and every allowed R3 has a strict height order with the cyclic over/under pattern excluded ([[def-oriented-reidemeister-moves]]).

## Proof
1.1 In the vertical braid box, the crossing with over-strand northwest to southeast is carried by an orientation-preserving quarter-turn to the displayed source chart. The top-endpoint pair of that chart pulls back to the two vertical through arcs, and its bottom-endpoint pair pulls back to the other through arc, so its A-smoothing is $I$; the B-smoothing pulls back to the top cap and bottom cup $e_i$. For the opposite crossing the chart is the unrotated one, and the A/B pairings are respectively $e_i$ and $I$. By [F1] these expansions are $C_i=AI+A^{-1}e_i$ and $C_i^{-}=A^{-1}I+Ae_i$. Using [F2] and [F3], $$C_iC_i^{-}=(AI+A^{-1}e_i)(A^{-1}I+Ae_i)=I+(A^2+A^{-2}+\delta)e_i=I.$$ The same multiplication in the other order gives $C_i^{-}C_i=I$, since both factors are polynomials in $e_i$. Thus the two opposite crossings in an R2 pair cancel in either order. [F1, F2, F3, algebra]

1.2 Put $x=e_i$ and $y=e_{i+1}$. Expanding and using [F3] gives $$C_iC_{i+1}C_i=A^3I+A(2x+y)+A^{-1}(xy+yx+\delta x)+A^{-3}x,$$ while interchanging $x$ and $y$ gives $$C_{i+1}C_iC_{i+1}=A^3I+A(2y+x)+A^{-1}(yx+xy+\delta y)+A^{-3}y.$$ Their difference is $A^{-1}(A^2+\delta+A^{-2})(x-y)=0$. Hence the two sides of the braid-like R3 move have equal bracket operators. [F1, F3, algebra]

2.1 For any allowed R3 in [F4], choose the local longitudinal direction in which all three participating strands are monotone and forget their arrows. The strict height order labels the tracks top, middle, and bottom, so each pair meets exactly once and no crossing has a cyclic over/under pattern. Reading the left and right sides from one end gives the adjacent-position words $C_iC_{i+1}C_i$ and $C_{i+1}C_iC_{i+1}$ when the local crossings have the $C$ chart; if all three over/under choices are reversed, the words are $C_i^{-}C_{i+1}^{-}C_i^{-}$ and $C_{i+1}^{-}C_i^{-}C_{i+1}^{-}$. The six possible assignments of the three strand labels to the height order only rename the tracks, so these are the only two operator identities needed. The second follows by inverting the first and using invertibility from step 1.1. Reversing strand arrows does not alter the unoriented bracket. Tensoring or stacking with the unchanged exterior tangle preserves equality by bilinearity and associativity. Together with the R2 cancellation in step 1.1, this proves invariance for every R2/R3 variant. [F2, F4, step 1.1, step 1.2, algebra] ∎

## Remarks

The local algebra is choice-free. The knot and braid pictures identify the
operators only; none of the proof steps infer an algebraic equality from a
diagram.
