# First independent review: finite higher-p TOP engulfing

Verdict: focused repair required. This is the single consolidated first
report for this NEW higher-dimensional proof. No earlier accepted engine
or review history was reopened. The frozen input is preserved alongside
this report as `first-review-input.md`.

I read the complete new proof and independently visually read all Newman
printed pages 555–571 from `/tmp/newman-555.png` through
`/tmp/newman-571.png`, with `/tmp/newman1966-alt.pdf` as the full primary.
I did not read an accepted p<=2 provider proof. No credit below relies on
the name of Newman's theorem.

## What the construction earns

The intended higher-p dimension mechanism is the actual one in the
primary: foreign contact dimension at most (q+1)+p-n <= q-2, projected
shadow of dimension at most q-2, and vertical saturation of dimension at
most q-1. Thus there is no dimension-five-only inequality or Whitney
input in that mechanism. The source also supplies the claimed ambient
PL correction after temporarily perturbing fixed vertices: its finite
ambient subdivision contains the ORIGINAL embedded image, the selected
vertices move by a sufficiently small amount, and the resulting map of
that ambient subdivision is a homeomorphism. This operation is local to
an actual Euclidean chart; it does not triangulate the TOP manifold.

The following three bindings are still needed before that mechanism is
an actual proof of the stated operation.

## H1. Freeze the geometric shadow, not only the outer map

Section 3(c) applies the lower-stage induction to D and obtains coverage
of `g(D)`. It next states that all of the ORIGINAL vertical saturation
Pi(J) is in the current open set. The former does not imply the latter:
the lower-stage map can move P, the preimage of Pi(J). The text currently
keeps the already-PL chart **outside** the inner cube fixed. That does
not freeze P inside the cube.

The primary's necessary invariant is explicit on pp.568–569: its maps
agree with the initial PL map on `L union G^alpha`, where G^alpha is the
ENTIRE preimage of the inner chart. Before invoking B(q-1), it quotients
the equal-image fibers in that whole preimage; the fixed subpolyhedron
on the quotient includes the image of `L union (D intersect G^alpha)`.
Consequently the pulled-back new map agrees with the old map on all of
G^alpha, and the original Pi(J), rather than just a nearby image, is
covered.

Repair the invariant, the finite quotient and the lower-stage input
explicitly. Include why the preimage and image pieces are subpolyhedra
after the chosen subdivision, why the induced fixed map is locally PL
embedded with a domination-compatible chart system, and why only P can
remain uncovered in D. Carry the updated open set h(V) through this
step. The geometric shadow needed by the final line stretch must remain
the very same subset of the actual chart.

## H2. Do not simultaneously glue polyhedra from unrelated TOP charts

Section 4 places the containing polyhedra of several domination charts
in L and identifies their “matching image subcomplexes.” Two such
polyhedra are PL in different actual TOP charts; their common image
need not be a subpolyhedron in either chart. A finite common Euclidean
subdivision does not resolve an arbitrary TOP coordinate transition.
Thus this simultaneous finite quotient, and the locally PL embedding
condition for its enlarged L, have not been established.

Section 3(a) contains the right SINGLE-chart quotient idea, but starts
with Z already in V and then says that the remaining retained set
outside a chart stays in V. That only covers the one-uncovered-chart
case. Give the finite chart-number induction that reduces the general
case to that case, instead of the simultaneous construction in section
4. At its single-chart step specify the closed remaining retained set,
the containing polyhedron in that chart, and the fixed map on its
quotient with L. Check compatibility at points of f(L) by the stipulated
common smoothing/domination system; choose other charts disjoint from
the closed f(L), as in the primary pp.564–565. Previously added chart
polyhedra should not silently be required to become PL in later TOP
charts. This is a proof-binding repair, not a request for any global
triangulation theorem.

## H3. Complete the actual profile formulas at degeneracies

Two stated formulas in section 1 are not yet the proved profile
construction. First, the continuous line formula must use
`phi' = min(phi,f1)` and the consistency conditions at both zero-width
intervals. As written phi can exceed f1 or f1+, so the displayed
piecewise interval prescription is not necessarily an increasing
homeomorphism. Newman p.557 supplies exactly this cap.

Second, the “closed part on which psi<b” is generally open, not closed;
it cannot be the closed carrier required by the preceding construction.
For the upper-semicontinuous lower profile, specify
`psi1=min(psi,b)`, `H={psi1<b}`, apply the continuous construction on
closure(H), and check equality at its frontier. Explain why the portion
outside H already in V is fixed by the resulting support. These are
the concrete checks on pp.559–560. The retained-set use should then be
stated with the raised lower profile (gamma1 on J, gamma0 off J), so its
active above-bottom part is actually disjoint from the retained set.

## Review boundary

Please repair these three items once and freeze the changed passages
for the single focused final inspection. No acceptance is inferred for
the higher-p statement, any countable assembly, E2/E3, or the original
TOP theorem at this first pass. The accepted lower-p engine and its
history remain untouched.
