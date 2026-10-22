# NEW finite smooth engulfing engine, full codimension-three range

Author scope: actual finite geometry only. The CE/E3 owner supplies the actual open source, target opens, relative homotopy witnesses and global end/exhaustion control. This argument does not turn a weak equivalence into engulfing of an arbitrary full-dimensional compact set.

## Exact theorem and localization

Let O be an open DIFF m-manifold, m≥5, with its compatible PL structure. Let U⊂O be open and suppose (O,U) is p-connected, including the component condition, where 0≤p≤m−3. Let X⊂O be an actual finite PL polyhedron of dimension at most p. Optionally let Y⊂U be a closed locally finite PL shield of dimension s≤m−3. Then there is an actual compactly supported DIFF isotopy h_t of O, h_0=id, fixed on Y, such that X⊂h_1(U). A closed locally finite X with X−U compact has the same conclusion. All active moves lie in a relatively compact open R containing the finite homotopy witnesses and the finite simplex neighborhoods actually used.

An arbitrary closed protected compact C is handled by choosing O to be the actual open DIFF manifold V−C and supplying the connectivity of (O,U) there. No polyhedral structure, codimension bound or complement connectivity is invented for C. A support compact in O fixes an actual neighborhood of C in V. If an additional ledger L must be avoided, use O−L only when the needed relative homotopy witnesses exist there. A preassigned R is permissible only if those same relative constructions are supplied inside (R,R∩U). Otherwise R is chosen after the finite witness package, not asserted in advance.

The optional PL-shield dimension s≤m−3 is used internally because the induction temporarily protects an old p-skeleton. The E3 application may use only shields of dimension≤2; it does not need the stronger internal shield range for its saturated compact C.

## Primary proof extent and smooth versus PL roles

New full primary reading: J.F.P. Hudson, Piecewise Linear Topology, Chapter VII printed160–173/PDF166–179, including the proof of7.4, compact-difference7.5 and boundary7.6; and Chapter IV printed90–103/PDF96–109, including the FULL proofs4.1–4.8 and the open-face statement4.7. Printed104/PDF110 was also read but its later lemma is not used. Primary PDF: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/hudson.pdf, cached in the sibling renewed-marked-torus/sources. The newly rendered IV pages are in sources here. No accepted provider body was read or assigned new coverage.

Hudson gives the finite PL dimension induction. Below the auxiliary homotopies are allowed to be PL; the desired ambient isotopies are instead built from actual smooth vector fields. No arbitrary PL homeomorphism is assumed smoothable. No Whitney disk, handle cancellation, smooth s-cobordism or boundary-four-dimensional Whitney move is used, including when m=5,p=2.

## A. Finite relative prism with the covered contact put in the initial base

The induction will allow Y to meet X inside U. Choose a finite subpolyhedron D⊂X∩U whose relative interior contains X∩Y. This is possible by a fine subdivision, since X∩Y is compact and contained in the open X∩U. If the intersection is empty take D empty. Make D a full subcomplex by barycentric subdivision.

The p-connectivity gives a homotopy F:X×I→O with F(x,1)=x, F(X×0)⊂U, stationary on D. Construct it over finitely many cells of X relative D. At a vertex choose a path to U; over a d-cell extend the already given side/top cylinder and use the vanishing relative d-class to move its remaining bottom disk into U, adjusting its boundary homotopy in U. This uses the actual relative nullhomotopies for d≤p. There are finitely many such witnesses. Compactness allows all subsequent approximations to keep the bottom image in U.

Let λ:X→[0,1] be PL, zero exactly on D: on a full triangulation give D vertices value zero and other vertices value one. Define the actual finite polyhedron

Z={(x,t):0≤t≤λ(x)}, with base B=X×{0}, and upper graph T={(x,λ(x))}.

The quotient of X×I collapsing each stationary {d}×I, d∈D, is homeomorphic to Z by (x,s)↦(x,sλ(x)). The homotopy descends continuously: for x→D, stationarity and compactness of I make F(x,s) tend uniformly to x. It gives Φ:Z→O, with Φ|T the original embedding of X and Φ(B)⊂U. This removes the degenerate stationary prism from the moving part; it is not counted as a newly retained low-dimensional auxiliary.

Here is an explicit collapse Z↘B. Order the vertices with all D vertices first. Over a d-simplex σ let v_i^-=(v_i,0) and v_i^+=(v_i,λ(v_i)); for a D vertex these agree. Use the usual staircase simplices [v_0^-,…,v_i^-,v_i^+,…,v_d^+], discarding repetitions. If the first l vertices are precisely σ∩D, the nondegenerate (d+1)-simplices have i=l,…,d. Remove them in that order, pairing the i-th with [v_0^-,…,v_{i−1}^-,v_i^+,…,v_d^+]. The first paired face is the upper graph over σ; later paired faces are the successive now-free internal diagonals. This leaves exactly the bottom and prisms of proper faces. Process base simplices in decreasing dimension; their proper-face prisms are still present until their own turn. A simplex entirely in D has no prism. Thus these are actual finite elementary collapse pairs, not a simple-homotopy equivalence promoted to a collapse.

