---
id: lem-proper-noetherian-henselian-topological-sections
kind: lemma
title: Topological sections over proper henselian schemes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-complete-noetherian-proper-formal-finite-etale-effectivity
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-projective-coherent-cohomology-finite-and-vanishing
- lem-chow-lemma-proper-noetherian
- thm-flatness-of-noetherian-completion
- thm-noetherianity-of-adic-completion
- cor-completion-commutes-with-finite-quotients-and-submodules
- thm-equivalent-elementary-forms-of-hensels-property
- cor-complete-local-rings-are-henselian
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 095S
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 4
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For proper X over Noetherian henselian local A, every irreducible closed subset has nonempty connected closed fibre and every topological set-sheaf has unchanged global sections on that fibre. The conclusion persists after finite X-morphisms.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-complete-noetherian-proper-formal-finite-etale-effectivity]].

[F2] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F3] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F4] The following existing interface is used at its literal public scope: [[lem-projective-coherent-cohomology-finite-and-vanishing]].

[F5] The following existing interface is used at its literal public scope: [[lem-chow-lemma-proper-noetherian]].

[F6] The following existing interface is used at its literal public scope: [[thm-flatness-of-noetherian-completion]].

[F7] The following existing interface is used at its literal public scope: [[thm-noetherianity-of-adic-completion]].

[F8] The following existing interface is used at its literal public scope: [[cor-completion-commutes-with-finite-quotients-and-submodules]].

[F9] The following existing interface is used at its literal public scope: [[thm-equivalent-elementary-forms-of-hensels-property]].

[F10] The following existing interface is used at its literal public scope: [[cor-complete-local-rings-are-henselian]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 We first prove that `Gamma(X,H)` is finite over `A` for every coherent `H`, rather than importing proper coherent direct-image finiteness. Use the explicit DC Noetherian closed-support induction. For a coherent module supported on a closed subset `S`, a power of the radical ideal of its annihilator kills it: finitely many radical generators on a fixed finite affine cover each have a finite annihilating power, and a finite product bound works. Its finite filtration by powers of this radical therefore has coherent quotients on `S_red`. If both end terms of a short exact sequence have finite global sections, its middle term does too: its sections are an extension of the left sections by a submodule of the right sections, and `A` is Noetherian. Thus it suffices at the inductive step to treat a coherent module `G` on the reduced proper scheme `S_red`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, given, construct, algebra]

2.1 Cover `S_red` componentwise by the explicit projective Chow modifications and take their finite disjoint union `p:Y -> S_red`. At every generic point this map is an isomorphism. The unit `G -> p_*p^*G` consequently has coherent kernel with strict closed support. Coherence here is the proved **projective** degree-zero direct-image calculation, since `p` is projective; no general proper direct-image theorem is assumed. By induction the kernel has finite sections. The sections of `p_*p^*G` are those of `p^*G` on `Y`, finite over `A` by the finite projective Cech calculation. Hence the sections of `G` are finite. This proves the assertion for every support and every coherent module. All component decompositions and minimal bad-support arguments use the displayed DC, exactly as in the complete-case proof. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, given, construct, algebra]

3.1 For a finite `A`-algebra `C` and `c in mC`, choose finite module generators of `C`. The multiplication matrix of `c` has entries in `m`: write `c` in `mC` and multiply those finite expressions by the generators. Its characteristic polynomial `f(T)` is monic, annihilates `c`, and satisfies `f(1) in 1+m`. Divide `f(T)-f(1)` by `T-1`; evaluating gives `(1-c)Q(c)=f(1)`. The right side is a unit of the local ring `A`, so `1-c` is invertible in `C`. This proves the needed Jacobson property without choosing maximal ideals of arbitrary finite algebras. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 2.1, given, construct, algebra]

4.1 Given an idempotent `e_0 in C/mC`, choose a basis of the finite-dimensional residue algebra adapted to its image and kernel, and lift the finitely many basis elements to module generators of `C` by Nakayama. Lift `e_0` to `e`. Its multiplication matrix reduces to a diagonal matrix with `s` zero entries and `r` unit entries, so its characteristic polynomial `f` satisfies `f(e)=0` and `f mod m=T^s(T-1)^r`. Henselian factor lifting gives monic factors `g,h` with these reductions. Their resultant is a unit, since the reductions are coprime; the finite Sylvester adjugate yields polynomials `u,v` with `ug+vh=1`. The element `b=u(e)g(e)` satisfies `b(b-1)=-u(e)g(e)v(e)h(e)=0` and reduces to `e_0`. If the residue idempotent is zero or one, take zero or one directly. The zero algebra is immediate. For uniqueness, two idempotents having the same reduction give idempotents `e(1-f),f(1-e)` in `mC`; each is zero because its complement is a unit by step 3.1. Thus `e=f`. We have proved, for every finite `A`-algebra, `Idem(C) = Idem(C/mC)`. This is the finite adapted-characteristic-polynomial construction, not an imported finite-henselian-base-change theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 3.1, given, construct, algebra]

5.1 The Noetherian completion `A^hat` is flat over A by [F6], Noetherian by [F7], and has residue field A/m by [F8]. It is complete local with maximal ideal mA^hat. These are the exact completion properties used below. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, algebra]

