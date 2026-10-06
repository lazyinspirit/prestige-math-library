---
id: lem-finite-products-and-comparison-cones-have-finite-type
kind: lemma
title: "Finite products and comparison cones have homological finite type"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q
  - thm-integral-finite-generation-of-mo-and-mso-homology
  - thm-topological-kunneth-short-exact-sequence-for-homology
  - cor-field-kunneth-isomorphism-for-homology-of-products
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - cor-principal-ideal-domains-are-noetherian
  - thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
  - def-mapping-cone-of-a-chain-map
  - thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact
  - thm-the-cone-long-exact-sequence
  - def-singular-simplex-and-singular-chain-group-with-coefficients
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Charles Weibel, An Introduction to Homological Algebra, Chapter 3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf"
      locator: "§3.6, Künneth and coefficient sequences"
    - title: "Charles Weibel, An Introduction to Homological Algebra, Chapter 1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
      locator: "§1.5, mapping cones"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let Y be a finite product of CW K(Z/2,q) models with q≥1, including the empty product *. Then every H_n(Y;Z) is finitely generated and H^*(Y;F)=F in degree zero only for every field F of characteristic different from two. For any continuous f:X→Z between arbitrary spaces, the integral chain cone has an exact sequence 0→coker(H_nX→H_nZ)→H_n(Cone(C_*(f;Z)))→ker(H_{n−1}X→H_{n−1}Z)→0. If H_nZ and H_{n−1}X are finitely generated, its middle group is finitely generated. In particular this holds in every degree for X=MO(r) or MSO(r) and Z=Y a finite product as above. The raw cone is nonnegative and degreewise free, without any finite-rank assertion or topological-cone identification.

## Facts & Assumptions

**Given:** AC; the based CW models $K_q=K(\mathbb F_2,q)$ of the finite-type lemma; a finite product $Y$ of these models; a continuous map $f:X\to Y$ whose source is a based CW model of the unoriented Thom spaces; and the free integral algebraic mapping cone $C_f$ of the singular chain map.

[F1] Each $K_q$ has finitely generated integral homology, finite-dimensional mod-two homology, vanishing rational and odd-primary reduced homology, and is finite 2-primary in positive degrees ([[lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q]]); the unoriented and oriented Thom spaces have finitely generated integral homology ([[thm-integral-finite-generation-of-mo-and-mso-homology]]).

[F2] The integral Künneth sequence expresses the homology of a finite product as an extension of sums of tensor and Tor terms of the factors, and over a field the Künneth map is an isomorphism ([[thm-topological-kunneth-short-exact-sequence-for-homology]], [[cor-field-kunneth-isomorphism-for-homology-of-products]]); a finitely generated abelian group decomposes into cyclic summands, and submodules of finitely generated modules over the Noetherian ring $\mathbb Z$ are finitely generated ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]], [[cor-principal-ideal-domains-are-noetherian]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[F3] The mapping cone of a chain map has the degreewise split canonical short exact sequence and the long exact cone sequence computing its homology from the source and target ([[def-mapping-cone-of-a-chain-map]], [[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]], [[thm-the-cone-long-exact-sequence]]); the integral chain groups are free in each degree ([[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

[F4] AC chooses the factor models and generators of the finitely generated groups ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let Y be a **finite** product of the K_q models of the finite-type lemma. Integral Künneth expresses H_n of a product as an extension of finite sums of tensor and Tor products of its factors' integral homology groups. PID decomposition and finite induction on the number of factors therefore prove that every H_n(Y;Z) is finitely generated. With R=Q or an odd F_p, field Künneth shows H*(Y;R)=R concentrated in degree zero. An empty product is the point. Infinite products are not covered by this argument and must not replace this finite comparison space without a new justification. [given, F1, F2]

2.1 For any continuous map f:X→Y, use the free integral chain complex C_f=Cone(C_*(f;Z)). The published cone long exact sequence gives 0→coker(H_nX→H_nY)→H_n(C_f)→ker(H_{n-1}X→H_{n-1}Y)→0. If H_n(Y;Z) and H_{n-1}(X;Z) are finitely generated, the two outer groups are finitely generated, and lifting generators proves the middle group is finitely generated. In particular X=MO(r), the integral finite-generation theorem, and finite Y, the finite-type lemma, give integral finite generation of cone homology in every degree. This does not require the raw singular chain groups to have finite rank. The algebraic cone is free in each degree because it is the finite direct sum C_n(Y;Z)⊕C_{n-1}(X;Z), so the inspected algebraic cohomology UCT applies directly; no unproved topological mapping-cone identification is needed. This is the relative homology obstruction for the comparison map. [step 1.1, F2, F3, F4] ∎