## B. Relative PL general position and the dimension count actually used

Approximate Φ by a finite PL map relative T, keeping Φ(B)⊂U, and make it simplexwise nondegenerate. The finite construction uses source subdivisions and local target PL charts: approximate by affine interpolation, then move only free vertices to avoid the finite proper affine spans of previously fixed vertices. The fixed T map is already an embedding. The same finite vertex avoidance puts moving OPEN faces in mutual general position and in general position with Y. Common prescribed faces are omitted from foreign-intersection counts. Refining the target's compatible smooth triangulation and the source makes the map simplicial; each image simplex of that refinement is an actual smoothly embedded simplex in an original smooth simplex. These are auxiliary map/subdivision operations, not claimed smooth ambient isotopies.

More explicitly, for moving open faces σ,τ the foreign image intersection has dimension≤dimσ+dimτ−m; for a moving face σ and the shield, it is≤dimσ+s−m. Contacts with fixed T are treated by its PL strata with the same bound away from prescribed common faces. Since T∩Y is contained in the initial base D, there is no uncontrolled fixed-end/Y contact in a new free face. This is the relative form of the finite affine-span argument, rather than the false assertion that closed simplices with a common face satisfy the foreign bound. Every approximation may be taken in a fixed relatively compact neighborhood of its compact input image.

We need compatible finite subdivisions of KNOWN collapse pairs. Use relative derived common subdivisions, coning the finite intersection cells from their barycenters. An elementary cone/free-face pair remains a finite collapse onto its subdivided old base: remove the cone/free-face pairs in reverse face order. Iterating along the already displayed finite collapse gives a common refined collapse adapted to the PL map. In particular this subdivision step starts from actual elementary collapse pairs and never uses a homotopy-equivalence-to-collapse assertion. It lets all later active target pairs be handled as actual smooth-simplex pairs. Common-face subdivisions and every foreign contact are included simultaneously before the finite induction.

## C. The retained auxiliary contains only the added cells

We use the following finite combinatorial fact. If a polyhedron L collapses to L₀ and Z₀⊂L is a subpolyhedron of dimension d, then there is a retained polyhedron T₀ consisting of added cells such that

Z₀⊂L₀∪T₀,   L↘L₀∪T₀↘L₀,   dim T₀≤d+1.

To verify it, triangulate the finite data and interchange independent adjacent collapse pairs until collapse dimensions decrease. Such an interchange is valid because a lower-dimensional free face cannot contain the interior of the larger later pair. In reverse, expansion dimensions increase. Stop at the first reverse stage containing Z₀. Its last free face must belong to Z₀; otherwise that reverse stage would not be first. It therefore has dimension≤d. Every cell retained before that stage has dimension≤d+1. Take T₀ to be the closure of those cells OUTSIDE L₀. This is the stated bound. Do not call L₀∪T₀ the low-dimensional auxiliary; L₀ may have dimension p.

## D. Actual smooth capture of one finite collapse

Suppose K=K₀∪aA is a compatible PL elementary pair, with free face A, and K₀ is in an open target V. A closed PL shield meets the added simplex only in K₀. After the compatible finite subdivision just described, realize capture one smoothly embedded simplex at a time. A compact smooth simplex has an actual smooth tubular coordinate chart: extend its characteristic embedding slightly past its corners, choose a normal frame over the contractible simplex by a metric connection along radial paths, and use the exponential map with sufficiently small radius. Compactness makes the extension injective and the radius positive. Thus this construction does not require a PL ambient star map to be smooth.

In that chart let λ_a,λ_1,…,λ_r be the affine barycentric coordinates on aA, where A has r vertices. Put P=λ_1⋯λ_r and take the smooth tangential field

λ_i′=−ρP (1≤i≤r),   λ_a′=rρP.

Here ρ is a smooth nonnegative cutoff supported in a compact neighborhood of the simplex and zero on an OPEN neighborhood of K₀ and the shield. It is positive on aA outside a sufficiently small neighborhood of the old base a∂A. Such a cutoff exists since those protected intersections are all in that base. Extend it with a normal cutoff in the actual tubular chart and by zero outside. This is a globally smooth compactly supported field. It fixes an actual neighborhood of the prescribed shield and the old base.

On the simplex the sum of barycentric coordinates is preserved and all λ_i are nonincreasing. The faces of the old base have one λ_i=0 and are fixed. Choose c>0 so {min λ_i<c} is contained in V and contains all cut-off-zero portions of the simplex; this is possible because the base is compact in V and the shield contact lies there. On the compact set min λ_i≥c the positive cutoff has a lower bound and P≥c^r. Therefore a single finite positive time sends every point into min λ_i<c. That set is forward invariant, because all λ_i decrease. The inverse of this actual finite flow consequently expands V to contain aA. The flow and its inverse are genuine diffeomorphisms for every finite time by compact support, and the time-reversed flow is the required DIFF isotopy. Repeat for the finite collapse list. This works in arbitrary simplex dimension needed here; no Whitney argument is hidden in the passage from PL to DIFF.

