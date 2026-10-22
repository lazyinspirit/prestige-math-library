# Finite higher-dimensional TOP engulfing in the actual open work manifold

Existing NEW proof, focused H1–H3 repair after its consolidated FIRST review; awaiting the same reviewer’s ONE focused FINAL. This is not an extension by fiat of
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

Root and this focused-repair author each visually read ALL seventeen printed pages 555-571 of M.H.A. Newman,
The engulfing theorem for topological manifolds (1966), in the actual page
images /tmp/newman-555.png through /tmp/newman-571.png. The durable PDF is
sources/newman1966-555-571-primary.pdf (JSTOR cover plus seventeen mathematical pages; original retrieval /tmp/newman1966-alt.pdf),
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

Here are the actual formulas, including their degeneracies. First consider continuous profiles f0<=f1 on a closed finite carrier F, equal on its frontier, when the WHOLE continuous prism lies in the open support region W and its bottom graph lies in V. Choose continuous chi>f1 with [f1,chi] in W, and continuous phi>f0 with [f0,phi] in V. Put

f1plus=min(chi,f1+(f1-f0)),  phiPrime=min(phi,f1).

Then f0<=phiPrime<=f1<=f1plus. Send [f0,phiPrime] linearly onto [f0,f1] and [phiPrime,f1plus] linearly onto [f1,f1plus], fixing the rest of each vertical line. If f0=phiPrime, the strict inequality phi>f0 forces f0=f1; if phiPrime=f1plus, the equality f1=f1plus forces f1=f0, since chi>f1. Thus both zero-width intervals satisfy the necessary consistency conditions: their target interval has zero width too. In particular all profiles agree on the frontier, and the map there is the identity. The interval map and its inverse are continuous jointly in the base and height, including those degeneracies. Replace the target breakpoint f1 by (1-s)phiPrime+s f1 to obtain the supported isotopy. Its lower source strip is in V and its image covers the desired prism.

To extend this line map from 0_Y times F to the actual ambient chart, first choose a thin open floor in Y times Z around 0_Y times int(F), with compact closure in the buffered chart. Product neighborhoods whose vertical intervals lie in W and whose initial strips lie in V give a finite cover. Continuous interpolation gives upper and lower bounds on that floor; choose a continuous height profile between them which equals f1 on 0_Y times F and equals the floor’s lower height on its frontier. Applying the preceding line formula on the floor makes the map the identity on the frontier, so extension by identity is continuous with continuous inverse. All these choices can be made inside the stipulated open support region. This is Newman’s continuous-case floor construction, printed558–559; it requires W to contain this shifted continuous prism, not an assumption that W contains the original bottom.

For the asserted upper-semicontinuous lower profile a, where W need contain only the original prism ABOVE its bottom, insert continuous psi0>a with the strip [a,psi0] in V. Put psi1=min(psi0,b) and H={z in F:psi1(z)<b(z)}={psi0<b}. This H is relatively OPEN, not a closed carrier. Use its closure in F as the continuous-case carrier. On that closure psi1=psi0>a; at its relative frontier psi1=b, so the required zero-width condition holds. Its bottom graph lies in V and the entire shifted prism [psi1,b] lies strictly above a, hence in W. Apply the continuous construction to this carrier. It covers [psi1,b] over closure(H), and is the identity on the original lower strip [a,psi1]. Over F outside H the shifted prism is just its bottom, since psi1=b, and that point belongs to the lower strip already in V. The support from the continuous construction is above psi1 on the central 0_Y fibers, so it fixes this remaining strip as well. Thus the union [a,psi1] union [psi1,b]=[a,b] is covered. This is exactly the closure/frontier reduction of printed559–560, without treating the open set H as a closed carrier.

The continuous insertions used here can be constructed on each compact floor by the finite-cover insertion device: choose rational intermediate heights in the open permitted intervals, take a finite cover by neighborhoods where those same inequalities persist, and normalize continuous distance-to-complement functions for that finite cover. The weighted height remains strictly within the permitted interval. Along an equality frontier use the vanishing profile gap; the preceding consistency checks guarantee continuity there. Only finite buffered choices are made.

Finally, to retain the closed set A, replace the support region W by W minus A. Since A meets the original prism only at its bottom, every part above that bottom remains in this open region. The shifted continuous prism is compact and strictly above the bottom wherever active, so its finite floor construction has compact support there. The resulting isotopy fixes A; because A was already in V, both A and the prism are in the new image of V. This is the retained-set form on printed560. In the membrane induction the lower profile is RAISED to gamma1 on the closed bad-shadow base J and is gamma0 off J; this is upper semicontinuous. Its above-bottom part is disjoint from the retained ledger. No covered part is discarded.

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

