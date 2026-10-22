# Finite higher-dimensional TOP engulfing in the actual open work manifold

NEW proof, awaiting independent review. This is not an extension by fiat of
the accepted two-dimensional engine. No accepted engine proof was reopened.

## Exact consumer scope

Fix finite integers n >= 6 and 3 <= p <= n-3. Let O be a metrizable TOP
n-manifold without boundary and U an open subset, with the pair (O,U)
p-connected. Supply a closed subset X of O which, locally, is contained in
a polyhedron of dimension at most p in an ACTUAL Euclidean chart of O.
Assume X minus U is compact. Then there is an ambient isotopy h_t of O,
supported on a compact subset of O, with X contained in h_1(U).

In the application X is the dual (n-3)-skeleton in an actual PL chart
region, restricted to the open complement of a closed prescribed collar
shield D. Closedness is relative to that open complement. The result is
applied THERE, so its compact support has a neighborhood disjoint from D
and extension by identity fixes an open neighborhood of D. No arbitrary
extra shield, prescribed ambient PL structure, or whole-manifold
triangulation is assumed. Connectivity means actual maps of finite disk
pairs can be homotoped into U through O; finitely many such witnesses are
selected below. This is not a controlled-small-track theorem.

## Primary reading and finite background

Root visually read ALL seventeen printed pages 555-571 of M.H.A. Newman,
The engulfing theorem for topological manifolds (1966), in the actual page
images /tmp/newman-555.png through /tmp/newman-571.png. The PDF is
/tmp/newman1966-alt.pdf (JSTOR cover plus seventeen mathematical pages),
public university copy https://www.maths.ed.ac.uk/~v1ranick/papers/newman1.pdf.
The extracted text contains only the cover; no body OCR reading is claimed.
An attempted OCR subprocess failed because tesseract is absent; its empty
output is not evidence. The argument below reconstructs the finite
membrane induction of printed pp.560-570, including its retained-set and
relative-map bookkeeping. The final sphere application on pp.570-571 is
not an input.

All polyhedra used below are in finite Euclidean coordinates on the active
compact packets. Subdivide by the finitely many affine face hyperplanes
and then barycentrically to obtain compatible triangulations. Fine meshes
and sufficiently small vertex perturbations exist by finite compactness.
Avoiding a finite union of proper affine determinant-zero sets gives the
general-position choices. No triangulation of O is involved. Outside the
active packet all maps and isotopies are unchanged.

We use the following elementary finite subdivision fact. An elementary
expansion attaching a simplex along all its boundary except one free face
can be subdivided compatibly with a prescribed finite subdivision of its
old part. A common stellar refinement suffices: at one stellar step, list
the new cone faces in reverse face-inclusion order and pair each with its
cone on the new vertex. Those elementary pairs replace the old expansion;
all faces in the prescribed old subcomplex remain. Iterating the finite
list gives the needed relative expansion. Thus this fact supplies actual
ordered simplices and free faces, not a regular-neighborhood theorem.

## 1. Supported parallel-line stretching, including the retained set

Write a Euclidean chart as Y times Z times R, with last coordinate t.
For a closed compact F in Z, let a <= b be bounded height functions, a
upper semicontinuous and b continuous, equal at the frontier of F. The
membrane is 0_Y times { (z,t): z in F, a(z) <= t <= b(z) }. Suppose its
bottom graph is in an open set V. In any open neighborhood W of the
membrane above its bottom there is an isotopy, identity off W, which
engulfs this membrane by V. It also retains a closed set A already in V
provided A meets the membrane only at its bottom.

Here are the formulas and the extension argument. For continuous lower
and upper profiles f0 <= f1 on a closed finite carrier, equal at its
frontier, choose continuous profiles phi, chi with f0 < phi where f0<f1,
the graph-strip [f0,phi] in V, and [f0,f1+] in W, where
f1+ = min(chi, f1+(f1-f0)) and chi>f1. Send, on each vertical line,
[f0,phi] linearly onto [f0,f1], and [phi,f1+] linearly onto [f1,f1+],
fixing the rest of the line. At a zero-width endpoint all profiles agree
and the map is the identity. The inverse uses the reversed intervals;
both vary continuously, including zero-width endpoints. Replacing f1
by (1-s)phi+s f1 gives the isotopy. Hence this is an actual ambient
homeomorphism, with an actual jointly continuous inverse.

