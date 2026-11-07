---
id: lem-galois-field-extension-has-normal-projective-equivariant-model
kind: lemma
title: A Galois function-field extension has a normal projective equivariant model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-nonempty-regular-locus-reduced-variety-perfect-field
- thm-regular-equals-smooth-over-perfect-field
- thm-integral-closure-finite-finite-type-domain-over-field
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Bruno Kahn, Sur le groupe des classes d’un schéma arithmétique
    url: https://www.numdam.org/item/BSMF_2006__134_3_395_0.pdf
    locator: §3, proof of Theorem 3; the normal Galois model constructed here is only a preliminary part of the alteration input used there.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is assumed by the dense regular-locus suppliers.
---

## Statement

Assume AC. Let k be an algebraically closed field, X an integral finite-type k-scheme with function field K, and L/K a specified finite Galois extension with group G. There exist a nonempty smooth affine open `U⊂X`, a normal integral projective k-scheme Z with faithful G-action, and a G-stable open `V⊂Z` such that `k(Z)=L` as a G-field and `V→U` is a finite étale G-torsor. The open U is dense in X. The scheme Z is not asserted smooth; no existence of L with a smooth projective G-model or of an equivariant de Jong alteration is asserted.

## Facts & Assumptions

**Given:** AC, algebraically closed k, integral finite-type X/k, K=k(X), and the specified finite Galois extension L/K with group G.

[F1] A reduced finite-type scheme over a perfect field has a dense open regular locus, and regular finite-type schemes over a perfect field are smooth. [[thm-nonempty-regular-locus-reduced-variety-perfect-field]] [[thm-regular-equals-smooth-over-perfect-field]]

[F2] The integral closure of a finite-type domain over a field in its fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F3] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** finite normalization, lifted field action and discriminant localization.

1.1 An algebraically closed field is perfect. By [F1], the regular locus of X is nonempty and open and is smooth over k. Choose a nonempty affine open `U₀=Spec A` inside it. It is dense because X is integral. As a finite-type k-algebra, A is a quotient of a polynomial ring, so U₀ embeds as a closed subscheme of some affine space Aᵐ_k. Let X̄ be its scheme-theoretic closure in Pᵐ_k; it is integral and projective, has function field K, and contains U₀ as an open subscheme. [F1, F3, given, choose, construct, algebra]

2.1 On an affine chart `Spec B⊂X̄`, choose finitely many field generators of L/K and multiply them by nonzero elements of B so that they are integral over B. Their B-algebra is a finite B-module, is of finite type over k, and has fraction field L. By [F2] its integral closure in L is finite over it and hence over B. Integral closure commutes with localization, so these finite normal affine schemes glue to a normal integral Z finite over X̄, with function field L. As X̄ is projective and Z→X̄ is finite, Z is projective. Every element of G preserves the integral closure on each chart, so it induces an automorphism of Z over X̄; these form a faithful G-action because their action on k(Z)=L is faithful. [F2, F3, step 1.1, given, construct, algebra]

3.1 Over `U₀=Spec A` let A' be the integral closure of A in L. Choose a primitive element θ for the finite separable extension L/K, multiply it by a nonzero element of A to make it integral, and choose a nonzero f∈A clearing the denominators of the coefficients of all A'-module generators in the basis `1,θ,…,θ^(d−1)` and making the discriminant of the minimal polynomial of θ a unit. Then `A'_f=A_f[θ]`, and the latter is finite étale over A_f. Put `U=Spec A_f` and `V=Z×_(X̄)U`; U is nonempty and smooth by step 1.1, V is G-stable, and V→U is finite étale. Its geometric generic fibre is the set of K-embeddings of L into an algebraic closure and G acts simply transitively. The canonical map `V×G→V×_U V` is therefore an isomorphism on the geometric generic fibre. Both sides are finite étale over the connected scheme U, so after an étale trivialization the bijectivity locus is open and closed; it contains the generic point and is all of U. The map is consequently an isomorphism of finite étale U-schemes. Thus V→U is a G-torsor. [F2, F3, step 1.1, step 2.1, given, choose, construct, algebra] ∎

## Source and authoring record

This proves the normal projective model and its smooth finite étale Galois locus for a given finite Galois extension. It does not prove smoothness of Z, a smooth G-equivariant alteration, or the missing equivariant de Jong theorem.
