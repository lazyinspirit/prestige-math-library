---
id: thm-amenable-signature-vanishing-for-solvable-bordisms
kind: theorem
title: "Amenable-signature vanishing for integral solvable bordisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-amenable-D-R-l2-dimension-estimate
  - lem-l2-rho-invariant-bordism-independence
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Theorem 3.2 and proof, with Theorem 2.2 and Lemmas 3.8–3.14"
---

## Statement

Let K be a knot and W an integral (n+1/2)-solution for M(K). Let R be Q or F_p, let G be an amenable group in Strebel's class D(R) with G^(n+1)={e}, and let φ:π₁(M(K))→G extend over W. Assume φ sends a meridian of K to an infinite-order element of G. Then the rho invariant ρ(M(K),φ) vanishes.

## Statement references

[Cha, Theorem 3.2 and complete proof](https://arxiv.org/pdf/1010.1058)

## Facts & Assumptions

**Given:** A knot K, an integral (n+1/2)-solution W for M(K), an amenable group G∈D(R), R∈{Q,F_p}, G^(n+1)={e}, and an extending φ that sends a meridian to infinite order.

[F1] Integral (n+1/2)-solutions have the lifted isotropic half-rank intersection data ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

[F2] The rho invariant is the bordism-independent L²-signature defect ([[def-integral-half-solutions-strebel-and-l2-signatures]], [[lem-l2-rho-invariant-bordism-independence]]).

[F3] Amenable D(R) coefficient changes satisfy a von Neumann-dimension estimate ([[lem-amenable-D-R-l2-dimension-estimate]]).

## Proof

1.1 The solution surfaces and their duals give a half-rank isotropic subspace of the ordinary intersection form. The lifted classes give the same isotropic data after the specified derived-series coefficient change, with G^(n+1)={e} and the meridian image of infinite order. [F1, given]

1.2 By [F3], the relevant kernels and images after tensoring with NΓ have von Neumann dimension bounded by the ordinary coefficient dimensions. The exact vanishing conclusion uses the dimension comparison for the boundary inclusion and the dual surfaces. [F1, F3, step 1.1]

2.1 The L²-signature of W therefore equals its ordinary signature under the amenable-signature theorem’s full hypotheses, and [F2] converts that equality to rho(M,φ)=0. The detailed argument must verify the target derived-series quotient and all coefficient-system restrictions. [F1, F2, F3, step 1.2]

## Owner escalation

Cha’s Theorem 3.2 supplies this argument but depends on the L²-dimension estimate and the closed-manifold signature theorem, whose local proofs are unresolved here. The exact quotient hypotheses must be reconciled with the theorem’s source statement before readiness.