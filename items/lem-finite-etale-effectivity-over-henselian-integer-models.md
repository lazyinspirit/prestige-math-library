---
id: lem-finite-etale-effectivity-over-henselian-integer-models
kind: lemma
title: Finite-etale effectivity over henselian integer models
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-complete-noetherian-proper-formal-finite-etale-effectivity
- lem-henselian-integer-model-completions-have-geometrically-regular-fibres
- thm-regular-noetherian-maps-have-finite-smooth-factorizations
- lem-noetherian-proper-henselian-all-etale-set-sections
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- thm-smooth-local-standard-form
- thm-etale-locally-standard-etale
- lem-ordinary-henselization-completion-and-separable-fibres
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0BQC
    url: https://stacks.math.columbia.edu/tag/0BQC
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 7
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For an ordinary henselization H of a local finite-type Z-model and every proper H-scheme X, restriction FEt(X)→FEt(X_0) is an equivalence, with finite actions/torsor data lifted by actual finite equations.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-complete-noetherian-proper-formal-finite-etale-effectivity]].

[F2] The following existing interface is used at its literal public scope: [[lem-henselian-integer-model-completions-have-geometrically-regular-fibres]].

[F3] The following existing interface is used at its literal public scope: [[thm-regular-noetherian-maps-have-finite-smooth-factorizations]].

[F4] The following existing interface is used at its literal public scope: [[lem-noetherian-proper-henselian-all-etale-set-sections]].

[F5] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F6] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F7] The following existing interface is used at its literal public scope: [[thm-smooth-local-standard-form]].

[F8] The following existing interface is used at its literal public scope: [[thm-etale-locally-standard-etale]].

[F9] Ordinary henselization and its completion have the same residue field, and are Noetherian at the stated AC scope. [[lem-ordinary-henselization-completion-and-separable-fibres]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Let `(R,m,k)` be henselian local and let `B` be a smooth finite-presentation `R`-algebra with specified `R`-map `b_0:B -> k`. The literal AC-qualified published `thm-smooth-local-standard-form` gives, near this specified point, an etale map to affine `d`-space over `R`. Choose lifts in `R` of its finitely many coordinate values in `k`. Base change the etale map along that section of affine space. We obtain an etale `R`-scheme `U` with a specified residue-degree-one point over `m`. All base neighbourhoods of the local closed point are the whole local spectrum. [F1, F2, F3, F4, F5, F6, F7, F8, given, construct, algebra]

2.1 The literal AC-qualified published `thm-etale-locally-standard-etale` gives a standard chart containing this point, `U_1 = Spec( R[T]/P(T) )_g`, where `P` is monic and its derivative is invertible. The residue point is a root `a_0 in k` with `P'(a_0)!=0` and `g(a_0)!=0`. Factor `P mod m=(T-a_0)H_0`; the two monic factors are coprime. The defining henselian factor-lifting property gives a monic linear factor `T-a` of `P` over `R`, with `a mod m=a_0`. The value `g(a)` is a unit because its residue is nonzero. Evaluation at `a` therefore defines an `R`-section of this chart, hence of `U`, and gives an `R`-map `B -> R` inducing `b_0`. This proves the smooth-point lifting used below from the actual local hypotheses. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 By [F9], H and Hhat are Noetherian and Hhat has the same residue field k. Given a finite étale cover Z0→X_k, [F1] constructs a finite étale Zhat→X_Hhat restricting to Z0. This applies to every proper X because the complete-case input was proved by the support/conductor induction, not merely in the smooth/projective case. Finite group actions and their identities can be lifted along this equivalence: full faithfulness gives the unique lifts of their finitely many maps, and reflects all group identities. A torsor isomorphism on the closed fibre also lifts between the corresponding finite étale covers by full faithfulness. Thus a finite M-torsor Z0 has a finite étale lift with action and the canonical torsor isomorphism over X_Hhat. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 2.1, given, construct, algebra]

4.1 Cover X by finitely many affine opens U_i=Spec C_i. Each C_i is a finite-presentation H-algebra, since H is Noetherian and X is finite type. The intersections U_i∩U_j are quasi-compact: X is separated, and in fact their maps into U_i×_H U_j are closed immersions by the diagonal. Choose a finite principal refinement on each intersection, and finite principal refinements on the finitely many triple intersections needed for gluing. All rings of these charts and refinements are finite-presentation H-algebras. A finite list of principal covering identities records the refinements. These choices use AC only at the already explicit scope. [F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, construct, algebra]

5.1 On U_i,Hhat the algebra Bhat_i of Zhat is finite projective. Choose a finite projective presentation Bhat_i=e_i(C_i⊗_H Hhat)^r_i by an idempotent matrix e_i. Its unit and multiplication are finite matrices landing in the image of e_i. The identities e_i²=e_i, unit, associativity and commutativity are finitely many matrix equations over C_i⊗Hhat. Each matrix entry is a finite sum of tensors c⊗a, because this is the algebraic tensor product, not a completed tensor product. Thus only finitely many coefficients a∈Hhat are involved in all these data. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra]