(a) First prove the auxiliary assertion for Z contained in V; call that assertion A(0). Parts (b) and (c) below prove this case. Here is the precise finite chart-number reduction which then gives the general retained-set assertion. Choose actual compact chart cubes Q_i with smaller interiors covering the compact Z minus V. Near f(L) choose charts from the stipulated common PL-embedding/domination system; away from f(L) choose the cubes disjoint from the closed f(L). A chart used for a point outside Z union f(L) can avoid that closed union. Only finitely many cubes meet the active packet. Let A(r) denote the auxiliary assertion when Z minus V is contained in the union of the interiors of r such cubes.

To prove A(1) from A(0), suppose Z minus V lies in int(Q) in one chosen chart. The retained set Zstar=Z minus int(Q) is CLOSED in O and is contained in V. Choose a finite p-polyhedron P in this ONE chart containing Z intersect Q, using a finite portion of its locally finite domination polyhedron and a compact buffer. Adjoin a disjoint copy of P to G and map it by its actual chart inclusion. Form the quotient Gstar by identifying equal-image points only in L union P. The quotient is a finite polyhedron: in this single chart, f(L) is PL embedded and P is a polyhedron, so their intersection and the inverse images of that intersection have matching finite subdivisions; outside the chart the original L is unchanged. Thus the identification is a simplicial gluing of those subcomplexes, not a proposed common triangulation of unrelated TOP charts. The factored map fstar is an embedding on Lstar=image(L union P). It is locally PL in the chosen chart on the new part, and uses the original chart system on the unaffected part of L. Every one of these charts also dominates the subset Zstar of Z. Charts for P can stay inside the present domination chart, so the compatibility required by the auxiliary assertion is retained.

Set Hstar=image(H union P). Its uncovered part is compact. Apply A(0) with the closed retained set Zstar and fixed subpolyhedron Lstar. Pull its near-map back to the original G. It equals f on L, and on the adjoined P it is the ORIGINAL chart inclusion because P was in Lstar. The resulting open image therefore contains Zstar union P union g(H), hence Z union g(H). Discard the auxiliary copy of P and its quotient after this step; no assertion that P is PL in a later TOP chart is made.

For r>1, the closed retained set Z minus int(Q_1) has uncovered part covered by the other r-1 cube interiors. Apply A(r-1) to it and the original polyhedral data, obtaining an updated open image V1 and a near-map g1 still equal to f on L. The remaining uncovered points of Z lie in int(Q_1). Apply the already proved A(1) to Z,V1,g1,H,L, with this same actual chart and the same original embedding on L. All earlier retained points are included in Z for this application and remain covered by its retained-set conclusion. This proves A(r). Divide a requested approximation margin among the finitely many applications and concatenate their compactly supported isotopies. Each auxiliary P and quotient is used in only its single-chart step and then discarded. This is the chart-number induction of Newman printed564–565; it never glues polyhedra from unrelated TOP charts simultaneously.

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

Put tau in prism coordinates by a linear coordinate change: its image is 0_Y times [gamma0,gamma1] over a compact polyhedral base F in Zspace, with its attached part the bottom. Choose nested CLOSED chart cubes Qwork contained in int(Qalpha), with the current membrane and its stretch support in int(Qwork), and both buffered inside the larger approximation chart. After the relative optimal approximation call the resulting fixed chart map fprime. Let Galpha be the ENTIRE preimage of Qalpha under this PL chart map, not merely the outside of the cube. Subdivide its finite preimage packet so that Galpha and all the following inverse-image polyhedra are subcomplexes. Maintain, at each elementary membrane step, the invariant

g_i equals fprime on L union Galpha, and Z union g_i(K union current exposed q-faces) is contained in V_i=h_i(V).

Maintain d(g_i,fprime) smaller than one third of the positive target gap from Qwork to the complement of int(Qalpha), by dividing that closeness budget among this finite list of lower-stage applications and extensions. Points outside Galpha then cannot acquire images in Qwork. Thus the entire preimage geometry used for the present membrane and its shadow inside Qwork is the original fprime geometry; freezing Galpha does not merely freeze an outer annulus. Let J be the projection of T on F. Then dim J<=q-2. Its ORIGINAL vertical saturation Pi(J)={(z,t):z in J, gamma0(z)<=t<=gamma1(z)} has dimension<=q-1. Let P=g_i inverse(Pi(J)), and D=K union the already exposed q-faces union P. These are finite polyhedra: g_i equals the PL map fprime on the entire Galpha, Pi(J) is a polyhedron contained in Qwork, no point outside Galpha maps into Qwork by the gap condition, and the coordinate changes used for this membrane are linear. Everything in D except P is already mapped into V_i. The uncovered part of D therefore has dimension at most q-1.

