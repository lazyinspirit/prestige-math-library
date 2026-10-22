# Necessity of retaining an identically infinite slope

This is a concrete knot/component certificate for the literal function-field finding in independent review cycle1. Full AC is allowed throughout. It is not an abstract matrix countermodel and does not replace the generic-family proof. The knot is the four-box pretzel **P(2,3,3,3)** with the positive-box convention of Zentner, *Representation spaces of pretzel knots*, arXiv:1012.2876v2, §2. Reversing its orientation or mirroring the entire convention does not affect the conclusion that the meridian class is zero and the slope infinite.

## 1. Actual knot group and the finite diagram

Label the top meridians s1,...,s4 as in Zentner PDF4–6. In box i put s=si and t=s(i+1)^(-1), cyclically. For p=2k+1 positive put

u=(ts)^(-k)s^(-1)ts(ts)^k,  v=(ts)^(-k)s(ts)^k;

for p=2k positive put

u=(ts)^(-k)s(ts)^k,  v=(ts)^(-(k-1))s^(-1)ts(ts)^(k-1).

The relations are vi u(i+1)=1. They follow by propagating a meridian through the two-strand twist using Wirtinger conjugation at each crossing. At a half twist the two bottom meridians are the top meridians interchanged with the conjugation dictated by that crossing; iterating twice conjugates both by ts. This gives exactly the displayed even/odd formula, including the initial odd extra crossing. The top connection of the right end of box i to the left end of box i+1 explains t=s(i+1)^(-1); the bottom connection gives vi u(i+1)=1. Thus eliminating the interior crossing generators from the Wirtinger presentation gives this presentation of the actual complement, not merely a quotient. The product v4u4 v3u3 v2u2 v1u1 is identically1 before the bottom identifications, so any one relation follows from the other three (also the full proof of Proposition2.1, PDF6). We use the first three; using all four has the same scheme ideal.

This diagram is one knot, not a four-component input. With TL,TR,BL,BR denoting box corners, its component runs

TL1, BL1, BR4, TL4, TR3, BL3, BR2, TL2, TR1, BR1, BL2, TR2, TL3, BR3, BL4, TR4, TL1.

These are all sixteen corners. Each box of odd parity swaps its two strands and box1 of even parity does not. The connections between boxes are exactly those in the displayed list. The sixteen-corner cycle verifies connectedness directly; round all corners and choose any orientation to obtain a smooth oriented knot in S3. Every si is a meridian up to orientation, which is enough below; replacing a meridian by its inverse changes neither trace0 nor vanishing of its local homology class.

## 2. An exact representation of that group

Use complex quaternions, with i²=j²=k²=ijk=-1 and scalar trace2q0. The unit complex quaternions are SL2(C), for example

i=diag(i,-i),  j=[[0,1],[-1,0]],  k=[[0,i],[i,0]].

For imaginary vectors z,w, their product is -z·w+z×w. Put c=sqrt(3)/2, b=(1+sqrt(6))/4, d=(-sqrt(3)+sqrt(2))/4 and assign

z1=(1,0,0), z2=(0,1,0), z3=(0,-1/2,c), z4=(-1/2,b,d).

All four have squared norm1: b²+d²=3/4. Consecutive dot products are 0,-1/2,-1/2,-1/2, since -b/2+cd=-1/2. Consequently (z1z2)²=-1 and (z2z3)³=(z3z4)³=(z4z1)³=-1. With zi²=-1, substitution in the even/odd box formulas shows that these common-power equalities are exactly vi u(i+1)=1; this is also the explicit simplification in Zentner Proposition3.3, PDF7. Hence these are actual meridian images of an actual knot representation rho. Already z1,z2 anticommute, so they generate the full matrix algebra and rho is absolutely irreducible. Its meridian trace is0, so it is non-boundary-parabolic.

## 3. A genuine complex curve of representations with constant meridian trace

Keep z1,z2 fixed and let

z3=(a,-1/2,c), z4=(-1/2,b,d),

a²+c²=3/4, b²+d²=3/4, -a/2-b/2+cd=-1/2.

At the point in §2 the derivative minor for the three equations with respect to (c,b,d) is 2c(2bc+d)=sqrt(6), which is nonzero. The holomorphic implicit function theorem therefore gives b,c,d holomorphically in a near a=0. Equivalently the three polynomial equations have a smooth algebraic curve germ there. Every point on it satisfies the same common-power relations of §2 and hence all the actual knot relators. These are distinct characters: tr(s1s3)=-2a is a local parameter. The curve is not merely a family of conjugates.

