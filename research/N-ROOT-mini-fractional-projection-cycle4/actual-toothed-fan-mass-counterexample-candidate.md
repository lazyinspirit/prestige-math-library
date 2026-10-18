# Actual toothed-fan MINI mass projection: failure of universal sub-half stability

2026-10-18. **Status: verified research proof, after independent geometry and algebra checks and the terminal clarification in section 7.5.** This note develops actual planar conforming mesh geometry, not the earlier abstract reversible tree. The review record and exact scope are in section 8. No canonical content or controls are changed.

The conclusion is: for each fixed s in (0,1/2), there is one finite shape bound and a family of conforming planar MINI meshes within that bound for which the full no-slip L2 projector R_h is not uniformly bounded H^s(D)->H^s(D), on one fixed square D. This does not address the constrained projector or original pressure error directly.

## 1. Exact actual matrix and local lower norm

Write theta=Oloc/Dloc=1/16 and gamma=2theta=1/8 for the two-dimensional bubble-condensed nodal mass matrix. After division of each row by its diagonal, the actual system is

    (I+A)a=g,   A_ij>=0,   sum_j A_ij<=gamma.

The diagonal before division is Dloc times the total area of the vertex star. On a triangle containing a parent center and consecutive boundary vertices, its contribution to the normalized parent edge is theta times the triangle's area fraction. The contributions to the two boundary-neighbor edges have exactly the same total as the parent contribution.

If the input f vanishes on a triangle K, bubble orthogonality gives

    integral_K b_K R_h f=0.

Weighted fractional Poincare therefore gives, for every fixed 0<s<1,

    |R_hf|H^s(K)^2 >= c_s h_K^(-2s)||R_hf||L2(K)^2.        (1)

To prove this, the weighted zero mean implies

    w(x)=integral_K [b(y)/integral_K b] [w(x)-w(y)]dy.

Jensen, the bound b/integral b<=C/|K| and |x-y|<=h_K give the asserted inequality after integrating x. The actual condensed local mass matrix also gives

    ||R_hf||L2(K)^2>=c |K| sum_(vertices i of K)|a_i|^2.     (2)

Indeed outside the support of f its bubble coefficient is exactly the one eliminating the bubble moment; its L2 norm squared is the positive definite condensed P1 matrix. Thus a nodal coefficient at a fan center produces a genuine physical H^s lower bound, not just a weighted upper majorant.

## 2. A finite toothed sector template

Normalize a fan's radius to one. It lies inside a fixed half-container C, a rectangle based on y=0 with its center/root at the midpoint 0 of the base; the base has exactly its two endpoints and 0 as vertices. The other container sides have a fixed finite coarse boundary triangulation. All templates use this same finite boundary pattern up to similarity; the strip-top vertices described in section 7 are included.

Fix b0>0 small, sigma>0 small, then an integer N large. In a sector strictly inside the upper half-plane, place 2N+1 successive points with angular increment comparable to 1/N and alternating radii 1/2 and 1. Join successive points by long straight tooth sides. Their lengths are comparable to one, and their distance from the origin is comparable to 1/N. Divide each long side at arclength spacing

    ell comparable to b0/N.

The triangles from 0 to consecutive subdivision points have equal area along a side, comparable to

    ell/N comparable to ell^2/b0.                         (3)

Rotationally congruent tooth sides have the same estimates. Add short initial/final polygon edges of length O(ell) at the origin and subdivided ramps joining these to the first and last teeth, so the fan polygon's only exterior edges incident to 0 have length O(ell). Triangulating from 0 gives actual affine triangles. The initial/final ramp vertices are guards and receive no recursive children.

Choose attachment points at a fixed multiple of ell apart on the middle thirds of the tooth sides. There are

    B comparable to N^2/b0.                               (4)

Every attachment is separated from other polygon edges by at least c/N, and from the next attachment by c ell. Thus disjoint exterior polygonal half-containers of radius comparable to sigma ell fit at all attachments. Their flat bases lie on the tooth side, with three vertices: the attachment and two endpoints. Insert the two endpoints into the parent fan's boundary subdivision; do not add any other vertices on that child base. The attachment is the root of the child fan. A child fan is a similar copy of the complete sector pattern, with radius

    r comparable to sigma ell                             (5)

