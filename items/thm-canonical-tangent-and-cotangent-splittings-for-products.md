---
id: thm-canonical-tangent-and-cotangent-splittings-for-products
kind: theorem
title: "Canonical tangent and cotangent splittings for products"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-differential-of-a-smooth-map, def-pullback-of-a-cotangent-vector, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, prop-cotangent-pullback-is-contravariantly-functorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

For smooth manifolds $M$ and $N$, there are canonical vector-space isomorphisms
$$ T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN \quad\text{and}\quad T_{(p,q)}^*(M\times N)\cong T_p^*M\oplus T_q^*N. $$

## Facts & Assumptions

**Given:** Smooth manifolds $M,N$ and a point $(p,q)\in M\times N$.

[F1] Products of smooth manifolds come with smooth projections $\pi_M$ and $\pi_N$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F2] The differential of a smooth map is a linear map on tangent spaces ([[def-differential-of-a-smooth-map]]).

[F3] Cotangent pullback is defined by precomposition with the differential and is functorial ([[def-pullback-of-a-cotangent-vector]], [[prop-cotangent-pullback-is-contravariantly-functorial]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi:T_{(p,q)}(M\times N)\to T_pM\oplus T_qN$ by $\Phi(v):=(d\pi_M(v),d\pi_N(v))$. In product coordinates $(x,y)$, the tangent basis at $(p,q)$ splits into the $x$-coordinate derivations and the $y$-coordinate derivations, so $\Phi$ sends that basis to the direct-sum basis and is therefore an isomorphism. [F1, F2, given]

2.1 Dualizing the isomorphism from step 1.1 gives an isomorphism $T_{(p,q)}^*(M\times N)\cong T_p^*M\oplus T_q^*N$. Concretely, it is the map $\omega\mapsto ((\iota_M)^*\omega,(\iota_N)^*\omega)$ induced by the inclusion maps of the product factors, and [F3] makes this construction canonical. [F3, step 1.1]

3.1 Therefore both the tangent and cotangent product splittings are canonical. [step 1.1, step 2.1] ∎
