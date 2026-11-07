---
id: lem-ordinary-henselization-completion-and-separable-fibres
kind: lemma
title: Ordinary henselization and completion fibres
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- lem-pointed-henselian-integer-models-and-finite-projective-line-descent
- def-axiom-of-choice
- thm-flatness-of-noetherian-completion
- thm-noetherianity-of-adic-completion
- cor-completion-commutes-with-finite-quotients-and-submodules
- thm-etale-formally-etale-finite-presentation
- cor-complete-local-rings-are-henselian
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-jacobian-criterion-smooth-morphism
- thm-equivalent-elementary-forms-of-hensels-property
- lem-finite-type-field-zero-differentials-finite-separable
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07QR
    url: https://stacks.math.columbia.edu/tag/07QR
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let (R,m) be Noetherian local, let H be its ordinary local henselization, and write Rhat and Hhat for their maximal-ideal completions. Then H is Noetherian, H→Rhat is faithfully flat, Hhat=Rhat, and for every p∈Spec R the fibre H⊗_R κ(p) is a finite product of separable algebraic field extensions of κ(p). Regularity in the Noetherian sense of R→Rhat transfers to H→Hhat; finite degrees for those residue fields are not assumed.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-pointed-henselian-integer-models-and-finite-projective-line-descent]].

[F2] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F3] The following existing interface is used at its literal public scope: [[thm-flatness-of-noetherian-completion]].

[F4] The following existing interface is used at its literal public scope: [[thm-noetherianity-of-adic-completion]].

[F5] The following existing interface is used at its literal public scope: [[cor-completion-commutes-with-finite-quotients-and-submodules]].

[F6] The following existing interface is used at its literal public scope: [[thm-etale-formally-etale-finite-presentation]].

[F7] The following existing interface is used at its literal public scope: [[cor-complete-local-rings-are-henselian]].

[F8] The following existing interface is used at its literal public scope: [[thm-primitive-element-theorem-for-finite-separable-extensions]].

[F9] The Jacobian criterion gives the finite étale factor charts used in the henselian construction. [[thm-jacobian-criterion-smooth-morphism]]

[F10] Henselian local rings have the simple-root and finite-algebra idempotent properties. [[thm-equivalent-elementary-forms-of-hensels-property]]

[F11] A finitely generated field extension with zero differentials is finite separable under AC. [[lem-finite-type-field-zero-differentials-finite-separable]]

[F12] The general Noetherian geometric-regularity and regular-map convention tests finite residue-field extensions. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Construct H as the filtered colimit of affine finitely presented étale R-algebras with closed fibre identified with k=R/m. Tensor products give common successors; parallel maps agree on a principal open containing the closed fibre. Monic coprime factorizations lift through their finite resultant-invertible étale charts, so the colimit is henselian; the simple-root property [F10] and formal étaleness [F6] give its unique local map to every henselian local R-algebra. Thus this is the ordinary henselization. We may localize each affine neighbourhood at its specified closed point: its elements outside that point map to units in the local colimit, so the colimit is unchanged. Write these local stages B_i. Each is a localization of a finitely presented étale R-algebra and is Noetherian local. Its maximal ideal is mB_i and its residue field is k, since the original whole closed fibre was the specified single k-point. The system is filtered, and H=colim B_i has maximal ideal mH and residue k. The maps B_i→H and H→any henselian target are local. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, construct, algebra]

2.1 For every a≥1 there is a unique R-algebra map B_i→R/m^a lifting its residue map to k: formal étaleness [F6] supplies the lift across the nilpotent kernel of R/m^a→k. It factors through B_i/m^aB_i. The canonical R/m^a→B_i/m^aB_i and this map are inverse. One composition is the identity because it is an R-algebra map on R/m^a. For the other, the canonical map B_i→B_i/m^aB_i and the composed map both lift the same residue map across a nilpotent ideal, so uniqueness makes them equal. Thus B_i/m^aB_i≅R/m^a, canonically and compatibly in i and a. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, given, construct, algebra]

