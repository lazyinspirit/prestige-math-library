# Arbitrary finite-dimensional marked punctured-torus chart

New authoring, 2026-10-21. Draft for independent mathematical review. This is
not a rereading or recertification of an accepted T4/T5 argument.

## Exact exported claim

Assume countable choice. For every integer N >= 4 and real L >= 32 sqrt(N),
write T=(R/LZ)^N with its standard tangent frame and central coordinates x.
One can choose an arbitrarily small open ball B about the point
v=(L/2,...,L/2), **before** constructing an immersion, so that there are an
open neighborhood U of K=T\B and a smooth local diffeomorphism

    g: U -> (-8/3,8/3)^N

which is x on an open neighborhood of [-9/4,9/4]^N. In fact the proof fixes
[-19/8,19/8]^N. For every desired upper bound on the diameter of B the proof
specifies a smaller B meeting it. The ball is round in the explicit sine
coordinates at v. It can also be required to lie in any preassigned open
neighborhood of v. No injectivity of g on all of K is asserted.

There are finite inverse-chart data: finitely many open sets V_i in U,
points z_i in K, radii r_i>0, compact neighborhoods K_i subset V_i covering
K, and inverse branches h_i on the Euclidean balls
B(g(z_i),r_i), such that K_i lies in
h_i(B(g(z_i),r_i/2)). Both derivatives of g and derivatives of these inverse
branches are bounded on the indicated smaller compact sets. Thus positive
minimum chart radii and finite maximum Lipschitz constants can be exported.
The data may be refined inside any specified finite open cover of K.

After scaling source coordinates and target coordinates by 1/4 this gives
period L/4, image (-2/3,2/3)^N, and identity on an open neighborhood of
[-9/16,9/16]^N. This is the open marking margin required by the finite-head
controlled-matrix construction. The source puncture remains prechosen.

The construction admits smooth compact parameter families whenever the
formal data, identifications of the source pair, and relative holonomic
parameter data are supplied compatibly as below. It makes no assertion
that arbitrarily prescribed genuine families extend without a compatible
formal extension.

## 1. Literal supplier contracts used

Only Statements were consulted; no accepted supplier Proof was reread.

* `lem-local-morse-sublevel-pair-is-a-handle-pair`: under CC, a single Morse
  critical point gives its rounded index-k source handle and a regular
  collar outside the compact local modification.
* `thm-morse-functions-and-handle-decompositions-correspond`: an adapted
  excellent Morse function on a compact collared triad has a finite handle
  decomposition, with one handle of its actual critical index per point.
* `lem-formal-immersion-homotopies-extend-over-a-subcritical-handle`: under
  CC, for 0 <= k <= m <= n and k<n, the full-m-column core/germ attaching
  jet restriction is a Serre fibration. A compact-parameter formal family
  genuine on an open source neighborhood of the previous compact source
  and holonomic on the relative parameter set can be deformed to genuine
  immersions relative to that source and those parameters. The cocore
  factor remains part of the SOURCE. The statement includes m=n provided
  k<n. It does not assert an unrestricted codimension-zero restriction
  fibration.
* `lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property`:
  the preceding interface retains all m columns, including the radial
  column. In a formal boundary jet the actual radial derivative of its
  base map is separate from the prescribed monomorphism column; they are
  identified only on holonomic data.
* `lem-smoothing-formal-immersion-families` and
  `lem-smoothing-genuine-immersion-families`: their CC compact-parameter
  relative smoothing conclusions, with the stipulated smooth holonomic
  neighborhoods of the relative parameter set.

The equidimensional integration below uses the k<N clause, not the
positive-codimension closed-source Smale--Hirsch theorem. No open-source
immersion theorem is needed. No higher-dimensional cocore is put into the
target.

## 2. Cosine Morse function and the prechosen puncture

Set F(x)=sum_i (1-cos(2 pi x_i/L)). A critical coordinate is 0 or L/2.
The Hessian is diagonal, with a negative entry exactly at an L/2
coordinate. Consequently the 2^N critical points are nondegenerate; a
point with k such coordinates has index k and value 2k. The unique maximum
is v and has value 2N.

Near v use y_i=x_i-L/2 (modulo L), |y_i|<L/2, and
u_i=sin(pi y_i/L). These are smooth coordinates and

    F=2N-2 sum_i u_i^2.

