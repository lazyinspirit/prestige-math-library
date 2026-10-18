---
id: alg-certified-dyadic-geometric-predicate
kind: algorithm
title: Certified predicate for exact dyadic geometric inputs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 4
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-certified-geometric-predicate-determinants, alg-floating-filter-for-geometric-determinants, alg-exact-dyadic-determinant-sign, lem-exact-dyadic-determinant-sign-correct-and-terminates, lem-lifted-determinant-sign-matches-sphere-side]
justified_by: [thm-certified-dyadic-geometric-predicate-sound-and-terminates]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Definition

Input: an ordered tuple of exact dyadic points in dimension $d=2$ or
$d=3$, with exactly $d+1$ points for an orientation request and exactly $d+2$
points for a raw incircle/insphere or orientation-normalized sphere-side
request, and optionally a filter configuration
containing a floating format, its exact dyadic unit-roundoff bound, and a
verifiable finite range certificate. Output: the requested sign, including
zero; for a sphere-side request with zero base orientation, output
`degenerate-base` together with the raw lifted sign. For each required
determinant, construct its matrix in
[[def-certified-geometric-predicate-determinants]] exactly using dyadic
integer arithmetic.

1. Attempt [[alg-floating-filter-for-geometric-determinants]] only when the
   optional filter configuration is present and its format, standard relative
   model, and finite normal-range certificate satisfy that algorithm's inputs.
   If it is absent or invalid, skip directly to the exact fallback.
2. If the filter returns a nonzero sign, use that sign. If the filter is
   unavailable or inconclusive, use
   [[alg-exact-dyadic-determinant-sign]]. For an orientation or raw lifted
   request, return this sign.
3. For a requested incircle/insphere side, compute the base orientation and
   lifted determinant signs by the preceding steps. If the base orientation is
   zero, return the status `degenerate-base` together with the raw lifted sign.
   Otherwise
   return the sign of their product: positive inside, zero on, negative
   outside, by [[lem-lifted-determinant-sign-matches-sphere-side]].

## Remarks

The exact fallback is justified by
[[lem-exact-dyadic-determinant-sign-correct-and-terminates]].
The exact predicates retain zero. A caller may separately opt into the
symbolic tie-break algorithm; it does not alter this procedure.

