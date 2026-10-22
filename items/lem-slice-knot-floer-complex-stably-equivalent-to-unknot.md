---
id: lem-slice-knot-floer-complex-stably-equivalent-to-unknot
kind: lemma
title: "A smooth slice knot has a knot Floer complex stably equivalent to the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-admissible-pointed-heegaard-floer-data
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The algebraic splitting and tensor arguments use no choice. Constructing and comparing the analytic cobordism maps uses the declared ACω branch; full AC is not inferred."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance, Theorem 1 and §3.2"
      url: "https://arxiv.org/pdf/1512.00383"
      locator: "Theorem 1 and §3.2; stable filtered equivalence for concordant knots"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §§2–3"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§§2–3; connected-sum tensor conventions, reverse-mirror duality, and the slice-complex argument"
---

## Statement

Assume the Axiom of Countable Choice. Let $K\subset S^3$ be a smooth oriented knot smoothly concordant to the unknot. Then there are finite-rank free $\mathbb F_2[U,U^{-1}]$ bifiltered chain complexes $A$ and $B$, each having zero total homology, such that
$$ \mathrm{CFK}^{\infty}(K)\oplus A\simeq \Lambda\oplus B, $$
where $\Lambda=\mathbb F_2[U,U^{-1}]$ is the normalized unknot complex with zero differential and generator in Maslov grading and both filtration coordinates zero, and $\simeq$ is a Maslov-graded filtered chain homotopy equivalence whose maps and homotopies do not increase either filtration. The acyclic summands are acyclic only after the filtrations are forgotten; no acyclicity of their associated-graded complexes is asserted.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance from a knot to the unknot]]

[Hom, *A survey on Heegaard Floer homology and concordance*, Theorem 1 and §3.2](https://arxiv.org/pdf/1512.00383)

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A smooth concordance from $K$ to the unknot, the accepted normalized knot complex over $\Lambda=\mathbb F_2[U,U^{-1}]$, and ACω.

[F1] Smooth concordance is represented by the actual annulus in the Statement. [[def-smooth-knot-concordance]]

[F2] The accepted normalized knot/grid and analytic comparisons identify the finite homogeneous bifiltered complex, total generator and both grading origins. [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]], [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

[F3] **External Floer input under CLAUDE.md §12:** a smoothly slice knot has $\mathrm{CFK}^{\infty}(K)\simeq\mathrm{CFK}^{\infty}(U)\oplus D$ as a graded bifiltered Laurent chain complex, with $D$ finite-rank free and totally acyclic. The finite homogeneous filtered-basis splitting and the concordance-to-slice application are [Hom, *A survey on Heegaard Floer homology and concordance*, Theorem1, Proposition3.11 and its proof, and proof of Theorem1, printed1–2,12–14](https://arxiv.org/pdf/1512.00383v3). Coefficients are $\mathbb F_2$; acyclicity concerns total homology and not associated gradeds. The unknot factor has the usual Maslov-zero and $(0,0)$ origin. This is an external established input, not a completed local decorated-annulus/movie construction. The cited statements and finite splitting proof on printed1–2,12–14 were read; no complete reading of the survey or its upstream surgery references is claimed.

[F4] **Choice scope of the external input:** use it for the fixed knot diagram and finite smooth concordance/surface under consideration, not for a simultaneous choice of data for every knot. Integer domains and Spin-c labels form countable sets; all coefficient matrices and final graded basis changes are finite. Compact source charts give separable Sobolev and almost-complex parameter spaces with countable bases. Their fixed Fredholm problems admit a countable family of finite-cokernel perturbation charts, selected using ACω; the usual finite-dimensional Sard reduction and least-basis nested-ball Baire construction select one datum regular for the countable list. Compactness/gluing is used pointwise for these data, with finite covers of the compact low-index moduli and least-integer shrinking thresholds, not an arbitrary family of choices. Thus the imported fixed-data construction has a finite/countable specialization; full AC is not substituted for the declared ACω branch. The cited papers are not claimed to contain an explicit foundational choice audit.

## Proof

1.1 The given annulus makes $K$ smoothly slice in exactly the sense of [F3]. Use [F2] to identify the input with its normalized finite homogeneous model. Apply [F3] at these fixed data, with the finite/countable specialization [F4], to obtain $C(K)\simeq\Lambda\oplus D$ with all maps and homotopies preserving both filtrations and Maslov grading. Its displayed unknot factor has the same origins as the Statement; no Alexander translation or positive $U$-power is inserted. [given, F1, F2, F3, F4, construct]

2.1 Set $A=0$ and $B=D$. The zero complex is finite-rank free and totally acyclic, as is $D$ by [F3]. The equivalence in step1.1 is therefore the exact stable equivalence requested. No associated-graded acyclicity or filtration-preserving contraction of $D$ is claimed. This closes the original Statement by the explicit external slice-splitting input; the earlier locally attempted movie admission is not represented as a proof. [F3, step 1.1, algebra] ∎

