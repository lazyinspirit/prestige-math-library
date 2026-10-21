---
id: thm-alexander-polynomial-one-implies-topologically-slice
kind: theorem
title: "Alexander polynomial one implies topological sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-alexander-one-knot-produces-a-good-group-disk-obstruction
  - lem-freedman-casson-handle-skyscraper-and-surgery-modules
  - thm-infinite-cyclic-group-is-good-for-disk-embedding
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 15
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§§11.6–11.7, printed pp.205–211"
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "Appendix A, complete disk-embedding application, printed pp.12–13"
---

## Statement

Assume full AC. If a smooth oriented knot $K\subset S^3$ has Alexander polynomial $\Delta_K(t)\doteq1$, where $\doteq$ denotes equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$, then there is a locally flat proper embedding $D^2\hookrightarrow B^4$ whose boundary is $K$. Here **topologically slice** means bounding such a locally flat proper disk; the conclusion asserts no smooth slice disk.

## Statement references

[[lem-alexander-one-knot-produces-a-good-group-disk-obstruction|The marked smooth Alexander-one complement and disk data]]

[[lem-freedman-casson-handle-skyscraper-and-surgery-modules|The smooth-input good-group construction with relative standard handle charts]]

[[thm-infinite-cyclic-group-is-good-for-disk-embedding|Goodness of the infinite cyclic group]]

[[def-locally-flat-proper-surface-and-concordance-collars|Local flatness and the prescribed boundary collar]]

## Facts & Assumptions

**Given:** Full AC and the stated smooth oriented Alexander-one knot.

[A1] [[def-axiom-of-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: Full AC supplies Countable Choice.

[F1] [[lem-alexander-one-knot-produces-a-good-group-disk-obstruction]]: In the literal radius-$3/2$ ball, the supplied smooth surface $\Sigma$ has a marked smooth complement $N$ with infinite cyclic fundamental group, smooth framed immersed compression disks and smooth algebraic dual spheres satisfying all the Wall vanishings. Their attaching annuli and framings match the short curves on $\Sigma$.

[F2] [[thm-infinite-cyclic-group-is-good-for-disk-embedding]]: This complement group is good.

[F3] [[lem-freedman-casson-handle-skyscraper-and-surgery-modules]]: Smooth framed data in the supplied smooth neighborhood $V=N$ give disjoint locally flat disks with disjoint standard product handle charts, preserving their attaching framings.

[F4] [[def-locally-flat-proper-surface-and-concordance-collars]]: The local pair charts and the unchanged outer knot collar give the asserted locally flat proper embedding.

## Proof

1.1 Apply [F1] to obtain the actual surface $\Sigma$, complement $N$, short curves $s_1,\ldots,s_g$, marked annuli and smooth disk/dual datum. By [A1] and [F2], [F3] applies with $V=N$. Its hypothesis concerns smooth maps and smooth collars; those are explicitly supplied here. Thus the compression disks have disjoint embedded standard product handle charts with the prescribed attaching framings. If $g=0$, the original $\Sigma$ is already the required disk and the following finite surgeries are empty. [given, A1, F1, F2, F3]

2.1 Join each produced disk to its short curve on $\Sigma$ along the marked negative-normal annulus. These annuli are disjoint, and their interiors lie on the $\Sigma$ side of $\partial N$; the disks lie on its $N$ side. The supplied collars identify their product charts at the seam. The resulting joined disks therefore have product normal neighborhoods whose first boundary normal direction is the normal direction of $s_i$ within $\Sigma$. Choose mutually disjoint sufficiently small product neighborhoods. Replace the annulus $s_i\times(-\eta,\eta)$ in $\Sigma$ by the two disk parallels at $\pm\eta$ in that first normal direction, with opposite orientations. The attaching collars give two coordinate half-planes meeting on their common boundary line. Rounding their quadrant in those product coordinates yields a locally flat surface. This uses the product charts actually supplied by [F3], rather than a normal-neighborhood theorem for an arbitrary TOP surface. All changes fix the outer knot collar. [F1, F3, F4, step 1.1, construct]

3.1 Cutting along the geometric short curves leaves a connected surface. Indeed, if its complementary-component graph had more than one vertex, choose a proper nonempty vertex subset with an edge to its complement. The oriented boundary of the corresponding union gives a nonzero signed relation among the independent classes $[s_i]$: every crossing edge occurs once, while edges internal to the union cancel. This is impossible. Hence capping these cut curves leaves the result connected. Removing the annuli changes no Euler characteristic, while the $2g$ disk caps raise it from $1-2g$ to $1$. The connected oriented one-boundary surface is a disk: the geometric cut-system polygon is a sphere with $2g+1$ boundary circles, and the caps fill its $2g$ inner circles. Its only outer boundary is still $K$, and its original boundary product collar is unchanged. Finally radial rescaling of the literal radius-$3/2$ ball to $B^4$ carries this locally flat proper disk to the desired one. [F1, F4, step 2.1, construct] ∎
