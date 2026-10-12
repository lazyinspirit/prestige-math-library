# Base hard Lefschetz and nonmiddle polarizations: exact induction deduction

This is a local proof component of the owned joint-package construction. It is conditional on the stated hyperplane map interface, not a claim that the whole projective induction has already been proved. No new ID, item home or metadata edge is added. Full final dcM5.2.1–5.3 and the corresponding fixed source/target hyperplane clauses4.7.6–4.7.7 have actually been read.

## Exact geometric interface

Take f:X→Y, X smooth projective of dimension n, source very ample eta, and L=f^*A for a target very ample class A. The preceding relative-HL stage supplies the finite perverse splitting, relative eta strings, and semisimplicity outside perverse degree0.

For k general source hyperplanes, write X_k and f_k. Restriction maps pH^(b−k)K→pH^bK_k are isomorphisms for b<0 and split monomorphisms for b=0; Gysin maps pH^bK_k→pH^(b+k)K are isomorphisms for b>0 and split epimorphisms for b=0. Their composite is eta^k. The fixed-general defect calculation gives r(f_k)≤r(f)−k for1≤k≤r(f). The perverse amplitude is inside[−r(f),r(f)]: the fiber-dimension support computation used for the defect-zero case gives K∈pD≤r(f), and self-duality gives the lower bound. Thus source cuts outside that range are unnecessary.

For j general target hyperplanes, write X^j and f^j. The source is smooth projective by basepointfree Bertini, and defect does not increase while image dimension decreases by j. The exact noncharacteristic pullback is i^*K[−j]=K^j and commutes with eta primitive kernels. The restriction/Gysin maps on the degree0 graded cohomology have the following precisely indexed one-step projective perverse weak-Lefschetz bounds. For a perverse object P on Y and P_1=i^*P[−1], R:H^ell(Y,P)→H^(ell+1)(Y_1,P_1) is an isomorphism for ell<−1 and a monomorphism at ell=−1. The dual G:H^(ell−1)(Y_1,P_1)→H^ell(Y,P) is an isomorphism for ell>1 and an epimorphism at ell=1. Thus the index in the Gysin bound is its target index, not its source index. Their compatible composite is L^j.

These are the precise geometric inputs, not additional consequences asserted of an unspecified “standard Lefschetz theorem.” Absolute Artin plus the open/closed triangle gives target weak Lefschetz because the complement of a target hyperplane is affine, and the noncharacteristic supplier gives the shifted restriction. Fixed-source relative weak Lefschetz comes from the universal-family affine complement and a general noncharacteristic parameter slice. Generic slices must be chosen transverse to all finitely many relevant algebraic strata; the actual strata supplier and Bertini/generic-smoothness clauses must justify this choice. The source divisor Thom/Gysin identities and tensor-line Chern normalization are the explicit pending comparison identified in the separate relative-HL note.

## Base hard Lefschetz outside perverse degree0

For b=−k<0, the source-cut restriction identifies H_b^m(X) with a direct summand of H_0^m(X_k). All its projection maps live on Y, so they commute with the target cup class L by naturality. The lower-defect inductive package gives L-HL on X_k about the center dimX_k=n−k=n+b. The restriction and its inverse preserve this direct summand, giving L^j:H_b^(n+b−j)→H_b^(n+b+j) isomorphically. For b=k>0, use the dual source-cut Gysin identification with the same summand shifted in ordinary degree by2k. Its center becomes n−k+2k=n+b. Degrees outside the perverse defect amplitude vanish, so this proves every b≠0 case.

In particular ker(L:H^(n−1)→H^(n+1)) is contained in F_0H^(n−1). Indeed the finite derived splitting makes L block diagonal on perverse grades. In each b>0 block the ordinary degree n−1 lies strictly below its center n+b, so the already proved L-HL makes its first power injective. There is therefore no positive-grade component in the kernel. The same block decomposition makes L strict for the perverse filtration: kernels and images are direct sums of the respective graded kernels and images. This is finite-dimensional filtration strictness, not a hidden mixed-Hodge strictness assertion.

## Degree0: powers at least2

Choose one general target hyperplane and its smooth source X^1, of dimension n−1. The image dimension is lower and defect no larger, so its full package is an induction hypothesis. For j≥2, target weak Lefschetz makes the restriction H_0^(n−j)(X)→H_0^(n−j)(X^1) and the Gysin H_0^(n+j−2)(X^1)→H_0^(n+j)(X) isomorphisms. The inductive middle map is L^(j−1) about the center n−1. Its composite with restriction/Gysin is precisely L^j, proving the desired isomorphism.

## Degree0: the first power

Let alpha∈H_0^(n−1)(X) satisfy L alpha=0. The canonical eta primitive decomposition writes alpha=Σ_(t≥0)eta^t alpha_t, with alpha_t in the eta-primitive perverse grade−2t and ordinary degree n−1−2t. Each projection commutes with L, so L alpha_t=0. For t>0, its ordinary degree is one below its L-Lefschetz center n−2t. The nonzero-grade case just proved makes that first L map an isomorphism; hence alpha_t=0. Thus alpha is eta-primitive.

