# Odd-primary and finite-generation suppliers for Thom detection

This is a proposed dependency-ordered supplier draft for the approved
supporting AT pair. All assertions below assume AC where the cited
published bundle, Eilenberg–Mac Lane, coefficient or basis suppliers do.
All homology is singular homology; cohomology of a Thom space is reduced
unless stated otherwise. Put MO(r)=Th(γ_r) and MSO(r)=Th(γ_r⁺).
The rank r is positive unless a separate rank-zero convention is stated.

## Source audit and the endpoint

I fetched and read the full text of Tom Weston, *An Introduction to
Cobordism Theory*, §§12–13 and §17, especially Proposition 17.1 and
Corollary 17.2, printed/PDF pp. 23–25 and 31–32:
https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf .

Proposition 17.1 computes BSO(r) over an integral domain containing 1/2;
Corollary 17.2 computes BO(r) by the orientation cover and its deck
invariants. Neither statement gives an untwisted Thom isomorphism for
the unoriented universal bundle with odd-primary coefficients. That bundle
has a nontrivial orientation local system. The correct Thom calculation is

    H~^*(MO(r);R)=0                                if r is odd,
    H~^*(MO(2m);R) ≅ u e R[p₁,…,p_m]              if r=2m,

as graded R-modules, with |u|=r, |e|=r and |p_i|=4i. Thus
H~^i(MO(r);R)=0 for i<2r, but H~^{2r}(MO(r);R)=R for even r.
The notation u e on the right means an invariant class upstairs in the
oriented Thom space; it does not postulate a global odd-primary Thom class
u on MO(r).

This is a real endpoint failure. For example MO(2) has a nonzero
degree-four class u e, although its reduced cohomology vanishes below four.
MSO(r) is different: H~^r(MSO(r);R)=R for every r>0. Neither the BSO
cohomology groups nor oriented Thom cohomology satisfy the unoriented
vanishing assertion.

Weston's §13 comparison uses endpoint inequalities written with ≤2r.
Mixed products of two degree-r Eilenberg–Mac Lane generators also first
occur in degree 2r. Those products cannot be discarded there. The
metastable comparison used for this support pair must be restricted to
degrees strictly below 2r. Likewise Weston's Corollary 17.3, without a
stable-rank qualification, overlooks the even-rank Euler generator:
H²(BSO(2);Q)=Q. Its partition rank formula applies in the stable range
i<r, not indiscriminately to every degree of every finite-rank BSO(r).

The finite-generation cone argument below needs no comparison in degree
2r. It uses integral finite generation and field cohomology in the actual
proved degrees. It must not be replaced by an unsupported injectivity claim
one degree beyond the comparison range.

## Published supplier interfaces inspected

1. CW and Eilenberg–Mac Lane interfaces:
   `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`;
   `thm-mapping-path-factorization`;
   `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`;
   `lem-covering-homotopies-lift-by-finite-local-strips`;
   `thm-cw-approximation-of-an-arbitrary-space`;
   `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`;
   `cor-contractible-nonempty-spaces-have-the-homology-of-a-point`;
   `thm-homological-serre-spectral-sequence`;
   `thm-absolute-hurewicz-theorem` and
   `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`;
   `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`;
   `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology`.
2. Grassmannian and bundle interfaces:
   `def-oriented-grassmannian-and-tautological-oriented-bundle`;
   `thm-stable-stiefel-space-is-contractible`;
   `def-schubert-cells-in-real-and-complex-grassmannians`;
   `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`;
   `thm-cellular-homology-computes-singular-homology`;
   `thm-cellular-chains-compute-homology-with-local-coefficients`;
   `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`;
   `thm-cellular-cochains-compute-cohomology-with-local-coefficients`;
   `lem-compact-cw-images-have-finite-cell-support-without-choice`;
   `thm-excision-for-singular-homology`;
   `thm-relative-homology-of-consecutive-cw-skeleta`;
   `thm-homotopy-invariance-of-vector-bundle-pullback`;
   `lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`.
3. Characteristic-class and Thom interfaces:
   `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`;
   `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion`;
   `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`;
   `thm-top-pontryagin-class-is-the-square-of-the-euler-class`;
   `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`;
   `thm-thom-isomorphism-for-oriented-vector-bundles`;
   `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`
   (including its orientation-local-system clause);
   `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`;
   `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`;
   `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`;
   `thm-gram-schmidt-orthonormalisation`;
   `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence`;
   `thm-cover-small-singular-chains-compute-singular-homology`;
   `thm-a-filtered-complex-produces-an-exact-couple`;
   `thm-an-exact-couple-generates-a-spectral-sequence`.
