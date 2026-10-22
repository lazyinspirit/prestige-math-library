---
id: lem-knot-floer-large-surgery-and-filtered-cobordism-input
kind: lemma
title: "Knot Floer cobordism maps give the tau genus shift"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - def-smooth-knot-concordance
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-tau-threshold-under-nonzero-filtered-maps
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is required for the finite adapted movie and diagram choices in the declared route. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Theorem 1.1 and §§3.3–3.5, printed pp.2 and 9–15; large-surgery cobordism maps, adjunction, and the four-ball genus bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1–3.2, printed pp.8–12; tau threshold, genus bound, and large-surgery maps"
    - title: "Ian Zemke, Link cobordisms and absolute gradings on link Floer homology"
      url: "https://arxiv.org/pdf/1701.03454v2"
      locator: "Theorem 1.4, §§7.3, 9.9, and 10.1; Alexander grading shifts and the cobordism genus inequality"
---

## Statement

Assume the Axiom of Countable Choice. Let $S$ be a connected compact smooth oriented surface properly embedded in $S^3\times[0,1]$, with product collars and oriented boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$ for smooth oriented knots $K_0,K_1$. Let $g$ be the genus of $S$, and use the standard absolute Alexander normalization for the endpoint knot Floer complexes. Then
$$|\tau(K_1)-\tau(K_0)|\le g.$$
In particular, a smooth concordance annulus gives equal tau values, and a genus-$g$ surface from a knot to the unknot gives the four-ball genus estimate.

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau value from the filtered complex]]

[[def-smooth-knot-concordance|Smooth cobordisms with oriented boundary and product collars]]

[[def-knot-floer-cobordism-map|The representative map for a decorated knot cobordism]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|The required triangle moduli spaces]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Theorem 1.1 and §§3.3–3.5](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1–3.2](https://arxiv.org/pdf/1512.00383v3)

[Zemke, *Link cobordisms and absolute gradings on link Floer homology*, Theorem 10.1](https://arxiv.org/pdf/1701.03454v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the collared smooth oriented cobordism $S$, its endpoint knots, and the fixed Alexander normalization.

[A1] [[def-countable-choice]] states that every sequence of nonempty sets has a choice function; the declared movie and diagram route uses this axiom.

[F1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] supplies the retained normalized full filtered grid/analytic comparison, including the actual chosen-variable versus collapsed-variable stabilization factors. That completed interface is reused without reading its proof; the historical grid hold is not a current missing input here.

[F2] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] supplies actual full-marked triangle regularity, finite counts, compactified boundaries, gluing and fixed-end auxiliary-data homotopies on its explicit positive-rank generic representatives with transported Spin-c and strict admissibility, and on the direct rank-zero point model. Its bilinear chain-map equation requires an actual cycle for a distinguished inserted top input. It does not assert an absolute Alexander shift or large-surgery nonvanishing.

[F3] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] supplies actual fixed-Spin-c infinity/plus cobordism maps between rational homology spheres, their handle-presentation independence and the absolute Maslov degree $(c_1^2-2\chi-3\sigma)/4$. This completed grading interface is reused directly. The theorem's degree is a Maslov degree, not a knot Alexander-filtration bound; it does not identify a knot large-surgery threshold or assert an adjunction inequality for every embedded surface.

[F4] [[lem-tau-threshold-under-nonzero-filtered-maps]] supplies the exact finite algebra: nonzero maps on one-dimensional total hat homology with filtration shift at most $g$ in both directions imply $|\tau(K_1)-\tau(K_0)|\le g$.

[L1] [[def-knot-floer-cobordism-map]] defines representative maps by composing elementary operations, and explicitly leaves decomposition independence to a separate assertion. A map definition alone does not provide the requisite nonzero generator or Alexander shift.

[L2] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]] is the declared global movie comparison. The retained decorated-cobordism attempt remains held at actual simultaneous colored incident-band endpoint normal form and compatible movie admission; local analytic counts are not a replacement for these geometric bindings.

[L3] [[lem-smooth-link-cobordisms-admit-finite-generic-movies]] is the movie-existence input. Even after a movie exists, the compatible decorated diagrams, transported endpoint marking and the genus-shift calculation still have to be supplied.

## Proof

1.1 Convert the normalized endpoint complexes using [F1]. The missing conclusion can now be isolated precisely, without treating grid comparison or generic rational Maslov grading as unresolved: one needs actual chain maps in both directions between these endpoint hat complexes, nonzero on their one-dimensional total homology, whose Alexander filtration shifts are at most $g$. Given those data, [F4] proves the Statement immediately. This is an exact conditional deduction, not existence of those maps. [F1, F4, given, algebra]

2.1 The retained triangle analysis [F2] proves the local analytic chain-map identities on its actual admitted inputs; [F3] supplies the genuine rational absolute grading and handle maps. Neither identifies a knot large-surgery map with the normalized knot filtration, proves nonvanishing of that map at the relevant threshold, or supplies the surface adjunction calculation. The alternate decorated route still needs [L1]–[L3]'s actual incident-band, endpoint, global comparison and grading operations. Therefore the smallest remaining input is the geometric nonzero filtered-map construction of step 1.1, or an actual large-surgery identification plus threshold nonvanishing and adjunction proof yielding the same inequality. It is not another proof of analytic regularity, the tensor theorem, or rational absolute grading. [F1, F2, F3, F4, L1, L2, L3, step 1.1, given]

3.1 No accepted Statement used here supplies that remaining map construction. The full genus inequality, its concordance corollary and the four-ball specialization consequently remain held. This bounded update removes the stale analytic/grid holds while preserving the original genus claim and its precise genuine source gap. It introduces no full-Choice substitute under the Countable Choice hypothesis and no external theorem exception. [F1, F2, F3, F4, L1, L2, L3, step 1.1, step 2.1]