To apply B(q-1), form Gstar by identifying equal g_i-image points of the WHOLE L union Galpha, not just an outer annulus. This is a finite polyhedral quotient. On Galpha it is the quotient of a finite PL map by its image fibers: subdivide the finitely many image simplex intersections and their inverse images, and identify the resulting matching image simplices. On L the map is embedded; the common-chart compatibility makes its overlap with Galpha a subpolyhedral identification, and outside that chart L is unchanged. The factored map fstar is a locally PL embedding on

Lstar=image(L union (D intersect Galpha)).

Its chart system still dominates Z: inside the current chart use that actual domination chart, and outside use the unchanged system on L. With target Dstar=image(D), retained set Z contained in V_i, and fixed Lstar, B(q-1) applies. Indeed Dstar minus inverse(V_i) is contained in the image of P, of dimension at most q-1. It gives a near-map gstar fixing Lstar and an isotopy with Z union gstar(Dstar) contained in an updated open set Vprime. Pulling back gives a new map on D union L which agrees with g_i on L union (D intersect Galpha). In particular its image of P is exactly the ORIGINAL Pi(J), and that very saturation is now in Vprime, not a moved replacement shadow.

Use this returned map only on D union L, and retain fprime on ALL of Galpha. They agree on the overlap just displayed. Extend this consistent prescription to G, arbitrarily close to g_i and unchanged off the finite active packet. Here is the finite extension step behind the maintained invariant. Triangulate the prescribed union D union L union Galpha as a subcomplex, choose a sufficiently fine finite relative subdivision so images of each remaining simplex and its prescribed boundary fit a convex Euclidean chart buffer, keeping the extension smaller than the Qwork/Qalpha target gap, and extend over the remaining simplices in dimension order by coning their already specified boundary maps to the old image of a barycenter in that buffer. Uniformly small oscillations of the old map and the arbitrarily small lower-stage change keep the cones in the buffer and make the extension as close as stipulated. Preserve the old map on the prescribed subcomplex and on the outer packet boundary. Thus this extension, denoted g_(i+1), agrees with the lower-stage output on D and equals fprime on the ENTIRE Galpha and on L. It supplies the full frozen-preimage invariant for the next elementary step; the values of the lower-stage map outside D are not imposed as conflicting extra data.

Now Z union g_(i+1)(D) lies in Vprime and the ORIGINAL Pi(J) is a subset of it. In the current chart take the closed retained ledger

A=((Z union g_(i+1)(D)) intersect Qalpha) union Pi(J).

Its active compact portion is closed and is already in Vprime. Use the raised lower profile a(z)=gamma1(z) on J and a(z)=gamma0(z) off J, with upper profile b=gamma1. Since J is closed and gamma0<=gamma1, a is upper semicontinuous; both profiles agree on the frontier of F. Its bottom belongs to Vprime: on J it lies in the now covered Pi(J), and elsewhere it is the already attached bottom. Every contact of the old ledger with the membrane is either in Pi(J) or on that attached bottom by the definition of T. Consequently A meets the raised-profile membrane only at its bottom. Apply section1 with retained A and support compactly inside the inner chart. It fixes A and engulfs the rest of the ORIGINAL membrane. Extend by identity outside the chart, and compose this stretch with the preceding lower-stage isotopy to obtain V_(i+1). Outside the chart the old ledger remains covered; inside, it is part of A. The free target face is added and the full map-freezing invariant is retained. This proves the local elementary step with the updated open sets carried through every application.

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

Apply the general auxiliary assertion with the closed retained set Z=X and with the inert polyhedral data G=H=L empty. The compact set X minus U has a finite cover by the buffered domination-chart interiors. The chart-number induction in3(a), followed by its SINGLE-chart A(0)-quotient construction at each reduction, gives the required actual isotopy. The auxiliary P is fixed by its ORIGINAL inclusion in its own chart and discarded before any later chart step. No simultaneous union of several chart polyhedra, no matching-image assertion across TOP chart transitions, and no substitution of near-map images for the original points of X is used. Thus the final conclusion is about X itself: X is contained in h_1(U).

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

This existing argument has one consolidated FIRST report; this H1–H3 repair must receive its ONE focused FINAL from the original reviewer before use. In
particular its relative optimal approximation, finite quotient/fixed-map
bookkeeping, q-2 bad-shadow induction and retained-set support matter;
the statement is not credited merely because Newman's theorem is named.
It supplies the higher-p finite TOP operation only. The separate finite
two-collar proof, countable stretching, one-collar construction, E3
expansion, and original TOP statements remain separate consumers.
