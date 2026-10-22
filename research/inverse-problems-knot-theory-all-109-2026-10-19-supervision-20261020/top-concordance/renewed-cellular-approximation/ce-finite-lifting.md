# Finite lifting from the actual CE contractions

This NEW proof supplies the exact homotopy input for the punctured-torus endpoint construction. It does not use cellular approximation, manifold smoothing, TOP engulfing, or any proper-submersion bundle theorem.

## Inputs and exact conclusion

Let f:X→Y be a proper onto map of metrizable locally compact spaces. In our application X is an actual smooth5-manifold and Y is the standard T^5−{p}, or an open subset thereof. Assume the completed-end construction supplies a contraction of each compact fiber Q inside every prescribed open neighborhood O of Q in the ENR X. This is the contraction of Q itself, not yet a contraction of a smaller whole neighborhood. The explicit ENR extension below supplies that additional conclusion; neither shrinking nor cellular approximation is used.

Then finite disks and homotopies admit the relative approximate lifts proved below. Consequently every restriction over an open subset of Y induces isomorphisms on all homotopy groups, including path components. For the actual smooth manifolds here those restrictions are ordinary homotopy equivalences. In the punctured-torus case the preimages of small punctured balls give cofinal connected simply connected end neighborhoods. Thus the source has exactly one end and is1-LC there. No global proper homotopy inverse or parametrized lifting is asserted or needed.

## ENR upgrade from a compact-fiber contraction

Fix a compact fiber Q and an open neighborhood O in X. Let H:Q×I→O be the supplied contraction, H(q,0)=q and H(q,1)=x0 for one x0∈O. The open set O is itself an ENR. Consider the CLOSED subset

    A=(O×{0}) union (Q×I)  of  O×I.

Define F:A→O by F(x,0)=x and F(q,t)=H(q,t). These definitions agree on Q×{0}, and the closed-pasting lemma gives continuity. The ENR property supplies an extension of F to an open neighborhood N of A in O×I. Explicitly, embed O into some Euclidean space with an open neighborhood retraction r. Extend each Euclidean coordinate of F from the closed set A by the ordinary metric Tietze extension, restrict to the open neighborhood where the extended vector lies in the domain of r, and apply r. This gives the asserted extension Hbar:N→O, preserving F EXACTLY on A. In particular it starts at the actual identity, not merely a nearby map.

Because Q×I is compact and N is open, the tube lemma, proved here by a finite subcover in the I coordinate, gives an open neighborhood W0 of Q in O with W0×I⊂N. The map Hbar on this product is a homotopy starting with inclusion W0→O. It is not yet required to be constant at its other end. Choose a coordinate ball B about x0 with closure inside O; use a coordinate half-ball if x0 lies on the manifold boundary. Shrink W0 further to the open neighborhood

    W=W0 intersection Hbar(·,1)^{-1}(B)

of Q. The terminal map Hbar|W×{1} has image in B. Concatenate Hbar|W×I with the coordinate contraction of B to x0. The result is an actual nullhomotopy of inclusion W→O. Every intermediate map stays in O, its start is exactly identity on W, and its endpoint is one point. Compactness of Q×I is the only uniform collar control used. This upgrades precisely the supplied compact-fiber contractions and asserts no nested-ball neighborhoods or ambient shrinking.

## Neighborhood contraction for an entire preimage

For y∈Y and an open U containing y, put O=f^{-1}(U). By the cell-like hypothesis choose an open W containing f^{-1}(y), contained in O, whose inclusion into O is nullhomotopic. There is an open V containing y with f^{-1}(V)⊂W. To verify this last assertion, a proper map between these locally compact metrizable spaces is closed: a convergent sequence of image points, chosen preimages in a closed set, has a convergent subsequence because the convergent sequence and its limit form a compact target set. Apply closedness to X−W. Thus the inclusion

    f^{-1}(V) → f^{-1}(U)

is nullhomotopic. The same assertion holds for any open restriction of f. This is the only fiber property used in the lifting construction.

## The finite relative approximate-lifting construction

Let Z be a finite polyhedron of dimension d, A a subpolyhedron, v:Z→Y a continuous map, and u:A→X a prescribed lift, so f u=v|A. Let O be any open cover of Y. We construct h:Z→X with h|A=u such that f h(z) and v(z) belong to one common member of O for every z.

Here are the cover choices and the actual cell extension. Take an open cover U_0 refining O. Repeatedly use the preceding neighborhood-contraction property and a metric star refinement to construct covers U_1,...,U_d so that, for each V in U_j, its star in U_j is contained in a member U of U_{j−1}, and the inclusion

    f^{-1}(star(V,U_j)) → f^{-1}(U)

is nullhomotopic. Indeed, first cover Y by neighborhoods V_y whose full preimages contract into f^{-1}(U_y), with U_y in U_{j−1}; then star-refine that cover. The resulting star lies in one such V_y. In particular every cover refines its predecessor. All covers can be countable in these second-countable metric spaces. Only finitely many of their contractions will be used below.

Subdivide Z, retaining A as a subcomplex, until v(σ) lies in one member of U_d for every simplex σ. On a vertex outside A choose any point over its v-image; on A retain u exactly. For each vertex assign a carrier in U_d containing its v-image. Suppose h and carriers have been assigned through dimension a−1, with each (a−1)-simplex τ carried in f^{-1}(U_τ), where U_τ∈U_{d−a+1} also contains v(τ).

