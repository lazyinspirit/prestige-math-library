# The relative angular fibering construction in dimension seven

This reconstructs the finite geometric moves in the fibering argument, rather than using a statement of the fibering theorem as its proof. The new algebraic input is the single-endomorphism case of `lem-finite-alphabet-nilpotent-endomorphisms-over-free-abelian-group-rings-have-trivial-reduced-k-zero`, under countable choice. Its author reports root acceptance; only its declared interface is used here. Reduced K₀(R)=0, free-abelian Whitehead vanishing, and the relative smooth s-cobordism product theorem are the other separately owned inputs. In particular every finitely generated projective R-module is stably free; this is needed when the reduced Nil presentation kills free zero-operator objects. No accepted provider was reread.

The actual full primary proof is F. T. Farrell, *The Obstruction to Fibering a Manifold over a Circle*, Indiana University Math. J. 21 (1971), 315–346, DOI https://doi.org/10.1512/iumj.1972.21.21024. All 32 pages were visually read, including the algebra in Chapter I, the connectivity changes in Chapter II, the duality in Chapter IV, and the geometric kernel construction in Chapter V. Official publisher download: https://www.iumj.indiana.edu/IUMJ/FTDLOAD/1972/21/21024/pdf . It is cached as `sources/farrell-fibering-full.pdf`; `farrell-01.png` through `farrell-32.png` are its pages. Larger images 24–29 retain the delicate kernel-exchange formulas. The 1967 announcement and four-page ICM contribution are not substituted for this full proof. The primary text explicitly says on printed 316 that the same proof works relative to a prescribed boundary fibration; that relative claim is accounted for below by keeping every move off the boundary collar.

## Exact input for the marked torus construction

Use M for the seven-dimensional nested-tube cobordism called W in the operation packet. Its two horizontal boundaries are E₀=P×S¹ and E₁=V×S¹, with P=B^k×T^n, k+n=5. Its side boundary is already a prescribed product. There is a map a:M→S¹ in the angular class, smooth and a bundle projection near the entire boundary. The elementary circle-bundle argument in the operation packet supplies this boundary normalization. Both E_i→M are homotopy equivalences, and the angular class gives the split exact sequence

1→H=Z^n→π₁(M)=Z^(n+1)→Z→1.

The corresponding infinite cyclic cover Y has homotopy type P, hence finite CW type. Required output is a smooth bundle projection p:M→S¹, equal to a on a neighborhood of the boundary and homotopic to a relative to that neighborhood. Corners are treated with the existing product collars and rounded away from them. Write R=Z[H]. The action of the quotient generator on H is the identity in this case.

## Framed cuts and their elementary changes

Make a smooth approximation to a in the interior, fixed on its boundary collar, and take a regular level. It is a compact, framed, properly embedded six-dimensional hypersurface N. The framing records which side is positive. Changing N by surgery across a smoothly embedded disk in the interior of M is a framed cobordism of cuts, supported in that disk's tube. Collapsing the framed normal interval to the circle gives a homotopy of the representing circle map, fixed outside that tube. Thus every change below preserves the full relative homotopy class of a, not just its absolute H¹ class.

Join the finitely many components of N by tubes along interior arcs; its nonempty inner boundary fiber P already supplies all generators of H. Hence the map π₁(N)→H is onto. Its kernel is finitely normally generated, since N is compact and H is finitely presented: use the typed presentation calculation in the end-splitting packet. Represent one normal generator by an embedded circle on N and choose an embedded spanning 2-disk in M, relative to that boundary circle, by seven-dimensional general position. Arrange transverse intersection with N; besides the boundary these are finitely many circles. An innermost such circle bounds an actual disk in one side of M, so TRADE its thickened disk across N (do not assert that the circle was nullhomotopic within N). Surgery kills that circle in the frontier group. It was nullhomotopic in M, hence in the kernel of π₁(N)→H; the quotient therefore still maps onto H. The dual handle has index five and introduces no new π₁ generator. The spanning disk now has one fewer intersection circle with the changed cut. After finitely many such trades its original boundary is the only intersection; trading the remaining disk kills the image of the selected normal generator. Update the remaining normal generators by their quotient images and repeat. The exact quotient presentations prove that the final kernel is zero. All disks and tubes are kept off the fixed boundary fiber collar. Thereafter N→Y induces a π₁-isomorphism.