relative to its parent. Its root is the base midpoint and its radius is a small fixed fraction of its reserve container's size. Its own B attachment containers fit recursively with an unused outer margin.

The detailed middle-third clearance and count are independently checked in the fresh helper's `radial-tooth-exterior-room.md`. The child must be a sector fan in an exterior half-container, not a full disk fan.

### Geometric assertion G1: conforming filler and star areas

Triangulate the complement of the fan and its child half-containers once in the fixed parent template. In a fixed neighborhood of every middle-third attachment, use triangles of diameter O(ell), except inside its recursive child container. Along the coarse flat base of each child container, do not refine the base edges. One can join their active endpoints to a row of fine interior vertices a distance O(ell_child) above the base. These triangles can be very thin; their shape constants are finite and fixed because all parameters are fixed. This does not impose additional nodes on the parent's fan edge.

For each attachment triple (child center and its two base endpoints), the total area of triangles outside its parent fan can then be required to satisfy

    nonparent star area <= epsilon * parent-fan star area,
    epsilon=10^(-3).                                      (6)

For a base endpoint, the parent area is at least c ell^2/b0 while its nonparent filler area is O(ell^2), so choose b0 sufficiently small. For the center, the new short parent boundary segments have length comparable to sigma ell, hence its parent area is at least c sigma ell^2/b0. The child's entire fan area is O(sigma^2 ell^2), and its base-strip filler area is no greater than that; the ratio is O(sigma b0). This also can be made below epsilon. All constants here are independent of the recursion depth and of N after its fixed large choice.

Each finite polygonal filler piece admits a finite conforming triangulation with its prescribed boundary subdivision. There are only three templates, recursive fan, terminal fan retaining empty protected reserve boxes, and the empty-box filler described in section 7.5, together with one fixed outside completion in D. Taking the minimum angle over these finite triangulations gives a single positive mesh-angle bound valid at every depth. This is how the construction is intended to meet actual shape regularity.

### Geometric assertion G2: background-only graph barriers

Call every fan root and every fan outer-boundary vertex active; all other interior vertices are background. A child root is an already active parent boundary vertex. Fill the fixed inner part of each container outside its fan and child holes with triangles whose background-to-background edges have length O(ell). Its attachment containers lie a distance comparable to the fan radius from both the container's flat base and its outer transition region. Long radial fan edges connect only active vertices. Long edges adjacent to the container's coarse flat base can be arranged to have an active endpoint; they must not create background-to-background jumps through the inner buffer. Coarse transition edges are placed outside the inner buffer.

Consequently a background-only path from a child container to an active vertex outside its parent's container must traverse at least K background steps, with

    K comparable from below to N/b0.

The same is true for reaching the parent fan center through background. Repeating across nested ancestor buffers adds K per generation. One chooses N large enough that K>=10. Paths using an active vertex are stopped there in the background Schur complement and do not count as bypasses.

This graph assertion is the part requiring the most careful geometric check. It is not a claim about global fractal-front codimension. It follows, if the proposed filler is implemented, from the Euclidean width of each nested inner buffer and the bound on background-to-background edge lengths there. Descendant-container coarse edges are smaller than the parent's ell and cannot cross its buffer in one step.

## 3. Exact background elimination

For any fixed finite recursion depth, split the actual normalized matrix into active I and background J. Since the background row sums are at most gamma,

    a_J=-(I+A_JJ)^(-1) A_JI a_I,
    E=A_IJ(I+A_JJ)^(-1)A_JI,

and the active homogeneous rows, except the root source, are

    a_i+p_i a_parent+sum_j S_ij a_sibling,j
             +sum_k T_ik a_child,k = (E a_I)_i.           (7)

Here the siblings are other outer vertices of the same fan, including guards. Additional filler triangles can contribute a parent or sibling edge, but the collar construction makes each such triangle contain at most one other active vertex. A base-strip triangle connecting a child root to a container-base endpoint connects siblings in the parent fan. No long filler edge connects a guard to a different ancestor family. Thus each triangle contributes at most one sibling to a given row, and actual simplex assembly gives

    0<=p_i<=theta,    sum_j S_ij<=theta.              (8)

