# Step 5a adjudication — batch 1

Run: `frontier-41-ha-dt-29`. Scope: batch 1 only. Review in generated dependency order. Engine owns stamps and gates; no judge cycle or independent certification performed.

## Evidence and progress

Read canonical instructions, README, schema, dispatch/order/scope, reader report/findings and refuter artifact. Initial risk-report: 34 items, 33 HIGH/CRITICAL; zero mechanical errors. Historical hashes identify reader changes; reader report and immutable manifest retain original statements, but hashes alone do not reconstruct old proof bytes. No claim of a complete historical proof audit.

Sources opened online: Milnor h-Cobordism PDF (Definition 1.3, printed p. 2); Hatcher AT PDF. Wall URL returns an internal fetch error; reader temporary files are absent in this session. Relevant source constructions will be checked against accessible primary material.

### def-smooth-cobordism-triad-for-morse-theory

amended_repair: Definition and all nine supplier interfaces checked. Milnor Definition 1.3 (printed p. 2) permits clopen disconnected faces. Removing the assertion that the two faces are the two connected components is necessary and correct. Empty W, closed W, empty faces, n=0, reversal and supplied collars checked; collar existence uses AC_omega. Outside consumers route to Step 5b.

### lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum

amended_repair: Statement concerns two distinct manifold components, not two boundary components of one connected manifold. Split the one-handle, straighten each thin cap with a normal cutoff satisfying |gamma rho_prime|<1, and identify the middle disk. The boundary cylinder is D1 times S(n-2); n=1 deletes two points, n=0 is vacuous. Exact attaching, rounding and collar interfaces checked; AC_omega supplies collars. Reader correction is sound. Removed the two stray greater-than signs from F5 against the actual countable-choice definition.

### lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold

amended_repair: Compact A is essential for compactly supported translation. Product trivialization is a hypothesis, not a consequence of tubular existence. Projection of B into the positive-dimensional normal factor is null under AC_omega because dim B<codim A; choose arbitrarily small nonzero w outside it. Fixed cutoff yields compact support and smooth parameter-dependent complete flow, h(A)=A times {w}. Empty A/B use identity. Supplier statements and all four numbered steps checked.

### lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type

amended_repair: Checked the thin-cap graph and normal derivative 1-gamma rho_prime>0. Reader inward cutoff correctly makes the extension identity at the inner edge. Amended step 1.1 to use an open coordinate neighbourhood O around the closed attaching disk, so edge cutoff support fits in the open collar V; removed the pointless boundary diffeomorphism. Step 2.1 uses O times [0,epsilon). Conclusion is unchanged. n=1 cap absorption and n=0 impossible boundary checked; AC_omega is spent on collar existence.

### lem-flow-reparametrization-realizes-a-level-isotopy

reviewed_no_defect: Current proof and exact regular-band/flow/pushforward suppliers checked. Normalization has df(Z)=-1; conjugation F(q,s)=(h_alpha(s)(q),s) preserves levels and gives identity field near both endpoints. Multiplication by original lambda recovers X there. Compact-band residence <=(b-a)/min lambda and outside completeness prove completeness. Backward transport is h1 composed with phi. Reader report explicitly records no proof repair; touched provenance changes proof to ai-altered and is metadata normalization.

### lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy

amended_repair: Checked explicit radial H_t: attaching region is fixed; final image is attaching region union core; q is interpreted through that union, not a naive cocore collapse incompatible with identity on N. q i is the boundary-fixed radial cell map, i q=H1, giving both relative homotopies. k=0 contracts disk to point; k=n core is the whole disk, correcting the old sphere-union-origin assertion. Formed rounded attachment is supplied data; no new choice is used by homotopies.

### lem-increasing-reparametrization-of-finitely-many-critical-levels

amended_repair: Positive density q=1 near all nodes has interval integrals below each positive target gap when collars and eta are small. Add normalized interior bumps with positive deficit coefficients, integrate to phi; derivative is positive and one near every node, endpoint translations are identities. All choices finite and empty list uses identity. Read every declared supplier; published gluing theorem is not used in this independent scalar construction. Reader replacement preserves derivative-one local Morse models and is sound.

### lem-separating-critical-values-far-from-the-boundary

amended_repair: Finite compact chart-core derivative bounds replace an unstated global metric. Interior bumps are one near each critical point and vanish on closed boundary neighbourhood C. On the compact complement a finite nonzero component cover provides m>0; sufficiently small coefficients preserve noncriticality, and finite hyperplane avoidance separates values. Hessians and points are unchanged; no-critical-point case uses f. Current bump/Morse interfaces and seminorm estimate checked.

### lem-standard-handle-admits-an-adapted-morse-function

