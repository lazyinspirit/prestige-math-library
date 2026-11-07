---
id: lem-proper-torsion-relative-constructibility-reduction
kind: lemma
title: Relative constructibility reduces to smooth proper curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- cor-quasi-finite-locus-open-finite-type-algebra
- lem-generic-constructibility-for-smooth-proper-curve-torsion-cohomology
- lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards
- lem-proper-torsion-base-change-under-choice
- lem-finite-morphism-etale-direct-image-calculus
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-site-slice-restriction-locality-and-composition
- lem-chow-lemma-proper-noetherian
- thm-curves-function-fields-equivalence
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- thm-proper-quasi-finite-is-finite
- thm-etale-formally-etale-finite-presentation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: SGA4 ExposeXIV section1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Full displayed section1 read, especially1.4–1.11; finite spreading, incidence blowup and coefficient reductions are locally reconstructed below, not imported EGA inputs.
axiom_use: Explicit AC for finite coefficient witnesses and the existing Noetherian Chow/curve providers. Original unqualified25 remains unchanged and held.
---

## Statement

Assume the Axiom of Choice. For a proper finite-type morphism f:X→S of Noetherian schemes and a finite constructible Z/n-module sheaf F, constructibility of every R^qf_*F follows from canonical proper torsion exchange and generic constructibility for constant prime coefficients on smooth proper relative curves. The reduction includes finite coefficient coresolutions, finite radicial and finite étale generic descent, projective dimension reduction, and Noetherian stratification.

## Statement references

[SGA4 XIV1.4–1.11](https://grothendiecksga.com/read/sga4/en/XIV-1.html)

## Facts & Assumptions

**Given:** AC, the proper finite-type Noetherian f and constructible F, with the two geometric premises explicitly named in the conditional Statement.

[A1] AC is explicit throughout. [[def-axiom-of-choice]]

[F1] Canonical proper torsion exchange, actual geometric stalk identification, and composition compatibility are supplied at explicit AC scope. [[lem-proper-torsion-base-change-under-choice]]

[F2] The named generic-curve supplier gives: for a smooth proper relative curve over an integral Noetherian base, constant prime-coefficient higher images are finite constructible on a dense open, in every residue characteristic. [[lem-generic-constructibility-for-smooth-proper-curve-torsion-cohomology]]

[F3] Finite constructible Z/n sheaves embed in finite sums of finite constant pushforwards at AC scope. [[lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards]]

[F4] Finite direct image is exact, has finite-product geometric stalks and commutes with arbitrary base change. [[lem-finite-morphism-etale-direct-image-calculus]]

[F5] Corrected AC finite witnesses and actual composition/slice calculus are available. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]] [[lem-site-slice-restriction-locality-and-composition]]

[F6] At AC scope Noetherian proper schemes admit projective proper-surjective modifications isomorphic on a dense open. Over a perfect field one-variable function fields have smooth proper curve models; maps to proper curves extend and proper quasi-finite maps are finite. [[lem-chow-lemma-proper-noetherian]] [[thm-curves-function-fields-equivalence]] [[lem-rational-map-smooth-curve-to-proper-scheme-extends]] [[thm-proper-quasi-finite-is-finite]]

[F7] At AC scope a finitely presented formally étale algebra is étale. [[thm-etale-formally-etale-finite-presentation]]

[F8] The AC Jacobian criterion certifies the chosen smooth charts; the quasi-finite locus of a finite-type algebra is open. [[thm-jacobian-criterion-smooth-morphism]] [[cor-quasi-finite-locus-open-finite-type-algebra]]

## Proof

**Proof technique:** finite-pushforward coresolutions, generic curve models and incidence blowups.

1.1 Finite constructible coefficient sheaves on a Noetherian scheme are closed under kernels, cokernels and extensions. Refine the finitely many finite locally closed stratifications and trivialize the finitely many finite locally constant modules on each stratum. A morphism is then a map between finite constant groups on a further étale cover; its kernel and cokernel are finite constant there. Extensions are also locally constant: lift the finitely many elements of the finite quotient locally across the sheaf epimorphism, and then shrink a common finite covering refinement until all finite addition relations hold. These operations give the claimed finite stratifications. The same argument proves that an inverse image preserves finite constructibility. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, construct, algebra]

