# Morse, affine Hopf, and family construction proposal

This is isolated mathematical authoring for owner integration. No native execution,
readiness, certification, publication, or current cross-batch supplier acceptance is
claimed. All module bundles in the family theorem below are **ungraded** modules;
their plus and minus bundles mean volume eigenspaces. The graded groups M_n and A_n
used for ABS are a different construction.

## Source reading and confirmed defects

Read the entire retained text of Eschenburg–Hanke, arXiv:2011.14368v3,
`research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/real-ko/sources/eschenburg-hanke-bott-thom-2021.txt`,
lines 1–3224 (all §§1–10 and references), against the retained PDF's section
numbering. The following is an expansion of §§3–9, not a claim that EH's sketches
already contain the expansions.

1. EH4.4 needs a clean critical-manifold proof and a relative finite-dimensional
   handle argument. The current local carrier's arbitrary compact manifold
   hypothesis is stronger than EH's symmetric-space-with-poles hypothesis. The
   argument below restores the approved symmetric/pole hypothesis. It proves all
   uses needed here; it does not assert the stronger arbitrary-metric statement.
2. EH5.4's proof gives index at least r−1, not its printed strict inequality.
   Use r−1 with strict slack. The proof below exhibits orthogonal negative
   fields, rather than merely counting conjugate-point pictures.
3. EH9.5's last displayed boundary gauge must be extended over the disk half.
   A cone extension using the actual clutching homotopy is given below.
4. EH9.6 changes representatives when it deforms the upper gauge. A fixed-target
   gauge cancellation argument is supplied below.
5. EH8.6 conflates word parity and left-volume chirality. Use the latter for the
   regular stabilization throughout. Its positive half contains the global
   nonzero vector (1+omega)/2, which also supplies an elementary embedding device.
6. EH7.8 identifies the image of the iterated suspension with affine maps too
   literally: on the constant summand the suspended map is a folded hemisphere
   map. A based, projection-continuous hemisphere contraction is supplied in C.
7. EH9.2/10.3 concern ungraded modules. The raw graded module group in the current
   local Thom carrier is wrong: at a point in rank eight it has rank two, whereas
   the target has rank one. Rank zero must be a separate KO identity.

## A. Finite-dimensional Morse supplier

### A1. Clean polygon critical sets for symmetric poles

Let P be a compact Riemannian symmetric space, o,p poles (s_o=s_p), and fix a
component of paths from o to p. Paths are parameterized on [0,1], and a minimizing
geodesic always means constant speed. Fix a convexity radius r and n so large
that c/n<r². On the open manifold

    Q_n = {(x_1,...,x_(n−1)): dist(x_(j−1),x_j)<r}, x_0=o, x_n=p,

put E_n=n sum dist(x_(j−1),x_j)². Its sublevel E_n≤c is compact and lies inside
Q_n: each edge length is at most sqrt(c/n)<r. Restrict to the chosen path
component. First variation at an interior vertex is twice the difference of the
incoming and outgoing velocities. Therefore the critical polygons are exactly
the sampled smooth constant-speed geodesics.