Allow simultaneous conjugation as well. The differential of conjugation has dimension3 because the common centralizer of z1,z2 in sl2 is zero. Its tangent image is disjoint from the curve tangent, since the trace tr(s1s3) is constant along every orbit but has derivative -2 along a. Thus the representation scheme has a four-dimensional analytic submanifold through rho, parametrized by three conjugation coordinates and a.

## 4. Full unfilled representation-scheme rank, with an exact certificate

This step checks the actual group, without imposing trace0 as an extra relation. Use variations delta(si)=Xi zi with Xi imaginary. For a word w write its left logarithmic derivative Z(w)=delta(rho(w))rho(w)^(-1). Then

Z(uv)=Z(u)+Ad(rho(u))Z(v),  Z(si^(-1))=-Ad(zi^(-1))Xi.

These formulas give the nine-by-twelve relator derivative matrix for the three actual relators of §1, three imaginary coordinates per relator. The executable `pretzel-rank-certificate.py` records every word and computes an eight-by-eight minor. Its entries belong to Z[1/2,sqrt(2),sqrt(3)]. Specialize this ring to F23 by sqrt(2)->5 and sqrt(3)->7. The point becomes

(1,0,0), (0,1,0), (0,11,15), (11,9,11).

Every relator is exactly1 under this specialization. With zero-based row indices (0,7,2,3,4,5,6,8) and column indices (0,1,2,3,4,6,7,9), the derivative minor has determinant10 in F23. The full nine-by-twelve matrix and all words are in `pretzel-rank-certificate.json`; the script uses only integer arithmetic modulo23. Hence that characteristic-zero minor is nonzero. This is a finite nonzero-polynomial certificate, not numerical evidence about rank.

The tangent dimension of the actual representation scheme in the twelve-dimensional smooth ambient SL2^4 is therefore at most4. Section3 gives dimension at least4, so tangent and local dimension equal4. The Jacobian criterion for the **actual** relator ideal proves regularity, including scheme regularity rather than merely smoothness of the reduced set. More concretely, choose the eight relator equations with this invertible minor. They cut out a smooth four-dimensional germ; the four-parameter family of §3 maps immersively into it and is locally open by the inverse function theorem. The remaining relator equation vanishes on that whole germ. Thus it introduces no thickening or additional component. This also proves that the local family fills the actual representation germ and that all nearby representations have meridian trace0. There is a unique irreducible representation component Z through rho, and tr(mu) is identically0 on Z. A regular function zero on the nonempty analytic open of an irreducible complex algebraic component is zero on that component.

## 5. The actual character component is a scheme-smooth curve generically

For completeness, the orbit quotient here needs no generic-smoothness conjecture for knot character schemes. In the neighborhood just obtained, tr(s1)=tr(s2)=tr(s1s2)=0 identically. The eigenvalues of s1 are the distinct constants i,-i. Its projectors (I∓i s1)/2 give a local diagonalizing frame. In that frame s2 has zero diagonal and two off-diagonal entries whose product is -1, since it anticommutes with s1. Diagonal rescaling makes its upper off-diagonal entry1 and its lower entry-1. This fixes (s1,s2) to a constant standard pair; a further constant conjugation takes it to the pair in §2. All these operations are holomorphic locally and use only inverses of units. They remain valid over local Artin C-algebras: the projectors split the rank-two module, a chosen nonzero coordinate remains a unit, and the off-diagonal normalization uses a unit. Thus this is a local scheme slice, not just a statement about complex points.

There is no residual conjugacy ambiguity in this slice: a matrix centralizing both first matrices is scalar. Moreover the coefficients of any remaining matrix in the basis I,s1,s2,s1s2 are recovered by the nonsingular trace Gram matrix from its four trace pairings. Consequently the normalized remaining matrices are recovered from character coordinates, also for infinitesimal coefficients. The character quotient germ is exactly the one-dimensional smooth slice of §3, with parameter a=-tr(s1s3)/2. In particular its local ring is regular and its representation is scheme-smooth in the stronger universal-relator sense used by BFR.

It lies on a full irreducible character component X, not just a curve in a higher-dimensional component. Each representation component is invariant under the connected conjugation group; its image in the affine quotient is closed, by the invariant-ideal quotient/Reynolds argument. If the curve image of Z were contained in another component's image, its point chi_rho would be in that image. An irreducible character has just its one closed conjugacy orbit in its fibre, so that other representation component would contain rho, contradicting the unique smooth representation component there. Hence X is an irreducible character component of dimension1. It contains a nonempty open of scheme-smooth irreducible characters. Non-boundary-parabolicity holds throughout because tr(mu)=0. The open properties may be intersected to give a nonempty dense Zariski open; X is irreducible.

## 6. Its meridian class is generically zero