2.1 We require finite direct image to preserve finite constructibility. First for a finite free algebra B/R and finite group M, the sheaf f_*constant(M) is represented, as a sheaf of sets, by the affine finite-presentation scheme of M-labelled orthogonal idempotents e_m∈B summing to1. Write these elements in a finite basis to obtain its polynomial equations. Idempotents lift uniquely across nilpotent ideals: in a square-zero ideal an approximate idempotent a with error d=a²−a is corrected to a+(1−2a)d; products and sums lift by uniqueness. Thus this parameter scheme is formally étale and is étale by [F7]. Its fibres are finite, so the finite-presentation étale scheme gives a finite constructible sheaf: near a generic point its finitely many finite separable fibre points and their presentations spread to finite étale sheets, and Noetherian induction treats the complement. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 For a finite algebra B over a Noetherian R, stratify the base so B is free as module on each reduced integral stratum. Choose a generic field basis, lift its finitely many vectors and clear the denominators of its finite kernel/cokernel to obtain a free module on a dense open; iterate on the closed complement. Finite base change [F4] reduces f_*constant(M) on each stratum to step2.1. Hence it is finite constructible without any flatness assumption on f. For general finite constructible F on Y, use [F3] to embed it into E0, a finite sum of finite constant pushforwards; E0 is constructible by the case just proved. Embed its constructible quotient into E1 of the same form. Exact finite f_* identifies f_*F with the kernel of f_*E0→f_*E1, and these last two are again finite constant pushforwards under composition of finite maps. Step1.1 proves the result. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 Using proper exchange [F1], constructibility on finitely many locally closed subschemes covering the base implies constructibility on the base: the corresponding restrictions of R^qf_*F are the higher images of the restricted data. In particular Noetherian induction reduces every generic constructibility assertion to an integral base and a sufficiently small nonempty open. The induction is on closed subsets; on an irreducible component remove the other components and nilpotents, then continue on the smaller complement. Nilpotent base reductions induce étale equivalences by [F4], whose adjunction maps have one factor at each geometric point. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, construct, algebra]

5.1 We first prove all-coefficient constructibility for a proper family of relative dimension at most one. By [F3] successively embed F and each constructible cokernel into a finite sum Ei of finite constant pushforwards, giving a coresolution F→E• in nonnegative degrees. Step3.1 makes every Ei and every cokernel constructible. The higher-image spectral sequence of this actual coresolution has terms given by higher images of the Ei; in each fixed total degree only finitely many terms and differentials matter. Finite pushforward exactness identifies the higher images of Ei with those of finite constant sheaves on schemes finite over X; those schemes still have relative dimension at most one. Finite prime-power filtrations and the long exact sequences reduce these constants to F_ℓ. Thus it suffices to prove the generic statement for constant F_ℓ and an arbitrary proper relative-dimension-at-most-one family. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra]

6.1 Let K be the fraction field of the integral base. Over an algebraic closure Ω of K, reduce the generic fibre. For each one-dimensional integral component its function field over the perfect field Ω has a smooth proper projective model by [F6]. Its rational map to that component extends; it is proper and quasi-finite, hence finite, and birational. Clearing finitely many denominators of its finite algebra generators makes it an isomorphism off finitely many points. Include the finitely many zero-dimensional components separately. This gives a finite surjective morphism from finitely many smooth proper curves and points to the reduced generic fibre, isomorphic away from a finite closed subscheme. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, given, construct, algebra]

7.1 All data of this last finite diagram descend to one finite algebraic extension K′/K. Explicitly choose finitely many projective equations for the smooth proper source models, finite affine charts for the target, images of their algebra generators on those source charts, finite module generators for the finite morphism, and their multiplication/gluing equations. Smoothness is certified by finitely many Jacobian charts covering the projective source; the covering condition and isomorphism off the chosen finite exceptional set use finitely many unit-ideal and inverse-map equations. Only finitely many coefficients in Ω occur, so they generate a finite extension K′. After enlarging it for those finitely many witnesses, faithful flatness of Ω/K′ reflects every stated identity, surjectivity and isomorphism. There is no normalization-finiteness assertion over an arbitrary Noetherian scheme in this step. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, given, construct, algebra]

8.1 Spread K′ to a finite surjective cover S′ of a nonempty base open as a finite separable extension followed by a finite purely inseparable tower. The first is a finite étale monic model after inverting its discriminant; each latter step is a monic equation T^(p^e)−a after clearing denominators. These latter finite free maps are radicial and surjective, as every algebraically closed fibre has exactly one underlying point. The separable part is local for constructibility, and the purely inseparable parts induce equivalences of étale sheaves by the singleton stalk unit/counit of [F4]. Proper exchange [F1] therefore lets us replace S by S′ for the generic constructibility proof. Reduce the resulting X if needed; the finite nilpotent reduction has the same étale topos. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, given, construct, algebra]

9.1 Spread the projective generic source models and their finite maps over a further dense open of S′ using the finite equations from step7.1. Smoothness holds after removing the proper image of the closed nonsmooth locus. Finiteness of the map holds after another shrink: its generic map is finite, the projective-source map to separated X is proper, and its non-quasi-finite locus is closed away from the generic fibre; remove its proper closed image on the base and apply [F6]. The finite map is surjective after shrinking by the following precise kernel calculation. Put K=ker(O_X→π_*O_Y). On the generic fibre K is nilpotent, because π is surjective there. Finite generation on the Noetherian X gives one N for which K^N has zero generic restriction. Its coherent support is closed and proper over S, so its image is closed and avoids the generic point. Remove that image. Then K^N=0 everywhere, and the integral finite algebra map has image all of Spec(O_X), by lying over applied after the nilpotent kernel quotient. This proves surjectivity without treating an open complement as proper. We have a finite surjective π:Y→X with Y smooth proper of relative dimension one, together with possible finite zero-dimensional pieces, and π an isomorphism off a closed Z finite over the base. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, given, construct, algebra]

