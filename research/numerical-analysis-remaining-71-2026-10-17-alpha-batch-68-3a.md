# Batch 68 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17; group: batch-68. Scope: batch 68 only.

Reviewed scope, reader report/findings, refuter finding, pre/post hash inventories and generated item order. Reader findings are empty; ten decisions are owed (nine touched carriers and refuter:68:1). Current touched item bytes match reader-post snapshots before this review. The corner convergence item has identical pre/post source bytes and is routed by its changed contract.

## Completed level 0 reviews

### lem-hp-analytic-polynomial-approximation-on-a-triangle

Reviewed all six steps: binomial tail suppression and its differentiated atom hold off the fixed transition strip; boundary factors can be omitted only outside the coordinate domain. The finite cover telescopes to unity up to exponentially small w0. Local Taylor errors and global polynomial growth balance with s=floor(epsilon n), and degree <=(4m+1)n. Small p uses the zero polynomial; interval projection preserves both endpoints by constant orthogonality and contracts derivative energy. Taylor/FTC supplier hypotheses hold on interior segments and pass to the closed convex cell by continuity. No corner or unweighted spectral assertion is inferred from a weighted norm.

### lem-hp-triangle-degree-uniform-strong-edge-lift

Checked cancellation q/t, p=0,1 zero branches, all three traces, weighted integrals for R and R prime, and sum <=8||q prime||^2. Transport has precisely the edge length square-root and extra cell diameter in L2. Vertex affine data plus three zero-endpoint lifts extend any compatible traces. This is the stated strong H1 edge bound, not an H1/2 stability assertion; Countable Choice is inherited solely through affine scaling.

### lem-hp-unweighted-legendre-derivative-tail

Checked repeated polynomial integration by parts: D^k((1-x^2)^k D^k P_n)=(-1)^k (n+k)!/(n-k)! P_n. All boundary terms vanish to order k; AC Sobolev representatives justify the same pairings for H^k inputs. Finite Bessel bounds and polynomial density give the L2 tail with increasing lambda_n. N=k-1 and k=0 contraction are included; no weighted coefficient completion is silently identified with ordinary H^k.

### lem-hp-weighted-analytic-corner-pointwise-control

Reviewed rectangle H2 extension with value and first derivative matching, weak cutoff errors, and mollification. Apply this fixed-order estimate separately to each derivative, not an arbitrary-order reflected extension. Weight lower bounds on annuli give r^(1-beta-j) times factorial bounds; integration of Hessian yields gradient r^(a-1), including beta=0 logarithm, and a unique corner limit from arc variation. Scaled regular-cell estimates and cap dyadic sums require 0<a<1-beta. Reader closed-cell correction matches actual mesh cells K subset closure(Omega), interior subset Omega. Countable Choice interfaces and actual derivative suppliers were checked; source He et al. v1 section 2.3 (12), Definition 1 confirms the weighted class, not a replacement for this local proof.

### lem-legendre-gauss-lobatto-nodes-are-distinct

Sign-changing-root product has fixed nonzero sign even when there are no sign changes; orthogonality forces at least p interior roots. Degree forces simplicity and exhausts roots, and Rolle supplies all p-1 derivative roots. p=1 gives exactly the endpoints. Reviewed exact polynomial normalization, orthogonality and Rolle supplier statements.

### thm-hp-simplex-weighted-spectral-projection

Weighted polynomial Gram forms are positive definite since barycentric weights are positive in the interior and bounded/integrable for alpha>=0. Finite orthogonal layers and completion give well-defined coefficient truncation. Increasing mu_n yields both inequalities termwise; finite sums extend by contraction. p=0 and m=ell equality/contraction cases hold. The theorem deliberately claims only the coefficient-defined scale and supplies no unweighted H1 estimate.

