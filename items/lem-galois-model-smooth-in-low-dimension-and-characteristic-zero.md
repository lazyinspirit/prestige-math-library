---
id: lem-galois-model-smooth-in-low-dimension-and-characteristic-zero
kind: lemma
title: Smooth equivariant Galois models in low dimension and characteristic zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-galois-field-extension-has-normal-projective-equivariant-model
- thm-normal-curve-is-nonsingular
- thm-resolution-of-singularities-in-characteristic-zero
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Bruno Kahn, Sur le groupe des classes d’un schéma arithmétique
    url: https://www.numdam.org/item/BSMF_2006__134_3_395_0.pdf
    locator: §3, proof of Theorem 3; the limited cases below do not assert the general alteration used there.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is assumed by the normal-model and resolution inputs.
---

## Statement

Assume AC. Let k be an algebraically closed field, X an integral finite-type k-scheme with function field K, and L/K a specified finite Galois extension with group G. Then:

1. If `dim X≤1`, there are a nonempty smooth affine open U⊂X and a smooth integral projective k-scheme Z with faithful G-action and G-stable open V⊂Z such that `k(Z)=L` as a G-field and V→U is a finite étale G-torsor.
2. If `char k=0`, the same conclusion holds in arbitrary dimension with Z required smooth and proper instead of projective.

The second clause does not assert projectivity of its smooth proper model. Neither clause proves the general positive-characteristic, higher-dimensional equivariant de Jong alteration.

## Facts & Assumptions

**Given:** AC, algebraically closed k, integral finite-type X/k, and a specified finite Galois extension L/k(X) with group G.

[F1] For the given extension there is a normal integral projective G-model Z with a G-stable finite étale G-torsor V over a nonempty smooth affine U⊂X. [[lem-galois-field-extension-has-normal-projective-equivariant-model]]

[F2] A normal integral finite-type curve over a perfect field is smooth. [[thm-normal-curve-is-nonsingular]]

[F3] In characteristic zero an integral separated finite-type scheme has a smooth proper birational resolution, equivariant for every group action and an isomorphism over its smooth locus. [[thm-resolution-of-singularities-in-characteristic-zero]]

[F4] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** normality in dimension one and equivariant characteristic-zero resolution.

1.1 Apply [F1] to obtain U, Z and V. Since L/K is finite, `dim Z=trdeg_k L=trdeg_k K=dim X`. If this dimension is zero, finite type over algebraically closed k makes K=k and L=k, so G is trivial and Z is the smooth projective point. If it is one, Z is normal and projective, hence separated, and [F2] makes Z smooth because k is perfect. The existing faithful G-action, stable V and torsor V→U therefore prove clause 1 without changing the model. [F1, F2, F4, given, algebra]

2.1 Suppose char k=0. Apply [F3] to the normal projective G-model Z from [F1]. It gives a smooth integral scheme W and a proper birational G-equivariant morphism `W→Z`, an isomorphism over the smooth locus of Z. Since Z is proper over k, W is proper over k. The open V is smooth because it is finite étale over the smooth U, so its inverse image in W is canonically V and is G-stable. It remains a finite étale G-torsor over U. The induced G-action on W is faithful because it induces the given faithful action on the common function field L. This proves clause 2. [F1, F3, F4, step 1.1, given, construct, algebra] ∎

## Source and authoring record

The positive-characteristic assertion is restricted to dimension at most one. In characteristic zero the cited resolution supplies a smooth proper model; this item does not infer that its resolution is projective or supply the general higher-dimensional equivariant alteration.
