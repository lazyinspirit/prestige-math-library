---
id: lem-complete-noetherian-proper-formal-finite-etale-effectivity
kind: lemma
title: Complete proper finite-etale effectivity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-projective-formal-finite-etale-algebras-algebraize
- lem-projective-cohomological-modifications-transfer-formal-etale-algebras
- lem-finite-projective-modules-and-etale-algebras-patch-on-milnor-squares
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-chow-lemma-proper-noetherian
- thm-finite-etale-algebras-invariant-under-nilpotent-thickening
- lem-projective-coherent-cohomology-finite-and-vanishing
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0A48
    url: https://stacks.math.columbia.edu/tag/0A48
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For a complete Noetherian local ring (A,m), a proper A-scheme X, and X_n=X×_A Spec(A/m^(n+1)), every compatible system of finite étale algebras and maps on the X_n algebraizes on X, and FEt(X)→FEt(X_0) is an equivalence. Full reduced-nonnormal and nilpotent cases are included.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-projective-formal-finite-etale-algebras-algebraize]].

[F2] The following existing interface is used at its literal public scope: [[lem-projective-cohomological-modifications-transfer-formal-etale-algebras]].

[F3] The following existing interface is used at its literal public scope: [[lem-finite-projective-modules-and-etale-algebras-patch-on-milnor-squares]].

[F4] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F5] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F6] The following existing interface is used at its literal public scope: [[lem-chow-lemma-proper-noetherian]].

[F7] The following existing interface is used at its literal public scope: [[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]].