Choose 0<delta<1/8 first, as small as desired, and let
B={F>2N-delta}. It is exactly the ball sum u_i^2<delta/2 in this one
coordinate chart: F>2N-delta forces every cos(2 pi x_i/L)<-1+delta,
so there are no other pieces. As delta tends to zero its closure shrinks
to v, which proves both of the arbitrary-smallness requirements.

Let K={F<=2N-delta} and K+={F<=2N-delta/2}. They are compact smooth
manifolds with regular boundary and K lies in int K+. Both miss the
unique index-N critical point. We will integrate on K+; its interior is
the requested open neighborhood U. The source puncture B and the buffer
K+ are therefore fixed before any integration choices.

Set a=19/8 and A={F<=1/4}. On [-a,a]^N the estimate 1-cos t<=t^2/2 gives

    F <= 2 pi^2 a^2 N/L^2 <= pi^2 a^2/512 < 1/8.

Thus a whole open neighborhood of this larger marked cube lies in int A.
For F<1/2 all coordinates have their unique central representatives
|x_i|<L/4; in the sine coordinates w_i=sin(pi x_i/L),
F=2 sum w_i^2. In particular A is a genuine coordinate 0-handle.

The other critical points occur in disjoint coordinate neighborhoods,
separated from {F<=1/2} and from the boundary of K+. If distinct critical
values are desired, add disjoint smooth bump perturbations, constant near
each critical point, of sufficiently small distinct magnitudes. On the
compact complement of those neighborhoods |dF| has a positive lower
bound; choose the perturbations smaller in C1 norm than half that bound.
No new critical point appears and none changes index. The perturbation
vanishes near A and both chosen boundary levels. The Morse handle
Statement now gives a finite relative handle decomposition from A to K+
whose handle indices are 1,...,N-1, with regular collars. Alternatively
same-level disjoint handles may be attached together. In either version
there is no index-N handle.

## 3. A literal full-column formal immersion and its integration

Choose a smooth scalar cutoff chi(F), equal to one for F<=1/3 and zero
for F>=1/2. Define f0=chi(F)x in the central coordinate chart, and f0=0
outside it. The support is compactly contained in that chart, so this is
a smooth map K+ -> R^N. Let B0:TT|K+ -> R^N be the identity in the
standard torus tangent frame. This is an invertible full N-column
monomorphism at every point, independently of df0. On an open
neighborhood of A, f0=x and B0=df0. Thus (f0,B0) is exactly the formal
input required by the handle contract, with a genuine marked germ.

Apply that contract in the finite handle order, with m=n=N and the
actual handle index k<N. It deforms the current formal data to genuine
data on the enlarged compact handlebody, keeping an open germ of the
previous one fixed. All N columns are retained at each attaching jet;
in particular the radial derivative and the prescribed radial column
are not silently identified before holonomicity is obtained. Collars are
absorbed by source collar embeddings, or included in the open source
germs. This produces a genuine immersion f:K+ -> R^N agreeing with x
on the original open neighborhood of A.

For clarity about continuing the formal data through the yet unattached
handles, here is the homotopy-extension step implicit in this finite
induction. Trivialize TT by its original frame, so a formal pair is a
map into the open set R^N x GL_N(R). The previous compact handlebody,
with a slightly thickened collared germ, is a cofibration in K+.
Its formal homotopy and the previous global formal map extend over
K+ x I by the elementary homotopy extension property of this collared
pair. This is extension of MAPS into R^N x GL_N, not a claim about a
codimension-zero restriction fibration for immersions. Smooth it away
from a smaller prescribed germ: in finite coordinate patches convolve
in ambient matrix space, with a cutoff vanishing on that germ and at
the already fixed ends/parameters. Compactness and openness of GL_N
permit errors smaller than half the minimum singular value on each
relevant compact patch. Finite partitions and successively smaller
errors preserve invertibility. Where the germ is fixed the extension
was already smooth and unchanged. Thus the next handle receives an
actual global smooth formal continuation. Only finitely many such
extensions are used. This also explains why no compatibility across
unprocessed handles has been assumed.

Restrict f to U=int K+. Since its differential is invertible, the
ordinary inverse function theorem makes this a local diffeomorphism on
an OPEN subset of T containing K, including all of its boundary points.
No extension of a half-space inverse across the puncture boundary is
being inferred. No assertion of global injectivity is used.

## 4. Bounded target without disturbing the open marking

