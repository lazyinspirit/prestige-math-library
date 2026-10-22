---
id: thm-ribbon-knot-is-smoothly-slice
kind: theorem
title: "Every ribbon knot is smoothly slice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-smooth-and-topological-slice-genus
  - thm-knot-concordance-is-an-abelian-group
  - def-ribbon-disk-and-ribbon-knot
  - lem-ribbon-singularity-local-resolution
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "ACω is the explicit background assumption of the library's smooth slice-genus convention. The local geometric resolution uses no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Definition 1.4, Proposition 1.5, and discussion following Conjecture 1.7, printed pp.3–5"
    - title: "Brendan Owens, Knots and 4-Manifolds, Winter Braids IX lecture notes"
      url: "https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf"
      locator: "Lecture 1, PDF pp.2–3, ribbon singularity resolution and radial Morse interpretation"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.3, printed p.323 (PDF p.5)"
---

## Statement

Assume the Axiom of Countable Choice. Every smooth oriented knot $K\subset S^3$ that bounds a smooth immersed disk in $S^3$ with only ribbon double arcs bounds a smooth properly embedded disk in $B^4$ with boundary $K$. In particular, its smooth slice genus is zero.

## Statement references

[[def-ribbon-disk-and-ribbon-knot|Ribbon immersion and ribbon-knot conventions]]

[[lem-ribbon-singularity-local-resolution|A ribbon immersion resolves rel boundary to a smooth proper disk]]

[[def-smooth-and-topological-slice-genus|Smooth slice genus and its ACω convention]]

[Ray, *Slice Knots and Knot Concordance*, §1.1](https://aru-ray.github.io/documents/slicenotes.pdf)

[Owens, *Knots and 4-Manifolds*, Lecture 1](https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf)

[Livingston, *A Survey of Classical Knot Concordance*, §2.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** ACω, a smooth oriented knot $K\subset S^3$, and a ribbon disk for $K$.

[F1] A ribbon disk is a smooth immersion of the oriented disk with embedded boundary $K$ and only finitely many ribbon double arcs, whose preimages are one proper arc and one interior arc. ([[def-ribbon-disk-and-ribbon-knot]])

[F2] Such an immersion has a smooth proper embedded resolution in $B^4$ fixed on its boundary. ([[lem-ribbon-singularity-local-resolution]])

[F3] The smooth slice genus is the minimum genus of a connected compact smooth oriented properly embedded surface in $B^4$ with boundary $K$; the disk has genus zero and all genera are nonnegative. ([[def-smooth-and-topological-slice-genus]])

[A1] ACω is the sequence-choice axiom assumed in [F3]. ([[def-countable-choice]])

## Proof

1.1 Choose a ribbon immersion $f:D^2\to S^3$ for $K$ as in [F1]. Applying [F2] gives a smooth proper embedding $\widetilde f:D^2\to B^4$ that agrees with $f$ on $\partial D^2$; hence its boundary is exactly the oriented knot $K$. [given, F1, F2, construct]

2.1 The image of $\widetilde f$ is a connected orientable disk, so its Euler characteristic is $1$ and its genus is $0$. By [F3], this disk is an admissible smooth spanning surface in the set defining $g_4^{\mathrm{sm}}(K)$; since that set contains $0$ and consists of nonnegative integers, $g_4^{\mathrm{sm}}(K)=0$. Thus $K$ is smoothly slice. The argument from [F1] to [F2] itself is choice-free; ACω is present only for the library's slice-genus convention [F3]. [given, F1, F2, F3, A1, step 1.1, algebra] ∎

## Remarks

This proves ribbon $\Rightarrow$ smooth sliceness. It makes no assertion that every smooth slice knot is ribbon.
