---
id: thm-interval-geometric-predicate-filter-sound
kind: theorem
title: The interval geometric filter certifies only uniform signs
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 2
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-interval-geometric-predicate-filter, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-certified-geometric-predicate-determinants]
sources:
  references:
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

For every tuple of points represented by the input coordinate intervals, any
positive or negative result returned by
[[alg-interval-geometric-predicate-filter]] is the exact determinant sign for
every admissible tuple. An indeterminate result makes no uniform-sign claim.

## Facts & Assumptions

**Given:** A finite box of coordinate intervals, the determinant definition, and the interval evaluation procedure.

[F1] [[def-certified-geometric-predicate-determinants]]: each requested predicate is a finite signed determinant expression in the point coordinates.

[F2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: for a finite expression DAG with finite interval outputs, every exact value from every admissible input assignment belongs to its root interval.

[F3] [[alg-interval-geometric-predicate-filter]]: the procedure returns positive only when its final interval has positive lower endpoint, and negative only when its upper endpoint is negative.

## Proof

1.1 For each admissible choice of coordinates inside the input intervals, the determinant expression in [F1] is an exact evaluation of the finite DAG used by the algorithm. If all DAG operations are finite, [F2] places that exact determinant in the computed interval $J$. [F1, F2, given]

2.1 If the procedure returns positive, [F3] gives $J=[a,b]$ with $a>0$; every admissible determinant in $J$ is positive. If it returns negative, $b<0$ and every admissible determinant is negative. When $0\in J$ or a nonfinite status occurs it returns indeterminate and makes no uniform-sign claim. [F2, F3, step 1.1, given] ∎

