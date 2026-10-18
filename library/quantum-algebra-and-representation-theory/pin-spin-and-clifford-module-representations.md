---
page: pin-spin-and-clifford-module-representations
title: "Pin and Spin Groups and Their Representations"
status: published
items:
  - lem-real-orthogonal-space-preliminaries
  - lem-real-orthogonal-polar-decomposition
  - lem-cartan-dieudonne-real-nondegenerate-reflection-factorization
  - lem-real-clifford-involutions-and-norm
  - def-real-clifford-group-and-normalized-pin-spin
  - lem-twisted-clifford-adjoint-reflection-and-scalar-kernel
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-image-kernel-and-compactness
  - lem-real-local-spin-lift-by-matrix-logarithm
  - thm-real-spin-modules-and-real-types
  - thm-real-pin-spin-topological-double-covers
  - lem-euclidean-spin-sphere-bundle-local-sections
  - thm-complex-spin-modules-and-compact-reducibility
  - lem-real-spin-norm-detects-components
  - cor-euclidean-spin-is-universal-cover
examples: []
---

This page fixes the real convention $Q(v)=B(v,v)$ and $v^2=Q(v)1$ for finite-dimensional nondegenerate quadratic spaces of signature $(+^p,-^q)$. It proves the full indefinite Cartan–Dieudonné factorization, defines the unrestricted twisted Clifford normalizer and normalized Pin groups, and separates full-even Spin from its norm-one subgroup. The topological covers use explicit matrix-logarithm sections; the Euclidean universal-cover argument uses local rotor charts on the sphere. Clifford and spinor module conclusions are stated in terms of the even Clifford algebra so that real, complex, quaternionic, split, and low-dimensional cases are distinguished.

## A-page items

- [[lem-real-orthogonal-space-preliminaries]] proves the finite-dimensional orthogonal-space facts and reflection formula.
- [[lem-cartan-dieudonne-real-nondegenerate-reflection-factorization]] proves the reflection factorization, including the totally isotropic kernel and moved-space case.
- [[lem-real-clifford-involutions-and-norm]] fixes the grading, reversion, Clifford conjugation, and $N(x)=x\bar x$ convention.
- [[def-real-clifford-group-and-normalized-pin-spin]] defines Pin, full-even Spin, and norm-one Spin.
- [[lem-twisted-clifford-adjoint-reflection-and-scalar-kernel]] proves the twisted reflection formula, orthogonality, scalar kernel, and homogeneity of the unrestricted normalizer.
- [[lem-normalized-pin-spin-product-and-norm-laws]] identifies normalized vector products and their norm.
- [[thm-real-pin-spin-image-kernel-and-compactness]] proves the algebraic image, kernel, exactness, and definite compactness.
- [[lem-real-orthogonal-polar-decomposition]] and [[lem-real-spin-norm-detects-components]] distinguish the mixed-sign identity component from the full special orthogonal group.
- [[lem-real-local-spin-lift-by-matrix-logarithm]] and [[thm-real-pin-spin-topological-double-covers]] establish actual local sheets for the topological double covers.
- [[lem-euclidean-spin-sphere-bundle-local-sections]] gives the rotor sections and finite numerability data.
- [[cor-euclidean-spin-is-universal-cover]] proves the Euclidean universal-cover clause for $n\ge3$ under its stated AC branch.
- [[thm-real-spin-modules-and-real-types]] gives module dimensions and commutant types from the real even-Clifford table.
- [[thm-complex-spin-modules-and-compact-reducibility]] gives the complex half-spin and odd-spin restrictions and uses compact complete reducibility only for definite Spin.


The exact sequences for Pin and full-even Spin fit into this commutative diagram. The vertical maps are inclusions, the first is the identity on the common scalar kernel, and both horizontal action maps are the same twisted adjoint restricted to their domains.

```tikzcd
1 \arrow[r] \arrow[d, equal] & \{1,-1\} \arrow[r] \arrow[d, equal] & \operatorname{Spin}_{\mathrm{full}} \arrow[r, "\rho"] \arrow[d, hook] & SO(V,B) \arrow[r] \arrow[d, hook] & 1 \\
1 \arrow[r] & \{1,-1\} \arrow[r] & \operatorname{Pin} \arrow[r, "\rho"] & O(V,B) \arrow[r] & 1
```

The diagram records the inclusions and commuting actions only; the local proofs establish the two exact rows independently of it.

## Prerequisite status

The PA-04 page [[real-complex-clifford-classification-and-graded-products]] supplies the actual draft classification theorem [[thm-real-complex-clifford-algebra-classification]] and even-subalgebra identification [[lem-clifford-even-subalgebra-signature-identification]]. Their complete final bodies were checked against the real Clifford spinor and complex half-spin calculations after batch 35 genuinely completed. The compact-group complete-reducibility supplier is published and applies to all continuous finite-dimensional complex representations of compact Euclidean Spin groups. This page and its new items remain drafts; native supplier readiness and dependency-level reconciliation are owned by the run orchestrator.

Companion: [[pin-spin-and-clifford-module-representations-examples]].
