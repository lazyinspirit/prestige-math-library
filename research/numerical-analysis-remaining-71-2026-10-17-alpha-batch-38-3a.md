# Batch 38 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-38`.

Scope: four touched obligations, no reader/refuter findings or page obligations. Reader and refuter reports are evidence only. The adjudicator made no item edits; reader/post content is retained.

## Dependency-order review

### `lem-na-contractible-lipschitz-polyhedron-boundary-connected`

Reviewed both steps: Lipschitz straightening makes closure a compact oriented 3-manifold; collar preserves contractibility; real H2 vanishes and PL duality gives H1(M,boundary)=0. Pair exactness injects boundary H0 into real H0(M); path-component coefficient functional excludes two boundary components. Nonempty bounded domain supplies boundary. AC retained.

Evidence: current item Proof and Facts; exact supplier statements in batch-38 contract citations. No defect found. Next: level 1 Fourier splitting and continuation.

### `lem-na-graded-whitney-mesh-size-and-boundary-shifts`

Reviewed six steps: singular-value bounds give edge comparability and finite vertex incidence; connected spherical/disk links propagate sizes. Nodal minimum size is locally comparable, globally Lipschitz by quasiconvexity. Finite graph-normal convex combination gives strict inward/outward shifts including concave corners. Hat-function patch separation and small Lipschitz displacement give overlap and bi-Lipschitz constants independent of global grading.

Evidence: current item Proof and Facts; exact supplier statements in batch-38 contract citations. No defect found. Next: level 1 Fourier splitting and continuation.

### `lem-na-lipschitz-scalar-h1-h2-extension`

Reviewed ten steps and cited Sobolev interfaces: dyadic exterior partition and vertically reflected cubes have bounded overlap, neighbor bridges have controlled geometry. Affine mean-gradient polynomials reproduce affine data; two cube Poincare bounds and overlap comparisons yield simultaneous H1/H2 estimates. Scale cutoff handles large cubes. Smooth inward-translation density and O(d^2)/O(d) boundary mismatch remove distributional jumps by shrinking-strip cutoffs. Completeness gives the same linear operator on H1 and H2; finite localization handles disconnected domains. AC covers analytic choices; no H2 regularity of boundary graph assumed.

Evidence: current item Proof and Facts; exact supplier statements in batch-38 contract citations. No defect found. Next: level 1 Fourier splitting and continuation.

### `lem-na-compact-support-hcurl-fourier-splitting`

Checked both Fourier steps with 2pi normalization. Compact support supplies bounded Fourier transform; |xi|^-2 is locally integrable in dimension three, while high frequency uses L2. Orthogonal Helmholtz multiplier gives both norms and distributional identities; conjugate symmetry gives real fields, including the sign in scalar multiplier. Zero field and null support cause no exception.

Evidence: current Proof, Facts and cited Fourier/analytic statements. No defect found. Next: level 2.

### `lem-na-weak-local-potentials-and-continuation`

Checked all four steps: mollified zero curl gives radial primitives, mean-zero Poincare gives H1 Cauchy limits on compact balls. Constants on convex overlaps satisfy cocycle identities; ball-independent path transport and finite homotopy grid cancel loop transport. Countable representative gluing gives local H1 only, as claimed; connectedness gives uniqueness modulo constants. AC and compact-cover hypotheses retained.

Evidence: current Proof, Facts and cited Fourier/analytic statements. No defect found. Next: level 2.

### `cex-na-canonical-edge-moments-not-bounded-on-hcurl`

Both steps checked: endpoint bump gradient has squared L2 norm at most epsilon times a fixed whole-space integral, curl identically zero, while oriented edge circulation is -1. Works for boundary as well as interior edges because the smooth ambient bump restricts and FTC uses its endpoint values. Refuted extension is indeed continuous linear functional on graph space; CC retained.

Evidence: current proof and its cited closure, Poincare, ACL, cutoff and integration interfaces. No defect found. Next: level 3.

### `lem-na-hcurl-curlfree-potential-contractible`

Checked two steps including the essential global L2 closure: continuation yields only local H1; clipped functions are globally H1 by boundedness and locally identified L2 derivatives. Global Poincare applies to clipped functions using Lipschitz extension. Comparing full-domain means to a fixed interior ball mean, then dominated convergence and Fatou, gives global H1 primitive. Connectedness gives uniqueness; AC retained.

Evidence: current proof and its cited closure, Poincare, ACL, cutoff and integration interfaces. No defect found. Next: level 3.