6.1 Also record finite equations proving perfectness of the trace pairing. The trace of multiplication on the image of an idempotent is the ordinary matrix trace of its extension by zero on the complementary summand; hence its entries are polynomial expressions in the multiplication and idempotent entries. The pairing Bhat_i→Bhat_i^dual is represented by a finite matrix between the two image summands. Its inverse is another finite matrix, with the two inverse identities expressed relative to e_i and its transpose. All these entries again involve finitely many Hhat coefficients. We are recording an inverse already present on the finite étale algebra, not choosing bases on a potentially nonflat deformation. [F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, given, construct, algebra]

7.1 On each chosen overlap chart record the finite matrices for the algebra gluing isomorphism and its inverse. Include their unit/multiplication compatibility, both inverse identities, and the cocycle equalities on the chosen triple refinements. If a finite group acts, record each action matrix and all group identities. For an M-torsor also record the canonical map between Bhat⊗Bhat and the product of |M| copies of Bhat, and its inverse, on the same affine covers. These are finite projective modules and finite matrices; the tensor and finite product projectors are explicit tensor/block idempotents. Thus their isomorphism is expressed by finitely many polynomial equations too. [F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, given, construct, algebra]

8.1 Every equation used above is an equality in a specified finitely presented H-algebra C_i⊗Hhat or a specified overlap localization. Choose polynomial representatives of the finite entries. An equality in that quotient means its difference is a finite sum of the finitely many defining relations with polynomial coefficients. Include the finitely many coefficients of those particular witnesses as new variables. For a principal localization, represent the finitely many fractions by powers of the fixed denominator and clear them with a sufficiently high power; include its inverse variable if needed. This explicitly converts each true quotient/localization equality into finitely many equations over H. It does not require C_i to be H-flat or a coefficientwise injection into its base change. [F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, given, construct, algebra]

9.1 Let T be the finite-presentation H-algebra on all these coefficient and witness variables, modulo those finite equations. The actual formal data give a specified map T→Hhat. Over X_T the universal matrices produce a finite projective commutative algebra B_i on each U_i,T. Perfect trace makes it finite étale: after every geometric field base change, an element of the nilradical pairs to zero with every element because each multiplication operator by its products is nilpotent and has trace zero. Nondegeneracy therefore kills the nilradical. A finite-dimensional reduced algebra over an algebraically closed field is a product of copies of that field, so all geometric fibres are regular of dimension zero. The projective presentation gives flatness and finite presentation. These are exactly the étale conditions. The encoded overlap inverses/cocycles glue these finite algebras to a finite étale cover of X_T. All encoded finite actions and inverse maps survive every specialization of T. [F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, given, construct, algebra]

10.1 Apply [F3] to the actual T→Hhat map from step 9.1, using the regular completion [F2] in the Noetherian sense. Obtain T→S→Hhat with S smooth and finitely presented over H. Composing S→Hhat→k gives a specified rational closed point. By steps 1.1–2.1 it lifts to S→H with the same reduction to k. Thus T→S→H gives an H-specialization of every coefficient and witness, whose residue agrees with the original formal coefficient data. This is where smoothing is used. The parameter algebra T itself was never asserted smooth, and no flatness of X/H was presumed. [F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, given, construct, algebra]

11.1 Specialize the finite étale algebra of step 9.1 along T→H. This gives Z→X with its original closed-fibre identification Z_k≅Z0, since all original coefficient residues agree. If group action and torsor inverse matrices were included, they specialize as well. The torsor map is consequently an isomorphism globally. Finally Z is faithfully flat over X in the torsor case: its finite-projective rank is locally constant, and on X_k it is the positive integer |M|. The bad-rank locus is closed (indeed clopen). Any nonempty closed subset of a proper scheme over a local base meets its closed fibre: its proper image is nonempty closed, so contains the closed point. Hence the bad-rank locus is empty. The finite étale cover is therefore a genuine M-torsor, not a possibly empty pseudo-torsor satisfying only the formal action identity. [F1, F2, F3, F4, F5, F6, F7, F8, step 10.1, given, construct, algebra]

12.1 This proves essential surjectivity for FEt(X). For full faithfulness, given finite étale Z1,Z2 over X, use [F4] on the proper H-scheme Z1 and the étale represented sheaf Z1×_X Z2 over it. Its global sections are exactly X-morphisms Z1→Z2, and its closed-fibre sections are exactly X_k-morphisms between their restrictions. The bijection in [F4] gives the required Hom bijection; compatibility with composition is restriction. Thus FEt(X)→FEt(X_k) is an equivalence, with its actual natural restriction functor. No graph representability beyond the already given finite étale fibre product is needed. [F1, F2, F3, F4, F5, F6, F7, F8, step 11.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. This research carrier has not been installed or recorded.
