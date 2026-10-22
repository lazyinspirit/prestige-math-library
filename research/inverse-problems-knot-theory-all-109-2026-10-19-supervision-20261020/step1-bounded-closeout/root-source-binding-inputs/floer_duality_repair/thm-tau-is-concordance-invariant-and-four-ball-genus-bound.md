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
  - lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms
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

[F3] [[lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms]] moves an interior point of a smooth properly embedded genus-$g$ four-ball surface to zero, flattens it near zero by supported ambient isotopies, and removes a sufficiently small actual round ball. The explicitly concentric shell is $S^3\times[0,1]$ and the residual surface is a connected genus-$g$ smooth cobordism with product collars between its boundary knot and a standard unknot. It fixes a sufficiently small restriction of the supplied outer collar, not an arbitrary entire collar.

[F4] The normalized knot/grid and analytic comparisons supply diagram independence, the actual hat threshold, and common absolute Alexander normalization. [[lem-tau-is-independent-of-heegaard-grid]]

[F6] The genus-$g$ inequality $|\tau(K_1)-\tau(K_0)|\le g$ is supplied for the actual smooth oriented knot cobordism with its product collars. Its proof explicitly imports the fixed large-negative-surgery nonvanishing and trace-cap vanishing operations from Ozsváth–Szabó, Proposition3.1, Lemma3.5 and the proof of Theorem1.1, and gives the finite-data ACω specialization and local integer/surface argument. It does not claim a completed general decorated-movie construction. [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]]

[F5] The full supplied filtered connected-sum tensor comparison gives tau additivity in the same normalization. [[lem-tau-connected-sum-filtered-tensor-product]]

## Proof

1.1 By [F4] the diagramwise threshold defines a single invariant $\tau(K)$, and [F5] proves $\tau(K\#J)=\tau(K)+\tau(J)$. Apply [F6] to a smooth genus-zero concordance to obtain $|\tau(K_1)-\tau(K_0)|\le0$, hence equality. These give diagram independence, concordance invariance and connected-sum additivity in the original normalization. The geometric input is the explicitly external fixed-surgery/cap result in [F6], not a conclusion inferred solely from absolute grading. [F4, F5, F6, given, algebra]

2.1 Let $g=g_4^{\mathrm{sm}}(K)$ and choose a smooth genus-$g$ surface realizing the minimum by [F2]. Apply [F3] to this actual embedded surface. Its supported ambient diffeomorphism fixes the boundary knot, flattens the surface near the center, and permits removal of a sufficiently small concentric round ball. The explicit round shell contains the residual connected genus-$g$ cobordism between $K$ and a standard unknot $U$, with the required product collars. No complement of an arbitrary embedded chart ball is identified with a standard shell. The supplied inequality [F6] gives $|\tau(K)-\tau(U)|\le g$; by [F1], $\tau(U)=0$, yielding the desired bound. This proves the genus bound for the chosen minimizing surface and therefore for the minimum genus. [A1, F1, F2, F3, F6, given, construct, algebra]

## External-input boundary

The original Statement follows from the displayed local deductions and the accepted model/tensor interfaces. Its geometric genus inequality uses the explicitly external Ozsváth–Szabó finite surgery/cap operations and the ACω specialization recorded in [F6]. No full-AC hypothesis or general movie theorem is substituted. The puncturing argument retains the actual concentric-shell and smaller-collar conventions.
