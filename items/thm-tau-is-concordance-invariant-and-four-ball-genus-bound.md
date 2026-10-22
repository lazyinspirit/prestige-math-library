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
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The Statement retains the run’s AC_omega assumption. Hom’s knot-invariant and genus theorems are imported as stated; the source does not specify a weaker set-theoretic base, and no local analytic reconstruction is claimed."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

[A1] [[def-countable-choice]] states the axiom retained in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]] defines the diagramwise threshold as the least Alexander level whose inclusion has nonzero image in total homology. Hom's §3.1 definition uses the same normalized knot Floer filtration; because $\widehat{HF}(S^3)\cong\mathbb F_2$, nonzero image is equivalent to surjectivity.

[F2] **External input, authorized by the run-specific source boundary.** Hom, *A survey on Heegaard Floer homology and concordance*, §3.1, Theorem 3.1(1), printed p. 8, states that $\tau$ is a surjective homomorphism from the smooth knot concordance group to $\mathbb Z$. It therefore includes diagram independence, smooth concordance invariance, and connected-sum additivity. The survey states on printed p. 2 that it works throughout with $\mathbb F_2$ coefficients. I read the threshold definition and theorem statement; I do not claim to reconstruct the cited proof.

[F3] **External input, authorized by the run-specific source boundary.** Hom, §3.1, Theorem 3.1(2), printed p. 8, states $|\tau(K)|\le g_4(K)$ for the smooth four-ball genus.

[F4] [[def-smooth-and-topological-slice-genus]] uses the same minimum over smooth connected oriented properly embedded surfaces in $B^4$ as Hom's $g_4$.

## Proof

**Given:** The hypotheses of the Statement.

1.1 The threshold in [F1] is Hom's standard $\tau$ definition: both use the normalized Alexander-filtered knot Floer complex and the first level whose inclusion maps nontrivially to total homology. The target is one-dimensional, so the nonzero-image and surjectivity formulations agree. Thus Hom's $\tau(K)$ is the common normalized threshold asserted here. [F1, given, algebra]

2.1 Hom's homomorphism theorem [F2] gives diagram independence, invariance under smooth concordance, and $\tau(K\#J)=\tau(K)+\tau(J)$. [F2, step 1.1, algebra]

3.1 Hom's genus theorem [F3], with the identical genus convention [F4], gives $|\tau(K)|\le g_4^{\mathrm{sm}}(K)$. This proves the remaining conclusion. [F3, F4, step 1.1, algebra] ∎