amended_repair: Recomputed both partial derivatives of F=-a(1-B)+b(1-A)+AB(b-a). Fa=-(1-B)-AB-A_prime[b(1-B)+aB] and Fb=(1-A)+AB+B_prime[a(1-A)+bA] have the required signs; B<1 gives Fa<0, B=1 gives Fb=1. Axis formulas exclude further critical points. Local Q and Hessian index k checked; collar values -1/+1 hold on the stated subdisks only. Restriction to a small rounded domain preserves full-rank tangent spaces and the origin. k=0,n and n=0 checked. Finite integrated bump construction is choice-free.

### def-handle-decomposition-relative-to-the-incoming-boundary

amended_repair: All four supplier interfaces checked. Attaching regions lie in outgoing boundary away from retained M0, so the relative face survives every stage. Empty list is a collar or empty W, first attachment into empty stage must have empty attaching region hence k=0, and k=n outgoing region is empty. This clarifies the previously unstated boundary restriction; it does not assert canonicality or existence.

### def-morse-function-adapted-to-a-cobordism

Untouched: complete risk review recorded; no routed decision owed. Ambient completeness and boundary exit convention checked.

### lem-boundary-product-function-on-a-collared-cobordism

amended_repair: Explicit cutoffs beta/gamma have disjoint support and the displayed phi sum equals one. Exact boundary partition supplier assumes AC_omega. Pasted products are smooth by support containment; all active interior summands are in (0,1), proving exact endpoint fibres. Outside U0/U1 h=1/2, face derivatives are +/-dt/3. Empty boundary permits an empty regular neighbourhood, not a claim that constant h is critical-point-free. Reader coordinate, cutoff, endpoint and contract corrections are sound.

### lem-a-handle-decomposition-gives-a-relative-cw-complex

amended_repair: Checked four steps and every direct interface, including current existence, elementary-band gluing, interior-slab and correspondence arguments as prerequisite context. Hatcher Chapter 0 Propositions 0.18-0.19, Corollaries 0.20-0.21 (printed pp. 16-17), including complete HEP proofs, establish the mapping-cylinder/disk-cylinder comparison. Finite-source cellular approximation meets its exact choice-free clause. Empty-base absolute construction provides finite models, then lower-dimensional M0 supplies A; there is no compact-CW circular supplier. Arbitrary handle order is not asserted skeletal. Pair equivalence fixes actual M0 only when its finite CW structure is supplied. Empty list, 0/n cells and zero-dimensional case checked. The corrected qualification and complete attachment comparison repair the old unsupported unconditional actual-base assertion; outside consumer impacts require Step 5b.

### lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged

amended_repair: Checked the compact two-cluster band and no Q-to-P connection hypothesis against Milnor Preliminary Rearrangement Theorem 4.1 and Extension 4.2, complete printed pp. 37-39 argument. Strict descent and compactness give singleton critical limits; Morse block flow gives closed critical-trajectory sets, and no connection excludes broken cross-cluster limits. Lower-exit transport is smooth off them and constant near them by local exit estimates. Orbit-invariant beta gives dg(X)=G_s df(X)<0. Target heights may coincide or reverse but must lie inside regular endpoints. Translation near points preserves exact gradient-like charts and Hessians, boundary is unchanged. Empty unstable sphere/minimum and finite-cluster cases checked. Reader reconstruction closes the arbitrary spatial cutoff defect.

### lem-gluing-handle-morse-models-along-collars

amended_repair: Recomputed theta_prime=1-r>0 and theta(1)=1-epsilon, preserving every old value below 1-2epsilon. Elementary quadratic band ab<=2 has incoming b<=1, outgoing a<=1 and side radii (sqrt(Q^2+8) minus/plus Q)/2; normalized ascending field preserves ab and raises Q at unit speed. Side-height gluing matches K times interval; exact one-critical-point theorem proof identifies its given incoming framing. Signed seam heights join smoothly and collar absorption fixes deep N. Milnor Theorems 3.12-3.13 (complete printed pp. 30-32) checked; Wall online inaccessible. k=0 disk, k=n cap and n=0 point give intended endpoint fibres. Rebuild corrects old seam and saddle-product errors.

### lem-interior-slab-handle-attachment

amended_repair: Interior band is compact and avoids both boundary faces; lower sublevel contains M0 collar and misses M1. Current one-point theorem Proof 4.1 provides the pushed-in lower copy and homotopy-of-pairs comparison, not a pointwise-fixed original boundary seam. Read one-point, simultaneous attachment and flow transport proofs: chart modifications and regular transports have compact interior support and preserve incoming face. Equal-level disjoint handle thickenings commute with compatible roundings; empty/min/max cases checked. Reader removal of impossible entire-sublevel fixation is justified.

