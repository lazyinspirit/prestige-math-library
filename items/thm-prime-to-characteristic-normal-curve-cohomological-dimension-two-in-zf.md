---
id: thm-prime-to-characteristic-normal-curve-cohomological-dimension-two-in-zf
kind: theorem
title: "Prime-to-characteristic étale cohomological dimension two for normal curves without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization
  - lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
  - lem-finite-constructible-cohomology-witness-on-smooth-curves-in-zf
  - lem-finite-type-derived-tower-direct-images-compose-in-zf
  - lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf
  - lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf
  - lem-finite-morphism-etale-direct-image-calculus
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-sylow-first-theorem
proof_strategy: direct
axiom_use: "No choice principle is assumed. All covers, group filtrations, descent data and cohomology witnesses used for one class are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, cohomology of torsion sheaves on curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The prime-to-characteristic dimension bound is reconstructed here from finite covers, normalizations and the choice-free Kummer calculation."
---

## Statement

Let k be algebraically closed, C a normal integral separated finite-type k-curve, ℓ a prime different from char(k), and n≥1. In the choice-free unnormalized finite-hypercover model, H^q(C,F)=0 for every q>2 and every étale Z/ℓⁿZ-module sheaf F, with no constructibility assumption on F. The integer 2 is uniform in n. No choice principle or selected separable closure is assumed. The statement does not assert finiteness of cohomology or preservation of normalized adic objects.

## Facts & Assumptions

**Given:** k, C, ℓ, n, F and q as in the statement.

[F1] Every ordinary finite-dimensional locally constant vector sheaf on a normal integral separated finite-type k-curve has a connected finite étale Galois trivialization, without a choice premise. [[lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization]]

[F2] On any normal integral finite-type k-curve Y, H^q(Y,μ_ℓ)=0 for q>2 in the choice-free finite-hypercover model. [[lem-generic-point-leray-and-kummer-curve-cohomology-in-zf]]

[F3] On an integral finite-type k-curve, each cohomology class with arbitrary A_n-coefficients is the image of a class with constructible finite coefficients. [[lem-finite-constructible-cohomology-witness-on-smooth-curves-in-zf]]

[F4] Unnormalized derived tower direct images compose, and finite direct image is exact without a choice premise. [[lem-finite-type-derived-tower-direct-images-compose-in-zf]] [[lem-finite-morphism-etale-direct-image-calculus]]

[F5] Extension by zero is exact; closed k-point étale stalks are exact and conservative on finite-coefficient sheaves. [[lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf]] [[lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf]]

[F6] Faithfully flat module and algebra descent holds, and finite-type k-domains have finite normalization in their fraction fields. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F7] Every finite group has an ℓ-Sylow subgroup. [[thm-sylow-first-theorem]]

## Proof

1.1 First let F be constructible. One stratum contains the generic point and therefore contains a dense open U⊂C on which F is finite locally constant. The complement Z=C−U is a finite set of closed k-points. The exact extension-by-zero sequence 0→j_!F|U→F→i_*F|Z→0 follows on closed-point stalks from [F5]. A finite skyscraper sheaf on Z has no positive cohomology: on any finite hypercover its fibre at each k-point is a finite contractible simplicial set, so its cochain complex is acyclic in positive degrees. It suffices to prove the bound for j_!F|U. The finite filtration of a finite A_n-module by powers of ℓ is invariant under all transition maps; its successive quotients are locally constant finite-dimensional F_ℓ-vector sheaves. The long exact cohomology sequence reduces the bound to one such sheaf L on U. [F5, given, algebra]

2.1 By [F1] take a connected finite étale Galois cover p:T→U trivializing L, with finite group G acting on its fibre M. Choose an ℓ-Sylow H≤G by [F7]. The quotient V=T/H is a connected finite étale cover f:V→U of degree d=[G:H] prime to ℓ. To construct it without a global choice, descend the finite set G/H along the single G-torsor T→U; on affine charts the descent algebra is the invariant equalizer of [F6], and after base change to T it is a product of d copies of the base algebra. Faithfully flat descent reflects finite local freeness and the étale differential condition. The H-module M has a finite filtration with trivial one-dimensional quotients: a nonzero finite H-module has a nonzero invariant vector by orbit counting modulo ℓ, and induction on dimension finishes. Descent along the H-torsor T→V gives a filtration of f*L with constant F_ℓ quotients. [F1, F6, F7, step 1.1, given, choose, algebra]

2.2 The diagonal L→f_*f*L and finite étale trace f_*f*L→L compose to multiplication by d: check this after the finite étale cover that splits f, where it is the sum over its d sheets. Since d is invertible in F_ℓ, L is a direct summand of f_*f*L. Exactness of j_! from [F5] makes j_!L a direct summand of j_!f_*f*L. [F5, step 2.1, algebra]

3.1 Complete V over C by normalizing C in its function field E=k(V). On an affine Spec A⊂C choose a primitive element of the finite separable extension E/k(C), scale it by one nonzero element of A to be integral, and apply [F6] to the finite-type domain A[θ]. Its finite normalization is the integral closure of A in E; localization makes these constructions glue to a finite normal integral Y→C. Over U the finite étale integral scheme V is normal and is the integral closure of U in E, so the normalization restricts to V. Write j':V→Y and fbar:Y→C. The complement Y−V is finite because Y is a Noetherian integral curve. [F6, step 2.1, given, choose, algebra]

3.2 There is a natural isomorphism j_!f_*G≅fbar_*j'_!G for every finite-coefficient sheaf G on V. On U this is the identity by finite base change; off U, each closed k-point fibre lies in Y−V, where j'_!G has zero stalk. The finite-product stalk formula in [F4] and conservativity in [F5] prove the isomorphism. Because fbar_* is exact and derived direct images compose by [F4], its cohomology on C is the cohomology of j'_!G on Y. [F4, F5, step 3.1, algebra]

4.1 Choose one primitive ℓ-th root in k; it identifies the constant F_ℓ-sheaf on Y with μ_ℓ. The normal-curve bound [F2] gives H^q(Y,F_ℓ)=0 for q>2. The exact sequence 0→j'_!F_ℓ→F_ℓ,Y→i'_*F_ℓ,Y−V→0 and the finite-point acyclicity from step 1.1 give H^q(Y,j'_!F_ℓ)=0 for q>2. The finite filtration of f*L from step 2.1 and exactness of j'_! propagate this bound to j'_!f*L. Steps 2.2 and 3.2 then give the bound for j_!L and hence for every constructible F by step 1.1. [F2, F5, step 1.1, step 2.1, step 2.2, step 3.2, given, choose, algebra]

5.1 For an arbitrary A_n-sheaf F and a class ξ∈H^q(C,F), [F3] supplies a constructible finite sheaf Q and a class mapping to ξ. Step 4.1 makes that class zero when q>2, hence ξ=0. The argument is independent of n, so D=2 is uniform. [F3, step 4.1, given, algebra] ∎

## Scope

This is a prime-to-characteristic vanishing bound, including arbitrary coefficient sheaves. It does not claim finiteness of the remaining cohomology groups, a general proper-base-change theorem, or normalized rational-adic proper pushforward.
