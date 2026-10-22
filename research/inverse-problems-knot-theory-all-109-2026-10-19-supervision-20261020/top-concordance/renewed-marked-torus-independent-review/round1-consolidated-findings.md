# First independent review: ordinary boundaryless five-dimensional coverage

Read both frozen full files `ordinary-boundaryless-two-end-coverage.md` and
`finite-engulfing-construction.md`. The author confirms no previous independent
review of either; this is the first consolidated pass, with one focused repair
and final changed-passage inspection available. This review concerns only the
ordinary smooth boundaryless five-dimensional operation. It does not accept
the prescribed relative side slide, marked-torus pair operation, or its
Countable Choice packaging.

New primary-source inspection: Hudson, *Piecewise Linear Topology*, printed
160–166 and 172 (cached images 166–172 and 178), complete displayed pages;
Siebenmann, *On Detecting Open Collars*, Proposition 1.9 at printed 206 and
its complete proof at 210–211 (full cached text, with 206 and 211 checked in
the page images). These are new-source checks, not accepted-provider audits.

## Verdict

The actual two-motion coverage argument, fundamental-group amalgams and
universal-cover excision are sound. The explicit smooth collapse flow is
sound and avoids importing smoothing of an arbitrary PL homeomorphism.
**Focused repair required** on the three precise points below before accepting
the finite engulfing proof and its negative-cut input as written.

## 1. General position must exclude prescribed common faces

The finite-engulfing proof asserts that any two moving simplex images of
dimensions a,b meet in dimension at most a+b−q. This is false for adjacent
simplices: their shared face must remain in their intersection. For example,
two three-simplices sharing a two-face in q=5 cannot have total intersection
dimension at most one. The same issue affects the moving/fixed-face sentence.

State the actual relative general-position conditions for disjoint faces, or
for the extra intersection locus after deleting the prescribed common-face
images, and derive the obstruction Z bound in precisely that form. Identify
which common faces belong to the attached part `a*∂Δ` and hence are harmless.
If using a singular-set estimate for the nondegenerate map, give that estimate
explicitly. The finite vertex perturbation must preserve the original fixed
face and its prescribed intersections; it cannot eliminate them. This is a
repair of the stated finite argument, not a need to quote all of Hudson 4.7.

## 2. Separate the retained base from the small auxiliary polyhedron

The dimension-controlled collapse paragraph defines T to **contain A**, and
bounds `dim(T−A)`. Later the induction calls T a polyhedron of total dimension
at most j−1. For the attached base `a*∂Δ`, the base can have dimension j,
so these are different statements. Write the auxiliary polyhedron separately:
for example, a closure of the retained simplices outside the base, of dimension
at most `dim Z+1`, with the two collapses expressed using its union with the
base. Stop a decreasing-dimension collapse when it would actually remove a
simplex of the obstruction subcomplex, not when its closed simplex merely
“meets” that subcomplex along a retained face. Then the inductive engulfing
argument really applies to a compact (j−1)-dimensional object, while protecting
the old j-dimensional image.

## 3. Make the negative-cut surgery independent of the extra source hypothesis

Siebenmann 1.9(A) supplies cofinal clean end neighborhoods with the stable
fundamental group. His 1.9(B) also assumes the ambient boundary already maps
isomorphically to the ambient fundamental group. That extra boundary hypothesis
has not been supplied for an arbitrary initial negative cut here. The desired
cut is nevertheless obtainable by the direct finite construction suggested
in the draft; spell out that construction rather than silently applying (B).

Begin with the clean neighborhood from (A). Choose finitely many group
generators, paths to its connected frontier, and proper arc thickenings so
the new frontier maps onto the unchanged neighborhood group. Explain why
carving those arcs preserves that group. Its finite presentation and the
finite presentation of the compact frontier give finitely normally generated
kernel. Choose disjoint proper embedded two-disks for those kernel generators
in the neighborhood, fixing their boundary collars; `2+2<5` is the required
inequality. Carving their neighborhoods preserves the neighborhood fundamental
group (the disk cores have codimension three), and the frontier surgeries
kill exactly the normally generated kernel. Keep all changes inside V− and
retain a connected negative neighborhood and connected frontier. This supplies
`π1H≅π1A≅Π` without the unavailable ambient-boundary premise. If a different
finite trading construction is intended, provide its same group ledger.

## Parts whose unchanged arguments may be reused

- With that cut, `V=V−∩W` is connected: any excursions through A can be replaced
  by paths in its connected frontier. Van Kampen along H gives the two stated
  fundamental-group isomorphisms. The Π-cover restrictions are consequently
  the relevant universal covers. Relative homology excision and relative
  Hurewicz then give `(W,V)` two-connected; no false claim about `(W,V+)` is
  used.
- The closed dual two-skeleton J2 is separated from compact H and has only
  positive-end escape. Thus its difference from V+ is compact and the first
  compact-support engulfing is applied lawfully in the whole Q. It may move A.
- `K=h(Q−V+)∩W` is compact and misses J2. The finite primary/dual join
  decomposition supplies a derived neighborhood of H and a finite primary
  two-subpolyhedron. The second engulfing and collapse motion can fix the
  negative cut: its already covered uniform collar absorbs any cutoff-arrested
  trajectories.
- From `K⊂k(V−)` and `A⊂k(V−)`, the entire set `h(Q−V+)` is contained in
  `k(V−)`, including its part outside W. Thus `h⁻¹k(V−)∪V+=Q` has the correct
  order; no unsupported preservation property of h is needed.
- The collapse vector field preserves the simplex and approaches its attached
  faces. The positive-minimum argument gives uniform finite entry into an
  invariant smaller collar contained in O. Multiplication by the smooth
  zero-set function protects the closed base and protected polyhedron.

These checks do not extend the result to an exterior with a prescribed side
boundary motion or to a fixed codimension-two core. The separate foundational
choice packaging remains outside this review.
