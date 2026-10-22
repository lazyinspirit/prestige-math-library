# Finite-dimensional compact standard products have relative small isotopies

NEW authoring, awaiting independent first review. The accepted L4/L5
statements are retained, not revalidated or automatically extended. This note
constructs the additional finite dimensions directly from the actual
Edwards–Kirby periodization construction and finite standard-product handles.
It supplies a local-contractibility input, not CE approximation or an atlas
on an arbitrary TOP manifold.

## Statement

Fix a finite integer D≥6. For each s,r≥0 with 6≤d=s+r≤D let
M=B^s×T^r, where B is the standard closed ball and
T^r=(R/8Z)^r. Give M any compatible metric. For every ε>0 there is δ>0
such that a self-homeomorphism q with sup_x dist(q(x),x)<δ has the following
properties.

1. If q fixes ∂M pointwise, there is an isotopy q_t from q to identity,
   fixed pointwise on ∂M, with displacement less than ε at every time.
   If q is identity on a neighborhood of ∂M, the isotopy is identity on one
   common smaller open boundary collar. For s=0 there is no boundary clause.
2. For s,r≥1, if the boundary germ of q is
   `id_(∂B^s) × φ × id_(T^(r−1))`, the isotopy can retain this product form
   throughout its prescribed circle-germ normalization. The circle germ
   follows the explicit small path from φ to identity given below; after
   normalization there is one common fixed collar. This does not mean that
   a nonidentity germ remains constant during an isotopy ending at identity.

The constant may depend on (s,r), the metric, and ε. There is no uniform
infinite-dimensional claim. For finitely many requested products and error
bounds one can take the minimum of their finitely many input constants.
The inherited ambient foundational scope is Countable Choice; the additional
construction here has only finitely many local operations for each product.
Only one isotopy for each q is needed by the consumer; this statement does
not add parametric CE approximation or a CE concordance.

## Actual primary reading and conventions

Edwards–Kirby, *Deformations of spaces of imbeddings*, Annals of Mathematics
93 (1971): printed 84–87 (§8, complete) were read in cached OCR and checked
in all four page images. Printed 65,67,69–70 were also read for the precise
embedding convention, the local-block formulation and the bounded-lift /
Alexander completion. The primary is cached at
`../renewed-local-homeomorphism-deformation/sources/edwards-kirby-1971.pdf`;
the inspected page images are `ek-pdf-22.png` through `ek-pdf-25.png`.
The proof below uses the explicit alternative construction, not Brown's
factorization theorem as an unexplained supplier, the punctured-torus
immersion argument, or an automatic all-dimensional main-theorem invocation.

For block formulas write B^a=[−1,1]^a, as in the primary. The fixed standard
homeomorphism between cubes and round balls transfers the statement to
round-ball notation. “Proper embedding” here means boundary-respecting:
the inverse image of the target boundary is the domain boundary of the same
type. It does not mean that every inverse image of a compact set is compact.

## 1. An actual local block operation in every fixed finite dimension

Let p+v=d be finite. A block is B^p×4B^v in B^p×R^v. Suppose f is an
embedding sufficiently close to inclusion, identity on a whole collar of
∂B^p×4B^v. We construct an ambient G of B^p×R^v, identity near its side
boundary and outside B^p×3B^v, agreeing with f on B^p×B^v. The construction
can instead agree on a slightly larger inner block, so its correction fixes
a neighborhood of the compact handle. Every operation depends continuously
on f at inclusion and gives identity when f is inclusion.

### 1a. The shell is available in arbitrary finite normal dimension

For v≥1 construct a bounded smooth embedding
α:(−6,6)×T^(v−1)→R^v. Begin with the interval when v=1. If an embedding
in R^a has bounded first coordinate, translate that coordinate by C so it
is strictly positive, and rotate about its zero-radius axis in R^(a+1).
Explicitly replace coordinates (u_1,u_2,…,u_a) by
`((C+u_1) cos θ, u_2,…,u_a, (C+u_1) sin θ)`.
Positive radius recovers θ and u_1; the remaining coordinates recover the
old point. Hence this really appends a circle and is an embedding, not an
immersion with double sheets. All images remain bounded and only v−1
rotations are used.

