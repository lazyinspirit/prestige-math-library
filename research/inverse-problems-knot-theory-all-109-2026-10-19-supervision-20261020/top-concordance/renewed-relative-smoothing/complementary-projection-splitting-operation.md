# Elementary complementary-projection splitting

This is a second finite operation for the independent end-completion route.
It is not an actual smoothing theorem. It expands the projection part of
Quinn, *Ends of maps I*, Lemma 8.6, printed pp.327–328, newly read in the
cached OCR with the surrounding full §8. Its hypotheses include an actual
finite extension projection; that input is not inferred from obstruction
vanishing.

For an idempotent e on a finite free module F over any unital ring, set

V(e)=((1−e,−e),(e,1−e)).

This is the product E₁₂(−e)E₂₁(e)E₁₂(−e) of three elementary block shears.
Its inverse is ((1−e,e),(−e,1−e)). Direct multiplication, using e²=e,
gives

V(e) diag(e,1−e) V(e)⁻¹ = diag(0,1).

For completeness, multiplying V(e) by diag(e,1−e) gives ((0,0),(e,1−e));
multiplication by the displayed inverse then gives ((0,0),(0,1)). This is
an actual elementary change of projection on F⊕F, without any supposition
that im(e) or ker(e) is free.

For a geometric module, copy F at the same basis points in the two summands.
If e has propagation at most η, each block shear and its inverse has
propagation at most η; the complete three-factor path and its inverse have
propagation at most 3η. Composing that path with a three-factor inverse
changes points by at most 6η. The estimates are sums of propagation bounds,
so no assertion about only the final matrix's propagation substitutes for
control of the intermediate elementary factors.

Here is the application to splitting. Suppose h on G is a partial projection
on a disk, valid over the radius-3/4 disk. Suppose an actual global projection
e on a geometric module F supported in the radius-2/3 disk is supplied and,
over the radius-1/2 disk, F=G⊕G′ and e=h⊕h′, where h′ is a geometric
projection. All agreements hold on buffered neighborhoods, not only on a
bare closed set. Suppose all propagation bounds are sufficiently smaller
than the positive gaps between these radii.

Stabilize h by the geometric projection diag(0,1) on F⊕F. Use V(e)⁻¹ and
V(e) to change this added projection to diag(e,1−e). Retain e as a separate
direct summand. The complementary block is h⊕(1−e). On the radius-1/2
disk that block is

h ⊕ (1−h) ⊕ (1−h′).

Apply the three shears defining V(h) to the first two indicated summands
there. This can be done as a global elementary operation by cutting off
the shear entries outside a slightly smaller radius-1/2 disk: a shear with
any chosen entry is still invertible, with inverse obtained by negating that
entry. No idempotency of the cut-off entry outside the inner region is
required. Choose the cutoff equal to the original entry on a neighborhood
of the radius-1/3 disk, enlarged by more than the propagation of every
intermediate factor. Within that enlarged core, the exact matrix identity
therefore applies.

The complementary block is now a geometric projection on a neighborhood
of the radius-1/3 disk: diag(0,1,1−h′). Its generators in that core may be
split off individually, because the geometric projection has no off-diagonal
entries there. Include them with the retained e-block. The resulting central
summand is supported in the radius-2/3 disk, and the other summand has no
generators in the radius-1/3 disk. The operations never mix the retained
e-block with the other block, so this is an actual direct-sum decomposition,
not merely a homological splitting.

All entry cutoffs and core subdivisions concern finitely many basis points.
For given positive margins one takes a finite propagation budget smaller
than each margin divided by the number of elementary factors. This supplies
the uniform control claimed for this finite splitting operation. To iterate
it over handles, one must choose the meshes and tolerances backwards from
the final requested tolerance, as in Quinn printed pp.329–330; a fixed mesh
without that backward budget does not establish the controlled theorem.

This finite construction adds no choice assumption. Its remaining inputs
are the actual extension projection and buffered geometric identifications.
The Laurent-window fill in the sibling note supplies the puncture-filling
step; obtaining the extension on a disk still includes the torus lift,
elementary diagonalization, bounded truncation, and radial control. This note
does not suppress those operations or claim completion of them.