### `lem-na-lipschitz-support-and-zero-boundary-closure`

Checked all three clauses/steps. Whole-space supported H1 pieces translate inward in graph charts and mollify to compact tests; reverse zero extension uses completeness. Continuous zero-boundary H1 data obey vertical ACL endpoint estimate; height cutoff uses the bounded Sobolev product rule, and shrinking-strip derivative norm tends to zero. Hcurl closure extends both field and curl without interface term; H10 gradients follow from compact scalar approximants. AC/CC and finite chart hypotheses retained.

Evidence: current proof and its cited closure, Poincare, ACL, cutoff and integration interfaces. No defect found. Next: level 3.

### `lem-na-weak-hcurl-tangential-trace`

Checked four steps: pairing annihilates H10 through compact-test approximation, smooth Gauss-Green sign is n cross u, quotient infimum gives sqrt(2) bound. Compact cutoff/density permits nonsmooth H1 tests for compactly supported u_m, then graph continuity gives zero trace on closure. No converse trace characterization is claimed. CC suffices.

Evidence: current proof and its cited closure, Poincare, ACL, cutoff and integration interfaces. No defect found. Next: level 3.

### `lem-na-full-dirichlet-hcurl-regular-decomposition`

Both steps checked: zero extension and Fourier splitting give p H1, w H1; on exterior D=B minus closure Omega, grad p=-w implies p H2 without topological restrictions. D is bounded Lipschitz including separated cavity components; the same scalar H1/H2 extension applies. Subtract exterior extension and multiply fixed cutoff: resulting H1 fields vanish outside closure and therefore belong to H10. Identity, linearity and full graph norm estimate follow; no curl-only scalar estimate inferred.

Evidence: current Proof and exact suppliers in Facts. No defect found. Next: level 4.

### `lem-na-whitney-moments-commute-with-grad-curl-div`

Six steps checked: RT0 zero flux implies c=0 by divergence and a=0 by three independent normals. Face tangential Whitney traces are determined by three edge moments, so assembly has no distributional jump. Endpoint, Stokes and Gauss identities with consistent orientation establish the three commutations and global subcomplex on polynomial restrictions. Canonical interpolation remains limited to smooth data; CC supplied.

Evidence: current Proof and exact suppliers in Facts. No defect found. Next: level 4.

### `thm-na-stable-mixed-curl-curl-kernel-quotient`

Three steps checked: kernel orthogonal complement has positive curl inner product; two finite Riesz problems give unique solution/multiplier. Direct decomposition verifies all test equations. Positive-square Cauchy-Schwarz and testing on representing vectors yield exact dual norms; q as test gives inf-sup one for nonzero kernel, with zero-space cases expressly vacuous. No unjustified uniform graph coercivity claimed.

Evidence: current Proof and exact suppliers in Facts. No defect found. Next: level 4.

### `lem-na-relative-curl-kernel-is-zero-boundary-gradients`

Four steps checked: regular decomposition reduces to H10 curl-free z=grad r, whence r H2; extension and weighted Fourier Cauchy-Schwarz give continuous r in 3D. Slab trace estimate and smooth H2 approximants show tangential derivatives of face values vanish. Connected finite face cover gives one boundary constant, then closure criterion gives H10 primitive. Reverse inclusion and exterior-zero ball Poincare establish exactness, full H1 bound and closed gradient range. No discrete-to-continuum inference.

Evidence: current Proof/Verification and exact cited statements. No current defect found. Near-identity reader degree-range repair is mathematically sound; historical comparison pending. Next: level 5.

### `lem-na-whitney-averaged-pullback-moment-bounds`

All seven steps checked. Reference moment scaling h^(3-2k), inverse bounds and graded patches give averaged moment bound epsilon^-3/2. Constant-radius smooth shifts prove full graph density; zero extension and outward smoothing characterize relative closure. Shared simplex restrictions make Stokes applicable despite piecewise ambient mesh size derivatives. Commutation is correctly limited to k=0,1,2; top d=0. Averaged prism homotopy uses bounded polynomial traces, Fubini null-set passage and dominated convergence; its terms scale epsilon h^(k-3/2), including k=0 and k=3 endpoints. Reconstruction yields uniform near identity. CC interfaces declared.

Evidence: current Proof/Verification and exact cited statements. No current defect found. Near-identity reader degree-range repair is mathematically sound; historical comparison pending. Next: level 5.