For the corner pointwise lemma, accept the reader repair: closed mesh triangles must lie in the polygon closure, with interiors in the domain; the proof and cap estimates remain valid. Source: https://arxiv.org/pdf/2404.18569v1, section 2.3 equation (12), Definition 1, PDF pp. 5–6. Legendre tail source: https://jschoeberl.github.io/iFEM/pversion/hpfem.html, section 30.2; local derivation checked independently. No item edited so far.

Checkpoint at level 0: later levels, refuter disposition and validation were pending; their completed reviews follow below.

## Completed level 1 reviews

### lem-variable-degree-polynomial-spaces-are-h1-conforming

Finite degrees admit a maximum on nonempty simplicial meshes, so the exact constant-degree W1,2 supplier applies. On boxes, cellwise smooth divergence identities give cancellation of equal traces with opposite normals and vanish on compact-test boundary faces. Cellwise derivatives are L2 because the mesh is finite. Empty mesh branch is explicit. Countable Choice is retained for Sobolev/divergence interfaces; no uniform degree assumption is inserted.

### thm-hp-analytic-p-convergence-on-fixed-tensor-mesh

Checked endpoint preservation, averaged endpoint H1 bound, derivative contraction, and anchored value-error factor two. Taylor degree p-1 applied to each derivative section yields (p+r+1)!/p! times R^(-p-r-1); fixed r<=d-1 polynomial losses are absorbed by q^p with Rq>1. The mixed norm controls coordinate projector products and the prefix telescoping identity is exact. Shared affine box faces differ by signed coordinate permutations, under which the endpoint-preserving projector commutes with reflection and tensor permutation. Reader conformity supplier now supplies global H1; all constants may depend on the fixed mesh.

### thm-hp-reference-interval-integrated-legendre-projection

Reader density/completeness argument canonically identifies H_L^0 with L2 and embeds H_L^s, s>=0, injectively through its coefficient model. Thus g is actually L1 on the finite interval, both primitives are absolutely continuous and FTC applies. Constant orthogonality gives both endpoint values; weighted tail at N=p-1 and ||e||2<=2||e prime||2 give sqrt(5) exactly. p=1 and s=0 work; no equivalence with derivative-based H^s is asserted. Countable Choice also covers density/completeness interfaces.

### thm-hp-simplex-p-dependent-face-trace-inverse

The geometric factor is 1/H_F=|F|/(d|K|), obtained from the facet-pyramid Jacobian H_F(1-t)^(d-1). Jacobi endpoint kernel gives (p+1)(p+d); p=0 constants saturate. Constant facet normal makes partial_n v degree <=p-1, giving p(p+d-1), zero at p=0. Shape scaling needs Countable Choice. Reader restriction from face to facet is essential: the argument requires dimension d-1 and a unique opposite vertex.

### thm-hp-triangle-unweighted-smooth-approximation

Reviewed S_n double primitive with left value/derivative anchors and uniform H2 stability; factorial derivative tail uses projection n-2 and s-2 derivatives. Tensor loss chooses s_b=r-max(1,b), t_j=r-max(1,j), so every mixed derivative order stays <=r and n>=s-1. Worst factorial ratio is exactly eta_(n,r). Smooth extension approximants and closed finite-dimensional Q_n justify the limit. Unique moment subtraction reduces full H^r to seminorm; degree r-1 and 2n are <=p. Affine scaling gives h^(r-1), and p>=4(r-2) bounds every factorial-product term below by p/4. Full Choice is inherited; no analytic growth control or optimal p-rate is claimed.

Accepted reader repairs: tensor conformity citation, canonical L2 coefficient realization, and facet restriction. The triangle construction uses actual ordinary Sobolev extension and moment-polynomial suppliers, rather than weighted spectral estimates.

## Completed level 2 reviews

### lem-hp-simplex-p-explicit-conforming-interpolant