For the membrane 0_Y times [a,b], thicken its base in Y. At every point
of its compact base choose a product neighborhood and a vertical interval
whose closure is inside W, with its lower initial strip in V. Finite
refinement and continuous interpolation produce profiles on the closure
of that thickened base, equal at its frontier. Their upper graph agrees
with b on 0_Y times F and their lower graph agrees with a there. The
preceding line formula applies and has support compactly inside W.
For upper-semicontinuous a, first insert a continuous psi between a and
an initial strip in V; apply the continuous construction above to the
closed part on which psi<b, and then to [a,psi], already in V. This
gives the same conclusion. All inserted profiles stay in the stipulated
open strips. One explicit insertion device is this: for an upper bound
function l and lower bound function r with l<r on a compact carrier,
the sets {l<q<r}, q rational, cover it. Choose a finite subcover and
normalize the distance-to-complement functions. Their weighted average
of the corresponding q lies strictly between l and r. Equality loci
are left fixed and the profiles are tapered by their vanishing gap.
Nested compact buffers provide all strict support margins used here.

To retain A, perform the construction in W minus A. Its compact active
membrane, away from a smaller initial strip already in V, is disjoint
from A; choose the intermediate profiles and supports there. Then the
resulting isotopy fixes A wherever it could otherwise leave V. Thus
A union the membrane is still in the new image of V. In particular a
retained set is not discarded merely because it was covered at an
earlier induction step.

## 2. Relative optimal approximation in one ACTUAL chart

Let f:G->O be a map of a finite polyhedron and L a subpolyhedron on which
f is a locally PL embedding in specified actual charts. Choose one such
chart where it meets f(L); charts elsewhere can avoid the closed f(L).
Inside a smaller concentric chart cube, approximate f by a PL map f'
so that f' equals f on L and outside a larger chart cube. Moreover, for
principal simplices sigma,tau of a suitable subdivision,

f'(sigma) intersect f'(tau) = f'(sigma intersect tau) union E,
dim E <= dim sigma + dim tau - n.

For completeness, first subdivide a compact preimage buffer so finely
that simplex images fit the coordinate buffers. Keep the map on L;
extend its coordinate values over the other finite simplices by affine
maps in the inner cube, and by radial coning from simplex barycenters
in the transition annulus. This is a continuous near-approximation
unchanged outside the chart. Perturb the finitely many vertex images
into general affine position in the inner cube. Temporarily perturbing
vertices of L is allowed: put their original and perturbed embedded
image triangulations in a common finite ambient Euclidean subdivision,
and use the small simplexwise ambient PL map taking the former to the
latter, fixed at the outer cube frontier. Compose with its inverse to
restore f EXACTLY on L. The perturbation is small enough that the
ambient subdivision keeps its simplex orientation and is a genuine
homeomorphism. Affine dimension estimates give the displayed bound
before this correction; dimension and intersections are unchanged by
that ambient homeomorphism. This is geometric optimality, which is all
that is used. Every approximation can be arbitrarily small on the
compact packet. No smoothness of the chart transition maps is required.

## 3. The finite induction, with the bad shadow kept in the lower stage

We prove the following auxiliary version. Z is a closed locally
p-dominated retained set already in V. A finite polyhedral map f:G->O
has a target subpolyhedron H of dimension <=p, with compact uncovered
part, and a subpolyhedron L on which f is a locally PL embedding. Its
chosen chart system near f(L) is also a domination system for Z. One
may replace f by an arbitrarily close map g, unchanged on L and off a
compact packet, and engulf Z union g(H) by a compact ambient isotopy.
The actual end application will take f to be the inclusion of its
polyhedron and L to contain the original target, so that its points
are not moved by the auxiliary map changes.

There are three finite inductions; spelling out their parameters avoids
using the desired engulfing to protect its own previous stages.

(a) First assume Z is already in V. The general retained-set case is
reduced to it one active domination chart at a time: in that chart
adjoin its finite containing p-polyhedron P to G, and identify points
of P and L having the SAME f-image. This is a finite polyhedral quotient:
in this chart f(L) is PL embedded and the common image subdivisions are
actual matching subcomplexes. The new map on the quotient is embedded
on the identified L union P. Treat P as part of the new target and
keep this enlarged subcomplex fixed. The remaining retained set outside
the chart stays in V. Finite repetition over a cover of the compact
uncovered part reduces the number of such charts. This is the only
place the locally dominated rather than globally PL class is needed.

(b) Let B(q) mean the auxiliary assertion when the not-yet-covered
part of H lies in its q-skeleton; B(-1) is the identity. Given B(q-1),
isolate one uncovered q-simplex sigma after a subdivision of H with
its boundary already in V. Finitely many simplices suffice. Before
handling each one, apply B(q-1) to all its already exposed lower faces;
retain all the previously covered higher-dimensional pieces as part
of the target. This reduces to one q-simplex whose boundary is in V
and whose image avoids Z. Such avoidance can be arranged by first
subdividing into those simplices whose entire images lie in V and
then approximating only in the remaining chart buffers. Covered
pieces are included in the retained ledger, not erased.

