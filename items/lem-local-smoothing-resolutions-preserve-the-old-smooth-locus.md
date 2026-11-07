---
id: lem-local-smoothing-resolutions-preserve-the-old-smooth-locus
kind: lemma
title: Local smoothing resolutions preserving the old smooth locus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-smooth-localization-unit-factors-and-free-differential-retracts
- lem-regular-parameters-globalize-with-stable-annihilators
- lem-one-element-smoothing-lift-through-square-powers
- lem-strict-standard-fourth-order-smoothing
- lem-generic-smooth-factors-have-global-strict-standard-witnesses
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-smooth-morphism-formally-smooth-finite-presentation
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07F9
    url: https://stacks.math.columbia.edu/tag/07F9
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 4
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let R,L be Noetherian and A a finitely presented R-algebra with specified map to L. Use the smooth-witness ideals H(A/R), h(A) and local resolutions defined in [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]]. The following finite constructions hold. (i) If A_a/R is smooth with free differentials of one finite rank, then after adjoining dummy zero-relation variables there is one polynomial presentation in which every sufficiently high power of a is strictly standard. (ii) If π is strictly standard and Ann(π)=Ann(π²) in both R and L, any finite-presentation factor modulo π⁸ lifts so that the new mapped smooth ideal contains π and the image of the quotient mapped smooth ideal. Thus a quotient local resolution lifts. This iterates for a finite list π_i provided stable annihilators hold modulo every preceding eighth power. (iii) If p=R∩q and A_p→L_q has a smooth finitely presented R_p-factor, there is a finitely presented factor A→B→L whose mapped smooth ideal escapes q. (iv) If dim L_q=0, q is minimal over h(A), and a local resolution is known, this factor can be chosen to satisfy h(A)⊂h(B) as well, hence to be a resolution at q.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-smooth-localization-unit-factors-and-free-differential-retracts]].

[F3] The following existing interface is used at its literal public scope: [[lem-regular-parameters-globalize-with-stable-annihilators]].

[F4] The following existing interface is used at its literal public scope: [[lem-one-element-smoothing-lift-through-square-powers]].

[F5] The following existing interface is used at its literal public scope: [[lem-strict-standard-fourth-order-smoothing]].

[F6] The following existing interface is used at its literal public scope: [[lem-generic-smooth-factors-have-global-strict-standard-witnesses]].

[F7] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F8] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

[F9] Under AC, a smooth finite-presentation morphism has the local square-zero lifting property. [[thm-smooth-morphism-formally-smooth-finite-presentation]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Suppose A_a/R is smooth with free differentials of one finite rank. In a polynomial presentation A=R[X]/J the localized conormal sequence splits: a local square-zero lift from [F9] makes its first map injective, and the free differential quotient makes it split. Add finitely many dummy variables with equations setting them to zero, so the localized conormal gains a free summand and becomes free. Choose relations f_1,…,f_c whose classes are a basis there, clearing their finite denominators, and extend to a finite generating list f_1,…,f_m of J. Since the finite conormal quotient vanishes after localizing at a, for all sufficiently large N, a^N f_l∈(f_1,…,f_c)+J² for l>c. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given, construct, algebra]

2.1 Clear the finitely many coefficients and localization errors of a left inverse of the conormal differential injection. This gives a matrix U over A with U(DF)^transpose=a^M identity_c. Cauchy–Binet expresses a^(Mc) as a linear combination of the c×c minors of DF. Multiply by further powers. Thus in one fixed presentation every sufficiently high power of a is strictly standard, with both the required minor identity and the extra-relation identities. For c=0 the minor is one. This is exactly the power extraction needed after the symmetric-conormal retract; smoothness alone is not called an already specified Jacobian witness. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 Suppose pi is strictly standard in A/R, base and target annihilators of pi and pi² agree, and A/pi⁸A→C0→L/pi⁸L is any finite-presentation factor. Apply the proved one-element lift with distinguished element pi⁴. It gives D→L and C0→D/pi⁴D, smoothness of D away from pi and over the smooth locus of C0/(R/pi⁸). The proved general smooth-locus fourth-order desingularization then gives a common factor B smooth over R above every smooth point of D/R. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 Also B[1/pi] is smooth over R: its explicit construction there is polynomial over (A⊗R D)[1/pi], and both factors are smooth. Hence the image of pi lies in h(B). Every image of H(C0/(R/pi⁸)) also lies in h(B), interpreted modulo pi⁸. Indeed let Q contain h(B), so pi∈Q. If one of those image elements were outside Q, the contracted C0 point would be smooth, hence the contracted D point and then the B point would be smooth. Some smooth-locus function of B would map outside Q, contradiction. Membership in every prime over the radical h(B) proves the containment; different lifts modulo pi⁸ make no difference. [F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, construct, algebra]

