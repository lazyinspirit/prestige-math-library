# Ordinary quotient-stack operations: isolated proof proposal

This is owner construction, not a readiness or native-coverage receipt. Batch55
was live when these arguments were written. No canonical carrier, contract,
manifest or page is changed here. The claim remains the full rational ordinary
quiver CoHA, for every finite quiver, including loops and multiple arrows.
The proposed local supplier concerns precisely the representation, extension,
and finite flag quotient stacks occurring in that construction. It does not
assert six operations for arbitrary Artin stacks.

## 1. The normalization defect and its full-scope correction

The actual published Definition
`def-equivariant-borel-moore-homology-and-correspondence-convolution` sets

    H_i^{BM,G}(X) = H_G^{-i}(X, omega_X^G),  omega_X^G|_X=omega_X.

For a free GL-product Stiefel space U of complex dimension t, g=dim G, this
is stable H_{i+2(t-g)}^{BM}(X x_G U). Thus define the **intrinsic quotient
stack grading** by

    B_i([X/G]) := H_{i+2g}^{BM,G}(X)
                = stable H_{i+2t}^{BM}(X x_G U).                 (1)

This is a regrading of exactly the existing group, not a new topological
carrier. It must be stated in the ordinary CoHA definition, its page and
every consumer of its shift. It does not change the published fixed-group
normalization. In particular it is false that raw variety-normalized
H_i^{BM,G}(X) supports the present degree -2 chi(b,a).

Here is a check that detects the defect without a convention-dependent
source citation. Take the one-vertex no-arrow quiver, a=b=1. Then X=pt,
P is the upper triangular subgroup of GL2, L=GL1 x GL1, and e=0,u=1.
The map q:BP -> BL has stack dimension -1. The induced GL2-scheme G/P=P1
has dimension1. With the published variety grading, proper pushforward
from its BM homology has degree zero, but identifying the source with raw
L-equivariant BM of a point changes degree by +2; hence the raw product
has degree +2, while the claimed stack shift is -2. With (1), both
identifications are correctly normalized and the product has degree -2.
For arbitrary a,b the raw degree is 2(e+u); the intrinsic degree is 2(e-u).

If X is smooth of dimension x, write D=x-g. Equation (1) identifies B_i
with H_G^{2D-i}(X,Q). This also shows why the cohomological KS convention
and the intrinsic BM convention have different Euler-form degree formulas:
one must convert using the dimension D in each dimension-vector summand.
No sign or transpose is inferred just by relabelling H^* as H_*.

## 2. Precisely used proved suppliers and hypotheses

The following actual local arguments have been read. They are usable as
proved suppliers, not external source reports.

* `def-equivariant-borel-moore-homology-and-correspondence-convolution`:
  rational coefficients are characteristic zero; all actual ambient acting
  groups below are finite products of GL over C. Its finite approximation
  formula is the one used in (1).
* `thm-constructible-six-functors-proper-base-change-and-verdier-duality`:
  ordinary separated finite-type complex varieties, and equivariant maps
  with a fixed GL-product acting group, have the coherent proper trace,
  smooth complex orientation, proper/smooth exchange, composition and
  Cartesian pasting. We will implement change of groups on actual finite
  varieties; this theorem alone does not supply that change of groups.
* `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`:
  for GL-products the action-nerve construction has faithful bounded-Hom
  comparison and coherent product resolutions. Only finitely many maps
  and equations are tested at once, so its fixed finite interval bound
  suffices; no uniform finite resolution is asserted for all degrees.
* `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap`:
  the product of full-rank N by n frames has H0=Q and Hj=0 for
  1<=j<=2 min(N-n), which tends to infinity.
* `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`:
  applies to the locally trivial associated frame fibrations below. Its
  cone bound is applied on a fixed bounded constructible interval, not
  replaced by an unjustified global tensor splitting for a bundle.
* `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`:
  principal bundles with the explicit algebraic local sections below
  admit constructible descent, and the descent identifications satisfy
  the cocycle. Its principal-bundle proof uses the sections and finite
  algebraic charts, which we give for each nonstandard quotient.
* `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper`:
  its block-matrix proof gives e=sum_{h:i->j} b_i a_j,
  u=sum_i a_i b_i, rank-e vector projection, P=U semidirect L,
  and representable proper incidence map. Its proof includes loops,
  repeated arrows and rank-zero coordinates.