The lift of N separates Y into negative and positive sides A and B. Choose the generating deck map T so that A⊂T(A); the intervening compact region C=T(A)−int A is M cut at N. Van Kampen, using N→Y as a π₁-isomorphism, shows that all of N, A, B, and C have the appropriate kernel group H. In particular their lifts to the H-cover are connected universal covers. The unbarred notation below means their cellular chains and homology with these R coefficients.

All needed homology modules are finitely generated over R. Here is an algebraic way to check the usual finite-domination step in this specific case. Triangulate Y so that A,B,N are subcomplexes. The degreewise split cellular sequence

0→C(N)→C(A)⊕C(B)→C(Y)→0

gives a chain-homotopy triangle. C(N) is finite free and C(Y) is chain-homotopy equivalent to a finite free complex because Y has finite CW type. Its middle complex is therefore chain-homotopy finite, by the mapping-cone construction. Since R is Noetherian, its homology is finitely generated. Direct summands give this for A and B, and the pair sequences give it for every relative module used below. This argument does not assume that a half-cover is itself compact.

## Producing a cut with only two adjacent handle indices

Say that N is j-connected on its negative side when H_i(Y,A)=0 for i≤j. The initial π₁ normalization gives j=1. Let Q=H_(j+1)(Y,A). Negative translation induces an endomorphism v on Q. Every finitely supported relative cycle eventually translates into A; hence v is locally nilpotent. Finite generation gives a common exponent v^m=0.

For x∈ker v, the exact sequence of A⊂T(A)⊂Y lifts x to H_(j+1)(T(A),A)=H_(j+1)(C,N). Represent that class by the exact prescribed-class disk operation now supplied by the independently accepted NEW end-splitting packet. Its input is a compact triad (C;N,T(N)), both frontier π₁-isomorphisms, N→C (d−2)-connected, a specified x∈H_d(C̃,Ñ) with base path and orientation, and a fixed side product collar; its output is a framed properly embedded d-disk with boundary on the CURRENT N, representing exactly x, and missing that collar. Trading it preserves lower relative groups, quotients degree d by Rx, and preserves the fundamental groups in its range 2≤d≤q−3. In the present induction d=j+1 and j=1,2,3, so the exact needed dimensions are 2,3,4 in q=7. The earlier upper bound five was an off-by-one overstatement: no arbitrary five-disk is needed or supplied. To check the connectivity input, the triple A⊂T(A)⊂Y and the current vanishing through j show H_i(C,N)=0 for i≤j−1=d−2; the frontier groups were normalized above. The operation introduces an auxiliary d/(d+1) pair, slides the chosen cycle onto its new core, and clears its lower belt intersections by the verified framed Whitney motions, rather than embedding a high-dimensional disk by general position. This move replaces the first nonzero relative module Q by its quotient by the generated x, without creating homology in lower degrees. Higher homology is allowed at this stage.

Choose finitely many generators of ker v and trade them. The new Q is Q/ker v, its induced translation has smaller nilpotence exponent, and the cut stays j-connected. Repeat until Q=0, then increase j. Applying this finite procedure on the opposite side up to j=4 yields a cut whose compact fundamental cobordism C has a handle presentation with only indices 2 and 3. Indeed the opposite connectivity removes indices above 3 by the dual handle simplification; π₁ normalization removes indices below 2. Precisely, an s-biconnected cut means that N→Y is a π₁-isomorphism, H_i(Y,A)=0 for i≤s, and H_i(Y,B)=0 for i≤7−s−1, with the corresponding universal-cover R coefficients. Relative handle simplification and its dual then give a compact fundamental cobordism with only indices s and s+1. The cases used are s=2,3, with 2≤s≤7−4.

For such a cut the sole possible relative half-cover homology is

P=H_(s+1)(Y,A).

It is a finitely generated projective R-module. One can see projectivity directly from the repeated two-index handle complex for (B,N), whose core modules may be countably generated free R-modules: H_s(Y,A)=0 makes its boundary map onto its free lower core module, so the boundary splits, and its kernel is a projective summand of the upper free core module. The preceding finiteness argument then makes that projective kernel finitely generated. Its translation v is nilpotent as above. The remaining task is to remove the pair (P,v) geometrically. Algebraic nilpotence by itself is not declared to give a fibration.

## The finite geometric kernel operation

Here is the precise move that realizes the needed algebra. Suppose

0→(P₂,v₂)→(P₁,v₁)→(P₀,v₀)→0