Flatten a small coordinate patch at one parameter point. After affine
normalization its derivative is identity. In a sufficiently small parameter
cube the map differs from identity by a C1-small function. Multiplying this
difference by a bump supported in twice the cube gives a global perturbation
of identity with Lipschitz constant less than one. The resulting map is a
diffeomorphism: injectivity follows from that bound, and properness plus
local invertibility gives surjectivity. Composing its inverse with α makes
the smaller patch exactly flat.

A radial change of parameter supported in the central coordinate patch,
followed by target rescaling, makes this flat patch 2B^v. A radial target
embedding R^v→int 4B^v fixed on 2B^v compresses the rest. Consequently α
can be chosen with image in int 4B^v and α|2B^v=id. All choices are fixed
Euclidean constructions for this finite v, independent of f. Multiplication
by B^p preserves the entire fixed attaching collar.

### 1b. Periodize using actual one-coordinate gluing

Put D_0=[−4,5]×T^(v−1). For f close enough to inclusion, its restriction
to the compact shell defines
`u=(id×α)^−1 f (id×α)` on B^p×D_0, with values in
B^p×(−6,6)×T^(v−1). This follows from the positive margin between the
compact sub-shell and the boundary of the open shell image. It is the
identity on the fixed p-collar.

On the real shell coordinate set
`a_0=−11/3, b_0=−10/3, a_1=13/3, b_1=14/3`.
Let w be increasing, equal to z+8 below a_0, equal to z above b_1, and
affine from [a_0,b_1] onto [a_1,b_1]. Let λ translate by −8, extend w and λ
by identity on all other factors, and put W=λ w^−1 λ^−1. Thus W translates
by −8 below a_0 and is identity above b_0.

Write S=Wu(B^p×D_0) and T=λu(B^p×D_0). On S define R by
`R=(λu) w (λu)^−1` on T, and identity on the rest. The domain convention
uses T as its lower sub-cylinder in S. Here are the gluing checks. Near the
bottom u-level −4 one has W=λ, so S and T share their bottom and an inward
collar. The top of T lies near −3, strictly below the top of S near 5.
The central region between the respective boundaries is in S by local
degree one (or separation by its two cylinder frontiers); near the common
bottom it is literally the same collar. Hence T⊂S. The map w takes its
domain [−4,5] into itself, compressing it into [4,5], and is identity in a
collar of 5. Thus the conjugate maps T into its upper sub-cylinder and is
identity near its upper frontier. Its formula agrees with the identity
extension there; it does not glue across the common lower frontier to an
absent part of S. It is injective across that upper gluing and defines an
embedding of S. These strict level margins persist when u is sufficiently
close to inclusion. The side p-collar is fixed throughout.

Set `u_2=R W u` on B^p×[−4,4]×T^(v−1). Near the lower end t=−4,
the formula is `u_2(t)=λu(t+8)`; near the upper end it is `u_2(t+8)=u(t+8)`.
Thus opposite end **collars**, not just the two boundary values, agree under
λ. Quotienting gives a local homeomorphism
F:B^p×T^v→B^p×T^v. It is a local homeomorphism in the interior, including
the glued seam, and is identity on the side collar. It is therefore a proper
local homeomorphism on the connected interior and has a finite covering
degree. Smallness gives an explicit homotopy to identity: linearly interpolate
the B^p coordinates and interpolate the unique short normal-circle coordinate
differences. This is boundary-fixed and has degree one. Local signs are
constant on the connected orientable source, so degree one forces a single
sheet. Thus F is onto and one-to-one and is a homeomorphism. For p=0 the
same degree-one argument applies on the closed torus.

On a smaller central normal patch, for example (3/2)B^v, neither W nor R
changes u: W is identity above b_0 and the support of R lies below the
central strip. Its image under f also lies in the flat 2B^v patch for f
close enough. Consequently F agrees with f on this smaller patch under the
fixed central coordinates. At u=id the
two cut-and-paste operations cancel exactly, so F=id. Conjugation, inversion
on protected compact subsets, and the matching-collar gluing show continuity
at inclusion. This uses the same explicit formulas in every finite v; no
inequality involving v has been borrowed from dimension five.

