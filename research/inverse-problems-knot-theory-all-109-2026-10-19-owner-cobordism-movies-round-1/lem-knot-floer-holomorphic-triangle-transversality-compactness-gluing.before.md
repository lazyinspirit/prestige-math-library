---
id: lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
kind: lemma
title: "Regularity, compactness, and gluing for decorated knot Floer triangles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
  - def-knot-floer-cobordism-map
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega for countable generic-regularity choices across the pointed triangle classes."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§3 and 5–9"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.11–68; admissible colored diagrams, triangle maps, basepoint multiplicities, and algebraic relations used by the cobordism construction"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §§3.2–3.8"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Printed pp.19–33; Fredholm regularity, compactness, index-two boundary strata, and gluing for disk moduli spaces"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; pointed disk counts and the analytic boundary of the grid comparison"
---

## Statement

Assume countable choice. Let \((S,\boldsymbol\alpha,\boldsymbol\beta,\boldsymbol\gamma,w,z)\) be a strongly admissible pointed Heegaard triple for a decorated knot cobordism, and fix one Spin-c structure \(\mathfrak s\) and nonnegative \(w,z\)-multiplicities. For generic one-parameter almost-complex data compatible with the ends, the Maslov-index-zero triangle moduli spaces used in the triangle-count map are regular and finite after quotienting by the relevant automorphism group. The compactified one-dimensional Maslov-index-one triangle spaces have precisely the broken triangle/strip strata and the allowed boundary-degeneration strata; gluing supplies collars at broken ends. In the mod-two count, the boundary terms give the chain-map equation and the chain homotopies required when the auxiliary data vary. No additional ends arise from sphere bubbling, escape through nonzero periodic domains, or uncontrolled marked-point multiplicities.

## Statement references

[[def-admissible-pointed-heegaard-floer-data|Pointed Heegaard data and admissibility]]

[[def-knot-floer-cobordism-map|The triangle-count map and its Spin-c indexing]]

[[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing|The disk-analysis supplier and its stated scope]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§3 and 5–9](https://arxiv.org/pdf/1610.05207v3)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§3.2–3.8](https://arxiv.org/pdf/math/0101206)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Unresolved proof obligations

The full marked-point triangle analysis remains to be supplied. In particular, no complete proof has been authored here for uniform transversality over the required classes, compactness with the two-color weights, exclusion and cancellation of all codimension-one boundary strata, or triangle gluing for the one-parameter families used to prove the chain-map and homotopy identities. The current disk-analysis supplier is an unresolved prerequisite, not a proof of these stronger triangle claims.