4. Coefficients and finite modules:
   `thm-universal-coefficient-theorem-for-homology-over-a-pid`;
   `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`;
   `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`;
   `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`;
   `cor-principal-ideal-domains-are-noetherian`;
   `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`;
   `thm-invariant-factor-decomposition-over-a-pid`;
   `thm-topological-kunneth-short-exact-sequence-for-homology`;
   `cor-field-kunneth-isomorphism-for-homology-of-products`.
5. Transfer and cone interfaces:
   `lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`
   (its **published statement is rational only**; the coefficient upgrade
   is proved below rather than silently applying it to F_p);
   `def-mapping-cone-of-a-chain-map`;
   `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact`;
   `thm-the-cone-long-exact-sequence`;
   `thm-long-exact-sequence-in-homology`.

## Proposed local item 1: finite-cover transfer with inverted degree

For a finite regular d-sheeted cover p:Y→X of path-connected CW spaces,
and a commutative ring R with d invertible, pullback identifies
H*(X;R) with H*(Y;R) invariant under the deck group G.

Proof. On integral singular chains define τ(σ) as the sum of all d lifts
of σ. The contractible simplex admits a lift for each point of the fiber
over one vertex, and uniqueness of lifts shows these are all the lifts.
Restriction to a face bijects these lift sets, so ∂τ=τ∂. This is precisely
the chain construction proved in the published rational-transfer supplier;
it precedes and is independent of its choice of coefficients. Precomposing
R-valued cochains with τ gives T with Tp*=d id and p*T=Σ_{g∈G}g*.
Thus p* is injective. Every pullback is invariant, and for invariant y,
p*(d⁻¹Ty)=y. The ring identification follows from multiplicativity of
pullback; transfer itself need not be multiplicative. This proves the
upgrade over R, including R=Q and R=F_p with p∤d. ∎

For a double cover with deck involution σ and 2 invertible, the sign local
system downstairs corresponds to the anti-invariant cochain subcomplex
upstairs. To verify this without invoking an unproved transfer with local
coefficients, choose a lift of each singular simplex: the local-coefficient
cochain assigns a coefficient in its orientation line; changing that lift
changes its signed coordinate. Hence it corresponds exactly to an ordinary
cochain c satisfying σ*c=−c. Transport along faces gives the ordinary
cochain differential in these coordinates. The idempotents
(1±σ*)/2 split the entire cochain complex into its two eigenspaces;
therefore cohomology of the anti-invariant subcomplex is the anti-invariant
part of cohomology. This gives

    H*(X;O_R) ≅ H*(Y;R)^−.

This applies also when the spaces or cochain groups are infinite: the
idempotents, not a finite-dimensional averaging argument, give the splitting.

## Proposed local item 2: exact finite-type facts for K(F₂,q)

For each q≥1 choose a based CW model K_q=K(Z/2,q). Then every
H_n(K_q;Z) is finitely generated. For n>0 these groups are finite
2-primary groups. For any field F of characteristic different from two,

    H_n(K_q;F)=0=H^n(K_q;F)       for n>0,
    H_0(K_q;F)=F=H^0(K_q;F).

In particular the rational and odd-prime conclusions hold in every degree,
and hence in the finite range needed for Thom detection. With F₂
coefficients the groups are finite-dimensional in every degree;
H^i(K_q;F₂)=0 for 0<i<q and H^q(K_q;F₂)=F₂. Integral positive-degree
cohomology is also finite 2-primary. These are assertions of **homological
finite type**. They do not assert that an arbitrarily chosen CW model has
finitely many cells in each degree.

Proof of the base case. Take K_1=BO(1)=RP∞. Its orientation double cover
is BSO(1)=V_1(R∞), contractible by the published stable-Stiefel theorem.
The oriented-Grassmannian definition supplies this literal double cover.
The covering homotopy lifting and fibration long exact sequence give
π₁=Z/2 and no
higher homotopy groups. The Schubert CW construction has one cell in
each nonnegative degree (rank-one symbol a₁=d+1); thus its integral
cellular chains are finite free in each degree. Cellular homology and
Noetherian submodules give integral finite generation. Item 1, with d=2,
identifies its F-cohomology with that of its contractible cover, hence it
vanishes in positive degrees. Field evaluation UCT identifies cohomology
with the dual of homology; a nonzero vector has a nonzero functional under
AC, so field homology also vanishes. Marked homotopy uniqueness transports
all these facts to any chosen CW model. ∎