Filtration strictness and kerL⊂F_0 give an actual lift a∈kerL⊂H^(n−1) of alpha. Decompose a into its ordinary Hodge types using classical Hodge theory on X. Every type component is still in kerL because L has type(1,1), and hence in F_0 by the preceding kernel bound. If alpha were nonzero, at least one component would have a nonzero class in H_0^(n−1); replace a by it and alpha by its class. No Hodge structure on the original perverse filtration has been assumed at this point. The argument just given again makes this alpha eta-primitive.

Target weak Lefschetz injects alpha into H_0^(n−1)(X^1), and noncharacteristic primitive compatibility makes the restricted class eta-primitive and L-primitive there. It is a nonzero class in the lower-induction middle double primitive space. It is of pure Hodge type: ordinary holomorphic restriction preserves type, and the lower-induction perverse filtration is Hodge. The lower-induction polarization therefore makes its integral against its conjugate nonzero, up to the specified nonzero Weil/sign factor. But the exact target-divisor Gysin formula gives

∫_(X^1) a|_(X^1)∧bar a|_(X^1)=∫_X L a∧bar a=0,

a contradiction. Thus the first L map is injective. Perverse self-duality gives equal finite dimensions in degrees n−1 and n+1, so it is an isomorphism. This completes graded L-HL with no use of the original middle primitive positivity.

## The Hodge perverse filtration

The now proved L-HL identifies the total perverse filtration with the centered nilpotent filtration. Its intrinsic kernel/image formula is Hodge degree by degree because powers of L have fixed Hodge type. This is the full formal argument recorded in the graded-middle-inputs proof. Therefore the original perverse graded spaces are now pure of their ordinary cohomological degrees. It is legitimate to use their Hodge structures in the remaining nonmiddle restriction argument; doing so in the preceding first-power contradiction would have been circular.

## Nonmiddle polarization when the eta index is positive

Let u belong to P_(−i)^(−j), with i≥1,j≥0. Restrict to i general source hyperplanes, obtaining an injective map into degree n−i−j on X_i, in perverse grade0. The injection on cohomology follows from the split monomorphism of perverse sheaves; its maps commute with L. It preserves Hodge type because the original and lower-induction perverse filtrations are now Hodge and ordinary restriction is a Hodge map.

The restricted class is eta-primitive. Indeed apply Gysin to eta times its restriction. The compatible cup identity gives eta^(i+1)u=0. Gysin on the positive perverse degree2 of X_i is an isomorphism by relative weak Lefschetz, so eta of the restricted class is zero. It remains L-primitive because restriction commutes with L and L^(j+1)u=0. Thus it lands in the lower-induction double primitive space of indices(0,j). The lower map f_i has smaller defect and its full polarization package is already known. Its form pulls back exactly to

∫_(X_i) L^j u|_(X_i)∧v|_(X_i)=∫_X eta^i L^j u∧v.

Consequently the required nonmiddle primitive form is a positive polarization on the original Hodge subspace, with the exact inherited degree sign. It is nondegenerate. No ordinary globally eta-primitive lift is claimed: the argument uses canonical graded primitive kernels and the perverse Gysin isomorphism.

## Nonmiddle polarization when the eta index is0

For j≥1, restrict a double primitive class u of degree n−j to j general target hyperplanes. The successive target weak-Lefschetz restrictions are isomorphisms until the last step, which is a monomorphism, so the resulting map into H_0^(n−j)(X^j) is injective. Its source map f^j has smaller image dimension and no greater defect. Noncharacteristic pullback preserves eta-primitive kernels. The restricted class is also L-primitive: Gysin of L times that restriction is L^(j+1)u=0, and the successive Gysin maps from degree2 above the lower middle are isomorphisms. Hence it lands in the lower-induction middle double primitive space. Its polarization pulls back by the compatible divisor identity to ∫_X L^j u∧v. This proves the remaining nonmiddle forms. If j is larger than m=dim f(X), make only m general target cuts. Every successive restriction in this case is an isomorphism, because its source hypercohomological index remains below−1 until the last step. The final index is m−j<0 on a perverse object supported on the finite zero-dimensional image. That object is a finite sum of point-supported heart objects and has hypercohomology only in degree0. Thus the original class space was zero. For m=0 this is already the point-image base case. This proves the large-j boundary directly from the stated hyperplane maps and ordinary point perverse heart, without adding an unproved perverse amplitude estimate.

## Completion boundary

This proves the ordered conditional deductions for graded base HL, Hodge purity of the perverse filtration and nonmiddle primitive polarizations. Their exact geometric restriction/Gysin/transversality inputs remain necessary and are explicitly stated. Together with the completed graded-middle-input verification and middle-limit lemma, these stages would supply all primitive polarizations before the refined fiber intersection and moving-family semisimplicity stage. The local Morse product and source Thom/Gysin comparisons are not silently replaced by citation.
