---
id: def-cyclic-zero-surgery-cover
kind: definition
title: Cyclic cover of zero surgery on a knot
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-knot-meridian-and-preferred-longitude
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Anthony Conway, Algebraic Concordance and Casson–Gordon Invariants
      url: https://web.archive.org/web/20240101000000id_/https://www.unige.ch/math/folks/conway/Notes/AlgebraicConcordanceCassonGordon.pdf
      locator: §2.6, Lemma2.31, printed pp.23–24, zero-surgery cyclic-cover baseline. The specified meridian map and connected cover are local defining conventions; no new proof or reading extent is inferred.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---
## Definition

Assume AC. Let $K$ be a smooth oriented knot and $q\ge2$. Let $S^3_0(K)$ be zero-framed Dehn surgery on $K$, filling its exterior along the preferred longitude. Let $M_{0,q}$ be the connected $q$-fold cyclic cover classified by the meridian map to $\mathbb Z/q$, and let $\widetilde\mu$ denote the lift of the meridian direction in the filled cover.

## Definition references

[[def-cyclic-branched-cover-of-a-knot|The meridian-mod-q cover convention]]

[[def-knot-meridian-and-preferred-longitude|The preferred longitude used for zero surgery]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.5.3, p. 139](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]
