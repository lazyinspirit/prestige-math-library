# The actual completed product end has a proper CE boundary map

This supplies the input to the independently authored cellular-map approximation
operation. It uses an actual manifold completion and its collar, not merely
a formal end obstruction. No shrinking theorem is used in this proof.

Let Θ:P→B×R be a homeomorphism, with P an actual smooth manifold. Suppose
an actual manifold completion P̄ is supplied, together with a proper continuous
map

F:P̄→B×(−∞,∞]

whose restriction to P is Θ, and whose inverse image of B×R is exactly P.
Assume the added end D=F⁻¹(B×{∞}) is a collared boundary submanifold.
Write β:D→B for the boundary restriction. The assertions may equally be
restricted over a neighborhood of the compact zero cylinder, where F is
actually proper; no global completion outside that neighborhood is needed.

The map β is proper, since a compact K⊂B gives the compact set
F⁻¹(K×{∞}). It is onto: for b∈B, the points Θ⁻¹(b,n) lie in the compact
set F⁻¹({b}×[n₀,∞]) for n≥n₀. A convergent subsequence (or compactness and
a cluster point) has a limit mapping to (b,∞), so its limit lies in β⁻¹(b).
All relevant compactness is in metrizable manifolds and Countable Choice is
sufficient for the sequence formulation.

Fix b and its compact fiber Q=β⁻¹(b). Let V be any open neighborhood of Q
inside D. Choose a collar neighborhood O of Q in P̄, contained in the
collar over V, with collar projection c:O→V. Properness of F gives a
coordinate ball U about b and T<∞ such that

F⁻¹(U×[T,∞]) ⊂ O.

Here is the closed-map argument: the complement of O is closed, its F-image
is closed because F is proper between locally compact Hausdorff spaces,
and that image misses (b,∞). A sufficiently small product neighborhood of
(b,∞) therefore has preimage in O. Choose U a smaller coordinate ball.

Push Q a sufficiently small positive distance into P using its actual collar.
Compactness of Q and continuity of F ensure that the entire push lies in O
and that its positive endpoint Q′ lies in Θ⁻¹(U×(T,∞)). The latter open
set is homeomorphic to a ball times a half-line, so the resulting map
Q→Q′ contracts there: in U-coordinates contract the base coordinates to
the center and the height to any fixed height greater than T. This is an
explicit homotopy, and all its points remain in F⁻¹(U×[T,∞])⊂O.

Concatenate the collar push with this contraction, then apply c throughout.
On Q at time zero the collar projection is the identity. The endpoint is
a single point of V. Thus the inclusion Q→V is nullhomotopic. Since V
was arbitrary, Q is cell-like in D. The boundary map β is therefore a
proper surjection with compact cell-like fibers, namely a CE map.

The final projection back to D is essential. A contraction in a neighborhood
inside P̄ alone would not prove cell-likeness in its boundary D. No assertion
that the fibers already have nested ball neighborhoods, or that their quotient
map is already a limit of homeomorphisms, has been assumed.

If the completion is exactly the supplied product over an open protected
region A⊂B, then β is the original homeomorphism there, with the original
smooth boundary germ. In dimension five this supplies the required actual
boundary-homeomorphism condition after removing a closed codimension-zero
piece inside that protected smooth germ. The remaining approximation theorem
must still be proved independently.
