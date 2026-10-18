---
id: thm-certified-dyadic-geometric-predicate-sound-and-terminates
kind: theorem
title: The filtered exact dyadic predicate is sound and terminates
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 5
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-certified-dyadic-geometric-predicate, thm-floating-filter-sign-is-exact, alg-exact-dyadic-determinant-sign, lem-dyadic-determinant-integer-clearance-preserves-sign, lem-lifted-determinant-sign-matches-sphere-side, def-certified-geometric-predicate-determinants]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Statement

For every finite encoded dyadic point tuple and every orientation or lifted
determinant request in
[[alg-certified-dyadic-geometric-predicate]], the returned raw sign equals the
exact determinant sign, including zero, and the procedure terminates. A
nondegenerate incircle/insphere side result agrees with the orientation-
normalized convention in
[[lem-lifted-determinant-sign-matches-sphere-side]].

## Facts & Assumptions

**Given:** Finite binary coordinates interpreted as exact dyadic rationals, and the procedures and determinant conventions on the certified geometric predicate page.

[F1] [[def-certified-geometric-predicate-determinants]]: orientation uses rows $(p_i,1)$ and the lifted determinant uses rows $(p_i,\sum_jp_{i,j}^2,1)$, with the specified point and column order.

[F2] [[thm-floating-filter-sign-is-exact]]: a positive or negative floating filter output is the exact determinant sign; inconclusive outputs make no claim.

[F3] [[alg-exact-dyadic-determinant-sign]]: the fallback clears dyadic row denominators and returns the sign of the exact integer Leibniz sum.

[F4] [[lem-dyadic-determinant-integer-clearance-preserves-sign]]: positive row scaling preserves determinant sign and zero.

[F5] [[lem-lifted-determinant-sign-matches-sphere-side]]: when the base orientation is nonzero, the sign of the orientation times lifted determinant gives the exact inside/on/outside classification.

## Proof

1.1 The point tuple is finite and every coordinate is dyadic. The entries of the orientation matrix and lifted matrix use only finitely many sums and products of dyadics, so each requested matrix is a finite dyadic matrix under [F1]. [given, F1, construct]

1.2 For each requested matrix, if the floating filter returns a sign, it is exact by [F2]. If the filter is skipped or returns `inconclusive`, the algorithm invokes the integer fallback; [F3] computes its finite Leibniz sum exactly, and [F4] transfers its sign to the original dyadic determinant. Thus the raw result is correct, including when it is zero. [F2, F3, F4, given, algebra]

1.3 A matrix has size at most five. Each filter attempt enumerates finitely many products and interval operations, and a failed precondition or nonfinite status branches directly to the fallback. The fallback performs finite row scalings and exactly $s!$ integer terms, each a finite integer product and sum, so it terminates for every finite encoding. [F1, F3, construct]

2.1 When a sphere-side result is requested and the base orientation is nonzero, the algorithm returns the sign of the product of the two exact raw signs from [step 1.2]. Its inside/on/outside meaning follows from [F5]. When the base orientation is zero, the algorithm returns `degenerate-base` and makes no side classification. [F5, step 1.2, given]

3.1 The construction and fallback are finite and choose no element from an arbitrary family; no axiom of choice is used. [step 1.3, algebra] ∎