[F8] Projective coherent cohomology in degree zero is finite over any Noetherian affine base. [[lem-projective-coherent-cohomology-finite-and-vanishing]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 DC gives the exact Noetherian-induction principle used here. If a nonempty family of closed subsets of a Noetherian space had no inclusion-minimal member, its strict-containment relation would be entire; DC would give an infinite strictly descending sequence of closed subsets. This contradicts Noetherianity. Thus such a minimal member exists. Apply this to the family of closed subsets not expressible as a finite union of irreducible closed subsets. A minimal bad member splits into two proper closed subsets, each of which is a finite union, contradiction. Delete redundant members of the resulting finite union to obtain the finite irreducible components. This is the full choice-dependent argument; no unqualified version of an AC/DC-qualified published provider is being invoked. [F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 The projective algebraization and Hom equivalence at arbitrary complete Noetherian local base are the explicit AC-qualified public statement of [F1]. The cohomological-modification and completed-conductor assertions are [F2]. These suppliers already use dependent choice for compatible finite lifts and impose no enumeration of the base ring. [F1, F2, F4, F5, step 1.1, given, algebra]

3.1 For an arbitrary finite-type proper scheme `T` over `A`, its reduced scheme is obtained by a nilpotent immersion: on each of a fixed finite affine cover, the nilradical is a finite ideal, and the finite nilpotence exponents of its generators give a bound; a maximum over the finite cover gives a uniform bound. Apply [F7] on a finite affine cover; its uniqueness of lifted algebra maps glues the lifts on intersections and gives the equivalence across the nilpotent immersion. This transfers finite-etale effectivity and full faithfulness from `T_red` to `T`. [F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 For reduced `T`, take its finitely many integral reduced components `T_i`, using step 1.1. Each is proper over `A`. Apply the explicit integral Chow construction to get projective `Y_i` with projective birational maps to `T_i`. Their finite disjoint union `Y` is projective over `A`: embed its finitely many projective embeddings in mutually disjoint coordinate linear subspaces of one larger projective space. The maps give a projective `p:Y -> T`. Indeed `Y` is projective over `A` and `T` is separated, so its graph gives a closed immersion into a projective space over `T`. The map is proper and surjective, and is birational over every component. [F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 The algebra `C=p_*O_Y` is finite coherent on `T` by projective coherent cohomology [F8] on each affine base open. It contains `O_T` injectively because `T` is reduced and the componentwise maps are birational, and it embeds in the finite product of their function fields. At every generic point of `T` it equals the corresponding field. The construction `T'=Spec_T C` and the explicit principal-open localization calculation give a factorization `Y --q--> T' -> T`, with `q` projective and `q_*O_Y=O_T'`. Hence formal finite-etale effectivity/full faithfulness hold on `T'` by the proved projective-model construction. No normality of `T'` or finiteness of a normalization is asserted or needed. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra]

6.1 The conductor `K=Ann(C/O_T)` is a coherent common ideal. It is the unit ideal at every generic point, since `C/O_T` is finite and zero there. Its closed support `Z` is therefore a strict closed subset whenever `T` is nonempty. Set `Z'=T' x_T Z`; the conductor square is a Milnor square. If `C=O_T`, `Z` is empty and no smaller-support algebra is needed. [F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 Fix the original proper `X`. For a closed subset `S` of `X`, let `P(S)` mean: for every scheme `T` finite over `X` with image contained in `S`, formal finite-etale effectivity and full faithfulness hold on `T`. Such `T` is proper and Noetherian over `A`. We prove `P(S)` by the Noetherian-induction principle from step 1.1. Assume `P(S_0)` for every strict closed `S_0 subset S`; objects whose image is already strict are covered. It remains to construct effectivity on each `T` with image exactly `S`. [F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 Reduce `T` by step 3.1. Carry out step 4.1–step 6.1 on `T_red`. The image in `X` of its conductor `Z` is a strict closed subset of `S`. Here the extra assertion about images, rather than just strict subsets of `T_red`, is important. If `eta` is a generic point of `S`, the finite algebra of `T_red` over its residue field is reduced: localize the reduced finite algebra at that generic point of its support. It is a finite-dimensional reduced algebra over a field, hence a finite product of fields. This last claim is a finite-dimensional algebra calculation: a finite-dimensional algebra has finite-length descending ideal chains; maximal ideals can be chosen by greatest proper-ideal dimension, and a finite successive CRT decomposition of its reduced quotient gives its field factors. Thus it is already integrally closed in its total fraction algebra. The finite birational extension `C` constructed in step 5.1 is an equality over `eta`. Consequently the conductor is the unit ideal over `eta`. Its finite closed image omits the generic points of `S`, and is strict. [F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Call this strict image `S_0`. The scheme `Z` is finite over `X`, so the inductive assertion supplies an algebraization of the restricted formal system on `Z`. The scheme `Z'`, and every finite scheme over `Z'`, is also finite over `X` with image in `S_0`. In particular the inductive **full faithfulness** supplies the algebraization of the prescribed compatible overlap isomorphism between the two finite etale algebras restricted to `Z'`. If expressed via covers, lift the graph and its inverse on the proper product scheme over `Z'`; all of those schemes have the same strict image bound. This checks the overlap inside the induction, rather than assuming it from a bigger proper-base-change theorem. [F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 The actual completed-conductor assembly constructed earlier now applies: patch the algebra on `T'` with that on `Z` by the explicit finite-etale Milnor lemma, and compare with the original formal system on the **completed** conductor square. Completion is exact for the finite modules involved; the original compatible projective formal module preserves that completed fibre product. Thus the patched algebra has precisely the original reductions. No conductor square modulo `m^n` is presumed cartesian. This proves essential surjectivity for every `T` with image `S`, and the nilpotent lift proves it for the original `T` before reduction. [F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 Having proved essential surjectivity for **all** such `T`, fullness follows without circularity. If `U,V` are finite etale over `T`, the proper scheme `U x_T V` is finite over `X` with image contained in `S`; essential surjectivity, just established for every object of that support class, lifts the closed-fibre graph. The projection of its lifted cover to `U` is finite etale and is an isomorphism over the closed fibre, hence globally: its rank-one locus is open and closed and proper closed-fibre detection makes its complement empty. Composition gives the desired map. Two maps equal on the closed fibre agree globally because their equality locus is open and closed in a proper finite cover. This is the graph argument reconstructed in the initial A5 draft. The induction step establishes `P(S)` completely. [F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra]

12.1 Noetherian induction gives `P(X)`. The identity `X -> X` is finite, so the full formal-effectivity and full-faithfulness conclusions follow for the originally specified arbitrary proper `X`. [F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra]

13.1 Starting from one finite etale algebra on `X_0`, the finite affine square-zero construction extends it through every `X_n`, and unique infinitesimal isomorphisms identify the reductions. With DC, the set of finite partial compatible systems has a path: each node extends by the proved finite nilpotent construction. No compatible system is simply postulated. Apply step 12.1 to get an algebra on `X`. Faithfulness and graph fullness then show restriction is an equivalence. The empty scheme causes no exception. [F1, F2, F3, F4, F5, F6, F7, step 12.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. This research carrier has not been installed or recorded.