At every designated attachment-triple vertex, (6) gives

    p_i>=theta/(1+epsilon),
    sum_(background j) A_ij<=gamma epsilon.               (9)

Only attachment centers are roots of their own child fans. Their own-fan row sum is at most gamma epsilon; guards and base endpoints have none. Their extra diagonal area is already included in p_i and the normalization.

The Schur matrix E can have either sign. All estimates below use absolute Neumann-series path bounds and do not assume alternating signs for individual graph walks.

## 4. A cone-weighted Schur-path estimate

Take the proposed constants

    qminus=0.045,  qplus=0.085,  L=0.2.

Assign each child-root value opposite sign to its parent root, with ratio in [qminus,qplus]. Every attachment-triple vertex is required to have the same sign/ratio interval relative to its fan root. Every other outer guard vertex may have either sign and absolute value at most L times its fan root's magnitude. This is a finite compact box in the ratio variables; all root magnitudes are nonzero products of the positive child-center ratios.

For a row owned by a fan with root magnitude A, an endpoint of a background walk inside that fan's container has magnitude at most A. Endpoints in the immediate parent family have magnitude at most (L/qminus)A, except the ancestor center itself. At k generations farther out, the bound is L qminus^(-k) A. By G2 the latter paths require at least K(k-1)+2 steps in the E expansion. The ancestor centers require at least Kk steps and have magnitude at most qminus^(-k) A.

The total absolute mass of all normalized walks of length m is at most gamma^m. Therefore, with delta=gamma^K/qminus,

    |(E a)_i|/A <= [gamma^2/(1-gamma)] C,

where one may take

    C=(L/qminus)/(1-delta)
        +gamma^(-2)delta/(1-delta) <5,    K>=10.           (10)

The local class and the immediate-parent family are combined using max(1,L/qminus)=L/qminus, so they are not counted twice. Farther classes use the geometric series. At an attachment row, the first-step bound (9) improves this to

    |(E a)_i|/A <= epsilon [gamma^2/(1-gamma)] C.          (11)

These bounds are uniform in recursion depth. They are the exact place where actual background graph barriers are needed. A global O(epsilon)||a||infinity estimate would not suffice.

## 5. A finite ratio fixed point avoiding the odd-cycle problem

Fix root coefficient a_0=1. Represent child-root magnitudes by products of center ratios, and express every guard/attachment outer coefficient as its signed ratio to its own fan root. For a fan block, divide (7) by the signed root coefficient and change the expected child sign. The equations become

    r=(I+S)^(-1)[p+U(r)],                                (12)

where U consists of own-child terms and the signed background Schur term. It is a continuous function on the finite ratio box. The same-fan sibling block has infinity norm at most theta, so

    ||(I+S)^(-1)||infinity<=1/(1-theta).

The own-child term has absolute value at most

    gamma epsilon L qplus <0.000003.

Equations (10) and gamma^2/(1-gamma)=1/56 give a total Schur term below 5/56. Hence the output of (12) satisfies

    ||r_new||infinity
       <= [1/16+5/56+0.000003]/(1-1/16)
       <0.163<L.                                       (13)

At an attachment-triple row, use its individual equation, (9), the sibling bound theta L, and (11). This gives

    r_new,i >= (1/16)/(1.001)-(1/16)(0.2)-0.001(5/56)-0.000003
                 >0.049>qminus,
    r_new,i <= 1/16+(1/16)(0.2)+0.001(5/56)+0.000003
                 <0.076<qplus.                          (14)

Thus (12) maps the guard box and all attachment intervals strictly into themselves. Brouwer's finite-dimensional fixed-point theorem gives a solution of every nonroot active row; the background is then defined by its exact eliminated solution. No sign rule for triangle cycles was used.

The root row determines one root-only normalized load g_0. Every active magnitude is at most one, and every background magnitude is at most gamma/(1-gamma), so

    1-gamma<=g_0<=1+gamma.

This constructs an actual solution of the finite condensed mass system with a load supported only at the root and with every depth-n fan center obeying

    |a_v|>=qminus^n.                                    (15)

## 6. A fixed smooth source and physical Hs divergence

