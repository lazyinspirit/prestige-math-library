---
id: lem-ordinary-lisse-nonproper-curve-adic-compact-support-h0-in-zf
kind: lemma
title: "Constructed adic degree-zero compact support for an ordinary lisse sheaf without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-nagata-compactification-for-separated-finite-type-morphisms
  - thm-integral-closure-finite-finite-type-domain-over-field
  - lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization
  - lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf
  - thm-prime-to-characteristic-normal-curve-cohomological-dimension-two-in-zf
  - thm-normal-proper-curve-prime-to-characteristic-constructible-cohomology-finite-in-zf
  - lem-adic-pushforward-to-algebraically-closed-point-under-finite-cd-in-zf
  - def-proper-morphism
  - cor-noether-normalisation-module-finiteness
proof_strategy: direct
axiom_use: "No ambient choice axiom is assumed. All chosen models and finite covers are selected for the one given curve and sheaf."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "The compactification formula is constructed below for this specific ordinary lisse sheaf and the explicit tower model."
---

## Statement

Let k be algebraically closed of characteristic p, let U be a nonempty smooth geometrically connected separated finite-type nonproper k-curve, let ℓ≠p, and let F be an ordinary étale-locally constant sheaf of finite-dimensional Q_l-vector spaces on U. There is a proper normal compactification j:U→C and a normalized finite-free lisse adic model L• of F for which RΓ(C,j_!L•), rationalized in the repository's explicit adic model, is a well-defined bounded constructible finite-Tor object and has H⁰=0. The ordinary degree-zero compact-support group is also zero, and the two groups agree canonically. The degree-zero result is independent of the chosen proper normal compactification and invariant lattice. No ambient choice axiom is assumed. This is a construction for this specific sheaf and curve, not a general relative Rf_! or full compactification-independence theorem.

## Facts & Assumptions

**Given:** k, U, ℓ and F as in the statement.

[F1] A separated finite-type morphism between Noetherian schemes has a proper compactification. [[thm-nagata-compactification-for-separated-finite-type-morphisms]]

[F2] Finite-type k-domains have finite normalization in their fraction fields. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F3] The given ordinary lisse F has a connected finite étale Galois trivialization. [[lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization]]

[F4] Extension by zero preserves the stated normalized constructible finite-Tor tower model and is exact. [[lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf]]

[F5] For a normal integral separated finite-type k-curve and ℓ invertible in k, every A_n-sheaf has zero H^q for q>2. [[thm-prime-to-characteristic-normal-curve-cohomological-dimension-two-in-zf]]

[F6] On a normal proper integral k-curve, a constructible A_n-sheaf has finite cohomology in every degree. [[thm-normal-proper-curve-prime-to-characteristic-constructible-cohomology-finite-in-zf]]

[F7] Given a uniform finite cohomological-dimension bound and finite output cohomology, the explicit unnormalized point pushforward of a normalized constructible finite-Tor tower belongs to the normalized rational-adic category. [[lem-adic-pushforward-to-algebraically-closed-point-under-finite-cd-in-zf]]

[F8] Proper morphisms are universally closed, separated and of finite type. [[def-proper-morphism]]

[F9] Every nonzero finite-type k-algebra is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

## Proof

1.1 Smoothness and connectedness make U normal and integral. Choose one proper compactification U→Xbar by [F1]. Give the closure of U its reduced closed-subscheme structure X; it is an integral proper k-curve and contains U as a dense open. On every affine Spec A⊂X, [F2] makes the normalization of A in its fraction field finite. These integral closures commute with localization and glue to a finite normal integral curve C→X, which is an isomorphism above the normal open U. A finite morphism is proper by the finite-algebra determinant argument: after any base change, the image of a closed set is the closed set defined by the kernel of the finite quotient algebra, and each fibre over it is nonzero by finite Nakayama and has a maximal ideal by a finite-dimensional argument. Thus C is proper by composition, and j:U→C is a proper normal compactification. [F1, F2, F8, given, choose, algebra]

2.1 Choose the connected finite étale Galois trivialization q:T→U of [F3], with group G and constant fibre V≅Q_l^r. Choose one basis and put L₀=Z_l^r and L=∑_{g∈G}ρ(g)L₀, where ρ is the finite transport action. Clearing finitely many denominators bounds L between two scalar multiples of L₀, so L is finite torsion-free over the DVR Z_l and hence finite free. It is G-stable. Descend L/ℓⁿL through the given G-torsor to obtain finite-free locally constant sheaves L_n with compatible quotient reductions. On a qc étale test object, the pullback to T has finitely many connected components, so inverse limit and rationalization commute with the resulting finite product. The ordinary rationalization of L• is therefore the original F. [F3, given, choose, construct, algebra]

2.2 Exact extension by zero in [F4] makes K=j_!L• a normalized constructible tower with a uniform finite cohomological interval and finite Tor amplitude. The normal curve C satisfies the uniform cohomological dimension bound D=2 by [F5]. Each K_n is a finite constructible sheaf on the normal proper curve C, so every H^i(C,K_n) is finite by [F6]. Thus every hypothesis of [F7] holds. Its construction gives a bounded constructible finite-Tor rational-adic object RΓ(C,K) with coherent derived reductions. [F4, F5, F6, F7, step 1.1, step 2.1, given, algebra]

3.1 A global section of j_!L_n is a section of L_n on U whose nonzero-germ support has closure in C contained in U: this is the extension-by-zero construction in [F4]. Pull the section back to the connected T. It becomes one constant vector v. If v=0, étale sheaf descent makes the section zero. If v≠0, every closed point of U has a k-rational point in its finite nonempty T-fibre, so its germ is nonzero at every closed point. Such points are dense: on a nonempty affine open, [F9] gives a finite polynomial normalization; quotient by its coordinate maximal ideal is nonzero by finite Nakayama and has a finite field quotient, which is k. Thus the support closure contains U. If that closure were contained in U, then U would be open and closed in the proper C; its base changes would be closed in those of C, so [F8] would make U proper, contrary to the hypothesis. Hence Γ(C,j_!L_n)=0 for every n. The identical argument with the constant Q_l-fibre V gives Γ_c(U,F)=0. [F4, F8, F9, step 1.1, step 2.1, given, algebra]

3.2 The underlying unnormalized tower direct image is the right-derived levelwise global-sections functor used in [F7]. Its degree-zero cohomology is the levelwise left-exact global-sections tower. Step 3.1 makes this tower zero, so its rationalization is zero. The ordinary Γ_c(U,F) is also zero, giving the unique canonical isomorphism of the two groups. The same support calculation applies to every proper normal compactification and any invariant lattice, so the degree-zero result and comparison are independent of those choices. [F7, step 2.2, step 3.1, algebra] ∎

## Scope

This establishes the actual compact-support model and its H⁰ only for the original ordinary lisse sheaf on a nonproper smooth curve. It does not claim a full relative proper-support functor, higher-degree compactification independence, or a general ordinary/adic equivalence.