is exact in the category of finitely generated projective modules with nilpotent endomorphism. Suppose P₁ has a finite free filtration 0=F₀⊂F₁⊂⋯⊂F_m=P₁, each quotient free on one generator, with v₁(F_(i+1))⊂F_i. Suppose the current s-biconnected cut has pair (P₀,v₀). We construct a new (s+1)-biconnected cut with pair (P₂,v₂), using one index-(s+1) disk exchange per filtration generator.

After i exchanges let D be their compact union, let A′=A∪D, and identify H_(s+1)(D,N) with F_i by an injective map ρ which commutes with translation and whose composite with P₁→P₀ is inclusion into H_(s+1)(Y,A). Pick e with F_(i+1)=F_i⊕Re. Put b equal to its image in P₀ and let c∈H_(s+1)(A′,A) correspond to v₁(e)∈F_i. The key is to choose a relative class x in H_(s+1)(T(A′),A) having both prescribed properties

i′_*(x)=b,        T⁻¹_*(x)=c.

These properties are compatible because v₀(b) is the image of c. Here is the first required exact-sequence lift. Let q:H_(s+1)(Y,A)→H_(s+1)(Y,A′). The compatibility condition v₀(b)=image(c) implies q(v₀(b))=0. Translation identifies q∘v₀ with T⁻¹_*∘q_T, where q_T:H_(s+1)(Y,A)→H_(s+1)(Y,T(A′)); T⁻¹_* is an isomorphism from the latter group to H_(s+1)(Y,A′). Thus q_T(b)=0. Exactness of A⊂T(A′)⊂Y now gives a lift x₀∈H_(s+1)(T(A′),A) mapping to b. This uses only the stated compatibility, not surjectivity of that inclusion map. The difference c−T⁻¹_*(x₀) maps to zero in H_(s+1)(Y,A), so the triple A⊂A′⊂Y supplies z∈H_(s+2)(Y,A′) whose boundary is that difference. Translate z to T_*z∈H_(s+2)(Y,T(A′)) and set

x=x₀+∂′(T_*z),

where ∂′ is the boundary for A⊂T(A′)⊂Y. The added term maps to zero in H_(s+1)(Y,A). Naturality of the boundary maps gives T⁻¹_*∂′T_*z=∂z, so the second prescribed property holds as well. This explicit correction is what retains the endomorphism, rather than merely the underlying module.

Let y be the image of x in H_(s+1)(T(A′),A′). The current cut remains s-connected, so the same exact disk interface represents y by one actual framed handle in T(A′)−int A′: here d=s+1 is three or four, both current frontier groups are H, and the triple sequence gives the required (d−2)-connectivity. Its boundary stays on the current cut and its collar remains fixed. Exchange it and call the enlarged side A″. Its relative generator y″ first has SOME lift u₀∈H_(s+1)(A″,A), by the triple A⊂A′⊂A″ and the vanishing one degree lower for (A′,A). Its image in H_(s+1)(T(A′),A) and the specified x project to the same y in H_(s+1)(T(A′),A′). Their difference is therefore the image of a class v∈H_(s+1)(A′,A). Replace u₀ by u=u₀−L_*(v), with the sign chosen to subtract that difference. It still projects to y″ and now maps to EXACTLY x. The old summand embeds: the relative handle has homology only in degree s+1, so the preceding relative group is zero in the triple sequence. Consequently the short exact sequence splits as

H_(s+1)(A″,A)=H_(s+1)(A′,A)⊕Ru.

Extend ρ by ρ(u)=e. Its image is F_(i+1), and its composite with P₁→P₀ is still the inclusion map, because u maps to b. It still commutes with translation: on the old summand this is the induction hypothesis, and on u it is exactly T⁻¹_*x=c and ρ(c)=v₁(e). This completes the finite induction.

After m exchanges the triple sequence is

0→H_(s+2)(Y,A′)→P₁→P₀→0.

The explicit translation compatibility identifies the kernel pair with (P₂,v₂). All lower relative homology has vanished. On the opposite side each deletion of an index-(s+1) disk changes relative homology only in degree 7−s−1, by the dual core/cocore presentation of that handle. Hence the original opposite vanishing through 7−s−1 persists at least through 7−s−2, precisely the opposite connectivity required for an (s+1)-biconnected cut. Both handle indices, s+1 and 7−s−1, are at least three, so all the fundamental-group isomorphisms persist. Thus the new cut is (s+1)-biconnected. The only exchanged handles have indices s+1, with 3≤s+1≤4. Their cores, framings, Whitney corrections, and collars all lie in the interior; the prescribed boundary fibration is unchanged.

## Opposite cuts and realization of every defining Nil relation

