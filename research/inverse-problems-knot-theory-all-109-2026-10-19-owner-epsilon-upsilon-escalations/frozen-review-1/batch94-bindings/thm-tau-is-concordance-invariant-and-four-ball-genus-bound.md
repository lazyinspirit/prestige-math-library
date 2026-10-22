---
id: thm-tau-is-concordance-invariant-and-four-ball-genus-bound
kind: theorem
title: "Tau is an additive smooth concordance invariant and bounds four-ball genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - lem-tau-of-the-unknot-is-zero
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - lem-tau-connected-sum-filtered-tensor-product
  - def-smooth-knot-concordance
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - thm-isotopy-extension
  - def-countable-choice
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the smooth slice-genus minimum and finite cobordism constructions. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Theorem 1.1 and §§3.3–3.5, printed pp.2 and 9–15"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1–3.2, printed pp.8–12"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 6, 8, and 13; tau, filtered cobordism maps, and the four-ball genus bound"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in the standard oriented three-sphere, the common normalized filtered knot Floer threshold $\tau(K)$ is independent of the admissible diagram and is invariant under smooth concordance. For all smooth oriented knots $K,J$, it satisfies
$$\tau(K\#J)=\tau(K)+\tau(J).$$
If $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a smooth compact connected oriented properly embedded surface in the four-ball with boundary $K$, then
$$|\tau(K)|\le g_4^{\mathrm{sm}}(K).$$

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized filtered threshold defining tau]]

[[def-smooth-knot-concordance|Smooth concordance with product collars]]

[[def-smooth-and-topological-slice-genus|The smooth four-ball genus]]

[[lem-tau-is-independent-of-heegaard-grid|The diagram and grid comparison needed for a knot invariant]]

[[lem-knot-floer-large-surgery-and-filtered-cobordism-input|The genus shift for smooth knot cobordisms]]

[[lem-tau-connected-sum-filtered-tensor-product|The filtered tensor product for connected sums]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Theorem 1.1](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1–3.2](https://arxiv.org/pdf/1512.00383v3)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 6, 8, and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, smooth oriented knots, and the standard normalized filtered knot Floer models.

[A1] [[def-countable-choice]] states that every sequence of nonempty sets admits a choice function; this is the axiom branch used by the slice-genus minimum and the finite diagram choices.

[F1] [[lem-tau-of-the-unknot-is-zero]] computes the normalized tau value of the standard unknot as zero.

[F2] [[lem-smooth-and-topological-slice-genus-minima-exist]] proves that the nonempty set of smooth slice-surface genera has a least element under its stated countable-choice branch.

[F3] [[thm-isotopy-extension]] extends a smooth isotopy of a compact embedded ball, supported in the interior of the four-ball, to an ambient isotopy supported in a prescribed neighborhood; its clause for interior-valued tracks keeps the boundary fixed.

[L1] [[lem-tau-is-independent-of-heegaard-grid]] has the full diagram/grid-independence Statement, but its current proof leaves the required grid-to-analytic and filtered move maps unresolved.

[L2] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] states the genus-$g$ cobordism inequality $|\tau(K_1)-\tau(K_0)|\le g$, but its current proof leaves the triangle-map, adjunction, movie, and normalization obligations open.

[L3] [[lem-tau-connected-sum-filtered-tensor-product]] states the filtered connected-sum equivalence and tau additivity, but its current proof leaves the neck-stretching Kunneth equivalence open.

## Proof

1.1 If [L1] is established, the diagramwise threshold defines a single value for each knot. If [L2] is established, applying it to a genus-zero concordance gives $|\tau(K_1)-\tau(K_0)|\le0$, hence equality. If [L3] is established, its filtered tensor conclusion gives the stated connected-sum additivity. These are valid consequences of those three inputs, but none is used as a proved fact here because their current supplier proofs are incomplete. [L1, L2, L3, given]

2.1 Let $g=g_4^{\mathrm{sm}}(K)$ and choose a smooth genus-$g$ surface realizing the minimum by [F2]. At an interior point of the surface, a submanifold chart identifies a neighborhood pair with a standard four-ball and a standard two-disk. Shrinking this chart ball and using [F3] to carry it to a round interior ball gives a shell diffeomorphic to $S^3\times[0,1]$; deleting the disk leaves a connected genus-$g$ cobordism from $K$ to the boundary of the standard disk, an unknot $U$. If [L2] were proved, it would give $|\tau(K)-\tau(U)|\le g$; by [F1], $\tau(U)=0$, yielding the desired bound. The surface construction and final arithmetic are complete, but [L2] is not, so the genus conclusion is conditional. [A1, F1, F2, F3, L2, given, construct, algebra]
