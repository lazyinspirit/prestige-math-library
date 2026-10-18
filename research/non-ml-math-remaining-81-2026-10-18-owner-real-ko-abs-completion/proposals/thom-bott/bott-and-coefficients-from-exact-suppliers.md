# Complete downstream deduction from real Clifford–Thom to Bott and coefficients

Isolated proof proposal. The deductions below are complete **given the exact named earlier suppliers**. They do not constitute completion of those suppliers; the relative KO foundations, family connectivity/decomposition/uniqueness, ungraded Clifford–Thom theorem and Morita theorem remain separate authoring obligations. No source/table conclusion is smuggled into a Fact.

## Exact inputs and conventions

1. For finite CW pairs, the real bundle/triple model gives homotopy invariance, a natural reduced theory, quotient identification KO^0(X,A)=reduced KO^0(X/A), and compatible exterior products. For k>=0, KO^(-k)(X,A)=reduced KO^0(Sigma^k(X/A)); for an unbased space use X_+.
2. For an oriented Euclidean V of positive rank4m over finite CW X, the **ungraded** module group K_C(V)(X) maps isomorphically to KO_c^0(V) by the standard relative volume-symbol triple (Lambda+,Lambda−,c), which is the NEGATIVE of the EH Hopf bundle class minus its north-section pullback. Rank zero is the separate identity. This is `thm-real-clifford-thom-isomorphism` with its corrected exact domain.
3. For given spin V rank8m, real spinor Morita evaluation is an equivalence from real vector bundles to ungraded C(V)-module bundles; at rank8m+4 it is an equivalence from quaternionic vector bundles. The clutching construction commutes with tensoring by pulled-back real bundles and with the appropriate balanced quaternionic tensor. These are the exact two branches of `lem-real-and-quaternionic-spinor-module-morita-evaluation` and `thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp`.
4. Independent low clutching calculations give KO^0(pt)=Z, KO^-1(pt)=Z/2, KO^-2(pt)=Z/2, KO^-3(pt)=0 and KSp^0(pt)=Z, KSp^-j(pt)=0 for j=1,2,3. The actual proof must use stable pi0,pi1,pi2 of O and pi0,pi1,pi2 of Sp, not Bott or the desired table. That proof is assigned separately.

## Real Bott over all finite bases

Let R^8_X be the trivial oriented Euclidean rank-eight bundle with its standard given spin lift and real irreducible C_8-module Sigma. Put beta=Phi_(R8_pt)([Sigma]) in reduced KO^0(S8). The sign of beta is fixed by this actual relative triple, not selected retrospectively. For a real bundle E→X, Morita sends E to E⊗Sigma. Its volume eigenspaces are E⊗Sigma^± and its equatorial transition is id_E⊗c(v). The standard relative symbol is the negative of the EH north-section-corrected clutching class, with that sign used consistently at every base. Therefore the composite of Morita with Phi is literally exterior product

B_X:KO^0(X)→reduced KO^0(X_+ smash S8),  x↦x·beta.

Both component maps are isomorphisms by inputs2–3, hence B_X is an isomorphism for every finite CW X. This proves all-base real Bott directly from rank-eight real Thom; no complexification or coefficient table is used. Naturality follows from pullback of the displayed bundles, eigenspaces and transition; for virtual x it follows by group completion.

For a pointed finite CW Y, evaluation at its basepoint splits KO^0(Y) as reduced KO^0(Y)⊕KO^0(pt). The corresponding target restriction to {basepoint}_+ smash S8 is split by projection Y→pt. Naturality makes B_Y commute with these split maps, and B_pt is an isomorphism. An isomorphism commuting with split projections induces an isomorphism on kernels: surjectivity follows by lifting y in the target kernel, whose preimage must map to zero because the base map is injective; injectivity is inherited. Thus multiplication by beta restricts to an isomorphism reduced KO^0(Y)→reduced KO^0(Y smash S8).

For a finite CW pair (X,A), set Y=X/A with its quotient basepoint and apply that reduced statement. This gives KO^0(X,A)→KO^-8(X,A). For j=-k<=0, apply it to Sigma^k Y and use smash associativity to obtain multiplication by the SAME beta as an isomorphism KO^j(X,A)→KO^(j-8)(X,A). No extension of a partially defined positive-degree theory was assumed.

Define KO^j for positive integers by choosing t sufficiently large that j-8t<=0 and transporting through these isomorphisms. More formally, form the colimit of the groups KO^(j-8t) under inverse-direction notation chosen from B; since every transition is an isomorphism, each term maps isomorphically to the colimit. Any two choices are identified by a finite composite of the already proved natural Bott maps, giving a canonical group and natural pair maps. This extends the periodic cohomological grading without circularly assuming positive-degree periodicity.

## Multiplicativity and signs

Exterior product of actual relative triples is defined by the earlier product construction; its restriction to a trivial rank-eight spinor factor is exactly tensoring with that factor's symbol. Associativity therefore gives B(xy)=(xy)beta=x(ybeta) and (x beta)(y beta)=(xy)beta², after the canonical rearrangement of sphere factors. The rank-eight degree is even, so the graded commutativity interchange contributes (-1)^(8·degree)=+1; no hidden sign arises. The coefficient beta in degree-8 becomes invertible in the extended graded theory because B is a natural isomorphism, and tensor stabilization in either order is identified by these explicit exterior-product associators. This proves multiplicative periodicity as an operation on every finite pair and suspended degree, not merely abstract periodic equality of groups.

## Coefficients without circularity

The four low real groups and the four low symplectic groups in input4 are proved before this step. Apply the rank-four spin/KSp theorem to the trivial negative-square R4 bundle over every pointed finite Y. Its actual quaternionic spinor Hopf symbol gives an isomorphism KSp^0(Y)→KO^-4(Y), respecting basepoint restriction and therefore reduced groups by the same kernel argument above. Apply this to Y=Sigma^j S0 for j=0,1,2,3 to obtain

KO^(-4-j)(pt)=KSp^(-j)(pt).

Consequently the residues0through7 are Z,Z/2,Z/2,0,Z,0,0,0. The fourth row generator is the image of the quaternionic line class under that actual rank-four map, not an arbitrarily chosen abstract Z generator; the eighth-degree beta is the rank-eight spinor image fixed above. Multiplication by beta supplies the isomorphism in all further and all integer degrees by the all-base theorem. No coefficient table, orthogonal periodicity, complex Bott theorem or ABS comparison was used to prove these conclusions.

The ABS theorem must subsequently check its concrete low-degree parity-symbol maps land on these very generators and commute with beta; that separate check is essential. An abstract list of isomorphic groups would not establish the ABS homomorphism, its kernel, or its product. The Thom rank-four isomorphism is quaternionic-source KSp, not KO in the same unshifted degree.
