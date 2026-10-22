# Separate higher-dimensional extension: actual smooth dimension n≥6

This is NEW scope beyond the frozen n=6 first-review bundle. It does not
replace or reset that review. The stable smoothing can have many Euclidean
factors, so an unstabilized five-dimensional conclusion requires completion
in every actual smooth dimension n≥6, one factor at a time. An n=6 proof
alone cannot be iterated on a higher-dimensional smooth manifold.

The fresh source is Quinn, *Ends of maps I*, §6.1–6.3 and §7.2–7.4, all read
in full. The higher-dimensional Whitney inputs are retained **Statements
only**: clean-disk general position in codimension at least three; opposite-
sign boundary framing; framing correction when both sheet dimensions are
at least three; the local clean-framed Whitney move; and local handle
cancellation. Each declares Countable Choice. No provider Proof, Facts or
verification evidence is consulted. The new n=6 operations remain subject
to their own independent review.

## The two-sheet borderline in every level dimension m≥5

The n=6 clean-disk construction extends to A_i² and B_j^(m−2) in a smooth
m-manifold for every m≥5. The attaching-circle push-off and complement
injection are unchanged: first obtain the nullhomotopy in the complement
of the entire B-family. Only then perturb the disk relative its clean collar.
The dimension inequalities used are 2+2<m for self-intersections and for
all A-sheets. Avoidance of B is obtained from the complement contraction,
not from the false inequality 2+(m−2)<m.

The disk-normal rank is m−2, with admissible summands of ranks one and
m−3. The map π₁(SO(m−3))→π₁(SO(m−2)) is onto. For m=5 this is the
explicit 2π planar rotation detected by the unit-quaternion double cover.
For m≥6 use SO(l)→SO(l+1)→S^l with l=m−3≥3: π₂(S^l)=π₁(S^l)=0,
so the homotopy exact sequence makes the inclusion an isomorphism on π₁.
Thus rotating the adjustable second summand kills the actual framing loop,
while keeping the corner collars fixed. The actual clean-framed local move
then gives the same finite-family control inside the supplied open buffered
neighborhood. No high-dimensional clean-disk theorem is used in this
codimension-two case.

Likewise the belt-complement calculation extends to a level of dimension
m≥5. A two-handle surgery replaces S¹×D^(m−1) by D²×S^(m−2). Removing
the attaching loops does not change π₁, since 1+1<m and 2+1<m. Removing
the new belts gives the annulus×S^(m−2) pieces, whose intersection and
piece fundamental groups are both Z. Restoring them kills only the supplied
null attaching-loop classes. The local complement injection is therefore
valid in the chosen neighborhood containing those actual disk maps.

## Higher-index geometric connectivity: eliminate k≤n−4

The zero-/one-handle operations and the k=2 operation retain exactly their
dimension-six constructions; all their strict inequalities remain valid for
n≥6. Suppose next that 3≤k≤n−4, that lower-index handles have already been
removed, and that the k-core disks have actual small relative nullhomotopies.
The desired new cancelling pairs have indices k+1,k+2. No claim is made
that arbitrary (k+1)-disk maps embed by general position.

Push the nullhomotopies into the (k+1)-skeleton and off the center points
of the k-handles. This gives their relative nullhomotopies after adjoining
the old attaching pieces A=S^(k−1)×D^(n−k). Let B be the union of the
(k+1)-handles involved, and M the old intermediate boundary with the
attaching interiors removed. The pair to be filled is

(∂₁N_k∪B,M).

Adjoining the attaching pieces to both members gives the pair where the
nullhomotopies have just been constructed. The natural map of these two
pairs is a homology isomorphism by excision: each added attaching piece
meets the first pair inside its subspace. Both pairs are (k−1)-connected
in the controlled local cover. The added pieces and their attaching
intersections are simply connected, because k−1≥2 and n−k−1≥3;
Van Kampen shows their fundamental groups have not changed.

The relative connectivity here includes degree two. It therefore gives an
isomorphism π₁(subspace)→π₁(ambient), not merely surjectivity. Consequently
the inverse image of each subspace in the common simply connected ambient
cover is itself simply connected: its fundamental group is the kernel of
that isomorphism. This verifies the subspace hypothesis of the retained
ordinary relative Hurewicz contract. Adjoining the simply connected attaching
pieces preserves the same fundamental-group identification.

Pass to that common simply connected cover. The retained choice-free
ordinary relative Hurewicz contract identifies π_k with H_k for both pairs.
Consequently the displayed map is also an isomorphism on relative π_k.
The actual relative disk class, which is zero after adjoining A, is already
zero before adjoining A. This gives the required (k+1)-disk nullhomotopies
in (∂₁N_k∪B,M), rather than asserting that homology zero always means a
homotopy is zero. All involved pieces lie in the prescribed finite handle
neighborhood, so this passage enlarges control only by its finite buffer.

Push these disk maps off the center points of the (k+1)-handles. Their
excursions across the outgoing handle boundaries are actual core
(k+1)-disks. Band-sum parallel copies along trees of arcs in the intervening
(n−1)-level. The relevant inequalities are

1+(k+1) < n−1,   1+1 < n−1,

which follow from k≤n−4. Hence the arcs can avoid all the disks and one
another, and sufficiently thin bands give actual disjoint embedded
(k+1)-disks. This does not require 2(k+1)<n−1. Boundary frames along an
interval can be joined: the required k-frame fits in its normal (n−2)-space,
with n−2−k≥2, so its Stiefel space is connected. The resulting boundary
k-spheres have homotopies to the original core-plus-cap **maps**. Those
caps are not claimed embedded when their dimensions are too large.

