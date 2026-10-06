---
page: affine-coxeter-diagrams-and-semidefinite-classification
title: "Affine Coxeter Diagrams and Semidefinite Classification"
status: draft
items: []
examples: []
---

Affine type requires an irreducible positive-semidefinite Gram form of corank one, together with its resulting Euclidean chamber geometry. Twisted Lie labels and extended affine groups are distinct conventions.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-irreducible-affine-coxeter-type.** For connected finite-rank matrix define affine form type as canonical B positive semidefinite of corank one; do not define every infinite Coxeter group as affine. Define its radical quotient Euclidean space and affine slice using a positive radical vector.

Definition justification: `thm-cg-affine-gram-classification-and-euclidean-realization`.

**lem-cg-positive-radical-and-affine-gram-exclusions.** For connected positive-semidefinite B with nonzero kernel take x in the kernel. Nonpositive off-diagonal entries imply B(|x|,|x|)≤B(x,x)=0; semidefiniteness makes |x| a kernel vector. A zero coordinate propagates zeros through each negative edge, contradiction. Thus its coordinates are strictly positive; subtract a maximal multiple of this vector from any independent kernel vector to force a zero coordinate, proving corank one. A proper singular principal submatrix would extend a kernel vector by zeros, contradiction, so every proper principal submatrix is positive definite. Use the earlier determinant exclusions and determinant-zero arm/path recurrences to enumerate extended affine diagrams, separating rank-two infinity. No Perron–Frobenius theorem is presumed.

**thm-cg-affine-gram-classification-and-euclidean-realization.** Verify all affine families A-tilde_n(n≥1), B-tilde_n(n≥3), C-tilde_n(n≥2), D-tilde_n(n≥4), E-tilde6/7/8,F-tilde4,G-tilde2, with low-rank coincidences explicitly identified. Construct the Euclidean affine slice of dual U and its reflecting walls from the positive radical vector; match the crystallographic alcove constructions (duality conventions stated), proving equivalence of form type and Euclidean simplex Coxeter action. Do not use Kac–Moody classification as an elementary prerequisite.

## Prerequisites and reading

Required earlier pages: [[finite-coxeter-diagrams-and-complete-classification]], [[affine-reflections-coroot-translations-and-alcoves]]. The companion [[affine-coxeter-diagrams-and-semidefinite-classification-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