### `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes`

Six steps checked including empty mesh: moment bijections assemble global graph fields and identify differential with real incidence coboundary. Finite linear duality is proved by annihilators and basis extension; simplicial-singular comparison then gives natural dual homology. Contractibility is explicitly closure contractibility. Harmonic dimensions use finite orthogonal splitting, without asserting continuum exactness or requiring full AC.

Evidence: current Proof/Verification and exact cited statements. No current defect found. Near-identity reader degree-range repair is mathematically sound; historical comparison pending. Next: level 5.

### `ex-na-nodal-curlcurl-spurious-gradient-mode`

Both calculations checked: x1 e1 is affine, curl zero, nonconstant on any nondegenerate tetrahedron, whereas scalar P1 gradients are constant. It is a kernel mismatch relative to compatible gradient image, not a claim that the field lacks a continuum potential (x1 squared/2). CC convention retained.

Evidence: current Proof/Verification and exact cited statements. No current defect found. Near-identity reader degree-range repair is mathematically sound; historical comparison pending. Next: level 5.

### `lem-na-whitney-cochain-correction-and-strong-convergence`

Three steps checked: near-identity norm at most 1/2 makes finite-dimensional A invertible by convergent Neumann series, norm inverse at most 2. Restricted cochain commutation transports to inverse and projection for k=0,1,2; terminal d=0 handled without degree-four object. Constant-form reproduction and scaled moments give O(hmax) approximation on smooth data; density plus uniform projection bound gives strong L2 convergence. Finite nets give compact-uniform convergence, and commutation gives graph convergence including top L2 degree.

Evidence: current proof and prior reviewed suppliers. No current defect found. Next: projection theorem level 6.

### `ex-na-handle-domain-harmonic-edge-field`

Two steps checked: rho>=R-r>0 gives smooth bounded angular field; coordinate derivatives give zero curl/divergence. Boundary normal is meridional, so normal component zero. Core circulation is 2pi with stated parameter orientation, contradicting a single-valued C1 potential by FTC. No claim of polyhedral meshing of the curved torus or of weak relative exactness is made; cited cohomology is contextual.

Evidence: current proof and prior reviewed suppliers. No current defect found. Next: projection theorem level 6.

### `thm-na-uniformly-bounded-commuting-cochain-projection`

Both steps checked as direct specializations of corrected full/relative projection supplier. Finite coefficient norms match H1/Hcurl/Hdiv/L2 with correct degree-two signs; full and boundary-corrected projections remain separate. Domain is bounded Lipschitz polyhedron, matching shape regular meshes have hmax tending to zero. All degree ranges, targets, bounds, strong and compact-uniform convergence follow without topological or regular-decomposition assumptions. Reader correction of terminal differential is sound.

Evidence: Statement, Proof 1.1–2.1, reviewed correction supplier. No current defect found. Next: gradient gap.

### `lem-na-discrete-gradient-lift-gap-estimate`

All three steps checked. Poincare and H10 completeness make B closed; real Hilbert projection gives linear contractions. Compact scalar approximants put gradients in zero-tangential graph closure. e=v-Pi w lies in Bh by relative commutation; both v and w orthogonal to Bh, giving exact one-sided gap inequality including zero error. Uniform L2 extensions and compact-test density promote strong convergence from graph domain to all L2, then handle converging moving lifts. Abstract conditional domain assumptions suffice; AC retained.

Evidence: current Proof 1.1–3.1 and Poincare/projection interfaces. No defect found. Next: compactness.

### `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`

All six steps independently checked: full Dirichlet decomposition plus zero-boundary Rellich compactifies lifts; gap supplier converts moving lifts to discrete compactness using uniform L2 extensions. Closed continuous kernel gives a continuous curl inequality by normalized contradiction; relative curl commutation then transfers it directly to every discrete kernel complement, with no coarse-mesh exception. For contractible domain, continuum relative exactness and local constant curl-free edge fields yield affine potentials; interior jump distributions and zero extension force matching/zero boundary face values. Connected vertex links propagate nodal values, proving Kh=grad Sh. General relative harmonic complement has compact unit ball, hence finite dimension; nonzero harmonic modes correctly obstruct inequality on all Xh. AC/CC/DC hypotheses retained. Reader link expansion is sound explanatory enrichment of an already valid face-chain argument.

