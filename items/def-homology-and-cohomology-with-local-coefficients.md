---
id: def-homology-and-cohomology-with-local-coefficients
kind: definition
title: Homology and cohomology with local coefficients
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-singular-and-cellular-chain-complexes-with-local-coefficients, lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.H, pp.327–334
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§1–3, pp.95–105
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $\mathcal L$ be a left $R$-module local system on $X$ and let $A\subseteq X$. Since the differentials square to zero by [[lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases]], define
$$H_n(X,A;\mathcal L)=H_n\bigl(C_*^{\mathrm{sing}}(X,A;\mathcal L)\bigr),\qquad H^n(X,A;\mathcal L)=H^n\bigl(C^*_{\mathrm{sing}}(X,A;\mathcal L)\bigr),$$
using the relative complexes of [[def-singular-and-cellular-chain-complexes-with-local-coefficients]]. Write $H_n(X;\mathcal L)$ and $H^n(X;\mathcal L)$ when $A=\varnothing$. Negative-degree groups are zero.

For a connected CW pair, the universal-cover tensor and equivariant-Hom models in the same definition compute these groups once their chain comparison is established below. The intrinsic definition itself applies to arbitrary spaces and never assumes that a universal cover exists. On a disconnected space, chains and homology split as direct sums over components, while cochains form the degreewise product complex described in the preceding definition. Its cohomology is, by definition, the quotient of the kernel by the image in that product complex. No identification with the product of the component cohomology groups is asserted in ZF: surjectivity of that comparison can require simultaneously choosing componentwise primitives.

If $\underline M$ is the constant system with fiber an $R$-module $M$, every transport in the intrinsic formulas is the identity. Sending $m\sigma$ to the ordinary coefficient chain and reading a cochain as an arbitrary simplex function gives literal chain and cochain isomorphisms
$$C_*(X,A;\underline M)\cong C_*(X,A;M),\qquad C^*(X,A;\underline M)\cong C^*(X,A;M).$$
Thus constant local coefficients recover ordinary singular homology and cohomology with coefficients in $M$, including empty spaces, zero coefficients, points, and relative pairs.