### 1c. Return to a supported ambient correction

Lift F to the unique close-to-identity homeomorphism \widetilde F of
B^p×R^v. On sets of normal diameter less than four this is the local inverse
of the standard circle covering; uniqueness makes the local definitions
agree. The lift commutes with period translations and has uniformly bounded
displacement, measured on one compact fundamental region. It fixes the
attaching p-collar. For F tending to identity the displacement tends uniformly
to zero on the whole cover.

Extend this lift by identity across the p-boundary to R^d. Choose a fixed
radial expansion γ:int 3B^d→R^d, identity on 2B^d and never decreasing
radius. Conjugate the extended lift by γ inside 3B^d and set identity
outside. Bounded displacement implies continuity at the compactification
frontier for map and inverse: radial compression sends points tending to
infinity with bounded difference to the same boundary point. Its restriction
is the required G on B^p×R^v. Indeed outside B^p the expansion remains
outside B^p, where the extended lift is identity. Its support is contained
in B^p×3B^v and it retains the attaching collar. For f close enough, the
inner block and its image lie in the fixed 2B^d patch, so G=f there.

The support is inside f(B^p×4B^v). To check this, keep a margin between
3B^v and the outer normal frontier 4B^v. A small straight homotopy from f
to inclusion cannot hit an interior target point of the smaller block on
that outer frontier; its local degree remains one. The attaching side is
already fixed on a collar and causes no missing boundary points. Therefore
the supported ambient correction is legitimate on the actual current
embedding image, not just on an abstract target block.

Apply Alexander's formula on R^d:
`A_t(x)=tG(x/t)` for t>0, `A_0(x)=x`, with inverse `tG^−1(x/t)`.
Its support shrinks into t(B^p×3B^v), it preserves B^p×R^v, and it fixes
the attaching collar. Uniform convergence at zero holds for both maps and
inverses. The path A_t^−1 f starts at f and ends at identity on the inner
block, retaining the outside frontier. It is postcomposition by actual
ambient homeomorphisms supported in the current image and so glues to the
unchanged global homeomorphism. Scaling the inner margin slightly yields
identity on a neighborhood of the desired compact block.

If v=0, the boundary-fixed near-inclusion embedding B^p→B^p is onto:
its interior image is open and closed in the connected interior. Use the
same Alexander formula directly. This treats the top-index handle rather
than omitting it.

All fixed-coordinate operations are continuous at inclusion on compact
supports and time intervals. Radial compression is uniformly continuous;
the lifted displacement tends to zero uniformly by periodicity. Thus for
any η>0 the whole block isotopy has displacement less than η when f is
sufficiently close to inclusion. This is the actual small-isotopy creation
step in dimension d.

## 2. Pointwise boundary fixation gives a common fixed collar

For s≥1 choose the explicit radial product collar c:A×[0,1]→M,
A=∂M, inward coordinate v. It is a proper outer shell, leaving an inner
core. Put a_t=t/2. The homeomorphism γ_t from the truncated manifold
M−c(A×[0,a_t)) onto M is identity off this shell and takes the collar
coordinate v to (v−a_t)/(1−a_t). Define Q_t to be identity on the inserted
collar [0,a_t] and γ_t^−1 q γ_t on the rest.

The formulas agree on the common frontier because q fixes A. The analogous
formulas with q^−1 give the inverse. Joint continuity, including t=0,
follows from compactness of A and q|A=id as the inserted shell shrinks.
Hence this is an isotopy from q to a map fixed on the width-one-half collar.
The maps γ_t^−1 form an equicontinuous family on compact I×M. Thus
`dist(Q_t(x),x)=dist(γ_t^−1 q(y),γ_t^−1(y))`, y=γ_t(x), is uniformly small
when q is small; no differentiability or modulus of continuity of q is used.

If q was identity on collar width b, this stage preserves that whole smaller
germ. For v≥a_t the rescaled coordinate is at most v; if v<b its image is
still in the original fixed collar. Inserted points are fixed directly.
The later stages retain a fixed closed collar of width one-third, so the
whole concatenation retains one common smaller open collar.

