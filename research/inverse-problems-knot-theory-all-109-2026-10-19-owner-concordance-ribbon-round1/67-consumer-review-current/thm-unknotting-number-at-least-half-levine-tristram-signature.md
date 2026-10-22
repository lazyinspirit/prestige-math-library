---
id: thm-unknotting-number-at-least-half-levine-tristram-signature
kind: theorem
title: The classical signature bounds unknotting number
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-knot-bridge-position-and-unknotting-number
  - lem-rank-one-hermitian-signature-perturbation
  - lem-seifert-matrices-differ-rank-one-under-crossing-change
  - def-levine-tristram-hermitian-form-and-signature
  - lem-levine-tristram-hermitian-form-singular-set
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Proposition 2.3.9 and Corollary 2.3.10, printed pp. 24–25"
    - title: "Anthony Conway, The Levine–Tristram signature: a survey"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§§2.1 and 2.4, printed pp. 3–7, Hermitian form and signature convention"
---

## Statement

Assume full AC. For every smooth oriented knot $K$, the classical signature $\sigma_{-1}(K)$ of the positive-push Seifert form is independent of the chosen connected spanning surface and integral basis, and it satisfies
$$|\sigma_{-1}(K)|\le 2u(K).$$
Zero eigenvalues are omitted when computing the signature of a Hermitian matrix.

## Statement references

[[def-levine-tristram-hermitian-form-and-signature|The positive-push Hermitian form and the classical value at minus one]]

[[def-knot-bridge-position-and-unknotting-number|The unknotting number as a minimum crossing-change length]]

## Unresolved proof obligation

The intended local estimate applies the rank-one Seifert-matrix update `lem-seifert-matrices-differ-rank-one-under-crossing-change` and the Hermitian perturbation bound `lem-rank-one-hermitian-signature-perturbation` along a minimal unknotting sequence, then telescopes to the unknot value zero. That derivation requires a well-defined knot invariant at every stage. The current carrier `lem-seifert-matrices-of-a-knot-are-s-equivalent` is conditional on the unproved surface-arc-surgery supplier `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, and its own text explicitly escalates. The surface-and-basis invariance claim in `lem-seifert-stabilization-preserves-levine-tristram-signature` therefore cannot be used to identify successive diagram matrices with one knot signature. The -1 regular-parameter check in `lem-levine-tristram-hermitian-form-singular-set` must also be reconciled with the current singular-parameter convention. No complete proof is supplied here; the exact missing theory is the arbitrary-surface S-equivalence theorem, its signature-preservation consequence, and the nonsingularity check at -1.