Proof of the induction step. Use the actual mapping-path fibration
ΩK_q→PK_q→K_q with contractible total space. Its fibration long exact
sequence makes the strict loop fiber path connected and gives its only
nonzero homotopy group as Z/2 in degree q−1. To compare its homology
with that of K_{q-1}, no imported CW-type-of-fibers theorem is necessary:
take the published weak CW approximation L→ΩK_q. It is connected and
has precisely these homotopy groups, so the published marked CW-model
uniqueness gives a homotopy equivalence K_{q-1}→L. Their composite is
a weak equivalence to the strict loop fiber. The inspected weak-equivalence
homology theorem identifies its integral homology with H_*(K_{q-1};Z),
and coefficient UCT makes the same comparison over each field. This
makes the strict-fiber comparison fully local: its only ingredients are
the mapping-path fibration, its homotopy exact sequence, weak CW
approximation, marked CW-model uniqueness and coefficient UCT. No
CW-type-of-fibers theorem or strict-fiber homotopy equivalence is used.
For q≥2 the
base is simply connected, so the homological Serre system is constant.
Suppose integral homology of K_{q-1} is finitely generated in every degree.
Prove H_s(K_q;Z) finitely generated by induction on s. H₀=Z and H₁=0.
For s>1 the bottom-row term E²_{s,0}=H_s(K_q;Z) has no incoming
differentials. Its outgoing differential on page a has target
E^a_{s-a,a-1}, 2≤a≤s. The target is a subquotient of
H_{s-a}(K_q;H_{a-1}(K_{q-1};Z)). The coefficient UCT expresses this
group as an extension of a tensor product involving H_{s-a}(K_q;Z)
and a Tor group involving H_{s-a-1}(K_q;Z). Both base degrees are
smaller than s, and both coefficient groups are finitely generated.
The PID decomposition makes their tensor and Tor groups finitely
generated; Noetherianity makes every target and image finitely generated.
There are only finitely many such pages, and E∞_{s,0}=0 because the
total space is contractible. The successive kernels therefore filter
H_s(K_q;Z) with finitely generated image quotients and zero final kernel.
Finite extensions prove the assertion. This is a reverse finite-generation
argument, proved here; the published Serre finite-generation transfer alone
does not assert it.

For coefficients in F, induction makes the fiber homology F in degree
zero and zero elsewhere. The homological Serre sequence consequently has
only its bottom row and no possible differential. Its contractible
abutment forces the positive base homology to vanish. Field UCT gives the
cohomology assertion. Integral homology UCT injects
H_n(K_q;Z)⊗F into H_n(K_q;F). Taking F=Q removes the free part;
taking every odd F_p removes each odd-primary summand in the finite
abelian-group decomposition. Thus each positive group is finite 2-primary.
Integral cohomology UCT and the cyclic free resolution show the same
for positive integral cohomology. With F₂ coefficients tensor and Tor
of finite groups are finite-dimensional; the first nonzero degree and
lower vanishing follow from ordinary Hurewicz and evaluation UCT (for q=1,
use abelianization). This completes the induction. ∎

No mod-two metastable operation-basis theorem is proved by this item:
identifying H^{q+i}(K_q;F₂) with admissible Steenrod operations for i<q
remains a different supplier. Integral cohomology must not be identified
with that F₂-vector space merely because the integral groups are 2-primary.

## Proposed local item 3: away-from-two BO and BSO

Let R be a nonzero commutative ring with 2 invertible. For m≥1,

    H*(BSO(2m+1);R)=R[p₁,…,p_m],
    H*(BSO(2m);R)=R[p₁,…,p_{m-1},e],     p_m=e²,
    H*(BO(2m);R)=H*(BO(2m+1);R)=R[p₁,…,p_m].

Here |e|=2m and |p_i|=4i. BSO(1) is contractible; BO(1) has
cohomology R in degree zero only by item 1. Rank zero is a point.
This includes Q, every odd F_p and Z[1/2]. The proof below avoids
extending a rational dimension argument to a ring without justification.