AC is inherited through these constructible, finite-model and properness
suppliers. The explicit matrix charts, flag identifications and degree
calculations introduce no additional choice principle.

## 3. Induction and presentation comparison, with actual finite models

Let G be the product GL of a total dimension vector, P its block upper
parabolic, L the block-diagonal Levi. Let Y be the upper-block arrow locus
and Z the product of its diagonal representation spaces. The following
are actual varieties:

    S=G x_P Y,    T=G x_L Y,    v:Y -> Z.

Indeed S is the vector bundle of upper-block arrow matrices over the
product partial flag variety G/P. Over a standard nonzero pivot-minor
flag chart choose an adapted basis by Gaussian elimination; this gives
an algebraic section of G -> G/P. The transition matrices lie in P,
so the local affine Y-bundles glue to S. For G/L, the extra data are
ordered complementary subspaces; this is an open locus in a product
of Grassmannians with algebraic adapted-frame sections on pivot charts.
The same construction gives T. These are separated quasi-projective
varieties of finite type. All rank-zero factors are omitted; the empty
product is a point. The quotient-stack equivalences

    [Y/P] = [S/G],       [Y/L] = [T/G]

are given on principal bundles by extension/reduction of structure group;
extending a reduction and then restricting it recovers that reduction,
so the two functors and their natural isomorphisms are actual inverses.

We need a graded identification

    B_*([T/G]) = B_*([Y/L])                              (2)

with the same convention (1) on both sides. On a G-frame model U,
T x_G U = Y x_L U. To compare this with a usual L-frame model V, use

    R=(Y x U x V)/L.

The projections to (Y x U)/L and (Y x V)/L are locally trivial
fibrations with fibres V and U. The first quotient is locally split
because an L-torsor is a tuple of frames of vector bundles, trivialized
on their finite algebraic frame charts; for the second quotient the
same fact holds directly. The spaces and their fibrations are algebraic,
separated and finite type. Restricted to L, U is still a free action
because L embeds in G; U has precisely the same ordinary cohomology gap
as before. The acyclic-fibre lemma therefore gives the bounded-Hom
comparisons on both projections. To see their coefficient identification,
pull back to the common principal L-bundle Y x U x V. Both pullbacks are
the given coefficient on Y; their descent data are identical L-actions.
The locally split Cech descent theorem gives the canonical comparison.
On a triple product both identifications are the identity on that same
principal bundle, so the cocycle follows. This explicitly verifies the
extra model hypotheses; it does not infer stabilization from freeness.

The projections from R are smooth of relative dimensions dim V and dim U.
Their smooth BM pullbacks shift by twice those dimensions. The index in
(1) on the first quotient is i+2 dim U, on the second i+2 dim V, and
on R it is i+2 dim U+2 dim V. Thus the comparison has intrinsic degree
zero. The same principal-bundle identity shows compatibility with
external products and every equivariant morphism of Y. Proper maps
remain proper on the associated quotients; smooth maps remain smooth,
and ordinary base change identifies their operations on the common
model. Thus (2) is a natural comparison of operations, not just a
vector-space isomorphism.

Exactly this argument handles any two induction presentations used in
flags, with their common frame products. There is no parabolic category
silently substituted for the proved GL-product category: parabolics
are represented by the actual induced varieties S with acting group G.

## 4. The nonrepresentable smooth pullback

For two blocks, r:T -> S induced by L subset P is a G-equivariant
Zariski locally trivial affine-space bundle of rank u. Over a P-frame
chart its fibre is P/L=U. If p=(u0,l) then its action on U is
u -> u0+l u l^{-1}; hence the transitions are affine linear. The map
v:Y->Z is an L-equivariant vector-bundle projection of rank e.
Write their induced stack maps as

    R=[Y/L] --r--> E=[Y/P] --q--> B=[Z/L],
                       q r = v.

For any locally trivial complex affine-space bundle a:A->B of rank d,
a^!:B_i(B)->B_{i+2d}(A) is an isomorphism: in ordinary cohomology
a^* is an isomorphism by contractibility on each local chart and Cech
pasting; smooth dualizing orientation identifies BM pullback with this
map after the 2d shift. This argument applies equivariantly on every
fixed-group frame model and hence on the stable groups. It is not a
claim that the bundle admits a global zero section. It applies to r
and v, so define

    q^! := (r^!)^{-1} v^! : B_i(B) -> B_{i+2(e-u)}(E).       (3)