Checked H2-to-H1 edge trace by smooth density, separate H1 traces of derivatives and distributional tangential identity; point-evaluation threshold 2>2/2 gives consistent vertex values. Reader reproduction/constant-orthogonality argument now proves common endpoints before strong-edge lifts. Empty bubble space gives an empty finite system; otherwise gradient Gram form is positive definite. Energy best approximation plus polynomial zero-trace Poincare gives the full scaled norm. All comparison polynomials have degree <= every p_E; constants do not require neighboring degree-ratio bounds. Final factorial estimate uses the independently reviewed ordinary H2 approximation, not the weighted scale. Full Choice suppliers are retained.

### thm-hp-corner-exponential-energy-convergence

Independently checked every local construction: noncap factorial bounds feed W1,infinity polynomial approximants; corner-incident edges use linear endpoint traces, opposite cap edges remain separated from the corner by shape regularity. Vertex correction and three strong-edge lifts preserve degree and common traces. Cap estimates use only gradient r^(a-1), not H2, and give h^a. For sufficiently fine meshes each cap has one corner; finite earlier k are absorbed using v=0. Squared error sum over O(k) cells gives sqrt(k)(exp(-bp_k)+sigma^(ak)), absorbed in exp(-eta k). N<=C k^3 has the correct direction k>=c N^(1/3). Mixed boundary conditions and additional Galerkin containment/norm equivalence are explicit. Source unchanged across pre/post snapshots; the touched obligation is audit enrichment of its supplier citation, not a mathematical repair.

### thm-hp-galerkin-energy-error-on-fixed-mesh

The exact form is the H1 inner product with continuity/coercivity constants both one. Trace matching supplies the finite-dimensional conforming tensor subspace; the analytic projector theorem supplies an admissible comparison under its full C1 and derivative-radius assumptions. Cea therefore transfers the fixed-mesh q^p bound with no h or simplex claim. The zero solution and p=1 branches are included.

### thm-hp-gll-top-mode-and-puniform-energy-equivalence

Independently checked division by (x^2-1)P_p prime, exactness through 2p-1 including p=1, top coefficient kappa_p/p, defect 2(p+1)/(p(2p+1)), and positivity by applying the squared-norm identity to cardinal polynomials. Tensor modal ratios multiply to <=3^d; each physical derivative pullback remains in Q_p. Constant gradients and zero/constant v require no division. Confirmed refuter missing measurability: bounded positive nonmeasurable a makes energy undefined for v=x_1. Repaired by measurable interior coefficient with specified pointwise closed-box values and bounds at all samples, and justified integrability in step 5.1. Weighted comparison factors follow by integral/sample sandwiches. Actual item consumers use unweighted stability or p=2 defect only; no mathematical consumer repair. Teukolsky arXiv:1412.2276 sections 2-3 eq. (12) confirms the normalization and correct author.

Accepted the reader endpoint-reproduction repair. The corner convergence obligation is reviewed_no_defect, change_kind audit_enrichment: item pre/post hashes agree, while the contract citation reflects the corrected closed-cell supplier. Refuter:68:1 is confirmed_fatal and locally repaired with confidence 1. Only its coefficient branch changes; unweighted identities remain intact. The paper at https://arxiv.org/pdf/1412.2276 is by Saul A. Teukolsky (title page), not Trefethen; normalized that bibliography entry in the edited theorem and manifest.

## Completed level 3 reviews

### thm-hp-galerkin-h-p-regularity-energy-bound

Checked both Hilbert norm branches, actual Cea factor M_a/alpha_a, arbitrary p_K>=1 and minimum incident trace degree m_K. Reader replacement invokes the exact finite-mesh zero-boundary polynomial W0 theorem at exponent two, avoiding an unproved general trace characterization. Its complete current cutoff/gluing proof was also read. J_K and h R_K bounds sum to the displayed chi-dependent energy estimate using one common interpolant, not glued independent q_K. Moment degree s_K-1 gives the h^(s_K-1) branch even at s_K=2; the additional r_K>=5 factorial branch keeps eta, (1+chi h_K^2), and all regularity constants. No optimal p-rate or control as r grows is inferred.

