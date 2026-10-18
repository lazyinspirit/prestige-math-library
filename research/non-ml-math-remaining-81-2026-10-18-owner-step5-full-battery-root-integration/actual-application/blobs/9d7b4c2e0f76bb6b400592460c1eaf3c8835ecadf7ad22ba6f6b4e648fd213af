---
id: cex-nonpoisson-bivector-cannot-be-a-first-order-star-commutator
kind: counterexample
title: A non-Poisson bivector cannot be a first-order star commutator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-general-poisson-bivector-and-bracket
  - prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors
  - prop-first-order-star-commutator-is-a-poisson-bracket
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
---

## Statement refuted

Every smooth bivector field on a smooth manifold is the first-order
antisymmetric commutator of some unital associative formal deformation of its
function algebra.

## Facts & Assumptions

**Given:** The coordinate bivector convention on $\mathbb R^3$, and the
first-order obstruction statement in [F3].

[F1] [[def-general-poisson-bivector-and-bracket]]: in coordinates,
$\{f,g\}_\pi=\pi^{ij}(\partial_i f)(\partial_j g)$.

[F2] [[prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors]]:
the bracket satisfies Jacobi exactly when the coordinate Jacobiator
coefficients vanish.

[F3] [[prop-first-order-star-commutator-is-a-poisson-bracket]]: the
first-order skew part of any unital associative formal deformation of a
commutative algebra is a Poisson-algebra bracket.

## Counterexample

1.1 On $\mathbb R^3$ with coordinates $(x,y,z)$, take the smooth bivector $$\pi=x\,\partial_y\wedge\partial_z +y\,\partial_z\wedge\partial_x +xy\,\partial_x\wedge\partial_y.$$ By [F1], its coordinate brackets are $\{y,z\}_\pi=x$, $\{z,x\}_\pi=y$, and $\{x,y\}_\pi=xy$. [given, F1, construct]

2.1 Using the biderivation rule, its Jacobiator on these coordinate functions is $$\{\{x,y\}_\pi,z\}_\pi+\{\{y,z\}_\pi,x\}_\pi +\{\{z,x\}_\pi,y\}_\pi =\{xy,z\}_\pi+\{x,x\}_\pi+\{y,y\}_\pi =x^2-y^2.$$ At $(x,y,z)=(1,0,0)$ this is nonzero; by [F2], $\pi$ is not Poisson. [F1, F2, step 1.1, algebra]

3.1 If a unital associative formal deformation had this first-order skew bracket, [F3] would force that bracket to satisfy Jacobi, contradicting step 2.1. Therefore this smooth bivector is not the first-order antisymmetric commutator of any such deformation, refuting the universal claim. [F3, step 2.1, algebra] ∎