Choose a root fan triangle K0 unchanged by every later template replacement. The four polynomial moment functionals associated with its three barycentric functions and its bubble are independent on C-infinity compactly supported in its interior. A fixed smooth source f0 supported there can therefore be chosen with bubble moment zero and condensed nodal load equal to one at the root, zero at its other two vertices. This is finite-dimensional moment duality, not an asserted delta-function input.

The diagonal d_0 of the unnormalized root row is fixed across depths. The constructed solution has unnormalized root load d_0 g_0. By linearity, the actual projection of the one fixed source f0 has the constructed nodal solution divided by d_0 g_0. Since 1-gamma<=g_0<=1+gamma, this is a uniformly bounded nonzero factor. Thus one fixed smooth input, with fixed H^m norm for every m, already has the divergent output lower bound below; allowing depth-dependent inputs is unnecessary.

All depth-n fans outside the source are disjoint. A fixed positive fraction of each fan's area consists of its long tooth-side triangles with diameter comparable to that fan radius. Equations (1)--(2) therefore give

    ||R_h f||H^s(D)^2
       >= c sum_(n=1)^M B^n r^{n(2-2s)} qminus^(2n).       (16)

By (4)--(5), for the fixed b0 and sigma,

    B r^(2-2s) qminus^2
        is comparable to
          sigma^(2-2s) b0^(1-2s) N^(2s) qminus^2.

For every fixed s>0 this exceeds one when N is chosen sufficiently large. Keep that N, b0 and sigma fixed and let recursion depth M tend to infinity. Equation (16) proves failure of uniform physical H^s stability on this one fixed shape-regular family.

The family can be embedded in one fixed square by a fixed outside triangulation. If a convention requires hmax->0, scale the bad patch and its smooth source into a shrinking interior square and refine the remaining region; the Sobolev scaling factor is the same on both sides, so the operator-norm divergence survives. This final scaling step would need the usual finite conforming collar completion, with the fixed template's angle bound.

## Verification scope

The algebra from (7)--(16) uses actual MINI constants. Section 7 supplies the finite-template construction for G1, G2 and the cone-path classification. These checks, including the terminal repair, are now complete as recorded in section 8. This is a full mass-projector result only; it is not a constrained-projector or pressure-error result.

## 7. Explicit finite triangulation construction for G1--G2

This section supplies the previously missing filler algorithm for review. No triangulation-generation software or numerical quality assertion is being substituted for the argument.

### 7.1 Elementary constrained small-diameter triangulation

Let P be a fixed polygonal region with finitely many holes, with a prescribed boundary subdivision whose edges have length at most ell. There is a finite triangulation, adding no boundary vertices, with every triangle diameter at most 3ell. To construct it, take an inward parallel polygonal collar at a positive distance delta sufficiently small that all edge strips and corner sectors are disjoint except at their prescribed interfaces, and every corner sector has diameter less than ell. Such delta exists because the polygon has finitely many edges, positive nonzero angles, and positive separation between nonincident compact edges. For holes use the collar direction into P.

The collar corresponding to one prescribed edge lies within delta of that edge and has diameter less than 2ell. The inner offset polygon may receive arbitrary additional vertices. Intersect its interior with a square grid of spacing at most delta. Each clipped grid-cell component is a finite polygonal region of diameter at most sqrt(2)delta; triangulate these components, including any holes, with their induced boundary vertices. All grid/offset intersection points are on the *inner* collar boundary. Now triangulate each edge-strip and corner-sector collar piece using those inner boundary vertices and the original, unchanged outer vertices. Every such triangle stays within a piece of diameter at most 3ell. The original boundary acquires no new vertices. Every piece and triangulation is finite, so every resulting triangle has a positive angle; the minimum angle may depend on the fixed polygon and chosen delta but is positive.

This elementary construction is used separately on a fixed finite template, never with delta shrinking as recursion depth increases.

### 7.2 Exact inner/outer filler split

Take a container C=[-4,4] x [0,4]. Its base vertices are (-4,0), 0, (4,0). Include also the two fixed strip-top vertices (-4,eta ell), (4,eta ell), together with its remaining corners, in the prescribed boundary pattern. This finite pattern is fixed once N and b0 are fixed and is copied by every similarity. The fan's main tooth sector lies between angles pi/4 and 3pi/4 at radii 1/2 to 1. Its root-to-first/last polygon edges have length ell, and its ramps are subdivided at lengths <=ell. All selected middle-third attachments have y>=c0>0 and |x|<=1. Their reserve child containers have diameter <=sigma ell and therefore lie a fixed distance c1>0 from the sides and top of

    U=[-2,2] x [eta ell,2],