3.1 Taking inverse limits gives the mB_i-adic completion Bhat_i≅Rhat as R-algebras, compatibly with the actual stage maps. Each B_i is Noetherian, so [F3] makes B_i→Bhat_i=Rhat flat. The ring Rhat is complete separated local with maximal ideal mRhat and residue k; its localness follows also from its finite quotients and the convergent inverse of 1+x for x∈mRhat. It is henselian by [F7], so the henselian universal property from step 1.1 gives the natural local map H→Rhat. Its restriction to B_i agrees with the map just constructed, because both have the same reductions and are the unique henselian sections through that residue point. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1, given, construct, algebra]

4.1 Rhat is flat over H. Here is the finite-relation check, which does not assume H Noetherian. For a finite relation Σ a_j t_j=0 in Rhat with a_j∈H and t_j∈Rhat, choose one stage B_i containing representatives of the finitely many a_j. Flatness over B_i from step 3.1 expresses the vector (t_j) as a finite linear combination Σ_l b_(j,l) u_l of syzygy columns over B_i, with Σ_j a_j b_(j,l)=0 there. The same expressions are syzygies over H. This is the equational flatness criterion. To verify that criterion directly, for any finitely generated ideal I=(a_j) the displayed syzygy description makes I⊗_H Rhat→Rhat injective; applying it to each finite tensor relation gives the injection criterion for flatness. Thus no infinite relation or descent of arbitrary sheaves is used. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 3.1, given, construct, algebra]

5.1 The local flat map H→Rhat is faithfully flat. A proper ideal I of local H lies in mH, so IRhat lies in mRhat and Rhat/IRhat is nonzero. Given a nonzero H-module, choose a nonzero cyclic submodule H/I; tensor flatness preserves its injection and that cyclic tensor is nonzero. Therefore tensoring with Rhat detects zero modules. The same argument shows R→H is faithfully flat: H is a filtered colimit of flat étale-local R-algebras, hence flat, and is a nonzero local R-algebra with mH proper. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 4.1, given, construct, algebra]

6.1 Noetherianity now descends from Rhat to H. Let J be any ideal of H. Since Rhat is Noetherian by [F4], JRhat is generated by finitely many elements. Each of those is a finite sum of elements of J times elements of Rhat. Collect the finitely many appearing J-elements and let J0 be their H-ideal. Then J0Rhat=JRhat. Flatness identifies (J/J0)⊗_H Rhat with JRhat/J0Rhat=0, and faithful flatness gives J=J0. Every ideal of H is finitely generated, proving H Noetherian. This proof did not apply the Noetherian completion theorem to H before establishing its Noetherianity. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 5.1, given, construct, algebra]

7.1 Taking the filtered colimit in the canonical isomorphisms of step 2.1 gives H/m^aH≅R/m^a for every a: quotient by a finitely generated ideal commutes with a filtered ring colimit, and m is finitely generated in Noetherian R. Since m_H=mH, taking their inverse limits gives Hhat≅Rhat. The map H→Rhat of step 3.1 is exactly this completion map, because all its finite quotient maps are the canonical ones. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 6.1, given, construct, algebra]

8.1 Fix p∈Spec(R) and put K=κ(p). The fibre B=H⊗_R K is Noetherian, being a localization of H/pH, and is nonzero by faithful flatness R→H. It is the filtered colimit of the B_i⊗_R K. Each latter ring is a localization of an affine finitely presented étale K-algebra C. Here is the exact classification needed. Such C is Noetherian and all its local rings at primes are fields by the zero-dimensional regular fibre definition. For any x∈C the finite module (x)/(x²) is zero after every prime localization, hence zero, so x=x²y for some y and C is absolutely flat. A Noetherian absolutely flat ring splits into finitely many fields: a finitely generated maximal ideal is generated by an idempotent (for generators x_j choose x_j=x_j²y_j, put e_j=x_jy_j, and use e=1−∏(1−e_j)); split off its complementary field and repeat, terminating by the ascending-chain condition on sums of the isolated orthogonal idempotents. Each resulting field is a finite separable K-extension by the finite-type zero-differentials criterion [F11]. Localization only discards some of these factors. Thus B_i⊗_R K is a finite product of finite separable K-fields, with the zero ring allowed at an individual stage. In particular every stage is absolutely flat and each of its elements is annihilated by a monic separable polynomial over K. For a product, use the product of the distinct irreducible factors of the finitely many component minimal polynomials. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 7.1, given, construct, algebra]

