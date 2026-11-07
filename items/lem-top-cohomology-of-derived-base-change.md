---
id: lem-top-cohomology-of-derived-base-change
kind: lemma
title: Top cohomology of derived base change
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-derived-tensor-product-in-the-bounded-above-setting
- thm-splitting-lemma-for-modules
- thm-right-exactness-of-tensor-products
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory
    url: https://arxiv.org/pdf/2401.02946
    locator: §3.2.2, equations (10)–(11); the purely algebraic passage is proved below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC supplies the bounded-above projective resolutions in the derived-tensor convention.
---

## Statement

Assume AC. Let A→B be a homomorphism of commutative rings, let P be a bounded-above cochain complex of projective A-modules, and let m be an integer with `H^j(P)=0` for every j>m. Then the canonical map

`B⊗_A H^m(P) → H^m(B⊗_A^L P)`

is an isomorphism, natural in B and P. In particular, if Q is another such complex and a specified quasi-isomorphism `B⊗_A^L P≅Q` is given, then `B⊗_A H^m(P)≅H^m(Q)`. No flatness of B over A is assumed. This is an algebraic consequence of a supplied derived comparison, not a proof that such a comparison exists for Weil–étale cohomology.

## Facts & Assumptions

**Given:** AC, A→B, the bounded-above projective complex P and the cohomological bound of the Statement.

[F1] Derived tensor in the bounded-above setting is represented by tensoring a bounded-above projective replacement, and its comparison maps are natural. [[def-derived-tensor-product-in-the-bounded-above-setting]]

[F2] A surjection onto a projective module splits. [[thm-splitting-lemma-for-modules]]

[F3] Tensor product is right exact. [[thm-right-exactness-of-tensor-products]]

[F4] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** split the acyclic upper tail and tensor a cokernel.

1.1 Let b be an upper bound for P. If b>m, the differential `P^(b−1)→P^b` is surjective because `H^b(P)=0`. By projectivity of P^b and [F2] it splits, so the top two terms contain a contractible summand `P^b→P^b`. Removing it gives a homotopy-equivalent projective complex with upper bound b−1. Repeating finitely often produces a bounded-above projective complex P' homotopy equivalent to P and concentrated in degrees at most m. [F2, F4, given, induction, algebra]

2.1 By [F1], `B⊗_A P'` represents `B⊗_A^L P`. Since P' has no term above m, its m-th cohomology is the cokernel of `P'^(m−1)→P'^m`, and the m-th cohomology after tensor is the cokernel of the tensored map. By right exactness [F3] the latter is canonically `B⊗_A H^m(P')`, hence `B⊗_A H^m(P)`. The natural map is independent of the chosen splittings because it is the canonical map from tensoring the top cocycle quotient in the derived category. It is functorial in B and P, and a specified derived quasi-isomorphism then gives the final assertion. [F1, F3, F4, step 1.1, given, construct, algebra] ∎

## Source and authoring record

This is only the formal algebraic implication from a supplied bounded-above derived comparison. The Weil–étale duality complex, its cohomological bound, and the BDL projection formula remain separate proof obligations.