Put b=8/3. There exists a smooth strictly increasing odd function
psi:R -> (-b,b), equal to the identity on [-a,a], onto (-b,b).
Here is a definite construction if desired. Set h(s)=s exp(-1/s) for
s>0 and h(s)=0 for s<=0. For d>0 let
I(d)=integral_0^infinity exp(-h(s)/d) ds. This is finite, continuous,
and strictly increasing; it tends to zero as d decreases to zero and
to infinity as d increases to infinity. The limits follow respectively
by dominated convergence using any fixed positive d, and by integrating
on arbitrarily long finite intervals. Choose the unique d with
I(d)=b-a. Define psi(a+s)=a+integral_0^s exp(-h(t)/d)dt for s>=0,
psi(x)=x for 0<=x<=a, and extend oddly. Flatness of h at zero gives
smoothness at a, and psi'>0 everywhere. This proves every stated
property without a choice of an arbitrary compression family.

Let rho act componentwise by psi and set g=rho o f. It has values in
(-8/3,8/3)^N and invertible derivative. On the larger marked cube f=x
and rho(x)=x; since that cube lies strictly inside the genuine initial
germ and a>9/4, g is identity on an open neighborhood of
[-9/4,9/4]^N. Compression is performed only after integrating, so it
places no inappropriate bounded-image condition on the formal handle
problem. The puncture was already fixed in Section 2.

## 5. Finite inverse charts and actual numerical witnesses

For each z in K choose a source neighborhood V_z with compact closure
in U on which g is a diffeomorphism onto an open set, and choose
r_z>0 so that the closed ball of radius 2r_z about g(z) lies in that
image. Shrinking the source and r_z puts it in any specified member
of a finite open cover containing z. The sets
h_z(B(g(z),r_z/2)), h_z=(g|V_z)^(-1), cover K. Compactness gives a
finite subcover. Choose smaller compact neighborhoods K_i contained
in these sets and still covering K, by the elementary finite metric
shrinking construction. On the balls of radius r_i the h_i are
smooth with bounded derivative, because their closures of radius r_i
are compactly inside the balls of radius 2r_i. Derivatives of g are
bounded on each closure V_i after making these source sets smaller.
The least r_i is strictly positive and the greatest of the finitely
many derivative bounds is finite. Integrating the derivative along
segments in a target ball gives the asserted inverse Lipschitz bound.
For forward Lipschitz bounds use the chosen source coordinate balls
with convex smaller coordinate domains. None of these bounds claims
that the global map is one-to-one. All radii and finite lists are part
of the exported witness, rather than an unspecified universal constant.

## 6. Parameters and choice scope

For a fixed N the handle list is finite (at most 2^N-1 handles before
inserting collars). For a compact smooth parameter manifold P, use a
fixed identified source pair (K+,A), a smooth formal family equal to
the identity on a common open germ of A, and a closed relative set Q
with the stipulated smoothly holonomic open parameter neighborhood.
The literal compact-parameter subcritical-handle contract performs the
same finite integration relative to Q and the marked source germ.
Formal continuation in Section 3 is performed relatively, and the
supplier smoothing interfaces retain these relative conditions.
Compression rho is fixed and independent of parameters. Inverse
function neighborhoods can then be chosen in P x K; compactness gives
finite parameter/source patches and uniform positive radii and finite
bounds on smaller patches. Only the x-derivative is inverted; no map
P x U -> R^N is asserted to be an immersion.

Varying L and delta in compact ranges bounded away from zero introduces
no new issue: multiplication by L identifies the tori and radial sine
coordinates identify the two nested caps, with a cutoff away from A.
Thus the preceding assertion applies after these explicit source-pair
identifications and to any compatible supplied formal family. The
single-map exported claim needs no parameter theorem at all.

There is no dependent countable sequence of integration choices here.
For each fixed input, the Morse charts, finite handles, their finite
integration homotopies, continuation data, map, and finite inverse
charts constitute ONE complete nonempty witness set. Finite sequential
existential choices use no choice axiom. All named handle interfaces
are expressly under CC. For a prescribed countable list of inputs
(N,L,delta, and any supplied compact-parameter problems), apply CC to
their complete witness sets. This selects all finite constructions at
once; it does not invoke dependent choice or full choice. No assertion
about an arbitrary recursively chosen future input list is included.

## Boundaries of this new prerequisite

This construction supplies the finite-N torus local diffeomorphism,
open marking margin, prechosen source puncture, target bound, and
finite inverse charts only. It supplies no controlled matrix theorem,
no reference-path/groupoid transfer, no intrinsic PL structure on an
unsmoothed TOP control space, and no completion theorem. Those are
separate owner interfaces. In particular N may depend on the control
scale and is not being replaced by the dimension of the TOP base.