### thm-hp-gll-strang-error-with-aliasing-defect

Reader explicitly defines a_p as cellwise GLL stiffness plus mass. The repaired GLL supplier is used only for its unweighted inequalities, so no new coefficient condition is needed. Summing gives discrete coercivity >=1 and boundedness <=3^d via positive-weight Cauchy-Schwarz, while exact continuity is one. Exact restricted load makes its defect zero. The actual Strang statement then gives 1+M/alpha_p<=2 and defect/alpha_p<=defect inside the same infimum. Form defect remains explicit; neither consistency decay nor exact assembly is asserted.

### ex-hp-analytic-p-refinement-on-a-fixed-box

For u=(4-x)^(-1), x derivatives n!/(4-x)^(n+1) and zero y derivatives satisfy M=1/3,R=2 on the entire closed square; q=3/4 lies strictly above 1/R and below one. The exact H1 inner-product load is bounded and has this u as solution. The reviewed fixed-mesh analytic and Cea suppliers therefore give precisely the stated exponential estimate, with no hidden h-limit or boundary condition.

### ex-hp-reentrant-corner-h-versus-hp

Checked the actual L-shaped domain and branch 0<theta<3pi/2, gradient square lambda^2 r^(2lambda-2), and Frobenius Hessian square 2 lambda^2(1-lambda)^2 r^(2lambda-4). At lambda=2/3, H1 is finite while Hessian integral r^(-5/3) diverges on every positive-angle sub-sector. Reader now applies that divergence inside the nondegenerate triangle, proving positive distance of grad u from closed grad(P_p), including p=0. Homogeneous scaling is exactly h^(2/3). Weighted origin beta=1/2 leaves radial derivative power -5/6; square integral has exponent -2/3 after area factor and factorial j! is absorbed into exponential base times (j-2)!. Other corners are analytic. Only the two reentrant boundary edges vanish. The hp comparison invokes every grading/count/degree hypothesis and uses no cap H2.

Accepted reader repairs: precise zero-boundary membership supplier; explicit GLL discrete form; and restriction of the Hessian-divergence argument to the positive-angle sub-sector inside the reference triangle. No further mathematical source change is needed.

## Consumer scope and sources

Read actual direct item/reference uses of each changed Statement. The corner pointwise lemma is used by the corner convergence theorem and reentrant example: both use closed boundary triangles and the proved cap/regular estimates. The interval coefficient-realization theorem has no direct mathematical item consumer. The facet inverse theorem has no direct mathematical item consumer; its page use says simplex inverse trace and is compatible with facets. The GLL theorem has exactly two direct item consumers: the Strang theorem uses the unweighted H1 stability part (coefficient one), and the mass example uses the unchanged one-dimensional p=2 defect. Their source arguments remain sound; refreshed both full contract quotation mirrors without editing the examples mathematics. The A-page summary does not invoke the variable-coefficient branch. No affected item consumer outside batch 68 was found. No Statement or Definition of these consumers required repair, so no further-hop trigger arose.

The batch cross-batch dependency artifact contains page-context edges only: the spectral page and batch-63 curved-geometry page. Local results use affine cells and import no curved-map theorem; preserved existing owner resolution and all stable IDs. No published mathematical defect found or published item edited. No published-consumer ledger write was needed.

Consulted primary source sections: Schoberl section 30.2 (higher derivative tail) and section 30.4 including the entire triangle interpolation proof; He, Houston, Schwab and Wihler v1 section 2.3 equation (12)/Definition 1 and section 4.1 equations (29)-(31)/Theorem 2; Teukolsky sections 2-3, especially equation (12), PDF pp. 3-6. The local strong-edge and conservative triangle approximation arguments are independently proved and do not import the stronger optimal trace/rate assertions from source summaries. Opened Shen/Tang full PDF for source context but did not use its full chapter as proof evidence.