6.1 For `C=Gamma(X,O_X)`, finiteness follows from step 1.1. Flat completion commutes with this degree-zero calculation: choose a fixed finite affine cover of the separated `X`; its pair intersections are affine, sections are the kernel of the finite pair of restriction maps, and flat tensor preserves that kernel. Thus `C tensor_A A^hat = Gamma(X_Ahat,O)`. The complete-case finite-etale equivalence already proved under DC implies that the idempotents of the right side restrict bijectively to those of `Gamma(Z,O_Z)`. Explicitly an idempotent is a morphism from the identity finite cover to the trivial double cover; complete-case full faithfulness gives exactly this bijection. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 5.1, given, construct, algebra]

7.1 The complete local ring `A^hat` is henselian by [F10]. Applying the finite-algebra idempotent bijection [F9] over A to C and over `A^hat` to the finite `A^hat`-algebra `C⊗A^hat` gives `Idem(C)=Idem(C/mC)=Idem(C⊗A^hat)`. Together with step 6.1 and the commuting restriction maps, this proves `Idem Gamma(X,O_X) -> Idem Gamma(Z,O_Z)` is bijective. No surjectivity of the full global-function map is asserted. [F1, F2, F3, F6, F7, F8, F9, F10, step 6.1, given, algebra]

8.1 Replace `X` by any irreducible reduced closed subscheme `W`. Its only idempotents are zero and one, so step 7.1 says that its closed fibre is connected. It is nonempty by proper closed-fibre detection: a nonempty proper closed image in the spectrum of a local ring contains the closed point. These observations hold for every finite scheme over `X`, since it too is proper over `A`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 7.1, given, construct, algebra]

9.1 Let `W` be a closed subset of `X` and let `s:W intersect Z -> S` be locally constant, where `S` is a finite set. Decompose `W` into its finitely many irreducible closed components `W_i`, using DC. Each `W_i intersect Z` is nonempty connected by step 8.1, so `s` has a single value `a_i` there. If `W_i intersect W_j` is nonempty, it is a closed proper subset over `A` and meets `Z`; hence `a_i=a_j`. Assign value `a_i` on `W_i`. The assignment is well defined on all intersections. Each fibre is a finite union of closed components, as is its complement, so the resulting map `W -> S` is locally constant. It extends `s`. Uniqueness follows because every point of `W` specializes to a point of `W intersect Z`; a locally constant function has the same value along a specialization. This proves the section bijection for every finite constant sheaf on every closed subset of `X`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 8.1, given, construct, algebra]

10.1 Let `t` be a section of `i^-1 F` on `Z`. By the inverse-image definition it is locally represented by sections of `F` on opens of `X`. Quasi-compactness of `Z` extracts a finite list `(U_j,s_j)` representing it everywhere. Let `F'` be the subsheaf of `F` generated by these sections. For each pair of indices let `E_jk subset U_j intersect U_k` be the open locus where their germs agree. Then `F'` has the finite presentation with one generator over each `U_j` and the pairwise identifications over `E_jk`: at a point its stalk is exactly the finite set of generator germs, with these equality relations. In particular `t` belongs to `i^-1 F'`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 9.1, given, construct, algebra]

11.1 Form the finite topological space `P` of realized membership patterns in the finitely many opens `U_j,E_jk`, ordered by inclusion of patterns. The map `pi:X -> P` is continuous: a principal upper set pulls back to a finite intersection of those opens. The finite presentation in step 10.1 defines a sheaf `G` on `P` with finite stalks, and `F'=pi^-1 G`. This can also be checked directly on stalks: both have precisely the displayed finite generators and relations at each membership pattern. No generic spectral/patch compactness theorem is being assumed. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 10.1, given, construct, algebra]

12.1 On a finite topological space there is an injection `G -> product_(p in P) (closure(p) -> P)_* constant(G_p)`. For a section on an open meeting `closure(p)`, take its germ at `p`; such an open contains `p`, and a nonempty open in that irreducible closure is connected, so this defines a constant section. At the stalk at `p`, the `p`th factor is the identity, so the map is injective on all stalks. Pulling back to `X` gives an injection `F' -> product_(p in P) (W_p -> X)_* constant(G_p)`, where `W_p=pi^-1 closure(p)` is closed. For closed embeddings, this base-change assertion is checked on stalks: on the closed subset the stalk is the given finite set, and outside it the stalk of the direct image of a sheaf of sets is a singleton. Thus no unproved arbitrary-sheaf embedding theorem is imported. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 11.1, given, construct, algebra]

13.1 Apply step 9.1 to extend the image of `t` in every factor from `W_p intersect Z` to `W_p`. The finite list gives a global section `g` of the product sheaf. It belongs to `F'` at every stalk. Indeed for a point `x`, the closed subset `closure(x)` meets `Z`; choose one such specialization `z`. At `z` the section is the original `t` and belongs to `F'_z`. Generization sends it into `F'_x`, and this is the germ of `g` at `x`. This is a separate implication for each point; no simultaneous choice of specializations is made. Membership in a subsheaf is local, so `g` is a global section of `F'`, hence of `F`, extending `t`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 12.1, given, construct, algebra]

14.1 Finally two global sections agreeing on `Z` agree at every stalk by the same specialization argument. This proves both surjectivity and injectivity and concludes the stated theorem for every topological sheaf of sets. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 13.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. This research carrier has not been installed or recorded.