In this formula identify the R presentation by (2). Thus every map in
(3) is an already constructed fixed-group operation or the inverse
of a proved isomorphism. This supplies the needed nonrepresentable
smooth pullback without asserting that q is representable.

For a finite block flag, P/L has the strictly upper block unipotent
coordinates. Filter by distance from the diagonal; the successive
quotients consist of the independent matrices in that distance and
are vector groups. On pivot charts the quotient by each filtration
step is a locally trivial affine bundle. Applying the preceding
argument successively proves that r^! remains an isomorphism of shift
2 dim(P/L), independent of the filtration: after pullback to the
adapted-frame charts it is the single positive complex Thom class
of the ordered upper blocks, and ordinary smooth composition gives
that class in every filtration order. The arrow-block projection has
all corresponding free upper blocks, so (3) has shift twice

    sum_{s<t} (sum_{h:i->j} d_i^t d_j^s - sum_i d_i^s d_i^t).

In particular successive diagonal-forgetting smooth maps compose
with exactly this orientation and degree. This proves the flag
composition rule used below, rather than assuming it for q.

## 5. Proper pushforward and actual Cartesian pasting

The proper p:E->M_d is represented, using E=[S/G], by the
G-equivariant proper incidence map S->X_d. Its finite stage

    S x_G U -> X_d x_G U

is proper: it is the associated closed subvariety in the relative
product Grassmannian over X_d x_G U. The common auxiliary dimension
dim U in (1) proves that p_* has intrinsic degree zero. Naturality
of the proper trace under the product-resolution comparison proves
independence of U and composition.

Here are details ensuring that finite-stage proper/smooth base change
and pasting give the interface needed for CoHA. In a 2-Cartesian square
of these particular quotient stacks with a representable proper map f
and a smooth block-forgetting map q, first choose a free frame cover
C_N->C of the common target, with auxiliary dimension t. Since f is
representable, A_N=A x_C C_N is a separated finite-type variety and
A_N->C_N is proper. Use the induced incidence description to see it
as the closed subvariety of the relative flag bundle; no additional
source frame is adjoined to that proper arrow.

If B->C is nonrepresentable, choose B's adapted-frame presentation
and a free frame space of dimension w for its total GL product.
Its associated principal-group quotient B_N over C_N is a separated
finite-type variety. This follows directly from the upper-block
vector-bundle chart over flags in section3; after choosing target
frames, its map to C_N has fibre (A^e x U)/U_unip. The action is free
on the frame factor. Local P-frame sections identify this quotient
with an affine bundle over the corresponding frame quotient, so
B_N->C_N is smooth of dimension r+w, where r=e-u. Put

    D_N = A_N x_{C_N} B_N.

This is now an actual Cartesian square of varieties; D_N->B_N is
proper and D_N->A_N is smooth of dimension r+w. Its four maps are
the finite representatives of the original square. The normalization
of C_N,A_N uses t, and of B_N,D_N uses t+w. Thus the ordinary smooth
shift 2(r+w) becomes 2r after (1), while both proper shifts remain
zero. Ordinary coherent proper/smooth base change applies, so

    q^! f_* = f'_* (q')^!                               (4)

in the intrinsic groups. The map called q^! here is (3): add the
Levi frame as well and compare on their product. On the common
adapted-frame principal bundle both maps are the same vector-bundle
orientation, with the u-dimensional affine-bundle orientation
inverted. The faithful bounded-Hom comparison in section3 identifies
them before passing to groups.

This also proves that these constructions do not depend on cover
or presentation. Any two finite choices are compared by their product;
on that product the maps are ordinary unit/counit traces and positive
complex smooth orientations, and the comparisons are natural in these
maps. For a fixed finite collection of maps or equations, choose all
frame gaps greater than the finitely many bounded-Hom comparison
bounds of their inputs, outputs, units, counits and orientation maps.
All objects descend from bounded constructible coefficients on the
fixed finite presentation varieties. Faithfulness then reflects the
finite-stage equality. One does not choose one N for every degree.

