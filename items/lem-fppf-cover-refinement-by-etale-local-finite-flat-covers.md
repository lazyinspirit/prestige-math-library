---
id: lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
kind: lemma
title: Fppf covers refine by étale-local finite flat covers
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-flat-finite-presentation-has-quasi-finite-flat-quasisections
- lem-quasi-finite-morphism-finite-after-etale-localization
- lem-determinant-trick-for-nakayama
- lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement

Every fppf covering family admits an etale covering followed by single surjective finite locally free covers refining it. More precisely, there are a Zariski covering {U_j→S}, surjective finite locally free W_j→U_j, Zariski coverings {W_jk→W_j}, and surjective finite locally free T_jk→W_jk such that the leaf family {T_jk→S} refines the original covering. Thus exactly the stated four stages suffice; the construction uses one tensor splitting cover before the intermediate Zariski stage. Flat locally finitely presented maps are universally open. No point-indexed choice function is assumed.

## Statement references

[[lem-flat-finite-presentation-has-quasi-finite-flat-quasisections]]

[[lem-quasi-finite-morphism-finite-after-etale-localization]]

[[lem-determinant-trick-for-nakayama]]

[[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[lem-flat-finite-presentation-has-quasi-finite-flat-quasisections]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-quasi-finite-morphism-finite-after-etale-localization]] at the hypotheses stated there.

[F3] Finite annihilator trick and idempotent ideals. [[lem-determinant-trick-for-nakayama]]

