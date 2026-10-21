---
id: ex-knot-kt-26-worked-cases
kind: example
title: E8 as the lattice input to a conditional sliceness obstruction
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-e8-root-lattice
  - thm-e8-lattice-is-even-unimodular-and-nondiagonal
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $K\subset S^3$ be a smooth oriented knot and suppose its double branched cover bounds a compact simply connected positive-definite smooth four-manifold $W$ whose boundary intersection lattice is isometric to $L_{E_8}$. Then this particular filling lattice has rank eight and has no isometric full-rank embedding into the standard lattice $\mathbb Z^8$. This verifies the algebraic nonembedding input for the conditional KT-26 sliceness obstruction. It does not assert that a specified knot has such a filling, that every slice-disk branched cover satisfies boundary normal generation, or that the conditional obstruction proves any further numerical four-ball-genus bound.

## Example references

[[def-e8-root-lattice|The explicit E8 Gram matrix]]

[[thm-e8-lattice-is-even-unimodular-and-nondiagonal|E8 determinant and nonembedding calculation]]

## Facts & Assumptions

**Given:** A knot $K$ and a positive-definite filling $W$ with boundary intersection lattice isometric to $L_{E_8}$.

[F1] The E8 lattice is rank eight, positive definite, has determinant one, and admits no isometric full-rank embedding into $\mathbb Z^8$. [[thm-e8-lattice-is-even-unimodular-and-nondiagonal]]

## Verification

1.1 An isometry $Q_W\cong L_{E_8}$ identifies the rank of $Q_W$ with eight and transports any proposed isometric full-rank embedding $Q_W\hookrightarrow\mathbb Z^8$ to one from $L_{E_8}$. [given, F1, construct]

1.2 Such an embedding is excluded by [F1]. Thus the algebraic nonembedding premise holds for this filling. No knot-level conclusion follows without the separate branched-cover gluing and gauge-theory hypotheses. [F1, step 1.1] ∎
