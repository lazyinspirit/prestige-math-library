# Complement injection after trivial two-handle surgeries

This finite calculation supplies the precise fundamental-group condition of
the retained Statement of `thm-whitney-trick-in-the-two-dimensional-borderline-case`.
Only that Statement was consulted: it assumes Countable Choice and requires
π₁(X−B)→π₁(X) injective when the moving sheet has dimension two.
No proof or verification evidence of that supplier was read.

Let M be a connected smooth five-manifold, and let finitely many disjoint
framed attaching loops λ_j:S¹×D⁴→M be supplied. Suppose each core loop bounds
a supplied disk map in M, so is actually nullhomotopic there. Perform the
associated surgeries to obtain X: remove the interiors of these attaching
tubes and attach D²×S³ along S¹×S³. Write B_j={0}×S³ for the belt spheres.
All manifolds and complements are based using supplied paths. Then, for
every subset J of the belt spheres, inclusion

X − ⋃_{j∈J} B_j → X

induces an isomorphism on fundamental groups.

First removing the original attaching core loops from M does not change π₁.
A loop can be made transverse to those one-dimensional cores, relative to
its basepoint; the intersection dimension is 1+1−5<0. For injectivity, do
the same to a nullhomotopy disk relative to its boundary; its intersection
dimension is 2+1−5<0. The finite relative general-position operations occur
in the given smooth M. Radially pushing off the punctured D⁴ normal fibers
then identifies the fundamental group of this complement with that of the
manifold Q obtained by deleting the interiors of the attaching tubes.
Consequently π₁(Q)→π₁(M) is an isomorphism.

In X with **all** belt spheres removed, each added piece is
(D²−{0})×S³. Its fundamental group and that of its attaching intersection
S¹×S³ are both Z, and the inclusion between them is an isomorphism.
Van Kampen, applied to collars of these finite pieces one at a time, therefore
gives π₁(X−⋃B_j)≅π₁(Q)≅π₁(M). This is an actual group isomorphism induced
by the supplied inclusions; the meridian of B_j represents the original
attaching-loop class λ_j under this identification.

Restoring any chosen belt sphere fills its punctured D² factor, so the same
Van Kampen calculation quotients by the normal closure of that attaching
loop. Every such loop is already trivial by its supplied disk in M. Thus
restoring any selection of belts changes no fundamental group. In particular
restoring all of them gives π₁(X)≅π₁(M), and all intermediate inclusions are
isomorphisms, as claimed. No assumption that M itself is simply connected
has been inserted.

The calculation is local in the following exact sense. If a control
neighborhood M⁺ in the original intermediate boundary contains the full
attaching tubes and the supplied nullhomotopy disks, perform the calculation
with M⁺ in place of M. The resulting open post-surgery neighborhood X⁺
satisfies the same complement injection. If the entire M⁺ and its surgery
pieces project into a small control region, all witnesses for this injection
remain there. Merely knowing that a loop contracts somewhere in the global
manifold does not supply this localized conclusion.

This verifies the π₁ hypothesis for the two-dimensional borderline Whitney
operation where the needed trivial attaching loops and disks have actually
been supplied. It does not produce a clean framed Whitney disk, prove a
controlled isotopy support bound, or establish simultaneous avoidance of
every other handle sphere. Those remain separate geometric requirements.
The finite calculation adds no choice strength beyond the finite smooth
general-position operations permitted under the annular Countable Choice
contract.