and from its lower line, once ell is small. Here eta is a fixed small positive number. The two short fan edges at 0 are left intact.

Form a left base-strip polygon from the active root 0 to the left base endpoint (-4,0), up a distance eta ell, then along a chain with consecutive distances <=ell to the left short fan endpoint, then back to 0 along the short fan edge. The strip can be chosen star-shaped with respect to 0. Triangulate it by the fan from 0 to consecutive chain vertices. Do the same on the right. Every edge longer than O(ell) in these strip triangulations has the active root 0 as an endpoint. All background-to-background edges in the strips have length O(ell). The prescribed coarse base edges retain exactly their original endpoints and 0; the parent's fan edge is not refined by the child's interior grid.

Choose a surrounding inner polygon with sides x=+-2 and y=2 and with its lower chains equal to those fine base-strip chains. Add its boundary vertices at spacing <=ell. The portion between that inner polygon, the fan outer polygon, and the attached child containers is polygonal, with all its prescribed boundary edges <=C ell. Apply the collar-grid construction above (rescale its ell by C) without adding boundary vertices. In the collar, use only the original edge endpoints as active vertices and insert background interior vertices; if an auxiliary filler triangle has three active vertices, insert its centroid and split it. In particular no filler triangle contains three active vertices. Its background-to-background edges are all <=C2 ell. This includes edges adjacent to the fan and the child holes. Triangulate the remaining outer transition between the inner polygon and the coarse sides/top of C arbitrarily, matching its prescribed boundary; this is again a fixed finite polygonal triangulation.

Every child container's base has its center and two endpoints only. Its other boundary vertices are a similar copy of the fixed corners of C. The parent filler preserves exactly that boundary pattern. Repeat the entire construction inside each child by a similarity. A terminal fan retains the same protected reserve boxes at every designated attachment triple, and fills them with the empty-box template of section 7.5 rather than another fan. Hence all recursive interfaces match exactly and the mesh is conforming. There are only recursive-fan, terminal-fan, empty-box, and outer-completion templates, all finite. Their minimum positive angle is one fixed shape bound, unchanged under similarities and independent of depth.

### 7.3 Star-area calculation

An attachment triple lies on a straight long tooth side whose distance from the root is comparable to 1/N. Before adding its child, the attachment spacing is ell. The child base endpoints are at distance comparable to sigma ell from its center. Thus the parent fan area incident to the center is >=c sigma ell/N, while that at either endpoint is >=c ell/N. All nonparent triangles at the center lie inside its child container, whose entire area is O(sigma^2 ell^2). At an endpoint, every parent-filler triangle has diameter O(ell), so its whole incident filler star lies in a ball of radius C ell and has area O(ell^2); the child-container part adds only O(sigma^2 ell^2). Consequently

    center nonparent/parent <= C sigma b0,
    endpoint nonparent/parent <= C b0.

The implicit constants arise only from the fixed radius interval and angle sector and the bounded-diameter filler construction. Choose sigma fixed and then b0 small enough that both are <=epsilon=10^(-3). This proves the intended G1 mass ratios; all filler may be extremely thin, but its shape bound remains one fixed finite number.

### 7.4 Background graph barriers

A triangle belonging to a fan has only active vertices, so a path consisting of background vertices cannot pass through a fan's interior. In the inner filler outside that fan, every background-to-background edge has length <=C2 ell. In a descendant container every edge is at most the diameter of that container, <=C sigma ell at the first descendant scale; further descendants are smaller. The base-strip long edges have an active endpoint, hence cannot be used by a background-only path. Thus, within the parent's fixed inner polygon, every usable background edge has length <=C3 ell.

