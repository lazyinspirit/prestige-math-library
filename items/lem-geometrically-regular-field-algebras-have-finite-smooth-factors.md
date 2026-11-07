---
id: lem-geometrically-regular-field-algebras-have-finite-smooth-factors
kind: lemma
title: Finite smooth factors over a field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-smooth-localization-unit-factors-and-free-differential-retracts
- lem-nilpotent-flat-lifting-of-finite-smooth-factorizations
- lem-regular-parameters-globalize-with-stable-annihilators
- lem-local-smoothing-resolutions-preserve-the-old-smooth-locus
- lem-geometrically-regular-polynomial-artinian-approximations
- lem-flat-artinian-models-adjoin-a-power-of-a-unit
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-ag-local-flatness-regular-parameters
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-ag-separating-transcendence-basis-perfect-field
- thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07FJ
    url: https://stacks.math.columbia.edu/tag/07FJ
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 5
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For every field k and Noetherian k-algebra L geometrically regular over k in the Noetherian sense, every finitely presented k-algebra mapped to L factors through a smooth finitely presented k-algebra. All residue characteristics and inseparable residue fields are included.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-smooth-localization-unit-factors-and-free-differential-retracts]].

[F3] The following existing interface is used at its literal public scope: [[lem-nilpotent-flat-lifting-of-finite-smooth-factorizations]].

[F4] The following existing interface is used at its literal public scope: [[lem-regular-parameters-globalize-with-stable-annihilators]].

[F5] The following existing interface is used at its literal public scope: [[lem-local-smoothing-resolutions-preserve-the-old-smooth-locus]].

[F6] The following existing interface is used at its literal public scope: [[lem-geometrically-regular-polynomial-artinian-approximations]].

[F7] The following existing interface is used at its literal public scope: [[lem-flat-artinian-models-adjoin-a-power-of-a-unit]].

[F8] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F9] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F10] The following existing interface is used at its literal public scope: [[lem-ag-local-flatness-regular-parameters]].

[F11] The following existing interface is used at its literal public scope: [[thm-regular-local-rings-are-domains-and-cohen-macaulay]].

[F12] A finitely generated extension of a perfect field has a separating transcendence basis. [[thm-ag-separating-transcendence-basis-perfect-field]]

[F13] A finite separable field extension has a primitive element. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[F14] The general Noetherian geometric-regularity and regular-map convention tests finite residue-field extensions. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Every extension K/k of a perfect field is a filtered colimit of smooth finite-presentation k-algebras in the finite-factor sense. For any finite-presentation A→K, its finitely many generator images lie in a finitely generated subfield F/k. Choose a separating transcendence basis t by [F12] and a primitive element u by [F13] for the finite separable extension F/k(t). Clear the finitely many coefficients and the expressions for the prescribed images. One obtains a localization of k[t,u]/f containing those images, with f monic and f'(u) inverted. It is standard étale over a polynomial localization, hence smooth. All relations hold because this ring embeds in F. This proves the finite-factor property. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, given, construct, algebra]

2.1 Let R0→T be flat Artinian local rings whose maximal ideals satisfy m_R0 T=m_T and whose residue extension is K/k with k perfect. Modulo the nilpotent ideal m_R0 the map is k→K, so step 1.1 supplies the finite-factor property. The actual nilpotent lifting construction, applied successively to powers of m_R0, gives the same property for R0→T. This uses flatness at each relation-killing step, not just a separability slogan. In particular it applies to characteristic-zero residue fields. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, given, construct, algebra]

3.1 Fix q minimal over h(A), put d=dim L_q, and choose N>0 with q^N L_q⊂H(A/k)L_q. This is possible because the quotient by H(A/k)L_q is zero-dimensional Noetherian local and its maximal ideal is nilpotent. Choose generators a_j of H(A/k). With S=k[x_1,…,x_d], set B=A[x_i,z_ij]/(x_i^N−Σ_j z_ij a_j). Each B_(a_j) is polynomial over the smooth S-algebra A_(a_j)[x_i]: eliminate the corresponding z_ij. On B_(x_i) the a_j generate the unit ideal by the displayed relation, so that open is smooth over S. Apply the symmetric-conormal retract B→C→B. Its differentials are finite free on every x_i-open. The strict-standard power construction supplies a common c>0 for which every x_i^c is strictly standard in C/S. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1, given, construct, algebra]

4.1 Put e=8c. The global parameter construction gives π_i∈L whose images are a regular parameter system of L_q, whose Nth powers belong to H(A/k)L globally, and whose annihilators agree with those of their squares modulo the preceding π_j^e. Thus π_i^N=Σ_j λ_ij a_j in L. Map B→L by x_i↦π_i, z_ij↦λ_ij, and C→L by its retraction. On the polynomial source S the x_i are a regular sequence, including modulo preceding powers. The stable-annihilator equalities therefore hold on both sides, also for the cth powers. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 3.1, given, construct, algebra]

