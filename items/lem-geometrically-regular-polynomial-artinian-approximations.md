---
id: lem-geometrically-regular-polynomial-artinian-approximations
kind: lemma
title: Polynomial Artinian approximations of regular algebras
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- lem-prime-field-nilpotent-lifts-and-finite-inseparability-kernels
- lem-artinian-flat-finite-coefficient-models
- def-axiom-of-choice
- lem-ag-local-flatness-regular-parameters
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-localisation-and-polynomial-extension-of-regular-rings
- lem-finite-type-field-zero-differentials-finite-separable
- thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07FH
    url: https://stacks.math.columbia.edu/tag/07FH
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For a field k of characteristic p, a Noetherian k-algebra L geometrically regular in the Noetherian sense, a prime q of L, an integer n≥1 and finite E⊂L_q/q^n, there is a GLOBAL polynomial map P→L with P_r→L_q flat and rL_q=qL_q, and finite-etale Q=P_r/r^n→D⊂L_q/q^n with D→target flat and E⊂D.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-prime-field-nilpotent-lifts-and-finite-inseparability-kernels]].

[F2] The following existing interface is used at its literal public scope: [[lem-artinian-flat-finite-coefficient-models]].

[F3] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F4] The following existing interface is used at its literal public scope: [[lem-ag-local-flatness-regular-parameters]].

[F5] The following existing interface is used at its literal public scope: [[thm-regular-local-rings-are-domains-and-cohen-macaulay]].

[F6] The following existing interface is used at its literal public scope: [[thm-localisation-and-polynomial-extension-of-regular-rings]].

[F7] The following existing interface is used at its literal public scope: [[lem-finite-type-field-zero-differentials-finite-separable]].

[F8] The following existing interface is used at its literal public scope: [[thm-primitive-element-theorem-for-finite-separable-extensions]].

[F9] General Noetherian geometric regularity is tested after finite field extensions. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Put C=L_q, m=qC and K=C/m. Geometric regularity implies C is regular, so d=dim_K(m/m²) is finite. The finite differential-kernel construction [F1] applies. Put T=C/m^n; the Artinian model [F2] exists for this T and E. Fix that A, its coefficient field σ(F) and the displayed isomorphism T≅K⊗_F A. Its m_A is nilpotent, A contains the actual image of k, and its residue field F⊂K is finitely generated over k. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given, construct, algebra]

2.1 Choose f_1,…,f_t∈F whose differentials form an F-basis of Ω_(F/k). Such a finite list exists because a finite field-generating list of F/k supplies differential generators. Put a_i=σ(f_i)∈A. If n≥2 also choose finitely many c_j∈m_A generating m_A as an ideal. Their images span m/m²: m_A T=m/m^n, and m^n⊂m². If n=1, instead choose finitely many GLOBAL z_j∈q whose images span m/m²; they exist since L is Noetherian, and their T-images are zero. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 For the finite list of elements a_i and, when n≥2, c_j, choose representatives α_h/β_h in C, with α_h,β_h∈L and β_h∉q, whose images in T are those elements. For c_j the numerator α_h lies in q, since its residue is zero. Fix one p-power N=p^e≥n. In T, the difference between the actual image of β_h and σ(β̄_h) belongs to m_T, whose nth power is zero. Hence β_h^N=σ(β̄_h^N) in T. This equality uses the p-power binomial identity, not an arbitrary choice of coefficient lift compatible with k. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 Set g_h=β̄_h^N∈K and F′=F(g_h for all h). Define D=F′⊗_F A using the coefficient F-structure from σ. The identification T=K⊗_F A shows that D injects into T and T≅K⊗_(F′)D. Thus D→T is flat; D is local Artinian with residue F′ and nilpotent maximal ideal m_A D. It contains A, hence E and the actual given k-embedding. Every g_h is nonzero. [F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, construct, algebra]

5.1 D is essentially of finite type over this actual k-embedding. Choose a finite field-generating list u_1,…,u_b for F′/k and let B0 be the subalgebra of D generated by the actual k-image, the σ(u_i), and the inherited finite nilpotent generators of A. Localize B0 at its intersection with m_D. This localization embeds in D, because every inverted element has nonzero residue. Its residue field is F′. Any element of D is its residue lift plus an element of the ideal generated by those nilpotent generators; replace each coefficient by a residue lift and repeat through their finite nilpotence exponent. This expresses the element in that localization. Thus the localization equals D. No k-linearity of σ is inferred. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra]

