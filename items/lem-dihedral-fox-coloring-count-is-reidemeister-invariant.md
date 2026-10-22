---
id: lem-dihedral-fox-coloring-count-is-reidemeister-invariant
kind: lemma
title: "Dihedral Fox coloring counts are preserved by Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-quandle-and-knot-coloring
  - lem-dihedral-operation-is-a-quandle
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: each local move gives a finite, explicit coloring extension bijection."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §4.1, pp. 30–32"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§4.1, local R1, R2, and R3 checks for Fox p-colorings."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §3.3, pp. 16–18"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§3.3, Definition 3.3.1 and Theorem 3.3.4, local coloring-set bijections."
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §1, arXiv:math/0608172"
      url: "https://arxiv.org/pdf/math/0608172"
      locator: "§1, Reidemeister theorem and the local 3-coloring discussion."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $p$ be an odd prime. A Fox $p$-coloring of a finite regular oriented link diagram $D$ assigns an element of $\mathbb F_p$ to each arc and satisfies $2x_o=x_i+x_j$ at every crossing, where $x_o$ is the overarc color and $x_i,x_j$ are the two underarc colors. If $D'$ is obtained from $D$ by planar isotopy or one oriented Reidemeister move of type R1, R2, or R3, restriction outside the move disk gives a bijection from the Fox $p$-colorings of $D$ to those of $D'$. Consequently the number of Fox $p$-colorings is unchanged along every finite sequence of such moves. The local bijections use no choice principle.

## Statement references

[[def-quandle-and-knot-coloring]]

[[lem-dihedral-operation-is-a-quandle]]

[[def-oriented-reidemeister-moves]]

[Calegari, *Introduction to Knot Theory* (2025), §4.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §3.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Przytycki, *3-coloring and other elementary invariants of knots* (1998), §1](https://arxiv.org/pdf/math/0608172)

## Facts & Assumptions

**Given:** An odd prime $p$ and a finite regular oriented link diagram $D$ changed to $D'$ by one planar isotopy or one oriented R1, R2, or R3 move.

[F1] [[def-quandle-and-knot-coloring]]: a quandle coloring assigns one element to each arc and at a crossing the target underarc color is the source underarc color acted on by the overarc color.

[F2] [[lem-dihedral-operation-is-a-quandle]]: on $\mathbb F_p$, the operation is $a*b=2b-a$; each right translation is an involution, and $(a*b)*c=(a*c)*(b*c)$.

[F3] [[def-oriented-reidemeister-moves]]: each local move is supported in a disk, all strand orientation/sign variants are included, and a planar isotopy transports the diagram and its decorations.

## Proof

1.1 For fixed $b\in\mathbb F_p$, define $R_b(a)=a*b=2b-a$. Then $R_b(R_b(a))=2b-(2b-a)=a$, so $R_b^{-1}=R_b$. Also $a*a=2a-a=a$. Thus both the forward and reverse crossing rules use the same involution, and an arc's color is uniquely recoverable across one underpass. [F2, algebra]

2.1 In an R1 disk, the coloring relation on the kinked side is either $y=x*x$ or $x=y*x$, where $x$ is the unchanged boundary color and $y$ is the color of the new interior underarc. In the first case $y=x$ by idempotency; in the second, $R_x(y)=x$ has the unique solution $y=R_x(x)=x$ because $R_x$ is bijective. Deleting the kink is the inverse restriction map. The two formulas cover both strand directions because the inverse operation equals the operation by step 1.1. [F1, F2, F3, step 1.1, algebra]

2.2 In an R2 disk, fix the color $b$ of the strand passing over the other strand and the incoming underarc color $a$. The first crossing changes the underarc color to $R_b(a)$, and the second changes it by $R_b^{-1}$; their composition is $R_b^{-1}(R_b(a))=a$. Therefore every boundary coloring extends uniquely across the two-crossing side, and the reverse R2 move gives the inverse bijection. Other orientation variants replace one of these maps by its inverse, which is the same map by step 1.1. [F1, F2, F3, step 1.1, algebra]

2.3 For a braid-like R3 orientation, start with boundary colors $a,b,c$. Propagating through the two sides gives respectively $(c,b*c,(a*b)*c)$ and $(c,b*c,(a*c)*(b*c))$. The last coordinates agree by right self-distributivity in [F2], so every boundary coloring on either side has a unique matching extension on the other. Reversing a crossing replaces a right translation by its inverse; step 1.1 makes that the same map, and relabeling the three strands gives every height-order and orientation variant in [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 If $D$ is empty, its unique empty coloring is carried to itself by planar isotopy, and no Reidemeister move is supported on the empty diagram. If $D$ is nonempty, planar isotopy carries every arc and local crossing relation bijectively to its image, while steps 2.1, 2.2, and 2.3 give explicit coloring bijections for every local move. Composing the finitely many bijections along any finite move sequence preserves the coloring count. These constructions act on finite arc labels and use no choice principle. [F1, F3, step 2.1, step 2.2, step 2.3, construct] ∎

## Sources

[[def-quandle-and-knot-coloring]]

[[lem-dihedral-operation-is-a-quandle]]

[[def-oriented-reidemeister-moves]]