Evidence: Proof 1.1–4.1; reviewed full-Dirichlet, relative-kernel, projection and gap suppliers; exact zero-boundary Rellich and Hilbert projection statements. No current defect found. All 21 required risk reviews complete. Next: historical verdicts, consumer checks and focused validation.

## Historical comparison and decisions

All four current raw item hashes equal the frozen post-reader hashes. The pre/post snapshots contain fingerprints, not carrier text. The initial proposal copies do not match the frozen pre-reader hashes, so they were not treated as the originals. A targeted historical-recovery read of the reader log recovered exact original content. No historical uncertainty remains after the SHA-256 matches below. The log was used for byte recovery only, not as mathematical authority.

Historical source: `research/numerical-analysis-remaining-71-2026-10-17-dispatch/reader-reader-38.attempt-1.log`, raw SHA-256 `338813a0dbbda0aa1aa01df5c77508829df482708bed05e2480417fee7cf558c`.

### `lem-na-whitney-averaged-pullback-moment-bounds`

Pre: `e1fc30ace5c5b93f14e52424c337c6b2a4d85e28b122c1b1094f3dd90e3ebd48`. Post/current: `f0e9a32aed51b91d07c5d01bd614c36380d50669262eb24b599b3f6abe63964e`.

Reconstruct from current carrier by replacing its Statement paragraph beginning “where the second bound” with the logged item line 54 and Proof 3.1 with the logged original derivation 3.1 (retaining its current terminal tags). Both original strings occur before the first successful reader edit. Recomputed raw SHA-256 equals the frozen pre-reader fingerprint.

### `lem-na-whitney-cochain-correction-and-strong-convergence`

Pre: `0e1e55bebbaa69e1895e919fe8fd03f768e406f0e775619f90951d439c4edeb7`. Post/current: `3d881f1c46a8f63969a1e71db90eae5885fb8f85bca350c8ee3be5a9945d573b`.

Complete original carrier at log lines 19338–19385, with 1 terminal newline(s). Recomputed raw SHA-256 equals the frozen pre-reader fingerprint.

### `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`

Pre: `d9aae477c8cee0b18266dd545aa50e7ce9c0e8228b2d4ccb507b84274bba3e10`. Post/current: `e94b1c5769775291da76173fa2fc593136c595ddee801811bdda933452ebfab3`.

Complete original carrier at log lines 19883–19963, with 2 terminal newline(s). Recomputed raw SHA-256 equals the frozen pre-reader fingerprint.

### `thm-na-uniformly-bounded-commuting-cochain-projection`

Pre: `2b1ee528e503363a7a4fb535739d8c63e0fc6bb9b6215eb95f0f6c2c432c1cce`. Post/current: `01c93e4ce5e0cab9bf17a5b3c8dd76d341171d9bd79ce12508c355f9b8438f7e`.

Complete original carrier at log lines 19390–19444, with 1 terminal newline(s). Recomputed raw SHA-256 equals the frozen pre-reader fingerprint.

`touched:38:lem-na-whitney-averaged-pullback-moment-bounds`: **accepted_repair**. Statement and Proof 3.1 formerly applied the adjacent-degree equation without excluding degree three, where Q^4 is undefined. The current carrier restricts it to k=0,1,2 and explicitly sets terminal d=0. Reviewed all seven steps, including representative independence, graph density, relative zero extension, graded-patch scaling and averaged prism passage. The corrected identity has precisely the available domain and target; current raw bytes equal reader post snapshot. Exact pre-reader bytes were recovered and SHA-256 matched; historical binding and full risk evidence are in research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-38-3a.md. Defect rows: na71-b38-3a-top-degree-averaged.

`touched:38:lem-na-whitney-cochain-correction-and-strong-convergence`: **accepted_repair**. The old Neumann inverse/graph-convergence argument used adjacent-degree operators without excluding k=3. Current Statement and Proof 1.1/3.1 restrict the inverse cochain identity to k=0,1,2 and use L2 convergence for the top graph degree. All three steps are sound: inverse norm <=2, projection identity, polynomial reproduction, dense approximation and finite compact nets. Current raw bytes equal reader post snapshot. Exact pre-reader bytes were recovered and SHA-256 matched; historical binding and full risk evidence are in research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-38-3a.md. Defect rows: na71-b38-3a-top-degree-correction.