Proof of the CW prerequisite. Lift the supplied Schubert structure of
BO(r) through its orientation double cover. For each characteristic map
χ:D^p→BO(r), the pullback double cover over the contractible disk has
two sheets: the covering lifting criterion constructs a lift from either
point over its center, and uniqueness shows that these are the two lifts.
Choose the two labels for each cell under the already assumed AC. Each
lift is a characteristic map for an open cell mapping homeomorphically
to the corresponding base open cell; its boundary lands over the lower
base skeleton. These supply the two lifted attaching maps, rather than
just two abstract copies of the base cell. Every base skeleton is finite
and compact by the Schubert degree bound. Its cover is Hausdorff
by the compact-fiber bundle supplier; that supplier does not assert
compactness of the total space. Compactness here instead follows
inductively from the finitely many lifted disks, beginning with the
finite set of lifted vertices. Inductively the finite attachment
quotient of the lifted disks maps continuously and bijectively to that
covered skeleton, hence is homeomorphic to it by the compact-to-Hausdorff
criterion. Boundary support is finite, since the entire preceding lifted
skeleton is finite.

The infinite cover has exactly the weak topology of these lifted cells.
Here is a local closed-set check, needed to justify that assertion. Let C
be a subset upstairs whose inverse image under every lifted characteristic
map is closed. On an evenly covered open set U downstairs, fix one sheet
U₊. The preimage χ⁻¹(U) in each base disk splits into the relatively
clopen sets on which either chosen lift lands in U₊. The image of C∩U₊
under its homeomorphism to U has closed inverse image on each of these
two pieces, hence on χ⁻¹(U). The CW weak-topology test restricted to
the open set U shows that this image is closed in U: the restricted test
follows by adjoining the closed complement of U to each tested subset.
Thus C∩U₊ is closed in U₊, and the same holds on the other sheet.
These sheets form an open cover of the total space, so C is closed.
The converse follows from continuity of the characteristic maps.
Consequently BSO(r) is an actual CW complex with two cells over every
Schubert cell, finite in each degree. The covering lifts also preserve the
finite-stage weak models used by the published oriented sphere-bundle
supplier. Thus its CW and numerability hypotheses and the top-Pontryagin
identity's actual CW-base hypothesis are met. For r=0 the cover is not
double and the base is simply a point.

Proof of the ring calculation. Induct on the rank, starting from BSO(1). Use the inspected
universal oriented sphere-bundle lemma: on its actual total space S_n,
p:S_n→BSO(n), the oriented complement map c:S_n→BSO(n−1) is a
homotopy equivalence and p*γ_n⁺=ε¹⊕c*γ_{n−1}⁺. The published Gysin,
Euler and Pontryagin interfaces consequently give, under this identification,
a restriction j* carrying each p_i to the preceding-rank p_i and e to zero.

If n=2m, induction computes the preceding rank as R[p₁,…,p_{m-1}].
All those generators lift, so j* is surjective degreewise. In the
published rank-2m Gysin sequence the actual maps, after identifying the
sphere total space with BSO(2m−1), are

    H^{k−2m}(BSO(2m);R) --·e--> H^k(BSO(2m);R)
       --j*--> H^k(BSO(2m−1);R)
       --p_!--> H^{k−2m+1}(BSO(2m);R) --·e--> H^{k+1}(BSO(2m);R).

Surjectivity of j* in degree k makes every class in its target a
pullback. Exactness gives p_!j*=0, so p_! vanishes in degree k.
At the following term, exactness therefore makes multiplication by e
injective on H^{k−2m+1}(BSO(2m);R). Taking k=a+2m−1 for every
integer a proves that e is a non-zero-divisor in each degree a.
Exactness at H^k(BSO(2m);R) independently gives
ker(j*:H^k(BSO(2m);R)→H^k(BSO(2m−1);R))
=eH^{k−2m}(BSO(2m);R). Negative-degree groups
are zero, so the same statement includes the initial degrees.
For a class of degree d subtract a polynomial lift of its restriction,
then divide the remainder by e; the resulting class has degree d−2m.
Induction on d proves polynomial generation. For a polynomial relation
Σ_{a=0}^N e^a P_a(p)=0, restriction gives P₀=0 by the preceding
rank's polynomial independence. Injectivity of multiplication by e
then repeats the argument to show every P_a=0. The published top-class
identity gives p_m=e². This proves the even-rank presentation over R.

