---
id: ex-knot-kt-04-worked-cases
kind: example
title: "Worked Seifert-algorithm counts for the trefoil, figure-eight, and kinked unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-seifert-surface-from-diagram
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-oriented-seifert-surface
  - def-oriented-seifert-surface-and-knot-genus
  - thm-seifert-algorithm-boundary-euler-and-genus
  - thm-seifert-surface-from-diagram-procedure-properties
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
  - def-elementary-geometric-half-twist
  - thm-geometric-braids-form-a-group
  - def-closure-of-a-geometric-braid
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §§3.1–3.2, pp.21–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Trefoil genus discussion and the Seifert algorithm / genus upper bound"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Exercise 4.3.3 and Exercise 4.3.8, trefoil and figure-eight Seifert surfaces"
---

## Example

Assume the Axiom of Countable Choice. Let $D_T$ be the standard closure of the two-strand braid $\sigma_1^3$, let $D_8$ be the standard closure of the three-strand braid $\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}$, and let $D_U$ be the round unknot diagram with one Reidemeister-I kink. Here each $\sigma_i$ is the elementary geometric half twist of adjacent strands and closure joins the bottom endpoints to the corresponding top endpoint set. These are the standard trefoil, figure-eight, and kinked-unknot diagrams. Their Seifert-algorithm data and output-surface genera are

| Diagram | Seifert circles $s$ | Crossings $c$ | Output genus $g(F)$ |
|---|---:|---:|---:|
| Trefoil | 2 | 3 | 1 |
| Figure-eight | 3 | 4 | 1 |
| Kinked unknot | 2 | 1 | 0 |

Thus the corresponding knot genera are at most $1$, at most $1$, and exactly $0$, respectively. The first two rows compute particular spanning surfaces and do not assert that those surfaces have minimum genus.

The arrows orient the first diagram, and at each crossing the unbroken strand is the overpass.

```tikz
\begin{tikzpicture}[scale=0.82, line cap=round, line join=round]
  % Close bottom endpoints to top endpoints on the same side.
  \draw[thick,->] (0.8,-1.5) .. controls (1.8,-1.5) and (1.8,1.5) .. (0.8,1.5);
  \draw[thick,->] (-0.8,-1.5) .. controls (-1.8,-1.5) and (-1.8,1.5) .. (-0.8,1.5);
  % The right-to-left strand is under at each of the three crossings.
  \draw[thick] (0.8,1.5)--(-0.8,0.5);
  \draw[thick,white,line width=4pt] (0.12,1.075)--(-0.12,0.925);
  \draw[thick] (-0.8,0.5)--(0.8,-0.5);
  \draw[thick,white,line width=4pt] (-0.12,0.075)--(0.12,-0.075);
  \draw[thick] (0.8,-0.5)--(-0.8,-1.5);
  \draw[thick,white,line width=4pt] (0.12,-0.925)--(-0.12,-1.075);
  % The left-to-right strand passes over at all three crossings.
  \draw[thick,->] (-0.8,1.5)--(0.8,0.5);
  \draw[thick,->] (0.8,0.5)--(-0.8,-0.5);
  \draw[thick,->] (-0.8,-0.5)--(0.8,-1.5);
  \node[below] at (0,-1.9) {three-crossing two-strand closure};
\end{tikzpicture}
```

The picture is a projection schematic: the white gaps mark the underpassing strand, and each closing arc joins a bottom endpoint to the top endpoint on the same side. The smoothing and surface claims below are proved from the finite strand and band data, not from the picture.

## Example references

[[alg-seifert-surface-from-diagram|The finite smoothing and band procedure]]

[[thm-seifert-algorithm-boundary-euler-and-genus|The output genus formula and knot-genus upper bound]]

[[def-elementary-geometric-half-twist|The elementary geometric half twists]]

[[thm-geometric-braids-form-a-group|Braid-word multiplication and endpoint permutations]]

[[def-closure-of-a-geometric-braid|Components of a braid closure are cycles of its endpoint permutation]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the three finite oriented knot diagrams described above.

[F1] Each crossing is replaced by the unique orientation-compatible noncrossing smoothing, giving finitely many oriented Seifert circles. ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]])

[F2] The algorithm smooths every crossing once, records one disk per circle and one band per crossing. ([[alg-seifert-surface-from-diagram]])

[F3] For a one-component diagram, the realized surface is connected, oriented, embedded, and has one boundary component equal to the knot. ([[lem-seifert-bands-embedded-orientable-boundary-correct]])

[F4] A connected one-boundary disk-and-band surface with $s$ disks and $c$ bands has genus $(1-s+c)/2$, and its knot genus is at most that value. ([[thm-seifert-algorithm-boundary-euler-and-genus]])

[F5] Knot genus is the minimum genus of an admissible Seifert surface, so every such surface gives an upper bound. ([[def-oriented-seifert-surface-and-knot-genus]])

[F6] Under $\mathrm{AC}_\omega$, a connected compact oriented surface with $b$ boundary circles satisfies $\chi=2-2g-b$. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F7] The elementary half twist at adjacent positions has endpoint permutation the corresponding transposition, and its opposite is the inverse half twist. ([[def-elementary-geometric-half-twist]])

[F8] Endpoint permutations multiply under braid stacking, and the standard closure has one component for each cycle of that permutation. ([[thm-geometric-braids-form-a-group]], [[def-closure-of-a-geometric-braid]])

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

## Verification

1.1 The word $\sigma_1^3$ has three crossings, and its endpoint permutation is $(12)^3=(12)$ by [F7] and [F8], so its closure is one knot component. Smoothing each braid crossing continues its oriented strand to the adjacent lower segment, leaving the identity two-strand closure with two cycles; hence $c=3$ and $s=2$. [given, F1, F2, F7, F8, algebra]

1.2 The word $\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}$ has four crossings. Since $\sigma_i$ and $\sigma_i^{-1}$ both induce the adjacent transposition, its endpoint permutation is $(12)(23)(12)(23)$, a $3$-cycle; [F8] therefore makes its closure one knot component. Smoothing each crossing straightens its adjacent oriented strands, leaving the identity three-strand closure with three cycles. Hence $(s,c)=(3,4)$. [given, F1, F2, F7, F8, algebra]

1.3 The kinked unknot diagram has one crossing; its oriented smoothing separates the small kink loop from the remaining circle, so $(s,c)=(2,1)$. In the zero-crossing boundary case, the round unknot has one smoothing circle and no bands, so $(s,c)=(1,0)$. [given, F1, algebra]

2.1 By [F3], all three outputs are connected oriented spanning surfaces. Applying [F4] gives $(1-2+3)/2=1$, $(1-3+4)/2=1$, and $(1-2+1)/2=0$. For the round unknot the disk surface has genus $0$, and all surface genera are nonnegative by [F6]; therefore its minimum is exactly $0$. For the trefoil and figure-eight, [F5] yields only the upper bound $g(K)\le1$, as claimed. [F3, F4, F5, F6, F8, A1, step 1.1, step 1.2, step 1.3, algebra] ∎
