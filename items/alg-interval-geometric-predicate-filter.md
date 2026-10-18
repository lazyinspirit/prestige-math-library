---
id: alg-interval-geometric-predicate-filter
kind: algorithm
title: Certified geometric predicate for interval-valued coordinates
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-certified-geometric-predicate-determinants, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-interval-geometric-predicate-filter-sound]
sources:
  references:
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Definition

Input: finite closed dyadic intervals for all coordinates in one orientation,
incircle, or insphere determinant. Output: `positive`, `negative`, or
`indeterminate`. Construct the orientation or lifted matrix as in
[[def-certified-geometric-predicate-determinants]]. For a lifted matrix, form
each squared-norm entry by squaring its coordinate intervals and adding the
results from coordinate index $1$ through $d$ from left to right, using the
outward interval operations of
[[def-outward-rounded-interval-and-ball-operations]]. If matrix construction
returns a nonfinite status, return `indeterminate`.

Enumerate the permutations in lexicographic tuple order. For each permutation,
start with $[1,1]$ and multiply the selected row-entry intervals from row $0$
through row $s-1$, from left to right, using outward interval multiplication.
For an odd permutation, replace the product $T$ by $[0,0]-T$ using outward
interval subtraction. Initialize the determinant interval $J$ with the first
signed term, then add each later signed term from left to right using outward
interval addition. If any operation returns a nonfinite status, return
`indeterminate`. For a finite $J=[a,b]$, return `positive` when $a>0$,
`negative` when $b<0$, and `indeterminate` when $0\in J$. This procedure
reports a uniform raw determinant sign over the represented coordinate box;
it does not choose a center point or invoke exact point fallback.