6.1 For every chosen representative define GLOBAL elements u_h=α_h β_h^(N−1)∈L, v_h=β_h^N∈L. Their T-images lie in D: v_h maps to σ(g_h), while u_h maps to a_iσ(g_h), or to c_jσ(g_h), respectively. For the coefficient a_i, their residues are f_i g_h and g_h. For the nilpotent c_j, u_h has residue zero; denote these particular global elements by z_j. Their classes still span m/m², because their C-images are unit multiples of representatives of the original c_j modulo m^n⊂m². For n=1 retain the global z_j of step 2.1. All parameter candidates thus lie in L and have actual images in D simultaneously. [F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, given, construct, algebra]

7.1 The differentials of the finitely many residues of the coefficient u_h and of ALL the v_h span Ω_(F′/k). Indeed F′ is generated over F by the g_h, so the images of Ω_(F/k) together with dg_h generate it. For the coefficient list, d(f_i g_h)=g_h df_i+f_i dg_h, and g_h≠0, so the old df_i are in the span of these product differentials and the dg_h. There is no claim that dg_h vanishes in Ω_(F′/k): its pth root might not belong to F′. Choose a basis subset of this finite global list and call its elements λ_1,…,λ_s∈L. Their images lie in D, and their residue differentials form a basis of Ω_(F′/k). This is the finite global-denominator repair missing from the abbreviated source argument. [F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, given, construct, algebra]

8.1 Put P0=k[y_1,…,y_s], send y_i to λ_i in L, and let r0 be the inverse image of q. Put R0=(P0)_r0 and G=κ(r0)=k(λ̄_i). The map R0→C is local; R0 is a Noetherian regular local ring. The exact differential sequence for k→G→F′ makes Ω_(F′/G)=0 because the selected dλ_i already span Ω_(F′/k). The field F′ is finitely generated over k and hence over G, so the exact published AC criterion [F7] makes F′/G finite separable. This uses that criterion at its actual finite-generation hypotheses, not a false assertion that every algebraic extension has zero differentials. [F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, given, construct, algebra]

9.1 The relative differential map Ω_(R0/k)⊗_(R0)G→Ω_(G/k) is an isomorphism. Tensor it with F′. Its source has basis dy_i, whose images are the selected basis of Ω_(F′/k); its target becomes that module because F′/G is finite separable. Faithful field extension reflects the isomorphism. Apply now the exact absolute differential sequence of [F1] to R0. Since Ω_(R0/F_p)⊗G=(G⊗_k Ω_(k/F_p))⊕G^s, and the relative differential map just proved is an isomorphism, the conormal subspace r0R0/(r0R0)^2 lies entirely in the first summand and identifies with V(G/k). This follows by projecting the absolute sequence to the relative one; the kernel and the converse kernel lift are exact. [F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, given, construct, algebra]

10.1 Naturality of those absolute sequences identifies the map of cotangent spaces (r0R0/(r0R0)^2)⊗_G K → m/m² with V(G/k)⊗_G K→V(K/k)↪m/m². The first arrow is injective: both V-spaces are subspaces of K⊗_k Ω_(k/F_p), and extension from G to K preserves the defining inclusion. The second arrow is the actual geometric-regularity conclusion of [F1]. Thus the cotangent map is injective. A regular system of parameters of R0 therefore maps to part of a regular parameter system of C. By [F4], R0→C is flat and C/r0C is regular local. This reconstructs precisely07E6, with its full inseparable-residue case. [F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, given, construct, algebra]

11.1 The classes of the global z_j from step 6.1 generate the maximal cotangent space of the regular local quotient C/r0C, since they already span m/m². Select a subset whose images are a basis of that quotient cotangent space. They give a regular parameter system there. Extend the polynomial map by variables mapping to this subset and write P=k[y_1,…,y_s,z_1,…,z_a]→L, r=P∩q and R=P_r. Because every added variable has zero residue, r=(r0,z_1,…,z_a) before localization, and κ(r)=G. A regular system of parameters of R consists of that of R0 followed by these z-variables. Its images form a whole regular system of C. Therefore [F4] makes R→C flat, and rC=m. No localization of L was substituted for the required polynomial target L. [F1, F2, F3, F4, F5, F6, F7, F8, step 10.1, given, construct, algebra]

