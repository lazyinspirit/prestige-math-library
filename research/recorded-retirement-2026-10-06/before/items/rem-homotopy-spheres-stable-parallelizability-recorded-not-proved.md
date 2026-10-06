---
id: rem-homotopy-spheres-stable-parallelizability-recorded-not-proved
kind: remark
title: Stable parallelizability of homotopy spheres (recorded, not proved here)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
- def-smooth-homotopy-sphere
justified_by: []
aliases:
- prop-homotopy-spheres-are-stably-parallelizable
landmark: false
dependency_level: 1
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf
    locator: Theorem 3.1 and its surrounding section, printed pp. 508-509, stable parallelizability of homotopy spheres
proved_here: false
external_dependency:
  source_url: https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf
  exact_statement: |-
    Every smooth homotopy sphere is stably parallelizable: for a smooth homotopy
    $n$-sphere $\Sigma$ there is an $r\ge0$ with
    $T\Sigma\oplus\varepsilon^r\cong\varepsilon^{n+r}$.
  local_proof_attempt: No local proof is supplied. Completed batch-24 adjudication identifies Bott stable SO groups, the signature theorem in dimensions divisible by four, and Adams injectivity of the stable J-homomorphism in residues 1 and 2 modulo 8 as inputs of the source proof. The needed all-dimension Bott and J prerequisite chain is not locally supplied; the concrete seven-dimensional disk-bundle calculation does not replace it.
  necessity: Retained for mathematical orientation on the exotic-sphere page. It describes the general stable tangent-bundle property of homotopy spheres. No local construction, exoticness detector or group-closure proof uses this recorded claim as a prerequisite.
---

## Remark

Every smooth homotopy sphere is stably parallelizable: for a smooth homotopy
$n$-sphere $\Sigma$ there is an $r\ge0$ with
$T\Sigma\oplus\varepsilon^r\cong\varepsilon^{n+r}$.

The proof is **not supplied here**. Its all-dimension argument requires Bott stable $SO$ groups, the signature input in dimensions divisible by four, and Adams injectivity of the stable $J$-homomorphism in the relevant residue classes. The necessary Bott and $J$ chain has no proved local supplier. The concrete Milnor disk-bundle calculations on this page do not establish this general result.

This sourced result is recorded for orientation and is not a logical prerequisite for the local results.