5.1 It suffices by the eighth-power resolution lift to resolve C/(x_i^e) over S/(x_i^e) into L/(π_i^e) at q. Locally at q this target is Artinian. The local map S_(x)→L_q is flat: the parameters x_i map to a whole regular parameter system, so the published parameter-flatness criterion applies. Its quotient R0=S_(x)/(x_i^e)→T=L_q/(π_i^e) is flat local Artinian with unchanged maximal-ideal generators and characteristic-zero residue extension. By step 2.1 every finite-presentation algebra mapped to T factors through a smooth R0-algebra. This applies to the localized C quotient. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 4.1, given, construct, algebra]

6.1 If the mapped smooth ideal of the C quotient already escapes q, its identity is a resolution. Otherwise q is minimal over that ideal, because it contains the image of h(A) and q was minimal over h(A). The local smooth factor in step 5.1 globalizes by the finite homogenization construction; zero-dimensional cleanup restores inclusion of the old smooth ideal. This is the required quotient resolution. Lift it successively along x_i^c to obtain C→D→L resolving at q over S. As S is smooth over k and h(A)⊂h(C/S), the resulting A→D→L is a local resolution over k. For d=0 the parameter lists are empty and the same Artinian argument and cleanup apply directly. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 5.1, given, construct, algebra]

7.1 Now char k=p>0. Fix A,q,d,N,a_j as in step 3.1 but use B=A[x_i,z_ij]/(x_i^(2N)−Σ_j z_ij a_j). Form the same symmetric-conormal retract C over S=k[x_i], and choose c>0 making x_i^c strictly standard. Put e=8c and choose n≥max(N, d(e−1)+1). For example n=N+8dc works. The monomial pigeonhole bound gives (u_1,…,u_d)^n⊂(u_1^e,…,u_d^e) whenever these u_i generate the relevant maximal ideal. The smaller expression N+dc does not in general prove this containment and is not used here. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 6.1, given, construct, algebra]

8.1 Let E contain the images of the finitely many original A generators in T=L_q/q^n. The frozen polynomial-Artinian input supplies P=k[y]→L, r=P∩q, a flat local map P_r→L_q with rL_q=qL_q, and Q=P_r/r^n→D→T as above. The regular parameters π_1,…,π_d of P_r can be represented in r⊂P; their images form a whole parameter system of L_q. Flatness and rL_q=qL_q identify `(r/r^2) tensor K` with `qL_q/q^2L_q`: tensor the exact sequence `0→r→P_r→P_r/r→0` with L_q and reduce modulo q. Since both local rings are regular, a regular parameter system of P_r maps to one of L_q. The A-generator images in D satisfy all A relations there, because D→T is injective. Thus A→T factors through an actual k-algebra map A→D. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 7.1, given, construct, algebra]

9.1 Introduce R=P[t_1,…,t_d] and γ_i=π_i t_i. Localizing at P\r makes the γ_i, in every order and after preceding powers, a regular sequence: regular parameters π_i retain this property, and multiplication by a distinct polynomial variable is injective by coefficient comparison. To make the annihilators globally stable, work in the relevant Noetherian quotient M of R by preceding γ_j^e. The finite module `(0:_M γ_i^2)/(0:_M γ_i)` vanishes after localizing at P\r, so one s∈P\r kills it. The ascending chain `(0:_M s^b)` stabilizes; for sufficiently large b, write K for its stable value. Multiplication by s is injective on M/K, and the equality of the two γ_i-annihilators after inverting s therefore holds already in M/K. Hence `(0:_M s^b γ_i)=(0:_M s^(2b) γ_i^2)`. Multiply π_i by that s^b, successively for the finite list. These factors are units in D and L_q; all parameter, D-membership and flatness claims remain valid. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 8.1, given, construct, algebra]

10.1 We construct δ_i∈L\q, coefficients μ_ij∈L, and an essentially smooth Artinian enlargement D→D'→T, still injective flat with the same maximal ideal extended to T, such that (δ_iπ_i)^(2N)=Σ_j a_j μ_ij, all δ_i and μ_ij have T-images in D', and the elements π_i'=δ_iπ_i have stable annihilators modulo preceding (π_j')^e in L. This is a finite induction on i, retaining all previous data. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 9.1, given, construct, algebra]

