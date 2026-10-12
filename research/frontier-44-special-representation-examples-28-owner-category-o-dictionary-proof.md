# Translation, Struktursatz, reduction and multiplicity dictionary

Run: frontier-44-special-representation-examples-28, batch13.
Status: independent proof reconstruction under focused review; not a readiness
stamp. Uses the two owner proof notes for local projectives and the central order.
The universal all-T g-finite endomorphism theorem is not a prerequisite here.

## 1. Translation standard counts, over the local deformation too

Let v=lambda+rho be dominant regular, u=nu+rho dominant, and H=Stab(u).
Use the finite-dimensional translator whose extremal weight is u-v for
translation onto the facet and its ordinary dual for translation out.
Every finite-dimensional weight gamma has norm at most |u-v|, with equality
only on the extremal Weyl orbit, of multiplicity one. If
xu=yv+gamma, dominant norm-distance comparison gives
|xu-yv|>=|u-v|. Equality forces the singular orbit label xu to be yu,
so the only retained standard in translating Delta(y dot lambda) onto the
facet is Delta(y dot nu), once. In the opposite direction, equality for
xv=yu+gamma forces x in yH, and all |H| distinct extremal weights giving
x=yh do occur once. Thus translation out of Delta(y dot nu) has every
Delta(yh dot lambda), h in H, once. This is the general norm argument, not
an application of a single-wall-only Statement outside its hypotheses.

The same flags hold over R: the PBW tensor identity gives deformed factors
at the identical relative labels, and the finite central CRT projectors select
exactly those labels with the required special central character. Exactness
and both adjunctions follow from finite-dimensional tensor-Hom pairing and
these exact central projections.

P_nu has every distinct singular standard once. Translation out therefore
has every regular standard once and is projective. Adjunction with the simple
antidominant Verma shows its Hom to the regular antidominant simple is one-
dimensional: onto-facet translation of that simple Verma is the singular
antidominant simple, by the once-one-factor formula. The regular antidominant
projective splits off, and comparing the once-each flags proves equality.
Over R this identifies T_out P_R^nu=P_R^lambda by uniqueness of local
projective lifts. On generic constituents the resulting End map repeats the
scalar for a singular coset yH on each yh branch. Hence, under the established
central-order identifications, this map is precisely the inclusion
R^H tensor_{R^W}R -> R tensor_{R^W}R. Equality over the generic point implies
equality over R because the targets are torsion-free. The maps use the
shifted Harish-Chandra identifications for each highest weight, not literal
unchanged action of a fixed unshifted central element through tensoring.

## 2. Projective-injective objects in the ordinary block

Every simple submodule of a Verma in the regular integral block is the
antidominant simple. Indeed a simple L(x dot lambda) embedded in a Verma
would induce a nonzero map from its Verma Delta(x dot lambda), which is
injective by the Verma-homomorphism criterion. Unless x=w0, the latter Verma
has a proper embedded antidominant Verma and cannot map injectively through
its simple quotient. Its socle is therefore antidominant and has multiplicity
one by the Verma Hom dimension bound. Induction along a Verma flag shows
that every simple in the socle of a projective is antidominant.

Restricted duality identifies the indecomposable injectives with duals of
projective covers; their essential socles have their respective cover labels.
Consequently every projective-injective is a sum of copies of the
antidominant P. P is self-dual: it is already projective-injective by the
most-singular translation proof, and its unique essential socle has the same
antidominant label. The same argument applies in singular blocks.

In particular T_on P_lambda is a projective-injective and hence a sum of
P_nu's. Its standard flag contains each singular standard |H| times, so
T_on P_lambda=P_nu^{|H|}. Over R both sides are projective and specialize to
this identity; the local projective uniqueness/Hom base-change argument lifts
the isomorphism. No claim of injectivity of P_R over the nonfield R is needed.

## 3. The quotient functor and wall crossing

