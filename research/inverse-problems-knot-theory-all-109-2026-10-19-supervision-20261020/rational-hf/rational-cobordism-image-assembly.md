# Rational-cobordism infinity map: the actual image/quotient assembly

This construction consumes the fixed-label cyclic winding operation
directly. It does not repeat its small-triangle proof. Infinity standardness
for rational homology spheres is an explicit input from the separate
induction assembly, whose integral-surgery ordering still has the recorded
arithmetic hold. No current full correction-term closure is asserted.

## A primitive circle action on the finite cyclic model

Let a null-intersection two-handle kill K=m h modulo torsion, with h a
primitive free homology class. Use the actual cyclic cone from
`nonprimitive-fixed-spinc-triangle-operation.md`, retaining every s_i.
The circle action needed below is that of h, not that of m h. Replacing
one by the other over F₂ when m is even would be invalid.

Represent h by an integral one-cycle transverse to the periodic surface
dual to this free direction. Weight each disk by its intersection with
that cycle, introducing a variable T. On a right or left branch, every
periodic domain represents a surface on the outgoing side. The image of
h there is torsion in this killed direction, so its intersection with
each such surface is zero. The weight on same-branch disks is therefore
a coboundary: integrate it from a reference generator. Multiplication of
each branch generator by the corresponding power of T removes these
weights from its differential. This is an infinity change of basis; no
plus cutoff argument is used here.

The remaining weights on the cyclic inward/outward edges have total one
around the branch cycle. Indeed that full cycle is the primitive periodic
surface on the incoming side, and h has intersection one with it. This
statement uses the full branch cycle, not an individual attaching arc of
K, which has divisibility m. A vertex change of T basis moves all weights
to one selected edge: for an integer edge cochain on a circle, subtracting
successive partial sums leaves zero on every edge except the last, where
the value is the original total. Hence the weighted connecting matrix is
the unweighted cyclic matrix with exactly one a_i replaced by T a_i.

Differentiate its differential in T at T=1. On the chain level this is
the circle-action count: differentiating T^w counts w modulo two times
the disk count. The chain relation follows by differentiating d_T²=0.
A T-dependent change of branch basis changes this action by a chain
homotopy, since differentiating a conjugation adds a commutator with d.
Thus the homology action A_h sends the right component across that one
edge to the left component and has zero action on a class represented
purely on the left. In particular

    Im H(L) ⊂ Ker A_h.

The fixed map F_(W,s_i) factors through the right projection p_i and its
individual quasi-isomorphism q_i. Therefore it kills Im H(L), and also
kills Im A_h, because this action lands on the left. Conversely, if
F_(W,s_i)(ξ)=0, the injectivity of every coordinate projection on ker δ
in the fixed-label operation shows the entire right projection p(ξ)=0.
The cone exact sequence then places ξ in Im H(L). Consequently

    Im A_h ⊂ Ker F_(W,s_i) ⊂ Ker A_h

for every individual s_i. This argument keeps the finite Spin-c residue
throughout and involves no division by m, summed map, or assumed scalar
symmetry of the different torsion sectors.

Suppose a submodule M of the incoming infinity group is an exterior
module on b free directions, with A_h contraction in one primitive
direction. Then Ker(A_h|M)=Im(A_h|M), so the two inclusions give

    Ker(F_(W,s_i)|M)=Ker(A_h|M).

The map therefore injects M/Ker A_h into the outgoing infinity group,
separately for each s_i. That image is an exterior module on b−1
directions. The remaining circle actions commute with the quotient map:
apply the same weighting construction to passive cycles, whose branch
weights can be kept on their old disks. Their disk/triangle broken ends
give the commuting action identity. In particular the incoming top
exterior generator survives and maps to the top exterior generator in
this smaller image. No standardness of the *whole intermediate outgoing
group* was assumed in this statement.

## An actual ordering of the rational-cobordism two-handles