11.1 In the current D' we have π_i^N∈(a_j)D'. The corresponding membership holds in T because q^N⊂H(A/k)L_q, and faithful flatness of D'→T reflects ideal membership. Write π_i^N=Σ a_j d_j in D', and lift the finitely many d_j to c_j∈L_q. The error ε is in q^n L_q⊂q^(n−N)H(A/k)L_q, so ε=Σ a_j c'_j with c'_j∈q^(n−N). Hence π_i^(2N)=Σ a_j η_j, η_j=π_i^N(c_j+c'_j). The T-image of η_j is π_i^N d_j∈D', since π_i^N c'_j∈q^n. The factor π_i^N is retained in this reduction. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 10.1, given, construct, algebra]

12.1 Choose v∉q clearing denominators so that v^(2N)η_j have global representatives. Their displayed relation holds after localizing at q; choose u∉q killing its finite discrepancy in L. Then δ0=uv gives global coefficients with δ0^(2N)π_i^(2N)=Σ a_j μ0_j. By the unit-power extension construction, enlarge D' essentially smoothly so that δ0^b belongs to D' for a positive b. Replace δ0 by δ0^b and μ0_j by δ0^(2N(b−1))μ0_j. The relation remains exact and the coefficient images now belong to D': before this replacement their images were δ0^(2N)η_j, so afterwards they are (δ0^b)^(2N)η_j. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 11.1, given, construct, algebra]

13.1 Modulo the previously fixed (π_j')^e the element δ0π_i is a nonzerodivisor after localizing at q. Apply the same finite-module stabilization argument of step 9.1 to the present quotient of L: because the element is a nonzerodivisor after localization at q, one s∉q kills the finite annihilator quotient, and sufficiently high powers s^b make its global annihilator stable. Apply unit-power extension to the T-image of s, and take a sufficiently large multiple b of the resulting exponent. Set δ_i=s^bδ0 and μ_ij=s^(2Nb)μ0_j. All images remain in D', the relation holds globally, and the desired annihilator equality holds. This proves the induction of step 10.1 without an infinite coefficient-field enlargement or a simultaneous unsupported choice. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 12.1, given, construct, algebra]

14.1 Map B→L by x_i↦π_i'=δ_iπ_i and z_ij↦μ_ij, and use the retract C→B. Give R→L its P-map and t_i↦δ_i, and set C_R=C⊗_S R with S→R, x_i↦γ_i. The strict-standard witnesses base change to γ_i^c. Their base and target annihilator hypotheses hold by steps 9.1 and 13.1. Also h(A)⊂h(C_R/R), since every a_j-open is smooth over R. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 13.1, given, construct, algebra]

15.1 Put J=(γ_i^e)⊂R and consider the quotient at the inverse image of q. There each t_i is a unit, so J=(π_i^e). Since rP_r is generated by the d parameters, our choice of n gives r^n⊂(π_i^e)P_r and q^n L_q⊂(π_i^e)L_q. Thus passage from the quotient by r^n to the quotient by J is legitimate on both source and target. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 14.1, given, construct, algebra]

16.1 There is a factor of the map B⊗_S(R⊗_P Q)→T through D'[t_i]. Give this polynomial algebra its R-structure by P→D' and the INDETERMINATE t_i↦t_i. Define the B-map by its A→D' map and x_i↦π_i t_i, z_ij↦μ_ij t_i^(2N)/δ_i^(2N). Each δ_i is a unit in D'. The B relations hold because (δ_iπ_i)^(2N)=Σ a_j μ_ij holds in the injectively embedded D'. Evaluation t_i↦δ_i recovers the given map to T. Composing C→B gives the same factor for C_R. Sending x_i directly to the constant π_i' would fail R-linearity; that map is not used. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 15.1, given, construct, algebra]

17.1 D' is essentially smooth over Q, so D'[t_i] is essentially smooth over Q[t_i]. A finite-presentation source mapped to this localization factors through an actual finite-presentation smooth algebra: only finitely many denominators, generator images and relation equalities are needed, and they can be included/inverted at one finite stage. Localize further at the source prime contracting q and base change this factor by J. The resulting factor is smooth over the local R/J base and maps to L_q/JL_q. The target is Artinian because π_i' form a parameter system. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 16.1, given, construct, algebra]

18.1 As in step 6.1, if the quotient smooth ideal escapes q there is nothing to repair. Otherwise q is minimal over it, using h(A)⊂h(C_R/R). Globalize the local factor of step 17.1 and apply zero-dimensional cleanup to get an actual quotient resolution over R/J into L/JL. Lift through the finite list γ_i^c by the eighth-power resolution construction. This gives a finite-presentation factor C_R→D0→L with h(C_R/R)⊂h(D0/R) and h(D0/R) not contained in q. Since R is a polynomial k-algebra, its smoothness and composition give H(D0/R)⊂H(D0/k). Together with h(A)⊂h(C_R/R), this yields a local resolution of the original A over k. The d=0 case uses empty parameter lists and the same Artinian coefficient factor directly. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 17.1, given, construct, algebra]

19.1 The characteristic-zero and positive-characteristic constructions cover every field. If h(A) is proper choose a prime minimal over it, using AC, and construct a local resolution. Its mapped smooth ideal strictly contains h(A). Repeat only while the ideal is proper. An infinite repetition, chosen by DC (available from AC), would give a strictly increasing sequence of ideals of the Noetherian ring L, which is impossible. Thus after finitely many steps the mapped smooth ideal is L. The unit-ideal finite-cover construction now replaces this last factor by an everywhere-smooth finite-presentation k-algebra through which A→L factors. This proves the Statement, including the zero ring target (take the zero algebra) and empty parameter lists. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 18.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