### lem-product-cobordisms-have-critical-point-free-presentations

amended_repair: Boundaryless compact M is necessary for exactly two boundary faces; boundaryful factor adds a side face. Projection dt is nonzero, endpoint fibres are exact, X=-partial_t has outward/inward signs, and M times R supplies complete translation carrier. Rescaled collar gives empty list relative to M0 including M empty. Reader restriction preserves valid cylinder conclusion; outside uses require actual-use check at Step 5b.

### lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods

amended_repair: Corrected local spheres lie below upper q and above lower p. Current local unstable/stable, regular flow and attaching-region interfaces checked. Explicit sqrt(delta+|z|^2) product coordinates trivialize normal bundles; tubular existence alone is insufficient. Compact regular transport gives embedded compact spheres, and linear Morse trajectories plus uniqueness prove both directions of trajectory/intersection equivalence. Index 0/n gives empty S^-1. Reader direction and trivialization repairs are sound.

### thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms

amended_repair: Seven steps and 15 direct interfaces checked. Finite nested chart/bump cover of compact interior K gives parameter derivatives spanning each cotangent fibre at every zero; boundary annulus stays regular and compact support preserves endpoint margins. Exact parametric transversality assumes AC_omega, Morse differential iff supply applies on W interior, and finite bad null set complement provides a small good parameter. Value separation preserves Hessians and boundary. Convex patched metric is Euclidean near critical points, product near faces; X=(2u,-2v) and face signs +/-partial_t/3 checked. Signed negative collars plus cutoff give compactly supported complete ambient field. Empty K, no boundary, n=0 handled. Reader citation/choice and boundary contract corrections are sound.

### lem-gradient-like-perturbation-separates-adjacent-critical-levels

amended_repair: All nine steps checked. Sphere dimensions sum <=n-2; same-direction families are disjoint by unique limits. Simultaneous avoidance of finite null projections in each disjoint compact tube preserves all pair conditions. Inverse isotopy h makes A disjoint from h(B); field change below v moves B to h(B), leaving A unchanged. Fixed regular-band conjugation is arbitrarily small and collar carrier cutoff makes adapted completeness valid. Larger trajectory sets are compact/disjoint only on a two-cluster band. Amended F3 to retain compact A and F4 to say backward lower-to-upper transport, matching exact suppliers; argument already meets both hypotheses.

### thm-morse-functions-and-handle-decompositions-correspond

amended_repair: Both directions independently checked: finite excellent critical bands give ordered handles with flow-transported framings; regular bands and end collars absorb fixing M0. Reverse induction uses corrected whole-collar elementary-band gluing, chooses new height above all old values, preserves their points and values and exact endpoint fibres. Empty outgoing face admits only zero-handle addition; zero points gives product including empty triad. Supplied interior comparison respects lower pair up to homotopy rather than pointwise fixation. AC_omega supplier assumptions propagated. Reader rebuild is sound.

### cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory

amended_repair: Computed f=(2+cos theta)/4 and X=a sin theta partial_theta: df(X)=-a sin^2(theta)/4 and metric dtheta^2/(4a) realizes negative gradient. In u=sin(theta/2)/sqrt2 and v=sin((theta-pi)/2)/sqrt2, Xu=2u and Xv=-2v with the stated positive endpoint scalars. Full arc trajectories have logarithmically infinite endpoint times. Sandwiching two finite times proves strict g(p)>g(q) even though endpoint limits alone yield only weak inequalities. Lower index 0<upper 1 violates perturbation hypothesis. Exact witness repairs old round-gradient local-model defect.

### ex-relative-handle-decomposition-of-a-cylinder

amended_repair: Example meets compact boundaryless factor and AC_omega supplier hypotheses. dt is nonzero, exact endpoint fibres give adaptedness, explicit collar diffeomorphism fixes M0 and rescaling gives empty ordered list. Empty factor covered; boundaryful factor excluded for extra side face. Removed duplicated AC_omega sentence in F3 while accepting the mathematical reader corrections.

### lem-handles-of-equal-index-can-be-attached-on-one-level

amended_repair: Checked graph extension for compact full-dimensional attaching source, local smooth inverses, finite partition patching of velocities, compact augmented-flow extension and collar base diffeotopy. At chi<1 spatial flow is stationary, so the displayed spatial inverse remains valid. Disjoint quotient attachments commute on the common lower stage; original Morse lower-sublevel comparison is only homotopy of pairs. Changed F8 to exact excellent correspondence hypothesis and constructed the boundary scalar cutoff explicitly instead of applying a boundaryless bump theorem on [0,1). k=0 empty source, k=n boundary components and empty family covered. No later isotopy-extension supplier is used.

### thm-handle-duality-from-negating-a-morse-function