The relative p-connectivity supplies a membrane a*sigma whose base is
sigma and whose other boundary a*boundary(sigma) maps into V. It is an
ACTUAL finite disk-pair homotopy. It can be adjoined to G without changing
the old map. More generally an elementary membrane is a (q+1)-simplex
tau = tau1*tau2 whose old part is boundary(tau1)*tau2 and whose new
free target part is tau1*boundary(tau2). A relative subdivision of the
cone gives a finite list of these elementary membranes.

(c) First suppose one membrane is contained in a chart. Apply the
relative optimal approximation of section 2 there, keeping L fixed
and keeping the covered K in V by choosing the approximation within
its compact open margin. Subdivide so its map is PL in this chart.
Order the finitely many elementary (q+1)-simplices from the relative
expansion. For the current one tau, the intersection of its image with
the already covered K, its q-skeleton, and the local p-polyhedron
containing Z is, apart from its specified attached faces, a finite
polyhedron T of dimension at most

(q+1)+p-n <= q-2.

Vertices on faces kept fixed are not perturbed; the embedding property
on L and the compatibility of the domination chart permit the relative
optimal construction used here. The attached faces are not put into T.

Put tau in prism coordinates by a linear coordinate change:
its image is 0_Y times [gamma0,gamma1] over a compact polyhedral base F
in Zspace, with its attached part the bottom. Let J be the projection
of T on F. Then dim J<=q-2. Its vertical saturation
Pi(J)={ (z,t):z in J, gamma0(z)<=t<=gamma1(z) } has dimension <=q-1.
Let P be its preimage in G, and D be K union the already adjoined
q-faces union P. Everything in D except P is already in V. Apply
B(q-1) to engulf Z union g(D), keeping L and the already PL chart
outside the inner cube fixed. To make that last freezing legitimate,
identify equal-image points of L union the part being frozen, exactly
as in (a). Their map is embedded on the quotient because it is PL in
this chart. Pull the resulting map back by that quotient. Thus only
the small bad shadow is submitted to the earlier induction stage.

Now all of Pi(J) is in the current open set. The remaining membrane is
engulfed by the parallel-line stretch of section 1. Take as retained
A the already covered Z and g(D) in the chart together with Pi(J).
By the definition of T and J its intersection with the unprotected
membrane lies only at the bottom. The upper profile on J is gamma1
and off J the initial lower profile is gamma0; this is precisely the
upper-semicontinuous bottom case in section 1. The stretching support
is compactly inside the chart, so it extends by identity to O. It
retains the complete old ledger and adds the free face of tau.
This proves the local elementary step.

For a membrane not contained in one chart, take a finite fine
subdivision subordinate to actual chart buffers along its compact
image, and use the relative expansion list described in the finite
background. The local step applies successively. The new simplex
meets the old domain only along its specified attached part; the
fixed L intersection there is unchanged. This proves one membrane,
one q-simplex, B(q), and finally the auxiliary assertion, in that
order. All lists are finite. The dimension bound q-2, not a
dimension-five special argument, is the reason the induction closes
for EVERY fixed p<=n-3. It uses no Whitney disks.

## 4. Actual closed target and support/choice accounting

Apply the auxiliary assertion to the actual locally dominated X.
Only a compact subset lies outside U. Choose finitely many smaller
domination charts covering that compact subset, with slightly larger
compact chart buffers in O. Their containing p-polyhedra and the
finite subdivisions which meet this active subset form the added
polyhedral targets. Keep their original inclusions in L, identifying
the matching image subcomplexes as in section 3(a). The rest of X is
the retained set Z, initially in U; during the finite chart reduction
it is retained by the same ledger argument. Therefore the final
isotopy satisfies X subset h_1(U), for the ORIGINAL target points.
The auxiliary near maps are not substituted for X.

Each relative nullhomotopy has compact image. Every chart stretch is
supported in a relatively compact chart buffer around its finite
membrane. Finitely many such images and buffers have compact union
inside O. Both map and inverse are identity outside it, including
during the isotopy. This proves the required genuine compact support.
For O equal to the complement of D, that union is disjoint from D,
so extension by identity fixes an OPEN neighborhood of D.

Only finitely many witnesses are chosen for one active packet. Finite
Euclidean perturbations, compatible subdivisions, inserted profiles
and disk-pair nullhomotopies introduce no stronger choice principle.
AC-omega may choose complete witnesses for an independently prescribed
countable list of packets. No recursively dependent countable selection
or global family of TOP charts has been used. In particular this is
available at the annular consumer's Countable Choice scope.

## Review boundary

This new argument must receive independent inspection before use. In
particular its relative optimal approximation, finite quotient/fixed-map
bookkeeping, q-2 bad-shadow induction and retained-set support matter;
the statement is not credited merely because Newman's theorem is named.
It supplies the higher-p finite TOP operation only. The separate finite
two-collar proof, countable stretching, one-collar construction, E3
expansion, and original TOP statements remain separate consumers.
