# Uniform plus truncations in the winding comparison

New construction for the outward winding operation. The chosen-handle,
Kirby and analytic interfaces are reused directly. This is an authored
argument, with no new independent review or original-item closure.

## Separate an infinity gauge from a plus identification

Fix one equivalence class of γ-induced generators in a sufficiently wound
zero-surgery diagram. Write its paired generators as x⁺_a,x⁻_a for a in a
finite set S. Each of their α₁ coordinates lies on one of two strands of
the winding finger. Only finitely many consecutive turns contain such
corners: their turn numbers have the form k+aₓ with fixed offsets aₓ.
The difference of two turn numbers is the γ component of their relative
Spin-c difference, so these offsets do not grow with further winding.

Cut α₁ at its central crossing p with the transverse meridian. Normalize
the inward disk classes to cross this cut once, and outward classes to
cross it zero times. The winding positivity estimate in the preceding
construction gives these two possibilities for a positive index-one disk
from the right strand to the left strand, and gives no reverse disks.
For disks within either strand, the cut crossing is zero. Nonzero extra
periodic multiples are excluded by the two winding coefficients of
opposite signs, after the index-correcting sphere term is included.

For a path of basepoints, the change of n_z for a disk is the signed
intersection of its boundary with that path. On the graph of same-strand
and outward disks this change is a coboundary. Indeed, summing along a
closed graph path gives a periodic domain with zero crossing at p.
Its coefficient on the winding periodic generator is therefore zero.
The remaining doubly-periodic domains have no boundary on this part of
the winding finger, and a sphere has multiplicity one at both endpoints
of the basepoint path. Their changes of n_z are zero. Thus the sum around
every graph cycle is zero.

Choose one vertex in each connected component of that graph. Integrating
the changes of n_z along graph paths gives integer potentials h(x⁺_a)
and h(x⁻_a), independent of path by the preceding cycle calculation.
Multiplication of the corresponding infinity generator by U^{h(x)}
therefore identifies the same-strand differentials and outward maps at
the two basepoints. These are invertible Laurent changes of basis.
**They are used only in the infinity complexes.** No claim that they
preserve the original plus cutoffs is made.

This permits the initial basepoint to be moved to the cut-p side of the
finitely many corner-containing turns. The target outward infinity map is conjugated
by invertible Laurent changes of basis, so proving the outward map an
isomorphism after this move proves it before the move too.

## A corridor between the cut and the corner block

Choose the corridor on the cut-p side of the whole corner block. Along
α₁, every corridor segment can therefore be followed back to p without
passing a corner of any selected generator. Take the total winding N
large enough that two desired levels M₁ and M₂ there lie far from
the end of the winding finger and the two-coefficient positivity bound
applies throughout this finite corridor. Equivalently choose N first
larger than four times the largest corner offset and the largest Chern
evaluation used in the two comparisons, with the fixed outside-domain
bound included. The precise factor four is inessential; both signs of
the periodic coefficient must dominate that fixed bound.

The corridor is chosen in a thin transverse slice of the winding finger
missing β. Cross one turn at a time through its corner-free pieces of
α₁. The coefficient of a disk boundary on such a piece is constant
until a corner is crossed. For a same-strand or outward domain that
constant is zero: follow it towards the cut p, where it is zero by its
normalization; the chosen route crosses no corner. For an inward domain
the constant is one, by the same argument starting from its one crossing
at p. Therefore the disk multiplicities change by

    Δn_z = 0  on same-strand and outward domains,
    Δn_z = 1  on inward domains.

The assertion concerns the entire domain, not just its small leading
bigon. An extra periodic domain would change its crossing at p, and has
already been excluded by positivity and the index condition. Thus it
cannot introduce an additional boundary coefficient in this corridor.

Keep the attaching curves fixed during this finite basepoint comparison.
The unweighted holomorphic disks, their Maslov indices, and their counts
then stay the same. Choose the regular almost-complex datum to have the
standard product form near the whole finite corridor; regularity and
counts are supplied by the accepted analytic interface. The basepoint
changes only the exponent n_z and the Spin-c name of this fixed
equivalence class. The Spin-c names differ by PD[γ] at each turn, since
the basepoint path and the two flow-line arcs sweep one γ cycle.

In particular, identify [x⁺_a,j] at one corridor point with [x⁺_a,j]
at the next, and likewise for x⁻_a. The integers j are **not changed**.
The same-side differentials agree exactly, and each plus cutoff remains
j≥0 for each of these same generators. This supplies the uniform plus
identification which an arbitrary infinity gauge does not supply.

After fixing one origin for the corridor parameter, the connecting maps
are consequently

    δ_M = B + U^M A,

on the same two plus complexes, with the same bottom cutoffs. B is the
outward map, A the inward map with its fixed initial exponent removed.
The two pieces are chain maps: splitting d²=0 by the crossing count at
p separates the inward and outward terms. Their infinity versions have
the same property. The inward infinity map A is the already constructed
leading-bigon isomorphism.

Only two sufficiently distant corridor points are needed; an assertion
that the winding number N can be fixed while M tends to infinity is
unnecessary. First choose two Spin-c labels outside the finite support
of the accepted hat invariant, and then choose N large enough to contain
their corridor. Independence of the hat invariant from the diagram
ensures the zero-surgery plus group at both labels vanishes, by the
locally U-nilpotent argument in the preceding file. The associated
connecting maps δ_{M₁},δ_{M₂} are therefore both isomorphisms on homology.

## Finish the outward isomorphism

Apply the determinant/truncation-index calculation in
`completed-surgery-and-localization.md`. For the same two complexes its
finite correction C is constant. If B were singular, writing
det(B+tA)=t^k q(t), q(0)≠0, would give k≥1 and the two identities

    0=C+M₁k,    0=C+M₂k.

Subtracting them gives (M₂−M₁)k=0, a contradiction. Hence B induces an
infinity isomorphism. Conjugate back by the explicitly separated Laurent
gauge of the first section to recover the original outward map. No plus
cutoff was transported by that first gauge, and no varying finite
correction was used in the determinant argument.

This supplies the uniform-truncation input and outward operation in the
completed-surgery construction, subject to its explicit winding-domain
classification and the reused analytic interfaces. It does not assert
per-Spin-c nonprimitive two-handle nonvanishing; that different operation
has not been replaced by a nonzero summed surgery map.