On the scheme-smooth open just described, all infinitesimal representations are tangent to Z and therefore have d tr(mu)=0. Writing a tangent cocycle as Z(g)=delta(rho(g))rho(g)^(-1), this says

tr(Z(mu)rho(mu))=0.

The invariant peripheral coefficient u=rho(mu)-tr(rho(mu))I/2 is rho(mu) here. The trace pairing tr(VW) is nondegenerate and conjugation invariant on sl2(C). Pairing the actual local one-cycle u⊗mu with the local one-cocycle Z is precisely tr(u Z(mu)), which is zero by the preceding identity. The cocycle/word formula is the first-vertex local-cochain formula: concatenating loops gives Z(gh)=Z(g)+Ad(rho(g))Z(h), the convention already used in §4. Inner cocycles pair to zero because u is mu-invariant.

These cocycles detect all first homology: use the finite presentation-chain comparison to the actual exterior (not a spine assertion) and dualize its finite-dimensional degree0/1/2 complex by the trace form. Over C any functional on its homology extends to cycles and then to chains, producing a cocycle, so evaluation identifies H^1 with the full dual of H1. Equivalently, an element annihilated by every cocycle lies in the boundary subspace by finite linear algebra. Thus the actual meridian class [u⊗mu] is zero in H1(E_K;Ad rho) on this open. The cocycle dimension in §4 is4 and the inner-cocycle dimension is3, so H^1, and hence H1, has dimension1. No tangent-space theorem for a reduced character variety was substituted for this actual cocycle computation.

## 7. Admissibility and infinite slope in exactly the original scope

The meridian has trace0 and distinct eigenvalues, so the accepted explicit torus calculation supplies the two-dimensional torus H1 with ordered basis [u⊗lambda],[u⊗mu]. The actual kernel of the boundary inclusion has dimension1. Here is the full linear reason: the trace pairing identifies the dual local system with itself. Local-coefficient Lefschetz duality for the compact oriented collared knot exterior identifies H2(E,∂E) with H^1(E) and identifies the boundary map delta:H2(E,∂E)->H1(∂E) with the transpose of i_*:H1(∂E)->H1(E), up to an irrelevant sign. This compatibility follows from the cap boundary formula and ∂[E,∂E]=[∂E]. Therefore rank(delta)=rank(i_*). Exactness gives ker(i_*)=im(delta), so

2=dim H1(∂E)=dim ker(i_*)+rank(i_*)=2rank(i_*).

Hence rank(i_*)=dim ker(i_*)=1. This is precisely the original admissibility condition, with the same peripheral vector u and no extra regularity hypothesis. Since §6 places the nonzero torus vector [u⊗mu] in that one-dimensional kernel, the kernel is generated by it. In the original slope definition a[lambda]+b[mu] has a=0,b=1, so s=-b/a=∞. This holds on a nonempty dense open of the actual one-dimensional component X. The component therefore satisfies **all** hypotheses of the original rationality Statement, including scheme-smoothness, non-boundary-parabolicity and admissibility, but its generic slope is [1:0], not an element of C(X).

The projective rational-map assertion remains valid. The strongest uniform final clause is membership in P1(C(X)); when the generic point is not infinity, the slope belongs to C(X), and individual infinity values are poles of that rational function. This is a necessary literal correction, not an inference from absence of a finiteness proof.

## Actual proof inputs and reading limits

The source argument above uses the explicit finite group calculation, holomorphic implicit-function theorem, actual-ideal Jacobian criterion, accepted trace-coordinate/conjugacy/quotient constructions, actual presentation-chain comparison, accepted explicit torus basis, and local-coefficient cap/duality. The finite-word and rank calculations are supplied here. Actual full direct bodies read for the current work: holomorphic implicit-function theorem (3rows), actual-ideal Jacobian criterion (7rows), tangent-Jacobian kernel (5rows), compact-collared local-coefficient Lefschetz duality (6rows), the current presentation comparison and the previously independently accepted torus/trace/conjugacy/quotient bodies. The latter exact earlier-reading bindings remain in the owner packets; no new claim of reading every transitive supplier is made.

New primary reading is authentic Zentner arXiv1012.2876v2 PDF4–7: full §2 and Proposition2.1 proof, quotient setup and Proposition3.3 proof; PDF4–5 diagram images independently inspected. The local smoothness/component and slope argument above are not claimed as statements proved in that source. Additional exploratory acquisition of Paoluzzi–Porti1111.0933, Nagasato2007, Zentner1501.02504 and Porti2017 supplied context only; selected excerpts/introduction were read, not entire papers. BFR PDF6–13 actual selected full argument was reread for admissibility and the explicit conditional infinity discussion. That discussion alone was not used as a counterexample.