If n=2m+1, the odd-rank Euler class vanishes over R because its integral
class is killed by two. Gysin makes j* injective. Its image contains
R[p₁,…,p_m]=R[p₁,…,p_{m-1},e²] in the preceding even-rank ring.
To prove equality, use the actual sphere-bundle involution
τ(V,o,v)=(V,o,−v). It fixes p and reverses the orientation of the
complement plane: the ordered first vector v changes sign while the
orientation o stays fixed. Thus cτ=σc, with σ orientation reversal
on BSO(2m). Since τ*p*=p*, the image of j* is σ-invariant.
The Euler sign formula gives σ*e=−e and σ*p_i=p_i. Every element
of the already computed even-rank polynomial ring has a unique expansion
Σ e^a P_a(p₁,…,p_{m-1}); since 2 is invertible, its invariants are
exactly the polynomials with even a. This proves the odd-rank presentation.
No rank/dimension/saturation assertion is needed here.

Finally item 1 identifies BO(n) cohomology with invariants of the
orientation double cover. In odd rank all generators are fixed. In even
rank the preceding even-power calculation gives R[p₁,…,p_m]. Naturality
identifies these p_i with the unoriented universal classes. ∎

## Proposed local item 4: actual unoriented Thom calculation

For R and ranks as in item 3, the general relative Thom supplier and the
published quotient comparison give

    H~^i(MO(r);R) ≅ H^{i-r}(BO(r);O_R(γ_r)).

Item 1 identifies the right side with the anti-invariants of BSO(r)
cohomology. In odd rank the polynomial generators are all orientation
independent, so the anti-invariant part is zero: x=−x implies x=0
because 2 is invertible. In even rank r=2m, the polynomial presentation
has anti-invariant part eR[p₁,…,p_{m-1},e²]=eR[p₁,…,p_m].
This proves the module formulas stated at the beginning of the draft and
their exact endpoint. Upstairs, the oriented Thom class changes sign
under the deck map, so multiplying it by this anti-invariant Euler factor
gives the invariant class u e. This explains why it descends, and why
there is no unqualified unoriented R-Thom class. For MSO(r), the oriented
Thom theorem instead gives H~^i(MSO(r);R)=H^{i-r}(BSO(r);R). ∎

## Proposed local item 5: integral finite generation of MO(r)

Every H_i(MO(r);Z) is finitely generated. It suffices to prove the
homological Thom comparison with the integral orientation system:

    H_i(D(γ_r),S(γ_r);Z) ≅ H_{i-r}(BO(r);O_Z(γ_r)).

Here is the required local homological argument; this is not an assertion
that the published **cohomological** Thom theorem already states it.
Write B=BO(r), B_p=B^(p), D_p=D(γ_r)|B_p and
S_p=S(γ_r)|B_p. Set D₋₁=S₋₁=∅ and S=S(γ_r). On the actual relative
singular complex C=C_*(D,S;Z), define the increasing subcomplexes

    F_p C=(C_*(D_p;Z)+C_*(S;Z))/C_*(S;Z).

A simplex common to D_p and S lands in S_p, so F_p C identifies with
C_*(D_p,S_p). The graded complex is consequently

    gr_p C=C_*(D_p)/(C_*(D_{p-1})+C_*(S_p)).

The sum in this denominator is not silently identified with the singular
chains of its union. The following relative collar argument justifies
the needed homology comparison.

Each B_p is finite compact CW, by the Schubert count below. Over a
characteristic disk D^p, contract the disk and apply the published
homotopy-invariance-of-pullback theorem to trivialize the pulled-back
bundle. Orthonormalize the resulting frame with its pulled-back metric.
The Gram–Schmidt formulas subtract the earlier orthogonal projections
and divide by strictly positive lengths, so all frame coordinates vary
continuously; this uses the inspected Gram–Schmidt supplier and needs no
unproved continuity of matrix square roots. The pullback fiber pair is
therefore the actual product (D^r,S^{r-1}), with transitions preserving
the sphere. The finitely many products D^p×D^r, attached over
∂D^p×D^r to D_{p-1}, give D_p with its actual topology. Indeed the
attachment quotient maps bijectively to D_p and is compact, whereas
D_p is Hausdorff; thus the map is a homeomorphism. This also supplies
all subsequent cellwise continuity checks.

