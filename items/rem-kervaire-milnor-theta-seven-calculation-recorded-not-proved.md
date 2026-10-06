---
id: rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved
kind: remark
title: The Kervaire-Milnor calculation of Theta seven (recorded, not proved here)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
- def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres
- def-b-p-n-plus-one-subgroup-of-homotopy-spheres
justified_by: []
aliases:
- thm-kervaire-milnor-theta-seven-is-cyclic-of-order-twenty-eight
landmark: false
dependency_level: 22
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf
    locator: printed p. 504 (order-28 statement) and printed p. 512 (the table for Theta_7 and bP_8)
proved_here: false
external_dependency:
  source_url: https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf
  exact_statement: |-
    Assuming the standard oriented h-cobordism definitions of
    [[def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres]] and
    [[def-b-p-n-plus-one-subgroup-of-homotopy-spheres]],
    $$\Theta_7\cong\mathbb Z/28,\qquad bP_8=\Theta_7 .$$
  local_proof_attempt: No local proof is supplied. Completed batch-24 adjudication identifies stable sphere stems, the stable image of J, framed surgery and Kervaire-Milnor order arithmetic as unmet local prerequisites. The inspected source table supports the classification statement but is not a local derivation. The concrete bundle construction and modulo-seven detector do not prove the full order-28 classification.
  necessity: Retained for mathematical orientation on the exotic-sphere page, locating the explicitly constructed examples in the full seven-dimensional classification. No local construction, homotopy-sphere recognition or modulo-seven detector uses this recorded classification as a prerequisite.
---

## Remark

Assuming the standard oriented h-cobordism definitions of
[[def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres]] and
[[def-b-p-n-plus-one-subgroup-of-homotopy-spheres]],
$$\Theta_7\cong\mathbb Z/28,\qquad bP_8=\Theta_7 .$$

The proof is **not supplied here**. It requires stable sphere stems, the stable image of $J$, framed surgery and the Kervaire-Milnor arithmetic determining the cyclic order and $bP_8$. These are unmet local prerequisites. A source statement or table records the result; it does not supply its proof in this library. The explicit quaternionic bundles, homotopy-sphere recognition and modulo-seven detector do not depend on this classification.

This sourced result is recorded for orientation and is not a logical prerequisite for the local results.
