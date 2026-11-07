---
id: lem-arbitrary-henselian-proper-fp-sections-and-finite-etale-restriction
kind: lemma
title: Henselian restriction for proper finitely presented schemes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-pointed-henselian-integer-models-and-finite-projective-line-descent
- lem-finite-etale-effectivity-over-henselian-integer-models
- lem-noetherian-proper-henselian-all-etale-set-sections
- def-axiom-of-choice
- lem-filtered-colimit-fp-scheme-stage
- lem-filtered-colimit-proper-fp-stage
- thm-etale-locally-standard-etale
- thm-etale-morphisms-open-and-quasi-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0A0P
    url: https://stacks.math.columbia.edu/tag/0A0P
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 8
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For every henselian local A and proper FINITELY PRESENTED X/A, FEt equivalence, all etale SET H0 and finite-constant H1 invariance hold. Only finite representative coequalizers descend, not a whole arbitrary sheaf.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-pointed-henselian-integer-models-and-finite-projective-line-descent]].

[F2] The following existing interface is used at its literal public scope: [[lem-finite-etale-effectivity-over-henselian-integer-models]].

[F3] The following existing interface is used at its literal public scope: [[lem-noetherian-proper-henselian-all-etale-set-sections]].

[F4] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F5] The following existing interface is used at its literal public scope: [[lem-filtered-colimit-fp-scheme-stage]].

[F6] The following existing interface is used at its literal public scope: [[lem-filtered-colimit-proper-fp-stage]].

[F7] The following existing interface is used at its literal public scope: [[thm-etale-locally-standard-etale]].