Put A_p=D_{p-1}∪S_p. In A_p take the two open neighborhoods U and V
as follows. U contains D_{p-1} and, in each attached product, the sphere
points with base radial coordinate ||x||>1/2. V is the set of fiber
points with ||z||>1/2. Their openness follows from the finite product
attachment test, they cover A_p, and V deformation retracts to S_p
by fiber radial normalization. U deformation retracts to D_{p-1} by
radially moving x to x/||x|| in each base-cell collar while retaining
the norm-one coordinate z in its isometric trivialization. On the
boundary these formulas are the identity, so differing boundary
representations give the same actual point. The same homotopy preserves
the sphere subbundle and the fiber norm. It retracts U∩V to the
norm->1/2 neighborhood of S_{p-1} in D_{p-1}; fiber normalization then
retracts that neighborhood to S_{p-1}. For p=0, U is empty and the
same statements hold with D₋₁=S₋₁=∅.

The exact chain sequence for the algebraic sum
C_*(D_{p-1})+C_*(S_p) has intersection C_*(S_{p-1}). Compare it
with the published two-open-set small-chain sequence for U,V. The
three inclusions from D_{p-1}, S_p and S_{p-1} to U,V and U∩V are
homology isomorphisms by these retractions. The long exact sequences
and their injectivity/surjectivity chase show that the sum inclusion
into C_*(U)+C_*(V) is a homology isomorphism. The inspected
`thm-cover-small-singular-chains-compute-singular-homology` identifies
the latter with C_*(A_p) on homology. Hence the natural map
from gr_p C to C_*(D_p,A_p) is a homology isomorphism, by the short
exact quotient sequences. This establishes the relative use of excision
without invoking an absolute fiber lemma as if it already treated pairs.

The pair (D_p,A_p) is good. In each product D^p×D^r, A_p contains
its full boundary, namely ∂D^p×D^r ∪ D^p×S^{r-1}. The annulus
max(||x||,||z||)>1/2, together with A_p itself, is an open neighborhood
of A_p and retracts onto A_p by radial normalization in this maximum
norm. Boundary points are fixed, so the formula descends through all
attachments and is continuous by the same compact quotient test. The
good-pair theorem identifies its relative homology with the reduced
homology of D_p/A_p. That quotient is a finite wedge, one sphere
S^{p+r} for each p-cell of B: each product ball has its entire
boundary collapsed and distinct interiors remain distinct. The
published sphere and cellular relative calculations give

    H_{p+q}(gr_p C)=⊕_{p-cells} Z  if q=r, and 0 otherwise.

Orient each base disk and each local fiber. The generator is the
base-first product relative orientation class. Under a change of local
isometric fiber frame, its sign changes exactly by that frame change's
determinant sign. To check d₁ precisely, use the positive chain-connector
formula: represent a layer generator by its product disk relative cycle,
take its singular boundary, and project that boundary to the preceding
layer. The fiber-boundary term is in S and vanishes. The surviving
base-boundary term is transported by the disk trivialization. Projecting
to each lower-cell summand commutes with this connector by naturality
of the quotient and excision maps. Thus a positively oriented attaching
incidence acts on the fiber generator by its path transport; reversing
that incidence changes its sign by the base disk orientation.

In the lifted cellular coordinates of the published local-coefficient
cellular theorem, write an attaching boundary as

    ∂ẽ=Σ_f f̃ r_fe,       r_fe=Σ_g n_feg g ∈ Z[π₁(B)].

Each signed term n_feg in this group-ring incidence acts on the local
fiber generator by the orientation character ε(g)∈{1,−1}. Consequently
our d₁ coefficient is Σ_g n_feg ε(g), exactly the cellular boundary
with coefficients O_Z(γ_r). This follows by the preceding connector
calculation term by term and its finite additivity, precisely as in the
inspected first-Serre-differential supplier; quotienting by fiber sphere
chains changes its generator to the relative orientation generator and
kills only the fiber-boundary term. All attaching maps have finite
support. This formula does not multiply the ordinary summed integer
incidence by a single sign: different incidence paths can have different
orientation signs. The published lift-basis invariance makes the identity
independent of the temporarily supplied cell lifts. There is only the
row q=r, so E² is H_p(B;O_Z(γ_r)) on that row and every later
differential vanishes.

