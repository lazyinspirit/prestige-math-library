# Local proof draft: rational Hurewicz in the stable connectivity range

Run: `frontier-41-ha-dt-29`. Owner-authorized supporting AT pair. This is a
separate mathematical draft, not an item-readiness receipt, a source stamp, an
independent audit, or a plan amendment. No published item, manifest or runtime
state is changed by this draft.

## Result and proof route

Assume AC. If a based CW complex X is (c−1)-connected, c ≥ 2, the natural
rationalized Hurewicz map

    h_i ⊗ Q : π_i(X) ⊗_Z Q → H_i(X; Q)

is an isomorphism for c ≤ i ≤ 2c−2. No finite-type, countability or finite-CW
hypothesis is imposed. The rationalization on the target uses the natural
isomorphism H_i(X; Z) ⊗ Q ≅ H_i(X; Q). The proof below also establishes
vanishing below c. It makes no claim of injectivity at 2c−1.

The proof uses a torsion version of the first-nonzero-degree Hurewicz theorem,
proved here by killing lower torsion homotopy groups. This proves the required
rational sphere calculation from the already published cohomology of
K(Z,m). A wedge of sphere representatives then compares an arbitrary X with
its rational homotopy groups in the required range. It does not use Serre's
homotopy finiteness theorem, finite generation of homotopy groups, a
generalized Whitehead theorem modulo finite groups, a rationalization-space
construction, or a finite-complex approximation of X.

## Exact published interfaces used

The following files were inspected in this isolated checkout. Their statements,
rather than their titles alone, are the interfaces used here.

- `thm-absolute-hurewicz-theorem`: for an (n−1)-connected CW complex, n ≥ 2,
  integral Hurewicz is an isomorphism in degree n and lower reduced homology
  vanishes. It does not itself supply an extended rational range.
- `def-hurewicz-homomorphism`: the actual sphere-pushforward Hurewicz map
  and naturality, including orientation and basepoint conventions.
- `thm-cw-approximation-of-an-arbitrary-space`: a weak equivalence from a CW
  complex to any space; its relative construction can preserve a prescribed
  basepoint vertex. No actual homotopy inverse is claimed.
- `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`:
  a weak equivalence of arbitrary spaces induces integral homology
  isomorphisms. This is the crucial supplier permitting CW replacements of
  strict homotopy fibers without invoking a CW-homotopy-type theorem.
- `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`:
  marked CW K(A,n) models and marked homotopy equivalences between them;
  n=1 permits any group, n ≥ 2 requires A abelian.
- `thm-eilenberg-maclane-spaces-represent-singular-cohomology`:
  based maps out of CW complexes with a vertex basepoint represent reduced
  cohomology; the universal degree-n class evaluates as the identity on A.
- `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`:
  the evaluation map onto Hom(H_n(Y;Z), A), with Ext(H_{n−1}(Y;Z), A)
  kernel. The kernel vanishes in the connected-cover applications below.
- `thm-mapping-path-factorization` and
  `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`:
  an actual Hurewicz fibration E_f → B whose total is homotopy equivalent
  to the domain of f, with strict fiber and its long exact sequence.
- `thm-homological-serre-spectral-sequence`: for a Serre fibration over a
  path-connected CW base and arbitrary commutative coefficient ring, the
  first-quadrant sequence has E^2_{a,b}=H_a(B;H_b(F;R)) when B is simply
  connected; it strongly converges with a finite filtration in each total
  degree. No CW hypothesis on the fiber is required.
- `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion`:
  the base and fiber edges are the actual induced homology maps. We use it
  whenever a collapsed row or column is identified with a continuous map.
- `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator`:
  its Statement gives the desired Z-coefficient-group calculation. Its
  existing proof has a transitive Schön CW-fiber citation, so row 6a below
  rederives that calculation with a locally justified weak-fiber comparison.
  This published theorem is a comparison reference, not an indispensable
  black-box prerequisite of the proof below.
- `thm-cohomological-serre-spectral-sequence`: the actual rational
  cohomological Serre sequence, its local-coefficient second page, differential
  bidegrees, and finite strong-convergence filtration used in row 6a.
- `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`:
  multiplicative rational Serre sequence, Leibniz signs, convergence and
  the differential bidegrees used in row 6a.
- `thm-singular-cohomology-is-graded-commutative` and
  `prop-cup-product-is-natural-unital-and-associative`: the rational odd
  square vanishing and multiplicativity of pullbacks in row 6a.