Let W be a rational homology cobordism between rational homology spheres.
Choose an ordered handle decomposition with n₁ one-handles and n₃
three-handles, and no zero-/four-handles. Its relative rational cellular
complex is exact, so its two-handle boundary map has rank n₁ and there
are n₁+n₃ two-handles. Select n₁ linearly independent columns of that
boundary matrix and put their actual attaching components first. This
is a permutation of handles of the same index, not an unperformed
rational linear combination of attaching knots.

Each of these first handles kills a nonzero rational free homology class
and lowers the boundary b₁ by one. Its integral class can be nonprimitive;
that is why the individual finite-label operation was needed. After
these n₁ handles the boundary Y_mid has b₁=0. The relative two-/one-handle
matrix of this prefix is square and invertible over Q, so H₂ of the
prefix vanishes. In particular Y_mid is a rational homology sphere.

All the other attaching classes vanish in the old one-handle rational
quotient. Every remaining two-handle creates a new free boundary class.
To see why no later handle can instead preserve b₁ or kill an earlier
new class, cap its rational Seifert surface in the partial cobordism.
A nonzero rational framing would give a two-cycle of nonzero square.
If it killed an earlier newly created free class, the two capped cores
would have matrix [[0,ℓ],[ℓ,a]], ℓ≠0, of nonzero determinant. Either
case gives a nondegenerate two-dimensional intersection subspace of a
partial cobordism. Such a subspace cannot vanish when included in W:
if a class vanished there, its intersections with all these same compact
cycles would vanish, contradicting nondegeneracy. But H₂(W;Q)=0. Thus
only the free-creating case occurs. The final n₃ three-handles remove
these free directions. This proves the required kill-then-create order
for the actual selected handles.

## Preserve the earlier image through every fixed handle

Start with the standard infinity module of the incoming rational sphere.
After the one-handles the whole ambient group is that module tensored
with the exterior algebra on n₁ generators, by the reused tensor model.
The actual one-handle map appends its top exterior generator.

Apply the first killing two-handle with the restriction of the given
global Spin-c structure, retaining its particular finite residue s_i.
The preceding quotient calculation injects the exterior module modulo
the contraction kernel. The image of the original one-handle top line
is nonzero and is the top line of this image module. Repeat this on
the smaller exterior image at each next killing handle. This tracks
the actual earlier image; it does not assume that a nonzero map on the
whole intermediate group is nonzero on that image.

After n₁ killing handles the tracked image has Laurent rank one and
contains the nonzero image of the original generator. The whole target
HF∞(Y_mid) has Laurent rank one by rational-sphere standardness. The
map is homogeneous, so between homogeneous rank-one Laurent modules
its nonzero coefficient is a single U monomial, hence a unit. Thus
the whole prefix map is an infinity isomorphism for the restriction
of the given global structure.

For the suffix, reverse the handle decomposition, starting from the
outgoing rational sphere. The reversed prefix consists of its n₃
one-handles and the corresponding killing handles, so the same
fixed-label argument gives an infinity isomorphism to Y_mid.
The forward suffix map is its adjoint. On chosen complexes this follows
by reflecting each holomorphic disk or triangle: the corner labels are
reversed, n_z and its count are preserved, and the Laurent pairing
matches dual generators. One- and three-handle top/bottom maps are dual
by their explicit tensor definitions. The resulting pairing on infinity
homology is perfect, since the finite free Laurent complexes are dual
and their torsion Spin-c homology is free. An adjoint of an isomorphism
under perfect pairings is an isomorphism. Composing prefix and suffix
proves the fixed-structure infinity map of W is an isomorphism.

Finally H₂(W;Q)=0, χ(W)=0 and σ(W)=0, so its already constructed
degree formula is zero. The infinity/plus square is the chosen-handle
square already constructed. Hence, once rational-sphere standardness
has its remaining topological induction input, this assembly supplies
the original rational-ball map interface for each extending structure.
It does not itself assert that the still-unproved all-IHS ±1-surgery
ordering has been supplied.