Use the published filtered-complex/exact-couple construction on the
explicit F_p C. It is exhaustive: each finite relative chain has
compact projected support, and compact-cell support places this in a
finite base subcomplex. The same applies to each boundary primitive.
As in the published homological Serre proof, the r-page numerator at a
fixed position eventually consists of actual filtered cycles, while
every actual boundary enters its denominator at a sufficiently large
page. The eventual term therefore equals
F_p H_n(C)/F_{p-1}H_n(C). The first-quadrant page has stationary
positions, so that eventual identification holds at its stable page.
Since the only stable quotient in degree n is at p=n-r, all higher
successive image quotients are zero. Exhaustivity then makes that
single quotient the entire homology group; all lower image quotients
are zero starting from F₋₁=0. This proves
H_n(D,S;Z)≅H_{n-r}(B;O_Z(γ_r)), including vanishing when n<r,
and proves convergence without assuming that raw singular chains are
degreewise finitely filtered or that an absolute Serre theorem already
states its relative version.

There are only finitely many Schubert cells in each dimension of BO(r):
if d=Σ(a_i−i), every a_i≤i+d. The orientation system has stalk Z,
so its cellular chains are finite free in each degree. Published cellular
homology and Noetherianity give finite generation of their homology.
Finally S(γ_r) is a closed subspace of D(γ_r), with open neighborhood
||v||>1/2 retracting onto S by radial normalization. The published
good-pair homology theorem identifies relative disk/sphere homology with
reduced Thom homology. The basepoint adds only the finitely generated H₀
summand. This proves the assertion. The same argument works for MSO(r),
whose base cells are the two lifted copies of the ordinary Schubert cells.
At rank zero, handle the assertion separately: D=B, S=∅ and the
based Thom quotient is B₊, whose reduced homology is H_*(B;Z).
Here B=BO(0)=BSO(0) is a point, so finite generation is immediate.
The positive-rank good-pair theorem is not applied to its empty sphere
bundle. ∎

## Proposed local item 6: finite products and relative cone finite type

Let Y be a **finite** product of the K_q models from item 2. Integral
Künneth expresses H_n of a product as an extension of finite sums of
tensor and Tor products of its factors' integral homology groups. PID
decomposition and finite induction on the number of factors therefore
prove that every H_n(Y;Z) is finitely generated. With R=Q or an odd
F_p, field Künneth shows H*(Y;R)=R concentrated in degree zero.
An empty product is the point. Infinite products are not covered by this
argument and must not replace this finite comparison space without a
new justification.

For any continuous map f:X→Y, use the free integral chain complex
C_f=Cone(C_*(f;Z)). The published cone long exact sequence gives

    0→coker(H_nX→H_nY)→H_n(C_f)→ker(H_{n-1}X→H_{n-1}Y)→0.

If H_n(Y;Z) and H_{n-1}(X;Z) are finitely generated, the two outer
groups are finitely generated, and lifting generators proves the middle
group is finitely generated. In particular X=MO(r), item 5, and finite Y,
item 2, give integral finite generation of cone homology in every degree.
This does not require the raw singular chain groups to have finite rank.
The algebraic cone is free in each degree because it is the finite direct
sum C_n(Y;Z)⊕C_{n-1}(X;Z), so the inspected algebraic cohomology UCT
applies directly; no unproved topological mapping-cone identification is
needed. This is the relative homology obstruction for the comparison map.

## Proposed local item 7: finite-generation UCT comparison without an extra degree

Let D≥0. Suppose C is a nonnegative free integral chain complex with
H_i(C) finitely generated for 0≤i≤D. If

    H^i(Hom_Z(C,Q))=0,
    H^i(Hom_Z(C,F_p))=0 for every prime p,
                                     0≤i≤D,

then H_i(C;Z)=0 in that range.

Proof. Cohomology UCT surjects the displayed degree-i cohomology onto
Hom(H_i(C),Q), respectively Hom(H_i(C),F_p). In the finite abelian-group
decomposition, a nonzero free summand has a nonzero map to Q; any nonzero
p-primary summand has a nonzero map to F_p. Thus the vanishing of all
these Hom groups forces H_i(C)=0. No H^{i+1} vanishing is used, and the
Ext term is not mistaken for the Hom term. In fact all prime fields alone
detect a finitely generated nonzero abelian group; Q is included to match
the topological coefficient comparisons. ∎

Apply this to C_f. The degreewise split cone sequence, dualized to any
coefficient field, gives

    H^{i-1}(Y;F)→H^{i-1}(X;F)→H^i(Hom(C_f,F))
                           →H^i(Y;F)→H^i(X;F).

