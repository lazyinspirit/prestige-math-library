---
id: ex-uncertain-coordinate-interval-with-ambiguous-sign
kind: example
title: An uncertain coordinate interval does not decide orientation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates-examples
dependency_level: 3
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-certified-geometric-predicate-determinants, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-interval-geometric-predicate-filter, thm-interval-geometric-predicate-filter-sound]
sources:
  references:
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Example

Take $A=(0,0)$, $B=(1,0)$, and $C=(2,Y)$ where
$Y\in[-1/8,1/8]$. Use an outward-rounding format that represents
$0,1,2,$ and $\pm1/8$ exactly. The exact orientation determinant is $Y$. Outward interval
evaluation returns $[-1/8,1/8]$, which contains zero and both signs; the
certified result is `indeterminate`.

## Facts & Assumptions

**Given:** The first two points are exact, and the third point has exact coordinate intervals $C_x=[2,2]$ and $C_y=[-1/8,1/8]$.

[F1] [[def-certified-geometric-predicate-determinants]]: orientation is the determinant of ordered rows $(p_i,1)$.

[F2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: a finite outward arithmetic DAG encloses the exact determinant for every admissible coordinate assignment.

[F3] [[alg-interval-geometric-predicate-filter]]: the interval procedure returns `indeterminate` when its finite determinant interval contains zero.

[F4] [[thm-interval-geometric-predicate-filter-sound]]: positive or negative is returned only when that sign holds for every tuple in the box.

[A1] The selected outward-rounding format represents $0,1,2,$ and $\pm1/8$ exactly.

## Verification

1.1 The orientation matrix is $\begin{pmatrix}0&0&1\\1&0&1\\2&Y&1\end{pmatrix}$, whose determinant is $Y$. Since $Y$ ranges over $[-1/8,1/8]$, admissible inputs realize a negative value, zero, and a positive value. [given, F1, algebra]

1.2 The Leibniz interval expression has only one nonzero term, namely the interval $C_y=[-1/8,1/8]$; all other terms contain an exact zero factor. Every intermediate endpoint is among $0,1,2,\pm1/8$, so [A1] makes every outward rounding exact. The returned interval is therefore $[-1/8,1/8]$, and its inclusion is guaranteed by [F2]. [given, F1, F2, A1, algebra]

2.1 The returned interval contains zero, so [F3] requires `indeterminate`; by [F4] neither positive nor negative could certify all admissible inputs. [F3, F4, step 1.1, step 1.2] ∎