amended_repair: All seven steps checked. d(1-f)(-X)=df(X)<0; Hessian sign negation complements index, swapped (v,u) coordinates give exact downward model for -X, ambient completeness survives negation and boundary roles reverse. X backward u/forward v convergence is correctly reversed in step 2.2. Applying correspondence to the same selected function/field identifies dual bodies and exchanged factors, not canonical bodies across different presentations. Attaching/belt and 0/n endpoints, reverse value order checked.

### thm-morse-rearrangement-by-index

amended_repair: Five steps checked against Milnor Theorems 4.1/4.4/4.8, printed pp. 37-44, and corrected internal suppliers. Finitely many excellent points yield finite inversion sequence. For each adjacent inverted pair choose perturbation below a regular v inside allowed neighbourhood; compact regular pairing bound preserves df_initial(X)<0 under arbitrarily small changes. Two-cluster reassignment transposes only those entries and preserves exact local translations. Each swap reduces inversions by one, hence finite termination, boundary and ambient completeness preserved. Strong final descent for both original f and g is actually proved, not inferred from descent for current f.

### thm-self-indexing-morse-function-existence

amended_repair: Checked finite equal-index cluster merging using no-connection perturbation and local regular-endpoint interchange. Chose equal targets explicitly in (c_i,c_i+1), preserving ordering against other indices; corrected F3 to exact endpoint-band targets and zero-level count to nonnegative. Smallness retains original f descent and each merge reduces levels. Positive derivative-one interpolation maps occurring indices to (k+1)/(n+2), translates near points so exact Morse charts/field survive without rescaling. Missing indices extend to all 0..n by canonical targets. Simultaneous slab supply applies to merged nonexcellent levels. Empty critical set and n=0 checked.

### ex-dual-handle-presentations-of-a-genus-g-surface

amended_repair: Explicit g pairs of orientable bands split then reconnect the single boundary circle, adding g punctured-torus pieces; cap gives standard Sigma_g. Counts 1,2g,1 are realized by converse correspondence rather than an unverified embedded height. Realizing closed-surface Morse function admits Euclidean-near-critical patched metric and complete negative gradient (existence proof 5.1-6.1); then duality complements indices and reverses the chosen presentation. g=0 two glued disks checked. All actual suppliers and AC_omega restrictions met.

### ex-reordering-independent-one-handles

amended_repair: Two fixed disjoint attaching pairs give the same simultaneous quotient in either order; diffeomorphism fixes base and identifies the same labelled handle, not an unsupported swap of distinct attaching images. Surface attaching/belt spheres have dim 0+0<1; this permits avoidance, and attaching regions are already disjoint here. Relative cell reduction yields disk plus two one-cells, homotopy equivalent to wedge of two circles. No genus-two conclusion is retained. AC_omega and rounding supplier caveats checked.

### prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles

amended_repair: Six steps checked. Existence and self-indexing suppliers produce first 0/1 stages; higher-index connected attaching regions cannot join components, so component graph is connected. Finite rooted spanning tree can be ordered before other disjoint one-handles. With k>0 root at collar and absorb each bare disk plus incident tree edge in outgoing collar, fixing M0; retain exactly k-1 connecting edges. With k=0 nonempty W supplies m0>=1; root at one disk and absorb exactly m0-1, keeping one. Every remaining attaching map is transported through the stage diffeomorphisms. Reader corrections of empty W, tree count and distinct manifold-component supplier use are sound.

### prop-dual-elimination-of-top-index-handles

amended_repair: Four steps and all actual prerequisites independently checked. Reverse nonempty outgoing face to incoming, use rooted-tree elimination, fix that selected no-zero-handle presentation, realize it and choose its adapted complete field by existence Proof 5.1-6.1, then complement indices/reverse order. The k-1 retained connecting one-handles become final (n-1)-handles. Replaced literal same-index count preservation by a handle bijection with complementary indices. Historical refuter statement that every presentation has the same handle subsets is false (disk 0 versus 0,1,2 presentations); current carrier already confines duality to a chosen presentation. This dispatch does not claim authorship of that pre-existing removal. Historical finding remains confirmed fatal, not a current counterexample.

### ex-empty-incoming-boundary-requires-zero-handles

amended_repair: Nonempty W forces a nonempty list; first embedding into empty boundary forces empty attaching region and index zero. Connected W can retain exactly one zero-handle by the proved normalization. S^n is two disks glued by the standard identity, with one minimum/maximum realized by correspondence. n>=1 and AC_omega restore the reader missing hypotheses; n=0 sphere has two components. Amended F3 and step 3.1 to retain published index-n caveat: for n=1 the entire attaching S0 is two boundary points, not one connected boundary component. No Statement change.