5.1 Images of H(A/R) lie in the quotient smooth-locus ideal, because smoothness survives base change. Thus if C0 resolves that quotient at q/pi⁸, the containment in step 4.1 gives h(A)⊂h(B), and the escaping quotient smooth element gives h(B) not contained in q. This fills the local nonsmooth-ideal comparison, beyond the previously proved global smooth-factor bridge. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra]

6.1 For a finite list pi_1,…,pi_r in q, strictly standard in A/R, suppose the stable-annihilator equalities hold in source and target modulo every preceding eighth power. A resolution modulo all those powers lifts to one over R: induct on the list, first over R/pi_1⁸ for the remaining elements, then lift pi_1 by step 5.1. Strict witnesses are polynomial identities and survive every quotient. [F1, F2, F3, F4, F5, F6, F7, F8, step 5.1, given, construct, algebra]

7.1 Suppose p=R∩q and a smooth finitely presented R_p-algebra factors A_p→L_q. Apply [F6] to the target L_q and S=R\p. It gives a finite factor A→C→L_q and a strict-standard element pi∈R\p. By the strict-standard identities and the Jacobian criterion [F8], C[1/pi]/R is smooth: on a principal open with an invertible selected minor, the selected equations generate the defining ideal after shrinking by Nakayama. Present C as A[Y_1,…,Y_m]/(f_1,…,f_u), retaining the original A-map. [F1, F2, F3, F4, F5, F6, F7, F8, step 6.1, given, construct, algebra]

8.1 Keep the original x_i images in L. Write all extra images using one common denominator d∈L\q as b_i/d. Homogenize each f_j in only those extra variables, introducing one homogenizing variable w, to a homogeneous F_j. Its value at the actual tuple of original images, b_i and d vanishes in L_q. Pick e∈L\q killing all these finitely many values in L. Define B=A[x0,Y_1,…,Y_m,w]/(x0 F_j). Send x0↦e, Y_i↦b_i, w↦d and keep all original generator images. This is a finite-presentation factor mapped to L itself. [F1, F2, F3, F4, F5, F6, F7, F8, step 7.1, given, construct, algebra]

9.1 On the open where x0 w pi is invertible, set y_i=Y_i/w. The homogeneous equations become the original f_j, so this localization is a Laurent-polynomial extension in x0,w of C[1/pi], hence smooth over R. Its defining element maps outside q. Therefore H(B/R)L is not contained in q. This does not yet assert preservation of h(A). [F1, F2, F3, F4, F5, F6, F7, F8, step 8.1, given, construct, algebra]

10.1 A local resolution gives the smooth local factor needed here if q is minimal over h(A). Localizing makes h(A)L_q=qL_q; a resolving ideal containing it and escaping the maximal ideal is the unit ideal. The already constructed unit-ideal factor then makes that local factor smooth. This justifies the exact local-to-global input. [F1, F2, F3, F4, F5, F6, F7, F8, step 9.1, given, construct, algebra]

11.1 Suppose dim L_q=0, q is minimal over h(A), and a local resolution is known. Steps 7.1–9.1 give a finite factor A→C→L whose smooth ideal has an element outside q, but might not contain h(A). The Artinian ring L_q has nilpotent maximal ideal, so choose N and e∈L\q with e a_i^N=0 globally for a finite list a_i generating H(A/R). Clearing finitely many localized zero elements gives that single e. Write C=A[x]/(f_1,…,f_u). [F1, F2, F3, F4, F5, F6, F7, F8, step 10.1, given, construct, algebra]

12.1 Set B=A[x,y_1,…,y_s,z,t_ij]/(f_j−Σ_i y_i t_ij, z y_i), and map to L by the given C values, y_i↦a_i^N, z↦e and t_ij↦0. After inverting y_i, z is zero and the t_ij with that fixed i are eliminated. Thus B_(y_i) is a polynomial localization over A. Further inverting a_i makes it smooth over R; the image of a_i y_i is a_i^(N+1). Hence h(A)⊂h(B). [F1, F2, F3, F4, F5, F6, F7, F8, step 11.1, given, construct, algebra]

13.1 After inverting z, all y_i vanish and B_z=C[z,z^−1,t_ij]. The surviving free variables are t_ij, not the eliminated y_i. Choose c∈H(C/R) whose image is outside q. Then B_(zc) is smooth and zc maps outside q. Thus h(B) escapes q and B is a resolution. No claim that the whole C is already smooth was used. [F1, F2, F3, F4, F5, F6, F7, F8, step 12.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