- `thm-fundamental-group-of-the-circle`,
  `cor-real-line-is-universal-cover-of-circle`,
  `cor-homology-of-spheres`, and
  `cor-contractible-nonempty-spaces-have-the-homology-of-a-point`:
  the K(Z,1) base case and path-space abutment in row 6a.
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`:
  natural evaluation H^j(Y;Q) ≅ Hom_Q(H_j(Y;Q),Q) for every space Y,
  with no finite-dimensional hypothesis. AC supplies detecting functionals.
- `prop-higher-homotopy-basepoint-transport-and-moving-homotopies`:
  path-induced homotopy-group isomorphisms and the moving-basepoint formula;
  used for the sphere contraction in row 3 and the basepoint conclusion in
  row 10.
- `lem-compact-cw-images-have-finite-cell-support-without-choice`:
  each map from a compact source has image in a finite CW subcomplex.
- `lem-high-relative-cells-do-not-change-lower-homotopy`:
  when relative cells have dimension at least N, inclusion is an
  isomorphism on π_i for i < N−1 and a surjection at N−1.
- `thm-cellular-homology-computes-singular-homology` and
  `prop-cellular-maps-induce-cellular-chain-maps`: cellular calculations
  with arbitrary coefficient groups, natural under subcomplex inclusions.
- `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`:
  the weak topology and finite-boundary-support cell construction used below.
- `lem-covering-homotopies-lift-by-finite-local-strips`,
  `thm-uniqueness-of-lifts-from-a-connected-space`, and
  `thm-covering-space-lifting-criterion`: covering lifts and the fibration
  exact-sequence application for the explicit discrete-group models below.
- `lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`:
  its proof constructs the lift-sum chain map τ with p_#τ=d id. Our
  homology use of that identity is proved explicitly below; we do not
  misquote its cohomological Statement as a homology theorem.
- `thm-localisation-of-modules-is-exact`,
  `thm-localisation-of-modules-is-tensor-product`, and
  `thm-localisation-of-modules-commutes-with-quotients-and-sums`:
  exact localization, tensor identification, and direct-sum behavior.
- `thm-every-independent-set-extends-to-a-basis` and `def-axiom-of-choice`:
  rational bases, representative choices, and inherited AC assumptions.

Some published path-loop and Postnikov items cite Schön for CW type of strict
fibers. We do not use that cited bridge. Every strict fiber below receives a
weak CW approximation, and the published weak-equivalence/homology lemma
transfers its singular homology. No Postnikov stage or convergence theorem
is needed.

## Supplier-first proposed item sequence and complete proofs

The proposed IDs are provisional local suppliers, not registered library items.
Each proof depends only on earlier rows here and the published interfaces
listed above. Each new construction is followed by its justification.

### 1. `lem-rationalization-is-exact-and-commutes-with-singular-homology`

For every abelian group A, A⊗Q is its localization at the positive integers:
every element is a/s, and a/s=0 precisely when some positive integer kills a.
In particular A⊗Q=0 exactly when A is torsion. Rationalization is exact and
commutes with direct sums. For every space Y,

    H_j(Y;Z)⊗Q ≅ H_j(Y;Q)

naturally. For every rational vector space V,

    H_j(Y;V) ≅ H_j(Y;Q)⊗_Q V.

**Proof.** Apply the published localization/tensor theorem with Z and the
nonzero positive integers, whose ring localization is Q. In the fraction
definition equality of a/s with 0/1 means u a=0 for some positive u. A finite
sum of tensors a_t⊗(r_t/s_t) has a common denominator, and hence is a single
fraction, so this criterion applies to every element. Exactness and direct
sums are precisely the published localization statements.

For a chain complex C, apply exact rationalization to
0→Z_j(C)→C_j→B_{j−1}(C)→0 and
0→B_j(C)→Z_j(C)→H_j(C)→0. It identifies the cycles and boundaries in
C⊗Q with the rationalizations of the original cycles and boundaries, hence
identifies homology. The basis of singular simplices gives the literal chain
isomorphism C_*(Y;Z)⊗Q=C_*(Y;Q), compatible with every continuous map.
Finally choose a basis of V under AC. Tensoring a rational complex with V is
a direct sum of copies of that complex. Kernels and images of its coordinate
differential are direct sums of kernels and images, since elements have
finite support. This proves the V assertion; the natural tensor map, not the
auxiliary basis, supplies the isomorphism. ∎

### 2. `def-weak-join-classifying-model-for-a-discrete-group`

For a discrete group G, let J(G) be the abstract simplicial complex with
vertices (s,g), s∈N, g∈G. A finite nonempty set of vertices is a simplex
exactly when its slot indices s are all distinct. Use the geometric
realization with its CW weak topology. Right multiplication of every label
defines a G-action. Put B_wG=J(G)/G, with the orbit topology. The subscript
distinguishes this construction from the published Milnor model, whose
topology has a separate noncompact-group convention. We assert no equality
of those models.

### 3. `lem-weak-join-classifying-model-is-a-cw-k-g-one`

**Explicit additional direct dependency:**
`prop-higher-homotopy-basepoint-transport-and-moving-homotopies`,
for transport along the contraction track in the weak-contractibility proof.

The construction in row 2 is well-defined, J(G) and B_wG are CW complexes,
J(G) is path-connected and weakly contractible, and J(G)→B_wG is a covering
with fiber G. Consequently B_wG is a marked K(G,1). For a subgroup H≤G,
B_wH is a CW subcomplex of B_wG. Every finite set of cells of B_wG is
contained in B_wH for some finitely generated subgroup H≤G.

**Proof.** Each simplex is a closed finite-dimensional disk with its usual
faces, attached to the previously constructed skeleton. Its boundary has
finitely many faces. The finite-boundary-support CW construction gives
J(G) and its weak topology, with disjoint simplex interiors. The action
preserves faces and their slot ordering, and is free: any occupied slot
has label g, and gh=g forces h=1. Distinct vertices of a simplex have
different slots, so no nonidentity action identifies two points within
one simplex. For B_wG choose one representative for each orbit of
simplices, oriented in increasing slot order. Their disks attach by their
face orbits, with finite boundary support and disjoint interiors. A set
is closed in this cell construction exactly when its inverse image is
closed on each simplex of J(G); that is also the orbit-quotient closed-set
criterion. Thus the constructed CW topology is exactly the orbit topology.

Let t_s be the weight in slot s. It is continuous by the map-out criterion
on each characteristic simplex. On its positive locus the label g_s is
continuous into discrete G: the open star of (s,g) is the locus t_s>0,
g_s=g, checked on each simplex. Let U_s⊂B_wG be t_s>0. Normalizing a
representative by right multiplication by g_s^{-1} defines a section on
U_s, since (x h)(g_s h)^{-1}=x g_s^{-1}. On the corresponding open sets
the normalizing map is continuous, as is seen on every characteristic
simplex with its fixed slot labels. Its descended section is continuous
by the quotient criterion restricted to the saturated open preimage.
The maps (b,h)↦s_s(b)h and x↦(p(x),g_s(x)) are continuous inverses
between U_s×G and p^{-1}U_s. These are ordinary covering charts because
G is discrete. The charts cover B_wG.

Any two vertices of J(G) are joined by an edge if their slots differ;
otherwise insert a vertex in a different slot and use two edges. Every
point lies in a simplex and joins a vertex there, so J(G) is path-connected.
A sphere map into J(G) meets finitely many cells by the published compact
CW-support lemma. These cells use finitely many slots. Select another
slot and the vertex labelled 1 in it. Coning each of those finitely many
simplices to this vertex gives a finite subcomplex, and the barycentric
join homotopy contracts the image inside it. The finite disk/face
formulas agree and give an ordinary continuous homotopy. Thus all
positive homotopy groups vanish. An unbased contraction of one sphere
map also makes its based class zero: basepoint transport along the
homotopy track is an isomorphism and carries it to the constant class.
This uses no global contraction or unproved compact-stage assertion.

The covering is a fibration by the published covering-lifting lemma.
Its exact sequence, with discrete fiber and weakly contractible total,
identifies π_1(B_wG) with G (fix the endpoint-of-lift convention) and
gives π_i(B_wG)=0 for i>1. Hence it is a CW K(G,1).

For H≤G, an orbit of a simplex whose labels lie in H can coincide with
another such orbit under a translation g∈G only when g∈H: inspecting
one vertex proves this. Therefore the H-orbit cells inject, and their
faces remain H-orbit cells, giving a subcomplex B_wH. Normalize each
simplex orbit by making its first label 1. Its remaining finitely many
labels generate a finitely generated subgroup. Taking generators from
finitely many cells gives one subgroup containing all those cells and
their faces. This proves the final assertion. ∎

### 4. `lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic`

If T is any torsion abelian group and n≥1, every CW K(T,n) has
H_0(K(T,n);Q)=Q and H_j(K(T,n);Q)=0 for j>0. There is no cardinality
restriction on T.

**Proof, n=1.** A finitely generated subgroup F of T is finite: if its
generators have orders d_1,...,d_r, the product of those cyclic groups
surjects onto F. For finite F, the covering J(F)→B_wF has |F| sheets.
For each singular simplex, sum all its lifts to obtain a chain map τ.
Existence and uniqueness of based lifts apply because a simplex is
simply connected; restriction to a face bijects its lift set with that
face's lift set. Thus ∂τ=τ∂ and p_#τ=|F| id, including degree zero.
These are exactly the lift-sum identities proved in the published
transfer supplier. On rational homology, τ_* is injective because
p_*τ_*=|F| id. The map J(F)→* is a weak equivalence by row 3; the
published weak-equivalence/homology lemma and row 1 give zero positive
rational homology of J(F). Therefore B_wF has zero positive rational
homology.

A rational cellular cycle in B_wT has finite support. Row 3 places all
its cells in B_wF for one finitely generated, hence finite, subgroup F.
The cellular differential agrees with that in B_wF, and the inclusion
of cellular chain groups is injective, so the same chain is a cycle in
B_wF. It bounds there by the preceding paragraph, hence bounds in
B_wT. Cellular/singular comparison proves positive rational acyclicity.
Marked CW uniqueness identifies B_wT with every chosen K(T,1), and
homotopy invariance transfers the result.

**Proof, n≥2 by induction.** Take the actual path fibration
ΩK(T,n)→PK(T,n)→K(T,n), with contractible total, from the mapping-path
supplier. Its exact sequence shows its loop fiber is path-connected
and has T as its only positive homotopy group, in degree n−1. Apply
the relative version of CW approximation with a prescribed vertex
mapping to the constant loop, obtaining a based weak equivalence
L→ΩK(T,n). L is a marked CW K(T,n−1). Its rational homology is that
of the loop fiber by the published weak-equivalence/homology lemma
and row 1, and is acyclic by the induction hypothesis. The base
K(T,n) is simply connected. In the rational Serre sequence only the
row b=0 remains, with E^2_{a,0}=H_a(K(T,n);Q). No differential can
enter that row, and every outgoing target is zero. Strong convergence
and contractibility of the total force H_a(K(T,n);Q)=0 for a>0.
Path-connectedness gives H_0=Q. This is a finite induction for each
specified n, and requires no homotopy equivalence from a CW complex
to the strict loop fiber. ∎

### 5. `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy`

Let Y be a simply connected space and n≥2. If π_j(Y) is torsion for
2≤j<n, then H_j(Y;Q)=0 for 0<j<n and the actual Hurewicz map is an
isomorphism π_n(Y)⊗Q→H_n(Y;Q). CW type is not required.

**Proof.** A based weak CW approximation L→Y induces isomorphisms on
homotopy, integral homology and rational homology. Hurewicz naturality
therefore reduces the claim to L. Choose its prescribed vertex as
basepoint. It is simply connected. We describe a finite sequence of
CW spaces Y_2=L, Y_3,...,Y_n with Y_j (j−1)-connected, and maps
Y_{j+1}→Y_j inducing isomorphisms on π_i for i>j and on rational
homology in every degree.

Suppose Y_j has been constructed for 2≤j<n. Its group
T_j=π_j(Y_j) is the original π_j(L), because all earlier maps
preserve higher homotopy; it is torsion. Integral Hurewicz gives
H_j(Y_j;Z)≅T_j and H_{j−1}(Y_j;Z)=0. The cohomological UCT
therefore identifies H^j(Y_j;T_j) with Hom(H_j(Y_j;Z),T_j).
Take the class corresponding to the Hurewicz inverse. Represent it
by a based map f_j:Y_j→K(T_j,j). The universal class evaluates as
identity on T_j. Naturality of evaluation and integral Hurewicz
shows (f_j)_*:π_j(Y_j)→π_j(K(T_j,j)) is the identity under the
chosen markings.

Let F_j be its strict homotopy fiber in the actual mapping-path
fibration. Its exact sequence shows F_j is j-connected and that
F_j→Y_j is an isomorphism on π_i for i>j. Indeed K(T_j,j)
has no higher groups, its degree-j map is an isomorphism, and
both spaces have zero groups below j. The component segment
shows F_j is path-connected. The base is simply connected and
rationally acyclic by row 4. For any rational vector space V,
row 1 makes H_a(K(T_j,j);V) zero for a>0 and equal to V
for a=0. Therefore the Serre sequence of F_j→E_{f_j}→K(T_j,j)
has only column a=0. Its fiber edge is an isomorphism in every
degree. Compose it with the deformation retraction E_{f_j}→Y_j:
the projection F_j→Y_j is a rational homology isomorphism.

Take a based weak CW approximation Y_{j+1}→F_j preserving a
chosen fiber point. It transfers both homotopy and homology,
and its composite into Y_j has exactly the properties promised.
This finishes the construction. The case T_j=0 uses a CW K(0,j)
and works with the same argument.

After the finite sequence j=2,...,n−1, Y_n is (n−1)-connected.
The composite Y_n→L induces an isomorphism on π_n and on all
rational homology. Integral Hurewicz on Y_n, row 1, and naturality
give the claimed isomorphism on L and then on Y; lower vanishing
transfers as well. If n=2 the construction is empty and integral
first Hurewicz on L suffices. Every comparison is induced by an
actual continuous map. No use of a generalized Whitehead theorem
modulo torsion has been concealed. ∎

### 6. `cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range`

If Y is simply connected and H_j(Y;Q)=0 for 0<j≤D, then
π_j(Y)⊗Q=0 for 2≤j≤D.

**Proof.** Induct on j. For j=2, row 5 identifies rational homotopy
with the zero rational homology. At the next j, all previous homotopy
groups are torsion by row 1, so row 5 again applies. Finite induction
proves the assertion. This implication is valid for arbitrary simply
connected spaces because row 5 includes their weak CW replacement. ∎

### 6a. `lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison`

**Explicit additional direct dependency:**
`thm-cohomological-serre-spectral-sequence`, for the path-fibration
second page, differential bidegrees, and strong convergence, alongside
`thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`
for its product and Leibniz rule.

For a marked CW K(Z,n), n≥1, its rational cohomology is polynomial on
one degree-n generator for even n and exterior on that generator for
odd n. In particular its positive rational homology below 2n is zero
except for the one-dimensional group in degree n. This row closes
the transitive strict-fiber CW-type citation in the published calculation.

**Proof of the loop comparison.** For n≥2 the actual loop fiber of
the path fibration of K(Z,n) is path-connected and has Z as its
only positive homotopy group, in degree n−1, by the fibration exact
sequence. A weak CW approximation L→ΩK(Z,n), preserving a
basepoint vertex, makes L a marked K(Z,n−1). Marked CW uniqueness
gives a marked homotopy equivalence K(Z,n−1)→L. Its composite
into the strict loop fiber is a weak equivalence. The published
weak-equivalence/homology lemma and row 1 identify rational homology;
natural field-dual evaluation identifies rational cohomology as well.
Pullback preserves cup products by the published cup-product supplier,
so this is an actual cohomology-ring isomorphism. A homotopy inverse
on the strict fiber is unnecessary. This construction is independent
of the cohomology calculation and of Schön's theorem.

**Proof of the calculation.** The real-line covering, its contractible
total and the covering/fibration exact sequence identify S^1 as a
marked K(Z,1). CW uniqueness, sphere homology and field duality give
H^*(K(Z,1);Q)=Λ(x_1). Induct on n≥2 using the preceding loop
comparison. Write A=H^*(K(Z,n);Q). First integral Hurewicz, row 1
and field duality give A^0=Q, A^p=0 for 0<p<n and A^n=Q.
The rational cohomological Serre sequence of the path fibration has
E_2=A⊗H^*(K(Z,n−1);Q): each nonzero fiber degree group is Q,
so no infinite-dimensional constant-coefficient identification is
being assumed. Its abutment is Q in degree zero and zero elsewhere.

For even n the fiber ring is Λ(y), |y|=n−1. Only rows 0 and
n−1 occur. The only possible differential is d_n and it is nonzero,
because otherwise y would survive in the positive-degree contractible
abutment. Its value is a nonzero scalar multiple of the normalized
generator x∈A^n; rescale the rational fiber generator y so that
d_n(y)=x. For each p≥0
the map A^p y→A^{p+n}, a y↦(−1)^p a x, is injective:
its upper-row kernel has no incoming differential, no subsequent
outgoing differential, and would survive in positive total degree.
It is surjective because its bottom-row cokernel also has no
remaining incoming or outgoing differential and would survive.
Induction on degree, starting with A^0=Q and the initial vanishing,
therefore gives A=Q[x].

For odd n the fiber ring is Q[y], |y|=n−1 even. Before page n
no differential joins two occupied rows. The class y has only the
possible differential d_n into A^n, and must die. Its value is a
nonzero scalar multiple of the normalized generator x∈A^n; rescale
the rational fiber generator y so that d_n(y)=x.
Graded commutativity gives x^2=0, and the Leibniz formula gives
d_n(y^k)=k y^{k−1}x. Suppose A has a nonzero class in some
degree p>n; choose the least such p. A nonzero bottom-row class
a∈A^p cannot be hit by d_n: its source has base degree p−n,
which is zero by initial vanishing and minimality unless p−n=n,
when its differential is a scalar multiple of x^2=0. A later
d_r hitting a must have source base degree p−r<p and fiber
degree r−1. Nonzero smaller base degrees can only be 0 or n.
In base degree 0 every positive power y^k was killed injectively
by d_n, since k≠0 in Q and x y^{k−1}≠0 on that page.
In base degree n every x y^k is the d_n-boundary
d_n(y^{k+1})/(k+1). Thus neither possible column can supply
a later incoming differential. No differential leaves the bottom
row. Hence a survives to the zero positive-degree abutment,
a contradiction. It follows that A=Λ(x).

A natural field-dual evaluation identifies zero cohomology with
zero homology: a nonzero vector is detected by a functional under
AC. The degree-n homology is Q by integral first Hurewicz and
row 1. The stated low-degree homology follows. These arguments
also show exactly why the weak-fiber comparison suffices for every
use of the published calculation's strict-fiber interface. ∎

### 7. `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree`

For m≥2 and 1≤i≤2m−2,

    π_i(S^m)⊗Q = Q if i=m, and 0 otherwise.

Hurewicz is the standard generator isomorphism in degree m and an
isomorphism onto the zero group in the other indicated degrees.

**Proof.** Represent the integral orientation class of S^m by a
based map f:S^m→K(Z,m). Universal evaluation and first Hurewicz
make its degree-m homotopy map an isomorphism. Let F be its strict
homotopy fiber. The exact sequence shows F is m-connected.

The locally rederived rational cohomology calculation in row 6a gives
H^a(K(Z,m);Q)=0 for 0<a<2m, a≠m. Its full algebraic-dual
identification with homology implies H_a(K(Z,m);Q)=0 in those
degrees: a nonzero vector would have a nonzero detecting functional
under AC. H_m(K(Z,m);Q)=Q also follows directly from integral
first Hurewicz and row 1. No finite-dimensional hypothesis is being
inferred without proof. In particular H_{d+1}(K(Z,m);Q)=0 for
m+1≤d≤2m−2.

A weak CW approximation of F and integral first Hurewicz give
H_b(F;Q)=0 for 0<b≤m. We prove the same for every
m+1≤b≤2m−2 by induction. Suppose all lower positive fiber
groups vanish, and consider E^2_{0,b}=H_b(F;Q) in the rational
Serre sequence of F→E_f≃S^m→K(Z,m). There are no outgoing
differentials from column zero. An incoming d_r, r≥2, has
source (r,b−r+1). If b−r+1 is positive, the source is zero
by lower fiber vanishing and row 1; if it is negative there is
no source. The remaining case r=b+1 has source
H_{b+1}(K(Z,m);Q), which is zero by the preceding paragraph.
Thus E^∞_{0,b}=H_b(F;Q). Strong convergence makes this the
bottom filtration subgroup of H_b(E_f;Q)=H_b(S^m;Q)=0,
so the fiber group is zero. This completes the induction.

Apply row 6 to F through degree 2m−2. Its positive rational
homotopy groups vanish there. For i>m, the fiber exact sequence
identifies π_i(F) with π_i(S^m), since K(Z,m) has zero groups
in degrees i and i+1. Hence these sphere groups rationally
vanish. Degrees below m vanish by connectivity, and degree m
is the integral orientation generator by first Hurewicz. For m=2
the interval m+1≤b≤2m−2 is empty and the assertion is exactly
first Hurewicz. We assert torsion, not finiteness, of the other
indicated groups. ∎

### 8. `lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres`

Let W be the CW wedge of any set of based spheres whose dimensions
are at least c≥2. For 1≤i≤2c−2, its homotopy group rationalization
and rational homology are both the direct sum of Q indexed by the
spheres of dimension i, and actual Hurewicz identifies their generators.

**Proof, finite wedge.** Let P be the finite product of the spheres.
Their CW structures have a vertex and a top cell. Products of their
characteristic disks give the finite product CW structure: each product
disk is a disk of the sum dimension, with boundary mapping into
the union of products of lower faces; an explicit radial disk
homeomorphism or a finite subdivision gives its characteristic map.
The weak CW topology agrees with the ordinary product because the
spaces are finite compact Hausdorff CW complexes. W embeds as the
subcomplex with at most one nonvertex coordinate. Every relative
cell of (P,W) has at least two top factors, and hence dimension
at least 2c. The published high-relative-cells lemma makes
π_i(W)→π_i(P) an isomorphism for i<2c−1. Based cube maps
into a finite product are exactly tuples of based cube maps;
homotopies and concatenations are coordinatewise, so
π_i(P)=∏π_i(S^{m_t}). Row 7 gives the displayed rational
groups: for m_t>i connectivity suffices, while for m_t≤i
we have i≤2c−2≤2m_t−2.

The cellular complex of W has one zero-cell and one top cell
for each sphere, with zero differentials. Sphere inclusions
therefore identify its positive homology with the corresponding
direct sums. Naturality of Hurewicz on those inclusions and the
degree-m orientation generator calculation in row 7 show that
the displayed isomorphism is the actual Hurewicz map.

**Proof, arbitrary wedge.** Every sphere representative and disk
homotopy has finite cell support. Its image is therefore contained
in a finite subwedge, obtained by including all spheres whose
top cells meet that support. A class in π_i(W) is thus represented
in a finite subwedge; equality of two such classes is witnessed
in a larger finite subwedge by the finite support of a homotopy.
This is exactly the filtered-colimit description of π_i(W).
The finite-wedge comparisons above are natural under adding
factors: the corresponding map on finite products inserts
constant coordinates. Thus that colimit is the direct sum of
the individual sphere homotopy groups in this range. Row 1
rationalizes it to their rational direct sum. Cellular homology
of the infinite wedge uses finite chains and gives the same
direct sum without any finite-type assumption. Naturality of
Hurewicz retains the generator identification. ∎

### 9. `lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms`

Let f:W→X be a based map between 2-connected CW complexes,
and D≥2. Suppose π_i(f)⊗Q is an isomorphism for 2≤i≤D
and a surjection for i=D+1. Then H_i(f;Q) is an isomorphism
for 0≤i≤D.

**Proof.** Let F→E_f→X be the actual mapping-path fibration.
The fiber exact sequence gives F path-connected and simply
connected, because π_1(W)=π_1(X)=π_2(X)=0. All groups
in its relevant higher exact segments are abelian. Exactness
of rationalization from row 1 gives, for 2≤j≤D, zero
π_j(F)⊗Q: the adjacent map π_{j+1}(W)⊗Q→π_{j+1}(X)⊗Q
is surjective, and π_j(W)⊗Q→π_j(X)⊗Q is injective.
The endpoint j=D uses precisely the stipulated surjection.

Inductively apply row 5 to F for j=2,...,D. Its lower
homotopy groups are torsion, so H_j(F;Q)=0 in that range;
H_1(F;Q)=0 by simple connectivity. In the rational Serre
sequence over X, every term with 0<b≤D is zero. For
a≤D the bottom-row term E^2_{a,0}=H_a(X;Q) has no
incoming differential and no nonzero outgoing differential:
each outgoing target has fiber degree r−1≤a−1≤D−1.
There are no other nonzero stable filtration terms of total
degree at most D. The base edge p_*:H_i(E_f;Q)→H_i(X;Q)
is therefore an isomorphism through D. The inclusion
j_f:W→E_f is a homotopy equivalence and p_f j_f=f,
so the asserted isomorphism is H_i(f;Q). This proves the
limited comparison locally; it does not invoke a mod-torsion
Whitehead theorem. ∎

### 10. `thm-rational-hurewicz-for-highly-connected-cw-complexes`

**Explicit additional direct dependency:**
`prop-higher-homotopy-basepoint-transport-and-moving-homotopies`,
for the final transfer from a vertex basepoint to an arbitrary basepoint.

If X is (c−1)-connected, c≥2, actual Hurewicz induces
π_i(X)⊗Q ≅ H_i(X;Q) for c≤i≤2c−2.

**Proof.** For c=2 there is just i=2, so integral first Hurewicz
and row 1 prove the theorem. Assume c≥3 and put D=2c−2.
Choose a vertex v∈X as basepoint. For each j=c,...,D+1,
choose a rational basis of V_j=π_j(X,v)⊗Q. Every basis
vector is a fraction a/s by row 1, with a∈π_j(X,v) and
positive integer s. For each vector choose such a numerator
and a based sphere map representing it. Replacing each basis
vector by its numerator only rescales that vector by a nonzero
rational number, so the chosen numerators still form a basis.
AC makes these simultaneous choices for set-sized families.

Let W be the CW wedge of all these spheres, and define f:W→X
by the chosen representatives. The wedge weak topology makes
f continuous, because its restriction to every sphere is
continuous and the maps agree at the vertex. Both W and X
are 2-connected; W has no positive cells below c, and the
high-relative-cells lemma applied to (W,{vertex}) supplies
that connectivity. Row 8 shows that, for i≤D, the rational
π_i(W) consists exactly of the independent sphere generators
in dimension i. Their images are the chosen basis of V_i.
Below c both groups are zero. Thus π_i(f)⊗Q is an
isomorphism for 2≤i≤D. In degree D+1 no decomposition
of the full wedge homotopy group is asserted: the sphere
generators chosen in that degree already span V_{D+1},
so π_{D+1}(f)⊗Q is surjective.

Row 9 gives H_i(f;Q) an isomorphism through D. By row 8
the Hurewicz map on W is an isomorphism in that same range.
For each c≤i≤D the naturality square

    π_i(W)⊗Q  --π_i(f)⊗Q-->  π_i(X)⊗Q
        | h_W                       | h_X
        v                           v
    H_i(W;Q)  ----H_i(f;Q)---->  H_i(X;Q)

commutes. The left, upper and lower arrows are isomorphisms,
so h_X is an isomorphism. This proves the specified map,
not merely equality of dimensions of two vector spaces.

For a different basepoint x∈X choose a path from v to x.
Published basepoint transport is an isomorphism, and the
moving-basepoint homotopy of its sphere representative leaves
its singular homology pushforward unchanged. Hence the same
statement holds at every basepoint and has the usual naturality
under based continuous maps. Connectivity and first integral
Hurewicz give lower homology vanishing. The empty space is
excluded by connectivity; a point and zero rational homotopy
groups give empty sphere families and are included. The
argument never identifies an infinite-dimensional space with
its double dual, interchanges an infinite spectral-sequence
limit, or assumes finite generation of any homotopy group.
The finite range ends at D=2c−2 throughout. ∎

## Dependency graph and scope consequences

The order of local suppliers is:

    rational exactness → weak-join definition → weak-join justification
      → torsion K(T,n) rational acyclicity → torsion-first Hurewicz
      → finite-range vanishing → rational sphere vanishing
      → arbitrary-wedge Hurewicz → finite-range map comparison
      → stable-range rational Hurewicz.

The direct published edges added explicitly to this graph are:

    prop-higher-homotopy-basepoint-transport-and-moving-homotopies
      → row 3 (weak-join justification)
      → row 10 (stable-range rational Hurewicz).
    thm-cohomological-serre-spectral-sequence
      → row 6a (rational K(Z,n) calculation), together with its
        multiplicative-structure supplier.

These direct edges also enter all downstream rows through the existing local
dependency graph; they add no new mathematical prerequisite or claim.

Row 6a is an additional independent branch from rational exactness,
CW weak comparison, integral first Hurewicz, Eilenberg–Mac Lane
uniqueness and cohomological Serre into the sphere calculation.

No local row depends on the target stable-range theorem. In particular:

- Torsion K(T,n) acyclicity is proved before any rational homotopy comparison.
- Torsion-first Hurewicz uses only integral first Hurewicz on newly
  constructed connected covers, with every cover-to-base homology
  comparison proved by an actual Serre sequence.
- Sphere vanishing uses the local K(Z,m) calculation in row 6a; it
  depends on integral Hurewicz and cohomological Serre, not on rational
  Hurewicz or sphere homotopy finiteness. The published theorem is
  reproduced with its strict-fiber bridge replaced, so its transitive
  Schön citation is not left as a missing local premise.
- The map-comparison lemma is proved after torsion-first Hurewicz and does
  not assume a generalized Whitehead theorem.
- The wedge proof needs finite products only of finitely many spheres.
  Its infinite case uses the published finite-support lemma for individual
  representatives and homotopies, not a compactness claim about X.

The exact plan mapping of representative published interfaces is:

| Interface | Published home | Order |
|---|---|---|
| Rational basis selection | `linear-independence-bases-and-dimension` | 74 |
| Exact module localization | `localisation-of-modules-and-support` | 111.003 |
| Covering lift criterion | `covering-spaces-and-lifting` | 293 |
| Cellular homology | `cw-complexes-and-cellular-homology` | 366.007 |
| Cohomological UCT and rational field duality | `singular-cohomology-and-coefficient-theorems` | 366.011 |
| Integral Hurewicz and weak CW comparison | `hurewicz-whitehead-freudenthal-and-cw-approximation` | 366.023 |
| Eilenberg–Mac Lane representability | `obstruction-theory-postnikov-towers-and-classifying-spaces` | 366.025 |
| Serre sequence and its products | `the-serre-spectral-sequence-and-applications` | 366.027 |
| Published finite-cover lift-sum transfer | `chern-and-pontryagin-classes-by-splitting-and-complexification` | 366.039 |

These homes were read from the current `research/plan-spec.json`. Therefore
the earlier suggested support orders **366.0245/366.0246 cannot retain
these dependency edges**: they precede representability and Serre, and
also the existing transfer home. The new pair must be placed after its
actual suppliers. Row 4 proves the lift-sum chain identities locally from
covering interfaces, so the published transfer can be retained as a
comparison reference without an item dependency if needed; this does
not remove the necessary representability/Serre ordering constraint.
The other contents of the supporting pair may require still later AT
homes. Exact full page closure must be mechanically mapped when
integrating these provisional items; this draft does not amend `requires`
or assert that this closure has already been registered.

For the eventual Thom-space application take c=r and i=n+r, with
r≥n+2, so i≤2r−2. An explicit CW Thom construction with no cells
in degrees 1,...,r−1 must supply the required connectivity. A merely
cohomological Thom isomorphism does not prove this connectivity.
The application must then explicitly combine this theorem with Thom
homology, rational UCT, the large-r BSO cohomology computation and
Pontryagin–Thom. These are separate downstream obligations.

## Source comparison and limitations of cited alternatives

Full texts read in the preceding audit: Milnor–Stasheff, *Characteristic
Classes*, Edinburgh PDF mirror, printed pp.207–208; Freed, *Bordism:
Old and New*, Harvard PDF, printed p.105.

- Milnor–Stasheff Theorem 18.3 proves a stronger finite-kernel/cokernel
  result for finite complexes, c>2, using cited sphere finiteness,
  finite generation of homotopy groups, and generalized Whitehead
  modulo finite groups. None of those citations is promoted to a
  proved local input here. Finite kernel/cokernel is not claimed.
- Freed (12.13) invokes Q-Hurewicz without proving it. Its invocation
  motivates the target range; it is not used as a proof supplier.
- This draft supplies its own weaker torsion-only argument for arbitrary
  CW complexes. Its mathematical steps require independent review
  before incorporation or readiness certification. No checks, source
  fetches, judgments or audits are claimed for the newly drafted rows.
