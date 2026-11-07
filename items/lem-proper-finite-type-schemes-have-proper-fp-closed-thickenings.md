---
id: lem-proper-finite-type-schemes-have-proper-fp-closed-thickenings
kind: lemma
title: Proper finite-presentation closed thickenings
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-quasi-coherent-module-scheme
- def-coherent-module-scheme
- cor-localisation-commutes-with-kernels-images-and-cokernels
- lem-chow-lemma-proper-noetherian
- lem-immersion-with-closed-image
- lem-proper-source-to-separated-target-proper
- lem-proper-stable-base-change
- lem-proper-stable-composition
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0A0P
    url: https://stacks.math.columbia.edu/tag/0A0P
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Every proper finite-type X over an affine base A is the inverse limit of proper finitely presented A-schemes with closed-immersion transition maps. Each limit map $X\to X_\lambda$ is a closed immersion.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] A quasi-coherent module on an affine scheme is described by its module of sections and localizations, and a coherent module has finite generators and finite relation kernels. [[def-quasi-coherent-module-scheme]] [[def-coherent-module-scheme]]

[F8] Localization is exact and an element that vanishes after inverting $f$ is killed by some power of $f$. [[cor-localisation-commutes-with-kernels-images-and-cokernels]]

[F3] The following existing interface is used at its literal public scope: [[lem-chow-lemma-proper-noetherian]].

[F4] The following existing interface is used at its literal public scope: [[lem-immersion-with-closed-image]].

[F5] The following existing interface is used at its literal public scope: [[lem-proper-source-to-separated-target-proper]].

[F6] The following existing interface is used at its literal public scope: [[lem-proper-stable-base-change]].

