---
id: cex-knot-kt-26-boundary-case
kind: counterexample
title: The topological E8 manifold does not satisfy the smooth diagonalization conclusion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - thm-freedman-e8-topological-realization
  - thm-e8-lattice-is-even-unimodular-and-nondiagonal
  - def-axiom-of-choice
  - thm-donaldson-definite-diagonalization
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC for the explicitly imported Freedman TOP realization; the lattice specialization and counterexample inference are finite."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: Michael H. Freedman, The topology of four-dimensional manifolds
      url: https://www.maths.gla.ac.uk/~mpowell/1982_The%20topology%20of%20four-dimensional%20manifolds.pdf
      locator: Theorems 1.5 and 1.7, printed pp. 368–371
---

## Statement refuted

Under full AC, every closed connected simply connected oriented topological four-manifold with positive-definite integral intersection form has that form isometric over the integers to the standard diagonal lattice.

## Statement references

[[thm-donaldson-definite-diagonalization|The actual diagonalization theorem assumes a smooth four-manifold]]

## Facts & Assumptions

**Given:** Full AC and the topological-category assertion in the Statement refuted.

[F1] There is a closed connected simply connected oriented topological four-manifold $Y_{E_8}$ with intersection form $L_{E_8}$. The supplier explicitly applies Freedman's external realization theorem under the run-specific TOP exception; no local reconstruction of that existence theorem is claimed. [[thm-freedman-e8-topological-realization]]

[F2] The $E_8$ form is positive definite and unimodular but not isometric over the integers to the standard diagonal rank-eight lattice. [[thm-e8-lattice-is-even-unimodular-and-nondiagonal]]

## Counterexample

**Given:** Full AC, the asserted topological extension and the realization/lattice facts [F1]–[F2].

1.1 Take the manifold $Y_{E_8}$ furnished by [F1]. It is closed, connected, simply connected, oriented and topological, so it meets the asserted manifold hypotheses. [F1]

1.2 Its intersection form is positive definite by [F2], but the same local lattice result proves it is not isometric to the standard diagonal form. Thus $Y_{E_8}$ satisfies every hypothesis of the refuted assertion and violates its conclusion. [F1, F2, step 1.1] ∎

## Sources

[[thm-freedman-e8-topological-realization|Freedman's topological E8 realization interface]]

[[thm-e8-lattice-is-even-unimodular-and-nondiagonal|Finite verification that E8 is positive definite and non-diagonal]]

## Remarks

Donaldson's diagonalization theorem assumes a smooth four-manifold. This topological realization does not meet that hypothesis, and the lattice calculation alone does not give a knot nonsliceness certificate.

## Remarks references

[[thm-donaldson-definite-diagonalization|The smooth category hypothesis in Donaldson's theorem]]