Their labelled intersection matrix with the k-handle belts is the identity.
The two complementary sheet dimensions in the level are

a=k,   b=n−k−1,   a+b=n−1.

Here a,b≥3. Actual Whitney circles with equal labels contract in their
buffered neighborhoods by the supplied controlled connectivity. General
position makes their disks embedded and disjoint from the entire finite
family because 2+a<n−1 and 2+b<n−1. The retained framing correction and
local clean-framed move apply exactly in this dimension range. They remove
the excess intersections without the codimension-two workaround. Add the
actual cancelling (k+1,k+2) pairs supplied by the embedded disks, then
cancel the geometrically paired (k,k+1) handles. Later attaching data are
carried along by the retained local cancellation contract.

This eliminates indices through n−4. Applying the zero-/one-handle operation
from the opposite boundary removes original indices n and n−1. Its new
dual handles have original indices n−2,n−3. Thus the resulting presentation
has exactly the two allowed degrees n−3,n−2. The index budget is valid:
(n−4)+1<n−2, so the two eliminations leave two adjacent degrees available.

## Frontier improvement through relative degree n−3

The frontier path- and one-connectivity operations use only arcs and disks
of dimensions one and two, so they extend unchanged. Improve relative
connectivity successively through k=2,…,n−3. The k=2 step uses disjoint
two-disks directly, since 2+2<n for n≥6.

For k≥3, remove handles of index at most k−2 on the required compact slab,
then move the relative k-disks into its k-skeleton. Band the actual k-handle
core disks along arc trees in the (n−1)-level. Here

1+k < n−1

because k≤n−3. The resulting disks are actually embedded. Their boundary
dimensions against the dual belts are

a=k−1,   b=n−k,   a+b=n−1.

For k=3 this is the two-sheet borderline a=2,b=n−3≥3, handled by the
explicit complement/contraction/framing operation above. For k≥4 both
dimensions are at least three, so the retained stable-range contracts apply.
After disjoining the boundary spheres from the belts, radial motion in the
punctured handle factors gives disjoint cylinders to the old frontier. Delete
neighborhoods of the resulting proper embedded k-disks. Their normal bundles
over disks are trivial; no externally prescribed boundary framing is imposed
on these new cut disks. Excision kills the corresponding relative homology.
The finite controlled Hurewicz operation gives the next relative connectivity
after its fixed finite stage count. Repetition ends at n−3, not at an
unbounded index.

## Projection, kernel cuts and actual controlled slab products

In the actual n-dimensional end, replace degrees three/four in the earlier
chain-projection construction by n−3/n−2. A tame domination r into a finite
slab K and a contraction of its (n−3)-skeleton give an actual selfmap h of K.
A larger compatible slab L must still have only degrees n−3,n−2; otherwise
the chain-homotopy term in degree n−1 cannot be dropped. With that genuine
input the identities T d=1−h and dh=0 prove h²=h and im(h)=ker(d)
exactly as before, now for d:C_(n−2)→C_(n−3).

The geometric zero/identity stabilizations and elementary slides have the
same interpretation with these indices. The final intermediate-level sheets
are the lower belt two-spheres and the kernel attaching (n−3)-spheres.
From the upper frontier the latter are belts of dual two-handles, whose
attaching loops have actual small spanning disks. Thus the generalized
two-sheet borderline above applies, not the stable-range clean-disk
contract. Once the kernel handles' attaching spheres avoid all lower belts,
radial motion pushes them to the original frontier, and their interiors
may be deleted. Excision and finite controlled Hurewicz through dimension n
give the approximate-completion deformation on a finite dominated slab.

For the controlled slab-product operation, start with an actual smooth
n-dimensional controlled h-cobordism, not an unsmoothed TOP slab. Normalize
to the same two degrees. The actual controlled matrix isomorphism must come
with elementary factors **and controlled geometric arcs**; the finite
algebra operations alone do not provide those arcs. Realize the factors by
slides, then use the same two-sheet Whitney operation on its diagonalized
labelled intersection matrix. Local handle cancellation removes all pairs,
giving the actual small collar product. The controlling nullhomotopies and
arcs are substantive geometric inputs to be constructed from the genuine
frontier lifting data.

The control-base dimension must also be tracked. If the actual smoothing is
on W⁵×R^k and one removes a single R factor by this completion, the literal
product-end base is B=W⁵×R^(k−1), of dimension n−1. A five-dimensional
matrix theorem alone covers k=1. Keeping only W as the algebraic control
base for k>1 requires a separately proved construction which also controls
all the remaining Euclidean coordinates; no such construction is inferred
here. Its homotopy equivalence with N×I likewise does not permit replacing
the actual control base by a three-complex. Thus either finite-dimensional
matrix control must be supplied at every actual base dimension encountered,
or an exact parameter-control reduction or an actual single-line smoothing
must be constructed. Actual local reference lifts and the two-ended
slab-h-cobordism criterion remain separate interface obligations. No
lower-dimensional matrix pass is adopted as their proof.

## Scope and choice ledger

For each fixed n all index lists, homotopies and handle operations above are
finite. The relative Hurewicz comparison uses its retained choice-free contract
after passing to the actual simply connected local cover. The higher-dimensional
Whitney and handle Statements assume Countable Choice. Countable independent
height-band selections and summable collar assembly are as in the separate
product-end note. No stronger choice principle is inferred from the words
“higher dimensional”.

This separately authored extension enumerates the additional higher-index
operations and dimension inequalities. It needs independent review in addition
to the frozen n=6 first pass. It does not grant accepted status to unreviewed
n=6 components or to the still-owed matrix, parameter-control and slab-reference inputs.