### rem-handle-decompositions-are-not-canonical

amended_repair: Read full Remark and all nine supplier interfaces. Different chosen functions/fields may yield different presentations, but this does not assert every change yields a different presentation or canonical handle subsets. Compatible rounding preserves diffeomorphism type; a framing change can change it. Duality, reordering and endpoint absorption act on chosen presentations. No later move is assumed proved here; no orientation claim or empty-case obstruction added. Reader correction of framing/rounding conflation is sound.

Genus-surface example amendment: F8 explicitly supplies the adapted complete field for the realizing function before applying the two-input duality theorem. The same metric construction is stated in the dual-elimination carrier. Neither Statement changed.

### handle-decompositions-duality-and-rearrangement

amended_repair: A-page agrees with current triad, boundary extension, two-way correspondence and qualified finite CW pair, elementary-band gluing and finite no-connection rearrangement. Corrected final endpoint summary: eliminated reversed zero-handles give eliminated n-handles, while retained connecting one-handles become final (n-1)-handles. The old summary incorrectly called all those connecting handles eliminated. Page order supplies current existence/correspondence before CW and no later isotopy-extension assumption is used.

### handle-decompositions-duality-and-rearrangement-examples

confirmed_fatal: The empty triad with empty incoming boundary admits the empty handle list, so it has no first handle. The page universal was false. Added only nonempty to that sentence, exactly as the example hypothesis requires. Read both pages and all five current examples: cylinder, genus counts, disjoint quotient order, exact circle-gradient obstruction and n>=1 first-zero-handle witness agree.

### thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity

confirmed_nonfatal: Complete current published proof and all three actual supplier statements read. In Proof 3.1 a zero is incorrectly asserted outside its support. phi1=x^2/(1+x^2), phi2=1/(1+x^2) on R are a subordinate partition, with phi1(0)=0 but supp(phi1)=R. Proof 1.1 already gives the immediate repair: inside Ui use pasted product and zero value; outside Ui support inclusion makes pasted extension zero. The theorem is sound with pasted-product interpretation. Published item remains read-only and owner repair is recorded A-P. Owned reparametrization consumer proves its scalar construction independently, so this gap does not block it.

## Additional defect distinctions

- `lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum`, `frontier-41-ha-dt-29-5a-b1-cap-cutoff` (nonfatal): Reader Proof 2.1 adds the inward cutoff: the uncut t-gamma(x) map fails to become identity at the inner edge. Current thin-cap map has normal derivative 1-gamma rho_prime>0 and identity beyond cutoff, so extension is justified.
- `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type`, `frontier-41-ha-dt-29-5a-b1-open-collar` (nonfatal): Current pre-amendment step 1.1 called c(D times [0,1)) a collar neighbourhood while edge cutoff needs open space around closed disk D. Amended to extended disk coordinates O and V=c(O times [0,epsilon)); local open inverse-function interfaces are stated in F5.
- `lem-gradient-like-perturbation-separates-adjacent-critical-levels`, `frontier-41-ha-dt-29-5a-b1-supplier-paraphrases` (nonfatal): F3 omitted compact A from the current supplier and F4 did not specify backwards lower-to-upper transport. Current spheres are compact and proof uses backwards transport, so the application is sound; restored both exact supplier qualifications.
- `lem-handles-of-equal-index-can-be-attached-on-one-level`, `frontier-41-ha-dt-29-5a-b1-excellent-paraphrase` (nonfatal): F8 cited the excellent-only correspondence for a generic adapted Morse function. The simultaneous supplier independently covers the actual nonexcellent use; F8 now accurately says adapted excellent.
- `lem-handles-of-equal-index-can-be-attached-on-one-level`, `frontier-41-ha-dt-29-5a-b1-boundary-cutoff` (nonfatal): Proof 1.3 invoked the boundaryless manifold bump supplier on [0,1). Replaced that invocation by the explicit integrated scalar bump on (1/4,1/2); no boundary extension theorem is needed.
- `thm-self-indexing-morse-function-existence`, `frontier-41-ha-dt-29-5a-b1-local-interchange-qualification` (nonfatal): F3 used a vague critical-value interval in place of exact regular endpoints. Restored the actual band hypothesis and target values inside its endpoints; step 2.1 explicitly chooses common target inside the two old critical values. Proof already works on that permitted band.
- `prop-dual-elimination-of-top-index-handles`, `frontier-41-ha-dt-29-5a-b1-complementary-counts` (fatal): Proof 3.1 said each index count is preserved by duality, which is false for a disk with one 0-handle dual to a single n-handle. Replaced with a handle bijection complementing indices; the required count h_n(dual)=h_0(chosen) remains exact.
- `prop-dual-elimination-of-top-index-handles`, `frontier-41-ha-dt-29-5a-b1-realizing-field` (nonfatal): Proof 2.1 supplied a realizing adapted excellent function but omitted the adapted field required by duality. F8 now cites metric, Morse chart, bump and complete-field statements; step 2.1 constructs the patched negative gradient and complete signed-collar extension for that function.
- `ex-dual-handle-presentations-of-a-genus-g-surface`, `frontier-41-ha-dt-29-5a-b1-realizing-field` (nonfatal): Verification 3.1 likewise omitted the field input of the duality theorem. It now patches the metric to exact Euclidean Morse charts and uses compact closed-surface completeness, with exact F8 suppliers.
- `ex-empty-incoming-boundary-requires-zero-handles`, `frontier-41-ha-dt-29-5a-b1-one-dimensional-cap` (fatal): F3 asserted that an n-handle fills one spherical boundary component even at n=1. S0 has two boundary-point components. Restored the actual published n>=2 clause and its n=1 pair-of-points alternative, and step 3.1 now fills the whole boundary sphere.