9.1 The colimit B is absolutely flat: the equation x²y=x has a solution at a stage for every element x coming from that stage. It is also reduced, either from that equation or because a nilpotence equation in a filtered colimit holds at a finite stage. Any prime quotient of an absolutely flat ring is a field, since a nonzero element x in that quotient has x y=1 from x²y=x. Thus every prime is maximal. We give the finite decomposition without assuming that the field extensions are finite-degree. A Noetherian ideal generated by x_1,…,x_s in an absolutely flat ring is generated by an idempotent: write (x_i)=(e_i) with e_i=x_i y_i idempotent, and use e=1−∏(1−e_i). [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 8.1, given, construct, algebra]

10.1 Choose a maximal ideal of a nonzero remaining factor of B, using AC. It is finitely generated and hence equals eB for an idempotent as in step 9.1. This splits off the field factor (1−e)B=B/eB. Repeat on eB if nonzero. Infinitely many repetitions would give a strictly increasing chain of ideals generated by the successive sums of isolated nonzero orthogonal idempotents, contradicting Noetherianity. Therefore the process terminates and B=∏_(i=1)^t K_i with t finite and nonzero. Each element of K_i is the image of an element from a stage in step 8.1 and thus satisfies a monic separable polynomial over K. Consequently K_i/K is separable algebraic, with no finite-degree claim. Standard localization/prime correspondence identifies K_i with κ(q_i) for the finitely many primes q_i of H above p. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 9.1, given, construct, algebra]

11.1 Suppose now the additional regular-completion premise of the Statement holds: Rhat⊗_R κ(p) is geometrically regular over κ(p) for every p. Using step 7.1 and step 10.1 gives the actual product decomposition Rhat⊗_R K = Rhat⊗_H (H⊗_R K) = ∏_i (Hhat⊗_H K_i). Write C_i=Hhat⊗_H K_i. These rings are Noetherian, since they are localizations of quotients of the Noetherian Hhat=Rhat. Each C_i is geometrically regular as a K-algebra: tensoring the finite product decomposition with any finite extension of K preserves products, and regularity of the assumed left side then passes to every factor. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 10.1, given, construct, algebra]

12.1 Let L/K_i be finite, with K_i/K separable algebraic. Choose a K_i-basis of L beginning with 1 and its finite multiplication table. Its coefficients and all finitely many algebra identities descend to a finite intermediate extension K_0/K inside K_i. They define a finite-dimensional K_0-algebra L_0 with K_i⊗_(K_0)L_0≅L. Faithful field extension makes L_0 a field. Hence L_0/K is finite. [F1, F2, F3, F4, F5, F6, F7, F8, F12, step 11.1, given, construct, algebra]

13.1 Since K_0/K is finite separable, the multiplication map K_0⊗_K L_0→L_0 exhibits L_0 as a direct product factor: choose a primitive separable generator and split off its linear factor. Therefore `C_i⊗_(K_i)L = C_i⊗_(K_0)L_0` is a direct factor of `C_i⊗_K L_0`. The latter is regular by the finite-extension assumption in step 11.1. Thus every finite L/K_i gives a regular scalar extension, which is exactly [F12], even when K_i/K has infinite degree. [F1, F2, F3, F4, F5, F6, F7, F8, F12, step 12.1, given, construct, algebra]

14.1 The map H→Hhat is flat by step 4.1 and its fibres at q_i are exactly the C_i. Steps 11.1–13.1 show all those fibres geometrically regular, because every q of H lies over a given p of R and occurs in that finite product. Thus the additional regular-completion implication is proved. It transfers a genuinely supplied regular-completion theorem; it does not prove the still-missing RF2 premise for finite-type Z models. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 13.1, given, construct, algebra]

15.1 All assertions of the Statement follow. The proof uses only ordinary local henselization and ordinary Noetherian completion, keeps separable algebraic residue extensions at their true possibly infinite degrees, and preserves the distinction between proving Noetherianity/flatness and proving geometric regularity of formal fibres. The regularity assumption is spent only in steps 11.1–14.1. No strict-henselization completion branch or global smoothing theorem is asserted. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