Here are details of the Hessian comparison. Along a critical geodesic gamma,
write any endpoint-zero H¹ field W=J+Z, where J is the unique field which is
Jacobi on each edge and agrees with W at its vertices, and Z vanishes at every
vertex. Uniqueness follows because an edge lies strictly inside the convexity
radius. Integrating the Jacobi equation by parts on each edge gives I(J,Z)=0
for the index form

    I(U,W)=integral (<D_t U,D_t W>−<R(U,gamma')gamma',W>).

I is positive definite on the edgewise endpoint-zero Z fields. This follows
also directly from the edge energy's strict local minimizing property; more
explicitly the index form is positive on a segment before its first conjugate
point, because the Jacobi fundamental matrix Y with Y(0)=0,Y'(0)=I is invertible
there and integration of |W'−Y'Y^(−1)W|² gives I(W,W), with the endpoint term
zero. The limiting term at the initial endpoint is zero by H¹ approximation.
Thus the polygon Hessian is twice I on the J fields, and has exactly the full
path Hessian's index and kernel.

For completeness, cleanliness at poles has a direct symmetric-space proof.
Use the symmetric Lie algebra g=k+p_o, with bracket curvature
R_H(U)=−[H,[H,U]], and parallel translation along exp_o(tH). These formulas
follow by differentiating the invariant metric's connection: the involution is
+1 on k and −1 on p_o, [p_o,p_o]⊂k, and the Koszul formula gives the displayed
curvature and parallel translation by transvections. R_H is self-adjoint
nonnegative for compact P. A fixed-endpoint Jacobi field has, in a parallel
R_H-eigenframe, components a t when the eigenvalue is zero and
sin(sqrt(kappa)t)V/sqrt(kappa) when kappa>0. Vanishing at t=1 forces a=0
and sqrt(kappa) a positive integral multiple of pi. Each such component is an
isotropy Killing field: for V in the kappa eigenspace choose
Z=[H,V]/kappa in k, with the sign chosen so [Z,H]=V. The Killing field generated
by exp(sZ) has zero value at o and initial covariant derivative V, hence is the
stated Jacobi field by the ODE uniqueness theorem.

The connected isotropy K_o^0 fixes p as well. Indeed it commutes with s_o=s_p,
so its orbit of p is contained in Fix(s_p); p is an isolated point of that fixed
set since ds_p|p=−I. A connected orbit containing p is consequently {p}.
Thus all the above Killing variations preserve both endpoints. The compact
orbit K_o^0 gamma is an embedded manifold of critical geodesics, whose tangent
space is precisely the Hessian kernel. In a slice transverse to this orbit the
Hessian is invertible. The inverse function theorem applied to the normal
component of the differential shows that its zero set near the orbit is exactly
the zero section. Therefore the full critical set near the orbit is the orbit.
This proves the Morse–Bott condition, rather than assuming it.

For the actual matrix spaces used below this Lie-algebra step can be checked
without any general realization theorem for symmetric spaces. Put
h={Z in so(p): [Z,J_i]=0 for i<l}, k={Z in h:[Z,J_l]=0}, and
m={Z in h:ZJ_l=−J_lZ}. Then h=k+m, [m,m] is contained in k, and the
tangent at J_l is m J_l. For gamma(t)=exp(tX)J_l with X in m, ambient
bi-invariant parallel translation gives curvature operator −ad_X²/4 on m
in the transported frame. If Y in m is a curvature eigenvector of positive
eigenvalue kappa, set B=[X,Y]/(4kappa) in k. Then [B,X]=Y. Conjugating
gamma by exp(sB) fixes its two endpoints and gives a Killing Jacobi field
with initial derivative YJ_l. Every endpoint-zero Jacobi field is obtained
this way, since the zero-curvature affine solution vanishes and the other
solutions have sin(sqrt(kappa))=0. Thus the compact orbit of the group
centralizing J_1,...,J_l has tangent exactly the polygon Hessian kernel.
For l=0 use left/right isotropy (conjugation at I) and the same calculation
in so(p). These calculations prove cleanliness for SO(p) and every P_l
actually used in B–E, using only matrix multiplication and the displayed
Koszul formula. They avoid relying on an unproved classification of
symmetric spaces or of centriole chains.

For an energy-bounded polygon sublevel the critical set is compact. Its above
orbit neighborhoods have a finite subcover. Consequently it has finitely many
critical components and critical values. In particular no unproved assertion
about infinitely many stable manifolds is needed.

### A2. Relative Morse–Bott crossing lemma

Let f have a compact band with critical set a compact submanifold C at one
level a, Hessian kernel TC, and negative normal bundle nu− of rank lambda.
There are normal bundle coordinates, on a sufficiently small neighborhood,

    f=a−|u|²+|v|², (u,v) in nu− direct-sum nu+.

One way to obtain the required parameter version of the Morse lemma without
assuming it is as follows. In a tubular chart f−a=q+R with q the fiber Hessian
quadratic form and R of order at least three in the normal variable. For
f_s=q+sR, its vertical differential has the form A_s(x,z)z with A_s smooth,
symmetric, and invertible for sufficiently small z uniformly over compact C;
this is the integral Hessian formula. Write R=sum z_i R_i with R_i of order at
least two, using R_i=integral_0^1 partial_i R(x,tz) dt. Set the vertical field
W_s=−A_s^(−1)(R_i)_i. Then df_s(W_s)=−R. The flow of partial_s+W_s fixes the
zero section, exists on a uniformly smaller tube, and carries f_s back to q.
This construction is intrinsic after choosing the normal metric: use the radial
integrals and metric-dual Hessian instead of coordinates. Finally rescale the
positive and negative eigenbundles by the positive square roots of the absolute
Hessian. Smoothness of the spectral projections and square roots follows from
contour integration in finite matrices, or from the inverse theorem for
T↦T² on positive definite symmetric matrices. This proves the asserted bundle
normal form.

The crossing pair is obtained by attaching D(nu−) (with its positive normal
disk thickening) along S(nu−). To see this directly, in the quadratic tube
use the descending field (2u,−2v); off the tube use −grad f, patched by a
partition of unity, so df<0 away from C. On a compact regular complement
normalize by −df to cross that complement in a bounded finite time. In the tube,
the flow is (u,v)↦(e^(2t)u,e^(−2t)v). Its obstruction to reaching the lower
level is exactly the set u=0. Equivalently the relative pair retracts to the
negative disk bundle and its sphere bundle: contract v to zero, and stop the
outward u-flow on the lower-level face. Rounded corner choices change neither
the pair nor this conclusion; all stopping operations occur on regular faces.
This is the bundle version of the local quadratic handle proof, with precisely
its fiber formulas. It patches because the formulas use bundle norms only.

If lambda>q, every q-dimensional finite CW parameter family can be deformed
relative to the part already below the band so that it misses u=0 in these
handles. A precise elementary general-position argument is available cellwise.
First fix a collar of each cell boundary where the map is already disjoint
from the compact portion of u=0. Approximate the interior map by a smooth map
in finitely many coordinate balls. Add a small bump-supported translation in
all target coordinates. The evaluation in the translation parameter is a
submersion, so Sard's theorem gives a translation transverse to u=0. Do this
on finitely many balls, keeping already transverse compact subsets transverse
by taking subsequent translations sufficiently small. A transverse inverse
image has dimension q−lambda<0 and is empty. The straight small translations
supply the relative homotopy. For a CW domain perform this on its characteristic
disks inductively, extending the boundary homotopies by the homotopy extension
property; no smoothness of the CW complex itself is required. Thus all handles
of negative rank at least d+1 can be bypassed by parameter families of dimension
at most d. This proves the relative crossing assertion.

At a minimum component nu−=0; the normal form is a+|v|². The small sublevel
retracts onto the minimum component by v↦(1−t)v. All arguments used finite
bands, finite critical components, and finite flow times. No globally convergent
flow on the entire path space is asserted.

### A3. Relative polygon approximation and shortening

For a continuous compact family K→C^0([0,1],P), joint continuity on K×[0,1]
gives a uniform mesh with each edge in a convex ball. Replace each edge by its
unique shortest geodesic and interpolate pointwise using short geodesics. This
is a continuous homotopy, fixing every constant-speed minimizing geodesic
provided the mesh is fine enough. Thus a family already minimal on a subcomplex
A stays fixed. The resulting polygon energy has a finite bound c by compactness
of K. Refine the mesh by a multiple so n>c/r²; refinement does not change the
polygon paths or their energy. The final sublevel is the compact polygon
manifold sublevel of A1. Its topology agrees with the vertex topology.

For H¹ path space the same operations are continuous in H¹ and the homotopy
preserves H¹. On a convex coordinate ball they are compositions with smooth
maps having bounded first and second derivatives on a compact coordinate
neighborhood, hence are continuous in H¹ by the chain rule and the one-dimensional
H¹→C^0 estimate. Compact H¹ families admit a uniform mesh by that estimate.
Their polygon energies are bounded by their original energies, since on an
interval of length 1/n the shortest segment energy is n dist², at most the
original energy by Cauchy–Schwarz. Therefore the argument proves both topologies'
finite-CW relative statements.

Apply A1 and A2 in order of the finitely many critical values below c, taking
regular boundaries. If every geodesic not globally energy-minimizing in the
chosen path component has index at least d+1, all its handles are bypassed.
The family then reaches the small minimum neighborhood and retracts onto the
minimum set, relative to A. It follows that the minimum inclusion is d-connected
for every finite CW pair of dimension at most d. If a component had no minimum
at the global shortest energy, its actual energy minimizer would be a nonminimal
index-zero critical point, contradicting the hypothesis; hence the same proof
also handles this possible interpretation of 'minimal'.

## B. Clifford centrioles and independent index fields

Equip SO(p) with p^(−1)tr(A^T B). The metric is bi-invariant. The Koszul
formula on left-invariant fields gives nabla_X Y=[X,Y]/2, so its geodesics are
exp(tA)g and parallel translation in left trivialization is exp(−t ad_A/2).
The involution g↦−g^(−1) has as fixed set the orthogonal complex structures;
the involutions g↦J_i g J_i have fixed set the matrices anticommuting with J_i.
They commute as transformations (the anticommuting signs cancel) and commute
with g↦−g^(−1). The relevant common fixed-set components are therefore smooth
totally geodesic compact symmetric spaces, with the induced geodesic symmetry.
This also proves directly that the P_j are legitimate inputs to A.

Differentiating (exp(tA)J_j)²=−I at zero gives AJ_j=−J_j A, and differentiating
anticommutation with J_i gives AJ_i=J_i A for i<j. Conversely those identities
give (exp(tA)J_j)²=−I and the required anticommutations for all t; the whole curve
lies in the component through J_j. These are exactly all tangent vectors, by
the fixed-set tangent description. A shortest SO(p) path from I to −I rotates
each orthogonal two-plane by pi, has length pi for the normalized trace metric,
and its midpoint is an orthogonal complex structure. Conversely every such J
gives cos(pi t)I+sin(pi t)J, of length pi, hence shortest. The same argument
inside P_j gives the next midpoint: if K anticommutes with J_1,...,J_j, set
J'=K J_j^(−1). Then (J')²=−I, and exp(pi t J')J_j is in P_j with midpoint K
and endpoints ±J_j. Conversely a shortest path in P_j is also a shortest
ambient path whenever a next Clifford extension exists; its midpoint K satisfies
KJ_j=−J_jK by squaring the midpoint of its translated ambient geodesic.
This proves the midpoint component statement subject to −J_j lying in P_j.
That component/pole condition is retained, not inferred for arbitrary families.
The antipodal map has the same symmetry at J_j and −J_j, so these are poles.

For a geodesic gamma(t)=exp(pi t A)J_l between ±J_l, decompose R^p orthogonally
into minimal spaces M_h invariant under A and the J_i. The self-adjoint operator
−A² commutes with all the J_i. Thus on a minimal block −A²=k_h² I, k_h positive
odd, and A/k_h anticommutes with J_l and commutes with its predecessors.
The family extended by J_(l+1)=J_l A/k_h makes M_h irreducible over C_(l+1).
Indeed any invariant proper subspace for this extended family would also be
invariant under A and the original family. If all k_h=1, gamma has length pi
and is minimal. Otherwise at least one k_h≥3.

If l is not 2 modulo 4, C_(l+1) has one irreducible module type. The sign-flip
automorphism of its last generator therefore supplies an isometry between a
chosen block M_j and M_h which preserves the first l generators and reverses
the extended generator. Orthogonalize an intertwiner by T(T* T)^(−1/2).
On M_j+M_h the generator is diag(k_j J',−k_h J'). Put B=(0,−I;I,0) on this
pair and zero elsewhere. B commutes with the original Clifford family, so
conjugation by exp(uB) is an endpoint-preserving geodesic variation in P_l.
The Jacobi field is [B,gamma(t)]. With b=(k_j+k_h)/2, parallel translation in
the ambient group gives this field the form sin(pi b t) times a nonzero parallel
field: substituting the two diagonal exponentials, or applying exp(−t ad_(pi A)/2)
to the left-trivialized field, cancels the common diagonal frequency and leaves
2 sin(pi b t) times a fixed off-diagonal block. Because P_l is totally geodesic,
the same is its intrinsic parallel translation. Consequently its curvature
eigenvalue is (pi b)².

For each a=1,...,b−1 the endpoint-zero field

    W_(jh,a)(t)=sin(pi a t) V_jh(t)

has I(W,W)=((pi a)²−(pi b)²)|V_jh|²/2<0, where V_jh is that parallel field.
Fields for different a are orthogonal for I by sine orthogonality. Fields for
different unordered block pairs have disjoint off-diagonal matrix support;
parallel translation preserves block support, so both derivative and curvature
terms are orthogonal under the trace inner product. Their span is negative
definite, which proves independence of the counted directions. Fixing one
nonminimal block h gives at least one such direction for each j≠h. Hence

    ind(gamma) ≥ r−1,  r=p/s_(l+1).

For l=0 use the orthogonal two-plane decomposition of A. On each pair of
planes, SO(4) has its two commuting quaternionic S³ factors, with speeds
(k_j+k_h)/2 and (k_j−k_h)/2. A nonminimal plane paired with any other plane
has a factor of speed at least two; its two perpendicular sine fields give
index at least two. Off-diagonal supports make different pairs orthogonal.
Thus ind≥p−2, in particular the same conservative bound p/s_1−1. No strict
version of r−1 has been used.

If l=4m−2, put i=J_1...J_(l−1). Then i²=−I, it commutes with A and the
preceding generators, and it anticommutes with J_l. The complex eigenspaces
of A with respect to i are invariant under all J_i: J_l reverses both A and i,
so it preserves the complex eigenvalue label. On a minimal block A=k_h i,
now with signed odd k_h; each block is irreducible over C_l and has real
size s_l. Pairwise isometries preserve i and the full Clifford family. On a
pair A=diag(k_j i,k_h i), and the same calculation has
b=|k_j−k_h|/2. It yields b−1 orthogonal negative sine fields when b≥2. Therefore

    ind(gamma) ≥ sum_(k_j>k_h) ((k_j−k_h)/2−1).

The Cartan map J↦JJ_l^(−1) lies in U(p/2), and a path between ±J_l gives a
closed determinant loop since p is divisible by four. Its winding is
w=(s_l/4)sum k_j. Write k_+ for the sum of positive k_j and k_- for minus the
sum of the negative ones. Then k_++k_-≥p/s_l and k_+−k_-=4w/s_l. If
p−4|w|≥4d s_l, both k_+ and k_- are at least 2d. If k_j≥3, summing its pair
contributions against all negative entries gives index at least
(number of negative blocks+k_-)/2>d. If k_h≤−3, reverse signs and use the
positive blocks. Unless every k_h=±1 one of these cases holds. If all are ±1,
the geodesic has length pi and is minimal. This proves the exact winding bound.

The negative fields here arise intrinsically in the fixed-set manifold, not
merely in the ambient group: they are parallel multiples of tangent Jacobi
fields; total geodesy preserves tangent parallel transport. All endpoints of
the trial fields are zero. This closes both the independence and admissibility
parts of the index estimate.

## C. Iterated suspension and the affine Hopf inclusion

Fix k=4m−1 and a positive orthogonal C_k representation, meaning
J_k=J_1...J_(k−1). For 0≤l≤k let P_l be the component determined by this
family, with P_0=SO(p) and J_0=I. At each stage where l+2≤k, an additional
Clifford generator guarantees both the antipode condition and the relevant
component's extension.

A chosen meridian m in S^q is a cofibration and is contractible relative to its
north endpoint. Restriction Map_*(S^q,P)→Map_*(m,P) has the homotopy lifting
property: a lift is exactly extension of a map on S^q×{0} union m×I, and the
cofibration homotopy extension property supplies it, also after product with a
finite CW parameter pair. Its base contracts by precomposition with contraction
of m. Thus the fixed-meridian mapping space has the same relative homotopy
classes as the original mapping space. When the parameter boundary already
consists of geodesic suspensions, keep its fixed meridian throughout by the
relative lifting property.

Writing S^q as the suspension of S^(q−1), the fixed-meridian space is
Map_*(S^(q−1),Omega(P;J_l,−J_l)); the basepoint sphere point is sent to the
chosen meridian path. Replacing the path-space target by its minimal paths is
geodesic suspension, with midpoint target P_(l+1). A q-dimensional target sphere
uses q−1 extra parameters: for a j-dimensional test disk apply A3 to

    (D^j×S^(q−1), (boundary D^j×S^(q−1)) union (D^j×{basepoint})).

Its dimension is j+q−1. Hence index>d+q−1 implies d-connectivity of this
suspension. For q≥2 the equator is connected, so every path belongs to the
component of the fixed meridian.

For l=4a−2 before the terminal stage, its meridian has zero winding. To prove
this explicitly, its midpoint J_(l+1) determines an involution A/i with ±1
eigenspaces L_±. An additional J_(l+2) interchanges them (it reverses the
appropriate i-eigenvalue while commuting with the previous Clifford action),
so their dimensions agree and w=0. Conversely equal dimensions give an
intertwining isometry T:L_+→L_- and the off-diagonal complex structure
(0,−T^(−1);T,0)J_l extends the family. This is EH5.8 including both directions.

A fully explicit safe size condition for the iterated suspensions is to put
D=d+k and require for every 0≤l≤k−2 that

    p/s_(l+1)−1>D when l is not 2 mod4,
    p≥4D s_l when l is 2 mod4.

These finitely many inequalities define a p_0(d,k) with divisibility dictated
by the representation. The stronger bound absorbs the actual parameter count.
The source notation p_0(d) suppresses fixed k. With this choice the composite

    theta: Map_*(S¹,P_(k−1)) → Map_*(S^k,SO(p))

is d-connected. Composition follows by successive relative lifts (or the exact
homotopy sequences of mapping cylinders). For defining stable winding take
D with d at least two, so theta also induces a bijection of components and an
isomorphism on pi_1 when needed.

Let l=k−1 and i=J_1...J_(l−1). A loop's eta is the determinant winding of
J↦JJ_l^(−1). The fixed positive half-meridian gamma(t)=exp(pi i t)J_l has
w=p/4. Fixing this half-meridian identifies the loop space up to the just-proved
relative equivalence with paths tilde-gamma from J_l to −J_l. Concatenation
of gamma and reverse(tilde-gamma) has

    eta=p/4−w(tilde-gamma).

The stable winding of a based S^k map is the unique eta of its preimage component
under theta after adding a sufficiently large constant block. This is independent
of the chosen block size: positive representation block sums preserve all
suspensions, and determinant winding is additive; a constant block has winding
zero. Two choices embed into a common still larger size, where the component
bijection for theta forces the same eta. Changing the chosen positive
representation is conjugation by an orthogonal intertwiner. Orthogonal
conjugation acts trivially after adding one constant coordinate: replace its
conjugator T by diag(T,det T), which lies in a connected SO group, and conjugate
along a path to I. Thus the stabilized label does not depend on that choice.
This also proves its invariance under O(p) gauge changes. An oriented change
of frame in R^(k+1) acts on the sphere by a map isotopic to identity and
preserves the label. These facts are needed for gluing the local family charts.

If s_k d≤eta≤p/4, w=p/4−eta≥0 and

    p−4|w|=4eta≥4d s_l, with s_l=s_k.

B and A3 therefore give d-connectivity for replacing the remaining path by a
minimal path. Such a path is specified by an invariant splitting R^p=L_0+L_1,
with midpoint +J_k on L_0 and −J_k on L_1. Its winding difference gives
dim_C L_1=eta. Concatenation on L_0 is gamma followed by its reverse and is
contracted by replacing gamma(t) by gamma(st), 1≥s≥0. This contraction is
continuous as the invariant projections vary and is based. On L_1 it is the
full positive circle. On L_1 the preceding suspensions give the linear positive
Hopf map x_0I+sum x_j J_j, by expanding cos(pi t) and sin(pi t) at each
suspension coordinate.

On L_0, however, suspending the constant loop does not give a constant map:
it gives the folded map with image in the closed hemisphere of the great
sphere spanned by I,J_1,...,J_l whose J_l coefficient is nonnegative. This
coefficient is a product of nonnegative sin(pi t) factors. Here is the needed
continuous based correction. Write a point of this hemisphere as (y,a),
where y is in span(I,J_1,...,J_(l−1)), a≥0 is the J_l coefficient, and
|y|²+a²=1. Stereographic projection from −J_l gives z=y/(1+a) in the closed
unit ball. The basepoint I corresponds to z=e_0. Set
z_s=(1−s)z+s e_0 and use the inverse projection

    y_s=2z_s/(1+|z_s|²), a_s=(1−|z_s|²)/(1+|z_s|²).

This contracts the whole hemisphere to I while fixing I at every time. Its
sphere points are orthogonal Clifford matrices, so the homotopy remains in
SO(L_0). Use this contraction on L_0 and keep the positive Hopf map on L_1.
It varies continuously with the invariant projections because the displayed
matrix coefficients are universal scalars and the maps commute with those
projections. Thus the actual iterated-suspension composite is homotopic,
as a map of the splitting parameter space into Map_*(S^k,SO(p)), to the
affine Hopf inclusion. This repairs the literal-image claim in EH7.8.

There is no unjustified 'image preserves connectivity' inference here. The
space of these splittings is a compact invariant Grassmannian. Its projection
P_1 is recovered from the affine map by P_1=(I−phi(−e_0))/2, continuously.
Thus the splitting-to-affine-map map is a homeomorphism onto its image. The
constant-plus-full-circle loop is also recovered by the same projection.
The contracted composite of the d-connected suspensions therefore factors
through this homeomorphism, proving the claimed d-connectivity of the actual
inclusion. Boundary maps can be kept fixed using the mapping-cylinder relative
interpretation of connectivity and the homotopy extension property; equivalently
use the homotopy group characterization, then extend over the finitely many
cells. No global deformation retraction is claimed.

## D. Relative family decomposition, with the missing lower gauge extension

Let X be finite CW, V oriented Euclidean of rank n=4m>0, and
Vhat=S(R+V)=D_+V union_(SV) D_-V. Let E=(E_+,sigma,E_−) be its clutching
triple. For an ungraded C(V)-module Lambda let omega be the oriented volume
section, Lambda^±=ker(omega∓I), and H(Lambda)=(Lambda^+,c(v),Lambda^−).
Every c(v), |v|=1, interchanges the halves isometrically. The upper half carries
the positive C_(n−1) representation e_j↦−c(e_1)c(e_(j+1)). This follows from
the Clifford relations and omega=+I on the upper half.

Normalize sigma locally at e_1 by sigma(e_1)^(−1)sigma(v). Its determinant is
+1 since SV_x is connected and the normalized value at e_1 is I. Its stable
winding eta is constant on each component of X and independent of local charts:
use the gauge and frame invariance proved in C. One regular Hopf summand has
upper rank h=2^(n−1) and positive winding h/2. Add sufficiently many such
summands to make eta≥s_(n−1)(dim X+1). Add trivial real summands to make
p≥4eta and satisfy every size inequality of C. Divisibility of the eventual p
will follow from the next ambient embedding. These changes are explicit finite
stabilizations; they do not alter V or its rank.

Embed E_+ into a large regular module half R^+ with R=C(V)^N. Indeed E_+
embeds into a trivial R^a by the finite-CW complement supplier, and each regular
half contains the global vector (1+omega)/2, so R^a embeds in R^+ for N≥a.
Increase N further for the size inequalities. Add the pulled-back orthogonal
complement F=R^+ minus E_+ to E. This only increases p and leaves eta fixed.
At the end F can be canceled as an allowed stabilization by adding F's ordinary
bundle complement: F+Fperp is trivial. We can now assume E_+=R^+ and R has
fixed ungraded module structure.

We prove the following relative statement, stronger than existence: if over a
subcomplex X' we have an invariant orthogonal splitting R=R_0+R_1 and a lower
gauge f:E_−|D V_(X')→R_0^+ +R_1^− satisfying f sigma=id+c(v) on the boundary,
then these data extend over X whenever the connectivity of C is at least dim X.
For uniqueness use dimension dim X+1. Work one characteristic disk D at a time.
Trivialize V and R compatibly over D, and write v_0=e_1. On boundary D use

    eta_minus=sigma(v_0)^(−1), theta_minus=omega_clutch(v_0)^(−1),
    fhat=theta_minus f eta_minus^(−1),
    sigmahat(v)=sigma(v_0)^(−1)sigma(v).

Here omega_clutch=id_(R_0^+)+c(v)|_(R_1^+) is the existing affine clutching
map; these symbols are bundle trivializations, not the volume omega. The
identity f sigma=omega_clutch gives fhat(x,v_0)=I and
fhat sigmahat=omegahat on boundary D×S^(n−1), where omegahat is an affine
Hopf map for the fixed ambient positive representation on R^+.

There is an explicit extension over D×D^n:

    Fhat(r x,v)=fhat(x,v_0+r(v−v_0)), 0<r≤1; Fhat(0,v)=I.

This is continuous at r=0 uniformly in x,v, by compactness and fhat(x,v_0)=I;
it equals fhat when r=1 and is I when v=v_0. Thus
Tau=Fhat sigmahat is based over the whole cell and agrees with omegahat on its
boundary. Fhat restricted to any sphere fiber extends over the disk, so it is
nullhomotopic and Tau has the original winding eta. Apply C, relatively to
boundary D, to get Tau_t with Tau_1 affine and Tau_t=Tau_0 on boundary D.
The continuous recovered projection determines R_1^+ over D, agreeing with the
given one on boundary D. Put R_1^−=c(v_0)R_1^+ and similarly for R_0; the
Clifford-even invariance of the projection and odd multiplication show these
are ungraded C(V) submodules. This description is independent of frame and
agrees along the attaching map.

Here is the disk extension omitted by the final boundary formula in EH9.5.
The ratio q_t(v)=Tau_t(v)Tau_0(v)^(−1) has q_0=I and is identically I on
boundary D for every t. Extend q_1 over D×D^n by the cone on the sphere:

    Q(x,r v)=q_r(x,v), r>0; Q(x,0)=I.

Uniform continuity at r=0 makes this continuous. It is I over boundary D×D^n.
Consequently G=Q Fhat extends fhat over the disk and satisfies
G sigmahat=Tau_1 on D×S^(n−1). With the final normalization
Theta_1=(id_(R_0^+)+c(v_0)|_(R_1^+))^(−1) on the lower target, the actual lower
gauge is Theta_1^(−1) G sigma(v_0)^(−1). On the cell boundary this equals the
old f. This proves a genuine isomorphism of bundles over both disk halves,
with upper gauge I, rather than only an equatorial relation.

Induction over the finitely many cells gives

    E plus trivial plus H(C(V))^t = pi^*E_0 plus H(Lambda),

where Lambda=R_1 is ungraded. The initial relative data are empty for
existence. All operations used finite cells, actual dimensions and maintained
p≥p_0, s_k dim X≤eta≤p/4. The proof needs no KO periodicity and no general
cohomology Thom theorem.

## E. Upper gauge cancellation and relative uniqueness

### E1. Fixed-target block rotation

Let triples A,B have the same upper bundle F, and phi:A→B an isomorphism
with upper component g(x,v) over D_+V. Let g_0(x)=g(x,0). Stabilize phi by
the pulled-back isomorphism g_0^(−1):pi^*F→pi^*F. Its upper component is
U=diag(g,g_0^(−1)). Radial contraction g(x,tv) deforms U to
diag(g_0,g_0^(−1)). For any orthogonal a on F the following explicit rotation
nullhomotopes that last block matrix:

    R_t=(cos t I,−sin t I; sin t I,cos t I),
    diag(a,I) R_t diag(I,a^(−1)) R_t^(−1), 0≤t≤pi/2.

At t=0 it equals diag(a,a^(−1)); at t=pi/2 it equals I. Combining these gives
a continuous orthogonal homotopy U_s from U to I over the upper disk. This
is the needed content of the block-rotation lemma, with the target fixed.

To realize it as a correction of the given bundle isomorphism, let beta be
the stabilized target clutching. On the upper disk use U^(−1) as an automorphism
of the target upper bundle. On the equator its required lower automorphism is
beta U^(−1) beta^(−1). It extends over the lower disk by

    h_−(x,r v)=beta(x,v) U_(1−r)(x,v)^(−1) beta(x,v)^(−1), r>0,
    h_−(x,0)=I.

Continuity follows uniformly at r=0 since U_1=I. Together these are a genuine
orthogonal target automorphism, and its composition with the stabilized phi
has upper gauge I. This proves fixed-target cancellation without claiming
that changing a clutching representative leaves its literal map unchanged.

### E2. Uniqueness using X×I

Suppose pi^*E_0+H(Lambda) and pi^*E_1+H(Mu) become isomorphic after the
**same** trivial and regular-Hopf stabilizers. Absorb the common trivial
summand into E_i and the common regular module into Lambda and Mu. The
upper bundles F_0=E_0+Lambda^+ and F_1=E_1+Mu^+ are isomorphic by restriction
to the upper pole. We will allow additional pulled-back bundles which are
stably isomorphic, and common regular-Hopf bundles; these will be canceled
at the end.

Choose a regular module R whose positive half contains both E_i, and put
A=Mu^+ +(R^+ minus E_0), B=Lambda^+ +(R^+ minus E_1). Then

    F_0+A = Lambda^+ +Mu^+ +R^+ = F_1+B.

The given isomorphism F_0≅F_1 implies A and B are stably isomorphic: from
A+F_0≅B+F_0 add a complement of F_0 to a trivial bundle. Thus after trivial
stabilization we can identify the added A and B and retain an isomorphism
of the total sphere-bundle triples. Moreover their zero parts become
E_0+A=Mu^+ +R^+ and E_1+B=Lambda^+ +R^+; these are invariant module halves
inside the common module Lambda+Mu+R. This is why an arbitrary embedding of
E_i alone would not have sufficed.

Apply E1, adding the common ambient upper bundle as a pulled-back summand.
This is itself a module half, so the two boundary decompositions still are
invariant splittings of a common ambient module. The resulting upper gauge
is I. If needed add the same regular Hopf bundles and the same pulled-back
regular halves to both sides, until C's inequalities hold with
D=dim X+1. This raises eta first and then raises p, as in D; it never changes
the desired stable conclusion.

Write the resulting lower gauge as phi_− over D_-V, and phi_0 its restriction
to the zero section. Radial contraction of D_-V provides a homotopy from
phi_0 to phi_−. Glue the two lower bundles over X×[0,1/2] and X×[1/2,1]
using phi_0. On the second half use that homotopy, followed by phi_− sigma,
as the clutching map. Because phi_− sigma equals the second affine clutching
map on SV, this constructs a triple on Vhat×I which agrees with the prescribed
affine triples at both ends, and whose upper bundle is the fixed common
ambient module half. This construction is global on X; no choice of a unit
vector field on V is needed.

Apply D's relative induction to (X×I,X×{0,1}), starting with those two
boundary splittings and their identity lower gauges. Its relative cell
dimension is dim X+1. It produces over the cylinder an ungraded module
subbundle whose restrictions are Lambda plus the common regular stabilizer
and Mu plus that same stabilizer. Those restrictions are isomorphic.
For clarity, module homotopy invariance here can be proved without Bott:
projections onto the subbundles lie in the Clifford commutant. Uniform
continuity subdivides I so adjacent projections P,Q differ by norm less than
one. The map T=QP+(1−Q)(1−P) is invertible; its polar part
T(T* T)^(−1/2) intertwines P,Q and the Clifford action. Multiplying these
finitely many isomorphisms identifies the endpoints. The same argument for
ordinary projections identifies the zero-part bundles.

Thus Lambda and Mu are stably isomorphic after equal regular summands, and
E_0+A and E_1+B are stably isomorphic as real bundles. Since A,B are stably
isomorphic, ordinary complement cancellation gives E_0 stably isomorphic to
E_1. This proves uniqueness including the required dimension shift. It does
not infer injectivity from existence.

## F. Group completion and the Clifford–Thom map

This last step consumes the real bundle complement and relative-KO kernel
identification suppliers, not real Bott periodicity. Every C(V)-module has a
complement in a finite regular module: on a finite trivializing cover embed
locally into regular copies, multiply each local embedding by a partition of
unity's square root, and sum. The image is injective fiberwise; polar
normalization makes it orthogonal, and its orthogonal complement is a
C(V)-submodule. Therefore equality in the module Grothendieck group is
equivalent to stable isomorphism after equal regular summands. The analogous
ordinary-bundle statement follows by ordinary complements.

Existence and uniqueness give an isomorphism of groups

    T: KO(X) direct-sum KCl(V)(X) → KO(Vhat),
       (e,lambda) ↦ pi^*e+[H(lambda)].

For surjectivity, D expresses any actual bundle after common finite shifts
as such a sum; moving the trivial and regular-Hopf shifts to the other side
gives an expression in the image, and group completion handles differences.
For injectivity, equality of two such sums in KO means their actual-bundle
representatives become isomorphic after an arbitrary common bundle on Vhat.
Add that common bundle's complement to make the common stabilizer trivial,
then apply E2. This gives equality of both coordinates. To represent arbitrary
formal e and lambda by differences, first move their negative parts to the
opposite side; the same argument then applies. This is the required explicit
cancellation step.

The section restriction under T is (e,lambda)↦e+[lambda^+]. Thus its kernel
is the graph {(-[lambda^+],lambda)}. The projection
chi(z)=z−pi^*s_+^*z has kernel pi^*KO(X), and its image is precisely the
section kernel. The real relative-triple supplier identifies that kernel
with KO(Vhat,s_+X)=reduced KO(Th(V)); Vhat/s_+X is the Thom space, using
the disk-half description. Consequently

    Psi_V: KCl(V)(X) → reduced KO(Th(V)),
           lambda ↦ [H(lambda)]−pi^*[lambda^+]

is an isomorphism. Before this quotient T has zero kernel; the composite
chi T has kernel KO(X) direct-sum {0}. These are the actual kernels, rather
than an unexplained claim of stable uniqueness. For n=0 use Th(0_X)=X_+
and KO(X)→reduced KO(X_+) the identity under the canonical basepoint split.
There is no raw graded-domain claim in this theorem. With the standard ABS
relative-triple convention [E,F,sigma] restricting to [E]−[F] at the disk
zero section, the volume-positive symbol is Phi_V=−Psi_V: the uncollapsed
south-pole restriction of Psi_V is [Lambda^−]−[Lambda^+]. Multiplication by
−1 is an isomorphism, so the standard-symbol Phi_V is an isomorphism too.
This sign must be fixed before identifying a multiplicative Bott generator;
Psi and Phi are not identified literally.

## Integration boundary and remaining prerequisite audit

The mathematical expansions A–F are proposals. A1 proves the needed matrix cases directly; its more general symmetric-space
formulation additionally uses the standard symmetric Lie algebra realization; A2 uses finite-dimensional inverse/flow/tubular-neighborhood,
Sard and finite-CW homotopy extension facts. These must be assigned exact local
suppliers at integration. The three inspected existing Morse lemmas cover
isolated nondegenerate points only and do not themselves certify A1–A2.
The proposed new helpers below are where those extensions belong. No statement
that those outside facts are already current ready suppliers is made.

The smallest original mathematical gap was A1–A2. The detailed argument above
addresses it in the needed symmetric-pole case. A full item-level closure still
requires (i) checking the indicated standard geometry suppliers against actual
canonical contracts, (ii) the separately owned ungraded/volume model repair,
and (iii) native review of these drafts. The arbitrary compact-Riemannian
version of the current path-shortening statement is not proved here and is
not asserted. Do not integrate that stronger wording with this proof.