The final field constructions in the surface example and dual-elimination proof are now authored directly from the published metric, Morse-chart, bump and completeness statements; the existence theorem Proof 5.1–6.1 supplied a checked model, not a claim that its existence statement alone chooses a field for an arbitrary prescribed function.

## Carrier synchronization and source limits

The 31 substantive touched-carrier repairs retain their reviewed mathematical corrections. Their stale batch manifest statements, dependencies, source/provenance metadata and proof strategies are synchronized to current content, so their formal verdicts are amended_repair. The remaining touched carrier (flow reparametrization) is reviewed_no_defect with change_kind metadata and no defect row, as the reader explicitly reports no proof repair. No untouched manifest entry is rewritten. Decision hashes are intentionally left to the engine.

Milnor was read online at Definition 1.3 (printed p. 2), complete Theorems 3.12–3.13 construction/comparison (pp. 30–32), complete Preliminary Rearrangement Theorem 4.1 and finite-cluster Extension 4.2 (pp. 37–39), Theorem 4.4, Definition 4.5, Lemmas 4.6–4.7 and Final Rearrangement Theorem 4.8 (pp. 40–44). Descending conventions are checked against the source upward convention. URL: https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf. OCR omits parts of some displayed formulas; all formulas used here were independently computed from current quadratic/flow models. Hatcher Chapter 0, Propositions 0.18–0.19 and Corollaries 0.20–0.21, including the disk-cylinder retraction and complete three-part HEP proof, were read at printed pp. 15–17: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf. Wall fetch fails and reader temporary extraction is absent; no Wall source-reading claim is made. Internal supplier statements and relevant one-point/simultaneous/transport/rounding proofs provide exact current prerequisites. These are bounded item reviews, not whole-library judgments.

## Step 5b supplier-impact routing