[F8] Étale morphisms are open under AC. [[thm-etale-morphisms-open-and-quasi-finite]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 First descend X to a finite-presentation scheme X_i over some finite-type integer subalgebra B_i⊂A by [F5]. Apply the proper-fp-stage theorem to this fixed model and the directed family of all finite-type integer subalgebras containing B_i, whose colimit is A. It supplies a larger B_j over which the model is proper. Hence after localizing at m∩B_j and passing to H_j, X has a proper finite-presentation model over H_j. Increase j as often as required for finitely many extra objects and maps; properness persists under base change. This handles nonprojective X too, without a new Nagata theorem. [F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 Finitely many finite-presentation étale X-objects and finitely many maps between them descend to a common H_j. Concretely use their finite standard-étale affine chart descriptions, invertible Jacobian/unit equations and finite gluing maps; every coefficient and relation equality descends along the filtered identity in [F1]. Quasi-compact open subobjects descend as well: choose finite principal covers and their finite equations in those affine charts. For a finite family of these objects over a fixed closed-fibre model, whether they cover can be tested after the field extension k_j→k. Such field extension is faithfully flat, and surjectivity of the union of their étale images descends: a missing point has a nonempty geometric fibre after that extension, contradicting the asserted cover. Thus a cover of the whole closed fibre after k-extension is already a cover before it. This tests only specified residue-field base changes, not arbitrary indexed coverings. [F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 Injectivity needs no Noetherian hypothesis. If two sections of F have equal closed-fibre restriction, their equality locus is open in X: a germ equality is witnessed on an étale neighbourhood, whose image is open by [F8], and these images form precisely that locus. Its closed complement has no closed-fibre point. A nonempty closed subset of proper X has nonempty closed image in Spec A, containing the closed point because A is local. Thus this complement is empty and the sections are equal. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 Let s0∈Γ(X_k,F_k). By the definition of inverse-image sheaf, locally on X_k it is represented by restrictions of sections f_i∈F(U_i), for étale finite-presentation U_i→X. After lifting the representing étale charts, shrink each U_i so its closed fibre is the open image of the corresponding chart over X_k; that chart is then surjective onto U_i,k, so the sheaf axiom gives equality with s0 there. Use quasi-compactness of X_k to retain finitely many such U_i whose closed fibres cover X_k. Here the required lift of a closed-fibre étale neighbourhood is the explicit standard-étale construction: over an affine U, lift the finitely many coefficients of its monic polynomial from O(U)/m to O(U), impose that polynomial and invert its derivative and the specified denominators. Its closed fibre is the prescribed standard chart. Given an additional map of that closed chart to an étale U-object, perform this construction over U itself. Thus the local representative really is a section on an étale object over X. Only those finitely many local representatives are chosen. The sheaf F itself is not asserted to descend to any H_j. [F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 For every ordered pair i,j, including i=j, put W_ij=U_i×_X U_j. It is quasi-compact and quasi-separated of finite presentation. The equality locus of the two pulled-back sections f_i,f_j is open in W_ij and contains its entire closed fibre. That fibre is quasi-compact. Choose finitely many distinguished affine opens inside the equality locus covering W_ij,k; their union V_ij is a quasi-compact open subobject of W_ij, still étale and of finite presentation over X. The sections f_i,f_j agree on all of V_ij. These choices are finite; there is no claim that their equality locus as a whole is quasi-compact. [F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 In étale SET sheaves on X define G to be the coequalizer ⊔_(i,j) h_(V_ij) ⇉ ⊔_i h_(U_i) → G. The maps are the two projections. The equalities in step 5.1 give an actual map G→F. The canonical sections of G on U_i agree after restriction to V_ij. After base change to k, the V_ij,k cover W_ij,k, so those canonical sections agree on the full overlaps. The U_i,k cover X_k; hence they glue to a section g0 of G_k mapping to s0. Neither the coequalizer relation before sheafification nor its transitive closure was presumed to be an effective scheme equivalence relation: G is the sheaf coequalizer, which exists as the sheafification of the set presheaf quotient. [F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 Descend the finitely many X,U_i,V_ij and their projection maps to a common H_j as in steps 1.1–2.1, retaining a proper X_j. Define G_j by the SAME finite sheaf coequalizer there. Its pullback is G: inverse image is left adjoint and preserves colimits, and takes each represented étale object to its base change. The two finite closed-fibre covering assertions of steps 4.1–5.1 descend along the faithfully flat field extension k_j→k by step 2.1. Thus the canonical sections on U_i,j,0 glue to a section g_j,0 of (G_j)_0 by exactly the finite overlap argument in step 6.1. This explicitly descends a section through a finite quotient; no unsupported Ab→SET continuity theorem or whole-F descent is used. [F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 Apply [F3] to the arbitrary SET sheaf G_j on the proper H_j-scheme X_j. Its section g_j,0 lifts to a section of G_j. Pull it back to A and then apply G→F. The resulting section of F restricts to s0. Together with step 3.1 this proves the all-set H0 assertion at the stated proper-finite-presentation scope. [F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Let Z0→X_k be finite étale. On a finite affine cover of the proper model of step 1.1, encode its finite projective algebra by idempotent matrices, multiplication/unit, perfect trace and inverse overlap maps. All entries involve finitely many k-coefficients. Since k=colim k_j, they and their finite relation witnesses descend to one k_j. The same finite perfect-trace argument as in the bounded model proof certifies finite étaleness, so this gives an actual finite étale cover Z0,j→(X_j)_0, not just a generic or abstract isomorphism class. By [F2] it lifts to Z_j→X_j. Pull back along H_j→A to get a finite étale cover of X restricting to Z0. Finite group actions, their identities and the torsor inverse map may all be included in the same finite equations; the bounded-model proof then lifts a torsor as a torsor. [F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 For full faithfulness apply the already proved all-set H0 assertion to the proper finitely presented A-scheme Z1 and its represented étale sheaf Z1×_X Z2. This gives exactly Hom_X(Z1,Z2)≅Hom_(X_k)(Z1,k,Z2,k). Therefore steps 9.1 and 10.1 prove the restriction equivalence of finite étale categories. This includes covers of nonconstant rank and nonsurjective finite étale morphisms; a cover is not assumed to be a torsor under its permutation group. [F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 For a finite constant M the torsor construction in step 9.1 gives surjectivity on H1. If two M-torsors have isomorphic restrictions, full faithfulness uniquely lifts that isomorphism. Its equivariance follows by full faithfulness applied to each of the finitely many action maps. Hence they represent the same H1 class, proving injectivity as well. The standard abelian H1 addition agrees with contracted product of torsors under the actual correspondence, so the restriction bijection is an isomorphism of groups. No condition that |M| be invertible is needed for a constant étale group. [F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. This research carrier has not been installed or recorded.