Bibliographic metadata alert to owner: lem-legendre-gauss-lobatto-nodes-are-distinct and ex-hp-gll-mass-top-mode-correction still attribute arXiv:1412.2276 to Trefethen; its title page names Saul A. Teukolsky. Their mathematics and source URL are sound. The edited GLL theorem now has the correct author; remaining bibliography-only normalization is recorded here without expanding the owed decision set.

## Final dispositions and checks

Exactly ten decisions are present: seven accepted_repair, one amended_repair (Strang), one reviewed_no_defect with change_kind audit_enrichment (corner convergence contract only), and one confirmed_fatal (refuter:68:1, repaired). Nine closed accuracy rows were appended through tools/defect-ledger.mjs: na71-b68-corner-closed-cells, na71-b68-tensor-conformity, na71-b68-coefficient-l2-realization, na71-b68-facet-restriction, na71-b68-edge-endpoints, na71-b68-zero-boundary-membership, na71-b68-specified-discrete-form, na71-b68-triangle-sector, and na71-b68-gll-measurability. Each completed repair has repair_confidence 1 and its decision references the corresponding row; the refuter decision references exactly one closed row. No mechanical-failure row was created.

The first strict contract run failed because regenerating the reader-added F6 citation in the Strang theorem revealed no numbered step explicitly cited F6. Added that label to step 1.1, where the discrete form is used, and regenerated its citation/derivation entry. Accordingly the touched Strang decision is amended_repair. The final source change is only that justification tag; no Statement/Definition or consumer interface changed.

Local commands and actual results:

- node tools/tsx-run.mjs tools/reflow.mts on each of the two locally edited GLL items: unchanged.
- node tools/tsx-run.mjs tools/precheck.mts items/thm-hp-gll-top-mode-and-puniform-energy-equivalence.md items/thm-hp-gll-strang-error-with-aliasing-defect.md: 2 checked, 0 failing.
- node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-68.proof-contracts.json --strict: 26/26 checked, 0 errors, 0 warnings after the F6 correction.
- node tools/rendercheck.mjs on those same two item paths: 2 files, no errors.
- node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-68.proof-contracts.json, then the same command with --require-reviewed: both exit 0; all 19 HIGH/CRITICAL items have specific complete independent alpha-batch-68 reviews.
- Invoked the two existing GLL descriptors through numericalFrontierGeometryChecks in tools/finite-smoke-numerical-frontier71-geometry.mjs: gll-p1-rule and gll-p2-top-correction both passed; this checks only those bounded fixtures, not the general mathematical result.
- Final required batched node tools/proof-layout.mjs items/thm-hp-gll-top-mode-and-puniform-energy-equivalence.md items/thm-hp-gll-strang-error-with-aliasing-defect.md: 2 items, 7 steps, 0 defects. No item edits followed.

Compared all nine routed touched source hashes against the immutable pre/post inventories before editing: each matched reader-post; eight differed from reader-pre, while corner convergence source did not change. Scope and original hash inventories were preserved. The refuter observed_sha256 is a combined carrier fingerprint (not its raw item digest); it is preserved verbatim in the decision. Raw reader-post GLL source digest was 711c53f6fcd1a65f3bc89218f9c74a9cc7ff9bc4c9b0c4633e6b4862283cadc6. Current local source digests:

- thm-hp-gll-top-mode-and-puniform-energy-equivalence: 2f3436ec32ce27652048dae43972ecc68ae252f0239b4ab2fb3bae9290901904.
- thm-hp-gll-strang-error-with-aliasing-defect: 1f767c6a6edc6993e014a07af10a77b49186554118da26c814de3469dc2ad0cf.

No mathematical blocker or escalation remains. Two bibliography-only author-name alerts are retained above for the owner. No agent dispatch, judge, stamp, engine gate battery, transition, publication, push or commit was performed. The engine owns decision sealing and subsequent gates.
