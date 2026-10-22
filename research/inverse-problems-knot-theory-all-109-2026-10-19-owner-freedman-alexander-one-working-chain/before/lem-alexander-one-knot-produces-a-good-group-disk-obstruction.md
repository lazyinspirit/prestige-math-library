---
id: lem-alexander-one-knot-produces-a-good-group-disk-obstruction
kind: lemma
title: "An Alexander-one knot supplies good-group disk-embedding data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-alexander-one-knot-has-trivial-alexander-basis
  - def-freedman-good-group-and-disk-embedding-data
  - def-good-fundamental-group-for-disk-embedding
  - thm-infinite-cyclic-group-is-good-for-disk-embedding
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 14
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
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "Appendix A, Lemma A.1 and the complete Alexander-one construction, printed pp.12–13"
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§§11.6–11.7, printed pp.205–211"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot with $\Delta_K(t)\doteq1$, where $\doteq$ denotes equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$. There are a compact topological $4$-manifold $N$ and a finite family of proper generically immersed disks in $N$ with pairwise disjoint framed boundary circles such that $\pi_1(N)\cong\mathbb Z$, all their Wall mutual and self-intersection obstructions vanish in the equivariant conventions of the disk-embedding data definition, and they admit framed immersed algebraically dual $2$-spheres. The group $\mathbb Z$ in this data is good for disk embedding, provided the infinite-cyclic good-group theorem is supplied.

## Statement references

[[lem-alexander-one-knot-has-trivial-alexander-basis|The required trivial Alexander basis on a Seifert surface]]

[[def-freedman-good-group-and-disk-embedding-data|Relative immersed disk data and Wall obstructions]]

[[thm-infinite-cyclic-group-is-good-for-disk-embedding|Goodness of the infinite cyclic group]]

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Appendix A, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$ with $\Delta_K(t)\doteq1$, and the relative disk-data conventions.

[A1] [[def-axiom-of-choice]]: Full AC is assumed by the determinant and Seifert-form interfaces.

[F2] [[def-freedman-good-group-and-disk-embedding-data]]: The required output consists of proper immersed disks, vanishing equivariant Wall obstructions, and framed algebraically dual spheres.

[F3] [[def-good-fundamental-group-for-disk-embedding]]: Goodness is the $π_1$-null disk property for all based disk-like height-$1.5$ capped gropes and all homomorphisms to the group.

## Proof

1.1 By [F3], verifying goodness for the eventual group $\pi_1(N)$ requires the stated nullity property for every homomorphism labeling the grope. The proposed construction starts from a trivial Alexander basis on a Seifert surface, pushes that surface into the $4$-ball, and places immersed disks for downward push-offs of its basis curves in the complement $N$. The basis-existence supplier remains unproved in this batch, so this is a description of the route, not an admitted input. [given, A1, F3]

1.2 To finish, one must prove locally that $\pi_1(N)\cong\mathbb Z$, that the disk intersections vanish in $\mathbb Z[\mathbb Z]$, and that the boundary tori can be surgered to framed dual spheres whose group-ring intersection matrix is triangular with diagonal $1$. [F2, step 1.1]

## Unresolved proof obligation

Unresolved supplier [[lem-alexander-one-knot-has-trivial-alexander-basis]]: establish the trivial Alexander basis locally. Then supply the complement handle/Morse argument, generic immersed-disk existence, group-ring intersection calculation, torus-to-sphere surgery and framing check, and triangular row-elimination proof in the exact intersection convention. The good-group conclusion also requires the unresolved local proof of [[thm-infinite-cyclic-group-is-good-for-disk-embedding]].
