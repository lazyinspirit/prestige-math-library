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

[L1] [[def-knot-floer-cobordism-map]] defines a representative by composing elementary triangle, handle, band, and basepoint maps, but its Definition says independence from the chosen decomposition and regular data is a separate naturality assertion. The current proof is `not-supplied`.

[L2] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] supplies actual full-marked triangle regularity, finite counts, compactified boundaries, gluing and fixed-end auxiliary-data homotopies on explicit small positive-rank triple-free representatives with transported Spin-c and strict admissibility, and on the direct rank-zero point model. It proves the bilinear chain-map equation; insertion of a distinguished top input still requires that input to be an actual cycle. It supplies neither an absolute Alexander shift nor nonvanishing of a large-surgery map.

[L3] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]] states filtered equivariant chain homotopy invariance and the composition law, but its current proof is `not-supplied` and the finite movie-move checks remain open.

[L4] [[lem-smooth-link-cobordisms-admit-finite-generic-movies]] is the exact finite-movie existence input of the generic-movie definition. The carrier exists but is not registered in a batch manifest and has no current Step-1 decision; its proof/readiness is unresolved.

[L5] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] is the required bridge from the normalized grid complexes to the analytic filtered knot Floer complexes. Its current Step-1 decision is escalated, so its grid-to-analytic and absolute-grading claims are not treated as proved.

## Proof

1.1 The declared geometric route first needs a finite generic movie of the actual embedded surface $S$. The movie definition specifies the elementary events once a generic movie is given; it does not prove existence for every $S$. That existence is assigned to [L4], whose current carrier is unregistered and has no readiness record, so this step cannot yet be completed under [A1]. [A1, L4, given, construct]

2.1 Even after a movie is supplied, the claimed filtration shift requires proved triangle-count chain maps, compactified moduli-space boundary and gluing analysis, an exact Alexander/Spin-c grading-shift calculation with its smooth hypotheses, nonvanishing for the relevant large-surgery maps, and invariance under the movie changes. The actual triangle analysis [L2] supplies its local analytic part on the permitted generic representatives. The current map definition [L1] and naturality statement [L3] do not supply the required top-input, absolute grading, nonvanishing or movie-comparison arguments; the normalized analytic comparison [L5] is also unresolved. No genus estimate follows from the cited statements alone, so the lemma remains escalated. [L1, L2, L3, L5, step 1.1, given]