For any finite block with projective P and A=End(P), the exact functor
V=Hom(P,-) induces an equivalence of the quotient by ker V with finite
A-modules. Here is the local argument, valid over C and the deformed R.
The left adjoint is P tensor_A N, constructed from a finite presentation of
N as the corresponding cokernel of finite sums of P. Exactness of V and
VP=A give V(P tensor_A N)=N. The counit P tensor_A VM->M becomes the
identity under V, so its kernel and cokernel are killed by V. It is thus an
isomorphism in the Serre quotient. These unit/counit identities prove the
asserted equivalence and faithfulness on the quotient, rather than citing
an unproved quotient-category lemma.

Adjunction and T_out P_nu=P_lambda give
V_nu T_on = Res V_lambda, with scalar restriction along A_nu⊂A_lambda.
The reverse adjunction and T_on P_lambda=P_nu^{|H|} show both translation
functors preserve the relevant killed subcategories. Their exact biadjunction
therefore descends to the quotient module categories. The adjoint of
restriction is extension of scalars, which proves
V_lambda T_out = A_lambda tensor_{A_nu} V_nu.
For a simple wall H={1,s}, composition gives the wall-crossing formula.
At the closed fiber it is C tensor_{C^s}V; over R it is
R tensor_{R^s}(-) on the first polynomial factor of
A=R tensor_{R^W}R. Averaging identifies the image of S^s in C with C^s.
This proves the polynomial B_s tensor action and its right reduction;
B_s tensor_S C_residue remains dimension two, whereas the (C,C)-bimodule
C tensor_{C^s}C has dimension 2|W|. Centered self-dual degrees are -1,1.

## 4. Ordinary Struktursatz for every M and projective target

C is Frobenius: the proved coinvariant one-dimensional socle and perfect
multiplication/top-degree pairing identify C with its vector-space dual.
Thus C is injective as its own module. P is injective as proved above.
For simple M=L(x dot lambda), Hom(M,P) is one-dimensional only at the
antidominant label and zero otherwise; VM has the same support, with the
antidominant simple mapping to the one-dimensional trivial C-module.
Hom_C(VM,C) is the coinvariant socle at that label. The canonical map is
nonzero there (compose the projective-cover surjection with the essential
socle inclusion), hence an isomorphism on every simple. Both contravariant
functors are exact, so induction on a finite composition series proves
Hom(M,P)=Hom_C(VM,C) for arbitrary M.

The canonical maximal-weight Verma Delta(lambda) embeds in the once-each
flag of P, with Verma-filtered quotient. It is exactly the submodule K killed
by C_+: it is contained there by its scalar central character. If K were
larger, K/Delta(lambda) would be a nonzero submodule of a Verma-filtered
module, hence would contain the antidominant simple; exactness of V and
V Delta(lambda) of dimension one would give dim VK>=2. But inclusion VK⊂VP=C
places VK inside the socle of C, of dimension one. This contradiction proves
the equality K=Delta(lambda). Taking the C_+-annihilated subspaces in the
preceding Hom isomorphism therefore gives
Hom(M,Delta(lambda))=Hom_C(VM,VDelta(lambda)).

A projective functor F has exact left/right adjoint G. Both send the
projective-injective P to sums of P, so preserve ker V by adjunction.
They descend to an adjoint pair on the quotient C-module category. Therefore
Hom(M,FDelta(lambda))=Hom(GM,Delta(lambda))
=Hom_C(VGM,VDelta(lambda))=Hom_C(VM,VFDelta(lambda)).
Every projective is a direct summand of such an FDelta(lambda), by the local
projective generation/classification suppliers; extracting that summand
proves the stated Struktursatz. The same quotient equivalence proves its
faithfulness clause on the quotient. No Bruchat-maximal-constituent shortcut
or bare source Lemma5 is used.

## 5. Deformed full faithfulness on projectives

At a root DVR, the projective generator of a two-label component consists
of P_a=Delta_T(a) and the pair projective P_b. Besides its endomorphism
congruence order, the projective Hom base-change law gives each of
Hom(P_a,P_b) and Hom(P_b,P_a) free of rank one. The first is generated by
the canonical inclusion i. Choose j in the second lifting its nonzero
residual map; the latter has image the radical L(B) inside M(A). Thus
ij is nonzero on the residual P_b. The composite ji=h in T vanishes on the
residue field: otherwise the residual standard extension would split.
The two residual endomorphisms 1 and ij are linearly independent since ij
is nonzero nilpotent. By Nakayama they form a T-basis of End(P_b), whose
rank is two. In generic tuple coordinates ij=(h,0). The already proved
order has basis (1,1),(alpha,0), so h is a unit times alpha. Rescale j to
make h=alpha. This proves the required quiver relation rather than importing it.