This follows from the inspected long exact sequence of complexes after
reindexing cochains; degreewise splitting ensures Hom remains exact.
Therefore field isomorphisms f*:H^i(Y;F)→H^i(X;F) for 0≤i≤D
imply cone cohomology vanishing for 0≤i≤D, including degree zero with
the negative groups zero. The previous lemma and finite generation then
give H_i(C_f;Z)=0 for i≤D. The integral cone long exact sequence yields

    f_*:H_i(X;Z)→H_i(Y;Z) is an isomorphism for i<D,
    f_*:H_D(X;Z)→H_D(Y;Z) is surjective.

Claiming injectivity in degree D would require H_{D+1}(C_f)=0 and is
not a consequence of these hypotheses.

For the actual Thom comparison take D=2r−1. Items 2 and 4 give the
rational and odd-prime field isomorphisms through D, since both reduced
cohomologies vanish there. The **separate mod-two metastable comparison**
must give f* isomorphisms through D. If it does, the argument proves
integral homology isomorphisms through 2r−2 and surjectivity at 2r−1.
Neither odd-primary vanishing nor a mod-two comparison at 2r is required.
For a later degree n+r in the isomorphism range choose r≥n+2.

## Honest remaining obligations

The coefficient and finite-generation suppliers above have local proofs
from the inspected published interfaces and explicit proposed lemmas.
In particular no Dold–Kan/finite-simplicial-model theorem, general Serre
sphere-finiteness theorem, or finite-cell model for K(F₂,q) was imported.
Homological finite type is sufficient for the UCT alternative.

These drafts do not establish the mod-two operation-basis calculation,
construct the classifying comparison f, prove its F₂ cohomology
isomorphism, or turn the integral homology comparison into a homotopy
comparison. Those remain the other supporting-pair suppliers. Any use
of finite Grassmannian stages in place of BO(r) must additionally verify
that the chosen stage contains the required Schubert skeleta; the bound
a_i≤i+d above gives a concrete sufficient stage. No endpoint at degree
2r has been claimed or repaired by assumption.


## Independent repair receipt (finite-range comparison reviewer)

2026-10-05: inspected the actual relative-cell, homological Serre,
cohomological Thom, good-pair, Gysin, universal oriented sphere-bundle,
transfer, EM uniqueness, Künneth and algebraic UCT interfaces. Repaired
two local integration omissions: the lifted orientation-cover CW
construction before the BSO calculation, and the relative Thom chain
filtration/collar/excision/convergence proof in item 5. Clarified rank
zero separately and supplied a continuous Gram–Schmidt justification.
The statements and strict endpoint were retained. The cone UCT proof
correctly gives integral homology isomorphisms only below D and
surjectivity at D; its use at D=2r−1 is consistent with the finite-range
relative-Hurewicz detector. This is an independent bounded mathematical
review, not a canonical item audit or a gate certification. No item,
plan, manifest, readiness or runtime/control file was edited.

Second local check of the reviewer-owned repair: checked the exact named
small-chain, compact-fiber, first-Serre-differential and local cellular
interfaces. Removed an inaccurate attribution of total-space compactness
to the compact-fiber supplier; compactness is obtained from the explicit
finite lifted-disk attachment. Expanded d₁ into the group-ring incidence
formula to retain separate monodromy signs for distinct incidence paths.
Rechecked the chain-sum versus union comparison, both collar retractions,
product-ball good-pair quotient, cover weak-topology test and exhaustive
stationary convergence. No whole-closure verification is claimed.

Final Gysin check: expanded the even-rank sequence in degree k. Generator
lifts give surjectivity of j*, which forces p_! to vanish; exactness at
degree k−2m+1 then proves e injective, and exactness at degree k gives
ker j*=eH^{k−2m}. Checked the unchanged odd-rank argument: e=0 after
inverting two makes j* injective, and the sphere-vector involution
restricts its image to the even Euler powers already attained by the
Pontryagin generators. All repaired odd-primary arguments are locally
checked against their used interfaces, within the recorded bounded
review limits.

Dependency-hygiene check: the path-loop-model supplier had no actual
use in item 2 or elsewhere in this proof route. Removed its inventory
entry and the unused stronger-interface discussion. The strict loop
fiber comparison is obtained locally by weak CW approximation and marked
EM uniqueness, then transported on homology by the inspected weak-map
and UCT interfaces; no external CW-type-of-fibers assertion is invoked.
