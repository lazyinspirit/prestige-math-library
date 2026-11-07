---
id: def-trace-function-conductor
kind: definition
title: "Trace-Function Conductor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-weight-zero-trace-function
  - def-conductor-of-a-middle-extension-sheaf-on-a-curve
  - def-fkm-conductor-complexity-on-the-affine-line
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, Definition 2.5"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Dec3,2014 draft Definition2.2.8, printed p10; rank plus geometric singularities plus Swan"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2.5"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "Definition2.5, printed p7; complexity used in the correlation theorem"
verification:
  precheck: pending
---

## Definition

Let $\mathcal M=j_*\mathcal L$ be a finite-rank middle-extension sheaf on $\mathbb P^1_{\mathbb F_p}$, lisse on its maximal open $U$, and let $t_{\mathcal M}$ be its weight-zero trace function. Let $r=\operatorname{rank}(\mathcal L)$ and let $S=(\mathbb P^1_{\mathbb F_p}\setminus U)(\overline{\mathbb F}_p)$ be its finite set of ramified points, including infinity when ramified there. Define the Fouvry–Kowalski–Michel complexity by
$$c(t_{\mathcal M})=c(\mathcal M):=r+|S|+\sum_{x\in S}\operatorname{Sw}_x(\mathcal L).$$
This complexity is not the degree of the Artin conductor divisor: that divisor instead sums the codimension of inertia invariants plus Swan conductor at each singular point.

## Definition references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[def-conductor-of-a-middle-extension-sheaf-on-a-curve|Artin conductor divisor of a middle-extension sheaf]]

[[def-fkm-conductor-complexity-on-the-affine-line|Fouvry–Kowalski–Michel complexity on the affine line]]

## Remarks

This is the dense-lisse middle-extension specialization of the expanded conductor definition, including the prior globally lisse affine-line case. It is the complexity of the specified sheaf, not a minimization over all sheaves producing the same function; the Artin conductor divisor remains distinct. No GOS or boundary-stalk theorem is asserted by this definition.
