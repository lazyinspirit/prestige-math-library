# Locally convex pair: operator readiness resolution

2026-09-11 Australia/Sydney. The thirteen scaffold items are ready for the
engine’s independent Step 3 author review. This is an operator construction
review, not published-proof approval. No new pair, published edit or source
retry was needed. Previous escalations are preserved in
`phase-2-next-20-local-convex-prior-ready-transition.json`.

## What closed the hold

The original hold combined unavailable source-byte evidence with unfinished
used-prerequisite examination. Both remaining published source records now
have genuine verified receipts; the Hanche-Olsen uses have complete local
alternatives, preserving all six retrieval attempts and every retained result.
See `phase-2-next-20-local-convex-source-resolution.md`.

The operator read all thirteen statements and full strategies and checked their
actual clauses against the topology, vector-space, scalar, compactness,
infimum and relative-HB suppliers. The separate published-prerequisite audit
provides additional clause-specific evidence for finite-product compactness,
extreme values, Heine–Borel, the product universal property, closure and HB.
This is not a blanket certification of the 288-node historical declared graph:
its unused arbitrary-product surjectivity, countable-union, sequential metric,
Lp and other clauses are not spent by this proof route. Correct implicit uses
of adequate published results are not treated as unmet mathematical prerequisites.

The scalar fields use their published usual metrics and genuine metric
topologies. The local calculus item proves joint scalar addition and
multiplication directly by modulus estimates. The scalar-field vector-space
and finite-radius selection steps are made explicit. The general-neighbourhood
convention is fixed by `def-neighbourhood-top`, so the older metric wording
cannot change any hypothesis here. These clarifications require no repair of
unrelated published clauses before the new proofs can be authored.

Finite hulls are of finitely many compact **convex** sets; simplex coordinates
are nonnegative and sum to one. Grouping finite combinations supplies equality
with the compact image, and zero weights require only finite choice. Closed
balanced convex refinement is obtained through a balanced hull and convex hull,
not an infinite intersection of open rotations. The gauge is finite by
absorption and the infimum property, and its continuity uses both signs.
Open separation uses exactly one relative-HB extension; compact/closed strict
separation uses a finite thickening and the attained maximum to obtain a
uniform gap. No arbitrary family of separating functionals is selected.

## Per-item construction closure

### def-topological-vector-space-for-local-convexity

Use the published usual real metric and complex Euclidean metric, then def-metric-topology and thm-metric-open-set-algebra to specify genuine scalar topologies. Fix the scalar field and both domain topologies explicitly. Import only the definitions of vector space, product topology, continuity, neighborhood and Hausdorffness. Do not define TVS by separate continuity, a norm, metrizability or Hausdorffness. No proof assertion or choice assumption. Supply lem-finite-choice explicitly for the metric-open-set-algebra proof of finite intersections: the nonempty radius sets A_k={r>0:B(y,r)⊂U_k} form a finite indexed list; choose one radius from each, then take their finite minimum. This is a theorem of ZF, not an AC assumption.

### lem-topological-vector-space-translation-scaling-and-absorption

Insert constant and identity maps into the jointly continuous structure maps; the inverse translations/dilations use -a and 1/λ. Continuity of s↦sx at 0 gives |s|<δ⇒sx∈U; use s=1/t for t>1/δ. From addition at (0,0) take open U1,U2 with U1+U2⊂U and set W=U1∩U2∩(-U1)∩(-U2). If |f|≤M on a zero-neighborhood, use ε/(M+1) times that neighborhood to prove continuity at 0; translation gives it everywhere. Product universal property is used only in choice-free clauses 1–2, never arbitrary-factor surjectivity. For the scalar-field assertion, |(s+t)-(a+b)|≤|s-a|+|t-b|; if |t-b|<1 then |st-ab|≤(|b|+1)|s-a|+|a||t-b|. Taking each coordinate error below min(1, ε/(2(|a|+|b|+1))) proves joint multiplication continuity, and ε/2 proves addition continuity. The complex modulus laws apply verbatim, and their restriction to the embedded reals gives the real estimates. Product neighborhoods and metric open balls translate these bounds directly to topological continuity; no sequential criterion or choice principle is used.

### def-locally-convex-topological-vector-space

