# Actual relative smoothing of the five-dimensional comparison region

This is a fresh investigation of a missing supplier, not an acceptance of a
repaired item. No canonical item, map, native report, or old evidence was edited.
The exact realization below is not proved in this note.

## Input and required output

The input is a smooth four-manifold M, a locally flat closed surface N in M,
and, conditionally on the separate stable-tube construction, an embedding
f:E×R → M×R of a rank-two vector bundle E over N times R. It maps the zero
section (x,t) to (x,t). The prescribed product near the closed seam collars
K in N is retained. In the annular application N=T² and M=S³×S¹; in the disk
application N=S² and M=S⁴. The annular route may assume Countable Choice only.

Let a be the ambient R-coordinate and b the R-coordinate in f. The comparison
region is the portion a≥0, b≤1, restricted to a sufficiently small tube about
N×[0,1]. Its bottom germ is the original smoothing of M at a=0. Its top germ
is the abstract smoothing of E at b=1, transported by f. The latter is not
asserted to agree with the ambient smoothing. The prescribed product smoothing
near K×[0,1] is a third simultaneous relative condition.

Required: a genuine DIFF (or PL) atlas on a smaller comparison neighborhood,
agreeing with both given end germs and the prescribed K-product; then a genuine
relative handle presentation with the control and end identifications required
by the DIFF/PL controlled h-cobordism supplier. A stable tangent lift alone is
not this output.

## Two tempting constructions and their precise failure

Restricting the ambient smoothing of M×R gives an actual atlas in the interior
and at the bottom. It does not make the top b=1 a smooth hypersurface or identify
its induced smoothing with the specified abstract E-smoothing. Pulling back the
product smoothing through f solves the top condition, but does not solve the
bottom. Neither construction establishes compatibility on an overlap.

The existence of the stable tube does not identify the comparison region with
a disk bundle over N×[0,1] respecting both ends. The region is an intersection
of two different half-spaces, defined in two different coordinate systems.
Producing a bundle identification respecting both coordinate systems would
already perform the missing comparison. In particular, an abstract smooth
disk bundle with the right homotopy type cannot replace the actual region.

## What obstruction vanishing does establish, and what it does not

If the controlled deformation data establish the required relative homotopy
equivalence with (N×I, N×∂I ∪ K×I), and K is the stated finite union of product
collars, this pair has a relative CW model of dimension at most three: triangulate
the finite collar pair (N,K), then use the product triangulation with I. Its
relative cohomology in degree four is therefore zero, with any coefficients.
This argument uses finite constructions and needs no arbitrary-index choice.

Consequently an obstruction *already known* to lie in that degree-four group
vanishes. This conditional calculation is valid also for the full relative
end-plus-K problem; merely calculating the end-only group would omit a required
condition. It does not establish that a relative deformation equivalence exists,
nor identify the obstruction theory, nor integrate a lifted tangent bundle into
coordinate charts. The last operation is precisely the substantive realization
theorem, not a consequence of the elementary CW calculation.

## Fresh primary-source reading

Read the complete cached extracted text of Frank Quinn, *A controlled-topology
proof of the product structure theorem* (September 2006), all six printed pages,
including the entire proof in §§3.1–3.4 and bibliography. The cached path is
`research/inverse-problems-knot-theory-all-109-2026-10-19-owner-top74-marked-disk-working-proof/quinn-product-structure-primary.txt`.
This records a full text reading, not a visual verification of every PDF glyph.

Also visually read all three supplied page images of Freedman–Quinn printed
pp.118–120 (PDF pp.124–126), including all of 8.3A–D and intervening prose.
The images are in the sibling `renewed-annular-end/sources/` directory.

FQ 8.3B on printed p.119 states actual integration: for TOP dimension at least
five, isotopy classes of structures extending the given boundary structure
correspond to relative lifts of the stable tangent bundle. The following prose
attributes the TOP case to Kirby–Siebenmann and says it can also be proved using
controlled h-cobordism as in §8.1. These pages state the theorem; they do not
supply its integration proof. FQ p.120 explicitly distinguishes the more formal
open-manifold immersion classification from the full theorem.

Quinn §3.1 starts with an actual M-manifold structure on a stabilized manifold.
It invokes the controlled end-completion theorem [Q1, Theorem 1.4] to produce an
actual M-manifold completion. In the TOP case it then invokes cellular-map
approximation to turn the new end map into a homeomorphism. The PL case uses
controlled h-cobordism. The concordance is constructed in §3.2; the isotopy
conclusion uses controlled h-cobordism in §3.3 and, in §3.4, controlled
pseudoisotopy or Edwards–Kirby local contractibility plus a compression trick.
Thus this six-page proof is not a proof of actual realization from the one
DIFF/PL controlled h-cobordism statement alone.

## Dependency direction that must be preserved

Stable tangent reduction → actual stabilized smoothing → independent controlled
end completion and cellular approximation → product-structure realization →
actual smoothing of the comparison region → DIFF/PL controlled h-cobordism on
that region.

The independent controlled end theorem is formulated on an already DIFF/PL
manifold, so it is not logically circular merely because it uses DIFF/PL
handlebody theory. But it must actually be proved independently. Applying a
controlled theorem to this comparison region *before* its DIFF/PL structure has
been constructed would be circular. Quoting the conclusion of 8.3B under the
name “relative smoothing” would leave the same proof obligation untouched.

## A possible change of construction, not yet a proof

The ambient M×R is smooth. A nearby smooth approximation to the two-dimensional
top spine might support a smooth split normal disk bundle, hence an ambient
smooth top hypersurface. General position explains why transverse double points
of a smooth surface in a five-manifold are absent (2+2<5). This numerical fact
does not establish a controlled ambient TOP isotopy from the original embedding
to that approximation, relative K, or identify the induced rank-two tube germ
with the original specified E-germ. Those are additional actual embedding
smoothing and normal-germ comparison operations. Without their proofs the
replacement top is not a justified solution to the stated relative problem.

Status: actual relative realization remains an established-theorem authoring
obligation. No claim of an open mathematical problem or successful local proof
is made. The necessary next supplier is either a complete independent relative
five-dimensional realization proof, or the explicitly proved special embedding
smoothing and germ-comparison construction just described.
