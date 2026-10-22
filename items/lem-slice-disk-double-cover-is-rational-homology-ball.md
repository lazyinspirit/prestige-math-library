---
id: lem-slice-disk-double-cover-is-rational-homology-ball
kind: lemma
title: "The smooth slice-disk double cover is a rational homology ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-cyclic-branched-cover-of-a-knot
  - lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball
  - def-axiom-of-choice
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC, as required by the smooth-disk double-cover supplier."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Ralph H. Fox and John W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots"
      url: "https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf"
      locator: "Section 2, Theorem 2 proves the Alexander-polynomial factorization condition for slice knots; cited as related context only. The mod-two homology of the branched cover is proved in the local supplier."
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 10.C, cyclic covers, positive meridian, and branched filling"
---

## Statement

Assume AC. Let $K\subset S^3$ be a smooth oriented knot and let $D\subset B^4$ be a smooth properly embedded disk with boundary $K$. Let $W_D$ be the connected double cover of $B^4$ branched along $D$. Then $W_D$ is a rational homology four-ball and its oriented boundary is the double branched cover $\Sigma_2(K)$ formed using the positive-meridian convention. This assertion concerns smooth disks only and makes no claim for locally flat topological disks.

## Statement references

[[def-cyclic-branched-cover-of-a-knot|The positive-meridian convention for the cyclic branched cover]]

[[lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball|The smooth slice-disk cover homology result]]

## Facts & Assumptions

**Given:** AC, a smooth oriented knot $K\subset S^3$, and a smooth proper disk $D\subset B^4$ with $\partial D=K$.

[A1] AC is assumed by the published smooth-disk cover theorem ([[def-axiom-of-choice]]).

[F1] The double cyclic branched cover $\Sigma_2(K)$ is obtained from the connected exterior cover whose monodromy sends a positive meridian to the generator of $\mathbb Z/2$, by filling along the closed lift of the squared meridian. Its oriented branched map has local form $(s,z)\mapsto(s,z^2)$ near $K$ ([[def-cyclic-branched-cover-of-a-knot]]).

[F2] Under AC, the connected double cover of $B^4$ branched over a smooth properly embedded disk is a compact connected oriented smooth rational homology four-ball, and its boundary is the double cover of $S^3$ branched over the disk's boundary. The supplier constructs it using the orientation-preserving normal model $(x,z)\mapsto(x,z^2)$, with a product collar at the boundary ([[lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball]]).

## Proof
**Proof technique:** apply the smooth-disk cover result and identify the boundary cover.

**Given:** The data above.

1.1 By [F2], the connected branched double cover $W_D$ has the rational homology of a point; smoothness and properness of the disk are exactly the hypotheses of that supplier. [A1, F2, given]

2.1 By [F2], the restriction of the covering map to $\partial B^4=S^3$ is the double cover branched along $\partial D=K$. Its exterior cover is connected because the local model $z\mapsto z^2$ gives nontrivial monodromy on a positive meridian. Thus its exterior cover and meridional filling are exactly those defining $\Sigma_2(K)$ in [F1]. The orientation pulled back off the branch locus induces the same boundary orientation, since the product collar in [F2] preserves the outward normal. Therefore $\partial W_D=\Sigma_2(K)$ as oriented manifolds. The supplier was used only for smooth disks, so no topological-disk conclusion follows. [F1, F2, given, construct] ∎