Reversing the framing changes the s-index to 7−s−1. The following FINITE support calculation identifies its marked module pair; it does not dualize an arbitrary countably generated splitting of the half-cover complex. Let (P,v) be the current pair and (Q,w) the opposite pair. Both modules are finitely generated projective and both translations nilpotent by the same preceding two-index argument. Choose one integer m killing v and w. Put K_m=T^m(A)−int A, a compact union of m fundamental handle regions, with frontiers N and T^m(N).

The triple A⊂T^m(A)⊂Y has its map H_(s+1)(Y,A)→H_(s+1)(Y,T^m(A)) equal, up to the translation identification, to v^m=0. The preceding group H_(s+2)(Y,T^m(A)) is zero because the half-cover homology is isolated. Thus excision identifies P with H_(s+1)(K_m,N). The next part of that exact sequence identifies H_s(K_m,N) with the projective translated copy of P. Therefore the FINITE free core complex of (K_m,N), in degrees s,s+1, has the form

C_(s+1) --d--> C_s,      ker d=P,      coker d≅P,

with both kernel and cokernel projective. If J=image d, both exact sequences split: C_(s+1)=P⊕J and C_s=J⊕P. Consequently the dual finite complex has

coker(d*:Hom_R(C_s,R)→Hom_R(C_(s+1),R))≅Hom_R(P,R).

No assertion about a compact-support-preserving splitting of the infinite half-cover complex has entered this calculation. Negative translation maps the pair (T^m(A),A) to itself, by collapsing the part entering A. Its cellular approximation on the quotient K_m/N gives actual FINITE R-matrices v_s,v_(s+1), commuting with d and inducing v on P. Each matrix entry is a finite group-ring sum.

There is a literal identification between these finite R-dual matrices and compactly supported integral cochains on the H-cover of K_m. For an R-linear functional f take the coefficient of the identity element in f(g e) on each translated basis cell g e. Since there are finitely many R-basis cells and each group-ring coefficient has finite support, this is a finitely supported integral cochain. Conversely a finitely supported integral cochain recovers those finitely many coefficients. Under this identification the dual differential is the finite transposed matrix, with g replaced by g⁻¹ when changing from right to left R-actions. Thus the cochain group here is precisely the required compact-support group, not the full product of all integral cochains.

Relative core/cocore intersection in the compact K_m, or equivalently relative Poincare–Lefschetz duality on its H-cover with compactly supported cochains, identifies this dual cokernel with H_(7−s−1)(K_m,T^m(N)). The opposite triple B⊃T^m(B) identifies the latter with Q because w^m=0. The shift is retained as follows. Write j:(T^m(A),A)→(T^(m+1)(A),T(A)) for inclusion and F=T⁻¹ from the latter pair to the former; then v is induced by F∘j. On the opposite pairs let j′:(T(B),T^(m+1)(B))→(B,T^m(B)) be inclusion and F′=T in the other direction. The opposite operator w is induced by j′∘F′. Naturality of the finite core/cocore pairing makes j* correspond to j′_* and F* to F′_*, so v* corresponds to w. All four pair quotients are compact finite strips and all these maps have finite cellular support. The ambient M is orientable because its boundary inclusion is a homotopy equivalence and the boundary torus product is orientable; hence the deck map preserves orientation and there is no additional minus sign. The R-action still uses the stated involution g↦g⁻¹.

This defines the opposite pair Δ(P,v): the finite projective dual with its adjoint operator and involuted R-action. Duals of split exact sequences are exact, dual filtrations in the reverse order remain freely filtered and lowering, and evaluation P→P** is a natural isomorphism for finite projectives. Thus Δ is contravariant exact, preserves the triangular middle pairs used below, and Δ′Δ≅id, with the SHIFTED OPERATOR as well as the underlying module retained.


Every nilpotent projective pair P has an epimorphism from a freely filtered lowering pair F. For each generator z of ker v^i include a free chain e_i,…,e₁, map e_j to v^(i−j)z, and set v_F(e_j)=e_(j−1), v_F(e₁)=0. The union over finitely many generators and the finitely many i gives F→P. Its kernel is projective since the underlying epimorphism splits. This supplies the triangular presentations used in the next paragraph.

The reduced Nil group has the following presentation by objects and elementary relations: add a free module with zero endomorphism, or replace a short exact sequence by its direct sum of kernel and quotient. It is genuinely a group already at the object level modulo those relations. For 0→K→F→P→0 with F freely filtered, the filtration relations make F equivalent to zero, so K is an inverse of P. Consequently equality to zero in the reduced Nil group has a finite witness using these elementary relations; it is not an infinite cancellation assumption.