Use claim 1 of lem-restriction-of-scalars explicitly to regard the scalar field K as a K-vector space before defining K-linear maps X→K. Define these notions in a TVS, extending rather than citing the norm-only definitions as general contracts. The finite-combination description of co(S) contains S, is convex by concatenating the weighted lists, and is contained in every convex superset by finite induction. Show the continuous dual is a vector space by pointwise operations and continuity of scalar addition/multiplication. A convex zero-neighborhood C has convex open interior containing 0: for two interior points and 0<t<1, use the open set (1-t)int(C)+t int(C)⊂C; thus this definition agrees with an open convex base. No HB is needed.

### lem-locally-convex-closures-and-finite-compact-convex-hulls

For x,y in closure C, pull any neighborhood of (1-t)x+ty back through the continuous two-variable affine map; a product neighborhood contains a pair from C×C, so every such neighborhood meets C. Endpoints are immediate. For interior C use (1-t)int(C)+t int(C) for 0<t<1, which is open by translations/dilations; if nonempty, every x∈C is in closure int(C) since (1-s)x+s y∈int(C) for fixed interior y and s>0 and tends to x. For balance, a nonzero dilation commutes with closure as a homeomorphism; λ=0 is handled by 0∈closure C for nonempty balanced C. The simplex Δ={t∈R^n:t_j≥0,Σt_j=1} is closed and bounded, hence compact by the product-topology Heine–Borel corollary. The continuous map Δ×∏K_j→X, (t,x)↦Σt_j x_j, has compact image by the finite-product and general topological image results. Group any finite convex combination by its K_j labels; divide each positive total weight and use convexity within K_j. At zero weights fill the unused coordinate using only finite choice. This proves image equals hull, not merely one inclusion. Hausdorff compact-closed gives the last assertion. This never asserts that the hull of an arbitrary compact set is compact. No infinite product compactness or AC.

### lem-balanced-convex-zero-neighborhood-refinement

Choose symmetric open O with O+O⊂U using the calculus lemma. Choose a convex open zero-neighborhood C⊂O. Joint scalar continuity at (0,0) gives δ>0 and an open zero-neighborhood W with {a:|a|<δ}W⊂C. Put W0=(δ/2)W and B=∪_{|a|≤1}aW0. This is balanced, contains the open W0, is contained in C, and is open: the nonzero dilates are open and cover B (0 already lies in W0). Put V=co(B)⊂C. It is balanced by distributing λ through finite convex sums, and is open because every point represented as a finite convex sum has a positive coefficient, whose open summand can vary while the others are held fixed. Thus V⊂O is open balanced convex. If x∈closure V, the open neighborhood x-O meets V, hence x∈V+O⊂O+O⊂U. The earlier closure lemma makes closure V convex and balanced. Do not intersect infinitely many open rotated sets and declare the intersection open.

### def-minkowski-gauge-of-an-open-convex-zero-neighborhood

Absorption from the earlier calculus lemma makes the defining positive-real set nonempty for every x; 0 is a lower bound. The infimum property gives existence and uniqueness. At x=0 all positive t are admissible, giving p_U(0)=0. This new general definition is needed because published def-minkowski-functional and def-relative-open-convex-gauge assume a normed space.

### lem-continuous-gauge-of-an-open-convex-zero-neighborhood

Admissible t form an upper ray: enlarge t using convexity and 0∈U. Thus every a>p_U(x) is admissible. For a>p_U(x), b>p_U(y), write (x+y)/(a+b) as a convex combination of x/a and y/b; let positive errors decrease to 0 to obtain subadditivity. Substitute t/r for positive homogeneity and treat r=0 directly. If p_U(x)<1 choose admissible t<1, so x∈U. If x∈U, continuity of s↦sx near 1 gives (1+η)x∈U for η>0 and p_U(x)≤1/(1+η)<1. For ε>0, h∈ε(U∩(-U)) implies both p_U(h),p_U(-h)<ε; the two subadditivity inequalities give |p_U(x+h)-p_U(x)|<ε. Thus continuity holds without falsely claiming a one-sided gauge dominates an absolute value. For balanced U, every unit scalar a satisfies aU=U (apply a and its inverse); substitution gives full absolute homogeneity. No HB/AC and no norm-distance estimate.

### thm-locally-convex-open-convex-separation