## E. Dimension induction producing the actual isotopy

Fix m, the p-connectivity range and an admissible shield bound s≤m−3. Prove the result by induction on the target-polyhedron dimension j≤p, retaining the same allowed shield dimension m−3. At j=0 a finite set is joined to U by the supplied paths; the same prism construction has zero-dimensional foreign contact set empty in m≥5, and finite smooth edge capture gives the result. Equivalently the argument below starts with an empty retained auxiliary.

For j>0 construct the finite pinched prism Z and map Φ above, now with dim X=j. Write its reverse collapse as R₀=B⊂R₁⊂⋯⊂R_N=Z. Maintain a smooth map h with Γ_i=Φ(R_i^(j))⊂h(U), fixing Y. Initially Φ(B)⊂U. At a step R_i=R_{i−1}∪aA put V=h(U) and Γ=Φ(R_{i−1}^(j)), a protected polyhedron of dimension≤j already contained in V.

Inside the added simplex aA, let Z_bad be the closure of the preimages of FOREIGN intersections with Γ∪Y, omitting its prescribed old attaching faces. The relative general-position count gives

dim Z_bad≤max((j+1)+j−m,(j+1)+s−m)≤j−2.

There are no extra fixed-end contacts outside the initial base, by the D-pinch. Apply C to aA↘a∂A and Z_bad. It gives the TOTAL added auxiliary T₀ with dim T₀≤j−1 and aA↘a∂A∪T₀↘a∂A. Its image may meet Γ or Y only in already covered portions, which the induction permits.

The pair (O,V) is p-connected because V=h(U) and h is a diffeomorphism. Apply the j−1 induction to Φ(T₀), with shield Γ∪Y (dimension≤max(j,s)≤m−3), obtaining a DIFF isotopy α fixed on Γ∪Y and with Φ(T₀)⊂α(V). Every additional relative witness requested here is one of the finitely many chosen witnesses in the full finite algorithm. Now Γ∪Φ(T₀)⊂α(V). Outside this base, Φ embeds each added simplex and has no foreign contact with Γ or Y, because all such contact was retained in T₀. The remaining image is therefore the ACTUAL finite relative collapse realized in D. Its smooth capture β fixes Γ∪Φ(T₀)∪Y and yields the next j-skeleton inside β α(V). Set h_new=β α h and concatenate the finite smooth isotopies. The old Γ remains fixed and covered.

At the last finite step, X=Φ(T) lies in Φ(Z^(j))⊂h(U). All protected sets used internally are genuine PL polyhedra in the fixed source structure; α and β move the open target, not the fixed Φ-polyhedra. In particular the fact that a diffeomorphism need not preserve a selected PL triangulation causes no inference that its image is a compatible PL complex. Finite composition keeps compact support and gives an actual smooth inverse.

## F. Compact difference, supports, tracks and choice

For closed locally finite X with X−U compact, choose a finite subpolyhedron X₀⊂X whose relative interior contains X−U. The closed inactive shield Y′=Y∪closure(X−X₀) is contained in U and has dimension≤max(s,p)≤m−3. Apply the finite theorem to X₀ with Y′. Every point of X outside X₀ remains fixed and was already in U, hence remains in h(U); all of X is engulfed. Only a finite neighborhood of X₀ and the compact witness images is active. Local finiteness makes each shield portion meeting these compact neighborhoods finite.

The dimension induction and every prism/collapse list are finite. Let R contain the finite union of all witness images, small PL-approximation neighborhoods, and compact supports of the finitely many smooth fields. This union is compact, so R may be relatively compact in the ACTUAL open O. The entire ambient isotopy and inverse are identity outside R. Track control is exactly this support statement and the chosen local approximation bounds: no arbitrary small-control conclusion follows from ordinary connectivity alone. A prescribed control cover is respected if the input nullhomotopies and each allowed simplex carrier lie in its chosen buffered members; the finite construction then stays in those same carriers. If such controlled witnesses are not supplied, no controlled-track claim is exported.

All geometric choices for one input are finite: finite relative homotopies, affine vertex avoidance, finite subdivisions, chart cutoffs and finite flow times. Fixed finite dimensions m≤5+k introduce only finitely many dimension inductions. Countably many independent finite inputs may be selected together by ACω; an adaptive infinite engulfing/exhaustion requires the separate global E3 schedule and end-control proof. This engine does not silently select such witnesses dependently.

The conclusion is finite p-polyhedron engulfing at p≤m−3 only. It does not imply arbitrary compact regions are engulfable, contractible open manifolds are Euclidean, or an unproved complement pair is connected. Those would require the independent dual placement/end arguments owned by the E3 assembly agent.
