---
id: lem-projective-cohomological-modifications-transfer-formal-etale-algebras
kind: lemma
title: Cohomological modification and completed conductor comparison
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-projective-formal-finite-etale-algebras-algebraize
- lem-projective-degree-zero-formal-functions-over-noetherian-bases
- lem-finite-projective-modules-and-etale-algebras-patch-on-milnor-squares
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-projective-coherent-cohomology-finite-and-vanishing
- thm-flatness-of-noetherian-completion
- cor-completion-commutes-with-finite-quotients-and-submodules
- lem-chow-lemma-proper-noetherian
- thm-krull-intersection-theorem
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 09ZT
    url: https://stacks.math.columbia.edu/tag/09ZT
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let (A,m) be a complete Noetherian local ring and X proper over A. If q:Y→X is projective, Y is projective over A, and O_X→q_*O_Y is an isomorphism, then finite étale algebras on X are equivalent to compatible systems on X_n=X×_A A/m^(n+1). If X is integral, a projective birational cover yields a finite birational modification X′ with such a projective Y→X′. In the associated conductor square, finite étale algebras and their overlap maps patch, and compatible algebraizations of a formal system have its prescribed reductions after exact completion.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-projective-formal-finite-etale-algebras-algebraize]].

[F2] The following existing interface is used at its literal public scope: [[lem-projective-degree-zero-formal-functions-over-noetherian-bases]].

[F3] The following existing interface is used at its literal public scope: [[lem-finite-projective-modules-and-etale-algebras-patch-on-milnor-squares]].

[F4] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F5] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F6] The following existing interface is used at its literal public scope: [[lem-projective-coherent-cohomology-finite-and-vanishing]].

[F7] The following existing interface is used at its literal public scope: [[thm-flatness-of-noetherian-completion]].

[F8] The following existing interface is used at its literal public scope: [[cor-completion-commutes-with-finite-quotients-and-submodules]].

[F9] The following existing interface is used at its literal public scope: [[lem-chow-lemma-proper-noetherian]].

[F10] The following existing interface is used at its literal public scope: [[thm-krull-intersection-theorem]].

## Proof

**Proof technique:** projective formal functions, compatible idempotents and conductor patching.

1.1 Fix a Noetherian ring R and finitely generated ideal I. Given a compatible system P_n of finite projective R/I^(n+1)-modules, choose finitely many generators of P_0 and lift the finite family compatibly using dependent choice [F5]. Each resulting map from a fixed free module is surjective by nilpotent Nakayama. Choose compatible splittings inductively: lift the preceding splitting by projectivity, and correct the composite with the surjection by its finite geometric-series inverse. Dependent choice supplies the compatible sequence of splittings. Their matrices define one idempotent over the completion Rhat, whose image P is finite projective and has reductions P_n. For any compatible system V_n, applying the same idempotent gives `lim(P_n⊗V_n)=P⊗_(Rhat) lim V_n`. Exact completion and `Mhat/I^n Mhat=M/I^n M` for finite R-modules are supplied by [F8]. [F4, F5, F8, given, construct, algebra]

2.1 Given finite étale algebras B_n on X_n, pull them back to Y_n and algebraize the resulting system by projective effectivity [F1], obtaining a finite étale algebra D on Y. Put E=q_*D. On an affine U=Spec R⊂X, q^(-1)U is projective over R and E(U)=H^0(q^(-1)U,D) is a finite R-module by [F6]. The projective degree-zero formal-functions result [F2] identifies its I-adic completion, I=mR, with the limit of `H^0(q^(-1)U_n,q_n^*B_n)`. The projection formula for finite projective modules is the application of a finite idempotent to sections, so this equals `lim[P_n⊗_(R/I^(n+1)) H^0(q^(-1)U_n,O)]`. By [F2] applied to O and q_*O_Y=O_X, the second inverse limit is Rhat. Step 1.1 identifies the whole limit with `lim P_n` naturally as an algebra, not merely as a module. [F1, F2, F4, F6, F8, step 1.1, given, construct, algebra]

3.1 The identifications in step 2.1 are natural in affine restriction; [F8] therefore gives compatible algebra isomorphisms E/I^(n+1)E≅B_n. E is coherent. At a closed-fibre point lift a basis of E/IE to a map from a finite free local module. Its reductions modulo all I powers are isomorphisms, and Nakayama plus Krull separation [F10] make the original map an isomorphism. Thus E is locally free near X_0. Its nonfree locus is closed and proper over A; a nonempty closed image in the local base contains the closed point, so a closed subset avoiding X_0 is empty. The coherent differentials vanish on X_0 and hence everywhere by the same closed-support argument. Therefore E is finite étale. [F2, F6, F8, F10, step 2.1, given, construct, algebra]

4.1 For algebra maps between formal systems, pull them to Y, lift uniquely using [F1], and push forward. The natural reduction identifications in step 3.1 give the requested maps. Conversely an existing finite locally free E on X satisfies `q_*q^*E=E⊗q_*O_Y=E`: check it on affine U using an idempotent presentation of E. Hence the construction recovers E and maps uniquely, proving the equivalence for q. [F1, F2, F6, F8, step 3.1, given, construct, algebra]

5.1 If X is integral, [F9] gives a proper birational Y→X with an immersion into projective space over A. Take the closure of the inverse image of the dense isomorphism locus; it is integral and proper over A, so the immersion is closed and Y is projective over A. Put C=p_*O_Y. On affine U=Spec R, projective coherent cohomology [F6] makes C(U) finite over R; birationality embeds it in Frac R and identifies it generically with R. Let X′=Spec_X C. It is finite birational over X. The action of C factors p as Y→X′→X. For c∈C(U), localization commutes with the finite equalizer of section maps on an affine cover of Y_U, so `H^0(D_Y(c),O)=C(U)[1/c]`; this gives `q_*O_Y=O_X′`. The graph of q in projective space over X′ is closed, so q is projective. Step 4.1 applies on X′. [F1, F2, F4, F6, F9, step 4.1, given, construct, algebra]

6.1 Let K=Ann_(O_X)(C/O_X), the conductor. It is an ideal in both O_X and C; on each affine U, finitely many denominators for C(U)⊂Frac R show K is nonzero generically. Set Z=V(K) and Z′=X′×_X Z. On an affine U the conductor square is `R=C(U)×_(C(U)/K)(R/K)`. Given finite étale algebras on X′ and Z with an overlap isomorphism on Z′, [F3] patches them uniquely to a finite étale algebra E on X, compatibly on affine overlaps. [F3, F4, F6, F9, step 5.1, given, construct, algebra]

7.1 Suppose the patched algebras and overlap identify with the restrictions of a given formal system P_n. Their completed algebra sequence is the fibre-product sequence by exact finite-module completion [F8]. By step 1.1 the system P_n is represented by a finite projective Rhat-module P, and its base changes give the completed pieces with the specified overlap. A finite projective module preserves the completed conductor fibre product, so Ehat≅P as an algebra. Reducing via [F8] gives `E/I^(n+1)E≅P_n` with the prescribed multiplication, unit and compatibility. The argument never assumes that reduction of the conductor square itself is a fibre product. [F3, F4, F5, F8, step 6.1, given, construct, algebra] ∎

## Source and authoring record

Local reconstruction from the proof parts in `native146-helper-carriers-v1/author-source-map.json`. The cited locator documents the construction; no external theorem is imported. This research carrier has not been installed or recorded.