10.1 The last finite-exceptional-set assertion also has a finite witness. On the generic fibre the kernel and cokernel of O_X→π_*O_Y are supported on finitely many points. Their coherent supports extend as closed subsets of X. After a shrink these supports are quasi-finite over S: the generic fibres are zero-dimensional, and the non-quasi-finite loci have proper closed images avoiding the generic point. They are therefore finite over S by [F6]. Off their union the finite algebra map is an isomorphism. A thickening of the union does not affect étale sheaves, so take this finite closed Z as the exceptional locus. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, given, construct, algebra]

11.1 The sheaf map constant(F_ℓ)_X→π_*constant(F_ℓ)_Y is monic by surjectivity and the diagonal finite-product stalk formula [F4]. Its constructible cokernel C is supported on Z since π is an isomorphism off Z. Its higher direct images under f are finite constructible in degree zero and vanish in positive degrees, by step3.1 and exact finite direct image for Z→S. On Y, [F2] gives generic constructibility of every higher image of the constant sheaf; its zero-dimensional pieces are covered by step3.1. Finite π_* is exact, so its higher images on X equal these on Y. The long exact sequence consequently proves generic constructibility for constant F_ℓ on X. Steps4.1–5.1 finish the full relative-dimension-at-most-one case, at all coefficient orders. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 10.1, given, construct, algebra, step 5.1]

12.1 Now prove constructibility for every Pn_S→S by induction on n, uniformly over Noetherian bases and all finite constructible coefficients. Cases n=0 and1 were proved in steps3.1 and11.1. For n≥2 blow up the linear centre Z={X0=X1=0}≅P^(n−2)_S. Explicitly B⊂Pn_S×P1_S is the incidence variety X0·t=X1·s. Over the two charts of P1, solving one of these equations identifies the projection a:B→P1_S with a P^(n−1)-bundle. Its higher images preserve constructibility by the induction hypothesis locally on P1; composing with P1→S preserves it by its higher-image spectral sequence and the established curve case. The projection π:B→Pn is proper, an isomorphism off Z, and has fibres P1 over Z and a point elsewhere. Its relative dimension is at most one, so step11.1 proves constructibility for π too. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 11.1, given, construct, algebra]

13.1 For a constructible F on Pn put U=Pn minus Z and E=j_!F|U, with j:U→Pn. On B let E′=j′_!π^*F|π^(-1)U. The canonical adjunction E→π_*E′ is an isomorphism: on U it is the identity, and on a geometric fibre over Z both sheaves vanish by proper exchange [F1]. The same fibre computation gives R^qπ_*E′=0 for q>0. The actual composition spectral sequence therefore identifies R^q f_*E with R^q(fπ)_*E′, constructible by step12.1. The closed-complement term i_*F|Z has constructible higher images by the n−2 induction hypothesis. The exact sequence 0→E→F→i_*F|Z→0 and step1.1 prove constructibility for Pn in every degree. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 12.1, given, construct, algebra]

14.1 Every projective morphism over an affine Noetherian base factors as a closed immersion into some Pn followed by projection. Closed immersion pushforward is finite and preserves constructibility by step3.1; exactness and composition reduce to step13.1. Thus every projective morphism preserves finite constructibility under all higher images. This conclusion is local on the base, so it also holds over a nonaffine Noetherian base. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 13.1, given, construct, algebra]

15.1 Finally let f:X→S be arbitrary proper. Reduce X and argue by Noetherian induction on its closed subsets. The Chow provider [F6] gives proper surjective π:Y→X with Y projective over S and π an isomorphism over a dense open U. Also π is projective over X: its map into Pn_X is a closed graph followed by the projective embedding over S. Hence constructibility is known for π and for fπ by step14.1. For E=j_!F|U the pullback open-extension E′ on Y again has π_*E′=E and zero positive R^qπ_*E′ by the geometric fibre calculation of step13.1 using [F1]. Composition identifies R^qf_*E with R^q(fπ)_*E′, constructible. The complement X minus U is a proper smaller closed subset, whose term is handled by the induction hypothesis. The open-closed exact sequence finishes every constructible F on X. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 14.1, given, construct, algebra]

16.1 Thus actual proper exchange and generic smooth-proper-curve constructibility imply full relative constructibility for every proper finite-type Noetherian f and finite constructible Z/n-module sheaf. All finite algebras, covering refinements, loci and spectral sequences used above have been specified; no EGA spreading, general normalization-finiteness or unproved established theorem is imported. The exchange and generic-curve inputs remain explicit logical prerequisites of this conditional statement; it does not close original unqualified batch25. Empty schemes, n=1 and zero coefficients have zero higher images and are included. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 15.1, given, construct, algebra] ∎

## Authoring status

Dependent local reduction; the AC-scoped exchange and generic-curve inputs are separately recorded or awaiting their own records. No independent acceptance or unqualified old25 closure is asserted.