`touched:38:thm-na-uniformly-bounded-commuting-cochain-projection`: **accepted_repair**. The old full-space Statement displayed adjacent-degree commutation alongside all four degrees without a terminal qualification; homogeneous commutation range was implicit. Current Statement explicitly specifies k=0,1,2 and zero terminal derivative for both families. Its two proof steps instantiate the independently reviewed corrected supplier on the exact matching shape-regular Lipschitz polyhedral setting. Full and homogeneous families remain separate. Current raw bytes equal reader post snapshot. Exact pre-reader bytes were recovered and SHA-256 matched; historical binding and full risk evidence are in research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-38-3a.md. Defect rows: na71-b38-3a-top-degree-projection.

`touched:38:thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`: **reviewed_no_defect**. Exact pre-reader carrier already states connected sphere/disk vertex links and a perturbed path giving the face chain. That standard local mesh argument is valid under matching tetrahedra and a Lipschitz polyhedral manifold. The reader expands the same reasoning with a small incident-cell neighborhood, conical star cross-section and transverse link-edge crossings. This is sound explanatory enrichment, with no corrected false mathematical claim. Independently checked all six proof steps, continuous/discrete quotient inequalities, relative exactness, moving-lift convergence and finite harmonic spaces. Current raw bytes equal the reader post snapshot; exact pre-reader SHA-256 recovered from log lines 19883–19963. Defect rows: none (audit enrichment).

## Sources and prerequisites

The mathematical review used each current item’s local argument and actual cited supplier statements, rather than source references as proof substitutes. The contract’s exact source quotations were checked against current source sections by strict validation. Relevant published topology, Sobolev, Fourier, mollification, affine Piola, Stokes, Gauss–Green, real Hilbert projection and zero-boundary Rellich interfaces were checked for their dimensions, fields, choice hypotheses and domains. The out-of-batch draft `def-na-hdiv-space` gives real vector L2 classes, L2 weak divergence and its graph norm under CC, exactly as used by the owned Whitney definition, commuting-moment lemma and cohomology theorem. No defect in an inspected published interface was identified; no published carrier or published ledger was edited.

External source check: [Hiptmair–Pechstein, 2019 report](https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf), printed pp. 5–8, equations (6)–(10), Lemmas 1–3 and the complete four-step proof of Theorem 2. The simultaneous scalar extension and exterior H2 subtraction support the local proof structure; local items supply their own proofs and retain full-graph estimates where needed. [Arnold–Falk–Winther](https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf), §5.5, printed pp. 56–57, smoothing outline through Theorem 5.9: shape-regular graded mesh size, averaged pullback, uniform near identity and inverse correction. Local boundary shifts and relative closure arguments were independently checked; the cited outline alone was not treated as their proof.

## Consumer review and scope

The three Statement changes clarify the last degree of an otherwise unchanged four-term complex. Owned consumers use only grad, curl or div in degrees zero through two, or top-degree L2 convergence. Each was reviewed in the dependency-order entries above. Outside scope, batch 42 `thm-maxwell-edge-fem-smooth-solution-error` uses the unchanged relative boundary-moment characterization; `lem-maxwell-magnetic-compatible-initial-projection` uses degree-two div commutation with degree-three projection. Batch 43 `thm-pe11-edge-maxwell-spectral-approximation` uses relative degree-one curl commutation in Proof 3.1 and unchanged compactness/Poincare; its two cube examples use the same supplier hypotheses contextually. Those actual uses remain supported, so no necessary foreign repair or further propagation is required. Its F4 writes the cochain identity without an explicit k range; the actual application is k=1. Optional owner/batch-43 clarification: make k=0,1,2 explicit and state terminal d=0 to mirror the corrected supplier. This does not block the checked use. No foreign files were edited, no withdrawals removed, and stable IDs remain unchanged.

## Validation and handoff

No item was edited by this adjudicator. The only contract edits are the 21 item-specific `risk_review` records. Reader/post items remain byte-identical. Focused precheck on the four touched items: 4 checked, 0 failures. Strict proof-contract validation: 24/24 checked, 0 errors; one citation-density heuristic warning on unchanged scalar-extension Proof 2.2 (four facts cited there while other steps cite earlier steps). This warning is not evidence of an invalid argument. Reviewed-risk check: 24 routed items, 0 errors; all 21 HIGH/CRITICAL risk reviews complete. Final batched proof-layout: 4 items, 18 steps, 0 defects. Three closed nonfatal undefined-notation rows were appended through the serialized defect-ledger tool, which also refreshed the generated ledger view. No mathematical blocker remains. Engine owns hashes, gates and transitions; no judging, stamping or judge cycle was initiated.