For an a-simplex σ choose V∈U_{d−a+1} containing v(σ); this is possible by the finest-cover subdivision and refinement. Every face carrier U_τ intersects V, because both contain v(τ). Hence h(∂σ) lies in f^{-1}(star(V,U_{d−a+1})). Its inclusion into f^{-1}(U_σ), for the assigned U_σ∈U_{d−a}, is nullhomotopic by the cover property. Restrict that nullhomotopy to h(∂σ) and cone its terminal constant: this is an explicit extension of h across σ into f^{-1}(U_σ). If σ lies in A, retain u instead; it already lies in f^{-1}(U_σ) because f u=v there. Choose the same carrier U_σ, so the next stage is unchanged. This induction agrees on every shared face and leaves the ENTIRE prescribed subpolyhedron A fixed.

For every σ, v(σ) and f h(σ) lie in U_σ, which refines U_0 and hence O. This proves the assertion. For d=0 only the vertex selection is needed. A disconnected boundary of an edge causes no difficulty: the nullhomotopy joins its two images through the same constant.

The argument uses only finite extensions after the covers and the finite subdivision are fixed. One may define the countable covers by the collection of countable-basis pairs satisfying the existential contraction condition; no contraction is selected simultaneously at all target points. Choose contraction witnesses only for the finitely many carriers used in the final finite complex. This introduces no uncountable selection or dependent-choice recursion.

## Isomorphisms on homotopy groups and hereditary homotopy equivalence

Fix x0∈X with f(x0)=y0. For a based sphere map v:S^i→Y, take A to be its base vertex and prescribe h(x0) there. Choose O so fine near the compact image that O-close maps to Y are homotopic, fixed where they agree. In our standard ENR target this has a direct proof: embed the relevant compact neighborhood in Euclidean space with an open-neighborhood retraction r; the straight segment between sufficiently close maps stays in that neighborhood, and r of the segment is the required homotopy. Thus f h is based homotopic to v, proving surjectivity.

For injectivity, if u:S^i→X has f u nullhomotopic by v:D^{i+1}→Y, apply the relative construction with A=boundary D^{i+1} and the EXACT prescribed u. The resulting h extends u, so u is nullhomotopic. Path components and the i=1 basepoint conventions follow by the same relative interval/disk construction; based representatives are retained. This proves the isomorphisms on all homotopy groups. It also handles homotopies between two representatives by using their cylinder and its prescribed ends.

The same proof applies after restricting f over ANY open subset of Y, since properness and the neighborhood contraction property restrict. In the actual application both spaces of a restriction are smooth manifolds with their given atlases: X is inherited from the source and Y is an open subset of the standard punctured torus. Their countable smooth triangulations give CW type. Whitehead's homotopy criterion therefore turns the proved weak equivalence into an ordinary homotopy equivalence. No smooth atlas on the original TOP target B is used here.

## Actual end control for the punctured-torus fibers

Now let Y=T^5−{p}. Choose nested standard open punctured balls U_j about p with radii tending to zero. Each U_j is homeomorphic to S^4×R, so is connected and simply connected. The just-proved hereditary equivalence makes E_j=f^{-1}(U_j) connected and simply connected as well.

Their complements are compact: Y−U_j is compact and f is proper. For every compact K⊂X, f(K) is a compact subset of the punctured torus and misses U_j for j sufficiently large. Thus E_j misses K. The E_j are consequently cofinal connected neighborhoods of the unique end, each with trivial fundamental group. This proves one-endedness and1-LC at infinity directly. It does not invoke invariance of ends under a proper homotopy equivalence.

The same argument identifies the preimage of any fixed punctured target ball, under its restricted proper CE map, as ordinarily homotopy equivalent to S^4×R. Applying the nested-puncture and ordinary-boundary-side exhaustion inside that ball gives its two1-LC ends. These are precisely the homotopy and end inputs to the separately owned two-ended recognition operation.

For later use: when the punctured ball is represented as an open annulus S^4×(0,1), exhaust it by compact S^4×[1/j,1−1/j]. Its two remaining components are simply connected. Their preimages are simply connected by the same hereditary equivalence, and their union is cofinal at infinity by properness. Thus both ends are1-LC, with no assumption of continuous end parametrizations.

## Boundaries of this supplier

This proves the finite compact lifting and ordinary hereditary homotopy-equivalence/end-control statements just displayed. It does NOT prove that f is approximable by homeomorphisms, that its fibers have nested ball neighborhoods, that the family of its domains is a bundle, or that any nonsmooth manifold has been smoothed. The only needed later geometric step is the actual two-ended recognition/relative half-collar engulfing construction, owned separately.

## Countable-choice scope of the ordinary homotopy equivalence

The compact lifting argument has finitely many simplex extensions and needs no infinite dependent choices. For the ordinary homotopy-equivalence conclusion one may use countable smooth triangulations of the actual5-dimensional source and standard5-dimensional target. The usual weak-equivalence-to-homotopy-equivalence construction extends over their cells and the homotopy prisms, of dimension at most6. At a fixed dimension all countably many boundaries have already been fixed, and the corresponding nonempty sets of extension witnesses are an AC-omega family. Choose them simultaneously, then pass to the next dimension. There are only finitely many dimensions. This yields the usual Whitehead construction with AC-omega, without invoking dependent choice for an unbounded sequence of skeleta. This foundational accounting refers to the actual finite-dimensional smooth spaces here, not to an unrestricted infinite-dimensional ANR theorem.
