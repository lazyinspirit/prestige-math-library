---
id: lem-complete-mixed-characteristic-integral-flat-annihilators
kind: lemma
title: "Integral annihilators for finite-flat groups over complete mixed-characteristic traits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-flat-group-scheme-and-cartier-dual
  - lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology
  - lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - lem-finite-galois-module-local-euler-characteristic-char-zero
  - lem-finite-flat-dual-isogeny-differential-determinants
  - lem-finite-flat-local-torsor-index-from-differential
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are assumed for the local cohomology, finite-module duality and isogeny-index suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, printed pp. 241–243 discusses the local exact-annihilator and dual-different calculation; this scoped construction is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be the ring of integers of a characteristic-zero complete discretely valued field $K$ with finite residue field. For a commutative finite flat $R$-group $N$ and its Cartier dual $N^D$, the images of $H^1_{\mathrm{fppf}}(R,N)$ and $H^1_{\mathrm{fppf}}(R,N^D)$ in the respective generic cohomology groups are exact annihilators of each other under the finite perfect local Tate pairing. Both restriction maps in degree one are injective. No prime-to-residue-characteristic hypothesis is imposed.

## Facts & Assumptions

**Given:** Exactly the complete mixed-characteristic local ring, finite flat group and Cartier dual in the Statement.

[A1] The Axiom of Choice and Dependent Choice are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Finite-flat torsors over a Henselian DVR extend generic sections, and generic restriction on their isomorphism classes is injective. [[lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections]]

[F2] Every finite flat commutative group admits a smooth connected affine finite-flat isogeny resolution over a Henselian DVR with finite residue field. [[lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology]]

[F3] The product of the differential determinant ideals of supplied dual-kernel isogenies is the rank ideal. [[lem-finite-flat-dual-isogeny-differential-determinants]]

[F4] The local finite-flat torsor order equals the number of integral group points times the inverse norm of the isogeny determinant. [[lem-finite-flat-local-torsor-index-from-differential]]

[F5] Finite discrete modules over $K$ have perfect Tate pairings, and their Euler characteristic is the norm of their order. [[thm-local-finite-module-tate-duality-in-characteristic-zero]] [[lem-finite-galois-module-local-euler-characteristic-char-zero]]

[F6] Smooth affine cohomology over $R$ restricts to its special fibre, and finite-field Galois cohomology of torsion modules vanishes above degree one. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[F7] Cartier duality is the finite-flat duality represented by the actual evaluation map into $\mathbb G_m$. [[def-finite-flat-group-scheme-and-cartier-dual]]

## Proof

**Proof technique:** combine the two exact isogeny indices with the generic Euler characteristic.

1.1 By [F1], both restriction maps on degree-one torsor classes are injective, and $N(R)=N(K)$ and $N^D(R)=N^D(K)$. The characteristic-zero generic fibres are finite étale; evaluation [F7] identifies the dual generic Galois modules, and [F5] supplies their finite perfect degree-one pairing. [A1, F1, F5, F7, given, algebra]

1.2 Use [F2] on $N$ and $N^D$ to choose finite-flat isogenies with connected smooth affine fibres and determinant elements $J$ and $J^D$. If $n$ is the rank, [F3] gives $(JJ^D)=(n)$. Writing $q=\#k$, [F4] applied to both isogenies yields $\#H^1(R,N)\,\#H^1(R,N^D)=\#N(R)\,\#N^D(R)\,q^{v_R(n)}$. The rank is nonzero in $R$, and no invertibility is assumed. [A1, F2, F3, F4, given, choose, algebra]

2.1 The evaluation pairing is defined over $R$, so the cup product of two integral classes lies in $H^2(R,\mathbb G_m)$. By [F6], this group is $H^2(k,\mathbb G_m)$; the latter is the continuous Galois cohomology of $\bar k^\times$ by the finite-Galois covering and injective-sheaf cochain comparison. The coefficient $\bar k^\times$ is torsion, so [F6] makes that group zero. Naturality of cup product and restriction shows the two integral images annihilate one another in the generic Tate pairing. [A1, F6, F7, step 1.1, algebra]

3.1 The generic Euler characteristic in [F5] gives $\#H^1(K,N)=\#H^0(K,N)\#H^2(K,N)q^{v_R(n)}$. Generic degree-two Tate duality identifies the order of $H^2(K,N)$ with $\#N^D(K)$. By step 1.1 the right side equals the product in step 1.2. In a finite perfect pairing, an annihilator has order equal to the ambient order divided by the subgroup order; the inclusion from step 2.1 and the equality of orders therefore make each integral image the full annihilator of the other. [F5, step 1.1, step 2.1, step 1.2, algebra] ∎