12.1 All polynomial variable images belong to D. Every element of P outside r has nonzero residue in G⊂F′, so is a D-unit. Hence the map R→T factors through D. The ideal r maps into m_D, and its nth power is zero: its image in T is contained in m_T^n=0 and D⊂T is injective. Thus there is a factorization Q=R/r^n→D→T. Since R→C is flat and rC=m, its base change T=C/m^n is flat over Q. [F1, F2, F3, F4, F5, F6, F7, F8, step 11.1, given, construct, algebra]

13.1 The already flat local map D→T is faithfully flat. For any proper ideal I⊂D its extension lies in m_D T=m_T and so T/IT is nonzero. If a D-module N is nonzero, choose a nonzero cyclic submodule D/I⊂N; its tensor with T is nonzero and still injects into N⊗_D T by flatness. Thus tensoring with T detects zero modules. To descend Q-flatness, take any injective map of Q-modules and tensor with D. Its kernel becomes zero after tensoring with T, since T is Q-flat; faithful D-flatness makes that kernel zero. This is the injection criterion for D being Q-flat. [F1, F2, F3, F4, F5, F6, F7, F8, step 12.1, given, construct, algebra]

14.1 Furthermore m_D=rD. The inclusion rD⊂m_D is clear. Tensor its quotient m_D/rD with T; flatness identifies it with m_D T/rT=m_T/m_T=0, since rC=m. Faithful flatness gives equality. The residue extension of Q→D is consequently the finite separable extension F′/G of step 8.1. Lift a G-basis of F′ to finitely many elements of D. They generate D as a Q-module: subtract the lifted residue expression of any element, write the remainder with finitely many generators of r times elements of D, and repeat those residue expressions. After n repetitions r^n=0, leaving a Q-linear expression in the same finite list. Thus D is finite over the Noetherian Artinian ring Q. [F1, F2, F3, F4, F5, F6, F7, F8, step 13.1, given, construct, algebra]

15.1 Finite flat D is free over local Q, of rank [F′:G]. For an explicit check, lift a residue basis to a surjection Q^b→D by step 14.1; its kernel is finite because Q is Noetherian. Flatness makes its residue kernel zero, and finite Nakayama makes that kernel zero. Choose a primitive element α of the finite separable residue extension and a monic lift H∈Q[T] of its minimal polynomial. For any lift a∈D of α, H(a)∈m_D while H′(a) is a unit. Finite Newton corrections a↦a−H(a)/H′(a) square the error ideal until m_D^n=0, producing b with H(b)=0 and b mod m_D=α. [F1, F2, F3, F4, F5, F6, F7, F8, step 14.1, given, construct, algebra]

16.1 The map Q[T]/H→D, T↦b, is a residue isomorphism between free Q-modules of the same rank, hence an isomorphism: its determinant is a unit by reduction modulo the unique maximal ideal. The algebra Q[T]/H is finite free and has separable geometric fibre, since H modulo that ideal is separable. It is therefore finite étale by the actual flat/finitely-presented/geometrically-regular-dimension-zero definition. This avoids importing an unproved étaleness implication. In particular Q→D is essentially smooth. Its following map to T is injective and flat, and E⊂A⊂D. [F1, F2, F3, F4, F5, F6, F7, F8, step 15.1, given, construct, algebra]

17.1 Steps 11.1–16.1 prove every part of the Statement, including n=1, s=0, empty finite E and zero-dimensional local C. The zero polynomial-variable case means P=k; Q is still its prescribed local Artinian quotient. Both global coefficient directions and maximal-ideal parameters were chosen before the one coefficient-field enlargement, so there is no infinite denominator-enlargement process. This supplies the requested polynomial-parameter Artinian approximation, not the remaining regular-completion theorem, general regular-map smoothing induction or arbitrary proper pointed approximation. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