[F7] The following existing interface is used at its literal public scope: [[lem-proper-stable-composition]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 More generally let X be separated and finite type over A. Choose a finite affine cover U_i=Spec C_i and finite A-algebra generating lists x_i for C_i. Every intersection U_i∩U_j is affine: its map to U_i×_A U_j is the base change of the closed diagonal of X. Write C_ij for its ring. The natural C_i⊗_A C_j→C_ij is surjective, so the images of the two finite coordinate lists generate C_ij over A. The same assertion holds for every finite multiple intersection by the iterated diagonal. [F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 Choose finite principal covers D(f_ij,a) of U_i∩U_j inside U_i, and corresponding covers from U_j. Such covers exist because the intersection is quasi-compact. Express the x_j coordinates on each D(f_ij,a) as polynomials in x_i with powers of f_ij,a in the denominators. Record the analogous reverse expressions. In C_ij the finitely many f_ij,a generate the unit ideal; choose a finite unit identity, writing its coefficients as polynomials in the two coordinate lists. These are finite algebra data over A. [F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 Also record finite cover witnesses for triple overlaps. On each principal patch D(f_ij,a f_ik,b) in U_i, the pullbacks of the chosen principal functions covering U_j∩U_k generate the unit ideal. Choose a unit identity there and express its coefficients in the localized x_i algebra. This ensures that the model overlap maps carry each triple intersection into the required third overlap. The inverse and cocycle identities are equalities of finitely many coordinate functions on these principal patches. All the chosen denominators and coefficients involve finitely many elements of A. Choose a finite-type Z-subalgebra B⊂A containing them. [F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 Define D_i to be the image of B[x_i] in C_i, and E_ij the image of B[x_i,x_j] in C_ij. These are finite-type algebras over the Noetherian ring B; their FULL defining kernels are finitely generated by Hilbert basis. Thus no assertion is made that C_i itself is finitely presented over A. On each chosen f_ij,a the map D_i[1/f]→E_ij[1/f] is an isomorphism. Surjectivity follows from the stored rational expressions for x_j. For injectivity both map into C_ij[1/f]=C_i[1/f], and localization preserves the injective map D_i⊂C_i. The recorded unit identities cover Spec E_ij by these f-opens, so Spec E_ij is exactly the specified open in Spec D_i. The reverse expressions give the same open in Spec D_j. [F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 The triple unit identities from step 3.1 imply that these overlap isomorphisms take model triple overlaps to one another. Their coordinate functions satisfy the inverse and cocycle identities: on each chosen principal chart they are equal in C_i localized at its chart functions, and D_i localized there embeds in that ring. Hence the identities hold already in the D_i model. Glue the Spec D_i to a finite-type B-scheme Y_B. Its overlaps are the affine Spec E_ij, and D_i⊗_B D_j→E_ij is surjective by the definition of E_ij. The affine diagonal criterion therefore makes Y_B separated. Since B is Noetherian, Y_B is finitely presented over B. [F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 Put Y=Y_B×_B A. Each A⊗_B D_i→C_i is surjective because x_i generate C_i over A. Its inverse-image overlap is exactly the original U_i∩U_j, defined by the chosen f-functions. These closed affine maps consequently glue to a closed immersion X→Y. This proves a separated finite-presentation ambient scheme with a Noetherian coefficient model, without assuming absolute Noetherian approximation of arbitrary qcqs schemes. [F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 Let Q_B be any Noetherian B-scheme and Q=Q_B×_B A, with projection p. This projection is affine, so p_*E is quasi-coherent for every quasi-coherent O_Q-module E: on each base affine it is the same module with scalars restricted, and its restriction maps are localization. We prove the required coherent-submodule fact directly on the Noetherian scheme Q_B. For a finite list of sections on an affine open W=Spec R, take its finite R-submodule. To extend it across an affine chart V, cover W∩V by finitely many principal opens D(f_i), express its finite generators as fractions in the module on V, and multiply each numerator by sufficiently high powers of f_i so that, by exact localization, it lies in the prescribed submodule on every overlap. These finitely many adjusted numerators generate a coherent submodule on V whose restriction is exactly the prescribed one. Noetherianity gives finite relation kernels, and finite induction over an affine cover glues these coherent submodules. Thus every finite list of local sections of p_*E lies in a coherent O_(Q_B)-submodule N. The image of p^*N→E is a finite-type quasi-coherent O_Q-submodule. These images exhaust E, since every section on a base-changed affine belongs to some N on that base affine. Sums give a directed family. When E is an ideal sheaf I⊂O_Q, take its O_Q-span; the image is already an ideal because the evaluation map is O_Q-linear. Thus I is a union of finite-type quasi-coherent subideals. This finite extension argument is applied only on the NOETHERIAN Q_B, not on Q itself. [F1, F2, F8, step 6.1, given, construct, algebra]

8.1 Apply step 7.1 to the ideal I of X in Y. Let I_lambda range over all its finite-type quasi-coherent subideals, ordered by inclusion, and put X_lambda=V(I_lambda)⊂Y. Each closed immersion is finitely presented: on an affine chart the quotient ring is given by finitely many ideal generators. Hence X_lambda is finitely presented over A. Sums make the system directed, transitions are closed immersions, and its affine quotient-ring colimit is O_X because union I_lambda=I. Thus X=lim X_lambda with its full scheme structure. Properness of these stages has not yet been assumed. [F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Apply the cited Chow lemma [F3] to Y_B over Spec B. It supplies a proper surjection π_B:Y'_B→Y_B and an immersion Y'_B→Pn_B. Choose a quasi-compact open W_B⊂Pn_B through which this is a closed immersion; this is possible by a finite affine subcover of its quasi-compact image. Base change to A, writing π:Y'→Y and W⊂Pn_A. Put X'=Y'×_Y X and X'_lambda=Y'×_Y X_lambda. The morphism X'→A is proper, since π restricted to X' is proper and X→A is proper. Its immersion into the separated Pn_A is therefore a closed immersion, by proper-source-to-separated-target and closed-image immersion. All X'_lambda are closed subschemes of W, with limit X'. [F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 Let K_B be a coherent ideal defining the closed complement of W_B in Pn_B; it exists because Pn_B is Noetherian. Write K for its extension to Pn_A and J_infty for the ideal of the CLOSED subscheme X' in Pn_A. Their zero loci are disjoint, so J_infty+K=O. By step 7.1 applied over Pn_B, J_infty is a union of finite-type quasi-coherent subideals. On a finite affine cover of Pn_A choose the finitely many coefficients of a unit identity for J_infty+K. One such subideal J contains those finitely many sections, so J+K=O globally. Consequently Z=V(J) is a finitely presented closed subscheme of Pn_A whose underlying space is contained in W; it is a subscheme of that open W. [F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 The image of J in O_Y' is a finite-type ideal contained in the ideal of X'. That last ideal is the union of I_lambda O_Y', by step 8.1 and right exactness of extension of ideals. Finitely many local generators on a finite affine cover of Y' therefore belong to one common I_lambda O_Y'. For this lambda, and all larger ones, X'_lambda⊂Z. But X'_lambda is already closed in W, and Z⊂W is closed in Pn_A. Hence X'_lambda is a closed subscheme of Z and therefore of Pn_A. It is proper over A. [F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra]

12.1 The base-changed π_lambda:X'_lambda→X_lambda is proper and surjective, and remains surjective after every base change. Properness of X_lambda→A follows directly. It is separated and finite type, being closed in Y. For a closed subset C of any base change (X_lambda)_T, its inverse image in (X'_lambda)_T is closed and has closed image in T because X'_lambda is proper. Surjectivity gives that image exactly equal to the image of C. Thus X_lambda is universally closed and hence proper. Discarding the earlier stages gives the inverse system asserted in the Statement. No unproved eventual-affineness or general proper-limit theorem was used. [F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
