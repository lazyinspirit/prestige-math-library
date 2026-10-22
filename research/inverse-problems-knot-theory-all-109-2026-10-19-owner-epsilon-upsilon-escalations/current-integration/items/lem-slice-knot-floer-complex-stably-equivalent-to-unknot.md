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

Let $K\subset S^3$ be a smooth oriented knot smoothly concordant to the unknot. Then there are finite-rank free $\mathbb F_2[U,U^{-1}]$ bifiltered chain complexes $A$ and $B$, each having zero total homology, such that
$$ \mathrm{CFK}^{\infty}(K)\oplus A\simeq \Lambda\oplus B, $$
where $\Lambda=\mathbb F_2[U,U^{-1}]$ is the normalized unknot complex with zero differential and generator in Maslov grading and both filtration coordinates zero, and $\simeq$ is a Maslov-graded filtered chain homotopy equivalence whose maps and homotopies do not increase either filtration. The acyclic summands are acyclic only after the filtrations are forgotten; no acyclicity of their associated-graded complexes is asserted.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance from a knot to the unknot]]

[Hom, *A survey on Heegaard Floer homology and concordance*, Theorem 1 and §3.2](https://arxiv.org/pdf/1512.00383)

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A smooth concordance from $K$ to the unknot and the normalized doubly filtered knot Floer complexes at its boundary.

[F1] [[def-smooth-knot-concordance]]: smooth concordance is represented by a smooth properly embedded annulus in $S^3\times[0,1]$ with the stated oriented boundary knots.

[F2] [[def-admissible-pointed-heegaard-floer-data]]: the Floer complexes at the annulus ends are defined from admissible pointed Heegaard data with the stated disk-count conventions.

[A8] [[def-decorated-link-cobordism-and-floer-target]]: a decorated annulus includes a properly embedded dividing one-manifold that separates the $w$- and $z$-regions and meets each end knot in two points.

[A1] [[def-knot-floer-cobordism-map]] (present definition, analytic construction unresolved): it fixes the decorated cobordism-map interface but does not prove the map exists with the required filtered properties.

[A2] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] (present, proof not supplied): the triangle-map analytic identities required for the cobordism comparison remain unproved.

[A3] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]] (present, proof not supplied): the needed composition and movie-invariance statement is not proved in its current carrier.

[A4] [[lem-knot-floer-large-surgery-and-filtered-cobordism-input]] (present, proof incomplete): its Statement gives a tau genus shift only; it does not state the filtered stable splitting asserted here.

[A5] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): the normalized grid-to-Heegaard model comparison needed to interpret the boundary complex is not proved.

[A6] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] (present, proof not supplied): the analytic disk-count comparison remains unresolved.

[A7] [[def-countable-choice]]: the analytic construction branch declares countable choice; this does not assert full choice.

## Proof

1.1 By [F1], there is a smooth annulus from $K$ to the unknot. Parametrize it by $S^1\times[0,1]$ with the boundary basepoints placed compatibly at the two ends. Choose distinct points $a,b\in S^1$ away from the two basepoints, with each complementary arc containing one basepoint at each end. The product arcs $\{a,b\}\times[0,1]$ are disjoint and divide the annulus into two strips, each meeting the closure of one $w$-basepoint interval and one $z$-basepoint interval. Thus [A8] supplies a dividing set satisfying the decorated-annulus conditions. The desired stable filtered equivalence would follow from filtered chain maps for this annulus and its reverse, together with chain homotopies identifying their composites with the identity after adding totally acyclic summands. [given, F1, A8, A1, construct]

1.2 The current cobordism-map, triangle, and naturality carriers [A1]–[A3] do not establish those filtered chain maps, their reverse, or the composition homotopies. The batch-94 large-surgery item [A4] proves only a tau genus shift, so it cannot supply the stronger stable splitting. The model-comparison and disk-analysis inputs [A5]–[A6] also remain unproved; [F2] supplies only the admissible-data convention, and the declared ACω branch [A7] does not supply the analytic arguments. Consequently the annulus argument does not yet establish the displayed equivalence. [given, F2, A1, A2, A3, A4, A5, A6, A7, algebra]

## Unresolved proof obligations

The exact missing result is a proof that the decorated annulus maps in both directions induce filtered chain homotopy equivalences after adding finite-rank totally acyclic summands. This requires the batch-92 grid/Heegaard comparison and disk analysis, and the batch-93 cobordism-map construction, triangle transversality/compactness/gluing, and naturality/movie-invariance proofs, all of which are present but unproved in their current carriers. The batch-94 large-surgery item states a tau estimate only and is not a substitute. This lemma is escalated.