## 3. Finite whole-product coverage, including the top handle

The standard compact product has a finite explicit handle decomposition.
For a circle use its usual zero- and one-handles and take their products.
Relative to a boundary collar, the ball factor has one remaining handle of
index s. Product corners round to handle products: the attaching pieces
`∂B^a×B^c ∪ B^a×∂B^c` form the boundary of the product core of dimension
a+c, with the normal factors multiplied. Thus the 2^r handles have indices
s+j when s≥1, and j when s=0. They are actual standard product charts,
not a triangulation assertion about an arbitrary TOP manifold. A finite
standard cubical subdivision gives the same decomposition by derived blocks.

Order by index. Around the next compact handle choose its product thickening
B^p×4B^v in B^p×R^v. Its attaching side lies in already fixed neighborhoods.
Shrink this thickening and reparameterize its normal coordinate so that a
whole attaching collar is fixed. If the current map is sufficiently close
to identity, it takes this chart into its prescribed larger thickening and
is boundary-respecting there; it cannot cross the fixed side hypersurface.
The local block operation makes a neighborhood of this compact handle fixed.
It preserves all earlier fixed compact handles: its actual support avoids
them, and any apparent contact at the attaching side is in the identity
collar. The target-margin argument in 1c makes its extension an ambient
homeomorphism of M, not an unverified alteration of an embedding image.

For s≥1 retain the closed width-one-third boundary collar from step 2 and
keep every block support outside a smaller open collar of it. For s=0 begin
with the zero-handle and no boundary clause. At the final handle v=0 the
direct Alexander case applies. At the end the finitely many fixed handle
neighborhoods and the retained collar cover all M, so the endpoint is
identity everywhere. This proves whole-product coverage, not merely
identity on a skeleton.

Choose the single input δ backwards through this finite list of charts and
their compact time intervals. Each local operation fixes inclusion and is
continuous there; require its output to lie in the admissible input
neighborhood for the next and require its whole path to remain in the
chosen ε-neighborhood. The collar-insertion estimate has the same property.
Finite intersection of these neighborhoods supplies δ>0. There are no
dimension-uniform constants or infinite handle schedules in this argument.
It proves clause 1 in every fixed finite d≥6.

## 4. The product-circle germ is normalized explicitly

Smallness makes φ orientation-preserving and selects its unique small lift
\widetilde φ(z)=z+a(z), with 8-periodic a. Set
`\widetilde φ_t(z)=(1−t)\widetilde φ(z)+tz`.
This is strictly increasing, 8-equivariant and onto; it gives a continuous
isotopy of circle homeomorphisms from φ to identity. Its displacement and
that of its inverse are bounded by sup|a|. Write
`P_t=id_(B^s)×φ_t×id_(T^(r−1))` and first use
`q_t=P_t P_0^−1 q`.
This begins at q and has precisely the P_t germ on the original product
collar; its endpoint is identity there. Normalize sufficiently small first
so the added displacement fits the prescribed budget, then apply clause 1
to that endpoint. On the compact product all compatible metrics are uniformly
equivalent, so the quantitative smallness transfers from product coordinates.
Concatenation gives clause 2 with the claimed common smaller identity collar.

## Finite scope, choice, and consumer interface

For supplied finite stable rank k, take D=5+k and use this lemma only on the
finitely many compact products required by the CE construction. Dimensions
four and five continue to use their accepted separate interfaces. In a
wrapped handle of dimension m, the inputs are the whole products
B^(k_0−1)×T^(n+1) of dimension m and B^(k_0−1)×T^n of dimension m−1,
where m=k_0+n. No dimension-three or dimension-five control substitution is
made for a higher-dimensional product.

The shells, finite cubical handles, collar formulas and circle interpolation
are explicit for each finite integer tuple. No arbitrary TOP triangulation,
smoothing, punctured-torus immersion, general CE theorem, or previously
supplied isotopy is assumed. Retaining Countable Choice matches the inherited
scope; this construction introduces no stronger selection principle. The
result is one small isotopy for each sufficiently small self-homeomorphism,
with the exact boundary/collar/product-germ clauses above. Arbitrary interior
closed-set relative deformation is not asserted by this lemma.