First separate an open convex D from z∉D. Fix d0∈D, U=D-d0 and v=z-d0≠0. Since v∉U, p_U(v)≥1. Define h(tv)=t on the real line Rv. For t≥0, t≤t p_U(v); for t<0, t≤0≤p_U(tv); hence h≤p_U. Apply the published relative dominated-extension theorem once to extend to real-linear H≤p_U. On U∩(-U), both H(x)≤p_U(x)<1 and -H(x)=H(-x)≤p_U(-x)<1; scaling proves continuity. Then H(d)-H(d0)<1=H(z)-H(d0), with H(v)=1. Apply this case to D=A-B and z=0 to get H(a)<H(b). Take α=sup H(A), finite since B is nonempty; obtain α≤H(b). No a can attain the supremum because a+εv∈A for small ε>0 and H(v)>0. If B is open, choose α=sup H(A); if H(b)=α, b-εv∈B contradicts its lower-bound property. In the complex case restrict scalars to R, then f(x)=H(x)-iH(ix); check additivity, f(ix)=if(x), real homogeneity, continuity and Re f=H explicitly. No absolute domination by the nonbalanced gauge; no appeal to a Banach norm or unrestricted AC.

### thm-locally-convex-continuous-dual-separates-points

For v=x-y≠0 use Hausdorffness to find a zero-neighborhood excluding v; refine to an open convex zero-neighborhood V excluding v. Separate V from {v} by the preceding theorem. Since 0∈V, 0=Re f(0)<α≤Re f(v), so Re f(x)-Re f(y)>0. Every functional vanishes at 0, and every nonzero vector has such a nonzero value, proving the kernel assertion. One HB application is inherited; no simultaneous selection of a functional for every vector is made.

### thm-locally-convex-strict-separation

For each k the openness of X\C gives a convex open zero-neighborhood N with k+N⊂X\C. Use the family of ALL admissible pairs (k,N); the relative open sets K∩(k+N/2) cover K. Compactness chooses finitely many such relative opens; only finite choice recovers their witness pairs. Let W=∩_j(N_j/2), an open convex zero-neighborhood. If k∈k_j+N_j/2 then k+W⊂k_j+N_j⊂X\C, using convexity. Thus K+W is open convex and disjoint from C. Apply open separation: u(k+w)<β≤u(c). By the general topological extreme-value theorem, d=max u(K) exists and d<β (also obtain a positive uniform shift u(w0)>0 from nonzero u and absorption of W if desired). Put α=(d+β)/2 and ε=(β-d)/2. Only HB is a non-ZF premise; the compact cover is not an arbitrary point-indexed choice. Do not use norm distance or treat pointwise strict inequalities alone as the uniform gap.

### ex-product-scalar-topology-is-locally-convex

Check vector axioms coordinatewise; the zero function is supplied explicitly, so nonemptiness uses no product choice. The projections of addition and scalar multiplication are the usual jointly continuous scalar operations, and choice-free clauses 1–2 of product universality prove joint continuity. Finite intersections of coordinate disks are open balanced convex neighborhoods and refine every basic zero-neighborhood. Distinct functions differ at one coordinate, where disjoint scalar disks pull back to disjoint neighborhoods. For empty I the space consists of one function and all claims are vacuous or immediate.

### ex-locally-convex-separation-by-a-coordinate

The projection is continuous and scalar-linear. Its real part is continuous and real-linear, so the half-spaces are closed convex; constant functions with values a and b witness nonemptiness. Set α=(a+b)/2 and ε=(b-a)/2. For x_i≠y_i, in the complex case multiply the coordinate by conjugate(x_i-y_i)/|x_i-y_i| so the real difference is |x_i-y_i|>0; in the real case use its sign. This is an explicit calculation, with neither HB nor compactness required.

### cex-convex-maximum-set-need-not-be-a-face

Continuity follows directly from |s²-t²|=|s-t||s+t|≤2|s-t| on the interval. Convexity follows from (1-r)s²+r t²-((1-r)s+rt)²=r(1-r)(s-t)²≥0 for r∈[0,1]. q≤1 with equality precisely at ±1; their midpoint 0 has q=0, proving nonconvexity and failure of being a face. If a strict convex combination lies at either endpoint of [-1,1], both endpoints of that segment equal it; hence {-1,1} has the extremal endpoint property. Define face here for this counterexample; do not import later Krein–Milman/Bauer definitions or use this B item as an A-page supplier.

## Checks and scope

The coverage checker checks all 29 harvested results and destinations. The
source checker distinguishes two actual fetch receipts from one documented
backing drop. Manifest policy checks all thirteen current items. The run-wide
readiness check still holds other batches; this review clears only batch2.
Step 3 must fully author and independently review every assigned argument.
