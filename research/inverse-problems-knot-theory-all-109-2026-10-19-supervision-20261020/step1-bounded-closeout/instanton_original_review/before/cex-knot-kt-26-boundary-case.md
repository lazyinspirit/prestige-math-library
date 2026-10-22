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
  - thm-donaldson-definite-diagonalization
justified_by: []
aliases: []
proof_strategy: direct
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

Every closed connected simply connected oriented topological four-manifold with positive-definite integral intersection form has that form isometric over the integers to the standard diagonal lattice.

## Statement references

[[thm-donaldson-definite-diagonalization|The actual diagonalization theorem assumes a smooth four-manifold]]

## Facts & Assumptions

**Given:** The false topological-category extension in the Statement refuted.

[F1] The local Freedman realization module states that a closed connected simply connected oriented topological four-manifold with intersection form $L_{E_8}$ exists. Its local proof is not supplied. [[thm-freedman-e8-topological-realization]]

[F2] The $E_8$ form is positive definite and unimodular but not isometric to the standard diagonal rank-eight lattice. [[thm-e8-lattice-is-even-unimodular-and-nondiagonal]]

[L1] The Freedman existence module [F1] is escalated: the local plumbing, contractible cap, and topological realization proof has not been supplied. The source is not substituted for a proved local supplier.

## Counterexample

The proposed topological extension would be refuted by a closed connected simply connected oriented topological four-manifold with intersection lattice $L_{E_8}$. Its form is positive definite by [F2] and is not the standard diagonal form by [F2]. This is a category-boundary example and it does not construct a knot filling or a smooth slice disk.

**Given:** The claimed topological-category extension, [F1]–[F2], and unresolved realization obligation [L1].

1.1 If the local Freedman existence result [F1] is supplied, choose the resulting topological four-manifold $Y_{E_8}$. The source's Theorem 1.7 gives precisely the closed simply connected E8 realization, but the corresponding local proof is the unresolved input [L1], so this choice is conditional in this carrier. [F1, L1, choose]

1.2 The intersection form of $Y_{E_8}$ is positive definite by [F2] and cannot be isometric to the standard diagonal rank-eight lattice by [F2]. Therefore, conditional on [L1], it contradicts the refuted assertion. Since [L1] remains unproved locally, no completed counterexample proof is claimed and this item is escalated. [F1, F2, L1, step 1.1]

## Counterexample references

[[thm-freedman-e8-topological-realization|Freedman's topological E8 realization interface]]

[[thm-e8-lattice-is-even-unimodular-and-nondiagonal|Finite verification that E8 is positive definite and non-diagonal]]

## Remarks

Donaldson's diagonalization theorem assumes a smooth four-manifold. This topological realization does not meet that hypothesis, and the lattice calculation alone does not give a knot nonsliceness certificate.

## Remarks references

[[thm-donaldson-definite-diagonalization|The smooth category hypothesis in Donaldson's theorem]]