All direct uses within batch 1 were checked in their current proofs. The CW lemma was assessed with its newly introduced current Morse/correspondence prerequisites opened as dependency context before completing its generated level-2 obligation. No source Statement or Definition changed during this adjudicator’s item edits; reader interface changes still require the engine’s cross-group reconciliation. Current outside dependency/reference mappings below are routing evidence, not findings about unread outside proofs. Other owners retain write authority.
- Batch 13: `def-surgery-trace-cobordism` ← `def-smooth-cobordism-triad-for-morse-theory`, `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 13: `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold` ← `def-smooth-cobordism-triad-for-morse-theory`, `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 13: `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle` ← `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 13: `prop-homology-effect-of-surgery-away-from-the-middle-dimensions` ← `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 14: `prop-surgery-below-the-middle-dimension-improves-connectivity` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 15: `def-h-cobordism` ← `def-smooth-cobordism-triad-for-morse-theory`.
- Batch 15: `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 15: `prop-relative-handle-chain-complex-of-a-cobordism` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 15: `lem-handle-elimination-by-trading-a-pair` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 15: `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`, `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`.
- Batch 15: `lem-duality-eliminates-top-and-cotop-handles` ← `def-smooth-cobordism-triad-for-morse-theory`, `prop-dual-elimination-of-top-index-handles`.
- Batch 15: `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 15: `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 15: `ex-a-product-cobordism-is-an-h-cobordism` ← `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 15: `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 15: `cex-a-homology-cobordism-need-not-be-an-h-cobordism` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 16: `def-based-handle-chain-complex-over-the-fundamental-group-ring` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 16: `lem-product-h-cobordisms-have-zero-whitehead-torsion` ← `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 16: `lem-h-cobordisms-admit-two-index-normal-form-presentations` ← `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold`, `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles`.
- Batch 16: `lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 16: `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction` ← `lem-product-cobordisms-have-critical-point-free-presentations`.
- Batch 17: `lem-open-manifolds-admit-handle-filtrations-without-top-index-handles` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`, `prop-dual-elimination-of-top-index-handles`.
- Batch 17: `thm-smale-hirsch-for-open-source-manifolds` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`, `prop-dual-elimination-of-top-index-handles`.
- Batch 24: `lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 3: `def-geometric-cancelling-handle-pair` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 3: `lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type` ← `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 3: `thm-handle-cancellation` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 3: `thm-creation-of-a-cancelling-handle-pair` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 3: `lem-handle-slides-preserve-the-relative-diffeomorphism-type` ← `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 3: `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 3: `def-attaching-belt-intersection-matrix-of-adjacent-index-handles` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 3: `rem-handle-slides-are-not-handle-cancellations` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 4: `cor-morse-euler-characteristic-identity` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 4: `prop-morse-handle-chain-complex-computes-singular-homology` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged`, `lem-handles-of-equal-index-can-be-attached-on-one-level`.
- Batch 4: `prop-relative-morse-inequalities-for-a-cobordism` ← `def-smooth-cobordism-triad-for-morse-theory`, `lem-interior-slab-handle-attachment`.
- Batch 4: `ex-cancellation-pair-contributes-a-one-plus-t-term` ← `def-handle-decomposition-relative-to-the-incoming-boundary`.
- Batch 6: `lem-compactified-unstable-manifolds-give-a-cw-decomposition` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`, `lem-interior-slab-handle-attachment`.
- Batch 6: `prop-relative-morse-complex-for-an-adapted-cobordism` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 6: `ex-relative-morse-homology-of-a-single-handle-cobordism` ← `def-handle-decomposition-relative-to-the-incoming-boundary`, `def-smooth-cobordism-triad-for-morse-theory`.
- Batch 8: `def-algebraic-lefschetz-number` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.
- Batch 8: `lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace` ← `lem-a-handle-decomposition-gives-a-relative-cw-complex`.

## Item hash comparison

The table compares raw item SHA-256 prefixes (16 hex characters); exact historical digests remain in the named pre/post JSON snapshots. Current whole-carrier amendments additionally include the synchronized contract and manifest. Report hashes are observations only, not engine decision stamps.

| Item | Pre-reader | Post-reader | Current item |
|---|---|---|---|
| `def-smooth-cobordism-triad-for-morse-theory` | `43e977dd7be9f864` | `e9d62ded613eb4c0` | `e9d62ded613eb4c0` |
| `lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum` | `f657efb9983b6e8f` | `1f6dec8dd9b6d865` | `8b9576755d9d0f23` |
| `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold` | `2789fd1c13d9d9d5` | `721f2a89c372400e` | `721f2a89c372400e` |
| `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type` | `e78150f35070f9ec` | `3e0a3311b6d88bdf` | `ff1f34306abe231d` |
| `lem-flow-reparametrization-realizes-a-level-isotopy` | `f0403d9fc51a2d79` | `f0403d9fc51a2d79` | `f0403d9fc51a2d79` |
| `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy` | `e064391e2c3aba00` | `58475573ee52c828` | `58475573ee52c828` |
| `lem-increasing-reparametrization-of-finitely-many-critical-levels` | `7e748bee23d02234` | `6f952696e2f76fa8` | `6f952696e2f76fa8` |
| `lem-separating-critical-values-far-from-the-boundary` | `04c5e64e5ccf32e3` | `abaea9f86a7110e0` | `abaea9f86a7110e0` |
| `lem-standard-handle-admits-an-adapted-morse-function` | `3df9662346741a5d` | `6266ab190e400c5f` | `6266ab190e400c5f` |
| `def-handle-decomposition-relative-to-the-incoming-boundary` | `a1a2857f1293f6e1` | `dc8c8fad3a1f3ede` | `dc8c8fad3a1f3ede` |
| `lem-boundary-product-function-on-a-collared-cobordism` | `799b9b626d38724e` | `61462f00b8991438` | `61462f00b8991438` |
| `lem-a-handle-decomposition-gives-a-relative-cw-complex` | `63e2cc415bc520fa` | `2abe3f53aa68de97` | `2abe3f53aa68de97` |
| `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged` | `b76183fbce930047` | `b6c40aa6dea3e3a6` | `b6c40aa6dea3e3a6` |
| `lem-gluing-handle-morse-models-along-collars` | `29e1b31b5cd8c93f` | `08f30f056d8a627e` | `08f30f056d8a627e` |
| `lem-interior-slab-handle-attachment` | `69da3cb6e7e3584c` | `d9a0ebeab00fcb24` | `d9a0ebeab00fcb24` |
| `lem-product-cobordisms-have-critical-point-free-presentations` | `d140cdb5138474c1` | `3ed42c899d7c017c` | `3ed42c899d7c017c` |
| `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods` | `e562e0cfa57b37d7` | `041fb5bba5e34473` | `041fb5bba5e34473` |
| `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` | `b890fc49e362d541` | `f6725a6f9e6209a4` | `f6725a6f9e6209a4` |
| `lem-gradient-like-perturbation-separates-adjacent-critical-levels` | `ccabde533a066e33` | `8769d0c5a70aba7c` | `34003e6afbb382a9` |
| `thm-morse-functions-and-handle-decompositions-correspond` | `d321378b0c4d85a8` | `cef148871d0d8494` | `cef148871d0d8494` |
| `cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory` | `e51bec6584fd3d7c` | `b33f322027b24992` | `b33f322027b24992` |
| `ex-relative-handle-decomposition-of-a-cylinder` | `8ad70c76a4f9c3cf` | `83671f25181b0935` | `497b894c9b729e86` |
| `lem-handles-of-equal-index-can-be-attached-on-one-level` | `c5ac67eae4292909` | `777237c2a9c88009` | `fb73be74ff712cfb` |
| `thm-handle-duality-from-negating-a-morse-function` | `ae03b1da80f7e36b` | `4910ad14134b7e55` | `4910ad14134b7e55` |
| `thm-morse-rearrangement-by-index` | `555fd447283f00d7` | `6ef6959075456d1c` | `6ef6959075456d1c` |
| `thm-self-indexing-morse-function-existence` | `8ca0e8fbbd49d47d` | `fb60a8ba7d98844d` | `a4f02a3be7fc943d` |
| `ex-dual-handle-presentations-of-a-genus-g-surface` | `02acf21d8e81658e` | `47822beabcc26a90` | `28100a86a2c00112` |
| `ex-reordering-independent-one-handles` | `f66b234e439e1b5e` | `aee3ce1205c2c8a3` | `aee3ce1205c2c8a3` |
| `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles` | `4e1d092f4725bcfb` | `54d7690c295ce349` | `54d7690c295ce349` |
| `prop-dual-elimination-of-top-index-handles` | `374d37242b1dafe8` | `4a3d89ca48a88247` | `851953ba9dd11fc4` |
| `ex-empty-incoming-boundary-requires-zero-handles` | `916d6cc43388e920` | `70be4d86d7cebbf1` | `9ee2a454fb55346c` |
| `rem-handle-decompositions-are-not-canonical` | `3cb4c2c1bcb0b494` | `987f4b4140756f04` | `987f4b4140756f04` |

## Final local checks

- Final reflow and precheck on the nine edited item paths: nine checked, zero failures (exit 0).
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-1.proof-contracts.json --strict`: 34/34 checked, zero errors/warnings (exit 0).
- `node tools/risk-report.mjs research/frontier-41-ha-dt-29-batch-1.proof-contracts.json`, followed by the same command with `--require-reviewed`: 34 items routed, zero errors in both runs (exit 0). Every HIGH/CRITICAL review is complete and item-specific; the ordinary dual definition was also read as prerequisite context.
- Scoped renderer check: nine items and both assigned pages, 11 files, all YAML/math parsed (exit 0).
- Final required batched `node tools/proof-layout.mjs` on all nine edited item paths: nine items, 45 steps, zero defects (exit 0). No subsequent item edit or formatter was run.
- Frontier dependency ledger refresh: deduplicated successfully (exit 0); owning batch input remains empty.
- Defect-ledger append: 46 unique closed rows appended and generated view refreshed (exit 0). There is one row per separately recorded defect; all four finding decisions reference exactly one closed row each. Initial draft append was rejected because adjudication_ref was an object rather than an array; nothing was appended until corrected. Initial contract synchronization omitted prose step references and merged an F8 fact paragraph; both mechanical failures were corrected before the final passing checks. No mechanical failure was entered as a mathematical defect.
- Exact obligation/reference check: 37/37 owed obligations, no extras or duplicates, current subjects match referenced closed rows at 5a-adjudicate.

## Handoff

All routed local obligations and required risk reviews are complete. Verdict totals: 31 amended touched repairs, one metadata reviewed_no_defect, one amended A-page, two confirmed_fatal findings and two confirmed_nonfatal findings. The published support inference remains an A-P owner repair obligation; its closed nonfatal-recorded ledger row records adjudication, not a published repair. Outside consumer interface reconciliation remains for Step 5b under the exact current mappings above. No substantial local prerequisite escalation or proposed withdrawal remains. No published item, outside batch item, engine dispatch, decision hash, judge stamp or stage transition was changed. The engine must stamp stable current carriers and run its own gate battery.
