---
id: cex-knot-kt-06-boundary-case
kind: counterexample
title: "The unknot has a zero-order Seifert matrix"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 4.3 and 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement refuted

Every Seifert matrix of an oriented knot has positive order, meaning that its number of rows and columns is at least one.

## Statement references

[[def-knot-seifert-pairing-and-matrix|A Seifert matrix has order equal to the rank of the first homology of the chosen surface]]

## Counterexample

**Proof technique:** direct.

1.1 Take the round unknot $K\subset S^3$ with its standard oriented flat disk $F$ in a coordinate ball. The disk is connected, compact, and smooth, and its Euler characteristic is $1$, so [F1] gives genus $g=0$. [A1, L1, F1, given, construct]

2.1 By [F2], $H_1(F;\mathbb Z)=0$ and its integral basis is empty. The matrix in [F3] has one row and one column for each basis element, hence is $0\times0$. Its order is zero, contradicting the refuted positive-order claim. [F2, F3, step 1.1, given, algebra] ∎

## Counterexample references

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The genus-zero surface has free first homology of rank zero]]

## Facts & Assumptions

**Given:** Full AC, the oriented round unknot, its oriented spanning disk, and the positive-push Seifert-matrix definition.

[A1] Full AC supplies the countable-choice interface used by the surface definition and normal-form supplier. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[L1] The standard countable-choice principle obtained from full AC is equivalent to the surface normal-form supplier's countable-choice formulation for foliated chart pairs. [[def-countable-choice]], [[def-countable-choice-principle-for-foliation-pair]], [[lem-countable-choice-sequence-and-product-formulations-are-equivalent]]

[F1] A Seifert surface is connected, compact, smooth, oriented, and has boundary the oriented knot; for a one-boundary-component surface its genus satisfies $\chi(F)=1-2g$. [[def-oriented-seifert-surface]]

[F2] A genus-zero compact surface with one boundary component has $H_1(F;\mathbb Z)\cong\mathbb Z^0=0$. [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F3] The Seifert matrix is indexed by an ordered integral basis of $H_1(F;\mathbb Z)$ and therefore has order equal to the number of basis elements. [[def-knot-seifert-pairing-and-matrix]]

