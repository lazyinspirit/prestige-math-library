# Fixed Spin-c labels in a nonprimitive infinity handle

This is the new torsion-sensitive local handle operation. The chosen-handle
maps and the inward/outward winding isomorphisms are used directly, with
no new supplier reading or review. The conclusion below explicitly states
the infinity-rank hypothesis it needs; that hypothesis is not manufactured
from a nonzero summed surgery map.

Let W attach a single two-handle along K⊂Y, where the image of [K] in
H₁(Y;Z)/Tors has divisibility m>0. Suppose this handle lowers b₁ by one
without introducing a nonzero rational intersection direction. Fix an
incoming torsion Spin-c structure t which extends, and retain the full
extending Spin-c label in the triangle count.

## The actual finite label set

The relative handle cochain group H²(W,Y;Z) is Z. The preceding map
H¹(Y;Z)→H²(W,Y;Z) evaluates a cohomology class on K; its image is mZ.
Exactness therefore identifies the kernel of H²(W;Z)→H²(Y;Z) with Z/m.
Consequently the extensions of t are an affine Z/m-set. Choose one
extension s₀ to fix its origin, and write the others as s_i, i mod m.
This is the full extending structure, not just its outgoing restriction.

In the wound triple choose a transverse cut p in the attaching curve.
Trivialize the triangle's oriented two-plane data on the boundary pieces
away from this cut. Passing an α-boundary arc once across p changes the
relative two-handle obstruction by one: the normal framing on its core
turns once in the corresponding relative two-cell. Changing the
trivialization by an incoming gauge class changes this integer by its
evaluation on K, hence by a multiple of m. Thus

    i(ψ) = #(∂_αψ crossing p) mod m

is precisely the affine difference s_z(ψ)−s₀. This derives the residue
from the relative obstruction calculation, rather than assigning labels
after counting. In particular a triangle with residue j≠i is never a
term of the fixed map F_(W,s_i), even when the two structures have the
same outgoing restriction.

## The m winding branches

Split the winding generators by that residual crossing number. They give
right and left complexes R_i,L_i, i mod m. The inward family crosses p
once and the outward family does not. Hence their connecting maps have
the pattern

    a_i:R_i→L_(i+1),       b_i:R_i→L_i.

All indices are cyclic. This pattern retains the integer boundary count
before reducing modulo m; it is not an average of the m sectors.
The inward and outward constructions in the preceding files show each
a_i and b_i is an infinity isomorphism. For the outward statement apply
the uniform plus argument to the finite direct sum of all branches:
the inward leading map is a cyclic permutation of the thin-bigon
isomorphisms, while the outward map is block diagonal. The determinant
argument makes this whole block diagonal map invertible, and therefore
makes each b_i invertible. No individual b_i is inferred merely from a
nonzero sum.

For the chosen two-handle triple, its fixed map on sector i factors as

    C = Cone(⊕R_i → ⊕L_i) → R_i → CF∞(Y(K),s_i|_(Y(K))).

The first arrow is the right-part projection in sector i. The second
arrow q_i counts the actual meridional small triangles. In a planar
lift, each right generator has one nearest output generator and one
nonnegative small triangle with those three corners. It has µ=0 and
count one, with its actual U exponent n_z. Its boundary crossing is i,
so it represents s_i. The same obstruction calculation excludes every
other residue from this fixed map. For a left generator the prescribed
triangle has a negative coefficient at the protected winding corner;
there are no counted left terms. These two assertions follow by following
the α-boundary through the two winding strands: the right arc closes
at the meridian without crossing the zero sheet, whereas the left arc
would have to subtract that sheet.

Every non-nearest right triangle uses an old complementary region.
Choose the total area of the winding bands less than half the smallest
such region's area. Then q_i is its nearest-generator bijection, with
the indicated U shifts, plus strictly lower energy terms. On each fixed
relative degree there are finitely many generators, so its triangular
inverse is a finite series there. This proves q_i is an infinity
quasi-isomorphism, individually for the retained Spin-c structure s_i.
This is the labeled small-domain statement needed here; the all-sector
sum of the q_i is not used in its proof.

## Why every labeled map is nonzero when the standard ranks are available

Pass to infinity homology, and denote the maps a_i,b_i by the same
letters. The connecting map δ is the cyclic block map

    (δr)_i = b_i r_i + a_(i−1) r_(i−1).

If r∈ker δ, then all its coordinates are determined by any one:

    r_i = −b_i⁻¹ a_(i−1) r_(i−1).

Since these transport maps are isomorphisms, a vector in ker δ with
one zero coordinate is zero in every coordinate. Thus each projection
ker δ→H(R_i) is injective. This is a statement for **each** residue,
including m even; no division by m or action by m times a primitive
homology class is involved.

Let the common rank of H(R_i) be r, and assume the incoming infinity
homology has rank 2r. These are exactly the ranks supplied by standard
infinity modules when the first Betti number drops by one; they remain
a prerequisite of this last paragraph. The cone exact sequence gives

    rank H(C) = rank ker δ + rank coker δ = 2 rank ker δ,

because δ is a square map between two free modules of the same rank.
Therefore rank ker δ=r. The projections above are consequently
isomorphisms: in homogeneous Laurent bases, an injective full-rank
degree-preserving map has constant invertible matrix after the U shifts
are removed, so its determinant is a Laurent unit. Equivalently this
can first be seen over the fraction field, then the same homogeneous
grading excludes a nonunit determinant.

The cone exact sequence maps H(C) onto ker δ. Composing with its i-th
projection and q_i sends a class with any prescribed nonzero coordinate
to that nonzero output in the **fixed** map F_(W,s_i). The kernel is the
common image of ⊕H(L_i). Thus every extending s_i has the same-rank
nonzero quotient map, independently of what happens in the other
Spin-c sectors. For r=1 its nonzero coefficient is one times a Laurent
unit, not an unspecified nonzero scalar obtained from a summed map.

The infinity-standardness/rank hypothesis above has not been proved
here for arbitrary rational homology spheres or intermediate manifolds.
Nor does this local calculation identify an arbitrary earlier handle
map's image with the required quotient. Those are separate assembly
requirements for the full rational-cobordism isomorphism. The present
new operation supplies the missing finite torsion label and the
individual nonvanishing calculation once those rank interfaces are
available, without substituting the all-Spin-c surgery sum.