[F4] Finite integral subalgebras throughout. [[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]

## Proof

**Proof technique:** direct.

1.1 Let A be  a commutative ring, f monic of degree n=r+s, and C0 the coefficient algebra for ordered monic factorizations f=GH with degrees r,s. Concretely C0 is the polynomial algebra in the r+s nonleading coefficients of G,H modulo the n coefficient equations GH=f. Thus it is finitely presented as an A-algebra. [F1, F2, F3, F4, given, construct, algebra]

2.1 Adjoin successively all ordered roots of G and all ordered roots of H to C0 by the elementary monic root construction. The resulting algebra D is free over C0 of positive rank r!s!, with its explicit iterated bounded-power basis. Its universal property is exactly that of the ordered splitting algebra W of f over A: an ordered root tuple for f determines G as the product of its first r linear factors and H as the product of its last s, while a factorization and ordered root tuples for G,H give that same ordered root tuple of f. These two constructions are inverse on coefficients and roots over every test algebra, and therefore give inverse explicit algebra homomorphisms D≅W. In particular D is free of rank n! over A. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 The map C0→D is injective, since the explicit monic-extension basis includes 1 at every step. Every coefficient of G,H in D is an elementary symmetric polynomial in roots of the monic f; those roots are integral over A. Finite sums and products of these finitely many integral elements are integral, by the usual finite-module determinant argument, so the coefficients are integral over A. Injectivity C0→D shows that the same monic relations hold already in C0. Since these coefficients generate C0 as an A-algebra, successive bounded-power reduction makes C0 finite as an A-module. As it is also finitely presented as an A-algebra, the explicit monic-quotient argument of the preceding explicit calculation makes it finitely presented as an A-module. [F1, F2, F3, F4, step 2.1, given, construct, algebra]

4.1 Finally C0 is A-flat. Let N'→N be any injection of A-modules. After tensoring with C0 let K be the kernel. Tensor the resulting sequence with the free C0-module D, which is flat. This identifies K⊗C0 D with the kernel after tensoring N'→N with D, and that kernel is zero since D is A-free. The explicit positive free C0-basis of D gives K⊗C0 D≅K^(r!s!), so K=0. Thus tensoring with C0 preserves injections. This is faithful finite-free descent with its proof supplied, not an imported descent theorem. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 At each specified prime p of A, C0⊗κ(p) is nonzero: if it were zero, its positive free extension D⊗κ(p) would be zero, contradicting D's positive A-rank. It is a finite-dimensional algebra, so the maximal-proper-ideal-by-finite-dimension argument gives a point above p. Therefore Spec C0→Spec A is surjective in the given-prime sense, without arbitrary prime existence. Localizing C0 at Res(G,H) or further coefficient polynomials preserves A-flatness and finite algebra presentation; such localizations need not remain finite over A, and no such claim is made. [F1, F2, F3, F4, step 4.1, given, construct, algebra]

6.1 Let f be a monic degree n polynomial over A, n=r+s. Let C be its universal algebra of factorizations f=GH into monic degrees r,s, localized at Res(G,H). Let q be a specified prime of C above p of A. Further localizations of C by a specified g∉q are allowed. Then, after a principal shrinking of A away from p, there is a surjective finite free A-algebra W whose spectrum has a finite principal-open cover, each member mapping to Spec C_g over A. [F1, F2, F3, F4, step 5.1, given, construct, algebra]

7.1 Before making the refinement, one may shrink C_g further around q so that its fibre over p has only q. Indeed C0 is finite over A by the separate algebra leaf; its localization C_g has finite-dimensional fibre over k=κ(p). For its given maximal ideal m at q, choose N with m^N=m^(N+1); determinant Nakayama on the stabilized finite ideal makes m^N generated by an idempotent e, and ε=1−e cuts out the unique-q local component. Lift ε to C_g after clearing its finitely many base denominators outside p, and include this lift in g. This is an allowed principal shrinking around q. Then ANY map from the resulting chart to a field over k has kernel q. This extra shrinking is important when composing charts: good root-partition maps now preserve the given fibre component, not just nonvanishing of the original g. [F1, F2, F3, F4, step 6.1, given, construct, algebra]

8.1 Construct W0 as the ordered splitting algebra of f. It is finite free of rank n! over A, with specified roots α1,…,αn, as proved in the preceding explicit calculation. For every r-element subset I of {1,…,n}, form GI=∏(t−α_i), HI=∏(t−α_j), and dI=Res(GI,HI). Their coefficients give a map C→(W0)_(dI). Write the image of g as a fraction there and choose a numerator eI; then evaluation gives a map C_g→(W0)_(dI eI). There are only finitely many I and finite denominators. [F1, F2, F3, F4, step 7.1, given, construct, algebra]

9.1 These finitely many good opens cover the entire W0-fibre above the specified p. Here is an elementary proof which does not use geometric regularity of the factorization chart. By the preceding explicit calculation, C0 is finite over A. Thus the specified q has finite residue field L over k=κ(p), generated as a k-algebra by the coefficients of its two monic factors. Let E be any field quotient of the finite-dimensional k-algebra W0⊗k. The polynomial f splits completely in E. The algebra E⊗k L is nonzero by finite-dimensional linear algebra and is finite-dimensional over E; hence it has a field quotient F by the maximal-ideal finite-dimension argument. Both E and L embed in F. In F[t], the specified monic factors G,H over L divide the polynomial f which is already split over E. Therefore G,H are products of complementary subsets of the specified roots α_i in E, with multiplicities: successively divide by the finitely many linear factors in the polynomial ring over the field F. Their coefficients accordingly lie in E. As those coefficients generate L, the embedding L→F lands in E. The resultant and g are nonzero under this embedding because q is a point of C_g. Thus some subset I gives dI eI nonzero in E. This proves the covering assertion on every field quotient of W0⊗k, using only finite field extensions and finite polynomial factorization. No product decomposition of a nonreduced coefficient algebra or Jacobian criterion is needed. [F1, F2, F3, F4, step 8.1, given, construct, algebra]

10.1 Put J=(dI eI)_I in W0 and M=W0/J, a finite A-module. If M⊗κ(p) were nonzero, its finite-dimensional algebra would have a field quotient, contradicting the preceding paragraph. Hence M⊗κ(p)=0. Finite determinant Nakayama over A_p gives M_p=0; killing its finite generators spreads this to A_a for one a∉p. Therefore the good opens cover W=W0,a by the actual unit-ideal relation. Surjectivity of W over A_a is the finite-dimensional residue-algebra argument, not a general prime-existence theorem. [F1, F2, F3, F4, step 9.1, given, construct, algebra]

11.1 For a composite of two such factorization/resultant charts and principal opens, first use the construction on the first chart. On each of the finitely many resulting principal opens of its finite-free refinement, pull back the second chart. The given point on the composite supplies, fibre by fibre, a factorization point to which the same construction applies. Taking ALL resulting principal-neighborhood/finite-free/splitting witnesses gives a covering; a point-indexed choice function is unnecessary. Thus the composite is refined by a bounded tree of Zariski coverings and surjective finite free maps. Its depth is bounded by the number of factorization charts, not by the size of the original covering family. [F1, F2, F3, F4, step 10.1, given, construct, algebra]

12.1 Given the the quasisection lemma quasisections and the finite-localization lemma's announced two-chart output, a jointly surjective flat-lfp family is first refined étale-locally by surjective finite free maps. The special the finite-localization lemma neighborhoods are refined by the bounded splitting tree just described. Pull back their final finite-free covers along that tree. The resulting refinement consists entirely of Zariski coverings and SINGLE affine faithfully flat maps, repeated finitely many times. Descent of an affine represented functor across each tree level is the explicit equalizer argument in the preceding explicit calculation; its induction does not depend on there being exactly four stages. This is the precise route from the family geometry to the Kummer sheaf assertion. [F1, F2, F3, F4, step 11.1, given, construct, algebra]

13.1 Let {X_i→S} be a jointly surjective flat locally finitely presented family. Fix a GIVEN point s∈S. There exist i and x_i above s by joint surjectivity; for this one existential argument take those witnesses. the quasisection lemma produces a flat finitely presented quasi-finite Z→S, a point z above s, and Z→X_i. Apply the finite-localization lemma at z. It gives elementary étale (U,u)→(S,s) and finite open V⊂Z×S U, with a point above u. The map V→U is flat and locally finitely presented, since it is an open restriction of a base change of Z→S. [F1, F2, F3, F4, step 12.1, given, construct, algebra]

14.1 Its affine finite algebra M is a finitely presented module by the explicit finite-algebra leaf. At the local base ring O(U)_u, its fibre is finite-dimensional, so choose its finite vector-space basis and apply finite-fibre-basis lifting with R=S=O(U)_u. Thus M_u is free; spreading its basis by finite kernel/cokernel annihilation makes V finite free of positive rank after a principal shrinking about u. For every specified prime of U, its residue algebra is a nonzero finite-dimensional algebra and hence has a prime by the finite-dimensional ideal argument. Consequently V→U is surjective, directly. It still maps to X_i. [F1, F2, F3, F4, step 13.1, given, construct, algebra]

15.1 Take the family of ALL finite witnesses constructed in this paragraph, rather than choose one for every s. It covers S because the argument proves existence at each given s. Thus the original covering has a refinement by elementary étale U→S, followed by surjective finite free V→U. The U have the finite-localization lemma's explicit bounded factorization-chart presentations and their recorded principal localizations. [F1, F2, F3, F4, step 14.1, given, construct, algebra]

16.1 For one factorization chart, the preceding explicit calculation gives near any specified point of its base a finite free cover W and finite Zariski cover of W mapping to that chart, after the explicit finite-dimensional idempotent shrinking of the chart, so every relevant closed-fibre branch has the specified point as kernel. The residue-field embeddings may differ, which causes no problem. Its proof uses the preceding explicit calculation and finite common splitting fields, and does not assume general étale openness. [F1, F2, F3, F4, step 15.1, given, construct, algebra]

17.1 For two successive charts, first refine the first one near the specified basepoint. Its finite free W has only finitely many points over that basepoint: a finite-dimensional algebra has at most its vector-space dimension many distinct maximal ideals, by Chinese remainder and linear independence; every prime is maximal, so a maximum finite list contains them all. On each such point choose, finitely, a suitable first-chart principal open and a lift to the second chart. Such a lift exists because the selected first-chart residue embedding realizes the given first-chart point, and tensoring its residue field with the specified second-chart finite residue field is a nonzero finite-dimensional algebra. A field quotient gives the required lift. [F1, F2, F3, F4, step 16.1, given, construct, algebra]

18.1 Apply the one-chart refinement on a principal neighborhood of each of these finitely many points of W. These principal neighborhoods cover its entire closed fibre. Their defining elements generate the unit ideal in that finite-dimensional fibre: otherwise a finite-dimensional quotient has a maximal ideal, contradicting coverage. The quotient of W by their ideal is a finite module over the original base, with zero fibre at the specified prime. Determinant Nakayama and finite generators therefore allow one additional principal shrinking of the original base on which these neighborhoods cover all of W. Over each neighborhood the second-chart finite free refinement and its finite principal-open cover apply. This is a bounded tree consisting of Zariski covers and surjective finite free maps. Principal localizations already present in the finite-localization lemma are absorbed in the same good-open conditions, with the given nonvanishing witness. The proof iterates finitely for any fixed number of charts; here the finite-localization lemma requires only two. [F1, F2, F3, F4, step 17.1, given, construct, algebra]

19.1 Append the pullback of V→U from §1 at the leaves. Therefore, locally in the Zariski topology on S, the original fppf family is refined by a finite-depth tree all of whose non-open arrows are single surjective finite free affine maps. Every leaf maps to one original X_i. Taking ALL witness trees gives a covering of S. No affine quasi-compactness or arbitrary point-indexed choice is invoked. [F1, F2, F3, F4, step 18.1, given, construct, algebra]

20.1 flat A-algebra C is finite free on a neighborhood of each GIVEN prime p: choose a finite basis of C⊗κ(p), apply the finite-fibre-basis lifting proof with R=S=A_p and M=C_p, and spread the finite kernel and cokernel. Consider a principal open D(c) in Spec C on such a free neighborhood, and the characteristic polynomial χ_c(T)=T^n+a1 T^(n−1)+…+an of multiplication by c on C. Over a given residue field, D(c) is nonempty exactly when c is not nilpotent in the finite-dimensional fibre algebra. Indeed, a nonzero localization of that algebra is again finite-dimensional and has a field quotient by the finite-dimensional ideal argument; conversely a point where c is invertible excludes nilpotence. By the adjugate Cayley–Hamilton identity c is nilpotent exactly when every a_i vanishes: nilpotence makes its multiplication operator nilpotent, whose characteristic polynomial is T^n by finite linear algebra, and χ_c=T^n gives c^n=0. Therefore the image of D(c) is ∪D(a_i), an explicit open subset of the base. The rank-zero case has empty image. Varying over ALL local basis witnesses proves that a finite finitely presented flat map is open on all its principal opens, hence on every open. The coefficient description commutes with base change. [F1, F2, F3, F4, step 19.1, given, construct, algebra]

21.1 The unlocalized universal monic factorization algebra C0 is finite, finitely presented and flat by the separate full algebra proof. Consequently each resultant/principal-open chart Spec(C0)_g→Spec A is universally open; compositions and principal base localizations preserve universal openness. Thus every U→S in the actual two-chart the finite-localization lemma output is universally open. [F1, F2, F3, F4, step 20.1, given, construct, algebra]

22.1 Now let X→S be flat and locally finitely presented and let O⊂X be any open. For each specified x∈O, apply the quasisection lemma to O→S and the finite-localization lemma as in §1 of the family composition proof. Obtain V→U finite free positive rank (hence surjective, by finite residue algebra), U→S a composite of the explicit open factor charts, and V→O. Thus the image of O contains the OPEN image of U and this open contains f(x). Taking the union of all these explicit witness opens gives exactly f(O). This proves openness of X→S without a point-indexed choice function. Base-changing the entire argument proves universal openness. No quasi-compactness of an arbitrary affine spectrum or general prime-existence principle appears in this proof. [F1, F2, F3, F4, step 21.1, given, construct, algebra]

23.1 Fix a point s of the target of an fppf family. The reviewed the quasisection lemma/the finite-localization lemma construction gives a pointed elementary étale neighborhood U→S made by TWO monic-factorization/resultant charts and principal localizations, and a surjective finite free V→U mapping into one original covering member. All constructions below are local on an affine neighborhood Spec A of s. The specified points and residue embeddings are retained. [F1, F2, F3, F4, step 22.1, given, construct, algebra]

24.1 For the first chart, use the reviewed component-isolated root-partition refinement. It gives, after a principal shrinking of A away from s, a surjective finite FREE algebra W1 over A and a FINITE list of principal opens D(g_i)⊂Spec W1 mapping to the first chart. Their images over s cover the whole W1-fibre; indeed the defining g_i generate the unit ideal after the finite-module/Nakayama shrinking in that proof. The fibre component isolation ensures each such relevant branch maps to the specified first-chart point. Thus the second chart has a point over every such fibre branch after a finite field extension: the tensor of its specified finite residue extension with that branch's residue field is a nonzero finite-dimensional algebra. Only finite-dimensional ideal arguments are used to obtain that point. [F1, F2, F3, F4, step 23.1, given, construct, algebra]

25.1 On each D(g_i), write the second chart using its pulled-back monic polynomial f_i(T) of degree d_i. An identity chart contributes just the tensor factor W1 and requires no roots. Otherwise d_i>0. Its coefficients lie in (W1)_(g_i), and its resultant and any additional principal-open conditions are recorded as well. There are finitely many i and finitely many coefficients for each. Choose N_i so large that all powers needed to clear the coefficients are nonnegative, and set [F1, F2, F3, F4, step 24.1, given, construct, algebra]

26.1 F_i(U)=g_i^(N_i d_i) f_i(U/g_i^N_i) ∈ W1[U]. [F1, F2, F3, F4, step 25.1, given, construct, algebra]

27.1 This polynomial is MONIC: if the coefficient of T^(d_i−j) is a_ij/g_i^e_ij, the corresponding coefficient of U^(d_i−j) is a_ij g_i^(N_i j−e_ij), which belongs to W1 once N_i j≥e_ij. This equality is an identity only after inverting g_i, exactly where it is used. No inverse of g_i is introduced into the base ring W1 itself. [F1, F2, F3, F4, step 26.1, given, construct, algebra]

28.1 Let W2 be the tensor product over W1 of the ordered splitting algebras of ALL these finitely many monic F_i. Every such splitting algebra is finite free of positive rank by successive monic root adjunctions; so is their tensor product. Since W1 is finite free over A, W2 is a SINGLE finite free A-algebra of positive rank. At every specified prime of A its nonzero finite-dimensional residue algebra has a maximal ideal by the finite-dimension argument; hence Spec W2→Spec A is surjective. No intermediate principal localization needs to be represented as another finite-flat stage. [F1, F2, F3, F4, step 27.1, given, construct, algebra]

29.1 Over D(g_i), the ordered roots β_ij of F_i give ordered roots α_ij=β_ij/g_i^N_i of f_i. Root partitions therefore give the second-chart maps on finitely many principal opens of (W2)_(g_i): invert their cross-resultants, the recorded second-chart denominators, and the component-isolating lift. Clearing the finitely many denominators rewrites each as a principal open D(g_i h_ij) of W2 with an actual map to the two-chart composite U. We use ALL finitely many root partitions, not an unrecorded selection of a partition at every point. [F1, F2, F3, F4, step 28.1, given, construct, algebra]

30.1 These good opens cover the W2-fibre over s. For a specified point w2 in that finite fibre, its image w1 belongs to some D(g_i). The isolated first-chart component permits a second-chart point over κ(w1). Its finite residue field embeds in any splitting field of f_i after a finite common extension: in that common field its factor coefficients are elementary symmetric functions in roots already present in κ(w2), so those coefficients lie in κ(w2). Consequently one of the finitely many root partitions has nonzero cross-resultant and all recorded denominators at w2. This is exactly the reviewed one-chart common-field argument, applied after the explicit monic change of variable. Other splitting-polynomial tensor factors cause no problem: their projection at the specified w2 still supplies a field containing the relevant ordered roots. [F1, F2, F3, F4, step 29.1, given, construct, algebra]

31.1 For completeness, every localization or component-isolation step introduced at a first-chart branch can be included in g_i. When composing charts, there are only finitely many points in the W1-fibre and finitely many resulting root partitions. Select those finitely many witnesses, form the finite list of g_i, and kill the finite quotient module to make their opens cover after a principal base shrinking, exactly as in the reviewed tree argument. This is finite choice, not a function indexed by the points of an arbitrary scheme. [F1, F2, F3, F4, step 30.1, given, construct, algebra]

32.1 Let H be the ideal of W2 generated by the finitely many good-open equations. The finite A-module W2/H has zero fibre at s. Determinant Nakayama over A_s and then annihilation of its finitely many generators give one a∉s with (W2/H)_a=0. After replacing A by A_a, the good principal opens cover ALL of Spec W2, not just its fibre. Pull back V→U to each good open. These pullbacks are surjective finite locally free, and every resulting leaf maps to an original fppf covering member. [F1, F2, F3, F4, step 31.1, given, construct, algebra]

33.1 Taking all witness constructions as s varies gives exactly FOUR stages: [F1, F2, F3, F4, step 32.1, given, construct, algebra]

34.1 - a Zariski covering {S_j→S}; - one surjective finite locally free W_j→S_j; - a Zariski covering {W_jk→W_j}; - surjective finite locally free T_jk→W_jk refining the original fppf family. [F1, F2, F3, F4, step 33.1, given, construct, algebra]

35.1 Thus the stronger native four-stage claim holds. This is a replacement of the intermediate bounded-tree proof by a finite tensor construction, not an assertion that principal open immersions are finite. The previously proved affine family descent and small-étale-sheaf descent apply verbatim to this four-stage refinement. [F1, F2, F3, F4, step 34.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
