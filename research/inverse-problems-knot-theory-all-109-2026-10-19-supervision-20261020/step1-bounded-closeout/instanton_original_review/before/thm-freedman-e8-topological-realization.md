---
id: thm-freedman-e8-topological-realization
kind: theorem
title: Topological realization of the E8 intersection form
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
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Michael H. Freedman, The topology of four-dimensional manifolds
      url: https://www.maths.gla.ac.uk/~mpowell/1982_The%20topology%20of%20four-dimensional%20manifolds.pdf
      locator: Theorem 1.5 (existence and classification), proof of existence, and Theorem 1.7, printed pp. 368–371
---

## Statement

There exists a closed connected simply connected oriented topological four-manifold $Y_{E_8}$ whose integral intersection form is isometric to the positive-definite even unimodular lattice $L_{E_8}$. This is a topological realization statement and does not assert a smooth structure on $Y_{E_8}$.

## Statement references

[Freedman, *The topology of four-dimensional manifolds*, Theorems 1.5 and 1.7](https://www.maths.gla.ac.uk/~mpowell/1982_The%20topology%20of%20four-dimensional%20manifolds.pdf)

## Facts & Assumptions

**Given:** The E8 lattice as defined by its Gram matrix.

[F1] $L_{E_8}$ is positive definite, even, and unimodular. [[thm-e8-lattice-is-even-unimodular-and-nondiagonal]]

## Proof

**Given:** The lattice data [F1] and the topological realization claim in the statement.

1.1 The matrix calculation [F1] verifies that E8 is an integral unimodular form of the required type for the general realization statement. [F1]

1.2 The topological four-manifold is constructed by the Freedman plumbing-and-cap argument, which is not locally supplied here. Thus [F1] alone does not establish existence and the proof remains open in this carrier. [F1, step 1.1]

## Unresolved proof obligations

Freedman's paper states the general realization theorem for integral unimodular forms and its E8 specialization. Its proof constructs a simply connected plumbing with the prescribed matrix, caps the homology-sphere boundary by a contractible topological four-manifold, and invokes van Kampen, Mayer–Vietoris, and smoothing away from a point. Those substantial topological inputs and the complete local proof have not been authored in this batch. The source's theorem statement and relevant proof outline were read in full at the cited locator; source authority is not substituted for the missing proof. Escalated.