Each child container lies a distance >=c1 from the boundary of that inner polygon and from the horizontal base strip. A background-only path from any vertex in that child container to the parent's outer transition must therefore make at least c1/(C3 ell)-O(1) steps. To end at the parent's center 0, its last step must come from a base-strip vertex, whose y-coordinate is O(ell); this also requires crossing a fixed positive vertical distance through the fine filler. A last step along a long fan edge is unavailable because both endpoints of that edge are active. The same lower bound holds.

Choose N so large that this step bound is >=K=10. Along a nested ancestor chain these fine-buffer crossings occupy disjoint regions between successive containers, so the counts add. A path ending on a parent fan's other outer active vertices can stop locally and requires no such crossing; this is exactly the immediate-parent family included without a K factor in section 4. A path ending at a more distant ancestor center or leaving another ancestor container crosses the corresponding additional buffers.

These observations are intended to prove G2 and the exact local-versus-ancestor path classification used in (10). They must be checked against the explicit strip triangulation and its active endpoint convention. In particular, adding a background-to-background long edge through the inner region, or subdividing the child base at the child's fine scale, would invalidate this proof.


### 7.5 Terminal protection, without an additional smallness assumption

The terminal fan does **not** delete the reserve containers at its attachment triples. It retains exactly the same reserve half-containers and the same three-node flat bases as the recursive template. Instead of inserting another toothed fan, fill each reserve container by a fixed empty-box triangulation. One explicit choice is the fan from its active base midpoint to the successive vertices of its other three sides, including the prescribed strip-top corner vertices. The base endpoints are the only other active vertices. Thus each empty-box triangle has at most two active vertices, and every triangle is nondegenerate. Its total area is the reserve-container area O(sigma^2 ell^2).

The attachment center remains interior to the union of the parent fan and this reserve box, so the parent's external filler cannot reach it. Consequently its nonparent incident area is still at most O(sigma^2 ell^2), while its parent fan area is at least c sigma ell/N. Its area ratio remains O(sigma b0), just as at a recursive attachment. The two base endpoints retain their original O(b0) ratio. There is therefore no unintended terminal O(b0/sigma) term and no change to the fixed parameter choice.

The empty reserve adds no fan center, attachment descendants, or new active guard family. The only active vertices of its triangulation are its three existing parent-fan base vertices. All of its background-to-background edges are at most its diameter O(sigma ell), so it cannot bypass a parent background buffer. Its finite minimum angle is added to the fixed template minimum. This completes the terminal version of G1 and G2 used in every attachment interval of the fixed-point box.


## 8. Independent checks and exact quantifiers

The independent geometry check is recorded in [the reconstruction helper's audit](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-reconstruction-pressure-route/toothed-fan-independent-geometry-audit.md). It checked center protection, endpoint star areas, finite collar triangulation and angle bounds, the explicit active-root base strips, the background path indices and additive ancestor crossings. It found no geometric obstruction. That audit preceded the terminal clarification: section 7.5 retains the same protected boxes at terminal attachments and fills them without new active descendants, preserving every area and background-edge bound.

The coordinating root independently read sections 3--6 and checked the direct-active-edge classification and sibling row bound, fixed-point constants, root load and physical fractional lower bound. It then read section 7.5 fully and confirmed that its terminal repair preserves G1, G2 and the direct-active-edge bounds. On 2026-10-18 it explicitly accepted this as a verified research statement. This paragraph records those communicated checks; it does not claim a separate canonical gate or generated review receipt.

The quantifier is: **for every fixed s in (0,1/2), there exists a finite shape-regularity bound C_s and a conforming planar MINI mesh family with that bound for which the full no-slip L2 projector has unbounded H^s operator norm.** The bound C_s can be very large and depends on s through the fixed choice of N. The proof does not say that each already prescribed shape bound fails at every positive exponent. The earlier small-positive range depending on the prescribed bound remains compatible.

The input in section 6 can be one fixed smooth scalar function on the unchanged root patch, with fixed H^m norm for every m. The [separate exact source-realizability argument](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-smooth-counterexample-fresh/solenoidal-condensed-load-realizability.md) extends full-R root-load excitation to smooth compactly supported divergence-free vector inputs on a sufficiently rich unchanged root fan. That argument does not transfer the conclusion to the constrained projector P_Zh: its pressure correction has an additional nonzero bubble-load source, which must be retained. Nothing here refutes or proves the original smooth MINI pressure estimate.