For a pasted pair of Cartesian squares, use the same target frame
cover, add the product of the finitely many source frame spaces, and
pull back the proper arrows rather than adding independent frames
to them. This realizes all corners of the pasted diagram as ordinary
Cartesian squares simultaneously. The ordinary six-functor theorem
says their exchange maps paste: expanding them as adjunction mates
reduces the equation to the composition of units/counits and the
triangle identities. The product-resolution comparisons preserve
those units and counits by their common principal-bundle identity.
Therefore (4) respects Cartesian pasting, composition of proper maps,
composition of block-smooth maps, identities and external products.
For external products use product frame covers; orientations concatenate
in the displayed order and their real degrees are even. No unproved
stack formalism, transversality, or finite-dimensional cohomology
of an infinite classifying space is used.

## 6. Full ordinary CoHA construction, associativity and unit

For every finite Q define

    H_Q = direct sum_{d in N^{Q0}} B_*(M_d;Q),
    alpha * beta = p_* q^!(alpha external beta).

The first factor is the subrepresentation of dimension a, the second
the quotient of dimension b. Sections4–5 make this an actual operation
of degree 2(e-u)=-2 chi_Q(b,a). Every input is a finite linear combination
of dimension-vector summands and graded classes; output has dimension
a+b, so no completion is needed for this algebraic direct sum. No claim
about a completed coproduct or any module action is made by this proof.

For a,b,c let F_{a,b,c} parametrize flags of quiver subbundles

    0 subset A subset AB subset ABC

with successive dimension vectors a,b,c. There is a 2-Cartesian square

    F_{a,b,c}  -> E_{a,b} x M_c
         |                  | p_{a,b} x id
         v                  v
    E_{a+b,c} -> M_{a+b} x M_c.

The horizontal arrows are smooth block-forgetting maps and the vertical
ones proper. To verify the 2-fibre product, an object in it is an extension
0->AB->ABC->C->0, an extension0->A->AB'->B->0, and an isomorphism AB'=AB;
transporting the subbundle A gives exactly the displayed flag. Conversely
a flag gives these extensions and the identity isomorphism. These
operations are inverse on families and on every compatible isomorphism;
they commute with base change of the family. Thus this is genuinely
2-Cartesian, including stabilizers, not merely a bijection of points.
The analogous square with M_a x E_{b,c} and E_{a,b+c} is proved by
quotienting the flag by A and pulling the resulting subbundle back.

Apply (4) to the first square and proper/smooth composition to identify
(alpha*beta)*gamma with the single map

    (p_{a,b,c})_* (q_{a,b,c})^!
        (alpha external beta external gamma).

The second square identifies alpha*(beta*gamma) with precisely that
same map. Section4 gives the common smooth orientation; section5 gives
Cartesian pasting and external-product coherence. The shifts agree
because

    chi(b,a)+chi(c,a+b) = chi(c,b)+chi(b+c,a).

This establishes equality of actual maps in the same graded component,
not just an identity of correspondences with hypothetical operations.
For d=0 the representation space and G0 are points, its intrinsic
B_0=Q, and both endpoint exact-sequence correspondences are identities.
The class1 is a two-sided unit. Zero coordinates omit the relevant GL0
factor and replace endpoint Grassmannians by points. For an empty
vertex set every object is the point and the result is Q. Every arrow
was counted separately in e; loops merely contribute b_i a_i. The proof
therefore includes all finite quivers without additional acyclicity or
loop assumptions.

## 7. Scientific status and canonical integration still required

This is a proposed proof of the missing ordinary supplier package,
using the explicitly listed proved constructible suppliers. It requires
owner/root scientific review before certification. It has not been
integrated into canonical55 while that batch remains live. The needed
canonical chain is an intrinsic-grading definition, an induction/model
comparison lemma, a quotient-stack operation/coherence lemma, then the
ordinary definition and associativity theorem. Full pre-edit archives,
actual dependency/contract bindings, source audit, rendered proof checks,
and ALL direct/indirect consumer inspection remain integration tasks.
In particular the current54comparison must say that its -2chi(b,a)
uses this intrinsic grading, while the published BM definition uses
the variety grading. Batch53's actual geometric-action consumers must
be read after drain, without editing its live native files.