Here are actual geometric realizations of both relations. To add a free zero pair E to P, first use a triangular presentation 0→K→F→P→0 and the kernel operation to replace P by K. Reverse the cut, obtaining ΔK. Apply the kernel operation to

0→ΔP⊕E→ΔF⊕E→ΔK→0,

where the last map ignores E. Reverse again. Double duality gives P⊕E. The degree indices return to their starting value: s→s+1→7−s−2→7−s−1→s. Both intermediate kernel operations are admissible for 2≤s≤3. Removing E is the reverse of this sequence.

For an exact sequence 0→P→U→Q→0, choose an underlying R-linear splitting U=P⊕Q. Its operator has block form [[v_P,b],[0,v_Q]], whereas the direct sum has the same diagonal and b=0. Choose triangular presentations F_P→P and F_Q→Q. Lift either off-diagonal map b:Q→P to F_Q→F_P using the R-linear splittings, requiring that it vanish on ker(F_Q→Q). This produces two freely filtered lowering middle pairs on F_P⊕F_Q with the SAME kernel pair K_P⊕K_Q and respective quotients U and P⊕Q. They are freely filtered because one puts the entire F_P filtration before the F_Q filtration. Apply the kernel operation using the first middle pair, reverse the framing, use the DUAL of the second sequence to apply the kernel operation back to its desired quotient, and reverse once more. This replaces U by P⊕Q while retaining the boundary germ and the admissible index range. This is the geometric realization of the exact-sequence relation.

The accepted single-endomorphism Nil vanishing identifies [(P,v)] with [(P,0)] in the Nil Grothendieck group. Since reduced K₀(R)=0, choose finite a,b with P⊕R^a≅R^b; the free-zero relations then identify (P,0) with zero. Therefore our pair (P,v) equals zero under the displayed reduced object relations. Follow its finite witness and the just-constructed geometric realizations. The terminal cut has module zero. Thus the finite geometric work needed to turn algebraic Nil vanishing into a cut has been given explicitly; no blanket “splitting of a homotopy equivalence” or “Farrell fibering” conclusion is inserted here.

## The terminal cut gives the required relative fibration

At the terminal cut, H_*(Y,A)=0 and π₁(N)→π₁(Y) is an isomorphism. Translation gives the same for T(A). Hence the triple sequence shows H_*(T(A),A)=0. Excision identifies this with the lifted relative homology of the compact fundamental region C=T(A)−int A, relative to N. Its other frontier T(N) has the same fundamental group. Dual core/cocore chains give acyclicity relative to that frontier too. Therefore C is an actual compact smooth h-cobordism between N and T(N), with group H=Z^n and the unchanged side product.

Wh(H)=0 and the relative smooth s-cobordism product theorem now provide a product C≅N×[0,1], equal to the already prescribed interval coordinate on its side boundary. Glue its two ends by the original deck identification. This exhibits M as the mapping torus of a diffeomorphism of N and gives a smooth bundle projection p:M→S¹. Because all cuts changed by framed interior cobordisms, the circle map remains homotopic to a relative to the complete boundary collar. The product was chosen to match the prescribed boundary interval coordinate, so p itself equals a there.

For the KS use, pull this bundle back to the universal cover R→S¹. A bundle over R is a product. The boundary inclusions lift as homotopy equivalences, so contracting the R-factor proves that each six-dimensional fiber is an h-cobordism from V to P, relative to its side boundary. Its group is Z^n. Whitehead vanishing and relative smooth s-cobordism make that fiber a product. This is exactly the angular-fiber input needed by the nested-tube motion; it does not cancel either of the two auxiliary base circles.

## Boundaries, products, and choice

There are only finitely many handle exchanges in the proof for the compact M. None is allowed to touch its fixed boundary collar. The start already carries the two horizontal boundary fibrations and the side product, so every spanning disk and Whitney move is taken relative to those collars. The framing cobordisms preserve the RELATIVE circle-map class, which avoids the false inference that equality in absolute H¹ alone implies a homotopy fixed on two boundary components.

The finite Nil witness and each finite list of generators require only finite choices once the input countable smooth atlas and cellular data have been fixed. The cited Nil helper permits CC. No independent unrestricted-choice assumption is introduced here. The proof does not claim the earlier original-dimensional two-ended pair engulfing E; that remains the outstanding geometric bridge in the marked torus pipeline.