Under V_T=Hom(P_b,-), P_b maps to the congruence order Z and P_a to the
rank-one T-module with the upper-branch Z action. Their four Hom spaces
are preserved: End(P_b)=Z; End(P_a)=T; Hom_Z(Z,T)=T generated by projection;
Hom_Z(T,Z)=T(alpha,0). The actual maps V(j) and V(i) are these respective
generators. Hence V_T is fully faithful on finite sums and summands of these
projectives. At nonroot primes and the generic point the assertion is the
ordinary one-label/semisimple Morita calculation.

Now let Q,Q' be deformed block projectives over R. Their ordinary Hom is
finite free by the constructed local interface, and V_R Q,V_R Q' are finite
free R-modules (use their Verma flags and the rank-one V_R standards).
Hom_A(V_R Q,V_R Q') is the intersection of its height-one localizations:
an R-linear generic map preserves the free target precisely when it does so
at every height-one prime, and A-linearity is the same finite collection of
polynomial-generator equations before/after localization. The ordinary Hom
has the same intersection property by freeness. The canonical map is an
isomorphism at every height-one prime by the preceding Hom tables, so is
an isomorphism over R. This proves deformed full faithfulness on projectives
without incorrectly asserting that P_R is injective.

## 6. Reduction-of-Hom for polynomial Bott–Samelson modules

For a polynomial Bott–Samelson bimodule B, right localization at the origin
M=B tensor_S R is finite free over R. Left denominators nonzero at0 act
invertibly: their matrices on this finite right-free module reduce to the
nonzero scalar times identity at the closed fiber and therefore are invertible
by the finite-End/Nakayama argument. Positive W-invariants have equal left and
right actions, so the two R-actions factor through A=R tensor_{R^W}R.
The deformed wall-crossing formula identifies these A-modules with V_R of
the corresponding projective words applied to the dominant deformed Verma.
The empty word maps to the identity graph branch R.

Localization of polynomial Hom is Hom_A between these modules: finite
right-free presentations express left-generator compatibility as finitely
many linear equations, and flat localization commutes with their kernels.
Deformed projective full faithfulness, arbitrary projective Hom base change,
and ordinary Struktursatz give, in order,
Hom_A(M,M') tensor_R C_residue
=Hom_O_R(Q_R,Q'_R) tensor_R C_residue
=Hom_O(Q,Q')=Hom_C(VQ,VQ').
This is exactly the natural reduction map, hence proves its surjectivity and
injectivity for Bott–Samelson modules. Taking direct summands proves the same
for all polynomial Soergel bimodules. All maps are the original canonical
composition maps, so their degree components give the graded assertion.
Thus Garnier Proposition4.13 is locally proved here through the algebraic
category-O route, not cited as a substitute for proof.

## 7. Reduced indecomposability and the label dictionary

Polynomial B_w has finite-dimensional local degree-zero endomorphism algebra
with residue Q, by the published graded classification and the top rank-one
support layer. Its radical is nilpotent: its descending powers stabilize,
and Nakayama on that stable finite module forces it to zero. Extension from
Q to C therefore keeps this algebra local with residue C, by the finite
geometric-series inverse modulo the nilpotent radical. This is the same exact
argument as the batch12 rational/real comparison, with C as target field.
The degree-zero endomorphism algebra of the reduced B_w is a quotient of
that local algebra, by section6, hence is local with residue C.

The following elementary finite-graded-algebra argument shows its full
ungraded End is also local. For a finite-dimensional Z-graded complex algebra
E with local E_0, the Jacobson radical J is graded: every grading-scaling
automorphism preserves J, and a finite Vandermonde combination projects to
each homogeneous component. The semisimple E/J is a product of matrix
algebras by Wedderburn–Artin. Its grading derivation D(a_d)=d a_d fixes every
central primitive idempotent and on each matrix factor is inner. Explicitly,
for matrix units take c=sum_i D(E_i1)E_1i; differentiating the matrix-unit
relations gives [c,E_ab]=D(E_ab). D is diagonalizable; the nilpotent part of
c would give the commuting nilpotent part ad(c_nil), which must be zero,
so c is diagonalizable up to a scalar. Its centralizer is a product of full
matrix algebras on its eigenspaces. Thus (E/J)_0 is semisimple. It is also a
quotient of local E_0, so is a single copy of C. This forces one matrix factor
of size one, hence E/J=C and E is local. This proof does not assume vanishing
of negative-degree Hom spaces or import an unproved rank formula.

Apply this to finite-dimensional End of the reduced B_w. It is local, so
that reduced module is indecomposable even after forgetting its grading.
Every polynomial Bott–Samelson decomposes into the B_w shifts, hence every
reduced Bott–Samelson decomposes into their reductions. The ordinary
Struktursatz identifies the projective category with their Karoubi envelope.
Along a reduced word, the unique new top-label projective is the new summand
of the corresponding reduced Bott–Samelson. The two indexing conventions
must be matched before identifying it: theta_{s_k}...theta_{s_1} gives the
right weight label s_1...s_k, while the left polynomial tensor word is
B_{s_k}...B_{s_1}, whose top graph label is the inverse. Thus
V P(w dot lambda)=bar B_{w^{-1}}. Top-support uniqueness and the projective
summand label identify the normalized lifts; no extra reduced splitting is
possible by the proved local End statement. The normalized polynomial B_w
supplies its self-dual auxiliary grading; the ungraded category O is recovered
by forgetting it. None of this supplies a graded category-O/Ext structure.

## 8. Every Verma multiplicity is the corresponding polynomial support rank

V_R is exact on finite deformed flags by projectivity of P_R. Its value on
each Delta_R(y dot lambda) is a free rank-one R-module: its closed fiber has
dimension [Delta(y dot lambda):L_antidominant]=1 by section1 of the central
proof, and the projective Hom/base-change law gives finite freeness. Center
acts on this standard by the scalar HC_rho(z)(yv+tau), so, in the established
A-order, the branch is f -> f(y^{-1}tau).

For the polynomial standard graph R_x of the published convention, the left
coordinate on a right parameter tau is x tau (right action is twisted by x).
Thus that deformed standard branch is the graph label x=y^{-1}. A polynomial
Soergel lift B(P) localizes on the right to V_R P_R by sections3,6,7.
The generic graph-support rank on each x is therefore the multiplicity of
the corresponding deformed Verma constituent at y=x^{-1}. The deformed flag
specializes exactly, so this is (P:Delta(y dot lambda)). Generic graph ranks
are the sums of the graded standard-layer multiplicities of the polynomial
lift. This proves the full individual multiplicity comparison at v=1.
Reduction to the origin supplies V(P) but collapses all graph supports;
no labelled support filtration intrinsic to the reduced module is asserted.


## Final auxiliary grading interface

Batch12 `def-invariant-intersection-form-on-a-bott-samelson-bimodule`, clauses5–6, supplies the actual nondegenerate centered reduced invariant form. Its finite invariance equations are rational. Their rational solution space extends to the real solution space; the determinant is a nonzero polynomial on that space, so an infinite-field rational point gives a nondegenerate form. Extension to C preserves its determinant. This proves graded self-duality of the reduction, not just of the polynomial object.

Any two finite graded lifts with the same indecomposable underlying C-module differ by a shift: decompose an ungraded isomorphism f and its inverse g into finitely many homogeneous components. The degree-zero identity is sum_d g_{-d}f_d. Since the degree-zero End algebra is local, some g_{-d}f_d is a unit. That f_d is a split graded injection, and ungraded indecomposability of the target forces it to be a graded isomorphism after shift. For finite support, a nonzero shift of a centered self-dual module cannot remain centered self-dual, by the symmetry of its extreme degrees; thus the centered normalization is unique.
